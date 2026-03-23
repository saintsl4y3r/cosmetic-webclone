/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// ./node_modules/@yotpo-widgets/analytics/types.js
/* eslint-disable @typescript-eslint/no-explicit-any */
var CookieTypes;
(function (CookieTypes) {
    CookieTypes["FIRST_PARTY"] = "firstParty";
    CookieTypes["THIRD_PARTY"] = "thirdParty";
})(CookieTypes || (CookieTypes = {}));
//# sourceMappingURL=types.js.map
;// ./node_modules/@yotpo-widgets/analytics/performance-marker.js
const WidgetPerformanceMarker = Object.freeze({
    markWidgetLoaded: (category) => {
        if (typeof window !== 'undefined' &&
            window.performance &&
            window.performance.mark) {
            window.performance.mark(`yotpo:${category}:loaded`);
        }
    },
    markWidgetStart: (category, uuid) => {
        if (typeof window !== 'undefined' &&
            window.performance &&
            window.performance.mark) {
            // typescript provides incorrect interface for this method https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark#syntax
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.performance.mark(`yotpo:${category}:start`, { detail: uuid });
        }
    },
    markWidgetEnd: (category, uuid) => {
        if (typeof window !== 'undefined' &&
            window.performance &&
            window.performance.mark) {
            // typescript provides incorrect interface for this method https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark#syntax
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.performance.mark(`yotpo:${category}:end`, { detail: uuid });
        }
    },
});
//# sourceMappingURL=performance-marker.js.map
;// ./node_modules/@yotpo-widgets/analytics/analytics-loader.js
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any */
const trackRetries = 20;
const trackRetriesIntervalMs = 100;
const isYotpoAnalyticsExists = () => {
    var _a, _b, _c;
    if (
    //@ts-ignore
    typeof window.Yotpo === 'undefined' ||
        //@ts-ignore
        !((_a = window === null || window === void 0 ? void 0 : window.yotpoWidgetsContainer) === null || _a === void 0 ? void 0 : _a.Analytics) ||
        //@ts-ignore
        ((_b = window === null || window === void 0 ? void 0 : window.yotpoWidgetsContainer) === null || _b === void 0 ? void 0 : _b.TrackingEnabled) === false ||
        //@ts-ignore
        !((_c = window === null || window === void 0 ? void 0 : window.yotpoWidgetsContainer) === null || _c === void 0 ? void 0 : _c.AnalyticsTools)) {
        return false;
    }
    return true;
};
const loaders = {};
const buildSingletonId = (params) => {
    const { guid, category } = params;
    return `${guid}_${category}`;
};
const WidgetAnalyticsLoader = (params) => {
    const key = buildSingletonId(params);
    if (!loaders[key]) {
        loaders[key] = new AnalyticsLoaderClass(params);
    }
    return loaders[key];
};
class AnalyticsLoaderClass {
    constructor(params) {
        var _a;
        this.params = params;
        //@ts-ignore
        this.isTrackingEnabled = ((_a = window === null || window === void 0 ? void 0 : window.yotpoWidgetsContainer) === null || _a === void 0 ? void 0 : _a.TrackingEnabled) || false;
        this.getYotpoAnalytics(params);
    }
    /**
     * @deprecated Please look for a method already implementing sending this exact action
     * If you still need to send a custom action, please keep going with it, but notify us in #contact-fe-infra
     * Our goal is to unify events between all widgets and product lines
     */
    async trackCustomWidgetAction(action, label, property, ctx) {
        return this.trackWidgetEvent(action, label, property, ctx);
    }
    async trackClickedOn(label, property, ctx) {
        return this.trackWidgetEvent('clicked_on', label, property, ctx);
    }
    async trackError(label, property, ctx) {
        return this.trackWidgetEvent('error', label, property, ctx);
    }
    async trackFilterResults(label, property, ctx) {
        return this.trackWidgetEvent('filter_results', label, property, ctx);
    }
    async trackHidden(label, property, ctx) {
        return this.trackWidgetEvent('hidden', label, property, ctx);
    }
    async trackHook(label, property, ctx) {
        return this.trackWidgetEvent('hook', label, property, ctx);
    }
    async trackHovered(label, property, ctx) {
        return this.trackWidgetEvent('hovered', label, property, ctx);
    }
    async trackLoaded(label, property, ctx) {
        return this.trackWidgetEvent('loaded', label, property, ctx);
    }
    async trackShown(label, property, ctx) {
        return this.trackWidgetEvent('shown', label, property, ctx);
    }
    async trackWidgetLoaded(label, property, ctx) {
        const analyticsBrainInstance = await this.analyticsLoadingPromise;
        if (!analyticsBrainInstance) {
            return Promise.resolve(false);
        }
        return analyticsBrainInstance.trackWidgetLoaded(label, property, ctx);
    }
    async getDomainUserId() {
        return this.analyticsLoadingPromise.then((analyticsBrainInstance) => {
            if (!analyticsBrainInstance) {
                return null;
            }
            return analyticsBrainInstance === null || analyticsBrainInstance === void 0 ? void 0 : analyticsBrainInstance.getDomainUserId();
        });
    }
    async getHashFunction() {
        return this.analyticsLoadingPromise.then((analyticsBrainInstance) => {
            ;
            if (!analyticsBrainInstance) {
                return () => '';
            }
            return analyticsBrainInstance === null || analyticsBrainInstance === void 0 ? void 0 : analyticsBrainInstance.getHashFunction();
        });
    }
    createYotpoAnalyticsWithRetries(retryCount, resolve, reject) {
        var _a;
        if (retryCount <= 0) {
            resolve(false);
            return;
        }
        if (!isYotpoAnalyticsExists()) {
            setTimeout(() => {
                retryCount -= 1;
                this.createYotpoAnalyticsWithRetries(retryCount, resolve, reject);
            }, trackRetriesIntervalMs);
            return;
        }
        //@ts-ignore
        this.isTrackingEnabled = (_a = window === null || window === void 0 ? void 0 : window.yotpoWidgetsContainer) === null || _a === void 0 ? void 0 : _a.TrackingEnabled;
        resolve(true);
    }
    getYotpoAnalytics(params) {
        var _a;
        //@ts-ignore
        if (!this.analyticsLoadingPromise || this.isTrackingEnabled !== ((_a = window === null || window === void 0 ? void 0 : window.yotpoWidgetsContainer) === null || _a === void 0 ? void 0 : _a.TrackingEnabled)) {
            this.analyticsLoadingPromise = new Promise((resolve, reject) => {
                this.createYotpoAnalyticsWithRetries(trackRetries, resolve, reject);
            }).then((isAnalyticsFound) => {
                if (!isAnalyticsFound) {
                    return null;
                }
                //@ts-ignore
                return window.yotpoWidgetsContainer.AnalyticsTools.WidgetsAnalyticsFactory(params);
            });
        }
        return this.analyticsLoadingPromise;
    }
    async trackWidgetEvent(action, label, property, ctx) {
        const analyticsBrainInstance = await this.getYotpoAnalytics(this.params);
        if (!analyticsBrainInstance) {
            return Promise.resolve(false);
        }
        return analyticsBrainInstance === null || analyticsBrainInstance === void 0 ? void 0 : analyticsBrainInstance.trackWidgetEvent(action, label, property, ctx);
    }
}
//# sourceMappingURL=analytics-loader.js.map
;// ./node_modules/@yotpo-widgets/analytics/index.js



