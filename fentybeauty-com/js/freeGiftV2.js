/**
 * freeGiftV2.js - Free Gift V2 Feature Module
 *
 * This file is part of the Kite theme extension file splitting system.
 * It contains the gfgFreeGiftV2 feature for next-gen free gift campaigns.
 *
 * Layered architecture:
 *   CORE LAYER: rules, cart, multiplier, eligibility, text (shared across all UI modes)
 *   UI LAYER:   ui.v2 (native v2 design) | ui.v1Compat (future: migrated merchants)
 *
 * Loading conditions:
 * - Loads when: freeGiftsV2.length > 0
 * - Dependencies: base (freeGiftLogicv1.js)
 *
 * Dependencies (from freeGiftLogicv1.js — always loaded):
 *   gfg.utility.* (cart API, currency, debug)
 *   gfg.f.checkIfCartItemIsPartOfValidCollectionList()
 *   gfg.customDiscountValidationFunctions.getLatestCartItemsProductData()
 *   gfg.state.* (page_type, cartData, shadowRoot)
 */

(function () {
  "use strict";

  // ============ DEPENDENCY CONFIGURATION ============
  var DEPENDENCIES = [
    { module: 'base', event: 'gfg:module:base' }
  ];

  // ============ MODULE INITIALIZATION ============
  var initialized = false;

  /**
   * Main module initialization function. Creates the freeGiftV2 module object,
   * registers it on the global `gfg` namespace, and dispatches the module loaded event.
   * Guarded by the `initialized` flag to prevent double-initialization.
   */
  function initFreeGiftV2Module() {
    if (initialized) return;
    initialized = true;

    try {
      // Check if gfgFreeGiftV2 is already defined (and not a stub)
      if (gfg.gfgFreeGiftV2 && !gfg.gfgFreeGiftV2._isStub) {
        gfg.utility.debugConsole("freeGiftV2: gfgFreeGiftV2 already exists, registering module...");
        if (window.gfgFileStatus) {
          window.gfgFileStatus.freeGiftV2 = "LOADED";
        }
        document.dispatchEvent(new CustomEvent('gfg:module:loaded', { detail: { moduleName: 'freeGiftV2' } }));
        return;
      }

  // ─── CONSTANTS ──────────────────────────────────────────────────────────────

  const ROW_STATES = {
    LOCKED: "locked",
    UNLOCKED: "unlocked",
    ADDED: "added",
    DISABLED: "disabled",
    LOADING: "loading",
    OUT_OF_STOCK: "out_of_stock",
  };

  const FREE_GIFT_PROPERTY = "_free_product";
  const RULE_ID_PROPERTY = "_rule_id";
  const PROMO_NAME_PROPERTY = "_kite_promo_name";
  const DEBOUNCE_MS = 100;
  const CIRCUMFERENCE = 2 * Math.PI * 18; // r=18 for SVG progress ring

  // SVG icons as constants to avoid re-creating strings
  // Lock icon paths centered at (22,22) in the 44×44 viewBox
  const LOCK_ICON_PATH = `<path d="M22 22.5v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><rect x="17.5" y="20.5" width="9" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M20 20.5v-2a2 2 0 0 1 4 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>`;
  const CHECK_ICON_SVG = `<svg class="gfgFGv2-check-icon" viewBox="0 0 44 44" width="44" height="44"><circle cx="22" cy="22" r="18" fill="#4caf50"/><path d="M15 22l4.5 4.5L29.5 17" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;
  const CHEVRON_SVG = `<svg class="gfgFGv2-chevron" viewBox="0 0 24 24" width="20" height="20"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;

  // ─── HELPERS ─────────────────────────────────────────────────────────────────

  /** Check if a cart line item is a free gift (has _free_product: "true" property) */
  const isFreeGiftItem = (item) => item?.properties?.[FREE_GIFT_PROPERTY] === "true";

  /** Check if a cart line item is a subscription product (has an active selling plan) */
  const isSubscriptionItem = (item) => !!item?.selling_plan_allocation?.selling_plan;

  /**
   * Generate a hash string representing the current cart state.
   * Used to detect cart changes and skip redundant processing.
   * Format: "{itemCount}_{totalPrice}_{variantId}:{qty}_..."
   * @param {Object} cartData - Shopify cart object
   * @returns {string|null} Hash string, or null if cart data is invalid
   */
  const hashCart = (cartData) => {
    if (!cartData?.items) return null;
    let hash = `${cartData.item_count}_${cartData.total_price}`;
    for (const it of cartData.items) {
      hash += `_${it.variant_id}:${it.quantity}`;
    }
    return hash;
  };

  /**
   * Create a debounced version of a function that delays execution until
   * after `ms` milliseconds have elapsed since the last invocation.
   * @param {Function} fn - The function to debounce
   * @param {number} ms - Delay in milliseconds
   * @returns {Function} Debounced function
   */
  const debounce = (fn, ms) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), ms);
    };
  };

  /** Clamp a numeric value between 0 and 1 (inclusive). Used for progress calculations. */
  const clamp01 = (v) => Math.min(1, Math.max(0, v));

  /** Map fontStyle config value ("bold"/"medium"/"regular") to CSS font-weight numeric value */
  const _fontWeight = (style) => style === "bold" ? "700" : style === "medium" ? "600" : "400";

  /** Extract numeric variant ID from variantId field, id field, or GraphQL gid:// format */
  const resolveVariantId = (obj) => {
    if (!obj) return "";
    const raw = obj.variantId || obj.id || "";
    const str = `${raw}`;
    if (str.includes("/")) return str.split("/").pop();
    return str;
  };

  /**
   * Resolve the locale-specific configuration object for multi-language support.
   * Falls back to English ('en') if the current locale is not available.
   * @param {Object} configuration - Configuration object with locale keys (e.g., { en: {...}, fr: {...} })
   * @returns {Object} The resolved locale configuration
   */
  const getConfigForLocale = (configuration) => {
    if (!configuration) return configuration?.en || {};
    if (configuration.isMultiLanguageEnabled && typeof gfg !== "undefined" && gfg.utility?.getLocale) {
      const locale = gfg.utility.getLocale();
      if (locale && configuration[locale]) return configuration[locale];
      const normalized = gfg.utility.normalizeLangCode?.(locale);
      if (normalized && configuration[normalized]) return configuration[normalized];
    }
    return configuration.en || {};
  };

  // ─── NEW SCHEMA HELPERS ─────────────────────────────────────────────────────

  /** Safely extract segment list from a campaign (new segmented schema) */
  const getSegments = (campaign) => campaign.segmentsData?.segmentsList || [];

  /** 
   * Get all buyX rules from a segment (ALL must be satisfied to unlock the gift) 
   * except productHasSubscription that is in the rulesList for the discount function, we don't need it in SF
  */
  const getBuyXRules = (segment) => segment.buyXRulesData?.rulesList.filter(r => r.ruleType !== "productHasSubscription") || [];

  /** Extract gift products from getY rules, with quantity from valueQtyMap */
  const getGiftProducts = (segment) => {
    const getYRules = segment.getYRulesData?.rulesList || [];
    const productRule = getYRules.find(r => ["productVariants", "products"].includes(r.ruleType)) || getYRules[0];
    if (!productRule?.ruleValue?.value) return [];
    const products = productRule.ruleValue.value;
    const qtyMap = productRule.ruleValue.valueQtyMap || {};
    return products.map(p => {
      if (p.quantity != null) return p;
      const qty = qtyMap[p.productId] || qtyMap[p.graphqlId] || 1;
      return { ...p, quantity: qty };
    });
  };

  /** Get consistent segment ID for line item properties */
  const getSegmentId = (segment, index) => segment?.segmentId || `fg_rule_${index}`;

  /** Get discount type/value in display format from a segment */
  const getDiscountInfo = (segment) => ({
    type: (segment.discountType || "PERCENTAGE").toLowerCase() === "fixed" ? "fixed_amount" : "percentage",
    value: segment.discountValue ?? 100,
  });

  // ─── SESSION HELPERS (isAutoAddFreeGiftOnceOnly) ──────────────────────────────

  /** Get stable campaign ID for session tracking */
  const getCampaignId = (campaign) =>
    campaign.discountData_shopifyResponse?.discountId || campaign._id || "";

  /** Read auto-added gifts list from sessionStorage for a campaign */
  const getAutoAddedGiftsFromSession = (campaignId) => {
    try {
      return JSON.parse(window.sessionStorage.getItem(`gfgv2_autoAdded_${campaignId}`)) || [];
    } catch { return []; }
  };

  /** Record a gift as auto-added in sessionStorage (persists even after removal) */
  const trackAutoAddedGift = (campaignId, variantId, ruleId) => {
    try {
      const list = getAutoAddedGiftsFromSession(campaignId);
      if (!list.find(g => g.variantId === variantId && g.ruleId === ruleId)) {
        list.push({ variantId, ruleId });
        window.sessionStorage.setItem(`gfgv2_autoAdded_${campaignId}`, JSON.stringify(list));
      }
    } catch {}
  };

  // ─── MODULE ──────────────────────────────────────────────────────────────────

  const freeGiftV2 = {

    _isStub: false,

    // ── STATE ────────────────────────────────────────────────────────────────

    state: {
      campaigns: [],
      campaignResults: [],
      cartGiftMap: {},
      uiExpanded: {},  // Keyed by "${campaignIndex}_${context}" (e.g., "0_pdp", "0_sidecart")
      isProcessing: false,
      lastCartHash: null,
      shopifyProductCache: {},
      selectedVariants: {},
      containerRefs: {},
      lastRenderData: {},  // Per-campaign per-context: last renderData for diff-based updates
      debugTrace: [],      // Debug trace log — inspect via gfg.gfgFreeGiftV2.state.debugTrace
      animatingCampaigns: new Set(),  // Campaign indices currently in add-animation — blocks external re-renders
    },

    /** Push a debug trace entry with timestamp. Keeps last 200 entries. Only active when debug flag is on. */
    _trace(label, data) {
      const isDebug = gfg.state.CONSTANT_DEBUG_FLAG || localStorage.getItem("debug") === "true" || window.location.search.includes("kite_debug=1");
      if (!isDebug) return;
      const entry = { t: new Date().toISOString(), label, ...(data || {}) };
      this.state.debugTrace.push(entry);
      if (this.state.debugTrace.length > 200) this.state.debugTrace.splice(0, this.state.debugTrace.length - 200);
      gfg.utility.debugConsole("[FGv2-TRACE]", label, data || "");
    },

    /**
     * Execute the merchant's custom script after a free gift is added to cart.
     * Mirrors V1 behavior from gfg.f.updateCartState (executeCustomScriptAfterFreeGiftAddition).
     * Only runs on non-cart pages for merchants created after the cutoff date.
     */
    _executeCustomScriptAfterFreeGiftAddition() {
      try {
        const script = gfg.settings.app?.executeCustomScriptAfterFreeGiftAddition;
        if (!script || script.trim() === "") return;
        if (window.location.pathname === "/cart") return;

        const userCreatedAt = new Date(gfg?.settings?.merchantInfo?.createdAt);
        const cutoffDate = new Date("2024-12-09");
        if (userCreatedAt <= cutoffDate) return;

        gfg.utility.debugConsole("[FGv2] Executing executeCustomScriptAfterFreeGiftAddition");
        const fn = new Function(script);
        fn();
      } catch (e) {
        gfg.utility.debugError("[FGv2] executeCustomScriptAfterFreeGiftAddition error", e);
      }
    },

    // ── LIFECYCLE ────────────────────────────────────────────────────────────

    /**
     * Synchronous re-render from cached data. Used after DOM replacement
     * (cart drawer refresh) when the widget containers are destroyed but
     * campaign data and render data are still valid.
     * No cart fetch, no debounce — renders immediately.
     */
    rerender() {
      try {
        if (this.state.campaigns.length === 0) return false;

        const cachedKeys = Object.keys(this.state.lastRenderData);
        if (cachedKeys.length === 0) return false;

        this._trace("rerender", { cachedKeys, isProcessing: this.state.isProcessing, lastCartHash: this.state.lastCartHash });
        gfg.utility.debugConsole("[FGv2] rerender: restoring from cached render data");

        // Clear stale container refs (DOM was replaced)
        for (const [key, ref] of Object.entries(this.state.containerRefs)) {
          if (!document.body.contains(ref) &&
              !gfg.state.shadowRoot?.reference?.contains(ref)) {
            delete this.state.containerRefs[key];
          }
        }

        // Re-render each campaign into its eligible contexts using cached data
        for (let i = 0; i < this.state.campaigns.length; i++) {
          const campaign = this.state.campaigns[i];
          if (!campaign?.isEnabled) continue;
          if (!campaign.widgetSettings?.isEnabled) continue;

          const contexts = this.ui.v2._getEligibleContexts(i);
          for (const ctx of contexts) {
            const refKey = `${i}_${ctx}`;
            let rd = this.state.lastRenderData[refKey];
            if (!rd && this.state.campaignResults[i] && gfg.state.cartData) {
              // No per-context cache — rebuild render data from rule results.
              // This handles contexts that failed on initial render (e.g., sidecart
              // when cart drawer was lazy-loaded) but are now available in the DOM.
              // GUARD: skip if _handleClick cleared lastRenderData to protect an
              // in-progress add/remove animation (loading → checkmark → endgame).
              // _renderAfterCartOp will handle the final render for this campaign.
              if (this.state.animatingCampaigns.has(i)) continue;
              rd = this.buildRenderData(campaign, i, this.state.campaignResults[i], gfg.state.cartData);
            }
            if (rd) {
              // Force full rebuild by clearing the cache for this key before rendering
              delete this.state.lastRenderData[refKey];
              this.ui.v2._renderToContext(i, ctx, rd);
            }
          }
        }

        return true;
      } catch (e) {
        gfg.utility.debugError("[FGv2] rerender error", e);
        return false;
      }
    },

    /**
     * Initialize the Free Gift V2 module with campaign data.
     * Sets up campaigns, binds the debounced cart change handler, and triggers
     * the first cart processing cycle. If already initialized, attempts a
     * synchronous rerender from cache before falling back to a debounced cart check.
     * @param {Array} campaigns - Array of free gift campaign configuration objects
     */
    init(campaigns) {
      try {
        if (!campaigns || campaigns.length === 0) {
          gfg.utility.debugConsole("[FGv2] init SKIP: no campaigns provided");
          return;
        }

        // If already initialized, try synchronous rerender from cache first.
        // This avoids the debounced _processCartChange which causes a 100ms gap
        // where the widget is missing — triggering MutationObserver loops.
        if (this.state.campaigns.length > 0 && this._debouncedOnCartChange) {
          const callerStack = new Error().stack?.split("\n").slice(1, 4).map(l => l.trim()).join(" < ");
          if (this.rerender()) {
            // Rerender succeeded from cache. Schedule a background cart check to pick up
            // any changes, but do NOT reset lastCartHash to null — let _processCartChange
            // compare against the real last-known hash. This prevents self-triggered loops
            // where our own updateCartState → MutationObserver → init → null hash → reprocess.
            this._trace("init:re-init:rerender-ok", { hashBefore: this.state.lastCartHash, caller: callerStack });
            this._debouncedOnCartChange();
            return;
          }
          // No cached data — fall through to debounced check.
          // Reset hash only in this case since we have no cached render data,
          // meaning we need a full processing cycle to build state from scratch.
          this._trace("init:re-init:no-cache", { hashBefore: this.state.lastCartHash, resetToNull: true, caller: callerStack });
          gfg.utility.debugConsole("[FGv2] already initialized, triggering cart check");
          this.state.lastCartHash = null;
          this._debouncedOnCartChange();
          return;
        }

        this._trace("init:first", { campaignCount: campaigns.length });
        gfg.utility.debugConsole("[FGv2] init with", campaigns.length, "campaigns");

        this.state.campaigns = campaigns;
        this.state.campaignResults = new Array(campaigns.length);
        // uiExpanded defaults resolved per-context in _renderToContext using campaign.widgetSettings.isExpandedByDefault
        this.state.uiExpanded = {};

        // Bind the debounced handler
        this._debouncedOnCartChange = debounce(() => this._processCartChange(), DEBOUNCE_MS);

        // Initial processing
        this._processCartChange();
      } catch (e) {
        gfg.utility.debugError("[FGv2] init error", e);
      }
    },

    /**
     * External entry point called by the bootstrap (freeGiftLogicv1.js) when the cart changes.
     * Delegates to the debounced cart change handler to avoid redundant processing.
     * @param {Object} cartData - Shopify cart object (not used directly; fresh cart is fetched internally)
     */
    onCartChange(cartData) {
      try {
        const callerStack = new Error().stack?.split("\n").slice(1, 4).map(l => l.trim()).join(" < ");
        this._trace("onCartChange", { caller: callerStack });
        this._debouncedOnCartChange();
      } catch (e) {
        gfg.utility.debugError("[FGv2] onCartChange error", e);
      }
    },

    /**
     * Tear down the module: remove event listeners from all container refs
     * and reset all internal state back to defaults. Called when campaigns are
     * disabled or the module needs a clean re-initialization.
     */
    destroy() {
      const { containerRefs } = this.state;
      for (const [key, ref] of Object.entries(containerRefs)) {
        if (ref?._fgv2ClickHandler) {
          ref.removeEventListener("click", ref._fgv2ClickHandler);
          ref.removeEventListener("change", ref._fgv2ChangeHandler);
        }
      }
      this.state = {
        campaigns: [], campaignResults: [], cartGiftMap: {},
        uiExpanded: {}, isProcessing: false,
        lastCartHash: null, shopifyProductCache: {}, selectedVariants: {},
        containerRefs: {}, lastRenderData: {},
        debugTrace: [], animatingCampaigns: new Set(),
      };
    },

    // ── MAIN PROCESSING LOOP ─────────────────────────────────────────────────

    /**
     * Main processing loop: fetches the latest cart, checks for changes via hash comparison,
     * loads product/collection data needed for collection-based rules, then evaluates
     * and renders each campaign sequentially. Guarded by isProcessing flag to prevent
     * concurrent executions.
     */
    async _processCartChange() {
      if (this.state.isProcessing) {
        this._trace("processCartChange:SKIP:busy");
        gfg.utility.debugConsole("[FGv2] _processCartChange SKIP: already processing");
        return;
      }
      this.state.isProcessing = true;
      try {
        gfg.utility.debugConsole("[FGv2] _processCartChange: fetching cart...");
        const cartData = await gfg.utility.getCartV2();
        if (!cartData?.items) {
          gfg.utility.debugConsole("[FGv2] _processCartChange SKIP: no cart data");
          this.state.isProcessing = false;
          return;
        }

        // Log cart items summary for debug
        const cartSummary = cartData.items.map(it => ({
          id: it.variant_id,
          product_id: it.product_id,
          qty: it.quantity,
          key: it.key,
          isFreeGift: isFreeGiftItem(it),
          ruleId: it.properties?.[RULE_ID_PROPERTY] || "",
          promoName: it.properties?.[PROMO_NAME_PROPERTY] || "",
          price: it.price,
          discounted_price: it.discounted_price,
        }));

        // Skip if cart hasn't changed
        const cartHash = hashCart(cartData);
        const prevHash = this.state.lastCartHash;
        if (cartHash === prevHash) {
          this._trace("processCartChange:SKIP:hashMatch", { hash: cartHash });
          gfg.utility.debugConsole("[FGv2] _processCartChange SKIP: cart unchanged (hash match)");
          this.state.isProcessing = false;
          return;
        }
        this.state.lastCartHash = cartHash;

        this._trace("processCartChange:START", {
          prevHash,
          newHash: cartHash,
          itemCount: cartData.item_count,
          totalPrice: cartData.total_price,
          items: cartSummary,
        });

        // Fetch product/collection data for cart items (needed for collection-based rules)
        await gfg.customDiscountValidationFunctions.getLatestCartItemsProductData(cartData);

        for (let i = 0; i < this.state.campaigns.length; i++) {
          await this._processCampaign(i, cartData);
        }
      } catch (e) {
        gfg.utility.debugError("[FGv2] _processCartChange error", e);
      }
      this._trace("processCartChange:END", { hash: this.state.lastCartHash });
      this.state.isProcessing = false;
    },

    /**
     * Evaluate rules for a campaign. For GBP (goal-based progress bar) widgets,
     * delegates to checkIfFreeGiftIsUnlocked from the consolidated custom discount
     * module instead of using the built-in rules engine.
     * @param {Object} campaign - Campaign config object
     * @param {Object} cartData - Current Shopify cart object
     * @returns {Array} ruleResults array compatible with the rest of the pipeline
     */
    async _evaluateRules(campaign, cartData) {
      if (campaign.isGBPWidget && typeof gfgConsolidatedCustomDiscount !== 'undefined' && gfgConsolidatedCustomDiscount) {
        const segments = getSegments(campaign);
        const results = [];
        for (const seg of segments) {
          const unlocked = await gfgConsolidatedCustomDiscount.gfgProgressBar.f
            .checkIfFreeGiftIsUnlocked(campaign.ccdRefId, seg.freeGiftGoalId, cartData);
          results.push({
            met: !!unlocked,
            progress: unlocked ? 1 : 0,
            currentValue: 0,
            targetValue: 0,
            multiplier: unlocked ? 1 : 0,
            ruleType: null,
            qualifierType: null,
          });
        }
        return results;
      }
      return this.rules.evaluateAll(campaign, cartData);
    },

    /**
     * Process a single campaign: check eligibility, prefetch gift product data,
     * evaluate rules, sync gifts with cart (auto-add mode) or auto-remove unmet gifts
     * (manual mode), build render data, and render the UI widget. Fires confetti
     * animation for auto-add campaigns when new gifts are added.
     * @param {number} campaignIndex - Index of the campaign in state.campaigns
     * @param {Object} cartData - Current Shopify cart object
     */
    async _processCampaign(campaignIndex, cartData) {
      try {
        // Skip campaigns mid-animation — _renderAfterCartOp owns the render lifecycle
        if (this.state.animatingCampaigns.has(campaignIndex)) {
          this._trace("processCampaign:SKIP:animating", { campaignIndex });
          gfg.utility.debugConsole(`[FGv2] campaign[${campaignIndex}] SKIP: add-animation in progress`);
          return;
        }

        const campaign = this.state.campaigns[campaignIndex];
        if (!campaign?.isEnabled) {
          gfg.utility.debugConsole(`[FGv2] campaign[${campaignIndex}] SKIP: not enabled (isEnabled=${campaign?.isEnabled})`);
          return;
        }

        // Step 3: Eligibility checks
        if (!this.eligibility.check(campaign)) {
          gfg.utility.debugConsole(`[FGv2] campaign[${campaignIndex}] SKIP: eligibility check failed (see above for reason)`);
          this.ui.hide(campaignIndex);
          return;
        }
        gfg.utility.debugConsole(`[FGv2] campaign[${campaignIndex}] PASSED all eligibility checks`);

        // Prefetch Shopify product data for OOS checks
        await this._prefetchGiftProductData(campaign);

        // Step 2: Evaluate all rules (GBP widgets delegate to progress bar module)
        const ruleResults = await this._evaluateRules(campaign, cartData);
        this.state.campaignResults[campaignIndex] = ruleResults;

        freeGiftV2._trace("processCampaign:ruleResults", {
          campaignIndex,
          rules: ruleResults.map((rr, ri) => ({
            ri,
            met: rr.met,
            multiplier: rr.multiplier,
            currentValue: rr.currentValue,
            targetValue: rr.targetValue,
            progress: rr.progress,
            ruleType: rr.ruleType,
            qualifierType: rr.qualifierType,
          })),
        });

        // Step 4 + 5: Cart sync (auto-add/auto-remove with multiplier)
        let cartChanged = false;
        let autoAddGiftsAdded = false;
        if (campaign.advancedSettings?.isAutoAdd) {
          const syncResult = await this.cart.syncGiftsWithCart(campaign, campaignIndex, ruleResults, cartData);
          cartChanged = syncResult.changed;
          autoAddGiftsAdded = syncResult.giftsAdded;
        } else {
          // Manual mode: auto-remove gifts for rules no longer met
          cartChanged = await this.cart.autoRemoveForUnmetRules(campaign, campaignIndex, ruleResults, cartData);
        }
        // Only re-fetch cart if we actually made changes
        if (cartChanged) {
          const hashBeforeRefetch = this.state.lastCartHash;
          cartData = await gfg.utility.getCartV2({ forceRefresh: true });
          const newHash = hashCart(cartData);
          this.state.lastCartHash = newHash;
          const refetchedItems = cartData.items.map(it => ({
            id: it.variant_id,
            product_id: it.product_id,
            qty: it.quantity,
            key: it.key,
            isFreeGift: isFreeGiftItem(it),
            ruleId: it.properties?.[RULE_ID_PROPERTY] || "",
            price: it.price,
          }));
          freeGiftV2._trace("processCampaign:postSync:refetch", {
            campaignIndex,
            cartChanged,
            hashBeforeRefetch,
            newHash,
            totalPrice: cartData.total_price,
            itemCount: cartData.item_count,
            items: refetchedItems,
          });
        }

        // Only build/render widget UI when the widget is enabled
        if (campaign.widgetSettings?.isEnabled) {
          const renderData = this.buildRenderData(campaign, campaignIndex, ruleResults, cartData);

          // Render widget SYNCHRONOUSLY first so lastRenderData is updated with the correct
          // state (e.g. gift as ADDED) BEFORE gfg.f.updateCartState triggers a theme cart
          // refresh. If the theme drawer re-renders and destroys the widget DOM, rerender()
          // will restore from lastRenderData — which must already reflect the new state.
          freeGiftV2.ui.render(campaign, campaignIndex, renderData);
        }

        // Trigger theme cart UI refresh only after the widget is up-to-date.
        // This way any init() → rerender() chain triggered by the theme sees correct data.
        if (cartChanged) {
          freeGiftV2._trace("processCampaign:callingUpdateCartState", {
            campaignIndex,
            hashBeforeUpdateCartState: this.state.lastCartHash,
          });
          gfg.f.updateCartState(null, null, null, cartData);
        }

        // Fire confetti in the next frame after DOM is painted
        if (autoAddGiftsAdded && campaign.widgetSettings?.enableConfetti) {
          requestAnimationFrame(() => {
            for (const [key, container] of Object.entries(freeGiftV2.state.containerRefs)) {
              if (!key.startsWith(`${campaignIndex}_`)) continue;
              const checkIcon = container.querySelector(".gfgFGv2-check-icon");
              if (checkIcon) {
                freeGiftV2.ui.v2._fireConfetti(checkIcon);
              }
            }
          });
        }

        // Execute custom script after free gift auto-add (same as V1 behavior)
        if (autoAddGiftsAdded) {
          this._executeCustomScriptAfterFreeGiftAddition();
        }
      } catch (e) {
        gfg.utility.debugError(`[FGv2] _processCampaign error for index ${campaignIndex}`, e);
      }
    },

    // ── BUILD RENDER DATA (bridge between core and UI) ───────────────────────

    /**
     * Build the render data object that bridges the core logic layer and the UI layer.
     * Evaluates each rule's gift products to determine their row state (locked, unlocked,
     * added, disabled, out_of_stock), resolves status/title text templates, calculates
     * multiplier sessions, and assembles the complete widget configuration including
     * dropdown state, color/font config, and gift product details.
     * @param {Object} campaign - Campaign configuration object
     * @param {number} campaignIndex - Index of the campaign in state.campaigns
     * @param {Array} ruleResults - Array of rule evaluation results from rules.evaluateAll()
     * @param {Object} cartData - Current Shopify cart object
     * @returns {Object} Render data object consumed by the UI layer
     */
    buildRenderData(campaign, campaignIndex, ruleResults, cartData) {
      this._trace("buildRenderData", { campaignIndex, isAutoAdd: campaign.advancedSettings?.isAutoAdd, rulesMet: ruleResults.map(r => r.met) });
      const isAutoAdd = campaign.advancedSettings?.isAutoAdd || false;
      const configLocale = getConfigForLocale(campaign.widgetSettings?.configuration);
      const additionalFields = configLocale?.additionalFields || {};
      const globalConfig = configLocale?.globalConfig || {};
      const tierConfig = configLocale?.tierConfig || [];
      const colorConfig = campaign.widgetSettings?.colorConfig || {};
      const fontConfig = campaign.widgetSettings?.fontConfig || {};
      const campaignTitle = campaign.discountData_shopifyResponse?.title || campaign.title || "";

      const gifts = [];
      let unlockedCount = 0;
      let addedCount = 0;
      let totalGiftCount = 0;
      const segments = getSegments(campaign);

      for (let ri = 0; ri < ruleResults.length; ri++) {
        const rr = ruleResults[ri];
        const segment = segments[ri];
        if (!segment) continue;

        const freeGiftProducts = getGiftProducts(segment);
        const defaultMaxQty = freeGiftProducts.reduce((sum, p) => sum + (parseInt(p.quantity) || 1), 0);
        const maxQtyPerSession = parseInt(segment.totalLimit) || defaultMaxQty;
        const tierCfg = tierConfig[ri] || tierConfig[0] || {};

        // Count how many gifts from this segment are already in cart
        const addedGiftsForRule = this._countAddedGiftsForRule(campaign, segment, ri, cartData, campaignTitle);

        // Show all products in both modes (OOS products shown with out_of_stock state)
        const productsToShow = freeGiftProducts;

        // Calculate multiplier sessions for this segment
        const isMultiplierOn = campaign.advancedSettings?.multiplyFreeGiftWithTrigger || false;
        const maxMultiplierSessions = parseInt(segment.discountableSetLimit) || 1;
        let sessions = 1;
        if (isMultiplierOn && rr.met && rr.multiplier > 0) {
          sessions = Math.min(rr.multiplier, maxMultiplierSessions);
        }

        for (let pi = 0; pi < productsToShow.length; pi++) {
          const product = productsToShow[pi];
          const giftQty = parseInt(product.quantity) || 1;
          const giftCartInfo = this._getGiftCartInfo(product, segment, ri, cartData, campaignTitle);
          const isInCart = giftCartInfo.inCart;
          const cartQuantity = giftCartInfo.quantity; // units currently in cart

          // Resolve variant selection early (needed for OOS check)
          const selectedVariantKey = `${campaignIndex}_${ri}_${pi}`;
          const selectedVariantId = this.state.selectedVariants[selectedVariantKey] || null;

          // For multiplier: compute session-aware entitledQty
          // Pack other gifts into sessions first, then compute room for this gift
          let entitledQty = giftQty * sessions;
          if (!isAutoAdd && isMultiplierOn && sessions > 1) {
            const otherGiftsQty = addedGiftsForRule - cartQuantity;
            const fullSessionsByOthers = Math.floor(otherGiftsQty / maxQtyPerSession);
            const remainderByOthers = otherGiftsQty % maxQtyPerSession;
            let sessionAwareQty = 0;
            for (let s = 0; s < sessions; s++) {
              if (s < fullSessionsByOthers) continue;
              const room = (s === fullSessionsByOthers && remainderByOthers > 0)
                ? maxQtyPerSession - remainderByOthers
                : maxQtyPerSession;
              sessionAwareQty += Math.min(giftQty, room);
            }
            entitledQty = Math.min(entitledQty, sessionAwareQty);
          }
          const needsMoreForMultiplier = isMultiplierOn && isInCart && giftCartInfo.quantity < entitledQty;

          // Real-time availability checks using cached Shopify product data
          // isAnyAvailable: true if at least one variant is in stock (for row-level OOS state)
          // isSelectedAvailable: true if the specific selected variant is in stock
          const isAnyAvailable = product.available !== false && freeGiftV2._isAnyVariantAvailable(product);
          const isSelectedAvailable = product.available !== false && freeGiftV2._isProductAvailable(product, selectedVariantId);

          // Determine row state
          const isFullyClaimed = isInCart && cartQuantity >= entitledQty;

          let rowState;
          if (!rr.met && !isAnyAvailable) {
            rowState = ROW_STATES.OUT_OF_STOCK;
          } else if (!rr.met) {
            rowState = ROW_STATES.LOCKED;
          } else if (isFullyClaimed && !needsMoreForMultiplier) {
            rowState = ROW_STATES.ADDED;
            addedCount++;
          } else if (!isAnyAvailable) {
            rowState = ROW_STATES.OUT_OF_STOCK;
          } else if (needsMoreForMultiplier && (isAutoAdd || addedGiftsForRule < maxQtyPerSession * sessions)) {
            // Gift is in cart but user qualifies for more sessions — allow adding more (if total limit not reached)
            rowState = ROW_STATES.UNLOCKED;
          } else if (!isAutoAdd && addedGiftsForRule >= maxQtyPerSession * sessions) {
            // Limit reached — partially-in-cart gifts show ADDED (REMOVE button), others DISABLED
            rowState = isInCart ? ROW_STATES.ADDED : ROW_STATES.DISABLED;
            if (isInCart) addedCount++;
          } else {
            // Covers: not in cart (fresh) AND partially claimed (limit not yet reached)
            rowState = ROW_STATES.UNLOCKED;
          }

          if (rr.met) unlockedCount++;
          totalGiftCount++;

          // Resolve status text
          let statusText = "";
          if (rr.met) {
            statusText = this.text.resolve(
              tierCfg.conditionMet?.subtitle || additionalFields.conditionMetCartSubtitle || "Free gift unlocked",
              segment, rr, product, campaign
            );
          } else {
            statusText = this.text.resolve(
              tierCfg.conditionNotMet?.subtitle || "",
              segment, rr, product, campaign
            );
          }

          // Resolve title text
          const titleText = this.text.resolve(
            (rr.met ? tierCfg.conditionMet?.title : tierCfg.conditionNotMet?.title) || "{{FREE_GIFT_PRODUCT}}",
            segment, rr, product, campaign
          );

          // Build variant availability map from Shopify product cache (restricted to merchant-selected variants)
          const shopifyData = this.state.shopifyProductCache[product.handle];
          const variantAvailabilityMap = {};
          if (shopifyData?.variants?.length > 0) {
            const allowed = freeGiftV2._getAllowedVariantIds(product);
            for (const v of shopifyData.variants) {
              if (!allowed || allowed.has(`${v.id}`)) {
                variantAvailabilityMap[`${v.id}`] = v.available;
              }
            }
          }

          gifts.push({
            product,
            ruleIndex: ri,
            giftIndex: pi,
            segment,
            ruleResult: rr,
            rowState,
            statusText,
            titleText,
            progress: rr.progress,
            quantity: giftQty,
            cartQuantity,                                               // units currently in cart
            remainingQuantity: Math.max(0, entitledQty - cartQuantity), // units still to claim
            isAutoAdd,
            discountInfo: getDiscountInfo(segment),
            selectedVariantId,
            variantKey: selectedVariantKey,
            variantAvailabilityMap,
            isSelectedVariantOOS: isAnyAvailable && !isSelectedAvailable,
          });
        }
      }

      // isMultipleFreeGiftAllowed=false
      let visibleGifts = gifts;
      if (campaign.advancedSettings?.isMultipleFreeGiftAllowed === false) {
        const claimedRuleIndex = gifts.find(g => g.rowState === ROW_STATES.ADDED)?.ruleIndex;
        if (isAutoAdd && claimedRuleIndex !== undefined) {
          // Auto-add: hide lower tiers, show current + next higher tier
          const nextTierIndex = gifts.find(g => g.ruleIndex > claimedRuleIndex)?.ruleIndex;
          visibleGifts = gifts.filter(g =>
            g.ruleIndex === claimedRuleIndex || g.ruleIndex === nextTierIndex
          );
        } else if (!isAutoAdd && claimedRuleIndex !== undefined) {
          // Manual: show all tiers, but disable gifts from other rules
          for (const gift of gifts) {
            if (gift.ruleIndex !== claimedRuleIndex && gift.rowState === ROW_STATES.UNLOCKED) {
              gift.rowState = ROW_STATES.DISABLED;
            }
          }
        }
        // Recompute unlockedCount from visible gifts only (avoid showing total across all tiers)
        unlockedCount = visibleGifts.filter(g => g.ruleResult.met).length;
      }

      // Determine global dropdown state
      let dropdownGlobalState = "conditionNotMet";
      if (addedCount > 0) dropdownGlobalState = "conditionFulFilled";
      else if (unlockedCount > 0) dropdownGlobalState = "conditionInProgress";

      const globalCfg = globalConfig[dropdownGlobalState] || globalConfig.conditionNotMet || {};
      const notMetCfg = globalConfig.conditionNotMet || {};

      const isMultiGift = visibleGifts.length > 1 ||
        (segments.length > 1 && visibleGifts.length > 0);

      return {
        gifts: visibleGifts,
        isMultiGift,
        isAutoAdd,
        campaignIndex,
        dropdownState: {
          title: globalCfg.title || additionalFields.titleBarText || "Unlock FREE gifts",
          icon: notMetCfg.icon || "",
          unlockedCount,
          expanded: false,  // Overridden per-context in _renderToContext
          globalState: dropdownGlobalState,
        },
        config: {
          colors: colorConfig,
          fonts: fontConfig,
          texts: additionalFields,
          widgetSettings: campaign.widgetSettings || {},
          pillText: additionalFields.pillText || "",
          specialTag: additionalFields.specialTag || "",
        },
      };
    },

    /**
     * Count how many distinct gift products from a specific segment are currently in the cart.
     * Matches by campaign title, segment ID, and product ID. Deduplicates by product ID
     * so the same product with different variants counts as one.
     * @param {Object} campaign - Campaign configuration object
     * @param {Object} segment - The specific segment within the campaign
     * @param {number} ruleIndex - Index of the segment in segmentsData.segmentsList
     * @param {Object} cartData - Current Shopify cart object
     * @param {string} campaignTitle - Campaign title used to match line item properties
     * @returns {number} Count of distinct gift products from this segment in cart
     */
    _countAddedGiftsForRule(campaign, segment, ruleIndex, cartData, campaignTitle) {
      let count = 0;
      if (!cartData?.items) return count;
      const ruleId = getSegmentId(segment, ruleIndex);
      for (const item of cartData.items) {
        if (!isFreeGiftItem(item)) continue;
        if (item.properties[PROMO_NAME_PROPERTY] !== campaignTitle) continue;
        if (item.properties[RULE_ID_PROPERTY] !== ruleId) continue;
        count += item.quantity;
      }
      return count;
    },

    /**
     * Check if a specific gift product is already in the cart for a given segment.
     * Matches by campaign title, segment ID, and product ID.
     * @param {Object} product - Gift product configuration object
     * @param {Object} segment - The segment this gift belongs to
     * @param {number} ruleIndex - Index of the segment in segmentsData.segmentsList
     * @param {Object} cartData - Current Shopify cart object
     * @param {string} campaignTitle - Campaign title for line item property matching
     * @returns {boolean} True if the gift product is found in the cart
     */
    _isGiftInCart(product, segment, ruleIndex, cartData, campaignTitle) {
      if (!cartData?.items) return false;
      const ruleId = getSegmentId(segment, ruleIndex);
      for (const item of cartData.items) {
        if (!isFreeGiftItem(item)) continue;
        if (item.properties[PROMO_NAME_PROPERTY] !== campaignTitle) continue;
        if (item.properties[RULE_ID_PROPERTY] !== ruleId) continue;
        if (`${item.product_id}` === `${product.productId}`) return true;
      }
      return false;
    },

    /**
     * Get detailed cart information for a specific gift product: whether it's in cart,
     * its current quantity, and its line item key (for cart update/remove operations).
     * Aggregates across all matching line items to handle duplicates (multiple cart
     * lines with the same variant+rule but different Shopify cart keys).
     * @param {Object} product - Gift product configuration object
     * @param {Object} segment - The segment this gift belongs to
     * @param {number} ruleIndex - Index of the segment in segmentsData.segmentsList
     * @param {Object} cartData - Current Shopify cart object
     * @param {string} campaignTitle - Campaign title for line item property matching
     * @returns {Object} { inCart: boolean, quantity: number, lineKey: string|null, lineKeys: string[] }
     */
    _getGiftCartInfo(product, segment, ruleIndex, cartData, campaignTitle) {
      if (!cartData?.items) return { inCart: false, quantity: 0, lineKey: null, lineKeys: [] };
      const ruleId = getSegmentId(segment, ruleIndex);
      let totalQty = 0;
      const lineKeys = [];
      for (const item of cartData.items) {
        if (!isFreeGiftItem(item)) continue;
        if (item.properties[PROMO_NAME_PROPERTY] !== campaignTitle) continue;
        if (item.properties[RULE_ID_PROPERTY] !== ruleId) continue;
        if (`${item.product_id}` === `${product.productId}`) {
          totalQty += item.quantity;
          lineKeys.push(item.key);
        }
      }
      return {
        inCart: lineKeys.length > 0,
        quantity: totalQty,
        lineKey: lineKeys[0] || null,
        lineKeys,
      };
    },

    // ═══════════════════════════════════════════════════════════════════════════
    //  CORE LAYER — RULES
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * 3-tier market fallback for qualifier values.
     * 1) Exact market match → value already in local currency (skip conversion)
     * 2) Primary market entry → same
     * 3) No marketValues → raw qualifierValue (caller applies currency conversion)
     * Respects `multiCurrency` flag: if true, value is in shop's base currency and needs conversion.
     * @param {Object} ruleValue - The ruleValue object containing qualifierValue and optional marketValues
     * @param {boolean} isMonetary - Whether this is a monetary/spend comparison (applies currency conversion for non-market values)
     * @returns {number} The resolved qualifier value, already currency-converted if needed
     */
    _resolveMarketQualifierValue(ruleValue, isMonetary = false) {
      const baseValue = parseFloat(ruleValue?.qualifierValue) || 0;
      const marketValues = ruleValue?.marketValues;

      const resolveWithCurrencyConversion = (val) => {
        if (!isMonetary) return val;
        return gfg.utility.convertFromStoreCurrencyToCustomer ? gfg.utility.convertFromStoreCurrencyToCustomer(val) : val;
      };

      if (!marketValues || !Array.isArray(marketValues) || !marketValues.length) {
        return resolveWithCurrencyConversion(baseValue);
      }

      const marketHandle = (window?.shopifyLiquidValuesApp7Ext?.markets?.handle || "").toLowerCase();
      if (!marketHandle) return resolveWithCurrencyConversion(baseValue);

      // Tier 1: exact market match
      const exactMatch = marketValues.find(e => (e.handle || "").toLowerCase() === marketHandle);
      if (exactMatch) {
        const val = parseFloat(exactMatch.value || 0);
        return (exactMatch.multiCurrency && isMonetary) ? resolveWithCurrencyConversion(val) : val;
      }

      // Tier 2: primary market fallback
      const primaryEntry = marketValues.find(e => e.primary === true);
      if (primaryEntry) {
        const val = parseFloat(primaryEntry.value || 0);
        return (primaryEntry.multiCurrency && isMonetary) ? resolveWithCurrencyConversion(val) : val;
      }

      // Tier 3: no match — apply currency conversion for monetary types
      return resolveWithCurrencyConversion(baseValue);
    },

    rules: {

      /**
       * Evaluate all segments in a campaign against the current cart.
       * @param {Object} campaign - Campaign configuration containing segmentsData
       * @param {Object} cartData - Current Shopify cart object
       * @returns {Array} Array of segment result objects with { met, progress, currentValue, targetValue, multiplier, ruleType, qualifierType, buyXResults }
       */
      evaluateAll(campaign, cartData) {
        freeGiftV2._trace("rules.evaluateAll", { segmentCount: getSegments(campaign).length });
        const segments = getSegments(campaign);
        return segments.map(segment => this.evaluate(segment, cartData, campaign));
      },

      /**
       * Evaluate a single segment against the current cart. Iterates ALL buyX rules
       * within the segment (AND logic — all must be met). For each buyX rule, determines
       * the current value based on ruleType + qualifierType, applies currency conversion
       * for spend rules, and calculates met/progress/multiplier. Returns the aggregate
       * result with the bottleneck rule's display values and the full buyXResults array.
       * @param {Object} segment - Segment from segmentsData.segmentsList with buyXRulesData
       * @param {Object} cartData - Current Shopify cart object
       * @param {Object} campaign - Parent campaign (for eligibility filter settings)
       * @returns {Object} { met, progress, currentValue, targetValue, multiplier, ruleType, qualifierType, buyXResults }
       */
      evaluate(segment, cartData, campaign) {
        try {
          const buyXRules = getBuyXRules(segment);
          if (buyXRules.length === 0) {
            return { met: false, progress: 0, currentValue: 0, targetValue: 0, multiplier: 0, ruleType: null, qualifierType: null };
          }

          // Evaluate each buyX rule independently
          const subResults = buyXRules.map(buyXRule => {
            const ruleType = buyXRule.ruleType;
            const qualifierType = buyXRule.ruleValue?.qualifierType;
            const isSpend = ruleType === "cartSubtotal" || qualifierType === "overallSubtotal" || qualifierType === "individualSubtotal";
            const targetValue = freeGiftV2._resolveMarketQualifierValue(buyXRule.ruleValue, isSpend);
            let currentValue = 0;

            if (ruleType === "cartSubtotal") {
              currentValue = this._calcCartTotal(cartData, campaign);
            } else if (ruleType === "cartQuantity") {
              currentValue = this._calcTotalCartQty(cartData, campaign);
            } else if (ruleType === "products" || ruleType === "productVariants") {
              if (qualifierType === "overallSubtotal") {
                currentValue = this._calcProductSpend(buyXRule, cartData, campaign);
              } else {
                currentValue = this._calcMatchedProductQty(buyXRule, cartData, campaign);
              }
            } else if (ruleType === "collections") {
              if (qualifierType === "overallSubtotal") {
                currentValue = this._calcCollectionSpend(buyXRule, cartData, campaign);
              } else {
                currentValue = this._calcCollectionQty(buyXRule, cartData, campaign);
              }
            } else {
              gfg.utility.debugConsole("[FGv2] Unknown ruleType:", ruleType);
            }

            const met = currentValue >= targetValue && targetValue > 0;
            const progress = targetValue > 0 ? clamp01(currentValue / targetValue) : 0;
            const multiplier = targetValue > 0 ? Math.floor(currentValue / targetValue) : 0;

            return { met, progress, currentValue, targetValue, multiplier, ruleType, qualifierType };
          });

          // ALL buyX rules must be met to unlock the gift
          const allMet = subResults.every(r => r.met);
          const minProgress = Math.min(...subResults.map(r => r.progress));
          const minMultiplier = allMet ? Math.min(...subResults.map(r => r.multiplier)) : 0;

          // Use the bottleneck rule (lowest progress) for display values
          const bottleneck = subResults.reduce((a, b) => a.progress <= b.progress ? a : b);

          freeGiftV2._trace("rules.evaluate:result", {
            subResults: subResults.map(r => ({ ruleType: r.ruleType, qualifierType: r.qualifierType, met: r.met, currentValue: r.currentValue, targetValue: r.targetValue, multiplier: r.multiplier })),
            allMet,
            minMultiplier,
          });

          return {
            met: allMet,
            progress: minProgress,
            currentValue: bottleneck.currentValue,
            targetValue: bottleneck.targetValue,
            multiplier: minMultiplier,
            ruleType: bottleneck.ruleType,
            qualifierType: bottleneck.qualifierType,
            buyXResults: subResults,
          };
        } catch (e) {
          gfg.utility.debugError("[FGv2] rules.evaluate error", e);
          return { met: false, progress: 0, currentValue: 0, targetValue: 0, multiplier: 0, ruleType: null, qualifierType: null, buyXResults: [] };
        }
      },

      /**
       * Determine if a cart item should be excluded from rule calculations based on
       * the campaign's product eligibility setting (ALL_PRODUCTS, EXCLUDE_SUBSCRIPTION_PRODUCTS,
       * or INCLUDE_ONLY_SUBSCRIPTION_PRODUCTS).
       * @param {Object} item - Cart line item
       * @param {Object} campaign - Campaign with advancedSettings.freeGiftEligibility
       * @returns {boolean} True if the item should be skipped (excluded from calculations)
       */
      _shouldSkipForEligibility(item, campaign) {
        const eligibility = campaign.advancedSettings?.freeGiftEligibility;
        if (!eligibility || eligibility === "ALL_PRODUCTS") return false;
        const isSub = isSubscriptionItem(item);
        if (eligibility === "EXCLUDE_SUBSCRIPTION_PRODUCTS") return isSub;
        if (eligibility === "INCLUDE_ONLY_SUBSCRIPTION_PRODUCTS") return !isSub;
        return false;
      },

      /**
       * Calculate the total discounted price of all eligible (non-gift, non-skipped) items in the cart.
       * Used for SPEND_X rule type evaluation.
       * @param {Object} cartData - Current Shopify cart object
       * @param {Object} campaign - Campaign for eligibility filtering
       * @returns {number} Total cart spend for eligible items
       */
      _calcCartTotal(cartData, campaign) {
        let total = 0;
        const breakdown = [];
        for (const item of cartData.items) {
          if (isFreeGiftItem(item)) continue;
          if (this._shouldSkipForEligibility(item, campaign)) continue;
          const price = gfg.utility.formatPriceWithoutSymbol(item.discounted_price);
          total += price * item.quantity;
          breakdown.push({ vid: item.variant_id, qty: item.quantity, price, discounted_price: item.discounted_price });
        }
        freeGiftV2._trace("rules._calcCartTotal", { total, breakdown });
        return total;
      },

      /**
       * Extract numeric ID from a GID string or plain numeric value.
       * e.g. "gid://shopify/Product/123" → "123", "456" → "456"
       */
      _extractNumericId(val) {
        if (!val) return "";
        const str = `${val}`;
        const match = str.match(/(\d+)$/);
        return match ? match[1] : str;
      },

      /**
       * Build a lookup map from a buyX rule's condition items.
       * - ruleType "productVariants": match against variant_id
       * - ruleType "products" (default): match against product_id
       * @param {Object} buyXRule - A single buyX rule from buyXRulesData.rulesList
       * @returns {Object} { lookup: Object, isVariantType: boolean }
       */
      _buildConditionItemLookup(buyXRule) {
        const items = buyXRule?.ruleValue?.value || [];
        const isVariantType = buyXRule?.ruleType === "productVariants";
        const lookup = {};
        for (const ci of items) {
          if (isVariantType && ci.variants && ci.variants.length > 0) {
            for (const v of ci.variants) {
              const numericId = this._extractNumericId(v.id || v.variantId || v.variantGraphqlId);
              if (numericId) lookup[numericId] = true;
            }
          } else {
            const numericId = this._extractNumericId(ci.id || ci.productId);
            if (numericId) lookup[numericId] = true;
          }
        }
        return { lookup, isVariantType };
      },

      /**
       * Check if a cart item matches the rule's condition items lookup.
       * Compares by variant_id or product_id depending on conditionItemType.
       * @param {Object} item - Cart line item
       * @param {Object} lookup - Map of numeric IDs from _buildConditionItemLookup
       * @param {boolean} isVariantType - If true, match by variant_id; otherwise by product_id
       * @returns {boolean} True if the item matches a condition item
       */
      _isCartItemMatchingCondition(item, lookup, isVariantType) {
        const itemId = isVariantType ? `${item.variant_id}` : `${item.product_id}`;
        return !!lookup[itemId];
      },

      /**
       * Calculate total quantity of cart items matching a buyX rule's condition products/variants.
       * Used for "products" / "productVariants" ruleType with quantity qualifierType.
       * @param {Object} buyXRule - A single buyX rule from buyXRulesData.rulesList
       * @param {Object} cartData - Current Shopify cart object
       * @param {Object} campaign - Campaign for eligibility filtering
       * @returns {number} Total quantity of matched items
       */
      _calcMatchedProductQty(buyXRule, cartData, campaign) {
        const { lookup, isVariantType } = this._buildConditionItemLookup(buyXRule);

        let qty = 0;
        for (const item of cartData.items) {
          if (isFreeGiftItem(item)) continue;
          if (this._shouldSkipForEligibility(item, campaign)) continue;
          if (this._isCartItemMatchingCondition(item, lookup, isVariantType)) {
            qty += item.quantity;
          }
        }
        freeGiftV2._trace("rules._calcMatchedProductQty", { qty, lookupKeys: Object.keys(lookup), isVariantType });
        return qty;
      },

      /**
       * Calculate total spend on items belonging to a buyX rule's specified collections.
       * Used for "collections" ruleType with "overallSubtotal" qualifierType.
       * @param {Object} buyXRule - A single buyX rule from buyXRulesData.rulesList
       * @param {Object} cartData - Current Shopify cart object
       * @param {Object} campaign - Campaign for eligibility filtering
       * @returns {number} Total spend in matching collections
       */
      _calcCollectionSpend(buyXRule, cartData, campaign) {
        const collections = buyXRule?.ruleValue?.value || [];
        let total = 0;
        for (const item of cartData.items) {
          if (isFreeGiftItem(item)) continue;
          if (this._shouldSkipForEligibility(item, campaign)) continue;
          if (gfg.f.checkIfCartItemIsPartOfValidCollectionList(item, collections)) {
            const price = gfg.utility.formatPriceWithoutSymbol(item.discounted_price);
            total += price * item.quantity;
          }
        }
        freeGiftV2._trace("rules._calcCollectionSpend", { total, collectionCount: collections.length });
        return total;
      },

      /**
       * Calculate total quantity of items belonging to a buyX rule's specified collections.
       * Used for "collections" ruleType with quantity qualifierType.
       * @param {Object} buyXRule - A single buyX rule from buyXRulesData.rulesList
       * @param {Object} cartData - Current Shopify cart object
       * @param {Object} campaign - Campaign for eligibility filtering
       * @returns {number} Total quantity of items in matching collections
       */
      _calcCollectionQty(buyXRule, cartData, campaign) {
        const collections = buyXRule?.ruleValue?.value || [];
        let qty = 0;
        for (const item of cartData.items) {
          if (isFreeGiftItem(item)) continue;
          if (this._shouldSkipForEligibility(item, campaign)) continue;
          if (gfg.f.checkIfCartItemIsPartOfValidCollectionList(item, collections)) {
            qty += item.quantity;
          }
        }
        freeGiftV2._trace("rules._calcCollectionQty", { qty, collectionCount: collections.length });
        return qty;
      },

      /**
       * Calculate total quantity of all eligible (non-gift, non-skipped) items in the cart.
       * Used for "cartQuantity" ruleType evaluation.
       * @param {Object} cartData - Current Shopify cart object
       * @param {Object} campaign - Campaign for eligibility filtering
       * @returns {number} Total quantity of eligible cart items
       */
      _calcTotalCartQty(cartData, campaign) {
        let qty = 0;
        for (const item of cartData.items) {
          if (isFreeGiftItem(item)) continue;
          if (this._shouldSkipForEligibility(item, campaign)) continue;
          qty += item.quantity;
        }
        freeGiftV2._trace("rules._calcTotalCartQty", { qty });
        return qty;
      },

      /**
       * Calculate total spend on items matching a buyX rule's condition products/variants.
       * Used for "products" / "productVariants" ruleType with "overallSubtotal" qualifierType.
       * @param {Object} buyXRule - A single buyX rule from buyXRulesData.rulesList
       * @param {Object} cartData - Current Shopify cart object
       * @param {Object} campaign - Campaign for eligibility filtering
       * @returns {number} Total spend on matched products
       */
      _calcProductSpend(buyXRule, cartData, campaign) {
        const { lookup, isVariantType } = this._buildConditionItemLookup(buyXRule);

        let total = 0;
        const matchedItems = [];
        for (const item of cartData.items) {
          if (isFreeGiftItem(item)) continue;
          if (this._shouldSkipForEligibility(item, campaign)) continue;
          if (this._isCartItemMatchingCondition(item, lookup, isVariantType)) {
            const price = gfg.utility.formatPriceWithoutSymbol(item.discounted_price);
            total += price * item.quantity;
            matchedItems.push({ vid: item.variant_id, pid: item.product_id, qty: item.quantity, price, discounted_price: item.discounted_price });
          }
        }
        freeGiftV2._trace("rules._calcProductSpend", { total, lookupKeys: Object.keys(lookup), isVariantType, matchedItems });
        return total;
      },
    },

    // ═══════════════════════════════════════════════════════════════════════════
    //  CORE LAYER — ELIGIBILITY
    // ═══════════════════════════════════════════════════════════════════════════

    eligibility: {

      /**
       * Run all eligibility checks for a campaign: widget enabled, schedule window,
       * URL-based activation, display settings (page type), and customer conditions
       * (tags, markets, login status). Returns false if any check fails.
       * @param {Object} campaign - Campaign configuration object
       * @returns {boolean} True if the campaign passes all eligibility checks
       */
      check(campaign) {
        try {
          const name = campaign.title || campaign.discountData_shopifyResponse?.title || "unnamed";
          freeGiftV2._trace("eligibility.check", { name, pageType: gfg.state.page_type });
          if (!this._checkSchedule(campaign.campaignScheduleData)) {
            gfg.utility.debugConsole(`[FGv2] eligibility FAIL: schedule check failed for "${name}"`, campaign.campaignScheduleData);
            return false;
          }
          if (!this._checkCampaignUrl(campaign)) {
            gfg.utility.debugConsole(`[FGv2] eligibility FAIL: URL check failed for "${name}" (expected ?${campaign.urlBasedCampaign?.id}=${campaign.urlBasedCampaign?.value})`);
            return false;
          }
          // Display settings only matter when the widget is enabled — skip check when
          // widget is disabled so background work (auto-add/removal) still runs.
          if (campaign.widgetSettings?.isEnabled && !this._checkDisplaySettings(campaign.widgetSettings?.displaySettings)) {
            gfg.utility.debugConsole(`[FGv2] eligibility FAIL: displaySettings check failed for "${name}"`, {
              pageType: gfg.state.page_type,
              displaySettings: campaign.widgetSettings?.displaySettings,
            });
            return false;
          }
          if (!this._checkCustomerEligibility(campaign.customerEligibilityRules)) {
            gfg.utility.debugConsole(`[FGv2] eligibility FAIL: customer eligibility check failed for "${name}"`, campaign.customerEligibilityRules);
            return false;
          }
          return true;
        } catch (e) {
          gfg.utility.debugError("[FGv2] eligibility.check error", e);
          return false;
        }
      },

      /**
       * Check if the campaign is within its scheduled time window.
       * Returns true if no schedule is configured or schedule type is not "SCHEDULED".
       * @param {Object} scheduleData - Schedule config with startDateTime_UTC and endDateTime_UTC
       * @returns {boolean} True if the campaign is currently within its active schedule
       */
      _checkSchedule(scheduleData) {
        if (!scheduleData || scheduleData.campaignSchedule !== "SCHEDULED") return true;
        const now = new Date();
        if (scheduleData.startDateTime_UTC) {
          if (now < new Date(scheduleData.startDateTime_UTC)) return false;
        }
        if (scheduleData.endDateTime_UTC) {
          if (now > new Date(scheduleData.endDateTime_UTC)) return false;
        }
        return true;
      },

      /**
       * Check if the campaign's URL-based activation condition is met.
       * Verifies the required URL parameter is present in the current URL,
       * the initial landing URL, or session storage (for cross-page persistence).
       * Returns true if URL-based activation is not enabled.
       * @param {Object} campaign - Campaign with isCampaignUrlEnabled and urlBasedCampaign config
       * @returns {boolean} True if the URL condition is met or not applicable
       */
      _checkCampaignUrl(campaign) {
        if (!campaign.isCampaignUrlEnabled) return true;
        const urlConfig = campaign.urlBasedCampaign;
        if (!urlConfig?.id || !urlConfig?.value) return true;

        const sessionKey = `kite_fgv2_url_${urlConfig.id}`;

        // 1. Check current URL params
        const params = new URLSearchParams(window.location.search);
        if (params.get(urlConfig.id) === urlConfig.value) {
          try { sessionStorage.setItem(sessionKey, urlConfig.value); } catch (e) { /* private browsing */ }
          return true;
        }

        // 2. Check the initial landing URL captured by the bootstrap (gfg.settings.urlSearchString)
        const initialUrl = gfg.settings?.urlSearchString || "";
        if (initialUrl) {
          const initialParams = new URLSearchParams(initialUrl.startsWith("?") ? initialUrl : `?${initialUrl}`);
          if (initialParams.get(urlConfig.id) === urlConfig.value) {
            try { sessionStorage.setItem(sessionKey, urlConfig.value); } catch (e) {}
            return true;
          }
        }

        // 3. Fallback: sessionStorage — user arrived via URL on a previous page in this session
        try {
          if (sessionStorage.getItem(sessionKey) === urlConfig.value) return true;
        } catch (e) {}

        return false;
      },

      /** Map gfg.state.page_type to the page type constants used by isPageRelevantForWidget */
      _mapPageType(context) {
        const map = { product: "PRODUCT_PAGE", cart: "CART_PAGE" };
        if (context === "sidecart") return "SIDE_CART";
        return map[gfg.state.page_type] || "SIDE_CART";
      },

      /**
       * Check if the campaign should display on the current page type.
       * Maps gfg.state.page_type to display setting constants and verifies
       * the widget is enabled for the current context (PDP, cart page, side cart).
       * @param {Object} displaySettings - Display configuration with page-type toggles
       * @returns {boolean} True if the campaign should display on the current page
       */
      _checkDisplaySettings(displaySettings) {
        if (!displaySettings) return true;
        const pageType = gfg.state.page_type;

        if (pageType === "product") {
          // Allow if eligible for PDP or side cart
          return gfg.utility.isPageRelevantForWidget(displaySettings, "PRODUCT_PAGE") || gfg.utility.isPageRelevantForWidget(displaySettings, "SIDE_CART");
        }

        if (pageType === "cart") {
          return gfg.utility.isPageRelevantForWidget(displaySettings, "CART_PAGE");
        }

        // Other pages (collection, home, etc.) — only side cart is relevant
        return gfg.utility.isPageRelevantForWidget(displaySettings, "SIDE_CART");
      },

      /**
       * Check if the current customer meets the campaign's targeting conditions.
       * Evaluates conditions (customer tags, markets, login status) using the
       * configured operator (AND = all must match, OR = any must match).
       * Returns true if no conditions are configured.
       * @param {Object} conditionsData - Conditions config with conditionsList and conditionsOperator
       * @returns {boolean} True if the customer meets the eligibility conditions
       */
      _checkCustomerEligibility(customerEligibilityRules) {
        if (!customerEligibilityRules?.rulesList?.length) return true;
        const operator = customerEligibilityRules.rulesOperator || "OR";
        const customerRules = []
        let marketRule = null;
        for(const rule of customerEligibilityRules.rulesList) {
          if(rule.ruleType === "market") {
            marketRule = rule;
          } else {
            customerRules.push(rule);
          }
        }
        const customerRuleResults = customerRules.length > 0 ? customerRules.map(condition => this._evaluateCondition(condition)) : [true];
        const marketResults = marketRule ? this._evaluateCondition(marketRule) : true;
        
        let customerResult = false;
        if (operator === "AND") customerResult = customerRuleResults.every(r => r);
        else customerResult = customerRuleResults.some(r => r);
        return customerResult && marketResults;
      },

      /**
       * Evaluate a single customer eligibility condition.
       * Supported types: "customerTags" (check customer tags), "markets" (check Shopify country),
       * "isCustomerLoggedIn" (check login status). Each supports "is" and "is_not" operators.
       * Fails open (returns true) on unknown condition types or errors.
       * @param {Object} condition - Condition with ruleType and ruleValue
       * @returns {boolean} True if the condition is satisfied
       */
      _evaluateCondition(condition) {
        try {
          switch (condition.ruleType) {
            case "customerTags": {
              const tags = condition.ruleValue?.value || condition.ruleValue?.tags || [];
              const opType = condition.ruleValue?.operatorType || "is";
              const customerTags = this._getCustomerTags();
              const hasMatch = tags.some(t =>
                customerTags.some(ct => ct.toLowerCase() === t.toLowerCase())
              );
              return opType === "is" ? hasMatch : !hasMatch;
            }
            case "market": {
              const markets = condition.ruleValue?.value || [];
              const opType = condition.ruleValue?.operatorType || "is";
              const currentMarket = window?.shopifyLiquidValuesApp7Ext?.markets?.handle || "";
              const matched = markets.some(m => m.toLowerCase() === currentMarket.toLowerCase());
              return opType === "is" ? matched : !matched;
            }
            case "isCustomerLoggedIn": {
              const requiredValue = condition.ruleValue?.value;
              const isLoggedIn = !!(window?.shopifyLiquidValuesApp7Ext?.customer?.id);
              return requiredValue === "yes" ? isLoggedIn : !isLoggedIn;
            }
            default:
              return true;
          }
        } catch (e) {
          gfg.utility.debugConsole("[FGv2] _evaluateCondition error", e);
          return true; // Fail open
        }
      },

      /**
       * Retrieve the current customer's tags from Shopify's global state.
       * Tries window.__st.customer_tags first (comma-separated string),
       * falls back to ShopifyAnalytics.meta.page.customerTags array.
       * @returns {Array<string>} Array of customer tag strings, or empty array if not available
       */
      _getCustomerTags() {
        return window?.shopifyLiquidValuesApp7Ext?.customer?.customerTags || [];
      },
    },

    // ═══════════════════════════════════════════════════════════════════════════
    //  CORE LAYER — CART OPERATIONS (BATCH)
    // ═══════════════════════════════════════════════════════════════════════════

    cart: {

      /**
       * For auto-add campaigns: sync cart gifts to match the desired state based on rule results.
       * Uses at most 2 API calls (one update for removes/qty changes, one add for new items).
       */
      async syncGiftsWithCart(campaign, campaignIndex, ruleResults, cartData) {
        try {
          const desired = this._buildDesiredState(campaign, campaignIndex, ruleResults);
          const current = this._buildCurrentState(campaign, cartData);
          const diff = this._diffStates(desired, current);

          freeGiftV2._trace("syncGiftsWithCart", {
            campaignIndex,
            desired,
            current,
            diff: {
              adds: diff.adds.map(a => ({ variantId: a.variantId, qty: a.quantity, ruleId: a.properties?.[RULE_ID_PROPERTY] })),
              removes: diff.removes.map(r => ({ key: r.key })),
              updates: diff.updates.map(u => ({ key: u.key, qty: u.quantity })),
            },
          });

          if (diff.removes.length === 0 && diff.adds.length === 0 && diff.updates.length === 0) return { changed: false, giftsAdded: false };

          gfg.utility.debugConsole("[FGv2] Cart sync diff:", diff);

          // Batch removes + qty updates in a single /cart/update.js call
          if (diff.removes.length > 0 || diff.updates.length > 0) {
            const updatePayload = {};
            for (const rm of diff.removes) {
              updatePayload[rm.key] = 0;
            }
            for (const upd of diff.updates) {
              updatePayload[upd.key] = upd.quantity;
            }

            freeGiftV2._trace("syncGiftsWithCart:updatePayload", { updatePayload });
            await gfg.utility.updateCart({ updates: updatePayload });
          }

          // Batch new adds in a single /cart/add.js call (with fallback for OOS items)
          let giftsAdded = diff.adds.length > 0;
          if (giftsAdded) {
            const addItems = diff.adds.map(add => ({
              id: add.variantId,
              quantity: add.quantity,
              properties: add.properties,
            }));

            let batchResult;
            try {
              batchResult = await gfg.utility.addToCartV2({ items: addItems });
            } catch (e) {
              batchResult = null;
            }

            // If batch failed and there were multiple items, pre-check + retry individually
            if (!batchResult && addItems.length > 1) {
              gfg.utility.debugConsole("[FGv2] Batch add failed, pre-checking and retrying items individually");
              // Invalidate all caches and re-fetch for fresh availability data
              for (const item of addItems) {
                freeGiftV2._invalidateCacheForVariant(item.id);
              }
              await freeGiftV2._prefetchGiftProductData(campaign);

              let anyAdded = false;
              for (const item of addItems) {
                // Find the gift product for this item to check variant availability
                const giftProduct = this._findGiftProductByVariantId(campaign, item.id);

                if (giftProduct && !freeGiftV2._isProductAvailable(giftProduct, item.id)) {
                  // This variant is OOS — try to find another available variant
                  const fallbackVid = freeGiftV2._findFirstAvailableVariantId(giftProduct);
                  if (fallbackVid) {
                    gfg.utility.debugConsole("[FGv2] Batch fallback: variant", item.id, "OOS, swapping to", fallbackVid);
                    item.id = fallbackVid;
                  } else {
                    gfg.utility.debugConsole("[FGv2] Batch fallback: all variants OOS for variant", item.id, "— skipping");
                    continue;
                  }
                }

                try {
                  await gfg.utility.addToCartV2({ items: [item] });
                  anyAdded = true;
                } catch (itemErr) {
                  gfg.utility.debugConsole("[FGv2] Individual add failed for variant", item.id);
                  freeGiftV2._invalidateCacheForVariant(item.id);
                }
              }
              giftsAdded = anyAdded;
            }
          }

          // isAutoAddFreeGiftOnceOnly: track gifts we just auto-added in sessionStorage
          if (campaign.advancedSettings?.isAutoAddFreeGiftOnceOnly && giftsAdded) {
            const cid = getCampaignId(campaign);
            for (const add of diff.adds) {
              trackAutoAddedGift(cid, add.variantId, add.properties[RULE_ID_PROPERTY]);
            }
          }

          return { changed: true, giftsAdded };
        } catch (e) {
          gfg.utility.debugError("[FGv2] syncGiftsWithCart error", e);
          return { changed: false, giftsAdded: false };
        }
      },

      /**
       * For manual-select campaigns: auto-remove gifts when rules are no longer met,
       * and reduce gift quantities when multiplier sessions drop.
       */
      async autoRemoveForUnmetRules(campaign, campaignIndex, ruleResults, cartData) {
        try {
          freeGiftV2._trace("autoRemoveForUnmetRules", { campaignIndex, rulesMet: ruleResults.map(r => r.met) });
          const campaignTitle = campaign.discountData_shopifyResponse?.title || campaign.title || "";
          const isMultiplierOn = campaign.advancedSettings?.multiplyFreeGiftWithTrigger || false;
          const updatePayload = {};
          let hasChanges = false;
          const segments = getSegments(campaign);

          // isMultipleFreeGiftAllowed=false: find the highest-index rule that has gifts in cart
          // and remove gifts from all other met rules (enforce single-rule constraint)
          let allowedRuleIndex = null;
          if (campaign.advancedSettings?.isMultipleFreeGiftAllowed === false) {
            for (let ri = ruleResults.length - 1; ri >= 0; ri--) {
              if (!ruleResults[ri].met || !segments[ri]) continue;
              const ruleId = getSegmentId(segments[ri], ri);
              const hasGifts = (cartData?.items || []).some(item =>
                isFreeGiftItem(item) &&
                item.properties[PROMO_NAME_PROPERTY] === campaignTitle &&
                item.properties[RULE_ID_PROPERTY] === ruleId
              );
              if (hasGifts) { allowedRuleIndex = ri; break; }
            }
          }

          for (let ri = 0; ri < ruleResults.length; ri++) {
            const rr = ruleResults[ri];
            const segment = segments[ri];
            if (!segment) continue;

            const ruleId = getSegmentId(segment, ri);

            // isMultipleFreeGiftAllowed=false: remove gifts from met rules that aren't the allowed one
            if (allowedRuleIndex !== null && rr.met && ri !== allowedRuleIndex) {
              for (const item of cartData.items) {
                if (!isFreeGiftItem(item)) continue;
                if (item.properties[PROMO_NAME_PROPERTY] !== campaignTitle) continue;
                if (item.properties[RULE_ID_PROPERTY] !== ruleId) continue;
                updatePayload[item.key] = 0;
                hasChanges = true;
              }
              continue; // Skip normal processing for this rule
            }

            if (!rr.met) {
              // Rule fully unmet — remove all gifts from this segment
              for (const item of cartData.items) {
                if (!isFreeGiftItem(item)) continue;
                if (item.properties[PROMO_NAME_PROPERTY] !== campaignTitle) continue;
                if (item.properties[RULE_ID_PROPERTY] !== ruleId) continue;
                updatePayload[item.key] = 0;
                hasChanges = true;
              }
            } else if (isMultiplierOn) {
              // Rule still met but multiplier may have dropped — reduce qty if needed
              const maxMultiplierSessions = parseInt(segment.discountableSetLimit) || 1;
              const sessions = Math.min(rr.multiplier, maxMultiplierSessions);
              const isAutoAdd = campaign.advancedSettings?.isAutoAdd || false;
              const freeGiftProducts = getGiftProducts(segment);
              const defaultMaxQty = freeGiftProducts.reduce((sum, p) => sum + (parseInt(p.quantity) || 1), 0);
              const maxQtyPerSession = parseInt(segment.totalLimit) || defaultMaxQty;
              const addedGiftsForRule = freeGiftV2._countAddedGiftsForRule(campaign, segment, ri, cartData, campaignTitle);

              for (const item of cartData.items) {
                if (!isFreeGiftItem(item)) continue;
                if (item.properties[PROMO_NAME_PROPERTY] !== campaignTitle) continue;
                if (item.properties[RULE_ID_PROPERTY] !== ruleId) continue;

                // Find matching gift product to get the per-product base qty
                const giftProduct = freeGiftProducts.find(
                  g => `${item.variant_id}` === resolveVariantId(g.variants?.[0])
                    || `${item.product_id}` === `${g.productId}`
                );
                const baseQty = parseInt(giftProduct?.quantity) || 1;
                let maxAllowed = baseQty * sessions;

                // Session-aware: pack other gifts into sessions, compute room for this gift
                if (!isAutoAdd && sessions > 1) {
                  const otherGiftsQty = addedGiftsForRule - item.quantity;
                  const fullSessionsByOthers = Math.floor(otherGiftsQty / maxQtyPerSession);
                  const remainderByOthers = otherGiftsQty % maxQtyPerSession;
                  let sessionAwareMax = 0;
                  for (let s = 0; s < sessions; s++) {
                    if (s < fullSessionsByOthers) continue;
                    const room = (s === fullSessionsByOthers && remainderByOthers > 0)
                      ? maxQtyPerSession - remainderByOthers
                      : maxQtyPerSession;
                    sessionAwareMax += Math.min(baseQty, room);
                  }
                  maxAllowed = Math.min(maxAllowed, sessionAwareMax);
                }

                if (item.quantity > maxAllowed) {
                  updatePayload[item.key] = maxAllowed;
                  hasChanges = true;
                }
              }
            }
          }

          if (hasChanges) {
            await gfg.utility.updateCart({ updates: updatePayload });
          }
          return hasChanges;
        } catch (e) {
          gfg.utility.debugError("[FGv2] autoRemoveForUnmetRules error", e);
          return false;
        }
      },

      /**
       * Manual-select: user clicks ADD on a specific gift.
       */
      async addGiftManually(campaign, campaignIndex, ruleIndex, giftIndex, selectedVariantId) {
        try {
          freeGiftV2._trace("addGiftManually", { campaignIndex, ruleIndex, giftIndex, selectedVariantId });
          const segment = getSegments(campaign)[ruleIndex];
          if (!segment) return;
          const product = getGiftProducts(segment)[giftIndex];
          if (!product) return;

          // isMultipleFreeGiftAllowed=false: auto-remove gifts from other rules before adding (swap)
          if (campaign.advancedSettings?.isMultipleFreeGiftAllowed === false) {
            const cartData = gfg.state.cartData;
            const campaignTitle = campaign.discountData_shopifyResponse?.title || campaign.title || "";
            const thisRuleId = getSegmentId(segment, ruleIndex);
            const removePayload = {};
            for (const item of (cartData?.items || [])) {
              if (!isFreeGiftItem(item)) continue;
              if (item.properties[PROMO_NAME_PROPERTY] !== campaignTitle) continue;
              if (item.properties[RULE_ID_PROPERTY] !== thisRuleId) {
                removePayload[item.key] = 0;
              }
            }
            if (Object.keys(removePayload).length > 0) {
              gfg.utility.debugConsole("[FGv2] addGiftManually: isMultipleFreeGiftAllowed=false, removing other rules' gifts first");
              await gfg.utility.updateCart({ updates: removePayload });
            }
          }

          let variantId = selectedVariantId || (product.variants?.length > 0 ? resolveVariantId(product.variants[0]) : "");
          if (!variantId) {
            // Fetch product data to get first available variant (restricted to merchant-selected)
            const prodData = await freeGiftV2._getProductData(product.handle);
            if (prodData?.variants?.length > 0) {
              const allowed = freeGiftV2._getAllowedVariantIds(product);
              const candidates = allowed
                ? prodData.variants.filter(v => allowed.has(`${v.id}`))
                : prodData.variants;
              if (candidates.length > 0) {
                const available = candidates.find(v => v.available);
                variantId = available ? available.id : candidates[0].id;
              }
            }
          }
          if (!variantId) return;

          // OOS pre-check with variant fallback
          if (!freeGiftV2._isProductAvailable(product, variantId)) {
            // Selected variant is OOS — try to find another available variant
            const fallbackVid = freeGiftV2._findFirstAvailableVariantId(product);
            if (fallbackVid) {
              gfg.utility.debugConsole("[FGv2] addGiftManually: variant", variantId, "OOS, falling back to", fallbackVid);
              variantId = fallbackVid;
              // Update selectedVariants state so render shows the correct variant
              const variantKey = `${campaignIndex}_${ruleIndex}_${giftIndex}`;
              freeGiftV2.state.selectedVariants[variantKey] = variantId;
            } else {
              // ALL variants OOS — cannot add
              gfg.utility.debugConsole("[FGv2] addGiftManually: all variants OOS for", product.handle, "— cannot add");
              if (product.handle) delete freeGiftV2.state.shopifyProductCache[product.handle];
              await this._renderAfterCartOp(campaign, campaignIndex, "remove");
              return;
            }
          }

          const campaignTitle = campaign.discountData_shopifyResponse?.title || campaign.title || "";
          const baseQty = parseInt(product.quantity) || 1;

          // Calculate entitledQty (base qty scaled by multiplier sessions if active)
          let entitledQty = baseQty;
          const isAutoAdd = campaign.advancedSettings?.isAutoAdd || false;
          const isMultiplierOn = campaign.advancedSettings?.multiplyFreeGiftWithTrigger || false;
          const rr = freeGiftV2.state.campaignResults[campaignIndex]?.[ruleIndex];
          let sessions = 1;
          if (isMultiplierOn && rr && rr.multiplier > 0) {
            const maxSessions = parseInt(segment.discountableSetLimit) || 1;
            sessions = Math.min(rr.multiplier, maxSessions);
            entitledQty = baseQty * sessions;
          }

          // "Add 1 at a time": increment current cart qty by 1, clamped to entitledQty and total rule limit
          const cartData = gfg.state.cartData;
          const giftCartInfo = freeGiftV2._getGiftCartInfo(product, segment, ruleIndex, cartData, campaignTitle);
          const currentCartQty = giftCartInfo.quantity || 0;

          // Enforce session-aware limit for manual campaigns
          if (!isAutoAdd) {
            const freeGiftProducts = getGiftProducts(segment);
            const defaultMaxQty = freeGiftProducts.reduce((sum, p) => sum + (parseInt(p.quantity) || 1), 0);
            const maxQtyPerSession = parseInt(segment.totalLimit) || defaultMaxQty;
            const addedGiftsForRule = freeGiftV2._countAddedGiftsForRule(campaign, segment, ruleIndex, cartData, campaignTitle);

            // Session-aware: pack other gifts into sessions, compute room for this gift
            if (isMultiplierOn && sessions > 1) {
              const otherGiftsQty = addedGiftsForRule - currentCartQty;
              const fullSessionsByOthers = Math.floor(otherGiftsQty / maxQtyPerSession);
              const remainderByOthers = otherGiftsQty % maxQtyPerSession;
              let sessionAwareQty = 0;
              for (let s = 0; s < sessions; s++) {
                if (s < fullSessionsByOthers) continue;
                const room = (s === fullSessionsByOthers && remainderByOthers > 0)
                  ? maxQtyPerSession - remainderByOthers
                  : maxQtyPerSession;
                sessionAwareQty += Math.min(baseQty, room);
              }
              entitledQty = Math.min(entitledQty, sessionAwareQty);
            }

            // Also enforce total rule limit as safety net
            const totalRuleLimit = maxQtyPerSession * sessions;
            const roomLeft = Math.max(totalRuleLimit - addedGiftsForRule, 0);
            if (roomLeft <= 0) return;
            entitledQty = Math.min(entitledQty, currentCartQty + roomLeft);
          }

          const newQty = Math.min(currentCartQty + 1, entitledQty);

          if (giftCartInfo.inCart && giftCartInfo.lineKey) {
            const updatePayload = { [giftCartInfo.lineKey]: newQty };
            // If duplicate line items exist, remove extras and consolidate onto primary key
            if (giftCartInfo.lineKeys.length > 1) {
              for (let lk = 1; lk < giftCartInfo.lineKeys.length; lk++) {
                updatePayload[giftCartInfo.lineKeys[lk]] = 0;
              }
            }
            await gfg.utility.updateCart({ updates: updatePayload });
          } else {
            await gfg.utility.addToCartV2({
              items: [{
                id: variantId,
                quantity: 1,
                properties: {
                  [FREE_GIFT_PROPERTY]: "true",
                  [RULE_ID_PROPERTY]: getSegmentId(segment, ruleIndex),
                  [PROMO_NAME_PROPERTY]: campaignTitle,
                },
              }],
            });
          }

          // Immediately re-render this campaign with fresh cart data
          await this._renderAfterCartOp(campaign, campaignIndex, "add", ruleIndex, giftIndex);
        } catch (e) {
          gfg.utility.debugError("[FGv2] addGiftManually error", e);
        }
      },

      /**
       * Manual-select: user clicks REMOVE on a specific gift.
       */
      async removeGiftManually(campaign, campaignIndex, ruleIndex, giftIndex) {
        try {
          freeGiftV2._trace("removeGiftManually", { campaignIndex, ruleIndex, giftIndex });
          const segment = getSegments(campaign)[ruleIndex];
          if (!segment) return;
          const product = getGiftProducts(segment)[giftIndex];
          if (!product) return;

          const campaignTitle = campaign.discountData_shopifyResponse?.title || campaign.title || "";
          const cartData = await gfg.utility.getCartV2({ forceRefresh: true });
          const updatePayload = {};

          const ruleId = getSegmentId(segment, ruleIndex);
          for (const item of cartData.items) {
            if (!isFreeGiftItem(item)) continue;
            if (item.properties[PROMO_NAME_PROPERTY] !== campaignTitle) continue;
            if (item.properties[RULE_ID_PROPERTY] !== ruleId) continue;
            if (`${item.product_id}` === `${product.productId}`) {
              updatePayload[item.key] = 0;
            }
          }

          if (Object.keys(updatePayload).length > 0) {

            await gfg.utility.updateCart({ updates: updatePayload });
          }

          // Immediately re-render this campaign with fresh cart data
          await this._renderAfterCartOp(campaign, campaignIndex, "remove");
        } catch (e) {
          gfg.utility.debugError("[FGv2] removeGiftManually error", e);
        }
      },

      /**
       * Minimal re-render after a manual cart operation (add/remove gift).
       * Fetches fresh cart, re-evaluates rules for this campaign, and renders
       * SYNCHRONOUSLY. Then kicks off a background full re-process for other campaigns.
       * @param {string} [actionType] - "add" or "remove" to control post-op UI transitions
       * @param {number} [addedRuleIndex] - rule index of the gift that was just added (for targeted animation)
       * @param {number} [addedGiftIndex] - gift index of the gift that was just added (for targeted animation)
       */
      async _renderAfterCartOp(campaign, campaignIndex, actionType, addedRuleIndex, addedGiftIndex) {
        freeGiftV2._trace("_renderAfterCartOp", { campaignIndex, actionType, addedRuleIndex, addedGiftIndex });

        // animatingCampaigns flag is set by _handleClick (synchronously, before any
        // async cart ops) so it's already active by the time we get here. The try/finally
        // below clears it when the animation completes or errors.
        try {
        // 1. Fresh cart — single round-trip, no cache
        const cartData = await gfg.utility.getCartV2({ forceRefresh: true });
        if (!cartData?.items) return;
        freeGiftV2.state.lastCartHash = hashCart(cartData);

        // 2. Re-evaluate rules & build render data for THIS campaign (GBP widgets delegate to progress bar module)
        const ruleResults = await freeGiftV2._evaluateRules(campaign, cartData);
        freeGiftV2.state.campaignResults[campaignIndex] = ruleResults;
        const renderData = freeGiftV2.buildRenderData(campaign, campaignIndex, ruleResults, cartData);

        // 3. If NOT an add action, refresh theme cart UI immediately.
        //    For "add", we defer it to after the checkmark animation to prevent
        //    theme refresh from triggering re-renders during the animation.
        if (actionType !== "add") {
          gfg.f.updateCartState(null, null, null, cartData);
        }

        // 4. If this was an "add" action, show a green checkmark before final render
        if (actionType === "add") {
          const checkSvg = `<svg class="gfgFGv2-btn-check" viewBox="0 0 24 24" width="28" height="28"><path d="M8 12l2.5 2.5L16 9" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;
          for (const [key, container] of Object.entries(freeGiftV2.state.containerRefs)) {
            if (!key.startsWith(`${campaignIndex}_`)) continue;
            const loadingBtns = container.querySelectorAll(".gfgFGv2-btn-loading");
            for (const btn of loadingBtns) {
              btn.disabled = true;
              btn.className = "gfgFGv2-btn gfgFGv2-btn-success";
              btn.innerHTML = checkSvg;
              // Fire confetti if enabled
              if (campaign.widgetSettings?.enableConfetti) {
                freeGiftV2.ui.v2._fireConfetti(btn);
              }
            }
          }
          // Hold the checkmark visible
          await new Promise(resolve => setTimeout(resolve, 2500));

          // Fade out the checkmark smoothly before replacing
          for (const [key, container] of Object.entries(freeGiftV2.state.containerRefs)) {
            if (!key.startsWith(`${campaignIndex}_`)) continue;
            const successBtns = container.querySelectorAll(".gfgFGv2-btn-success");
            for (const btn of successBtns) {
              btn.classList.add("gfgFGv2-btn-exit");
            }
          }
          await new Promise(resolve => setTimeout(resolve, 300));
        }

        // 5. Render SYNCHRONOUSLY — replaces the checkmark/spinner with final state
        freeGiftV2.ui.render(campaign, campaignIndex, renderData);

        // 6. If "add" action, animate ONLY the newly added gift's remove button
        if (actionType === "add") {
          const targetSelector = addedRuleIndex != null && addedGiftIndex != null
            ? `.gfgFGv2-btn-remove[data-rule-index="${addedRuleIndex}"][data-gift-index="${addedGiftIndex}"]`
            : ".gfgFGv2-btn-remove";
          for (const [key, container] of Object.entries(freeGiftV2.state.containerRefs)) {
            if (!key.startsWith(`${campaignIndex}_`)) continue;
            const removeBtns = container.querySelectorAll(targetSelector);
            for (const btn of removeBtns) {
              btn.classList.add("gfgFGv2-btn-enter");
              btn.addEventListener("animationend", () => btn.classList.remove("gfgFGv2-btn-enter"), { once: true });
            }
          }
          // Now refresh theme cart UI after animation is complete
          gfg.f.updateCartState(null, null, null, cartData);
        }

        } finally {
          if (actionType === "add") {
            freeGiftV2.state.animatingCampaigns.delete(campaignIndex);
          }
        }

        // 7. Execute custom script after free gift addition (same as V1 behavior)
        if (actionType === "add") {
          freeGiftV2._executeCustomScriptAfterFreeGiftAddition();
        }

        // 8. Background: re-process OTHER campaigns only (skip the one we just rendered
        //    to avoid a redundant re-render that causes the remove button to blink).
        for (let i = 0; i < freeGiftV2.state.campaigns.length; i++) {
          if (i === campaignIndex) continue;
          freeGiftV2._processCampaign(i, cartData);
        }
      },

      // ── Internal helpers ──

      /**
       * Find a gift product in a campaign by its variant ID.
       * Used during batch fallback to look up the gift for variant swapping.
       */
      _findGiftProductByVariantId(campaign, variantId) {
        const vid = `${variantId}`;
        for (const segment of getSegments(campaign)) {
          for (const gift of getGiftProducts(segment)) {
            // Check configured variants
            if (gift.variants?.some(v => resolveVariantId(v) === vid)) return gift;
            // Check cached Shopify data
            const cached = freeGiftV2.state.shopifyProductCache[gift.handle];
            if (cached?.variants?.some(v => `${v.id}` === vid)) return gift;
          }
        }
        return null;
      },

      /**
       * Build the desired cart state for a campaign's gifts based on current rule results.
       * For each met rule, determines which gifts should be in the cart, their quantities
       * (factoring in multiplier sessions), and which variant to use (with OOS fallback).
       * @param {Object} campaign - Campaign configuration object
       * @param {number} campaignIndex - Index of the campaign
       * @param {Array} ruleResults - Results from rules.evaluateAll()
       * @returns {Array} Array of desired gift items with { productId, variantId, quantity, ruleId, campaignTitle }
       */
      _buildDesiredState(campaign, campaignIndex, ruleResults) {
        const desired = [];
        const isMultiplierOn = campaign.advancedSettings?.multiplyFreeGiftWithTrigger || false;
        const campaignTitle = campaign.discountData_shopifyResponse?.title || campaign.title || "";
        const segments = getSegments(campaign);

        // isMultipleFreeGiftAllowed=false: only process the highest eligible tier (auto-add)
        let highestTierOnly = null;
        if (campaign.advancedSettings?.isMultipleFreeGiftAllowed === false) {
          for (let ri = ruleResults.length - 1; ri >= 0; ri--) {
            if (ruleResults[ri].met && segments[ri]) { highestTierOnly = ri; break; }
          }
        }

        for (let ri = 0; ri < ruleResults.length; ri++) {
          const rr = ruleResults[ri];
          const segment = segments[ri];
          if (!segment || !rr.met) continue;
          if (highestTierOnly !== null && ri !== highestTierOnly) continue;

          const freeGifts = getGiftProducts(segment);
          const isAutoAdd = campaign.advancedSettings?.isAutoAdd || false;
          // maxQtyPerSession only applies to manual campaigns (caps how many gifts customer can claim per session)
          const defaultMaxQtyDesired = freeGifts.reduce((sum, g) => sum + (parseInt(g.quantity) || 1), 0);
          const maxQtyPerSession = isAutoAdd ? Infinity : (parseInt(segment.totalLimit) || defaultMaxQtyDesired);

          // Calculate sessions: how many times the threshold has been crossed, capped by segment.discountableSetLimit
          const maxMultiplierSessions = parseInt(segment.discountableSetLimit) || 1;
          let sessions = 1;
          if (isMultiplierOn && rr.multiplier > 0) {
            sessions = Math.min(rr.multiplier, maxMultiplierSessions);
          }

          freeGiftV2._trace("buildDesiredState:sessions", {
            ri,
            isMultiplierOn,
            rawMultiplier: rr.multiplier,
            maxMultiplierSessions,
            sessions,
            discountableSetLimit: segment.discountableSetLimit,
            currentValue: rr.currentValue,
            targetValue: rr.targetValue,
          });

          // Iterate gift products, accumulate until maxQtyPerSession is reached (per session)
          let itemsInSession = 0;
          for (let gi = 0; gi < freeGifts.length; gi++) {
            const gift = freeGifts[gi];
            if (gift.available === false) continue; // Skip out-of-stock products (static flag)
            if (!freeGiftV2._isAnyVariantAvailable(gift)) continue; // Skip only when ALL variants OOS

            const productQty = parseInt(gift.quantity) || 1;
            if (itemsInSession + productQty > maxQtyPerSession) break; // Session cap reached (manual only)
            itemsInSession += productQty;

            const desiredQty = productQty * sessions;

            // Resolve variant ID: try variants array first, then gift-level fields
            let variantId = gift.variants?.length > 0 ? resolveVariantId(gift.variants[0]) : "";

            // Use selected variant if available
            const selectedKey = `${campaignIndex}_${ri}_${gi}`;
            const selectedVid = freeGiftV2.state.selectedVariants[selectedKey];
            if (selectedVid) variantId = selectedVid;

            // If chosen variant is OOS, fall back to first available variant
            const oosCheckResult = variantId ? freeGiftV2._isProductAvailable(gift, variantId) : true;
            if (variantId && !oosCheckResult) {
              const fallbackVid = freeGiftV2._findFirstAvailableVariantId(gift);
              freeGiftV2._trace("buildDesiredState:oosFallback", {
                ri, gi, handle: gift.handle, originalVariantId: variantId, fallbackVid,
                shopifyCacheKeys: Object.keys(freeGiftV2.state.shopifyProductCache),
              });
              if (fallbackVid) {
                gfg.utility.debugConsole("[FGv2] _buildDesiredState: variant", variantId, "OOS, falling back to", fallbackVid, "for", gift.handle);
                variantId = fallbackVid;
                freeGiftV2.state.selectedVariants[selectedKey] = fallbackVid;
              } else {
                gfg.utility.debugConsole("[FGv2] _buildDesiredState: all variants OOS for", gift.handle, "— skipping");
                continue;
              }
            }

            if (variantId) {
              freeGiftV2._trace("buildDesiredState:push", {
                ri, gi, variantId, desiredQty, productQty, sessions,
                ruleId: getSegmentId(segment, ri),
                selectedVid: selectedVid || "(none)",
                oosCheckResult,
              });
              desired.push({
                productId: `${gift.productId}`,
                variantId: `${variantId}`,
                quantity: desiredQty,
                ruleId: getSegmentId(segment, ri),
                campaignTitle,
              });
            }
          }
        }

        // isAutoAddFreeGiftOnceOnly: filter out gifts the customer already removed this session
        if (campaign.advancedSettings?.isAutoAddFreeGiftOnceOnly) {
          const cid = getCampaignId(campaign);
          const tracked = getAutoAddedGiftsFromSession(cid);
          if (tracked.length > 0) {
            const current = this._buildCurrentState(campaign, gfg.state.cartData || {});
            const currentKeys = new Set(current.map(c => `${c.variantId}_${c.ruleId}`));
            return desired.filter(d => {
              const key = `${d.variantId}_${d.ruleId}`;
              // Keep if currently in cart (not yet removed) OR not in tracked list
              return currentKeys.has(key) || !tracked.find(t => t.variantId === d.variantId && t.ruleId === d.ruleId);
            });
          }
        }

        return desired;
      },

      /**
       * Build the current cart state for a campaign's gifts by scanning cart line items.
       * Filters cart items that match this campaign's title and have the free gift property.
       * @param {Object} campaign - Campaign configuration object
       * @param {Object} cartData - Current Shopify cart object
       * @returns {Array} Array of current gift items with { key, productId, variantId, quantity, ruleId }
       */
      _buildCurrentState(campaign, cartData) {
        const current = [];
        const campaignTitle = campaign.discountData_shopifyResponse?.title || campaign.title || "";
        if (!cartData?.items) return current;

        for (const item of cartData.items) {
          if (!isFreeGiftItem(item)) continue;
          if (item.properties[PROMO_NAME_PROPERTY] !== campaignTitle) continue;
          current.push({
            key: item.key,
            productId: `${item.product_id}`,
            variantId: `${item.variant_id}`,
            quantity: item.quantity,
            ruleId: item.properties[RULE_ID_PROPERTY] || "",
          });
        }
        return current;
      },

      /**
       * Compute the diff between desired and current gift states to determine
       * which cart operations are needed. Produces three lists:
       * - adds: new gifts to add to cart
       * - removes: gifts to remove from cart (no longer desired)
       * - updates: gifts where quantity needs adjustment
       * Items are indexed by "{variantId}_{ruleId}" for matching.
       * @param {Array} desired - Desired state from _buildDesiredState()
       * @param {Array} current - Current state from _buildCurrentState()
       * @returns {Object} { adds: Array, removes: Array, updates: Array }
       */
      _diffStates(desired, current) {
        const adds = [];
        const removes = [];
        const updates = [];

        // Index current by variantId+ruleId — aggregate duplicates instead of overwriting.
        // When multiple cart line items share the same variantId+ruleId (different cart keys),
        // sum their quantities and keep the first key as the primary.
        const currentMap = {};
        for (const c of current) {
          const mapKey = `${c.variantId}_${c.ruleId}`;
          if (currentMap[mapKey]) {
            // Duplicate line item — aggregate qty and track extra key for removal
            currentMap[mapKey].totalQuantity += c.quantity;
            currentMap[mapKey].extraKeys.push(c.key);
          } else {
            currentMap[mapKey] = {
              ...c,
              totalQuantity: c.quantity,
              primaryKey: c.key,
              extraKeys: [],
            };
          }
        }

        // Index desired by variantId+ruleId
        const desiredMap = {};
        for (const d of desired) {
          desiredMap[`${d.variantId}_${d.ruleId}`] = d;
        }

        freeGiftV2._trace("diffStates:maps", {
          desiredKeys: Object.keys(desiredMap),
          currentKeys: Object.keys(currentMap),
          desiredEntries: Object.entries(desiredMap).map(([k, v]) => ({ key: k, qty: v.quantity, variantId: v.variantId })),
          currentEntries: Object.entries(currentMap).map(([k, v]) => ({
            key: k, totalQty: v.totalQuantity, variantId: v.variantId,
            primaryKey: v.primaryKey, extraKeys: v.extraKeys,
          })),
        });

        // Remove duplicate line items first — only one cart line per variantId+ruleId should exist
        for (const [, entry] of Object.entries(currentMap)) {
          for (const extraKey of entry.extraKeys) {
            freeGiftV2._trace("diffStates:removeDuplicate", {
              variantId: entry.variantId, ruleId: entry.ruleId,
              primaryKey: entry.primaryKey, removingKey: extraKey,
            });
            removes.push({ key: extraKey });
          }
        }

        // Find adds and updates
        for (const [dKey, dItem] of Object.entries(desiredMap)) {
          if (currentMap[dKey]) {
            const entry = currentMap[dKey];
            // Use totalQuantity (sum of all duplicates) for comparison
            if (entry.totalQuantity !== dItem.quantity) {
              freeGiftV2._trace("diffStates:qtyMismatch", {
                dKey,
                desiredQty: dItem.quantity,
                currentTotalQty: entry.totalQuantity,
                cartItemKey: entry.primaryKey,
              });
              // Set primary key to the desired qty; extras are already being removed above
              updates.push({ key: entry.primaryKey, quantity: dItem.quantity });
            } else if (entry.extraKeys.length > 0) {
              // Total qty matches but there are duplicates — consolidate onto primary key
              freeGiftV2._trace("diffStates:consolidateDuplicates", {
                dKey, desiredQty: dItem.quantity,
                primaryKey: entry.primaryKey, primaryQty: entry.quantity,
              });
              updates.push({ key: entry.primaryKey, quantity: dItem.quantity });
            }
          } else {
            // New item to add
            adds.push({
              variantId: dItem.variantId,
              quantity: dItem.quantity,
              properties: {
                [FREE_GIFT_PROPERTY]: "true",
                [RULE_ID_PROPERTY]: dItem.ruleId,
                [PROMO_NAME_PROPERTY]: dItem.campaignTitle,
              },
            });
          }
        }

        // Find removes (in current but not in desired)
        for (const [cKey, cItem] of Object.entries(currentMap)) {
          if (!desiredMap[cKey]) {
            removes.push({ key: cItem.primaryKey });
          }
        }

        return { adds, removes, updates };
      },
    },

    // ═══════════════════════════════════════════════════════════════════════════
    //  CORE LAYER — TEXT / TEMPLATE VARIABLE RESOLUTION
    // ═══════════════════════════════════════════════════════════════════════════

    text: {
      /** Wrap text in a highlight span for visual emphasis in status/title text. */
      _highlight(text) {
        return `<span class="gfgFGv2-text-highlight">${text}</span>`;
      },

      /** Wrap text in an anchor tag for clickable product/collection links. */
      _link(text, href) {
        return `<a class="gfgFGv2-text-link" href="${href}">${text}</a>`;
      },

      /**
       * Resolve template variables in a status/title text string.
       * Replaces placeholders like {{REMAINING_AMOUNT}}, {{COLLECTION_LINK}},
       * {{FREE_GIFT_PRODUCT}}, {{CURRENCY}}, etc. with actual computed values.
       * Spend amounts are formatted to 2 decimal places; links use the product/collection handles.
       * @param {string} template - Template string with {{VARIABLE}} placeholders
       * @param {Object} rule - Rule configuration (for conditionItems)
       * @param {Object} ruleResult - Rule evaluation result (for currentValue, targetValue)
       * @param {Object} product - Gift product (for title, handle)
       * @param {Object} campaign - Campaign configuration
       * @returns {string} Resolved HTML string
       */
      resolve(template, segment, ruleResult, product, campaign) {
        if (!template) return "";

        const getHref = gfg.utility.getHrefForProductCollectionHandle;
        const currencySymbol = gfg.utility.getCurrencySymbol ? gfg.utility.getCurrencySymbol() : "$";
        const buyXRules = getBuyXRules(segment);
        const buyXResults = ruleResult.buyXResults || [];

        // ── Classify buyX rules into spend vs quantity, collection vs product ──
        // Each buyX rule+result pair is categorized so template variables can
        // pull from the correct rule type rather than always using the first.
        const isSpendType = (r) => r.ruleType === "cartSubtotal" || r.qualifierType === "overallSubtotal";

        const spendResult = buyXResults.find(isSpendType) || null;
        const qtyResult = buyXResults.find(r => !isSpendType(r)) || null;

        // Spend-based template values (from the spend rule, or fallback to aggregate)
        const spendSource = spendResult || ruleResult;
        const remainingSpend = Math.max(0, spendSource.targetValue - spendSource.currentValue);
        const remainingSpendFormatted = remainingSpend.toFixed(2);
        const conditionAmount = (parseFloat(spendSource.targetValue) || 0).toFixed(2);

        // Quantity-based template values (from the quantity rule, or fallback to aggregate)
        const qtySource = qtyResult || ruleResult;
        const remainingCount = Math.max(0, Math.ceil(qtySource.targetValue - qtySource.currentValue));
        const productQuantity = Math.ceil(qtySource.targetValue) || 0;

        // ── Collect condition items from ALL buyX rules, split by type ──
        const collectionItems = [];
        const productItems = [];
        for (const rule of buyXRules) {
          const items = (rule.ruleValue?.value || []).filter(ci => ci.title || ci.name);
          if (rule.ruleType === "collections") {
            collectionItems.push(...items);
          } else if (rule.ruleType === "products" || rule.ruleType === "productVariants") {
            productItems.push(...items);
          }
        }

        // Build collection plain text + linked HTML
        const collectionPlainText = collectionItems.map(ci => ci.title || ci.name).join(", ");
        const collectionLinkHtml = collectionItems.map(ci => {
          const name = ci.title || ci.name;
          return ci.handle ? this._link(name, getHref("collection", ci.handle)) : name;
        }).join(", ");

        // Build product plain text + linked HTML
        const productPlainText = productItems.map(ci => ci.title || ci.name).join(", ");
        const productLinkHtml = productItems.map(ci => {
          const name = ci.title || ci.name;
          return ci.handle ? this._link(name, getHref("product", ci.handle)) : name;
        }).join(", ");

        // Free gift product: plain text and linked
        const freeGiftName = product?.title || "";
        const freeGiftLink = product?.handle
          ? this._link(freeGiftName, getHref("product", product.handle))
          : freeGiftName;

        return template
          // Free gift product
          .replace(/\{\{FREE_GIFT_PRODUCT\}\}/g, freeGiftName)
          .replace(/\{\{FREE_GIFT_PRODUCT_LINK\}\}/g, freeGiftLink)
          // Handle {{CURRENCY}}{{REMAINING_AMOUNT}} together to avoid double currency symbol
          .replace(/\{\{CURRENCY\}\}\s*\{\{REMAINING_AMOUNT\}\}/g, this._highlight(`${currencySymbol}${remainingSpendFormatted}`))
          .replace(/\{\{CURRENCY\}\}/g, currencySymbol)
          .replace(/\{\{REMAINING_AMOUNT\}\}/g, this._highlight(remainingSpendFormatted))
          .replace(/\{\{REMAINING_QUANTITY\}\}/g, this._highlight(`${remainingCount}`))
          .replace(/\{\{REMAINING_COUNT\}\}/g, this._highlight(`${remainingCount}`))
          .replace(/\{\{CONDITION_AMOUNT\}\}/g, this._highlight(`${currencySymbol}${conditionAmount}`))
          .replace(/\{\{PRODUCT_QUANTITY\}\}/g, this._highlight(`${productQuantity}`))
          // Collection: plain text and linked (from ALL collection-type buyX rules)
          .replace(/\{\{COLLECTION\}\}/g, collectionPlainText)
          .replace(/\{\{COLLECTION_NAME\}\}/g, collectionPlainText)
          .replace(/\{\{COLLECTION_LINK\}\}/g, collectionLinkHtml)
          // Product: plain text and linked (from ALL product-type buyX rules)
          .replace(/\{\{PRODUCT\}\}/g, productPlainText)
          .replace(/\{\{PRODUCT_NAME\}\}/g, productPlainText)
          .replace(/\{\{PRODUCT_LINK\}\}/g, productLinkHtml);
      },
    },

    // ═══════════════════════════════════════════════════════════════════════════
    //  CORE LAYER — PRODUCT DATA FETCHING
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Fetch Shopify product data by handle, with in-memory caching.
     * Returns cached data if available; otherwise fetches via gfg.utility.getProductDataV2
     * and stores the result in shopifyProductCache.
     * @param {string} handle - Shopify product handle
     * @returns {Object|null} Product data object or null on failure
     */
    async _getProductData(handle) {
      if (!handle) return null;
      if (this.state.shopifyProductCache[handle]) return this.state.shopifyProductCache[handle];
      try {
        this._trace("_getProductData:fetch", { handle });
        const data = await gfg.utility.getProductDataV2(handle);
        if (data) this.state.shopifyProductCache[handle] = data;
        return data;
      } catch (e) {
        gfg.utility.debugConsole("[FGv2] _getProductData error for", handle, e);
        return null;
      }
    },

    /**
     * Check real-time availability of a gift product using cached Shopify product data.
     * Returns true if cache miss (safe fallback — will catch on next cycle after prefetch).
     */
    _isProductAvailable(giftProduct, selectedVariantId) {
      if (!giftProduct?.handle) return true;
      const shopifyData = this.state.shopifyProductCache[giftProduct.handle];
      if (!shopifyData) {
        this._trace("_isProductAvailable:cacheMiss", { handle: giftProduct.handle, selectedVariantId });
        return true;
      }

      if (!shopifyData.available) {
        this._trace("_isProductAvailable:productOOS", { handle: giftProduct.handle });
        return false;
      }

      // If a specific variant is selected, check its availability
      if (selectedVariantId && shopifyData.variants?.length > 0) {
        const variant = shopifyData.variants.find(v => `${v.id}` === `${selectedVariantId}`);
        if (variant && !variant.available) {
          this._trace("_isProductAvailable:variantOOS", { handle: giftProduct.handle, selectedVariantId, variantAvailable: variant.available });
          return false;
        }
      }

      return true;
    },

    /**
     * Get the set of merchant-selected variant IDs for a gift product.
     * Returns null if no variants are configured (backward compat — treat all as allowed).
     */
    _getAllowedVariantIds(giftProduct) {
      if (!giftProduct?.variants?.length) return null;
      const allowed = new Set();
      for (const v of giftProduct.variants) {
        const vid = resolveVariantId(v);
        if (vid) allowed.add(vid);
      }
      return allowed.size > 0 ? allowed : null;
    },

    /**
     * Check if ANY variant of a gift product is available (for row-state determination).
     * Returns true if at least one variant is available, or on cache miss (safe fallback).
     */
    _isAnyVariantAvailable(giftProduct) {
      if (!giftProduct?.handle) return true;
      const shopifyData = this.state.shopifyProductCache[giftProduct.handle];
      if (!shopifyData) return true; // Cache miss — assume available

      if (!shopifyData.available) {
        this._trace("_isAnyVariantAvailable:productOOS", { handle: giftProduct.handle });
        return false;
      }

      // If variants exist, check if at least one merchant-selected variant is available
      if (shopifyData.variants?.length > 0) {
        const allowed = this._getAllowedVariantIds(giftProduct);
        if (allowed) {
          const result = shopifyData.variants.some(v => allowed.has(`${v.id}`) && v.available);
          if (!result) this._trace("_isAnyVariantAvailable:noAllowedAvailable", { handle: giftProduct.handle, allowed: [...allowed] });
          return result;
        }
        const result = shopifyData.variants.some(v => v.available);
        if (!result) this._trace("_isAnyVariantAvailable:allVariantsOOS", { handle: giftProduct.handle });
        return result;
      }

      return shopifyData.available;
    },

    /**
     * Find the first available variant ID from the Shopify product cache.
     * Returns the variant ID (string) if found, or null if all variants are OOS.
     */
    _findFirstAvailableVariantId(giftProduct) {
      if (!giftProduct?.handle) return null;
      const shopifyData = this.state.shopifyProductCache[giftProduct.handle];
      if (!shopifyData?.variants?.length) return null;

      const allowed = this._getAllowedVariantIds(giftProduct);
      const available = shopifyData.variants.find(v => v.available && (!allowed || allowed.has(`${v.id}`)));
      const result = available ? `${available.id}` : null;
      this._trace("_findFirstAvailableVariantId", {
        handle: giftProduct.handle,
        result,
        variants: shopifyData.variants.map(v => ({ id: v.id, available: v.available })),
      });
      return result;
    },

    /**
     * Prefetch Shopify product data for all gift products in a campaign.
     * Populates shopifyProductCache so _isProductAvailable has real-time data.
     */
    async _prefetchGiftProductData(campaign) {
      // Collect uncached gift products, deduplicated by handle
      const uncachedGifts = [];
      const seenHandles = {};
      for (const segment of getSegments(campaign)) {
        for (const gift of getGiftProducts(segment)) {
          if (gift.handle && !this.state.shopifyProductCache[gift.handle] && !seenHandles[gift.handle]) {
            seenHandles[gift.handle] = true;
            uncachedGifts.push({ productId: gift.productId, handle: gift.handle });
          }
        }
      }
      this._trace("_prefetchGiftProductData", {
        uncachedCount: uncachedGifts.length,
        uncachedHandles: uncachedGifts.map(g => g.handle),
        cachedHandles: Object.keys(this.state.shopifyProductCache),
      });
      if (uncachedGifts.length === 0) return;

      gfg.utility.debugConsole("[FGv2] _prefetchGiftProductData: fetching", uncachedGifts.length, "products");

      // Try batch fetch via Storefront API (same as V1)
      const batchApi = gfg.customDiscountStorefrontApis?.getProductsDataByIdWithAjaxResponse;
      if (batchApi) {
        try {
          const productGids = uncachedGifts
            .filter(g => g.productId)
            .map(g => {
              const pid = `${g.productId}`;
              return pid.startsWith("gid://") ? pid : `gid://shopify/Product/${pid}`;
            });

          if (productGids.length > 0) {
            const productsData = await batchApi(productGids);
            if (productsData && Array.isArray(productsData)) {
              for (const pd of productsData) {
                if (pd && pd.handle) {
                  this.state.shopifyProductCache[pd.handle] = pd;
                }
              }
              gfg.utility.debugConsole("[FGv2] _prefetchGiftProductData: batch fetched", productsData.length, "products via Storefront API");
            }
          }

          // Fall back to handle-based fetch for any still-uncached products
          const stillUncached = uncachedGifts.filter(g => !this.state.shopifyProductCache[g.handle]);
          if (stillUncached.length > 0) {
            gfg.utility.debugConsole("[FGv2] _prefetchGiftProductData: falling back to handle fetch for", stillUncached.length, "products");
            await Promise.all(stillUncached.map(g => this._getProductData(g.handle)));
          }
          return;
        } catch (e) {
          gfg.utility.debugConsole("[FGv2] _prefetchGiftProductData: batch fetch failed, falling back to individual fetches", e);
        }
      }

      // Fallback: fetch individually by handle
      await Promise.all(uncachedGifts.map(g => this._getProductData(g.handle)));
    },

    /**
     * Invalidate cached product data for a variant after a failed cart add.
     * Forces fresh data on next cycle.
     */
    _invalidateCacheForVariant(variantId) {
      this._trace("_invalidateCacheForVariant", { variantId });
      const vid = `${variantId}`;
      for (const [handle, data] of Object.entries(this.state.shopifyProductCache)) {
        if (data?.variants?.some(v => `${v.id}` === vid)) {
          delete this.state.shopifyProductCache[handle];
          gfg.utility.debugConsole("[FGv2] _invalidateCacheForVariant: cleared cache for", handle);
          return;
        }
      }
    },

    // ═══════════════════════════════════════════════════════════════════════════
    //  UI LAYER — ROUTER
    // ═══════════════════════════════════════════════════════════════════════════

    ui: {

      /**
       * Route rendering to the appropriate UI implementation based on campaign type.
       * Migrated V1 campaigns use v1Compat renderer; new campaigns use native v2 renderer.
       * @param {Object} campaign - Campaign configuration object
       * @param {number} campaignIndex - Index of the campaign
       * @param {Object} renderData - Render data from buildRenderData()
       */
      render(campaign, campaignIndex, renderData) {
        freeGiftV2._trace("ui.render", { campaignIndex, giftsCount: renderData?.gifts?.length, globalState: renderData?.globalState });
        if (campaign.isMigratedFromV1) {
          this.v1Compat.render(campaignIndex, renderData);
        } else {
          this.v2.render(campaignIndex, renderData);
        }
      },

      /**
       * Hide a campaign's widget by clearing all its container elements across all contexts.
       * Called when a campaign fails eligibility checks.
       * @param {number} campaignIndex - Index of the campaign to hide
       */
      hide(campaignIndex) {
        // Clear all context containers for this campaign
        for (const [key, container] of Object.entries(freeGiftV2.state.containerRefs)) {
          if (key.startsWith(`${campaignIndex}_`)) {
            container.innerHTML = "";
          }
        }
      },

      // ── V2 NATIVE UI ────────────────────────────────────────────────────

      v2: {

        /**
         * Returns the rendering contexts this campaign is eligible for.
         * A campaign can render in multiple contexts simultaneously
         * (e.g., PDP + side cart on a product page).
         */
        _getEligibleContexts(campaignIndex) {
          const campaign = freeGiftV2.state.campaigns[campaignIndex];
          const ds = campaign?.widgetSettings?.displaySettings || {};
          const pageType = gfg.state.page_type;
          const contexts = [];

          if (pageType === "product") {
            if (gfg.utility.isPageRelevantForWidget(ds, "PRODUCT_PAGE")) contexts.push("pdp");
            if (gfg.utility.isPageRelevantForWidget(ds, "SIDE_CART")) contexts.push("sidecart");
          } else if (pageType === "cart") {
            if (gfg.utility.isPageRelevantForWidget(ds, "CART_PAGE")) contexts.push("cart");
          } else {
            if (gfg.utility.isPageRelevantForWidget(ds, "SIDE_CART")) contexts.push("sidecart");
          }

          return contexts;
        },

        /**
         * Render a campaign's widget into all eligible display contexts (pdp, sidecart, cart).
         * Determines which contexts are applicable based on display settings and current page type,
         * then delegates to _renderToContext for each.
         * @param {number} campaignIndex - Index of the campaign
         * @param {Object} renderData - Render data from buildRenderData()
         */
        render(campaignIndex, renderData) {
          try {
            const contexts = this._getEligibleContexts(campaignIndex);
            freeGiftV2._trace("ui.v2.render", { campaignIndex, contexts });
            if (contexts.length === 0) {
              gfg.utility.debugConsole(`[FGv2] ui.v2.render: campaign[${campaignIndex}] has NO eligible contexts (page_type=${gfg.state.page_type})`);
              return;
            }
            gfg.utility.debugConsole(`[FGv2] ui.v2.render: campaign[${campaignIndex}] rendering to contexts:`, contexts);
            for (const ctx of contexts) {
              this._renderToContext(campaignIndex, ctx, renderData);
            }
          } catch (e) {
            gfg.utility.debugError("[FGv2] ui.v2.render error", e);
          }
        },

        /** Render a single campaign into a specific context (pdp / sidecart / cart) */
        _renderToContext(campaignIndex, context, renderData) {
          const refKey = `${campaignIndex}_${context}`;
          const container = this._getOrCreateContainer(campaignIndex, context);
          if (!container) {
            gfg.utility.debugConsole(`[FGv2] _renderToContext SKIP: no container found for campaign[${campaignIndex}] context="${context}"`);
            return;
          }

          // Apply context-specific expanded state (each context toggles independently)
          const campaign = freeGiftV2.state.campaigns[campaignIndex];
          const defaultExpanded = campaign?.widgetSettings?.isExpandedByDefault || false;
          const contextExpanded = freeGiftV2.state.uiExpanded[refKey] ?? defaultExpanded;
          if (renderData.isMultiGift && renderData.dropdownState.expanded !== contextExpanded) {
            renderData = {
              ...renderData,
              dropdownState: { ...renderData.dropdownState, expanded: contextExpanded },
            };
          }

          // Apply CSS custom properties from config
          this._applyTheme(container, renderData.config);

          // Try partial DOM update if structure hasn't changed
          const lastRD = freeGiftV2.state.lastRenderData[refKey];
          if (lastRD && container.children.length > 0 && this._tryPartialUpdate(container, lastRD, renderData, campaignIndex)) {
            freeGiftV2.state.lastRenderData[refKey] = renderData;
            return;
          }

          // Full rebuild
          const html = renderData.isMultiGift
            ? this._renderMultiGiftWidget(campaignIndex, renderData)
            : this._renderSingleGiftWidget(campaignIndex, renderData);

          container.innerHTML = html;
          freeGiftV2.state.lastRenderData[refKey] = renderData;

          // Attach event listeners via delegation (only once)
          if (!container._fgv2ClickHandler) {
            container._fgv2ClickHandler = (e) => this._handleClick(e);
            container._fgv2ChangeHandler = (e) => this._handleChange(e);
            container.addEventListener("click", container._fgv2ClickHandler);
            container.addEventListener("change", container._fgv2ChangeHandler);
          }
        },

        /**
         * Partial DOM update: updates only progress offsets, status text, badge count,
         * and action areas when the widget structure (gift count, multi/single mode) is unchanged.
         * Returns true if partial update was applied, false if full rebuild is needed.
         */
        _tryPartialUpdate(container, lastRD, newRD, campaignIndex) {
          // Full rebuild needed if structure changed
          if (lastRD.isMultiGift !== newRD.isMultiGift) return false;
          if (lastRD.gifts.length !== newRD.gifts.length) return false;

          const rows = container.querySelectorAll(".gfgFGv2-gift-row");
          if (rows.length !== newRD.gifts.length) return false;

          // Handle expanded state change (multi-gift dropdown toggle)
          if (newRD.isMultiGift && newRD.dropdownState.expanded !== lastRD.dropdownState.expanded) {
            const dropdownContent = container.querySelector(".gfgFGv2-dropdown-content");
            const chevronWrap = container.querySelector(".gfgFGv2-chevron-wrap");
            if (dropdownContent) {
              dropdownContent.classList.toggle("gfgFGv2-expanded", newRD.dropdownState.expanded);
            }
            if (chevronWrap) {
              chevronWrap.classList.toggle("gfgFGv2-chevron-open", newRD.dropdownState.expanded);
            }
            // Toggle shake animation based on new expanded state
            const dropdownBar = container.querySelector(".gfgFGv2-dropdown-bar");
            if (dropdownBar) {
              const shouldShake = newRD.dropdownState.unlockedCount > 0 && !newRD.dropdownState.expanded;
              dropdownBar.classList.toggle("gfgFGv2-icon-shake", shouldShake);
            }
          }

          // Safe to do targeted updates: progress, status text, action area, badge
          for (let g = 0; g < newRD.gifts.length; g++) {
            const gift = newRD.gifts[g];
            const lastGift = lastRD.gifts[g];
            const row = rows[g];

            // Update row state class and action area when row state changed
            if (gift.rowState !== lastGift.rowState) {
              row.classList.remove(`gfgFGv2-row-${lastGift.rowState}`);
              row.classList.add(`gfgFGv2-row-${gift.rowState}`);
              const actionEl = row.querySelector(".gfgFGv2-action");
              if (actionEl) {
                actionEl.innerHTML = this._renderActionArea(gift, campaignIndex, newRD.config);
              }
            }

            // Update progress ring offset (use style property for reliable CSS transition)
            if (gift.progress !== lastGift.progress) {
              const progressCircle = row.querySelector(".gfgFGv2-progress-circle");
              if (progressCircle) {
                const offset = CIRCUMFERENCE * (1 - clamp01(gift.progress));
                progressCircle.style.strokeDashoffset = offset.toFixed(1);
              }
            }

            // Update status text
            if (gift.statusText !== lastGift.statusText) {
              const statusEl = row.querySelector(".gfgFGv2-status");
              if (statusEl) statusEl.innerHTML = gift.statusText;
            }

            // Update qty badge when remainingQuantity changes (e.g. partial add, rowState stays UNLOCKED)
            if (gift.remainingQuantity !== lastGift.remainingQuantity) {
              const imgWrap = row.querySelector(".gfgFGv2-img-wrap");
              if (imgWrap) {
                const existingBadge = imgWrap.querySelector(".gfgFGv2-qty-badge");
                if (gift.quantity > 1 && gift.remainingQuantity > 0) {
                  if (existingBadge) {
                    existingBadge.textContent = `\u00d7${gift.remainingQuantity}`;
                  } else {
                    const badgeSpan = document.createElement("span");
                    badgeSpan.className = "gfgFGv2-qty-badge";
                    badgeSpan.textContent = `\u00d7${gift.remainingQuantity}`;
                    imgWrap.appendChild(badgeSpan);
                  }
                } else if (existingBadge) {
                  existingBadge.remove();
                }
              }
            }
          }

          // Update badge count (multi-gift dropdown)
          if (newRD.isMultiGift) {
            const badge = container.querySelector(".gfgFGv2-badge");
            if (newRD.dropdownState.unlockedCount > 0) {
              if (badge) {
                badge.textContent = newRD.dropdownState.unlockedCount;
              } else {
                // Badge needs to be added — requires full rebuild
                return false;
              }
            } else if (badge) {
              badge.remove();
            }

            // Update dropdown title
            if (newRD.dropdownState.title !== lastRD.dropdownState.title) {
              const titleEl = container.querySelector(".gfgFGv2-dropdown-title");
              if (titleEl) titleEl.textContent = newRD.dropdownState.title;
            }

            // Update shake animation when unlockedCount changes
            if (newRD.dropdownState.unlockedCount !== lastRD.dropdownState.unlockedCount) {
              const barEl = container.querySelector(".gfgFGv2-dropdown-bar");
              if (barEl) {
                const shouldShake = newRD.dropdownState.unlockedCount > 0 && !newRD.dropdownState.expanded;
                barEl.classList.toggle("gfgFGv2-icon-shake", shouldShake);
              }
            }
          }

          return true;
        },

        /** Query both document and shadow DOM for a selector */
        _queryDOM(selector) {
          let el = document.querySelector(selector);
          if (!el && gfg.state.shadowRoot?.reference) {
            el = gfg.state.shadowRoot.reference.querySelector(selector);
          }
          return el;
        },

        /**
         * Check whether a DOM element is inside a side cart or cart drawer container.
         * Used to prevent PDP context from accidentally finding wrapper elements
         * that live inside the drawer, which would cause duplicate widget rendering.
         * @param {HTMLElement} el - DOM element to check
         * @returns {boolean} True if the element is inside a side cart/drawer
         */
        _isInsideSideCart(el) {
          if (!el) return false;
          const sideCartSels = (typeof DEFAULT_sideCartSelectorsApp7Ext !== "undefined"
            ? DEFAULT_sideCartSelectorsApp7Ext
            : "#CartDrawer, .drawer, .cart-drawer, .cart-notification, .Drawer"
          ).split(",").map(s => s.trim()).filter(Boolean).join(",");
          return !!el.closest(sideCartSels);
        },

        /**
         * Check if an element lives inside a cart page wrapper (.gfgCartPageWrapperV2).
         * Used by PDP context to avoid hijacking cart/sidecart wrappers as PDP containers.
         */
        _isInsideCartPageWrapper(el) {
          if (!el) return false;
          return !!el.closest(".gfgCartPageWrapperV2");
        },

        /**
         * Get or create a DOM container element for rendering a campaign widget in a given context.
         * Caches container references in state.containerRefs. Validates cached refs are still in
         * the live DOM (themes may re-render cart drawers). Falls back to injecting a wrapper
         * near standard Shopify theme elements if no app block wrapper is found.
         * @param {number} campaignIndex - Index of the campaign
         * @param {string} context - Rendering context: "pdp", "sidecart", or "cart"
         * @returns {HTMLElement|null} Container element, or null if no suitable parent found
         */
        _getOrCreateContainer(campaignIndex, context) {
          const refKey = `${campaignIndex}_${context}`;
          const cached = freeGiftV2.state.containerRefs[refKey];
          if (cached) {
            // Verify cached ref is still in the live DOM (theme may re-render cart drawer).
            // Also accept refs inside the bootstrap's in-memory cartPageWrapperV2 — for lazy-loaded
            // side carts, we render into the element before it's in the DOM.
            if (document.body.contains(cached) ||
                gfg.state.shadowRoot?.reference?.contains(cached) ||
                gfg.elements?.cartPageWrapperV2?.contains(cached)) {
              return cached;
            }
            // Stale reference — clear it and re-create below
            freeGiftV2._trace("_getOrCreateContainer:stale", { refKey, context });
            delete freeGiftV2.state.containerRefs[refKey];
            delete freeGiftV2.state.lastRenderData[refKey];
          }

          // Find parent wrapper based on rendering context
          let parent = null;
          let parentSource = "none";

          // Block matching helper: find a .gfgFreeGiftWrapperV3 block whose data-setting.blockId
          // matches this campaign's ID. Falls back to the first block if no ID match.
          const campaign = freeGiftV2.state.campaigns[campaignIndex];
          const campaignId = getCampaignId(campaign);

          const _findBlockByIdMatch = (skipSideCart) => {
            const ref = gfg.state.shadowRoot?.reference || document;
            const blocks = Array.from(ref.querySelectorAll(".gfgFreeGiftWrapperV3"));
            if (blocks.length === 0) return null;

            // In PDP context, skip blocks that live inside a side cart or cart page wrapper
            const eligible = skipSideCart
              ? blocks.filter(el => !this._isInsideSideCart(el) && !this._isInsideCartPageWrapper(el))
              : blocks;
            if (eligible.length === 0) return null;

            // Try to match blockId to this campaign's ID
            for (const el of eligible) {
              try {
                const blockId = JSON.parse(el.getAttribute("data-setting"))?.blockId;
                if (blockId && blockId == campaignId) return el;
              } catch (_) { /* ignore parse errors */ }
            }
            // No ID match — return the first eligible block
            return eligible[0];
          };

          switch (context) {
            case "pdp": {
              // Priority 1: Feature-specific app block with blockId matching (skip blocks inside side cart)
              parent = _findBlockByIdMatch(true);
              if (parent) {
                parentSource = "gfgFreeGiftWrapperV3-blockMatch";
                break;
              }
              // Priority 2: Bootstrap wrapper (.gftFreeGiftWrapper outside side cart)
              const pdpFallback = this._queryDOM(".gftFreeGiftWrapper");
              if (pdpFallback && !this._isInsideSideCart(pdpFallback) && !this._isInsideCartPageWrapper(pdpFallback)) {
                parent = pdpFallback;
                parentSource = pdpFallback.className;
                break;
              }
              // Priority 3: Fallback injection (uses custom addToCartBtnSelectors if available)
              parent = this._injectFallbackWrapper("pdp");
              parentSource = parent ? "fallback-pdp" : "none";
              break;
            }
            case "sidecart":
              // Priority 1: Feature-specific side cart wrapper (created by bootstrap via freeGiftSideCartSelector)
              parent = this._queryDOM(".gfgFreeGiftSideCartWrapperV4");
              if (parent) {
                parentSource = "gfgFreeGiftSideCartWrapperV4";
              } else {
                // Priority 2: .gfgCartPageWrapperV2 already in the DOM
                let cartPageFGWrapper = this._queryDOM(".gfgCartPageWrapperV2 .gftFreeGiftWrapper");
                if (!cartPageFGWrapper) {
                  // Priority 3: bootstrap pre-creates gfg.elements.cartPageWrapperV2 in memory
                  // even when the side cart isn't in the DOM yet (lazy-loaded themes).
                  // Render into it now — when the side cart opens and the bootstrap inserts it,
                  // the widgets will already be there.
                  cartPageFGWrapper = gfg.elements?.cartPageWrapperV2?.querySelector(".gftFreeGiftWrapper") || null;
                }
                if (cartPageFGWrapper) {
                  parent = cartPageFGWrapper;
                  parentSource = "gfgCartPageWrapperV2-gftFreeGiftWrapper";
                } else {
                  // Priority 4: Try injecting using custom freeGiftSideCartSelector directly
                  const customSideCartSel = gfg.settings.app?.freeGiftSideCartSelector;
                  if (customSideCartSel) {
                    const insertAbove = gfg.settings.app?.freeGiftSideCartWrapperAboveSelector !== false;
                    parent = this._injectFallbackWrapperAtSelector("sidecart", customSideCartSel, insertAbove);
                    parentSource = parent ? "fallback-sidecart-customSelector" : null;
                  }
                  // Priority 5: Default fallback selectors
                  if (!parent) {
                    parent = this._injectFallbackWrapper("sidecart");
                    parentSource = parent ? "fallback-sidecart" : "none";
                  }
                }
              }
              break;
            case "cart":
              // Priority 1: Feature-specific app block with blockId matching
              parent = _findBlockByIdMatch(false);
              if (parent) {
                parentSource = "gfgFreeGiftWrapperV3-blockMatch";
              } else {
                // Priority 2: Bootstrap wrapper
                parent = this._queryDOM(".gftFreeGiftWrapper") || this._injectFallbackWrapper("cart");
                parentSource = parent ? (parent.className || "fallback-cart") : "none";
              }
              break;
          }

          freeGiftV2._trace("_getOrCreateContainer", { refKey, context, parentSource, parentFound: !!parent });

          if (!parent) {
            gfg.utility.debugConsole(`[FGv2] _getOrCreateContainer: no parent wrapper found for context="${context}". Looked for:`,
              context === "pdp" ? ".gfgFreeGiftWrapperV3 / .gftFreeGiftWrapper (outside side cart) + fallback PDP selectors" :
              context === "sidecart" ? ".gfgFreeGiftSideCartWrapperV4 + fallback side cart selectors" :
              ".gfgFreeGiftWrapperV3 / .gftFreeGiftWrapper + fallback cart selectors"
            );
            return null;
          }

          // Create v2 container inside the wrapper (context-specific class for independent behavior)
          const containerClass = `gfgFGv2-widget-${campaignIndex}-${context}`;
          let container = parent.querySelector(`.${containerClass}`);
          if (!container) {
            container = document.createElement("div");
            container.className = `gfgFGv2-widget ${containerClass} gfgFGv2-ctx-${context}`;
            container.dataset.fgv2Context = context;
            parent.appendChild(container);
          }

          freeGiftV2.state.containerRefs[refKey] = container;
          return container;
        },

        /**
         * Fallback injection: creates a wrapper div near standard Shopify theme elements
         * when no app block or bootstrap wrapper is available.
         *
         * Uses the same default selectors as the bootstrap (freeGiftLogicv1.js):
         *   - pdp: addToCartBtnSelectors / DEFAULT_PDP_SELECTORS_NOV25 → above or below (via addAfterAddTocartBtn)
         *   - sidecart: DEFAULT_SIDE_CART_BOTTOM_SELECTORS_NOV25 → inject right above
         *   - cart: DEFAULT_CART_PAGE_SELECTORS_NOV25 → inject right above
         *
         * Each context gets its own wrapper so campaigns can render in different locations.
         */
        _injectFallbackWrapper(context) {
          const ref = gfg.state.shadowRoot?.reference || document;
          const wrapperClass = `gfgFGv2-injected-wrapper-${context}`;

          // Re-use existing fallback wrapper for this context
          const existing = ref.querySelector(`.${wrapperClass}`);
          if (existing) return existing;

          let selectors, position;

          switch (context) {
            case "pdp": {
              // Use merchant's custom addToCartBtnSelectors if available, then append defaults
              const customPdpSel = gfg.settings.app?.addToCartBtnSelectors;
              const defaultPdpSel = typeof DEFAULT_PDP_SELECTORS_NOV25 !== "undefined"
                ? DEFAULT_PDP_SELECTORS_NOV25
                : ".product-form__buttons, .product-form-buttons, .payment-buttons, .product__submit__buttons";
              selectors = customPdpSel ? `${customPdpSel}, ${defaultPdpSel}` : defaultPdpSel;
              // Matches V1 behavior: render above the selector by default, below if addAfterAddTocartBtn is set
              position = gfg.settings.app?.addAfterAddTocartBtn ? "afterend" : "beforebegin";
              break;
            }
            case "cart":
              selectors = typeof DEFAULT_CART_PAGE_SELECTORS_NOV25 !== "undefined"
                ? DEFAULT_CART_PAGE_SELECTORS_NOV25
                : ".cart__ctas, .cart__buttons-container, .cart__checkout-wrapper, .checkout-buttons, .cart__buttons";
              position = "beforebegin"; // Cart page: widget renders right above
              break;
            case "sidecart":
              selectors = typeof DEFAULT_SIDE_CART_BOTTOM_SELECTORS_NOV25 !== "undefined"
                ? DEFAULT_SIDE_CART_BOTTOM_SELECTORS_NOV25
                : ".cart__ctas, .cart-drawer__footer, .drawer__footer,.mini-cart__actions, .mini-cart__footer, .cart__buttons, .drawer__bottom";
              position = "beforebegin"; // Side cart: widget renders right above
              break;
            default:
              return null;
          }

          // Find the first matching target by selector priority order.
          // We iterate selectors individually rather than using querySelector(fullList)
          // because querySelector returns by DOM order, not selector list order.
          // The selectors are listed by priority — first match wins.
          // For PDP context, skip elements inside the side cart drawer to avoid duplicates.
          let target = null;
          const parts = selectors.split(",").map(s => s.trim()).filter(Boolean);
          for (const sel of parts) {
            try {
              const el = ref.querySelector(sel);
              if (el && (context !== "pdp" || (!this._isInsideSideCart(el) && !this._isInsideCartPageWrapper(el)))) {
                target = el;
                break;
              }
            } catch (_) { /* skip invalid selector */ }
          }

          if (!target) {
            freeGiftV2._trace("_injectFallbackWrapper:noTarget", { context, selectorCount: parts.length, hasShadowRoot: !!gfg.state.shadowRoot?.reference });
            return null;
          }

          const wrapper = document.createElement("div");
          wrapper.className = wrapperClass;

          target.insertAdjacentElement(position, wrapper);

          freeGiftV2._trace("_injectFallbackWrapper:ok", { context, matchedSelector: target.className || target.tagName, position });
          gfg.utility.debugConsole(`[FGv2] Fallback wrapper (${context}) injected near:`, target.className || target.tagName);
          return wrapper;
        },

        /**
         * Inject a fallback wrapper at a specific custom selector (e.g. freeGiftSideCartSelector).
         * Used when the bootstrap hasn't already created the wrapper element.
         * @param {string} context - Rendering context for class naming
         * @param {string} selector - CSS selector to inject near
         * @param {boolean} insertAbove - If true, insert before the target; otherwise insert after
         * @returns {HTMLElement|null}
         */
        _injectFallbackWrapperAtSelector(context, selector, insertAbove) {
          try {
            const ref = gfg.state.shadowRoot?.reference || document;
            const wrapperClass = `gfgFGv2-injected-wrapper-${context}`;
            const existing = ref.querySelector(`.${wrapperClass}`);
            if (existing) return existing;

            const target = ref.querySelector(selector);
            if (!target) return null;

            const wrapper = document.createElement("div");
            wrapper.className = wrapperClass;

            if (insertAbove) {
              target.insertAdjacentElement("beforebegin", wrapper);
            } else {
              target.insertAdjacentElement("afterend", wrapper);
            }

            freeGiftV2._trace("_injectFallbackWrapperAtSelector:ok", { context, selector, insertAbove });
            gfg.utility.debugConsole(`[FGv2] Custom selector wrapper (${context}) injected near:`, selector);
            return wrapper;
          } catch (e) {
            gfg.utility.debugError("[FGv2] _injectFallbackWrapperAtSelector error", e);
            return null;
          }
        },

        /**
         * Apply CSS custom properties (theme variables) to a widget container based on
         * the campaign's color, font, and widget settings. Sets CSS variables like
         * --fg-btn-bg, --fg-title-size, etc. that are consumed by the widget CSS.
         * @param {HTMLElement} container - Widget container element
         * @param {Object} config - Configuration object with colors, fonts, and widgetSettings
         */
        _applyTheme(container, config) {
          const c = config.colors || {};
          const f = config.fonts || {};
          const ws = config.widgetSettings || {};

          const props = {
            // Colors
            "--fg-btn-bg": c.claimBtnBgColor || "#1A1A1A",
            "--fg-btn-text": c.claimBtnTextColor || "#ffffff",
            "--fg-border": c.borderColor || "#dedede",
            "--fg-title": c.titleColor || "#000000",
            "--fg-subtitle": c.subtitleColor || "#777575",
            "--fg-box-bg": c.boxBgColor || "#f1f1f1",
            "--fg-highlight": c.highlightColor || "#e53935",
            "--fg-progress": c.lockProgressColor || "#4caf50",
            "--fg-empty-progress": c.emptyLockProgressColor || "#eee",
            "--fg-tag-bg": c.tagBgColor || "#c62828",
            "--fg-tag-dark": this._shadeColor(c.tagBgColor || "#c62828", -40),
            "--fg-tag-fold": this._shadeColor(c.tagBgColor || "#c62828", -60),
            "--fg-strikethrough": c.strikeThroughPriceTextColor || "#999",
            "--fg-dropdown-title": c.dropdownTitleColor || "#000",
            "--fg-dropdown-icon": c.dropdownIconColor || "#000",
            "--fg-btn-border": c.claimButtonBorderColor || "#1A1A1A",
            "--fg-product-title": c.productTitleColor || "",
            // Font sizes
            "--fg-title-size": `${f.titleFontSize || "16"}px`,
            "--fg-subtitle-size": `${f.subtitleFontSize || "13"}px`,
            "--fg-btn-size": `${f.claimBtnTextFontSize || "15"}px`,
            "--fg-tag-size": `${f.tagFontSize || "10"}px`,
            "--fg-dropdown-size": `${f.dropDownTitleFontSize || "16"}px`,
            "--fg-body-title-size": `${f.bodyTitleFontSize || "16"}px`,
            "--fg-strikethrough-size": `${f.strikeThroughFontSize || "12"}px`,
            // Font weights (mapped from fontStyle: "bold"/"medium"/"regular")
            "--fg-title-weight": _fontWeight(f.titleFontStyle),
            "--fg-subtitle-weight": _fontWeight(f.subtitleFontStyle),
            "--fg-btn-weight": _fontWeight(f.claimBtnTextFontStyle),
            "--fg-tag-weight": _fontWeight(f.tagFontStyle),
            "--fg-dropdown-weight": _fontWeight(f.dropDownFontStyle),
            "--fg-body-title-weight": _fontWeight(f.bodyTitleFontStyle),
            "--fg-strikethrough-weight": _fontWeight(f.strikeThroughFontStyle),
          };

          for (const [key, val] of Object.entries(props)) {
            container.style.setProperty(key, val);
          }

          if (ws.widgetBorderRadius) container.style.setProperty("--fg-border-radius", `${ws.widgetBorderRadius}px`);
          if (ws.widgetPadding) container.style.setProperty("--fg-widget-padding", `${ws.widgetPadding}px`);
        },

        // ── Single gift widget (States 1 & 3) ──

        /**
         * Render a single-gift widget layout (used when campaign has only one gift product).
         * Shows a card with tag ribbon and a single gift row.
         * @param {number} campaignIndex - Index of the campaign
         * @param {Object} renderData - Render data from buildRenderData()
         * @returns {string} HTML string for the single-gift widget
         */
        _renderSingleGiftWidget(campaignIndex, renderData) {
          if (renderData.gifts.length === 0) return "";
          const gift = renderData.gifts[0];
          const tagHtml = this._renderTagRibbon(renderData.config);

          return `<div class="gfgFGv2-single-card">${tagHtml}${this._renderGiftRow(gift, campaignIndex, renderData.config)}</div>`;
        },

        // ── Multi gift widget (States 2 & 4) ──

        /**
         * Render a multi-gift widget layout with a collapsible dropdown bar.
         * Shows a title bar with icon, badge count, and chevron toggle, plus an expandable
         * content area containing all gift rows.
         * @param {number} campaignIndex - Index of the campaign
         * @param {Object} renderData - Render data from buildRenderData()
         * @returns {string} HTML string for the multi-gift dropdown widget
         */
        _renderMultiGiftWidget(campaignIndex, renderData) {
          const { dropdownState: ds } = renderData;
          const expandedClass = ds.expanded ? " gfgFGv2-expanded" : "";
          const chevronClass = ds.expanded ? " gfgFGv2-chevron-open" : "";
          const shakeClass = (ds.unlockedCount > 0 && !ds.expanded) ? " gfgFGv2-icon-shake" : "";

          const iconHtml = ds.icon
            ? `<img class="gfgFGv2-dropdown-icon" src="${ds.icon}" alt="" loading="lazy"/>`
            : "";

          const badgeHtml = ds.unlockedCount > 0
            ? `<span class="gfgFGv2-badge">${ds.unlockedCount}</span>`
            : "";

          const rowsHtml = renderData.gifts
            .map(gift => this._renderGiftRow(gift, campaignIndex, renderData.config))
            .join("");

          return `<div class="gfgFGv2-multi-widget">\
<div class="gfgFGv2-dropdown-bar${shakeClass}" data-action="toggle-dropdown" data-campaign-index="${campaignIndex}">\
${iconHtml}\
<span class="gfgFGv2-dropdown-title">${ds.title}</span>\
${badgeHtml}\
<span class="gfgFGv2-chevron-wrap${chevronClass}">${CHEVRON_SVG}</span>\
</div>\
<div class="gfgFGv2-dropdown-content${expandedClass}">\
<div class="gfgFGv2-gifts-list">${rowsHtml}</div>\
</div>\
</div>`;
        },

        // ── Gift Row (reusable across all states) ──

        /**
         * Render a single gift row with product image, title, price, variant selector,
         * status text, and action area (add/remove button, progress lock, or OOS label).
         * Reusable across single-gift and multi-gift layouts.
         * @param {Object} gift - Gift data from renderData.gifts[]
         * @param {number} campaignIndex - Index of the campaign
         * @param {Object} config - Widget configuration (colors, fonts, texts, widgetSettings)
         * @returns {string} HTML string for the gift row
         */
        _renderGiftRow(gift, campaignIndex, config) {
          const { product } = gift;
          const imgSrc = typeof product.images?.[0] === "string" ? product.images?.[0] : product.images?.[0]?.transformedSrc || product.images?.[0]?.originalSrc || "";
          const imgSize = config.widgetSettings?.productImageSize || "70";

          // Quantity badge on image — shows remaining units to claim; disappears when fully claimed
          const qtyBadge = (gift.quantity > 1 && gift.remainingQuantity > 0)
            ? `<span class="gfgFGv2-qty-badge">&times;${gift.remainingQuantity}</span>`
            : "";

          // Price display: strikethrough original + FREE or discounted price
          const priceHtml = this._renderPriceHtml(gift, product);

          // Variant selector:
          // - Auto-add: no selector (uses first available variant automatically)
          // - ALL variants OOS (rowState === OUT_OF_STOCK): no selector
          // - Otherwise: show selector with OOS variants marked "(Out of Stock)" and disabled
          let variantHtml = "";
          if (!gift.isAutoAdd && !product.hasOnlyDefaultVariant && product.variants?.length > 0 && gift.rowState !== ROW_STATES.OUT_OF_STOCK) {
            const options = product.variants.map((v, vi) => {
              const vid = resolveVariantId(v);
              const selected = vid === `${gift.selectedVariantId}` ? " selected" : "";
              const isVarAvailable = gift.variantAvailabilityMap?.[vid] !== false;
              const oosLabel = isVarAvailable ? "" : " (Out of Stock)";
              const disabled = isVarAvailable ? "" : " disabled";
              return `<option value="${vid}"${selected}${disabled}>${v.variantTitle || v.title || v.option1 || `Variant ${vi + 1}`}${oosLabel}</option>`;
            }).join("");
            variantHtml = `<select class="gfgFGv2-variant-select" data-action="variant-change" data-campaign-index="${campaignIndex}" data-rule-index="${gift.ruleIndex}" data-gift-index="${gift.giftIndex}" data-variant-key="${gift.variantKey}">${options}</select>`;
          }

          // Status text
          const statusClass = gift.ruleResult.met ? "gfgFGv2-status-met" : "gfgFGv2-status-locked";
          const statusHtml = gift.statusText
            ? `<div class="gfgFGv2-status ${statusClass}">${gift.statusText}</div>`
            : "";

          // Action area (right side)
          const actionHtml = this._renderActionArea(gift, campaignIndex, config);

          const imgContent = imgSrc
            ? `<img class="gfgFGv2-img" src="${imgSrc}" alt="${product.title || ""}" loading="lazy" width="${imgSize}" height="${imgSize}"/>`
            : `<div class="gfgFGv2-img-placeholder"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>`;

          return `<div class="gfgFGv2-gift-row gfgFGv2-row-${gift.rowState}">\
<div class="gfgFGv2-img-wrap" style="width:${imgSize}px;height:${imgSize}px">\
${imgContent}\
${qtyBadge}\
</div>\
<div class="gfgFGv2-info">\
<div class="gfgFGv2-title">${gift.titleText || product.title || ""}</div>\
<div class="gfgFGv2-price">${priceHtml}</div>\
${variantHtml}\
${statusHtml}\
</div>\
<div class="gfgFGv2-action">${actionHtml}</div>\
</div>`;
        },

        /**
         * Render the price display HTML for a gift product. Shows strikethrough original price
         * and either "FREE" or the discounted price based on the discount configuration.
         * Handles currency conversion and supports both percentage and fixed_amount discount types.
         * @param {Object} gift - Gift data with discountInfo and selectedVariantId
         * @param {Object} product - Product data with variants and price
         * @returns {string} HTML string with strikethrough and discounted/free price
         */
        _renderPriceHtml(gift, product) {
          const currSym = gfg.utility.getCurrencySymbol ? gfg.utility.getCurrencySymbol() : "$";
          const formatPrice = (val) => parseFloat(val || 0).toFixed(2);
          const currencyRate = window?.Shopify?.currency?.rate ? parseFloat(window?.Shopify?.currency?.rate) : 1;

          // Resolve original price: use selected variant price, first variant price, or product-level price
          let originalPrice = 0;
          if (gift.selectedVariantId && product.variants?.length > 0) {
            const selectedVariant = product.variants.find(v => resolveVariantId(v) === `${gift.selectedVariantId}`);
            if (selectedVariant?.price) originalPrice = parseFloat(selectedVariant.price);
          }
          if (!originalPrice && product.variants?.length > 0 && product.variants[0].price) {
            originalPrice = parseFloat(product.variants[0].price);
          }
          if (!originalPrice && product.price) {
            originalPrice = parseFloat(product.price);
          }

          // Convert to customer's active currency
          originalPrice = originalPrice * currencyRate;

          // Calculate discounted price based on discountInfo
          const { type, value } = gift.discountInfo || {};
          const discountVal = parseFloat(value) || 100;
          let discountedPrice = 0;

          if (type === "percentage") {
            discountedPrice = originalPrice * (1 - discountVal / 100);
          } else if (type === "fixed_amount") {
            const convertedDiscountVal = discountVal * currencyRate;
            discountedPrice = Math.max(0, originalPrice - convertedDiscountVal);
          }

          const isFree = discountedPrice <= 0;
          const strikeHtml = originalPrice > 0
            ? `<span class="gfgFGv2-price-strike">${currSym}${formatPrice(originalPrice)}</span> `
            : "";

          const discountHtml = isFree
            ? `<span class="gfgFGv2-price-free">FREE</span>`
            : `<span class="gfgFGv2-price-discounted">${currSym}${formatPrice(discountedPrice)}</span>`;

          return `${strikeHtml}${discountHtml}`;
        },

        /**
         * Render the action area (right side of gift row) based on the gift's row state.
         * Returns different UI for each state: progress lock ring (locked), ADD button (unlocked),
         * REMOVE button (added), disabled button (disabled), spinner (loading),
         * OOS label (out_of_stock), or checkmark SVG (auto-add modes).
         * @param {Object} gift - Gift data with rowState, isAutoAdd, isSelectedVariantOOS
         * @param {number} campaignIndex - Index of the campaign
         * @param {Object} config - Widget configuration with texts for button labels
         * @returns {string} HTML string for the action area
         */
        _renderActionArea(gift, campaignIndex, config) {
          const texts = config.texts || {};
          const dataAttrs = `data-campaign-index="${campaignIndex}" data-rule-index="${gift.ruleIndex}" data-gift-index="${gift.giftIndex}"`;

          // Button style variants from widgetSettings
          const wsBtn = config.widgetSettings || {};
          const btnStyle = wsBtn.buttonStyle || "solid";
          const btnConfig = wsBtn.buttonConfig || {};
          const addBtnExtra = (btnStyle === "outline" ? " gfgFGv2-btn-outline" : "") + (btnConfig.claimButtonKind === "secondary" ? " gfgFGv2-btn-secondary" : "");

          switch (gift.rowState) {
            case ROW_STATES.LOCKED:
              return this._renderProgressLock(gift.progress, config);

            case ROW_STATES.UNLOCKED:
              if (gift.isAutoAdd) {
                // Auto-add: show checkmark (gift will be added automatically)
                return CHECK_ICON_SVG;
              }
              // If selected variant is OOS but other variants are available, show OOS label
              if (gift.isSelectedVariantOOS) {
                return `<span class="gfgFGv2-oos-label">${texts.outOfStockSubtitle || "Out of Stock"}</span>`;
              }
              return `<button class="gfgFGv2-btn gfgFGv2-btn-add${addBtnExtra}" data-action="add-gift" ${dataAttrs}>${texts.claimText || "ADD"}</button>`;

            case ROW_STATES.ADDED:
              if (gift.isAutoAdd) {
                return CHECK_ICON_SVG;
              }
              return `<button class="gfgFGv2-btn gfgFGv2-btn-remove${addBtnExtra}" data-action="remove-gift" ${dataAttrs}>${texts.unClaimText || "REMOVE"}</button>`;

            case ROW_STATES.DISABLED:
              return `<button class="gfgFGv2-btn gfgFGv2-btn-disabled${addBtnExtra}" disabled>${texts.claimText || "ADD"}</button>`;

            case ROW_STATES.LOADING:
              return `<button class="gfgFGv2-btn gfgFGv2-btn-loading" disabled>${texts.addingText || "Adding..."}</button>`;

            case ROW_STATES.OUT_OF_STOCK:
              return `<span class="gfgFGv2-oos-label">${texts.outOfStockSubtitle || "Out of Stock"}</span>`;

            default:
              return "";
          }
        },

        /**
         * Render an SVG progress ring with a lock icon inside. The ring fills clockwise
         * as the customer approaches the rule's threshold. Uses CSS stroke-dashoffset
         * for smooth animated transitions.
         * @param {number} progress - Progress value between 0 and 1
         * @param {Object} config - Widget configuration (for theme colors)
         * @returns {string} HTML string for the progress ring SVG
         */
        _renderProgressLock(progress, config) {
          const offset = CIRCUMFERENCE * (1 - clamp01(progress));
          return `<svg class="gfgFGv2-progress-ring" viewBox="0 0 44 44" width="44" height="44" color="var(--fg-progress)">\
<circle cx="22" cy="22" r="18" fill="none" stroke="var(--fg-empty-progress)" stroke-width="3"/>\
<circle class="gfgFGv2-progress-circle" cx="22" cy="22" r="18" fill="none" stroke="var(--fg-progress)" stroke-width="3" stroke-dasharray="${CIRCUMFERENCE.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}" stroke-linecap="round" transform="rotate(-90 22 22)"/>\
${LOCK_ICON_PATH}\
</svg>`;
        },

        /**
         * Render the tag/ribbon element that appears on single-gift cards (e.g., "FREE GIFT").
         * Uses the specialTag or pillText from configuration.
         * @param {Object} config - Widget configuration with specialTag and pillText
         * @returns {string} HTML string for the tag ribbon, or empty string if no tag text
         */
        _renderTagRibbon(config) {
          const tagText = config.specialTag;
          if (!tagText) return "";
          return `<div class="gfgFGv2-tag-wrap"><span class="gfgFGv2-tag">${tagText}</span></div>`;
        },

        /**
         * Lighten (positive %) or darken (negative %) a hex color.
         * e.g. _shadeColor("#c62828", 30) → lighter, _shadeColor("#c62828", -40) → darker
         */
        _shadeColor(hex, percent) {
          let r = parseInt(hex.slice(1, 3), 16);
          let g = parseInt(hex.slice(3, 5), 16);
          let b = parseInt(hex.slice(5, 7), 16);
          if (percent > 0) {
            r = Math.min(255, Math.round(r + (255 - r) * (percent / 100)));
            g = Math.min(255, Math.round(g + (255 - g) * (percent / 100)));
            b = Math.min(255, Math.round(b + (255 - b) * (percent / 100)));
          } else {
            const factor = 1 + percent / 100;
            r = Math.max(0, Math.round(r * factor));
            g = Math.max(0, Math.round(g * factor));
            b = Math.max(0, Math.round(b * factor));
          }
          return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
        },

        /**
         * Fire a paper confetti burst from a target element using Lottie animation.
         * Lazy-loads dotlottie-wc on first use, self-cleaning after playback.
         */
        _fireConfetti(targetEl) {
          // Lazy-load dotlottie-wc script on first use
          if (!document.querySelector('script[data-gfgfgv2-confetti]')) {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.3/dist/dotlottie-wc.js";
            script.type = "module";
            script.setAttribute("data-gfgfgv2-confetti", "1");
            document.head.appendChild(script);
          }

          const rect = targetEl.getBoundingClientRect();
          const size = 180;
          const el = document.createElement("dotlottie-wc");
          el.setAttribute("src", "https://lottie.host/0602a8f9-2a4e-4c59-af9f-4f5a1cbe51d6/vbE2QQSdpN.lottie");
          el.setAttribute("autoplay", "");
          el.className = "gfgFGv2-confetti-lottie";
          el.style.cssText = `position:fixed;left:${rect.left + rect.width / 2 - size / 2}px;top:${rect.top + rect.height / 2 - size / 2}px;width:${size}px;height:${size}px;pointer-events:none;z-index:9999;`;
          document.body.appendChild(el);

          // Remove after animation completes (Lottie plays once, ~3s safety timeout)
          const cleanup = () => { if (el.parentNode) el.remove(); };
          el.addEventListener("complete", cleanup, { once: true });
          setTimeout(cleanup, 3500);
        },

        // ── Event Handlers (delegation) ──

        /**
         * Delegated click event handler for all widget interactions.
         * Handles three actions via data-action attributes:
         * - "toggle-dropdown": expand/collapse the multi-gift dropdown for the clicked context
         * - "add-gift": show loading spinner, disable other buttons, and trigger addGiftManually
         * - "remove-gift": show loading spinner, disable buttons, and trigger removeGiftManually
         * @param {Event} e - Click event
         */
        _handleClick(e) {
          const target = e.target.closest("[data-action]");
          if (!target) return;
          const { action } = target.dataset;
          const ci = parseInt(target.dataset.campaignIndex);
          const ri = parseInt(target.dataset.ruleIndex);
          const gi = parseInt(target.dataset.giftIndex);
          freeGiftV2._trace("ui.v2._handleClick", { action, ci, ri, gi });

          // Get the context from the container this event was fired on
          const clickedContext = e.currentTarget?.dataset?.fgv2Context;

          switch (action) {
            case "toggle-dropdown": {
              // Toggle expanded state for this specific context only
              const toggleKey = `${ci}_${clickedContext}`;
              const campaign = freeGiftV2.state.campaigns[ci];
              const defaultExp = campaign?.widgetSettings?.isExpandedByDefault || false;
              freeGiftV2.state.uiExpanded[toggleKey] = !(freeGiftV2.state.uiExpanded[toggleKey] ?? defaultExp);

              // Re-render only this context using cached cart data — no API call needed
              // just to toggle the dropdown. The cart data is already up-to-date from the
              // last processing cycle, so fetching it again would add an unnecessary delay.
              if (campaign && freeGiftV2.state.campaignResults[ci]) {
                const cartData = gfg.state.cartData;
                const rd = freeGiftV2.buildRenderData(campaign, ci, freeGiftV2.state.campaignResults[ci], cartData);
                requestAnimationFrame(() => {
                  freeGiftV2.ui.v2._renderToContext(ci, clickedContext, rd);
                });
              }
              break;
            }

            case "add-gift": {
              e.preventDefault();
              // Immediately show loading state on the clicked button
              target.disabled = true;
              target.className = "gfgFGv2-btn gfgFGv2-btn-loading";
              target.innerHTML = `<span class="gfgFGv2-btn-spinner"></span>`;
              // Disable ALL other add buttons for this campaign across all contexts
              // to prevent concurrent claims that could exceed the gift limit.
              for (const [key, container] of Object.entries(freeGiftV2.state.containerRefs)) {
                if (!key.startsWith(`${ci}_`)) continue;
                for (const btn of container.querySelectorAll(".gfgFGv2-btn-add")) {
                  btn.disabled = true;
                  btn.classList.add("gfgFGv2-btn-disabled");
                }
              }
              // Clear lastRenderData for ALL contexts of this campaign so the
              // next render does a full innerHTML rebuild (not a partial update
              // that would skip the action-button area and leave the spinner).
              for (const key of Object.keys(freeGiftV2.state.lastRenderData)) {
                if (key.startsWith(`${ci}_`)) delete freeGiftV2.state.lastRenderData[key];
              }
              // Mark campaign as animating BEFORE any async cart operations.
              // This prevents rerender()'s fallback rebuild from overwriting
              // the loading/checkmark buttons during the add flow.
              freeGiftV2.state.animatingCampaigns.add(ci);
              const campaignAdd = freeGiftV2.state.campaigns[ci];
              const selectedVid = freeGiftV2.state.selectedVariants[`${ci}_${ri}_${gi}`] || null;
              freeGiftV2.cart.addGiftManually(campaignAdd, ci, ri, gi, selectedVid);
              break;
            }

            case "remove-gift": {
              e.preventDefault();
              // Immediately show loading state on the clicked button
              target.disabled = true;
              target.className = "gfgFGv2-btn gfgFGv2-btn-loading";
              target.innerHTML = `<span class="gfgFGv2-btn-spinner"></span>`;
              // Disable ALL other action buttons for this campaign to prevent
              // concurrent operations.
              for (const [key, container] of Object.entries(freeGiftV2.state.containerRefs)) {
                if (!key.startsWith(`${ci}_`)) continue;
                for (const btn of container.querySelectorAll(".gfgFGv2-btn-add, .gfgFGv2-btn-remove")) {
                  btn.disabled = true;
                }
              }
              // Clear lastRenderData for ALL contexts of this campaign so the
              // next render does a full innerHTML rebuild (not a partial update
              // that would skip the action-button area and leave the spinner).
              for (const key of Object.keys(freeGiftV2.state.lastRenderData)) {
                if (key.startsWith(`${ci}_`)) delete freeGiftV2.state.lastRenderData[key];
              }
              const campaignRm = freeGiftV2.state.campaigns[ci];
              freeGiftV2.cart.removeGiftManually(campaignRm, ci, ri, gi);
              break;
            }
          }
        },

        /**
         * Delegated change event handler for variant selector dropdowns.
         * Updates the selected variant in state and triggers a re-render so the
         * action area reflects the new variant's availability (ADD vs OOS label).
         * @param {Event} e - Change event from a variant select element
         */
        _handleChange(e) {
          const target = e.target.closest("[data-action='variant-change']");
          if (!target) return;
          const { variantKey } = target.dataset;
          const ci = parseInt(target.dataset.campaignIndex);

          freeGiftV2._trace("ui.v2._handleChange", { variantKey, ci, newValue: target.value });
          freeGiftV2.state.selectedVariants[variantKey] = target.value;

          // Trigger re-render so action area updates (ADD vs OOS label)
          const campaign = freeGiftV2.state.campaigns[ci];
          if (campaign && freeGiftV2.state.campaignResults[ci]) {
            gfg.utility.getCartV2().then(cartData => {
              const rd = freeGiftV2.buildRenderData(campaign, ci, freeGiftV2.state.campaignResults[ci], cartData);
              requestAnimationFrame(() => {
                const contexts = freeGiftV2.ui.v2._getEligibleContexts(ci);
                for (const ctx of contexts) {
                  freeGiftV2.ui.v2._renderToContext(ci, ctx, rd);
                }
              });
            });
          }
        },
      },

      // ── V1 COMPAT UI (Future — placeholder) ────────────────────────────

      v1Compat: {
        /**
         * Placeholder renderer for campaigns migrated from V1.
         * Currently falls back to the native V2 renderer. Will be replaced with
         * a V1-compatible UI when migration support is implemented.
         * @param {number} campaignIndex - Index of the campaign
         * @param {Object} renderData - Render data from buildRenderData()
         */
        render(campaignIndex, renderData) {
          // TODO: Implement v1-compatible UI using the same renderData contract
          // For now, fall back to v2 rendering
          freeGiftV2.ui.v2.render(campaignIndex, renderData);
        },
      },
    },
  };

  // ─── REGISTER MODULE ────────────────────────────────────────────────────────

      gfg.gfgFreeGiftV2 = freeGiftV2;

      // Register this module as loaded
      if (window.gfgFileStatus) {
        window.gfgFileStatus.freeGiftV2 = "LOADED";
      }
      document.dispatchEvent(new CustomEvent('gfg:module:loaded', { detail: { moduleName: 'freeGiftV2' } }));
      gfg.utility.debugConsole("freeGiftV2: Module registered successfully");
    } catch (error) {
      console.error("freeGiftV2: Error initializing module", error);
    }
  }

  // ============ DEPENDENCY CHECKING ============

  /**
   * Check if all required dependency modules have been loaded.
   * Iterates through the dependency list and checks gfgFileStatus for each.
   * @param {Array} dependencies - Array of dependency objects with { module, event }
   * @param {Object} fileStatus - window.gfgFileStatus tracking module load states
   * @returns {boolean} True if all dependencies are loaded (none have "NEED_TO_LOAD" status)
   */
  function checkAllDependenciesLoaded(dependencies, fileStatus) {
    for (var i = 0; i < dependencies.length; i++) {
      var dep = dependencies[i];
      if (fileStatus[dep.module] === "NEED_TO_LOAD") {
        return false;
      }
    }
    return true;
  }

  /**
   * Attempt to initialize the module if all dependencies are ready.
   * Called both on dependency load events and during initial setup.
   * @param {Array} dependencies - Array of dependency objects
   * @param {Object} fileStatus - window.gfgFileStatus tracking module load states
   */
  function checkAndInitialize(dependencies, fileStatus) {
    if (initialized) return;
    if (checkAllDependenciesLoaded(dependencies, fileStatus)) {
      initFreeGiftV2Module();
    }
  }

  /**
   * Set up dependency listeners and initialize when ready.
   * If gfgFileStatus is available, attaches event listeners for each unloaded dependency
   * and checks immediately in case dependencies loaded before this script ran.
   * Falls back to polling for the gfg object if gfgFileStatus is not available.
   */
  function waitForDependenciesAndInitialize() {
    var fileStatus = window.gfgFileStatus;
    if (!fileStatus) {
      // Fallback: if gfgFileStatus not available, wait for gfg object directly
      if (window.gfg) {
        initFreeGiftV2Module();
      } else {
        setTimeout(waitForDependenciesAndInitialize, 50);
      }
      return;
    }

    // Attach listeners for dependencies that need to load
    DEPENDENCIES.forEach(function (dep) {
      if (fileStatus[dep.module] === "NEED_TO_LOAD") {
        document.addEventListener(dep.event, function () {
          checkAndInitialize(DEPENDENCIES, fileStatus);
        });
      }
    });

    // Check immediately in case dependencies already loaded (race condition fix)
    checkAndInitialize(DEPENDENCIES, fileStatus);
  }

  // ============ ENTRY POINT ============
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForDependenciesAndInitialize);
  } else {
    waitForDependenciesAndInitialize();
  }

})();
