/**
 * Loyalty Drawer - Handles drawer UI and data fetching
 */

/**
 * @typedef {Object} LoyaltySpotlightDrawerEventObject
 * @property {Function} preventDefault - Prevent the default action
 * @property {boolean} defaultPrevented - Whether the default action has been prevented
 * @property {LoyaltyDrawer} drawer - The drawer instance
 * @property {string} type - The event name
 * @property {Object} payload - The event payload
 */

class LoyaltyDrawer {
  // Static plugin registry
  static plugins = [];

  /**
   * Register a plugin class to be instantiated with each drawer
   * @param {Function} PluginClass - Plugin constructor
   */
  static registerPlugin(PluginClass) {
    LoyaltyDrawer.plugins.push(PluginClass);
  }

  constructor(config = {}) {
    // Event system
    this.listeners = new Map();
    this.pluginInstances = [];

    this.merchantId = config.merchantId || null;

    // Initialize API client
    this.client = new window.LoyaltySpotlightClient({
      merchantId: config.merchantId,
      merchantGuid: config.merchantGuid,
      storeId: config.storeId
    });

    // Display settings with defaults
    this.currency = config.currency || 'USD';
    this.currencySymbol = this.getCurrencySymbol(this.currency);
    this.dateFormat = config.dateFormat || 'long';
    this.showPointsExpiry = config.showPointsExpiry !== undefined ? config.showPointsExpiry : true;

    // Label configuration with defaults
    this.labels = {
      expiryLabel: config.labels?.expiryLabel || 'exp.',
      pointsLabel: config.labels?.pointsLabel || 'points',
      pointsWorthLabel: config.labels?.pointsWorthLabel || '',
      tierSuffix: ((config.labels?.tierSuffix || '').trim()).substring(0, 20),
      directRewardsLabel: config.labels?.directRewardsLabel || 'Free'
    };

    // Requirement text templates
    this.requirementTexts = {
      cartValue: config.requirementTexts?.cartValue || 'Requires {value} in cart',
      item: config.requirementTexts?.item || 'Requires item in cart',
      points: config.requirementTexts?.points || 'Requires ##points## more pts',
      daysLeft: config.requirementTexts?.daysLeft || '{days} day left'
    };

    // Button text configuration with defaults
    this.buttonTexts = {
      applyReward: config.buttonTexts?.applyReward || 'Apply to cart',
      removeReward: config.buttonTexts?.removeReward || 'Remove from cart'
    };

    // Internal state
    this.customerData = null;
    this.redemptionOptions = [];
    this.appliedRewards = new Set(this.getAppliedRewards());
    this.redeemedOptions = this.getRedeemedOptions(); // Map of optionId -> discount code
    this.appliedRewardCosts = this.getAppliedRewardCosts(); // Map of discountCode -> pointsCost
    this.isRedeeming = false; // Flag to prevent cart update listeners from interfering during redemption flow
    this.isEditor = this.isThemeEditor(); // Check if in theme editor
    this.cartState = null; // Store current cart state (total, items, etc.)
    this.abortControllers = new Map(); // Track in-flight requests for cancellation
    this.cartNeedsRefresh = false; // Track if cart was modified (for page refresh on close)
    this.loadingRewards = new Set(); // Track rewards currently being processed (discount codes or option IDs)
    this.appliedOptionData = new Map();
    this.appliedOptionDataById = new Map();

    // Cache DOM elements
    this.overlay = document.getElementById('loyalty-drawer-overlay');
    this.drawer = document.getElementById('loyalty-drawer');
    this.contentDiv = document.getElementById('loyalty-drawer-content');
    this.header = document.getElementById('loyalty-drawer-header');

    // Hide drawer/CTA on desktop devices (body class used by CSS); allow in theme editor
    if (!this.isThemeEditor() && !this.isMobileDevice() && document.body) {
      document.body.classList.add('loyalty-spotlight-desktop');
    }

    // Initialize plugins
    this.initPlugins(config);

    // Initialize swipe handlers
    this.initSwipeHandlers();

    // Listen for cart updates (even when drawer is closed) to sync CTA buttons
    this.initCartUpdateListener();

    // Sync cart state on initialization (in case discounts were removed while drawer was closed)
    // Process any pending redemptions from previous session
    // Do this asynchronously so it doesn't block initialization
    setTimeout(async () => {
      try {
        // Process pending redemptions first (if drawer was closed during redemption)
        await this.processPendingRedemptions();
        await this.syncAppliedRewardsWithCart();
        this._updateCtaButtonsFromStorage();
      } catch (error) {
        console.error('Error syncing cart on initialization:', error);
      }
    }, 1000); // Wait a bit for page to fully load

    // Check for URL parameter to auto-open drawer after login
    this.checkAutoOpenDrawer();

    // Dispatch init event
    this.dispatchEvent('init', { config });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Event System
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Register an event listener
   * @param {string} event - Event name
   * @param {Function} callback - Handler function
   * @returns {Function} Unsubscribe function
   */
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);