//# sourceMappingURL=index.js.map
;// ./build/analytics/loyalty-spotlight-analytics.src.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(function () {
  'use strict';

  // Strip emoji/symbols from CTA text so analytics payloads don't break (e.g. encoding/backend rejection).
  function removeEmojisFromCtaText(str) {
    if (str == null || typeof str !== 'string') return str;
    try {
      return str.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').replace(/\s+/g, ' ').trim();
    } catch (e) {
      return str.replace(/\s+/g, ' ').trim();
    }
  }

  var SpotlightAnalytics = /*#__PURE__*/function () {
    function SpotlightAnalytics() {
      var _this = this;
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, SpotlightAnalytics);
      this.storeId = config.storeId || config.merchantGuid || this.extractMerchantGuidFromPage();
      this.widgetUuid = this.getOrCreateWidgetUuid();
      if (window.__spotlightAb && window.__spotlightAb.getAbVariant && window.spotlightAbConfig && window.spotlightAbConfig.enabled) {
        window.__spotlightAbVariant = window.__spotlightAb.getAbVariant(this.getOrCreateWidgetUuid(), {thresholdA: (window.spotlightAbConfig && window.spotlightAbConfig.thresholdA) ||60, defaultVariant: (window.spotlightAbConfig && window.spotlightAbConfig.defaultVariant) || 'B' });
      }
      this.sessionId = this.getOrCreateSessionId();
      this.analyticsInstance = null;
      this.isInitialized = false;
      this.bundleLoaded = true;
      this.exposureTracked = new Set();
      this.exposureCount = 0;
      this.drawerOpenCount = 0;
      this.pageViewTracked = false;
      this.lastCtaExposure = null;
      this.init();
      setTimeout(function () {
        return _this.trackPageView();
      }, 100);
      var resetPageView = function resetPageView() {
        _this.pageViewTracked = false;
        setTimeout(function () {
          return _this.trackPageView();
        }, 100);
      };
      window.addEventListener('popstate', resetPageView);
      var originalPushState = history.pushState;
      var originalReplaceState = history.replaceState;
      history.pushState = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        originalPushState.apply(history, args);
        resetPageView();
      };
      history.replaceState = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        originalReplaceState.apply(history, args);
        resetPageView();
      };
    }
    return _createClass(SpotlightAnalytics, [{
      key: "extractMerchantGuidFromPage",
      value: function extractMerchantGuidFromPage() {
        var _window$yotpoWidgetsC;
        var loaderScript = document.querySelector('script[src*="cdn-widgetsrepository.yotpo.com/v1/loader/"]');
        if (loaderScript) {
          var match = loaderScript.src.match(/\/loader\/([^\/\?]+)/);
          if (match !== null && match !== void 0 && match[1]) return match[1];
        }
        var guids = (_window$yotpoWidgetsC = window.yotpoWidgetsContainer) === null || _window$yotpoWidgetsC === void 0 ? void 0 : _window$yotpoWidgetsC.guids;
        if (guids) {
          var firstGuid = Object.keys(guids)[0];
          if (firstGuid) return firstGuid;
        }
        return null;
      }
    }, {
      key: "init",
      value: function init() {
        if (this.isInitialized) {
          return;
        }
        if (!this.storeId) {
          console.warn('[SpotlightAnalytics] Cannot initialize: storeId is missing');
          return;
        }
        try {
          var _this$analyticsInstan;
          this.analyticsInstance = WidgetAnalyticsLoader({
            guid: this.storeId,
            category: 'loyalty-spotlight',
            defaultContext: {},
            preventEvents: false,
            widgetUuid: this.widgetUuid
          });
          if ((_this$analyticsInstan = this.analyticsInstance) !== null && _this$analyticsInstan !== void 0 && _this$analyticsInstan.trackShown) {
            this.isInitialized = true;
          } else {
            console.warn('[SpotlightAnalytics] Analytics instance created but missing trackShown method');
          }
        } catch (error) {
          console.error('[SpotlightAnalytics] Error initializing WidgetAnalyticsLoader:', error);
        }
      }
    }, {
      key: "getOrCreateWidgetUuid",
      value: function getOrCreateWidgetUuid() {
        var storageKey = 'yotpo_tracker_subscriber_identifier';
        var cookieValue = this.getCookie(storageKey);
        if (cookieValue) return cookieValue;
        var uuid = this.generateUUID();
        var expires = new Date();
        expires.setFullYear(expires.getFullYear() + 3);
        this.setCookie(storageKey, uuid, expires);
        return uuid;
      }
    }, {
      key: "getOrCreateSessionId",
      value: function getOrCreateSessionId() {
        var storageKey = 'yotpo_tracker_session_id';
        try {
          var sessionId = sessionStorage.getItem(storageKey);
          if (sessionId) return sessionId;
          sessionId = this.generateUUID();
          sessionStorage.setItem(storageKey, sessionId);
          return sessionId;
        } catch (error) {
          console.warn('[SpotlightAnalytics] sessionStorage not available, using cookie fallback');
          return this.getOrCreateWidgetUuid();
        }
      }
    }, {
      key: "generateUUID",
      value: function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0;
          var v = c === 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      }
    }, {
      key: "getCookie",
      value: function getCookie(name) {
        var nameEQ = name + '=';
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
          }
          if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
          }
        }
        return null;
      }
    }, {
      key: "setCookie",
      value: function setCookie(name, value, expires) {
        var cookieString = name + '=' + value;
        if (expires) {
          cookieString += '; expires=' + expires.toUTCString();
        }
        cookieString += '; path=/; SameSite=Strict';
        document.cookie = cookieString;
      }
    }, {
      key: "detectDeviceType",
      value: function detectDeviceType() {
        return window.innerWidth < 768 ? 'mobile' : 'desktop';
      }
    }, {
      key: "isReady",
      value: function isReady() {
        return this.isInitialized && this.analyticsInstance !== null;
      }
    }, {
      key: "getCustomerData",
      value: function getCustomerData() {
        return {
          customer_id: window.customerId || null,
          merchant_id: window.merchantId || null,
          merchant_guid: this.storeId || null
        };
      }
    }, {
      key: "buildEventContext",
      value: function buildEventContext() {
        var _ref, _context$points_balan, _ref2, _context$tier_name, _ref3, _context$redemption_e;
        var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var pageUrl = window.location.href.split('?')[0].split('#')[0];
        var customerData = this.getCustomerData();
        var deviceType = this.detectDeviceType();
        var ctaContext = this.getCtaContext() || {};
        var drawerContext = this.getDrawerContext() || {};
        var widgetComponent = context.widget_component || 'unknown';
        var isCtaExposed = widgetComponent === 'cta_exposed';
        // Extract page_type from Shopify __st object
        var pageType = window.__st && window.__st.p ? window.__st.p : null;
        var isLoggedIn = context.customer_logged_in !== undefined ? context.customer_logged_in : true;
        var eventContext = _objectSpread({
          widget_component: widgetComponent,
          page_url: pageUrl,
          page_type: pageType,
          device_type: deviceType,
          customer_logged_in: isLoggedIn,
          customer_id: customerData.customer_id,
          merchant_id: customerData.merchant_id,
          merchant_guid: customerData.merchant_guid,
          subscriber_identifier: this.widgetUuid,
          session_id: this.sessionId,
          timestamp: new Date().toISOString(),
          ab_variant: typeof window !== 'undefined' && window.__spotlightAbVariant || 'A'
        }, context);
        // Ensure ab_variant is always present (context spread may have overwritten with undefined)
        if (eventContext.ab_variant == null || eventContext.ab_variant === '') {
          eventContext.ab_variant = typeof window !== 'undefined' && window.__spotlightAbVariant || 'A';
        }

        // Only include customer-specific fields if user is logged in
        if (isLoggedIn) {
          eventContext.points_balance = (_ref = (_context$points_balan = context.points_balance) !== null && _context$points_balan !== void 0 ? _context$points_balan : drawerContext.points_balance) !== null && _ref !== void 0 ? _ref : null;
          eventContext.tier_name = (_ref2 = (_context$tier_name = context.tier_name) !== null && _context$tier_name !== void 0 ? _context$tier_name : drawerContext.tier_name) !== null && _ref2 !== void 0 ? _ref2 : null;
          eventContext.redemption_eligible = (_ref3 = (_context$redemption_e = context.redemption_eligible) !== null && _context$redemption_e !== void 0 ? _context$redemption_e : drawerContext.redemption_eligible) !== null && _ref3 !== void 0 ? _ref3 : null;
        } else {
          // Remove customer-specific fields if user is logged out (they might have been spread from context)
          delete eventContext.points_balance;
          delete eventContext.tier_name;
          delete eventContext.redemption_eligible;
        }

        // Only include cta_text for cta_exposed events (strip emoji to avoid payload/encoding issues)
        if (isCtaExposed) {
          var _ref4, _context$cta_text, _rawCta;
          _rawCta = (_ref4 = (_context$cta_text = context.cta_text) !== null && _context$cta_text !== void 0 ? _context$cta_text : ctaContext.cta_text) !== null && _ref4 !== void 0 ? _ref4 : null;
          eventContext.cta_text = _rawCta != null ? removeEmojisFromCtaText(_rawCta) : null;
        }
        return eventContext;
      }
    }, {
      key: "getDrawerContext",
      value: function getDrawerContext() {
        var _window$loyaltyDrawer, _window$loyaltyDrawer2;
        if (!((_window$loyaltyDrawer = window.loyaltyDrawer) !== null && _window$loyaltyDrawer !== void 0 && _window$loyaltyDrawer.customerData)) return null;
        var customer = window.loyaltyDrawer.customerData.customer || window.loyaltyDrawer.customerData;
        var points = customer.points_balance || 0;
        var activeRedemptions = (customer.point_redemptions || []).filter(function (r) {
          return r.approved;
        });
        var vipTier = customer.vip_tier || null;
        var tierName = (vipTier === null || vipTier === void 0 ? void 0 : vipTier.name) || customer.vip_tier_name || null;
        var redemptionEligible = activeRedemptions.length > 0;
        if (!redemptionEligible && ((_window$loyaltyDrawer2 = window.loyaltyDrawer.redemptionOptions) === null || _window$loyaltyDrawer2 === void 0 ? void 0 : _window$loyaltyDrawer2.length) > 0) {
          var affordableOptions = window.loyaltyDrawer.redemptionOptions.filter(function (option) {
            var _window$loyaltyDrawer3, _window$loyaltyDrawer4;
            var costInPoints = ((_window$loyaltyDrawer3 = (_window$loyaltyDrawer4 = window.loyaltyDrawer).getCostInPoints) === null || _window$loyaltyDrawer3 === void 0 ? void 0 : _window$loyaltyDrawer3.call(_window$loyaltyDrawer4, option)) || option.points_cost || option.cost_in_points || 0;
            return points >= costInPoints;
          });
          redemptionEligible = affordableOptions.length > 0;
        }

        // Extract cart state
        var cartState = {
          cart_total: null,
          cart_item_count: null,
          cart_product_ids: null,
          cart_variant_ids: null
        };
        if (window.loyaltyDrawer.cartState) {
          var cart = window.loyaltyDrawer.cartState;
          var items = cart.items || [];
          var totalCents = cart.total || 0;
          cartState = {
            cart_total: totalCents,
            cart_item_count: items.length,
            cart_product_ids: cart.productIds || [],
            cart_variant_ids: cart.variantIds || []
          };
        }
        return _objectSpread({
          tier_name: tierName,
          redemption_eligible: redemptionEligible,
          points_balance: points
        }, cartState);
      }
    }, {
      key: "trackPageView",
      value: function trackPageView() {
        if (!this.isReady() || this.pageViewTracked) {
          return;
        }
        try {
          var eventContext = this.buildEventContext({
            widget_component: 'page_view',
            customer_logged_in: !!this.getCustomerData().customer_id
          });
          this.analyticsInstance.trackShown('app', undefined, eventContext);
          this.pageViewTracked = true;
        } catch (error) {
          console.error('[SpotlightAnalytics] Error tracking page view:', error);
        }
      }
    }, {
      key: "trackShown",
      value: function trackShown() {
        var _this2 = this;
        var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (!this.isReady()) {
          setTimeout(function () {
            if (_this2.isReady()) _this2.trackShown(context);
          }, 100);
          return;
        }
        try {
          this.analyticsInstance.trackShown('app', undefined, this.buildEventContext(context));
        } catch (error) {
          console.error('[SpotlightAnalytics] Error tracking shown event:', error);
        }
      }
    }, {
      key: "trackClicked",
      value: function trackClicked() {
        var _this3 = this;
        var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (!this.isReady()) {
          setTimeout(function () {
            if (_this3.isReady()) _this3.trackClicked(context);
          }, 100);
          return;
        }
        try {
          // Respect customer_logged_in from context, default to true only if not specified
          var mergedContext = _objectSpread({}, context);
          if (mergedContext.customer_logged_in === undefined) {
            mergedContext.customer_logged_in = true;
          }
          this.analyticsInstance.trackClickedOn('app', undefined, this.buildEventContext(mergedContext));
        } catch (error) {
          console.error('[SpotlightAnalytics] Error tracking clicked event:', error);
        }
      }
    }, {
      key: "trackExposure",
      value: function trackExposure(componentId) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.exposureCount++;
        var pageUrl = window.location.href.split('?')[0].split('#')[0];
        var exposureKey = "".concat(componentId, "_").concat(pageUrl, "_").concat(this.sessionId);
        if (this.exposureTracked.has(exposureKey)) return;
        this.exposureTracked.add(exposureKey);
        if (componentId === 'compact_cta' || componentId === 'cta_exposed') {
          var _ctaRaw = context.cta_text || null;
          this.lastCtaExposure = {
            timestamp: Date.now(),
            exposureCount: this.exposureCount,
            ctaText: _ctaRaw != null ? removeEmojisFromCtaText(_ctaRaw) : null
          };
        }
        this.trackShown(_objectSpread({
          widget_component: context.widget_component || componentId
        }, context));
      }
    }, {
      key: "getCtaContext",
      value: function getCtaContext() {
        if (!this.lastCtaExposure) return null;
        return {
          cta_text: this.lastCtaExposure.ctaText
        };
      }
    }]);
  }();
  window.SpotlightAnalytics = SpotlightAnalytics;
  window.spotlightAnalytics = null;
  window.initSpotlightAnalytics = function (config) {
    if (!window.spotlightAnalytics) {
      window.spotlightAnalytics = new SpotlightAnalytics(config);
    }
    return window.spotlightAnalytics;
  };
})();
window.SpotlightAnalyticsModule = __webpack_exports__;
/******/ })()
;
