/**
 * Loyalty Spotlight API Client
 * Handles all API calls to Yotpo Loyalty and Shopify APIs
 */

class LoyaltySpotlightClient {
  constructor(config = {}) {
    this.merchantId = config.merchantId;
    // Validate merchantGuid - must be a string GUID, not a numeric merchantId
    // If invalid, set to null to prevent API calls with wrong guid
    if (config.merchantGuid && typeof config.merchantGuid === 'string' && !/^\d+$/.test(config.merchantGuid)) {
      this.merchantGuid = config.merchantGuid;
    } else {
      console.warn('LoyaltySpotlightClient: Invalid merchantGuid provided. Expected a non-numeric string GUID, got:', config.merchantGuid);
      this.merchantGuid = null;
    }
    this.storeId = config.storeId;
    this.loyaltyStorefrontUrl = 'https://storefront.yotpo.com/loyalty';
    this.baseUrl = 'https://loyalty.yotpo.com';
    this.customerToken = null;
  }

  /**
   * Fetch customer token from Shopify app
   */
  async fetchCustomerToken() {
    try {
      const response = await fetch('/apps/loggedincustomer', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include'
      });

      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      this.customerToken = data?.token || null;
      return this.customerToken;
    } catch (error) {
      return null;
    }
  }

  /**
   * Get customer email from multiple sources
   */
  getCustomerEmail() {
    if (window.customerEmail) {
      return window.customerEmail;
    }

    if (window.ShopifyAnalytics?.meta?.page?.customerEmail) {
      return window.ShopifyAnalytics.meta.page.customerEmail;
    }

    if (window.meta?.page?.customerEmail) {
      return window.meta.page.customerEmail;
    }

    return null;
  }

  /**
   * Get customer ID from multiple sources
   */
  getCustomerId() {
    if (window.customerId) {
      return window.customerId;
    }

    if (window.ShopifyAnalytics?.meta?.page?.customerId) {
      return window.ShopifyAnalytics.meta.page.customerId;
    }

    if (window.meta?.page?.customerId) {
      return window.meta.page.customerId;
    }

    return null;
  }

  /**
   * Build headers for customer API requests
   */
  async buildCustomerHeaders() {
    const customerEmail = this.getCustomerEmail();
    const customerId = this.getCustomerId();

    if (!this.customerToken) {
      await this.fetchCustomerToken();
    }

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    if (customerEmail) headers.append('X-Customer-Email', customerEmail);
    if (customerId) headers.append('X-Customer-Store-Account-Id', customerId);
    if (this.customerToken) headers.append('X-Customer-Token', this.customerToken);

    return { headers, customerEmail, customerId };
  }

  /**
   * Fetch available redemption options
   */
  async fetchRedemptionOptions() {
    // Validate merchantGuid - must be a string GUID, not a numeric merchantId
    if (!this.merchantGuid || typeof this.merchantGuid !== 'string' || /^\d+$/.test(this.merchantGuid)) {
      console.warn('Spotlight: Invalid or missing merchantGuid. Cannot fetch redemption options.');
      return [];
    }

    try {
      const apiUrl = `${this.baseUrl}/api/public/v1/redemption_options?guid=${this.merchantGuid}&display_in_popup=true`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Redemption options API error: ${response.status}`);
      }

      const data = await response.json();
      
      const filteredData = (data || []).filter(option => {
        const discountType = option.discount_type;
        return discountType !== 'custom' && discountType !== 'custom_reward' && discountType !== 'product';
      });
      
      return filteredData;
    } catch (error) {
      return [];
    }
  }

  /**
   * Fetch customer loyalty data
   */
  async fetchCustomerData() {
    const { headers, customerEmail, customerId } = await this.buildCustomerHeaders();

    if (!customerEmail && !customerId) {
      throw new Error('Customer not logged in');
    }

    const apiUrl = `${this.loyaltyStorefrontUrl}/v3/stores/${this.storeId}/customer_view/spotlight`;

    const response = await fetch(apiUrl, { headers });

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      throw new Error(`Spotlight API error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  }

  /**
   * Redeem a loyalty reward
   */
  async redeemReward(optionId, amount, customerEmail, customerId) {
    const shopCurrency = window.Shopify?.currency?.active ||
                        window.ShopifyAnalytics?.meta?.currency ||
                        'USD';

    const payload = {
      merchant_id: this.merchantId,
      customer_email: customerEmail,
      customer_token: this.customerToken,
      customer_external_id: customerId,
      redemption_option_id: optionId,
      delayPointDeduction: true,
      amount: amount,
      currency: shopCurrency,
      redemption_source: 'spotlight'
    };

    const response = await fetch(`${this.baseUrl}/api/v1/point_redemptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Redemption failed: ${response.status}`);
    }

    return await response.json();
  }

  /**
   * Get current discount codes from cart (for building update payload)
   */
  _getCartDiscountCodes(cart) {
    const codes = [];
    if (cart.cart_level_discount_applications) {
      cart.cart_level_discount_applications.forEach(discount => {
        if (discount.type === 'discount_code' && discount.title) {
          codes.push(discount.title);
        }
      });
    }
    if (cart.discount_codes && Array.isArray(cart.discount_codes)) {
      cart.discount_codes.forEach(discount => {
        if (discount.code && !codes.includes(discount.code)) {
          codes.push(discount.code);
        }
      });
    }
    if (cart.discount_code && !codes.includes(cart.discount_code)) {
      codes.push(cart.discount_code);
    }
    return codes;
  }

  /**
   * Apply discount code to cart via /cart/update.js (avoids /discount/CODE and discount_code cookie used by checkout)
   */
  async applyDiscount(code) {
    const cart = await this.getCart();
    const normalizedNew = (code || '').trim();
    if (!normalizedNew) {
      return cart;
    }

    const existingCodes = this._getCartDiscountCodes(cart);
    if (existingCodes.some(c => (c || '').toLowerCase().trim() === normalizedNew.toLowerCase())) {
      await this._dispatchCartUpdateEvents(cart);
      return cart;
    }

    const discountValue = existingCodes.length
      ? [...existingCodes, normalizedNew].join(',')
      : normalizedNew;

    const cartUpdateUrl = (typeof window !== 'undefined' && window.Shopify?.routes?.root)
      ? window.Shopify.routes.root + 'cart/update.js'
      : '/cart/update.js';

    const response = await fetch(cartUpdateUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ discount: discountValue })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.message || `Failed to apply discount: ${response.status}`);
    }

    const updatedCart = await response.json();
    await this._dispatchCartUpdateEvents(updatedCart);
    return updatedCart;
  }

  _verifyDiscountInCart(cart, code) {
    if (!cart || !code) return false;

    const normalizedCode = code.toLowerCase().trim();
    if (cart.discount_codes && Array.isArray(cart.discount_codes)) {
      if (cart.discount_codes.some(d => (d.code || '').toLowerCase().trim() === normalizedCode)) return true;
    }
    if (cart.cart_level_discount_applications) {
      const found = cart.cart_level_discount_applications.some(discount => {
        if (discount.type === 'discount_code' && discount.title) {
          return discount.title.toLowerCase().trim() === normalizedCode;
        }
        return false;
      });
      if (found) return true;
    }
    if (cart.discount_code && cart.discount_code.toLowerCase().trim() === normalizedCode) {
      return true;
    }
    return false;
  }

  /** True only if code is in cart and applicable (e.g. discount_codes[].applicable !== false). */
  isDiscountApplicableInCart(cart, code) {
    if (!cart || !code) return false;
    const norm = code.toLowerCase().trim();
    if (cart.discount_codes && Array.isArray(cart.discount_codes)) {
      const d = cart.discount_codes.find(d => (d.code || '').toLowerCase().trim() === norm);
      if (d) return d.applicable !== false;
    }
    if (cart.cart_level_discount_applications && cart.cart_level_discount_applications.some(d => (d.title || d.code || '').toLowerCase().trim() === norm)) {
      return true;
    }
    return false;
  }

  /**
   * Remove discount code from cart
   * 
   * Uses /cart/update.js with discount: '' to clear all discounts,
   * then reapplies any remaining discount codes we want to keep.
   */
  async removeDiscount(code) {
    const cart = await this.getCart();
    
    const allCodes = [];
    if (cart.cart_level_discount_applications) {
      cart.cart_level_discount_applications.forEach(discount => {
        if (discount.type === 'discount_code' && discount.title) {
          allCodes.push(discount.title);
        }
      });
    }
    if (cart.discount_codes && Array.isArray(cart.discount_codes)) {
      cart.discount_codes.forEach(discount => {
        if (discount.code && !allCodes.includes(discount.code)) {
          allCodes.push(discount.code);
        }
      });
    }
    if (cart.discount_code && !allCodes.includes(cart.discount_code)) {
      allCodes.push(cart.discount_code);
    }

    const codeToRemove = code.toLowerCase().trim();
    const codeExists = allCodes.some(c => c.toLowerCase().trim() === codeToRemove);
    if (!codeExists) {
      return cart;
    }

    const remainingCodes = allCodes.filter(c => c.toLowerCase().trim() !== codeToRemove);

    const response = await fetch('/cart/update.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ discount: '' })
    });

    if (!response.ok) {
      throw new Error('Failed to clear discount codes');
    }

    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      localStorage.removeItem('__ui');
    } catch (e) {
    }

    try {
      await fetch('/discount/CLEAR', { method: 'GET' });
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (e) {
    }

    for (const discountCode of remainingCodes) {
      await this.applyDiscount(discountCode);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    const finalCart = await this.getCart();
    this._dispatchCartUpdateEvents(finalCart);

    return finalCart;
  }

  async _dispatchCartUpdateEvents(cart = null) {
    if (typeof window === 'undefined') return;
    const cartData = cart || await this.getCart();
    
    await this._updateCartDrawerUI(cartData);
    
    window.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart: cartData } }));
    window.dispatchEvent(new CustomEvent('ajaxCart:updated', { detail: { cart: cartData } }));
    if (typeof window.jQuery !== 'undefined') {
      window.jQuery(document).trigger('cart:updated', [cartData]);
      window.jQuery(document).trigger('ajaxCart:updated', [cartData]);
    }
  }

  async _updateCartDrawerUI(cart) {
    if (!cart || typeof document === 'undefined') return;

    try {
      await this._updateCartDrawerContent(cart);
      
      if (cart.total_discount && cart.total_discount > 0) {
        const discountVisible = this._checkDiscountVisibleInDrawer(cart);
        if (!discountVisible) {
          setTimeout(() => {
            window.location.reload();
          }, 500);
          return;
        }
      }
    } catch (error) {
    }
  }

  _checkDiscountVisibleInDrawer(cart) {
    if (!cart || !cart.total_discount || cart.total_discount <= 0) {
      return true;
    }

    const cartDrawer = document.querySelector('cart-drawer, .cart-drawer, #cart-drawer, [class*="cart-drawer"]');
    if (!cartDrawer) {
      return true;
    }

    const isDrawerOpen = cartDrawer.classList.contains('active') || 
                        cartDrawer.classList.contains('open') ||
                        cartDrawer.hasAttribute('open') ||
                        window.getComputedStyle(cartDrawer).display !== 'none';

    if (!isDrawerOpen) {
      return true;
    }

    const formattedDiscount = this._formatMoney(cart.total_discount);
    const discountText = `-${formattedDiscount}`;
    
    const discountElements = cartDrawer.querySelectorAll('.cart-discount, [data-cart-discount], .cart__discount, [data-discount], .discount-code, [class*="discount"]');
    
    for (const el of discountElements) {
      const text = el.textContent || el.innerText || '';
      if (text.includes(discountText) || text.includes(formattedDiscount) || text.includes('-')) {
        return true;
      }
    }

    const drawerHTML = cartDrawer.innerHTML || '';
    if (drawerHTML.includes(discountText) || drawerHTML.includes(formattedDiscount)) {
      return true;
    }

    return false;
  }

  async _updateCartDrawerContent(cart) {
    try {
      this._updateDiscountDisplayInCart(cart);
      
      const cartDrawer = document.querySelector('cart-drawer, .cart-drawer, #cart-drawer, [class*="cart-drawer"]');
      const isDrawerOpen = cartDrawer && (
        cartDrawer.classList.contains('active') || 
        cartDrawer.classList.contains('open') ||
        cartDrawer.hasAttribute('open') ||
        window.getComputedStyle(cartDrawer).display !== 'none'
      );

      if (!isDrawerOpen) {
        return;
      }

      const response = await fetch('/cart?view=drawer');
      if (!response.ok) {
        return;
      }

      const drawerHTML = await response.text();
      
      if (cartDrawer && drawerHTML) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = drawerHTML;
        
        const discountElements = tempDiv.querySelectorAll('.cart-discount, [data-discount], .discount-code, [class*="discount"]');
        if (discountElements.length > 0) {
          const currentDiscountElements = cartDrawer.querySelectorAll('.cart-discount, [data-discount], .discount-code, [class*="discount"]');
          
          discountElements.forEach((newEl, index) => {
            if (currentDiscountElements[index]) {
              currentDiscountElements[index].innerHTML = newEl.innerHTML;
              currentDiscountElements[index].className = newEl.className;
              currentDiscountElements[index].setAttribute('style', newEl.getAttribute('style') || '');
            }
          });
        }
      }
    } catch (error) {
    }
  }

  _updateDiscountDisplayInCart(cart) {
    const discountCodes = [];
    if (cart.cart_level_discount_applications) {
      cart.cart_level_discount_applications.forEach(discount => {
        if (discount.type === 'discount_code' && discount.title) {
          discountCodes.push(discount.title);
        }
      });
    }
    if (cart.discount_code && !discountCodes.includes(cart.discount_code)) {
      discountCodes.push(cart.discount_code);
    }

    if (discountCodes.length > 0) {
      const discountCodeElements = document.querySelectorAll('.cart-discount-code, [data-discount-code], .discount-code, [class*="discount-code"]');
      discountCodeElements.forEach(el => {
        el.textContent = discountCodes.join(', ');
        el.style.display = '';
      });
    }

    if (cart.total_discount && cart.total_discount > 0) {
      const formattedDiscount = this._formatMoney(cart.total_discount);
      document.querySelectorAll('.cart-discount-amount, [data-discount-amount], .discount-amount').forEach(el => {
        el.textContent = `-${formattedDiscount}`;
        el.style.display = '';
      });
    }
  }

  _formatMoney(cents) {
    if (window.Shopify?.formatMoney) {
      return window.Shopify.formatMoney(cents);
    }
    
    const currency = window.Shopify?.currency?.active || 
                    window.ShopifyAnalytics?.meta?.currency || 
                    'USD';
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(cents / 100);
  }

  async getCart() {
    const response = await fetch('/cart.js');
    
    if (!response.ok) {
      throw new Error('Failed to fetch cart');
    }

    return await response.json();
  }

}

window.LoyaltySpotlightClient = LoyaltySpotlightClient;