    // Return unsubscribe function
    return () => this.off(event, callback);
  }

  /**
   * Remove an event listener
   * @param {string} event - Event name
   * @param {Function} callback - Handler to remove
   */
  off(event, callback) {
    this.listeners.get(event)?.delete(callback);
  }

  /**
   * Dispatch an event to all registered listeners
   * @param {string} event - Event name
   * @param {Object} payload - Event data
   */
  dispatchEvent(event, payload = {}) {
    const callbacks = this.listeners.get(event);

    /**
     * @type {LoyaltySpotlightDrawerEventObject}
     */
    const eventObject = { payload, drawer: this, type: event };

    Object.assign(eventObject, {
      preventDefault: () => {
        eventObject.defaultPrevented = true;
      },
      defaultPrevented: false,
    });

    if (callbacks) {
      callbacks.forEach(cb => {
        try {
          cb(eventObject);
        } catch (e) {
          console.error(`[LoyaltyDrawer] Plugin error on "${event}":`, e);
        }
      });
    }

    return eventObject;
  }

  /**
   * Initialize all registered plugins
   * @param {Object} config - Drawer configuration
   */
  initPlugins(config) {
    LoyaltyDrawer.plugins.forEach(PluginClass => {
      try {
        const instance = new PluginClass(this, config);
        this.pluginInstances.push(instance);
      } catch (e) {
        console.error('[LoyaltyDrawer] Plugin initialization failed:', e);
      }
    });
  }

  /**
   * Check if running in Shopify theme editor
   */
  isThemeEditor() {
    return window.Shopify && window.Shopify.designMode;
  }

  /**
   * Detect if the user is on a mobile device (not just narrow viewport).
   * Uses User-Agent so desktop with resized window does not show drawer/CTA.
   */
  isMobileDevice() {
    if (typeof navigator === 'undefined') return false;
    if (navigator.userAgentData && typeof navigator.userAgentData.mobile === 'boolean') {
      return navigator.userAgentData.mobile;
    }
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Windows Phone/i.test(navigator.userAgent || '');
  }

  /**
   * Get currency symbol from currency code
   */
  getCurrencySymbol(currencyCode) {
    try {
      // Format a zero amount and extract just the symbol part
      const parts = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode
      }).formatToParts(0);
      const symbolPart = parts.find(part => part.type === 'currency');
      return symbolPart ? symbolPart.value : '$';
    } catch (e) {
      return '$'; // Fallback for invalid currency code
    }
  }

  /**
   * Format currency with the store's currency code
   */
  formatCurrency(amount) {
    try {
      // Use the shop's locale for formatting, defaulting to 'en-US'.
      const locale = window.Shopify?.locale || 'en-US';
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: this.currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount);
    } catch (error) {
      // Fallback if currency code is invalid, using the symbol from config.
      console.error('Could not format currency:', error);
      const value = Number(amount).toFixed(2);
      return `${this.currencySymbol}${value}`;
    }
  }

  /**
   * Format date based on the configured format setting
   */
  formatExpiryDate(date) {
    if (this.dateFormat === 'numeric') {
      // Numeric format: MM/DD/YYYY
      return date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
    } else {
      // Long format: December 20, 2026 (default)
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }
  }

  /**
   * Get applied rewards from localStorage
   */
  getAppliedRewards() {
    try {
      const applied = localStorage.getItem('loyalty_applied_rewards');
      const rewards = applied ? JSON.parse(applied) : [];
      // Filter out "CLEAR" which is not a real discount code
      return rewards.filter(code => code && code.toUpperCase() !== 'CLEAR');
    } catch (error) {
      return [];
    }
  }

  /**
   * Save applied rewards to localStorage
   */
  saveAppliedRewards() {
    try {
      localStorage.setItem('loyalty_applied_rewards', JSON.stringify([...this.appliedRewards]));
    } catch (error) {
      console.error('Error saving applied rewards:', error);
    }
  }

  /**
   * Get redeemed options from localStorage
   */
  getRedeemedOptions() {
    try {
      const redeemed = localStorage.getItem('loyalty_redeemed_options');
      return redeemed ? JSON.parse(redeemed) : {};
    } catch (error) {
      return {};
    }
  }

  /**
   * Save redeemed options to localStorage
   */
  saveRedeemedOptions() {
    try {
      localStorage.setItem('loyalty_redeemed_options', JSON.stringify(this.redeemedOptions));
    } catch (error) {
      console.error('Error saving redeemed options:', error);
    }
  }

  /**
   * Get applied reward costs from localStorage
   * Returns a Map of discountCode -> pointsCost
   */
  getAppliedRewardCosts() {
    try {
      const costs = localStorage.getItem('loyalty_applied_reward_costs');
      const parsed = costs ? JSON.parse(costs) : {};
      // Convert object to Map for easier manipulation
      return new Map(Object.entries(parsed));
    } catch (error) {
      console.error('Error reading applied reward costs:', error);
      return new Map();
    }
  }

  /**
   * Save applied reward costs to localStorage
   */
  saveAppliedRewardCosts() {
    try {
      // Convert Map to object for JSON serialization
      const costsObj = Object.fromEntries(this.appliedRewardCosts);
      localStorage.setItem('loyalty_applied_reward_costs', JSON.stringify(costsObj));
    } catch (error) {
      console.error('Error saving applied reward costs:', error);
    }
  }

  /**
   * Get customer-scoped localStorage key
   */
  _getStorageKey(baseKey) {
    const customerId = this.getCustomerId();
    if (!customerId) {
      return baseKey; // Fallback to unscoped key if no customer ID
    }
    return `${baseKey}_${customerId}`;
  }

  /**
   * Get stored redemption info from localStorage (customer-scoped)
   * Returns: { discountCode, optionId, pointsCost } or null
   */
  getStoredRedemptionInfo() {
    try {
      const key = this._getStorageKey('loyalty_stored_redemption');
      const stored = localStorage.getItem(key);
      if (!stored) return null;

      const data = JSON.parse(stored);
      // Validate it belongs to current customer
      const currentCustomerId = this.getCustomerId();
      if (data.customerId && data.customerId !== currentCustomerId) {
        // Customer changed, clear old data
        localStorage.removeItem(key);
        return null;
      }
      return data;
    } catch (error) {
      console.error('Error reading stored redemption info:', error);
      return null;
    }
  }

  /**
   * Save redemption info to localStorage (customer-scoped)
   * @param {string} discountCode - The discount code
   * @param {number} optionId - The redemption option ID
   * @param {number} pointsCost - The points cost
   */
  saveStoredRedemptionInfo(discountCode, optionId, pointsCost) {
    try {
      const customerId = this.getCustomerId();
      if (!customerId) {
        console.warn('Cannot save redemption info: no customer ID');
        return;
      }

      const key = this._getStorageKey('loyalty_stored_redemption');
      const data = {
        customerId,
        discountCode,
        optionId,
        pointsCost
      };
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving stored redemption info:', error);
    }
  }

  /**
   * Clear stored redemption info from localStorage
   */
  clearStoredRedemptionInfo() {
    try {
      const key = this._getStorageKey('loyalty_stored_redemption');
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error clearing stored redemption info:', error);
    }
  }

  /**
   * Get pending redemptions queue from localStorage
   */
  getPendingRedemptions() {
    try {
      const key = this._getStorageKey('loyalty_pending_redemptions');
      const pending = localStorage.getItem(key);
      return pending ? JSON.parse(pending) : [];
    } catch (error) {
      console.error('Error reading pending redemptions:', error);
      return [];
    }
  }

  /**
   * Save pending redemptions queue to localStorage
   */
  savePendingRedemptions(pendingRedemptions) {
    try {
      const key = this._getStorageKey('loyalty_pending_redemptions');
      localStorage.setItem(key, JSON.stringify(pendingRedemptions));
    } catch (error) {
      console.error('Error saving pending redemptions:', error);
    }
  }

  /**
   * Add pending redemption to queue
   */
  addPendingRedemption(optionId, discountCode, status, costInPoints) {
    const pending = this.getPendingRedemptions();
    const existingIndex = pending.findIndex(p => p.optionId === optionId);
    
    const pendingRedemption = {
      optionId,
      discountCode: discountCode || null,
      status, // 'pending_redemption' or 'pending_cart_update'
      costInPoints,
      timestamp: Date.now()
    };

    if (existingIndex >= 0) {
      pending[existingIndex] = pendingRedemption;
    } else {
      pending.push(pendingRedemption);
    }

    this.savePendingRedemptions(pending);
  }

  /**
   * Remove pending redemption from queue
   */
  removePendingRedemption(optionId) {
    const pending = this.getPendingRedemptions();
    const filtered = pending.filter(p => p.optionId !== optionId);
    this.savePendingRedemptions(filtered);
  }

  /**
   * Process pending redemptions on page load
   */
  async processPendingRedemptions() {
    const pending = this.getPendingRedemptions();
    if (pending.length === 0) return;

    console.log('[LoyaltyDrawer] Processing pending redemptions:', pending);

    for (const pendingRedemption of pending) {
      try {
        if (pendingRedemption.status === 'pending_redemption') {
          // Redemption not completed - this shouldn't happen often, but handle it
          console.warn('[LoyaltyDrawer] Found incomplete redemption, skipping:', pendingRedemption);
          this.removePendingRedemption(pendingRedemption.optionId);
          continue;
        }

        if (pendingRedemption.status === 'pending_cart_update' && pendingRedemption.discountCode) {
          // Discount code received but not applied to cart - apply it now
          const discountCode = pendingRedemption.discountCode;
          
          // Check if discount is already in cart
          const cart = await this.client.getCart();
          const appliedCodes = this._extractDiscountCodes(cart);
          const normalizedCode = discountCode.toLowerCase().trim();
          const isAlreadyApplied = appliedCodes.some(code => code.toLowerCase().trim() === normalizedCode);

          if (!isAlreadyApplied) {
            // Apply discount to cart
            await this.client.applyDiscount(discountCode);
            
            // Update state
            this.redeemedOptions[pendingRedemption.optionId] = discountCode;
            this.appliedRewards.add(discountCode);
            this.saveRedeemedOptions();
            this.saveAppliedRewards();

            if (pendingRedemption.costInPoints > 0) {
              this.appliedRewardCosts.set(normalizedCode, pendingRedemption.costInPoints);
              this.saveAppliedRewardCosts();
            }

            // Update cart UI programmatically (no page refresh)
            const updatedCart = await this.client.getCart();
            this.client._dispatchCartUpdateEvents(updatedCart);
            
            console.log('[LoyaltyDrawer] Completed pending redemption:', discountCode);
          } else {
            console.log('[LoyaltyDrawer] Discount already applied:', discountCode);
          }

          // Remove from queue
          this.removePendingRedemption(pendingRedemption.optionId);
        }
      } catch (error) {
        console.error('[LoyaltyDrawer] Error processing pending redemption:', error);
        // Keep in queue for retry, but add retry count
        if (!pendingRedemption.retryCount) {
          pendingRedemption.retryCount = 1;
        } else {
          pendingRedemption.retryCount++;
        }
        
        // Remove after 3 retries
        if (pendingRedemption.retryCount >= 3) {
          console.error('[LoyaltyDrawer] Max retries reached, removing from queue:', pendingRedemption);
          this.removePendingRedemption(pendingRedemption.optionId);
        } else {
          this.savePendingRedemptions(this.getPendingRedemptions());
        }
      }
    }

    // Refresh drawer if open
    if (this.drawer && this.drawer.classList.contains('active')) {
      await this.fetchData();
    } else {
      // Update CTA buttons even if drawer is closed
      this._updateCtaButtonsFromStorage();
    }
  }

  static ERROR_BANNER_DEFAULT = "That didn't work. Try again in a moment.";
  static ERROR_BANNER_COLLECTION_NOT_APPLICABLE = "This discount isn't valid for the items in your cart";

  _optionHasCollectionRestriction(code) {
    const optionId = this._findOptionIdForCode(code);
    const option = optionId ? this.redemptionOptions.find(opt => opt.id === optionId) : null;
    return !!(option && option.collection_ids && option.collection_ids.length > 0);
  }

  _showErrorBanner(message) {
    const text = message != null ? message : LoyaltyDrawer.ERROR_BANNER_DEFAULT;
    const DURATION_MS = 5000;
    const id = 'loyalty-spotlight-error-banner';
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('div');
      el.id = id;
      el.setAttribute('role', 'alert');
      el.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);bottom:20px;z-index:999999;min-width:301px;max-width:calc(100vw - 32px);background:#FEEBEC;border:1px solid #FDBDBE;border-radius:8px;padding:12px 16px;font-family:Inter,sans-serif;font-weight:500;font-size:14px;line-height:1.25;letter-spacing:0;color:#1a1a1a;opacity:1;box-sizing:border-box;white-space:nowrap;';
      document.body.appendChild(el);
    }
    if (window._loyaltyErrorBannerTimeout) {
      clearTimeout(window._loyaltyErrorBannerTimeout);
    }
    el.textContent = text;
    el.style.display = 'block';
    window._loyaltyErrorBannerTimeout = setTimeout(() => {
      el.style.display = 'none';
      window._loyaltyErrorBannerTimeout = null;
    }, DURATION_MS);
  }

  _extractDiscountCodes(cart) {
    const codes = [];
    if (cart.cart_level_discount_applications) {
      cart.cart_level_discount_applications.forEach(discount => {
        if (discount.type === 'discount_code' && discount.title) {
          codes.push(discount.title);
        }
      });
    }
    if (cart.discount_code && !codes.includes(cart.discount_code)) {
      codes.push(cart.discount_code);
    }
    return codes;
  }

  /**
   * Wait for pending redemptions to complete
   * Polls the queue until all are complete or timeout is reached
   * @param {number} timeout - Maximum time to wait in milliseconds (default: 10000ms)
   * @returns {Promise<boolean>} - True if all completed, false if timeout
   */
  async waitForPendingRedemptions(timeout = 10000) {
    const startTime = Date.now();
    const pollInterval = 200; // Check every 200ms

    return new Promise((resolve) => {
      const checkPending = () => {
        const pending = this.getPendingRedemptions();
        const elapsed = Date.now() - startTime;

        // If no pending redemptions, we're done
        if (pending.length === 0) {
          resolve(true);
          return;
        }

        // If timeout reached, resolve with false
        if (elapsed >= timeout) {
          console.warn('[LoyaltyDrawer] Timeout waiting for pending redemptions');
          resolve(false);
          return;
        }

        // Check again after poll interval
        setTimeout(checkPending, pollInterval);
      };

      checkPending();
    });
  }

  /**
   * Wait for loading rewards to complete
   * Polls the loadingRewards set until all are complete or timeout is reached
   * @param {number} timeout - Maximum time to wait in milliseconds (default: 5000ms)
   * @returns {Promise<boolean>} - True if all completed, false if timeout
   */
  async waitForLoadingRewards(timeout = 5000) {
    const startTime = Date.now();
    const pollInterval = 200; // Check every 200ms

    return new Promise((resolve) => {
      const checkLoading = () => {
        const elapsed = Date.now() - startTime;

        // If no loading rewards, we're done
        if (this.loadingRewards.size === 0) {
          resolve(true);
          return;
        }

        // If timeout reached, resolve with false
        if (elapsed >= timeout) {
          console.warn('[LoyaltyDrawer] Timeout waiting for loading rewards');
          resolve(false);
          return;
        }

        // Check again after poll interval
        setTimeout(checkLoading, pollInterval);
      };

      checkLoading();
    });
  }

  _getCustomer() {
    return this.customerData?.customer || this.customerData;
  }

  _getCustomerName(customer = null) {
    const c = customer || this._getCustomer();
    return c?.first_name || c?.name || '';
  }

  _getPointsWorth(customer = null, availablePoints = null) {
    const c = customer || this._getCustomer();
    const points = availablePoints !== null ? availablePoints : this.getAvailablePoints();

    // Calculate worth proportionally based on the original conversion rate
    // If customer has points_worth, use it to calculate the conversion rate
    if (c?.points_worth && c?.points_balance && c.points_balance > 0) {
      const conversionRate = c.points_worth / c.points_balance;
      return (points * conversionRate).toFixed(2);
    }

    // Fallback to default calculation (100 points = $1)
    return (points / 100).toFixed(2);
  }

  _getTotalDeductedFromStorage() {
    try {
      const appliedCosts = localStorage.getItem('loyalty_applied_reward_costs');
      if (!appliedCosts) return 0;
      const costs = JSON.parse(appliedCosts);
      return Object.values(costs).reduce((sum, cost) => sum + cost, 0);
    } catch (error) {
      return 0;
    }
  }

  getAvailablePoints() {
    const customer = this._getCustomer();
    const actualPoints = customer?.points_balance || 0;
    const totalDeducted = Array.from(this.appliedRewardCosts.values()).reduce((sum, cost) => sum + cost, 0);
    return Math.max(0, actualPoints - totalDeducted);
  }

  _updatePointsDisplayOnly() {
    const availablePoints = this.getAvailablePoints();
    const pointsValueElement = document.getElementById('loyalty-points-value');
    const pointsWorthElement = document.getElementById('loyalty-points-worth');

    if (pointsValueElement) {
      pointsValueElement.textContent = `${availablePoints} ${this.labels.pointsLabel}`;
      pointsValueElement.setAttribute('data-points', availablePoints);
    }

    if (pointsWorthElement) {
      const pointsWorth = this._getPointsWorth(null, availablePoints);
      var prefix = (this.labels.pointsWorthLabel || '').trim();
      pointsWorthElement.textContent = prefix ? prefix + ' ' + this.formatCurrency(pointsWorth) : this.formatCurrency(pointsWorth);
    }

    this._updateCtaButtons();
  }

  _getOrCreateTemplate(textElement, customerName, currentPoints) {
    let template = textElement.getAttribute('data-original-template');
    if (template) return template;

    template = textElement.innerHTML;
    if (currentPoints) {
      template = template.replace(new RegExp(currentPoints.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '##points_balance##');
    }
    if (customerName) {
      template = template.replace(new RegExp(customerName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '##customer_name##');
    }
    textElement.setAttribute('data-original-template', template);
    return template;
  }

  _updateCtaSection(section, availablePoints, customerName) {
    const textElement = section.querySelector('.loyalty-cta-points-text');
    if (!textElement) return;

    if (!section.getAttribute('data-original-points-balance')) {
      const basePoints = section.getAttribute('data-points-balance') || '0';
      section.setAttribute('data-original-points-balance', basePoints);
    }

    const currentPoints = section.getAttribute('data-points-balance');
    const storedName = section.getAttribute('data-customer-name') || customerName;
    const template = this._getOrCreateTemplate(textElement, storedName, currentPoints);

    let html = template;
    html = html.replace(/##customer_name##/g, customerName);
    html = html.replace(/##points_balance##/g, availablePoints.toString());
    textElement.innerHTML = html;
  }

  _updateCtaButtons() {
    const availablePoints = this.getAvailablePoints();
    const customerName = this._getCustomerName();
    const ctaSections = document.querySelectorAll('[data-loyalty-cta]');

    ctaSections.forEach(section => {
      // Only update CTA buttons for logged-in users
      const isLoggedIn = section.getAttribute('data-is-logged-in') === 'true';
      if (!isLoggedIn) {
        return; // Skip logged-out users - let Liquid-rendered text stay as-is
      }
      this._updateCtaSection(section, availablePoints, customerName);
    });
  }

  _updateRewardsListOnly(excludeOptionId = null) {
    const yourRewardsList = document.getElementById('loyalty-your-rewards-list');
    if (!yourRewardsList) return;

    const availablePoints = this.getAvailablePoints();
    const customer = this._getCustomer();
    const pointRedemptions = customer.point_redemptions || [];
    const activeRedemptions = pointRedemptions.filter(r => {
      if (!r.approved || r.code_uses) return false;
      const redemptionOption = r.redemption_option;
      if (redemptionOption && (redemptionOption.discount_type === 'custom' || redemptionOption.discount_type === 'custom_reward' || redemptionOption.discount_type === 'product')) {
        return false;
      }
      return true;
    });
    const pointsWorth = this._getPointsWorth(customer, availablePoints);

    // Get affordable options (user has enough points OR already applied)
    const affordableOptions = this.getAffordableRedemptionOptions(this.redemptionOptions, availablePoints);

    // Find the next reward to unlock (cheapest unaffordable option)
    const nextReward = this.findNextRewardToUnlock(availablePoints);

    let combinedHTML = '';
    if (activeRedemptions.length > 0) {
      combinedHTML += this.renderRedemptions(activeRedemptions);
    }
    if (affordableOptions.length > 0) {
      combinedHTML += this.renderRedemptionOptions(affordableOptions, availablePoints);
    }
    if (nextReward) {
      combinedHTML += this.renderLockedReward(nextReward, availablePoints, pointsWorth);
    }

    yourRewardsList.innerHTML = combinedHTML;
  }

  /**
   * Check for URL parameter to auto-open drawer after login
   */
  checkAutoOpenDrawer() {
    // Only check on actual mobile devices (not desktop with narrow window)
    if (!this.isThemeEditor() && !this.isMobileDevice()) {
      return;
    }

    // Check for openSpotlightDrawer parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    let shouldOpenDrawer = urlParams.get('openSpotlightDrawer') === 'true';
    
    // LEGACY ACCOUNTS FALLBACK: Check sessionStorage if parameter is missing
    // Legacy accounts often ignore return_url and redirect to /account page
    // This fallback only applies to legacy accounts, NCA logic remains untouched
    if (!shouldOpenDrawer && window.location.pathname === '/account') {
      const storedReturnUrl = sessionStorage.getItem('loyalty_legacy_return_url');
      if (storedReturnUrl && storedReturnUrl.includes('openSpotlightDrawer=true')) {
        console.log('[LoyaltyDrawer] Legacy account redirect detected, using stored return URL:', storedReturnUrl);
        // Redirect to the stored return URL
        window.location.href = storedReturnUrl;
        sessionStorage.removeItem('loyalty_legacy_return_url');
        return; // Exit early, will redirect
      }
    }
    
    if (shouldOpenDrawer) {
      // Remove the parameter from URL to clean it up
      urlParams.delete('openSpotlightDrawer');
      const newUrl = window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : '') + window.location.hash;
      window.history.replaceState({}, '', newUrl);
      
      // Clear legacy return URL if it exists (successful redirect)
      sessionStorage.removeItem('loyalty_legacy_return_url');

      // Track successful login after CTA click (if session exists)
      // Wait a bit for customer data to be loaded first
      setTimeout(() => {
        if (window.loyaltySpotlightTracking?.trackCtaLoginSuccess) {
          window.loyaltySpotlightTracking.trackCtaLoginSuccess(this);
        }

        // Open drawer after tracking
        this.openDrawer().catch(error => {
          console.error('Error auto-opening drawer after login:', error);
        });
      }, 500);
    }
  }

  /**
   * Open the drawer and fetch customer data
   */
  async openDrawer(transition = true) {
    // Safety check: Don't open drawer on desktop devices (not just narrow viewport)
    // Allow in theme editor (design mode) for preview purposes
    if (!this.isThemeEditor() && !this.isMobileDevice()) {
      console.log('[LoyaltyDrawer] Drawer is only available on mobile devices');
      return;
    }

    this.dispatchEvent('beforeOpen', { transition });

    if (!this.overlay || !this.drawer) {
      console.error('Drawer elements not found');
      return;
    }

    // Reset cart refresh flag when opening drawer
    this.cartNeedsRefresh = false;

    // Process any pending redemptions when drawer opens (in case user closed and reopened quickly)
    const pending = this.getPendingRedemptions();
    if (pending.length > 0) {
      // Process asynchronously so it doesn't block drawer opening
      setTimeout(async () => {
        await this.processPendingRedemptions();
      }, 500);
    }

    const openPromise = new Promise(resolve => {
      return transition ? this.drawer.addEventListener('transitionend', resolve, { once: true }) : resolve();
    });

    if (transition) {
      this.drawer.classList.remove('no-transition');
    } else {
      this.drawer.classList.add('no-transition');
    }
    this.overlay.classList.add('active');
    this.drawer.classList.add('active');
    document.body.style.overflow = 'hidden';

    openPromise.then(() => {
      this.dispatchEvent('afterOpen', { transition });
      this.initSwipeHandlers();
    });

    const fetchEvent = this.dispatchEvent('beforeFetch');
    if (fetchEvent.defaultPrevented) {
      return;
    }

    // Sync applied rewards with cart state
    await this.syncAppliedRewardsWithCart();

    // Update CTA buttons after syncing (in case cart changed while drawer was closed)
    this._updateCtaButtonsFromStorage();

    // Fetch all data (this will also update cart state)
    await this.fetchData();

    // Track drawer open event after data is loaded
    if (window.loyaltySpotlightTracking && window.loyaltySpotlightTracking.trackDrawerOpen) {
      window.loyaltySpotlightTracking.trackDrawerOpen(this);
    }
  }

  /**
   * Update cart state for restriction checking
   * @param {Object} cart - Optional cart object to use, otherwise fetches fresh
   */
  async updateCartState(cart = null) {
    try {
      const cartData = cart || await this.client.getCart();

      // Store cart state for restriction validation
      this.cartState = {
        total: cartData.total_price || 0, // Total in cents
        items: cartData.items || [],
        productIds: (cartData.items || []).map(item => item.product_id).filter(Boolean),
        variantIds: (cartData.items || []).map(item => item.variant_id).filter(Boolean),
        collectionIds: [] // Collections need to be fetched from product data if needed
      };

      // Extract collection IDs from items if available
      if (cartData.items) {
        cartData.items.forEach(item => {
          if (item.product_collections) {
            item.product_collections.forEach(collection => {
              if (collection.id && !this.cartState.collectionIds.includes(collection.id)) {
                this.cartState.collectionIds.push(collection.id);
              }
            });
          }
        });
      }

    } catch (error) {
      console.error('Error updating cart state:', error);
      this.cartState = null;
    }
  }

  async syncAppliedRewardsWithCart(pendingCode = null, cart = null, skipUIUpdate = false) {
    try {
      const cartData = cart || await this.client.getCart();
      
      // Update cartState before tracking to ensure cart data is available
      await this.updateCartState(cartData);
      
      // Ensure customerData and redemptionOptions are loaded before tracking
      // (needed for points_balance, tier_name, redemption_eligible, etc.)
      if (!this.customerData || !this.redemptionOptions || this.redemptionOptions.length === 0) {
        try {
          const [customerData, redemptionOptions] = await Promise.all([
            this.customerData ? Promise.resolve(this.customerData) : this.client.fetchCustomerData(),
            (this.redemptionOptions && this.redemptionOptions.length > 0) ? Promise.resolve(this.redemptionOptions) : this.client.fetchRedemptionOptions()
          ]);
          this.customerData = customerData;
          this.redemptionOptions = redemptionOptions;
        } catch (error) {
          console.warn('[LoyaltyDrawer] Failed to load customerData/redemptionOptions for tracking:', error);
        }
      }
      
      const cartItemCount = (cartData.items || []).length;
      
      // Build list of ALL discount codes in cart (regardless of applicable status)
      // Includes discounts with applicable: false (e.g. min spend not met) so we keep them in state
      const allDiscountCodesInCart = [];
      if (cartData.discount_codes && Array.isArray(cartData.discount_codes)) {
        cartData.discount_codes.forEach(discount => {
          if (discount.code) {
            allDiscountCodesInCart.push(discount.code);
          }
        });
      }
      if (cartData.discount_code && !allDiscountCodesInCart.includes(cartData.discount_code)) {
        allDiscountCodesInCart.push(cartData.discount_code);
      }
      // Only include discount_code type (exclude automatic discounts / store-wide promotions)
      if (cartData.cart_level_discount_applications && Array.isArray(cartData.cart_level_discount_applications)) {
        cartData.cart_level_discount_applications.forEach(discount => {
          if (discount.type !== 'discount_code') return;
          const code = discount.title || discount.code;
          if (code && !allDiscountCodesInCart.includes(code)) {
            allDiscountCodesInCart.push(code);
          }
        });
      }

      // Build list of APPLICABLE discount codes (for UI display)
      // cart_level_discount_applications is the source of truth for actually applicable discounts
      const appliedDiscountCodes = [];
      if (cartData.cart_level_discount_applications) {
        cartData.cart_level_discount_applications.forEach(discount => {
          if (discount.type === 'discount_code' && discount.title) {
            appliedDiscountCodes.push(discount.title);
          }
        });
      }

      // Filter out "CLEAR" which is not a real discount code but a special endpoint used to clear discounts
      const filteredDiscountCodes = appliedDiscountCodes.filter(code => 
        code && code.toUpperCase() !== 'CLEAR'
      );
      
      const allDiscountCodesNormalized = allDiscountCodesInCart
        .filter(code => code && code.toUpperCase() !== 'CLEAR')
        .map(code => code.toLowerCase().trim());

      // If cart is empty, remove discount from cart and clear stored redemption
      if (cartItemCount === 0) {
        const storedRedemptionForEmptyCart = this.getStoredRedemptionInfo();
        if (storedRedemptionForEmptyCart) {
          // Track removal event before removing
          if (window.loyaltySpotlightTracking) {
            const rewardData = await this._extractRewardDataForTracking(
              storedRedemptionForEmptyCart.discountCode,
              storedRedemptionForEmptyCart.optionId,
              storedRedemptionForEmptyCart.pointsCost
            );
            if (rewardData && window.loyaltySpotlightTracking.trackRewardRemoved) {
              window.loyaltySpotlightTracking.trackRewardRemoved(rewardData, this, true, cartData);
            }
          }
          try {
            await this.removeDiscount(storedRedemptionForEmptyCart.discountCode);
          } catch (error) {
            console.warn('[LoyaltyDrawer] Error removing discount from empty cart:', error);
          }
          this.clearStoredRedemptionInfo();
          this.appliedRewards.clear();
          this.appliedRewardCosts.clear();
          this.saveAppliedRewards();
          this.saveAppliedRewardCosts();
          this._updateCtaButtonsFromStorage();
          return;
        }
      }

      const removedCodes = [];
      const currentApplied = [...this.appliedRewards];

      // Remove rewards no longer in cart, or in cart but not applicable (e.g. applicable: false)
      for (const code of currentApplied) {
        const normalizedCode = code.toLowerCase().trim();
        if (normalizedCode === 'clear') {
          this.appliedRewards.delete(code);
          removedCodes.push(normalizedCode);
          this.appliedRewardCosts.delete(normalizedCode);
          continue;
        }
        
        const isInCart = allDiscountCodesNormalized.includes(normalizedCode);
        const isPending = pendingCode && normalizedCode === pendingCode;
        const isApplicable = isInCart && this.client.isDiscountApplicableInCart(cartData, code);

        if ((!isInCart && !isPending) || (isInCart && !isApplicable)) {
          if (isInCart && !isApplicable) {
            this.client.removeDiscount(code).catch(() => {});
            this._cleanupOptionData(code, this._findOptionIdForCode(code));
          }
          // Track removal event before removing
          if (window.loyaltySpotlightTracking) {
            // Use _extractRewardDataForTracking which handles cases where redemptionOptions might be empty
            const optionId = this._findOptionIdForCode(code);
            const savedCost = this.appliedRewardCosts.get(normalizedCode);
            const rewardData = await this._extractRewardDataForTracking(code, optionId, savedCost);
            
            if (rewardData && window.loyaltySpotlightTracking.trackRewardRemoved) {
              // Track removal from checkout/cart (not from spotlight widget)
              window.loyaltySpotlightTracking.trackRewardRemoved(rewardData, this, true, cartData);
            }
          }
          
          this.appliedRewards.delete(code);
          removedCodes.push(normalizedCode);

          // Keep redeemedOptions mapping (permanent record)
          this.appliedRewardCosts.delete(normalizedCode);

          // If this removed code matches the stored redemption, clear stored redemption info
          const storedRedemption = this.getStoredRedemptionInfo();
          if (storedRedemption && storedRedemption.discountCode.toLowerCase().trim() === normalizedCode) {
            this.clearStoredRedemptionInfo();
          }
        }
      }

      // Add rewards that are in cart (regardless of applicable status) but not tracked
      const addedCodes = [];
      allDiscountCodesInCart.forEach(cartCode => {
        if (!cartCode || cartCode.toUpperCase() === 'CLEAR') return;
        
        const normalizedCartCode = cartCode.toLowerCase().trim();
        const isTracked = Array.from(this.appliedRewards).some(
          trackedCode => trackedCode.toLowerCase().trim() === normalizedCartCode
        );

        if (!isTracked) {
          this.appliedRewards.add(cartCode);
          addedCodes.push(normalizedCartCode);
        }
      });

      // Restore stored redemption info for any discounts in cart (applicable or not)
      const storedRedemption = this.getStoredRedemptionInfo();
      if (storedRedemption) {
        const normalizedStoredCode = storedRedemption.discountCode.toLowerCase().trim();
        // Check if stored redemption's discount is in cart (regardless of applicable status)
        if (allDiscountCodesNormalized.includes(normalizedStoredCode)) {
          // Ensure discount is in appliedRewards (might already be there)
          const discountInAppliedRewards = Array.from(this.appliedRewards).some(
            code => code.toLowerCase().trim() === normalizedStoredCode
          );
          if (!discountInAppliedRewards) {
            this.appliedRewards.add(storedRedemption.discountCode);
          }
          
          // Restore the redemption info
          this.redeemedOptions[storedRedemption.optionId] = storedRedemption.discountCode;
          this.appliedRewardCosts.set(normalizedStoredCode, storedRedemption.pointsCost);
          
          const option = this.redemptionOptions.find(opt => opt.id === storedRedemption.optionId);
          if (option) {
            this._storeOptionData(storedRedemption.discountCode, storedRedemption.optionId, option);
          }
        }
      }
      
      // For newly added codes without stored redemption, try to restore cost from redeemedOptions
      if (addedCodes.length > 0) {
        addedCodes.forEach(code => {
          const normalizedCode = code.toLowerCase().trim();
          if (!storedRedemption || storedRedemption.discountCode.toLowerCase().trim() !== normalizedCode) {
            this._restoreCostForDiscountCode(code);
          }
        });
      }

      this.saveAppliedRewards();
      this.saveRedeemedOptions();
      this.saveAppliedRewardCosts();

      // Skip UI updates if requested (e.g., when called from redeemOption which handles its own final render)
      if (!skipUIUpdate && (removedCodes.length > 0 || addedCodes.length > 0)) {
        if (!this.drawer || !this.drawer.classList.contains('active')) {
          this._updateCtaButtonsFromStorage();
        } else {
          this._updatePointsDisplayOnly();
          this._updateRewardsListOnly();
          this._updateCtaButtons();
        }
      }

    } catch (error) {
      console.error('Error syncing applied rewards:', error);
    }
  }

  /**
   * Restore cost for a discount code from redeemedOptions
   */
  _restoreCostForDiscountCode(normalizedCode) {
    // Also restore option data if available
    if (this.appliedRewardCosts.has(normalizedCode)) {
      return; // Already have cost
    }

    // Find optionId from redeemedOptions
    let optionId = null;
    for (const [optId, code] of Object.entries(this.redeemedOptions)) {
      if (code.toLowerCase().trim() === normalizedCode) {
        optionId = optId;
        break;
      }
    }

    // If found and redemptionOptions are loaded, restore cost and option data
    if (optionId && this.redemptionOptions && this.redemptionOptions.length > 0) {
      const option = this.redemptionOptions.find(opt => opt.id === optionId);
      if (option) {
        const costInPoints = this.getCostInPoints(option);
        if (costInPoints > 0) {
          this.appliedRewardCosts.set(normalizedCode, costInPoints);
        }
        this._storeOptionData(code, optionId, option);
      }
    }
  }

  async syncCartAndCta() {
    try {
      await this.syncAppliedRewardsWithCart();
      this._updateCtaButtonsFromStorage();
    } catch (error) {
      console.error('Error syncing cart and CTA:', error);
    }
  }

  /**
   * Close the drawer
   */
  closeDrawer() {
    this.dispatchEvent('beforeClose');

    this._cancelAllRequests();

    if (this.overlay && this.drawer) {
      const closePromise = new Promise(resolve => {
        return this.drawer.addEventListener('transitionend', resolve, { once: true });
      });

      this.overlay.classList.remove('active');
      this.drawer.classList.remove('active');

      closePromise.then(() => {
        // Ensure overlay is completely removed and body overflow is reset
        if (this.overlay) {
          this.overlay.classList.remove('active');
        }
        document.body.style.overflow = '';
        this.dispatchEvent('afterClose');

        // Don't wait for operations - let them complete in background
        // When operations complete, they will:
        // 1. Call fetch('/discount/CODE') to apply discount (no page refresh needed)
        // 2. Fetch updated cart via /cart.js
        // 3. Update cart drawer UI directly via _updateCartDrawerUI()
        // 4. Dispatch cart:updated events for theme compatibility
        // 
        // No page refresh needed - everything updates via fetch() and DOM manipulation
      });
    }
  }

  /**
   * Cancel all in-flight requests
   * Excludes requests that are part of pending redemptions (to allow background processing)
   */
  _cancelAllRequests() {
    const pending = this.getPendingRedemptions();
    const pendingOptionIds = new Set(pending.map(p => p.optionId.toString()));
    
    this.abortControllers.forEach((controller, requestId) => {
      // Don't abort requests for pending redemptions - let them complete in background
      const isPendingRedemption = requestId.includes('redeemOption_') && 
        pendingOptionIds.has(requestId.match(/redeemOption_(\d+)/)?.[1] || '');
      
      if (!isPendingRedemption) {
        controller.abort();
        this.abortControllers.delete(requestId);
      }
    });
  }

  initCartUpdateListener() {
    let syncTimeout = null;
    const debouncedSync = async () => {
      // Skip if we're in the middle of a redemption flow to avoid flickering
      if (this.isRedeeming) {
        return;
      }
      clearTimeout(syncTimeout);
      syncTimeout = setTimeout(async () => {
        try {
          if (this.drawer && this.drawer.classList.contains('active')) {
            // Drawer is open - refresh it with cart changes
            await this.refreshOnCartChange();
          } else {
            // Drawer is closed - just sync and update CTA
            await this.syncAppliedRewardsWithCart();
            this._updateCtaButtonsFromStorage();
          }
        } catch (error) {
          console.error('Error syncing on cart update:', error);
        }
      }, 500);
    };

    const handleCartUpdate = debouncedSync;

    if (typeof window.jQuery !== 'undefined') {
      window.jQuery(document).on('cart:updated', handleCartUpdate);
      window.jQuery(document).on('ajaxCart:updated', handleCartUpdate);
    }

    window.addEventListener('cart:updated', handleCartUpdate);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(debouncedSync, 300);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        setTimeout(debouncedSync, 300);
      }
    });

    window.addEventListener('focus', debouncedSync);

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          debouncedSync();
        }
      });
    }, { threshold: 0.1 });

    const observeCTAs = () => {
      const ctaSections = document.querySelectorAll('[data-loyalty-cta]');
      ctaSections.forEach(section => {
        ctaObserver.observe(section);
        if (section.offsetParent !== null || section.style.display !== 'none') {
          debouncedSync();
        }
      });
    };

    observeCTAs();
    setTimeout(observeCTAs, 500);
    setTimeout(observeCTAs, 1000);
    setTimeout(observeCTAs, 2000);

    if (document.readyState === 'complete') {
      setTimeout(debouncedSync, 1500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(debouncedSync, 1500);
      });
    }

    const handleBeforeUnload = () => {
      this._cancelAllRequests();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    this._cartUpdateCleanup = () => {
      clearTimeout(syncTimeout);
      if (typeof window.jQuery !== 'undefined') {
        window.jQuery(document).off('cart:updated', handleCartUpdate);
        window.jQuery(document).off('ajaxCart:updated', handleCartUpdate);
      }
      window.removeEventListener('cart:updated', handleCartUpdate);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', debouncedSync);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      ctaObserver.disconnect();
    };
  }

  _getBasePointsFromSection(section, textElement) {
    let basePoints = parseInt(section.getAttribute('data-original-points-balance') || '0', 10);

    if (!basePoints) {
      basePoints = parseInt(section.getAttribute('data-points-balance') || '0', 10);
      if (basePoints > 0) {
        section.setAttribute('data-original-points-balance', basePoints.toString());
      }
    }

    if (!basePoints) {
      const currentText = textElement.textContent || textElement.innerHTML;
      const pointsMatch = currentText.match(/\d+/);
      if (pointsMatch) {
        basePoints = parseInt(pointsMatch[0], 10) + this._getTotalDeductedFromStorage();
        if (basePoints > 0) {
          section.setAttribute('data-original-points-balance', basePoints.toString());
        }
      }
    }

    return basePoints;
  }

  _updateCtaButtonsFromStorage() {
    const ctaSections = document.querySelectorAll('[data-loyalty-cta]');

    ctaSections.forEach(section => {
      // Only update CTA buttons for logged-in users
      const isLoggedIn = section.getAttribute('data-is-logged-in') === 'true';
      if (!isLoggedIn) {
        return; // Skip logged-out users - let Liquid-rendered text stay as-is
      }

      const textElement = section.querySelector('.loyalty-cta-points-text');
      if (!textElement) return;

      const basePoints = this._getBasePointsFromSection(section, textElement);
      const totalDeducted = this._getTotalDeductedFromStorage();
      const availablePoints = Math.max(0, basePoints - totalDeducted);

      let customerName = section.getAttribute('data-customer-name') || '';
      if (!customerName && this.customerData) {
        customerName = this._getCustomerName();
      }

      const currentHtml = textElement.innerHTML;
      const storedName = section.getAttribute('data-customer-name') || customerName;
      const pointsMatch = currentHtml.match(/\d+/);
      const template = this._getOrCreateTemplate(textElement, storedName, pointsMatch ? pointsMatch[0] : null);

      let html = template;
      html = html.replace(/##customer_name##/g, customerName);
      html = html.replace(/##points_balance##/g, availablePoints.toString());
      textElement.innerHTML = html;
    });
  }

  /**
   * Initialize swipe-down-to-close gesture on drawer header (mobile only)
   */
  initSwipeHandlers() {
    if (!this.isMobileDevice() || !this.header) return;

    let startY = 0;

    this.header.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1 && this.drawer?.classList.contains('active')) {
        startY = e.touches[0].clientY;
      }
    }, { passive: true });

    this.header.addEventListener('touchmove', (e) => {
      if (startY && e.touches.length === 1) {
        const deltaY = e.touches[0].clientY - startY;
        if (deltaY > 0) e.preventDefault(); // Prevent scroll when swiping down
      }
    }, { passive: false });

    this.header.addEventListener('touchend', (e) => {
      if (!startY) return;

      const deltaY = e.changedTouches[0].clientY - startY;
      if (deltaY > this.drawer.offsetHeight * 0.2) {
        this.closeDrawer();
      }
      startY = 0;
    }, { passive: true });
  }

  /**
   * Fetch all data and render drawer
   */
  async fetchData() {
    const requestId = `fetchData_${Date.now()}`;
    const abortController = new AbortController();
    this.abortControllers.set(requestId, abortController);

    try {
      const [customerData, redemptionOptions] = await Promise.all([
        this.client.fetchCustomerData(),
        this.client.fetchRedemptionOptions(),
        this.updateCartState()
      ]);

      if (abortController.signal.aborted) {
        return;
      }

      this.customerData = customerData;
      this.redemptionOptions = redemptionOptions;

      // Sync with cart state first - this will detect if discounts were removed
      // and properly update appliedRewards, appliedRewardCosts, etc.
      await this.syncAppliedRewardsWithCart();

      // Restore costs for applied rewards that might not have costs tracked yet
      // This handles the case where rewards were applied before redemptionOptions were loaded
      if (this.redemptionOptions && this.redemptionOptions.length > 0) {
        this._restoreMissingRewardCosts();
      }

      // Update CTA buttons with correct points (after costs are restored)
      this._updateCtaButtons();

      this.renderDrawerContent();
    } catch (error) {
      if (abortController.signal.aborted) {
        return;
      }
      console.error('Error fetching data:', error);
      const message = error.message === 'Customer not logged in'
        ? 'Please log in to view your rewards'
        : 'Unable to load rewards. Please try again later.';
      this.renderError(message);
    } finally {
      this.abortControllers.delete(requestId);
    }
  }

  /**
   * Restore missing reward costs for applied rewards
   * Called after redemptionOptions are loaded
   */
  _restoreMissingRewardCosts() {
    // For each applied reward, check if we have its cost tracked
    this.appliedRewards.forEach(code => {
      const normalizedCode = code.toLowerCase().trim();

      // Skip if we already have the cost
      if (this.appliedRewardCosts.has(normalizedCode)) {
        return;
      }

      // Try to find the optionId for this code
      let optionId = null;
      for (const [optId, discountCode] of Object.entries(this.redeemedOptions)) {
        if (discountCode.toLowerCase().trim() === normalizedCode) {
          optionId = optId;
          break;
        }
      }

      // If we found the optionId, restore the cost and option data
      if (optionId) {
        const option = this.redemptionOptions.find(opt => opt.id === optionId);
        if (option) {
          const costInPoints = this.getCostInPoints(option);
          if (costInPoints > 0) {
            this.appliedRewardCosts.set(normalizedCode, costInPoints);
          }
        this._storeOptionData(code, optionId, option);
      }
    }
    // Direct rewards (redemptions) have 0 cost, so we don't track them
    });

    this.saveAppliedRewardCosts();
  }

  /**
   * Refresh drawer content when cart changes (call this after cart updates)
   */
  async refreshOnCartChange() {
    if (!this.drawer || !this.drawer.classList.contains('active')) {
      return; // Don't refresh if drawer is closed
    }

    // Skip if we're in the middle of a redemption flow to avoid flickering
    if (this.isRedeeming) {
      return;
    }

    try {
      await this.updateCartState();
      await this.syncAppliedRewardsWithCart();

      // Ensure costs are restored after syncing
      if (this.redemptionOptions && this.redemptionOptions.length > 0) {
        this._restoreMissingRewardCosts();
        this.saveAppliedRewardCosts();
      }

      this.renderDrawerContent();
    } catch (error) {
      console.error('Error refreshing drawer on cart change:', error);
    }
  }

  /**
   * Get customer email from Shopify
   */
  getCustomerEmail() {
    // Try multiple sources for customer email
    if (window.ShopifyAnalytics && window.ShopifyAnalytics.meta && window.ShopifyAnalytics.meta.page) {
      const customerEmail = window.ShopifyAnalytics.meta.page.customerEmail;
      if (customerEmail) return customerEmail;
    }

    // Try meta object
    if (window.meta && window.meta.page && window.meta.page.customerEmail) {
      return window.meta.page.customerEmail;
    }

    return null;
  }

  /**
   * Get customer ID from Shopify
   */
  getCustomerId() {
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

  /**
   * Render VIP tier section
   */
  renderVipTier(customer) {
    const vipTierSection = document.getElementById('loyalty-tier-section');
    const vipTierLabelElement = document.getElementById('loyalty-tier-label');
    const vipTierBenefitElement = document.getElementById('loyalty-tier-benefit');

    if (!vipTierSection) return;

    const vipTier = customer.vip_tier || null;
    const vipTierName = (vipTier && vipTier.name) || customer.vip_tier_name;

    // Hide tier section if no tier name
    if (!vipTierName) {
      vipTierSection.style.display = 'none';
      return;
    }

    // Update tier section content
    const multiplier = vipTier?.points_multiplier;

    if (vipTierLabelElement) {
      var tierSuffix = (this.labels.tierSuffix || '').trim();
      vipTierLabelElement.textContent = tierSuffix ? vipTierName + ' ' + tierSuffix : vipTierName;
    }

    if (vipTierBenefitElement) {
      let benefitText = 'VIP benefits active';
      if (multiplier) {
        benefitText = this.merchantId === '223465'
          ? '10 pts per $1 USD spent'
          : `${multiplier}x pts per ${this.currencySymbol} spent`;
      }
      vipTierBenefitElement.textContent = benefitText;
    }
  }

  /**
   * Render drawer content with customer data
   */
  renderDrawerContent() {
    // Hide loading, show content
    const loadingElement = document.getElementById('loyalty-loading');
    const errorElement = document.getElementById('loyalty-error');
    const headerElement = document.getElementById('loyalty-drawer-header');
    const pointsSectionElement = document.getElementById('loyalty-points-section');

    if (loadingElement) loadingElement.style.display = 'none';
    if (errorElement) errorElement.style.display = 'none';
    if (headerElement) headerElement.style.display = 'block';

    // Show greeting
    const greetingElement = document.querySelector('.loyalty-drawer-greeting');
    if (greetingElement) {
      greetingElement.style.display = 'block';
    }

    if (pointsSectionElement) pointsSectionElement.style.display = 'block';

    const customer = this._getCustomer();
    const actualPoints = customer.points_balance || 0;
    const availablePoints = this.getAvailablePoints();
    const firstName = this._getCustomerName(customer) || 'Member';
    const pointsWorth = this._getPointsWorth(customer, availablePoints);
    const pointRedemptions = customer.point_redemptions || [];
    const activeRedemptions = pointRedemptions.filter(r => {
      if (!r.approved || r.code_uses) return false;
      const redemptionOption = r.redemption_option;
      if (redemptionOption && (redemptionOption.discount_type === 'custom' || redemptionOption.discount_type === 'custom_reward' || redemptionOption.discount_type === 'product')) {
        return false;
      }
      return true;
    });

    // Render VIP tier section
    this.renderVipTier(customer);

    // Update points section - display available points (after deductions)
    const pointsValueElement = document.getElementById('loyalty-points-value');
    const userNameElement = document.getElementById('loyalty-user-name');
    const pointsWorthElement = document.getElementById('loyalty-points-worth');
    const expiryElement = document.getElementById('loyalty-points-expiry');

    if (pointsValueElement) {
      pointsValueElement.textContent = `${availablePoints} ${this.labels.pointsLabel}`;
      pointsValueElement.setAttribute('data-points', availablePoints);
    }

    if (userNameElement) {
      userNameElement.textContent = firstName;
    }

    if (pointsWorthElement) {
      var prefix = (this.labels.pointsWorthLabel || '').trim();
      pointsWorthElement.textContent = prefix ? prefix + ' ' + this.formatCurrency(pointsWorth) : this.formatCurrency(pointsWorth);
    }

    // Format and display expiry date (if enabled and available)
    const pointsExpireAt = customer.points_expire_at || customer.next_points_expire_on;

    if (expiryElement) {
      if (this.showPointsExpiry && pointsExpireAt) {
        const expiryDate = new Date(pointsExpireAt);
        const expiryString = this.formatExpiryDate(expiryDate);
        expiryElement.textContent = `${this.labels.expiryLabel} ${expiryString}`;
        expiryElement.style.display = '';
      } else {
        expiryElement.style.display = 'none';
      }
    }

    // Update Your Rewards section - combine both existing rewards and available options
    const yourRewardsSection = document.getElementById('loyalty-your-rewards-section');
    const yourRewardsList = document.getElementById('loyalty-your-rewards-list');

    // Get affordable options (user has enough points OR already applied)
    const affordableOptions = this.getAffordableRedemptionOptions(this.redemptionOptions, availablePoints);

    // Find the next reward to unlock (cheapest unaffordable option)
    const nextReward = this.findNextRewardToUnlock(availablePoints);

    // Combine both sections
    const hasRewards = activeRedemptions.length > 0 || affordableOptions.length > 0 || nextReward;

    if (hasRewards) {
      let combinedHTML = '';

      // Process active redemptions (sorted by availability)
      if (activeRedemptions.length > 0) {
        combinedHTML += this.renderRedemptions(activeRedemptions);
      }

      // Process available redemption options (sorted by availability and value)
      if (affordableOptions.length > 0) {
        combinedHTML += this.renderRedemptionOptions(affordableOptions, availablePoints);
      }

      // Add next reward to unlock (only the cheapest unaffordable option)
      if (nextReward) {
        combinedHTML += this.renderLockedReward(nextReward, availablePoints, pointsWorth);
      }

      if (yourRewardsList) {
        yourRewardsList.innerHTML = combinedHTML;
      }
      if (yourRewardsSection) {
        yourRewardsSection.style.display = 'block';
      }
    } else {
      if (yourRewardsSection) {
        yourRewardsSection.style.display = 'none';
      }
    }

    // Hide the Available Rewards section since we're combining them
    const availableRewardsSection = document.getElementById('loyalty-available-rewards-section');
    if (availableRewardsSection) {
      availableRewardsSection.style.display = 'none';
    }
  }

  /**
   * Sort active redemptions by expiry and availability
   * Rewards expiring soon appear first (sorted by urgency), then by requirements
   * @param {Array} redemptions - Array of active redemptions
   * @returns {Array} - Sorted array of redemptions
   */
  sortActiveRedemptions(redemptions) {
    // First, filter by expiration (expiring first)
    const expiring = [];
    const notExpiring = [];

    redemptions.forEach(redemption => {
      if (this.isExpiringSoon(redemption)) {
        expiring.push(redemption);
      } else {
        notExpiring.push(redemption);
      }
    });

    // Sort expiring by urgency (days until expiry) - lower days = more urgent = first
    this.sortByExpiryUrgency(expiring);

    // Within not expiring group, categorize by requirements
    const notExpiringNoRequirements = [];
    const notExpiringWithUnmetRequirements = [];

    notExpiring.forEach(redemption => {
      const redemptionOption = redemption.redemption_option;
      const hasRequirements = this.hasRestrictions(redemptionOption);
      const requirementsMet = hasRequirements ? this.areRestrictionsMet(redemptionOption) : true;

      if (!hasRequirements || requirementsMet) {
        notExpiringNoRequirements.push(redemption);
      } else {
        notExpiringWithUnmetRequirements.push(redemption);
      }
    });

    // Combine: expiring first (all expiring, sorted by urgency), then not expiring (no requirements, then unmet requirements)
    return [
      ...expiring,
      ...notExpiringNoRequirements,
      ...notExpiringWithUnmetRequirements
    ];
  }

  /**
   * Render redemptions list
   * Sorts redemptions by expiry and availability before rendering
   */
  renderRedemptions(redemptions) {
    // Sort redemptions according to the specified logic
    const sortedRedemptions = this.sortActiveRedemptions(redemptions);

    return sortedRedemptions.map(redemption => this.renderRedemption(redemption)).join('');
  }

  /**
   * Render redemption options list
   * Note: options passed here should already be filtered to include affordable + applied rewards
   */
  renderRedemptionOptions(options, userPoints) {
    // Options are already filtered in renderDrawerContent, so we just sort and render
    // Sort rewards according to the specified logic
    const sortedOptions = this.sortRewardsByAvailability(options);

    return sortedOptions.map(option => this.renderRedemptionOption(option, userPoints)).join('');
  }

  /**
   * Get affordable redemption options
   * @param {Array} options - Array of redemption options
   * @param {number} userPoints - User's points
   * @returns {Array} - Array of affordable redemption options
   */
  getAffordableRedemptionOptions(options, userPoints) {
    return options.filter(option => {
      if (!this.isGeneralRedemption(option)) {
        return false;
      }

      const costInPoints = this.getCostInPoints(option);
      const discountCode = this.redeemedOptions[option.id];
      const isApplied = discountCode && this.appliedRewards.has(discountCode);
      return userPoints >= costInPoints || isApplied;
    });
  }

  /**
   * Check if a redemption option is a general redemption
   * @param {Object} option - The redemption option from API
   * @returns {boolean} - True if option is a general redemption
   */
  isGeneralRedemption(option) {
    return option.segment_ids == undefined || option.segment_ids.length === 0;
  }

  /**
   * Get the cost in points from a reward or redemption option
   * @param {Object} item - Reward or redemption option
   * @returns {number} - Cost in points
   */
  getCostInPoints(item) {
    return item.cost_in_points || item.points_price || 0;
  }

  /**
   * Check if a direct reward (redemption) is expiring soon (within 14 days)
   * Note: Only direct rewards have expiry, not redemption options
   * @param {Object} redemption - Direct reward (redemption)
   * @returns {boolean} - True if expiring within 14 days
   */
  isExpiringSoon(redemption) {
    // Direct rewards use code_expires_on field
    const expiryDate = redemption.code_expires_on;

    if (!expiryDate) {
      return false;
    }

    try {
      const expiry = new Date(expiryDate);
      const now = new Date();
      const daysUntilExpiry = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));

      // Consider "expiring soon" if within 14 days and not already expired
      return daysUntilExpiry > 0 && daysUntilExpiry <= 14;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get days until expiry for sorting (lower = more urgent)
   * Note: Only direct rewards have expiry, not redemption options
   * @param {Object} redemption - Direct reward (redemption)
   * @returns {number} - Days until expiry, or Infinity if no expiry or already expired
   */
  getDaysUntilExpiry(redemption) {
    // Direct rewards use code_expires_on field
    const expiryDate = redemption.code_expires_on;

    if (!expiryDate) {
      return Infinity; // No expiry = sort last
    }

    try {
      const expiry = new Date(expiryDate);
      const now = new Date();
      const daysUntilExpiry = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));

      // Return days if not expired, otherwise Infinity
      return daysUntilExpiry > 0 ? daysUntilExpiry : Infinity;
    } catch (error) {
      return Infinity;
    }
  }

  /**
   * Sort redemptions by expiry urgency (lower days = more urgent = first)
   * @param {Array} redemptions - Array of direct rewards (redemptions)
   * @returns {Array} - Sorted array (mutates original array)
   */
  sortByExpiryUrgency(redemptions) {
    return redemptions.sort((a, b) => {
      const daysA = this.getDaysUntilExpiry(a);
      const daysB = this.getDaysUntilExpiry(b);
      return daysA - daysB;
    });
  }

  /**
   * Sort an array of rewards/options by cost
   * @param {Array} items - Array of rewards or redemption options
   * @param {string} direction - 'asc' for ascending (lowest first), 'desc' for descending (highest first)
   * @returns {Array} - Sorted array (mutates original array)
   */
  sortByCost(items, direction = 'desc') {
    return items.sort((a, b) => {
      const costA = this.getCostInPoints(a);
      const costB = this.getCostInPoints(b);
      return direction === 'asc' ? costA - costB : costB - costA;
    });
  }

  /**
   * Sort available redemption options by requirements and value.
   *
   * REWARD SORTING LOGIC:
   * 1. No Requirements (or requirements met) - shown first
   *    - Sorted by highest cost
   * 2. With Unmet Requirements - shown after
   *    - Sorted by highest cost
   *
   * Note: Expiry only applies to direct rewards (active redemptions), not redemption options.
   *
   * @param {Array} options - Array of redemption options (always have points cost)
   * @returns {Array} - Sorted array of redemption options
   */
  sortRewardsByAvailability(options) {
    // Categorize rewards by whether they have cart/item requirements
    const noRequirements = [];
    const withUnmetRequirements = [];

    options.forEach(option => {
      const hasRequirements = this.hasRestrictions(option);
      const requirementsMet = hasRequirements ? this.areRestrictionsMet(option) : true;

      // Categorize: no requirements OR requirements are met
      if (!hasRequirements || requirementsMet) {
        noRequirements.push(option);
      } else {
        withUnmetRequirements.push(option);
      }
    });

    // Sort rewards with no requirements by highest value (highest cost first)
    // Available redemption options always have a points cost, never free
    this.sortByCost(noRequirements, 'desc');

    // Sort rewards with unmet requirements by highest value
    this.sortByCost(withUnmetRequirements, 'desc');

    // Combine: no requirements first, then those with unmet requirements
    return [...noRequirements, ...withUnmetRequirements];
  }

  /**
   * Check if a redemption option has any restrictions
   * @param {Object} option - The redemption option from API
   * @returns {boolean} - True if option has restrictions
   */
  hasRestrictions(option) {
    const hasProductRequirement =
      (option.product_ids && option.product_ids.length > 0) ||
      (option.variant_ids && option.variant_ids.length > 0) ||
      (option.collection_ids && option.collection_ids.length > 0);

    const hasCartRequirement = option.cart_greater_than_cents && option.cart_greater_than_cents > 0;

    return hasProductRequirement || hasCartRequirement;
  }

  /**
   * Find the next closest reward to unlock
   */
  findNextRewardToUnlock(userPoints) {
    // Get rewards that user can't afford yet
    const unaffordableRewards = this.redemptionOptions.filter(option => {
      const costInPoints = this.getCostInPoints(option);
      return costInPoints > userPoints;
    });

    // Sort by cost and return the cheapest one (closest to unlock)
    if (unaffordableRewards.length > 0) {
      this.sortByCost(unaffordableRewards, 'asc');
      return unaffordableRewards[0];
    }

    return null;
  }

  /**
   * Render a locked reward card (next reward to unlock)
   */
  renderLockedReward(reward, userPoints, pointsWorth) {
    const name = reward.name || 'Reward';
    const costInPoints = this.getCostInPoints(reward);
    const costText = `${costInPoints} ${this.labels.pointsLabel}`;
    const pointsNeeded = costInPoints - userPoints;
    const lockedMessage = this.requirementTexts.points.replaceAll('##points##', pointsNeeded);

    return `
      <div class="loyalty-reward-card loyalty-reward-locked">
        <div class="loyalty-reward-content">
          <h4 class="loyalty-reward-title">${name}</h4>
          <p class="loyalty-reward-points">${costText}</p>
          <p class="loyalty-reward-locked-message">${lockedMessage}</p>
        </div>
      </div>
    `;
  }

  /**
   * Check if a redemption option's restrictions are met
   * @param {Object} option - The redemption option from API
   * @returns {boolean} - True if restrictions are met or no restrictions exist
   */
  areRestrictionsMet(option) {
    // If no cart state, assume restrictions are not met (to be safe)
    if (!this.cartState) {
      return false;
    }

    // Check for product/variant/collection requirements
    if (option.product_ids && option.product_ids.length > 0) {
      const hasRequiredProduct = option.product_ids.some(productId =>
        this.cartState.productIds.includes(productId)
      );
      if (!hasRequiredProduct) {
        return false;
      }
    }

    if (option.variant_ids && option.variant_ids.length > 0) {
      const hasRequiredVariant = option.variant_ids.some(variantId =>
        this.cartState.variantIds.includes(variantId)
      );
      if (!hasRequiredVariant) {
        return false;
      }
    }

    // Check for minimum cart value requirement
    // cart_greater_than_cents means cart total must be GREATER than this amount
    if (option.cart_greater_than_cents && option.cart_greater_than_cents > 0) {
      const cartTotalCents = parseInt(this.cartState.total) || 0;
      if (cartTotalCents <= option.cart_greater_than_cents) {
        return false;
      }
    }

    // All restrictions are met
    return true;
  }

  /**
   * Generate restriction text for a redemption option
   * @param {Object} option - The redemption option from API
   * @returns {string|null} - Restriction text or null if no restrictions
   */
  getRestrictionText(option) {
    const restrictions = [];

    // Check for product/variant/collection requirements
    const hasProductRequirement =
      (option.product_ids && option.product_ids.length > 0) ||
      (option.variant_ids && option.variant_ids.length > 0) ||
      (option.collection_ids && option.collection_ids.length > 0);

    if (hasProductRequirement) {
      restrictions.push(this.requirementTexts.item);
    }

    // Check for minimum cart value requirement
    if (option.cart_greater_than_cents && option.cart_greater_than_cents > 0) {
      const subunitToUnit = option.subunit_to_unit || 100;
      const minAmount = (option.cart_greater_than_cents / subunitToUnit).toFixed(2);
      const formattedValue = `${this.currencySymbol}${minAmount}`;
      const text = this.requirementTexts.cartValue.replace('{value}', formattedValue);
      restrictions.push(text);
    }

    // Return first restriction (or null if none)
    return restrictions.length > 0 ? restrictions[0] : null;
  }

  /**
   * Render a single redemption option
   */
  renderRedemptionOption(option, userPoints) {
    const name = option.name || 'Reward';
    const costInPoints = this.getCostInPoints(option);
    const costText = `${costInPoints} ${this.labels.pointsLabel}`;
    let restrictionText = this.getRestrictionText(option);

    // Check if this option was redeemed and if its code is applied
    const discountCode = this.redeemedOptions[option.id];
    const isApplied = discountCode && this.appliedRewards.has(discountCode);
    const isLoading = this.loadingRewards.has(option.id) || (discountCode && this.loadingRewards.has(discountCode));

    // Check if any reward is currently applied
    const hasAnyAppliedReward = this.appliedRewards.size > 0 && !isApplied;

    // Check if restrictions exist and if they are met
    const hasRestriction = restrictionText !== null;
    const restrictionsMet = hasRestriction ? this.areRestrictionsMet(option) : true;

    // Gray out and hide button only if restrictions exist AND are NOT met (and not already applied)
    const shouldRestrict = hasRestriction && !restrictionsMet && !isApplied;

    if (hasAnyAppliedReward) {
      restrictionText = (this.merchantId === '225598' || this.merchantId === '223465') ? 'reward already applied' : 'Already using a discount';
    }
    const restrictionStyle = (hasAnyAppliedReward && (this.merchantId === '225598' || this.merchantId === '223465')) ? ' style="color: #000;"' : '';

    return `
      <div class="loyalty-reward-card ${shouldRestrict || hasAnyAppliedReward ? 'loyalty-reward-restricted' : ''}" ${discountCode ? `data-reward-code="${discountCode}"` : ''}>
        <div class="loyalty-reward-content">
          <h4 class="loyalty-reward-title">${name}</h4>
          <p class="loyalty-reward-points">${costText}</p>
        </div>
        ${shouldRestrict || hasAnyAppliedReward ? `
        <p class="loyalty-reward-restriction"${restrictionStyle}>${restrictionText}</p>
        ` : `
        <button
          class="${isApplied ? 'loyalty-reward-remove-btn' : 'loyalty-reward-apply-btn'} ${isLoading ? 'loyalty-reward-btn-loading' : ''}"
          data-option-id="${option.id}"
          onclick="${isLoading ? 'return false;' : (isApplied
            ? `window.loyaltyDrawer.handleReward('${discountCode}', event)`
            : `window.loyaltyDrawer.redeemOption(${option.id}, ${option.amount}, event)`)}"
          ${isLoading ? 'disabled' : ''}
        >
          ${isApplied ? this.buttonTexts.removeReward : this.buttonTexts.applyReward}
        </button>
        `}
      </div>
    `;
  }

  /**
   * Render a single redemption
   */
  renderRedemption(redemption) {
    const title = redemption.reward_title || 'Reward';
    const code = redemption.reward_text || '';
    const isApplied = this.appliedRewards.has(code);
    const isLoading = this.loadingRewards.has(code);

    // Check if any reward is currently applied
    const hasAnyAppliedReward = this.appliedRewards.size > 0 && !isApplied;

    // Get redemption_option if available (contains same data as option)
    const redemptionOption = redemption.redemption_option || null;
    let restrictionText = redemptionOption ? this.getRestrictionText(redemptionOption) : null;

    // Check if restrictions exist and if they are met
    const hasRestriction = restrictionText !== null;
    const restrictionsMet = hasRestriction ? this.areRestrictionsMet(redemptionOption) : true;

    // Gray out and hide button only if restrictions exist AND are NOT met (and not already applied)
    const shouldRestrict = hasRestriction && !restrictionsMet && !isApplied;

    if (hasAnyAppliedReward) {
      restrictionText = (this.merchantId === '225598' || this.merchantId === '223465') ? 'reward already applied' : 'Already using a discount';
    }
    const restrictionStyleRedemption = (hasAnyAppliedReward && (this.merchantId === '225598' || this.merchantId === '223465')) ? ' style="color: #000;"' : '';

    // Calculate expiry info if available and within 2 weeks
    let expiryText = '';
    if (redemption.code_expires_on) {
      const expiryDate = new Date(redemption.code_expires_on);
      const now = new Date();
      const daysUntilExpiry = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));

      // Only show expiry if less than 14 days (2 weeks)
      if (daysUntilExpiry > 0 && daysUntilExpiry < 14) {
        expiryText = this.requirementTexts.daysLeft.replace('{days}', daysUntilExpiry.toString());
      }
    }

    return `
      <div class="loyalty-reward-card ${shouldRestrict || hasAnyAppliedReward ? 'loyalty-reward-restricted' : ''}" data-reward-code="${code}">
        <div class="loyalty-reward-content">
          <h4 class="loyalty-reward-title">${title}</h4>
          <p class="loyalty-reward-points">${this.labels.directRewardsLabel}</p>
          ${expiryText ? `<p class="loyalty-reward-expiry">${expiryText}</p>` : ''}
        </div>
        ${shouldRestrict || hasAnyAppliedReward ? `
        <p class="loyalty-reward-restriction"${restrictionStyleRedemption}>${restrictionText}</p>
        ` : `
        <button
          class="${isApplied ? 'loyalty-reward-remove-btn' : 'loyalty-reward-apply-btn'} ${isLoading ? 'loyalty-reward-btn-loading' : ''}"
          onclick="${isLoading ? 'return false;' : `window.loyaltyDrawer.handleReward('${code}', event)`}"
          ${isLoading ? 'disabled' : ''}
        >
          ${isApplied ? this.buttonTexts.removeReward : this.buttonTexts.applyReward}
        </button>
        `}
      </div>
    `;
  }

  /**
   * Handle reward - apply or remove
   * Uses optimistic UI updates for better UX
   */
  async handleReward(code, event) {
    const button = event.target;
    const rewardCard = button.closest('.loyalty-reward-card');
    const isCurrentlyApplied = this.appliedRewards.has(code);
    const normalizedCode = code.toLowerCase().trim();

    // Save optionId mapping before optimistic update (for potential revert and tracking)
    let savedOptionId = null;
    let savedCost = null;
    let savedRewardData = null; // Capture reward data before state update for tracking
    let savedOption = null; // For redeem event tracking
    if (isCurrentlyApplied) {
      savedOptionId = this._findOptionIdForCode(code);
      // Save the cost so we can restore it on error
      savedCost = this.appliedRewardCosts.get(normalizedCode);
      
      savedRewardData = await this._extractRewardDataForTracking(code, savedOptionId, savedCost);
    } else {
      // For apply case: extract option data for redeem event
      savedOptionId = this._findOptionIdForCode(code);
      if (savedOptionId) {
        // Try to get option from cache first (synchronous) - this should work if drawer is already open
        savedOption = this._getOptionForTracking(code, savedOptionId);
      }
    }

    // Set loading state
    this.loadingRewards.add(normalizedCode);
    if (savedOptionId) {
      this.loadingRewards.add(savedOptionId);
    }
    this._updateRewardsListOnly();

    const requestId = `handleReward_${code}_${Date.now()}`;
    const abortController = new AbortController();
    this.abortControllers.set(requestId, abortController);

    // OPTIMISTIC UPDATE: Update state immediately
    if (isCurrentlyApplied) {
      if (window.loyaltySpotlightTracking?.isAnalyticsReady && window.loyaltySpotlightTracking.trackRewardAction && savedRewardData) {
        window.loyaltySpotlightTracking.trackRewardAction(savedRewardData, this, true, false);
      }

      if (this.appliedRewardCosts.has(normalizedCode)) {
        this.appliedRewardCosts.delete(normalizedCode);
        this.saveAppliedRewardCosts();
      }

      const storedRedemption = this.getStoredRedemptionInfo();
      if (storedRedemption && storedRedemption.discountCode.toLowerCase().trim() === normalizedCode) {
        this.clearStoredRedemptionInfo();
      }

      this._updateRewardState(code, false);
      this._updateButtonUI(button, false);
      this._updatePointsDisplayOnly();
      this._updateRewardsListOnly(savedOptionId);
    } else {
      // Send redeem event immediately on button click (synchronous, before any async operations)
      if (window.loyaltySpotlightTracking?.trackRedemptionRedeemed && savedOption) {
        window.loyaltySpotlightTracking.trackRedemptionRedeemed(savedOption, this);
      }

      this.setRewardState(code, true, button, rewardCard);
      this._updatePointsDisplayOnly();
      this._updateRewardsListOnly();
    }

    try {
      let finalCart = null;
      if (isCurrentlyApplied) {
        finalCart = await this.removeDiscount(code);
        // Cart updated via fetch() and _updateCartDrawerUI() - no page refresh needed
      } else {
        await this.applyDiscount(code);
        finalCart = await this.client.getCart();
      }

      if (abortController.signal.aborted) {
        return;
      }

      // Applied but not applicable (e.g. restriction) → remove and clear state
      if (!isCurrentlyApplied && finalCart && !this.client.isDiscountApplicableInCart(finalCart, code)) {
        if (this._optionHasCollectionRestriction(code)) {
          this._showErrorBanner(LoyaltyDrawer.ERROR_BANNER_COLLECTION_NOT_APPLICABLE);
        }
        await this.removeDiscount(code).catch(() => {});
        finalCart = await this.client.getCart().catch(() => finalCart);
        this._cleanupOptionData(code, savedOptionId);
        this.setRewardState(code, false, button, rewardCard, savedOptionId);
        this._updatePointsDisplayOnly();
        this._updateRewardsListOnly(savedOptionId);
        await this.updateCartState(finalCart);
        this.loadingRewards.delete(normalizedCode);
        if (savedOptionId) this.loadingRewards.delete(savedOptionId);
        this.renderDrawerContent();
        if (typeof this.syncCartAndCta === 'function') this.syncCartAndCta().catch(() => {});
        return;
      }

      await this.updateCartState(finalCart);
      await this.syncAppliedRewardsWithCart(isCurrentlyApplied ? null : code.toLowerCase().trim(), finalCart);

      if (!isCurrentlyApplied) {
        const optionId = this._findOptionIdForCode(code);
        if (optionId) {
          const option = this.redemptionOptions.find(opt => opt.id === optionId);
          if (option) {
            const costInPoints = this.getCostInPoints(option);
            if (costInPoints > 0) {
              this.appliedRewardCosts.set(normalizedCode, costInPoints);
              this.saveAppliedRewardCosts();
            }
            this._storeOptionData(code, optionId, option);
          }
        }
      }

      // Clear loading state
      this.loadingRewards.delete(normalizedCode);
      if (savedOptionId) {
        this.loadingRewards.delete(savedOptionId);
      }

      this.renderDrawerContent();

      if (!isCurrentlyApplied) {
        // Send applied event after discount is successfully applied to cart
        if (window.loyaltySpotlightTracking?.trackRewardApplied) {
          const optionId = this._findOptionIdForCode(code);
          const rewardData = await this._extractRewardDataForTracking(code, optionId, this.appliedRewardCosts.get(normalizedCode));
          if (rewardData) {
            window.loyaltySpotlightTracking.trackRewardApplied(rewardData, this);
          }
        }
      } else {
        this._cleanupOptionData(code, savedOptionId);
      }
    } catch (error) {
      console.error('[LoyaltyDrawer] Error toggling discount:', error);

      // Clear loading state
      this.loadingRewards.delete(normalizedCode);
      if (savedOptionId) {
        this.loadingRewards.delete(savedOptionId);
      }

      if (isCurrentlyApplied) {
        if (savedCost !== null && savedCost !== undefined) {
          this.appliedRewardCosts.set(normalizedCode, savedCost);
          this.saveAppliedRewardCosts();
        }
        if (savedOptionId && !this.appliedOptionData.has(normalizedCode)) {
          const option = this.redemptionOptions.find(opt => opt.id === savedOptionId);
          if (option) {
            this._storeOptionData(code, savedOptionId, option);
          }
        }
        this._updateRewardState(code, true, savedOptionId);
        this._updatePointsDisplayOnly();
        this._updateRewardsListOnly(savedOptionId);
      } else {
        // Apply failed: roll back so UI and localStorage match cart (no discount in cart)
        this._cleanupOptionData(code, savedOptionId);
        this.setRewardState(code, false, button, rewardCard, savedOptionId);
        this._updatePointsDisplayOnly();
        this._updateRewardsListOnly(savedOptionId);
        if (typeof this.syncCartAndCta === 'function') {
          this.syncCartAndCta().catch(err => console.warn('[LoyaltyDrawer] Error syncing CTA after apply failure:', err));
        }
      }

      if (!abortController.signal.aborted) {
        console.error('[LoyaltyDrawer] Could not process discount:', error.message || error);
      }
    } finally {
      this.abortControllers.delete(requestId);
      // Ensure loading state is cleared even if aborted
      this.loadingRewards.delete(normalizedCode);
      if (savedOptionId) {
        this.loadingRewards.delete(savedOptionId);
      }
      if (abortController.signal.aborted) {
        this._updateRewardsListOnly();
      }
    }
  }

  _storeOptionData(code, optionId, option) {
    if (!option || !optionId) return;
    this.appliedOptionData.set(code.toLowerCase().trim(), option);
    this.appliedOptionDataById.set(String(optionId), option);
  }

  _getOptionForTracking(code, optionId) {
    const normalizedCode = code.toLowerCase().trim();
    return this.appliedOptionData.get(normalizedCode) ||
           (optionId && (this.appliedOptionDataById.get(String(optionId)) ||
            this.redemptionOptions.find(opt => opt.id === optionId || opt.id === Number(optionId))));
  }

  async _extractRewardDataForTracking(code, optionId, savedCost) {
    if (!window.loyaltySpotlightTracking) return null;
    const normalizedCode = code.toLowerCase().trim();
    
    // First try to get option from cached data
    let option = this._getOptionForTracking(code, optionId);
    
    // If option not found and redemptionOptions are empty, try to load them
    if (!option && (!this.redemptionOptions || this.redemptionOptions.length === 0)) {
      try {
        const options = await this.client.fetchRedemptionOptions();
        if (options && Array.isArray(options)) {
          this.redemptionOptions = options;
          // Retry getting option after loading
          option = this._getOptionForTracking(code, optionId);
        }
      } catch (error) {
        console.warn('[LoyaltyDrawer] Failed to load redemptionOptions for tracking:', error);
      }
    }
    
    if (option) return window.loyaltySpotlightTracking.extractRewardData(option, this);
    
    const customer = this._getCustomer();
    const redemption = (customer?.point_redemptions || []).find(r => 
      r.approved && !r.code_uses && (r.reward_text || '').toLowerCase().trim() === normalizedCode
    );
    if (redemption && window.loyaltySpotlightTracking.extractRedemptionData) {
      return window.loyaltySpotlightTracking.extractRedemptionData(redemption, this);
    }
    if (optionId && savedCost !== undefined) {
      return {
        reward_id: optionId,
        reward_name: 'Reward',
        reward_type: 'points_reward',
        points_cost: savedCost || this.appliedRewardCosts.get(normalizedCode) || 0,
        has_restrictions: false,
        cart_requirement_cents: null
      };
    }
    return null;
  }

  _cleanupOptionData(code, optionId) {
    if (code) this.appliedOptionData.delete(code.toLowerCase().trim());
    if (optionId) this.appliedOptionDataById.delete(String(optionId));
  }

  async applyDiscount(code) {
    return await this.client.applyDiscount(code);
  }

  /**
   * Remove specific discount from cart (delegated to client)
   */
  async removeDiscount(code) {
    return await this.client.removeDiscount(code);
  }

  /**
   * Update internal state for reward (applied/not applied)
   * Separated from UI updates for better separation of concerns
   * @param {string} optionId - Optional optionId to restore redeemedOptions mapping when reverting
   */
  _updateRewardState(code, isApplied, optionId = null) {
    const normalizedCode = code.toLowerCase().trim();

    if (isApplied) {
      this.appliedRewards.add(code);
      this.saveAppliedRewards();

      // Restore redeemedOptions mapping if provided (for error recovery)
      if (optionId) {
        this.redeemedOptions[optionId] = code;
        this.saveRedeemedOptions();

        // Also restore the cost if we have the option
        const option = this.redemptionOptions.find(opt => opt.id === optionId);
        if (option) {
          const costInPoints = this.getCostInPoints(option);
          if (costInPoints > 0) {
            this.appliedRewardCosts.set(normalizedCode, costInPoints);
            this.saveAppliedRewardCosts();
          }
        }
      }
    } else {
      this.appliedRewards.delete(code);
      this.saveAppliedRewards();

      // Remove from redeemedOptions
      for (const [optId, discountCode] of Object.entries(this.redeemedOptions)) {
        if (discountCode.toLowerCase().trim() === normalizedCode) {
          delete this.redeemedOptions[optId];
        }
      }
      this.saveRedeemedOptions();

      // Remove from applied reward costs
      this.appliedRewardCosts.delete(normalizedCode);
      this.saveAppliedRewardCosts();
    }
  }

  /**
   * Find optionId associated with a discount code
   * Internal helper method
   */
  _findOptionIdForCode(code) {
    const normalizedCode = code.toLowerCase().trim();
    for (const [optionId, discountCode] of Object.entries(this.redeemedOptions)) {
      if (discountCode.toLowerCase().trim() === normalizedCode) {
        return optionId;
      }
    }
    return null;
  }

  /**
   * Update button UI to reflect reward state
   */
  _updateButtonUI(button, isApplied) {
    if (isApplied) {
      button.textContent = this.buttonTexts.removeReward;
      button.className = 'loyalty-reward-remove-btn';
    } else {
      button.textContent = this.buttonTexts.applyReward;
      button.className = 'loyalty-reward-apply-btn';
    }
  }

  /**
   * Set reward state (applied/not applied) with UI update
   * Public method that coordinates state and UI updates
   * @param {string} optionId - Optional optionId to restore redeemedOptions mapping on revert
   */
  setRewardState(code, isApplied, button, rewardCard, optionId = null) {
    this._updateRewardState(code, isApplied, optionId);
    this._updateButtonUI(button, isApplied);
  }

  /**
   * Set button loading state and return original state
   * Internal helper method
   */
  _setButtonLoading(button) {
    const original = {
      disabled: button.disabled,
      hasLoadingClass: button.classList.contains('loyalty-reward-btn-loading'),
      onclickAttr: button.getAttribute('onclick')
    };
    button.disabled = true;
    button.classList.add('loyalty-reward-btn-loading');
    button.setAttribute('onclick', 'return false;');
    button.style.pointerEvents = 'none';
    return original;
  }

  /**
   * Restore button state from saved state
   * Internal helper method
   * Restores all properties saved by _saveButtonState or _setButtonLoading
   */
  _restoreButtonState(button, state) {
    // Restore button properties (only if they exist in state)
    const buttonProps = ['textContent', 'className', 'onclick', 'disabled'];
    buttonProps.forEach(prop => {
      if (prop in state) button[prop] = state[prop];
    });

    // Restore onclick attribute
    if ('onclickAttr' in state) {
      if (state.onclickAttr) {
        button.setAttribute('onclick', state.onclickAttr);
      } else {
        button.removeAttribute('onclick');
      }
    }

    // Restore pointer events
    button.style.pointerEvents = '';

    // Restore loading class state
    if ('hasLoadingClass' in state) {
      if (state.hasLoadingClass) {
        button.classList.add('loyalty-reward-btn-loading');
      } else {
        button.classList.remove('loyalty-reward-btn-loading');
      }
    }
  }

  /**
   * Save complete button state for later restoration
   * Internal helper method
   */
  _saveButtonState(button) {
    return {
      textContent: button.textContent,
      className: button.className,
      onclick: button.onclick,
      disabled: button.disabled,
      hasLoadingClass: button.classList.contains('loyalty-reward-btn-loading')
    };
  }


  async redeemOption(optionId, amount, event) {
    const button = event?.target;
    const rewardCard = button?.closest('.loyalty-reward-card');

    if (!button || !rewardCard) {
      console.error('Button or reward card not found');
      return;
    }

    const option = this.redemptionOptions.find(opt => opt.id === optionId);
    if (!option) {
      console.error('Option not found:', optionId);
      return;
    }

    const costInPoints = this.getCostInPoints(option);
    const tempDiscountCode = `temp_${optionId}_${Date.now()}`;
    this.redeemedOptions[optionId] = tempDiscountCode;
    this.appliedRewards.add(tempDiscountCode);

    const tempKey = `option_${optionId}`;
    if (costInPoints > 0) {
      this.appliedRewardCosts.set(tempKey, costInPoints);
      this.saveAppliedRewardCosts();
    }

    const originalState = this._saveButtonState(button);
    this._updatePointsDisplayOnly();

    // Set loading state
    this.loadingRewards.add(optionId);
    
    // Add to pending queue (status: pending_redemption)
    this.addPendingRedemption(optionId, null, 'pending_redemption', costInPoints);
    
    // Set flag to prevent cart update listeners from interfering
    this.isRedeeming = true;
    
    // Immediately update rewards list to disable other buttons (this will re-render)
    this._updateRewardsListOnly();
    
    const requestId = `redeemOption_${optionId}_${Date.now()}`;
    const abortController = new AbortController();
    this.abortControllers.set(requestId, abortController);

    try {
      const discountCode = await this._redeemRewardCode(optionId, amount);

      if (abortController.signal.aborted) {
        // If aborted, keep in queue for recovery
        return;
      }

      this.appliedRewards.delete(tempDiscountCode);

      if (costInPoints > 0 && this.appliedRewardCosts.has(tempKey)) {
        this.appliedRewardCosts.delete(tempKey);
        this.appliedRewardCosts.set(discountCode.toLowerCase().trim(), costInPoints);
        this.saveAppliedRewardCosts();
      }

      // Update queue: redemption complete, now pending cart update
      const normalizedDiscountCode = discountCode.toLowerCase().trim();
      this.addPendingRedemption(optionId, normalizedDiscountCode, 'pending_cart_update', costInPoints);

      if (option) {
        this._storeOptionData(discountCode, optionId, option);
      }
      
      // Apply the redeemed reward (updates state only, UI update happens at the end)
      await this._applyRedeemedReward(optionId, discountCode, null, rewardCard);
      
      // Update loading state: remove optionId, add discountCode
      this.loadingRewards.delete(optionId);
      this.loadingRewards.add(normalizedDiscountCode);

      const finalCart = await this.client.getCart();
      if (!this.client.isDiscountApplicableInCart(finalCart, discountCode)) {
        if (option && option.collection_ids && option.collection_ids.length > 0) {
          this._showErrorBanner(LoyaltyDrawer.ERROR_BANNER_COLLECTION_NOT_APPLICABLE);
        }
        await this.client.removeDiscount(discountCode).catch(() => {});
        delete this.redeemedOptions[optionId];
        this.appliedRewards.delete(normalizedDiscountCode);
        this._cleanupOptionData(discountCode, optionId);
        if (costInPoints > 0) {
          this.appliedRewardCosts.delete(normalizedDiscountCode);
          this.saveAppliedRewardCosts();
        }
        this.removePendingRedemption(optionId);
        this.loadingRewards.delete(normalizedDiscountCode);
        this.saveAppliedRewards();
        this.saveRedeemedOptions();
        const cartAfterRemove = await this.client.getCart().catch(() => finalCart);
        await this.updateCartState(cartAfterRemove);
        this.isRedeeming = false;
        if (this.drawer && this.drawer.classList.contains('active')) {
          this.renderDrawerContent();
        }
        return;
      }
      await this.updateCartState(finalCart);
      // Skip UI updates here - we'll do a single final render at the end to avoid flickering
      await this.syncAppliedRewardsWithCart(normalizedDiscountCode, finalCart, true);
      
      // Cart update complete - remove from queue and clear loading state
      this.removePendingRedemption(optionId);
      this.loadingRewards.delete(normalizedDiscountCode);
      
      // Single final UI update to avoid flickering from multiple re-renders
      // Cart updated via fetch('/discount/CODE') and _updateCartDrawerUI() - no page refresh needed
      // Only update drawer content if drawer is still open
      if (this.drawer && this.drawer.classList.contains('active')) {
        this.renderDrawerContent();
      }

      // Clear flag to allow cart update listeners to work again
      this.isRedeeming = false;

      // Track redemption (points spent)
      if (window.loyaltySpotlightTracking?.trackRedemptionRedeemed) {
        window.loyaltySpotlightTracking.trackRedemptionRedeemed(option, this);
      }

      // Track reward applied to cart (discount applied)
      if (window.loyaltySpotlightTracking?.trackRewardApplied) {
        const rewardData = window.loyaltySpotlightTracking.extractRewardData(option, this);
        if (rewardData) {
          window.loyaltySpotlightTracking.trackRewardApplied(rewardData, this);
        }
      }

    } catch (error) {
      if (abortController.signal.aborted) {
        // If aborted but we have discount code, keep in queue for recovery
        // Otherwise remove from queue
        const pending = this.getPendingRedemptions();
        const pendingRedemption = pending.find(p => p.optionId === optionId);
        if (!pendingRedemption || pendingRedemption.status === 'pending_redemption') {
          this.removePendingRedemption(optionId);
        }
        // Clear flag even on abort
        this.isRedeeming = false;
        return;
      }

      console.error('Error redeeming option:', error);

      // Remove from queue on error
      this.removePendingRedemption(optionId);

      // Clear loading state
      this.loadingRewards.delete(optionId);

      this.appliedRewards.delete(tempDiscountCode);
      delete this.redeemedOptions[optionId];
      this._cleanupOptionData(tempDiscountCode, optionId);

      if (costInPoints > 0) {
        this.appliedRewardCosts.delete(tempKey);
        this.saveAppliedRewardCosts();
      }
      this.saveAppliedRewards();
      this.saveRedeemedOptions();

      // Clear flag on error
      this.isRedeeming = false;

      this._updatePointsDisplayOnly();
      this._updateRewardsListOnly();
      if (typeof this.syncCartAndCta === 'function') {
        this.syncCartAndCta().catch(err => console.warn('[LoyaltyDrawer] Error syncing CTA after redeem failure:', err));
      }
      console.error('[LoyaltyDrawer] Could not redeem reward:', error.message || error);
    } finally {
      this.abortControllers.delete(requestId);
      // Ensure loading state is cleared even if aborted
      this.loadingRewards.delete(optionId);
      // Ensure flag is cleared even if something unexpected happens
      if (abortController.signal.aborted) {
        this.isRedeeming = false;
        this._updateRewardsListOnly();
      }
    }
  }

  /**
   * Redeem reward and get discount code
   * Separated business logic from UI concerns
   */
  async _redeemRewardCode(optionId, amount) {
    const customerEmail = window.customerEmail || this.getCustomerEmail();
    if (!customerEmail) throw new Error('Customer email not available');

    const result = await this.client.redeemReward(
      optionId,
      amount,
      customerEmail,
      window.customerId || this.getCustomerId()
    );

    const discountCode = result.reward_text;
    if (!discountCode) throw new Error('No discount code received from redemption');

    return discountCode;
  }

  async _applyRedeemedReward(optionId, discountCode, button, rewardCard) {
    this.redeemedOptions[optionId] = discountCode;
    this.saveRedeemedOptions();
    await this.applyDiscount(discountCode);

    // Cart is updated via fetch('/discount/CODE') and _updateCartDrawerUI()
    // No page refresh needed - cart updates automatically via DOM manipulation

    // Store redemption info for persistence
    const option = this.redemptionOptions.find(opt => opt.id === optionId);
    if (option) {
      const costInPoints = this.getCostInPoints(option);
      this.saveStoredRedemptionInfo(discountCode, optionId, costInPoints);
    }

    this._updateRewardState(discountCode, true, optionId);
    
    // Update points display immediately
    this._updatePointsDisplayOnly();
    // Note: UI update (rewards list) is handled by the caller to avoid multiple re-renders and flickering

    rewardCard.setAttribute('data-reward-code', discountCode);
  }

  /**
   * Render error state
   */
  renderError(message) {
    if (!this.contentDiv) return;

    // Get loyalty name from existing header or use default
    const existingTitle = document.querySelector('.loyalty-drawer-title');
    const loyaltyName = existingTitle ? existingTitle.textContent : 'Loyalty Name/ brand logo';

    this.contentDiv.innerHTML = `
      <div class="loyalty-drawer-header">
        <div class="loyalty-drawer-handle"></div>
        <h2 class="loyalty-drawer-title">${loyaltyName}</h2>
      </div>
      <div class="loyalty-error">
        <p>${message}</p>
      </div>
    `;
  }
}

// Export for use in Liquid templates
window.LoyaltyDrawer = LoyaltyDrawer;
window.loyaltyDrawer = null;

// Expose global sync method for manual syncing
window.syncLoyaltyPoints = async () => {
  if (window.loyaltyDrawer) {
    await window.loyaltyDrawer.syncCartAndCta();
  }
};
