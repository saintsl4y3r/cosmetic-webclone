
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.Djdl8mLr.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor.DsxcFkg4.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.BCFWtXcm.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.BfrO3fto.js","/cdn/shopifycloud/checkout-web/assets/c1/object.CxlHGiSZ.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-discount-offer.YNYWun32.js","/cdn/shopifycloud/checkout-web/assets/c1/alternativePaymentCurrency.CGlgPfMn.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal.7azv915a.js","/cdn/shopifycloud/checkout-web/assets/c1/useHasOrdersFromMultipleShops.D6R6Bv7X.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.BRdfXzV1.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.Dq5KJDg_.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.D1NB_iMw.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers.DSCe8gXH.js","/cdn/shopifycloud/checkout-web/assets/c1/useForceShopPayUrl.B6wXb8Vj.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.DAA0EKW1.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.CPNDwPOa.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.ByBiES1Z.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummary.Dk4QGzYk.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.Bnj-7lkR.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo.0ZoYPRdm.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.tBYAV27g.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton.BwzT43Vs.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin.KcoW8uQB.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.Dbxhizq1.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.CLnOikrN.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery.CT1uMXo6.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.Ul93HcDT.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.Dq0X34pr.js","/cdn/shopifycloud/checkout-web/assets/c1/flags.CJq-0OH8.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.gkP7AExu.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.DFUiT376.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-options.D5DkKYQa.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.CQVr8_6b.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.C_rpIKRo.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.DOe0K3tt.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.BQiHsP4E.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.DjWnrhsv.js","/cdn/shopifycloud/checkout-web/assets/c1/rendering-extension-targets.6yr6NoGu.js","/cdn/shopifycloud/checkout-web/assets/c1/v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.zvxe4kS0.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.D7EkV1ZR.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useHasOrdersFromMultipleShops.BC4ilhPE.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CKTqepKH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/helpers.BhtheElV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.BIcoRey5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.zNp2FigI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.DuZuWHqZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.V0VYEO4K.css"];
      var fontPreconnectUrls = ["https://cdn.shopify.com"];
      var fontPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0662/4598/4498/files/tt_chocolates_regular-webfont.woff2?v=1679588177","https://cdn.shopify.com/s/files/1/0662/4598/4498/files/universltstd-boldcn-webfont.woff2?v=1679588177"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0662/4598/4498/files/kylie-cosmetics-by-kylie-jenner-logo_44d4b830-b42b-4558-aa22-54adf26a234c_x320.png?v=1677055250"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  