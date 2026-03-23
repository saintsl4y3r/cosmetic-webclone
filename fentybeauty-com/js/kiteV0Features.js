/**
 * kiteV0Features.js - Legacy Features Module
 *
 * This file is part of the Kite theme extension file splitting system.
 * It contains legacy features for users created before 2026-01-21.
 *
 * Contents:
 * - window.gfgKiteV0Features.updateCartState - Legacy cart refresh logic
 * - gfg.gfgBogoFeature - Buy One Get One feature
 * - gfg.gfgUnifiedWidget - Unified Widget feature
 *
 * Loading conditions:
 * - Loads when: bogo.length > 0 OR unifiedWidget.length > 0 OR createdAt < 2026-01-21
 * - Dependencies: base (freeGiftLogicv1.js)
 */
(function() {
    'use strict';

    // ============ DEPENDENCY CONFIGURATION ============
    // Add module dependencies here (module name and event to listen for)
    var DEPENDENCIES = [
        { module: 'base', event: 'gfg:module:base' }
        // Add more dependencies here if needed in the future:
        // { module: 'otherModule', event: 'gfg:module:otherModule' }
    ];

    // ============ MODULE INITIALIZATION ============
    var initialized = false;

    function initKiteV0FeaturesModule() {
        if (initialized) return;
        initialized = true;

        try {
            // Store updateCartState in a global object for the proxy to use
            window.gfgKiteV0Features = window.gfgKiteV0Features || {};
            // Define updateCartState - the legacy cart refresh function

            window.gfgKiteV0Features.handleSkaiLamaSideCartUpdate = async function (data) {
                try {
                  let success = false;
                  let cartData = data
          
          
                                        // Initial cart.js call
                                        try {
                                            if(!cartData){
                                                cartData = await gfg.utility.getCartV2({forceRefresh: true});
                                            }
                                          } catch (error) {
                                            gfg.utility.debugConsole("Error fetching cart data:", error);
                                            return false;
                                          }
          
                  try {
                    window.Rebuy.Cart.init();
                    window.Rebuy.SmartCart.show();
                    success = true;
                    return success;
                  } catch (error) {
                    success = false;
                    gfg.utility.debugConsole('Error initializing and showing Rebuy Cart:', error);
                  }
          
                          // Case 17
                    try {
                      smeCartCall(0); // or smeCartCall(1);
                      window.openSmeCart();
                      success = true;
                      return success;
                    } catch (error) {
                      gfg.utility.debugConsole('Error calling and opening Cart upsell slide cart drawer:', error);
                      success = false;
                    }
          
                    try {
          
                        window.SLIDECART_UPDATE();
                        window.SLIDECART_OPEN();
                        success = true;
                        return success;
                    
                    } catch (error) {
                        success = false;
                        gfg.utility.debugConsole('Error calling and opening Cart upsell slide cart drawer:', error);
                    }
          
                    //not working
                    // if (document.querySelector('.easy-slide-cart') && document.querySelector('.slide-cart-body') && typeof CustomEvent === 'function') {
                    //     try {
                    //       setTimeout(()=>{
                    //         window.dispatchEvent(new CustomEvent("SLIDECARTY:refresh"));
                    //         window.dispatchEvent(new CustomEvent("SLIDECARTY:open"));
                    //         success = true;
                    //         return success;
                    //       }, 400)
                    //     } catch (error) {
                    //       gfg.utility.debugConsole('Error refreshing and opening Slide Carty:', error);
                    //       success = false;
                    //     }
                    // }
          
          
                                          if (typeof refreshCart == 'function') 
                                          {
                                              try 
                                              {
                                                  window.SLIDECART_UPDATE();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  try 
                                                  {
                                                      refreshCart(cartData);
                                                  } 
                                                  catch (e) 
                                                  {
                                                      success = false;
                                                      gfg.utility.debugConsole("Error while updating cart", error);
                                                  }
                                              }
                                          }
                                  
                                          if (typeof window.SLIDECART_UPDATE === "function") 
                                          {
                                              try 
                                              {
                                                  window.SLIDECART_UPDATE();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.fcsb !== "undefined" && typeof window.fcsb.openMiniCart === "function" && typeof window.fcsb.fetchCart === "function") 
                                          {
                                              try 
                                              {
                                                  window.fcsb.fetchCart();
                                                  setTimeout(() => 
                                                  {
                                                      window.fcsb.openMiniCart();
                                                  }, 500);
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          if (typeof triggerCartOpen === "function") 
                                          {
                                              try 
                                              {
                                                  triggerCartOpen();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          if (document.querySelector('#offcanvas-cart')) 
                                          {
                                              try 
                                              {
                                                  bootstrap.Offcanvas.getOrCreateInstance('#offcanvas-cart').show();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.theme !== "undefined" && typeof window.theme.ajaxCart !== "undefined" && typeof window.theme.ajaxCart.update === "function") 
                                          {
                                              try 
                                              {
                                                  window.theme.ajaxCart.update();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.icartCartActivityEvent === "function") 
                                          {
                                              try 
                                              {
                                                  window.icartCartActivityEvent();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent("theme:popup:open"))
                                          } 
                                          catch (e) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", e)
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new Event("theme:popup:open"))
                                          } 
                                          catch (e) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", e)
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new Event("theme:cart:update"))
                                          } 
                                          catch (e) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", e)
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new Event("theme:drawer:open"))
                                          } 
                                          catch (e) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", e)
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent("theme:cart:update"))
                                          } 
                                          catch (e) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", e)
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent("theme:drawer:open"))
                                          } 
                                          catch (e) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", e)
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent("cart:refresh"))
                                          } 
                                          catch (e) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", e)
                                          }
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new Event("cart:refresh"))
                                          } 
                                          catch (e) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", e)
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent('cart:build'));
                                          } 
                                          catch (e) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", e)
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent('obsidian:upsell:refresh'));
                                              document.dispatchEvent(new CustomEvent('obsidian:upsell:open'));
                                          } 
                                          catch (e) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", e)
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", 
                                              {
                                                  bubbles: true
                                              }));
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", error);
                                          }
                                  
                                  
                                          if (typeof window.HsCartDrawer !== "undefined" && typeof window.HsCartDrawer.updateSlideCart === "function") 
                                          {
                                              globalDebounce("hscartdrawer", function() 
                                              {
                                                  try 
                                                  {
                                                      window.HsCartDrawer.updateSlideCart();
                                                      success = true;
                                                  return success;
                                                  } 
                                                  catch (error) 
                                                  {
                                                      success = false;
                                                      gfg.utility.debugConsole("Error while updating cart", error);
                                                  }
                                              }, 100);
                                          }
                                  
                                          if (typeof window.HS_SLIDE_CART_OPEN !== "undefined" && typeof window.HS_SLIDE_CART_OPEN === "function") 
                                          {
                                              globalDebounce("hscartdraweropen", function() 
                                              {
                                                  try 
                                                  {
                                                      window.HS_SLIDE_CART_OPEN();
                                                      success = true;
                                                  return success;
                                                  } 
                                                  catch (error) 
                                                  {
                                                      success = false;
                                                      gfg.utility.debugConsole("Error while updating cart", error);
                                                  }
                                              }, 100);
                                          }
                                  
                                          if (typeof theme !== "undefined" && typeof theme.Cart !== "undefined" && typeof theme.Cart.updateCart === "function") 
                                          {
                                              try 
                                              {
                                                  theme.Cart.updateCart();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.updateMiniCartContents === "function") 
                                          {
                                              try 
                                              {
                                                  window.updateMiniCartContents();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.loadEgCartDrawer === "function") 
                                          {
                                              try 
                                              {
                                                  window.loadEgCartDrawer();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent("cart:build"));
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", error);
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent("cart:open"));
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", error);
                                          }
                                  
                                  
                                          // try 
                                          // {
                                          //     document.documentElement.dispatchEvent(new CustomEvent("product:added", 
                                          //     {
                                          //         bubbles: true,
                                          //         detail: 
                                          //         {
                                          //             source: "N9_Upsells",
                                          //             quantity: 1
                                          //         }
                                          //     }));
                                          // } 
                                          // catch (error) 
                                          // {
                                          //     success = false;
                                          //     gfg.utility.debugConsole("Error while updating cart", error);
                                          // }
                                  
                                  
                                          try 
                                          {
                                              if (typeof window.cart !== "undefined" && typeof window.cart.getCart !== "undefined" && typeof window.cart.openCartDropdown !== "undefined") 
                                              {
                                                  window.cart.getCart();
                                                  window.cart.openCartDropdown();
                                                  success = true;
                                                  return success;
                                              }
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", error);
                                          }
                                  
                                  
                                          try 
                                          {
                                              if (typeof window.ajaxCart !== "undefined") 
                                              {
                                                  window.ajaxCart.load();
                                                  success = true;
                                                  return success;
                                              }
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", error);
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent("obsidian:upsell:refresh"));
                                              document.dispatchEvent(new CustomEvent("obsidian:upsell:open"));
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", error);
                                          }
                                  
                                  
                                          let tn9 = document.getElementById("site-cart");
                                          if (tn9 !== null)
                                          {
                                              try 
                                              {
                                                  tn9.show();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          if (typeof CartJS !== "undefined" && typeof CartJS.getCart === "function") {
                                              try 
                                              {
                                                  CartJS.getCart();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.SLIDECART_OPEN !== "undefined") 
                                          {
                                              setTimeout(function() 
                                              {
                                                  try 
                                                  {
                                                      window.SLIDECART_OPEN();
                                                      success = true;
                                                  return success;
                                                  } 
                                                  catch (error) 
                                                  {
                                                      success = false;
                                                      gfg.utility.debugConsole("Error while updating cart", error);
                                                  }
                                              }, 500);
                                          }
                                  
                                  
                                          if (typeof Shopify !== "undefined" && typeof Shopify.theme !== "undefined" && typeof Shopify.theme.jsAjaxCart !== "undefined" && typeof Shopify.theme.jsAjaxCart.updateView === "function") 
                                          {
                                              try 
                                              {
                                                  Shopify.theme.jsAjaxCart.updateView();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.theme !== "undefined" && typeof window.theme.MiniCart !== "undefined" && typeof window.theme.MiniCart.update === "function") 
                                          {
                                              try 
                                              {
                                                  theme.MiniCart.update();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole("Error while updating cart", error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.openCart !== "undefined" && typeof window.monster_setCartItems !== "undefined") 
                                          {
                                              try 
                                              {
                                                  window.openCart();
                                                  window.monster_setCartItems(cartData.items);
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.Shopify !== "undefined" && typeof window.Shopify.onCartUpdate === "function") 
                                          {
                                              try 
                                              {
                                                  window.Shopify.onCartUpdate();
                                                  if (Shopify.onCartUpdate.toString().indexOf('There are now') === -1) 
                                                  {
                                                      window.Shopify.onCartUpdate(cartData, true);
                                                      success = true;
                                                  return success;
                                                  }
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof slate !== 'undefined' && typeof slate.cart !== 'undefined' && typeof slate.cart.updateCart == 'function') 
                                          {
                                              try 
                                              {
                                                  slate.cart.updateCart();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof Shopify !== 'undefined' && typeof Shopify.updateQuickCart !== 'undefined') 
                                          {
                                              try 
                                              {
                                                  Shopify.updateQuickCart(cartData);
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof bcActionList !== 'undefined' && typeof bcActionList.atcBuildMiniCartSlideTemplate === 'function') 
                                          {
                                              try 
                                              {
                                                  bcActionList.atcBuildMiniCartSlideTemplate(cartData);
                                                  if (typeof openMiniCart === 'function') 
                                                  {
                                                      openMiniCart();
                                                      success = true;
                                                  return success;
                                                  }
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.SATCB !== 'undefined' && typeof window.SATCB.Helpers !== 'undefined' && typeof window.SATCB.Helpers.openCartSlider === 'function') 
                                          {
                                              try 
                                              {
                                                  setTimeout(function() 
                                                  {
                                                      window.SATCB.Helpers.openCartSlider();
                                                  }, 500);
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof Shopify !== 'undefined' && typeof Shopify.updateCartInfo !== 'undefined' && document.querySelectorAll('.top-cart-holder .cart-target form .cart-info .cart-content').length > 0) 
                                          {
                                              try 
                                              {
                                                  Shopify.updateCartInfo(cartData, '.top-cart-holder .cart-target form .cart-info .cart-content');
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          try 
                                          {
                                              let event = new CustomEvent("wetheme-toggle-right-drawer", 
                                              {
                                                  detail: 
                                                  {
                                                      type: 'cart',
                                                      forceOpen: undefined,
                                                      params: 
                                                      {
                                                          cart: cartData
                                                      },
                                                  },
                                              });
                                              document.documentElement.dispatchEvent(event);
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole(error);
                                          }
                                  
                                  
                                          if (typeof window.vndHlp !== 'undefined' && typeof window.vndHlp.refreshCart === 'function') 
                                          {
                                              try 
                                              {
                                                  window.vndHlp.refreshCart(cartData);
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.renderCart === 'function') 
                                          {
                                              try 
                                              {
                                                  window.renderCart(cartData);
                                                  if (cartData.items.length > 0) 
                                                  {
                                                      let cart = document.querySelector('.mini-cart.is-empty');
                                                      if (cart !== null) 
                                                      {
                                                          cart.classList.remove('is-empty');
                                                      }
                                                  }
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent('theme:cart:change', 
                                              {
                                                  detail: 
                                                  {
                                                      cart: cartData,
                                                      cartCount: cartData.item_count
                                                  },
                                                  bubbles: true
                                              }))
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole(error);
                                          }
                                  
                                  
                                          if (typeof window.cartStore !== 'undefined' && typeof window.cartStore.setState === 'function') 
                                          {
                                              try 
                                              {
                                                  window.cartStore.setState(
                                                  {
                                                      justAdded: {},
                                                      popupActive: true,
                                                      item_count: cartData.item_count,
                                                      items: cartData.items,
                                                      cart: cartData
                                                  });
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof theme !== 'undefined' && typeof theme.Cart !== 'undefined' && typeof theme.Cart.setCurrentData === 'function') 
                                          {
                                              try 
                                              {
                                                  theme.Cart.setCurrentData(cartData);
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.halo !== 'undefined' && typeof window.halo.updateSidebarCart === 'function') 
                                          {
                                              try 
                                              {
                                                  window.halo.updateSidebarCart(cartData);
                                                  let sideBarCartIcon = document.querySelector('[cartData-cart-sidebar]');
                                                  if (sideBarCartIcon !== null) 
                                                  {
                                                      sideBarCartIcon.click();
                                                  }
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.Shopify !== 'undefined' && typeof window.Shopify.theme !== 'undefined' && typeof window.Shopify.theme.ajaxCart !== 'undefined' && typeof window.Shopify.theme.ajaxCart.updateView === 'function') 
                                          {
                                              try 
                                              {
                                                  Shopify.theme.ajaxCart.updateView(
                                                  {
                                                      cart_url: '/cart'
                                                  }, cartData);
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.theme !== 'undefined' && typeof window.theme.cart !== 'undefined' && typeof window.theme.cart.updateAllHtml === 'function') 
                                          {
                                              try 
                                              {
                                                  window.theme.cart.updateAllHtml();
                                                  window.theme.cart.updateTotals(cartData);
                                                  document.querySelector('.header--cart-toggle').click();
                                                  success = true;
                                                  return success;
                                              }
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof monster_setCartItems === 'function') 
                                          {
                                              try 
                                              {
                                                  monster_setCartItems(cartData.items);
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof gfg.gfgCartRefreshHelper.refreshCartContents !== 'undefined') 
                                          {
                                              try 
                                              {
                                                  gfg.gfgCartRefreshHelper.refreshCartContents(cartData);
                                                  success = true;
                                                  return success;
                                              }
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          try 
                                          {
                                              let miniCartOuterbox = document.querySelector('.minicart__outerbox');
                                              if (miniCartOuterbox !== null && typeof window.cartContentUpdate === 'function') 
                                              {
                                                  sectionsToRender = miniCartOuterbox.dataset.section;
                                                  fetch('/cart?sections=' + sectionsToRender, 
                                                  {
                                                      method: 'GET',
                                                      cache: 'no-cache',
                                                      credentials: 'same-origin',
                                                      headers: 
                                                      {
                                                          'Content-Type': 'application/json'
                                                      }
                                                  }).then(function(sectionsData) 
                                                  {
                                                      try 
                                                      {
                                                          return sectionsData.clone().json().then(function(p) 
                                                          {
                                                              cartData.sections = p;
                                                              window.cartContentUpdate(cartData, miniCartOuterbox, sectionsToRender);
                                                          });
                                                          success = true;
                                                  return success;
                                                      } 
                                                      catch (e) 
                                                      {
                                                          success = false;
                                                          gfg.utility.debugConsole(e);
                                                      }
                                                  });
                                              }
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole(error);
                                          }
                                  
                                  
                                          if (document.querySelectorAll('.sp-cart .sp-dropdown-toggle').length > 0 && typeof Shopify !== 'undefined' && typeof Shopify.getCart === 'function') 
                                          {
                                              try 
                                              {
                                                  Shopify.getCart();
                                                  success = true;
                                                  return success;
                                              } 
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                          
                                  
                                          try 
                                          {
                                              let cartDrawerForm = document.querySelector('form.cart-drawer');
                                              if (cartDrawerForm !== null) 
                                              {
                                                  let cartDrawerInputs = document.querySelectorAll('.cart-drawer input');
                                                  if (cartDrawerInputs.length > 0) 
                                                  {
                                                      cartDrawerInputs[0].dispatchEvent(new Event('blur'));
                                                      setTimeout(function() 
                                                      {
                                                          cartDrawerInputs[0].dispatchEvent(new Event('input'));
                                                      }, 350);
                                                      success = true;
                                                  return success;
                                                  }
                                              }
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole(error);
                                          }
                                  
                                  
                                          try 
                                          {
                                              let cartDrawer = document.querySelector('m-cart-drawer');
                                              if (cartDrawer !== null && typeof cartDrawer.onCartDrawerUpdate === 'function') 
                                              {
                                                  cartDrawer.onCartDrawerUpdate();
                                                  if (typeof cartDrawer.open === 'function') 
                                                  {
                                                      cartDrawer.open();
                                                  }
                                                  success = true;
                                                  return success;
                                              }
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole(error);
                                          }
                                  
                                  
                                          let siteCart = document.getElementById('site-cart');
                                          if (siteCart !== null) 
                                          {
                                              try 
                                              {
                                                  siteCart.show();
                                                  success = true;
                                                  return success;
                                              }
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.CD_REFRESHCART !== 'undefined') 
                                          {
                                              try 
                                              {
                                                  window.CD_REFRESHCART();
                                                  success = true;
                                                  return success;
                                              }
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.CD_OPENCART !== 'undefined') 
                                          {
                                              setTimeout(function() 
                                              {
                                                  try 
                                                  {
                                                      window.CD_OPENCART();
                                                      success = true;
                                                  return success;
                                                  } 
                                                  catch (error) 
                                                  {
                                                      success = false;
                                                      gfg.utility.debugConsole(error);
                                                  }
                                              }, 500);
                                          }
                                  
                                  
                                          if (typeof window.buildCart === 'function') 
                                          {
                                              try 
                                              {
                                                  window.buildCart();
                                                  success = true;
                                                  return success;
                                              }
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.PXUTheme !== 'undefined' && typeof window.PXUTheme.jsAjaxCart !== 'undefined' && typeof window.PXUTheme.jsAjaxCart.updateView === 'function') 
                                          {
                                              try 
                                              {
                                                  window.PXUTheme.jsAjaxCart.updateView();
                                                  success = true;
                                                  return success;
                                              }
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          if (typeof window.theme !== 'undefined' && typeof window.theme.addedToCartHandler === 'function') 
                                          {
                                              try 
                                              {
                                                  window.theme.addedToCartHandler(cartData);
                                                  success = true;
                                                  return success;
                                              }
                                              catch (error) 
                                              {
                                                  //success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          try 
                                          {
                                              let event = new Event('tcustomizer-event-cart-change');
                                              document.dispatchEvent(event);
                                          }
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole(error);
                                          }
                                  
                                  
                                  
                                          try 
                                          {
                                              let event = new CustomEvent('apps:product-added-to-cart');
                                              document.dispatchEvent(event);
                                          }
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole(error);
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent("cart:refresh:opend"));
                                          }
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole(error);
                                          }
                                  
                                  
                                          try 
                                          {
                                              document.dispatchEvent(new CustomEvent('dispatch:cart-drawer:refresh', 
                                              {
                                                  bubbles: true
                                              }));
                                              setTimeout(function() 
                                              {
                                                  document.dispatchEvent(new CustomEvent('dispatch:cart-drawer:open'));
                                              }, 500);
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole(error);
                                          }
                                  
                                  
                                          if (typeof window.theme !== 'undefined' && typeof window.theme.updateCartSummaries === 'function') 
                                          {
                                              try 
                                              {
                                                  window.theme.updateCartSummaries();
                                                  success = true;
                                                  return success;
                                              }
                                              catch (error) 
                                              {
                                                  success = false;
                                                  gfg.utility.debugConsole(error);
                                              }
                                          }
                                  
                                  
                                          try 
                                          {
                                            let cartNotification = document.querySelector("cart-notification") || document.querySelector("cart-drawer");
                                            if (cartNotification && typeof cartNotification.renderContents === "function") {
                                                const sectionsResponse = await fetch("/cart?sections=cart-notification-product,cart-notification-button,cart-icon-bubble,cart-drawer,cart-notification-content", {
                                                  method: "GET",
                                                  cache: "no-cache",
                                                  credentials: "same-origin",
                                                  headers: { "Content-Type": "application/json" }
                                                });
                                                const sectionsData = await sectionsResponse.json();
                                        
                                                if (cartData && cartData.item_count) {
                                                  let renderData = {
                                                    sections: sectionsData,
                                                    key: cartData.items[0] && cartData.items[0].key
                                                  };
                                                  cartNotification.renderContents(renderData);
                                                } else {
                                                  const cartCountBubble = document.querySelector(".cart-count-bubble");
                                                  if (cartCountBubble) cartCountBubble.remove();
                                                }
                                        
                                                let cartDrawerElement = document.querySelector("cart-drawer");
                                                if (cartDrawerElement && cartDrawerElement.classList.contains('is-empty') && cartData.items.length != 0) {
                                                  cartDrawerElement.classList.remove('is-empty');
                                                }
                                                success = true;
                                                return success;
                                                gfg.utility.debugConsole("Case 1 executed");
                                                return "REFRESH";
                                            }
                                          }
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole(error);
                                          }
                                  
                                  
                                          try 
                                          {
                                              window.dispatchEvent(new Event("update_cart"));
                                          } 
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", error);
                                          }
                                  
                                          try 
                                          {
                                              let kaktusc = document.querySelector("#kaktusc-app");
                                              let icon_buble = document.querySelector("#cart-icon-bubble");
                                              if (kaktusc !== null) 
                                              {
                                                  if (icon_buble !== null) icon_buble.click();
                                              }
                                          }
                                          catch (error) 
                                          {
                                              success = false;
                                              gfg.utility.debugConsole("Error while updating cart", error);
                                          }
    
    
                                            // ----------new side cart refresh iteration - 7July2025  --------------
                                            try {
                                                // opus side cart
                                                if (window.opusRefreshCart && typeof window.opusRefreshCart === 'function' && window.opusOpen && typeof window.opusOpen === 'function') {
                                                    window.opusRefreshCart();
                                                    window.opusOpen();
                                                    success = true;
                                                    return success;
                                                }
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            } 
    
                                            try {
                                                document.dispatchEvent(new CustomEvent('cartdrawer:refresh'));
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
    
                                            try {
                                                document.querySelector('cart-form').refresh();
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
                                            try {
                                                document.body.dispatchEvent(new CustomEvent("baseline:modalcart:afteradditem"));
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
    
                                            
    
    
                                            try {
                                                document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
                                                    bubbles: true
                                                }));
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
    
                                            try {
                                                BoosterTheme.cart.dispatchListeners();
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
    
                                            try {
                                                document.body.dispatchEvent(new CustomEvent("label:modalcart:afteradditem"));
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
                                            
    
    
                                            try {
                                                document.dispatchEvent(new CustomEvent('dna:cart:refresh'))
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
    
    
                                            try {
                                                const cartDrawer = document.querySelector('cart-drawer');
                                                if(cartDrawer){
                                                  cartDrawer.update();
                                                }
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
    
    
                                            try {
                                                const cartDrawer = document.querySelector("cart-drawer")
                                                if(cartDrawer){
                                                    cartDrawer.onCartRefreshListener({detail:{open:true}})
                                                }
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
                                            try {
                                                const cartDrawer = document.querySelector("cart-drawer");
                                                const event = new CustomEvent("cart:refresh", {
                                                    bubbles: true,
                                                    detail: {
                                                        open: true
                                                    }
                                                });
                                                cartDrawer.onCartRefreshListener(event);
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while refreshing cart drawer", error);
                                            }
                                            
    
    
                                            try {
                                                document.querySelector("main-cart").update(function(){});
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
                                            try {
                                                load_cart();
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
                                            try {
                                                window.addToCart({});
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
    
                                            try {
                                                const updateSidebarCart=  function(cart) {
                                                    if(!$.isEmptyObject(cart)){
                                                        const $cartDropdown = $('#halo-cart-sidebar .halo-sidebar-wrapper .previewCart-wrapper');
                                                        const $cartLoading = '<div class="loading-overlay loading-overlay--custom">\
                                                                <div class="loading-overlay__spinner">\
                                                                    <svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\
                                                                        <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>\
                                                                    </svg>\
                                                                </div>\
                                                            </div>';
                                                        const loadingClass = 'is-loading';
                                        
                                                        $cartDropdown
                                                            .addClass(loadingClass)
                                                            .prepend($cartLoading);
                                        
                                                        $.ajax({
                                                            type: 'GET',
                                                            url: window.routes.root + '/cart?view=ajax_side_cart',
                                                            cache: false,
                                                            success: function (data) {
                                                                var response = $(data);
                                        
                                                                $cartDropdown
                                                                    .removeClass(loadingClass)
                                                                    .html(response);
                                        
                                                                // halo.dispatchChangeForShippingMessage();
                                                            },
                                                            error: function (xhr, text) {
                                                                // halo.showWarning($.parseJSON(xhr.responseText).description);
                                                            },
                                                            complete: function () {
                                                                let $body = $('body');
                                                                $body.find('[data-cart-count]').text(cart.item_count);
                                                                if (cart.item_count == 1){
                                                                    $body.find('[data-cart-text]').text(window.cartStrings.item);
                                                                } else {
                                                                    $body.find('[data-cart-text]').text(window.cartStrings.items);
                                                                }
                                                                // halo.productCollectionCartSlider();
                                                                // halo.updateGiftWrapper();
                                                                // if (halo.checkNeedToConvertCurrency()) {
                                                                //   Currency.convertAll(window.shop_currency, $('#currencies .active').attr('data-currency'), 'span.money', 'money_format');
                                                                // };
                                                                document.dispatchEvent(new CustomEvent('cart-update', { detail: cart }));
                                                                if ($('body').hasClass('cursor-fixed__show')){
                                                                    window.sharedFunctionsAnimation.onEnterButton();
                                                                    window.sharedFunctionsAnimation.onLeaveButton();
                                                                }
                                                            }
                                                        });
    
                                                    }
                                                }
                                               Shopify.getCart((cart)=>updateSidebarCart(cart))
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
    
                                            try {
                                                const cartElement = document.querySelector("cart-notification") || document.querySelector("cart-drawer");
                                                // if (!cartElement?.renderContents) return false;
                                            
                                                const sections = cartElement.getSectionsToRender().map(curr => curr.id).join(",");
                                            
                                                fetch(`/cart?sections=${sections}`)
                                                    .then(response => response.json())
                                                    .then(sectionsData => {
                                                        cartElement.renderContents({
                                                            sections: sectionsData,
                                                            ...(cartElement.localName === "cart-notification"
                                                                ? { key: t.items[0]?.key }
                                                                : { id: t.items[0]?.id })
                                                        });
                                            
                                                        if (cartElement.classList.contains("is-empty")) cartElement.classList.remove("is-empty");
                                            
                                                        if (cartElement?.open && typeof cartElement.open === 'function') {
                                                            cartElement.open();
                                                        }
                                                    })
                                                    .catch(error => {
                                                        success = false;
                                                        gfg.utility.debugConsole("Error while updating cart", error);
                                                    });
                                            } catch (error) {
                                                success = false;
                                                gfg.utility.debugConsole("Error while updating cart", error);
                                            }
                                            
    
                                            try {
                                                
                                                
                                                //Responsible to refresh cart
                                                document.dispatchEvent(new CustomEvent("cart:refresh", {bubbles:true}));
                                                    
                                                //Responsible to update the items count on the cart button
                                                const config = FoxTheme.utils.fetchConfig();
                                                fetch(`${FoxTheme.routes.cart_add_url}`, config)
                                                    .then(function(response) {
                                                        return response.json();
                                                    })
                                                    .then(function(parsedState) {
                                                        return fetch(`${FoxTheme.routes.cart_url}`, { ...FoxTheme.utils.fetchConfig() });
                                                    })
                                                    .then(function(response) {
                                                        return response.json();
                                                    })
                                                    .then(function(cartJson) {
                                                        FoxTheme.pubsub.publish(FoxTheme.pubsub.PUB_SUB_EVENTS.cartUpdate, { cart: cartJson });
                                                        
                                                        //Responsible to open the cart
                                                        const cd = document.querySelector("#CartDrawer")
                                                        cd.show();
                                                    })
                                                    .catch(function(error) {
                                                        success = false;
                                                        gfg.utility.debugConsole("Error while updating cart", error);
                                                    });
                                                } catch (error) {
                                                    success = false;
                                                    gfg.utility.debugConsole("Error while updating cart", error);
                                                }
    
    
                                                try {
                                                    fetch(`/${gfg.utility.getLocale()}/?section_id=helper-cart&app=gfgfreegift`)
                                                        .then(response => response.text())
                                                        .then(text => {
                                                            const sectionInnerHTML = new DOMParser().parseFromString(text, 'text/html');
                                                            const cartFormInnerHTML = sectionInnerHTML.getElementById('AjaxCartForm').innerHTML;
                                                            const cartSubtotalInnerHTML = sectionInnerHTML.getElementById('AjaxCartSubtotal').innerHTML;
                                                
                                                            const cartItems = document.getElementById('AjaxCartForm');
                                                            cartItems.innerHTML = cartFormInnerHTML;
                                                            cartItems.ajaxifyCartItems();
                                                
                                                            document.getElementById('AjaxCartSubtotal').innerHTML = cartSubtotalInnerHTML;
                                                
                                                            document.querySelectorAll('[data-header-cart-count]').forEach(elm => {
                                                                elm.textContent = document.querySelector('#AjaxCartForm [data-cart-count]').textContent;
                                                            });
                                                            document.querySelectorAll('[data-header-cart-total]').forEach(elm => {
                                                                elm.textContent = document.querySelector('#AjaxCartForm [data-cart-total]').textContent;
                                                            });
                                                
                                                        })
                                                        .catch(error => {
                                                            success = false;
                                                            gfg.utility.debugConsole("Error while updating cart", error);
                                                        });
                                                } catch (error) {
                                                    success = false;
                                                    gfg.utility.debugConsole("Error while updating cart", error);
                                                }
    
    
                                                try {
                                                    fetch(`/cart?section_id=cart-drawer`)
                                                        .then(response => response.text())
                                                        .then(responseText => {
                                                            const html = new DOMParser().parseFromString(responseText, "text/html");
                                                            const cartDrawerContent = html.querySelector("#cart-drawer");
                                                            document.querySelector("#cart-drawer").innerHTML = cartDrawerContent.innerHTML;
                                                        })
                                                        .catch(error => {
                                                            success = false;
                                                            gfg.utility.debugConsole("Error while updating cart", error);
                                                        });
                                                } catch (error) {
                                                    success = false;
                                                    gfg.utility.debugConsole("Error while updating cart", error);
                                                }
    
    
                                  
                                          return success;
              
                  // If no case matches or executes successfully
                  gfg.utility.debugConsole("No matching cart update method found or executed successfully");
                  return false;
                } catch (error) {
                  gfg.utility.debugConsole("error in handleSkaiLamaSideCartUpdate fn=>", error);
                  return false;
                }
            };

            window.gfgKiteV0Features.updateCartState = async function(t, e, r, cartData) {

                //t is card data
                //e is even
                //refresh the cart 
                

                // xxxxxxxxx------------------------Side cart update new code  - starts ----------------------------------xxxxxxxx

                if (gfg?.settings?.app?.fireNewSideCartRefreshCodeFirst && window.location.pathname !==  "/cart") {
                    let slCartUpdateResult = await window.gfgKiteV0Features.handleSkaiLamaSideCartUpdate(cartData);
                    if (slCartUpdateResult) {
                        return slCartUpdateResult;
                    }
                }

                // xxxxxxxxx------------------------Side cart update new code  - ends ----------------------------------xxxxxxxx

                async function refreshThePage(t, e) {
                    try {
                        if (gfg.settings.app.executeCustomScriptAfterFreeGiftAddition) {
                            // gfg.settings.app.executeCustomScriptAfterFreeGiftAddition();
                            // execute the custom script
                             eval(gfg.settings.app.executeCustomScriptAfterFreeGiftAddition);
                      
                        }
                        
                        if("/cart" === window.location.pathname || window.location.pathname === i + "cart"){
                            const uniqueCartItemsId =  gfg.settings.app.cartPageItemsSectionId;
                            const cartPageItemsSelector = gfg.settings.app.cartPageItemsSelector;
                            await gfg.gfgFreeGift.f.refreshCartPageSection(uniqueCartItemsId,cartPageItemsSelector);
                            // await gfg.gfgFreeGift.f.checkForFreeGift();
                            // await gfg.gfgFreeGift.f.checkForFreeGift();

                            return;
                        }
                       
                        const sideCartSectionId = gfg.settings.app.sideCartSectionId;
                        const sideCartSectionSelector = gfg.settings.app.sideCartSectionSelector;

                        if(sideCartSectionId && sideCartSectionSelector){
                            await gfg.gfgFreeGift.f.updateSidecartSection(sideCartSectionId,sideCartSectionSelector);
                        }

                        // await gfg.gfgFreeGift.f.checkForFreeGift();
                        // await gfg.gfgFreeGift.f.checkForFreeGift();
                        return;
                    } catch (t) {
                        window.location.href = window.location.href.toString()
                        gfg.utility.debugConsole("Failed to reload page using href assignment!", t), window.location.reload()
                    }
                }

                // if this flg is set directly fire the refresh function don't check for default side cart which is present below.
                // this is used to avoid wrong mismatch of side cart code causing not execution of custom script written in refreshThePage function.
                const skipDefaultSideCartCheck = gfg.settings.app?.skipDefaultSideCartCheck;
                if(skipDefaultSideCartCheck){
                    return refreshThePage(t, e);
                }

                var n = this;
                var i = window.Shopify && window.Shopify.routes ? window.Shopify.routes.root : "/";
                if ("/cart" === window.location.pathname || window.location.pathname === i + "cart") {
                    await refreshThePage(t, e);
                }
    
    
                //type check the function
                function hn(t) {
                    return hn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, hn(t)
                }
    
                
    
                function f(message) {
                    gfg.utility.debugConsole(message);
                }
                function z(message){
                    gfg.utility.debugConsole("z-function-",message);
                }
                
                try {
                    var o, a, c, d, u, l, p, s, m, g, h, y;
                    if(typeof window.HS_SLIDE_CART_UPDATE === "function" && document.querySelector(".hs-site-cart-popup-layout, .hs-header-layout")) return window.HS_SLIDE_CART_UPDATE(), f("Update drawer - iACart cart upsell cart drawer"), !1;

                    if(window.Rebuy && window.Rebuy.Cart && document.querySelector(".rebuy-cart__flyout, .rebuy-cart__flyout-body")) return window.Rebuy.Cart.init(), f("Update drawer - Rebuy"), !1;

                    if(window.Spurit && document.querySelector(".spurit-occ3__slide-drawer")) return window.Spurit.OneClickCheckout3.cartDrawer.refresh(), f("Update drawer - Cartly Slide Cart Drawer"), !1;

                    if(typeof window.smeCartCall === "function" && document.querySelector(".salemaximize__drawer-side, .salemaximize__inner")) return window.smeCartCall(0), f("Update drawer - Cart upsell slide cart drawer"), !1;

                    if (typeof window.SLIDECART_UPDATE === "function" && document.querySelector("#slidecarthq div")) return window.SLIDECART_UPDATE(), f("Update drawer - Slide Cart Drawer By AMP"), !1;

                    if(typeof window.dispatchEvent === "function" && document.querySelector(".easy-slide-cart, .slide-cart-body")) return window.dispatchEvent(new CustomEvent("SLIDECARTY:refresh")), f("Update drawer - slide carty upsell & gift"), !1;

                    if(typeof window.dispatchEvent === "function" && document.querySelector(".qsc2-drawer, .qsc2-drawer-body")) return document.dispatchEvent(new Event("ajax-cart:changed")), f("Update drawer - slide Cart, sticky add to cart"), !1;

                    if(typeof window.updateQuickCart === "function" && document.querySelector(".quick-cart__container"))  return window.updateQuickCart(), f("Update drawer updateQuickCart"), !1;

                    if ("function" == typeof window.upcartRegisterAddToCart && document.querySelector(".upcart-product-item")) return window.upcartRegisterAddToCart(), f("Update drawer upcart app - upcartRegisterAddToCart"), !1;
                    
                    if(window.sharedFunctions && typeof window.sharedFunctions.updateSidebarCart === "function" && document.querySelector(".halo-sidebar")) return window.sharedFunctions.updateSidebarCart({"key":"value"}), f("Update drawer - Halo Sidebar Theme"), !1;

                    if (window.HsCartDrawer && "function" == typeof window.HsCartDrawer.updateSlideCart && document.querySelector(".hs-site-cart-popup-layout, .hs-header-layout")) return window.HsCartDrawer.updateSlideCart(), !1;
                    if (!window.ignoreRebuyDrawer && window.Rebuy && "object" === hn(window.Rebuy.Cart) && "function" == typeof window.Rebuy.Cart.fetchCart && document.querySelector("#rebuy-cart")) return window.Rebuy.Cart.fetchCart(), f("Update drawer Rebuy"), !1;
                    if (window.SATCB && "object" === hn(window.SATCB.Widgets) && "object" === hn(window.SATCB.Widgets.CartSlider) && "function" == typeof window.SATCB.Widgets.CartSlider.openSlider && document.querySelector(".satcb-cs")) return window.SATCB.Widgets.CartSlider.openSlider(), f("Update drawer SATCB"), !1;
                    
                    if (t && "function" == typeof window.SLIDECART_SET_CART && document.querySelector("#slidecarthq div")) return window.SLIDECART_SET_CART(t), f("Update drawer SLIDECART_SET_CART"), !1;
                    
                    if (window.sellify && "object" === hn(window.sellify.ucd) && "object" === hn(window.sellify.ucd.helpers) && "object" === hn(window.sellify.ucd.helpers.ShopifyAPI) && "function" == typeof window.sellify.ucd.helpers.ShopifyAPI.getCart && document.querySelector("#sellify-ucd-cart-drawer")) return window.sellify.ucd.helpers.ShopifyAPI.getCart(window.sellify.ucd.helpers.ajaxCart.buildCart), f("Update drawer sellify"), !1;
                    
                    var w = window.csapps ? document.querySelector("[data-csapp_line_wrapper] .cart-quantity-wrap input[data-id]:not([readonly])") : null;
                    if (w) return t && t.item_count ? (w.dispatchEvent(new Event("change", { bubbles: !0 })), f("Update drawer aiod cart app"), !1) : (f("Update drawer aiod cart app - empty cart = refresh"), refreshThePage(t, e));
                    
                    if ("function" == typeof window.CD_REFRESHCART && document.querySelector("#cart-drawer-app .cd-cart")) return window.CD_REFRESHCART(), f("Update drawer CD_REFRESHCART"), !1;
                    if ("function" == typeof window.BoostPFS && "object" === hn(window.BoostPFS.Utils) && document.querySelector(".boost-pfs-minicart-wrapper")) return f("Update drawer not supported for BoostPFS drawer. Refresh!"), refreshThePage(t, e);
                    if ("function" == typeof window.openeamcart && document.querySelector("#shopify-section-eam-cart")) return window.openeamcart(), f("Update drawer openeamcart"), !1;
                    if (t && void 0 !== window.vndHlp && "function" == typeof window.vndHlp.refreshCart) return window.vndHlp.refreshCart(t), f("Update drawer vndHlp.refreshCart"), !1;
                    
                    if (t && window.Cart && "function" == typeof window.Cart.buildCart) return window.Cart.buildCart(t), f("Update drawer Cart.buildCart"), !1;
                    if (t && "function" == typeof window.buildCart && document.querySelector("#mini__cart.yv_side_drawer_wrapper")) return window.buildCart(t), f("Update drawer window.buildCart"), !1;
                    if (window.cartNotification && "function" == typeof window.cartNotification.getCart && document.querySelector("#cart-notification")) return window.cartNotification.getCart(), f("Update drawer cartNotification"), !1;
                    if ("function" == typeof window.do_cart_refresh) return window.do_cart_refresh(!1), f("Update drawer do_cart_refresh"), !1;
                    if (window.theme && "function" == typeof window.theme.CartDrawer && window.theme.CartDrawer.toString().includes("new theme.Drawers")) return setTimeout((function() {return new window.theme.CartDrawer}), 250), f("Update drawer theme CartDrawer"), !1;
                    if (null !== (o = window.theme) && void 0 !== o && null !== (a = o.settings) && void 0 !== a && a.cart_drawer && document.querySelector("#Cart-Drawer")) {
                        if (!t || !t.item_count) return f("Update drawer #Cart-Drawer no items need to refresh"), refreshThePage(t, e);
                        var v = document.createElement("input");
                        return v.style.display = "none", v.classList.add("qty"), v.dataset.index = "1", v.value = t.items[0].quantity, document.querySelector("#CartDrawerItem-1").appendChild(v), v.dispatchEvent(new Event("change", {
                            bubbles: !0
                        })), f("Update drawer #Cart-Drawer"), !1
                    }
                    if (window.Shopify && window.Shopify.theme && ("Expanse" === window.Shopify.theme.name || 902 === window.Shopify.theme.theme_store_id) && document.querySelector("#HeaderCart.site-header__drawer")) return document.dispatchEvent(new Event("cart:build")), f("Update drawer cart:build"), !1;
                    if (t && "function" == typeof window.refreshCart) return window.refreshCart(t), f("Update drawer window.refreshCart"), !1;
                    if ("undefined" != typeof slate && void 0 !== slate.cart && "function" == typeof slate.cart.updateCart) return slate.cart.updateCart(), f("Update drawer slate.cart.updateCart"), !1;
                    if (t && "undefined" != typeof Shopify && "function" == typeof Shopify.updateQuickCart) return Shopify.updateQuickCart(t), f("Update drawer Shopify.updateQuickCart"), !1;
                    if (t && void 0 !== window.bcActionList && "function" == typeof window.bcActionList.atcBuildMiniCartSlideTemplate) return window.bcActionList.atcBuildMiniCartSlideTemplate(t), "function" == typeof window.openMiniCart && window.openMiniCart(), f("Update drawer bcActionList"), !1;
                    if (t && "undefined" != typeof Shopify && void 0 !== Shopify.updateCartInfo && document.querySelector(".top-cart-holder .cart-target form .cart-info .cart-content")) return Shopify.updateCartInfo(t, ".top-cart-holder .cart-target form .cart-info .cart-content"), f("Update drawer Shopify.updateCartInfo"), !1;
                    if (t && "undefined" != typeof Shopify && void 0 !== Shopify.updateCartInfo && document.querySelector("#cart-info #cart-content")) return Shopify.updateCartInfo(t, "#cart-info #cart-content"), f("Update drawer Shopify.updateCartInfo, selector 2"), !1;
                    if (window.theme && "object" === hn(window.theme.cart) && "function" == typeof window.theme.cart._updateCart && "function" == typeof window.$) return window.theme.cart._updateCart({}), document.body.dispatchEvent(new Event("updateCart"))
                    , document.dispatchEvent(new Event("cart:build")), f("Update drawer cart:build + updateCart"), !1;
                    if (window.theme && "function" == typeof window.theme.refreshCart) return window.theme.refreshCart(), f("Update drawer theme.refreshCart"), !1;
                    if (document.querySelector("#sidebar-cart.Drawer form.Cart.Drawer__Content")) return setTimeout((function() {
                        var t = new Event("product:added");
                        t.detail = {}, t.detail.quantity = 0, document.dispatchEvent(t)
                    }), 250), setTimeout((function() {
                        document.documentElement.dispatchEvent(new Event("cart:refresh"))
                    }), 500), f("Update drawer BOOMR product:added / cart:refresh"), !1;
                    if ("function" == typeof window.updateQtyCart && "function" == typeof window.$ && document.querySelector("#sidebar-cart.cart-drawer .cart-content[data-cart-content]")) return fetch("/cart?view=drawer&timestamp=" + Date.now(), {
                        credentials: "same-origin",
                        method: "GET"
                    }).then((function(t) {
                        t.text().then((function(t) {
                            
                            document.querySelectorAll("[data-cart-content]").forEach(el => el.innerHTML = t);

                        }))
                    })), f("Update drawer #sidebar-cart.cart-drawer"), !1;
                    if (document.querySelector("form#mini-cart .mini-cart__content .mini-cart__line-item")) return setTimeout((function() {
                        return document.documentElement.dispatchEvent(new Event("cart:refresh"))
                    }), 500), f("Update drawer custom cart-drawer elem form#mini-cart"), !1;
                    var b = z("shopify_cart_state");
                    if (t && b && document.querySelector("form.cart-drawer")) {
                        J("shopify_cart_state", JSON.stringify(t));
                        var S = new Event("storage");
                        return S.key = "shopify_cart_state", window.dispatchEvent(S), f("Update drawer BOOMR shopify_cart_state"), !1
                    }
                    if (document.querySelector(["#ajaxifyModal #ajaxifyCart", "#ajaxifyDrawer #ajaxifyCart", ".fixed-cart-wrap #slidedown-cart", ".sidebar-drawer-container .sidebar-drawer"].join(","))) return t && t.item_count ? window.forceUpdateModalCart ? (f("Update drawer using custom forceUpdateModalCart"), window.forceUpdateModalCart(), !1) : (gfg.utility.debugConsole("All-in-One Free Gift on Cart: forceUpdateModalCart not set, but was expected."), refreshThePage(t, e)) : (gfg.utility.debugConsole("All-in-One Free Gift on Cart: forceUpdateModalCart reload due to empty cart."), refreshThePage(t, e));
                    if (window.theme && "object" === hn(window.theme.Cart) && "function" == typeof window.theme.Cart.updateCart) return window.theme.Cart.updateCart(), f("Update drawer Cart updateCart"), !1;
                    if (t && "function" == typeof window.render_cart_drawer && window.render_cart_drawer.toString().includes("render_cart_drawer(cart, target, oldQtd, id_variant)")) return window.render_cart_drawer(t, jQuery(".list-products"), 0, ""), f("Update drawer render_cart_drawer"), !1;
                    if (window.cart && "function" == typeof window.cart.getCart && "function" == typeof window.cart.closeCartDropdown && "function" == typeof window.cart.openCartDropdown && document.getElementById("cart-dropdown")) return window.cart.getCart(), f("Update drawer cart.getCart, #cart-dropdown"), !1;
                    if (window.cart && "function" == typeof window.cart.getCart && document.querySelector(".cart-drawer")) return window.cart.getCart(), f("Update drawer cart.getCart, .cart-drawer"), !1;
                    if (window.ajaxCart && "function" == typeof window.ajaxCart.load) return window.ajaxCart.load(), f("Update drawer ajaxCart load"), !1;
                    if (window.Shopify && "object" === hn(window.Shopify.theme) && "object" === hn(window.Shopify.theme.jsAjaxCart) && "function" == typeof window.Shopify.theme.jsAjaxCart.updateView) return window.Shopify.theme.jsAjaxCart.updateView(), f("Update drawer jsAjaxCart updateView"), !1;
                    if (window.Shopify && "object" === hn(window.Shopify.theme) && "object" === hn(window.Shopify.theme.ajaxCart) && "function" == typeof window.Shopify.theme.ajaxCart.init && document.querySelector(".js-mini-cart-trigger")) return document.querySelector(".js-mini-cart-trigger").dispatchEvent(new Event("click")), f("Update drawer js-mini-cart-trigger"), !1;
                    if (window.theme && "object" === hn(window.theme.ajaxCart) && "function" == typeof window.theme.ajaxCart.update && document.querySelector("#CartDrawer.drawer")) return window.theme.ajaxCart.update(), f("Update drawer theme.ajaxCart.update"), !1;
                    if (window.Shopify && "function" == typeof window.Shopify.addItem && "function" == typeof window.jQuery && document.querySelector(".cart-flyout .cart-flyout__content")) return jQuery.get("/cart?view=json", (function(t) {
                        jQuery(".cart-flyout").html(t)
                    })), f("Update drawer g-addtoicart cart-flyout"), !1;
                    if (t && window.wetheme && "function" == typeof window.wetheme.toggleRightDrawer) return window.wetheme.toggleRightDrawer("cart", !0, {
                        cart: t
                    }), f("Update drawer toggleRightDrawer"), !1;
                    if (window.gfTheme && "function" == typeof window.gfTheme.getCart) return window.gfTheme.getCart((function() {})), f("Update drawer gfTheme"), !1;
                    if (t && z("cartCurrentData") && document.querySelector(".popup__body .js-popup-cart-ajax")) return J("cartCurrentData", JSON.stringify(t)), setTimeout((function() {
                        return J("cartCurrentData", JSON.stringify(t))
                    }), 100), setTimeout((function() {
                        return J("cartCurrentData", JSON.stringify(t))
                    }), 1e3), f("Update drawer cartCurrentData in local storage"), !1;
                    if (document.querySelector("cart-drawer#mini-cart form#mini-cart-form, #shopify-section-mini-cart cart-drawer#mini-cart")) return t && t.item_count ? (setTimeout((function() {
                        return document.documentElement.dispatchEvent(new Event("cart:refresh"))
                    }), 750), f("Update drawer custom cart-drawer elem"), !1) : (f("When cart is empty custom cart-drawer elem's event may not work. Refresh!"), refreshThePage(t, e));
                    if (window.CartJS && "function" == typeof window.CartJS.getCart && document.querySelector("#cart-drawer,#cartDrawer")) return setTimeout((function() {
                        return window.CartJS.getCart(null)
                    }), 500), f("Update drawer CartJS getCart"), !1;
                    if ("function" == typeof window.update_cart && document.querySelector("#custom-drawer-cart")) return window.update_cart(), f("Update drawer custom-drawer-cart"), !1;
                    if (window.fcsb && "function" == typeof window.fcsb.fetchCart && document.querySelector("#sticky-app-client") && document.querySelector('#sticky-app-client [data-cl="mini-cart"]')) return window.fcsb.fetchCart(), f("Update drawer fcsb"), !1;
                    if (window.theme && "function" == typeof window.theme.updateCartSummaries) return window.theme.updateCartSummaries(), f("Update drawer theme.updateCartSummaries"), !1;
                    if (window.BT && "function" == typeof window.BT.updateHeaderCartHtml) return window.BT.updateHeaderCartHtml(!0), f("Update drawer BT.updateHeaderCartHtml"), !1;
                    if (window.geckoShopify && "function" == typeof window.geckoShopify.GetCartData) return document.querySelectorAll(".jsccount").forEach((function(t) {
                        return t.innerHTML = ""
                    })), window.geckoShopify.GetCartData(1, 1), f("Update drawer geckoShopify.GetCartData"), !1;
                    if (window.theme && "object" === hn(window.theme.classes) && "function" == typeof window.theme.classes.CoreCart && document.querySelector('[data-view="cart"] .cart--root')) return document.querySelector('[data-view="cart"] .cart--root').dispatchEvent(new Event("update-html")), f("Update drawer cart--root"), !1;
                    if (window.theme && "function" == typeof window.theme.cart && "function" == typeof window.theme.cart.updateTotals && "function" == typeof(null === (c = document.querySelector('[data-view="cart"] .cart--root')) || void 0 === c ? void 0 : c.updateHtml)) return t && t.item_count ? (document.querySelector('[data-view="cart"] .cart--root').updateHtml(), f("Update drawer cartRoot.updateHtml"), !1) : (f("When cart is empty cartRoot.updateHtml does not work. Refresh!"), refreshThePage(t, e));
                    if (window.theme && "object" === hn(window.theme.classes) && "function" == typeof window.theme.classes.FrameworkCart && document.querySelector('.cart--root[data-js-class="Cart"]')) {
                        var C = document.querySelector('.cart--root[data-js-class="Cart"]');
                        return C.dispatchEvent(new Event("updateHtml", {
                            bubbles: !0
                        })), C.dispatchEvent(new Event("update-html", {
                            bubbles: !0
                        })), f("Update drawer cart--root updateHtml/update-html event"), !1
                    }
                    var q = window.CartDrawer ? document.querySelector("#shopify-section-cart-drawer cart-drawer cart-drawer-items, #CartDrawer.cart-drawer cart-drawer-items") : null;
                    if (q && q.onChange) {
                        if (t && t.items.length) {
                            var A = {
                                target: {
                                    dataset: {
                                        index: 1
                                    },
                                    value: t.items[0].quantity
                                }
                            };
                            return q.onChange(A), _("#CartDrawer-LineItemError-1 {display: none;}"), f('Update drawer customCartDrawerItems["onChange"]'), !1
                        }
                        return f('Update drawer customCartDrawerItems["onChange"] - no items, force refresh!'), refreshThePage(t, e)
                    }
                    var E = window.themeVariables ? document.querySelector("#shopify-section-cart-drawer cart-drawer, .shopify-section cart-drawer") : null;
                    if (E && "function" == typeof E._onCartRefreshListener) return E._onCartRefreshListener(), f("Update drawer #shopify-section-cart-drawer cart-drawer"), !1;
                    var P = window.theme && "object" === hn(window.theme.CartDrawerSection) ? document.querySelector(".cart-drawer-modal cart-form.cart-drawer") : null;
                    if (P && "function" == typeof P.refresh) return P.refresh(), f("Update drawer .cart-drawer-modal cart-form.cart-drawer"), !1;
                    var O = window.CartDrawer ? document.querySelector("#Drawer-Cart cart-drawer") : null;
                    if (O && "function" == typeof O.updateCart) return O.updateCart(), f("Update drawer #Drawer-Cart cart-drawer updateCart"), !1;
                    var k, T, x, j, D, L = window.Shopify && "function" == typeof window.Shopify.CountryProvinceSelector ? document.querySelector("#main-cart-items quantity-input .quantity__input:not([readonly])") : null;
                    if (L && "object" === hn(L.parentElement.changeEvent)) {
                        if (!t || !t.item_count) return f("Update drawer quantity-input .quantity__input - empty cart = refresh"), refreshThePage(t, e);
                        for (var I = parseInt(L.getAttribute("data-index")), N = 0, R = 1; R <= t.items.length; R++) {
                            var G, M = null === (G = t.items[R - 1].handle) || void 0 === G ? void 0 : G.includes("docapp-free-gift");
                            if (M && R <= I && N++, !M && R < I && N--, !M && R >= I) break
                        }
                        return L.setAttribute("data-index", (I + N).toString()), L.dispatchEvent(L.parentElement.changeEvent), _("#main-cart-footer .cart-drawer__cart-error, mini-cart.cart-drawer .cart-item__error {display: none;}"), f("Update drawer quantity-input .quantity__input"), !1
                    }
                    if ("function" == typeof window.showCart && document.querySelector(".drawer .drawer_container")) return window.showCart(), f("Update drawer showCart"), !1;
                    if (window.WAU && "object" === hn(window.WAU.AjaxCart) && "function" == typeof window.WAU.AjaxCart.init && "function" == typeof window.WAU.AjaxCart.showDrawer && document.querySelector('#slideout-ajax-cart[data-wau-slideout="ajax-cart"] #mini-cart') && document.querySelector(".js-mini-cart-trigger.js-slideout-open")) return window.WAU.AjaxCart.hideDrawer({
                        cart_action: "drawer"
                    }), setTimeout((function() {
                        return document.querySelector(".js-mini-cart-trigger.js-slideout-open").dispatchEvent(new Event("click"))
                    }), 400), f("Update drawer WAU - close + click"), !1;
                    if ("function" == typeof window.fetchCart && document.querySelector(".cart-flyout .cart-drawer")) return window.fetchCart(), f("Update drawer fetchCart"), !1;
                    if (window.elessiShopify && "function" == typeof window.elessiShopify.initAddToCart && document.querySelector(".cart__popup, .jas-mini-cart.jas-push-menu")) return t && t.item_count ? (window.elessiShopify.initAddToCart(), f("Update drawer elessiShopify.initAddToCart"), !1) : (f("Update drawer elessiShopify.initAddToCart - empty cart = refresh"), refreshThePage(t, e));
                    if (window.Shopify && "object" === hn(window.Shopify.theme) && "object" === hn(window.Shopify.theme.sections) && "object" === hn(window.Shopify.theme.sections.registered) && "object" === hn(window.Shopify.theme.sections.registered.cart) && document.querySelector(".cart__drawer .drawer__body")) return document.dispatchEvent(new Event("theme:cart:reload")), f("Update drawer Pipeline theme:cart:reload"), !1;
                    if ("function" == typeof window.$ && window.theme && "function" == typeof window.theme.cartUpdatePopup && "function" == typeof window.theme.cartUpdatePopupModel && document.querySelector("#CartDrawer")) return document.body.dispatchEvent(new Event("completeChangeItem.ajaxCart")), f("Update drawer completeChangeItem.ajaxCart"), !1;
                    if (window.wetheme && "object" === hn(window.wetheme.cartDrawer) && "function" == typeof window.wetheme.cartDrawer.updateCartDrawer && document.querySelector("#cartSlideoutWrapper")) return window.wetheme.cartDrawer.updateCartDrawer(t), f("Update drawer updateCartDrawer"), !1;
                    if (window.iopCart && "object" === hn(window.iopCart.api) && "function" == typeof window.iopCart.api.refreshCart && document.querySelector("#iop-cart-root")) return window.iopCart.api.refreshCart(), f("Update drawer iopCart"), !1;
                    if (window.theme && "object" === hn(window.theme.AjaxCart) && "function" == typeof window.theme.AjaxCart.fetch && document.querySelector("#AjaxCartDrawer")) return window.theme.AjaxCart.fetch(), f("Update drawer theme.AjaxCart.fetch"), !1;
                    if (window.theme && "function" == typeof window.theme.Cart && document.querySelector(".side-cart-popup [data-quantity-input]:not([readonly])")) return t && t.items.length ? (document.querySelector(".side-cart-popup [data-quantity-input]:not([readonly])").dispatchEvent(new Event("change", {
                        bubbles: !0
                    })), f("Update drawer side-cart-popup change event"), !1) : (f("Update drawer side-cart-popup change event - no items, force refresh!"), refreshThePage(t, e));
                    if (window.theme && window.theme.dropdown && "function" == typeof window.theme.ajax_cart_dropdown && document.querySelector("#cart-dropdown")) return window.theme.ajax_cart_dropdown(), f("Update drawer ajax_cart_dropdown"), !1;
                    if ("function" == typeof CartItems && document.querySelector("#drawer-cart")) return document.dispatchEvent(new Event("ajaxProduct:added")), f("Update drawer ajaxProduct:added"), _("#drawer-cart .cart-item__details .cart-item__error {display: none;}"), !1;
                    if ("function" == typeof(null === (d = window.PXUTheme) || void 0 === d || null === (u = d.jsAjaxCart) || void 0 === u ? void 0 : u.updateView) && document.querySelector("#theme-ajax-cart")) return setTimeout((function() {
                        return window.PXUTheme.jsAjaxCart.updateView()
                    }), 250), f("Update drawer PXUTheme.jsAjaxCart.updateView"), !1;
                    if ("function" == typeof(null === (l = window.ctzn_global) || void 0 === l ? void 0 : l.refreshCart) && document.querySelector("#cart-content")) return window.ctzn_global.refreshCart(), f("Update drawer ctzn_global.refreshCart"), !1;
                    if ("object" === ("undefined" == typeof store ? "undefined" : hn(store)) && "function" == typeof(null === (p = store) || void 0 === p ? void 0 : p.getCart) && document.querySelector("#drawer-items")) return store.getCart(), f("Update drawer store.getCart"), !1;
                    if (null !== (s = window.Avatar) && void 0 !== s && null !== (m = s.theme) && void 0 !== m && null !== (g = m.sections) && void 0 !== g && null !== (h = g.SliderCart) && void 0 !== h && null !== (y = h.instance) && void 0 !== y && y.refreshCartSlider && document.querySelector('[data-section-type="slider-cart"]')) return null === (k = window.Avatar) || void 0 === k || null === (T = k.theme) || void 0 === T || null === (x = T.sections) || void 0 === x || null === (j = x.SliderCart) || void 0 === j || null === (D = j.instance) || void 0 === D || D.refreshCartSlider(), f("Update drawer Avatar.theme"), !1;
                    var H = "function" == typeof CartItems ? document.querySelector("mini-cart") : null;
                    if (H) return t && t.item_count ? (H.onChange({
                        target: {
                            dataset: {
                                index: 1
                            },
                            value: t.items[0].quantity
                        }
                    }), _("#MiniCart-Line-item-error-1 {display: none;}"), f("Update drawer athensThemeMiniCart"), !1) : (f("Update drawer athensThemeMiniCart - empty cart = refresh"), refreshThePage(t, e));
                    var B = document.querySelector("sidebar-drawer#site-cart .cart-item input.qty:not([readonly])");
                    if (B) return t && t.item_count ? (B.dispatchEvent(new Event("input", {
                        bubbles: !0
                    })), f("Update drawer sidebar-drawer#site-cart .cart-item .qty"), !1) : (f("Update drawer sidebar-drawer#site-cart .cart-item .qty - empty cart = refresh"), refreshThePage(t, e));
                    var F = [".cart-drawer[data-cart-drawer] input.quantity:not([readonly])", "#dropdown-cart input.item-quantity:not([readonly])", ".halo-sidebar .previewCart input.quantity:not([readonly])", "form.mini-cart .mini-cart__content input.quantity-selector__value:not([readonly])", '#cart-modal-form-body .cart-modal-qty[type="text"]:not([readonly])', ".drawer .cart-drawer__content-container .cart__popup-qty--input:not([readonly])", ".side-cart-item input.quantity__input:not([readonly])", ".top-bar .cart-container .mini-cart__item input[data-cart-quantity-input]:not([readonly])", "#t4s-mini_cart .t4s-mini_cart__item input[data-action-change]:not([readonly])"],
                        W = document.querySelector(F.join(","));
                    if (t && W) return t.item_count ? (setTimeout((function() {
                        var r = document.querySelector(F.join(","));
                        if (!r) return f("Update drawer failed due to missing element after timeout. Force refresh!"), n.refreshThePage(t, e);
                        var i = r.getAttribute("docapp-data-protected"),
                            o = null;
                        if (t.items.forEach((function(t, e) {
                                o || i && i.includes(t.variant_id) && (o = e + 1)
                            })), o) {
                            var a = r.getAttribute("data-line");
                            U(a) && a < 1e3 && r.setAttribute("data-line", o);
                            var c = r.getAttribute("data-line-id");
                            U(c) && c < 1e3 && r.setAttribute("data-line-id", o);
                            var d = r.getAttribute("data-product_id");
                            U(d) && d < 1e3 && r.setAttribute("data-product_id", o);
                            var u = r.closest("[data-line-item-id]");
                            if (u) {
                                var l = u.getAttribute("data-line-item-id");
                                U(l) && l < 1e3 && u.setAttribute("data-line-item-id", o)
                            }
                            var p = r.closest("[data-line]");
                            if (p) {
                                var s = p.getAttribute("data-line");
                                U(s) && s < 1e3 && p.setAttribute("data-line", o)
                            }
                            var m = r.closest("[data-cart-item][data-line-id]");
                            if (m) {
                                var _ = m.getAttribute("data-line-id");
                                U(_) && _ < 1e3 && m.setAttribute("data-line-id", o)
                            }
                        }
                        r.dispatchEvent(new Event("change", {
                            bubbles: !0
                        }))
                    }), 150), f("Update drawer cartModalQtyNonGiftChangeSelectors match pending..."), !1) : (f("Update drawer cartModalQtyNonGiftChangeSelectors - empty cart = refresh"), refreshThePage(t, e));
                    if (window.freeGiftCartUpsellProAppDisableRefreshExceptOnCart) return f("Refresh disabled except on cart page. END"), !1;
                    if (document.querySelector([".go-cart__drawer", ".ajax-cart__drawer.js-ajax-cart-drawer", "mini-cart.cart-drawer .mini-cart", ".halo-sidebar .previewCart", '.nt_mini_cart .mini_cart_items input[name="updates[]"]', ".widget_shopping_cart .mini_cart_item input.custom-qty", '.mini-products-list .item .qty-group input[name="updates[]"]', "#monster-upsell-cart", ".cart-flyout__inner .quick-cart__items .quick-cart__quantity", ".quick-cart__cart .quick-cart__item .quick-cart__qty", ".quick-cart__cart .quick-cart__item .quick-cart__button", "#shopify-section-quick-cart .quick-cart__items .quantity-input__input", ".flyout__content .cart-drawer", '#right-drawer-slot [x-data="ThemeModule_CartItems"] input[\\@change]', '[data-cart-row][data-cart-item-key] input[name="updates[]"][\\@change]', '#modals-rightDrawer [x-data="ThemeModule_CartItems"]', ".cart-mini[data-cart-mini] .cart-mini-sidebar"].join(","))) return f("Update drawer force refresh due to unsupported element"), refreshThePage(t, e);
                    if (t && window.Shopify && "function" == typeof window.Shopify.onCartUpdate && !window.Shopify.onCartUpdate.toString().includes("{alert(")) return window.Shopify.onCartUpdate(t), f("Update drawer Shopify onCartUpdate"), !1;
                    if (document.querySelector(["#cart-summary-overlay", ".cart-summary-overlay .cart-summary-overlay__actions a.to-cart", ".atc-banner--container[data-atc-banner]"].join(",")) || window.freeGiftCartUpsellProAppDisableRefreshExceptOnCart) return f("Update drawer not required due to found element/variable."), !1;
                    var V = document.querySelector(".site-header__cart #CartCount");
                    if (V) return t && (V.innerHTML = t.item_count), f("Update drawer not required on Simple."), !1;
                    var K = document.querySelectorAll("cart-notification #cart-notification #cart-notification-button");
                    if (K.length) return t && (K.forEach((function(e) {
                        return e.innerHTML = e.innerHTML.replace(/\d+/, t.item_count)
                    })), document.querySelectorAll(".cart-count-bubble span[aria-hidden]").forEach((function(e) {
                        return e.innerHTML = t.item_count
                    }))), f("Update drawer not required on Dawn."), !1

                    if(typeof window.RefreshCart === "function") return window.RefreshCart(), f("Update drawer RefreshCart"), !1;

                    if(document.querySelector("cart-drawer, #CartDrawer")){
                        // Future Ref ->>>>>>   use window.BOOMR.themeName to get actual theme name rather using Shopify.theme.name
                        return gfg.gfgFreeGift.f.updateSidecartSection("cart-drawer", "#CartDrawer", false), f("Update drawer"), !1;
                    }
                } catch (t) {
                    f("Update drawer - ERROR!!!"), gfg.utility.debugConsole("Attempted to update drawer cart, Error: ", t)
                }
                return f("Update drawer - no integration found."), refreshThePage(t, e)
            };
            // Check if gfgBogoFeature is already defined (stubs should be overwritten)
          if (!gfg.gfgBogoFeature || gfg.gfgBogoFeature._isStub) {
            gfg.gfgBogoFeature = {
                state:{
                    isEnabled: false,
                    shopName: "",
                    rules: [],
                    configuration: {},
                    textConfig: {},
                    showBogoNotificationSettings: {},
                    schedulerSettings: {},
                    gfgBogoProductsShopifyDataByVariantIds: {},
                    gfgBogoProductsCustomerGetsShopifyDataByVariantIds: {},
                    gfgBogoProductsShopifyDataByHandles: {},
                    bogoProductsShopifyData: [],
                    bogoProductCustomerGetsShopifyData: [],
                    isCartUpdatedByUs: false,
                    bucketCount: 0,
                    cartData: {},
                    fallBackImageUrl: 'https://d1cjetlwgplgi5.cloudfront.net/public/freeGiftDymmyImage.png',
                    multiLangData: {},
                    activeBogoIndex: 0,
                },
                init: async function (settings, parent) {
                    try{
                        let productPageHandle = gfg.state.productPageHandle;
                        let productPageId = gfg.state.productPageId;
                        let bogoArray = gfg.settings.boGoFeature;
                        if (bogoArray.length == 0) {
                            gfg.utility.debugConsole("bogo array is empty");
                            return;
                        }

                        if(!productPageHandle){
                            productPageHandle = gfg.f.getProductPageHandle();
                            gfg.state.productPageHandle = productPageHandle;
                        }

                        if(!productPageId){
                            productPageId = gfg.f.getProductPageId();
                            gfg.state.productPageId = productPageId;
                        }

                        await gfg.gfgBogoFeature.f.gfgGetBogoFeatureoData(productPageHandle, productPageId);
                        gfg.gfgBogoFeature.f.gfgBogoChangeLanguageConfigs();
                        gfg.gfgBogoFeature.initialize(settings, parent);
                        gfg.utility.debugConsole("finally running bogo feature");
                        gfg.f.addPoweredByBlock();
                        gfg.gfgBogoFeature.f.registerEvents();
                    }catch(error){
                        gfg.utility.debugConsole("error inside bogo init", error)
                    }
                },
                initialize: async function (settings, parent) {
                    try{
                        if (parent == "PRODUCT_PAGE" ) {
                            // gfg.utility.debugConsole("page handle", gfg.state.productPageHandle)
                            let productPageHandle = gfg.state.productPageHandle
                            let activeBogoIndex = gfg.gfgBogoFeature.state.activeBogoIndex;
                            if(!productPageHandle){
                                productPageHandle = gfg.f.getProductPageHandle();
                            }
                            let ifBogoProductValid = gfg.gfgBogoFeature.f.gfgCheckIfProductValidForBogo(productPageHandle)
            
                            let checkIfBogoCampaignScheduleIsActive = gfg.gfgBogoFeature.f.checkIfBogoCampaignScheduleIsActive();
                            let isEBIntegrationEnabled = gfg.settings.boGoFeature[activeBogoIndex].isEBIntegrationEnabled;
                            const isBogoWidgetAllowedOnProductPage = gfg.settings.boGoFeature[activeBogoIndex]?.showBoGoNotificationSettings?.customerBuysProdOrCollection;
                            const areAllConditionsMet = ifBogoProductValid && checkIfBogoCampaignScheduleIsActive && !isEBIntegrationEnabled && isBogoWidgetAllowedOnProductPage !=false;
                            if(areAllConditionsMet){
                                let htmlContent = gfg.gfgBogoFeature.f.gfgBogoFeaturePrepareUI(ifBogoProductValid);
                                gfg.gfgBogoFeature.f.insertIntoPageWrapper(htmlContent, parent);
                                gfg.utility.debugConsole("render on prod page")
                            }
                        }

                    }catch(error){
                        gfg.utility.debugConsole("error inside bogo initialize", error)
                    }
                },
                f: {
                    insertIntoPageWrapper: function (gfgMsgHtml, parent) {
                        try {
                            if (parent === "PRODUCT_PAGE") {
                                const gfgBogoFeatureWrapperProductEle = gfg.utility.findWrapperElement("BOGO", "PRODUCT_PAGE", null);
                    
                                const clonedHtml = gfgMsgHtml.cloneNode(true).outerHTML; // Clone once and get the outerHTML
                    
                                gfgBogoFeatureWrapperProductEle.forEach((element) => {
                                    element.innerHTML = clonedHtml; // Set the innerHTML directly
                                });
                            } else if (parent === "CART_PAGE") {
                                // Logic for CART_PAGE can be implemented here if needed
                            }
                    
                            // gfg.f.addPoweredByBlock(); // Uncomment if this functionality needs to be retained
                        } catch (error) {
                            gfg.utility.debugConsole(error);
                        }
                    },            
                    gfgBogoChangeLanguageConfigs: function () {
                        try{
                            if(gfg.settings.languageData){
                            
                                let locale = gfg.utility.getLocale();
            
                                if(gfg.settings.languageData && gfg.settings.languageData.languageMode == "SINGLE"){
                                    return;
                                }
                    
                                if(!gfg.settings.languageData[locale]){
                                    return;
                                }
            
                                gfg.settings.boGoFeature[0].textConfig = gfg.settings.languageData[locale].bogoFeature.textConfig;
                            }
                        }catch(error){
                            gfg.utility.debugConsole("error inside gfgBogoChangeLanguageConfigs", error)
                        }
                    },
                    gfgGetBogoFeatureoData: async function(productPageHandle, productPageId){
                        try{
                            if(gfg?.gfgBogoFeature?.state?.bogoProductsShopifyData.length > 0){
                                return;
                            }
                            
                            // let cartData = await gfg.utility.getCart();
                            // get filtered cartData from cartData
                            // gfg.gfgBogoFeature.state.cartData = await gfg.gfgBogoFeature.f.getCartData()

                            //check in session storage
                            let gfgBogoProductsShopifyDataFromSessionStorage = sessionStorage.getItem("gfgBogoProductsShopifyData")
                            let gfgBogoProductsShopifyDataFromSessionStorageByHandle;
                            let gfgBogoGetProductsShopifyDataFromSessionStorageByHandle
                            let activeProductHandle = productPageHandle;
                            let activeProductId = productPageId;
                            let activeBogoIndex = gfg.gfgBogoFeature.f.getActiveBogoIndex(activeProductHandle);
                            // if(gfgBogoProductsShopifyDataFromSessionStorage && gfgBogoProductsShopifyDataFromSessionStorage.length > 0){
                            //     gfgBogoProductsShopifyDataFromSessionStorageByHandle = gfg.utility.convertArrayToObject(JSON.parse(gfgBogoProductsShopifyDataFromSessionStorage), "handle")
                            // }
                            // let counterForHandlesPickedFromSessionStorage = 0;
                            let productHandleArray = [];
                            let productGetArray = [];
                            let rules = gfg.settings.boGoFeature[activeBogoIndex].rules;
                            let bogoBuyProductsDataHandleArray = [];
                            let bogoBuyProductsShopifyData = [];
                            let bogoProductCustomerGetsShopifyDataArray = [];
                            for(let i=0; i< rules.length; i++){                      
                                // let {
                                //     bogoBuyProductsShopifyDataByHandles,
                                //     tempBogoBuyProductsShopifyData,
                                //     activeProductHandleArray
                                // } = await gfg.gfgBogoFeature.f.gfgBogoPrepareDataForCustomerBuys(rules[i], activeProductHandle);

                                // let {
                                //     currentProductGetArray,
                                //     tempBogoGetProductsShopifyData,
                                // } = await gfg.gfgBogoFeature.f.gfgBogoPrepareDataForCustomerGets(rules[i], activeProductHandleArray, i, activeBogoIndex);

                                let [customerBuysData , customerGetsData] = await Promise.all(
                                    [
                                    gfg.gfgBogoFeature.f.gfgBogoPrepareDataForCustomerBuys(rules[i], activeProductHandle) , 
                                    await gfg.gfgBogoFeature.f.gfgBogoPrepareDataForCustomerGets(rules[i], activeProductHandle , i, activeBogoIndex, activeProductId)
                                ]
                                );
                                let { bogoBuyProductsShopifyDataByHandles , tempBogoBuyProductsShopifyData , activeProductHandleArray } = customerBuysData;
                                let { currentProductGetArray , tempBogoGetProductsShopifyData } = customerGetsData;

                                productHandleArray = [...productHandleArray, ...activeProductHandleArray];
                                productGetArray = [...productGetArray, ...currentProductGetArray];
                                
                                bogoProductCustomerGetsShopifyDataArray.push(tempBogoGetProductsShopifyData);
                                bogoBuyProductsShopifyData.push(tempBogoBuyProductsShopifyData);
                                bogoBuyProductsDataHandleArray.push(bogoBuyProductsShopifyDataByHandles);
                            }
                            gfg.gfgBogoFeature.state.gfgBogoProductsShopifyDataByHandles = bogoBuyProductsDataHandleArray;
                            gfg.gfgBogoFeature.state.bogoProductsShopifyData = bogoBuyProductsShopifyData;
                            gfg.gfgBogoFeature.state.bogoProductCustomerGetsShopifyData = bogoProductCustomerGetsShopifyDataArray;

                            sessionStorage.setItem("gfgBogoProductsShopifyData", JSON.stringify(gfg.gfgBogoFeature.state.bogoProductsShopifyData))


                        }catch(error){
                            gfg.utility.debugConsole("error in function gfgGetBogoFeatureoData", error)
                        }
                    },
                    gfgBogoPrepareDataForCustomerBuys: async function(rule, activeProductHandle){
                        try{
                            const storeFrontAccessToken = gfg?.settings?.merchantInfo?.storefrontAccessToken;
                            let productPageId = gfg.state.productPageId;
                            if(!productPageId){
                                productPageId = gfg.f.getProductPageId();
                                gfg.state.productPageId = productPageId;
                            }

                            let currentProductHandleArray = [];
                            let customerBuysData = rule.customerBuysData;
                            let productArray = customerBuysData.products;
                            let collectionsArray = customerBuysData.collectionsData;
            
                            for(let j = 0; j< productArray.length; j++){
                                let handle = productArray[j].handle;
                                let productId = productArray[j].productId;
                                currentProductHandleArray.push({handle , productId});
                            }

                            for(let j = 0; j< collectionsArray.length; j++){
                                for(let k = 0; k< collectionsArray[j].productList.length; k++){
                                    let handle = collectionsArray[j].productList[k].handle;
                                    let productId = collectionsArray[j].productList[k].productId;
                                    currentProductHandleArray.push({handle , productId});
                                }
                            }

                            let isCurrentProductHandlePresent = currentProductHandleArray.some(obj => obj.handle == activeProductHandle);
                            let isCurrentProductIdPresent = currentProductHandleArray.some(obj => obj.productId == productPageId);
                            if(!isCurrentProductHandlePresent && !isCurrentProductIdPresent){
                            return;
                            }
            
                            let activeProductHandleArray = [activeProductHandle]
                            const activeProductIdsArray = [productPageId]

                            let tempBogoBuyProductsShopifyData = [];
                            if(storeFrontAccessToken){
                                const activeProductGids =  activeProductIdsArray.map((productId)=>`gid://shopify/Product/${productId}`);
                                const productsData = await gfg.customDiscountStorefrontApis.getProductsDataByIdWithAjaxResponse(activeProductGids);
                                tempBogoBuyProductsShopifyData = productsData;
                            }
                            else{

                                const promises = activeProductHandleArray.map(async (activeProductHandle) => {
                                    // check if freeGiftsShopifyDataFromSessionStorageByHandle[handle] is there or not
                                    // if(gfgBogoProductsShopifyDataFromSessionStorageByHandle && gfgBogoProductsShopifyDataFromSessionStorageByHandle[activeProductHandle]){
                                    //     // counterForHandlesPickedFromSessionStorage++;
                                    //     return gfgBogoProductsShopifyDataFromSessionStorageByHandle[activeProductHandle]
                                    // }else{
                                        const productData = gfg.utility.getProductDataV2(activeProductHandle)
                                        return productData;
                                    // }
                                });
                
                                tempBogoBuyProductsShopifyData = await Promise.all(promises);
                            }
            
            
                            // to remove out of stock products -> filter out false values
                            tempBogoBuyProductsShopifyData = tempBogoBuyProductsShopifyData.filter(value => value !== false);
            
                            // filter out for the variants that are present in rules
                            let bogoShopifyData = gfg.gfgBogoFeature.f.gfgBogoFilterForActiveVariants(tempBogoBuyProductsShopifyData, rule.customerBuysData.products);
                            tempBogoBuyProductsShopifyData = bogoShopifyData;
            
                            let bogoProductsShopifyData = JSON.parse(JSON.stringify(tempBogoBuyProductsShopifyData))
            
                            // convert array to an object with the key as handle-name
                            let bogoBuyProductsShopifyDataByHandles = gfg.utility.convertArrayToObject(bogoProductsShopifyData, "handle");
            
                            // convert to an object with key as variant id
                            let currentCustomerBuysVariantIdMap = gfg.utility.createMapForVariantId(bogoBuyProductsShopifyDataByHandles)
                            let customerBuysVariantIdMap = gfg.gfgBogoFeature.state.gfgBogoProductsShopifyDataByVariantIds;
                            gfg.gfgBogoFeature.state.gfgBogoProductsShopifyDataByVariantIds = gfg.utility.combineObjects(currentCustomerBuysVariantIdMap, customerBuysVariantIdMap);
            
                            return {
                                bogoBuyProductsShopifyDataByHandles,
                                tempBogoBuyProductsShopifyData,
                                activeProductHandleArray
                            }
                        }catch(error){
                            gfg.utility.debugConsole("error in function gfgBogoPrepareDataForCustomerBuys", error)
                        }

                    },
                    gfgBogoPrepareDataForCustomerGets:async function(rule, activeProductHandle, ruleCounter, activeBogoIndex, activeProductId){

                        try{
                        const storeFrontAccessToken = gfg?.settings?.merchantInfo?.storefrontAccessToken;

                        let customerBuysData = rule.customerBuysData;
                        let activeProductHandleArray = [activeProductHandle]
                        const activeProductIdsArray = [activeProductId]
                        let productArray = customerBuysData.products;
                        let bogoRule = rule.bogoRule;
                        let productArrayGets = rule.customerGets
                        let collectionsArray = customerBuysData.collectionsData;
                        let productGetArray = [];
                        let productGetIdsArray = [];
                        let tempBogoGetProductsShopifyData = [];
                        

                        if(bogoRule == "BUY_X_GET_Y"){    
                            for(let j = 0; j< productArrayGets.length; j++){
                                let handle = rule.customerGets[j].product.handle;
                                const productId = rule.customerGets[j].product.productId;
                                productGetArray.push(handle);
                                productGetIdsArray.push(productId);

                            }
                        }else{
                            gfg.settings.boGoFeature[activeBogoIndex].rules[ruleCounter].customerGets[0].product = gfg.settings.boGoFeature[activeBogoIndex].rules[ruleCounter].customerBuysData.products;
                            productGetArray = activeProductHandleArray;
                            productGetIdsArray = activeProductIdsArray;
                        }
                        

                        if(storeFrontAccessToken){
                            const productGetGids = productGetIdsArray.map((productId)=>`gid://shopify/Product/${productId}`);
                            const productsData = await gfg.customDiscountStorefrontApis.getProductsDataByIdWithAjaxResponse(productGetGids);
                            tempBogoGetProductsShopifyData = productsData;
                        }
                        else{

                            const promisesForGetProducts = productGetArray.map(async (handle) => {
                                
                                    const productData = gfg.utility.getProductDataV2(handle)
                                    return productData;
                                // }
                            });
                
                            
                            
                            tempBogoGetProductsShopifyData = await Promise.all(promisesForGetProducts)
                        }


                        // to remove out of stock products -> filter out false values
                        tempBogoGetProductsShopifyData = tempBogoGetProductsShopifyData.filter(value => value !== false);
                        

                        // filter out the variants that are present in rules
                        let customerBogoData = gfg.gfgBogoFeature.f.gfgBogoFilterForActiveVariantsForCustomerGets(tempBogoGetProductsShopifyData, rule.customerGets[0].product, bogoRule);
                        tempBogoGetProductsShopifyData = customerBogoData;

                        
                        let bogoProductCustomerGetsShopifyData = JSON.parse(JSON.stringify(tempBogoGetProductsShopifyData))
                        // convert array to an object with the key as handle-name
                        let gfgBogoProductsCustomerGetsShopifyDataByHandles = gfg.utility.convertArrayToObject(bogoProductCustomerGetsShopifyData, "handle")

                        

                        // convert to an object with key as variant id
                        let currentCustomerGetsVariantIdMap = gfg.utility.createMapForVariantId(gfgBogoProductsCustomerGetsShopifyDataByHandles);
                        let customerGetsVariantIdMap =  gfg.gfgBogoFeature.state.gfgBogoProductsCustomerGetsShopifyDataByVariantIds;
                        gfg.gfgBogoFeature.state.gfgBogoProductsCustomerGetsShopifyDataByVariantIds = gfg.utility.combineObjects(currentCustomerGetsVariantIdMap, customerGetsVariantIdMap);

                        return {
                            currentProductGetArray: productGetArray,
                            tempBogoGetProductsShopifyData
                        }
                        }catch(error){
                            gfg.utility.debugConsole("error in function gfgBogoPrepareDataForCustomerGets", error)
                        }
                    },
                    gfgBogoFilterForActiveVariants: function(shopifyData, rulesData){
                        //only filtering products not collections, since collection products have all variants
                        try{
                            const bogoProductsShopifyData = shopifyData;
                            const customerBuysData = rulesData;

                            let filteredProducts = [];
                            // Create a Set of variant IDs from customerBuysData for efficient lookup
                            for(let i = 0; i < bogoProductsShopifyData.length; i++) {
                                let product = bogoProductsShopifyData[i];

                                // select variantType for finding if product originally has multiple variants or not
                                if(product.variants.length > 1){
                                    product.variantType = "MULTIPLE";
                                }else{
                                    product.variantType = "SINGLE";
                                }
                                let equivalentProduct = customerBuysData.find(p => p.productId == product.id);
                                if(equivalentProduct){
                                    for(let j = 0; j < product.variants.length; j++) {
                                        let variant = product.variants[j];
                                        let variantId = variant.id;
                                        // check if given variant with variant id exists in equivalentProduct
                                        let equivalentVariant = equivalentProduct.variants.find(v => v.variantId == variantId);
                                        if(!equivalentVariant) {
                                            product.variants.splice(j, 1);
                                            j--;
                                        }
                                    }
                                }
                                
                                filteredProducts.push(product);
                            }
                            return filteredProducts;
                        }catch(error){
                            gfg.utility.debugConsole("error in function gfgBogoFilterForActiveVariants", error);
                        }

                    },
                    gfgBogoFilterForActiveVariantsForCustomerGets: function(shopifyData, rulesData, bogoRule){
                        try{
                            if(bogoRule == "BUY_X_GET_Y"){

                                const bogoProductsShopifyData = shopifyData;
                                const productData = rulesData;

                                let filteredProducts = [];
                                for(let i=0; i< bogoProductsShopifyData.length; i++){
                                    let product = bogoProductsShopifyData[i];

                                    // select variantType for finding if product originally has multiple variants or not
                                    if(product.variants.length > 1){
                                        product.variantType = "MULTIPLE";
                                    }else{
                                        product.variantType = "SINGLE";
                                    }

                                    for(let j=0; j< product.variants.length; j++){
                                        let variant = product.variants[j];
                                        let equivalentVariant = productData.variants.find(v => v.variantId == variant.id);
                                        if(!equivalentVariant){
                                            product.variants.splice(j, 1);
                                            j--;
                                        }
                                    }
                                    
                                    filteredProducts.push(product);
                                }


                                return filteredProducts
                            }else{
                                return gfg.gfgBogoFeature.f.gfgBogoFilterForActiveVariants(shopifyData, rulesData)
                            }

                        }catch(error){
                            gfg.utility.debugConsole("error in function gfgBogoFilterForActiveVariantsForCustomerGets", error);
                        }
                    },
                    gfgCheckIfProductValidForBogo:function(productPageHandle){
                        
                        // check if productPageHandle is present gfgBogoProductsShopifyDataByHandles
                        // if present then return true
                        try{
                            let activeBogoIndex = gfg.gfgBogoFeature.state.activeBogoIndex;
                            let isHandlePresent = false
                            let gfgBogoProductsShopifyDataByHandles = gfg.gfgBogoFeature.state.gfgBogoProductsShopifyDataByHandles;
                            let rules = gfg.settings.boGoFeature[activeBogoIndex].rules;
                            for(let i=0; i< gfgBogoProductsShopifyDataByHandles.length; i++){
                                let activeRule = rules[i];
                                let bogoProductsOfRule = gfgBogoProductsShopifyDataByHandles[i];
                                isHandlePresent = Object.keys(bogoProductsOfRule).includes(productPageHandle);
            
                                if (isHandlePresent) {
                                    gfg.utility.debugConsole(`The handle '${productPageHandle}' is present.`);
                                    let product = bogoProductsOfRule[productPageHandle];
                                    product.rule = activeRule;
                                    product.ruleIndex = i;
                                    return product;
                                } else {
                                    gfg.utility.debugConsole(`The handle '${productPageHandle}' is not present.`);
                                }
                            }
            
                            return isHandlePresent;
                        }catch(error){
                            gfg.utility.debugConsole("error in gfgCheckIfProductValidForBogo", error)
                        }
                    },
                    checkIfBogoProductPresentOfGivenRule: function(items, bogoProducts){
                        // search in items, for item with properties _bogo_product: true
                        
                        try{

                            let matchingItems = [];
                            const bogoProductsInCartOnly =  items.filter(item => item.properties && item.properties._bogo_product == "true");
                            gfg.utility.debugConsole("bogoProductsInCartOnly", bogoProductsInCartOnly);

                            bogoProductsInCartOnly.forEach(item => {
                                bogoProducts.forEach(cond => {
                                cond.variants.forEach(variant => {
                                    if (variant.variantId == item.variant_id && item.quantity >= cond.quantity) {
                                    matchingItems.push({ item, quantity: item.quantity, availedCount: parseInt(item.quantity / cond.quantity) });
                                    }
                                });
                                });
                            });
                            
                            return matchingItems;

                            
                        }catch(error){
                            gfg.utility.debugConsole("error in checkIfBogoProductPresentOfGivenRule", error)
                        }

                    },
                    getActiveBogoIndex: function(activeProductHandle){
                        try {

                            let bogoArray = gfg.settings.boGoFeature;
                            let productPageId = gfg.state.productPageId;
                            if(!productPageId){
                                productPageId = gfg.f.getProductPageId();
                                gfg.state.productPageId = productPageId;
                            }

                            for(let i=0; i<bogoArray.length; i++){
                                
                                let rules = bogoArray[i].rules;
                                let currentProductHandleArray = [];

                                for(let j=0; j<rules.length; j++){
                                    let rule = rules[j];
                                    let customerBuysData = rule.customerBuysData;
                                    let productArray = customerBuysData.products;
                                    let collectionsArray = customerBuysData.collectionsData;

                                    for(let j = 0; j< productArray.length; j++){
                                        let handle = productArray[j].handle;
                                        let productId = productArray[j].productId;
                                        currentProductHandleArray.push({handle , productId});
                                    }
                                
                                    for(let j = 0; j< collectionsArray.length; j++){
                                        for(let k = 0; k< collectionsArray[j].productList.length; k++){
                                            let handle = collectionsArray[j].productList[k].handle;
                                            let productId = collectionsArray[j].productList[k].productId;
                                            currentProductHandleArray.push({handle , productId});
                                        }
                                    }

                                    let isCurrentProductHandlePresent = currentProductHandleArray.some(obj => obj.handle == activeProductHandle);
                                    let isCurrentProductIdPresent = currentProductHandleArray.some(obj => obj.productId == productPageId);

                                    if(isCurrentProductHandlePresent || isCurrentProductIdPresent){
                                        gfg.gfgBogoFeature.state.activeBogoIndex = i;
                                        return i;
                                    }
                                }
                            }

                            return -1;
                            
                        } catch (err) {
                            gfg.utility.debugConsole("err inside getActiveBogo:", err);
                        }
                    },
                    gfgAddBogoProductToCart: async function(productObject){
                        try{

                            let items = [];
                        let currentCartItems = gfg.state.gfgFreeGiftCartData.items;
                        //just check that the freeGiftInCart is in stock or notl
                        let isCurrentVariantInStock = gfg.gfgBogoFeature.state.gfgBogoProductsCustomerGetsShopifyDataByVariantIds && gfg.gfgBogoFeature.state.gfgBogoProductsCustomerGetsShopifyDataByVariantIds[productObject.product.variant_id]?.available || false;
                        if (!isCurrentVariantInStock) {
                            return false
                        }

                        let BogoProductInCart = currentCartItems.filter((product) => {
                            // do it based on variant Id
                            return product.variant_id == productObject.product.variantId
                        })

                        if (BogoProductInCart.length > 0) {
                            for (let i = 0; i < BogoProductInCart.length; i++) {
                                let BogoProductInCartLineItemKey = BogoProductInCart[i].key;
                                let currentQuantity = BogoProductInCart[i].quantity;
                                let items = {
                                    id: BogoProductInCartLineItemKey,
                                };
                                // use changeCart 
                                let bogoProductData = await gfg.utility.changeCart(items);
                                //add the same product again but with quantity 1
                                // and no properties
                                items = []
                                items.push({
                                    id: productObject.product.variantId,
                                    quantity: currentQuantity
                                })
                                bogoProductData = await gfg.utility.addToCartV2({
                                    items: items
                                })


                                if (bogoProductData) {
                                    gfg.gfgBogoFeature.state.isCartUpdatedByUs = true;
                                } else {
                                    return false; // If any update fails, return false
                                }
                            }
                            return true; // If all updates succeed, return true
                        } else {
                            items.push({
                                id: productObject.product.variant_id,
                                quantity: productObject.quantity || 1,
                            })
                            let bogoProductData = await gfg.utility.addToCartV2({
                                items: items
                            })
                            if (bogoProductData) {
                                gfg.gfgBogoFeature.state.isCartUpdatedByUs = true
                                return true
                            }
                            return false
                        }

                        }catch(error){
                            gfg.utility.debugConsole("gfgAddBogoProductToCart", error)
                            return false;
                        }

                    },
                    gfgBogoFeaturePrepareUI: function (productObject) {
                        try {
                            const activeBogoIndex = gfg.gfgBogoFeature.state.activeBogoIndex;
                            const configs = gfg.settings.boGoFeature[activeBogoIndex].configuration;
                    
                            const gfgBogoContainer = document.createElement("div");
                            gfgBogoContainer.classList.add("gfgBogoContainer");
                    
                            gfgBogoContainer.style.borderColor = configs.borderColor || "#CDCDCD";
                            gfgBogoContainer.style.color = configs.fontColor || "#000000";
                            gfgBogoContainer.style.backgroundColor = configs.bgColor || "#FFFFFF";
                    
                            const gfgBogoTitleContainer = gfg.gfgBogoFeature.f.gfgBogoFeaturePrepareUITitle();
                            const gfgStackedUI = gfg.gfgBogoFeature.f.gfgBogoFeaturePrepareStackedUI(productObject);
                            const notificationMessage = gfg.gfgBogoFeature.f.gfgBogoPrepareNotificationUI();
                    
                            gfgBogoContainer.appendChild(gfgBogoTitleContainer);
                            gfgBogoContainer.appendChild(gfgStackedUI);
                            gfgBogoContainer.appendChild(notificationMessage);
                    
                            return gfgBogoContainer;
                        } catch (error) {
                            gfg.utility.debugConsole("error in gfgBogoFeaturePrepareUI", error);
                        }
                    },            
                    checkIfBogoCampaignScheduleIsActive: function(){
                        try {
                            // use campaignScheduleData object of free gift and check if it is active or not
                            let activeBogoIndex = gfg.gfgBogoFeature.state.activeBogoIndex;
                            let campaignScheduleData = gfg.settings.boGoFeature[activeBogoIndex].campaignScheduleData;


                            if(!campaignScheduleData){
                                return true
                            }
                            
                            if (campaignScheduleData?.campaignSchedule != "SCHEDULED"){
                                return true
                            }

                            if(campaignScheduleData?.campaignSchedule == "SCHEDULED"){
                                let currentDateUTC = new Date().toISOString();
                                let startDateTime_UTC = campaignScheduleData.startDateTime_UTC;
                                let endDateTime_UTC = campaignScheduleData.endDateTime_UTC;
                        
                                if (currentDateUTC >= startDateTime_UTC && currentDateUTC <= endDateTime_UTC) {
                                    gfg.utility.debugConsole('Campaign is active');
                                    return true;
                                } else {
                                    gfg.utility.debugConsole('Campaign is not active');
                                    return false;
                                }
                            }

                            return true;
                            
                        } catch (err) {
                            gfg.utility.debugConsole("checkIfBogoCampaignScheduleIsActive", err)
                            return true;
                        }
                        
                    },
                    gfgBogoPrepareNotificationUI: function () {
                        try {
                            const notificationMessageContainer = document.createElement("div");
                            notificationMessageContainer.classList.add("gfgBogoNotificationMessageContainerUI");
                    
                            const notificationMessage = document.createElement("div");
                            notificationMessage.classList.add("gfgBogoNotificationMessage");
                    
                            notificationMessageContainer.appendChild(notificationMessage);
                            notificationMessageContainer.classList.add("gfgNotificationInactive");
                    
                            return notificationMessageContainer;
                        } catch (error) {
                            gfg.utility.debugConsole("error in gfgBogoPrepareNotificationUI", error);
                        }
                    },            
                    gfgBogoCreateNotificationMessage: function (message) {
                        try {
                            const notificationMessage = document.querySelector(".gfgBogoNotificationMessageContainerUI");
                            const notifTextDiv = document.querySelector(".gfgBogoNotificationMessage");
                    
                            if (notifTextDiv && notificationMessage) {
                                notifTextDiv.textContent = message;
                                notificationMessage.classList.add("gfgBogoNotificationMessageContainer");
                                notificationMessage.classList.add("gfgNotificationActive");
                                notificationMessage.classList.remove("gfgNotificationInactive");
                            }
                        } catch (error) {
                            gfg.utility.debugConsole("Error in gfgBogoCreateNotificationMessage:", error);
                        }
                    },            
                    gfgBogoFeaturePrepareUITitle: function () {
                        let activeBogoIndex = gfg.gfgBogoFeature.state.activeBogoIndex;
                        const titleConfigs = gfg.settings.boGoFeature[activeBogoIndex].textConfig?.title || "Buy More Get More";
                        const colorConfigs = gfg.settings.boGoFeature[activeBogoIndex]?.configuration?.titleBgColor || "#2C2A41";
                    
                        try {
                            const gfgBogoTitleContainer = document.createElement("div");
                            gfgBogoTitleContainer.classList.add("gfgBogoTitleContainer");
                            gfgBogoTitleContainer.style.backgroundColor = colorConfigs;
                    
                            const gfgBogoTitle = document.createElement("div");
                            gfgBogoTitle.classList.add("gfgBogoTitle");
                    
                            const gfgBogoTitleHeader = document.createElement("div");
                            gfgBogoTitleHeader.classList.add("gfgBogoTitleHeader");
                            gfgBogoTitleHeader.innerHTML = titleConfigs;
                    
                            gfgBogoTitle.appendChild(gfgBogoTitleHeader);
                            gfgBogoTitleContainer.appendChild(gfgBogoTitle);
                    
                            return gfgBogoTitleContainer;
                        } catch (error) {
                            gfg.utility.debugConsole("error in gfgBogoFeaturePrepareUITitle", error);
                        }
                    },            
                    gfgBogoFeaturePrepareStackedUI: function (productObject) {
                        try {
                            const rule = productObject?.rule;
                            const activeBogoIndex = gfg.gfgBogoFeature.state.activeBogoIndex;
                            const textConfigs = gfg.settings.boGoFeature[activeBogoIndex].textConfig;
                            const colorConfigs = gfg.settings.boGoFeature[activeBogoIndex].configuration?.claimBtnBgColor || "#2C2A41";
                            const availText = textConfigs?.claimButtonText || "Click To Avail";
                    
                            const gfgBogoFeatureStackContainer = document.createElement("div");
                            gfgBogoFeatureStackContainer.classList.add("gfgBogoFeatureStackContainer");
                    
                            const gfgBogoCustomerBuysContainer = gfg.gfgBogoFeature.f.gfgBogoFeaturePrepareUIBuyProductSection(productObject);
                            const gfgBogoCustomerGetsContainer = gfg.gfgBogoFeature.f.gfgBogoFeaturePrepareUICustomerGetsSection(productObject);
                    
                            const gfgButtonActionsContainer = document.createElement("div");
                            gfgButtonActionsContainer.classList.add("gfgButtonActionsContainer");
                    
                            const gfgBogoActionButton = document.createElement("div");
                            gfgBogoActionButton.classList.add("gfgBogoActionButton", "validActionButton");
                            gfgBogoActionButton.textContent = availText;
                            gfgBogoActionButton.style.backgroundColor = colorConfigs;
                    
                            const additionalNote = document.createElement("div");
                            additionalNote.classList.add("gfgBogoAdditionalNote");
                            const additionalNoteText = "Note: You can avail discount on the same variant as the one that you buy.";
                            additionalNote.textContent = additionalNoteText;
                    
                            gfgButtonActionsContainer.appendChild(gfgBogoActionButton);
                    
                            if (
                                rule?.bogoRule === "BUY_X_GET_X" &&
                                rule?.customerBuysData?.isCustomerBuyProductsVariantSelectionEnabled
                            ) {
                                gfgButtonActionsContainer.appendChild(additionalNote);
                            }
                    
                            gfgBogoFeatureStackContainer.appendChild(gfgBogoCustomerBuysContainer);
                            gfgBogoFeatureStackContainer.appendChild(gfgBogoCustomerGetsContainer);
                            gfgBogoFeatureStackContainer.appendChild(gfgButtonActionsContainer);
                    
                            return gfgBogoFeatureStackContainer;
                        } catch (error) {
                            gfg.utility.debugConsole("error in gfgBogoFeaturePrepareStackedUI", error);
                        }
                    },            
                    gfgBogoFeaturePrepareUIBuyProductSection: function (productObject) {
                        try {
                            const rule = productObject.rule;
                    
                            const gfgBogoBuyProductContainer = document.createElement("div");
                            gfgBogoBuyProductContainer.classList.add("gfgBogoFeaturePrepareUICustomerBuysSection");
                    
                            const gfgProductCard = gfg.gfgBogoFeature.f.gfgBogoFeatureBuyProductCardPrepareUI(
                                productObject,
                                rule.customerBuysData.qty
                            );
                    
                            gfgBogoBuyProductContainer.appendChild(gfgProductCard);
                    
                            return gfgBogoBuyProductContainer;
                        } catch (error) {
                            gfg.utility.debugConsole("error in gfgBogoFeaturePrepareUIBuyProductSection", error);
                        }
                    },            
                    gfgBogoFeatureCreateOperatorForCard: function (operatorText) {
                        try {
                            let operatorTextSrc = "https://d1cjetlwgplgi5.cloudfront.net/public/%2B.svg";
                    
                            let gfgBogoFeatureCreateConditionForCardContainer = document.createElement("div");
                            gfgBogoFeatureCreateConditionForCardContainer.classList.add("gfgBogoFeatureCreateOperatorForCard");
                    
                            let gfgBogoFeatureCreateLine = document.createElement("div");
                            gfgBogoFeatureCreateLine.classList.add("gfgBogoFeatureCreateLine");
                    
                            let gfgBogoFeatureCreateCapsule = document.createElement("div");
                            gfgBogoFeatureCreateCapsule.classList.add("gfgBogoFeatureCreateCapsule");
                    
                            let gfgBogoFeatureCreateCapsuleContentContainer = document.createElement("div");
                            gfgBogoFeatureCreateCapsuleContentContainer.classList.add("gfgBogoFeatureCreateCapsuleContentContainer");
                    
                            let gfgBogoFeatureCreateCapsuleContent = document.createElement("img");
                            gfgBogoFeatureCreateCapsuleContent.classList.add("gfgBogoFeatureCreateCapsuleContent");
                            gfgBogoFeatureCreateCapsuleContent.setAttribute("src", operatorTextSrc);
                    
                            gfgBogoFeatureCreateCapsuleContentContainer.appendChild(gfgBogoFeatureCreateCapsuleContent);
                            gfgBogoFeatureCreateCapsule.appendChild(gfgBogoFeatureCreateCapsuleContentContainer);
                            gfgBogoFeatureCreateLine.appendChild(gfgBogoFeatureCreateCapsule);
                            gfgBogoFeatureCreateConditionForCardContainer.appendChild(gfgBogoFeatureCreateLine);
                    
                            return gfgBogoFeatureCreateConditionForCardContainer;
                        } catch (error) {
                            gfg.utility.debugConsole("error in gfgBogoFeatureCreateOperatorForCard", error);
                        }
                    },            
                    gfgBogoFeatureBuyProductCardPrepareUI: function (productData, quantity) {
                        try {
                            const activeBogoIndex = gfg.gfgBogoFeature.state.activeBogoIndex;
                            const pillText = gfg.settings?.boGoFeature[activeBogoIndex]?.textConfig?.pillText || quantity;
                            const textConfig = gfg.settings.boGoFeature[activeBogoIndex].textConfig;
                    
                            const imagePath = productData.images.length === 0 
                                ? 'https://d1cjetlwgplgi5.cloudfront.net/public/freeGiftDymmyImage.png' 
                                : productData.images[0];
                    
                            const gfgBuyProductCardContainer = document.createElement("div");
                            gfgBuyProductCardContainer.classList.add("gfgBuyProductCardContainer");
                    
                            const gfgProductImageContainer = document.createElement("div");
                            gfgProductImageContainer.classList.add("gfgProductImageContainer");
                    
                            const gfgProductImage = document.createElement("img");
                            gfgProductImage.classList.add("gfgProductImage");
                            gfgProductImage.setAttribute("src", imagePath);
                            gfgProductImageContainer.appendChild(gfgProductImage);
                    
                            const gfgBuyProductDetailSectionContainer = document.createElement("div");
                            gfgBuyProductDetailSectionContainer.classList.add("gfgBuyProductDetailSectionContainer");
                    
                            const gfgBuyProductHeader = document.createElement("div");
                            gfgBuyProductHeader.classList.add("gfgBuyProductHeader");
                            gfgBuyProductHeader.textContent = productData.title;
                    
                            const gfgBuyProductVariantContainer = document.createElement("div");
                            gfgBuyProductVariantContainer.classList.add("gfgBuyProductVariantContainer");
                    
                            const gfgBuyProductVariantHeader = document.createElement("div");
                            gfgBuyProductVariantHeader.classList.add("gfgBuyProductVariantHeader");
                    
                            const gfgBuyProductVariantSelect = document.createElement("select");
                            gfgBuyProductVariantSelect.classList.add("gfgBuyProductVariantSelect");
                    
                            productData.variants.forEach((variant) => {
                                if (variant.available === true) {
                                    const price = variant.price / 100;
                                    const gfgBuyProductVariantOption = document.createElement("option");
                                    gfgBuyProductVariantOption.classList.add("gfgBuyProductVariantOption");
                                    gfgBuyProductVariantOption.textContent = variant?.public_title || variant?.title;
                                    gfgBuyProductVariantOption.setAttribute("value", price);
                                    gfgBuyProductVariantOption.setAttribute("data-variant-id", variant.variant_id);
                                    gfgBuyProductVariantOption.setAttribute("data-count", quantity);
                                    gfgBuyProductVariantSelect.appendChild(gfgBuyProductVariantOption);
                                }
                            });
                    
                            if (productData.variantType === "SINGLE") {
                                gfgBuyProductVariantContainer.classList.add("gfgVariantContainerHidden");
                            }
                    
                            gfgBuyProductVariantHeader.appendChild(gfgBuyProductVariantSelect);
                            gfgBuyProductVariantContainer.appendChild(gfgBuyProductVariantHeader);
                            gfgBuyProductDetailSectionContainer.append(gfgBuyProductHeader, gfgBuyProductVariantContainer);
                    
                            const gfgBuyProductPriceContainer = document.createElement("div");
                            gfgBuyProductPriceContainer.classList.add("gfgBuyProductPriceContainer");
                    
                            const gfgBuyProductPriceContainerBox = document.createElement("div");
                            gfgBuyProductPriceContainerBox.classList.add("gfgBuyProductPriceContainerBox");
                    
                            const currencySymbol = gfg.utility.getCurrencySymbol();
                            let price = productData.variants[0].price / 100;
                            let productPrice = `${currencySymbol}${price.toFixed(2)}`;
                    
                            if (gfg.state?.formatPriceViaCustomScript) {
                                const formattedPrice = gfg.utility.formatPriceWithSeparator(price * 100);
                                productPrice = `${currencySymbol}${formattedPrice}`;
                            }
                    
                            const gfgBuyProductPriceContainerBoxDiscountedPrice = document.createElement("div");
                            gfgBuyProductPriceContainerBoxDiscountedPrice.classList.add("gfgBuyProductPriceContainerBoxDiscountedPrice");
                            gfgBuyProductPriceContainerBoxDiscountedPrice.textContent = productPrice;
                    
                            gfgBuyProductPriceContainerBox.appendChild(gfgBuyProductPriceContainerBoxDiscountedPrice);
                            gfgBuyProductPriceContainer.appendChild(gfgBuyProductPriceContainerBox);
                    
                            const gfgBuyProductQuantityCapsule = gfg.gfgBogoFeature.f.gfgRenderBuyProductTextPill(pillText);
                            gfgBuyProductPriceContainer.appendChild(gfgBuyProductQuantityCapsule);
                    
                            gfgBuyProductDetailSectionContainer.appendChild(gfgBuyProductPriceContainer);
                    
                            const gfgBuyProductAddToCartButtonContainer = document.createElement("div");
                            gfgBuyProductAddToCartButtonContainer.classList.add("gfgBuyProductAddToCartButtonContainer");
                    
                            const gfgBuyProductAddToCartButton = document.createElement("div");
                            gfgBuyProductAddToCartButton.classList.add("gfgBuyProductAddToCartButton");
                            gfgBuyProductAddToCartButton.textContent = textConfig.addText;
                    
                            gfgBuyProductAddToCartButtonContainer.appendChild(gfgBuyProductAddToCartButton);
                    
                            gfgBuyProductCardContainer.appendChild(gfgProductImageContainer);
                            gfgBuyProductCardContainer.appendChild(gfgBuyProductDetailSectionContainer);
                    
                            return gfgBuyProductCardContainer;
                        } catch (error) {
                            gfg.utility.debugConsole("error in gfgBogoFeatureBuyProductCardPrepareUI", error);
                        }
                    },            
                    gfgRenderBuyProductTextPill: function (quantity) {
                        try {
                            const gfgBuyProductTextPillContainer = document.createElement("div");
                            gfgBuyProductTextPillContainer.classList.add("gfgBuyProductTextPillContainer");
                    
                            const gfgBuyProductTextPillText = document.createElement("div");
                            gfgBuyProductTextPillText.classList.add("gfgBuyProductTextPillText");
                            gfgBuyProductTextPillText.textContent = `Qty ${quantity} `;
                    
                            gfgBuyProductTextPillContainer.appendChild(gfgBuyProductTextPillText);
                    
                            return gfgBuyProductTextPillContainer;
                        } catch (error) {
                            gfg.utility.debugConsole("error in gfgRenderBuyProductTextPill", error);
                        }
                    },            
                    triggerUpdateActivities: function(){
                        try{
                            const redirectToCart = gfg.settings.app.redirectToCartAfterBogoAddition;
                            const redirectToCheckout = gfg.settings.app.redirectToCheckoutAfterBogoAddition;
                            const redirectTo = redirectToCart ? '/cart' :
                                                redirectToCheckout ? '/checkout':
                                                null;

                            // if custom script is written then it will excute that, no redirection will happen.                     
                            if (gfg.settings.app.executeCustomScriptAfterBogoAddition) {
                                eval(gfg.settings.app.executeCustomScriptAfterBogoAddition);
                            }
                            else if(redirectTo) {
                                gfg.utility.redirectToPage(redirectTo);
                            }
                        }catch(error){
                            gfg.utility.debugConsole("error in triggerUpdateActivities", error);
                        }
                    },
                    gfgBogoFeaturePrepareUICustomerGetsSection: function (productObject) {
                        try {
                            const rule = productObject.rule;
                            const customerGets = productObject.rule.customerGets;
                            const activeBogoIndex = gfg.gfgBogoFeature.state.activeBogoIndex;
                            const textConfig = gfg.settings.boGoFeature[activeBogoIndex].textConfig;
                            const operatorText = textConfig?.bogoGetOperatorText || "+";
                    
                            const gfgBogoFeaturePrepareUICustomerGetsSection = document.createElement("div");
                            gfgBogoFeaturePrepareUICustomerGetsSection.classList.add("gfgBogoFeaturePrepareUICustomerGetsSection");
                    
                            customerGets.forEach((customerGet) => {
                                const gfgRenderCustomerGetsProductCardPrepareUI = gfg.gfgBogoFeature.f.gfgRenderCustomerGetsProductCardPrepareUI(
                                    customerGet,
                                    rule.bogoRule,
                                    productObject
                                );
                    
                                const gfgBogoFeaturePrepareUICustomerGetsSectionDivider = gfg.gfgBogoFeature.f.gfgBogoFeatureCreateOperatorForCard(operatorText);
                    
                                gfgBogoFeaturePrepareUICustomerGetsSection.appendChild(gfgBogoFeaturePrepareUICustomerGetsSectionDivider);
                                gfgBogoFeaturePrepareUICustomerGetsSection.appendChild(gfgRenderCustomerGetsProductCardPrepareUI);
                            });
                    
                            return gfgBogoFeaturePrepareUICustomerGetsSection;
                        } catch (error) {
                            gfg.utility.debugConsole("error in gfgBogoFeaturePrepareUICustomerGetsSection", error);
                        }
                    },            
                    gfgRenderCustomerGetsProductCardPrepareUI: function (data, bogoRule, productObject) {
                        try {
                            let activeBogoIndex = gfg.gfgBogoFeature.state.activeBogoIndex;
                            let pillText = gfg.settings?.boGoFeature[activeBogoIndex]?.textConfig?.pillText || data.qty;
                            let productData = data.product;
                            let bogoProductCustomerGetsShopifyData = gfg.gfgBogoFeature.state.bogoProductCustomerGetsShopifyData;
                            bogoProductCustomerGetsShopifyData = bogoProductCustomerGetsShopifyData[productObject.ruleIndex];
                    
                            let product = bogoProductCustomerGetsShopifyData.find(
                                (product) => product.handle === productData.handle || product.id === productData.productId
                            );
                            if (bogoRule === "BUY_X_GET_X") {
                                product = productObject;
                            }
                            let quantity = data.qty;
                            let discountValue = parseFloat(data.discountValue);
                            let discountType = data.discountType;
                            let currencySymbol = gfg.utility.getCurrencySymbol();
                    
                            let gfgRenderCustomerGetsProductCardPrepareUI = document.createElement("div");
                            gfgRenderCustomerGetsProductCardPrepareUI.classList.add("gfgRenderCustomerGetsProductCardPrepareUI");
                    
                            let gfgProductImageContainer = document.createElement("div");
                            gfgProductImageContainer.classList.add("gfgProductImageContainer");
                    
                            let gfgProductImage = document.createElement("img");
                            gfgProductImage.classList.add("gfgProductImage");
                            gfgProductImage.setAttribute("src", product.images[0] || "");
                            gfgProductImageContainer.appendChild(gfgProductImage);
                    
                            let gfgCustomerGetsProductContent = document.createElement("div");
                            gfgCustomerGetsProductContent.classList.add("gfgCustomerGetsProductContent");
                    
                            let gfgCustomerGetsProductTitleContainer = document.createElement("div");
                            gfgCustomerGetsProductTitleContainer.classList.add("gfgCustomerGetsProductTitleContainer");
                            gfgCustomerGetsProductTitleContainer.textContent = product.title;
                            gfgCustomerGetsProductContent.appendChild(gfgCustomerGetsProductTitleContainer);
                    
                            let gfgBuyProductVariantContainer = document.createElement("div");
                            gfgBuyProductVariantContainer.classList.add("gfgCustomerGetsVariantContainer");
                    
                            let gfgBuyProductVariantHeader = document.createElement("div");
                            gfgBuyProductVariantHeader.classList.add("gfgBuyProductVariantHeader");
                    
                            let gfgBuyProductVariantSelect = document.createElement("select");
                            gfgBuyProductVariantSelect.classList.add("gfgBuyProductVariantSelectForCustomerGets");
                    
                            product.variants.forEach((variant) => {
                                if (variant.available === true) {
                                    let price = variant.price / 100;
                                    let gfgBuyProductVariantOption = document.createElement("option");
                                    gfgBuyProductVariantOption.classList.add("gfgBuyProductVariantOption");
                                    gfgBuyProductVariantOption.textContent = variant.title;
                                    gfgBuyProductVariantOption.value = price;
                                    // gfgBuyProductVariantOption.setAttribute("data-variantid", variant.variantId);
                                    gfgBuyProductVariantOption.setAttribute("data-variant-id", variant.id);
                                    gfgBuyProductVariantOption.setAttribute("data-count", quantity);
                    
                                    if (discountType === "PERCENTAGE") {
                                        let discountedPriceOfProduct = price - (price * discountValue) / 100;
                                        if (gfg.state?.formatPriceViaCustomScript) {
                                            discountedPriceOfProduct = currencySymbol + gfg.utility.formatPriceWithSeparator(discountedPriceOfProduct * 100);
                                        } else {
                                            discountedPriceOfProduct = currencySymbol + discountedPriceOfProduct.toFixed(2);
                                        }
                                        gfgBuyProductVariantOption.setAttribute("data-discounted-price", discountedPriceOfProduct);
                                    } else if (discountType === "AMOUNT") {
                                        let discountedPriceOfProduct = price - discountValue;
                                        if (gfg.state?.formatPriceViaCustomScript) {
                                            discountedPriceOfProduct = currencySymbol + gfg.utility.formatPriceWithSeparator(discountedPriceOfProduct * 100);
                                        } else {
                                            discountedPriceOfProduct = currencySymbol + discountedPriceOfProduct.toFixed(2);
                                        }
                                        gfgBuyProductVariantOption.setAttribute("data-discounted-price", discountedPriceOfProduct);
                                    }
                    
                                    gfgBuyProductVariantSelect.appendChild(gfgBuyProductVariantOption);
                                }
                            });
                    
                            if (product.variantType === "SINGLE") {
                                gfgBuyProductVariantContainer.classList.add("gfgVariantContainerHidden");
                            }
                    
                            gfgBuyProductVariantHeader.appendChild(gfgBuyProductVariantSelect);
                            gfgBuyProductVariantContainer.appendChild(gfgBuyProductVariantHeader);
                    
                            let gfgBuyProductPriceContainer = document.createElement("div");
                            gfgBuyProductPriceContainer.classList.add("gfgBuyProductPriceContainerForCustomerGets");
                    
                            let gfgBuyProductPriceContainerBox = document.createElement("div");
                            gfgBuyProductPriceContainerBox.classList.add("gfgBuyProductPriceContainerBox");
                    
                            let gfgBogoGetProductsPillText = gfg.gfgBogoFeature.f.gfgRenderBuyProductTextPill(pillText);
                    
                            let price = product.variants[0].price / 100;
                            let discountedPriceOfProduct = price;
                    
                            if (discountType === "PERCENTAGE") {
                                discountedPriceOfProduct = price - (price * discountValue) / 100;
                            } else if (discountType === "AMOUNT") {
                                discountedPriceOfProduct = price - discountValue;
                            }
                    
                            let gfgBuyProductPriceContainerBoxDiscountedPrice = document.createElement("div");
                            gfgBuyProductPriceContainerBoxDiscountedPrice.classList.add("gfgBuyProductPriceContainerBoxDiscountedPrice", "gfgBogoRedTextClass");
                            gfgBuyProductPriceContainerBoxDiscountedPrice.textContent = currencySymbol + discountedPriceOfProduct.toFixed(2);
                    
                            let gfgBuyProductPriceContainerBoxOriginalPrice = document.createElement("div");
                            gfgBuyProductPriceContainerBoxOriginalPrice.classList.add("gfgBuyProductPriceContainerBoxOriginalPrice");
                            gfgBuyProductPriceContainerBoxOriginalPrice.textContent = currencySymbol + price.toFixed(2);
                    
                            if (discountValue !== 0 && discountValue !== undefined) {
                                gfgBuyProductPriceContainerBoxOriginalPrice.classList.add("gfgBuyProductPriceContainerBoxOriginalPriceStriked");
                                gfgBuyProductPriceContainerBox.append(
                                    gfgBuyProductPriceContainerBoxDiscountedPrice,
                                    gfgBuyProductPriceContainerBoxOriginalPrice,
                                    gfgBogoGetProductsPillText
                                );
                            } else {
                                gfgBuyProductPriceContainerBox.append(gfgBuyProductPriceContainerBoxOriginalPrice);
                            }
                    
                            gfgBuyProductPriceContainer.append(gfgBuyProductVariantContainer, gfgBuyProductPriceContainerBox);
                            gfgCustomerGetsProductContent.appendChild(gfgBuyProductPriceContainer);
                    
                            gfgRenderCustomerGetsProductCardPrepareUI.append(gfgProductImageContainer, gfgCustomerGetsProductContent);
                    
                            return gfgRenderCustomerGetsProductCardPrepareUI;
                        } catch (error) {
                            gfg.utility.debugConsole("error in gfgRenderCustomerGetsProductCardPrepareUI", error);
                        }
                    },            
                    registerEvents: function(){

                        document.addEventListener('click', async function (event) {

                            if(event.target.matches('.gfgBogoActionButton')){

                                const actionButton = event.target;
                                if (!actionButton) return;
                            
                                event.preventDefault();
                                event.stopPropagation();
                                event.stopImmediatePropagation();
                            
                                const activeBogoIndex = gfg.gfgBogoFeature.state.activeBogoIndex;
                                const textConfig = gfg.settings.boGoFeature[activeBogoIndex].textConfig;
                                const buttonText = {
                                    adding: textConfig?.buttonText?.adding || "Adding...",
                                    added: textConfig?.buttonText?.added || "Added",
                                    outOfStock: textConfig?.buttonText?.outOfStock || "Out of Stock",
                                    failedNotification: textConfig?.failedMessageNotification || "Promotion not applied, please check cart"
                                };
                            
                                actionButton.textContent = buttonText.adding;
                                actionButton.classList.add('invalidActionButton');
                            
                                const container = document.querySelector('.gfgCustomerGetsProductContent');
                                const selectedVariant = container.querySelector('.gfgBuyProductVariantSelectForCustomerGets');
                                const variantId = selectedVariant.selectedOptions[0].getAttribute('data-variant-id');
                                const quantity = parseFloat(selectedVariant.selectedOptions[0].getAttribute('data-count'));
                            
                                const selectedCustomerVariant = document.querySelector('.gfgBuyProductVariantSelect');
                                const customerVariantId = selectedCustomerVariant.selectedOptions[0].getAttribute('data-variant-id');
                                const selectedProductCount = parseFloat(selectedCustomerVariant.selectedOptions[0].getAttribute('data-count'));
                            
                                const productDetails = gfg.gfgBogoFeature.state.gfgBogoProductsCustomerGetsShopifyDataByVariantIds[variantId];
                                gfg.utility.debugConsole("Product ->", productDetails);
                            
                                let bogoSuccess = true;
                            
                                try {
                                    const bogoAdded = await gfg.utility.addToCart({
                                        id: productDetails.variant_id,
                                        quantity
                                    });
                            
                                    if (!bogoAdded) bogoSuccess = false;
                            
                                    const customerAdded = await gfg.utility.addToCart({
                                        id: customerVariantId,
                                        quantity: selectedProductCount
                                    });
                            
                                    if (!customerAdded) bogoSuccess = false;
                                } catch (error) {
                                    gfg.utility.debugConsole("Error while adding to cart:", error);
                                    bogoSuccess = false;
                                }
                            
                                if (!bogoSuccess) {
                                    gfg.gfgBogoFeature.f.gfgBogoCreateNotificationMessage(buttonText.failedNotification);
                                    actionButton.textContent = buttonText.outOfStock;
                                } else {
                                    actionButton.textContent = buttonText.added;
                                }
                            
                                gfg.gfgBogoFeature.f.triggerUpdateActivities();
                            }
                        });
                        
                                        
                        document.body.addEventListener('change', function (event) {
                            if (event.target.matches('.gfgBuyProductVariantSelect')){
                                try {
                                    event.preventDefault();
                            
                                    const parent = event.target.parentElement.parentElement;
                                    const selectedVariant = event.target;
                                    const selectedPrice = parseFloat(selectedVariant.value);
                                    const variantId = selectedVariant.selectedOptions[0].getAttribute('data-variant-id');
                                    const variantIdMap = gfg.gfgBogoFeature.state.gfgBogoProductsShopifyDataByVariantIds;
                                    const productDetails = variantIdMap[variantId];
                            
                                    gfg.utility.debugConsole("productDetails ->", productDetails);
                            
                                    const gfgBuyProductPriceContainerBoxDiscountedPrice = parent.closest('.gfgBuyProductDetailSectionContainer').querySelector('.gfgBuyProductPriceContainerBoxDiscountedPrice');
                                    const userCurrency = gfg.utility.getCurrencySymbol();
                            
                                    let formattedPrice = selectedPrice;
                            
                                    if (gfg.state?.formatPriceViaCustomScript) {
                                        let _selectedPrice = selectedPrice * 100;
                                        _selectedPrice = gfg.utility.formatPriceWithSeparator(_selectedPrice);
                                        formattedPrice = _selectedPrice;
                                    }
                            
                                    gfgBuyProductPriceContainerBoxDiscountedPrice.textContent = userCurrency + formattedPrice;
                            
                                    const cardContainer = parent?.closest('.gfgBuyProductCardContainer');
                                    const imageContainer = cardContainer?.querySelector('.gfgProductImageContainer');
                                    const imageTag = imageContainer?.querySelector('.gfgProductImage');
                                    imageTag.setAttribute('src', 'https:' + gfg.utility.trimHttps(productDetails.image));
                                } catch (error) {
                                    gfg.utility.debugConsole("error in registerEvents -> onChange -> gfgBuyProductVariantSelect", error);
                                }
                            }
                        
                        });
                        
                        
                        document.body.addEventListener('change', function (event) {
                            if (event.target.matches('.gfgBuyProductVariantSelectForCustomerGets')) {
                                try {
                                    event.preventDefault();
                                    const parent = event.target.parentElement.parentElement;
                                    const cardContainer = parent?.closest('.gfgRenderCustomerGetsProductCardPrepareUI');
                        
                                    if (!parent || !cardContainer) return;
                        
                                    const selectedVariant = parent.querySelector('.gfgBuyProductVariantSelectForCustomerGets');
                                    const selectedPrice = selectedVariant?.value;
                                    const discountedPrice = selectedVariant?.selectedOptions[0]?.getAttribute('data-discounted-price');
                                    const variantId = selectedVariant?.selectedOptions[0]?.getAttribute('data-variant-id');
                        
                                    const variantIdMap = gfg.gfgBogoFeature.state.gfgBogoProductsCustomerGetsShopifyDataByVariantIds;
                                    const productDetails = variantIdMap[variantId];
                        
                                    const gfgBuyProductPriceContainerBoxDiscountedPrice = cardContainer.querySelector('.gfgBuyProductPriceContainerBoxDiscountedPrice');
                                    const gfgBuyProductPriceContainerBoxOriginalPrice = cardContainer.querySelector('.gfgBuyProductPriceContainerBoxOriginalPrice');
                                    const imageTag = cardContainer.querySelector('.gfgProductImageContainer .gfgProductImage');
                        
                                    const userCurrency = gfg.utility.getCurrencySymbol();
                        
                                    let formattedSelectedPrice = selectedPrice;
                                    if (gfg.state?.formatPriceViaCustomScript) {
                                        const _selectedPrice = selectedPrice * 100;
                                        formattedSelectedPrice = gfg.utility.formatPriceWithSeparator(_selectedPrice);
                                    }
                        
                                    if (gfgBuyProductPriceContainerBoxDiscountedPrice) {
                                        gfgBuyProductPriceContainerBoxDiscountedPrice.textContent = discountedPrice;
                                    }
                        
                                    if (gfgBuyProductPriceContainerBoxOriginalPrice) {
                                        gfgBuyProductPriceContainerBoxOriginalPrice.textContent = `${userCurrency}${formattedSelectedPrice}`;
                                    }
                        
                                    if (imageTag && productDetails?.image) {
                                        imageTag.setAttribute('src','https:' + gfg.utility.trimHttps(productDetails.image));
                                    }
                                } catch (error) {
                                    gfg.utility.debugConsole("error in onChange -> gfgBuyProductVariantSelectForCustomerGets", error);
                                }
                            }
                        });
                        
                    }

                },
                actions: {},
                };
          }
            // Check if gfgUnifiedWidget is already defined (stubs should be overwritten)
          if (!gfg.gfgUnifiedWidget || gfg.gfgUnifiedWidget._isStub) {
                gfg.gfgUnifiedWidget = {
                    state: {
                        isFirstRenderForUnifiedWidget: true,
                    },
                    init: async function(settings, parent){
                        try {
                            await this.initialize(settings, parent);
                        } catch (error) {
                            gfg.utility.debugError("Error in gfgUnifiedWidget init", error);
                        }
                    },
                    initialize: async function(settings, parent){
                        try {
                            
                            // const allUnifiedWidgets = settings.unifiedWidget;
                            let unifiedWidgetSettings = settings?.unifiedWidgets;
                            
                            if (parent == "PRODUCT_PAGE") {
                                let productPage 
                                let preparedDataObj = await  gfg.gfgUnifiedWidget.f.prepareUI(settings, parent)
                                gfg.gfgUnifiedWidget.f.insertIntoPageWrapper(preparedDataObj, parent)
                                gfg.utility.debugConsole("PRODUCT_PAGE-variantListToBeShownOnProductPage")
                            }
                
                            if (parent == "CART_PAGE") {
                                
                                let preparedDataObj = await gfg.gfgUnifiedWidget.f.prepareUI(settings, parent)
                                gfg.gfgUnifiedWidget.f.insertIntoPageWrapper(preparedDataObj, parent)
                                gfg.utility.debugConsole("CART_PAGE-gfgUnifiedWidgetCartPageHtml")
                            }
                        } catch (error) {
                            gfg.utility.debugConsole("Error in gfgUnifiedWidget initialize", error);
                            throw error;
                        }

                    },
                    f: {
                        prepareUI: async function(settings, parent) {
                            try {
                                const allUnifiedWidgets = settings?.unifiedWidgets || [];
                                let preparedUiArray = [];
                                let prepredUnifiedWidgetData = [];
                                let cartData = await gfg.utility.getCartV2();
                                

                                if(allUnifiedWidgets.length > 0) {
                                    await gfg.customDiscountValidationFunctions.updateCartAttributesWithTotalAmountWithoutFreeGift(cartData);
                                }

                            for(let i=0; i < allUnifiedWidgets?.length; i++){
                                let unifiedWidgetData = allUnifiedWidgets[i];
                                if(!unifiedWidgetData || !unifiedWidgetData?.isEnabled){
                                    return;
                                }
                                const isActiveCampaign = gfg.customDiscountValidationFunctions.checkForActiveCampaign(unifiedWidgetData);
                                if (!isActiveCampaign) {
                                    continue;
                                }
                                unifiedWidgetData.isUnifiedWidget = true;
                                const isRelevantToCurrentPage = await gfg.customDiscountValidationFunctions.checkCustomDiscountWidgetIsRelevantToCurrentPage(unifiedWidgetData, parent);
                                if (!isRelevantToCurrentPage) {
                                    continue;
                                    }
                                    await gfg.customDiscountValidationFunctions.verifyCustomDiscountRules(unifiedWidgetData, cartData);
                                let gfgDiscountPreparedUI = await gfg.gfgUnifiedWidget.f.gfgUnifiedWidgetPrepareUI(unifiedWidgetData ,cartData, parent);
                                preparedUiArray.push(gfgDiscountPreparedUI)
                                prepredUnifiedWidgetData.push(unifiedWidgetData);
                                }
                                return {preparedUiArray, prepredUnifiedWidgetData};
                                //gfg.gfgUnifiedWidget.f.insertIntoPageWrapper(preparedUiArray, parent);
                            } catch(err) {
                                gfg.utility.debugError(`Error inside gfgUnifiedWidget prepareUI fn`, err);
                            }
                        },
                        checkMultipleLanguagePresent: function (data) {
                            try {
                            let keysArr = data ? Object.keys(data) : [];
                            const keysToSkip = ["conditionMetIconUrl", "conditionNotMetIconUrl", "conditionMet" , "showOnWidget"];
                            keysArr = keysArr.filter((curr) => !keysToSkip.includes(curr));
                            return keysArr.length > 1;
                            } catch (error) {
                            gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkMultipleLanguagePresent fn`, error);
                            }
                        },
                        getNextConditionNotMetOffer: function(unifiedWidgetData) {
                            try {

                                let rulesList = unifiedWidgetData?.rulesData?.rulesGlobalList[0]?.rulesList;
                                for(let i=0; i<rulesList?.length; i++) {
                                    if(!rulesList[i]?.conditionMet) {
                                        return rulesList[i];
                                    }
                                }
                                return;
                            } catch(err) {
                                gfg.utility.debugError(`Error inside gfgUnifiedWidget getNextConditionNotMetOffer fn`, err);
                            }
                        },
                        gfgUnifiedWidgetPrepareUI: function (unifiedWidgetData, cartData, parent) {
                            try {
                                const gfgUnifiedWgtParentContainer = document.createElement("div");
                                gfgUnifiedWgtParentContainer.classList.add("gfgUnifiedWgtParentContainer");
                                gfgUnifiedWgtParentContainer.style.backgroundColor = unifiedWidgetData.styleSettings.widgetBodyBackgroundColor;
                                gfgUnifiedWgtParentContainer.style.border = `2px solid ${unifiedWidgetData.styleSettings.widgetBodyBorderColor}`;
                        
                                const gfgUnfiedWgtTopSectionContainer = document.createElement("div");
                                gfgUnfiedWgtTopSectionContainer.classList.add("gfgUnfiedWgtTopSectionContainer");
                        
                                const gfgUnifiedWgtBottomSectionContainer = document.createElement("div");
                                gfgUnifiedWgtBottomSectionContainer.classList.add("gfgUnifiedWgtBottomSectionContainer");
                                gfgUnifiedWgtBottomSectionContainer.style.backgroundColor = unifiedWidgetData.styleSettings.widgetBodyBackgroundColor;
                        
                                const currLocale = gfg.gfgUnifiedWidget.f.checkMultipleLanguagePresent(unifiedWidgetData.titleBar)
                                    ? gfg.utility.getLocale()
                                    : "en";
                        
                                const currencySymbol = gfg.utility.getCurrencySymbol();
                                const nextConditionNotMetOffer = gfg.gfgUnifiedWidget.f.getNextConditionNotMetOffer(unifiedWidgetData);
                                const nextOfferCondtionValue = nextConditionNotMetOffer?.ruleValue?.remainingSubtotalValue;
                                const nextOfferRemainingQuantity = nextConditionNotMetOffer?.ruleValue?.remainingQuantityValue;
                                const nextOfferDiscountValue = gfg.gfgUnifiedWidget.f.getDiscountValue(unifiedWidgetData, nextConditionNotMetOffer);
                        
                                let nextOfferText =
                                    nextConditionNotMetOffer?.discountSettings?.["title"]?.[currLocale] ||
                                    unifiedWidgetData.titleBar["title"]?.["en"];
                        
                                let nextConditionNotMetOfferText = nextOfferText;
                                let conditionValue = nextConditionNotMetOffer?.ruleValue?.value || 0;
                                conditionValue *= gfg.utility.getActiveCurrencyRate();
                        
                                nextConditionNotMetOfferText = nextConditionNotMetOfferText
                                    ?.replace("{{CURRENCY}}", currencySymbol)
                                    .replace("{{DISCOUNT_VALUE}}", gfg.gfgUnifiedWidget.f.getDiscountValue(unifiedWidgetData, nextConditionNotMetOffer))
                                    .replace("{{REMAINING_AMOUNT}}", nextConditionNotMetOffer?.ruleValue?.remainingSubtotalValue)
                                    .replace("{{CONDITION_VALUE}}", conditionValue);
                        
                                const isTrue = unifiedWidgetData.titleBar.conditionMet || false;
                                const areAllConditionsMet = !nextConditionNotMetOffer;
                                const titleBarHeadingTextKey = areAllConditionsMet
                                    ? "conditionMetHeadingText"
                                    : "conditionNotMetHeadingText";
                        
                                let titleBarHeading =
                                    unifiedWidgetData.titleBar?.[currLocale]?.[titleBarHeadingTextKey] ||
                                    unifiedWidgetData.titleBar["en"][titleBarHeadingTextKey];
                        
                                titleBarHeading = titleBarHeading
                                    .replace(
                                        "{{CURRENCY}}",
                                        `<span style="color:${unifiedWidgetData.styleSettings?.widgetBodyTextHighlightColor}">${currencySymbol}</span>`
                                    )
                                    .replace(
                                        "{{DISCOUNT_VALUE}}",
                                        `<span style="color:${unifiedWidgetData.styleSettings?.widgetBodyTextHighlightColor}">${nextOfferDiscountValue}</span>`
                                    )
                                    .replace(
                                        "{{REMAINING_AMOUNT}}",
                                        `<span style="color:${unifiedWidgetData.styleSettings?.widgetBodyTextHighlightColor}">${nextOfferCondtionValue}</span>`
                                    )
                                    .replace(
                                        "{{REMAINING_QUANTITY}}",
                                        `<span style="color:${unifiedWidgetData.styleSettings?.widgetBodyTextHighlightColor}">${nextOfferRemainingQuantity}</span>`
                                    )
                                    .replace(
                                        "{{NEXT_TIER_TITLE}}",
                                        `<span style="color:${unifiedWidgetData.styleSettings?.widgetBodyTextHighlightColor}">${nextConditionNotMetOfferText}</span>`
                                    );
                        
                                const titleBarUI = this.renderTitleBarUI(titleBarHeading, unifiedWidgetData.styleSettings);
                                gfgUnfiedWgtTopSectionContainer.innerHTML = "";
                                gfgUnfiedWgtTopSectionContainer.appendChild(titleBarUI);
                        
                                let layoutType = unifiedWidgetData.styleSettings.templateType || "SINGLE_RULE_LAYOUT";
                                let stepperBarGeneratedUI = null;
                        
                                if (layoutType === "SINGLE_RULE_LAYOUT") {
                                    stepperBarGeneratedUI = this.renderSingleRuleProgressBarUI(unifiedWidgetData, cartData);
                                }
                        
                                gfgUnifiedWgtBottomSectionContainer.appendChild(stepperBarGeneratedUI);
                                gfgUnifiedWgtParentContainer.appendChild(gfgUnfiedWgtTopSectionContainer);
                                gfgUnifiedWgtParentContainer.appendChild(gfgUnifiedWgtBottomSectionContainer);
                        
                                return gfgUnifiedWgtParentContainer;
                            } catch (err) {
                                gfg.utility.debugError(`Error inside gfgUnifiedWidget gfgUnifiedWidgetPrepareUI fn`, err);
                            }
                        },            
                        getDiscountTypeIconSvg: function(rule) {
                            try {
                            let offerType = rule?.discountSettings?.type;
                            switch(offerType){
                                case "DISCOUNT": {
                                    return UNIFIED_WIDGET_DISCOUNT_ICON;
                                }
                                case "FREE_GIFT": {
                                    return UNIFIED_WIDGET_FREE_GIFT_ICON;
                                }
                                case "SHIPPING_DISCOUNT": {
                                    return UNIFIED_WIDGET_SHIPPING_DISCOUNT_ICON;
                                }
                            }
                            } catch(err) {
                                gfg.utility.debugError(`Error inside gfgUnifiedWidget getDiscountTypeIconSvg fn`, err);
                            }
                        },
                        getIconImageElement: function (rule, ruleIconText) {
                            try {
                                const iconDiv = document.createElement("div");
                                iconDiv.classList.add("gfgHorizontalStepperProgressBarIcon");
                        
                                const unifiedWidgetSvgs = [
                                    "UNIFIED_WIDGET_DISCOUNT_ICON",
                                    "UNIFIED_WIDGET_FREE_GIFT_ICON",
                                    "UNIFIED_WIDGET_SHIPPING_DISCOUNT_ICON"
                                ];
                        
                                const isIconADefaultSvg = 
                                    !rule?.discountSettings?.icon || 
                                    unifiedWidgetSvgs.includes(rule?.discountSettings?.icon?.conditionMetIconUrl);
                        
                                if (isIconADefaultSvg) {

                                    const iconSvgString = this.getDiscountTypeIconSvg(rule);
                                    const tempContainer = document.createElement('div');
                                    tempContainer.innerHTML = iconSvgString.trim();
                                    iconDiv.appendChild(tempContainer.firstChild);

                                    iconDiv.setAttribute("data", ruleIconText.iconFill);
                        
                                    const paths = iconDiv.querySelectorAll("path");
                                    paths.forEach((path) => {
                                        path.style.fill = ruleIconText.iconFill;
                                    });
                                } else {
                                    const iconImg = document.createElement("img");
                                    iconImg.classList.add("gfgHorizontalStepperProgressBarIcon");
                                    iconImg.setAttribute("src", rule.discountSettings.icon.conditionMetIconUrl);
                                    iconDiv.appendChild(iconImg);
                                }
                        
                                return iconDiv;
                            } catch (err) {
                                gfg.utility.debugError(`Error inside gfgUnifiedWidget getIconImageElement fn`, err);
                            }
                        },            
                        renderSingleRuleProgressBarUI: function (discountData, cartData) {
                            try {
                                const currLocale = gfg.gfgUnifiedWidget.f.checkMultipleLanguagePresent(
                                    discountData.rulesData.rulesGlobalList[0].rulesList[0].discountSettings.title
                                )
                                    ? gfg.utility.getLocale()
                                    : "en";
                        
                                const styleSettings = discountData.styleSettings;
                                const { widgetBodyFontSize, widgetBodyFontWeight, widgetBodyTextColor } = styleSettings;
                                const fontWeightValue = gfg.utility.getFontWeightValue(widgetBodyFontWeight);
                                const rulesList = discountData.rulesData.rulesGlobalList[0].rulesList.filter((curr) => curr);
                                const currencySymbol = gfg.utility.getCurrencySymbol();
                                const totalRules = rulesList.length;
                                const satisfiedRules = rulesList.filter(rule => rule.conditionMet).length;
                                const progressBarWidth = (satisfiedRules / totalRules) * 100;
                        
                                const iconInProgressFillColor = JSON.parse(JSON.stringify(styleSettings?.iconInProgressFillColor));
                                const iconSuccessFillColor = JSON.parse(JSON.stringify(styleSettings?.iconSuccessFillColor));
                        
                                const ruleIconAndTextArr = rulesList.map((curr) => {
                                    const isTrue = curr.conditionMet || false;
                                    const iconFill = isTrue ? iconSuccessFillColor : iconInProgressFillColor;
                                    const iconWrapperBackground = isTrue ? styleSettings?.progressBarSuccessFillColor : styleSettings?.progressBarInProgressFillColor;
                                    let text = curr.discountSettings.title[currLocale] || curr.discountSettings.title["en"];
                        
                                    let conditionValue = curr?.ruleValue?.value;
                                    const currencyRate = gfg.utility.getActiveCurrencyRate();
                                    conditionValue = conditionValue * currencyRate;
                        
                                    text = text.replace("{{CURRENCY}}", currencySymbol)
                                        .replace("{{DISCOUNT_VALUE}}", gfg.gfgUnifiedWidget.f.getDiscountValue(discountData, curr))
                                        .replace("{{REMAINING_AMOUNT}}", curr?.ruleValue?.remainingSubtotalValue)
                                        .replace("{{CONDITION_VALUE}}", conditionValue);
                        
                                    return { iconFill, iconWrapperBackground, text, isTrue };
                                });
                        
                                const gfgUnifiedWgtProgressBarIconTextMessageWrapper = document.createElement("div");
                                gfgUnifiedWgtProgressBarIconTextMessageWrapper.classList.add("gfgUnifiedWgtProgressBarIconTextMessageWrapper");
                        
                                const gfgHorizontalStepperProgressBarContainer = document.createElement("div");
                                gfgHorizontalStepperProgressBarContainer.classList.add("gfgHorizontalStepperProgressBarContainer");
                        
                                const progressBarSuccessFillColor = styleSettings.progressBarSuccessFillColor || "#00BA00";
                                const progressBarInProgressFillColor = styleSettings.progressBarInProgressFillColor || "#B9B9B9";
                        
                                const gfgHorizontalStepperProgressBarStickParentContainer = document.createElement("div");
                                gfgHorizontalStepperProgressBarStickParentContainer.classList.add("gfgHorizontalStepperProgressBarStickParentContainer");
                        
                                const gfgHorizontalStepperProgressBarStickWrapper = document.createElement("div");
                                gfgHorizontalStepperProgressBarStickWrapper.classList.add("gfgHorizontalStepperProgressBarStickWrapper");
                                gfgHorizontalStepperProgressBarStickWrapper.style.backgroundColor = progressBarInProgressFillColor;
                        
                                const gfgHorizontalProgressBar = document.createElement("div");
                                gfgHorizontalProgressBar.classList.add("gfgHorizontalProgressBar");
                                gfgHorizontalProgressBar.style.backgroundColor = progressBarSuccessFillColor;
                        
                                gfgHorizontalStepperProgressBarStickWrapper.appendChild(gfgHorizontalProgressBar);
                                gfgHorizontalStepperProgressBarStickParentContainer.appendChild(gfgHorizontalStepperProgressBarStickWrapper);
                        
                                ruleIconAndTextArr.forEach((ruleIconText, index) => {
                                    const gfgHorizontalStepperProgressBarItem = document.createElement("div");
                                    gfgHorizontalStepperProgressBarItem.classList.add("gfgHorizontalStepperProgressBarItem");
                        
                                    const iconWrapperBackground = ruleIconText?.iconWrapperBackground;
                        
                                    const iconWrapper = document.createElement("div");
                                    iconWrapper.classList.add("gfgHorizontalStepperProgressBarIconWrapper");
                                    iconWrapper.style.backgroundColor = iconWrapperBackground;
                        
                                    const iconImg = this.getIconImageElement(rulesList[index], ruleIconText);
                                    const textMessage = document.createElement("div");
                                    textMessage.classList.add("gfgHorizontalStepperProgressBarText");
                                    textMessage.style.fontSize = `${widgetBodyFontSize}px`;
                                    textMessage.style.fontWeight = fontWeightValue;
                                    textMessage.style.color = widgetBodyTextColor;
                                    textMessage.innerHTML = ruleIconText.text;
                        
                                    iconWrapper.appendChild(iconImg);
                                    gfgHorizontalStepperProgressBarItem.appendChild(iconWrapper);
                                    gfgHorizontalStepperProgressBarItem.appendChild(textMessage);
                                    gfgHorizontalStepperProgressBarContainer.appendChild(gfgHorizontalStepperProgressBarItem);
                                });
                        
                                gfgHorizontalStepperProgressBarContainer.appendChild(gfgHorizontalStepperProgressBarStickParentContainer);
                        
                                if (rulesList.length == 1) {
                                    gfgHorizontalStepperProgressBarContainer.style.display = "grid";
                                    gfgHorizontalStepperProgressBarContainer.style.gridAutoFlow = "column";
                                    gfgHorizontalStepperProgressBarContainer.style.justifyContent = "end";
                                }
                                if (rulesList.length >= 2) {
                                    gfgHorizontalStepperProgressBarContainer.children[0].style.flexGrow = "1";
                                }
                                if (rulesList.length >= 3) {
                                    gfgHorizontalStepperProgressBarContainer.children[1].style.flexGrow = "4";
                                }
                                if (rulesList.length >= 4) {
                                    gfgHorizontalStepperProgressBarContainer.children[0].style.flexGrow = "2";
                                    gfgHorizontalStepperProgressBarContainer.children[2].style.flexGrow = "4";
                                }
                        
                                gfgUnifiedWgtProgressBarIconTextMessageWrapper.appendChild(gfgHorizontalStepperProgressBarContainer);
                        
                                return gfgUnifiedWgtProgressBarIconTextMessageWrapper;
                            } catch (error) {
                                gfg.utility.debugError(`Error inside gfgDiscountV2 renderSingleRuleProgressBarUI fn`, error);
                            }
                        },            
                        renderTitleBarUI: function (titleBarHeading, styleSettings) {
                            try {
                                const titleBarTextContainer = document.createElement("div");
                                titleBarTextContainer.classList.add("titleBarTextContainer");
                        
                                if (titleBarHeading) {
                                    const titleBarMainHeading = document.createElement("div");
                                    titleBarMainHeading.classList.add("titleBarMainHeading");
                                    
                                    if (styleSettings?.widgetBodyTextColor) {
                                        titleBarMainHeading.style.color = styleSettings.widgetBodyTextColor;
                                    }
                        
                                    titleBarMainHeading.innerHTML = titleBarHeading;
                                    titleBarTextContainer.appendChild(titleBarMainHeading);
                                }
                        
                                return titleBarTextContainer;
                            } catch (error) {
                                gfg.utility.debugError(`Error inside gfgShippingDiscountV2 renderTitleBarUI function`, error);
                            }
                        },                                         
                        insertIntoPageWrapper: function(preparedDataObj, parent) {
                            try {
                                // Define the selector based on the parent context
                                const gfgUnifiedWidgetWrapperProductEle = gfg.utility.findWrapperElement("UNIFIED", parent, null);
                        
                                // Check if the element exists and has children; if so, clear them
                                if (gfgUnifiedWidgetWrapperProductEle) {
                                    Array.from(gfgUnifiedWidgetWrapperProductEle).forEach(element => {
                                        while (element.firstChild) {
                                            element.removeChild(element.firstChild);
                                        }
                                    });
                                }
                        
                                // Check if gfgUnifiedWidgetWrapperProductEle is present
                                // If not, set shouldInitUnifiedDiscountAgain to true and exit
                                if ((!gfgUnifiedWidgetWrapperProductEle || gfgUnifiedWidgetWrapperProductEle.length === 0) && 
                                    !gfg.f.cutOffshouldInitAgainConditionsForUnifiedAndShipping()) {
                                    gfg.state.shouldInitUnifiedDiscountAgain = true;
                                    return;
                                }
                        
                                // Append new UI elements
                                preparedDataObj?.preparedUiArray?.forEach((uiElement, index) => {
                                    const clone = uiElement.cloneNode(true); // Clone the element
                                    Array.from(gfgUnifiedWidgetWrapperProductEle).forEach(element => {
                                        element.appendChild(clone);
                                        gfg.gfgUnifiedWidget.f.handleDynamicProgressBar(
                                            clone, 
                                            preparedDataObj.prepredUnifiedWidgetData[index], 
                                            parent
                                        );
                                    });
                                });
                            } catch (error) {
                                gfg.utility.debugConsole("Error in insertIntoPageWrapper function:", error);
                            }
                        },            
                        handleDynamicProgressBar: async function(uiElement, unifiedWidgetData, parent) {
                            try {
                                let cartData = gfg.state.cartData;
                                if(!cartData){
                                    await gfg.utility.getCartV2();
                                }
                                const currencyRate = gfg.utility.getActiveCurrencyRate();
                                const satisfiedRules = [];
                                let lastSatisfiedRuleIndex = -1;
                                let lastUnsatisfiedRuleIndex = unifiedWidgetData?.rulesData?.rulesGlobalList[0]?.rulesList?.length;
                                const rulesList = unifiedWidgetData?.rulesData?.rulesGlobalList[0]?.rulesList;
                        
                                for (let i = 0; i < rulesList?.length; i++) {
                                    if (rulesList[i]?.conditionMet) {
                                        satisfiedRules.push(rulesList[i]);
                                        lastSatisfiedRuleIndex = i;
                                    } else {
                                        lastUnsatisfiedRuleIndex = i;
                                        break;
                                    }
                                }
                        
                                const gfgHorizontalStepperProgressBarItem = uiElement.querySelectorAll(".gfgHorizontalStepperProgressBarItem");
                                const gfgHorizontalStepperProgressBarStickWrapper = uiElement.querySelector(".gfgHorizontalStepperProgressBarStickWrapper");
                        
                                const widthOfLastStepperProgressBarItem = gfgHorizontalStepperProgressBarItem[gfgHorizontalStepperProgressBarItem.length - 1].clientWidth;
                                gfgHorizontalStepperProgressBarStickWrapper.style.width = `calc(100% - ${widthOfLastStepperProgressBarItem / 2}px)`;
                        
                                const gfgHorizontalProgressBar = uiElement.querySelector(".gfgHorizontalProgressBar");
                        
                                if (lastSatisfiedRuleIndex !== -1) {
                                    let totalWidth = 0;
                        
                                    for (let i = 0; i < lastSatisfiedRuleIndex; i++) {
                                        totalWidth += gfgHorizontalStepperProgressBarItem[i].clientWidth;
                                    }
                        
                                    totalWidth += gfgHorizontalStepperProgressBarItem[lastSatisfiedRuleIndex].clientWidth / 2;
                                    const shopName = window.Shopify.shop;
                                    if(shopName == "ateliermxdvs.myshopify.com" && lastSatisfiedRuleIndex == rulesList.length - 1) { //for MXDVS requirement
                                        totalWidth += gfgHorizontalStepperProgressBarItem[lastSatisfiedRuleIndex].clientWidth / 2;
                                    }
                        
                                    if (rulesList.length === 1) {
                                        totalWidth = gfgHorizontalStepperProgressBarStickWrapper.clientWidth;
                                    }
                        
                                    if (lastUnsatisfiedRuleIndex !== rulesList.length) {
                                        let width = gfgHorizontalStepperProgressBarItem[lastSatisfiedRuleIndex].clientWidth / 2;
                                        width += lastUnsatisfiedRuleIndex !== rulesList.length - 1
                                            ? gfgHorizontalStepperProgressBarItem[lastUnsatisfiedRuleIndex].clientWidth / 2
                                            : gfgHorizontalStepperProgressBarItem[lastUnsatisfiedRuleIndex].clientWidth / 2;
                        
                                        const satisfiedRuleData = rulesList[lastSatisfiedRuleIndex];
                                        const unsatisfiedRuleData = rulesList[lastUnsatisfiedRuleIndex];
                        
                                        let value;
                                        let total;
                        
                                        if (unifiedWidgetData?.cartRuleType === "cartQuantity") {
                                            value = unsatisfiedRuleData?.ruleValue?.value - satisfiedRuleData?.ruleValue?.value;
                                            total = gfg.customDiscountValidationFunctions.getQtyOfGivenProductsWithoutFreeGift(cartData.items) - satisfiedRuleData?.ruleValue?.value;
                                        } else {
                                            value = (unsatisfiedRuleData?.ruleValue?.value - satisfiedRuleData?.ruleValue?.value) * currencyRate;
                                            const cartTotal = unsatisfiedRuleData?.useDiscountedPrice
                                            ? gfg.customDiscountValidationFunctions.getDiscountedPriceOfCart(cartData)
                                            : gfg.customDiscountValidationFunctions.getAmountOfGivenProductsWithoutFreeGift(cartData.items);
                                            total = cartTotal - (satisfiedRuleData?.ruleValue?.value * currencyRate);
                                        }
                        
                                        total = Math.max(total, 0);
                                        const pricePercentage = Math.min(Math.round((total / value) * 100), 100);
                                        const progressBarWidth = Math.round(width * (pricePercentage / 100));
                                        totalWidth += progressBarWidth;
                                    }
                        
                                    gfgHorizontalProgressBar.style.width = `${totalWidth}px`;
                                } else {
                                    const firstRule = rulesList[0];
                                    let value;
                                    let total;
                        
                                    if (unifiedWidgetData?.cartRuleType === "cartQuantity") {
                                        value = firstRule?.ruleValue?.value;
                                        total = gfg.customDiscountValidationFunctions.getQtyOfGivenProductsWithoutFreeGift(cartData.items);
                                    } else {
                                        value = firstRule?.ruleValue?.value * currencyRate;
                                        total = firstRule?.useDiscountedPrice
                                            ? gfg.customDiscountValidationFunctions.getDiscountedPriceOfCart(cartData)
                                            : gfg.customDiscountValidationFunctions.getAmountOfGivenProductsWithoutFreeGift(cartData.items);
                                    }
                        
                                    const width = rulesList.length > 1 ? gfgHorizontalStepperProgressBarItem[0].clientWidth / 2 : gfgHorizontalStepperProgressBarStickWrapper.clientWidth;
                                    const pricePercentage = Math.min(Math.round((total / value) * 100), 100);
                                    const progressBarWidth = Math.round(width * (pricePercentage / 100));
                                    gfgHorizontalProgressBar.style.width = `${progressBarWidth}px`;
                                }
                            } catch (err) {
                                gfg.utility.debugError(`Error inside gfgUnifiedWidget handleDynamicProgressBar fn`, err);
                            }
                        },
                        
                        getDiscountValue: function (unifiedWidgetData, nextConditionNotMetOffer) {
                            try {
                            const currencyRate = gfg.utility.getActiveCurrencyRate();
                            const value = nextConditionNotMetOffer.discountSettings.value;
                            let discountValue = unifiedWidgetData.discountMode === "PERCENTAGE" ? value : (value * currencyRate).toFixed(2);
                            const formattedDiscountValue = discountValue //.endsWith(".00") ? discountValue.slice(0, -3) : discountValue;
                            return formattedDiscountValue;
                            } catch (error) {
                            gfg.utility.debugError(`Error inside gfgShippingDiscountV2 getDiscountValue fn`, error);
                            }
                        },
                    }
                };
          }
            // Register this module as loaded
            if (window.gfgFileStatus) {
                window.gfgFileStatus.kiteV0Features = "LOADED";
            }
            document.dispatchEvent(new CustomEvent('gfg:module:loaded', { detail: { moduleName: 'kiteV0Features' } }));
            gfg.utility.debugConsole("kiteV0Features: Module registered successfully");
        } catch (error) {
            console.error("kiteV0Features: Error initializing module", error);
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
            initKiteV0FeaturesModule();
        }
    }

    function waitForDependenciesAndInitialize() {
        var fileStatus = window.gfgFileStatus;
        if (!fileStatus) {
            // Fallback: if gfgFileStatus not available, wait for gfg object directly
            if (window.gfg) {
                initKiteV0FeaturesModule();
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