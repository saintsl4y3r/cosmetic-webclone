(function() {
  'use strict';

  function isAnalyticsReady() {
    return window.spotlightAnalytics?.isReady();
  }

  /**
   * Extract cart state information from drawer
   */
  function extractCartState(drawer, cartData = null) {
    // If cartData is provided directly, use it (for checkout/cart removals)
    if (cartData) {
      const items = cartData.items || [];
      const totalCents = cartData.total_price || 0;
      const productIds = (items || []).map(item => item.product_id).filter(Boolean);
      const variantIds = (items || []).map(item => item.variant_id).filter(Boolean);
      
      return {
        cart_total: totalCents,
        cart_item_count: items.length,
        cart_product_ids: productIds,
        cart_variant_ids: variantIds,
        cart_requirement_cents: null // This comes from rewardData, not cart state
      };
    }
    
    // Fallback to drawer.cartState if available
    if (!drawer || !drawer.cartState) {
      return {
        cart_total: null,
        cart_item_count: null,
        cart_product_ids: null,
        cart_variant_ids: null,
        cart_requirement_cents: null
      };
    }

    const cartState = drawer.cartState;
    const items = cartState.items || [];
    const totalCents = cartState.total || 0;

    return {
      cart_total: totalCents,
      cart_item_count: items.length,
      cart_product_ids: cartState.productIds || [],
      cart_variant_ids: cartState.variantIds || [],
      cart_requirement_cents: null
    };
  }

  /**
   * Extract customer context (tier_name, redemption_eligible) from customer data
   * Can work with drawer instance or raw customer data
   */
  function extractCustomerContext(customerData, redemptionOptions = null, getCostInPointsFn = null) {
    if (!customerData) {
      return {
        tier_name: null,
        redemption_eligible: null
      };
    }

    const customer = customerData.customer || customerData;
    const points = customer.points_balance || 0;
    const activeRedemptions = (customer.point_redemptions || []).filter(r => {
      if (!r.approved || r.code_uses) return false;
      const redemptionOption = r.redemption_option;
      if (redemptionOption && (redemptionOption.discount_type === 'custom' || redemptionOption.discount_type === 'custom_reward' || redemptionOption.discount_type === 'product')) {
        return false;
      }
      return true;
    });
    const vipTier = customer.vip_tier || null;
    const tierName = vipTier?.name || customer.vip_tier_name || null;

    let redemptionEligible = activeRedemptions.length > 0;
    
    if (!redemptionEligible && redemptionOptions && redemptionOptions.length > 0) {
      const affordableOptions = redemptionOptions.filter(option => {
        const costInPoints = getCostInPointsFn ? getCostInPointsFn(option) : (option.points_cost || option.cost_in_points || 0);
        return points >= costInPoints;
      });
      redemptionEligible = affordableOptions.length > 0;
    }

    return {
      tier_name: tierName,
      redemption_eligible: redemptionEligible
    };
  }

  function extractDrawerContext(drawer, cartData = null) {
    if (!drawer || !drawer.customerData) {
      return {
        tier_name: null,
        redemption_eligible: null,
        ...extractCartState(drawer, cartData)
      };
    }

    const customer = drawer.customerData.customer || drawer.customerData;
    // Use drawer's available points (base minus applied redemptions) so analytics matches what the user sees
    const points = (typeof drawer.getAvailablePoints === 'function')
      ? drawer.getAvailablePoints()
      : (customer.points_balance || 0);
    const customerContext = extractCustomerContext(
      drawer.customerData,
      drawer.redemptionOptions,
      drawer.getCostInPoints?.bind(drawer)
    );

    return {
      ...customerContext,
      points_balance: points,
      ...extractCartState(drawer, cartData)
    };
  }

  function trackDrawerOpen(drawer) {
    if (!isAnalyticsReady()) return;

    try {
      const context = {
        widget_component: 'drawer_open',
        customer_logged_in: true,
        ...extractDrawerContext(drawer)
      };
      
      window.spotlightAnalytics.trackShown(context);
      
      console.log('[LoyaltySpotlightTracking] Successfully sent drawer open event', JSON.stringify(context, null, 2));
    } catch (error) {
      console.error('[LoyaltySpotlightTracking] Error tracking drawer open:', error);
    }
  }

  function getDrawerContextIfAvailable() {
    if (!window.loyaltyDrawer?.customerData) return null;
    return extractDrawerContext(window.loyaltyDrawer);
  }

  /**
   * Extract reward/redemption option data for tracking
   */
  function extractRewardData(option, drawer) {
    if (!option) return null;

    const costInPoints = drawer?.getCostInPoints?.(option) || option.points_cost || option.cost_in_points || 0;
    const rewardName = option.name || option.reward_title || 'Reward';
    const rewardType = option.points_cost || option.cost_in_points ? 'points_reward' : 'direct_reward';
    
    return {
      reward_id: option.id || null,
      reward_name: rewardName,
      reward_type: rewardType,
      points_cost: costInPoints,
      has_restrictions: drawer?.hasRestrictions?.(option) || false,
      cart_requirement_cents: option.cart_greater_than_cents || null
    };
  }

  /**
   * Extract reward data from a redemption object (direct reward)
   * Redemptions have a redemption_option property that contains restriction info
   */
  function extractRedemptionData(redemption, drawer) {
    if (!redemption) return null;

    const redemptionOption = redemption.redemption_option || null;
    
    // Use redemption_option for restriction data if available, otherwise use redemption itself
    const optionForRestrictions = redemptionOption || redemption;
    
    const rewardData = {
      reward_id: redemption.id || null,
      reward_name: redemption.reward_title || 'Reward',
      reward_type: 'direct_reward',
      points_cost: 0,
      has_restrictions: drawer?.hasRestrictions?.(optionForRestrictions) || false,
      cart_requirement_cents: optionForRestrictions?.cart_greater_than_cents || null
    };

    return rewardData;
  }

  /**
   * Track redemption option redeemed (points spent)
   */
  function trackRedemptionRedeemed(option, drawer) {
    if (!isAnalyticsReady() || !option) return;

    try {
      const rewardData = extractRewardData(option, drawer);
      const drawerContext = extractDrawerContext(drawer);
      
      const eventContext = {
        widget_component: 'redeemed_reward',
        action_type: 'redeem',
        ...rewardData,
        ...drawerContext
      };
      
      window.spotlightAnalytics.trackClicked(eventContext);
      
      console.log('[LoyaltySpotlightTracking] Successfully sent redemption redeemed event', JSON.stringify(eventContext, null, 2));
    } catch (error) {
      console.error('[LoyaltySpotlightTracking] Error tracking redemption:', error);
    }
  }

  /**
   * Track reward applied to cart
   */
  function trackRewardApplied(rewardData, drawer) {
    if (!isAnalyticsReady()) return;

    try {
      const drawerContext = extractDrawerContext(drawer);
      
      const eventContext = {
        widget_component: 'applied_reward',
        action_type: 'apply',
        ...rewardData,
        ...drawerContext
      };
      
      window.spotlightAnalytics.trackClicked(eventContext);
      
      console.log('[LoyaltySpotlightTracking] Successfully sent reward applied event', JSON.stringify(eventContext, null, 2));
    } catch (error) {
      console.error('[LoyaltySpotlightTracking] Error tracking reward applied:', error);
    }
  }

  /**
   * Track reward removed from cart
   * @param {Object} rewardData - Reward data object
   * @param {Object} drawer - Drawer instance
   * @param {boolean} isRemovedFromCheckout - Whether the reward was removed from checkout/cart (not from spotlight widget). Defaults to false.
   * @param {Object} cartData - Optional cart data object (for checkout/cart removals when drawer.cartState might not be available)
   */
  function trackRewardRemoved(rewardData, drawer, isRemovedFromCheckout = false, cartData = null) {
    if (!isAnalyticsReady()) return;

    try {
      const drawerContext = extractDrawerContext(drawer, cartData);
      
      const eventContext = {
        widget_component: 'removed_reward',
        action_type: 'remove',
        removal_source: isRemovedFromCheckout ? 'checkout_or_cart' : 'spotlight_widget',
        ...rewardData,
        ...drawerContext,
        // Ensure cart_requirement_cents from rewardData takes precedence
        cart_requirement_cents: rewardData.cart_requirement_cents !== undefined ? rewardData.cart_requirement_cents : drawerContext.cart_requirement_cents
      };
      
      window.spotlightAnalytics.trackClicked(eventContext);
      
      console.log('[LoyaltySpotlightTracking] Successfully sent reward removed event', JSON.stringify(eventContext, null, 2));
    } catch (error) {
      console.error('[LoyaltySpotlightTracking] Error tracking reward removed:', error);
    }
  }

  /**
   * Unified function to track reward apply/remove action
   * @param {Object} rewardData - Reward data object
   * @param {Object} drawer - Drawer instance
   * @param {boolean} isCurrentlyApplied - Whether the reward is currently applied
   * @param {boolean} isRemovedFromCheckout - Whether the reward was removed from checkout/cart (only used when removing). Defaults to false.
   */
  function trackRewardAction(rewardData, drawer, isCurrentlyApplied, isRemovedFromCheckout = false) {
    if (!rewardData) return;

    if (isCurrentlyApplied) {
      trackRewardRemoved(rewardData, drawer, isRemovedFromCheckout);
    } else {
      trackRewardApplied(rewardData, drawer);
    }
  }

  /**
   * Track CTA click for logged-out users (before redirecting to login)
   * Stores timestamp in sessionStorage for correlation with login success
   * @param {Object} ctaData - CTA data object (from extractCtaData)
   */
  function trackCtaClickForLogin(ctaData) {
    if (!isAnalyticsReady()) return;

    try {
      const clickTimestamp = Date.now();
      sessionStorage.setItem('loyalty_cta_click_timestamp', clickTimestamp.toString());
      
      const eventContext = {
        widget_component: 'cta_clicked',
        action_type: 'click',
        customer_logged_in: false,
        cta_text: ctaData?.cta_text || null
      };
      
      window.spotlightAnalytics.trackClicked(eventContext);
      console.log('[LoyaltySpotlightTracking] Successfully sent CTA click for login event', JSON.stringify(eventContext, null, 2));
    } catch (error) {
      console.error('[LoyaltySpotlightTracking] Error tracking CTA click for login:', error);
    }
  }

  /**
   * Track successful login after CTA click
   * Correlates with the stored click timestamp to calculate time_to_login
   * @param {Object} drawer - Drawer instance (optional, for customer context if available)
   */
  function trackCtaLoginSuccess(drawer) {
    if (!isAnalyticsReady()) return;

    try {
      const clickTimestampStr = sessionStorage.getItem('loyalty_cta_click_timestamp');
      if (!clickTimestampStr) return; // Not from CTA click

      const clickTimestamp = parseInt(clickTimestampStr, 10);
      const loginTimestamp = Date.now();
      const timeToLoginSeconds = Math.round((loginTimestamp - clickTimestamp) / 1000);

      sessionStorage.removeItem('loyalty_cta_click_timestamp');

      // Only include customer context if drawer has data loaded (optional)
      const drawerContext = drawer && drawer.customerData ? extractDrawerContext(drawer) : {};
      
      const eventContext = {
        widget_component: 'cta_login_success',
        action_type: 'login',
        customer_logged_in: true,
        time_to_login_seconds: timeToLoginSeconds,
        login_timestamp: new Date(loginTimestamp).toISOString(),
        // Only include customer fields if they have actual values (not null)
        ...(drawerContext.points_balance !== null && drawerContext.points_balance !== undefined ? { points_balance: drawerContext.points_balance } : {}),
        ...(drawerContext.tier_name ? { tier_name: drawerContext.tier_name } : {}),
        ...(drawerContext.redemption_eligible !== null && drawerContext.redemption_eligible !== undefined ? { redemption_eligible: drawerContext.redemption_eligible } : {})
      };
      
      window.spotlightAnalytics.trackClicked(eventContext);
      console.log('[LoyaltySpotlightTracking] Successfully sent CTA login success event', JSON.stringify(eventContext, null, 2));
    } catch (error) {
      console.error('[LoyaltySpotlightTracking] Error tracking CTA login success:', error);
    }
  }

  window.loyaltySpotlightTracking = {
    isAnalyticsReady,
    extractDrawerContext,
    extractCustomerContext,
    trackDrawerOpen,
    getDrawerContextIfAvailable,
    extractRewardData,
    extractRedemptionData,
    trackRedemptionRedeemed,
    trackRewardApplied,
    trackRewardRemoved,
    trackRewardAction,
    trackCtaClickForLogin,
    trackCtaLoginSuccess
  };
})();

