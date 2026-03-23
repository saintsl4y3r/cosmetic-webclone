(function () {
  function removeEmojisFromCtaText(str) {
    if (str == null || typeof str !== 'string') return str;
    try {
      return str.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').replace(/\s+/g, ' ').trim();
    } catch (e) {
      return str.replace(/\s+/g, ' ').trim();
    }
  }

  function replacePlaceholders(buttonElement, customerName, pointsBalance) {
    var textElement = buttonElement.querySelector(".loyalty-cta-points-text");

    if (textElement) {
      var html = textElement.innerHTML;

      // Store the original template if not already stored
      if (!textElement.getAttribute('data-original-template')) {
        // If the HTML still has placeholders, use it as-is
        // Otherwise, reconstruct by replacing values with placeholders
        var template = html;
        if (!html.includes('##points_balance##')) {
          // Replace the current points value with placeholder
          var pointsMatch = html.match(/\d+/);
          if (pointsMatch) {
            template = html.replace(pointsMatch[0], '##points_balance##');
          }
        }
        if (!html.includes('##customer_name##')) {
          // Replace the customer name with placeholder if we have it
          if (customerName) {
            template = template.replace(new RegExp(customerName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '##customer_name##');
          }
        }
        textElement.setAttribute('data-original-template', template);
      }

      // Get the stored template or use current HTML
      var template = textElement.getAttribute('data-original-template') || html;
      html = template.replace(/##customer_name##/g, customerName);
      html = html.replace(/##points_balance##/g, pointsBalance);
      textElement.innerHTML = html;
    }
  }

  function checkDrawerAvailability() {
    if (!window.loyaltyDrawer && !window.LoyaltyDrawer) {
      console.warn(
        'Loyalty Spotlight Button: Drawer not found. Make sure the "Loyalty Spotlight Drawer" app embed is enabled in Theme Settings > App Embeds.'
      );
    }
  }

  function matchesPattern(path, pattern) {
    if (!pattern.includes("*")) {
      return path === pattern;
    }

    let regexPattern = pattern
      .replace(/\*\*/g, "___DOUBLE_WILDCARD___") // Temporarily replace **
      .replace(/\*/g, "___SINGLE_WILDCARD___") // Temporarily replace *
      .replace(/[.+?^${}()|[\]\\]/g, "\\$&") // Escape regex metacharacters
      .replace(/___SINGLE_WILDCARD___/g, "[^/]*") // Single * matches any characters except /
      .replace(/___DOUBLE_WILDCARD___/g, ".*"); // ** matches any characters including /

    regexPattern = "^" + regexPattern + "$";

    const regex = new RegExp(regexPattern);
    return regex.test(path);
  }

  function shouldShowButton(currentPath, excludePatterns) {
    if (!excludePatterns || excludePatterns.trim() === "") {
      return true;
    }

    const patterns = excludePatterns
      .split(/\r?\n/) // Handle both \n and \r\n line endings
      .map((pattern) => pattern.trim())
      .filter((pattern) => pattern !== "");

    // Return true if NO patterns match (should show)
    return !patterns.some((pattern) => matchesPattern(currentPath, pattern));
  }

  function getCurrentPath() {
    return window.location.pathname;
  }

  function extractCtaData(blockElement) {
    const pointsBalance = parseInt(blockElement.getAttribute("data-points-balance") || "0", 10);
    const ctaTextElement = blockElement.querySelector(".loyalty-cta-points-text");
    const ctaText = ctaTextElement ? ctaTextElement.textContent.trim() : "";

    return {
      points_balance: pointsBalance,
      cta_text: ctaText != null ? removeEmojisFromCtaText(ctaText) : "",
    };
  }

  async function trackCtaExposure(blockElement, blockId) {
    if (!isMobileDevice()) return;
    if (!window.loyaltySpotlightTracking?.isAnalyticsReady()) return;

    // Prevent duplicate tracking
    if (blockElement.hasAttribute('data-cta-exposure-tracked')) {
      return;
    }
    blockElement.setAttribute('data-cta-exposure-tracked', 'true');

    try {
      const ctaData = extractCtaData(blockElement);
      const isLoggedIn = blockElement.getAttribute("data-is-logged-in") === "true";

      // Try to get customer context from drawer first (only if logged in)
      let customerContext = null;
      if (isLoggedIn) {
        if (window.loyaltyDrawer?.customerData) {
          customerContext = window.loyaltySpotlightTracking.extractCustomerContext(
            window.loyaltyDrawer.customerData,
            window.loyaltyDrawer.redemptionOptions,
            window.loyaltyDrawer.getCostInPoints?.bind(window.loyaltyDrawer)
          );
        } else if (window.LoyaltySpotlightClient) {
          // If drawer not initialized, fetch customer data
          try {
            const client = new window.LoyaltySpotlightClient({
              merchantId: window.merchantId,
              merchantGuid: window.merchantGuid || window.merchantId,
              storeId: window.storeId
            });
            const customerData = await client.fetchCustomerData();
            const redemptionOptions = await client.fetchRedemptionOptions();

            customerContext = window.loyaltySpotlightTracking.extractCustomerContext(
              customerData,
              redemptionOptions
            );
          } catch (error) {
            console.warn('[LoyaltySpotlightCTA] Could not fetch customer data for tracking:', error);
          }
        }
      }

      // Use same points source as CTA button text: getAvailablePoints(base from block) - same as initializeLoyaltyButton/replacePlaceholders
      const basePoints = parseInt(
        blockElement.getAttribute("data-original-points-balance") || blockElement.getAttribute("data-points-balance") || "0",
        10
      );
      const pointsForEvent = isLoggedIn ? getAvailablePoints(basePoints) : 0;

      const eventContext = {
        widget_component: 'cta_exposed',
        customer_logged_in: isLoggedIn,
        points_balance: pointsForEvent,
        cta_text: ctaData.cta_text || null,
        ...(customerContext || { tier_name: null, redemption_eligible: null })
      };

      window.spotlightAnalytics.trackExposure('cta_exposed', eventContext);

      console.log('[LoyaltySpotlightCTA] Successfully sent CTA exposure event', JSON.stringify(eventContext, null, 2));
    } catch (error) {
      console.error('[LoyaltySpotlightCTA] Error tracking exposure:', error);
    }
  }


  function getCustomerId() {
    // Try multiple sources for customer ID
    if (window.ShopifyAnalytics && window.ShopifyAnalytics.meta && window.ShopifyAnalytics.meta.page) {
      const customerId = window.ShopifyAnalytics.meta.page.customerId;
      if (customerId) return customerId;
    }

    // Try meta object
    if (window.meta && window.meta.page && window.meta.page.customerId) {
      return window.meta.page.customerId;
    }

    return null;
  }

  function getStorageKey(baseKey) {
    const customerId = getCustomerId();
    if (!customerId) {
      return baseKey; // Fallback to unscoped key if no customer ID
    }
    return `${baseKey}_${customerId}`;
  }

  function getStoredRedemptionInfo() {
    try {
      const key = getStorageKey('loyalty_stored_redemption');
      const stored = localStorage.getItem(key);
      if (!stored) return null;

      const data = JSON.parse(stored);
      // Validate it belongs to current customer
      const currentCustomerId = getCustomerId();
      if (data.customerId && data.customerId !== currentCustomerId) {
        return null;
      }
      return data;
    } catch (error) {
      return null;
    }
  }

  function getAvailablePoints(basePoints) {
    // Check for applied reward costs in localStorage
    try {
      const appliedCosts = localStorage.getItem('loyalty_applied_reward_costs');
      let totalDeducted = 0;

      if (appliedCosts) {
        const costs = JSON.parse(appliedCosts);
        Object.values(costs).forEach(cost => {
          totalDeducted += cost;
        });
      }

      // Also check stored redemption info - if discount is in appliedRewards, deduct points
      const storedRedemption = getStoredRedemptionInfo();
      if (storedRedemption && storedRedemption.pointsCost) {
        const appliedRewards = localStorage.getItem('loyalty_applied_rewards');
        if (appliedRewards) {
          const rewards = JSON.parse(appliedRewards);
          const normalizedStoredCode = storedRedemption.discountCode.toLowerCase().trim();
          const isApplied = rewards.some(r => r.toLowerCase().trim() === normalizedStoredCode);

          // If applied, check if cost is already in appliedRewardCosts
          if (isApplied) {
            const normalizedCode = storedRedemption.discountCode.toLowerCase().trim();
            const costInAppliedCosts = appliedCosts ? JSON.parse(appliedCosts)[normalizedCode] : null;
            // Only add if not already counted in appliedRewardCosts
            if (!costInAppliedCosts) {
              totalDeducted += storedRedemption.pointsCost;
            }
          }
        }
      }

      return Math.max(0, basePoints - totalDeducted);
    } catch (error) {
      console.error('Error reading applied reward costs:', error);
    }
    return basePoints;
  }

  function initializeLoyaltyButton(blockId, excludePatterns) {
    const blockElement = document.querySelector(
      ".loyalty-button-section-" + blockId
    );
    if (!blockElement) return;

    // A/B test: hide CTA for variant B (no CTA entry point). In theme editor, always show CTA for styling.
    if (!isThemeEditor()) {
      var abVariant = (typeof window !== 'undefined' && window.__spotlightAbVariant) || 'A';
      if (abVariant === 'B') {
        return;
      }
      // Show CTA only on actual mobile devices (not desktop with narrow window)
      if (!isMobileDevice()) {
        blockElement.style.display = 'none';
        return;
      }
    }

    const currentPath = getCurrentPath();
    const shouldShow = shouldShowButton(currentPath, excludePatterns);

    if (!shouldShow) {
      return;
    }

    const isLoggedIn = blockElement.getAttribute("data-is-logged-in") === "true";
    const customerName = blockElement.getAttribute("data-customer-name");
    const basePointsBalance = parseInt(blockElement.getAttribute("data-points-balance") || "0", 10);

    // Store original base points for future calculations
    if (!blockElement.getAttribute("data-original-points-balance")) {
      blockElement.setAttribute("data-original-points-balance", basePointsBalance.toString());
    }

    // Only calculate and replace placeholders if logged in
    if (isLoggedIn) {
      // Calculate available points (base points minus applied reward costs)
      const availablePoints = getAvailablePoints(basePointsBalance);
      replacePlaceholders(blockElement, customerName, availablePoints);
    }

    blockElement.style.display = "block";

    const ctaButton = blockElement.querySelector('.loyalty-cta-tile-button');
    if (ctaButton) {
      ctaButton.setAttribute('data-block-id', blockId);
    }

    // Sync cart state when CTA initializes (in case discounts were removed while drawer was closed)
    // This ensures CTA shows correct points even if drawer hasn't synced yet
    // Only sync if user is logged in
    if (isLoggedIn && window.loyaltyDrawer && typeof window.loyaltyDrawer.syncCartAndCta === 'function') {
      // Delay slightly to avoid blocking initialization
      setTimeout(() => {
        window.loyaltyDrawer.syncCartAndCta().catch(error => {
          console.error('Error syncing cart on CTA initialization:', error);
        });
      }, 500);
    }

    const updateExposureTimestamp = () => {
      const timestamp = Date.now();
      if (ctaButton) {
        ctaButton.setAttribute('data-exposure-timestamp', timestamp.toString());
      }
      return timestamp;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          updateExposureTimestamp();
          trackCtaExposure(blockElement, blockId);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px' });

    observer.observe(blockElement);

    setTimeout(() => {
      const rect = blockElement.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      if (isVisible && blockElement.style.display !== 'none') {
        updateExposureTimestamp();
        trackCtaExposure(blockElement, blockId);
      }
    }, 100);

    checkDrawerAvailability();
  }

  function isThemeEditor() {
    return window.Shopify && window.Shopify.designMode;
  }

  /**
   * Detect if the user is on a mobile device (not just narrow viewport).
   * Uses User-Agent so desktop with resized window does not show CTA/drawer.
   */
  function isMobileDevice() {
    if (typeof navigator === 'undefined') return false;
    if (navigator.userAgentData && typeof navigator.userAgentData.mobile === 'boolean') {
      return navigator.userAgentData.mobile;
    }
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Windows Phone/i.test(navigator.userAgent || '');
  }

  function openDrawer(blockId, exposureTimestamp) {
    if (!isThemeEditor() && !isMobileDevice()) {
      console.log('Loyalty Spotlight is only available on mobile devices');
      return;
    }

    // In theme editor, always allow opening drawer (don't redirect to login)
    if (isThemeEditor()) {
      if (window.loyaltyDrawer) {
        window.loyaltyDrawer.openDrawer();
      } else {
        console.error('Loyalty drawer not initialized. Make sure the Loyalty Spotlight Drawer app embed is enabled.');
      }
      return;
    }

    // Check if user is logged in
    const customerId = getCustomerId();
    if (!customerId) {
      // User is not logged in - track click before redirecting to login
      const blockElement = document.querySelector(".loyalty-button-section-" + blockId);
      if (blockElement && window.loyaltySpotlightTracking?.trackCtaClickForLogin) {
        const ctaData = extractCtaData(blockElement);
        window.loyaltySpotlightTracking.trackCtaClickForLogin(ctaData);
      }
      
      // Small delay to ensure analytics event is sent before redirect
      setTimeout(() => {
        redirectToLogin();
      }, 150);
      return;
    }

    if (window.loyaltyDrawer) {
      window.loyaltyDrawer.openDrawer();
    } else {
      console.error('Loyalty drawer not initialized. Make sure the Loyalty Spotlight Drawer app embed is enabled.');
    }
  }

  function redirectToLogin() {
    // Get current URL and add openSpotlightDrawer parameter
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('openSpotlightDrawer', 'true');

    // Build the return URL (pathname + search params, excluding hash)
    // Shopify expects a relative path that is URL-encoded
    const returnUrl = currentUrl.pathname + currentUrl.search;

    // Detect Legacy vs NCA
    // NCA stores: routes.account_login_url is usually just '/account' (redirects to NCA)
    // Legacy stores: routes.account_login_url is '/account/login' (actual legacy login page)
    // We can't reliably detect in Liquid, so we default to NCA and only use legacy
    // if the URL explicitly contains '/account/login' (not just '/account')
    const legacyLoginUrl = window.legacyLoginUrl || '';
    // Check if URL contains '/account/login' (legacy) vs just '/account' (NCA redirect)
    // Handle both relative and absolute URLs
    const urlPath = legacyLoginUrl.includes('://') 
      ? new URL(legacyLoginUrl).pathname 
      : legacyLoginUrl.split('?')[0]; // Remove query params for relative URLs
    const isLegacy = legacyLoginUrl && urlPath.includes('/account/login');
    
    // Debug: Log detection result
    console.log('[LoyaltySpotlightCTA] Account type detection:', {
      legacyLoginUrl: legacyLoginUrl,
      isLegacy: isLegacy,
      detectedType: isLegacy ? 'Legacy' : 'NCA'
    });
    
    if (isLegacy) {
      // LEGACY ACCOUNTS: Use routes.account_login_url with return_url parameter
      // Legacy accounts often ignore return_url, so we'll use sessionStorage as fallback
      console.log('[LoyaltySpotlightCTA] Using Legacy Customer Accounts login');
      
      // Store return URL in sessionStorage as fallback (legacy often ignores return_url)
      sessionStorage.setItem('loyalty_legacy_return_url', returnUrl);
      console.log('[LoyaltySpotlightCTA] Stored return URL for legacy fallback:', returnUrl);
      
      // Build legacy login URL with return_url parameter
      const loginUrl = new URL(legacyLoginUrl, window.location.origin);
      loginUrl.searchParams.set('return_url', returnUrl);
      
      console.log('[LoyaltySpotlightCTA] Legacy login URL:', loginUrl.toString());
      window.location.href = loginUrl.toString();
    } else {
      // NCA (Native Customer Accounts): Use customer_authentication/login with return_to
      // DO NOT MODIFY THIS - NCA logic must remain unchanged
      console.log('[LoyaltySpotlightCTA] Using NCA (Native Customer Accounts) login');
      const loginUrl = new URL('/customer_authentication/login', window.location.origin);
      loginUrl.searchParams.set('return_to', returnUrl);
      
      console.log('[LoyaltySpotlightCTA] NCA login URL:', loginUrl.toString());
      window.location.href = loginUrl.toString();
    }
  }

  // Expose the initialization function globally
  window.loyaltySpotlightCta = {
    init: initializeLoyaltyButton,
    openDrawer: openDrawer,
  };
})();
