/**
 * customDiscountLogic.js - Custom Discount Features Module
 *
 * This file is part of the Kite theme extension file splitting system.
 * It contains custom discount features: gfgCustomDiscount, gfgVolDiscount, gfgConsolidatedCustomDiscount
 *
 * Loading conditions:
 * - Loads when: consolidatedCustomDiscount/consolidatedCombinedDiscount/shippingDiscount/discounts.length > 0
 * - Dependencies: base (freeGiftLogicv1.js)
 */
(function() {
    'use strict';

    // ============ DEPENDENCY CONFIGURATION ============
    // Add module dependencies here (module name and event to listen for)
    var DEPENDENCIES = [
        { module: 'base', event: 'gfg:module:base' }
        // Add more dependencies here if needed in the future
    ];

const SVG_ICONS = {
  DISCOUNT_TAG_ICON_FILL : `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2835 5.83398C21.4002 5.83398 22.4502 6.26732 23.2335 7.05065L32.7502 16.5673C34.6502 18.4673 34.6502 21.534 32.7502 23.434L23.4335 32.7507C21.5168 34.6673 18.4335 34.634 16.5668 32.7507L7.05016 23.234C6.26683 22.434 5.8335 21.4007 5.8335 20.284V9.51732C5.8335 7.48398 7.4835 5.83398 9.51683 5.83398H20.2835ZM20.1002 13.6507C19.1335 12.684 17.5335 12.684 16.5668 13.6507C15.6002 14.6173 15.6002 16.2173 16.5668 17.184C17.5335 18.1673 19.1168 18.1507 20.1002 17.184C21.0668 16.2173 21.0668 14.6173 20.1002 13.6507ZM10.0002 10.834C10.0002 11.3007 10.3668 11.6673 10.8335 11.6673C11.3002 11.6673 11.6668 11.3007 11.6668 10.834C11.6668 10.3673 11.3002 10.0007 10.8335 10.0007C10.3668 10.0007 10.0002 10.3673 10.0002 10.834ZM19.9002 26.3507C20.8835 27.334 22.4668 27.3173 23.4335 26.3507C24.4002 25.384 24.4002 23.784 23.4335 22.8173C22.4668 21.8507 20.8668 21.8507 19.9002 22.8173C18.9335 23.784 18.9335 25.384 19.9002 26.3507ZM15.2668 22.4507L25.2668 19.1173C25.7168 18.9673 25.9502 18.5007 25.8002 18.0673C25.6502 17.6173 25.1835 17.384 24.7502 17.534L14.7502 20.8673C14.3002 21.0173 14.0668 21.484 14.2168 21.9173C14.3668 22.3673 14.8335 22.6007 15.2668 22.4507ZM18.9169 16.0007C19.2336 15.6674 19.2336 15.1507 18.9169 14.8174C18.5836 14.484 18.0669 14.484 17.7336 14.8174C17.4169 15.1507 17.4169 15.6674 17.7336 16.0007C18.0669 16.334 18.5836 16.334 18.9169 16.0007ZM21.0839 24C20.7673 24.3333 20.7673 24.85 21.0839 25.1833C21.4173 25.5167 21.9339 25.5167 22.2673 25.1833C22.6006 24.85 22.6006 24.3333 22.2673 24C21.9339 23.6667 21.4173 23.6667 21.0839 24Z"/>
</svg>`,
DISCOUNT_TAG_ICON_STROKE : `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.2383 5H21.7214C20.9837 5 20.29 5.28734 19.7683 5.80912L5.80924 19.7682C5.28734 20.29 5 20.9836 5 21.7212C5 22.4589 5.28746 23.1525 5.80924 23.6739L16.3259 34.1906C16.8475 34.7125 17.5411 35 18.2787 35C19.0164 35 19.71 34.7127 20.2318 34.1908L34.1909 20.2317C34.7127 19.71 35 19.0163 35 18.2786V7.7617C35 6.2201 33.7486 5 32.2383 5ZM33.2422 18.2786C33.2422 18.5468 33.1377 18.799 32.948 18.9887L18.9888 32.9478C18.596 33.3406 17.9617 33.3407 17.5691 32.9478L7.05201 22.4308C6.65914 22.0381 6.65973 21.4037 7.05219 21.0112L21.0113 7.05201C21.201 6.86229 21.4532 6.75781 21.7214 6.75781H32.2383C32.7866 6.75781 33.2422 7.20119 33.2422 7.7617V18.2786ZM29.4142 11.4658C29.8996 11.4658 30.2931 11.0723 30.2931 10.5869C30.2931 10.1015 29.8996 9.70801 29.4142 9.70801C28.9288 9.70801 28.5353 10.1015 28.5353 10.5869C28.5353 11.0723 28.9288 11.4658 29.4142 11.4658ZM22.7618 14.6738C22.7618 16.1966 21.5229 17.4355 20.0001 17.4355C18.4773 17.4355 17.2384 16.1966 17.2384 14.6738C17.2384 13.151 18.4773 11.9121 20.0001 11.9121C21.5229 11.9121 22.7618 13.151 22.7618 14.6738ZM21.004 14.6737C21.004 14.1202 20.5536 13.6699 20.0001 13.6699C19.4466 13.6699 18.9962 14.1202 18.9962 14.6737C18.9962 15.2273 19.4466 15.6776 20.0001 15.6776C20.5536 15.6776 21.004 15.2273 21.004 14.6737ZM20.0001 22.5635C18.4773 22.5635 17.2384 23.8024 17.2384 25.3252C17.2384 26.848 18.4773 28.0869 20.0001 28.0869C21.5229 28.0869 22.7618 26.848 22.7618 25.3252C22.7618 23.8024 21.5229 22.5635 20.0001 22.5635ZM20.0001 26.3291C19.4466 26.3291 18.9962 25.8788 18.9962 25.3252C18.9962 24.7717 19.4466 24.3213 20.0001 24.3213C20.5536 24.3213 21.004 24.7717 21.004 25.3252C21.004 25.8788 20.5536 26.3291 20.0001 26.3291ZM14.3517 19.1211H25.6484C26.1339 19.1211 26.5273 19.5146 26.5273 20C26.5273 20.4854 26.1338 20.8789 25.6484 20.8789H14.3517C13.8663 20.8789 13.4728 20.4854 13.4728 20C13.4728 19.5146 13.8663 19.1211 14.3517 19.1211Z"/>
</svg>`,
DISCOUNT_ICON_CIRCULAR : `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.9469 21.9751L33.1869 20.3484C33.0684 20.1002 33.0004 19.831 32.9866 19.5564C32.9729 19.2818 33.0138 19.0071 33.1069 18.7484L33.8535 16.6951C34.0396 16.1918 34.1225 15.6562 34.0973 15.1202C34.0721 14.5842 33.9393 14.0587 33.7069 13.5751C33.4802 13.0892 33.1597 12.653 32.7639 12.2914C32.368 11.9299 31.9046 11.6502 31.4002 11.4684L29.3335 10.7351C28.8168 10.5415 28.3958 10.1541 28.1602 9.65507L27.4002 8.00174C26.9404 7.02223 26.1104 6.26547 25.0928 5.8979C24.0751 5.53033 22.9531 5.58207 21.9735 6.04174L20.3335 6.80174C20.0876 6.91979 19.8207 6.98767 19.5482 7.00141C19.2758 7.01514 19.0034 6.97446 18.7469 6.88174L16.6935 6.14841C15.6749 5.78357 14.5534 5.83684 13.5739 6.29656C12.5945 6.75629 11.837 7.58507 11.4669 8.60174L10.7335 10.6684C10.5399 11.1852 10.1525 11.6061 9.65352 11.8417L8.00019 12.6017C7.51399 12.828 7.07734 13.1482 6.71538 13.5439C6.35342 13.9395 6.07329 14.4029 5.89112 14.9073C5.70895 15.4117 5.62834 15.9471 5.65392 16.4827C5.6795 17.0184 5.81078 17.5437 6.04019 18.0284L6.80019 19.6551C6.91862 19.9032 6.98667 20.1724 7.0004 20.4471C7.01413 20.7217 6.97327 20.9963 6.88019 21.2551L6.13352 23.3084C5.94744 23.8117 5.86454 24.3473 5.88973 24.8833C5.91493 25.4193 6.04772 25.9448 6.28019 26.4284C6.50834 26.9155 6.83088 27.3526 7.22911 27.7142C7.62735 28.0758 8.09337 28.3548 8.60019 28.5351L10.6669 29.3351C11.1836 29.5286 11.6045 29.9161 11.8402 30.4151L12.6002 32.0017C12.9281 32.7043 13.45 33.2984 14.1043 33.7142C14.7587 34.1299 15.5183 34.35 16.2935 34.3484C16.893 34.351 17.4854 34.2189 18.0269 33.9617L19.6669 33.2017C19.9128 33.0837 20.1797 33.0158 20.4521 33.0021C20.7246 32.9883 20.997 33.029 21.2535 33.1217L23.3069 33.8684C24.3254 34.2332 25.447 34.18 26.4264 33.7202C27.4058 33.2605 28.1634 32.4317 28.5335 31.4151L29.3335 29.3351C29.5271 28.8183 29.9145 28.3974 30.4135 28.1617L32.0002 27.4017C32.4864 27.1755 32.923 26.8553 33.285 26.4596C33.647 26.0639 33.9271 25.6006 34.1092 25.0962C34.2914 24.5918 34.372 24.0564 34.3465 23.5207C34.3209 22.9851 34.1896 22.4598 33.9602 21.9751H33.9469ZM18.8535 17.095C18.8535 18.067 18.0655 18.855 17.0935 18.855C16.1214 18.855 15.3335 18.067 15.3335 17.095C15.3335 16.1229 16.1214 15.335 17.0935 15.335C18.0655 15.335 18.8535 16.1229 18.8535 17.095ZM16.2076 24.4658C16.3568 24.5301 16.5177 24.5626 16.6802 24.5615C16.8426 24.5626 17.0035 24.5301 17.1527 24.4658C17.3019 24.4015 17.4361 24.307 17.5468 24.1882L24.2135 17.5215C24.4281 17.2886 24.5444 16.9818 24.538 16.6651C24.5315 16.3485 24.4029 16.0467 24.1789 15.8227C23.955 15.5988 23.6531 15.4701 23.3365 15.4637C23.0199 15.4572 22.713 15.5735 22.4802 15.7882L15.8135 22.4548C15.6965 22.5668 15.6034 22.7014 15.5399 22.8503C15.4763 22.9993 15.4435 23.1595 15.4435 23.3215C15.4435 23.4834 15.4763 23.6437 15.5399 23.7927C15.6034 23.9416 15.6965 24.0761 15.8135 24.1882C15.9242 24.307 16.0585 24.4015 16.2076 24.4658ZM22.9068 24.6692C23.8788 24.6692 24.6668 23.8812 24.6668 22.9092C24.6668 21.9372 23.8788 21.1492 22.9068 21.1492C21.9348 21.1492 21.1468 21.9372 21.1468 22.9092C21.1468 23.8812 21.9348 24.6692 22.9068 24.6692Z"/>
</svg>`,
CHECK_MARK_ICON : `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
<path d="M6.62151 1.91423C6.86591 2.10972 6.9055 2.46628 6.71005 2.71064L3.68806 6.48809C3.49688 6.72705 3.15047 6.77109 2.90563 6.58743L1.39465 5.4542C1.1443 5.26643 1.09357 4.91128 1.28132 4.66093C1.46909 4.41058 1.82424 4.35984 2.07459 4.54761L3.14622 5.35133L5.82512 2.00272C6.02061 1.75835 6.37718 1.71873 6.62151 1.91423Z" fill="black"/>
</svg>`,
}

let gfgCustomDiscount = {
  state: {
    isFirstRenderForcustomDiscount: true,
    productFound: {},
    productVariantFrount: {},
    collectionFound: {},
    customDiscountEligibilityResult: {},
  },
  init: function () {
    try {
      let settings = gfg.settings;
      let _customDiscountData = settings.customDiscount;

      gfgCustomDiscount.initialize(_customDiscountData);
      gfgCustomDiscount.gfgShippingDiscountV2.init();
      // const page_type = gfg.f.getPageType();
      // if (page_type === "product") {
      //   gfgCustomDiscount.productPage.init(_customDiscountData);
      // }

      // if (page_type === "cart") {
      //   gfgCustomDiscount.cartPage.init(_customDiscountData);
      // }

      // if (page_type !== "cart") {
      //   gfgCustomDiscount.sideCart.init(_customDiscountData);
      // }
    } catch (error) {
      gfg.utility.debugConsole("Error inside gfgCustomDiscount init fn", error);
    }
  },
  productPage: {
    init: function (customDiscountData) {
      try {
        gfgCustomDiscount.initialize(customDiscountData, "PRODUCT_PAGE");
      } catch (error) {
        gfg.utility.debugConsole("Error inside productPage.init fn", error);
      }
    },
  },
  cartPage: {
    init: function (customDiscountData) {
      try {
        gfgCustomDiscount.initialize(customDiscountData, "CART_PAGE");
      } catch (error) {
        gfg.utility.debugConsole("Error inside cartPage.init fn", error);
      }
    },
  },
  sideCart: {
    init: function (customDiscountData) {
      try {
        gfgCustomDiscount.initialize(customDiscountData, "SIDE_CART");
      } catch (error) {
        gfg.utility.debugConsole("Error inside cartPage.init fn", error);
      }
    },
  },
  initialize: async function (customDiscountData, pageType) {
    try {

      const shopName = window?.Shopify?.shop;
      
      if(shopName && shopName === "heavins-ie.myshopify.com"){
        let _cartDataHeavins = await gfg.utility.getCartV2();
        // Fetch cart data
        
        const cartAttributes = await gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.getExistingCartAttributes(_cartDataHeavins);
        if(Object.keys(cartAttributes).length > 0){
          gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.updateCartAttributesWithCFData({});        
        }
        return;
      }

      const enabledCustomDiscountData = customDiscountData?.filter((discount) => discount.isEnabled) || [];
      if(enabledCustomDiscountData.length == 0) {
        return;
      }
      let cartData = await gfg.utility.getCartV2();
  
  
      // Get existing data from cart attributes
      let previousAttrData = gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.getExistingCartAttributes(cartData);
      let newAtttributeData = JSON.parse(JSON.stringify(previousAttrData));
  
      // Process each discount and update the existing data
      for (let customDiscount of enabledCustomDiscountData) {

        try {
          
          const isActiveCampaign = gfg.customDiscountValidationFunctions.checkForActiveCampaign(customDiscount);
          if (!isActiveCampaign || gfg?.testAddLineItemsScriptInProgress) {
            continue;
          }
          // Verify custom discount rules
          const customDiscountEligibilityResult = await gfg.customDiscountValidationFunctions.verifyCustomDiscountRules(customDiscount, cartData);
          gfgCustomDiscount.state.customDiscountEligibilityResult = { [customDiscount.title]: customDiscountEligibilityResult };
          const currFunctionAttributeData = await gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.init(customDiscount, cartData, customDiscountEligibilityResult);
  
          if(customDiscount?.CFDevSettings?.functionValidationLimits?.isLimitsEnabled) {
            // Process the discount and get the result
            newAtttributeData[customDiscount.title] = JSON.parse(JSON.stringify(currFunctionAttributeData));
          }
          
          if(customDiscount?.discountFunctionType === "BUYX_GETY_DISCOUNT" && customDiscount?.widgetSettings) {
            gfgCustomDiscount.gfgBXGY.init(customDiscount?.title)
          }
        } catch (error) {
          gfg.utility.debugError("Error in gfgCustomDiscount initialize", error);
        }
      }
      let newDataToCompare = JSON.parse(JSON.stringify(newAtttributeData));
      if(JSON.stringify(previousAttrData) != JSON.stringify(newDataToCompare)) {
        gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.updateCartAttributesWithCFData(newAtttributeData);
      }
    } catch (error) {
      gfg.utility.debugError("Error inside gfgCustomDiscount initialize fn", error);
    }
  },
  f: {
    clearExistingContent: function (elements) {
      try {
        elements.forEach((element) => {
          element.innerHTML = "";
        });
      } catch (error) {
        gfg.utility.debugConsole("Error inside gfgCustomDiscount clearExistingContent fn", error);
      }
    },
    appendNewUI: function (elements, uiArray, existingBlocks) {
      try {
        elements.forEach((element) => {
          // Append each generated UI element
          uiArray.forEach((uiElement) => {
            if (existingBlocks.length > 0) {
              const id = element.id;
              const isIdPresentInOffer = uiElement.offer._id == id;
              if (!isIdPresentInOffer && uiArray.length > 1) {
                return;
              }
            }
            const clone = uiElement.generatedUI.cloneNode(true);
            element.appendChild(clone);
          });
        });
      } catch (error) {
        gfg.utility.debugError(`Error inside gfgCustomDiscount appendNewUI fn`, error); 
      }
    },
    insertIntoPageWrapper: function (preparedUiArray, page_type, wrapperElement) {
      try {
        if (preparedUiArray.length === 0) {
          return;
        }

        const gfgCustomDiscountWrapperProductEle = gfg.utility.findWrapperElement(wrapperElement, page_type, null, 'JS');

        let appBlockElement = [];
        if(page_type != "SIDE_CART") {
          let selector = wrapperElement === "CONSOLIDATED_PROGRESS_BAR" ? ".gfgConsolidatedProgressBarWrapperV2" : ".gfgCustomDiscountWrapperV2";
          appBlockElement = document.querySelectorAll(selector);
        }

        gfgCustomDiscount.f.clearExistingContent(gfgCustomDiscountWrapperProductEle);
        gfgCustomDiscount.f.appendNewUI(gfgCustomDiscountWrapperProductEle, preparedUiArray, appBlockElement);
      } catch (error) {
        gfg.utility.debugConsole("Error inside gfgCustomDiscount insertIntoPageWrapper fn", error);
      }
    },
  },
  utility: {
    createElementWithAttributes : function (tag, attributes) {
      try {
        const element = document.createElement(tag);
        for (let key in attributes) {
          
          if(key === "innerText" || key === "innerHTML") {
            element[key] = attributes[key]
          } else {
            element.setAttribute(key, attributes[key]);
          }
        }
        return element;
      } catch (error) {
        gfg.utility.debugError("error in createElementWithAttributes", error); 
      }
    },
    checkMultipleLanguagePresent: function (data) {
      try {
        let keysArr = data ? Object.keys(data) : [];
        const keysToSkip = ["conditionMetIconUrl", "conditionNotMetIconUrl", "conditionMet" , "showOnWidget"];
        keysArr = keysArr.filter((curr) => !keysToSkip.includes(curr));
        return keysArr.length > 1;
      } catch (error) {
        gfg.utility.debugError(`Error inside gfgCustomDiscount utility checkMultipleLanguagePresent fn`, error);
      }
    }
  },
  gfgCustomDiscountFunctionLogicHandlers: {
    init: async function (customDiscountSettings, cartData, customDiscountEligibilityResult) {
      try {
        let newAttributeValueData;
        let storefrontResult;
        let isTieredGiftDiscount = customDiscountSettings.discountFunctionType == "TIERED_GIFTS_DISCOUNT";
        let functionValidationType;
        let attributeValue = "";

        if(cartData.items.length != 0) {
          
          const { fullValidation, allQualifyingItems, fewQualifyingItems } = customDiscountSettings?.CFDevSettings?.functionValidationLimits || {};

          if(fewQualifyingItems && cartData.items.length > parseFloat(fewQualifyingItems)){
            functionValidationType = "NONE";
          } else if(allQualifyingItems && cartData.items.length > parseFloat(allQualifyingItems)){
            functionValidationType = "FEW_QUALIFYING"
          } else if(fullValidation && cartData.items.length > parseFloat(fullValidation)){
            functionValidationType = "ALL_QUALIFYING";
          } else if (!fullValidation || cartData.items.length <= parseFloat(fullValidation)) {
            functionValidationType = "FULL";
          }

          // Update or add the new data for the current title
          switch(customDiscountSettings.discountFunctionType) {
            case "CONDITIONAL_DISCOUNT" : {
              storefrontResult = await gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.prepareTargetsForConditionalDiscount(customDiscountSettings, cartData);
              break;
            }
            case "TIERED_DISCOUNT": {
              storefrontResult = await gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.prepareTargetsForTieredDiscount(customDiscountSettings, cartData);
              break;
            }
            case "TIERED_GIFTS_DISCOUNT": {
              storefrontResult = await gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.prepareTargetsForTieredGiftDiscount(customDiscountSettings, cartData);
              break;
            } 
            case "BUYX_GETY_DISCOUNT": {
              storefrontResult = await gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.prepareTargetsForBuyXGetYDiscount(customDiscountSettings, cartData);
              break;
            }
          }

          const isValid = (input) => {
            if (Array.isArray(input)) {
                return input.length > 0;
            } else if (typeof input === 'object' && input !== null) {
                return Object.keys(input).length > 0;
            }
            return false;
          };
        
          switch (functionValidationType) {
              case "FULL": {
                  newAttributeValueData = "";
                  break;
              }
              case "ALL_QUALIFYING": {
                  const validVariantIds = storefrontResult.validVariantIds;
                  newAttributeValueData = (isValid(validVariantIds) && customDiscountEligibilityResult) ? {
                      customDiscountEligibilityResult,
                      validVariantIds
                  } : "";
                  break;
              }
              case "FEW_QUALIFYING": {
                  const validVariantIds = storefrontResult?.validVariantIds;
                  storefrontResult.discounts = storefrontResult.discounts;
                  //storefrontResult.discounts = this.addPrefixToProductVariantIds(storefrontResult.discounts);
          
                  newAttributeValueData = (isValid(validVariantIds) && customDiscountEligibilityResult) ? {
                      customDiscountEligibilityResult,
                      ...storefrontResult
                  } : "";
                  break;
              }
              case "NONE": {
                  // const storefrontResultDiscounts = this.addPrefixToProductVariantIds(storefrontResult.discounts); // object
                  const storefrontResultDiscounts = storefrontResult.discounts; // object
                  newAttributeValueData = (isValid(storefrontResultDiscounts) && customDiscountEligibilityResult) ? {
                      customDiscountEligibilityResult,
                      discounts: storefrontResultDiscounts
                  } : "";
                  break;
              }
          }
        
        
        } else {
          newAttributeValueData = "";
        }

        return newAttributeValueData;
      } catch (err) {
        gfg.utility.debugError("err inside gfgCustomDiscountFunctionLogicHandlers-init", err);
      }
    }, 
    addPrefixToProductVariantIds: function(discountsData) {
      const prefix = "gid://shopify/ProductVariant/";

      try {
          // Iterate over each discount in the discounts array
          discountsData.forEach(discount => {
              // Iterate over each target in the targets array
              discount.targets.forEach(target => {
                  // Add the prefix to the productVariant id
                  target.productVariant.id = `${prefix}${target.productVariant.id}`;
              });
          });
    
          return discountsData;
      } catch (error) {
          gfg.utility.debugError("An error occurred while adding prefixes to productVariant IDs:", error);
          // Optionally, return a default value or rethrow the error
          return null; // or throw error;
      }
    },   
    getSortedLineItems: function(lineItems, sortBasedOn, sortByOrder) {
      try {
        let sortFunction;
        
        if (sortBasedOn === "productPrice") {
          if (sortByOrder === "ascending") {
            sortFunction = (a, b) => parseFloat(a.price) - parseFloat(b.price);
          } else if (sortByOrder === "descending") {
            sortFunction = (a, b) => parseFloat(b.price) - parseFloat(a.price);
          }
        } else if (sortBasedOn === "lineItemPrice") {
          if (sortByOrder === "ascending") {
            sortFunction = (a, b) => (parseFloat(a.price) * a.quantity) - (parseFloat(b.price) * b.quantity);
          } else if (sortByOrder === "descending") {
            sortFunction = (a, b) => (parseFloat(b.price) * b.quantity) - (parseFloat(a.price) * a.quantity);
          } 
        }
    
        return lineItems.sort(sortFunction);
      
      } catch (error) {
        gfg.utility.debugError("An error occurred while sorting line items:", error);
        return lineItems;
      }
    },
    getEligibleTier: function(line, tiersData, origin) {
      try {
        let finalTier;
        let lineQty = origin == "line" ? line.quantity : line.itemQty;
        let lineAmt = origin == "line" ? (parseFloat(line.price / 100) * line.quantity) : (line.itemQty * line.itemPrice);
        for (const tier of tiersData.tiersList) {
          const tierCondition = parseFloat(tier.tierCondition);
      
          if (tiersData.tierType === "INDIVIDUAL_DISCOUNTABLE_ITEMS_QUANTITY" && lineQty >= tierCondition) {
            finalTier = tier; // Return the tier if the quantity condition is met
          } else if (tiersData.tierType === "INDIVIDUAL_DISCOUNTABLE_ITEMS_SUBTOTAL" && lineAmt >= tierCondition) {
            finalTier = tier; // Return the tier if the subtotal condition is met
          }
        }
        return finalTier; // Return null if no valid tier is found
      } catch(err) {
        gfg.utility.debugError("err inside getEligibleTier", err);
      }
    },
    prepareTargetsForConditionalDiscount: async function(discountData, cartData) {
      try {
        let finalResult = {
          discounts: [],
          validVariantIds: []
        };
        cartData.presentmentCurrencyRate = gfg.utility.getActiveCurrencyRate();
        
        let validVariantIds = [];  // Array to hold all valid line items
        let validLineItems = [];

        let maxDiscountableItemsPerProduct = parseInt(discountData.discountSettings.maxDiscountableItemsPerProduct);
        let maxDiscountableProductsPerCart = parseInt(discountData.discountSettings.maxDiscountableProductsPerCart);
        let totalMaxDiscountableProducts = parseInt(discountData?.discountSettings?.totalMaxDiscountableProducts) || 0;
        let discountValue = parseFloat(discountData.discountSettings.value);
        let sortedLineItems = JSON.parse(JSON.stringify(cartData.items));
        let totalDiscountedProducts = 0; // To track the total quantity of discounted products

        let rulesList = discountData.discountSettings.rulesData.rulesGlobalList[0].rulesList;
        let rulesOperator = discountData.discountSettings.rulesData.rulesGlobalList[0].rulesOperator;
    
        if (discountData.discountSettings.useEligibilityProductsForDiscount) {
          rulesList = discountData.rulesData.rulesGlobalList[0].rulesList; //consider eligibility rules
          rulesOperator = discountData.rulesData.rulesGlobalList[0].rulesOperator; //consider eligibility rules
        }
    
        if (discountData?.discountSettings?.sortBasedOn != "none" && discountData?.discountSettings?.sortByOrder != "none") {
          sortedLineItems = gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.getSortedLineItems(sortedLineItems, discountData.discountSettings.sortBasedOn, discountData.discountSettings.sortByOrder);
        }
    
        const discountedVariants = new Map();
    
        for (let i = 0; i < sortedLineItems.length; i++) {
          if (maxDiscountableProductsPerCart != 0 && validLineItems.length == maxDiscountableProductsPerCart) {
            break;
          }

          if (totalMaxDiscountableProducts != 0 && totalDiscountedProducts >= totalMaxDiscountableProducts) {
            break;
          }

          let line = sortedLineItems[i];
          let isValidLine = (rulesOperator === "AND");
    
          // Check each rule to see if the line meets all product-related conditions
          for (let j = 0; j < rulesList.length; j++) {
            let rule = rulesList[j];
            if (rule.type === "DISCOUNT_PRODUCT" || rule.type == "PRODUCT") {
              let productResult = await gfg.customDiscountValidationFunctions.validateProductRuleForDiscountableItems(cartData, rule, line);
          
              // Ensure that the validation result itself is true and the line item is in the validated products
              if (productResult) {
                if (rulesOperator == "AND") {
                  isValidLine = true && isValidLine;
                } else {  // "OR"
                  isValidLine = true;
                }
              } else {
                // If the productResult result is false, handle according to the logic operator
                if (rulesOperator == "AND") {
                  isValidLine = false;  // Fail the item immediately for "AND"
                }
                // For "OR", no change is needed here, since failing one rule doesn't affect others
              }
            }
          }
          
          if(isValidLine) {
            let quantityToAdd = line.quantity;

            // Apply maxDiscountableItemsPerProduct if it is not 0
            if (maxDiscountableItemsPerProduct > 0) {
                const alreadyDiscounted = discountedVariants.get(line.variant_id) || 0;
                const remainingDiscountable = maxDiscountableItemsPerProduct - alreadyDiscounted;
                quantityToAdd = Math.min(line.quantity, remainingDiscountable);
    
                // Update the map with the new discounted quantity
                discountedVariants.set(line.variant_id, alreadyDiscounted + quantityToAdd);
            }
            if (totalMaxDiscountableProducts > 0 && (totalDiscountedProducts + quantityToAdd) > totalMaxDiscountableProducts) {
              quantityToAdd = totalMaxDiscountableProducts - totalDiscountedProducts;
            } 
            
            if (quantityToAdd > 0) {
              validLineItems.push({
                  productVariant: {
                      id: line.variant_id,
                      quantity: quantityToAdd
                  },
                  itemPrice: parseFloat(line.price / 100) // Use line price temporarily for calculation within this function
              });    
              totalDiscountedProducts += quantityToAdd;
            }
            if(!validVariantIds.includes(line.variant_id)) {
              validVariantIds.push(line.variant_id) //modify this part to also send the quantity 
            }
          }
        }
        // if(validLineItems.length == 0) {
        //   finalResult.functionResult = [];
        // }
        let discounts = [];

        if (discountData.discountSettings.type == "PERCENTAGE") {
    
          validLineItems.forEach(item => delete item.itemPrice); //not needed in this case
          discounts.push({
            value: { percentage: { value: discountValue } },
            targets: validLineItems,
            message: discountData?.discountSettings?.message || discountData.discountTitle
          });
        
        } else if (discountData.discountSettings.type == "FIXED") {
    
          validLineItems.forEach(item => delete item.itemPrice); //not needed in this case
          discounts.push({
            value: {
              fixedAmount: {
                amount: discountValue  * parseFloat(cartData.presentmentCurrencyRate),
                appliesToEachItem: discountData.discountSettings.appliesToEachItem,
              }
            },
            targets: validLineItems,
            message: discountData?.discountSettings?.message || discountData.discountTitle
          });
        } else if (discountData.discountSettings.type == "FIXED_PRICE") {
          
          validLineItems.forEach(item => {
            discountValue = discountValue * parseFloat(cartData.presentmentCurrencyRate)
            let discountAmount = item.itemPrice - discountValue;
            if(discountAmount < 0) {
              discountAmount = item.itemPrice
            }
            let newProductVariant = {
              ...item.productVariant,
              quantity: item.productVariant.quantity,
            }
            discounts.push({
              value: {
                fixedAmount: {
                  amount: discountAmount,  //* parseFloat(cartData.presentmentCurrencyRate),
                  appliesToEachItem: true,
                }
              },
              targets: [{ productVariant: newProductVariant }], // Create a target with only necessary info
              message: discountData?.discountSettings?.message || discountData.discountTitle
            });
          });
        } else {
        }
        
        finalResult.discounts = discounts;
        finalResult.validVariantIds = validVariantIds;
        return finalResult;
    
      } catch (err) {
        gfg.utility.debugError("Error in prepareTargetsForConditionalDiscount:", err);
        return; // Return an empty array in case of an error
      }
    },
    getValidTieredDiscountValue: function(cartData, discountData, validLineItems) {
      try {
        // Extract tier data from discount settings
        const { tierType, tiersList } = discountData.discountSettings.tiersData;
    
        // Initialize the valid tier to null
        let validTier = null;
    
        // Determine the basis for tier comparison
        let comparisonValue = 0;
        if (tierType === "CART_QUANTITY") {
          // Sum the quantities of all items in the cart
          comparisonValue = cartData.items.reduce((total, line) => total + line.quantity, 0);
        
        } else if (tierType === "CART_SUBTOTAL") {
          // Use the subtotal amount for comparison
          comparisonValue = gfg.customDiscountValidationFunctions.getAmountOfGivenProducts(cartData.items);
        
        } else if (tierType === "DISCOUNTABLE_ITEMS_QUANTITY") {
          // Sum the quantities of all discountable items
          comparisonValue = validLineItems.reduce((total, item) => total + item.itemQty, 0);
        
        } else if (tierType === "DISCOUNTABLE_ITEMS_SUBTOTAL") {
          // Sum the total prices of all discountable items
          //comparisonValue = validLineItems.reduce((total, item) => total + (item.productVariant.quantity * item.itemPrice), 0);
          comparisonValue = validLineItems.reduce((total, item) => total + (item.itemQty * item.itemPrice), 0);
        }
    
        // Iterate through the tiers list to find the applicable discount tier
        for (const tier of tiersList) {
          const tierCondition = parseFloat(tier.tierCondition);
    
          // Check if the comparison value meets the tier condition
          if (comparisonValue >= tierCondition) {
            // If so, update the valid tier to the current tier
            validTier = tier;
          } else {
            // Stop checking further tiers since they are sorted in ascending order
            break;
          }
        }
    
        return validTier;
      } catch (err) {
        gfg.utility.debugError("err inside getValidTieredDiscountValue", err);
        return null; // Return null in case of an error
      }
    },
    checkIfCartLineIdNeedsTobeSent: function(discountData) {
      try {
        const productRule = discountData.discountSettings.rulesData.rulesGlobalList[0].rulesList.find(rule => rule.ruleType === "productHasSubscription");
        if(productRule && productRule.ruleValue.operatorType === "is") {
          return true;
        }
        return false;
      } catch(err) {
        gfg.utility.debugError("Error in checkIfCartLineIdNeedsTobeSent", err); 
      }
    },
    prepareTargetsForTieredDiscount: async function(discountData, cartData) {
      try {
        let finalResult = {
          discounts: [],
          validVariantIds: []
        };
        cartData.presentmentCurrencyRate = gfg.utility.getActiveCurrencyRate();
        
        let validVariantIds = [];  // Array to hold all valid line items
        let validLineItems = [];
        let validTier = null;

        let maxDiscountableItemsPerProduct = parseInt(discountData.discountSettings.maxDiscountableItemsPerProduct);
        let maxDiscountableProductsPerCart = parseInt(discountData.discountSettings.maxDiscountableProductsPerCart);
        let totalMaxDiscountableProducts = parseInt(discountData?.discountSettings?.totalMaxDiscountableProducts) || 0;
        let sortedLineItems = JSON.parse(JSON.stringify(cartData.items));
        let totalDiscountedProducts = 0; // To track the total quantity of discounted products

        let rulesList = discountData.discountSettings.rulesData.rulesGlobalList[0].rulesList;
        let rulesOperator = discountData.discountSettings.rulesData.rulesGlobalList[0].rulesOperator;
    
        if (discountData.discountSettings.useEligibilityProductsForDiscount) {
          rulesList = discountData.rulesData.rulesGlobalList[0].rulesList; //consider eligibility rules
          rulesOperator = discountData.rulesData.rulesGlobalList[0].rulesOperator; //consider eligibility rules
        }
    
        if (discountData?.discountSettings?.sortBasedOn != "none" && discountData?.discountSettings?.sortByOrder != "none") {
          sortedLineItems = gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.getSortedLineItems(sortedLineItems, discountData.discountSettings.sortBasedOn, discountData.discountSettings.sortByOrder);
        }
    
        const discountedVariants = new Map();
    
        for (let i = 0; i < sortedLineItems.length; i++) {
          if (maxDiscountableProductsPerCart != 0 && validLineItems.length == maxDiscountableProductsPerCart) {
            break;
          }

          if (totalMaxDiscountableProducts != 0 && totalDiscountedProducts >= totalMaxDiscountableProducts) {
            break;
          }

          let line = sortedLineItems[i];
          let isValidLine = (rulesOperator === "AND");
    
          // Check each rule to see if the line meets all product-related conditions
          for (let j = 0; j < rulesList.length; j++) {
            let rule = rulesList[j];
            if (rule.type === "DISCOUNT_PRODUCT" || rule.type == "PRODUCT") {
              let productResult = await gfg.customDiscountValidationFunctions.validateProductRuleForDiscountableItems(cartData, rule, line);
          
              // Ensure that the validation result itself is true and the line item is in the validated products
              if (productResult) {
                if (rulesOperator == "AND") {
                  isValidLine = true && isValidLine;
                } else {  // "OR"
                  isValidLine = true;
                }
              } else {
                // If the productResult result is false, handle according to the logic operator
                if (rulesOperator == "AND") {
                  isValidLine = false;  // Fail the item immediately for "AND"
                }
                // For "OR", no change is needed here, since failing one rule doesn't affect others
              }
            }
          }
          
          if (isValidLine && 
            (discountData.discountSettings.tiersData.tierType === "INDIVIDUAL_DISCOUNTABLE_ITEMS_QUANTITY" || 
             discountData.discountSettings.tiersData.tierType === "INDIVIDUAL_DISCOUNTABLE_ITEMS_SUBTOTAL")) {
            let origin = "line";
            validTier = this.getEligibleTier(line, discountData.discountSettings.tiersData, origin);
            isValidLine = !!validTier; // isValidLine is true if a valid tier is found
          }

          if(isValidLine) {
            let quantityToAdd = JSON.parse(JSON.stringify(line.quantity));

            // Apply maxDiscountableItemsPerProduct if it is not 0
            if (maxDiscountableItemsPerProduct > 0) {
                const alreadyDiscounted = discountedVariants.get(line.variant_id) || 0;
                const remainingDiscountable = maxDiscountableItemsPerProduct - alreadyDiscounted;
                quantityToAdd = Math.min(line.quantity, remainingDiscountable);
    
                // Update the map with the new discounted quantity
                discountedVariants.set(line.variant_id, alreadyDiscounted + quantityToAdd);
            }
            if (totalMaxDiscountableProducts > 0 && (totalDiscountedProducts + quantityToAdd) > totalMaxDiscountableProducts) {
              quantityToAdd = totalMaxDiscountableProducts - totalDiscountedProducts;
            } 
            
            if (quantityToAdd > 0) {
              validLineItems.push({
                  productVariant: {
                      id: line.variant_id,
                      quantity: quantityToAdd
                  },
                  itemPrice: parseFloat(line.price / 100), // Use line price temporarily for calculation within this function
                  itemQty: line.quantity, // Use line price temporarily for calculation within this function
                });    
              totalDiscountedProducts += quantityToAdd;
            }
            if(!validVariantIds.includes(line.variant_id)) {
              validVariantIds.push(line.variant_id) //modify this part to also send the quantity 
            }
          }
        }
        // if(validLineItems.length == 0) {
        //   finalResult.functionResult = [];
        // }
        let discounts = gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.getDiscountsArrayForTieredDiscounts(discountData, cartData, validLineItems);
        
        finalResult.discounts = discounts;
        finalResult.validVariantIds = validVariantIds;
        return finalResult;
    
      } catch (err) {
        gfg.utility.debugError("Error in prepareTargetsForConditionalDiscount:", err);
        return; // Return an empty array in case of an error
      }
    },
    getDiscountsArrayForTieredDiscounts: function (discountData, cartData, validLineItems) {
      try {
        let validTier = gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.getValidTieredDiscountValue(cartData, discountData, validLineItems);
        let appliesToEachItem = validTier?.appliesToEachItem;
        let discounts = [];
        const identifierKey = gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.checkIfCartLineIdNeedsTobeSent(discountData) ? "cartLine" : "productVariant";
    
        if (discountData.discountSettings.type === "FIXED_PRICE") {
          let discountValue = parseFloat(validTier.discountValue) * parseFloat(cartData.presentmentCurrencyRate);
    
          let totalQty = 0;
          let finalPriceAfterDiscount = 0;
          if (!appliesToEachItem) {
            totalQty = validLineItems.reduce((sum, item) => sum + item[identifierKey].quantity, 0);
            finalPriceAfterDiscount = +(discountValue / totalQty).toFixed(2);
          }
    
          for (let item of validLineItems) {
            let discountAmount = item.itemPrice - (appliesToEachItem ? discountValue : finalPriceAfterDiscount);
            if (discountAmount < 0) {
              discountAmount = item.itemPrice;
            }
    
            let newProductVariant = {
              ...item[identifierKey],
              quantity: item[identifierKey].quantity,
            };
    
            discounts.push({
              value: {
                fixedAmount: {
                  amount: discountAmount,
                  appliesToEachItem: true,
                },
              },
              targets: [{ [identifierKey]: newProductVariant }],
              message: validTier?.discountMessage || discountData.discountTitle,
            });
          }
          
          return discounts;
        }
        
        if (discountData?.discountSettings?.tiersData?.tierType === "INDIVIDUAL_DISCOUNTABLE_ITEMS_QUANTITY" || discountData?.discountSettings?.tiersData?.tierType === "INDIVIDUAL_DISCOUNTABLE_ITEMS_SUBTOTAL") {
          for (let item of validLineItems) {
            validTier = this.getEligibleTier(item, discountData.discountSettings.tiersData);
            const discountObject = {
              targets: [{
                [identifierKey]: {
                  id: item[identifierKey].id,
                  quantity: item[identifierKey].quantity
                }
              }],
              message: validTier?.discountMessage || discountData.discountTitle
            }
    
            if (validTier) {
              let discountValue = validTier.discountValue;
    
              if (discountData.discountSettings.type === "PERCENTAGE") {
                discountObject.value = { 
                  percentage: { 
                    value: discountValue
                   }
                };
                discounts.push(discountObject);
              } else if (discountData.discountSettings.type === "FIXED") {
                discountObject.value = {
                  fixedAmount: {
                    amount: discountValue * parseFloat(cartData.presentmentCurrencyRate),
                    appliesToEachItem: validTier.appliesToEachItem,
                  }
                };
                discounts.push(discountObject);
              }
            }
          }
          return discounts;
        } else {
          
          if (!validTier) {
            return [];
          }
    
          let discountValue = validTier.discountValue;
          validLineItems.forEach(item => {
            delete item.itemPrice;
            delete item.itemQty;
          });
    
          const discountObject = {
            targets: validLineItems,
            message: validTier?.discountMessage || discountData.discountTitle
          }
    
          if (discountData.discountSettings.type === "PERCENTAGE") {
            discountObject.value = { 
              percentage: { 
                value: discountValue
              }
            };
            discounts.push(discountObject);
    
          } else if (discountData.discountSettings.type === "FIXED") {
            discountObject.value = {
              fixedAmount: {
                amount: discountValue * parseFloat(cartData.presentmentCurrencyRate),
                appliesToEachItem: validTier.appliesToEachItem,
              }
            };
            discounts.push(discountObject);
          }
    
          return discounts;
        }
      } catch(err) {
        gfg.utility.debugError("Error in getDiscountsArrayForTieredDiscounts", err);
      }
    },
    checkTargetForValidQualifierEligibility: function (qualifierType, lineItemData, ruleObject) {
      try {
    
        if(qualifierType === "individualDiscountableItemsQuantity") {
          return gfg.customDiscountValidationFunctions.compareMetrics(ruleObject, lineItemData.quantity);
        } 
        
        if(qualifierType === "individualDiscountableItemsSubtotal") {
          return gfg.customDiscountValidationFunctions.compareMetrics(ruleObject, lineItemData.subtotal);
        }
        return true;
      } catch(err) {
        gfg.utility.debugError("Error in checkTargetForValidQualifierEligibility", err);
      }
    },
    checkTargetCondition: function(lineQtyForDiscount, targets, ruleValue, discountData) {
      try {
        if((!ruleValue.maxDiscountableProductsPerCart || ruleValue.maxDiscountableProductsPerCart == "0") && lineQtyForDiscount > 0) {

          return true;

        } else if(lineQtyForDiscount > 0 && targets.length < ruleValue.maxDiscountableProductsPerCart) {
              
          return true;
        
        } else {
              return false;
        }
        // if(gfg.settings.merchantInfo.shopName != "infused-drinks.myshopify.com") {
        //   if(lineQtyForDiscount > 0) {
        //     return true;
        //   }
        //   return false;
        // } else if (gfg.settings.merchantInfo.shopName == "infused-drinks.myshopify.com") {
        //   if(lineQtyForDiscount > 0 && targets.length < ruleValue.maxDiscountableProductsPerCart) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // }
      } catch(err) {
        gfg.utility.debugError("err inside checkTargetCondition", err);
      }
    },
    prepareTargetsForTieredGiftDiscount: async function(discountData, cartData) {
      try {
        let finalResult = {
          discounts: [],
          validVariantIds: {}
        };
        let validItemsData = {};
        cartData.presentmentCurrencyRate = gfg.utility.getActiveCurrencyRate();
        const tiers = discountData.discountSettings.rulesData.rulesGlobalList[0].rulesList;
        const discountSettings = discountData.discountSettings;
        let discountApplicationStrategy = discountSettings.rulesData.rulesGlobalList[0].discountApplicationStrategy;
        let discounts = [];
        let firstSatisfiedTier = null;
        let maxSatisfiedTier = null;

        const cartQuantity = gfg.customDiscountValidationFunctions.getQtyOfGivenProducts(cartData.items);
        const cartSubtotal = gfg.customDiscountValidationFunctions.getAmountOfGivenProducts(cartData.items);
    
        for (let tierIndex = 0; tierIndex < tiers.length; tierIndex++) {
            const tier = tiers[tierIndex];
            const ruleValue = tier.ruleValue;
            const qualifierType = ruleValue.qualifierType;
    
            let targets = [];
            let totalQuantity = 0;
            let totalAmount = 0;
            let totalQtyOfProductsDiscounted = 0;
            let allDiscountableItems = [];

            const discountedVariants = new Map();
            const processedValidItems = new Map();
            const totalMaxDiscountableProducts = ruleValue?.totalMaxDiscountableProducts || 0;

            let sortedLineItems = JSON.parse(JSON.stringify(cartData.items));
    
            if(tier?.ruleValue?.sortBasedOn != "none" && tier?.ruleValue?.sortByOrder != "none") {
              sortedLineItems = gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.getSortedLineItems(sortedLineItems, tier.ruleValue.sortBasedOn, tier.ruleValue.sortByOrder)
            }
    
            for (let i = 0; i < sortedLineItems.length; i++) {
                const line = sortedLineItems[i];
                let lineQuantity = line.quantity;
                const lineAmount = parseFloat(lineQuantity * (line.price / 100)) //parseFloat(line.cost.amountPerQuantity.amount) * lineQuantity;
    
                // Check if the line item meets the product-related conditions
                const productResult = await gfg.customDiscountValidationFunctions.validateProductRuleForDiscountableItems(cartData, tier, line);
    
                if (productResult) {
                  allDiscountableItems.push(line);
                  const itemQuantity = processedValidItems.get(line.variant_id)?.quantity || 0;
                  const itemSubtotal = processedValidItems.get(line.variant_id)?.subtotal || 0;
                  processedValidItems.set(line.variant_id, {
                    quantity: itemQuantity + lineQuantity,
                    subtotal: itemSubtotal + lineAmount
                  });

                  if(!this.checkTargetForValidQualifierEligibility(qualifierType, processedValidItems.get(line.variant_id), tier)) {
                    continue;
                  }

                    let lineQtyForDiscount = lineQuantity;
    
                    if (ruleValue.maxDiscountableItemsPerProduct > 0) {
                        const alreadyDiscounted = discountedVariants.get(line.variant_id) || 0;
                        const remainingDiscountable = ruleValue.maxDiscountableItemsPerProduct - alreadyDiscounted;
                        lineQtyForDiscount = Math.min(lineQuantity, remainingDiscountable);
    
                        // Update the map with the new discounted quantity
                        discountedVariants.set(line.variant_id, alreadyDiscounted + lineQtyForDiscount);
                    }
                    if (totalMaxDiscountableProducts > 0 && (totalQtyOfProductsDiscounted + lineQtyForDiscount) > totalMaxDiscountableProducts) {
                      lineQtyForDiscount = totalMaxDiscountableProducts - totalQtyOfProductsDiscounted;
                    }
    
                    if(this.checkTargetCondition(lineQtyForDiscount, targets, ruleValue, discountData)) {
                    // if (lineQtyForDiscount > 0) {
                      targets.push({
                        productVariant: {
                            id: line.variant_id,
                            quantity: lineQtyForDiscount
                        },
                        itemPrice: parseFloat(line.price / 100),
                        itemQty: line.quantity,
                      });
                      totalQtyOfProductsDiscounted += lineQtyForDiscount
                       if(validItemsData?.[`tierIndex${tierIndex}`]) {
                          if(!validItemsData?.[`tierIndex${tierIndex}`]?.includes(line.variant_id)) {
                              validItemsData[`tierIndex${tierIndex}`].push(line.variant_id);
                          }
                       } else {
                          validItemsData[`tierIndex${tierIndex}`] = [line.variant_id]
                       }
    
                      if (qualifierType === "discountableItemsQuantity") {
                          totalQuantity += lineQuantity;
                      } else if (qualifierType === "discountableItemsSubtotal") {
                          totalAmount += lineAmount;
                      }
                    }

                    if (ruleValue.maxDiscountableProductsPerCart > 0 && targets.length >= ruleValue.maxDiscountableProductsPerCart && qualifierType != "discountableItemsQuantity" && qualifierType != "discountableItemsSubtotal") {
                      break;
                    }
                }
            }

            if(targets.length == 0) {
              continue;
            }

            let isValid = false;

            if (qualifierType === "cartQuantity") {
                isValid = gfg.customDiscountValidationFunctions.compareMetrics(tier, cartQuantity);
            
            } else if (qualifierType === "discountableItemsQuantity") {
                let _discountableItemsQuantity = 0;
                allDiscountableItems.forEach((ele) => {
                  _discountableItemsQuantity += ele.quantity
                })
                isValid = gfg.customDiscountValidationFunctions.compareMetrics(tier, _discountableItemsQuantity);
                //isValid = gfg.customDiscountValidationFunctions.compareMetrics(tier, totalQuantity);
            
            } else if (qualifierType === "cartSubtotal") {
                isValid = gfg.customDiscountValidationFunctions.compareMetrics(tier, cartSubtotal);
            
            } else if (qualifierType === "discountableItemsSubtotal") {
                let _discountableItemsSubtotal = gfg.customDiscountValidationFunctions.getAmountOfGivenProducts(allDiscountableItems);
                tier.ruleValue.qualifierValue = tier.ruleValue.qualifierValue * cartData.presentmentCurrencyRate;
                isValid = gfg.customDiscountValidationFunctions.compareMetrics(tier, _discountableItemsSubtotal);
                //isValid = gfg.customDiscountValidationFunctions.compareMetrics(tier, totalAmount);

            } else if (qualifierType === "individualDiscountableItemsSubtotal") {
              const itemsMap = {};
              allDiscountableItems.forEach((ele) => {
                const itemId = ele.variant_id;
                const itemPrice = parseFloat(ele.price / 100);
                const itemQty = ele.quantity;
                itemsMap[itemId] = itemsMap[itemId] ? itemsMap[itemId] + itemPrice * itemQty : itemPrice * itemQty;
              })
              
              allDiscountableItems.forEach((item) => {
                const _individualDiscountableItemsSubtotal = itemsMap[item.variant_id];
                const individualLineItemIsValid = gfg.customDiscountValidationFunctions.compareMetrics(tier, _individualDiscountableItemsSubtotal);
                isValid = isValid || individualLineItemIsValid;
              })
            } else if (qualifierType === "individualDiscountableItemsQuantity") {
              const itemsMap = {};
              allDiscountableItems.forEach((ele) => {
                const itemId = ele.variant_id;
                const itemQty = ele.quantity;
                itemsMap[itemId] = itemsMap[itemId] ? itemsMap[itemId] + itemQty : itemQty;
              })
              
              allDiscountableItems.forEach((item) => {
                const _individualDiscountableItemsQuantity = itemsMap[item.variant_id];
                const individualLineItemIsValid = gfg.customDiscountValidationFunctions.compareMetrics(tier, _individualDiscountableItemsQuantity);
                isValid = isValid || individualLineItemIsValid;
              })
      
            } else if (qualifierType === "differentDiscountableItemsQuantity") {
              const itemsSet = new Set();
              allDiscountableItems.forEach((item) => {
                itemsSet.add(item.variant_id);
              })
              const _differentDiscountableItemsQuantity = itemsSet.size;
              isValid = gfg.customDiscountValidationFunctions.compareMetrics(tier, _differentDiscountableItemsQuantity);
            }
            
            if (isValid) {
              if (discountSettings.type == "FIXED") {
                  targets.forEach(item => {
                    delete item.itemPrice;
                    delete item.itemQty;
                  });
                  discounts.push({
                      value: {
                          fixedAmount: {
                              amount: parseFloat(ruleValue.discountValue),
                              appliesToEachItem: ruleValue.discountAppliesToEachItem
                          }
                      },
                      targets: targets,
                      message: ruleValue.message || discountData.discountTitle
                  });
              } else if (discountSettings.type == "PERCENTAGE") {
                  targets.forEach(item => {
                    delete item.itemPrice;
                    delete item.itemQty;
                  });
                  discounts.push({
                      value: {
                          percentage: {
                              value: parseFloat(ruleValue.discountValue),
                          }
                      },
                      targets: targets,
                      message: ruleValue.message || discountData.discountTitle
                  });
              } else if (discountSettings.type === "FIXED_PRICE") {
                let totalQty = 0;
                let finalPriceAfterDiscount = 0;  
                let discountValue = parseFloat(ruleValue.discountValue) * parseFloat(cartData.presentmentCurrencyRate);
                let appliesToEachItem = ruleValue.discountAppliesToEachItem;

                if(!appliesToEachItem) {
                  totalQty = targets.reduce((sum, item) => sum + item.productVariant.quantity, 0);
                  finalPriceAfterDiscount = +(discountValue / totalQty).toFixed(2);
                }

                targets.forEach(item => {
                  const originalPrice = parseFloat(item.itemPrice);
                  let discountAmount = originalPrice - (appliesToEachItem ? discountValue : finalPriceAfterDiscount);
                  if(discountAmount < 0) {
                    discountAmount = originalPrice;
                  }

                  delete item.itemPrice;
                  delete item.itemQty;
              
                  discounts.push({
                    value: {
                      fixedAmount: {
                        amount: discountAmount,
                        appliesToEachItem: true,
                      },
                    },
                    targets: [item],
                    message: ruleValue.message || discountData.discountTitle,
                    tierIndex: tierIndex,
                  });
                });
                if (firstSatisfiedTier === null || tierIndex < firstSatisfiedTier) {
                  firstSatisfiedTier = tierIndex;
                }
                if (!maxSatisfiedTier || parseFloat(tier.ruleValue.discountValue) > parseFloat(tiers[maxSatisfiedTier].ruleValue.discountValue)) {
                  maxSatisfiedTier = tierIndex;
                }
              }        
            }
        }

        if (discountSettings.type === "FIXED_PRICE") {
          if (discountApplicationStrategy === 'FIRST' && firstSatisfiedTier !== null) {
            discounts = discounts.filter(discount => discount.tierIndex === firstSatisfiedTier);
          } else if (discountApplicationStrategy === 'MAXIMUM' && maxSatisfiedTier !== null) {
            discounts = discounts.filter(discount => discount.tierIndex === maxSatisfiedTier);
          }
        }

        discounts.forEach(discount => delete discount?.tierIndex);
    
        finalResult.discounts = discounts;
        finalResult.validVariantIds = validItemsData;
        return finalResult;
      
      } catch (err) {
          gfg.utility.debugConsole("Error in prepareTargetsForTieredGiftDiscount:", err);
          return; // Return an empty discount in case of an error
      }
    },
    prepareTargetsForBuyXGetYDiscount: async function(discountData, cartData) {
      try {
        const validVariantIds = {};
        const discounts = [];
        cartData.presentmentCurrencyRate = gfg.utility.getActiveCurrencyRate(); // Set currency rate
        const tiers = discountData.discountSettings.rulesData.rulesGlobalList[0].rulesList;
        const discountSettings = discountData.discountSettings;
        const discountApplicationStrategy = discountSettings.rulesData.rulesGlobalList[0].discountApplicationStrategy;
    
        for (let tierIndex = 0; tierIndex < tiers.length; tierIndex++) {
          const tier = tiers[tierIndex];
          const buyXRule = tier.buyXRule;
          const getYRule = tier.getYRule;
          const sortBasedOn = tier.sortBasedOn;
          const sortByOrder = tier.sortByOrder;
    
          let totalBuyXQuantity = 0;
          let totalGetYQuantity = 0;
          const buyXTargetsMap = new Map();
          const getYTargetsMap = new Map();

          let getYItemsToProcess = cartData.items;
          if (sortBasedOn && sortBasedOn !== "none" && sortByOrder && sortByOrder !== "none") {
            getYItemsToProcess = gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.getSortedLineItems(getYItemsToProcess, sortBasedOn, sortByOrder);
          }
    
          // Loop through cart lines to find qualifying Buy X items
          for (let i = 0; i < cartData.items.length; i++) {
            const line = cartData.items[i];
            let lineQuantity = line.quantity;
    
            // Check if the line item meets the Buy X conditions
            const buyXResult = await gfg.customDiscountValidationFunctions.validateProductRuleForDiscountableItems(cartData, buyXRule, line);
    
            if (buyXResult) {
              totalBuyXQuantity += lineQuantity;
    
              if (!validVariantIds[`tierIndex${tierIndex}`]) {
                validVariantIds[`tierIndex${tierIndex}`] = { bXT: [line.variant_id] };
              } else {
                const bXT = validVariantIds[`tierIndex${tierIndex}`]?.bXT;
    
                if (bXT) {
                  if (!bXT.includes(line.variant_id)) {
                    bXT.push(line.variant_id);
                  }
                } else {
                  validVariantIds[`tierIndex${tierIndex}`].bXT = [line.variant_id];
                }
              }
    
              buyXTargetsMap.set(
                line.variant_id,
                (buyXTargetsMap.get(line.variant_id) || 0) + lineQuantity
              );
            }
          }
    
          const buyXItemCount = parseInt(buyXRule.itemCount);
          const getYItemCount = parseInt(getYRule.itemCount);
          const maxDiscountableSets = parseInt(tier.maxDiscountableSets);
          const adminDiscountableSets = Math.floor(totalBuyXQuantity / buyXItemCount);
          let cartDiscountableSets = Math.min(adminDiscountableSets, maxDiscountableSets);
    
          // If there are no actual sets possible
          if (cartDiscountableSets <= 0) {
            //updating if the BuyX condition was fulfilled for the specific discount 
            gfgCustomDiscount.gfgBXGY.state.BuyXConditionFulfilled[discountData.title] = false; //exclusive for storefront
            continue;
          }
          gfgCustomDiscount.gfgBXGY.state.BuyXConditionFulfilled[discountData.title] = true; //exclusive for storefront
    
          // Loop through cart lines to find qualifying Get Y items
          for (let i = 0; i < getYItemsToProcess.length; i++) {
            const line = getYItemsToProcess[i];
            let lineQuantity = line.quantity;
    
            const getYResult = await gfg.customDiscountValidationFunctions.validateProductRuleForDiscountableItems(cartData, getYRule, line);
    
            if (getYResult) {
              totalGetYQuantity += lineQuantity;
              if (!validVariantIds[`tierIndex${tierIndex}`]) {
                validVariantIds[`tierIndex${tierIndex}`] = { gYT: [line.variant_id] };
              } else {
                const gYT = validVariantIds[`tierIndex${tierIndex}`]?.gYT;
    
                if (gYT) {
                  if (!gYT.includes(line.variant_id)) {
                    gYT.push(line.variant_id);
                  }
                } else {
                  validVariantIds[`tierIndex${tierIndex}`].gYT = [line.variant_id];
                }
              }
    
              getYTargetsMap.set(
                line.variant_id,
                (getYTargetsMap.get(line.variant_id) || 0) + lineQuantity
              );
            }
          }
    
          // Calculate discount based on cartDiscountableSets and the quantity needed for Get Y
          let totalGetYQuantityNeeded = cartDiscountableSets * getYItemCount;
          const commonProducts = new Map([...buyXTargetsMap].filter(([buyXId, buyXQty]) => getYTargetsMap.has(buyXId) && getYTargetsMap.get(buyXId) === buyXQty));
          const commonProductsQty = Array.from(commonProducts.values()).reduce((acc, qty) => acc + qty, 0);
          const featureDate = new Date("Mon Nov 18 2024 17:00:00 GMT+0530 (India Standard Time)").getTime();
          const discountDate = new Date(discountData.createdAt).getTime(); //using createdAt instead of discountCreatedAt as we are using db data
          //we deployed fix for buyX getX scenario on 11/18/2024, so if discount is created before this date, then we won't run the logic below
          if(commonProductsQty > 0) { 
            let noOfSetsMadeWhenCommonProductsArePresent = 0;
            const diffBuyXQty = totalBuyXQuantity - commonProductsQty;
            const diffGetYQty = totalGetYQuantity - commonProductsQty;

            // Step 1: Sets from diff_buy_x + diff_get_y
            const diffProductsSets = Math.floor(Math.min(diffBuyXQty / buyXItemCount, diffGetYQty / getYItemCount));

            // Step 2: Sets where remaining diff_buy_x acts as buyX and common items act as getY
            const remainingDiffBuyXAfterDiffSets = diffBuyXQty - (diffProductsSets * buyXItemCount);
            const setsFromDiffBuyxWithCommonGety = Math.floor(Math.min(
              remainingDiffBuyXAfterDiffSets / buyXItemCount,
              commonProductsQty / getYItemCount
            ));

            // Step 3: Remaining common products after being used as getY
            const remainingCommonAfterGety = commonProductsQty - (setsFromDiffBuyxWithCommonGety * getYItemCount);

            // Step 4: Sets where common items act as buyX and remaining diff_get_y acts as getY
            const remainingDiffGetYAfterDiffSets = diffGetYQty - (diffProductsSets * getYItemCount);
            const setsFromCommonBuyxWithDiffGety = Math.floor(Math.min(
              remainingCommonAfterGety / buyXItemCount,
              remainingDiffGetYAfterDiffSets / getYItemCount
            ));

            // Step 5: Remaining common products after being used as both getY and buyX
            const remainingCommonForDoubleDuty = remainingCommonAfterGety - (setsFromCommonBuyxWithDiffGety * buyXItemCount);

            // Step 6: Sets from remaining common products doing double-duty (both buyX and getY)
            const commonProductsSets = Math.floor(remainingCommonForDoubleDuty / (buyXItemCount + getYItemCount));

            // Total sets from all combinations
            noOfSetsMadeWhenCommonProductsArePresent = diffProductsSets + setsFromDiffBuyxWithCommonGety + setsFromCommonBuyxWithDiffGety + commonProductsSets;

            noOfSetsMadeWhenCommonProductsArePresent = Math.min(noOfSetsMadeWhenCommonProductsArePresent, maxDiscountableSets);
            totalGetYQuantityNeeded = getYItemCount * noOfSetsMadeWhenCommonProductsArePresent;

            //if no. of max sets are not reached, then we need to check if we can make more sets with the remaining common products
            if(noOfSetsMadeWhenCommonProductsArePresent < maxDiscountableSets) {
              const remainingCommonProductsQty = remainingCommonForDoubleDuty - commonProductsSets * (buyXItemCount + getYItemCount);
              const remainingDiffProductXQty = remainingDiffBuyXAfterDiffSets - setsFromDiffBuyxWithCommonGety * buyXItemCount;
              // Only count non-common getY items remaining (common items can't be both buyX and getY in same set)
              const remainingDiffProductYQty = diffGetYQty - diffProductsSets * getYItemCount - setsFromCommonBuyxWithDiffGety * getYItemCount;

              if (remainingDiffProductXQty + remainingCommonProductsQty >= buyXItemCount) {
                const commonProductsRemainingAfterMakingBuyXSet = remainingCommonProductsQty - Math.max(0, buyXItemCount - remainingDiffProductXQty);
                totalGetYQuantityNeeded += Math.min(commonProductsRemainingAfterMakingBuyXSet + remainingDiffProductYQty, getYItemCount);
                noOfSetsMadeWhenCommonProductsArePresent++;
                cartDiscountableSets = noOfSetsMadeWhenCommonProductsArePresent; // exclusive for storefront
              }
            }

            // Calculate allowedGetYQuantity for common products case
            // This represents how many getY items COULD be discounted based on buyX availability
            if (diffBuyXQty === 0 && diffGetYQty === 0) {
              // Only common products exist
              // First, calculate double-duty sets
              const fullDoubleDutySets = Math.floor(commonProductsQty / (buyXItemCount + getYItemCount));
              // Remaining common products after double-duty can act as buyX for potential external getY
              const remainingCommonAfterDoubleDuty = commonProductsQty - fullDoubleDutySets * (buyXItemCount + getYItemCount);
              const additionalBuyXSets = Math.floor(remainingCommonAfterDoubleDuty / buyXItemCount);
              // Total potential sets = double-duty sets + additional buyX sets (for external getY user might add)
              const totalPotentialSets = Math.min(fullDoubleDutySets + additionalBuyXSets, maxDiscountableSets);
              gfgCustomDiscount.gfgBXGY.state.allowedGetYQuantity[discountData.title] = totalPotentialSets * getYItemCount;
            } else {
              // Mixed case - buyX items (buyX-only + common) can potentially find external getY
              gfgCustomDiscount.gfgBXGY.state.allowedGetYQuantity[discountData.title] =
                Math.min(Math.floor(totalBuyXQuantity / buyXItemCount), maxDiscountableSets) * getYItemCount;
            }
          } else {
            // No common products or legacy discount - use simple calculation
            gfgCustomDiscount.gfgBXGY.state.allowedGetYQuantity[discountData.title] = cartDiscountableSets * getYItemCount;
          }
          let remainingGetYQuantityToDiscount = Math.min(totalGetYQuantityNeeded, totalGetYQuantity);
          const targets = [];
          //reversing the map to apply the discount on the items that were added first
          let reversedGetYTargetsMap = getYTargetsMap;
          if(!sortBasedOn || sortBasedOn == "none" || !sortByOrder || sortByOrder == "none") {
            reversedGetYTargetsMap = new Map([...getYTargetsMap].reverse());
          }
          for (const [productId, productQty] of reversedGetYTargetsMap.entries()) {
            if (remainingGetYQuantityToDiscount <= 0) {
              break;
            }
    
            const quantityToDiscount = Math.min(productQty, remainingGetYQuantityToDiscount);
            targets.push({
              productVariant: {
                id: productId,
                quantity: quantityToDiscount,
              },
            });
            remainingGetYQuantityToDiscount -= quantityToDiscount;
          }
    
          if (targets.length > 0) {
            if (discountSettings.type == "FIXED") {
              discounts.push({
                value: {
                  fixedAmount: {
                    amount: parseFloat(tier.discountValue),
                    appliesToEachItem: tier.appliesToEachItem,
                  },
                },
                targets: targets,
                message: tier.message || discountData.discountTitle,
              });
            } else if (discountSettings.type == "PERCENTAGE") {
              discounts.push({
                value: {
                  percentage: {
                    value: parseFloat(tier.discountValue),
                  },
                },
                targets: targets,
                message: tier.message || discountData.discountTitle,
              });
            } else if (discountSettings.type === "FIXED_PRICE") {
              const lineItemsMap = new Map();
              cartData.items.forEach(line => {
                lineItemsMap.set(line.variant_id, line);
              });

              let totalQty = 0;
              let finalPriceAfterDiscount = 0;
              let discountValue = parseFloat(tier.discountValue) * parseFloat(cartData.presentmentCurrencyRate);
              let appliesToEachItem = tier.appliesToEachItem;
              
              //here we will calculate the final price after discount based on the discountable items quantity for the case where discount is not applied to each item
              if (!appliesToEachItem) {
                totalQty = targets.reduce((sum, item) => sum + item.productVariant.quantity, 0);
                finalPriceAfterDiscount = +(discountValue / totalQty).toFixed(2);
              }

              targets.forEach(item => {
                const itemData = lineItemsMap.get(item.productVariant.id);
                const itemPrice = itemData.price / 100;
                let discountAmount = itemPrice - (appliesToEachItem ? discountValue : finalPriceAfterDiscount);
                if (discountAmount < 0) {
                  discountAmount = itemPrice;
                }
                discounts.push({
                  value: {
                    fixedAmount: {
                      amount: discountAmount,
                      appliesToEachItem: true,
                    },
                  },
                  targets: [{ productVariant: item.productVariant }],
                  message: discountData?.discountSettings?.message || discountData.discountTitle,
                });
              });
            }
          }
        }
    
        return { validVariantIds, discounts }; // Return both valid items data and the discounts array
      } catch (err) {
        gfg.utility.debugError("Error in prepareTargetsForBuyXGetYDiscount:", err);
        return { validVariantIds: {}, discounts: [] }; // Return empty objects in case of an error
      }
    },    
    toCustomBase64: function(data) {
      try {
        let customBase64Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
        let output = '';
        let buffer = 0;
        let bitsInBuffer = 0;

        for (let i = 0; i < data.length; i++) {
          buffer = (buffer << 8) | data.charCodeAt(i);
          bitsInBuffer += 8;

          while (bitsInBuffer >= 6) {
            const index = (buffer >> (bitsInBuffer - 6)) & 0x3f;
            output += customBase64Alphabet[index];
            bitsInBuffer -= 6;
          }
        }

        if (bitsInBuffer > 0) {
          const index = (buffer << (6 - bitsInBuffer)) & 0x3f;
          output += customBase64Alphabet[index];
        }

        return output;
      } catch(err) {
        gfg.utility.debugError("err inside toCustomBase64", err);
      }
    },
    fromCustomBase64: function(data) {
      try {
        let customBase64Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
        let output = '';
        let buffer = 0;
        let bitsInBuffer = 0;
      
        for (let i = 0; i < data.length; i++) {
          const index = customBase64Alphabet.indexOf(data[i]);
          if (index === -1) {
            throw new Error('Invalid character in custom base64 data');
          }
      
          buffer = (buffer << 6) | index;
          bitsInBuffer += 6;
      
          if (bitsInBuffer >= 8) {
            const charCode = (buffer >> (bitsInBuffer - 8)) & 0xff;
            output += String.fromCharCode(charCode);
            bitsInBuffer -= 8;
          }
        }
      
        return output;
      } catch(err) {
        gfg.utility.debugError("err inside fromCustomBase64", err);
      }
    },
    encryptData: function(data, key) {
      try {
        let result = '';
        for (let i = 0; i < data.length; i++) {
          // XOR each character with the key character
          result += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        // Convert the result to custom Base64 to make it shorter
        result = this.toCustomBase64(result);
        return result;
      } catch(err) {
        gfg.utility.debugError("err inside encryptData fn", err);
      }
    },
    decryptData: function(data, key) {
      try {
        // Convert from custom Base64 to string
        let decodedData = this.fromCustomBase64(data);
        let result = '';
        for (let i = 0; i < decodedData.length; i++) {
          // XOR each character with the key character
          result += String.fromCharCode(decodedData.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return result;
      } catch(err) {
        gfg.utility.debugError("err inside decryptData fn", err);
      }
    },
    getExistingCartAttributes: function (cartData, customDiscountKey = "_kite_cfData") {
      try {
        let currentCartAttributes = cartData.attributes;
        let existingData = currentCartAttributes[customDiscountKey];
      
        // Decrypt and parse the existing data if necessary
        return existingData ? JSON.parse(existingData) : {};
      } catch(err) {
        gfg.utility.debugError("err inside getExistingCartAttributes", err);
      }
    },
    updateCartAttributesWithCFData: async function (newAttrData, customDiscountKey = "_kite_cfData") {
      try {
        let attributeValue = "";
        if (Object.keys(newAttrData).length > 0) {
          attributeValue = JSON.stringify(newAttrData);
        }
        const dataToBeUpdated = {
          attributes: {
            [customDiscountKey]: attributeValue || "",
          },
        };
        const result = await gfg.utility.updateCart(dataToBeUpdated);

        const shopName = window.Shopify.shop;
        const validShopNames = ["myriadbeautystore.myshopify.com", "pos-ui-extension-testing3.myshopify.com", "pureleisure.myshopify.com"]
        if(validShopNames.includes(shopName)) {
          gfg.f.updateCartState();
        }

        return result;
      } catch(err) {
        gfg.utility.debugError("err inside updateCartAttributesWithCFData", err);
        return null;
      }
    }
  },
  gfgBXGY: {
    state:{
      isFirstRenderForCustomBXGY: true,
      productsDataForBuyXGetY: {},
      BuyXConditionFulfilled: {},
      allowedGetYQuantity: {},
    },
    init: async function (discountTitle) {
      try {
        const customDiscounts = gfg.settings.customDiscount;
        const customDiscount = customDiscounts.find((discountData) => discountData.title === discountTitle)
        const page_type = gfg.f.getPageType();
        if (page_type === "product") {
          gfgCustomDiscount.gfgBXGY.initialize(customDiscount, "PRODUCT_PAGE");
        }
  
        if (page_type === "cart") {
          gfgCustomDiscount.gfgBXGY.initialize(customDiscount, "CART_PAGE");
        }
  
        if (page_type !== "cart") {
          gfgCustomDiscount.gfgBXGY.initialize(customDiscount, "SIDE_CART");
        }
      } catch (error) {
        gfg.utility.debugConsole("Error inside gfgCustomDiscount gfgBXGY init fn", error);
      }
    },
    initialize: async function (customDiscount, pageType) {
      try {
        await gfgCustomDiscount?.gfgBXGY?.f?.getDiscountEligibleProducts(customDiscount);
        const shouldRenderWidget = await gfgCustomDiscount.gfgBXGY.f.checkIfWidgetShouldBeVisible(customDiscount, pageType)
        
        if(!shouldRenderWidget) {
          return;
        }

        const isBuyXGetYWidgetDisabled = await gfgCustomDiscount.gfgBXGY.f.checkIfGetYProductsCanBeAddedToCart(customDiscount);
        customDiscount.isBuyXGetYWidgetDisabled = isBuyXGetYWidgetDisabled;

        let gfgPreparedCustomDiscountWidget = gfgCustomDiscount.gfgBXGY.f.prepareUI(customDiscount, pageType);
        const preparedBXGYWidgetUI = [{ generatedUI: gfgPreparedCustomDiscountWidget, offer: customDiscount }];
        gfgCustomDiscount.f.insertIntoPageWrapper(preparedBXGYWidgetUI, pageType, "CUSTOM_DISCOUNT");
        gfgCustomDiscount.gfgBXGY.actions.registerActions(pageType)
      } catch (error) {
        gfg.utility.debugError("Error inside gfgCustomDiscount gfgBXGY initialize fn", error);
      }
    },
    f:{
      updateBXGYWidgetState: async function (discountId) {
        try {
          const discounts = [...gfg.settings.customDiscount, ...gfg.settings.consolidatedCustomDiscount]
          let discountData = discounts.find((discount) => discount._id === discountId)
          if(discountData.discountFunctionType == "CONSOLIDATED_BXGY_DISCOUNT") {
            discountData = gfgConsolidatedCustomDiscount.gfgDynamicBogo.f.convertCCDSchemaToDynamicBogoSchema(discountData);
          }
          if(discountData) {
            let cartData = await gfg.utility.getCartV2();
           
            const isBuyXGetYWidgetDisabled = await gfgCustomDiscount.gfgBXGY.f.checkIfGetYProductsCanBeAddedToCart(discountData);
            let discountWidgets = document.querySelectorAll(`[id*="${discountData.title}_"]`);
            if(gfg.state.shadowRoot.isDetected){
              const shadowRootWidgets = gfg.state.shadowRoot.reference.querySelectorAll(`[id*="${discountData.title}_"]`);
              discountWidgets = [...discountWidgets, ...shadowRootWidgets];
            }
           
            
            if(discountWidgets.length > 0) {
              discountWidgets.forEach((discountWidget) => {
              let widgetBtns = discountWidget.querySelectorAll([".gfgBuyXGetYProductSelectBtn", ".gfgBuyXGetYProductAddToCartBtn"]);
              if(gfg.state.shadowRoot.isDetected){
                const shadowRootWidgetBtns = gfg.state.shadowRoot.reference.querySelectorAll([".gfgBuyXGetYProductSelectBtn", ".gfgBuyXGetYProductAddToCartBtn"]);
                widgetBtns = [...widgetBtns, ...shadowRootWidgetBtns];
              }

              widgetBtns.forEach((btn) => {
                if(isBuyXGetYWidgetDisabled) {
                  btn.classList.add("disabled");
                } else {
                  btn.classList.remove("disabled");
                }
              })
            })
            }

          }
        } catch (error) {
          gfg.utility.debugError("Error inside gfgBXGY updateBXGYWidgetState", error);
        }
      },
      getDiscountEligibleProducts : async function (discountData) {
        try {
          if(discountData.discountFunctionType == "BUYX_GETY_DISCOUNT") {
            const getYRule = discountData?.discountSettings?.rulesData?.rulesGlobalList?.[0]?.rulesList?.[0]?.getYRule;
            const {ruleType, ruleValue} = getYRule;
            const compatibleRuleTypes = ["products", "collections", "productVariants", "productTags", "productTypes"]
            if(!compatibleRuleTypes.includes(ruleType) || ruleValue?.operatorType != "include") {
              return;
            }
            let getYProductData;
  
            if(ruleType === "products" || ruleType === "productVariants") {
              const productIds = ruleValue?.products?.map((product => product.productId))
              getYProductData = await gfg.customDiscountValidationFunctions.getProductsDataByProductIds(productIds, 5);
  
              if(ruleType === "productVariants" ) {
                for(let i = 0; i < getYProductData.length; i++) {
                  const productFromAdmin = ruleValue?.products[i];
                  const productForStoreFront = getYProductData[i];
                  const validVariantIds = productFromAdmin?.variants?.map((variant) => variant?.variantGraphqlId)
                  
                  productForStoreFront.variants = productForStoreFront.variants.filter((variant) => validVariantIds.includes(variant.id));
                  getYProductData[i] = productForStoreFront;
                }
              }
              gfg.utility.debugConsole("all products data for BuyXGetY", getYProductData)
            }
            if(ruleType === "collections") {
              const collectionsIds = ruleValue?.collections?.map((collection => collection.id))
              getYProductData = await gfg.customDiscountValidationFunctions.getProductsDataFromCollectionIds(collectionsIds, 5);
              gfg.utility.debugConsole("all products data from collection for BuyXGetY", getYProductData) 
            }
            if(ruleType === "productTags") {
              const tags = ruleValue?.tags;
              getYProductData = await gfg.customDiscountValidationFunctions.getProductsDataByProductTags(tags, 5);
              gfg.utility.debugConsole("all products data from productTags for BuyXGetY", getYProductData);
            }
            if(ruleType === "productTypes") {
              const types = ruleValue?.types;
              getYProductData = await gfg.customDiscountValidationFunctions.getProductsDataByProductTypes(types, 5);
              // gfg.utility.debugConsole("all products data from productTypes for BuyXGetY", getYProductData);
              gfg.utility.debugConsole("all products data from productTypes for BuyXGetY", getYProductData);
            }
            
            //this will filter the undefined products data from going forward 
            getYProductData = getYProductData.filter((product) => product)
            gfgCustomDiscount.gfgBXGY.state.productsDataForBuyXGetY[discountData?.title] = getYProductData;
          }
        } catch (error) {
          gfg.utility.debugError("error inside gfgBXGY getDiscountEligibleProducts", error);
        }
      }, 
      getVariantPrices: function (productData, discountSettings, variantId) {
        try {
          const { discountType, discountValue } = discountSettings;
          const variantData = productData?.variants?.find((variant) => variant.id === variantId)
          let variantPrice = variantData?.price?.amount;
  
          let variantDiscountedPrice;
          if(discountType == "PERCENTAGE") {
            variantDiscountedPrice = (Number(variantPrice) - (Number(variantPrice) * Number(discountValue) / 100)).toFixed(2);
          }
          
          if(discountType == "FIXED") {
            variantDiscountedPrice = Math.max((Number(variantPrice) - Number(discountValue)).toFixed(2), 0.00);
          }
          
          if(discountType == "FIXED_PRICE") {
            variantDiscountedPrice = Math.min(Number(variantPrice), Number(discountValue)).toFixed(2);
          }
  
          return { 
            variantPrice, 
            variantDiscountedPrice 
          };
      } catch (error) {
        gfg.utility.debugError("error inside gfgBXGY getVariantPrices", error); 
      }
      },
      getProductDataFromIndex: function (event, productIndex, pageType) {
        try {
          const discountTitle = event?.target?.closest?.(".gfgBuyXGetYCustomDiscountParentContainer")?.id.replace(`_${pageType}`, "");
          const productsList = gfgCustomDiscount?.gfgBXGY?.state?.productsDataForBuyXGetY[discountTitle];
          return productsList[productIndex];
        } catch (error) {
          gfg.utility.debugError("error inside gfgBXGY getProductDataFromIndex", error); 
        }
      },
      removeWidgetIfAlreadyExists: (customDiscount, pageType) => {
        try {
          const discountWidget = document.getElementById(`${customDiscount?.title}_${pageType}`);
          if(discountWidget) {
            discountWidget.remove();
          }
        } catch (error) {
          gfg.utility.debugError("Error inside gfgBXGY removeWidgetIfAlreadyExists", error); 
        }
      },
      addGetYEligibleItemToCart: async function (variantId, discountDetails) {
        try {
          const items = [];
          const lineItemProperties = {
            _rule_id: discountDetails.discountFunctionType,
            _kite_promo_name : discountDetails?.discountTitle
          }
  
          items.push({ id: variantId, quantity: 1, properties: lineItemProperties })
          let customDiscountProductData = await gfg.utility.addToCartV2({ items: items })
          if(customDiscountProductData){
              gfg.utility.BXGYActionsAfterAddToCart();
              gfgCustomDiscount.gfgBXGY.f.updateBXGYWidgetState(discountDetails?.discountId);
              return true
          }
          return false
  
        } catch (error) {
          gfg.utility.debugError("Error inside gfgBXGY addGetYEligibleItemToCart", error); 
        }
      },
      checkIfGetYProductsCanBeAddedToCart: async function (customDiscount) {
        try {
          
          // const cartData = await gfg.utility.getCart();
          let cartData = await gfg.utility.getCartV2();
          

          const cartItems = cartData?.items || [];
          if(cartItems.length == 0) {
            return true;
          }

          let cartItemsWithDiscount = 0;
          const allowedGetYQuantity = gfgCustomDiscount.gfgBXGY.state.allowedGetYQuantity[customDiscount?.title] || 0;

          cartItems.forEach((item) => {
            item.discounts.forEach((discount) => {
              const discountMessage = customDiscount?.discountSettings.rulesData?.rulesGlobalList?.[0]?.rulesList?.[0]?.message
              if(discount.title === customDiscount?.title || discount?.title === discountMessage) {
                cartItemsWithDiscount += item.quantity;
              }
            })
          })

          return cartItemsWithDiscount >= allowedGetYQuantity;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgBXGY checkIfGetYProductsCanBeAddedToCart", error); 
        }
      },
      checkIfWidgetShouldBeVisible: async function (customDiscount, pageType) {
        try {
          const getYRule = customDiscount?.discountSettings?.rulesData?.rulesGlobalList?.[0]?.rulesList?.[0]?.getYRule
          if(!customDiscount) {
            return false;
          }

          //this means BUYX condition for BUYX_GETY_DISCOUNT is not fulfilled
          
          const isBuyXConditionFulfilled = gfgCustomDiscount.gfgBXGY.state.BuyXConditionFulfilled[customDiscount?.title]
          const alwaysKeepVisible = customDiscount?.widgetSettings?.displaySettings?.alwaysKeepVisible;

          if(
            !alwaysKeepVisible &&
            !isBuyXConditionFulfilled &&
            customDiscount?.discountFunctionType === "BUYX_GETY_DISCOUNT"
          ) {
            gfgCustomDiscount.gfgBXGY.f.removeWidgetIfAlreadyExists(customDiscount, pageType);
            return false;
          }
  
          if(!customDiscount?.widgetSettings) {
            return false;
          }
          const isExcludeCondition = getYRule?.ruleValue?.operatorType === "exclude";
          if(isExcludeCondition) {
            return false;
          }
          const compatibleRuleTypes = ["products", "collections", "productVariants", "productTags", "productTypes"]
          if(!compatibleRuleTypes.includes(getYRule.ruleType)) {
            return false;
          }
  
          const isActiveCampaign = gfg.customDiscountValidationFunctions.checkForActiveCampaign(customDiscount)
          if (!isActiveCampaign) {
            return false;
          }
  
          const getYProducts = gfgCustomDiscount?.gfgBXGY?.state?.productsDataForBuyXGetY[customDiscount?.title];
          if(getYProducts.length == 0) {
            return false;
          }

          const isRelevantToCurrentPage = await gfg.customDiscountValidationFunctions.checkCustomDiscountWidgetIsRelevantToCurrentPage(customDiscount, pageType);
          if (!isRelevantToCurrentPage) {
            return false;
          }
  
  
          return true;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgCustomDiscount gfgBXGY checkIfWidgetShouldBeVisible fn", error); 
        }
      },
      prepareVariantDetailsBody: function (productData, variantId, discountSettings) {
        try {
          const currencySymbol = gfg.utility.getCurrencySymbol()
          const variantData = productData?.variants?.find((variant) => variant.id === variantId)
          const {variantPrice, variantDiscountedPrice } = gfgCustomDiscount.gfgBXGY.f.getVariantPrices(productData, discountSettings, variantId)

          const variantPriceBlock = `<span class="currencySymbol">${currencySymbol}</span><span class="variantPrice">${variantPrice}</span>`
          const variantDiscountedPriceBlock = `<span class="currencySymbol">${currencySymbol}</span><span class="variantDiscountedPrice">${variantDiscountedPrice}</span>`
  
          const productImage = gfgCustomDiscount.utility.createElementWithAttributes("img", { class : "gfgBuyXGetYVariantSelectorProductImage", src: variantData?.image?.originalSrc });
          const productTitle = gfgCustomDiscount.utility.createElementWithAttributes("div", { class : "gfgBuyXGetYProductTitle", innerText: productData?.title });
          const productDiscountedPrice = gfgCustomDiscount.utility.createElementWithAttributes("div", { class : "gfgBuyXGetYProductDiscountedPrice", innerHTML: variantDiscountedPriceBlock });
          const productOriginalPrice = gfgCustomDiscount.utility.createElementWithAttributes("div", { class : "gfgBuyXGetYProductOriginalPrice", innerHTML: variantPriceBlock });
          
          const mainBody = gfgCustomDiscount.utility.createElementWithAttributes("div", { class : "gfgBuyXGeyYProductDetailsBody gfgRowFlexContainer" });
          const productDetailsContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", { class : "gfgBuyXGetYProductDetailsContainer gfgColFlexContainer" });
          const productPriceContainer =  gfgCustomDiscount.utility.createElementWithAttributes("div", { class : "gfgRowFlexContainer" });
  
          productPriceContainer.append(productDiscountedPrice, productOriginalPrice)
          productDetailsContainer.append(productTitle, productPriceContainer)
          mainBody.append(productImage, productDetailsContainer)
  
          const bodyWrapper = gfgCustomDiscount.utility.createElementWithAttributes("div", { class : "gfgBuyXGeyYProductDetailsBodyWrapper" });
          bodyWrapper.append(mainBody);
  
          return bodyWrapper;
  
        } catch (error) {
          gfg.utility.debugError("error inside gfgBXGY prepareVariantDetailsBody", error); 
        }
      },
      prepareVariantSelector: function (productData, variantId,  discountSettings, widgetSettings, productIndex, isSingleProductCard, isBtnDisabled) {
        try {

          let currLocale = gfgCustomDiscount.utility.checkMultipleLanguagePresent(widgetSettings?.widgetBodyTextContent) ? gfg.utility.getLocale() : "en";
          if(!widgetSettings?.widgetBodyTextContent?.[currLocale]?.addToCartButtonText) {
            currLocale = "en";
          }
          const addToCartBtnText = widgetSettings?.widgetBodyTextContent?.[currLocale]?.addToCartButtonText || "Add to Cart";
          const outOfStockBtnText = widgetSettings?.widgetBodyTextContent?.[currLocale]?.outOfStockButtonText || "Out of Stock";

          const gfgParentContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", { class : `gfgBuyXGetYVariantSelector gfgColFlexContainer ${isSingleProductCard ? "gfgBuyXGetYSingleProductCard" : ""}`, "data-productindex" : productIndex });
          const backButton = gfgCustomDiscount.utility.createElementWithAttributes("div", { class : "gfgBuyXGetYVariantSelectorBackBtn", innerHTML: CONSTANT_ARROW_SVG_APP7EXT });
          const gfgMainBody = gfgCustomDiscount.gfgBXGY.f.prepareVariantDetailsBody(productData, variantId, discountSettings);
          const gfgMainBodyContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", { class : "gfgBuyXGeyYProductDetailsContainer" });
          gfgMainBodyContainer.append(gfgMainBody);

          const gfgSelectInputContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgBuyXGetYVariantSelectorSelectInputContainer" })
  
          // Check if the initial variant is out of stock
          const initialVariant = productData?.variants?.find(v => v?.id === variantId) || productData?.variants?.[0];
          const isInitialVariantOutOfStock = !initialVariant?.availableForSale;

          if(productData?.variants?.length > 1) { //if there is only one variant, then there is no need to prepare the select input options
            const gfgSelectInputLabel = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgBuyXGetYVariantSelectorSelectInputLabel", innerText: "Variants" })
            const gfgSelectInputWrapper = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgBuyXGetYVariantSelectorSelectInputWrapper" });
            const gfgSelectInput = gfgCustomDiscount.utility.createElementWithAttributes("select", {
              class: "gfgBuyXGetYVariantSelectorSelectInput",
              style: `background:${widgetSettings?.styleSettings?.widgetDropdownColor || "#ffffff"} ;`,
            });
            const gfgSelectInputIcon = gfgCustomDiscount.utility.createElementWithAttributes("img", { class: "gfgBuyXGetYVariantSelectorSelectInputIcon", src: "https://d1cjetlwgplgi5.cloudfront.net/public/CaretDown.svg" });

            for(let variant of productData?.variants) {
              const option = gfgCustomDiscount.utility.createElementWithAttributes("option", { class : "variantSelectorOption", innerText: variant?.title, value: variant?.id});
              gfgSelectInput.append(option)
            }
            gfgSelectInputWrapper.append(gfgSelectInput, gfgSelectInputIcon)
            gfgSelectInputContainer.append(gfgSelectInputLabel, gfgSelectInputWrapper);
          }

          // Determine button state based on initial variant availability
          const buttonText = isInitialVariantOutOfStock ? outOfStockBtnText : addToCartBtnText;
          const isButtonDisabled = isBtnDisabled || isInitialVariantOutOfStock;

          const gfgAddToCartButton = gfgCustomDiscount.utility.createElementWithAttributes("button", {
            class: `gfgBuyXGetYProductAddToCartBtn gfgBuyXGetYProductBtn gfgBuyXGetYVariantScreenAddToCartBtn ${isButtonDisabled && "disabled"}`,
            innerText: buttonText,
            style: `background:${widgetSettings?.styleSettings?.widgetButtonColor || "#000000"}; color:${widgetSettings?.styleSettings?.widgetBackgroundColor || "#ffffff"};`,
            'data-productindex': productIndex
          });
  
          gfgParentContainer.append((isSingleProductCard ? "" : backButton), gfgMainBody, gfgSelectInputContainer, gfgAddToCartButton)
  
          return gfgParentContainer;
        } catch (error) {
            gfg.utility.debugError("error in gfgBXGY prepareVariantSelector", error);
        }
      },
      prepareProductCard: function (product, customDiscount, productIndex) {
        try {
          const { widgetSettings, discountSettings } = customDiscount;
          const neededDiscountDetails = {
            discountType: discountSettings?.type, 
            discountValue: discountSettings?.rulesData?.rulesGlobalList?.[0]?.rulesList?.[0]?.discountValue,
          }
          const { variantPrice: productPrice, variantDiscountedPrice: productDiscountedPrice } =
            gfgCustomDiscount?.gfgBXGY?.f?.getVariantPrices(product, neededDiscountDetails, product?.variants?.[0]?.id);

          const currencySymbol = gfg.utility.getCurrencySymbol()
          const productPriceBlock = `<span class="currencySymbol">${currencySymbol}</span><span class="variantPrice">${productPrice}</span>`
          const productDiscountedPriceBlock = `<span class="currencySymbol">${currencySymbol}</span><span class="variantDiscountedPrice">${productDiscountedPrice}</span>`

          let currLocale = gfgCustomDiscount.utility.checkMultipleLanguagePresent(widgetSettings?.widgetBodyTextContent) ? gfg.utility.getLocale() : "en";
          if(!widgetSettings?.widgetBodyTextContent?.[currLocale]?.selectButtonText) {
            currLocale = "en";
          }
          const selectBtnText = widgetSettings?.widgetBodyTextContent?.[currLocale]?.selectButtonText || "Select";
          const addToCartBtnText = widgetSettings?.widgetBodyTextContent?.[currLocale]?.addToCartButtonText || "Add to Cart";
          const outOfStockText = widgetSettings?.widgetBodyTextContent?.[currLocale]?.outOfStockButtonText || "Out of Stock";

          let productInnerText = product.variants.length > 1 ? selectBtnText : addToCartBtnText;
          if(!product.availableForSale) {
            productInnerText = outOfStockText;
          }
          const productImage = gfgCustomDiscount.utility.createElementWithAttributes("img", { class: "gfgBuyXGetYProductImage", src: product?.featuredImage?.originalSrc });
          const productTitle = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgBuyXGetYProductTitle", innerText: product.title });
          const productPriceContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgRowFlexContainer gfgProductCardPriceContainer" });
          const productPriceEle = gfgCustomDiscount.utility.createElementWithAttributes("div", { class:"gfgBuyXGetYProductDiscountedPrice", innerHTML: productDiscountedPriceBlock  })
          const productTitleAndPriceContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgColFlexContainer gfgTitleAndPriceContainer"}) 
          const productSelectButton = gfgCustomDiscount.utility.createElementWithAttributes("button", {
            class: `gfgBuyXGetYProductBtn ${product.variants.length > 1 ? "gfgBuyXGetYProductSelectBtn" : "gfgBuyXGetYProductAddToCartBtn"} ${(customDiscount.isBuyXGetYWidgetDisabled || !product.availableForSale) && "disabled"}`,
            innerText: productInnerText,
            "data-productindex" : productIndex,
            style: `background:${widgetSettings?.styleSettings?.widgetButtonColor || "#000000"}; color:${widgetSettings?.styleSettings?.widgetBackgroundColor || "#ffffff"};`
          });
  
          // if(customDiscount.isBuyXGetYWidgetDisabled) {
          //   productSelectButton.disabled = true;
          // }
          
          const productOriginalPrice = gfgCustomDiscount.utility.createElementWithAttributes("div", { class:"gfgBuyXGetYProductOriginalPrice", innerHTML: productPriceBlock })
          productPriceContainer.append(productPriceEle, productOriginalPrice)
          
          productTitleAndPriceContainer.append(productTitle, productPriceContainer)
  
          const productCardWrapper = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgBuyXGetYProductCardWrapper" });
          productCardWrapper.append(productImage, productTitleAndPriceContainer, productSelectButton)
  
          return productCardWrapper;
        } catch (error) {
          gfg.utility.debugError("error in gfgBXGY prepareProductCard", error);
        }
      },
      prepareProductsList: function (customDiscount) {
        try {
          const productsList = gfgCustomDiscount?.gfgBXGY?.state?.productsDataForBuyXGetY[customDiscount?.title];
          const { discountSettings } = customDiscount;
          if (productsList.length == 1) {
            const neededDiscountSettings = {
              discountType: discountSettings?.type,
              discountValue: discountSettings?.rulesData?.rulesGlobalList?.[0]?.rulesList?.[0]?.discountValue,
              discountFunctionType: customDiscount?.discountFunctionType,
              discountTitle: customDiscount?.title,
            }
            const singleProductCard = gfgCustomDiscount.gfgBXGY.f.prepareVariantSelector(productsList[0], productsList[0]?.variants?.[0]?.id, neededDiscountSettings, customDiscount?.widgetSettings, 0, true, customDiscount?.isBuyXGetYWidgetDisabled);
            return singleProductCard;
          } else { 

            const productListWrapper = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: `gfgBuyXGetYProductListWrapper${productsList.length == 2 ? " gfgTwoColumnGrid" : ""}${productsList.length == 3 ? " gfgThreeColumnGrid" : ""}`});

            productsList.forEach((product, index) => {
              const productCard = gfgCustomDiscount.gfgBXGY.f.prepareProductCard(product, customDiscount, index);
              if(productCard) {
                productListWrapper.append(productCard);
              }
            })
            
            return productListWrapper;
          }
        } catch (error) {
          gfg.utility.debugError("error in gfgBXGY prepareProductsList", error);
        }
      },
      prepareAccordionAction: function (customDiscount) {
        try {
          const { widgetSettings, discountSettings } = customDiscount;
  
          let currLocale = gfgCustomDiscount.utility.checkMultipleLanguagePresent(widgetSettings?.titleBar) ? gfg.utility.getLocale() : "en";
          if(!widgetSettings?.titleBar?.[currLocale]?.conditionMetHeadingText) {
            currLocale = "en";
          }
  
          const parentContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", {
            class: `gfgBuyXGetYCustomDiscountAccordionAction gfgRowFlexContainer`,
            style: 
            `background:${widgetSettings?.styleSettings?.widgetBackgroundColor || "transparent"};
            --outline-color: ${widgetSettings?.styleSettings?.widgetBorderColor || "#3c3c3c"};
            color: ${widgetSettings?.styleSettings?.widgetTextColor || "#3c3c3c"}
            `,
          });
          const widgetTitleContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgRowFlexContainer gfgBuyXGetYAccordionTitleContainer" });
          const arrowIconContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: `gfgAccordionChild gfgAccordionControl ${widgetSettings?.styleSettings?.keepOpenByDefault ? "accordion-state-open" : ""}` });
          const widgetTitleIcon = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgBuyXGetYAccordionIcon", innerHTML: SVG_ICONS[widgetSettings?.titleBar?.conditionMetIconUrl]});
          const widgetTitleText = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgAccordionChild gfgBuyXGetYAccordionTitle", innerHTML: widgetSettings?.titleBar?.[currLocale]?.conditionMetHeadingText });
          const svgIcon = widgetTitleIcon.firstChild;
          svgIcon.setAttribute("fill", widgetSettings?.styleSettings?.titleBarIconColor)

          widgetTitleContainer.append(widgetTitleIcon, widgetTitleText);
          arrowIconContainer.innerHTML = CONSTANT_ARROW_SVG_APP7EXT;
  
          parentContainer.append(widgetTitleContainer, arrowIconContainer);
  
          return parentContainer;
        } catch (error) {
          gfg.utility.debugError("error in gfgBXGY prepareAccordionAction", error);
        }
      },
      prepareAccordionBody: function (customDiscount) {
        try {
          const { widgetSettings, discountSettings } = customDiscount;
          const productsList = gfgCustomDiscount?.gfgBXGY?.state?.productsDataForBuyXGetY[customDiscount?.title];
          const isScrollArrowsNeeded = productsList?.length > 3;
          const productsListEle = gfgCustomDiscount.gfgBXGY.f.prepareProductsList(customDiscount);
          const variantSelectorContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgBuyXGetYVariantSelectorContainer" });
  
          const accordionBodyContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", {
            class: `gfgBuyXGetYCustomDiscountAccordionBodyContainer ${widgetSettings?.styleSettings?.keepOpenByDefault ? "accordion-state-open" : ""}`,
            style: `background:${widgetSettings?.styleSettings?.widgetBackgroundColor || "transparent"};
            color: ${widgetSettings?.styleSettings?.widgetTextColor || "#3c3c3c"};
            --outline-color: ${widgetSettings?.styleSettings?.widgetBorderColor || "#3c3c3c"};
            `,
          });
          const accordionBody = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgBuyXGetYCustomDiscountAccordionBody" });
          const scrollButtonLeft = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgBuyXGetYCustomDiscountScrollButton left", innerHTML: CONSTANT_ARROW_SVG_APP7EXT });
          const scrollButtonRight = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: "gfgBuyXGetYCustomDiscountScrollButton right", innerHTML: CONSTANT_ARROW_SVG_APP7EXT });
          accordionBody.append(productsListEle, variantSelectorContainer, (isScrollArrowsNeeded ? scrollButtonLeft : ""), (isScrollArrowsNeeded ? scrollButtonRight : ""));
          accordionBodyContainer.append(accordionBody);
          return accordionBodyContainer;
        } catch (error) {
          gfg.utility.debugError("error in gfgBXGY prepareAccordionBody", error); 
        }
      },
      prepareUI: function (customDiscount, pageType) {
        try {
          const { widgetSettings, discountSettings } = customDiscount;
  
          // uncomment this later
          // if(!widgetSettings) {
          //   return;
          // }
          const neededDiscountSettings = {
            discountId: customDiscount?._id,
            discountType: discountSettings?.type,
            discountValue: discountSettings?.rulesData?.rulesGlobalList?.[0]?.rulesList?.[0]?.discountValue,
            discountFunctionType: customDiscount?.discountFunctionType,
            discountTitle: customDiscount?.title,
          }
          const gfgBuyXGetYCustomDiscountParentContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", {
            id: `${customDiscount?.title}_${pageType}`,
            class: `gfgBuyXGetYCustomDiscountParentContainer_${pageType} gfgBuyXGetYCustomDiscountParentContainer`,
            "data-discountsettings": JSON.stringify(neededDiscountSettings),
            "data-widgetsettings": JSON.stringify(widgetSettings),
          });
  
          const gfgBuyXGetYCustomDiscountAccordionAction = gfgCustomDiscount.gfgBXGY.f.prepareAccordionAction(customDiscount);
          const gfgBuyXGetYCustomDiscountAccordionBodyContainer = gfgCustomDiscount.gfgBXGY.f.prepareAccordionBody(customDiscount);
  
          gfgBuyXGetYCustomDiscountParentContainer.append(gfgBuyXGetYCustomDiscountAccordionAction);
          gfgBuyXGetYCustomDiscountParentContainer.append(gfgBuyXGetYCustomDiscountAccordionBodyContainer);
  
          return gfgBuyXGetYCustomDiscountParentContainer;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgCustomDiscount gfgBXGY prepareUI fn", error);
        }
      },
    },
    actions: {
      widgetClickFunction: async function (e, pageType) {

        try {
          
          if(e.target.closest(".gfgBuyXGetYCustomDiscountAccordionAction")) {
            gfgCustomDiscount.gfgBXGY.actions.toggleAccordion(e, pageType)
            return;
          }
  
          if(e.target.classList.contains("gfgBuyXGetYProductSelectBtn")){
            e.preventDefault();
            e.stopPropagation();
            
            if(e.target.classList.contains("disabled")) {
              return;
            }
  
            gfgCustomDiscount.gfgBXGY.actions.openVariantSelector(e, pageType)
            return;
          } 
  
          if(e.target.classList.contains("gfgBuyXGetYProductAddToCartBtn")) {
            e.preventDefault();
            e.stopPropagation();
            
            if(e.target.classList.contains("disabled")) {
              return;
            }

            let selectedVariantId;
            const selectInputContainer = e.target.previousElementSibling;
            const selectInput = selectInputContainer.querySelector(".gfgBuyXGetYVariantSelectorSelectInput")
            if(e.target.classList.contains("gfgBuyXGetYVariantScreenAddToCartBtn") && selectInput) {
              selectedVariantId = selectInput.value;
            } else {
              const productIndex = Number(e?.target?.dataset?.productindex);
              const productData = gfgCustomDiscount.gfgBXGY.f.getProductDataFromIndex(e, productIndex, pageType);
              selectedVariantId = productData?.variants?.[0]?.id
            }

            selectedVariantId = selectedVariantId.split("/")[4];
            const widgetContainer = e.target.closest(`.gfgBuyXGetYCustomDiscountParentContainer_${pageType}`);
            const discountSettings = JSON.parse(widgetContainer?.dataset?.discountsettings || "");
            
            // Save identifiers BEFORE await (for re-querying after DOM might change)
            const widgetId = widgetContainer?.id;
            const buttonProductIndex = e.target.dataset.productindex;
            const isVariantScreenBtn = e.target.classList.contains("gfgBuyXGetYVariantScreenAddToCartBtn");
            
            // e.target.innerText = "Adding"
            const btnText = e.target.innerHTML;
            const textColor = e.target.style.color || "#3c3c3c";
            e.target.disabled = true;
            e.target.innerHTML = `<div class="gfgLoader" style="--gfg-loader-color:${textColor}"></div>`;

            await gfgCustomDiscount.gfgBXGY.f.addGetYEligibleItemToCart(selectedVariantId, discountSettings)

            // Re-query the button after async operation (DOM may have been re-rendered)
            let button = null;
            const buttonSelector = isVariantScreenBtn 
              ? ".gfgBuyXGetYVariantScreenAddToCartBtn" 
              : `.gfgBuyXGetYProductAddToCartBtn[data-productindex="${buttonProductIndex}"]`;

            // Try shadow root first (if detected)
            if (gfg.state.shadowRoot.isDetected && gfg.state.shadowRoot.reference) {
              const widget = gfg.state.shadowRoot.reference.querySelector(`#${widgetId}`);
              button = widget?.querySelector(buttonSelector);
            }

            // Fallback to document
            if (!button) {
              const widget = document.getElementById(`${widgetId}`);
              button = widget?.querySelector(buttonSelector);
            }

            // Restore button state if found
            if (button) {
              button.disabled = false;
              button.innerHTML = btnText;
            }
            return;
          }
  
          if(e.target.closest(".gfgBuyXGetYVariantSelectorBackBtn")) {
            e.preventDefault();
            e.stopPropagation();
  
            gfgCustomDiscount.gfgBXGY.actions.handleBackForVariantSelector(e, pageType);
            return;
          }
  
          if(e.target.closest(".gfgBuyXGetYCustomDiscountScrollButton")) {
            e.preventDefault();
            e.stopPropagation();
            gfgCustomDiscount.gfgBXGY.actions.handleScrollButtonClick(e, pageType);
            return;
          }
        } catch (error) {
          gfg.utility.debugError("Error inside gfgBXGY widgetClickFunction", error);
        }

      },
      registerActions: function (pageType) {
        try {
          let customDiscountsWidgets  = document.querySelectorAll(`.gfgBuyXGetYCustomDiscountParentContainer_${pageType}`);
          if(gfg.state.shadowRoot.isDetected){
            const shadowRootCustomDiscountsWidgets = gfg.state.shadowRoot.reference.querySelectorAll(`.gfgBuyXGetYCustomDiscountParentContainer_${pageType}`);
            customDiscountsWidgets = [...customDiscountsWidgets, ...shadowRootCustomDiscountsWidgets];
          }
          customDiscountsWidgets.forEach((customDiscountBuyXGetYAccordionRef) => {
            if(!customDiscountBuyXGetYAccordionRef) {
              throw new Error("customDiscountBuyXGetYAccordionRef was not found")
            }
            
            if(customDiscountBuyXGetYAccordionRef.dataset.actionRegistered) {
              return;
            }
            customDiscountBuyXGetYAccordionRef.addEventListener("click", async (e) => gfgCustomDiscount.gfgBXGY.actions.widgetClickFunction(e, pageType))
            customDiscountBuyXGetYAccordionRef.dataset.actionRegistered = true;

            gfgCustomDiscount.gfgBXGY.actions.registerChangeEventForVariantSelectorInput(pageType)
        })
  
        } catch (error) {
          gfg.utility.debugError("error in customDiscountLogic gfgBXGY registerActions", error);
        }
      },
      registerChangeEventForVariantSelectorInput : function (pageType) {
        try {
          const variantSelectorInput = document.querySelector(".gfgBuyXGetYVariantSelectorSelectInput");
          if(variantSelectorInput) {
            variantSelectorInput.addEventListener("change", (e) => {
              gfgCustomDiscount.gfgBXGY.actions.handleVariantChangeForVariantSelector(e, pageType);
            })

          }
        } catch (error) {
          gfg.utility.debugError("error in customDiscountLogic gfgBXGY registerChangeEventForVariantSelectorInput", error);
        }
      },
      registerGlobalClickListener: function() {
        try {
          // Attach to document (only once)
          if (!window._gfgBXGYDocumentClickRegistered) {
            window._gfgBXGYDocumentClickRegistered = true;
            
            document.addEventListener('click', async function(e) {
              const widget = e.target.closest('[class*="gfgBuyXGetYCustomDiscountParentContainer_"]');
              if (!widget) return;
              if (widget.dataset.actionRegistered) return;
              
              const match = widget.className.match(/gfgBuyXGetYCustomDiscountParentContainer_(\w+)/);
              if (!match) return;
              
              const pageType = match[1];
              await gfgCustomDiscount.gfgBXGY.actions.widgetClickFunction(e, pageType);
            });
            
            document.addEventListener('change', function(e) {
              if (!e.target.classList.contains('gfgBuyXGetYVariantSelectorSelectInput')) return;
              const widget = e.target.closest('[class*="gfgBuyXGetYCustomDiscountParentContainer_"]');
              if (!widget) return;
              if (widget.dataset.actionRegistered) return;
              
              const match = widget.className.match(/gfgBuyXGetYCustomDiscountParentContainer_(\w+)/);
              if (!match) return;
              
              const pageType = match[1];
              gfgCustomDiscount.gfgBXGY.actions.handleVariantChangeForVariantSelector(e, pageType);
            });
            
            gfg.utility.debugConsole("gfgBXGY: Global click listener registered on document");
          }
          
          // Attach to shadow root if detected (only once)
          if (gfg.state.shadowRoot.isDetected && gfg.state.shadowRoot.reference && !window._gfgBXGYShadowRootClickRegistered) {
            window._gfgBXGYShadowRootClickRegistered = true;
            const shadowRoot = gfg.state.shadowRoot.reference;
            
            shadowRoot.addEventListener('click', async function(e) {
              const widget = e.target.closest('[class*="gfgBuyXGetYCustomDiscountParentContainer_"]');
              if (!widget) return;
              if (widget.dataset.actionRegistered) return;
              
              const match = widget.className.match(/gfgBuyXGetYCustomDiscountParentContainer_(\w+)/);
              if (!match) return;
              
              const pageType = match[1];
              await gfgCustomDiscount.gfgBXGY.actions.widgetClickFunction(e, pageType);
            });
            
            shadowRoot.addEventListener('change', function(e) {
              if (!e.target.classList.contains('gfgBuyXGetYVariantSelectorSelectInput')) return;
              const widget = e.target.closest('[class*="gfgBuyXGetYCustomDiscountParentContainer_"]');
              if (!widget) return;
              if (widget.dataset.actionRegistered) return;
              
              const match = widget.className.match(/gfgBuyXGetYCustomDiscountParentContainer_(\w+)/);
              if (!match) return;
              
              const pageType = match[1];
              gfgCustomDiscount.gfgBXGY.actions.handleVariantChangeForVariantSelector(e, pageType);
            });
            
            gfg.utility.debugConsole("gfgBXGY: Global click listener registered on shadow root");
          }
          
        } catch (error) {
          gfg.utility.debugError("error in gfgBXGY registerGlobalClickListener", error);
        }
      },
      toggleAccordion: function (event) {
        try {
          const accordionAction = event.target.closest(".gfgBuyXGetYCustomDiscountAccordionAction")
          const accordionControl = accordionAction.querySelector(".gfgAccordionControl")
          const accordionBody = accordionAction.nextElementSibling;
  
          accordionControl.classList.toggle("accordion-state-open")
          accordionBody.classList.toggle("accordion-state-open")
        } catch (error) {
          gfg.utility.debugError("error in gfgBXGY toggleAccordion", error);
        }
      },
      openVariantSelector: function (event, pageType) {
        try {
          const accordionBody = event.target.closest(".gfgBuyXGetYCustomDiscountAccordionBody");
          const productIndex = Number(event?.target?.dataset?.productindex);
          const productData = gfgCustomDiscount.gfgBXGY.f.getProductDataFromIndex(event, productIndex, pageType);
          const discountSettings = JSON.parse(event?.target?.closest?.(`.gfgBuyXGetYCustomDiscountParentContainer_${pageType}`)?.dataset?.discountsettings || "");
          const widgetSettings = JSON.parse(event?.target?.closest?.(`.gfgBuyXGetYCustomDiscountParentContainer_${pageType}`)?.dataset?.widgetsettings || "");
          const variantSelectorEle = gfgCustomDiscount.gfgBXGY.f.prepareVariantSelector(productData, productData?.variants?.[0]?.id, discountSettings, widgetSettings, productIndex)
          const variantSelectorContainer = accordionBody.querySelector(".gfgBuyXGetYVariantSelectorContainer")
          variantSelectorContainer.innerHTML = ""
          variantSelectorContainer.append(variantSelectorEle)
  
          gfgCustomDiscount.gfgBXGY.actions.registerChangeEventForVariantSelectorInput(pageType);
  
          accordionBody.classList.add("variant-selector-open");
        } catch (error) {
          gfg.utility.debugError("error in gfgBXGY openVariantSelector", error);
        }
      },
  
      handleBackForVariantSelector: function (event) {
        try {
          const accordionBody = event.target.closest(".gfgBuyXGetYCustomDiscountAccordionBody");
          accordionBody.classList.remove("variant-selector-open");
          const variantSelectorContainer = accordionBody.querySelector(".gfgBuyXGetYVariantSelectorContainer")
          variantSelectorContainer.innerHTML = ""
  
        } catch (error) {
          gfg.utility.debugError("error in gfgBXGY handleBackForVariantSelector", error);
        }
      },
      handleVariantChangeForVariantSelector: function (event, pageType) {
        try {
          const selectedValue = event.target.value;
          const discountSettings = JSON.parse(event?.target?.closest?.(`.gfgBuyXGetYCustomDiscountParentContainer_${pageType}`)?.dataset?.discountsettings || "");
          const widgetSettings = JSON.parse(event?.target?.closest?.(`.gfgBuyXGetYCustomDiscountParentContainer_${pageType}`)?.dataset?.widgetsettings || "");
          const productIndex = Number(event?.target?.closest?.(".gfgBuyXGetYVariantSelector")?.dataset?.productindex);
          const productData = gfgCustomDiscount.gfgBXGY.f.getProductDataFromIndex(event, productIndex, pageType);
        
          const selectedVariantDetails = gfgCustomDiscount.gfgBXGY.f.prepareVariantDetailsBody(productData, selectedValue, discountSettings);
          const variantDetailsBodyWrapper = document.querySelector(".gfgBuyXGeyYProductDetailsBodyWrapper");
          variantDetailsBodyWrapper.innerHTML = "";
          variantDetailsBodyWrapper.append(selectedVariantDetails);

          // Update button state based on selected variant availability
          const selectedVariant = productData?.variants?.find(v => v?.id === selectedValue);
          const isOutOfStock = !selectedVariant?.availableForSale;
          const addToCartButton = event?.target?.closest?.(".gfgBuyXGetYVariantSelector")?.querySelector?.(".gfgBuyXGetYVariantScreenAddToCartBtn");
          
          if(addToCartButton) {
            let currLocale = gfgCustomDiscount.utility.checkMultipleLanguagePresent(widgetSettings?.widgetBodyTextContent) ? gfg.utility.getLocale() : "en";
            if(!widgetSettings?.widgetBodyTextContent?.[currLocale]?.addToCartButtonText) {
              currLocale = "en";
            }
            const addToCartBtnText = widgetSettings?.widgetBodyTextContent?.[currLocale]?.addToCartButtonText || "Add to Cart";
            const outOfStockBtnText = widgetSettings?.widgetBodyTextContent?.[currLocale]?.outOfStockButtonText || "Out of Stock";

            if(isOutOfStock) {
              addToCartButton.classList.add('disabled');
              addToCartButton.innerText = outOfStockBtnText;
            } else {
              addToCartButton.classList.remove('disabled');
              addToCartButton.innerText = addToCartBtnText;
            }
          }
        } catch (error) {
          gfg.utility.debugError("error in gfgBXGY handleVariantChangeForVariantSelector", error);
        }
      },
      handleScrollButtonClick: function (event, pageType) {
        try {
          const accordionBody = event.target.closest(".gfgBuyXGetYCustomDiscountAccordionBody");
          const parentContainer = accordionBody.closest(`.gfgBuyXGetYCustomDiscountParentContainer_${pageType}`);
          const productList = parentContainer.querySelector('.gfgBuyXGetYProductListWrapper');
          const scrollButton = event.target.closest(".gfgBuyXGetYCustomDiscountScrollButton");
          const scrollAmount = 200;
          window.productList = productList;

          if (scrollButton.classList.contains('left')) {
            productList.scrollLeft -= scrollAmount;
          } else {
            productList.scrollLeft += scrollAmount;
          }

        } catch (error) {
          gfg.utility.debugError("error in gfgBXGY handleScrollButtonClick", error);
        }
      }
    }
  },
  gfgShippingDiscountV2: {
    state: {
      isFirstRenderForShippingDiscount: true,
      productFound: {},
      productVariantFrount: {},
      collectionFound: {},
      appBlockKeyMap: {
        tBarHeadingFontSize: "titleBarHeadingFontSize",
        tBarHeadingFontWt: "titleBarHeadingFontWeight",
        tBarSubHeadingFontSize: "titleBarSubHeadingFontSize",
        tBarSubHeadingFontWt: "titleBarSubHeadingFontWeight",
        tBarTextColor: "titleBarTextColor",
        tBarBackgroundColor: "titleBarBackgroundColor",
        widgetBodyFontSize: "widgetBodyFontSize",
        widgetBodyFontWt: "widgetBodyFontWeight",
        widgetBodyBackgroundColor: "widgetBodyBackgroundColor",
        widgetBodyBorderColor: "widgetBodyBorderColor",
      },
    },
    init: function () {
      try {
        let settings = gfg.settings;
        let _shippingDiscountData = settings.shippingDiscount;
  
        const page_type = gfg.f.getPageType();
        if (page_type === "product") {
          gfgCustomDiscount.gfgShippingDiscountV2.productPage.init(_shippingDiscountData);
        }
  
        if (page_type === "cart") {
          gfgCustomDiscount.gfgShippingDiscountV2.cartPage.init(_shippingDiscountData);
        }
  
        if (page_type !== "cart") {
          gfgCustomDiscount.gfgShippingDiscountV2.sideCart.init(_shippingDiscountData);
        }
      } catch (error) {
        gfg.utility.debugConsole("Error inside gfgShippingDiscountV2 init fn", error);
      }
    },
    productPage: {
      init: function (shippingDiscountData) {
        try {
          gfgCustomDiscount.gfgShippingDiscountV2.initialize(shippingDiscountData, "PRODUCT_PAGE");
        } catch (error) {
          gfg.utility.debugConsole("Error inside productPage.init fn", error);
        }
      },
    },
    cartPage: {
      init: function (shippingDiscountData) {
        try {
          gfgCustomDiscount.gfgShippingDiscountV2.initialize(shippingDiscountData, "CART_PAGE");
        } catch (error) {
          gfg.utility.debugConsole("Error inside cartPage.init fn", error);
        }
      },
    },
    sideCart: {
      init: function (shippingDiscountData) {
        try {
          gfgCustomDiscount.gfgShippingDiscountV2.initialize(shippingDiscountData, "SIDE_CART");
        } catch (error) {
          gfg.utility.debugConsole("Error inside cartPage.init fn", error);
        }
      },
    },
    initialize: async function (shippingDiscountData, pageType) {
      try {
        const enabledShipingDiscountData = shippingDiscountData.filter((discount) => discount.isEnabled);
        let shippingDiscountWidgets = [];
        let cartData = await gfg.utility.getCartV2();
  
        for (let shippingDiscount of enabledShipingDiscountData) {

          try {
            
            const isShippingDiscountExists = shippingDiscount;
            if (!isShippingDiscountExists) {
              continue;
            }
    
            const isActiveCampaign = gfg.customDiscountValidationFunctions.checkForActiveCampaign(shippingDiscount);
            if (!isActiveCampaign) {
              continue;
            }
    
            const isRelevantToCurrentPage = await gfg.customDiscountValidationFunctions.checkCustomDiscountWidgetIsRelevantToCurrentPage(
              shippingDiscount,
              pageType
            );
            if (!isRelevantToCurrentPage) {
              continue;
            }
    
            await gfg.customDiscountValidationFunctions.verifyCustomDiscountRules(shippingDiscount, cartData);
            gfgCustomDiscount.gfgShippingDiscountV2.f.checkIfShippingDiscountAppBlockIsAdded(shippingDiscount, pageType);
            const preparedShippingDiscountWidget = gfgCustomDiscount.gfgShippingDiscountV2.f.prepareShippingDiscountUI(shippingDiscount);
            shippingDiscountWidgets.push({ generatedUI: preparedShippingDiscountWidget, offer: shippingDiscount });
          } catch (error) {
            gfg.utility.debugError("Error inside gfgShippingDiscountV2 initialize fn", error);
          }
        }
  
        gfgCustomDiscount.gfgShippingDiscountV2.f.insertIntoPageWrapper(shippingDiscountWidgets, pageType);
      } catch (error) {
        gfg.utility.debugConsole("Error inside gfgShippingDiscountV2 initialize fn", error);
      }
    },
    f: {
      verifyIndividualRule: async function (ruleData, cartData) {
        try {
          const ruleType = ruleData.ruleType;
          const ruleValue = ruleData.ruleValue;
          const type = ruleData.type;
        } catch (error) {
          gfg.utility.debugConsole("Error inside gfgShippingDiscountV2 verifyIndividualRule fn", error);
        }
      },
      renderTitleBarUI: function (titleIcon, titleBarHeading, titleBarSubHeading, styleSettings) {
        try {
          const {
            titleBarHeadingFontSize,
            titleBarSubHeadingFontSize,
            titleBarHeadingFontWeight,
            titleBarSubHeadingFontWeight,
            titleBarTextColor,
          } = styleSettings;
          const headingFontWeightValue = gfg.utility.getFontWeightValue(titleBarHeadingFontWeight);
          const subHeadingFontWeightValue = gfg.utility.getFontWeightValue(titleBarSubHeadingFontWeight);
          if (titleIcon) {
            return `
            <div class="titleIconWrapper">
              <img class="titleIcon" src='${titleIcon}' alt='icon-img'></img>
            </div>
            <div class="titleBarTextContainer">
              <div 
                class="titleBarMainHeading" 
                style="font-size:${titleBarHeadingFontSize}px; font-weight:${headingFontWeightValue}; color:${titleBarTextColor};">
                ${titleBarHeading}
              </div>
              <div 
                class="titleBarSubHeading" 
                style="font-size:${titleBarSubHeadingFontSize}px; font-weight:${subHeadingFontWeightValue}; color:${titleBarTextColor};">
                ${titleBarSubHeading}
              </div>
            </div>
          `;
          }
          return `
            <div class="titleBarTextContainer" style="width:100%; align-items: center;">
              <div 
                class="titleBarMainHeading" 
                style="font-size:${titleBarHeadingFontSize}px; font-weight:${headingFontWeightValue}; color:${titleBarTextColor}; text-align:center;">
                ${titleBarHeading}
              </div>
              <div 
                class="titleBarSubHeading" 
                style="font-size:${titleBarSubHeadingFontSize}px; font-weight:${subHeadingFontWeightValue}; color:${titleBarTextColor}; text-align:center;">
                ${titleBarSubHeading}
              </div>
            </div>
          `;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgShippingDiscountV2 renderTitleBarUI fn", error);
        }
      },
      replaceTextDynamicVariables: function (text, currRule, discountValue) {
        try {
          const { ruleType } = currRule;
          const currencySymbol = gfg.utility.getCurrencySymbol();
          text = text.replace("{{CURRENCY}}", currencySymbol);
          text = text.replace("{{DISCOUNT_VALUE}}", discountValue);
          if (!ruleType) {
            return text;
          }
  
          let valueToBeReplaced = "";
          switch (ruleType) {
            case "cartSubtotal":
               valueToBeReplaced = (currRule.ruleValue.remainingSubtotalValue || currRule.ruleValue.value).toString();
               valueToBeReplaced = valueToBeReplaced.replace(/\.0+$/, '');
              // Remove .00 from numbers formatted with .toFixed(2) (e.g., "21.00" becomes "21")
              text = text.replace("{{AMOUNT}}", currRule.ruleValue.value + "");
              text = text.replace("{{REMAINING_AMOUNT}}", valueToBeReplaced + "");
              break;
  
            case "cartQuantity":
              valueToBeReplaced = currRule.ruleValue.remainingQuantityValue || currRule.ruleValue.value;
              text = text.replace("{{QUANTITY}}", currRule.ruleValue.value + "");
              text = text.replace("{{REMAINING_QUANTITY}}", valueToBeReplaced + "");
              break;
  
            case "products":
            case "productVariants":
              const productTitle = currRule.ruleValue.qualifiedProductObj.title;
              const productHandle = currRule.ruleValue.qualifiedProductObj.handle;
              const variantTitle = currRule.ruleValue.qualifiedProductObj.variantTitle;
              const qualifierQuantityForProduct = currRule.ruleValue.qualifierValue;
              const productLinkHTMLMarkup = `<a href='/products/${productHandle}' target='__blank'>${productTitle}</a>`;
              text = text.replace("{{PRODUCT}}", productTitle);
              text = text.replace("{{PRODUCT_VARIANT}}", variantTitle);
              text = text.replace("{{QUANTITY}}", qualifierQuantityForProduct);
              text = text.replace("{{REMAINING_QUANTITY}}", currRule.ruleValue.remainingValue);
              text = text.replace("{{AMOUNT}}", qualifierQuantityForProduct);
              text = text.replace("{{REMAINING_AMOUNT}}", currRule.ruleValue.remainingValue);
              text = text.replace("{{PRODUCT_LINK}}", productLinkHTMLMarkup);
              break;
  
            case "collections":
              const collectionTitle = currRule.ruleValue.qualifiedCollectionObj.title;
              const collectionHandle = currRule.ruleValue.qualifiedCollectionObj.handle;
              const qualifierQuantityForCollection = currRule.ruleValue.qualifierValue;
              const collectionLinkHTMLMarkup = `<a href='/collections/${collectionHandle}' target='__blank'>${collectionTitle}</a>`;
              text = text.replace("{{COLLECTION}}", collectionTitle);
              text = text.replace("{{QUANTITY}}", qualifierQuantityForCollection);
              text = text.replace("{{REMAINING_QUANTITY}}", currRule.ruleValue.remainingValue);
              text = text.replace("{{AMOUNT}}", qualifierQuantityForCollection);
              text = text.replace("{{REMAINING_AMOUNT}}", currRule.ruleValue.remainingValue);
              text = text.replace("{{COLLECTION_LINK}}", collectionLinkHTMLMarkup);
              break;
  
            case "shippingCountry":
              const country = currRule.ruleValue.qualifiedCountry;
              text = text.replace("{{COUNTRY}}", country);
              break;
            case "customerTags":
              const tag = currRule.ruleValue.qualifiedTag;
              text = text.replace("{{CUSTOMER_TAG}}", tag);
              break;
            case "productHasSubscription":
              const qualifierQuantityForSubscriptionProduct = currRule.ruleValue.qualifierValue;
              text = text.replace("{{QUANTITY}}", qualifierQuantityForSubscriptionProduct);
              text = text.replace("{{REMAINING_QUANTITY}}", currRule.ruleValue.remainingValue);
              text = text.replace("{{AMOUNT}}", qualifierQuantityForSubscriptionProduct);
              text = text.replace("{{REMAINING_AMOUNT}}", currRule.ruleValue.remainingValue);
              break;
  
            case "lineAttributes":
              const lineValue = currRule.ruleValue.qualifiedLineValue;
              const lineProperty = currRule.ruleValue.qualifiedLineProperty;
              const lineAttributesQualifierValue = currRule.ruleValue.qualifierValue;
              text = text.replace("{{LINE_VALUE}}", lineValue);
              text = text.replace("{{LINE_PROPERTY}}", lineProperty);
              text = text.replace("{{QUANTITY}}", lineAttributesQualifierValue);
              text = text.replace("{{REMAINING_QUANTITY}}", currRule.ruleValue.remainingValue);
              text = text.replace("{{AMOUNT}}", lineAttributesQualifierValue);
              text = text.replace("{{REMAINING_AMOUNT}}", currRule.ruleValue.remainingValue);
              break;
  
            case "cartAttributes":
              const cartValue = currRule.ruleValue.qualifiedCartValue;
              const cartProperty = currRule.ruleValue.qualifiedCartKey;
              text = text.replace("{{CART_VALUE}}", cartValue);
              text = text.replace("{{CART_PROPERTY}}", cartProperty);
              break;
  
            case "productTags":
              const tagName = currRule.ruleValue.tagName;
              const tagsRemainingQuantity = currRule.ruleValue.remainingValue;
              const tagsQualifierQuantity = currRule.ruleValue.qualifierValue;
              text = text.replace("{{PRODUCT_TAG}}", tagName);
              text = text.replace("{{QUANTITY}}", tagsQualifierQuantity);
              text = text.replace("{{REMAINING_QUANTITY}}", tagsRemainingQuantity);
              text = text.replace("{{AMOUNT}}", tagsQualifierQuantity);
              text = text.replace("{{REMAINING_AMOUNT}}", tagsRemainingQuantity);
              break;
  
            case "productTypes":
              const productType = currRule.ruleValue.productType;
              const typeRemainingQuantity = currRule.ruleValue.remainingValue;
              const typeQualifierQuantity = currRule.ruleValue.qualifierValue;
              text = text.replace("{{PRODUCT_TYPE}}", productType);
              text = text.replace("{{QUANTITY}}", typeQualifierQuantity);
              text = text.replace("{{REMAINING_QUANTITY}}", typeRemainingQuantity);
              text = text.replace("{{AMOUNT}}", typeQualifierQuantity);
              text = text.replace("{{REMAINING_AMOUNT}}", typeRemainingQuantity);
              break;
          }
  
          return text;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgShippingDiscountV2 replaceTextDynamicVariables fn", error);
        }
      },
      renderVerticalStepperProgressBarUI: function (ruleData) {
        try {
          const currLocale = gfgCustomDiscount.utility.checkMultipleLanguagePresent(
            ruleData.widgetSettings.rulesData.rulesGlobalList[0].rulesList[0].ruleText
          )
            ? gfg.utility.getLocale()
            : "en";
          const styleSettings = ruleData.widgetSettings.styleSettings;
          const { widgetBodyFontSize, widgetBodyFontWeight, widgetBodyTextColor } = styleSettings;
          const fontWeightValue = gfg.utility.getFontWeightValue(widgetBodyFontWeight);
          const discountValue = gfgCustomDiscount.gfgShippingDiscountV2.f.getDiscountValue(ruleData);
          const rulesList = ruleData.widgetSettings.rulesData.rulesGlobalList[0].rulesList.filter((curr) => curr.showOnWidget);
          const finalCheckBox = ruleData.widgetSettings.rulesData.rulesGlobalList[0].finalCheckBox;
          const mergedList = [...rulesList, finalCheckBox].filter((curr) => curr.showOnWidget);
          const ruleIconAndTextArr = mergedList.map((curr, index) => {
            const isTrue = curr.conditionMet || false;
            const iconKey = isTrue ? "conditionMetIconUrl" : "conditionNotMetIconUrl";
            const textKey = isTrue ? "conditionMetText" : "conditionNotMetText";
            const icon = curr[iconKey];
            let text =
              index < mergedList.length - 1 || !finalCheckBox.showOnWidget
                ? curr?.["ruleText"]?.[currLocale]?.[textKey] || curr["ruleText"]["en"][textKey]
                : curr?.[currLocale]?.[textKey] || curr["en"][textKey];
  
            text = gfgCustomDiscount.gfgShippingDiscountV2.f.replaceTextDynamicVariables(text, curr, discountValue);
            return { icon, text, isTrue };
          });
  
          const gfgVerticalStepperProgressBarContainer = document.createElement("div");
          gfgVerticalStepperProgressBarContainer.classList.add("gfgVerticalStepperProgressBarContainer");
          const gfgVerticalProgressBar = document.createElement("div");
          gfgVerticalProgressBar.classList.add("gfgVerticalProgressBar");
          gfgVerticalStepperProgressBarContainer.appendChild(gfgVerticalProgressBar);
          const eligibleForShippingDiscount = finalCheckBox.conditionMet || false;
          const progressBarSuccessFillColor = ruleData.widgetSettings.styleSettings.progressBarSuccessFillColor || "#00BA00";
          const progressBarInProgressFillColor = ruleData.widgetSettings.styleSettings.progressBarInProgressFillColor || "#B9B9B9";
          const progressBarColor = eligibleForShippingDiscount ? progressBarSuccessFillColor : progressBarInProgressFillColor;
          gfgVerticalProgressBar.style.backgroundColor = progressBarColor;
          for (let ruleIconText of ruleIconAndTextArr) {
            const gfgVerticalStepperProgressBarItem = document.createElement("div");
            gfgVerticalStepperProgressBarItem.classList.add("gfgVerticalStepperProgressBarItem");
            gfgVerticalStepperProgressBarItem.innerHTML = `
            <div class="gfgVerticalStepperProgressBarIconWrapper" style="border:2px solid ${
              ruleIconText.isTrue ? progressBarSuccessFillColor : progressBarInProgressFillColor
            }">
              <img class="gfgVerticalStepperProgressBarIcon" src="${ruleIconText.icon}" alt="icon-img">
            </div>
            <div class="gfgVerticalStepperProgressBarText" style="font-size: ${widgetBodyFontSize}px; font-weight: ${fontWeightValue}; color:${widgetBodyTextColor};">
              ${ruleIconText.text}
            </div>
          `;
  
            gfgVerticalStepperProgressBarContainer.appendChild(gfgVerticalStepperProgressBarItem);
          }
  
          return gfgVerticalStepperProgressBarContainer;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgShippingDiscountV2 renderStepperProgressBarUI fn", error);
        }
      },
      renderHorizontalStepperProgressBarUI: function (ruleData) {
        try {
          const currLocale = gfgCustomDiscount.utility.checkMultipleLanguagePresent(
            ruleData.widgetSettings.rulesData.rulesGlobalList[0].rulesList[0].ruleText
          )
            ? gfg.utility.getLocale()
            : "en";
          const styleSettings = ruleData.widgetSettings.styleSettings;
          const { widgetBodyFontSize, widgetBodyFontWeight, widgetBodyTextColor } = styleSettings;
          const fontWeightValue = gfg.utility.getFontWeightValue(widgetBodyFontWeight);
          const discountValue = gfgCustomDiscount.gfgShippingDiscountV2.f.getDiscountValue(ruleData);
          const rulesList = ruleData.widgetSettings.rulesData.rulesGlobalList[0].rulesList.filter((curr) => curr.showOnWidget);
          const finalCheckBox = ruleData.widgetSettings.rulesData.rulesGlobalList[0].finalCheckBox;
          const mergedList = [...rulesList, finalCheckBox].filter((curr) => curr.showOnWidget);
          const ruleIconAndTextArr = mergedList.map((curr, index) => {
            const isTrue = curr.conditionMet || false;
            const iconKey = isTrue ? "conditionMetIconUrl" : "conditionNotMetIconUrl";
            const textKey = isTrue ? "conditionMetText" : "conditionNotMetText";
            const icon = curr[iconKey];
            let text =
              index < mergedList.length - 1 || !finalCheckBox.showOnWidget
                ? curr?.["ruleText"]?.[currLocale]?.[textKey] || curr["ruleText"]["en"][textKey]
                : curr?.[currLocale]?.[textKey] || curr["en"][textKey];
            text = gfgCustomDiscount.gfgShippingDiscountV2.f.replaceTextDynamicVariables(text, curr, discountValue);
            return { icon, text, isTrue };
          });
          const gfgHorizontalStepperProgressBarContainer = document.createElement("div");
          gfgHorizontalStepperProgressBarContainer.classList.add("gfgHorizontalStepperProgressBarContainer");
          const gfgHorizontalProgressBar = document.createElement("div");
          gfgHorizontalProgressBar.classList.add("gfgHorizontalProgressBar");
          gfgHorizontalStepperProgressBarContainer.appendChild(gfgHorizontalProgressBar);
          const eligibleForShippingDiscount = finalCheckBox.conditionMet || false;
          const progressBarSuccessFillColor = ruleData.widgetSettings.styleSettings.progressBarSuccessFillColor || "#00BA00";
          const progressBarInProgressFillColor = ruleData.widgetSettings.styleSettings.progressBarInProgressFillColor || "#B9B9B9";
          gfgHorizontalProgressBar.style.backgroundColor = eligibleForShippingDiscount
            ? progressBarSuccessFillColor
            : progressBarInProgressFillColor;
          let cnt = 0;
          for (let ruleIconText of ruleIconAndTextArr) {
            const gfgHorizontalStepperProgressBarItem = document.createElement("div");
            gfgHorizontalStepperProgressBarItem.classList.add("gfgHorizontalStepperProgressBarItem");
            gfgHorizontalStepperProgressBarItem.innerHTML = `
              <div class="gfgHorizontalStepperProgressBarIconWrapper" style="border:2px solid ${
                ruleIconText.isTrue ? progressBarSuccessFillColor : progressBarInProgressFillColor
              }">
                <img class="gfgHorizontalStepperProgressBarIcon" id='horizontalStepper-${cnt++}' src='${ruleIconText.icon}' alt='icon-img'>
              </div>
              <div class="gfgHorizontalStepperProgressBarText" style="font-size: ${widgetBodyFontSize}px; font-weight: ${fontWeightValue}; color:${widgetBodyTextColor};">${
              ruleIconText.text
            }</div>
            `;
            gfgHorizontalStepperProgressBarContainer.appendChild(gfgHorizontalStepperProgressBarItem);
          }
          return gfgHorizontalStepperProgressBarContainer;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgShippingDiscountV2 renderHorizontalStepperProgressBarUI fn", error);
        }
      },
      renderSingleRuleProgressBarUI: function (ruleData) {
        try {
          const currLocale = gfgCustomDiscount.utility.checkMultipleLanguagePresent(
            ruleData.widgetSettings.rulesData.rulesGlobalList[0].rulesList[0].ruleText
          )
            ? gfg.utility.getLocale()
            : "en";
          const styleSettings = ruleData.widgetSettings.styleSettings;
          const { widgetBodyFontSize, widgetBodyFontWeight, widgetBodyTextColor } = styleSettings;
          const fontWeightValue = gfg.utility.getFontWeightValue(widgetBodyFontWeight);
          const discountValue = gfgCustomDiscount.gfgShippingDiscountV2.f.getDiscountValue(ruleData);
          const rulesList = ruleData.widgetSettings.rulesData.rulesGlobalList[0].rulesList.filter((curr) => curr.showOnWidget);
          const finalCheckBox = ruleData.widgetSettings.rulesData.rulesGlobalList[0].finalCheckBox;
          const mergedList = [...rulesList, finalCheckBox].filter((curr) => curr.showOnWidget);
          const ruleIconAndTextArr = mergedList.map((curr, index) => {
            const isTrue = curr.conditionMet || false;
            const iconKey = isTrue ? "conditionMetIconUrl" : "conditionNotMetIconUrl";
            const textKey = isTrue ? "conditionMetText" : "conditionNotMetText";
            const icon = curr[iconKey];
            let text =
              index < mergedList.length - 1 || !finalCheckBox.showOnWidget
                ? curr?.["ruleText"]?.[currLocale]?.[textKey] || curr["ruleText"]["en"][textKey]
                : curr?.[currLocale]?.[textKey] || curr["en"][textKey];
            text = gfgCustomDiscount.gfgShippingDiscountV2.f.replaceTextDynamicVariables(text, curr, discountValue);
            return { icon, text, isTrue };
          });
  
          const gfgDynamicProgressBarAndTextMessageWrapper = document.createElement("div");
          const gfgDynamicProgressBarWrapper = document.createElement("div");
          const gfgDynamicProgressBar = document.createElement("div");
          const gfgDynamicProgressBarIndicator = document.createElement("div");
          const gfgDynamicProgressBarInnerIndicator = document.createElement("div");
          const gfgDynamicTextMessageAndIconWrapper = document.createElement("div");
          const gfgDynamicProgressBarTextMessage = document.createElement("div");
          const gfgDynamicProgressBarIconWrapper = document.createElement("div");
          const gfgDynamicProgressBarIcon = document.createElement("img");
  
          gfgDynamicProgressBarAndTextMessageWrapper.classList.add("gfgDynamicProgressBarAndTextMessageWrapper");
          gfgDynamicProgressBarWrapper.classList.add("gfgDynamicProgressBarWrapper");
          gfgDynamicProgressBar.classList.add("gfgDynamicProgressBar");
          gfgDynamicProgressBarIndicator.classList.add("gfgDynamicProgressBarIndicator");
          gfgDynamicProgressBarInnerIndicator.classList.add("gfgDynamicProgressBarInnerIndicator");
          gfgDynamicTextMessageAndIconWrapper.classList.add("gfgDynamicTextMessageAndIconWrapper");
          gfgDynamicProgressBarTextMessage.classList.add("gfgDynamicProgressBarTextMessage");
          gfgDynamicProgressBarIconWrapper.classList.add("gfgDynamicProgressBarIconWrapper");
          gfgDynamicProgressBarIcon.classList.add("gfgDynamicProgressBarIcon");
  
          const progressBarSuccessFillColor = ruleData.widgetSettings.styleSettings.progressBarSuccessFillColor || "#00BA00";
          const progressBarInProgressFillColor = ruleData.widgetSettings.styleSettings.progressBarInProgressFillColor || "#B9B9B9";
          const dynamicProgressBarWidth = rulesList[0].ruleValue.dynamicProgressBarWidth || 0;
          const isConditionSatisfied = dynamicProgressBarWidth == 100 ? true : false;
          gfgDynamicProgressBarTextMessage.innerHTML = isConditionSatisfied
            ? ruleIconAndTextArr[ruleIconAndTextArr.length - 1].text
            : ruleIconAndTextArr[0].text;
          gfgDynamicProgressBarTextMessage.style.fontSize = `${widgetBodyFontSize}px`;
          gfgDynamicProgressBarTextMessage.style.fontWeight = fontWeightValue;
          gfgDynamicProgressBarTextMessage.style.color = widgetBodyTextColor;
          gfgDynamicProgressBarIcon.src = isConditionSatisfied
            ? ruleIconAndTextArr[ruleIconAndTextArr.length - 1].icon
            : ruleIconAndTextArr[0].icon;
          if (gfgDynamicProgressBarIcon.src === "") {
            gfgDynamicProgressBarIcon.style.display = "none";
          }
          gfgDynamicProgressBarIcon.alt = "icon-image";
          gfgDynamicProgressBarWrapper.appendChild(gfgDynamicProgressBar);
          gfgDynamicProgressBarIndicator.appendChild(gfgDynamicProgressBarInnerIndicator);
          gfgDynamicProgressBarWrapper.appendChild(gfgDynamicProgressBarIndicator);
          gfgDynamicProgressBar.style.width = `${rulesList[0].ruleValue.dynamicProgressBarWidth}%`;
          gfgDynamicProgressBarIndicator.style.left =
            dynamicProgressBarWidth > 0 ? `calc(${rulesList[0].ruleValue.dynamicProgressBarWidth}% - 16px)` : "0px";
          gfgDynamicProgressBarInnerIndicator.style.backgroundColor = progressBarSuccessFillColor;
          gfgDynamicProgressBar.style.backgroundColor = progressBarSuccessFillColor;
          gfgDynamicProgressBarWrapper.style.backgroundColor = progressBarInProgressFillColor;
          gfgDynamicProgressBarIconWrapper.appendChild(gfgDynamicProgressBarIcon);
          gfgDynamicTextMessageAndIconWrapper.appendChild(gfgDynamicProgressBarIconWrapper);
          gfgDynamicTextMessageAndIconWrapper.appendChild(gfgDynamicProgressBarTextMessage);
  
          gfgDynamicProgressBarAndTextMessageWrapper.appendChild(gfgDynamicProgressBarWrapper);
          gfgDynamicProgressBarAndTextMessageWrapper.appendChild(gfgDynamicTextMessageAndIconWrapper);
  
          return gfgDynamicProgressBarAndTextMessageWrapper;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgShippingDiscountV2 renderSingleRuleProgressBarUI fn", error);
        }
      },
      getDiscountValue: function (ruleData) {
        try {
          const currencyRate = gfg.utility.getActiveCurrencyRate();
          const value = ruleData.discountSettings.value;
          let discountValue = ruleData.discountSettings.type === "PERCENTAGE" ? value : (value * currencyRate).toFixed(2);
          const formattedDiscountValue = `${discountValue}`.endsWith(".00") ? discountValue.slice(0, -3) : discountValue;
          return formattedDiscountValue;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgShippingDiscountV2 getDiscountValue fn", error);
        }
      },
      prepareShippingDiscountUI: function (ruleData) {
        try {
          const gfgShippingDiscountParentContainer = document.createElement("div");
          const gfgShippingDiscountTopSectionContainer = document.createElement("div");
          const gfgShippingDiscountBottomSectionContainer = document.createElement("div");
          gfgShippingDiscountParentContainer.classList.add("gfgShippingDiscountParentContainer");
          gfgShippingDiscountTopSectionContainer.classList.add("gfgShippingDiscountTopSectionContainer");
          gfgShippingDiscountBottomSectionContainer.classList.add("gfgShippingDiscountBottomSectionContainer");
  
          const { widgetSettings } = ruleData;
          const styleSettings = widgetSettings.styleSettings;
          gfgShippingDiscountParentContainer.style.backgroundColor = styleSettings.widgetBodyBackgroundColor;
          gfgShippingDiscountParentContainer.style.border = ` 1.8px solid ${styleSettings.widgetBodyBorderColor}`;
          gfgShippingDiscountBottomSectionContainer.style.backgroundColor = styleSettings.widgetBodyBackgroundColor;
  
          const currLocale = gfgCustomDiscount.utility.checkMultipleLanguagePresent(widgetSettings.titleBar) ? gfg.utility.getLocale() : "en";
          const isTrue = widgetSettings.titleBar.conditionMet || false;
          const iconKey = isTrue ? "conditionMetIconUrl" : "conditionNotMetIconUrl";
          const titleBarHeadingTextKey = isTrue ? "conditionMetHeadingText" : "conditionNotMetHeadingText";
          const titleBarSubHeadingTextKey = isTrue ? "conditionMetSubheadingText" : "conditionNotMetSubheadingText";
  
          const titleIcon = widgetSettings.titleBar[iconKey];
          let titleBarHeading = widgetSettings.titleBar?.[currLocale]?.[titleBarHeadingTextKey] || widgetSettings.titleBar["en"][titleBarHeadingTextKey];
          let titleBarSubHeading = widgetSettings.titleBar?.[currLocale]?.[titleBarSubHeadingTextKey] || widgetSettings.titleBar["en"][titleBarSubHeadingTextKey];
          const discountValue = gfgCustomDiscount.gfgShippingDiscountV2.f.getDiscountValue(ruleData);
          const currencySymbol = gfg.utility.getCurrencySymbol();
          titleBarHeading = titleBarHeading.replace("{{CURRENCY}}", currencySymbol);
          titleBarSubHeading = titleBarSubHeading.replace("{{CURRENCY}}", currencySymbol);
          titleBarHeading = titleBarHeading.replace("{{DISCOUNT_VALUE}}", discountValue);
          titleBarSubHeading = titleBarSubHeading.replace("{{DISCOUNT_VALUE}}", discountValue);
          const titleBarUI = gfgCustomDiscount.gfgShippingDiscountV2.f.renderTitleBarUI(titleIcon, titleBarHeading, titleBarSubHeading, styleSettings);
          gfgShippingDiscountTopSectionContainer.style.backgroundColor = styleSettings.titleBarBackgroundColor;
          gfgShippingDiscountTopSectionContainer.style.display = widgetSettings.titleBar.showOnWidget ? "flex" : "none";
          gfgShippingDiscountTopSectionContainer.innerHTML = titleBarUI;
  
          let layoutType = styleSettings.templateType;
          // const rulesList = ruleData.widgetSettings.rulesData.rulesGlobalList[0].rulesList.filter((curr) => curr.showOnWidget);
          // if(rulesList.length == 1){
          //   layoutType = "SINGLE_RULE_LAYOUT";
          // }
  
          let stepperBarGeneratedUI = null;
          switch (layoutType) {
            case "SINGLE_RULE_LAYOUT":
              stepperBarGeneratedUI = gfgCustomDiscount.gfgShippingDiscountV2.f.renderSingleRuleProgressBarUI(ruleData);
              break;
            case "VERTICAL_CHECKPOINT":
              stepperBarGeneratedUI = gfgCustomDiscount.gfgShippingDiscountV2.f.renderVerticalStepperProgressBarUI(ruleData);
              break;
            case "HORIZONTAL_CHECKPOINT":
              stepperBarGeneratedUI = gfgCustomDiscount.gfgShippingDiscountV2.f.renderHorizontalStepperProgressBarUI(ruleData);
          }
  
          gfgShippingDiscountBottomSectionContainer.appendChild(stepperBarGeneratedUI);
          gfgShippingDiscountParentContainer.appendChild(gfgShippingDiscountTopSectionContainer);
          gfgShippingDiscountParentContainer.appendChild(gfgShippingDiscountBottomSectionContainer);
          return gfgShippingDiscountParentContainer;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgShippingDiscountV2 prepareShippingDiscountUI fn", error);
        }
      },
      clearExistingContent: function (elements) {
        try {
          elements.forEach((element) => {
            element.innerHTML = "";
          });
        } catch (error) {
          gfg.utility.debugError("Error inside gfgShippingDiscountV2 clearExistingContent fn", error);
        }
      },
      appendNewUI: function (elements, uiArray, existingBlocks) {
        try {
  
          // If no elements are found, then we should re-init the shipping discount to handle widget updates.
          // no elements mean that gfgCartPageWrapperV2 is not present likely.
          if(elements?.length === 0 && !gfg.f.cutOffshouldInitAgainConditionsForUnifiedAndShipping()){
            gfg.state.shouldInitShippingDiscountAgain = true;
            return;
          }
  
          elements.forEach((element) => {
            // Append each generated UI element
            uiArray.forEach((uiElement) => {
              if (existingBlocks.length > 0) {
                const id = element.id;
                const isIdPresentInOffer = uiElement.offer._id == id;
                if (!isIdPresentInOffer && uiArray.length > 1) {
                  return;
                }
              }
              const clone = uiElement.generatedUI.cloneNode(true);
              element.appendChild(clone);
            });
          });
        } catch (error) {
          gfg.utility.debugError("Error inside gfgShippingDiscountV2 appendNewUI fn", error);
        }
      },
      insertIntoPageWrapper: function (preparedUiArray, page_type) {
        try {
          if (preparedUiArray.length === 0) {
            return;
          }
  
          const gfgShippingDiscountWrapperProductEle = gfg.utility.findWrapperElement("SHIPPING_DISCOUNT", page_type, null, 'JS');
  
          // let selector = page_type === "PRODUCT_PAGE" ? ".gfgProductPageWrapperV2" : ".gfgCartPageWrapperV2";
          // let gfgShippingDiscountWrapperProductEle = document.querySelectorAll(selector + " .gfgShippingDiscountWrapper");
  
          let gfgShippingBlockV2Added = document.querySelectorAll(".gfgShippingDiscountWrapperV2");
          // if (gfgShippingBlockV2Added.length > 0 && page_type !== "SIDE_CART") {
          //   gfgShippingDiscountWrapperProductEle = gfgShippingBlockV2Added;
          // }
  
          gfgCustomDiscount.gfgShippingDiscountV2.f.clearExistingContent(gfgShippingDiscountWrapperProductEle);
          gfgCustomDiscount.gfgShippingDiscountV2.f.appendNewUI(gfgShippingDiscountWrapperProductEle, preparedUiArray, gfgShippingBlockV2Added);
        } catch (error) {
          gfg.utility.debugConsole("Error inside gfgShippingDiscountV2 insertIntoPageWrapper fn", error);
        }
      },
      checkIfShippingDiscountAppBlockIsAdded: function (shippingDiscount, pageType) {
        try {
          const shippingDiscountBlocks = document.querySelectorAll(".gfgShippingDiscountWrapperV2");
  
          for (shippingDiscountBlock of shippingDiscountBlocks) {
            if (shippingDiscountBlock.id === shippingDiscount._id) {
              shippingDiscount.widgetSettings.styleSettings.isThemeEditorSettings = true;
              const shippingDiscountStyleObj = shippingDiscountBlock.getAttribute("data-setting") || {};
              const shippingDiscountObj = JSON.parse(shippingDiscountStyleObj);
              for (const [key, value] of Object.entries(shippingDiscountObj)) {
                const keysToSkip = ["blockId", "sideCartEnabled"];
                if (keysToSkip.includes(key)) continue;
                if (pageType === "SIDE_CART" && !shippingDiscountObj.sideCartEnabled) {
                  continue;
                }
  
                shippingDiscount.widgetSettings.styleSettings[gfgCustomDiscount.gfgShippingDiscountV2.state.appBlockKeyMap[key]] = value;
              }
            }
          }
        } catch (error) {
          gfg.utility.debugError("Error inside gfgShippingDiscountV2 checkIfShippingDiscountAppBlockIsAdded fn", error); 
          return false;
        }
      },
    },
  },
};

let gfgConsolidatedCustomDiscount = {
  state: {},
  f: {
    getDiscountAllocations: function(cartData, discountedSubtotalResults) {
      try {
        let cartDiscountAllocations = {};
        let productDiscountAllocations = {};

        for(let line of cartData.items) {
          line.discounts.forEach(discount => {
            let amount = discount.amount / (Number(gfg.utility.getActiveCurrencyRate()) * 100);
            if(discountedSubtotalResults.cartDiscounts) {
              cartDiscountAllocations[discount.title] = cartDiscountAllocations[discount.title] ? cartDiscountAllocations[discount.title] + amount :  amount;
            }
            if(discountedSubtotalResults.productDiscounts) {
              !productDiscountAllocations[line.variant_id] && (productDiscountAllocations[line.variant_id] = {});
              productDiscountAllocations[line.variant_id][discount.title] = productDiscountAllocations[line.variant_id][discount.title] ? productDiscountAllocations[line.variant_id][discount.title] + amount :  amount;
            }
          });
        }

        return {
          cartDiscountAllocations,
          productDiscountAllocations
        };

      } catch (error) {
        gfg.utility.debugError("error in getDiscountAllocations", error);
      }
    },
    getDiscountedCartSubtotalExcludingCurrentDiscount: function(cartData) {
      try {
        const cartSubtotal = cartData.original_total_price / 100;
        const discountAllocations = gfgConsolidatedCustomDiscount.f.getDiscountAllocations(cartData);
        let discountedSubtotal = 0;
        const discountMessages = cartData.discountMessages;
        Object.keys(discountAllocations).forEach(discountTitle => {
          if (!discountMessages.includes(discountTitle)) {
            discountedSubtotal += discountAllocations[discountTitle];
          }
        });
        return cartSubtotal - discountedSubtotal;
      } catch (error) {
        gfg.utility.debugError("error in getDiscountedCartSubtotalExcludingCurrentDiscount", error);
      }
    },
    checkIfWidgetShouldBeVisible: async function(customDiscount, pageType) {
      try {
        // Check if discount is enabled
        if (!customDiscount.isEnabled) return false;

        const isActiveCampaign = gfg.customDiscountValidationFunctions.checkForActiveCampaign(customDiscount);
        if (!isActiveCampaign) return false;

        const isRelevantToCurrentPage = await gfg.customDiscountValidationFunctions.checkCustomDiscountWidgetIsRelevantToCurrentPage(customDiscount, pageType);
        if (!isRelevantToCurrentPage) return false;

        // Check if segments exist in segmentsData
        const segments = customDiscount.segmentsData?.segmentsList;
        if (!segments || segments.length === 0) return false;

        return true;
      } catch (error) {
        gfg.utility.debugError("Error in checkIfWidgetShouldBeVisible", error); 
        return false;
      }
    }
  },
  init: function () {
    try {
        const page_type = gfg.f.getPageType();
        if (page_type === "product") {
          gfgConsolidatedCustomDiscount.initialize("PRODUCT_PAGE");
        }
        if (page_type === "cart") {
          gfgConsolidatedCustomDiscount.initialize("CART_PAGE");
        }
        if (page_type !== "cart") {
          gfgConsolidatedCustomDiscount.initialize("SIDE_CART");
      }
    } catch (error) {
      gfg.utility.debugConsole("Error inside gfgConsolidatedCustomDiscount init fn", error);
    }
  },
  initialize: async function (pageType) {
    try {
      let consolidatedCombinedDiscounts = gfg.settings.consolidatedCombinedDiscount;
      let consolidatedCustomDiscount = gfg.settings.consolidatedCustomDiscount;
      const discountsToCheck = [...consolidatedCustomDiscount, ...consolidatedCombinedDiscounts];
      // consolidatedCustomDiscount is only used for the attributes update if the discountedCartSubtotal is present in the rule

      // Configure the sync module (idempotent — only runs setup once)
      if (discountsToCheck.length > 0 && typeof gfgDiscountAllocationSync !== 'undefined' && !gfgDiscountAllocationSync._state.isInitialized) {
        gfgDiscountAllocationSync.configure(discountsToCheck);
      }
      const progressBarDiscounts = consolidatedCombinedDiscounts.filter((discount) => 
        discount.discountFunctionType === "CONSOLIDATED_PROGRESS_BAR" && discount.isEnabled
      );
      
      if (progressBarDiscounts && progressBarDiscounts.length > 0) {
          gfgConsolidatedCustomDiscount.gfgProgressBar.init(progressBarDiscounts, pageType);
      }

      const dynamicBogoDiscounts = consolidatedCustomDiscount.filter((discount) => 
        discount.discountFunctionType === "CONSOLIDATED_BXGY_DISCOUNT" && discount.isEnabled && discount.templateType === "DYNAMIC_BOGO"
      );

      if (dynamicBogoDiscounts && dynamicBogoDiscounts.length > 0) {
        gfgConsolidatedCustomDiscount.gfgDynamicBogo.init(dynamicBogoDiscounts, pageType);
      }
    } catch (error) {
      gfg.utility.debugConsole("Error inside gfgConsolidatedCustomDiscount initialize fn", error);
    }
  },
  gfgProgressBar: {
    state: {
      isFirstRenderForProgressBar: true,
      currentProgress: {},
      achievedSegments: {},
      cartData: null
    },
    
    components: {
      createProgressBarContainer: function(customDiscount, pageType, styles) {
        try {
          return gfgCustomDiscount.utility.createElementWithAttributes("div", {
            id: `${customDiscount["_id"]}_${pageType}`,
            class: `gfgCCDProgressBarWidget gfgCCDProgressBarWidget_${pageType}`,
            style: `
              background: ${styles.backgroundColor || "transparent"};
              border: 1px solid ${styles.borderColor || "#3c3c3c"};
              border-radius: ${styles.borderRadius || "10px"};
              padding: ${styles.blockPadding} ${styles.inLinePadding} ${styles.blockPadding} ${styles.inLinePadding};
              color: ${styles.textColor || "#3c3c3c"};
            `
          });
        } catch (error) {
          gfg.utility.debugError("Error in createProgressBarContainer", error);
        }
      },
      
      createProgressBar: function(progress, styles, elementPosition, shouldAddProgressFill) {
        try {
          const progressBarWrapper = gfgCustomDiscount.utility.createElementWithAttributes("div", {
            class: `gfgCCDProgressBarWrapper ${elementPosition}`,
            style: `
              background: ${styles.barEmptyColor || "#e0e0e0"};
            `
          });

          const progressBarFill = gfgCustomDiscount.utility.createElementWithAttributes("div", {
            class: "gfgCCDProgressBarFill",
            style: `
              background: ${styles.barFillColor || "#d91717"};
              width: ${shouldAddProgressFill ? `${progress}%` : "0%"};
            `
          });
          progressBarWrapper.appendChild(progressBarFill);

          return progressBarWrapper;
        } catch (error) {
          gfg.utility.debugError("Error in createProgressBar", error);
        }
      },
      
      createSegmentText: function(segment, progressData, styles) {
        try {
          const currLocale = gfg.utility.getLocale() || "en";
          const segmentHeader = gfgCustomDiscount.utility.createElementWithAttributes("div", {
            class: "gfgCCDProgressBarSegmentHeader",
            style: `display: flex; align-items: center; gap: 8px;`
          });

          const ruleText = segment.widgetSettings?.ruleText;
          const titleText = ruleText?.[currLocale]?.conditionMetText || ruleText?.en?.conditionMetText;

          if (titleText) {
            const titleElement = gfgCustomDiscount.utility.createElementWithAttributes("span", {
              class: "gfgCCDProgressBarSegmentTitle",
              innerHTML: gfgConsolidatedCustomDiscount.gfgProgressBar.f.replaceTextVariables(
                titleText, progressData, segment, gfg.utility.getCurrencySymbol()),
              style: `font-size: ${styles.textSize || "12px"};`
            });
            segmentHeader.appendChild(titleElement);
          }

          return segmentHeader;
        } catch (error) {
          gfg.utility.debugError("Error in createSegmentText", error);
        }
      },
    },
    
    init: async function(discounts, pageType) {
      try {
        if (!discounts || discounts.length === 0) return;
        let widgets = [];
        for (let discount of discounts) {
          try {
            
            let progressBarWidget = await gfgConsolidatedCustomDiscount.gfgProgressBar.initialize(discount, pageType);
            progressBarWidget && widgets.push(progressBarWidget);
          } catch (error) {
            gfg.utility.debugError("Error inside gfgProgressBar init fn", error);
          }
        }
        
        if (widgets.length > 0) {
          gfgCustomDiscount.f.insertIntoPageWrapper(widgets, pageType, "CONSOLIDATED_PROGRESS_BAR");
        }
      } catch (error) {
        gfg.utility.debugConsole("Error inside gfgProgressBar init fn", error);
      }
    },
    
    initialize: async function(customDiscount, pageType) {
      try {
        // Check if widget should be visible
        let cartData = await gfg.utility.getCartV2();
        gfgConsolidatedCustomDiscount.gfgProgressBar.state.cartData = cartData;
        await gfg.customDiscountValidationFunctions.getLatestCartItemsProductData(cartData);

        const shouldRenderWidget = await gfgConsolidatedCustomDiscount.f.checkIfWidgetShouldBeVisible(customDiscount, pageType);
        if (!shouldRenderWidget) {
          gfgConsolidatedCustomDiscount.gfgProgressBar.f.removeWidgetIfAlreadyExists(customDiscount, pageType);
          return;
        }

        // Check if widget already exists and should be updated instead of recreated
        const widgetId = `${customDiscount["_id"]}_${pageType}`;
        const existingWidget = document.getElementById(widgetId);
        
        if (existingWidget) {
          await gfgConsolidatedCustomDiscount.gfgProgressBar.handleWidgetChanges(customDiscount, pageType);
          return;
        }

        // Calculate current progress
        const progressData = gfgConsolidatedCustomDiscount.gfgProgressBar.f.calculateProgress(customDiscount, cartData);
        
        const progressBarWidget = gfgConsolidatedCustomDiscount.gfgProgressBar.f.prepareProgressBarUI(customDiscount, pageType, progressData);
        return { generatedUI: progressBarWidget, offer: customDiscount };        
      } catch (error) {
        gfg.utility.debugConsole("Error inside gfgProgressBar initialize fn", error);
        throw error;
      }
    },
    
    handleWidgetChanges: async function(customDiscount, pageType) {
      try {
        const widgetId = `${customDiscount["_id"]}_${pageType}`;
        const existingWidget = document.getElementById(widgetId);
        
        if (!existingWidget) {
          return await gfgConsolidatedCustomDiscount.gfgProgressBar.initialize(customDiscount, pageType);
        }

        // Get current cart data
        const cartData = await gfg.utility.getCartV2();
        gfgConsolidatedCustomDiscount.gfgProgressBar.state.cartData = cartData;
        
        const progressData = gfgConsolidatedCustomDiscount.gfgProgressBar.f.calculateProgress(customDiscount, cartData);
        const segments = customDiscount.segmentsData?.segmentsList || [];

        if (segments.length === 1) {
          // Update single segment progress bar
          this.updateSingleSegmentWidget(existingWidget, customDiscount, progressData, segments[0]);
        } else if (segments.length > 1) {
          // Update multiple segments progress bar
          this.updateMultipleSegmentsWidget(existingWidget, customDiscount, progressData, segments);
        }

        // Update heading if enabled
        this.updateWidgetHeading(existingWidget, customDiscount, progressData, segments);

        return { generatedUI: existingWidget, offer: customDiscount };
      } catch (error) {
        gfg.utility.debugError("Error in handleWidgetChanges", error); 
        return await gfgConsolidatedCustomDiscount.gfgProgressBar.initialize(customDiscount, pageType);
      }
    },

    updateSingleSegmentWidget: function(widget, customDiscount, progressData, segment) {
      try {
        const targetValue = parseFloat(segment.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
        const currentValue = progressData.currentValue;
        const progress = Math.min((currentValue / targetValue) * 100, 100);

        // Update progress bar fill
        const progressBarFill = widget.querySelector('.gfgDynamicProgressBar');
        if (progressBarFill) {
          progressBarFill.style.width = `${progress}%`;
        }

        // Update progress indicator position
        const progressIndicator = widget.querySelector('.gfgCCDSingleProgressBarIndicator');
        const progressFill = widget.querySelector('.gfgCCDProgressBarFill');
        if (progressIndicator && progressFill) {
          const leftPosition = progress === 0 ? "0px" : `calc(${progress}% - 9px)`;
          progressIndicator.style.left = leftPosition;
          progressFill.style.width = `${progress}%`;
        }
      } catch (error) {
        gfg.utility.debugError("Error in updateSingleSegmentWidget", error);
      }
    },

    updateMultipleSegmentsWidget: function(widget, customDiscount, progressData, segments) {
      try {
        const prevProgress = +widget.querySelector('.gfgProgressBarSegmentsContainer').dataset.totalprogress;
        let currentProgress = 0;
        const progressFillsToModify = [];
        const segmentAchievement = gfgConsolidatedCustomDiscount.gfgProgressBar.f.checkSegmentAchievement(segments, progressData);
        // Update each segment's progress bar fill
        let segmentIndex = 0;
        const progressFills = widget.querySelectorAll('.gfgCCDProgressBarFill');
        const progressCheckmarks = widget.querySelectorAll('.gfgCCDProgressBarCheckmark');

        segmentAchievement.achievedSegments.forEach((segment) => {
          const progressFill = progressFills[segmentIndex];
          if (progressFill) {
            currentProgress += 100;
            progressFillsToModify.push({progressFill, progress: 100, progressCheckmark: progressCheckmarks[segmentIndex]});
          }
          
          segmentIndex++;
        });

        if (segmentAchievement.nextSegment) {
          currentProgress += segmentAchievement.nextSegment.progress;
          progressFillsToModify.push({
            progressFill: progressFills[segmentIndex],
            progress: segmentAchievement.nextSegment.progress,
            progressCheckmark: progressCheckmarks[segmentIndex],
          });
          segmentIndex++;
        }

        for (let i = segmentIndex; i < progressFills.length; i++) {
          progressFillsToModify.push({
            progressFill: progressFills[i],
            progress: segmentAchievement.allSegmentsAchieved ? 100 : 0,
            progressCheckmark: progressCheckmarks[i],
          });
        }

        if(currentProgress < prevProgress) {
          progressFillsToModify.reverse();
        }

        const styles = customDiscount.widgetSettings.styles;

        progressFillsToModify.forEach((progressFill, index) => {
          setTimeout(() => {
            if (progressFill.progressFill) {
              progressFill.progressFill.style.width = `${progressFill.progress}%`;
            }
            if (progressFill.progressCheckmark) {
              progressFill.progressCheckmark.innerHTML = progressFill.progress === 100 ? SVG_ICONS.CHECK_MARK_ICON : "";
              progressFill.progressCheckmark.style.border = progressFill.progress === 100 ? `2px solid ${styles.barFillColor || "#000000"}` : `2px solid ${styles.barEmptyColor || "#CCCCCC"}`;
            }
          }, index * 100);
        });

        widget.querySelector('.gfgProgressBarSegmentsContainer').dataset.totalprogress = currentProgress;

      } catch (error) {
        gfg.utility.debugError("Error in updateMultipleSegmentsWidget", error);
      }
    },

    updateWidgetHeading: function(widget, customDiscount, progressData, segments) {
      try {
        const headingElement = widget.querySelector('.gfgCCDProgressBarHeadingText');
        if (!headingElement) return;

        const segmentAchievement = gfgConsolidatedCustomDiscount.gfgProgressBar.f.checkSegmentAchievement(segments, progressData);
        const nextSegment = segmentAchievement.nextSegment;
        const currLocale = gfg.utility.getLocale() || "en";
        
        let headingText;
        let headingTitle = customDiscount.widgetSettings.heading.title;
        if (segmentAchievement.allSegmentsAchieved) {
          headingText = headingTitle?.[currLocale]?.conditionMetText || headingTitle?.en?.conditionMetText
        } else {
          headingText = headingTitle?.[currLocale]?.conditionNotMetText || headingTitle?.en?.conditionNotMetText
          
          if (headingText && nextSegment) {
            headingText = gfgConsolidatedCustomDiscount.gfgProgressBar.f.replaceTextVariables(
              headingText, progressData, nextSegment, gfg.utility.getCurrencySymbol(), customDiscount._id
            );
          }
          const targetValue = parseFloat(nextSegment.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
          const currentValue = progressData.currentValue;
          const currencyRate = gfg.utility.getActiveCurrencyRate();
          const remainingAmount = Math.max(0, targetValue - currentValue) * (progressData.progressType === "quantity" ? 1 : currencyRate);
          gfgConsolidatedCustomDiscount.utility.changeNumber(remainingAmount, `animatedNumber-${customDiscount._id}`);
        }
        if (headingText) {
          setTimeout(() => {
            headingElement.innerHTML = headingText;
          }, 300);
        }
      } catch (error) {
        gfg.utility.debugError("Error in updateWidgetHeading", error);
      }
    },
    
    f: {
      getQualifierValue: function(rule, cartData) {
        try {
          const qualifierType = rule.ruleValue?.qualifierType;
          let currentValue = 0;
          let progressType = "amount";
          const qualifiedItems = cartData.items.filter(item => gfgConsolidatedCustomDiscount.gfgProgressBar.f.isItemMatchingRule(item, rule))
          const currencyRate = gfg.utility.getActiveCurrencyRate();
              if (qualifierType === "overallQty") {
                progressType = "quantity";
                // Calculate total quantity of matching products/collections
                currentValue = qualifiedItems.reduce((total, item) => total + item.quantity, 0);
              } else if (qualifierType === "overallSubtotal") {
                // Calculate total subtotal of matching products/collections
                currentValue = qualifiedItems.reduce((total, item) => total + (item.price * item.quantity), 0) / (100 * currencyRate);
              } else if (qualifierType === "overallDiscountedSubtotal") {
                qualifiedItems.forEach(item => currentValue += (item.discounted_price * item.quantity)/100);
              }
              return {currentValue, progressType};
        } catch (error) {
          gfg.utility.debugError("Error in getQualifierValue", error);
          return 0;
        }
      },
      calculateProgress: function(customDiscount, cartData) {
        try {
          const segmentData = customDiscount.segmentsData?.segmentsList?.[0];
          if (!segmentData?.buyXRulesData?.rulesList?.[0]) {
            return { currentValue: 0, ruleType: 'cartSubtotal', cartData: cartData };
          }
          
          const rule = segmentData.buyXRulesData.rulesList[0];
          let progressType = "amount";
          let currentValue = 0;
          const currencyRate = gfg.utility.getActiveCurrencyRate();

          // Repair cartData: remove free gift products and adjust totals
          // total_price, items_subtotal_price already exclude free gifts (line_price & final_line_price are 0 for free gifts)
          // original_total_price, total_discount, item_count include free gift values and need deduction
          const repairedCartData = JSON.parse(JSON.stringify(cartData));
          const freeItems = repairedCartData.items.filter(item => item.properties?.["_free_product"]);
          repairedCartData.items = repairedCartData.items.filter(item => !item.properties?.["_free_product"]);

          if (freeItems.length > 0) {
            repairedCartData.original_total_price -= freeItems.reduce((sum, item) => sum + (item.original_line_price || 0), 0);
            repairedCartData.item_count -= freeItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
          }

          switch (rule?.ruleType) {
            case "cartSubtotal":
              currentValue = repairedCartData.original_total_price / (100 * currencyRate);
              break;
            
            case "discountedCartSubtotal":
              currentValue = repairedCartData?.items?.reduce((sum, item) => sum + (item?.final_line_price || 0), 0) / (100 * currencyRate);
              if (repairedCartData?.cart_level_discount_applications?.length > 0) {
                const cartLevelDiscountTotal = repairedCartData.cart_level_discount_applications.reduce(
                  (sum, discount) => sum + (discount?.discount_application?.total_allocated_amount || 0), 0
                );
                currentValue = currentValue - (cartLevelDiscountTotal / (100 * currencyRate));
              }
              break;

            case "cartQuantity":
              currentValue = repairedCartData.item_count;
              progressType = "quantity";
              break;
            
            case "products":
            case "collections":
            case "productVariants":
              const qualifierValue = gfgConsolidatedCustomDiscount.gfgProgressBar.f.getQualifierValue(rule, repairedCartData);
              currentValue = qualifierValue.currentValue;
              progressType = qualifierValue.progressType;
              break;
              
            default:
              currentValue = 0;
              break;
          }

          return {
            currentValue: currentValue,
            ruleType: rule.ruleType,
            progressType: progressType,
            cartData: repairedCartData
          };
        } catch (error) {
          gfg.utility.debugError("Error in calculateProgress", error);
          return { currentValue: 0, progressType: 'cartSubtotal', cartData: cartData };
        }
      },

      isItemMatchingRule: function(item, rule) {
        try {
          let result = false;
          const ruleType = rule.ruleType;
          const targetItems = rule.ruleValue?.value || [];
          const lineAttributeObj = item.properties;
          const lineAttributeValue = lineAttributeObj["_free_product"];
          if(lineAttributeValue) return false;
          
          if (ruleType === "products") {
            result = targetItems.some(product => 
              item.product_id === product.productId || 
              item.handle === product.handle ||
              item.product_id.toString() === product.productId?.toString()
            );
          } else if (ruleType === "collections") {
            // Check if item belongs to any of the target collections
            const shopName = window.Shopify.shop;
            const cachedProductData = JSON.parse(sessionStorage.getItem(`customFunctionProductData-${shopName}`));
            result = targetItems.some(collection => 
              (cachedProductData[item.product_id]?.collections && cachedProductData[item.product_id].collections.some(col => col.id === collection.id))
            );
          } else if (ruleType === "productVariants") {
            const validVariantIds = targetItems.map(product => product.variants.map(variant => variant.variantId)).flat();
            result = validVariantIds.some(variantId => (item.variant_id === variantId || item.variant_id.toString() === variantId?.toString()));
          }
          return result;
        } catch (error) {
          gfg.utility.debugError("Error in isItemMatchingRule", error);
          return false;
        }
      },
      
      checkSegmentAchievement: function(segments, currentProgress) {
        try {
          const achievedSegments = [];
          let nextSegment = null;
          
          const sortedSegments = [...segments].sort((a, b) => {
            const aValue = parseFloat(a.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
            const bValue = parseFloat(b.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
            return aValue - bValue;
          });
          
          for (let i = 0; i < sortedSegments.length; i++) {
            const segment = sortedSegments[i];
            const targetValue = parseFloat(segment.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
            
            // if(segment.goalType !== "FREE_GIFT") {
            //   const cartData = gfgConsolidatedCustomDiscount.gfgProgressBar.state.cartData;
            //   const discountAllocations = gfgConsolidatedCustomDiscount.f.getDiscountAllocations(cartData);
            //   const discountAppliedByCurrentSegment = parseFloat(discountAllocations[segment.message] ||0);
            //   currentProgress.currentValue += discountAppliedByCurrentSegment;
            // }
            
            if (currentProgress.currentValue >= targetValue) {
              achievedSegments.push({...segment, index: i, isAchieved: true, segmentQualifyValue: targetValue});
            } else if (!nextSegment && achievedSegments.length !== sortedSegments.length) {
              const prevTargetValue = parseFloat(sortedSegments[i - 1]?.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
              const nextSegmentProgress = Math.min((currentProgress.currentValue - prevTargetValue) / (targetValue - prevTargetValue) * 100, 100);
              nextSegment = {...segment, index: i, isAchieved: false, segmentQualifyValue: targetValue, progress: nextSegmentProgress};
              break;
            }
          }

          return {
            achievedSegments: achievedSegments,
            nextSegment: nextSegment,
            allSegmentsAchieved: achievedSegments.length === sortedSegments.length
          };
        } catch (error) {
          gfg.utility.debugError("Error in checkSegmentAchievement", error);
          return { achievedSegments: [], nextSegment: null, allSegmentsAchieved: false };
        }
      },
      checkIfFreeGiftIsUnlocked: async function(refId, freeGiftRuleId, cartData) {
        try {
          const discountData = gfg.settings.consolidatedCombinedDiscount.find(discount => discount._id === refId);
          if(!discountData) return false;
          const customerEligibility = await gfg.customDiscountValidationFunctions.checkRulesToHandleWidgetVisibility(discountData)
          if(!customerEligibility) {
            return false;
          }

          const segments = discountData.segmentsData?.segmentsList || [];
          const progressData = gfgConsolidatedCustomDiscount.gfgProgressBar.f.calculateProgress(discountData, cartData);
          const segmentAchievement = gfgConsolidatedCustomDiscount.gfgProgressBar.f.checkSegmentAchievement(segments, progressData);

          if(discountData?.advancedSettings?.addHighestTierGift) {
          // Find the achieved segment with the highest priority
            let highestPrioritySegment = null;
            // Only consider segments where goalType is "FREE_GIFT"
            const freeGiftSegments = segmentAchievement.achievedSegments.filter(segment => segment.goalType === "FREE_GIFT");
            if (freeGiftSegments.length > 0) {
              highestPrioritySegment = freeGiftSegments.reduce((max, segment) => {
                if (max === null) return segment;
                if ((segment.priority || 0) > (max.priority || 0)) return segment;
                return max;
              }, null);
            }
            if(highestPrioritySegment) {
              segmentAchievement.achievedSegments = [highestPrioritySegment]
            }
          }
         
          for(let segment of segmentAchievement.achievedSegments) {
            if(segment.goalId === freeGiftRuleId) {
              return true;
            }
          }
          return false;

        } catch (error) {
          gfg.utility.debugError("Error in checkIfFreeGiftIsUnlocked", error);
          return false;
        }
      },
      prepareProgressBarUI: function(customDiscount, pageType, progressData) {
        try {
          const { widgetSettings } = customDiscount;
          const segments = customDiscount.segmentsData?.segmentsList || [];
          
          const progressBarContainer = gfgConsolidatedCustomDiscount.gfgProgressBar.components.createProgressBarContainer(
            customDiscount, 
            pageType, 
            widgetSettings.styles
          );
          
          
          if (widgetSettings.heading.isEnabled || segments.length === 1) {
            const headingElement = gfgConsolidatedCustomDiscount.gfgProgressBar.f.prepareHeading(customDiscount, progressData);
            progressBarContainer.appendChild(headingElement);
          }
          
          if (segments.length === 1) {
            const singleSegmentElement = gfgConsolidatedCustomDiscount.render.prepareSingleSegmentProgressBar(customDiscount, progressData);
            progressBarContainer.appendChild(singleSegmentElement);
          } else {
            const multipleSegmentsElement = gfgConsolidatedCustomDiscount.render.prepareMultipleSegmentsProgressBar(customDiscount, progressData);
            progressBarContainer.appendChild(multipleSegmentsElement);
          }
          
          return progressBarContainer;
        } catch (error) {
          gfg.utility.debugError("Error in prepareProgressBarUI", error); 
        }
      },
      
      prepareHeading: function(customDiscount, progressData) {
        try {
          const heading = customDiscount.widgetSettings.heading;
          const styles = customDiscount.widgetSettings.styles;
          const currencySymbol = gfg.utility.getCurrencySymbol();
          const currLocale = gfg.utility.getLocale() || "en";
          const segments = customDiscount.segmentsData?.segmentsList || [];
          const segmentAchievement = gfgConsolidatedCustomDiscount.gfgProgressBar.f.checkSegmentAchievement(segments, progressData);
          
          let headingText;
          if (segmentAchievement.allSegmentsAchieved) {
            headingText = heading.title[currLocale]?.conditionMetText || heading.title.en.conditionMetText;
          } else {
            headingText = heading.title[currLocale]?.conditionNotMetText || heading.title.en.conditionNotMetText;
            headingText = gfgConsolidatedCustomDiscount.gfgProgressBar.f.replaceTextVariables(headingText, progressData, segmentAchievement.nextSegment, currencySymbol, customDiscount._id);
          }
          const headingTextElement = gfgCustomDiscount.utility.createElementWithAttributes("div", {
            class: "gfgCCDProgressBarHeadingText",
            innerHTML: headingText,
            style: `
              font-size: ${styles.headingSize || "14px"};
            `
          });
          
          const headingContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", {
            class: "gfgCCDProgressBarHeadingContainer"
          });
          let iconUrl = customDiscount.widgetSettings.heading.iconUrl;

          let imageElement = null;
          const unifiedWidgetSvgs = {
            "UNIFIED_WIDGET_DISCOUNT_ICON": UNIFIED_WIDGET_DISCOUNT_ICON,
            "UNIFIED_WIDGET_FREE_GIFT_ICON": UNIFIED_WIDGET_FREE_GIFT_ICON,
            "UNIFIED_WIDGET_SHIPPING_DISCOUNT_ICON": UNIFIED_WIDGET_SHIPPING_DISCOUNT_ICON
          };
          
          if(unifiedWidgetSvgs[iconUrl]) {
            const svgWrapper = gfgCustomDiscount.utility.createElementWithAttributes("div", {
              class: "gfgCCDProgressBarHeadingIcon",
              innerHTML: unifiedWidgetSvgs[iconUrl],
              style: `
                --icon-color: ${styles.iconColor || "#000000"};
                display: flex;
                align-items: center;
                justify-content: center;
                --icon-size: ${styles.iconSize || "16px"};
              `
            });
            imageElement = svgWrapper;
          } else if(iconUrl) {
            imageElement = gfgCustomDiscount.utility.createElementWithAttributes("img", {
              src: iconUrl,
              class: "gfgCCDProgressBarHeadingIcon",
              alt: "heading icon",
              style: `
                --icon-size: ${styles.iconSize || "16px"};
              `
            });
          }

          if(imageElement) {
            headingContainer.appendChild(imageElement);
          }
          headingContainer.appendChild(headingTextElement);
          return headingContainer;
        } catch (error) {
          gfg.utility.debugError("Error in prepareHeading", error);
        }
      },
      
      replaceTextVariables: function(text, progressData, segment, currencySymbol, discountId) {
        try {
          if (!text || !segment) return text;
          const currLocale = gfg.utility.getLocale() || "en";
          const currencyRate = gfg.utility.getActiveCurrencyRate();
          const targetValue = parseFloat(segment.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
          const currentValue = progressData.currentValue;
          let remainingAmount = Math.max(0, targetValue - currentValue) * (progressData.progressType === "quantity" ? 1 : currencyRate);
          remainingAmount = remainingAmount.toFixed((progressData.progressType === "quantity" || remainingAmount % 1 === 0) ? 0 : 2);
          const discountValue = segment.discountValue;
          
          let replacedText = text;
          replacedText = replacedText.replace(/{{CURRENCY}}/g, currencySymbol);
          replacedText = replacedText.replace(/{{DISCOUNT_VALUE}}/g, discountValue);
          replacedText = replacedText.replace(/{{MIN_AMOUNT}}/g, segment.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue);
          if(discountId) {
            let ruleText = segment.widgetSettings?.ruleText;
            let segmentText = ruleText?.[currLocale]?.conditionMetText || ruleText?.en?.conditionMetText || 'next goal';
            segmentText = gfgConsolidatedCustomDiscount.gfgProgressBar.f.replaceTextVariables(segmentText, progressData, segment, currencySymbol);
            replacedText = replacedText.replace(/{{NEXT_TIER_TITLE}}/g, segmentText);
            replacedText = replacedText.replace(/{{REMAINING_AMOUNT}}/g, `<span id="animatedNumber-${discountId}">${remainingAmount}</span>`);
          }
          
          return replacedText;
        } catch (error) {
          gfg.utility.debugError("Error in replaceTextVariables", error);
          return text;
        }
      },
      
      removeWidgetIfAlreadyExists: function(customDiscount, pageType) {
        try {
          const existingWidget = document.getElementById(`${customDiscount.title}_${pageType}`);
          if (existingWidget) {
            existingWidget.remove();
          }
        } catch (error) {
          gfg.utility.debugError("Error in removeWidgetIfAlreadyExists", error); 
        }
      },
      
      prepareSegmentItem: function(progress, styles, elementPosition, shouldAddProgressFill) {
        try {
          const segmentContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", { class: `gfgCCDProgressBarSegmentItem`});
          
          const progressBar = gfgConsolidatedCustomDiscount.gfgProgressBar.components.createProgressBar(
            progress, 
            styles,
            elementPosition,
            shouldAddProgressFill,
          );

          const progressBarCheckmark = gfgCustomDiscount.utility.createElementWithAttributes("div", {
            class: "gfgCCDProgressBarCheckmark",
            innerHTML: progress === 100 ? SVG_ICONS.CHECK_MARK_ICON : "",
            style: `
              --bar-fill-color: ${styles.barFillColor || "#000000"};
              border: 2px solid ${progress === 100 ? (styles.barFillColor || "#000000"): (styles.barEmptyColor || "#CCCCCC")};
            `
          });

          segmentContainer.appendChild(progressBar);
          segmentContainer.appendChild(progressBarCheckmark);
      
          return segmentContainer;
        } catch (error) {
          gfg.utility.debugError("Error in prepareSegmentItem", error);
        }
      }
    },
  },
  gfgDynamicBogo: {
    init: async function(dynamicBogoDiscounts, pageType) {
      try {
        const preparedBXGYWidgetUI = await gfgConsolidatedCustomDiscount.gfgDynamicBogo.f.preapreUIFromConsolidatedDynamicBogoUI(dynamicBogoDiscounts, pageType);
        gfgCustomDiscount.f.insertIntoPageWrapper(preparedBXGYWidgetUI, pageType, "CUSTOM_DISCOUNT");
        // gfgCustomDiscount.gfgBXGY.actions.registerActions(pageType) // Handled by registerGlobalClickListener for lazy-loaded sidecart support
      } catch (error) {
        gfg.utility.debugConsole("Error inside gfgConsolidatedCustomDiscount gfgDynamicBogo init fn", error);
      }
    },
    f: {
      preapreUIFromConsolidatedDynamicBogoUI: async function (dynamicBogoDiscounts, pageType) {
        try {
          const preparedWidgets = [];
          const convertedDynamicBogoDiscounts = dynamicBogoDiscounts.map(discount => gfgConsolidatedCustomDiscount.gfgDynamicBogo.f.convertCCDSchemaToDynamicBogoSchema(discount));
          let cartData = await gfg.utility.getCartV2();
          
          for(let discountData of convertedDynamicBogoDiscounts) {
            await gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.prepareTargetsForBuyXGetYDiscount(discountData, cartData);
            await gfgCustomDiscount?.gfgBXGY?.f?.getDiscountEligibleProducts(discountData);
            const shouldRenderWidget = await gfgCustomDiscount.gfgBXGY.f.checkIfWidgetShouldBeVisible(discountData, pageType)
          
            if(!shouldRenderWidget) {
              continue;
            }

            // console.time("timer-x");
            const isBuyXGetYWidgetDisabled = await gfgCustomDiscount.gfgBXGY.f.checkIfGetYProductsCanBeAddedToCart(discountData);
            discountData.isBuyXGetYWidgetDisabled = isBuyXGetYWidgetDisabled;
            // console.timeEnd("timer-x");

            let gfgPreparedCustomDiscountWidget = gfgCustomDiscount.gfgBXGY.f.prepareUI(discountData, pageType);
            preparedWidgets.push({generatedUI: gfgPreparedCustomDiscountWidget, offer: discountData});
         }
          return preparedWidgets;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgConsolidatedCustomDiscount preapreUIFromConsolidatedDynamicBogoUI fn", error);
        }
      },
      convertCCDSchemaToDynamicBogoSchema: function(ccdForm) {
        try {
          const oldForm = {
              _id: ccdForm._id,
              title: ccdForm.title,
              discountFunctionType: "BUYX_GETY_DISCOUNT",
              rulesData: ccdForm.discountTriggeredRulesData,
              customerEligibilityRules: ccdForm.customerEligibilityRules,
              discountSettings: {
                discountId: ccdForm.discountId,
                type: ccdForm.segmentsData.segmentsList[0].discountType,
                value: ccdForm.segmentsData.segmentsList[0].discountValue,
                mode: ccdForm.mode,
                combinesWithOrderDiscounts: ccdForm.combinesWithOrderDiscounts,
                combinesWithProductDiscounts: ccdForm.combinesWithProductDiscounts,
                combinesWithShippingDiscounts: ccdForm.combinesWithShippingDiscounts,
                rulesData: {
                    rulesGlobalOperator:"OR",
                    rulesGlobalList: ccdForm.segmentsData.segmentsList.map(segment => ({
                        rulesOperator: "OR",
                        discountApplicationStrategy: segment.discountApplicationStrategy,
                        rulesList: [{
                            buyXRule: {
                                type: "DISCOUNT_BXGY",
                                ruleType: segment.buyXRulesData.rulesList[0].ruleType,
                                ruleValue: gfgConsolidatedCustomDiscount.gfgDynamicBogo.f.getRuleValueWithSpecificKey(
                                  segment.buyXRulesData.rulesList[0].ruleValue,
                                  segment.buyXRulesData.rulesList[0].ruleType
                                ),
                                itemCount: segment.buyXRulesData.itemCount,
                                ruleId: "selectRule-0-forY-0-buyXRule"
                            },
                            getYRule: {
                                type: "DISCOUNT_BXGY",
                                ruleType: segment.getYRulesData.rulesList[0].ruleType,
                                ruleValue: gfgConsolidatedCustomDiscount.gfgDynamicBogo.f.getRuleValueWithSpecificKey(
                                  segment.getYRulesData.rulesList[0].ruleValue,
                                  segment.getYRulesData.rulesList[0].ruleType
                                ),
                                itemCount: segment.getYRulesData.itemCount,
                                ruleId: "selectRule-0-forY-0-getYRule"
                            },
                            discountValue: segment.discountValue,
                            message: segment.message,
                            maxDiscountableSets: segment.discountableSetLimit,
                            appliesToEachItem: segment.appliesToEachItem,
                            sortBasedOn: segment.sortBasedOn,
                            sortByOrder: segment.sortByOrder
                        }]
                    }))
                }
            },
            isEnabled: ccdForm.isEnabled,
            campaignScheduleData: ccdForm.campaignScheduleData,
            widgetSettings: ccdForm.widgetSettings
          };
          return oldForm;
        } catch (error) {
          gfg.utility.debugError("Error inside gfgConsolidatedCustomDiscount convertCCDSchemaToDynamicBogoSchema fn", error);
        }
      },
      getRuleValueWithSpecificKey: function(ruleValue, ruleType) {
        let ruleSpecificValue;
        switch (ruleType) {
          case "products":
          case "productVariants":
            ruleSpecificValue = "products";
            break;
          case "collections":
            ruleSpecificValue = "collections";
            break;
          case "productTags":
            ruleSpecificValue = "tags";
            break;
          case "productTypes":
            ruleSpecificValue = "types";
            break;
        }
        if (ruleSpecificValue) {
          ruleValue[ruleSpecificValue] = ruleValue.value;
        }
        return ruleValue;
      }
    },
  },
  utility: {
    changeNumber: function(newNumber, elementId) {
      const numberElement = document.getElementById(elementId);
      if (!numberElement) return;
      const startNumber = parseFloat(numberElement.textContent);
      const targetNumber = parseFloat(newNumber);

      if(startNumber === targetNumber) return;
      const duration = 300; // 2 seconds animation
      const startTime = performance.now();      
      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const currentNumber = startNumber + (targetNumber - startNumber) * progress;
        numberElement.textContent = currentNumber.toFixed(2);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  },
  render: {
    prepareMultipleSegmentsProgressBar: function (discountData) {
      try {
        const { widgetSettings } = discountData;
        const styles = widgetSettings.styles;
        const segments = discountData.segmentsData?.segmentsList || [];
        let totalProgress = 0;
        
        // Get cart data
        const cartData = gfgConsolidatedCustomDiscount.gfgProgressBar.state.cartData;
        if (!cartData) return null;
        
        // Calculate progress
        const progressData = gfgConsolidatedCustomDiscount.gfgProgressBar.f.calculateProgress(discountData, cartData);
        const segmentAchievement = gfgConsolidatedCustomDiscount.gfgProgressBar.f.checkSegmentAchievement(segments, progressData);
        
        const progressBarContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", {
          class: "gfgCCDProgressBarContainer",
          style: `
            display: grid;
            grid-template-columns: 1fr ${Array(segments.length - 1).fill("2fr").join(" ")} 1fr;
          `
        });

        const segmentTextContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", {
          class: "gfgCCDProgressBarSegmentTextContainer",
          style: `
            display: grid;
            grid-template-columns: repeat(${segments.length}, 1fr);
            gap: 5px;
          `
        });
                
        const sortedSegments = [...segments].sort((a, b) => {
          const aValue = parseFloat(a.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
          const bValue = parseFloat(b.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
          return aValue - bValue;
        });
        
        let shouldAddProgressFill = true;
        sortedSegments.forEach((segment, index) => {
          const targetValue = parseFloat(segment.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
          const isAchieved = segmentAchievement.achievedSegments.some(achieved => 
            parseFloat(achieved.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0) === targetValue
          );

          const prevTargetValue = parseFloat(sortedSegments[index - 1]?.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
          const progress = Math.min((progressData.currentValue - prevTargetValue) / (targetValue - prevTargetValue) * 100, 100);
          let elementPosition = index === 0 ? "first" : "middle";
          const segmentItem = gfgConsolidatedCustomDiscount.gfgProgressBar.f.prepareSegmentItem(progress, styles, elementPosition, shouldAddProgressFill);
          progressBarContainer.appendChild(segmentItem);
          totalProgress += progress;

          const segmentText = gfgConsolidatedCustomDiscount.gfgProgressBar.components.createSegmentText(
            segment, 
            progressData, 
            styles
          );

          segmentTextContainer.appendChild(segmentText);

          if(!isAchieved) {
            shouldAddProgressFill = false;
          }
        });

        const dummyTail = gfgConsolidatedCustomDiscount.gfgProgressBar.components.createProgressBar(
          100, 
          styles,
          "last",
          shouldAddProgressFill,
        );

        progressBarContainer.appendChild(dummyTail);
        const multipleSegmentsContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", { 
          class: "gfgProgressBarSegmentsContainer", 
          "data-totalprogress": totalProgress
        });
        multipleSegmentsContainer.appendChild(progressBarContainer);
        multipleSegmentsContainer.appendChild(segmentTextContainer);

        return multipleSegmentsContainer;
      } catch (error) {
        gfg.utility.debugError("Error inside gfgConsolidatedCustomDiscount render prepareProgressBar fn", error);
      }
    },
    prepareSingleSegmentProgressBar: function (discountData) {
      try {
        const { widgetSettings } = discountData;
        const styles = widgetSettings.styles;
        const segments = discountData.segmentsData?.segmentsList || [];
        const segment = segments[0];
        
        // Get cart data
        const cartData = gfgConsolidatedCustomDiscount.gfgProgressBar.state.cartData;
        if (!cartData) return null;
        
        // Calculate progress
        const progressData = gfgConsolidatedCustomDiscount.gfgProgressBar.f.calculateProgress(discountData, cartData);
        const targetValue = parseFloat(segment.buyXRulesData?.rulesList?.[0]?.ruleValue?.qualifierValue || 0);
        const currentValue = progressData.currentValue;
        const progress = Math.min((currentValue / targetValue) * 100, 100);
        
        const singleSegmentContainer = gfgCustomDiscount.utility.createElementWithAttributes("div", {
          class: "gfgCCDProgressBarSingleSegmentContainer"
        });

        const segmentItem = gfgCustomDiscount.utility.createElementWithAttributes("div", {
          class: "gfgCCDProgressBarSegmentItem",
        });
        
        const progressBarWrapper = gfgCustomDiscount.utility.createElementWithAttributes("div", {
          class: "gfgCCDProgressBarWrapper",
          style: `
            border-radius: ${styles.borderRadius || "10px"};
            background: ${styles.barEmptyColor || "#e0e0e0"};
          `
        });
        
        const progressBarFill = gfgCustomDiscount.utility.createElementWithAttributes("div", {
          class: "gfgCCDProgressBarFill",
          style: `
            background: ${styles.barFillColor || "#d91717"};
            width: ${progress}%;
          `
        });

        const leftPosition = progress === 0 ? "0px" : `calc(${progress}% - 9px)`;
        const progressIndicator = gfgCustomDiscount.utility.createElementWithAttributes("div", {
          class: "gfgCCDSingleProgressBarIndicator",
          style: `
            left: ${leftPosition};
            background-color: ${styles.barFillColor || "#d91717"};
          `
        });
        
        progressBarWrapper.appendChild(progressBarFill);
        progressBarWrapper.appendChild(progressIndicator);
        segmentItem.appendChild(progressBarWrapper);
        singleSegmentContainer.appendChild(segmentItem);
        
        if (segment.widgetSettings?.segmentLink && segment.widgetSettings?.segmentLinkText) {
          const linkElement = gfgCustomDiscount.utility.createElementWithAttributes("a", {
            class: "gfgCCDProgressBarSegmentLink",
            href: segment.widgetSettings.segmentLink,
            innerText: segment.widgetSettings.segmentLinkText,
            target: "_blank",
            style: `
              color: ${styles.textColor || "#3c3c3c"};
            `
          });
          singleSegmentContainer.appendChild(linkElement);
        }
        
        return singleSegmentContainer;
      } catch (error) {
        gfg.utility.debugError("Error inside gfgConsolidatedCustomDiscount render prepareSingleCheckpointProgressBar fn", error);
      }
    },
  },
  action: {},
  event: {},
};


// gfgVolDiscount - Volume Discount feature (migrated from freeGiftLogicv1.js)
let gfgVolDiscountDef = {
        state:{
            isAddToCartButtonOverwrite: false,
            isCartUpdatedByUs: false,
            customerSpecificDiscount: [],
            defaultTierSelectedQuantity: null,
            isDefaultTierSelectionDone: false,
            currentSelectedVariant: null,

        },
        init: async function (settings, parent) {
            try{
                gfg.gfgVolDiscount.initialize(settings, parent)
            }catch(error){
                gfg.utility.debugError("Error in gfgVolDiscount init", error);
            }
        },
        initialize: async function (settings, parent) {

            try {
                
                gfg.gfgVolDiscount.f.removeInactiveCampaigns();
                gfg.f.getProductPageHandle(settings);
                gfg.f.getProductPageId(settings);
    
    
                const cartData = await gfg.utility.getCartV2();
                await gfg.customDiscountValidationFunctions.getLatestCartItemsProductData(cartData);

                if (parent == "PRODUCT_PAGE") {
    
                    let volDiscountDataForProductPage = await gfg.gfgVolDiscount.f.getVolDiscountDataForProductPage();
                    if(volDiscountDataForProductPage){
                        let gfgVolDiscountPageHtml = gfg.gfgVolDiscount.f.prepareUI(parent,volDiscountDataForProductPage)
                        gfg.gfgVolDiscount.f.insertIntoPageWrapper(gfgVolDiscountPageHtml, parent)
                        
                    }
                }
    
                if (parent == "CART_PAGE") {
                    let gfgVolDiscountCartPageHtml = await gfg.gfgVolDiscount.f.prepareBulkDiscountRulesWidgets(settings)
                    gfg.gfgVolDiscount.f.insertIntoPageWrapper(gfgVolDiscountCartPageHtml, parent)
                }
            } catch (error) {
                gfg.utility.debugConsole("Error in gfgVolDiscount initialize", error);
                throw error;
            }


        },
        f: {
            
            insertIntoPageWrapper: function (gfgVolDiscountPageHtml, parent) {
                try {
                    if(gfgVolDiscountPageHtml){
                        if (parent === "PRODUCT_PAGE") {
                            let gfgVolDiscountWrapperProductEle = gfg.utility.findWrapperElement("VOLUME_DISCOUNT", "PRODUCT_PAGE", null);
    
                            gfgVolDiscountWrapperProductEle.forEach((element) => {
                                element.innerHTML = '';
                                element.innerHTML = gfgVolDiscountPageHtml.outerHTML;
                            });
    
                        } else if (parent === "CART_PAGE") {
                            let gfgBulkDiscountWidgetHTMLEle = gfg.utility.findWrapperElement("VOLUME_DISCOUNT", "CART_PAGE", null);
    
                            gfgBulkDiscountWidgetHTMLEle.forEach((element) => {
                                element.innerHTML = '';
                                element.innerHTML = gfgVolDiscountPageHtml.outerHTML;
                            });
                        }
    
                        gfg.f.addPoweredByBlock();
                    }

                } catch (error) {
                    gfg.utility.debugConsole("Error in gfgVolDiscount insertIntoPageWrapper fn", error);
                }
            },

            searchObjectById: function(array, idToSearch) {
                for (let i = 0; i < array.length; i++) {
                  if (array[i].id == idToSearch) {
                    return array[i]; // Found the object, return it
                  }
                }
                return null; // If the ID was not found, return null
            },
            removeInactiveCampaigns : function () {
                try{
                    let allDiscounts = JSON.parse(JSON.stringify(gfg.settings.discounts));
    
                    let modifiedDiscounts = [];
                    // now if they have a flag knonw as isCampaignUrlEnabled and if it is true then,
                    // match the activeCampaignName with the value in urlBasedCampaign.value;
                    // if they dont match then remove it from the list.
                    // if they have isCampaignUrlEnabled as false, then let it be there in the list
                    if (allDiscounts && allDiscounts.length > 0) {
                        for(let i=0; i<allDiscounts.length; i++){
                            let item = allDiscounts[i];
                            let activeCampaignName = gfg.state.activeCampaignName
                            let urlBasedCampaign = item.urlBasedCampaign;
                            if (urlBasedCampaign && item.isCampaignUrlEnabled && activeCampaignName == urlBasedCampaign.value) {
                                modifiedDiscounts.push(item);
                            }else if (!urlBasedCampaign || !item.isCampaignUrlEnabled) {
                                modifiedDiscounts.push(item);
                            }
                        }
                    }
                    modifiedDiscounts = gfg.gfgVolDiscount.f.gfgVolumeDiscountFilter(modifiedDiscounts);
                    // filter out the active scheduled campaigns
                    modifiedDiscounts = gfg.gfgVolDiscount.f.gfgFilterActiveScheduledDiscountCampaigns(modifiedDiscounts);
                    gfg.settings.discounts = modifiedDiscounts;
                }catch(error){
                    gfg.utility.debugError(`Error in gfgVolDiscount removeInactiveCampaigns fn`, error);
                }
            },
            replaceVolDiscountProdPageVars: function(currBulkDiscount, rule, originalText) {
                try {
                    const discountProductType = currBulkDiscount.disProducts.type;
                    let text = originalText;
            
                    const prepareTextsAndLinks = (titleHandleArray, productType) => {
                        const moreText = '....';
                        const basePath = productType === "COLLECTIONS" ? "/collections/" : "/products/";
                        const productTypeForHrefFn = productType === "COLLECTIONS" ? "collection" : "product";
                        let texts = "";
                        let linkTexts = "";
            
                        const truncatedArray = titleHandleArray.slice(0, 4);
                        const titles = truncatedArray.map(item => item.title);
            
                        texts = titles.join(", ");
                        linkTexts = truncatedArray.map(item => {
                            // return `<a href="${basePath}${item.handle}" target="_blank">${item.title}</a>`;
                            return `<a href=${gfg.utility.getHrefForProductCollectionHandle(productTypeForHrefFn, item.handle)} target="_blank">${item.title}</a>`;
                        }).join(", ");
            
                        if (titleHandleArray.length > 4) {
                            texts += ' ' + moreText;
                            linkTexts += ' ' + moreText;
                        }
            
                        return { texts, linkTexts };
                    }
            
                    const replacePlaceholders = (type, data) => {
                        const titleHandleArray = data.map(item => ({
                            title: item.title,
                            handle: item.handle
                        }));
                        const { texts, linkTexts } = prepareTextsAndLinks(titleHandleArray, type);
                        const placeholders = ["{{" + type + "}}", "{{" + type + "_LINKS}}", "{{" + type.slice(0, -1) + "}}", "{{" + type.slice(0, -1) + "_LINK}}"];
            
                        placeholders.forEach(placeholder => {
                            text = text.replace(placeholder, placeholder.includes("_LINK") ? linkTexts : texts);
                        });
                    }
            
                    if (discountProductType === "COLLECTIONS") {
                        const collections = currBulkDiscount?.disProducts?.collections || [];
                        replacePlaceholders("COLLECTIONS", collections);
                    } else if (discountProductType === "SELECTED_PRODUCTS") {
                        const selectedProducts = currBulkDiscount?.disProducts?.products || [];
                        replacePlaceholders("PRODUCTS", selectedProducts);
                    }
            
                    return text;
            
                } catch (error) {
                    gfg.utility.debugError(`Error from replaceVolDiscountProdPageVars:`, error); 
                }
            }
            ,
            prepareUIDataWrapper: function(discount) {

                try {
                    
                    const configObject = discount.configuration;
                    const productPageData = discount.productPageData;
                    const variant = gfg.f.getSelectedVariant();
                    const variantObject = this.searchObjectById(productPageData.variants, variant);
                    const symbol = gfg.utility.getCurrencySymbol();
                    let discountTiers = [];
                    gfg.gfgVolDiscount.state.currentSelectedVariant = variantObject;
                    
                
                    const calculateDiscountData = (rule, i, totalPrice, conditionText) => {
                        let discountPrice;
                        let text;
                        let currencySymbol = gfg.utility.getCurrencySymbol();
                        let priceLabel = ' ';
                        let priceValue = 0;
                        if (discount.disValueType === "FIXED_DIS" ) {
                            discountPrice = parseFloat(gfg.utility.getAmountInActiveCurrency(rule.disValue, discount?.useAbsoluteDiscount));
    
    
                            if (discount.conditionType === "COUNT" && discount.fixedDiscountType == "APPLY_TOTAL_ON_EACH_PRODUCT") {
                                discountPrice *= parseInt(rule.conditionValue);
                            }
    
                            text = configObject.tiers[i].label
                                                            .replace("{{CONDITION}}", conditionText)
                                                            .replace("{{DISCOUNT}}", symbol + discountPrice)
                                                            .replaceAll("{{CURRENCY}}", currencySymbol)
                                                            .replace("{{DISCOUNT_AMOUNT}}", discountPrice)
    
                            // if custom script is added to format pricing then format the price
                            if(gfg.state?.formatPriceViaCustomScript){
                                let discountPriceForTextProperty = discountPrice * 100;
                                let conditionTextForTextProperty = conditionText * 100;
    
                                discountPriceForTextProperty = gfg.utility.formatPriceWithSeparator(discountPriceForTextProperty);
                                conditionTextForTextProperty = gfg.utility.formatPriceWithSeparator(conditionTextForTextProperty);
    
                                if(discount.conditionType === "COUNT"){
                                    text = configObject.tiers[i].label
                                                                    .replace("{{CONDITION}}", conditionText)
                                                                    .replace("{{DISCOUNT}}", symbol + discountPriceForTextProperty)
                                                                    .replaceAll("{{CURRENCY}}", currencySymbol)
                                                                    .replace("{{DISCOUNT_AMOUNT}}", discountPriceForTextProperty);
                                }
                                else if(discount.conditionType === "SUBTOTAL"){
                                    text = configObject.tiers[i].label
                                                                    .replace("{{CONDITION}}", conditionTextForTextProperty)
                                                                    .replace("{{DISCOUNT}}", symbol + discountPriceForTextProperty)
                                                                    .replaceAll("{{CURRENCY}}", currencySymbol)
                                                                    .replace("{{DISCOUNT_AMOUNT}}", discountPriceForTextProperty);
                                } 
                            }
    
                            priceLabel = (totalPrice - discountPrice) > 0 ? symbol + (totalPrice - discountPrice) : ' ';
                            priceValue = (totalPrice - discountPrice) > 0 ? (totalPrice - discountPrice) : 0;
    
                        } else if (discount.disValueType === "PERCENTAGE_DIS") {
                            const percent = parseFloat(rule.disValue);
                            discountPrice = (variantObject?.price / 100) * (percent / 100);
                            
                            if (discount.conditionType === "COUNT") {
                                discountPrice *= parseInt(rule.conditionValue);
                            }
    
                            text = configObject.tiers[i].label
                                                            .replace("{{CONDITION}}", conditionText)
                                                            .replace("{{DISCOUNT}}", percent + '%')
                                                            .replace("{{CURRENCY}}", currencySymbol);
    
                             // if custom script is added to format pricing then format the price
                             if(gfg.state?.formatPriceViaCustomScript){
                                let conditionTextForTextProperty = conditionText * 100; 
                                conditionTextForTextProperty = gfg.utility.formatPriceWithSeparator(conditionTextForTextProperty);
    
                                if(discount.conditionType === "SUBTOTAL"){
                                    text = configObject.tiers[i].label.replace("{{CONDITION}}", conditionTextForTextProperty).replace("{{DISCOUNT}}", percent + '%').replace("{{CURRENCY}}", currencySymbol);
                                }
     
                            }
    
                            priceLabel = (totalPrice - discountPrice) > 0 ? symbol + (totalPrice - discountPrice) : ' ';
                            priceValue = (totalPrice - discountPrice) > 0 ? (totalPrice - discountPrice) : 0;
    
                        } else if (discount.disValueType === "FIXED_TOTAL"){
                            discountPrice = parseFloat(gfg.utility.getAmountInActiveCurrency(rule.disValue, discount?.useAbsoluteDiscount));
    
    
                            if (discount.conditionType === "COUNT" && discount.fixedDiscountType == "APPLY_TOTAL_ON_EACH_PRODUCT") {
                                discountPrice *= parseInt(rule.conditionValue);
                            }
                                                    
            
                            text = configObject.tiers[i].label
                                                            .replace("{{CONDITION}}", conditionText)
                                                            .replace("{{DISCOUNT}}", discountPrice)
                                                            .replaceAll("{{CURRENCY}}", currencySymbol)
                                                            .replace("{{DISCOUNT_AMOUNT}}", discountPrice)
                                                            .replace("{{PRODUCT_QUANTITY}}", conditionText);
    
                            // if custom script is added to format pricing then format the price
                            if(gfg.state?.formatPriceViaCustomScript){
                                let discountPriceForTextProperty = discountPrice * 100;
                                let conditionTextForTextProperty = conditionText * 100;
    
                                discountPriceForTextProperty = gfg.utility.formatPriceWithSeparator(discountPriceForTextProperty);
                                conditionTextForTextProperty = gfg.utility.formatPriceWithSeparator(conditionTextForTextProperty);
    
                                if(discount.conditionType === "COUNT"){
                                    text = configObject.tiers[i].label
                                                                    .replace("{{CONDITION}}", conditionText)
                                                                    .replace("{{DISCOUNT}}",  discountPriceForTextProperty)
                                                                    .replaceAll("{{CURRENCY}}", currencySymbol)
                                                                    .replace("{{DISCOUNT_AMOUNT}}", discountPriceForTextProperty)
                                                                    .replace("{{PRODUCT_QUANTITY}}", conditionText);
                                }
                                else if(discount.conditionType === "SUBTOTAL"){
                                    text = configObject.tiers[i].label
                                                                    .replace("{{CONDITION}}", conditionTextForTextProperty)
                                                                    .replace("{{DISCOUNT}}", symbol + discountPriceForTextProperty)
                                                                    .replaceAll("{{CURRENCY}}", currencySymbol)
                                                                    .replace("{{DISCOUNT_AMOUNT}}", discountPriceForTextProperty)
                                                                    .replace("{{PRODUCT_QUANTITY}}", conditionText);
                                } 
                            }
    
                            priceLabel = symbol + discountPrice;
                            priceValue = discountPrice;
                        }
    
    
                        text = gfg.gfgVolDiscount.f.replaceVolDiscountProdPageVars(discount, rule, text)
                        
                        return {
                            priceLabel,
                            priceValue,
                            quantitylabel: discount.conditionType === "COUNT" ? parseInt(rule.conditionValue) : '',
                            strikethroughLabel: symbol + totalPrice,
                            strikethroughValue : parseFloat(totalPrice).toFixed(2),
                            disValueType: discount.disValueType,
                            discountValue: rule.disValue,
                            discountPrice: discountPrice,
                            text: text,
                            label: configObject.tiers[i].label
                        };
                    };
                
                    if (discount.conditionType === "COUNT") {
                        discountTiers = [];
                        discount.rules.forEach((rule, i) => {
                            const qty = parseInt(rule.conditionValue);
                            const totalPrice = (qty * (variantObject.price / 100));
                            discountTiers.push(calculateDiscountData(rule, i, totalPrice, qty));
                        });
                    } else if (discount.conditionType === "SUBTOTAL") {
                        discountTiers = [];
                        discount.rules.forEach((rule, i) => {
                            const subtotal = parseFloat(gfg.utility.getAmountInActiveCurrency(rule.conditionValue));
                            const totalPrice = subtotal;
                            discountTiers.push(calculateDiscountData(rule, i, subtotal, totalPrice));
                        });
                    }
                
                    return {
                        discountTitle: configObject.tierListTitle,
                        discountTiers: discountTiers,
                        note: configObject.note,
                        colors: configObject.colors,
                        conditionType: discount.conditionType,
                        disValueType: discount.disValueType,
                        defaultSelectedTierIndex: discount?.defaultSelectedTier?.tierIndex !== undefined ? discount.defaultSelectedTier.tierIndex : "NONE",
                        mostPopularSelectedTierIndex: discount?.mostPopularSelectedTier?.tierIndex !== undefined ? discount.mostPopularSelectedTier.tierIndex : "NONE",
                    };
                } catch (error) {
                    gfg.utility.debugConsole("Error in gfgVolDiscount prepareUIDataWrapper fn", error);
                    throw error;
                }

            },
            
            prepareUI: function (parent, volDiscountDataForProductPage) {

                try {
                    
                    let data = volDiscountDataForProductPage.prouctUiDataToBeShown;
                    let symbol = gfg.utility.getCurrencySymbol();
                    let disValueType = data.disValueType;
                    let colors = data?.colors;
                    let textColor = colors?.text;
                    let borderColor = colors?.border;
                    let backgroundColor = colors?.background;
                    const selectedRadioBoxBorderColor = colors?.selectedRadioBoxBorderColor || "#4B556C";
                    const configuration = volDiscountDataForProductPage?.configuration;
                    const mostPopularSelectedTierData = volDiscountDataForProductPage?.mostPopularSelectedTier;
                    const isUnifiedWidget = volDiscountDataForProductPage?.isUnifiedWidget;
                
                    if (configuration?.isEnabled === false || isUnifiedWidget) {
                        const gfgFVolDiscountContainer = document.createElement('div');
                        gfgFVolDiscountContainer.classList.add('gfgVolDiscountContainer');
                        return gfgFVolDiscountContainer;
                    }
                
                    if (data.conditionType === "COUNT") {
                        const gfgFVolDiscountContainer = document.createElement('div');
                        gfgFVolDiscountContainer.classList.add('gfgVolDiscountContainer', 'gfgCountDiscount');
                
                        const titleDiv = document.createElement('div');
                        titleDiv.classList.add('titleDiv');
                        titleDiv.innerHTML = data.discountTitle;
                
                        const noteDiv = document.createElement('div');
                        noteDiv.classList.add('gfgVolDiscountNoteDiv');
                        noteDiv.innerHTML = data.note;
                
                        const gridDiv = document.createElement('div');
                        gridDiv.classList.add('gridDiv');
                
                        for (let i = 0; i < data.discountTiers.length; i++) {
                            let discountTier = data.discountTiers[i];
                            let qtyLabel = discountTier.text;
                            let priceLabel = parseFloat(discountTier.priceValue).toFixed(2);
                            let strikethroughValue = discountTier.strikethroughValue;
                
                            if (gfg.state?.formatPriceViaCustomScript) {
                                priceLabel = gfg.utility.formatPriceWithSeparator(priceLabel * 100);
                                strikethroughValue = gfg.utility.formatPriceWithSeparator(strikethroughValue * 100);
                            }
                
                            priceLabel = symbol + priceLabel;
                
                            const boxDiv = document.createElement('div');
                            boxDiv.classList.add('gfgGridBox');
                            boxDiv.setAttribute("discount-tier", i + 1);
                            boxDiv.style.backgroundColor = backgroundColor;
                            boxDiv.style.setProperty("--voldisc-prod-widget-border-color", borderColor);
                            boxDiv.style.setProperty("--voldisc-prod-widget-selected-radio-box-border-color", selectedRadioBoxBorderColor);
                
                            const radioSelectionDiv = document.createElement('div');
                            radioSelectionDiv.classList.add('gfgRadioSelection');
                            radioSelectionDiv.setAttribute("discount-tier", i + 1);
                
                            const radioBtn = document.createElement('input');
                            radioBtn.classList.add('radioButton');
                            radioBtn.type = "radio";
                            radioBtn.name = "dicountTierBtn";
                            radioBtn.setAttribute("discount-tier", i + 1);
                            radioBtn.value = data.discountTiers[i].quantitylabel;
                
                            const gfgRadioSelectionLabelDiv = document.createElement('div');
                            gfgRadioSelectionLabelDiv.classList.add('gfgRadioSelectionLabel');
                            gfgRadioSelectionLabelDiv.innerHTML = " ";
                
                            const qtyLabelDiv = document.createElement('div');
                            qtyLabelDiv.classList.add('gfgQtyLabel');
                            qtyLabelDiv.innerHTML = qtyLabel;
                            qtyLabelDiv.style.color = textColor;
                
                            radioSelectionDiv.append(radioBtn, gfgRadioSelectionLabelDiv);
                
                            const priceDiv = document.createElement('div');
                            priceDiv.classList.add("gfgPricesDiv");
                
                            const compareAtPrice = document.createElement('div');
                            compareAtPrice.classList.add("gfgCompareAtPrice");
                            compareAtPrice.innerHTML = strikethroughValue;
                
                            const costDiv = document.createElement('div');
                            costDiv.classList.add("gfgCostLabel");
                            costDiv.innerHTML = priceLabel;
                
                            priceDiv.append(compareAtPrice, costDiv);
                
                            const labelAndPriceDiv = document.createElement('div');
                            labelAndPriceDiv.classList.add("gfgLabelAndPriceDiv");
                            labelAndPriceDiv.append(qtyLabelDiv, priceDiv);
                
                            boxDiv.append(radioSelectionDiv, labelAndPriceDiv);
                
                            if (i == data.defaultSelectedTierIndex) {
                                boxDiv.classList.add('gfgGridBoxSelected');
                                // radioBtn.checked = true;
                                radioBtn.defaultChecked = true;
                                gfg.gfgVolDiscount.state.defaultTierSelectedQuantity = data.discountTiers[i].quantitylabel;
                                gfg.gfgVolDiscount.actions.handleQuantityUpdate();
                            }
                
                            if (i == data.mostPopularSelectedTierIndex) {
                                const mostPopularTagDiv = gfg.gfgVolDiscount.f.prepareUIForMostPopularTag(mostPopularSelectedTierData);
                                boxDiv.append(mostPopularTagDiv);
                            }
            
                            document.body.addEventListener('click', function (event) {
                                const gridBox = event.target.closest('.gfgGridBox'); // Match the closest .gfgGridBox
                            
                                if (gridBox) {
                                    event.stopPropagation();
                                    event.stopImmediatePropagation();
                            
                                    const discountTier = gridBox.getAttribute("discount-tier");
                                    const radioBtn = gridBox.querySelector('.radioButton');
                                    const radionSelectionLabel = gridBox.querySelector('.gfgRadioSelectionLabel');
                            
                                    if (gridBox.classList.contains('gfgGridBoxSelected')) {
                                        gridBox.classList.remove('gfgGridBoxSelected');
                                        if (radioBtn) radioBtn.checked = false;
                                        gfg.gfgVolDiscount.state.triggerResetCount = true;
                                    } else {
                                        document.querySelectorAll('.gfgGridBox').forEach(box => {
                                            box.classList.remove('gfgGridBoxSelected');
                                        });
                                        document.querySelectorAll('.radioButton').forEach(radio => {
                                            radio.checked = false;
                                        });
                            
                                        gridBox.classList.add('gfgGridBoxSelected');
                                        if (radioBtn) radioBtn.checked = true;
                                    }
                            
                                    gfg.gfgVolDiscount.actions.handleQuantityUpdate();
                                }
                            });
                            
    
                            gridDiv.append(boxDiv);
                        }
                
                        const htmlElementsToSendObj = {
                            "VOLUME_DISCOUNT_PRODUCT_PAGE_TITLE_BAR": titleDiv,
                        };
                        this.handleCustomCssForWidget(htmlElementsToSendObj, volDiscountDataForProductPage);
                
                        gfgFVolDiscountContainer.append(titleDiv, gridDiv);
                
                        if (data.note?.trim() !== "") {
                            gfgFVolDiscountContainer.append(noteDiv);
                        }
                
                        return gfgFVolDiscountContainer;
                    } else {
                        return this.prepareBulkUI(parent, volDiscountDataForProductPage);
                    }
                } catch (error) {
                    gfg.utility.debugError(`Error in gfgVolDiscount prepareUI fn`, error);
                }

            },            
            prepareBulkUI: function (parent, volDiscountDataForProductPage) {

                try {
                    
                    let data = volDiscountDataForProductPage.prouctUiDataToBeShown;
                    gfg.utility.debugConsole(data);
                
                    let note = data?.note;
                    let discountTitle = data?.discountTitle;
                    let colors = data?.colors;
                    let textColor = colors?.text;
                    let borderColor = colors?.border;
                    let backgroundColor = colors?.background;
                
                    const gfgFVolDiscountContainer = document.createElement('div');
                    gfgFVolDiscountContainer.classList.add('gfgVolDiscountContainer', 'gfgThisIsTieredDiscountOnProductPage');
                    Object.assign(gfgFVolDiscountContainer.style, {
                        backgroundColor: "",
                        color: "",
                        display: "grid",
                        padding: "5px",
                        textAlign: "center",
                    });
                
                    const titleDiv = document.createElement('div');
                    titleDiv.classList.add('gfgTitleDiv');
                    titleDiv.innerHTML = discountTitle;
                    Object.assign(titleDiv.style, {
                        fontWeight: "bolder",
                        textAlign: "center",
                        fontSize: "20px",
                        margin: "5px 0px",
                    });
                
                    const gridDiv = document.createElement('div');
                    gridDiv.classList.add('gfgGridDiv');
                    Object.assign(gridDiv.style, {
                        border: "black solid 1px",
                        borderRadius: "5px",
                        textAlign: "center",
                        borderColor: borderColor,
                        backgroundColor: backgroundColor,
                    });
                
                    const noteDiv = document.createElement('div');
                    noteDiv.classList.add('gfgNoteDiv');
                    noteDiv.innerHTML = note;
                    Object.assign(noteDiv.style, {
                        margin: "20px 0px 10px 0px",
                        color: textColor,
                    });
                
                    for (let i = 0; i < data.discountTiers.length; i++) {
                        let text = data.discountTiers[i].text;
                
                        const boxDiv = document.createElement('div');
                        boxDiv.classList.add('gfgGridBox');
                        boxDiv.innerHTML = text;
                        Object.assign(boxDiv.style, {
                            textAlign: "center",
                            padding: "10px",
                            margin: "5px 0px",
                            fontSize: "15px",
                            color: textColor,
                        });
                
                        gridDiv.appendChild(boxDiv);
                    }
                
                    if (note?.trim() !== "") {
                        gridDiv.appendChild(noteDiv);
                    }
                
                    gfgFVolDiscountContainer.append(titleDiv, gridDiv);
                
                    return gfgFVolDiscountContainer;
                } catch (error) {
                    gfg.utility.debugError(`Error in gfgVolDiscount prepareBulkUI fn`, error);
                }

            },            
            getVolDiscountDataForProductPage: async function() {

                try {
                    
                    let productPageId = gfg.state.productPageId
                    let productPageHandle = gfg.state.productPageHandle
                    const storeFrontAccessToken = gfg?.settings?.merchantInfo?.storefrontAccessToken
                    if(!productPageId){
                        productPageId = gfg.f.getProductPageId();
                    }
    
                    if(!productPageHandle){
                        productPageHandle = gfg.f.getProductPageHandle();
                    }
                    
                    let discounts  = gfg.settings.discounts
                    let productPageData = undefined
                    
    
                    if(productPageId && storeFrontAccessToken){
                        const productGid = `gid://shopify/Product/${productPageId}`;
                        const productData = await gfg.customDiscountStorefrontApis.getProductsDataByIdWithAjaxResponse([productGid]);
                        productPageData = productData[0];
                    }
                    else if(productPageHandle){
                        productPageData = await gfg.utility.getProductDataV2(productPageHandle)
                    }
                    if(!productPageData){
                        return undefined
                    }
    
                    if(discounts && discounts.length > 0) {
                    }else{
                        return 
                    }
    
    
                    let validVolDiscount = undefined 
                    let maxFirstTierVolDiscount = undefined
                    //As One product could be present in multiple discount campagin, find which one give the minimum finalPrice
                    for(let i = 0; i < discounts.length; i++) {
                        let discount = discounts[i]
    
                        if(discount.isEnabled == false){
                            continue
                        }
    
                        if(discount?.isEBIntegrationEnabled){
                            continue
                        }
                        //check if eb integration enabled return
    
                        let checkIfThisDiscountIsForThisProductPage = undefined
                        //check if this discount is for this product page if yes calculate the final price
                        if(discount?.disProducts?.type == "ALL_PRODUCTS")  {
                            checkIfThisDiscountIsForThisProductPage = true    
                        }
                        if(discount?.disProducts?.type == "COLLECTIONS")  {
                            let shopifyData = window.shopifyLiquidValuesApp7Ext;
                            if(shopifyData && shopifyData.product && shopifyData.product.collections) {
                                let collectionsList = discount?.disProducts?.collectionsData || [];
                                let currentProductCollections = shopifyData.product.collections;
                                let currentProductCollectionIds = currentProductCollections.map(collection => parseInt(collection.id));
                                
                                for(let i = 0; i < collectionsList.length; i++) {
                                    // Handle both old format (collectionId) and new format (id)
                                    let allowedCollectionId = parseInt(collectionsList[i].id || collectionsList[i].collectionId);
                                    
                                    if(currentProductCollectionIds.includes(allowedCollectionId)) {
                                        checkIfThisDiscountIsForThisProductPage = true;
                                        break;
                                    }
                                }
                            } 
                        }
                        if(discount?.disProducts?.type == "SELECTED_PRODUCTS")  {
                            let products = discount?.disProducts?.products
                            for(let j = 0; j < products.length; j++) {
                                let product = products[j]
                                if(product?.productId == productPageId || product?.handle == productPageHandle) {
                                    checkIfThisDiscountIsForThisProductPage = true
                                    break
                                }
                            }    
                        }
    
                        if(checkIfThisDiscountIsForThisProductPage){
                            let currFirstTierVolDiscount =  parseFloat(discount.rules[0].disValue)
                            if(maxFirstTierVolDiscount == undefined || currFirstTierVolDiscount > maxFirstTierVolDiscount ) {
                                maxFirstTierVolDiscount = currFirstTierVolDiscount
                                validVolDiscount = discount
                                discount.productPageData = productPageData;
                                validVolDiscount.prouctUiDataToBeShown = gfg.gfgVolDiscount.f.prepareUIDataWrapper(discount);
                            }
                        }
                        
                        
                    }
                    gfg.utility.debugConsole(validVolDiscount, 'valid vol discount')
                    gfg.gfgVolDiscount.state.validVolDiscount = validVolDiscount;
                    return validVolDiscount
                } catch (error) {
                    gfg.utility.debugError(`Error in gfgVolDiscount getVolDiscountDataForProductPage fn`, error);
                }

            },
            prepareBulkDiscountRulesWidgets: async function(settings) {
                try {
               

                const gfgBulkDiscountWidgetHTMLWrapper = document.createElement('div');
                gfgBulkDiscountWidgetHTMLWrapper.classList.add('gfgBulkDiscountWidgetHTMLWrapper');

                const gfgBulkDiscountWidgetHTML = document.createElement('div');
                gfgBulkDiscountWidgetHTML.classList.add('gfgBulkDiscountWidgetHTML');

                let discounts = settings?.discounts;
                 if(!settings?.discounts || settings.discounts.length == 0) {
                    return;
                 }
                 
                 for(let i = 0; i < discounts.length; i++) {
                    let currDiscount = discounts[i];
                    if(currDiscount?.cartWidgetConfiguration?.isEnabled) {
                        const singleBulkDiscountWidget = gfg.gfgVolDiscount.f.prepareSingleBulkDiscountRulesWidget(currDiscount);
                        if(singleBulkDiscountWidget){
                            gfgBulkDiscountWidgetHTML.append(singleBulkDiscountWidget);
                        }
                        gfgBulkDiscountWidgetHTMLWrapper.append(gfgBulkDiscountWidgetHTML);
                    }
                 }
                 return gfgBulkDiscountWidgetHTMLWrapper;
                } catch(err) {
                    gfg.utility.debugError(`err inside renderAllDiscountRuleWidgets`, err);
                }
            },
            prepareSingleBulkDiscountRulesWidget: function (currBulkDiscount) {
                try {
                    const gfgBulkDiscountSingleWidgetHTML = document.createElement('div');
                    gfgBulkDiscountSingleWidgetHTML.classList.add('gfgBulkDiscountSingleWidgetHTML');
            
                    const gfgBulkDiscountSingleWidgetWrapper = document.createElement('div');
                    gfgBulkDiscountSingleWidgetWrapper.classList.add('gfgBulkDiscountSingleWidgetWrapper');
            
                    const currDiscountIdx = gfg.gfgVolDiscount.f.getIndexOfRuleThatCanBeAppliedAtCurrCartState(currBulkDiscount);
                    let nextDiscountRuleIndex;
            
                    if (currDiscountIdx === currBulkDiscount.rules.length - 1) {
                        return;
                    } else if (currDiscountIdx === -1) {
                        nextDiscountRuleIndex = 0;
                    } else {
                        nextDiscountRuleIndex = currDiscountIdx + 1;
                    }
            
                    const gfgBulkDiscountSingleWidgetTitle = document.createElement('div');
                    gfgBulkDiscountSingleWidgetTitle.classList.add('gfgBulkDiscountSingleWidgetTitle');
                    const title = gfg.gfgVolDiscount.f.replaceVolDiscountWidgetVariables(
                        currBulkDiscount,
                        currBulkDiscount?.cartWidgetConfiguration?.tierConfig[nextDiscountRuleIndex]?.conditionNotMet?.title,
                        nextDiscountRuleIndex
                    );
                    gfgBulkDiscountSingleWidgetTitle.innerHTML = title;
            
                    const gfgBulkDiscountSingleWidgetSubTitle = document.createElement('div');
                    gfgBulkDiscountSingleWidgetSubTitle.classList.add('gfgBulkDiscountSingleWidgetSubTitle');
                    const subtitle = gfg.gfgVolDiscount.f.replaceVolDiscountWidgetVariables(
                        currBulkDiscount,
                        currBulkDiscount?.cartWidgetConfiguration?.tierConfig[nextDiscountRuleIndex]?.conditionNotMet?.subtitle,
                        nextDiscountRuleIndex
                    );
                    gfgBulkDiscountSingleWidgetSubTitle.innerHTML = subtitle;
            
                    const gfgBulkDiscountSingleWidgetPillBox = this.gfgPrepareBulkDiscountSingleWidgetPill(currBulkDiscount);
            
                    if (!(title || subtitle)) {
                        return;
                    }
            
                    const htmlElementsToSendObj = {
                        gfgBulkDiscountSingleWidgetHTML,
                        gfgBulkDiscountSingleWidgetSubTitle,
                    };
            
                    this.handleCustomCssForWidget(htmlElementsToSendObj, currBulkDiscount);
                    gfgBulkDiscountSingleWidgetWrapper.appendChild(gfgBulkDiscountSingleWidgetTitle);
            
                    if (subtitle && typeof subtitle === 'string' && subtitle.trim() !== '') {
                        gfgBulkDiscountSingleWidgetWrapper.appendChild(gfgBulkDiscountSingleWidgetSubTitle);
                    }
            
                    gfgBulkDiscountSingleWidgetHTML.appendChild(gfgBulkDiscountSingleWidgetWrapper);
            
                    if (gfgBulkDiscountSingleWidgetPillBox) {
                        gfgBulkDiscountSingleWidgetHTML.appendChild(gfgBulkDiscountSingleWidgetPillBox);
                    }
            
                    return gfgBulkDiscountSingleWidgetHTML;
                } catch (err) {
                    gfg.utility.debugError(`err inside prepareSingleBulkDiscountRulesWidget:`, err);
                }
            },            
            replaceVolDiscountWidgetVariables: function(currBulkDiscountData, text, nextDiscountRuleIndex) {
                try {
                    
                    let currBulkDiscount = JSON.parse(JSON.stringify(currBulkDiscountData));
                    
                    let _cartData = gfg.state.cartData;
                    let CURRENCY = gfg.utility.getCurrencySymbol() || "$";

                    if(currBulkDiscount.disProducts.type == "COLLECTIONS"){
                        let COLLECTIONS = currBulkDiscount?.disProducts.collections.map(collection => collection.title).join(', ');
                        // let COLLECTIONS_LINKS = currBulkDiscount?.disProducts.collections.map(collection => `<a href="/collections/${collection.handle}" target="_blank">${collection.title}</a>`).join(', ');
                        let COLLECTIONS_LINKS = currBulkDiscount?.disProducts.collections.map(collection => `<a href=${gfg.utility.getHrefForProductCollectionHandle("collection", collection.handle)} target="_blank">${collection.title}</a>`).join(', ');

                        // count how many of them are there in the collecton using the "," seperator and then attach ellipsis when more than 4
                        if(COLLECTIONS.split(',').length > 4){
                            COLLECTIONS = COLLECTIONS.split(',').slice(0, 4).join(', ') + "..."
                            //same with links
                            COLLECTIONS_LINKS = COLLECTIONS_LINKS.split(',').slice(0, 4).join(', ') + "..."
                        }

                        text = text.replace("{{COLLECTIONS}}", COLLECTIONS);
                        text = text.replace("{{COLLECTIONS_LINKS}}", COLLECTIONS_LINKS);

                        text = text.replace("{{COLLECTION_LINK}}",COLLECTIONS_LINKS);

                    }
                    if(currBulkDiscount.disProducts.type == "SELECTED_PRODUCTS"){
                        let PRODUCTS = currBulkDiscount?.disProducts.products.map(product => product.title).join(', ');
                        // let PRODUCTS_LINKS = currBulkDiscount?.disProducts.products.map(product => `<a href="/products/${product.handle}" target="_blank">${product.title}</a>`).join(', ');
                        let PRODUCTS_LINKS = currBulkDiscount?.disProducts.products.map(product => `<a href=${gfg.utility.getHrefForProductCollectionHandle("product", product.handle)} target="_blank">${product.title}</a>`).join(', ');


                        // count how many of them are there in the collecton using the "," seperator and then attach ellipsis when more than 4
                        if(PRODUCTS.split(',').length > 4){
                            PRODUCTS = PRODUCTS.split(',').slice(0, 4).join(', ') + "..."
                            //same with links
                            PRODUCTS_LINKS = PRODUCTS_LINKS.split(',').slice(0, 4).join(', ') + "..."
                        }

                        // if variant selection is allowed then get the products and links for the selected variants
                        if(currBulkDiscount.disProducts?.allowVariantSelection){
                            const { PRODUCTS: variantProducts, PRODUCTS_LINKS: variantProductsLinks } = this.getProductsAndLinksForVariantSelectedProducts(currBulkDiscount);
                            PRODUCTS = variantProducts;
                            PRODUCTS_LINKS = variantProductsLinks;
                        }


                        text = text.replace("{{PRODUCTS}}", PRODUCTS);
                        text = text.replace("{{PRODUCTS_LINKS}}", PRODUCTS_LINKS);
                    }
                   
                    if(currBulkDiscount.conditionType == "COUNT") {
                        let conditionValue = parseInt(currBulkDiscount.rules[nextDiscountRuleIndex].conditionValue);
                        let REMAINING_QUANTITY = 0;
                        let PRODUCT_QUANTITY =  conditionValue;

                        if(currBulkDiscount.disProducts.type == "ALL_PRODUCTS") {
                            // let cartQty = _cartData?.item_count || 0;
                            const allProductsData = this.getDataOfAllProductsInCart(currBulkDiscount);
                            let cartQty = allProductsData.totalCount;

                            REMAINING_QUANTITY = conditionValue - cartQty;
                         
                         } else if(currBulkDiscount.disProducts.type == "COLLECTIONS") {
                            let collectionCartData = this.getDataOfProductsPresentInCartFromThisCollection(currBulkDiscount);
                            let totalProductsInCollection = collectionCartData.totalProductsInCollection;
                            REMAINING_QUANTITY = conditionValue - totalProductsInCollection;
                         
                         } else if(currBulkDiscount.disProducts.type == "SELECTED_PRODUCTS") {
                             let productsCartData = this.getDataOfProductsPresentInCartFromThisListOfProducts(currBulkDiscount);
                             let totalProductsInList = productsCartData?.totalProductsInList 
                             REMAINING_QUANTITY = conditionValue - totalProductsInList;
                          }

                        text = text.replace("{{PRODUCT_QUANTITY}}", PRODUCT_QUANTITY);
                        text = text.replace("{{REMAINING_QUANTITY}}", REMAINING_QUANTITY);
                    }

                    if(currBulkDiscount.conditionType == "SUBTOTAL") {
                        let conditionValue = parseFloat(currBulkDiscount.rules[nextDiscountRuleIndex].conditionValue);
                        conditionValue = gfg.utility.convertFromStoreCurrencyToCustomer(conditionValue)
                        let REMAINING_AMOUNT = 0;

                        if(currBulkDiscount.disProducts.type == "ALL_PRODUCTS") {
                            // let _totalValue = parseFloat(_cartData.total_price / 100);
                            // let _totalValue = parseFloat(_cartData.original_total_price / 100);
                            const allProductsData = this.getDataOfAllProductsInCart(currBulkDiscount);
                            let _totalValue = allProductsData?.totalValue;
                           REMAINING_AMOUNT = conditionValue - _totalValue;

                        } else if(currBulkDiscount.disProducts.type == "COLLECTIONS") {
                           let collectionCartData = this.getDataOfProductsPresentInCartFromThisCollection(currBulkDiscount);
                           let totalValueOfCollection = collectionCartData.totalValueOfCollection;
                           REMAINING_AMOUNT = conditionValue - totalValueOfCollection;

                        
                        } else if(currBulkDiscount.disProducts.type == "SELECTED_PRODUCTS") {
                            let productsCartData = this.getDataOfProductsPresentInCartFromThisListOfProducts(currBulkDiscount);
                            let totalValueOfProducts = productsCartData.totalValueOfProducts;
                            REMAINING_AMOUNT = conditionValue - totalValueOfProducts;
                         }
                        
                        REMAINING_AMOUNT = parseFloat(REMAINING_AMOUNT).toFixed(2)

                        // if format price via custom script is enabled then format the price
                        if(gfg.state?.formatPriceViaCustomScript){
                            REMAINING_AMOUNT = REMAINING_AMOUNT * 100; // in shopify format
                            REMAINING_AMOUNT = gfg.utility.formatPriceWithSeparator(REMAINING_AMOUNT);
                        }
                        text = text.replace("{{REMAINING_AMOUNT}}", REMAINING_AMOUNT);
                    }

                    let DISCOUNT = parseFloat(currBulkDiscount.rules[nextDiscountRuleIndex].disValue);
                    // if the discount is fixed then convert its value into the active currency
                    if(currBulkDiscount.disValueType == "FIXED_DIS" || currBulkDiscount.disValueType === "FIXED_TOTAL") {
                        DISCOUNT = parseFloat(gfg.utility.getAmountInActiveCurrency(DISCOUNT, currBulkDiscount?.useAbsoluteDiscount));
                        
                        // if format price via custom script is enabled then format the price
                        if(gfg.state?.formatPriceViaCustomScript){
                            DISCOUNT = DISCOUNT * 100; // in shopify format
                            DISCOUNT = gfg.utility.formatPriceWithSeparator(DISCOUNT);
                        }
                    }
                    text = text.replace(/{{CURRENCY}}/g, CURRENCY);
                    
                    text = text.replace("{{DISCOUNT}}", DISCOUNT);
                    return text;

                } catch(err) {
                    gfg.utility.debugError(`err inside replaceVolDiscountWidgetVariables`, err);
                }
            },
            getIndexOfRuleThatCanBeAppliedAtCurrCartState: function(currBulkDiscount) {
                try {
                    let isQtyBasedDiscount = false;
                    let isValueBasedDiscount = false;
            

                    if (currBulkDiscount?.conditionType == "COUNT") {
                        isQtyBasedDiscount = true;
                    } else if (currBulkDiscount?.conditionType == "SUBTOTAL") {
                        isValueBasedDiscount = true;
                    }
            
                    let i = 0;
                    let lastSatisfyingIndex = -1;
                    
                    while (i < currBulkDiscount.rules.length) {
                        let currRule = currBulkDiscount.rules[i];
                        let conditionValue = parseFloat(currRule.conditionValue);
            
                        if (isQtyBasedDiscount) {
                            if (currBulkDiscount.disProducts.type == "ALL_PRODUCTS") {
                                // let _cartData = gfg.state.cartData;
                                // let _totalProducts = _cartData.item_count;
                                const allProductsData = this.getDataOfAllProductsInCart(currBulkDiscount);
                                let _totalProducts = allProductsData?.totalCount;
            
                                if (_totalProducts >= conditionValue) {
                                    lastSatisfyingIndex = i;
                                } else {
                                    break;
                                }
                            } else if (currBulkDiscount.disProducts.type == "COLLECTIONS") {
                                let collectionData = this.getDataOfProductsPresentInCartFromThisCollection(currBulkDiscount);
                                let totalProductsInCollection = collectionData.totalProductsInCollection;
            
                                if (totalProductsInCollection >= conditionValue) {
                                    lastSatisfyingIndex = i;
                                } else {
                                    break;
                                }
                            } else if (currBulkDiscount.disProducts.type == "SELECTED_PRODUCTS") {
                                let productsData = this.getDataOfProductsPresentInCartFromThisListOfProducts(currBulkDiscount);
                                let totalProductsInList = productsData.totalProductsInList;
            
                                if (totalProductsInList >= conditionValue) {
                                    lastSatisfyingIndex = i;
                                } else {
                                    break;
                                }
                            }
                        } else if (isValueBasedDiscount) {
                            const _conditionValue = parseFloat(gfg.utility.convertFromStoreCurrencyToCustomer(conditionValue));

                            if (currBulkDiscount.disProducts.type == "ALL_PRODUCTS") {
                                // let _cartData = gfg.state.cartData;
                                // let _totalValue = parseFloat(_cartData.total_price / 100);
                                // let _totalValue = parseFloat(_cartData.original_total_price / 100);
                                const allProductsData = this.getDataOfAllProductsInCart(currBulkDiscount);
                                let _totalValue = allProductsData?.totalValue;

                                if (_totalValue >= _conditionValue) {
                                    lastSatisfyingIndex = i;
                                } else {
                                    break;
                                }
                            } else if (currBulkDiscount.disProducts.type == "COLLECTIONS") {
                                let collectionData = this.getDataOfProductsPresentInCartFromThisCollection(currBulkDiscount);
                                let totalValueOfCollection = collectionData.totalValueOfCollection;
                                totalValueOfCollection = parseFloat(totalValueOfCollection);

            
                                if (totalValueOfCollection >= _conditionValue) {
                                    lastSatisfyingIndex = i;
                                } else {
                                    break;
                                }
                            } else if (currBulkDiscount.disProducts.type == "SELECTED_PRODUCTS") {
                                let productsData = this.getDataOfProductsPresentInCartFromThisListOfProducts(currBulkDiscount);
                                let totalValueOfProducts = productsData.totalValueOfProducts;
                                totalValueOfProducts = parseFloat(totalValueOfProducts);
                    
                                if (totalValueOfProducts >= _conditionValue) {
                                    lastSatisfyingIndex = i;
                                } else {
                                    break;
                                }
                            }
                        } else {
                            // If the condition is not satisfied, break the loop
                            break;
                        }
            
                        i++;
                    }
                    // `lastSatisfyingIndex` will now hold the index of the last rule for which the condition satisfies
                    return lastSatisfyingIndex;
                } catch(err) {
                    gfg.utility.debugError(`err inside getIndexOfRuleThatCanBeAppliedAtCurrCartState:`, err); 
                }
            },  
            getCurrentQuantitySelection: function() {

                try {
                    
                    const selectedQuantity = document.querySelector('input[name="dicountTierBtn"]:checked')?.value;
                    if (!selectedQuantity && gfg.gfgVolDiscount.state.triggerResetCount) {
                        gfg.gfgVolDiscount.state.triggerResetCount = false;
                        return 1;
                    }
                    return selectedQuantity;
                } catch (error) {
                    gfg.utility.debugError(`Error in gfgVolDiscount getCurrentQuantitySelection fn`, error);
                }
                
            },
            addToCartButtonOverwrite: function () {
                try {
                    gfg.gfgVolDiscount.state.isAddToCartButtonOverwrite = true;
            
                    gfg.elements.addToCartBtn.setAttribute("type", "button");
                    gfg.elements.addToCartBtn.disabled = false;
            
                    gfg.elements.addToCartBtn.classList.add("gfgAddToCartBtn");
            
                    gfg.elements.addToCartBtn.removeEventListener("click", handleAddToCartClick);
            
                    async function handleAddToCartClick(event) {
                        if (event.stopImmediatePropagation) {
                            event.stopImmediatePropagation();
                        }
            
                        const buttonText = gfg.elements.addToCartBtn.textContent;
            
                        const currentVariant = gfg.f.getSelectedVariant();
                        const currentQuantitySelection = gfg.gfgVolDiscount.f.getCurrentQuantitySelection();
            
                        const data = {
                            id: currentVariant,
                            quantity: currentQuantitySelection,
                        };
            
                        gfg.utility.debugConsole(data, "data");
            
                        const spinner = document.createElement("div");
                        spinner.innerHTML = CONSTANT_LOADING_SPINNER_SVG;
                        gfg.elements.addToCartBtn.appendChild(spinner);
            
                        const addedToCart = await gfg.utility.addToCart(data);
                        gfg.gfgVolDiscount.state.addToCartClicked = true;
            
                        const spinnerElement = gfg.elements.addToCartBtn.querySelector(".gfgLoadingSpinner");
                        if (spinnerElement) {
                            spinnerElement.remove();
                        }
            
                        if (addedToCart) {
                            gfg.elements.addToCartBtn.classList.remove("gfgDisabled");
                            gfg.gfgVolDiscount.f.executeScriptAfterAddToCart();
                        } else {
                            gfg.elements.addToCartBtn.classList.remove("gfgDisabled");
                        }
            
                        gfg.gfgVolDiscount.state.addToCartClicked = false;
                    }
            
                    gfg.elements.addToCartBtn.addEventListener("click", handleAddToCartClick);
                } catch (error) {
                    gfg.utility.debugError(`error inside addToCartButtonOverwrite`, error);
                }
            },            

            executeScriptAfterAddToCart: function () {
                try{
                    // find cart-drawer and add active class to it
                    // refresh cart drawer section idgf

                    if(gfg.settings.app.executeScriptAfterAddToCart){
                        eval(gfg.settings.app.executeScriptAfterAddToCart)
                    } 

                   
                }catch(err){
                    gfg.utility.debugError(`err inside executeScriptAfterAddToCart`, err) 
                }
            },
            

            getDataOfProductsPresentInCartFromThisCollection_Archive: function(currBulkDiscount) {
                try {
                    let _cartData = gfg.state.cartData;
                    let totalProductsInCollection = 0;
                    let totalValueOfCollection = 0;
                    let collectionData = currBulkDiscount.disProducts.collectionsData;
                    collectionData?.forEach(collection => {
                        collection?.productList?.forEach(productInCollection => {
                            // Find the matching product in the cart
                            let matchingCartItem = _cartData?.items?.find(cartItem => cartItem.product_id === productInCollection.productId);
            
                            if (matchingCartItem) {
                                totalProductsInCollection += matchingCartItem.quantity;

                                let finalItemPrice = Number(parseFloat(matchingCartItem.price / 100));
                                finalItemPrice = finalItemPrice * matchingCartItem.quantity;
                                totalValueOfCollection += finalItemPrice;
                            }
                        });
                    });
            
                    return { totalProductsInCollection, totalValueOfCollection };
                } catch (err) {
                    gfg.utility.debugConsole("err inside getDataOfProductsPresentInCartFromThisCollection_Archive", err);
                    return { totalProductsInCollection: 0, totalValueOfCollection: 0}
                }
            },
            getDataOfProductsPresentInCartFromThisCollection: function(currBulkDiscount) {
                try {
                    let _cartData = gfg.state.cartData;
                    let totalProductsInCollection = 0;
                    let totalValueOfCollection = 0;
                    let collectionData = currBulkDiscount.disProducts.collectionsData;

                    const relavantCartItems = [];

                    // Transform to the format expected by checkIfCartItemIsPartOfValidCollectionList - handle both old (collectionId) and new (id) format
                    const validCollectionList = collectionData.map(collection => ({
                        id: gfg.utility.convertCollectionIdToGidFormat(collection.id || collection.collectionId)
                    }));

                    // loop through the cart items and store relavant cart items
                    for (let i = 0; i < _cartData?.items?.length; i++) {
                        const cartItem = _cartData?.items[i];

                        // Check cartItem eligibility for subscription products too
                        const isCartItemRelevant = this.checkCartItemRelevancyInCaseOfSubscriptionProducts(currBulkDiscount, cartItem);
                        if (!isCartItemRelevant) {
                            continue;
                        }

                        if(gfg.f.checkIfCartItemIsPartOfValidCollectionList(cartItem, validCollectionList)) {
                            relavantCartItems.push(cartItem);
                        }
                    }

                    // Calculate the total products and value of the collection
                    for (let i = 0; i < relavantCartItems.length; i++) {

                        const cartItem = relavantCartItems[i];

                        totalProductsInCollection += cartItem.quantity;
                        let finalItemPrice = Number(parseFloat(cartItem.price / 100));
                        finalItemPrice = finalItemPrice * cartItem.quantity;
                        totalValueOfCollection += finalItemPrice;
                    }
            
                    return { totalProductsInCollection, totalValueOfCollection };
                } catch (err) {
                    gfg.utility.debugError(`err inside getDataOfProductsPresentInCartFromThisCollection:`, err);
                    return { totalProductsInCollection: 0, totalValueOfCollection: 0}
                }
            },
            getDataOfProductsPresentInCartFromThisListOfProducts: function(currBulkDiscount) {
                try {
                    let cartData = gfg.state.cartData;
                    const productIdsInCart = cartData.items.map(item => item.product_id);
                    const allowVariantSelection = currBulkDiscount?.disProducts?.allowVariantSelection;
                
                    let totalProductsInList = 0;
                    let totalValueOfProducts = 0;
                
                    for (const product of currBulkDiscount.disProducts.products) {
                        if (productIdsInCart.includes(parseInt(product.productId))) {
                          for (const item of cartData.items) {

                            // check if variant selection is enabled, if enabled then check if the variant is present in the cart
                            // if not then continue to the next item
                            if(allowVariantSelection){
                                const productVariantIds = product.variants.map(variant => variant.variantId);
                                const formattedVariantId = String(item.variant_id);
                                if(!productVariantIds.includes(formattedVariantId)){
                                    continue;
                                }
                            }

                            // Check cartItem eligibility for subscription products too. If Item is not relevant then continue to next item
                            const isCartItemRelevant = this.checkCartItemRelevancyInCaseOfSubscriptionProducts(currBulkDiscount, item);
                            if(!isCartItemRelevant){
                                continue;
                            }

                            if (item.product_id == product.productId) {
                              totalProductsInList += item.quantity;

                              let finalItemPrice = Number(parseFloat(item.price / 100));
                              finalItemPrice = finalItemPrice * item.quantity;
                              totalValueOfProducts += finalItemPrice
                            }
                          }
                        }
                    }
                      
                
                    return {
                        totalProductsInList,
                        totalValueOfProducts
                    };
                } catch(err) {
                    gfg.utility.debugError(`err inside getDataOfProductsPresentInCartFromThisListOfProducts`, err);
                    return { totalProductsInList: 0, totalValueOfProducts: 0}
                }
            },
            gfgVolumeDiscountFilter: function(modifiedDiscounts){

                try {
                    
                    let filteredData = [];
                    let customerSpecificDiscount = [];
                    let discounts = modifiedDiscounts || gfg.settings.discounts;
                    if(discounts.length == 0){
                        return;
                    }
    
                    //iterate through all the discounts and find the one that is enabled
                    for(let i = 0; i < discounts.length; i++){
                        const customerData = gfg.state.activeCustomerData;
                        // if(length of conditionsLength array is greater then 1)
                        if(discounts[i]?.conditionsData?.conditionsList?.length > 0){
                            let conditionOperator = discounts[i].conditionsData.conditionsOperator;
                            let conditionsList = discounts[i].conditionsData.conditionsList;
                            let isDiscountValid = gfg.gfgVolDiscount.f.gfgCheckConditionOutcome(conditionsList, conditionOperator);
                            if(isDiscountValid){
                                filteredData.push(discounts[i]);
                                customerSpecificDiscount.push(discounts[i]);
                            }
                        }else{
                            // if length of conditionsLength array is 0
                            filteredData.push(discounts[i]);
                            if(customerData.isCustomerLoggedInBool){
                                customerSpecificDiscount.push(discounts[i]);
                            }
                        }
                        // if(customerData.isCustomerLoggedInBool){
                        // }else{
                        //     // if length of conditionsLength array is 0
                        //     if(discounts[i].conditionsData.conditionsList.length == 0){
                        //         filteredData.push(discounts[i]);
                        //     }
                        // }
                    }
                    gfg.gfgVolDiscount.state.customerSpecificDiscount = customerSpecificDiscount;
                    return filteredData;
                } catch (error) {
                    gfg.utility.debugError(`Error in gfgVolumeDiscountFilter fn`, error);
                }


            },
            gfgCheckConditionForMarkets: function(currRule, cartData){
              try {
                  const { operatorType, value : marketHandles } = currRule.ruleValue;
                  const currentMarketHandle = gfg.state.activeCustomerData?.markets?.handle;

                  if (!currentMarketHandle) return false;

                  return operatorType === "is"
                      ? marketHandles.includes(currentMarketHandle)
                      : operatorType === "isNot"
                      ? !marketHandles.includes(currentMarketHandle)
                      : false;
              } catch (error) {
                  gfg.utility.debugError(`Error in gfgCheckConditionForMarkets fn=>`, error); 
                  return false;
              }
            },
            gfgCheckConditionForCustomerLoggedIn: function(condition){
              // gfg.utility.debugConsole('gfgCheckConditionForCustomerLoggedIn ==> ', condition)
              // return true;
              try{
                  let res = false;
                  let customerData = gfg.state.activeCustomerData;
                  let isLoggedIn = customerData.isCustomerLoggedInBool;
                  if(condition.ruleValue.value == "yes"){
                      res = isLoggedIn ? true : false;
                  }else{
                      res = isLoggedIn ? false : true;
                  }

                  return res;
              }catch(err){
                  gfg.utility.debugError('gfgCheckConditionForCustomerLoggedIn ', err);
              }
            },
            gfgCheckConditionForCountry: function(condition){
                let response = false;
                try {
                    const {operatorType, countries} = condition.ruleValue;
                    const currentCountryOfStore = gfg.state.activeCustomerData?.visitingFromCountry;

                    if(operatorType === "is"){
                        response = countries.includes(currentCountryOfStore);
                    }
                    else if(operatorType === "isNot"){
                        response = !countries.includes(currentCountryOfStore);
                    }
                    return response;
                } catch (error) {
                    gfg.utility.debugError('error in gfgCheckConditionForCountry fn =>', error); 
                    return response;
                }
            },
            gfgCheckConditionForCustomerTags: function(condition){
              try{
                  let res = false;

                  const customerData = gfg.state.activeCustomerData;
                  const customerTags = customerData?.customerTags || [];

                  const conditionTags = condition.ruleValue.tags;

                  // check for customer include tags
                  res = gfg.utility.checkIfTwoArrayHasCommonElement(conditionTags, customerTags)
                  if(condition.ruleValue.operatorType == "isNot" ){
                    res = !res;
                  }
                  return res;
              }catch(err){
                  gfg.utility.debugError( 'error in gfgCheckConditionForCustomerTags fn =>', err);
              }
            },
            gfgCheckConditionOutcome: function(conditions, conditionOperator){
                try {
                    
                    // map over conditions, for each condition fire respective function using switchcase, and record answer on an array
                    // use this array to evaluate, wether it passes or not on basis of conditionOperator
                    let resultantValue = [];
                    let result = false;
                    let operatorType = conditionOperator;
    
                    for(let i=0; i < conditions.length; i++){
                        const currRule = conditions[i];
                        const ruleType = conditions[i].ruleType;
    
                        switch(ruleType){
                            case "customerTags": {
                                const val = gfg.gfgVolDiscount.f.gfgCheckConditionForCustomerTags(currRule) || false;
                                resultantValue.push(val);
                                break;
                            }
                            case "isCustomerLoggedIn": {
                                const val = gfg.gfgVolDiscount.f.gfgCheckConditionForCustomerLoggedIn(currRule) || false;
                                resultantValue.push(val);
                                break;
                            }
                            case "countrySelects": {
                                const val = gfg.gfgVolDiscount.f.gfgCheckConditionForCountry(currRule);
                                resultantValue.push(val);
                                break;
                            }
                            case "markets": {
                                const val = gfg.gfgVolDiscount.f.gfgCheckConditionForMarkets(currRule);
                                resultantValue.push(val);
                                break;
                            }
                            default: {
                                resultantValue.push(false);
                                break;
                            }
                        }
                    }
    
    
                    // performs the AND operation on the resultantValue array
                    function checkIfAllTrue(booleanArray) {
                        for (let i = 0; i < booleanArray.length; i++) {
                          if (booleanArray[i] == false) {
                            return false;
                          }
                        }
                        return true;
                    }
                    result = checkIfAllTrue(resultantValue);
    
                    return result;
                } catch (error) {
                    gfg.utility.debugError("error in gfgCheckConditionOutcome gfgVolumeDiscount fn =>", error);
                }
            },
            gfgVolumeDiscountCheckConditions: function(){
                try{
                    
                }catch(err){
                    gfg.utility.debugConsole('gfgVolumeDiscountCheckConditions ', err);
                }
            },
            DiscountTierSelect_DselectOnQuantityChanges: function(currentValueOfQuantitySelector){
                try {
                    
                    const selectedTierWidgetQuantity = gfg.gfgVolDiscount.f.getCurrentQuantitySelection();
                    if(!currentValueOfQuantitySelector || !selectedTierWidgetQuantity){
                        return ;
                    }

                    if(currentValueOfQuantitySelector != selectedTierWidgetQuantity){
                       
                        
                        document.querySelectorAll('.gfgGridBox').forEach((element) => {
                            element.classList.remove('gfgGridBoxSelected');
                        });
            
                        document.querySelectorAll('.radioButton').forEach((radioButton) => {
                            radioButton.checked = false;
                        });
                    }
                } catch (error) {
                    gfg.utility.debugConsole("error inside DiscountTierSelect_DselectOnQuantityChanges", error);
                }
            },
            prepareUIForMostPopularTag: function (mostPopularSelectedTierData) {
                try {
                    const mostPopularTagContainer = document.createElement('div');
                    mostPopularTagContainer.classList.add('gfgMostPopularTagContainer');
            
                    if (mostPopularSelectedTierData?.badgeStyle === "simple") {
                        const simpleRibbonBadge = document.createElement('div');
                        simpleRibbonBadge.classList.add('gfgSimpleRibbonBadge');
                        simpleRibbonBadge.innerHTML = mostPopularSelectedTierData?.title;
            
                        mostPopularTagContainer.classList.add('gfgTemplateSimpleRibbonBadge');
            
                        Object.assign(simpleRibbonBadge.style, {
                            backgroundColor: mostPopularSelectedTierData?.customization?.bgColor,
                            color: mostPopularSelectedTierData?.customization?.titleColor,
                        });
            
                        mostPopularTagContainer.appendChild(simpleRibbonBadge);
                    }
            
                    return mostPopularTagContainer;
                } catch (error) {
                    gfg.utility.debugError(`error inside prepareUIForMostPopularTag`, error);
                }
            },            
            listenVariantChangeForVolDiscountProductPage: function(){
                try {
                    // Listen variant change after 1 second for volume discount & if there is a change then reinitialize the vol discount for product page

                    if(gfg && gfg?.state?.page_type == "product"){

                        const checkIfValidVolDiscountExist = gfg.gfgVolDiscount?.state?.validVolDiscount;
                        const currentSelectedVariantId = gfg.gfgVolDiscount?.state?.currentSelectedVariant?.id;
                        const checkIfThisIsVolumeNotTieredDiscount = gfg.gfgVolDiscount?.state?.validVolDiscount?.conditionType == "COUNT" ? true : false;

                        /* The reason for checking also if this is volume not tiered discount is because in tiered discount widget
                        we don't show product pricing so no need to reintialize the discount*/

                        if(checkIfValidVolDiscountExist && checkIfThisIsVolumeNotTieredDiscount && currentSelectedVariantId){
                            const selectedVariant = gfg.f.getSelectedVariant();

                            // if there is a change in variant then reinitialize the vol discount
                            if(selectedVariant != currentSelectedVariantId){
                                gfg.gfgVolDiscount.init(gfg.settings, "PRODUCT_PAGE");
                            }
                        }
                    }
                } catch (error) {
                    gfg.utility.debugError(`error inside listenVariantChangeForVolDiscountProductPage`, error);
                    
                }
            },
            gfgFilterActiveScheduledDiscountCampaigns: function(discounts){
                try {
                    if(!discounts || discounts?.length === 0){
                        return [];
                    }

                    const modifiedDiscounts = discounts.filter(discount => {
                        const campaignScheduleData = discount?.campaignScheduleData;
            
                        // If there is no campaign schedule data or the campaign is not scheduled, include the discount
                        if (!campaignScheduleData || campaignScheduleData?.campaignSchedule != "SCHEDULED") {
                            return true;
                        }
            
                        // If the campaign is scheduled, check if the current date falls within the start and end dates
                        if(campaignScheduleData?.campaignSchedule == "SCHEDULED"){
                            let currentDateUTC = new Date().toISOString();
                            let startDateTime_UTC = campaignScheduleData.startDateTime_UTC;
                            let endDateTime_UTC = campaignScheduleData.endDateTime_UTC;
                    
                            if (currentDateUTC >= startDateTime_UTC && currentDateUTC <= endDateTime_UTC) {
                                return true;
                            }
                        }
                    });
            
                    return modifiedDiscounts;
                    
                } catch (error) {
                    gfg.utility.debugError(`error inside gfgFilterActiveScheduledDiscountCampaigns`, error);
                    return discounts;
                }
            },
            getDataOfAllProductsInCart: function(discount){
                try {
                    const cartData = gfg.state.cartData;
                    let totalCount = 0;
                    let totalValue = 0;
                    const relevantCartItems = [];


                    for (let i = 0; i < cartData?.items?.length; i++) {
                        const item = cartData.items[i];

                        // handle subscription products eligiblity too.
                        const isCartItemRelevant = this.checkCartItemRelevancyInCaseOfSubscriptionProducts(discount, item);

                        if(isCartItemRelevant){
                            relevantCartItems.push(item);
                        }
                    }

                    // Calculate the total products and value of the products
                    for (let i = 0; i < relevantCartItems.length; i++) {

                        const item = relevantCartItems[i];
                        totalCount += item.quantity;
                        let finalItemPrice = Number(parseFloat(item.price / 100));
                        finalItemPrice = finalItemPrice * item.quantity;
                        totalValue += finalItemPrice;
                    }

                    return { totalCount, totalValue };
                } catch (error) {
                    gfg.utility.debugError(`error inside getDataOfAllProductsInCart`, error);
                }
            },
            checkCartItemRelevancyInCaseOfSubscriptionProducts: function(discount, cartItem){
                try {
                    let isItemEligible = true;
                    if(discount?.subscriptionProductsEligibility === "INCLUDE_ONLY_SUBSCRIPTION_PRODUCTS" && !cartItem?.selling_plan_allocation?.selling_plan?.id){
                        isItemEligible = false;
                    }
                    else if(discount?.subscriptionProductsEligibility === "EXCLUDE_SUBSCRIPTION_PRODUCTS" && cartItem?.selling_plan_allocation?.selling_plan?.id){
                        isItemEligible = false;
                    }
                    return isItemEligible;
                } catch (error) {
                    gfg.utility.debugError(`error inside checkCartItemRelevancyInCaseOfSubscriptionProducts`, error);
                    return true;
                }
            },
            handleCustomCssForWidget: function(variablesObj, discountSettings){
                try {
                    const productPageColorConfigs = discountSettings?.configuration?.colors;
                    const productPageFontConfigs = discountSettings?.configuration?.fontConfig;
                    const cartPageColorConfigs = discountSettings?.cartWidgetConfiguration?.globalConfig?.customisations;
                    const cartPageFontConfigs = discountSettings?.cartWidgetConfiguration?.globalConfig?.fontConfig;


                    const cssConfigurations = {
                        "VOLUME_DISCOUNT_PRODUCT_PAGE_TITLE_BAR":{
                            "background-color": productPageColorConfigs?.titleBarBgColor,
                            "color": productPageColorConfigs?.titleBarTextColor,
                            "font-size": gfg.utility.getFontSizeValue(productPageFontConfigs?.titleBarTextFontSize),
                            "font-weight": gfg.utility.getFontWeightValue(productPageFontConfigs?.titleBarTextFontWeight)
                        },
                        "gfgBulkDiscountSingleWidgetPill":{
                            "background-color": cartPageColorConfigs?.pillBgColor,
                            "color": cartPageColorConfigs?.pillTextColor,
                            "font-size": gfg.utility.getFontSizeValue(cartPageFontConfigs?.pillTextFontSize),
                            "font-weight": gfg.utility.getFontWeightValue(cartPageFontConfigs?.pillTextFontWeight)
                        },
                        "gfgBulkDiscountSingleWidgetHTML":{
                            "background-color": cartPageColorConfigs?.backgroundColor,
                            "color": cartPageColorConfigs?.textColor,
                            "border-color": cartPageColorConfigs?.borderColor
                        },
                        "gfgBulkDiscountSingleWidgetSubTitle":{
                            "border-top-color": cartPageColorConfigs?.borderColor
                        }
                      };
                      // Apply CSS configurations based on the key
                    //   Object.keys(variablesObj).forEach(key => {
                    //     if (!variablesObj[key]) {
                    //       return;
                    //     }
                  
                    //     const cssObj = cssConfigurations[key];
                    //     if (cssObj) {
                    //       variablesObj[key].css(cssObj);
                    //     }
                    //   });

                    Object.keys(variablesObj).forEach(key => {
                        if (!variablesObj[key]) {
                            return;
                        }
                    
                        const cssObj = cssConfigurations[key];
                        if (cssObj) {
                            const element = variablesObj[key];
                            Object.keys(cssObj).forEach(cssKey => {
                                element.style[cssKey] = cssObj[cssKey];
                            });
                        }
                    });
                    

                } catch (error) {
                    gfg.utility.debugError(`error inside - GFG Volume Discount- handleCustomCssForWidget`, error); 
                }
            },
            gfgPrepareBulkDiscountSingleWidgetPill: function (currBulkDiscount) {
                try {
                    const pillBox = document.createElement('div');
                    pillBox.classList.add('gfgBulkDiscountSingleWidgetPill');
            
                    const pillIcon = currBulkDiscount?.cartWidgetConfiguration?.cartPageWidgetIcons?.pillIcon || 
                                     "https://free-gift-app7.s3.us-east-2.amazonaws.com/public/discountPillcon2.svg";
            
                    const pillTitle = currBulkDiscount?.cartWidgetConfiguration?.cartPageWidgetTexts?.pillText || "DISCOUNT";
            
                    const pillBoxInnerHtml = `
                        <img src="${pillIcon}" class="gfgBulkDiscountSingleWidgetPillIcon" />
                        <span class="gfgBulkDiscountSingleWidgetPillTitle">${pillTitle}</span>
                    `;
            
                    if (currBulkDiscount?.cartWidgetConfiguration?.isWidgetPillEnabled !== true) {
                        return false;
                    }
            
                    this.handleCustomCssForWidget({ "gfgBulkDiscountSingleWidgetPill": pillBox }, currBulkDiscount);
            
                    pillBox.innerHTML = pillBoxInnerHtml;
            
                    return pillBox;
                } catch (error) {
                    gfg.utility.debugError(`error inside gfgPrepareBulkDiscountSingleWidgetPill`, error);
                }
            },            
            getProductsAndLinksForVariantSelectedProducts: function(currBulkDiscount){
                try {
                    const selectedProducts = currBulkDiscount.disProducts.products;
                    let productList = JSON.parse(JSON.stringify(selectedProducts));

                    // show maximum 4 products only
                    if (selectedProducts.length > 4) {
                        productList = productList.slice(0, 4);
                    }

                    const result = productList.map(product => {
                        const productName = product.title;
                        const variants = product?.variants || [];

                        const variantTitles = variants.slice(0, 2).map(variant => variant?.title).filter(title => title);

                        let plainText = `<span class="font-weight-medium">${productName}</span>`;
                        // let anchorTagText = `<a href="/products/${product.handle}" target="_blank">${productName}</a>`
                        let anchorTagText = `<a href=${gfg.utility.getHrefForProductCollectionHandle("product", product.handle)} target="_blank">${productName}</a>`;

                        // if at least one variant title is present, then add the variant titles to the product name otherwise
                        // return the product name / productLink as it is.
                        if(variantTitles.length > 0){

                            let variantsString = variantTitles.join(', ');
                            if (variants.length > 2) {
                                variantsString += '...';
                            }
                    
                            plainText = `<span class="font-weight-medium">${productName}</span><span class="cart-page-discount-widget-variant-title">(${variantsString})</span>`,
                            anchorTagText = `<a class="no-underline" href=${gfg.utility.getHrefForProductCollectionHandle("product", product.handle)} target="_blank">
                                <span class="underline">${productName}</span><span class="no-underline cart-page-discount-widget-variant-title">(${variantsString})</span>
                            </a>`

                            return {plainText, anchorTagText};
                            
                        }
                        return {plainText, anchorTagText};
                
                    });
                
                    let PRODUCTS = result.map(item => item.plainText).join(', ');
                    let PRODUCTS_LINKS = result.map(item => item.anchorTagText).join(', ');

                    if(selectedProducts.length > 4){
                        PRODUCTS += ' ...';
                        PRODUCTS_LINKS += ' ...';
                    }

                    return {PRODUCTS, PRODUCTS_LINKS};
                } catch (error) {
                    gfg.utility.debugError(`error inside getProductsAndLinksForVariantSelectedProducts`, error);
                }
            }
            
        },
        actions: {
            handleQuantityUpdate: function () {

                try {
                    
                    let selectedQuantity;
                
                    if (document.querySelector(".gfgCountDiscount")) {
                        selectedQuantity = gfg.gfgVolDiscount.f.getCurrentQuantitySelection();
                    } else if (
                        gfg.gfgVolDiscount.state.defaultTierSelectedQuantity &&
                        gfg.gfgVolDiscount.state.isDefaultTierSelectionDone == false
                    ) {
                        selectedQuantity = gfg.gfgVolDiscount.state.defaultTierSelectedQuantity;
                        gfg.gfgVolDiscount.state.isDefaultTierSelectionDone = true;
                    } else {
                        return;
                    }
                
                    if (isNaN(selectedQuantity)) {
                        return;
                    }
                
                    const quantityButtons = document.querySelectorAll(gfg.elements.quantityBtn);
                    let shouldCallOverwrite = true;
                
                    quantityButtons.forEach((quantityButton) => {
                        quantityButton.classList.add("gfgHide");
                
                        let quantitySelectorEle = quantityButton;
                        if (quantitySelectorEle.tagName.toLowerCase() !== "input") {
                            quantitySelectorEle = quantityButton.querySelector("input");
                        }
                
                        if (quantitySelectorEle && quantitySelectorEle.tagName.toLowerCase() === "input") {
                            quantitySelectorEle.value = selectedQuantity; // Set live value
                            quantitySelectorEle.setAttribute("value", selectedQuantity); // Update DOM attribute
                            shouldCallOverwrite = false;
                        } 
                    });
                    if(shouldCallOverwrite && gfg.gfgVolDiscount.state.isAddToCartButtonOverwrite === false){
                        gfg.gfgVolDiscount.f.addToCartButtonOverwrite();
                    }
                } catch (error) {
                    gfg.utility.debugConsole("Error in gfgVolDiscount handleQuantityUpdate fn", error);
                }

            },                   
            listenQuantityUpdates: function(){
                try {
                    const currentValueOfQuantity = gfg.utility.getQuantityValueFromQuantitySelector();
                    gfg.gfgVolDiscount.f.DiscountTierSelect_DselectOnQuantityChanges(currentValueOfQuantity);
                } catch (error) {
                    gfg.utility.debugConsole("error inside listenQuantityUpdates", error);
                }
            }

        }

};

// ============ DISCOUNT ALLOCATION SYNC MODULE ============
const gfgDiscountAllocationSync = {
  _config: {
    DEBOUNCE_MS: 150,
    MAX_CONVERGENCE_RETRIES: 2,
    CART_ATTRIBUTE_KEY: "_kite_ccdData",
  },

  _state: {
    isRunning: false,
    hasPendingSignal: false,
    isInitialized: false,
    debounceTimer: null,
    discountedSubtotalResults: null,
  },

  /**
   * Checks which discount rules use discountedCartSubtotal or overallDiscountedSubtotal qualifiers.
   */
  _checkIfDiscountedSubtotalRulesIsPresent(discountsData) {
    try {
      const result = {
        cartDiscounts: false,
        productDiscounts: false,
      };
      const currentDateUTC = new Date().toISOString();

      for (const discount of discountsData) {
        const isExpired = discount.campaignScheduleData?.campaignSchedule === "SCHEDULED" && currentDateUTC > discount.campaignScheduleData?.endDateTime_UTC;
        const isOnlyUseWidget = discount.advancedSettings?.onlyUseWidget;
        if (isExpired || isOnlyUseWidget) {
          continue;
        }
        if (result.cartDiscounts && result.productDiscounts) break;

        discount.discountTriggeredRulesData.rulesGlobalList[0].rulesList.forEach((rule) => {
          if (rule.ruleType === "discountedCartSubtotal") result.cartDiscounts = true;
          if ((rule.ruleType === "products" || rule.ruleType === "productsVariant" || rule.ruleType === "collections") && rule.ruleValue.qualifierType === "overallDiscountedSubtotal") {
            result.productDiscounts = true;
          }
        });

        discount.segmentsData.segmentsList.forEach((segment) => {
          if (segment.buyXRulesData?.rulesList) {
            segment.buyXRulesData.rulesList.forEach((rule) => {
              if (rule.ruleType === "discountedCartSubtotal") result.cartDiscounts = true;
              if ((rule.ruleType === "products" || rule.ruleType === "productsVariant" || rule.ruleType === "collections") && rule.ruleValue.qualifierType === "overallDiscountedSubtotal") {
                result.productDiscounts = true;
              }
            });
          }
        });
      }
      return result;
    } catch (error) {
      gfg.utility.debugError("[AllocSync] Error in _checkIfDiscountedSubtotalRulesIsPresent", error);
    }
  },

  /**
   * Deep-compares two allocation objects for equality.
   */
  _areAllocationsEqual(allocationA, allocationB) {
    try {
      const deepSortedStringify = (obj) => {
        if (obj === null || obj === undefined) return "null";
        if (typeof obj !== "object") return String(obj);
        const sorted = {};
        for (const key of Object.keys(obj).sort()) {
          sorted[key] = typeof obj[key] === "object" && obj[key] !== null
            ? JSON.parse(deepSortedStringify(obj[key]))
            : obj[key];
        }
        return JSON.stringify(sorted);
      };
      return deepSortedStringify(allocationA) === deepSortedStringify(allocationB);
    } catch (err) {
      gfg.utility.debugError("[AllocSync] Error in _areAllocationsEqual", err);
      return false;
    }
  },

  /**
   * Called once from gfgConsolidatedCustomDiscount.initialize().
   * Determines if sync is needed and triggers the first sync.
   */
  configure(discountsToCheck) {
    try {
      if (this._state.isInitialized) return;

      const results = this._checkIfDiscountedSubtotalRulesIsPresent(discountsToCheck);
      if (!results || Object.values(results).every(val => val === false)) {
        gfg.utility.debugConsole("[AllocSync] No discountedSubtotal rules found, module not needed");
        return;
      }

      this._state.discountedSubtotalResults = results;
      this._state.isInitialized = true;
      gfg.utility.debugConsole("[AllocSync] Module configured", results);

      // Trigger initial sync immediately (no debounce for first run)
      this._processSync();
    } catch (error) {
      gfg.utility.debugError("[AllocSync] Error in configure", error);
    }
  },

  /**
   * Public entry point — called from callchecksAfterApiCalls on every cart change.
   * Debounces rapid signals into a single sync.
   */
  onCartChange() {
    if (!this._state.isInitialized) return;

    clearTimeout(this._state.debounceTimer);
    this._state.debounceTimer = setTimeout(() => {
      this._processSync();
    }, this._config.DEBOUNCE_MS);
  },

  /**
   * Serialization gate. Ensures only one _runSyncCycle runs at a time.
   * If a signal arrives during execution, it queues a re-run.
   */
  async _processSync() {
    try {
      if (this._state.isRunning) {
        this._state.hasPendingSignal = true;
        gfg.utility.debugConsole("[AllocSync] Sync already running, queued pending signal");
        return;
      }

      this._state.isRunning = true;
      this._state.hasPendingSignal = false;

      await this._runSyncCycle();

      this._state.isRunning = false;

      // If a signal arrived while we were syncing, re-run
      if (this._state.hasPendingSignal) {
        this._state.hasPendingSignal = false;
        gfg.utility.debugConsole("[AllocSync] Processing pending signal");
        this._processSync();
      }
    } catch (error) {
      this._state.isRunning = false;
      gfg.utility.debugError("[AllocSync] Error in _processSync", error);
    }
  },

  /**
   * Core convergence loop:
   * 1. Fetch fresh cart
   * 2. Compute allocations from cart.items[].discounts
   * 3. Compare with existing _kite_ccdData attribute
   * 4. If different → update attribute → use response to re-check
   * 5. Repeat up to MAX_CONVERGENCE_RETRIES times
   */
  async _runSyncCycle() {
    try {
      const { MAX_CONVERGENCE_RETRIES, CART_ATTRIBUTE_KEY } = this._config;
      const discountedSubtotalResults = this._state.discountedSubtotalResults;
      let retryCount = 0;
      let cartData = await gfg.utility.getCartV2({ forceRefresh: true });

      while (retryCount <= MAX_CONVERGENCE_RETRIES) {
        const oldAttributeData = gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.getExistingCartAttributes(cartData, CART_ATTRIBUTE_KEY);
        const discountAllocations = gfgConsolidatedCustomDiscount.f.getDiscountAllocations(cartData, discountedSubtotalResults);
        const oldDiscountAllocations = oldAttributeData?.discountAllocations || {};

        if (this._areAllocationsEqual(oldDiscountAllocations, discountAllocations)) {
          gfg.utility.debugConsole("[AllocSync] Allocations match, converged after", retryCount, "update(s)");
          break;
        }

        gfg.utility.debugConsole("[AllocSync] Allocations differ, updating attribute (attempt " + (retryCount + 1) + ")");

        const updatedCart = await gfgCustomDiscount.gfgCustomDiscountFunctionLogicHandlers.updateCartAttributesWithCFData(
          { discountAllocations }, CART_ATTRIBUTE_KEY
        );

        retryCount++;

        if (retryCount > MAX_CONVERGENCE_RETRIES) {
          gfg.utility.debugConsole("[AllocSync] Max convergence retries reached, stopping");
          break;
        }

        // Use the update response for the next comparison if available
        if (updatedCart && updatedCart.items) {
          cartData = updatedCart;
        } else {
          cartData = await gfg.utility.getCartV2({ forceRefresh: true });
        }
      }
    } catch (error) {
      gfg.utility.debugError("[AllocSync] Error in _runSyncCycle", error);
    }
  },
};

    // ============ MODULE INITIALIZATION ============
    var initialized = false;

    function initCustomDiscountModule() {
        if (initialized) return;
        initialized = true;

        try {
            // Attach objects to gfg
            window.gfgCustomDiscount = gfgCustomDiscount;
            window.gfgConsolidatedCustomDiscount = gfgConsolidatedCustomDiscount;
            window.gfgDiscountAllocationSync = gfgDiscountAllocationSync;
            gfg.gfgVolDiscount = gfgVolDiscountDef;

            // Register global event delegation for BXGY widget (handles lazy-loaded sidecarts)
            gfgCustomDiscount.gfgBXGY.actions.registerGlobalClickListener();

            // Register this module as loaded
            if (window.gfgFileStatus) {
                window.gfgFileStatus.customDiscountLogic = "LOADED";
            }
            document.dispatchEvent(new CustomEvent('gfg:module:loaded', { detail: { moduleName: 'customDiscountLogic' } }));
            gfg.utility.debugConsole("customDiscountLogic: Module registered successfully");
        } catch (error) {
            console.error("customDiscountLogic: Error initializing module", error);
        }
    }

    // ============ DEPENDENCY CHECKING ============
    function checkAllDependenciesLoaded(dependencies, fileStatus) {
        for (var i = 0; i < dependencies.length; i++) {
            var dep = dependencies[i];
            if (fileStatus[dep.module] === "NEED_TO_LOAD") {
                return false;
            }
        }
        return true;
    }

    function checkAndInitialize(dependencies, fileStatus) {
        if (initialized) return;
        if (checkAllDependenciesLoaded(dependencies, fileStatus)) {
            initCustomDiscountModule();
        }
    }

    function waitForDependenciesAndInitialize() {
        var fileStatus = window.gfgFileStatus;
        if (!fileStatus) {
            // Fallback: if gfgFileStatus not available, wait for gfg object directly
            if (window.gfg) {
                initCustomDiscountModule();
            } else {
                setTimeout(waitForDependenciesAndInitialize, 50);
            }
            return;
        }

        // Attach listeners for dependencies that need to load
        DEPENDENCIES.forEach(function(dep) {
            if (fileStatus[dep.module] === "NEED_TO_LOAD") {
                document.addEventListener(dep.event, function() {
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

