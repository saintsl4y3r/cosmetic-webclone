

let DEFAULT_addToCartBtnSelectorsApp7Ext = 'input[name="add"], button[name="add"], form[action*="/cart/add"] .gfg__add-to-cart,form[action*="/cart/add"] button[type="submit"], form[action*="/cart/add"] input[type="submit"], .product-form__buttons, .productView-group, .prd-Benefits, .product__submit__buttons, .t4s-product-form__buttons, .product-form__buy-buttons, .product__description, .v-stack.gap-4, .groups-btn, #MainContent product-form gp-button button[aria-label="Add to cart"], #MainContent product-form .shopify-payment-button__button';
let DEFAULT_checkoutBtnSelectorsApp7Ext = 'button[name="checkout"], input[name="checkout"], form[action*="/cart"] a[href="/checkout"], a[href="/checkout"], form[action="/cart"] input[type="submit"][name="checkout"], form[action="/cart"] button[type="submit"][name="checkout"], .previewCartInfo, .cart__ctas, .cart__items, .buy-buttons--compact, .drawer__footer, .ajax-cart__buttons, .taxes-discounts, .button-container, cart-drawer .line-item__content-wrapper, .mini-cart__actions, .cart__checkout-wrapper, .cart__footer-message, .js-contents, .cart--footer';
let DEFAULT_quantityBtnSelectorsApp7Ext = '.ajaxcart__qty,quantity-input .quantity,.quantity-input,.quantity__input,.quantity_input,.quantity,.quantity__container,.quantity_container, .quantity-selector, input[name="quantity"], .cart-item__quantity, .quantity-selector__input, .product-form__qty-input, .product__quantity, .product-quantity, .js-qty__num, .product-details input, .product-form__info-item--quantity, .product__quantity--button .js-qty__num, .product-form__quantity, .quantity__container, .QuantitySelector.QuantitySelector--large, .prd-quantity, .t4s-quantity-wrapper.t4s-product-form__qty, .qty-actual__input, .js-qty__wrapper, .t4s-quantity-wrapper, .t4s-product-form__buttons .t4s-quantity-input, .ProductForm__QuantitySelector, #quantity';
let DEFAULT_sideCartSelectorsApp7Ext = '.cart-notification,cart-notification,.cart-notification-wrapper,#cart-notification, #CartDrawer, .drawer, .drawer-cover, .Drawer';
let DEFAULT_buyNowBtnApp7Ext = '.shopify-payment-button__button, .shopify-payment-button__button--unbranded';
let DEFAULT_cartFormApp7Ext = 'form[action="/cart"], form[action="/cart/"], form[action="cart"]';
const DEFAULT_sideCartWidgetShowAboveSelectorsApp7Ext = ".quick-cart__main-content, #main-cart-items, .cart-item-list, #cart ul, .cart-drawer__line-items, .cart-drawer__items, .cart-drawer__body, .side-panel-content, .minicart__entry, #cart, .cart-drawer-content-item, #CartDrawerForm, #CartDrawer .drawer__content, cart-drawer-items, .cart__items, #cart-drawer-form, .drawer__items-title, #mini-cart-form, .mini-cart__line-item-list, .sidebar__body, .cart--body, .previewCartList, .cart-items__wrapper, .rebuy-cart__flyout-body, .items, .spurit-occ3__product-cards, .qsc2-drawer-body";
//for cart integration
let DEFAULT_cartItemSelectorApp7Ext = ".cart-item";
let DEFAULT_cartItemRemoveParentSelectorApp7Ext = "cart-remove-button";
let DEFAULT_cartItemRemoveSelectorApp7Ext = "";
let DEFAULT_cartItemQuantityBtnSelectorsApp7Ext = "";

// widget needs to render inside these selectors as a first child
const DEFAULT_PDP_SELECTORS_NOV25 = `.product-form__buttons, .product-form-buttons, buy-buttons, .payment-buttons, .product__submit__buttons, .product__form, #MainContent product-form gp-button button[aria-label="Add to cart"], form[action="/cart/add"], [data-block-type="buy-buttons"], .container-buy-quant, .productView-subtotal, .main-product__form-buttons--addtocart, .product-add-to-cart-container, .product-form__submit, .add-to-cart, .product-info__add-to-cart, #main-product-content .link-btn`; // above ones take high priority as they are not breaking the widget UI
// widget needs to render right above these selectors
const DEFAULT_SIDE_CART_BOTTOM_SELECTORS_NOV25 = `.cart__ctas, .cart-drawer__footer, .drawer__footer:not([hidden]), .drawer__footer,.mini-cart__actions, .mini-cart__footer, .cart__buttons, .drawer__bottom, .quick-cart__footer-inner, .quick-cart__footer, button[name="checkout"], input[name="checkout"],input[type="submit"][name="checkout"],button[type="submit"][name="checkout"], a[href="/checkout"], form[action="/cart"], .mini-cart-btns, .rebuy-cart__checkout-button, .mm-action_buttons, .buy-buttons, .cart-drawer__action-buttons, .AOV-CartDrawer-Footer, #checkout-button, .f-drawer__footer, .side_cart .actions, .cart-drawer__checkout-buttons, aside .link-btn, .easc-checkoutBtn, #mini-cart .cart__total-container`;
const DEFAULT_SIDE_CART_TOP_SELECTORS_NOV25 = `.cart-drawer__items, table.cart-items, .cart__items, .cart-item-list__body, cart-items, .drawer__items, .product-cart-item--container`;
const DEFAULT_CART_PAGE_SELECTORS_NOV25 = `.cart__ctas, .cart__buttons-container, .cart__checkout-wrapper, .checkout-buttons, .cart__buttons, .checkout-button, button[name="checkout"], input[name="checkout"], cart-checkout, .checkout-wrapper .cart__checkout, .cart__checkout-button, .mini-cart-footer-actions, .proceed-to-checkout, .cart__summary-button, .ajax-cart__button-submit, #yt-checkout-button, #cart-summary [name="checkout"]`;


let CONSTANT_ARROW_SVG_APP7EXT = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">' +
'<path d="M22.6666 18.6667L15.9999 12L9.33325 18.6667" stroke="#3C3C3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
'</svg>'; 

let CONSTANT_LOADING_SPINNER_SVG = `<div class="gfgLoadingSpinner" style="width:15px;z-index:100"><svg aria-hidden="true" focusable="false" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
<circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
</svg></div>`;

const UNIFIED_WIDGET_FREE_GIFT_ICON = `<svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9408 2.93206H11.2393C11.3737 2.67829 11.4449 2.39584 11.4468 2.10868C11.4472 1.73499 11.3319 1.37034 11.1168 1.06481C10.9016 0.759273 10.5971 0.527849 10.2452 0.402319C9.89318 0.27679 9.51098 0.263313 9.15104 0.363739C8.79109 0.464166 8.47107 0.673569 8.23493 0.963188C8.21715 0.988878 7.47676 1.97035 7.00051 2.60403C6.52361 1.96969 5.78257 0.984267 5.76149 0.95726C5.52456 0.669053 5.20433 0.461131 4.84466 0.361964C4.48499 0.262797 4.10346 0.277234 3.75231 0.403299C3.40116 0.529363 3.09756 0.760891 2.88309 1.06618C2.66862 1.37147 2.55376 1.73559 2.55424 2.10868C2.55615 2.39584 2.62733 2.67829 2.76174 2.93206H2.06021C1.6673 2.93259 1.29063 3.0889 1.0128 3.36673C0.734964 3.64457 0.578648 4.02124 0.578125 4.41415V6.71963C0.578125 6.85065 0.630174 6.97631 0.722823 7.06896C0.815472 7.16161 0.94113 7.21366 1.07215 7.21366H1.23683V10.6719C1.19815 11.0056 1.23543 11.3438 1.34589 11.6611C1.45635 11.9784 1.63713 12.2666 1.8747 12.5041C2.11227 12.7417 2.40048 12.9225 2.71778 13.033C3.03507 13.1434 3.37324 13.1807 3.70698 13.142H10.294C10.6278 13.1807 10.966 13.1434 11.2833 13.033C11.6005 12.9225 11.8888 12.7417 12.1263 12.5041C12.3639 12.2666 12.5447 11.9784 12.6551 11.6611C12.7656 11.3438 12.8029 11.0056 12.7642 10.6719V7.21366H12.9289C13.0599 7.21366 13.1856 7.16161 13.2782 7.06896C13.3709 6.97631 13.4229 6.85065 13.4229 6.71963V4.41415C13.4224 4.02124 13.2661 3.64457 12.9882 3.36673C12.7104 3.0889 12.3337 2.93259 11.9408 2.93206ZM12.4348 4.41415V6.2256H7.49454V3.92012H11.9408C12.0718 3.9203 12.1973 3.9724 12.29 4.06501C12.3826 4.15762 12.4347 4.28318 12.4348 4.41415ZM9.00232 1.58632C9.07834 1.4917 9.17476 1.41548 9.28438 1.36335C9.39399 1.31123 9.51397 1.28454 9.63534 1.2853C9.85372 1.2853 10.0631 1.37204 10.2176 1.52646C10.372 1.68087 10.4587 1.8903 10.4587 2.10868C10.4587 2.32705 10.372 2.53648 10.2176 2.6909C10.0631 2.84531 9.85372 2.93206 9.63534 2.93206H7.98857C8.43452 2.34054 8.97136 1.62651 9.00232 1.58632ZM3.5423 2.10868C3.54265 1.89041 3.62951 1.68118 3.78385 1.52684C3.93819 1.3725 4.14742 1.28564 4.36569 1.2853C4.48485 1.28408 4.60277 1.30954 4.71082 1.35981C4.81887 1.41007 4.91431 1.48386 4.99014 1.57579C5.02439 1.62255 5.56519 2.33923 6.01245 2.93206H4.36569C4.14742 2.93171 3.93819 2.84485 3.78385 2.69051C3.62951 2.53618 3.54265 2.32695 3.5423 2.10868ZM1.56618 4.41415C1.56636 4.28318 1.61846 4.15762 1.71108 4.06501C1.80369 3.9724 1.92924 3.9203 2.06021 3.92012H6.50648V6.2256H1.56618V4.41415ZM2.22489 10.6719V7.21366H6.50648V12.154H3.70698C2.6682 12.154 2.22489 11.7106 2.22489 10.6719ZM11.7761 10.6719C11.7761 11.7106 11.3328 12.154 10.294 12.154H7.49454V7.21366H11.7761V10.6719Z" fill="#2A2A2A"/>
</svg>`
const UNIFIED_WIDGET_DISCOUNT_ICON = `<svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.49407 1.27333C6.6393 1.11113 6.81711 0.981384 7.01588 0.892555C7.21465 0.803726 7.42992 0.757812 7.64763 0.757812C7.86535 0.757812 8.08062 0.803726 8.27939 0.892555C8.47816 0.981384 8.65596 1.11113 8.80119 1.27333L9.34313 1.87876C9.49802 2.05179 9.68985 2.18776 9.9044 2.27661C10.119 2.36547 10.3508 2.40492 10.5826 2.39205L11.3955 2.34715C11.613 2.33516 11.8305 2.36917 12.0339 2.44696C12.2373 2.52475 12.422 2.64456 12.5759 2.79858C12.7299 2.95259 12.8496 3.13735 12.9273 3.34078C13.005 3.54421 13.0389 3.76174 13.0268 3.97916L12.9819 4.7913C12.9691 5.02305 13.0086 5.25469 13.0975 5.46911C13.1863 5.68352 13.3223 5.87522 13.4952 6.03002L14.1006 6.57197C14.2629 6.7172 14.3928 6.89505 14.4817 7.09389C14.5706 7.29273 14.6166 7.5081 14.6166 7.72591C14.6166 7.94373 14.5706 8.15909 14.4817 8.35793C14.3928 8.55678 14.2629 8.73462 14.1006 8.87986L13.4952 9.4218C13.3221 9.57669 13.1862 9.76851 13.0973 9.98307C13.0085 10.1976 12.969 10.4294 12.9819 10.6613L13.0268 11.4742C13.0388 11.6916 13.0048 11.9092 12.927 12.1125C12.8492 12.3159 12.7294 12.5006 12.5754 12.6546C12.4213 12.8085 12.2366 12.9283 12.0332 13.0059C11.8297 13.0836 11.6122 13.1175 11.3948 13.1055L10.5826 13.0605C10.3509 13.0478 10.1192 13.0873 9.90483 13.1762C9.69041 13.265 9.49871 13.4009 9.34391 13.5738L8.80197 14.1793C8.65673 14.3416 8.47888 14.4715 8.28004 14.5604C8.0812 14.6493 7.86583 14.6952 7.64802 14.6952C7.4302 14.6952 7.21484 14.6493 7.016 14.5604C6.81716 14.4715 6.63931 14.3416 6.49407 14.1793L5.95213 13.5738C5.79724 13.4008 5.60542 13.2648 5.39086 13.176C5.1763 13.0871 4.9445 13.0477 4.71263 13.0605L3.89972 13.1055C3.68229 13.1174 3.46478 13.0834 3.26138 13.0056C3.05799 12.9279 2.87329 12.808 2.71935 12.654C2.56541 12.5 2.44568 12.3153 2.36799 12.1118C2.2903 11.9084 2.25639 11.6909 2.26848 11.4734L2.31338 10.6613C2.32613 10.4296 2.28662 10.1979 2.19777 9.98349C2.10893 9.76908 1.97301 9.57738 1.80009 9.42258L1.19466 8.88063C1.03234 8.7354 0.902478 8.55755 0.813572 8.35871C0.724665 8.15986 0.678711 7.9445 0.678711 7.72669C0.678711 7.50887 0.724665 7.29351 0.813572 7.09467C0.902478 6.89582 1.03234 6.71797 1.19466 6.57274L1.80009 6.0308C1.97312 5.87591 2.10909 5.68409 2.19795 5.46953C2.2868 5.25497 2.32625 5.02317 2.31338 4.7913L2.26848 3.97839C2.25661 3.76102 2.2907 3.54359 2.36854 3.34029C2.44638 3.13699 2.56621 2.95239 2.72021 2.79853C2.87422 2.64468 3.05893 2.52502 3.26231 2.44738C3.46568 2.36973 3.68314 2.33584 3.9005 2.34792L4.71263 2.39283C4.94438 2.40558 5.17602 2.36607 5.39044 2.27722C5.60485 2.18837 5.79655 2.05246 5.95136 1.87953L6.49407 1.27333ZM6.69661 2.4035C6.81632 2.2698 6.96288 2.16285 7.12673 2.08962C7.29057 2.0164 7.46802 1.97856 7.64748 1.97856C7.82694 1.97856 8.00439 2.0164 8.16823 2.08962C8.33208 2.16285 8.47864 2.2698 8.59836 2.4035L9.04508 2.90255C9.17275 3.04518 9.33087 3.15726 9.50773 3.2305C9.68459 3.30374 9.87566 3.33626 10.0668 3.32565L10.7369 3.28864C10.9161 3.27876 11.0954 3.3068 11.263 3.37092C11.4307 3.43503 11.583 3.5338 11.7098 3.66075C11.8367 3.78771 11.9354 3.94 11.9995 4.10769C12.0635 4.27537 12.0915 4.45468 12.0815 4.63391L12.0445 5.30335C12.034 5.49437 12.0665 5.68532 12.1398 5.86206C12.213 6.0388 12.3251 6.19682 12.4676 6.32442L12.9666 6.77114C13.1004 6.89086 13.2075 7.03746 13.2808 7.20136C13.3541 7.36527 13.3919 7.54279 13.3919 7.72234C13.3919 7.90188 13.3541 8.0794 13.2808 8.24331C13.2075 8.40722 13.1004 8.55382 12.9666 8.67353L12.4676 9.12025C12.325 9.24793 12.2129 9.40605 12.1396 9.58291C12.0664 9.75977 12.0339 9.95084 12.0445 10.142L12.0815 10.812C12.0914 10.9913 12.0633 11.1706 11.9992 11.3382C11.9351 11.5059 11.8363 11.6581 11.7094 11.785C11.5824 11.9119 11.4301 12.0106 11.2625 12.0746C11.0948 12.1387 10.9155 12.1666 10.7362 12.1567L10.0668 12.1197C9.87576 12.1091 9.68482 12.1417 9.50808 12.215C9.33134 12.2882 9.17332 12.4002 9.04572 12.5428L8.59899 13.0418C8.47928 13.1756 8.33268 13.2827 8.16877 13.3559C8.00487 13.4292 7.82734 13.4671 7.6478 13.4671C7.46826 13.4671 7.29073 13.4292 7.12683 13.3559C6.96292 13.2827 6.81632 13.1756 6.69661 13.0418L6.24989 12.5428C6.12221 12.4001 5.96409 12.2881 5.78723 12.2148C5.61037 12.1416 5.4193 12.1091 5.22817 12.1197L4.55809 12.1567C4.37887 12.1666 4.19957 12.1385 4.03191 12.0744C3.86426 12.0103 3.71201 11.9115 3.58511 11.7846C3.45822 11.6576 3.35953 11.5053 3.29549 11.3376C3.23145 11.1699 3.2035 10.9906 3.21346 10.8114L3.25048 10.142C3.26099 9.95094 3.22842 9.76 3.15518 9.58325C3.08195 9.40651 2.96991 9.2485 2.82737 9.12089L2.32832 8.67417C2.19452 8.55445 2.08747 8.40785 2.01419 8.24395C1.9409 8.08004 1.90302 7.90252 1.90302 7.72298C1.90302 7.54343 1.9409 7.36591 2.01419 7.202C2.08747 7.0381 2.19452 6.8915 2.32832 6.77178L2.82737 6.32506C2.97 6.19739 3.08208 6.03927 3.15532 5.86241C3.22856 5.68555 3.26109 5.49448 3.25048 5.30335L3.21346 4.63327C3.20368 4.45409 3.23178 4.27487 3.29594 4.10729C3.3601 3.93971 3.45888 3.78754 3.58583 3.66072C3.71277 3.53389 3.86503 3.43526 4.03267 3.37126C4.20031 3.30726 4.37956 3.27932 4.55873 3.28928L5.22817 3.32629C5.4192 3.3368 5.61014 3.30423 5.78688 3.231C5.96362 3.15776 6.12164 3.04573 6.24925 2.90318L6.69661 2.4035ZM10.2334 5.13248C10.4854 5.38442 10.4854 5.79291 10.2334 6.04486L5.97517 10.3031C5.72322 10.5551 5.31473 10.5551 5.06279 10.3031C4.81084 10.0512 4.81084 9.64267 5.06279 9.39073L9.32104 5.13248C9.57298 4.88053 9.98147 4.88053 10.2334 5.13248ZM4.90595 5.94694C4.90595 5.41248 5.33922 4.97921 5.87368 4.97921H5.88078C6.41524 4.97921 6.84851 5.41248 6.84851 5.94694V5.95404C6.84851 6.4885 6.41524 6.92177 5.88078 6.92177H5.87368C5.33922 6.92177 4.90595 6.4885 4.90595 5.95404V5.94694ZM8.45449 9.49548C8.45449 8.96102 8.88776 8.52775 9.42222 8.52775H9.42932C9.96378 8.52775 10.3971 8.96102 10.3971 9.49548V9.50258C10.3971 10.037 9.96378 10.4703 9.42932 10.4703H9.42222C8.88776 10.4703 8.45449 10.037 8.45449 9.50258V9.49548Z"/>
</svg>`
const UNIFIED_WIDGET_SHIPPING_DISCOUNT_ICON = `<svg width="20" height="20" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8642 5.69217L14.9676 4.53736L14.9693 4.53651L13.53 1.67393C13.4484 1.51193 13.2826 1.40973 13.1012 1.40973H11.0554V0.932879C11.0554 0.667875 10.8406 0.453125 10.5756 0.453125H2.57949C2.31449 0.453125 2.09974 0.667905 2.09974 0.932879C2.09974 1.19785 2.31452 1.41263 2.57949 1.41263H10.0958V4.771C10.0958 5.036 10.3106 5.25075 10.5756 5.25075H14.3068L15.0055 6.15079V8.62511H14.1009C13.8926 7.79073 13.1368 7.17079 12.2388 7.17079C11.34 7.17079 10.5837 7.79172 10.3761 8.62711H7.54485C7.33726 7.79172 6.58088 7.17079 5.68217 7.17079C4.78346 7.17079 4.02707 7.79172 3.81949 8.62711H2.57949C2.31449 8.62711 2.09974 8.84189 2.09974 9.10686C2.09974 9.37187 2.31452 9.58662 2.57949 9.58662H3.82827C4.0477 10.4048 4.7957 11.0089 5.68217 11.0089C6.56863 11.0089 7.31661 10.4048 7.53605 9.58665H10.3849C10.6043 10.4048 11.3523 11.0089 12.2388 11.0089C13.1261 11.0089 13.8745 10.4038 14.0932 9.58462H15.4852C15.7502 9.58462 15.965 9.36984 15.965 9.10487V5.98644C15.965 5.87993 15.9295 5.7763 15.8642 5.69217ZM12.8054 2.36927L13.7717 4.29124H11.0554V2.36927H12.8054ZM5.68217 10.0494C5.15299 10.0494 4.72263 9.61903 4.72263 9.08986C4.72263 8.56069 5.15299 8.13032 5.68217 8.13032C6.21119 8.13032 6.6417 8.56069 6.6417 9.08986C6.6417 9.61906 6.21134 10.0494 5.68217 10.0494ZM12.2388 10.0494C11.7096 10.0494 11.2792 9.61903 11.2792 9.08986C11.2792 8.56069 11.7096 8.13032 12.2388 8.13032C12.7679 8.13032 13.1983 8.56069 13.1983 9.08986C13.1983 9.61906 12.7679 10.0494 12.2388 10.0494ZM2.00348 6.19276H4.21042C4.47539 6.19276 4.69018 6.40754 4.69015 6.67252C4.69015 6.93749 4.47539 7.15227 4.21039 7.15227H2.00348C1.7385 7.15227 1.52372 6.93752 1.52372 6.67252C1.52372 6.40754 1.73847 6.19276 2.00348 6.19276ZM5.31401 4.30811H1.21999C0.955014 4.30811 0.740234 4.52289 0.740234 4.78789C0.740234 5.05289 0.955014 5.26764 1.21999 5.26764H5.31401C5.57901 5.26764 5.79376 5.05286 5.79376 4.78789C5.79376 4.52291 5.57901 4.30811 5.31401 4.30811ZM2.00348 2.42345H6.0975C6.3625 2.42345 6.57728 2.63823 6.57725 2.9032C6.57725 3.16818 6.3625 3.38296 6.0975 3.38296H2.00348C1.7385 3.38296 1.52372 3.16821 1.52372 2.9032C1.52372 2.63823 1.73847 2.42345 2.00348 2.42345Z" fill="#2A2A2A"/>
</svg>`

const CURRENCY_SYMBOLS = {
    AED: 'د.إ',
    AFN: '؋',
    ALL: 'L',
    AMD: '֏',
    ANG: 'ƒ',
    AOA: 'Kz',
    ARS: '$',
    AUD: '$',
    AWG: 'ƒ',
    AZN: '₼',
    BAM: 'KM',
    BBD: '$',
    BDT: '৳',
    BGN: 'лв',
    BHD: '.د.ب',
    BIF: 'FBu',
    BMD: '$',
    BND: '$',
    BOB: '$b',
    BOV: 'BOV',
    BRL: 'R$',
    BSD: '$',
    BTC: '₿',
    BTN: 'Nu.',
    BWP: 'P',
    BYN: 'Br',
    BYR: 'Br',
    BZD: 'BZ$',
    CAD: '$',
    CDF: 'FC',
    CHE: 'CHE',
    CHF: 'CHF',
    CHW: 'CHW',
    CLF: 'CLF',
    CLP: '$',
    CNH: '¥',
    CNY: '¥',
    COP: '$',
    COU: 'COU',
    CRC: '₡',
    CUC: '$',
    CUP: '₱',
    CVE: '$',
    CZK: 'Kč',
    DJF: 'Fdj',
    DKK: 'kr',
    DOP: 'RD$',
    DZD: 'دج',
    EEK: 'kr',
    EGP: '£',
    ERN: 'Nfk',
    ETB: 'Br',
    ETH: 'Ξ',
    EUR: '€',
    FJD: '$',
    FKP: '£',
    GBP: '£',
    GEL: '₾',
    GGP: '£',
    GHC: '₵',
    GHS: 'GH₵',
    GIP: '£',
    GMD: 'D',
    GNF: 'FG',
    GTQ: 'Q',
    GYD: '$',
    HKD: '$',
    HNL: 'L',
    HRK: 'kn',
    HTG: 'G',
    HUF: 'Ft',
    IDR: 'Rp',
    ILS: '₪',
    IMP: '£',
    INR: '₹',
    IQD: 'ع.د',
    IRR: '﷼',
    ISK: 'kr',
    JEP: '£',
    JMD: 'J$',
    JOD: 'JD',
    JPY: '¥',
    KES: 'KSh',
    KGS: 'лв',
    KHR: '៛',
    KMF: 'CF',
    KPW: '₩',
    KRW: '₩',
    KWD: 'KD',
    KYD: '$',
    KZT: '₸',
    LAK: '₭',
    LBP: '£',
    LKR: '₨',
    LRD: '$',
    LSL: 'M',
    LTC: 'Ł',
    LTL: 'Lt',
    LVL: 'Ls',
    LYD: 'LD',
    MAD: 'MAD',
    MDL: 'lei',
    MGA: 'Ar',
    MKD: 'ден',
    MMK: 'K',
    MNT: '₮',
    MOP: 'MOP$',
    MRO: 'UM',
    MRU: 'UM',
    MUR: '₨',
    MVR: 'Rf',
    MWK: 'MK',
    MXN: '$',
    MXV: 'MXV',
    MYR: 'RM',
    MZN: 'MT',
    NAD: '$',
    NGN: '₦',
    NIO: 'C$',
    NOK: 'kr',
    NPR: '₨',
    NZD: '$',
    OMR: '﷼',
    PAB: 'B/.',
    PEN: 'S/.',
    PGK: 'K',
    PHP: '₱',
    PKR: '₨',
    PLN: 'zł',
    PYG: 'Gs',
    QAR: '﷼',
    RMB: '￥',
    RON: 'lei',
    RSD: 'Дин.',
    RUB: '₽',
    RWF: 'R₣',
    SAR: '﷼',
    SBD: '$',
    SCR: '₨',
    SDG: 'ج.س.',
    SEK: 'kr',
    SGD: 'S$',
    SHP: '£',
    SLL: 'Le',
    SOS: 'S',
    SRD: '$',
    SSP: '£',
    STD: 'Db',
    STN: 'Db',
    SVC: '$',
    SYP: '£',
    SZL: 'E',
    THB: '฿',
    TJS: 'SM',
    TMT: 'T',
    TND: 'د.ت',
    TOP: 'T$',
    TRL: '₤',
    TRY: '₺',
    TTD: 'TT$',
    TVD: '$',
    TWD: 'NT$',
    TZS: 'TSh',
    UAH: '₴',
    UGX: 'USh',
    USD: '$',
    UYI: 'UYI',
    UYU: '$U',
    UYW: 'UYW',
    UZS: 'лв',
    VEF: 'Bs',
    VES: 'Bs.S',
    VND: '₫',
    VUV: 'VT',
    WST: 'WS$',
    XAF: 'FCFA',
    XBT: 'Ƀ',
    XCD: '$',
    XOF: 'CFA',
    XPF: '₣',
    XSU: 'Sucre',
    XUA: 'XUA',
    YER: '﷼',
    ZAR: 'R',
    ZMW: 'ZK',
    ZWD: 'Z$',
    ZWL: '$'
}

//This lang codes coming from window.Shopify.locale, which fail in the graphQL api call
const INVALID_LANG_CODES = {
    "TW": "ZH_TW",
}

const normalizeLangCode = (langCode) => {
    
    if(INVALID_LANG_CODES[langCode]) {
        return INVALID_LANG_CODES[langCode];
    }
    if(langCode.includes("-")) {
        return langCode.split("-")[0];
    }
    return langCode;
}
// Archived app block selectors
const PRODUCT_PAGE_APP_BLOCK_SELECTOR= '.gfgProductPageAppBlock';
const CART_PAGE_APP_BLOCK_SELECTOR = '.gfgCartPageAppBlock';

// new feature specific app block selectors for product & cart page
const FREE_GIFT_APP_BLOCK_SELECTOR = '.gfgFreeGiftWrapperV3';
const VOLUME_DISCOUNT_APP_BLOCK_SELECTOR = '.gfgVolDiscountWrapperV3';
const BOGO_APP_BLOCK_SELECTOR = '.gfgBogoDiscountWrapperV3';
const UNIFIED_APP_BLOCK_SELECTOR = '.gfgUnifiedDiscountWrapperV3';
const CUSTOM_DISCOUNT_APP_BLOCK_SELECTOR = '.gfgCustomDiscountWrapperV2';
const CONSOLIDATED_PROGRESS_BAR_APP_BLOCK_SELECTOR = '.gfgConsolidatedProgressBarWrapperV2';
const SHIPPING_DISCOUNT_APP_BLOCK_SELECTOR = '.gfgShippingDiscountWrapperV2';

// feature specific side cart wrappers
// const FREEGIFT_SIDE_CART_WRAPPER = '<div class="gfgFreeGiftSideCartWrapperV4"></div>'
// const VOLUME_DISCOUNT_SIDE_CART_WRAPPER = '<div class="gfgVolumeDiscountSideCartWrapperV4"></div>'
// const UNIFIED_SIDE_CART_WRAPPER = '<div class="gfgUnifiedSideCartWrapperV4"></div>'
// const CUSTOM_DISCOUNT_SIDE_CART_WRAPPER = '<div class="gfgCustomDiscountSideCartWrapperV4"></div>'
// const SHIPPING_DISCOUNT_SIDE_CART_WRAPPER = '<div class="gfgShippingDiscountSideCartWrapperV4"></div>'

const FREEGIFT_SIDE_CART_WRAPPER = document.createElement('div');
FREEGIFT_SIDE_CART_WRAPPER.className = 'gfgFreeGiftSideCartWrapperV4';
const VOLUME_DISCOUNT_SIDE_CART_WRAPPER = document.createElement('div');
VOLUME_DISCOUNT_SIDE_CART_WRAPPER.className = 'gfgVolumeDiscountSideCartWrapperV4'; 
const UNIFIED_SIDE_CART_WRAPPER = document.createElement('div');
UNIFIED_SIDE_CART_WRAPPER.className = 'gfgUnifiedSideCartWrapperV4';
const CUSTOM_DISCOUNT_SIDE_CART_WRAPPER = document.createElement('div');
CUSTOM_DISCOUNT_SIDE_CART_WRAPPER.className = 'gfgCustomDiscountSideCartWrapperV4';
const CONSOLIDATED_PROGRESS_BAR_SIDE_CART_WRAPPER = document.createElement('div');
CONSOLIDATED_PROGRESS_BAR_SIDE_CART_WRAPPER.className = 'gfgConsolidatedProgressBarSideCartWrapperV4';
const SHIPPING_DISCOUNT_SIDE_CART_WRAPPER = document.createElement('div');
SHIPPING_DISCOUNT_SIDE_CART_WRAPPER.className = 'gfgShippingDiscountSideCartWrapperV4';


// feature specific side cart wrappers selector
const FREEGIFT_SIDE_CART_WRAPPER_SELECTOR = '.gfgFreeGiftSideCartWrapperV4';
const VOLUME_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR = '.gfgVolumeDiscountSideCartWrapperV4';
const UNIFIED_SIDE_CART_WRAPPER_SELECTOR = '.gfgUnifiedSideCartWrapperV4';
const CUSTOM_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR = '.gfgCustomDiscountSideCartWrapperV4';
const CONSOLIDATED_PROGRESS_BAR_SIDE_CART_WRAPPER_SELECTOR = '.gfgConsolidatedProgressBarSideCartWrapperV4';
const SHIPPING_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR = '.gfgShippingDiscountSideCartWrapperV4';

// ============================
// CSS for Space Reservation (Zero Layout Shift) - Cart Drawer Observer
// ============================
const GFG_CART_DRAWER_OBSERVER_CSS = `
/* Space reservation for side cart wrappers to prevent FOUC/layout shift */
.gfgFreeGiftSideCartWrapperV4,
.gfgVolumeDiscountSideCartWrapperV4,
.gfgUnifiedSideCartWrapperV4,
.gfgCustomDiscountSideCartWrapperV4,
.gfgConsolidatedProgressBarSideCartWrapperV4,
.gfgShippingDiscountSideCartWrapperV4 {
    /* Reserve minimum space to prevent layout collapse */
    min-height: var(--gfg-widget-min-height, 0px);
    /* Use contain to optimize rendering */
    contain: layout style;
    /* Smooth transitions for height changes */
    transition: min-height 0.15s ease-out;
}

/* When widget has content, allow natural sizing */
.gfgFreeGiftSideCartWrapperV4:not(:empty),
.gfgVolumeDiscountSideCartWrapperV4:not(:empty),
.gfgUnifiedSideCartWrapperV4:not(:empty),
.gfgCustomDiscountSideCartWrapperV4:not(:empty),
.gfgConsolidatedProgressBarSideCartWrapperV4:not(:empty),
.gfgShippingDiscountSideCartWrapperV4:not(:empty) {
    min-height: auto;
}

/* Placeholder styling while widget loads */
.gfg-widget-placeholder {
    min-height: var(--gfg-widget-min-height, 50px);
    background: transparent;
}
`;

// Cart drawer selectors for different themes
const GFG_CART_DRAWER_SELECTORS = {
    DAWN: 'cart-drawer', // Dawn/2.0 themes - custom element
    FALLBACK: ['#CartDrawer', '.cart-drawer', '[data-cart-drawer]', '.drawer[data-drawer="cart"]', '.mini-cart', '.ajax-cart', '.side-cart'] // Common fallback selectors
};

const FREE_GIFT_PAGINATION_ITEMS_PER_PAGE = 2;

const SHADOW_ROOTS_SELECTORS = "#upCart, #opus-shadow-container, #recharge-storefront-experiences__cart-drawer, dna-mini-cart";



var gfgUtils = {
    f: {}
}
window.gfgUtils = gfgUtils;





// gfgUtils.f.loadScript = function (a, b) {
//     var c = document.createElement("script");
//     c.type = "text/javascript";
//     c.src = a;
//     document.getElementsByTagName("head")[0].appendChild(c)
//     c.onload = function () { b() };
// };

/*
* we changed loadScript function - if else block for onload is removed as it was not making sense
*fn(param1) =>  
*param1 - represents function that should be executed once jquery is loaded 
*https://www.w3schools.com/jquery/jquery_noconflict.asp
*/
// gfgUtils.f.loadJquery = function (b) {
    
//     let flag = false;
//     if("undefined" === typeof jQuery || 3.0 > parseFloat(jQuery.fn.jquery)){
//         flag = true;
//     }
//     if("undefined" != typeof jQuery && jQuery.post == undefined){
//         flag = true;
//     }

//     if(flag){
//         gfgUtils.f.loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js", function () {
//            gfgJquery = jQuery.noConflict(!0);
//             b(gfgJquery)
//         })
//     }else{
//         b(jQuery);
//     }
// };

var gfg = {
    env:"PRODUCTION",
    excludeErrors: [
        "error in getSettings R2 fetch",
        "gfg-utility-getCartV2",
        "Error inside getSettingsFromR2. Trying S3",
        "Error inside gfgCustomDiscount initialize fn",
        "Error inside gfgCustomDiscount makeGraphQLApiCall fn",
        "Unexpected error in fetching settings: ",
        "error in applyImpFileCssStyling fn",
        "error in getSettings R2 fetch =>",
        "error in getSettings s3 fetch =>",
        "error in getVisitingFromCountry",
        "Error inside getProductsDataByIdWithAjaxResponse fn",
        "error in addDiscountedSubtotalToCartAttributes",
        "validateAndParseCartData",
        "Error inside gfgShippingDiscountV2 getLatestCartItemsProductData fn",
        "gfgRemoveAllFreeGiftProductsExceptGiven",
        "Error inside gfgUnifiedWidget prepareUI fn",








    ],
    errorLogs: null,
    debug: [],
    version: 1.35,
    state: {
        submitted: "",
        product_added: "",
        page_type: "",
        lastClickTimestamps: new Map(),
        insertWrapperOnPage: [],
        cartData: undefined,
        isOverWriteBuyNowBtnTriggered: false,
        timer: undefined,
        freeGiftcardPopupModalTriggered: false,
        atleastOneProduct:{},
        checkForFreeGift: false,
        isCheckForFreeGiftTriggered: false,
        gfgFreeGiftMsgRowButton: false,
        CONSTANT_DEBUG_FLAG: undefined,
        freeGiftsCartDataMap_productId: {},
        freeGiftsCartDataMap_variantId: {},
        freeGiftsCartData: {},
        gfgFreeGiftCartData: {},
        activeCampaignName: "EMPTY",
        activeCustomerData: "EMPTY",
        formatPriceViaCustomScript: false,
        shouldInitShippingDiscountAgain: false,
        shouldInitUnifiedDiscountAgain: false,
        featuresWrapperMap:{},
        cartCache:{
            data: null,
            timestamp: null,
            isLoading: false,
            pendingPromises: []
        },
        shadowRoot: {
            isDetected : false,
            reference : null,
            pendingEventCampaignIndices: [] // Queue for campaigns that need shadow root events attached later
        },
        bootstrapComplete: false // Flag to track if all modules are loaded and bootstrap is complete
    },
    constants: {
        themesIds: {
            DAWN_THEME: 887,
            VENTURE_THEME: 775,
            EXPRESS_THEME: 885,
            CRAVE_THEME: 1363,
            SENSE_THEME: 1356,
            CRAFT_THEME: 1368,
        }
    },
    
    // ============================
    // Cart Drawer Observer - MutationObserver based widget re-injection
    // ============================
    cartDrawerObserver: {
        state: {
            isObserving: false,
            drawerObserver: null,
            bodyObserver: null,
            cssInjected: false,
            lastInjectionTime: 0,
            observedDrawer: null,
            widgetSnapshots: {},
            hasActiveSnapshot: false,
            snapshotTimeoutId: null,
            pendingWidgetCheck: null,
            _lastRerenderTime: 0
        },

        /**
         * Initialize the cart drawer observer system
         * Call this once during app initialization
         */
        init: function() {
            try {
                gfg.utility.debugConsole("cartDrawerObserver: Initializing...");
                this.injectSpaceReservationCSS(); // Inject CSS for space reservation
                const drawerFound = this.observeCartDrawer(); // Try to observe cart drawer immediately
                
                if (!drawerFound) { // If drawer not found yet, set up body observer to catch it when rendered
                    this.observeBodyForDrawer();
                }
                
                gfg.utility.debugConsole("cartDrawerObserver: Initialized successfully");
            } catch (error) {
                gfg.utility.debugError("cartDrawerObserver: Error in init", error);
            }
        },

        injectSpaceReservationCSS: function() { //Inject CSS for space reservation to prevent layout shifts
            try {
                if (this.state.cssInjected) return;
                
                const styleId = 'gfg-cart-drawer-observer-css';
                if (document.getElementById(styleId)) {
                    this.state.cssInjected = true;
                    return;
                }
                
                const styleElement = document.createElement('style');
                styleElement.id = styleId;
                styleElement.setAttribute('data-source-name', 'gfgCartDrawerObserver');
                styleElement.textContent = GFG_CART_DRAWER_OBSERVER_CSS;
                
                document.head.appendChild(styleElement); // Insert at head for higher priority
                this.state.cssInjected = true;
                
                gfg.utility.debugConsole("cartDrawerObserver: CSS injected");
            } catch (error) {
                gfg.utility.debugError("cartDrawerObserver: Error injecting CSS", error);
            }
        },

        /**
         * Find the cart drawer element using multiple selectors
         * @returns {Element|null} The cart drawer element or null
         */
        findCartDrawer: function() {
            try {
                let drawer = document.querySelector(GFG_CART_DRAWER_SELECTORS.DAWN); // Try Dawn/2.0 theme custom element first
                if (drawer) return drawer;
                
                for (const selector of GFG_CART_DRAWER_SELECTORS.FALLBACK) { // Try fallback selectors
                    drawer = document.querySelector(selector);
                    if (drawer) return drawer;
                }
                
                if (gfg.settings?.app?.sideCartSectionSelector) { // Try custom selector from settings
                    drawer = document.querySelector(gfg.settings.app.sideCartSectionSelector);
                    if (drawer) return drawer;
                }
                
                if (typeof DEFAULT_sideCartSelectorsApp7Ext !== 'undefined') { // Try default side cart selectors
                    const selectors = DEFAULT_sideCartSelectorsApp7Ext.split(',').map(s => s.trim());
                    for (const selector of selectors) {
                        drawer = document.querySelector(selector);
                        if (drawer) return drawer;
                    }
                }
                
                return null;
            } catch (error) {
                gfg.utility.debugError("cartDrawerObserver: Error finding cart drawer", error);
                return null;
            }
        },

        /**
         * Check if our widgets exist in the drawer
         * @param {Element} drawer - The cart drawer element (optional, will search document if not provided)
         * @param {boolean} checkContent - If true, also verify wrapper has content (not empty)
         * @returns {boolean} True if at least one widget wrapper exists (with content if checkContent is true)
         */
        widgetsExist: function(drawer, checkContent = false) {
            const searchContext = drawer || document;
            const selectors = [
                FREEGIFT_SIDE_CART_WRAPPER_SELECTOR,
                VOLUME_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR,
                UNIFIED_SIDE_CART_WRAPPER_SELECTOR,
                CUSTOM_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR,
                CONSOLIDATED_PROGRESS_BAR_SIDE_CART_WRAPPER_SELECTOR,
                SHIPPING_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR,
                '.gfgFGv2-injected-wrapper-sidecart' // V2 fallback wrapper
            ];
            
            for (const selector of selectors) {
                const wrapper = searchContext.querySelector(selector);
                if (wrapper) {
                    // If checkContent is true, verify wrapper has actual content
                    if (checkContent) {
                        if (wrapper.children.length > 0 || wrapper.textContent.trim().length > 0) {
                            return true;
                        }
                    } else {
                        return true;
                    }
                }
            }
            return false;
        },

        /**
         * Check if widget content exists (not just empty wrappers)
         * @param {Element} drawer - The cart drawer element
         * @returns {boolean} True if at least one widget has content
         */
        widgetContentExists: function(drawer) {
            return this.widgetsExist(drawer, true);
        },

        /**
         * Re-inject widgets into the cart drawer
         * This is called by the MutationObserver callback
         * @param {boolean} fullRerender - If true, also triggers widget content re-rendering (for hydration events)
         */
        reinjectWidgets: function(fullRerender = false) {
            try {
                // Double-check widgets don't exist before injecting
                if (this.widgetsExist(this.state.observedDrawer) && !fullRerender) {
                    gfg.utility.debugConsole("cartDrawerObserver: Widgets exist, skipping injection");
                    return;
                }
                
                gfg.utility.debugConsole("cartDrawerObserver: Re-injecting widget wrappers..." + (fullRerender ? " (full re-render after hydration)" : ""));
                
                // Mark injection time BEFORE injecting
                this.state.lastInjectionTime = Date.now();
                
                // Call the existing wrapper injection function
                if (gfg.cartPage && gfg.cartPage.f && typeof gfg.cartPage.f.insertSideCartWrappersIntoPage === 'function') {
                    gfg.cartPage.f.insertSideCartWrappersIntoPage(gfg.settings);
                }

                // Try to restore from snapshot first (preserves event listeners)
                if (this.state.hasActiveSnapshot) {
                    const restored = this.restoreWidgetSnapshot();
                    if (restored) {
                        gfg.utility.debugConsole("cartDrawerObserver: Restored widgets from snapshot, skipping full re-render");
                        return;
                    }
                }

                // Fallback: For full re-render (after hydration), trigger widget content re-rendering
                if (fullRerender) {
                    gfg.utility.debugConsole("cartDrawerObserver: Triggering widget content re-render...");
                    this.rerenderWidgetContent();
                }
                
            } catch (error) {
                gfg.utility.debugError("cartDrawerObserver: Error re-injecting widgets", error);
            }
        },

        /**
         * Trigger widget content re-rendering for side cart
         * This is called after hydration to ensure widgets are properly rendered
         *
         * IMPORTANT: This function has a debounce guard to prevent infinite loops.
         * The loop was: customDiscountLogic.init() → updateCartAttributesWithCFData → updateCart
         * → updateCartState → gfgCartRefreshHelper.init() → DOM replacement → MutationObserver
         * → reinjectWidgets(true) → rerenderWidgetContent → customDiscountLogic.init() → LOOP
         *
         * IMPORTANT: This function has a debounce guard to prevent infinite loops.
         * The loop was: customDiscountLogic.init() → updateCartAttributesWithCFData → updateCart
         * → updateCartState → gfgCartRefreshHelper.init() → DOM replacement → MutationObserver
         * → reinjectWidgets(true) → rerenderWidgetContent → customDiscountLogic.init() → LOOP
         */
        rerenderWidgetContent: function() {
            try {
                var now = Date.now();
                var timeSinceLastRerender = now - (this.state._lastRerenderTime || 0);
                this.state._lastRerenderTime = now;

                // Always re-initialize display-only widgets (they don't modify cart state)
                if (gfg.gfgFreeGift && !gfg.gfgFreeGift._isStub) gfg.gfgFreeGift.init(gfg.settings, "CART_PAGE")
                if (gfg.gfgFreeGiftV2 && !gfg.gfgFreeGiftV2._isStub && gfg.settings.freeGiftsV2?.length > 0) gfg.gfgFreeGiftV2.init(gfg.settings.freeGiftsV2)
                if (gfg.gfgVolDiscount && !gfg.gfgVolDiscount._isStub) gfg.gfgVolDiscount.init(gfg.settings, "CART_PAGE")
                if (gfg.gfgBogoFeature && !gfg.gfgBogoFeature._isStub) gfg.gfgBogoFeature.init(gfg.settings, "CART_PAGE")
                if (gfg.gfgUnifiedWidget && !gfg.gfgUnifiedWidget._isStub) gfg.gfgUnifiedWidget.init(gfg.settings , "CART_PAGE")

                // Debounce only cart-modifying modules (customDiscountLogic/consolidatedCustomDiscount)
                // These cause the infinite loop: init → updateCart → updateCartState → DOM replace → MutationObserver → rerenderWidgetContent → LOOP
                if (timeSinceLastRerender < 2000) {
                    gfg.utility.debugConsole("cartDrawerObserver: Skipping cart-modifying re-inits (debounced, " + timeSinceLastRerender + "ms since last)");
                    return;
                }

                // Re-initialize consolidated custom discount (includes progress bar)
                if (typeof gfgConsolidatedCustomDiscount !== 'undefined' && gfgConsolidatedCustomDiscount.init) {
                    gfg.utility.debugConsole("cartDrawerObserver: Re-initializing gfgConsolidatedCustomDiscount...");
                    gfgConsolidatedCustomDiscount.init();
                }

                // Re-initialize other widgets as needed
                if (typeof gfgCustomDiscount !== 'undefined' && gfgCustomDiscount.gfgShippingDiscountV2 && gfgCustomDiscount.gfgShippingDiscountV2.init) {
                    gfg.utility.debugConsole("cartDrawerObserver: Re-initializing shipping discount...");
                    gfgCustomDiscount.gfgShippingDiscountV2.init();
                    gfgCustomDiscount.init();
                }

            } catch (error) {
                gfg.utility.debugError("cartDrawerObserver: Error re-rendering widget content", error);
            }
        },

        /**
         * Set up MutationObserver on the cart drawer element
         * @returns {boolean} True if observer was set up successfully
         */
        observeCartDrawer: function() {
            try {
                const drawer = this.findCartDrawer();
                if (!drawer) {
                    gfg.utility.debugConsole("cartDrawerObserver: Cart drawer not found");
                    return false;
                }
                
                // Don't re-observe the same drawer
                if (this.state.observedDrawer === drawer && this.state.drawerObserver) {
                    gfg.utility.debugConsole("cartDrawerObserver: Already observing this drawer");
                    return true;
                }
                
                this.disconnect(); // Disconnect existing observer if any
                this.state.observedDrawer = drawer;
                
                // Create MutationObserver with debounced check logic:
                // Instead of ignoring mutations, we coalesce rapid mutations and check after DOM stabilizes
                const self = this;
                this.state.drawerObserver = new MutationObserver(function(mutations) {
                    // Check for hydration event first (these need special handling)
                    let isHydrationEvent = false;
                    for (const mutation of mutations) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'data-hydrated') {
                            const target = mutation.target;
                            if (target && target.getAttribute('data-hydrated') === 'true') {
                                isHydrationEvent = true;
                                gfg.utility.debugConsole("cartDrawerObserver: Hydration event detected!");
                                break;
                            }
                        }
                    }

                    // If hydration event, trigger full re-render after short delay
                    if (isHydrationEvent) {
                        gfg.utility.debugConsole("cartDrawerObserver: Triggering full re-render after hydration...");
                        setTimeout(function() {
                            self.reinjectWidgets(true);
                        }, 100);
                        return;
                    }

                    // Clear any pending widget check (coalesce rapid mutations)
                    if (self.state.pendingWidgetCheck) {
                        clearTimeout(self.state.pendingWidgetCheck);
                    }

                    // Schedule a check after DOM stabilizes (20ms)
                    // This coalesces multiple rapid mutations into a single check
                    self.state.pendingWidgetCheck = setTimeout(function() {
                        self.state.pendingWidgetCheck = null;

                        // Skip if we just injected (within 30ms) - filters our own mutations
                        if (Date.now() - self.state.lastInjectionTime < 30) {
                            return;
                        }

                        // Check for both wrapper and content
                        const wrapperExists = self.widgetsExist(drawer);
                        const contentExists = self.widgetContentExists(drawer);

                        if (!wrapperExists) {
                            gfg.utility.debugConsole("cartDrawerObserver: Wrapper missing, re-injecting with full re-render...");
                            self.reinjectWidgets(true);
                        } else if (!contentExists) {
                            gfg.utility.debugConsole("cartDrawerObserver: Content missing, triggering full re-render...");
                            self.reinjectWidgets(true);
                        }
                    }, 20);
                });
                
                // Start observing with subtree to catch nested content replacement
                // Also observe attributes to catch hydration events
                this.state.drawerObserver.observe(drawer, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['data-hydrated']
                });
                
                this.state.isObserving = true;
                gfg.utility.debugConsole("cartDrawerObserver: Now observing cart drawer");
                
                // Initial injection if widgets don't exist
                if (!this.widgetsExist(drawer)) {
                    this.reinjectWidgets();
                }
                
                return true;
                
            } catch (error) {
                gfg.utility.debugError("cartDrawerObserver: Error setting up drawer observer", error);
                return false;
            }
        },

        /**
         * Observe the body for when cart drawer is first rendered
         * This handles the case where drawer doesn't exist on page load
         */
        observeBodyForDrawer: function() {
            try {
                if (this.state.bodyObserver) {
                    gfg.utility.debugConsole("cartDrawerObserver: Body observer already active");
                    return;
                }
                
                gfg.utility.debugConsole("cartDrawerObserver: Setting up body observer for drawer detection");
                
                const self = this;
                let lastCheckTime = 0;
                
                this.state.bodyObserver = new MutationObserver(function(mutations) {
                    // Debounce - only check every 300ms to avoid performance issues
                    const now = Date.now();
                    if (now - lastCheckTime < 300) {
                        return;
                    }
                    lastCheckTime = now;
                    
                    const drawer = self.findCartDrawer(); // Check if cart drawer now exists
                    if (drawer) {
                        gfg.utility.debugConsole("cartDrawerObserver: Cart drawer detected, switching to drawer observer");
                        
                        self.state.bodyObserver.disconnect(); // Disconnect body observer
                        self.state.bodyObserver = null;
                        
                        self.observeCartDrawer(); // Set up drawer observer
                    }
                });
                
                // Only watch direct children of body, not entire subtree (performance)
                this.state.bodyObserver.observe(document.body, {
                    childList: true,
                    subtree: false
                });
                
            } catch (error) {
                gfg.utility.debugError("cartDrawerObserver: Error setting up body observer", error);
            }
        },

        /**
         * Disconnect all observers
         */
        disconnect: function() {
            try {
                if (this.state.drawerObserver) {
                    this.state.drawerObserver.disconnect();
                    this.state.drawerObserver = null;
                }
                if (this.state.bodyObserver) {
                    this.state.bodyObserver.disconnect();
                    this.state.bodyObserver = null;
                }
                this.state.isObserving = false;
                this.state.observedDrawer = null;
                
                gfg.utility.debugConsole("cartDrawerObserver: Disconnected all observers");
            } catch (error) {
                gfg.utility.debugError("cartDrawerObserver: Error disconnecting", error);
            }
        },

        /**
         * Force re-observe (useful after major DOM changes)
         */
        reobserve: function() {
            try {
                gfg.utility.debugConsole("cartDrawerObserver: Re-observing...");
                this.disconnect();
                const found = this.observeCartDrawer();
                if (!found) {
                    this.observeBodyForDrawer();
                }
            } catch (error) {
                gfg.utility.debugError("cartDrawerObserver: Error re-observing", error);
            }
        },

        /**
         * Take a snapshot of current widget content by saving references to child nodes
         * Does NOT remove nodes from DOM - only saves references for later restoration if needed
         * When the theme replaces drawer innerHTML, these nodes become orphaned but stay in memory
         * @returns {boolean} True if snapshot was taken successfully
         */
        takeWidgetSnapshot: function() {
            try {
                const drawer = this.findCartDrawer();
                if (!drawer) {
                    gfg.utility.debugConsole("cartDrawerObserver: No drawer found for snapshot");
                    return false;
                }

                this.state.widgetSnapshots = {};

                const selectors = [
                    '.gfgFreeGiftSideCartWrapperV4',
                    '.gfgVolumeDiscountSideCartWrapperV4',
                    '.gfgUnifiedSideCartWrapperV4',
                    '.gfgCustomDiscountSideCartWrapperV4',
                    '.gfgConsolidatedProgressBarSideCartWrapperV4',
                    '.gfgShippingDiscountSideCartWrapperV4'
                ];

                for (const selector of selectors) {
                    const wrapper = drawer.querySelector(selector);
                    if (wrapper && wrapper.children.length > 0) {
                        // Save references without removing from DOM
                        this.state.widgetSnapshots[selector] = Array.from(wrapper.childNodes);
                    }
                }

                this.state.hasActiveSnapshot = Object.keys(this.state.widgetSnapshots).length > 0;

                if (this.state.snapshotTimeoutId) {
                    clearTimeout(this.state.snapshotTimeoutId);
                }
                this.state.snapshotTimeoutId = setTimeout(() => {
                    this.clearWidgetSnapshot();
                }, 5000);

                gfg.utility.debugConsole("cartDrawerObserver: Snapshot taken, hasActiveSnapshot:", this.state.hasActiveSnapshot);
                return this.state.hasActiveSnapshot;
            } catch (error) {
                gfg.utility.debugError("cartDrawerObserver: Error taking snapshot", error);
                return false;
            }
        },

        /**
         * Restore widget content from snapshot only if wrapper is empty (content was wiped by theme)
         * If wrapper still has content, skip restoration - no action needed
         * @returns {boolean} True if restoration was performed
         */
        restoreWidgetSnapshot: function() {
            try {
                if (!this.state.hasActiveSnapshot) {
                    gfg.utility.debugConsole("cartDrawerObserver: No active snapshot to restore");
                    return false;
                }

                const drawer = this.findCartDrawer();
                if (!drawer) {
                    gfg.utility.debugConsole("cartDrawerObserver: No drawer found for restoration");
                    return false;
                }

                let restored = false;

                for (const selector in this.state.widgetSnapshots) {
                    const wrapper = drawer.querySelector(selector);
                    const nodes = this.state.widgetSnapshots[selector];

                    // Only restore if wrapper exists but is empty (content was wiped by theme refresh)
                    if (wrapper && nodes && nodes.length > 0 && wrapper.children.length === 0) {
                        for (const node of nodes) {
                            wrapper.appendChild(node);
                        }
                        restored = true;
                        gfg.utility.debugConsole("cartDrawerObserver: Restored snapshot for", selector);
                    }
                }

                this.clearWidgetSnapshot();
                gfg.utility.debugConsole("cartDrawerObserver: Snapshot restoration complete, restored:", restored);
                return restored;
            } catch (error) {
                gfg.utility.debugError("cartDrawerObserver: Error restoring snapshot", error);
                return false;
            }
        },

        /**
         * Clear the widget snapshot state
         */
        clearWidgetSnapshot: function() {
            this.state.widgetSnapshots = {};
            this.state.hasActiveSnapshot = false;
            if (this.state.snapshotTimeoutId) {
                clearTimeout(this.state.snapshotTimeoutId);
                this.state.snapshotTimeoutId = null;
            }
            gfg.utility.debugConsole("cartDrawerObserver: Snapshot cleared");
        }
    },

    settings: {}, //object from function
    selectors: {},
    cartInterval: "",
    productinterval: "",
    f: {
        bootstrap: function (settings) {
            try {
                // Prevent double execution
                if (gfg.state.bootstrapComplete) {
                    gfg.utility.debugConsole("Bootstrap already completed, skipping...");
                    return;
                }
                gfg.state.bootstrapComplete = true;

                gfg.f.initThemeCSS();
                gfg.f.globalListener(settings);
                gfg.f.executeCustomScriptOnLoadFn();
                gfg.f.handleShadowRootDetection();
            } catch (error) {
                gfg.utility.debugConsole("Error in bootstrap:", error);
            }
        },
        initThemeCSS: function (){
        },
        // Proxy function for cart state update - delegates to kiteV0Features or gfgFreeGift implementation
        _updateCartStateInProgress: false,
        _lastUpdateCartStateTime: 0,
        _UPDATE_CART_STATE_DEBOUNCE_MS: 500,
        updateCartState: async function(t, e, r, cartData) {
            // Re-entry guard: skip if already in progress
            if (gfg.f._updateCartStateInProgress) {
                gfg.utility.debugConsole("updateCartState: Skipped - already in progress");
                return;
            }

            // Debounce: skip if called too recently
            const now = Date.now();
            if (now - gfg.f._lastUpdateCartStateTime < gfg.f._UPDATE_CART_STATE_DEBOUNCE_MS) {
                gfg.utility.debugConsole("updateCartState: Skipped - debounced (" + (now - gfg.f._lastUpdateCartStateTime) + "ms since last call)");
                return;
            }

            gfg.f._updateCartStateInProgress = true;
            gfg.f._lastUpdateCartStateTime = now;

            try {
                // Take snapshot of widget content before cart refresh (preserves event listeners)
                if (gfg.cartDrawerObserver && typeof gfg.cartDrawerObserver.takeWidgetSnapshot === 'function') {
                    gfg.cartDrawerObserver.takeWidgetSnapshot();
                }

                const userCreatedAt = new Date(gfg?.settings?.merchantInfo?.createdAt);
                // }

                gfg.utility.debugConsole("updateCartState fn fired");
                // xxxxxxxxx------------------------handle via script first If exists - starts ----------------------------------xxxxxxxx
                // because it's been nightmare to turn on/off toggle, because of false cases of old side cart code checks

                const executeCustomScriptAfterFreeGiftAddition = gfg.settings.app?.executeCustomScriptAfterFreeGiftAddition;
                const cutoffDateForOldCustomers = new Date("2024-12-09");
                
                if(executeCustomScriptAfterFreeGiftAddition && 
                    executeCustomScriptAfterFreeGiftAddition.trim() !== "" && 
                    window.location.pathname !==  "/cart" &&
                    userCreatedAt > cutoffDateForOldCustomers
                ){
                    eval(executeCustomScriptAfterFreeGiftAddition);
                    return;
                }

                // xxxxxxxxx------------------------handle via script first If exists - ends ----------------------------------xxxxxxxx
                
                // xxxxxxxxx------------------------Side cart update new code 04/12/25 - starts ----------------------------------xxxxxxxx
                const DECEMBER_04_2025 = new Date("2025-12-04");
                const useDecember2025CartRefresh = gfg.settings.merchantInfo?.customSettings?.useDecember2025CartRefresh;
                let runNewCartRefreshCode = userCreatedAt > DECEMBER_04_2025 || useDecember2025CartRefresh === true;
                if(useDecember2025CartRefresh === false){
                    runNewCartRefreshCode = false;
                }
                if(runNewCartRefreshCode){
                    gfg.gfgCartRefreshHelper.init();
                    return;
                }
                // xxxxxxxxx------------------------Side cart update new code 04/12/25 - ends ----------------------------------xxxxxxxx

                // legacy cart refresh code
                if (window.gfgKiteV0Features && window.gfgKiteV0Features.updateCartState) {
                    return await window.gfgKiteV0Features.updateCartState(t, e, r, cartData);
                }

                // Fallback to new cart refresh helper
                if (gfg.gfgCartRefreshHelper && gfg.gfgCartRefreshHelper.init) {
                    return await gfg.gfgCartRefreshHelper.init();
                }
                // Ultimate fallback - reload page
                gfg.utility.debugConsole("No cart refresh method available, reloading page");
                window.location.reload();
            } catch (error) {
                gfg.utility.debugError("Error in updateCartState:", error);
                window.location.reload();
            } finally {
                gfg.f._updateCartStateInProgress = false;
            }
        },
        getSettings: async function () {
            //promise
            try {
                // Use localStorage flag to determine whether to fetch from S3 directly
                gfg.utility.debugConsole("fetching from s3 or r2 based on localStorage flag");
                const S3_FLAG_KEY = "gfg.useS3ForSettings";
                const useS3Directly = localStorage.getItem(S3_FLAG_KEY) === "true";
                if (useS3Directly) {
                  // If flag is set, always fetch from S3
                  try {
                    const success = await gfg.f.getSettingsFromS3();
                    return success;
                  } catch (errorS3) {
                    gfg.utility.debugError("error in getSettings s3 fetch when useS3Directly is true =>", errorS3); 
                    throw errorS3;
                  }
                } else {
                  // Otherwise, try R2 with timeout, fallback to S3 and set flag if S3 is used
                  try {
                    // Create a promise that rejects after 3 seconds
                    const timeoutPromise = new Promise((_, reject) => {
                      setTimeout(() => {
                        reject(new Error("R2 fetch timed out after 3 seconds"));
                      }, 3000);
                    });
        
                    // Race the R2 fetch against the timeout
                    const success = await Promise.race([ gfg.f.getSettingsFromR2(), timeoutPromise]);
                    gfg.utility.debugConsole("benchmark s3 start");
                    return success;
                  } catch (errorR2) {
                    gfg.utility.debugError("error in getSettings R2 fetch =>", errorR2);
                    try {
                      const success = await gfg.f.getSettingsFromS3();
                      // Set the flag so next time we fetch directly from S3
                      localStorage.setItem(S3_FLAG_KEY, "true");
                      return success;
                    } catch (errorS3) {
                      gfg.utility.debugError("error in getSettings s3 fetch =>", errorS3);
                      throw errorS3;
                    }
                  }
                }
              } catch (error) {
                gfg.utility.debugError("Unexpected error in fetching settings: ", error);
                throw error;
              }
        },
        getSettingsFromR2: async function () {
            const shopName = window.Shopify.shop;
            gfg.utility.debugConsole("GET setting from r2 of gfg fired");
            const url = `https://kite.giftkartcdn.app/tempCartSettings/${shopName}.json?nocache=${Date.now()}`;
            try {
              const response = await fetch(url);
              const data = await response.json();
              if (data.userData) {
                gfg.utility.debugConsole("success-data", data);
              } else {
                gfg.utility.debugError("Error inside getSettingsFromR2 -R2 returned invalid data. Trying S3");
                const dataFromS3 = await gfg.f.getSettingsFromS3();
                return dataFromS3;
              }
              return data;
            } catch (error) {
              gfg.utility.debugError("Error inside getSettingsFromR2. Trying S3", error);
              const dataFromS3 = await gfg.f.getSettingsFromS3();
              return dataFromS3;
            }
          },
        getSettingsFromS3: async function () {
            try {
                //promise
                let shopName = window.Shopify.shop
                gfg.utility.debugConsole("GET setting of giftlab pro fired")
                return new Promise(function (resolve, reject) {
                    fetch(`https://free-gift-app7.s3.us-east-2.amazonaws.com/tempCartSettings/${shopName}.json?nocache=${(new Date()).getTime()}`,{
                        method: 'GET',
                        }).then(
                            response => response.json() // if the response is a JSON object
                        ).then(
                            success => {
                                if(success.responseCode == 200){
                                    gfg.utility.debugConsole("success-data", success);
                                }
                                resolve(success);
                            }
                        ).catch(error => {
                            gfg.utility.debugConsole(error) // Handle the error response object
                            reject(error)
                            })
                        })
            } catch (error) {
                gfg.utility.debugConsole("Error in getSettingsFromS3:", error);
            }
        },

        setSettings: function(tmpCartSettings){
            try {
                var cart_settings = {
                SERVER_URL: tmpCartSettings.SERVER_URL,
                app: {
                    disableApp: tmpCartSettings.userData.customSettings.disableApp || false,
                    disableSideCart: tmpCartSettings.userData.customSettings.disableSideCart || false,
                    refreshProductPageOnGiftWrap: tmpCartSettings.userData.customSettings.refreshProductPageOnGiftWrap || false,
                    addToCartBtnSelectors: tmpCartSettings.userData.customSettings.addToCartBtnSelectors || DEFAULT_addToCartBtnSelectorsApp7Ext,
                    checkoutBtnSelectors: tmpCartSettings.userData.customSettings.checkoutBtnSelectors || DEFAULT_checkoutBtnSelectorsApp7Ext,
                    sideCartCheckoutBtnSelectors: tmpCartSettings.userData.customSettings.sideCartCheckoutBtnSelectors || DEFAULT_checkoutBtnSelectorsApp7Ext,
                    overWriteCheckoutBtn: tmpCartSettings.userData.customSettings.overWriteCheckoutBtn || false,
                    quantityBtnSelectors: tmpCartSettings.userData.customSettings.quantityBtnSelectors || DEFAULT_quantityBtnSelectorsApp7Ext,
                    sideCartSelectors: tmpCartSettings.userData.customSettings.sideCartSelectors || DEFAULT_sideCartSelectorsApp7Ext,
                    isCartIntegrationEnabled: tmpCartSettings.userData.customSettings.isCartIntegrationEnabled || false,
                    cartItemSelectors: tmpCartSettings.userData.customSettings.cartItemSelectors || DEFAULT_cartItemSelectorApp7Ext,
                    cartItemRemoveParentSelectors: tmpCartSettings.userData.customSettings.cartItemRemoveParentSelectors || DEFAULT_cartItemRemoveParentSelectorApp7Ext,
                    cartItemRemoveSelectors: tmpCartSettings.userData.customSettings.cartItemRemoveSelectors || DEFAULT_cartItemRemoveSelectorApp7Ext,
                    cartItemQuantityBtnSelectors: tmpCartSettings.userData.customSettings.cartItemQuantityBtnSelectors || DEFAULT_cartItemQuantityBtnSelectorsApp7Ext,
                    customCartIntegrationScript: tmpCartSettings.userData.customSettings.customCartIntegrationScript || null,
                    activeVariantCodes: tmpCartSettings.userData.customSettings.activeVariantCodes || "123456789",
                    showBranding : tmpCartSettings.userData.customSettings.showBranding,
                    buyNowBtn: tmpCartSettings.userData.customSettings.buyNowBtn || DEFAULT_buyNowBtnApp7Ext,
                    customStyle: tmpCartSettings.userData.customSettings.customStyle || null,
                    enablingApiFromSetInterval: tmpCartSettings.userData.customSettings.enablingApiFromSetInterval || false,
                    isMultipleFreeGiftAllowed:  tmpCartSettings.userData.customSettings.isMultipleFreeGiftAllowed || false,
                    addAfterAddTocartBtn: tmpCartSettings.userData.customSettings.addAfterAddTocartBtn || false,
                    addAftercheckoutBtn: tmpCartSettings.userData.customSettings.addAftercheckoutBtn || false,
                    // sideCartSectionId = "cart-drawer"
                    sideCartSectionId: tmpCartSettings.userData.customSettings.sideCartSectionId || "cart-drawer",
                    sideCartSectionSelector:  tmpCartSettings.userData.customSettings.sideCartSectionSelector || null,
                    // cartPageItemsId = "cart-items"
                    cartPageItemsSectionId :  tmpCartSettings.userData.customSettings.cartPageItemsSectionId  || tmpCartSettings.userData.customSettings.cartPageItemsId || "cart-items",
                    cartPageItemsSelector: tmpCartSettings.userData.customSettings.cartPageItemsSelector || ".cart__row",
                    disableApiCallListen: tmpCartSettings.userData.customSettings.disableApiCallListen || false,
                    executeScriptAfterAddToCart: tmpCartSettings.userData.customSettings.executeScriptAfterAddToCart || "",

                    executeCustomScriptAfterFreeGiftAddition: tmpCartSettings.userData.customSettings.executeCustomScriptAfterFreeGiftAddition || "",
                    executeCustomScriptAfterDynamicBogoAddition: tmpCartSettings.userData.customSettings.executeCustomScriptAfterDynamicBogoAddition || "",
                    executeCustomScriptAfterBogoAddition : tmpCartSettings.userData.customSettings.executeCustomScriptAfterBogoAddition || "",
                    redirectToCartAfterBogoAddition : tmpCartSettings.userData.customSettings?.redirectToCartAfterBogoAddition || null,
                    redirectToCheckoutAfterBogoAddition: tmpCartSettings.userData.customSettings?.redirectToCheckoutAfterBogoAddition || null,
                    executeCustomScriptOnLoad : tmpCartSettings.userData.customSettings.executeCustomScriptOnLoad || null,
                    productHandlesAreTranslated: tmpCartSettings.userData?.customSettings?.productHandlesAreTranslated ? tmpCartSettings.userData.customSettings.productHandlesAreTranslated : false,
                    isWidgetAccordionExpandedByDefault_FREE_GIFT: tmpCartSettings.userData?.customSettings?.isWidgetAccordionExpandedByDefault_FREE_GIFT ? tmpCartSettings.userData.customSettings.isWidgetAccordionExpandedByDefault_FREE_GIFT : false,
                    skipDefaultSideCartCheck: tmpCartSettings.userData?.customSettings?.skipDefaultSideCartCheck ? tmpCartSettings.userData.customSettings.skipDefaultSideCartCheck : false,
                    isRegionalLocaleUrlRequiredForHref: tmpCartSettings.userData?.customSettings?.isRegionalLocaleUrlRequiredForHref ? tmpCartSettings.userData.customSettings.isRegionalLocaleUrlRequiredForHref : false,
                    hideAccordionOnClaim_FREE_GIFT: tmpCartSettings.userData?.customSettings?.hideAccordionOnClaim_FREE_GIFT ? tmpCartSettings.userData.customSettings.hideAccordionOnClaim_FREE_GIFT : false,
                    global_afterAddToCartScript: tmpCartSettings.userData?.customSettings?.global_afterAddToCartScript ? tmpCartSettings.userData.customSettings.global_afterAddToCartScript : "",
                    AddMultipleFreeGiftsInOneAPICall: tmpCartSettings.userData?.customSettings?.AddMultipleFreeGiftsInOneAPICall ? tmpCartSettings.userData.customSettings.AddMultipleFreeGiftsInOneAPICall : false,
                    freeGiftSideCartSelector: tmpCartSettings.userData?.customSettings?.freeGiftSideCartSelector || null,
                    freeGiftSideCartWrapperAboveSelector: tmpCartSettings.userData?.customSettings?.freeGiftSideCartWrapperAboveSelector === false ? false : true,
                    volumeDiscountSideCartSelector: tmpCartSettings.userData?.customSettings?.volumeDiscountSideCartSelector || null,
                    volumeDiscountSideCartWrapperAboveSelector: tmpCartSettings.userData?.customSettings?.volumeDiscountSideCartWrapperAboveSelector === false ? false : true,
                    unifiedSideCartSelector: tmpCartSettings.userData?.customSettings?.unifiedSideCartSelector || null,
                    unifiedSideCartWrapperAboveSelector: tmpCartSettings.userData?.customSettings?.unifiedSideCartWrapperAboveSelector === false ? false : true,
                    customDiscountSideCartSelector: tmpCartSettings.userData?.customSettings?.customDiscountSideCartSelector || null,
                    customDiscountSideCartWrapperAboveSelector: tmpCartSettings.userData?.customSettings?.customDiscountSideCartWrapperAboveSelector === false ? false : true,
                    shippingDiscountSideCartSelector: tmpCartSettings.userData?.customSettings?.shippingDiscountSideCartSelector || null,
                    shippingDiscountSideCartWrapperAboveSelector: tmpCartSettings.userData?.customSettings?.shippingDiscountSideCartWrapperAboveSelector === false ? false : true,
                    consolidatedProgressBarSideCartSelector: tmpCartSettings.userData?.customSettings?.consolidatedProgressBarSideCartSelector || null,
                    consolidatedProgressBarSideCartWrapperAboveSelector: tmpCartSettings.userData?.customSettings?.consolidatedProgressBarSideCartWrapperAboveSelector === false ? false : true,
                    fireNewSideCartRefreshCodeFirst: tmpCartSettings.userData?.customSettings?.fireNewSideCartRefreshCodeFirst ? tmpCartSettings.userData.customSettings.fireNewSideCartRefreshCodeFirst : false,
                    considerRequestListenerData: tmpCartSettings.userData?.customSettings?.considerRequestListenerData ? tmpCartSettings.userData.customSettings.considerRequestListenerData : false,
                    showConsoleAdvertisement: tmpCartSettings.userData?.customSettings?.showConsoleAdvertisement !== false ? true : false,
                    fetchDataForFirstRenderInFreeGiftOnCartPage: tmpCartSettings.userData?.customSettings?.fetchDataForFirstRenderInFreeGiftOnCartPage ? tmpCartSettings.userData.customSettings.fetchDataForFirstRenderInFreeGiftOnCartPage : false,
                    isKiteUniqueIdRequired: tmpCartSettings.userData?.customSettings?.isKiteUniqueIdRequired ? tmpCartSettings.userData.customSettings.isKiteUniqueIdRequired : false,
                    enableFreeGiftWidgetPagination: tmpCartSettings.userData?.customSettings?.enableFreeGiftWidgetPagination ? tmpCartSettings.userData.customSettings.enableFreeGiftWidgetPagination : false,
                    metafieldNameSpaceAndKeys: tmpCartSettings.userData?.customSettings?.metafieldNameSpaceAndKeys ? tmpCartSettings.userData.customSettings.metafieldNameSpaceAndKeys : [],
                    useListenForXmlHttpApiCallsV2: tmpCartSettings.userData?.customSettings?.useListenForXmlHttpApiCallsV2 ? tmpCartSettings.userData.customSettings.useListenForXmlHttpApiCallsV2 : false,
                    delayInCallChecksAfterApiCalls: tmpCartSettings.userData?.customSettings?.delayInCallChecksAfterApiCalls ? tmpCartSettings.userData.customSettings.delayInCallChecksAfterApiCalls : false,
                    enablePerformanceObserver: tmpCartSettings.userData?.customSettings?.enablePerformanceObserver ? tmpCartSettings.userData.customSettings.enablePerformanceObserver : false,
                    collectionsFetchLimit: tmpCartSettings.userData?.customSettings?.collectionsFetchLimit || 250,
                    runShadowRootDetection: tmpCartSettings.userData?.customSettings?.runShadowRootDetection ? true : false,
                    shadowRootSelector: tmpCartSettings.userData?.customSettings?.shadowRootSelector || null,
                   },
                merchantInfo: tmpCartSettings.userData,
                languageData: tmpCartSettings.languageData || {},
                freeGifts: gfg.f.freeGiftDataTransformation(tmpCartSettings.promotionCampaigns),
                freeGiftsV2: tmpCartSettings.freeGiftV2Campaigns,
                discounts: tmpCartSettings.discounts,
                urlSearchString: window.location.search ? window.location.search : "",
                boGoFeature: tmpCartSettings.boGo,
                shippingDiscount: tmpCartSettings.shippingDiscount,
                customDiscount: tmpCartSettings.customDiscount,
                unifiedWidgets: tmpCartSettings.unifiedWidget,
                consolidatedCustomDiscount: tmpCartSettings.consolidatedCustomDiscount,
                consolidatedCombinedDiscount: tmpCartSettings.consolidatedCombinedDiscount
            }
            // cart_settings.freeGifts[0].configuration.addtionalFields =  {
            //     claimText: "Claim",
            //     claimedText: "Claimed",
            //     addingText:"Adding",
            //     alreadyClaimedText:"Note: Only one gift can be claimed at a time!",
			// 	claimedCartTitle:"Congratulations! Free Gift Won!",
            //     claimedCartSubtitle:"Gift Added to Bag"
            // }
            // let drivedSettings = gfg.f.drivedSettings(tmpCartSettings)
                gfg.settings = cart_settings;
                gfg.utility.debugConsole("settings assigned")
            } catch (error) {
                gfg.utility.debugError("Error in setSettings:", error);
            }
        },

        updateSettingsBasedOnLanguage: function(){

            try {
                
                const currentLocale = gfg.utility.getLocale();
    
                // handle MultiLanguage for Free Gift
                if(gfg.settings.freeGifts && gfg.settings.freeGifts.length > 0){

                    const allFreeGiftCampaigns = gfg.settings.freeGifts || [];

                    for(let i=0; i<allFreeGiftCampaigns.length; i++){

                        const freeGiftCampaign = allFreeGiftCampaigns[i];
                        const multiLanguageConfiguration = freeGiftCampaign?.MultiLanguageConfiguration;
                        const tierConfig = freeGiftCampaign?.configuration?.tierConfig;


                        if(multiLanguageConfiguration){
                            const configObj = multiLanguageConfiguration[currentLocale] || multiLanguageConfiguration['en'];
                            if(configObj){
                                configObj.tierConfig = tierConfig;
                                freeGiftCampaign.configuration = configObj;
                            }
                        }
                        for(let j=0; j<tierConfig?.length; j++){
                            if(currentLocale in tierConfig[j]){
                                freeGiftCampaign.configuration.tierConfig[j]['conditionNotMet'] = tierConfig[j][currentLocale];
                            }
                        }
                    }
                }
    
                // handle MultiLanguage for Discounts
    
                if(gfg.settings.discounts && gfg.settings.discounts.length > 0){
                    const discounts = gfg.settings.discounts;
                    for(let i=0; i<discounts.length; i++){
    
                        // handle For product page widget
                        if(discounts[i]?.productPageWidgetMultiLanguageConfiguration?.[currentLocale]){
    
                            let configObj = discounts[i].productPageWidgetMultiLanguageConfiguration[currentLocale] || {};
    
                            configObj = {
                            ...discounts[i].configuration,
                            ...configObj,
                            };
    
                            gfg.settings.discounts[i].configuration = configObj;
                        }
    
                        // handle For cart page widget
    
                       if(currentLocale !=='en'){
                            const tierConfigArray = discounts[i]?.cartWidgetConfiguration?.tierConfig;
                            if(tierConfigArray?.length > 0){
                                for(let j=0; j<tierConfigArray.length; j++){
                                    if(currentLocale in tierConfigArray[j]){
                                        gfg.settings.discounts[i].cartWidgetConfiguration.tierConfig[j]['conditionNotMet'] = tierConfigArray[j][currentLocale];
                                    }
                                }
                            }
                       }

                       // handle pill text Multi lang for cart page widget
                       const cartPageWidgetTexts = discounts[i]?.cartWidgetConfiguration?.cartPageWidgetTexts;
                       const localeSpecificTexts = cartPageWidgetTexts?.[currentLocale];
                       if(cartPageWidgetTexts && localeSpecificTexts){
                          gfg.settings.discounts[i].cartWidgetConfiguration.cartPageWidgetTexts = localeSpecificTexts;
                        }


                    }
                }
            } catch (error) {
                gfg.utility.debugError("error in updateSettingsBasedOnLanguage", error);
            }

        },

        checkIfCartItemIsPartOfValidCollectionList : (cartItem, validCollectionList) => {
            try {
                //Extracts numeric id from the collection id "gid://shopify/Collection/1234567890" > "1234567890"
                const extractNumericId = (val) => {
                    if (!val) return null;
                    const str = String(val);
                    const match = str.match(/(\d+)$/);
                    return match ? match[1] : null;
                };

                const validNumericIds = validCollectionList.map(collection => {
                    if (typeof collection === 'string') return extractNumericId(collection);
                    return extractNumericId(collection.id || collection.collectionId);
                }).filter(Boolean);

                const shopName = window?.Shopify?.shop;
                const cachedData = JSON.parse(sessionStorage.getItem(`customFunctionProductData-${shopName}`)) || {};
                const productId = cartItem.product_id;
                const productData = cachedData[productId];

                if (productData?.collections) {
                    return productData.collections.some(collection => {
                        const cachedId = extractNumericId(collection.id);
                        return cachedId && validNumericIds.includes(cachedId);
                    });
                }
                return false;
            } catch (error) {
                gfg.utility.debugError("error in checkIfCartItemIsPartOfValidCollectionList fn", error);
                return false;
            }
        },

        drivedSettings: function(tmpCartSettings){
            try {
                let bundleLinkData = tmpCartSettings.bundleLinkData
                let bundleLinkProductIdMap = new Map()
                let bundleLinkProductHandleMap = new Map()
                for(let i=0; i<bundleLinkData.length; i++){
                    let bundleLink = bundleLinkData[i]
                    if(bundleLink.productsForBundleLink && bundleLink.productsForBundleLink.length && bundleLink.productsForBundleLink.length  > 0){
                        bundleLinkProductIdMap.set(parseInt(bundleLink.productsForBundleLink[0].productId),{productData:bundleLink.productsForBundleLink[0], bundleId: bundleLink.bundleId})
                        bundleLinkProductHandleMap.set(bundleLink.productsForBundleLink[0].handle,{productData:bundleLink.productsForBundleLink[0], bundleId: bundleLink.bundleId})
                    }
                }

                return {
                    bundleLinkProductIdMap: bundleLinkProductIdMap,
                    bundleLinkProductHandleMap: bundleLinkProductHandleMap,

                }
            } catch (error) {
                gfg.utility.debugConsole("Error in drivedSettings:", error); 
            }
        },
        setSelectors:  function(){
            try {
                let settings =  gfg.settings
                gfg.selectors = {
                    addToCart: settings.app.addToCartBtnSelectors,
                    checkoutBtn : settings.app.checkoutBtnSelectors,
                    sideCartCheckoutBtn: settings.app.sideCartCheckoutBtnSelectors,
                    sideCartSelectors: settings.app.sideCartSelectors,
                    buyNowBtn: settings.app.buyNowBtn,
                    cartForm: settings.app.cartForm,
                    productPageWrapperV2: '.gfgProductPageWrapperV2',
                    cartPageWrapperV2: '.gfgCartPageWrapperV2',
                    quantityBtnSelectors : settings.app.quantityBtnSelectors,
                    cartItemSelectors : settings.app.cartItemSelectors,
                    cartItemRemoveSelectors : settings.app.cartItemRemoveSelectors,
                    cartItemRemoveParentSelectors : settings.app.cartItemRemoveParentSelectors,
                    customCartIntegrationScript : settings.app.customCartIntegrationScript,
                    cartItemQuantityBtnSelectors : settings.app.cartItemQuantityBtnSelectors,
                }
            } catch (error) {
                gfg.utility.debugError("Error in setSelectors:", error);
            }
        },
        setCustomStyling: function (){
            try {
                let customStyle =  gfg.settings.app.customStyle
                if(customStyle){
                    var styleSheet = document.createElement("style")
                    styleSheet.innerText = customStyle
                    styleSheet.id="custom-css"
                    styleSheet.setAttribute("data-source-name","gfgFreeGift")
                    document.body.appendChild(styleSheet)

                }
            } catch (error) {
                gfg.utility.debugError("Error in setCustomStyling:", error);
            }
        },
        getPageType: function () {
            try {
                var pageType = "";
                if (window.location.pathname.includes("/cart") && !window.location.pathname.includes("/products")) {
                    pageType = "cart";
                } else if (window.location.pathname.includes("/products")) {
                    pageType = "product";
                } else if (window.location.pathname.includes("/collections")) {
                    pageType = "COLLECTION";
                } else if (window.location.pathname.includes("/")) {
                    pageType = "HOME";
                } else if ("undefined" != typeof Shopify && "undefined" != typeof Shopify.Checkout) {
                    pageType = "CHECKOUT";
                } else {
                    pageType = "PAGE_NOT_FOUND";
                }
                return pageType;
            } catch (error) {
                gfg.utility.debugError("Error in getPageType:", error);
            }
        },
        addPoweredByBlock: function () {
            try {
                const gfgPoweredByLabelBlock = document.createElement("div");
                gfgPoweredByLabelBlock.classList.add("gfgPoweredByLabelBlock");
                const htmlForPoweredByBlock = gfg.utility.renderPoweredByLabel();
                if (!htmlForPoweredByBlock) return;
                gfgPoweredByLabelBlock.appendChild(htmlForPoweredByBlock);
        
                const gfgPageWrappers = document.querySelectorAll(".gfgPageWrapper");
                gfgPageWrappers.forEach((element) => {
                    const isVolDiscountWrapperPresentIsEmpty =
                        element.querySelector(".gfgVolDiscountWrapper")?.children.length < 1;
                    const isGftFreeGiftWrapperPresentIsEmpty =
                        element.querySelector(".gftFreeGiftWrapper")?.children.length < 1;
                    const isGfgBogoWrapperIsEmpty =
                        element.querySelector(".gfgBogoWrapper")?.children.length < 1;
                    const isGfgBulkDiscountWidgetHTMLWrapperEmpty =
                        element.querySelector(".gfgBulkDiscountWidgetHTMLWrapper")?.children.length < 1 ||
                        element.querySelector(".gfgBulkDiscountWidgetHTML")?.children.length < 1;
                    const isGfgCountDiscountEmpty =
                        element.querySelector(".gfgCountDiscount")?.children.length < 1 ?? true;
                    const isTieredDiscountWrapperEmpty =
                        element.querySelector(".gfgThisIsTieredDiscountOnProductPage")?.children.length < 1 ?? true;
        
                    let volDiscountWrapperEmpty = isVolDiscountWrapperPresentIsEmpty;
                    if (isGfgBulkDiscountWidgetHTMLWrapperEmpty && isGfgCountDiscountEmpty) {
                        volDiscountWrapperEmpty = true;
                    }
                    if (!isTieredDiscountWrapperEmpty) {
                        volDiscountWrapperEmpty = false;
                    }
        
                    if (
                        volDiscountWrapperEmpty &&
                        isGftFreeGiftWrapperPresentIsEmpty &&
                        isGfgBulkDiscountWidgetHTMLWrapperEmpty &&
                        isGfgBogoWrapperIsEmpty
                    ) {
                        const existingBlock = element.querySelector(".gfgPoweredByLabelBlock");
                        if (existingBlock) existingBlock.remove();
                        return;
                    }
        
                    const existingPoweredByBlock = element.querySelector(".gfgPoweredByLabelBlock");
                    if (!existingPoweredByBlock) {
                        element.appendChild(gfgPoweredByLabelBlock.cloneNode(true));
                    } else {
                        existingPoweredByBlock.innerHTML = "";
                        existingPoweredByBlock.appendChild(gfgPoweredByLabelBlock.cloneNode(true));
                    }
                });
            } catch (error) {
                gfg.utility.debugConsole("Error in addPoweredByBlock:", error);
            }
        },        
        getProductPageHandle: function () {
            try {
                if ("product" === gfg.state.page_type && window.shopifyLiquidValuesApp7Ext && window.shopifyLiquidValuesApp7Ext.product.handle) {
                    // let pattern = /(?<=\\/products\\/)((?!\\?|\\$).)+/g
                    // if(window && window.location && window.location.href){
                    //     return window.location.href.match(pattern)[0]
                    // }
                    gfg.state.productPageHandle = shopifyLiquidValuesApp7Ext.product.handle
                    return shopifyLiquidValuesApp7Ext.product.handle
                }else if("product" === gfg.state.page_type && window.location.pathname.includes("/products/")){
                    const urlRef = Object.fromEntries(new URLSearchParams(window.location))

                    let productHandle = urlRef.pathname.split("/products/")[1];

                    if (productHandle && productHandle.includes("?")) {
                        productHandle = productHandle.split("?")[0];
                    }

                    gfg.state.productPageHandle = productHandle
                    return productHandle
                }
                return undefined
            } catch (error) {
                gfg.utility.debugError("Error in getProductPageHandle:", error);
            }
        },
        getProductPageId: function () {
            try {
                if(window.shopifyLiquidValuesApp7Ext && window.shopifyLiquidValuesApp7Ext.product.productId){
                    gfg.state.productId = shopifyLiquidValuesApp7Ext.product.productId;
                    return shopifyLiquidValuesApp7Ext.product.productId;
                }

                if (window?.meta && window?.meta?.product && window?.meta?.product?.id) {
                    gfg.state.productPageId = window?.meta?.product?.id
                    return window?.meta?.product?.id
                }

                return undefined;
            } catch (error) {
                gfg.utility.debugError("Error in getProductPageId:", error);
            }
        },
        getSelectedVariant: function () {
            try {
                if ("product" === gfg.state.page_type) {
    
                    let activeCodes = gfg.settings.app.activeVariantCodes;  
                      
                    if(activeCodes.indexOf("1") >= 0){
                        const params = Object.fromEntries(new URLSearchParams(location.search))
                        if(params && params.variant){
                            return params.variant
                        }
                    }
                   
                    if(activeCodes.indexOf("2") >= 0){
                        if (window?.ShopifyAnalytics && window?.ShopifyAnalytics?.meta && window?.ShopifyAnalytics?.meta?.selectedVariantId) {
                            for(let i = 0; i < window?.ShopifyAnalytics?.meta?.product?.variants?.length; i++){
                                    if(window?.ShopifyAnalytics?.meta?.product?.variants[i]?.id == window?.ShopifyAnalytics?.meta?.selectedVariantId){
                                    return window?.ShopifyAnalytics?.meta?.selectedVariantId
                                }
                            }
                        }
                    }
                    
                    if(activeCodes.indexOf("4") >= 0){
                        if (window?.shopifyLiquidValuesApp7Ext && shopifyLiquidValuesApp7Ext.selected_or_first_available_variant) {
                            return shopifyLiquidValuesApp7Ext.selected_or_first_available_variant.id
                        }
                    }
                    if(activeCodes.indexOf("3") >= 0){
                        if (document.querySelector('[name="id"]') && document.querySelector('[name="id"]').value) {
                            return document.querySelector('[name="id"]').value
                        }
                    }
    
                    return undefined
                }
                
            } catch (error) {
                gfg.utility.debugError("error in getSelectedVariant", error);
                return undefined;
            }
        },

        getProductQuantity: function () {
            try {
                if (document.querySelector('[name="quantity"]') && document.querySelector('[name="quantity"]').value) {
                    if(Number(document.querySelector('[name="quantity"]').value)){
                        return Number(document.querySelector('[name="quantity"]').value)
                    }else{
                        return 1
                    }       
                }else {
                    return 1
                }
            } catch (error) {
                gfg.utility.debugError("Error in getProductQuantity:", error);
            }
        },

        getElements: function (settings) {
            try {
                return {
                    addToCartBtn: document.querySelector(gfg.selectors.addToCart),
                    addToCartButtonCloned: undefined,
                    checkoutBtn: document.querySelectorAll(gfg.selectors.checkoutBtn),
                    cartForm: document.querySelectorAll(gfg.selectors.cartForm),
                    productPageWrapperV2: gfg.utility.getWrapperSkeleton("PRODUCT_PAGE"),
                    cartPageWrapperV2: gfg.utility.getWrapperSkeleton("CART_PAGE"),
                    buyNowBtn: document.querySelector(gfg.selectors.buyNowBtn),
                    quantityBtn: gfg.selectors.quantityBtnSelectors,
                    cartDrawer: document.querySelector(gfg.selectors.sideCartSelectors),
                }
            } catch (error) {
                gfg.utility.debugError("Error in getElements:", error);
            }
        },

        initialize: async function () {
            try {
                let tmpCartSettings;
                if(window && window?.kite_app_data && window?.kite_app_data?.userData) {
                    tmpCartSettings = window.kite_app_data
                } else {
                    tmpCartSettings = await gfg.f.getSettings();
                }
                gfg.utility.updateCache(window?.shopifyLiquidValuesApp7Ext?.cartData);
                gfg.f.consoleAdvertisement();
                gfg.f.setSettings(tmpCartSettings)
                gfg.f.updateSettingsBasedOnLanguage();
                gfg.f.setSelectors()
                gfg.f.applyImpFileCssStyling();
                gfg.f.setCustomStyling()
                gfg.state.page_type = gfg.f.getPageType();
                gfg.elements = gfg.f.getElements(gfg.settings);
                if ("" === gfg.state.page_type) return false;
                gfg.utility.setLanguageLocale();

                // All dependencies are already loaded at this point, bootstrap immediately
                return gfg.f.bootstrap(gfg.settings);
            } catch (error) {
                gfg.utility.debugError("Error in initialize:", error);
            }
        },
        globalListener : async function (settings) {
            gfg.f.revalidateCache();
            let isIntervalActive = false
            //if app is disabled reurn
            if(gfg.state && gfg.state.activeCampaignName == "EMPTY"){
                gfg.utility.getUrlRewardCampaignName()
            }
            if(gfg.state && gfg.state.activeCustomerData == "EMPTY"){
                await gfg.utility.setCustomerSpecificData();
                // check conditioin and update cart attribute
                gfg.utility.updateCartAttributeWithCustomerData();
            }
            try{
                if (settings.app.disableApp) {
                    return
                } else {
                    gfg.utility.debugConsole('inside else of global listener')
                   
                        if (gfg.settings.app.disableApiCallListen == false) {
                            try {
                                // NORMAL PATH: Existing listeners
                                if (!gfg.settings.app?.enablePerformanceObserver) {
                                    gfg.utility.listenForApiCalls(settings);
                                    if(gfg.settings.app?.useListenForXmlHttpApiCallsV2 === true){
                                        gfg.utility.listenForXmlHttpApiCallsV2(settings);
                                    } else {
                                        gfg.utility.listenForXmlHttpApiCalls(settings);
                                    }
                                } 
                                // RESCUE PATH: Only for interfered stores (manual flag)
                                else {
                                    gfg.utility.listenForCartChangesViaPerformance(settings);
                                }
                            } catch(error) {
                                gfg.utility.debugConsole("Error initializing listeners", error);
                            }
                        }
                        
    
                    gfg.utility.checkGfgDebugMode();
                    if ("product" === gfg.state.page_type) {
                        gfg.productPage.init(settings);
                    }
    
                    if (settings.app.disableSideCart) {
                        if ("cart" === gfg.state.page_type) {
                            gfg.cartPage.init(settings)
                        }
                    } else {
                        gfg.cartPage.init(settings)
    
                    }
                }
                
                let runProcessFreeGiftCount = 0;
                setInterval(async () => {
                    if (!isIntervalActive) {
                        // gfg.utility.debugConsole("gfg-globalListener-active")
    
                        isIntervalActive = true
                        // gfg.gfgVolDiscount.actions.handleQuantityUpdate();
                        if (gfg.gfgVolDiscount && !gfg.gfgVolDiscount._isStub) {
                            gfg.gfgVolDiscount.actions.listenQuantityUpdates();
                            gfg.gfgVolDiscount.f.listenVariantChangeForVolDiscountProductPage();
                        }
                        if(settings.app.enablingApiFromSetInterval || settings.app.disableApiCallListen){
                            // if (url.includes('app=gfgfreegift')) {
                            //     return ;
                            // }
                            // var cartData = undefined;
                            // if (cartData) {
                            //     gfg.state.cartData = cartData;
                            // } else {
                            //     gfg.state.cartData = await gfg.utility.getCart();
                            // }
                            // gfg.gfgFreeGift.f.checkForFreeGift(cartData)
                            await gfg.utility.callchecksAfterApiCalls()
                        }

                        await gfg.utility.syncRewardCampaignName();

                        let productPageWrapperInserted = false;
                        let cartPageWrapperInserted = false;

                        if ("product" === gfg.state.page_type && gfg.elements.addToCartBtn &&
                            document.querySelectorAll(gfg.selectors.productPageWrapperV2).length == 0) {
                                gfg.utility.debugConsole("productPage-insertWrapperIntoPage1")
                            gfg.productPage.f.insertWrapperIntoPage(settings)
                            productPageWrapperInserted = true;
                        }
    
                        let checkoutBtnEle = document.querySelectorAll(gfg.selectors.checkoutBtn)
    
                        // insert cartPage wrapper if cartPage is initialized 
                        if (checkoutBtnEle.length > 0 &&
                            document.querySelectorAll(gfg.selectors.cartPageWrapperV2).length == 0) {
                                gfg.utility.debugConsole("cartPage-insertWrapperIntoPage")
                            gfg.cartPage.f.insertWrapperIntoPage(settings);
                            cartPageWrapperInserted = true;
                        }

                        gfg.cartPage.f.insertSideCartWrappersIntoPage(settings);
                        // handle shipping discount reinitialization
                        if((productPageWrapperInserted || cartPageWrapperInserted) && gfg.state?.shouldInitShippingDiscountAgain && gfgCustomDiscount && gfgCustomDiscount.gfgShippingDiscountV2){
                            gfg.state.shouldInitShippingDiscountAgain = false;
                            gfgCustomDiscount.gfgShippingDiscountV2.init();
                        }

                        // handle unified widget(goal based) discount reinitialization

                        if((productPageWrapperInserted || cartPageWrapperInserted) && gfg.state?.shouldInitUnifiedDiscountAgain){
                            gfg.state.shouldInitUnifiedDiscountAgain = false;
                            if (gfg.gfgUnifiedWidget) {
                                gfg.gfgUnifiedWidget.init(gfg.settings , "PRODUCT_PAGE");
                                gfg.gfgUnifiedWidget.init(gfg.settings , "CART_PAGE");
                            }
                        }



                        

                        let _cartPageWrapper = document.querySelector(gfg.selectors.cartPageWrapperV2);
                       let isGftFreeGiftWrapperEmpty = _cartPageWrapper?.querySelector('.gftFreeGiftWrapper');

                        //runProcessFreeGiftCount
                        if(isGftFreeGiftWrapperEmpty?.hasChildNodes()  && checkoutBtnEle.length > 0 && runProcessFreeGiftCount == 0){
                        // if(isGftFreeGiftWrapperEmpty.length < 1 && checkoutBtnEle.length > 0 && runProcessFreeGiftCount == 0){
                            runProcessFreeGiftCount = 1;
                            gfg.utility.debugConsole("running process free gift")
                            gfg.utility.debugConsole("runProcessFreeGiftCount")
                            // await gfg.utility.callchecksAfterApiCalls()
                            // // await gfg.gfgFreeGift.f.processFreeGift();
                            // await gfg.gfgFreeGift.checkForFreeGift();
                            if (gfg.gfgFreeGift && !gfg.gfgFreeGift._isStub) await gfg.gfgFreeGift.f.checkForFreeGift();
                            // if (localStorage.getItem("runForceFully") == "true") {
                            //   setTimeout(async () => {
                            //     await gfg.gfgFreeGift.f.processFreeGift();
                            //   }, 1000);
                            // }
                          
                        }

                    
                        // Select the button
                        let gfgFreeGiftMsgRowButton = document.querySelectorAll(".gfgFreeGiftMsgRowButton");

                        if (gfgFreeGiftMsgRowButton && gfgFreeGiftMsgRowButton.length == 1 && gfg.state.gfgFreeGiftMsgRowButton === false) {
                            gfg.state.gfgFreeGiftMsgRowButton = truncate; // Assuming truncate is defined elsewhere
                            gfg.utility.debugConsole("gfgFreeGiftMsgRowButton click behavior");

                            // Add event listener for 'click' event
                            document.querySelector(".gfgFreeGiftMsgRowButton").addEventListener('click', function(e) {
                                gfg.utility.debugConsole("button clicked");

                                // Select the message row
                                let gfgFreeGiftMsg = document.querySelector(".gfgFreeGiftMsgRow");

                                // Check if the element exists and toggle its display style
                                if (gfgFreeGiftMsg) {
                                    gfgFreeGiftMsg.style.display = gfgFreeGiftMsg.style.display === "none" ? "block" : "none";
                                }
                            });
                        }

             
                        
                        isIntervalActive = false
    
                    }
                }, 1000)
            }catch(error){
                gfg.utility.debugError("globalListenerError" , error)
            }
        },
        executeCustomScriptOnLoadFn: function(){
            try {
                const customScript = gfg.settings.app.executeCustomScriptOnLoad;
                if(customScript){
                    eval(customScript);
                }
            } catch (error) {
                gfg.utility.debugError("error in executeCustomScriptOnLoadFn", error);
            }
        },
        checkIfVisitingFromCountryRequiredForFreeGift: function() {
            try {
                const allFreeGiftCampaigns = gfg.settings.freeGifts || [];

                for (let i = 0; i < allFreeGiftCampaigns.length; i++) {

                    const freeGiftData = allFreeGiftCampaigns[i];
                    const freeGiftEligibilityRules = freeGiftData?.conditionsData?.conditionsList || [];
            
                    for (let i = 0; i < freeGiftEligibilityRules.length; i++) {
                        const rule = freeGiftEligibilityRules[i];
                        if (rule?.ruleType === "countrySelects") {
                            return true;
                        }
                    }
                }
        
                return false;
            } catch (error) {
                gfg.utility.debugError("error in checkIfVisitingCountryRequiredForFreeGift fn", error);
            }
        },
        checkIfVisitingFromCountryRequiredForDiscount: function() {
            try {
                const discountData = gfg.settings.discounts;
        
                for (let i = 0; i < discountData.length; i++) {
                    const discount = discountData[i];
                    const discountEligibilityRules = discount?.conditionsData?.conditionsList || [];
        
                    for (let j = 0; j < discountEligibilityRules.length; j++) {
                        const rule = discountEligibilityRules[j];
                        if (rule?.ruleType === "countrySelects") {
                            return true;
                        }
                    }
                }
        
                return false;
            } catch (error) {
                gfg.utility.debugError("error in checkIfVisitingFromCountryRequiredForDiscount fn", error);
            }
        },
        checkIfVisitingFromCountryRequiredForUnifiedWidget: function(){
            try {
                const unifiedWidgetData = gfg.settings.unifiedWidgets || [];

                for(let i =0; i<unifiedWidgetData.length; i++){
                    const unifiedWidget = unifiedWidgetData[i];
                    const unifiedWidgetEligibilityRules = unifiedWidget?.customerRulesData;
                    const unifiedWidgetEligibilityRulesList = unifiedWidgetEligibilityRules?.rulesGlobalList[0]?.rulesList || [];

                    for(let j =0; j<unifiedWidgetEligibilityRulesList.length; j++){
                        const rule = unifiedWidgetEligibilityRulesList[j];
                        if(rule?.ruleType === "shippingCountry"){
                            return true;
                        }
                    }
                }
                
            } catch (error) {
                gfg.utility.debugError("error in checkIfVisitingFromCountryRequiredForUnifiedWidget fn", error);
            }
        },
        checkIfVisitingFromCountryRequired: function(){
            try {
                let isVisitingFromCountryRequired = false;
                const isVisitingFromCountryRequiredForFreeGift = gfg.f.checkIfVisitingFromCountryRequiredForFreeGift();
                let isVisitingFromCountryRequiredForDiscount; // for vol/tiered/buy x for y amt
                let isVisitingFromCountryRequiredForUnifiedWidget; // for unified widget

                // if free gift is not required to be shown based on country, then only check for discounts
                if(!isVisitingFromCountryRequiredForFreeGift){
                    isVisitingFromCountryRequiredForDiscount = gfg.f.checkIfVisitingFromCountryRequiredForDiscount();
                }

                if(!isVisitingFromCountryRequiredForFreeGift && !isVisitingFromCountryRequiredForDiscount){
                    isVisitingFromCountryRequiredForUnifiedWidget = gfg.f.checkIfVisitingFromCountryRequiredForUnifiedWidget();
                }
                
                // if either of the free gift or discount requires visiting from country, then set it to true
                if(isVisitingFromCountryRequiredForFreeGift || isVisitingFromCountryRequiredForDiscount || isVisitingFromCountryRequiredForUnifiedWidget){
                    isVisitingFromCountryRequired = true;
                }

                return isVisitingFromCountryRequired;

            } catch (error) {
                gfg.utility.debugError("error in checkIfVisitingFromCountryRequired fn", error);
            }
        },
        applyImpFileCssStyling: function() {
            try {
                const maxIntervalCount = 10;
                let counter = 0;
                const intervalId = setInterval(() => {
                    if (counter > maxIntervalCount) {
                        clearInterval(intervalId);
                        return;
                    }
                    counter++;
        
                    const slideCartAppSelector = document.querySelectorAll("#slidecarthq, .slidecarthq");
                    const condition1 = slideCartAppSelector.length > 1; // both selectors are present
                    const condition2 = window && !window?.location?.pathname?.includes("/cart");
        
                    if (!condition1 || !condition2) {
                        return;
                    }
        
                    const cssFilePath = 'https://free-gift-app7.s3.us-east-2.amazonaws.com/Storefront/freeGiftLogicv1Imp.css';
        
                    fetch(cssFilePath)
                        .then(response => response.text())
                        .then(cssContent => {
                            const styleTag = document.createElement('style');
                            styleTag.type = 'text/css';
                            styleTag.id = "freeGiftLogicv1Imp";
                            styleTag.setAttribute('data-source-name',"gfgFreeGift");
        
                            if (styleTag.styleSheet) {
                                styleTag.styleSheet.cssText = cssContent;
                            } else {
                                styleTag.appendChild(document.createTextNode(cssContent));
                            }
        
                            document.head.appendChild(styleTag);
                            gfg.f.setCustomStyling();
                            clearInterval(intervalId); // clear interval once css is successfully applied
                        })
                        .catch(error => {
                            gfg.utility.debugError("error in applyImpFileCssStyling fn", error);
                        });
        
                }, 1000);
            } catch (error) {
                gfg.utility.debugError("error in applyImpFileCssStyling fn", error);
            }
        },
        cutOffshouldInitAgainConditionsForUnifiedAndShipping: function () {
         try {

           /*we are using this function to eliminate that shouldInitAgain conditions we added earlier to solve side cart widget behaviour problem in
           shipping discount and unified widget for 3-4 customers. This is being called infinitely sometimes for customers which is a bad practice.*/

           /* As we haved added side cart selectors features, I guess that should solve this problem for new customers */ 

           const oldCustomerCutoffDate = new Date("2024-11-27");
           const userCreatedAt = new Date(gfg.settings.merchantInfo.createdAt);
           if(userCreatedAt > oldCustomerCutoffDate){
            return true;
           }
           return false;
         } catch (error) {
            gfg.utility.debugConsole("error in cutOffshouldInitAgainConditionsForUnifiedAndShipping:", error);
            return false;
         }

        },
        consoleAdvertisement: function() {
            try {
                setTimeout(()=>{
    
                    const shouldShowAdvertisement = gfg?.settings?.app?.showConsoleAdvertisement;
                    if(shouldShowAdvertisement){
                        let appLink = "https://r.skailama.com/kite-install-CM/";
                        let appMessage = "Kite - All-in-one discount & free gift app:";
                        let textStyle = "font-weight: 600; color: black; font-size: 14px;";
                        let linkStyle = "font-weight: normal; color: #007BFF; text-decoration: underline; cursor: pointer; font-size: 14px;";
                        
                        console.log(`%c${appMessage} %c${appLink}`, textStyle, linkStyle);
                        
                    }
                },4000);
                
            } catch (error) {
                gfg.utility.debugConsole("error in consoleAdvertisement", error);
            }
        },
        freeGiftDataTransformation: function (campaigns = []) {

            const transformedCampaigns = JSON.parse(JSON.stringify(campaigns));

            try {
                for (let i = 0; i < transformedCampaigns.length; i++) {
                    const campaignData = transformedCampaigns[i];
                    const rulesList = campaignData.rulesList;
        
                    for (let j = 0; j < rulesList.length; j++) {
                        const ruleData = rulesList[j];
                        ruleData.ruleId = ruleData.ruleType + `_${j}`;
                    }
                }
            } catch (error) {
                gfg.utility.debugError("error in freeGiftDataTransformation", error);
            } finally{
                return transformedCampaigns;
            }
        },
        revalidateCache: function(){
            try{
              const prevLocale = sessionStorage.getItem("gfgPrevLocale") ?? null;
              const prevActiveCurrency = sessionStorage.getItem("gfgPrevActiveCurrency") ?? null;
              const currLocale = window.Shopify.locale;
              const currActiveCurrency = window.Shopify.currency.active;
      
              const hasLocaleChanged = prevLocale && prevLocale !== currLocale;
              const hasCurrencyChanged = prevActiveCurrency && prevActiveCurrency !== currActiveCurrency;
      
              if (hasLocaleChanged || hasCurrencyChanged) {
                sessionStorage.removeItem('gfgFreeGiftsShopifyData');
                if (gfg.gfgFreeGift && !gfg.gfgFreeGift._isStub) gfg.gfgFreeGift.f.gfgGetAllFreeGiftData();
              }
      
              sessionStorage.setItem("gfgPrevLocale", currLocale);
              sessionStorage.setItem("gfgPrevActiveCurrency", currActiveCurrency); 
            }catch(err){
              gfg.utility.debugError("error in revalidateCache => ", err);
            }
        },
        handleShadowRootDetection: function(){
            try {
                
                const runShadowRootDetection = gfg.settings.app.runShadowRootDetection;
                

                if(runShadowRootDetection){

                    let attemptCount = 0;
                    const maxAttempts = 10;
                    const intervalTime = 1000; // 1 second interval

                    const detectShadowRoot = function(){
                        try {
                            let sideCart;
                            if(gfg.settings.app.shadowRootSelector){
                                sideCart = document.querySelector(gfg.settings.app.shadowRootSelector);
                            }
                            else{
                                sideCart = document.querySelector(SHADOW_ROOTS_SELECTORS);
                            }

                            if(sideCart && sideCart.shadowRoot){
                                gfg.state.shadowRoot.isDetected = true;
                                gfg.state.shadowRoot.reference = sideCart.shadowRoot; // shadowRootElement is the shadow root element of the side cart
                                gfg.utility.injectCssIntoShadowRoot(gfg.state.shadowRoot.reference);
                                clearInterval(shadowRootInterval);
                                gfg.utility.debugError("Shadow root detected on attempt " + (attemptCount + 1));
                                
                                // Process pending shadow root events for all queued campaigns
                                if(gfg.state.shadowRoot.pendingEventCampaignIndices && gfg.state.shadowRoot.pendingEventCampaignIndices.length > 0){
                                    gfg.state.shadowRoot.pendingEventCampaignIndices.forEach(function(campaignIndex){
                                        if (gfg.gfgFreeGift && !gfg.gfgFreeGift._isStub) gfg.gfgFreeGift.f.registerShadowRootEvents(campaignIndex);
                                    });
                                    // Clear the queue after processing
                                    gfg.state.shadowRoot.pendingEventCampaignIndices = [];
                                }
                                
                                // Register BXGY global click listener on shadow root (for Dynamic BOGO)
                                if (gfgCustomDiscount?.gfgBXGY?.actions?.registerGlobalClickListener) {
                                    gfgCustomDiscount.gfgBXGY.actions.registerGlobalClickListener();
                                }
                                
                                return true;
                            }
                            return false;
                        } catch (error) {
                            gfg.utility.debugError("error in detectShadowRoot attempt", error);
                            return false;
                        }
                    };

                    // First immediate check
                    if(detectShadowRoot()){
                        return;
                    }

                    // Set up interval to retry detection for side carts that take time to load
                    const shadowRootInterval = setInterval(function(){
                        attemptCount++;
                        
                        if(detectShadowRoot() || attemptCount >= maxAttempts){
                            clearInterval(shadowRootInterval);
                            if(attemptCount >= maxAttempts && !gfg.state.shadowRoot.isDetected){
                                gfg.utility.debugError("Shadow root detection stopped after " + maxAttempts + " attempts");
                            }
                        }
                    }, intervalTime);
                }
            } catch (error) {
                gfg.utility.debugError("error in handleShadowRootDetection", error);
            }
        }
                
        
    },
    utility: {
        convertCollectionIdToGidFormat: function(collectionId) {
            return `gid://shopify/Collection/${collectionId}`;
        },
        convertCollectionIdToGidFormat: function(collectionId) {
            return `gid://shopify/Collection/${collectionId}`;
        },
        hasCartChanged: function(oldCart, newCart) {
            try {
                // If either is null/undefined, consider it changed
                if (!oldCart || !newCart) return true;
                
                // Quick checks for obvious changes
                if (oldCart.item_count !== newCart.item_count) return true;
                if (oldCart.total_price !== newCart.total_price) return true;
                if ((oldCart.items || []).length !== (newCart.items || []).length) return true;
                
                // Deep check: compare each item's variant_id and quantity
                const oldItemMap = new Map();
                (oldCart.items || []).forEach(item => {
                    oldItemMap.set(item.variant_id, item.quantity);
                });
                
                for (const item of (newCart.items || [])) {
                    const oldQty = oldItemMap.get(item.variant_id) || 0;
                    if (oldQty !== item.quantity) return true;
                }
                
                return false;
            } catch (error) {
                gfg.utility.debugError("Error in hasCartChanged:", error);
                return true; // On error, assume cart changed to be safe
            }
        },
        getLocale: function () {
            try {
                if (window.Shopify && window.Shopify.locale) {
                    return window.Shopify.locale
                }else{
                    return "en"
                } 
            } catch (error) {
                gfg.utility.debugError("Error in getLocale:", error); 
            }
        },
        setLanguageLocale: function () {
            try {
                let locale = gfg.utility.getLocale()
                
                if(gfg.settings.languageData && gfg.settings.languageData.languageMode == "SINGLE"){
                    locale = "en"
                }

                if(!gfg.settings.languageData[locale]){
                    locale = "en"
                }
                gfg.settings.languageData = gfg.settings.languageData[locale]
            } catch (error) {
                gfg.utility.debugError("Error in setLanguageLocale:", error);
            }
        },
        getUrlRewardCampaignName: function () {

            try {
                
                let activeCampaignName = "";
            
                if(gfg.state.activeCampaignName != "EMPTY"){
                    return gfg.state.activeCampaignName;
                }
                
            
               let campaginString = gfg.settings?.urlSearchString.split("kite_campaign=")
               if(campaginString && campaginString.length > 1){
                    let campaignName = campaginString[1].split("&")[0]
                    if(campaignName){
                        gfg.state.activeCampaignName = campaignName;
                        sessionStorage.setItem("kite_campaign", campaignName)
                        return campaignName
                    }else{
                        return ""
                    }
               }
    
                if(sessionStorage.getItem("kite_campaign")){
                    activeCampaignName = sessionStorage.getItem("kite_campaign")
                    gfg.state.activeCampaignName = activeCampaignName;
                    return activeCampaignName;
                }
    
                return "";
            } catch (error) {
                gfg.utility.debugError("Error in getUrlRewardCampaignName:", error);
            }

        },
        syncRewardCampaignName: async function (){
            try {
                
                if (gfg.state.activeCampaignName != "" && gfg.state.activeCampaignName != "EMPTY") {
                  let urlRewardCampaignName = gfg.state.activeCampaignName;
                //   let rewardCampaign = gfg.settings.discounts.find((campaign) => {
                //     let campaignData = JSON.parse(campaign);
                //     return campaignData.urlBasedCampaign && campaignData.urlBasedCampaign.value && campaignData.urlBasedCampaign.value == urlRewardCampaignName;
                //   });
                 //   gfg.settings.rewardCampaigns = rewardCampaign;
    
                  if (!gfg.state.setCampaignUrlattribute) {
                    gfg.state.setCampaignUrlattribute = true;
                    await gfg.utility.updateCart({ attributes: { kite_campaign: gfg.state.activeCampaignName } });
                  }
                }
                return;
            } catch (error) {
                gfg.utility.debugError("Error in syncRewardCampaignName:", error);
            }
        },
        getDate: function (date) {
            let d = new Date(date);
            let month = "" + (d.getMonth() + 1);
            let day = "" + d.getDate();
            let year = d.getFullYear();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            return [year, month, day].join("-");
        },
        addToCart: async function (data) {

            try {
                const url = "/cart/add.js?app=gfgfreegift";
                const options = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                };
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                return true;
            } catch (error) {
                gfg.utility.debugError("error in gfg-utility-addToCart fn=>", error);
                return false
            }
        },
        updateCart: async function (data) {
            try {
                const url = "/cart/update.js?app=gfgfreegift";
                const options = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                };
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                return result;
            } catch (error) {
                gfg.utility.debugError("error in gfg-utility-updateCart fn=>", error);
                return false
            }
        },
        changeCart: async function (data) {
            try {
                const url = "/cart/change.js?app=gfgfreegift";
                const options = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                };
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                return true
            } catch (error) {
                gfg.utility.debugError("error in gfg-utility-changeCart fn=>", error);
                return false
            }
        },
        getProductDataV2: function (productName) {
            try {
                let languageValue = window?.Shopify?.routes?.root ? window.Shopify.routes.root : "/";

                return new Promise(async(res, rej) => {

                    if(gfg.settings.app?.productHandlesAreTranslated){
                        const productTranslateHandle = await gfg.utility.getProductTranslatedHandle(productName, languageValue);
                        if(productTranslateHandle && productTranslateHandle != ""){
                            productName = productTranslateHandle;
                        }
                    }

                    // fetch product data

                    fetch(languageValue +  "products/" + productName + ".js?app=gfgfreegift")
                    .then(response => response.json())
                    .then(product => {
                        gfg.utility.debugConsole("success-productName: ", productName)
                        res(product)
                    })
                    .catch(error => {
                        gfg.utility.debugConsole("fail-productName: ", productName);
                        res(false);
                    })
                });
            } catch (error) {
                gfg.utility.debugError("error in gfg-utility-getProductDataV2 fn=>", error);
                return false
            }
        },
        addToCartV2: function (data) {
            try {
                const isKiteUniqueIdRequired = gfg.settings.app?.isKiteUniqueIdRequired;

                if(isKiteUniqueIdRequired){
                    const itemsWithUniqueIds = gfg.utility.appendKiteUniqueIdToItemsProperty(data.items);
                    data = {items: itemsWithUniqueIds};
                }

                return new Promise((res, rej) => {
                    
                    fetch("/cart/add.js?app=gfgfreegift", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data)
                    }).then(response => {
                        gfg.utility.debugConsole("success-/cart/add.js");
                        res(true);
                    }).catch(error => {
                        gfg.utility.debugConsole("fail-/cart/add.js");
                        res(false);
                    })
                })
                return result;
            } catch (error) {
                gfg.utility.debugError("error in gfg-utility-addToCartV2 fn=>", error);
                return false
            }
        },
        clearCart: function (data) {
            try {
                return new Promise(async(res, rej) => {
                    
                    fetch("/cart/clear.js?app=gfgfreegift", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data)
                    }).then(response => {
                        gfg.utility.debugConsole("success-/cart/clear.js");
                        res(true);
                    }).catch(error => {
                        gfg.utility.debugConsole("fail-/cart/clear.js");
                        res(false);
                    })
                })
                return result;
            } catch (error) {
                gfg.utility.debugConsole("error in gfg-utility-clearCart fn=>", error);
                return false
            }
        },
        getCart: async function (data) {
            try {
                const url = "/cart.js?app=gfgfreegift";
                const response = await fetch(url);
                const result = await response.json();
                gfg.utility.refreshFreeGiftCartData(result)
                return result
            } catch (error) {
                gfg.utility.debugConsole("error in gfg-utility-getCart fn=>", error);
                return false
            }
        },
        
        isCartEmpty: function () {
            try {
                if (gfg.state.cartData && gfg.state.cartData.items.length <= 0) {
                    return true;
                    
                } else {
                    return false
                }
            } catch (error) {
                gfg.utility.debugConsole("Error in isCartEmpty:", error);
            }
        },
        
        cloneAddToCartBtn: function () {
        },
        renderLanguageValue: function (parent) {
            if (parent){
                return parent.value;
            }
         return;
        },  
        slider: {
            state: {
                slideIndex: 0,
            },
        },
        isMobileView: function () {
            try {
                if (window.innerWidth < 768) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                gfg.utility.debugConsole("Error in isMobileView:", error);
                return false;
            }
        },
        updateCart: async function (cartData) {
            try {
               
                const url = "/cart/update.js?app=gfgfreegift";
                const options = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(cartData)
                };
                const response = await fetch(url, options);
                const result = await response.json();
                gfg.utility.updateCache(result);
                return result;
            } catch (error) {
                gfg.utility.debugConsole("error in shopifyUtility.updateCart", error)
                // throw error
                return false
            }
        }, 
        getCurrencySymbol: function () {

            try {
                
                if (window && window.Shopify && window.Shopify.currency && window.Shopify.currency.active) {
                    // let symbol = gfg.settings.merchantInfo.multipleCurrenciesInfo[window.Shopify.currency.active]?.symbol || Shopify.currency.active;
                    let symbol = gfg.settings.merchantInfo.multipleCurrenciesInfo[window.Shopify.currency.active]?.symbol || CURRENCY_SYMBOLS[window.Shopify.currency.active] || Shopify.currency.active;
                    return symbol;
                }
            } catch (error) {
                gfg.utility.debugError("error in getCurrencySymbol", error);
            }

        },
        getActiveCurrencyRate : function(){

            try {
                
                let currencyRate = 1;
                if(window.Shopify && window.Shopify.currency && window.Shopify.currency.rate){
                    currencyRate = window.Shopify.currency.rate;
                }
                return currencyRate;
            } catch (error) {
                gfg.utility.debugError("error in getActiveCurrencyRate", error);
            }

        },
        getAmountInActiveCurrency: function (amount, useAbsoluteDiscount = false) {

            try {
                
                if(!amount || amount == "" || amount == null || amount == undefined) {
                    return 0;
                }
                if(window && window.Shopify && window.Shopify.currency && window.Shopify.currency.rate) {
                    let rate = window.Shopify.currency.rate;
                    if(rate == "1.0" || useAbsoluteDiscount) {
                        return amount;
                    }else{
                        return parseFloat(parseFloat(amount) * parseFloat(rate)).toFixed(2);
                    }
                }
            } catch (error) {
                gfg.utility.debugError("error in getAmountInActiveCurrency", error);
            }

        },
        checkIfBrandingShouldBeVisible: function (type) {
            try {
                const isVolDiscountWrapperEmpty = document.querySelector(".gfgVolDiscountWrapper")?.children.length < 1;
                const isFreeGiftWrapperEmpty = document.querySelector(".gftFreeGiftWrapper")?.children.length < 1;
                const isBulkDiscountWrapperEmpty = document.querySelector(".gfgBulkDiscountWidgetHTMLWrapper")?.children.length < 1;
                const isBogoWrapperEmpty = document.querySelector(".gfgBogoWrapper")?.children.length < 1;
        
                if (isVolDiscountWrapperEmpty && isFreeGiftWrapperEmpty && isBulkDiscountWrapperEmpty && isBogoWrapperEmpty) {
                    return false;
                }
        
                const merchantInfo = gfg.settings?.merchantInfo;
                if (!merchantInfo?.isSubscription || !merchantInfo?.isSubscription.name) {
                    return true;
                }
        
                if (
                    merchantInfo.isSubscription?.name?.includes("Free") &&
                    (!type || type !== "checkout")
                ) {
                    return true;
                }
        
                return false;
            } catch (err) {
                gfg.utility.debugConsole("Error in checkIfBrandingShouldBeVisible:", err);
                return true;
            }
        },        
        renderPoweredByLabel: function() {
            if (false && gfg.utility.checkIfBrandingShouldBeVisible()) {
                let brandingLink = "https://apps.shopify.com/kite-free-gift";
                const appInstalledDate = gfg?.settings?.merchantInfo?.createdAt;
                const startDate = new Date("2024-09-01");
                const endDate = new Date("2024-09-30");
                if (appInstalledDate && new Date(appInstalledDate) >= startDate && new Date(appInstalledDate) <= endDate) {
                    brandingLink = "https://www.skailama.com/app/kite";
                }
                const gfgPoweredByLabel = document.createElement("a");
                gfgPoweredByLabel.href = brandingLink;
                gfgPoweredByLabel.target = "_blank";
                gfgPoweredByLabel.style.cssText = "text-align:end; display:block; color:black; font-size:14px; text-decoration:none;";
                gfgPoweredByLabel.textContent = "✨Powered By Kite✨";
                return gfgPoweredByLabel;
            } else {
                return null;
            }
        },
        formatPrice: function (price) {
            try {
                if (window && window.Shopify && window.Shopify.currency && window.Shopify.currency.active) {
                    //find the currency symbol from  gfg.settings.merchantInfo.multipleCurrencies[window.Shopify.currency.active] get the symbol
                    let currencySymbol = gfg.utility.getCurrencySymbol();
                    return currencySymbol + "" + parseFloat(price / 100).toFixed(2)
                }
            } catch(err) {
                gfg.utility.debugError("error in utility.formatPrice", err);
            }
        },
        formatPriceWithoutSymbol: function (price) {

            try {
                
                if (window && window.Shopify && window.Shopify.currency && window.Shopify.currency.active) {
                    //find the currency symbol from  gbb.settings.merchantInfo.multipleCurrencies[window.Shopify.currency.active] get the symbol
                    return parseFloat(price / 100).toFixed(2)
                } else {
                    return parseFloat(price / 100).toFixed(2)
                }
            } catch (error) {
                gfg.utility.debugError("error in utility.formatPriceWithoutSymbol", error);
            }

        },
        refreshFreeGiftCartData: function (cartData) {
            try {
                let freeGiftsPresentInCart = [];
                if (cartData && cartData.items && cartData.items.length > 0) {
                    // let freeGifts = gfg.settings.freeGifts;
                    for(let i=0; i<cartData.items.length; i++){
                        // let cartItems = cartData.items;
                        let cartItem = cartData.items[i]
                        if(cartItem && cartItem.properties && cartItem.properties["_free_product"]){
                            if (cartItem.properties["_free_product"] == "true") {
                                freeGiftsPresentInCart.push(cartItem)
                            }
                        }
                    }
                }
                
                

                gfg.state.freeGiftsCartDataMap_productId = gfg.utility.convertArrayToObject(freeGiftsPresentInCart, "product_id");
                gfg.state.freeGiftsCartDataMap_variantId = gfg.utility.convertArrayToObject(freeGiftsPresentInCart, "variant_id");
                gfg.state.freeGiftsCartData['items'] = freeGiftsPresentInCart;
                if (gfg.gfgFreeGift && !gfg.gfgFreeGift._isStub) gfg.gfgFreeGift.utility.updateCampaignWiseFreeGiftsDataFromCart(cartData);

                // convert
            } catch (error) {
                gfg.utility.debugError("error in gfg-utility-refreshFreeGiftCartData fn=>", error);
                return false
            }
        },
        createMapForVariantId  : function(products, extraInfo=undefined) {
            try{
                //products is an objects with product handle as key
                //this function returns an object with product id as key
                let productsWithIdAsKey = {};
                for (let [key, value] of Object.entries(products)) {
                    let product = value
                    //if product has variants
                    if (product.variants.length > 0) {
    
                        for (let i = 0; i < product.variants.length; i++) {
                            product.variants[i].variant_id = product.variants[i].id;
                            // product.variants[i].image = product.variants[i].featured_image?.src;
                            product.variants[i].image = product.variants[i].featured_image?.transformed_src || product.variants[i].featured_image?.src;
                            if (!product.variants[i].image) {
                                // product.variants[i].image = product.featured_image
                                product.variants[i].image = product.featured_image_transformed_src || product.featured_image;
                            }
                            if(extraInfo == undefined || product.variants[i].title == "" || product?.variants?.length == 1) {
                                product.variants[i].title = product.variants[i].name
                            } else if(!extraInfo.shouldVariantTitleBeConvertedToProductTitle) {
                                product.variants[i].title = product.variants[i].title
                            }
                            product.variants[i].product_id = product.id
                            if(product.selling_plan_groups) {
                                //product.variants[i].sellingPlanDetails = gbb.utility.getSellingPlanDetailsForVariant(product?.selling_plan_groups, product.variants[i]?.selling_plan_allocations)
                                product.variants[i].selling_plan_groups = product.selling_plan_groups || [];
                                product.variants[i].selling_plan_allocations =  product?.variants[i]?.selling_plan_allocations || [];
                            }
                            productsWithIdAsKey[product.variants[i].id] = product.variants[i];
    
                        }
                    }
                    //if product has no variants
                    else {
                        productsWithIdAsKey[product.id] = product;
                    }
                }
                return productsWithIdAsKey;
            }catch(err){
                gfg.utility.debugError("error in gfg-utility-createMapForVariantId fn=>", err);
                return {};
            }
        },
        convertFromStoreCurrencyToCustomer : function(amount) {
            try {
                let activeCurrencyRate = gfg.utility.getActiveCurrencyRate(); 
                let convertedAmount = parseFloat(amount * activeCurrencyRate).toFixed(2);
                return convertedAmount;
            } catch(err) {
                gfg.utility.debugError("error in gfg-utility-convertFromStoreCurrencyToCustomer fn=>", err);
            }
        },
        checkIfClickIsAllowed_sastaDebounce : function(selector,delay=500){
            try {
                const currentTime = new Date().getTime();
                let lastClickTimestamps = gfg.state.lastClickTimestamps
                const previousClickTime = lastClickTimestamps.get(selector) || 0;
                const timeDifference = currentTime - previousClickTime;
              
                if (timeDifference < delay) {
                  gfg.utility.debugConsole("time difference:" + timeDifference + "ms")
                  return false;
                }
              
                lastClickTimestamps.set(selector, currentTime);
                gfg.state.lastClickTimestamps = lastClickTimestamps;
                return true;
            } catch (error) {
                gfg.utility.debugConsole("error in checkIfClickIsAllowed_sastaDebounce", error)                
                return true;
            }
        },
        convertArrayToObject : function(array, key) {
            try {
                let obj = {};
                for(let i=0; i<array.length; i++) {
                    obj[array[i][key]] = array[i];
                }
                return obj;
            } catch(err) {
                gfg.utility.debugConsole(err)
            }
        },
        listenForApiCalls: function () {
            // Save a reference to the original fetch function
           try {
             const originalFetch = window.fetch;
             // Define a new fetch function that intercepts requests
             window.fetch = function(url, options) {
                 // Log the request URL
                 gfg.utility.debugConsole("gfg Request URL: " + url);
                 // Check if the URL contains "/cart"
                 if (url &&  typeof url == "string" && ((url.includes("graphql.json") && !url.includes("skipListener=true")) ||  url.includes('/cart/change') || url.includes('/cart/add') || url.includes('/cart/update') || url.includes('/cart/clear'))) {
                     // Call the original fetch function to make the request
                     
                     return originalFetch.apply(this, arguments).then(async (response) => {
                         // Log the response data
                         try {
                           if (typeof response === 'string') {
                             await gfg.utility.callchecksAfterApiCalls(url, response);
                           }else{
                             response.clone().text().then(async (data) => {
                               await gfg.utility.callchecksAfterApiCalls(url, data);
                             });
                           }
                          
                           return response;
     
                         } catch (error) {
     
                            gfg.utility.debugConsole("Error in listenForApiCalls fn=>", error);
                           return response;
                         }
                        
                     });
 
                 } else {
                     // If the URL doesn't contain "/cart", call the original fetch function directly
                     return originalFetch.apply(this, arguments);
                 }
             };
 
           } catch (error) {
             gfg.utility.debugConsole("Error in listenForApiCalls fn=>", error);
           }
        
          
        },
        listenForCartChangesViaPerformance: function(settings) {
            try {
                
                // Track processed entries to avoid duplicates
                const processedEntries = new Set();
                
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        const url = entry.name;
                        
                        // Skip if already processed (using unique identifier)
                        const entryId = `${url}-${entry.startTime}`;
                        if (processedEntries.has(entryId)) continue;
                        processedEntries.add(entryId);
                        
                        // Clean up old entries to prevent memory leak
                        if (processedEntries.size > 100) {
                            const firstEntry = processedEntries.values().next().value;
                            processedEntries.delete(firstEntry);
                        }
                        
                        // Check if it's a cart operation
                        if (url && typeof url === "string" && 
                            (url.includes('/cart/change') || 
                             url.includes('/cart/add') || 
                             url.includes('/cart/update') || 
                             url.includes('/cart/clear') ||
                             (url.includes('graphql.json') && !url.includes('skipListener=true')))) {
                            
                            gfg.utility.debugConsole("PerformanceObserver: Cart operation detected - " + url);
                            
                            // Small delay to ensure cart is fully updated on server
                            setTimeout(async () => {
                                try {
                                    await gfg.utility.callchecksAfterApiCalls(url);
                                } catch (fetchError) {
                                    gfg.utility.debugConsole("PerformanceObserver: Error fetching cart - ", fetchError);
                                }
                            }, 150);
                        }
                    }
                });
                
                // Observe resource timing entries
                observer.observe({ 
                    type: 'resource', 
                    buffered: false
                });
                
                // Store observer reference if needed to disconnect later
                gfg.performanceObserver = observer;
                
            } catch (error) {
                gfg.utility.debugConsole("Error in listenForCartChangesViaPerformance: ", error);
            }
        },
        listenForAjaxApiCalls: function () {
            try {
                    // Save a reference to the original gfg.$.ajax function
                    var originalAjax = gfg.$.ajax;
                
                    // Override the gfg.$.ajax function
                    gfg.$.ajax = function(reqObj, options) {
                    let url = reqObj.url;
                    // Log the request URL
                    gfg.utility.debugConsole("gfg Request URL: " + url);
                
                    
                    // Check if the URL contains "/cart"
                    if (
                        url && 
                        typeof url == "string"
                        &&
                        (
                        url.includes('/cart/change') ||
                        url.includes('graphql.json') ||
                        // url.includes('/cart.js') ||
                        url.includes('/cart/add') ||
                        url.includes('/cart/update') ||
                        url.includes('/cart/clear') )
                    ) {
                        // Call the original gfg.$.ajax function to make the request
                        return originalAjax.apply(this, arguments).then(async function(response) {
                        // Log the response data
                        try {
                            if (typeof response === 'string') {
                            await gfg.utility.callchecksAfterApiCalls(url, response);
                            }else{
                            response.clone().text().then(async (data) => {
                                await gfg.utility.callchecksAfterApiCalls(url, data);
                            });
                            }
                            return response;
        
                        } catch (error) {
                            gfg.utility.debugConsole("Error in ajax response data: ", error);
                            return response;
                        }
                        });
                    } else {
                        // If the URL doesn't contain "/cart", call the original gfg.$.ajax function directly
                        return originalAjax.apply(this, arguments);
                    }
                    };
            } catch (error) {
                gfg.utility.debugConsole("Error in listenForAjaxApiCalls: ", error);
            }
        },
        listenForXmlHttpApiCalls: function() {
            // Save a reference to the original XMLHttpRequest constructor
         try {
             gfg.utility.debugConsole('inside xml http api call');
             const OriginalXMLHttpRequest = window.XMLHttpRequest;
         
             // Override the XMLHttpRequest constructor
             window.XMLHttpRequest = function() {
                 const xhr = new OriginalXMLHttpRequest();
         
                 // Save references to the original methods
                 const originalOpen = xhr.open;
                 const originalSend = xhr.send;
         
                 // Override the open method to store the URL
                 xhr.open = function(method, url) {
                     // Store the URL in the xhr object
                     xhr._url = url;
         
                     // Log the request URL
                    //  gfg.utility.debugConsole("XMLHttpRequest open url", url);
                     gfg.utility.debugConsole("XMLHttpRequest Request URL: " + url);
         
                     // Call the original open method
                     return originalOpen.apply(this, arguments);
                 };
         
                 // Override the send method
                 xhr.send = function(data) {
                     // Check if the URL contains "/cart" immediately
                     if (
                         xhr._url &&
                         typeof xhr._url == "string" &&
                        ( xhr._url.includes('/cart/change') ||
                            xhr._url.includes('graphql.json') ||
                        //   xhr._url.includes('/cart.js') ||
                         xhr._url.includes('/cart/add') ||
                         xhr._url.includes('/cart/update') ||
                         xhr._url.includes('/cart/clear'))
                     ) {
                         // Override the onreadystatechange event handler
                         const originalOnReadyStateChange = xhr.onreadystatechange;
                         xhr.onreadystatechange = async function() {
                             if (xhr.readyState == XMLHttpRequest.DONE || xhr.readyState == 4) {
                                 // Log the response data
                                 const response = xhr.responseText;

                                 try {
                                    //  const response = xhr.responseText;
                                     //gfg.utility.debugConsole("XMLHttpRequest Response Data", response);
         
                                     // Perform your desired actions with the response data
                                     if (typeof response === 'string') {
                                         gfg.utility.debugConsole(" callchecksAfterApiCalls for" , xhr._url);
 
                                         await gfg.utility.callchecksAfterApiCalls(xhr._url, response);
                                        //  return response;
                                     } else {
                                         response.clone().text().then(async (data) => {
                                             await gfg.utility.callchecksAfterApiCalls(xhr._url, data);
                                         });
                                         return response;
                                     }
                                 } catch (error) {
                                     gfg.utility.debugConsole("Error in XMLHttpRequest response data: ", error);
                                     return response;
                                 }
                             }
         
                             // Call the original onreadystatechange event handler
                             if (typeof originalOnReadyStateChange === 'function') {
                                  originalOnReadyStateChange.apply(xhr, arguments);
                             }
                         };
                     }
         
                     // Call the original send method
                     return originalSend.apply(this, arguments);
                 };
         
                 return xhr;
             };
           } catch (error) {
             gfg.utility.debugConsole("Error in listenForXmlHttpApiCalls: ", error);
           }
        },    
        listenForXmlHttpApiCallsNew: function() {
            try {
                gfg.utility.debugConsole('inside xml http api call');
                const OriginalXMLHttpRequest = window.XMLHttpRequest;
        
                window.XMLHttpRequest = function() {
                    const xhr = new OriginalXMLHttpRequest();
        
                    const originalOpen = xhr.open;
                    const originalSend = xhr.send;
        
                    xhr.open = function(method, url, ...args) {
                        xhr._url = url;
                        gfg.utility.debugConsole("XMLHttpRequest Request URL: " + url);
                        originalOpen.call(xhr, method, url, ...args);
                    };
        
                    xhr.send = function(data) {
                        const originalOnReadyStateChange = xhr.onreadystatechange || (() => {});
                        xhr.onreadystatechange = async function(...args) {
                            if (xhr.readyState === XMLHttpRequest.DONE) {
                                if (xhr._url && typeof xhr._url === "string" && 
                                    (xhr._url.includes('/cart/change') || xhr._url.includes('/cart/add') ||
                                     xhr._url.includes('/cart/update') || xhr._url.includes('/cart/clear'))) {
                                    try {
                                        const response = xhr.responseText;
                                        // Your custom logic here
                                        await gfg.utility.callchecksAfterApiCalls(xhr._url, response);
                                    } catch (error) {
                                        gfg.utility.debugConsole("Error in XMLHttpRequest response data: ", error);
                                    }
                                }
                            }
                            originalOnReadyStateChange.apply(this, args);
                        };
                        originalSend.call(xhr, data);
                    };
        
                    return xhr;
                };
            } catch (error) {
                gfg.utility.debugConsole("Error in listenForXmlHttpApiCalls: ", error);
            }
        },
        listenForXmlHttpApiCallsV2: function() {
            try {
                gfg.utility.debugConsole('inside xml http api call');
        
                const OriginalXMLHttpRequest = window.XMLHttpRequest;
        
                // Preserve the original prototype methods
                const originalOpen = OriginalXMLHttpRequest.prototype.open;
                const originalSend = OriginalXMLHttpRequest.prototype.send;
        
                // Override the open method
                OriginalXMLHttpRequest.prototype.open = function(method, url, ...args) {
                    this._url = url;
                    gfg.utility.debugConsole("XMLHttpRequest Request URL: " + url);
                    return originalOpen.apply(this, [method, url, ...args]); // Call original open method
                };
        
                // Override the send method
                OriginalXMLHttpRequest.prototype.send = function(data) {
                    const originalOnReadyStateChange = this.onreadystatechange || function() {};
        
                    this.onreadystatechange = async function(...args) {
                        if (this.readyState === XMLHttpRequest.DONE || this.readyState === 4) {
                            if (this._url && typeof this._url === "string" && 
                                (this._url.includes('/cart/change') || this._url.includes('/cart/add') ||
                                 this._url.includes('/cart/update') || this._url.includes('/cart/clear') || this._url.includes('graphql.json'))) {
                                try {
                                    const response = this.responseText;
                                    await gfg.utility.callchecksAfterApiCalls(this._url, response);
                                } catch (error) {
                                    gfg.utility.debugConsole("Error in XMLHttpRequest response data: ", error);
                                }
                            }
                        }
                        originalOnReadyStateChange.apply(this, args);
                    };
        
                    return originalSend.apply(this, [data]); // Call original send method
                };
            } catch (error) {
                gfg.utility.debugConsole("Error in listenForXmlHttpApiCallsV2: ", error);
            }
        },
        
        
        //  listenForFormSubmits:function() {
        //     const forms = document.querySelectorAll('form');
        
        //     forms.forEach(form => {
              
        //         const action = form.getAttribute('action');
                
        //         if (action.includes('/cart/change') || action.includes('/cart/add') || action.includes('/cart/update') || action.includes('/cart/clear')) {
        //             gfg.utility.debugConsole("gfg Form Action: " + action);
        //             event.preventDefault();
        //             form.addEventListener('submit', async (event) => {
        //                 try {
        //                     // form.submit();

        //                     //place a timeout here to wait for the form to submit
        //                     await new Promise(resolve => setTimeout(resolve, 1000));
        //                     gfg.utility.debugConsole("form after submit:");
        //                     // callchecks after api calls should only happen after the form is submitted. 
        //                     await gfg.utility.callchecksAfterApiCalls(action, undefined);
        //                     } catch (error) {
        //                         gfg.utility.debugConsole("Error in ajax response data: ", error);
        //                     }
        //             });
        //         }
        //     });
        // },
        
        interceptFetchRequest(matches, cb) {
            const originalFetch = fetch
        
            window.fetch = function (input, init) {
            return originalFetch(input, init).then(async (res) => {
                if (input && typeof input == "string"   && ( input.includes('graphql.json') ||  input.includes('/cart/change') || input.includes('/cart/add') || input.includes('/cart/update') || input.includes('/cart/clear'))) {
                    // Call the original fetch function to make the request
                   await  gfg.utility.callchecksAfterApiCalls(input, res);
                }
                return Promise.resolve(res)
            })
            }
        },
        interceptXMLHttpRequest(matches, cb) {
            const originalOpen = XMLHttpRequest.prototype.open
        
            XMLHttpRequest.prototype.open = function () {
            this.addEventListener('load', async function () {
                if (input && typeof input == "string" &&
                    // input.includes("/cart.js") &&
                   (
                    input.includes('graphql.json') ||
                    
                    input.includes('/cart/change') || input.includes('/cart/add') || input.includes('/cart/update') || input.includes('/cart/clear'))) {
                    // Call the original fetch function to make the request
                    await gfg.utility.callchecksAfterApiCalls(input, res);
                }
            })
            originalOpen.apply(this, arguments)
            }
        },    
        callchecksAfterApiCalls: async function (url, data) {
            try {
                if (url && typeof url =="string"    && url.includes('app=gfgfreegift')) {
                 return data;
                }

                const executeMainLogic = async function() {
                    let cartData = undefined;
                    
                    // Store reference to previous cart data before any updates
                    const previousCartData = gfg.state.cartData;

                    if(gfg?.settings?.app?.considerRequestListenerData){
                        cartData = gfg.utility.validateAndParseCartData(data);
                    }

                    if (cartData) {
                        gfg.utility.updateCache(cartData);
                        gfg.state.cartData = cartData;
                    } else {
                        gfg.state.cartData = await gfg.utility.getCartV2({forceRefresh: true});           
                        cartData = gfg.state.cartData;
                        if (gfg.gfgVolDiscount && !gfg.gfgVolDiscount._isStub) gfg.gfgVolDiscount.actions.handleQuantityUpdate();
                    }

                    // Early exit: if cart hasn't changed, skip all rendering
                    if (!gfg.utility.hasCartChanged(previousCartData, cartData)) {
                        gfg.utility.debugConsole("Cart data unchanged, skipping re-render");
                        return;
                    }
                 
                  if (gfg.gfgFreeGift && !gfg.gfgFreeGift._isStub) gfg.gfgFreeGift.f.checkForFreeGift(cartData);
                  if (gfg.gfgFreeGiftV2 && !gfg.gfgFreeGiftV2._isStub) gfg.gfgFreeGiftV2.onCartChange(cartData);
                  if (gfg.gfgVolDiscount && !gfg.gfgVolDiscount._isStub) {
                      gfg.gfgVolDiscount.init(gfg.settings ,"CART_PAGE");
                      gfg.gfgVolDiscount.actions.handleQuantityUpdate();
                  }
                  if (gfg.gfgUnifiedWidget && !gfg.gfgUnifiedWidget._isStub) {
                      gfg.gfgUnifiedWidget.init(gfg.settings , "PRODUCT_PAGE");
                      gfg.gfgUnifiedWidget.init(gfg.settings , "CART_PAGE");
                  }

                  try {
                      if(typeof gfgConsolidatedCustomDiscount !== 'undefined' && gfgConsolidatedCustomDiscount.init){
                        gfgConsolidatedCustomDiscount.init();
                      }
                  } catch (error) {
                    gfg.utility.debugConsole("error in gfgConsolidatedCustomDiscount.init", error);
                  }

                  try {
                      if (typeof gfgDiscountAllocationSync !== 'undefined' && gfgDiscountAllocationSync.onCartChange) {
                        gfgDiscountAllocationSync.onCartChange();
                      }
                  } catch (error) {
                    gfg.utility.debugConsole("error in gfgDiscountAllocationSync.onCartChange", error);
                  }

                  try {
                      if(typeof gfgStrikethroughEngine !== 'undefined' && gfgStrikethroughEngine.handleCartChange){
                        gfgStrikethroughEngine.handleCartChange(cartData);
                      }
                      if(typeof gfgStrikethroughEngine !== 'undefined' && gfgStrikethroughEngine.handleCollectionCartChange){
                        gfgStrikethroughEngine.handleCollectionCartChange(cartData);
                      }
                  } catch (error) {
                    gfg.utility.debugConsole("error in gfgStrikethroughEngine.handleCartChange", error);
                  }

                  try {
                      if(typeof gfgCustomDiscount !== 'undefined' && gfgCustomDiscount.gfgShippingDiscountV2 && gfgCustomDiscount.gfgShippingDiscountV2.init){
                          gfgCustomDiscount.gfgShippingDiscountV2.init();
                      }
                  } catch (error) {
                    gfg.utility.debugConsole("error in gfgShippingDiscountV2.init", error);
                  }

                  try { 
                      if(typeof gfgCustomDiscount !== 'undefined' && gfgCustomDiscount.init){
                          gfgCustomDiscount.init();
                      }
                  } catch (error) {
                    gfg.utility.debugConsole("error in gfgCustomDiscount.init", error);
                  }
                };

                // this logic is implemented to handle redirection issue, in case of free gift specifically.
                if (gfg?.settings?.app?.delayInCallChecksAfterApiCalls && gfg.state.page_type !== "cart") {
                    
                    // Clear any existing timeout before setting a new one
                    if (gfg.state.executeMainLogicTimeoutId) {
                        clearTimeout(gfg.state.executeMainLogicTimeoutId);
                    }
                    
                    gfg.state.executeMainLogicTimeoutId = setTimeout(executeMainLogic, 1000);
                } else {
                    executeMainLogic();
                }
            } catch (e) {
              gfg.utility.debugConsole("gfg Response data: ", data);
            }
        },
        combineObjects: function (obj1, obj2) {
            const combinedObject = {};

            // Copy properties from the first object
            for (let key in obj1) {
                if (obj1.hasOwnProperty(key)) {
                    combinedObject[key] = obj1[key];
                }
            }
        
            // Copy properties from the second object
            for (let key in obj2) {
                if (obj2.hasOwnProperty(key)) {
                    combinedObject[key] = obj2[key];
                }
            }
        
            return combinedObject;
        },
        debugConsole: function(...messages){
            try{
                let flag = gfg.state.CONSTANT_DEBUG_FLAG || localStorage.getItem("debug") == "true" || window.location.search.includes("kite_debug=1");
                if(flag){
                    console.log(...messages);
                }
            }catch(err){
                console.error( 'error inside debugConsole ->' , err)
            }
        },
        debugError: function(...messages){
            try{
                if(gfg.env === "PRODUCTION"){
                    // this.sendErrorLogAlerts(messages);
                }
                let flag = gfg.state.CONSTANT_DEBUG_FLAG || localStorage.getItem("debug") == "true" || window.location.search.includes("kite_debug=1");
                if(flag){
                    console.error(...messages);
                }
            }catch(err){
                console.error( 'error inside the debugError function ->' , err)
            }
        },
        setCustomerSpecificData: async function(){

            try {
                
                let customerId = undefined;
                let isCustomerLoggedInBool = false
                let customerTags = [];
                let activeCustomerData = {}
                let visitingFromCountry;
                if(window.shopifyLiquidValuesApp7Ext && window.shopifyLiquidValuesApp7Ext.customer){
                    activeCustomerData = shopifyLiquidValuesApp7Ext.customer
                }
                
                if(activeCustomerData.email != null){
                    customerId = activeCustomerData.id;
                    customerTags = activeCustomerData?.customerTags || [];
                    isCustomerLoggedInBool = true
                }
    
                // check if countrySelects rule created for either free gift or discount
    
                const checkIfVisitingFromCountryRequired = gfg.f.checkIfVisitingFromCountryRequired();
                if(checkIfVisitingFromCountryRequired){
                    visitingFromCountry = await gfg.utility.getVisitingFromCountry();
                }
    
    
                gfg.state.activeCustomerData = {
                    customerId: customerId,
                    customerTags: customerTags,
                    isCustomerLoggedInBool: isCustomerLoggedInBool,
                    visitingFromCountry: visitingFromCountry,
                    markets: window.shopifyLiquidValuesApp7Ext?.markets
                }
            } catch (error) {
                gfg.utility.debugError("error in setCustomerSpecificData", error);
            }
        },
        updateCartAttributeWithCustomerData: async function(){
            try{

                if (gfg.gfgVolDiscount && !gfg.gfgVolDiscount._isStub) gfg.gfgVolDiscount.f.removeInactiveCampaigns();
               
                let customerData = gfg.state.activeCustomerData;
                const attributes = {};
                
                // Only add attributes that have actual values
                if(customerData?.customerId) {
                    attributes._loggedInId = customerData.customerId;
                }
                
                if(customerData?.customerTags && Array.isArray(customerData.customerTags) && customerData.customerTags.length > 0) {
                    attributes._customerTags = customerData.customerTags;
                }
                
                if(customerData?.visitingFromCountry) {
                    attributes._visitingFromCountry = customerData.visitingFromCountry;
                }
                
                // Only proceed with cart update if there are attributes to update
                if(Object.keys(attributes).length > 0) {
                    const dataToBeUpdated = { attributes };
                    await gfg.utility.updateCart(dataToBeUpdated);
                }
            
            }catch(err){
                gfg.utility.debugError("error in updateCartAttributeWithCustomerData", err);
            }
        },
        redirectToPage: async function(location){
            window.location.href = location
        },
        checkIfTwoArrayHasCommonElement: function(arr1, arr2){
            for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr2.length; j++) {
                    if (arr1[i] === arr2[j]) {
                      return true;
                    }
                }
            }
           return false;
        },
        getQuantityValueFromQuantitySelector: function(){
            try {
                // Add class "gfgHide" to the element
                let quantityValue;
                let quantitySelectorEle = document.querySelector(gfg.elements.quantityBtn);
                if(quantitySelectorEle) {
                    quantitySelectorEle.classList.add("gfgHide");
                    // Check if it is an input element, if not find the input inside it
                    let quantitySelectorEleInput = (quantitySelectorEle.tagName.toLowerCase() !== "input") 
                        ? quantitySelectorEle.querySelector("input")
                        : null;
                
                    // If an input element was found, update the quantitySelectorEle
                    if (quantitySelectorEleInput) {
                        quantitySelectorEle = quantitySelectorEleInput;
                    }
                
                    // If quantitySelectorEle is a single element, check if it's an input and get its value
                    if (quantitySelectorEle && quantitySelectorEle.tagName.toLowerCase() === "input") {
                        quantityValue = quantitySelectorEle.value;
                    }
                }
            
            
                return quantityValue;
            } catch (error) {
                gfg.utility.debugError("error in getQuantityValueFromQuantitySelector", error); 
            }
            
        },
        formatPriceWithSeparator: function(price){
            // this function format the price first for example 10.00 to 10 and if 10.50 to 10.50 then apply thousand separator and decimal separator.
            try {

                price = parseFloat(price / 100);  // price comes in shopify format so divide by 100 first.

                // if for example price is 10.00 then convert it too 10
                if (price % 1 === 0) {
                    // Checks if the number is an integer
                    price = price.toString();
                } else {
                    price = price.toFixed(2); // Keep two decimal places if it's not an integer
                }

                const activeCurrencyCode = gfg.utility.getActiveCurrencyCode();
                const thousandSeparator = gfg.settings.merchantInfo.multipleCurrenciesInfo[activeCurrencyCode]?.thousandsSeparator || gfg.settings?.merchantInfo?.currencyInfo?.thousandsSeparator || ",";
                const decimalSeparator = gfg.settings.merchantInfo.multipleCurrenciesInfo[activeCurrencyCode]?.decimalSeparator || gfg.settings?.merchantInfo?.currencyInfo?.decimalSeparator || ".";
    
                // Convert the price to a string splitting integer and decimal parts
                let [integerPart, decimalPart] = price.toString().split('.');
    
                // Replace the thousand separator according to the locale
                integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
    
                // Reconstruct the price with the correct decimal separator (if there's a decimal part)
                const formattedPrice = decimalPart ? integerPart + decimalSeparator + decimalPart : integerPart;
    
                return formattedPrice;

            } catch (error) {
                gfg.utility.debugError("error in formatPriceWithSeparator", error);
                return price;
            }
        },
        getActiveCurrencyCode: function(){

            try {
                
                if(window.Shopify.currency.active){
                    return window.Shopify.currency.active;
                }
    
                return gfg.settings.merchantInfo.currencyInfo.code;
            } catch (error) {
                gfg.utility.debugError("error in getActiveCurrencyCode", error);
            }

        },
        getProductTranslatedHandle: function(productName, languageValue){
            return new Promise(async(res, rej) => {
                try {
                    const url = languageValue + "products/" + productName;
                    const response = await fetch(url);
                    if(!response.ok){
                        throw new Error("Network response was not ok");
                    }

                    // response.url = response.url.trim().endsWith("/") ? response.url.slice(0, -1) : response.url;
                    let urlReturned = response.url;

                    // Remove the last character if it is a '/'
                    if (urlReturned[urlReturned.length - 1] === "/") {
                        urlReturned = urlReturned.substring(0, urlReturned.length - 1);
                    }
                    gfg.utility.debugConsole("urlReturned", urlReturned);

                    // Extract the last path segment and get the string before the first '.'
                    let newHandle = urlReturned.split("/").pop().split(".")[0];

                    // gfg.utility.debugConsole("newHandle", newHandle);
                    gfg.utility.debugConsole("newHandle", newHandle);
                    res(newHandle);
                } catch (error) {
                    gfg.utility.debugError('error in getProductTranslatedHandle', error);
                    res(false);
                }
            })
        },
        checkGfgDebugMode: function() {
            try {
                const urlParams = new URLSearchParams(window.location.search);
        
                // if _gfgDebugMode set to true in the URL, update the cart attribute with _gfgDebugMode
                if (urlParams.get('_gfgDebugMode') === 'true') {
                    var formData = new FormData();
                    formData.append("attributes[_gfgDebugMode]", true);
        
                    fetch(window.Shopify.routes.root + 'cart/update.js', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(data => {
                        gfg.utility.debugConsole(`Cart update successful: ${data}`);
                    })
                    .catch(error => {
                        gfg.utility.debugConsole(`Error updating cart: ${error}`);
                    });
                }
            } catch (error) {
                gfg.utility.debugConsole(`Error in checkGfgDebugMode: ${error}`);
            }
        },
        getFontWeightValue: function(fontWeight) {
            try {
                const fontWeights = {
                    bold: "700",
                    medium: "600",
                    regular: "400",
                };
                return fontWeights[fontWeight] || fontWeight;
            } catch (error) {
                gfg.utility.debugConsole("error in getFontWeightValue", error);
                return fontWeight;
            }
          },
        getFontSizeValue: function(fontSize) {
            try {
                if(typeof fontSize == "string" && !fontSize?.includes("px")){
                    return fontSize +"px";
                }
                return fontSize;
            } catch (error) {
                gfg.utility.debugConsole("error in getFontSizeValue", error);
            }
        },
        getFirstRenderCartData: async function(){
            try {
                let cartData = window?.shopifyLiquidValuesApp7Ext?.cartData || false;

                // incase cartData is not present in the window object then lets fetch via getCart.
                if(!cartData){
                    cartData = await gfg.utility.getCart();
                }
                return cartData;
            } catch (error) {
                gfg.utility.debugError("error in getFirstRenderCartData", error); 
            }
        },
        getCountry : function(){

            // this function will return the current country of the store. 
            // otherwise it will return US as default country
            try {
                if(window?.Shopify && window.Shopify?.country){
                    return window.Shopify.country;
                }
                return "US";
            } catch (error) {
                gfg.utility.debugError("error in getCountry", error); 
            }
        },
        getVisitingFromCountry : async function(){
            let visitingFromCountry;
            try {

                // if visitingFromCountry is already present in the local storage then return it.
                // otherwise fetch it from the api and store it in the local storage.
                const isLocalStorageExists = window && window.localStorage ? true : false;

                if(isLocalStorageExists){

                    visitingFromCountry = localStorage.getItem("visitingFromCountry");

                    if(visitingFromCountry){
                        return visitingFromCountry;
                    }
                }

            
                const apiURL = "https://get.geojs.io/v1/ip/geo.json";
                const response = await fetch(apiURL);
                if(!response.ok){
                    throw new Error("Error while fetching the visiting from country");
                }
                const data = await response.json();
                visitingFromCountry = data?.country_code ;

                if(isLocalStorageExists){
                    localStorage.setItem("visitingFromCountry", visitingFromCountry);
                }
            } catch (error) {
                gfg.utility.debugError("error in getVisitingFromCountry", error);
            } finally{
                return visitingFromCountry;
            }
        },
        getRegionalLocaleUrl : function(){
            let regionalLocale = "";
            try {
                let localePresentInUrl = window.location.pathname.split("/") || "";
                // Get the current locale from Shopify
                let currentShopifyLocale = Shopify.locale || "";
            
            
                // Check if the Shopify locale and the locale present in the URL match or if one includes the other
                if (currentShopifyLocale && currentShopifyLocale !== "" && localePresentInUrl) {
                    if (currentShopifyLocale === localePresentInUrl[1]) {
                        regionalLocale = `/${currentShopifyLocale}`;
                    } else if (localePresentInUrl[1].includes(currentShopifyLocale)) {
                        // This case handles when the locale is a subset like 'en-us' in the URL being 'en'
                        regionalLocale = `/${localePresentInUrl[1]}`;
                    } else {
                        // If there's no match or inclusion, regionalLocale remains an empty string
                    }
                }

            } catch (error) {
                gfg.utility.debugError("error in getRegionalLocaleUrl", error); 
            } finally{
                return regionalLocale;
            }
        },
        getHrefForProductCollectionHandle: function(type, handle){

            const basePath =  type == "product" ? "/products/" : "/collections/";
            let url = basePath + handle;

            try {
                const isRegionalLocaleUrlRequiredForHref = gfg.settings.app?.isRegionalLocaleUrlRequiredForHref;

                if(isRegionalLocaleUrlRequiredForHref){
                    url = gfg.utility.getRegionalLocaleUrl() + url;
                }

            } catch (error) {
                gfg.utility.debugError("getHrefForProductCollectionHandle", error);

            } finally{
                return url;
            }
        },

        findWrapperElement: function(feature, wrapperType, promotion_id, returnType = "JS") {
            let wrapperElement = [];
            try {
                const featuresWrapperMap = gfg.state.featuresWrapperMap;
                const isSideCartContext = gfg.state.page_type !== "cart" && (wrapperType === "CART_PAGE" || wrapperType === "SIDE_CART");
                
                let noAppBlockFoundFunction = gfg.productPage.f.insertWrapperIntoPage;
                let archivedAppBlockSelector = PRODUCT_PAGE_APP_BLOCK_SELECTOR;
                let pageSpecificSelector = ".gfgProductPageWrapperV2";
                let featureWrapperKey = isSideCartContext ? `${feature}-SIDE_CART-${promotion_id}` : `${feature}-${wrapperType}-${promotion_id}`;

                let featureSpecificWrapperSelector;
                let featureSpecificAppBlockSelector;
                let featureSpecificSideCartWrapperSelector;
                let featureSpecificSideCartWrapper;
                let isFeatureSpecificSideCartSelectorProvidedInAdmin;
                

                        
                if (wrapperType === "CART_PAGE" || wrapperType === "SIDE_CART") {
                    pageSpecificSelector = ".gfgCartPageWrapperV2";
                    archivedAppBlockSelector = CART_PAGE_APP_BLOCK_SELECTOR;
                    noAppBlockFoundFunction = gfg.cartPage.f.insertWrapperIntoPage;
                }
        
                switch (feature) {
                    case "FREE_GIFT":
                        featureSpecificAppBlockSelector = FREE_GIFT_APP_BLOCK_SELECTOR;
                        featureSpecificWrapperSelector = ".gftFreeGiftWrapper";
                        featureSpecificSideCartWrapperSelector = FREEGIFT_SIDE_CART_WRAPPER_SELECTOR;
                        featureSpecificSideCartWrapper = FREEGIFT_SIDE_CART_WRAPPER;
                        isFeatureSpecificSideCartSelectorProvidedInAdmin = gfg.settings.app?.freeGiftSideCartSelector;
                        break;
                    case "VOLUME_DISCOUNT":
                        featureSpecificAppBlockSelector = VOLUME_DISCOUNT_APP_BLOCK_SELECTOR;
                        featureSpecificWrapperSelector = ".gfgVolDiscountWrapper";
                        featureSpecificSideCartWrapperSelector = VOLUME_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR;
                        featureSpecificSideCartWrapper = VOLUME_DISCOUNT_SIDE_CART_WRAPPER;
                        isFeatureSpecificSideCartSelectorProvidedInAdmin = gfg.settings.app?.volumeDiscountSideCartSelector;
                        break;
                    case "BOGO":
                        featureSpecificAppBlockSelector = BOGO_APP_BLOCK_SELECTOR;
                        featureSpecificWrapperSelector = ".gfgBogoWrapper";
                        featureSpecificSideCartWrapperSelector = ''
                        isFeatureSpecificSideCartSelectorProvidedInAdmin = false;
                        break;
                    case "UNIFIED":
                        featureSpecificAppBlockSelector = UNIFIED_APP_BLOCK_SELECTOR;
                        featureSpecificWrapperSelector = ".gfgUnifiedDiscountWrapper";
                        featureSpecificSideCartWrapperSelector = UNIFIED_SIDE_CART_WRAPPER_SELECTOR;
                        featureSpecificSideCartWrapper = UNIFIED_SIDE_CART_WRAPPER;
                        isFeatureSpecificSideCartSelectorProvidedInAdmin = gfg.settings.app?.unifiedSideCartSelector;
                        break;
                    case "CUSTOM_DISCOUNT":
                        featureSpecificAppBlockSelector = CUSTOM_DISCOUNT_APP_BLOCK_SELECTOR;
                        featureSpecificWrapperSelector = ".gfgCustomDiscountWrapper";
                        featureSpecificSideCartWrapperSelector = CUSTOM_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR;
                        featureSpecificSideCartWrapper = CUSTOM_DISCOUNT_SIDE_CART_WRAPPER;
                        isFeatureSpecificSideCartSelectorProvidedInAdmin = gfg.settings.app?.customDiscountSideCartSelector;
                        break;

                    case "CONSOLIDATED_PROGRESS_BAR":
                        featureSpecificAppBlockSelector = CONSOLIDATED_PROGRESS_BAR_APP_BLOCK_SELECTOR;
                        featureSpecificWrapperSelector = ".gfgConsolidatedProgressBarWrapper";
                        featureSpecificSideCartWrapperSelector = CONSOLIDATED_PROGRESS_BAR_SIDE_CART_WRAPPER_SELECTOR;
                        featureSpecificSideCartWrapper = CONSOLIDATED_PROGRESS_BAR_SIDE_CART_WRAPPER;
                        isFeatureSpecificSideCartSelectorProvidedInAdmin = gfg.settings.app?.consolidatedProgressBarSideCartSelector;
                        break;
                    case "SHIPPING_DISCOUNT":
                        featureSpecificAppBlockSelector = SHIPPING_DISCOUNT_APP_BLOCK_SELECTOR;
                        featureSpecificWrapperSelector = ".gfgShippingDiscountWrapper";
                        featureSpecificSideCartWrapperSelector = SHIPPING_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR;
                        featureSpecificSideCartWrapper = SHIPPING_DISCOUNT_SIDE_CART_WRAPPER;
                        isFeatureSpecificSideCartSelectorProvidedInAdmin = gfg.settings.app?.shippingDiscountSideCartSelector;
                        break;
                    default:
                        break;
                }
        
                const appBlockElementsV3 = Array.from(document.querySelectorAll(featureSpecificAppBlockSelector));
        
                if (appBlockElementsV3.length > 0 && !isSideCartContext) {
                    
                    let isBlockIdMatched = false;
                    appBlockElementsV3.forEach(appBlockElement => {
                        const blockId = JSON.parse(appBlockElement.getAttribute("data-setting"))?.blockId;
                        if (blockId && blockId == promotion_id) {
                            wrapperElement = appBlockElement;
                            isBlockIdMatched = true;
                        }
                    });
        
                    if (!isBlockIdMatched) {
                        wrapperElement = appBlockElementsV3;
                    }
        
                    featuresWrapperMap[featureWrapperKey] = "V3(feature specific block)";

                } else if ((isFeatureSpecificSideCartSelectorProvidedInAdmin || feature === "CONSOLIDATED_PROGRESS_BAR")&& isSideCartContext) {

                    let sideCartSelectorElementV4;
                    if(gfg.state.shadowRoot.isDetected){
                        sideCartSelectorElementV4 = gfg.state.shadowRoot.reference.querySelector(featureSpecificSideCartWrapperSelector);
                    }
                    else{
                        sideCartSelectorElementV4 = document.querySelector(featureSpecificSideCartWrapperSelector);
                    }

                    // if selector is not found then lets insert it at least.
                    if(!sideCartSelectorElementV4){
                        gfg.cartPage.f.insertSideCartWrappersIntoPage();
                        sideCartSelectorElementV4 = document.querySelector(featureSpecificSideCartWrapperSelector);
                    }

                    // if still side cart selector is not found then lets grab it via variable(bcz not available in dom)
                    // we are doing this to handle side cart widget disappear issue in few unexpected cases.  
                    if(!sideCartSelectorElementV4){
                        sideCartSelectorElementV4 = featureSpecificSideCartWrapper;
                    }
                    wrapperElement = sideCartSelectorElementV4 ? [sideCartSelectorElementV4] : wrapperElement;
                    featuresWrapperMap[featureWrapperKey] = "V4(feature specific side cart wrapper)";
                } else if (document.querySelector(archivedAppBlockSelector)) {

                    const mainContainer = document.querySelector(`${archivedAppBlockSelector}${pageSpecificSelector}`);
                    const matchedElement = mainContainer?.querySelector(featureSpecificWrapperSelector);
                    wrapperElement = matchedElement ? [matchedElement] : [];
                   
                    featuresWrapperMap[featureWrapperKey] = "V2(archived app block)";
                } else if(gfg.state.page_type === "product" || gfg.state.page_type === "cart" || isSideCartContext) {

                    noAppBlockFoundFunction();
                    const mainContainer = document.querySelector(`${pageSpecificSelector}`);
                    let matchedElement = mainContainer?.querySelector(featureSpecificWrapperSelector);
                    
                     // if still cart page wrapper/selector is not found then lets grab it via variable(bcz not available in dom)
                    // we are doing this to handle side cart widget disappear issue in few unexpected cases. 
                    if(!matchedElement && isSideCartContext){
                        matchedElement = gfg.elements.cartPageWrapperV2?.querySelector(featureSpecificWrapperSelector);
                    }
                    wrapperElement = matchedElement ? [matchedElement] : [];
                    featuresWrapperMap[featureWrapperKey] = "V1(default selector)";
                }
        
                gfg.state.featuresWrapperMap = featuresWrapperMap;
        
            } catch (error) {
                gfg.utility.debugError("error in findWrapperElement", error);
            } finally {
               return  wrapperElement;
            }
        },

        BXGYActionsAfterAddToCart: function(){
            try {

                // this is not a global script, just variable name looks like that because of bad calls taken, this is a buyxgety(new dynamic bogo script). 
                const global_afterAddToCartScript = gfg.settings.app?.global_afterAddToCartScript;
                const executeCustomScriptAfterDynamicBogoAddition = gfg.settings.app?.executeCustomScriptAfterDynamicBogoAddition;

                if(global_afterAddToCartScript){
                    eval(global_afterAddToCartScript);
                }
                else{
                    gfg.f.updateCartState();
                }
                
                if(executeCustomScriptAfterDynamicBogoAddition && executeCustomScriptAfterDynamicBogoAddition.trim() !== ""){
                    try {
                        const fn = new Function(executeCustomScriptAfterDynamicBogoAddition);
                        fn();
                    } catch (error) {
                        gfg.utility.debugConsole("error in executeCustomScriptAfterDynamicBogoAddition", error);
                    }
                }

            } catch (error) {
                gfg.utility.debugError("error in BXGYActionsAfterAddToCart", error);
            }
        },
        compareDates: function(date1, date2) {
            try {
                const d1 = date1 instanceof Date ? date1 : new Date(date1);
                const d2 = date2 instanceof Date ? date2 : new Date(date2);
        
                if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
                    throw new Error("Invalid date format");
                }
        
                if (d1 > d2) return 1;
                if (d1 < d2) return -1;
                return 0;
            } catch (error) {
                gfg.utility.debugError("Error in compareDates:", error);
                return null;
            }
        },

        // injectWrapperRelativeToSelector: function(wrapperHTML, selector, insertAbove = true) {
        //     try {
        //         const targetElement = document.querySelector(selector);
        //         if (targetElement) {
        //             const position = insertAbove ? 'beforebegin' : 'afterend';
        //             targetElement.insertAdjacentHTML(position, wrapperHTML);
        //         } else {
        //             console.warn(`Target element not found for selector: ${selector}`);
        //         }
        //     } catch (error) {
        //         gfg.utility.debugConsole("error in injectWrapperRelativeToSelector", error);
        //     }
        // },
        injectWrapperRelativeToSelector: function(wrapperElement, selector, insertAbove = true, wrapperSelector = null) {
            try {
                let targetElement;
                if(gfg.state.shadowRoot.isDetected){
                    targetElement = gfg.state.shadowRoot.reference.querySelector(selector);
                }
                else{
                    targetElement = document.querySelector(selector);
                }


                if (targetElement) {
                    const position = insertAbove ? 'beforebegin' : 'afterend';
        
                    // For modern themes, check if wrapper with the specific CLASS exists in DOM
                    // instead of just checking if the element reference is in body.
                    // This handles cases where the wrapper element reference becomes stale
                    // after theme's native cart update replaces DOM content.
        
                    // / When wrapperSelector is provided, check by selector (more reliable for modern themes)
                    // instead of checking element reference which can become stale
                    if (wrapperSelector) {
                        const existingWrapper = document.querySelector(wrapperSelector);
                        if (existingWrapper) {
                            // Wrapper already exists in DOM at the correct location - skip
                            gfg.utility.debugConsole('Wrapper element is already in the DOM, skipping injection.');
                            return;
                        }
                        
                        // Wrapper not found by selector - create a fresh one using the selector class
                        // Don't trust wrapperElement.className as it might have been corrupted
                        const freshWrapper = document.createElement('div');
                        // Extract class name from selector (e.g., '.gfgConsolidatedProgressBarSideCartWrapperV4' -> 'gfgConsolidatedProgressBarSideCartWrapperV4')
                        freshWrapper.className = wrapperSelector.replace(/^\./, '');
                        targetElement.insertAdjacentElement(position, freshWrapper);
                        gfg.utility.debugConsole('Created fresh wrapper element for injection: ' + freshWrapper.className);
                    } else {
                        // Legacy behavior - check by element reference
                        if (!document.body.contains(wrapperElement)) {
                            targetElement.insertAdjacentElement(position, wrapperElement);
                        } else {
                            gfg.utility.debugConsole('Wrapper element is already in the DOM, skipping injection.');
                        }
                    }
                } 
            } catch (error) {
                gfg.utility.debugError("error in injectWrapperRelativeToSelector", error);
            }
        },
        validateAndParseCartData: function(data) {
            // this function check if the data is cart data and parse it & return null if it is not cart data
            let cartData = null;
        
            try {
                cartData = typeof data === 'string' ? JSON.parse(data) : data;
        
                if (
                    !(typeof cartData === 'object' &&
                    cartData !== null &&
                    'token' in cartData &&
                    Array.isArray(cartData.items))
                ) {
                    cartData = null; // Reset if validation fails
                }
            } catch (error) {
                gfg.utility.debugError("validateAndParseCartData:", error);
                cartData = null;
            } finally {
                return cartData;
            }
        },
        getWrapperSkeleton: function(pageType){
            try {
                const wrapper = document.createElement("div");
                const wrapperChildHTML = '<div class="gfgConsolidatedProgressBarWrapper"></div><div class="gftFreeGiftWrapper"></div><div class="gfgVolDiscountWrapper"></div><div class="gfgBogoWrapper"></div><div class="gfgShippingDiscountWrapper"></div><div class="gfgUnifiedDiscountWrapper"></div><div class="gfgCustomDiscountWrapper"></div>';

                if(pageType === "PRODUCT_PAGE"){
                    wrapper.classList.add("gfgPageWrapper", "gfgProductPageWrapperV2", "gfgUnifiedDiscountWrapper");
                }
                else if(pageType === "CART_PAGE"){
                    wrapper.classList.add("gfgPageWrapper", "gfgCartPageWrapperV2", "gfgUnifiedDiscountWrapper");
                }
                
                wrapper.innerHTML = wrapperChildHTML;
                return wrapper;

            } catch (error) {
                gfg.utility.debugError("error in getWrapperSkeleton", error);
            }
        },
        dataMappingFromGraphql: function (cleanedData) {
            try {
                    const convertPlanNameToId = (planName) => {
                        // let base64Str = btoa(planName);
                        let base64Str = btoa(encodeURIComponent(planName));
                        let id = "KITE_" + base64Str;
                        return id;
                    };
            
                    const getAllMetafieldValuesInArray = (productData) => {
                        // productData.forEach(node => {
                        const metafields = [];
                        Object.keys(productData).forEach((key) => {
                        if (key.startsWith("metafield_") && productData?.[key]) {
                            metafields.push(productData[key]);
                        }
                        });
                        return metafields;
                    };
            
                    const transformSellingPlans = (sellingPlanGroups) => {
                        let sellingPlanGroupsFlattened = [];
            
                        let tempArray = [];
                        // let flattendData = .graphQlUtility.flattenGraphQLResponse({ data: { nodes: sellingPlanGroups } });
                        let flattendData = sellingPlanGroups;
                        tempArray = flattendData.map((item) => {
                        return {
                            id: convertPlanNameToId(item.name),
                            name: item.name,
                            description: null,
                            options: item.options.map((option, index) => ({
                            name: option.name,
                            position: index + 1,
                            value: option.value,
                            })),
                            selling_plans: item.sellingPlans?.map((plan) => {
                            return {
                                id: parseInt(plan?.id?.split("/").pop()),
                                gid: plan?.id,
                                option: plan?.option,
                                name: plan?.name,
                                price_adjustments: plan?.priceAdjustments?.map((element, index) => {
                                let adjustmentType = element?.adjustmentValue?.price ? "price" : element?.adjustmentValue?.adjustmentAmount ? "fixed_amount" : "percentage";
                                let _adjustmentValue =
                                    adjustmentType == "percentage"
                                    ? element?.adjustmentValue?.adjustmentPercentage
                                    : adjustmentType == "price"
                                    ? element?.adjustmentValue?.price?.amount
                                    : element?.adjustmentValue?.adjustmentAmount?.amount;
                                return {
                                    orderCount: element.orderCount,
                                    position: index + 1,
                                    value_type: adjustmentType,
                                    value: adjustmentType == "percentage" ? parseFloat(_adjustmentValue) : parseFloat(_adjustmentValue) * 100,
                                };
                                }),
                            };
                            }),
                            recurring_deliveries: item.recurringDeliveries,
                        };
                        });
            
                        sellingPlanGroupsFlattened.push(tempArray);
            
                        return sellingPlanGroupsFlattened.flat();
                    };
            
                    const getSellingPlansGroupId = (sellingPlansGroup, sellingPlanId) => {
                        for (let i = 0; i < sellingPlansGroup?.length; i++) {
                        let currGroupData = sellingPlansGroup[i];
                        let foundSellingPlan = currGroupData?.selling_plans?.find((sellingPlan) => sellingPlan?.id == sellingPlanId);
                        if (foundSellingPlan) {
                            return currGroupData?.id;
                        }
                        }
                    };
            
                    const transformSellingPlanAllocation = (sellingPlanAllocations, sellingPlansGroup) => {
                        // let response = gbbMix.graphQlUtility.flattenGraphQLResponse(sellingPlanAllocations);
                        let response = sellingPlanAllocations;
                        response = response.map((el) => {
                        let sellingPlanId = parseInt(el?.node?.sellingPlan?.id?.split("/").pop());
                        return {
                            compare_at_price: parseFloat(el?.node?.priceAdjustments[0]?.compareAtPrice?.amount) * 100,
                            per_delivery_price: parseFloat(el?.node?.priceAdjustments[0]?.perDeliveryPrice?.amount) * 100,
                            price: parseFloat(el?.node?.priceAdjustments[0]?.price?.amount) * 100,
                            selling_plan_id: sellingPlanId,
                            selling_plan_group_id: getSellingPlansGroupId(sellingPlansGroup, sellingPlanId) || null,
                            price_adjustments: [{ position: 1, price: parseFloat(el?.node?.priceAdjustments[0]?.price?.amount) * 100 }],
                        };
                        });
                        return response;
                    };
            
                    let newProductArray = JSON.parse(JSON.stringify(cleanedData));
                    let returningArray = [];
                    

                    for (let i = 0; i < cleanedData.length; i++) {
                            const originalProduct = newProductArray[i];

                            // Initialize currProduct as an empty object
                            const currProduct = {};

                            // Assigning necessary fields to currProduct
                            const splitProductId = originalProduct.id.split("/");
                            const pureProductId = parseInt(splitProductId[splitProductId.length - 1]);

                            currProduct["id"] = pureProductId;
                            
                            currProduct["title"] = originalProduct?.title;
                            currProduct["description"] = originalProduct?.description;
                            currProduct["created_at"] = originalProduct?.createdAt;
                            currProduct["handle"] = originalProduct?.handle;
                            currProduct["vendor"] = originalProduct?.vendor;
                            currProduct["tags"] = originalProduct?.tags;

                            currProduct["available"] = originalProduct?.availableForSale;
                            currProduct["featured_image"] = originalProduct?.featuredImage?.originalSrc;
                            currProduct["featured_image_transformed_src"] = originalProduct?.featuredImage?.transformedSrc;

                            
                            currProduct["type"] = originalProduct?.productType;

                            currProduct["images"] = originalProduct?.images?.map((item) =>
                                gfg.utility.trimHttps(item?.originalSrc)
                            );

                            currProduct["media"] = originalProduct?.images?.map((item, index) => ({
                                alt: item.alt,
                                computedPosition: index + 1,
                                gid: item.id,
                                id: item.id?.split("/").pop(),
                                src: item?.originalSrc,
                            }));

                            currProduct["compare_at_price"] =
                                (originalProduct?.compareAtPriceRange?.maxVariantPrice?.amount ||
                                originalProduct?.compareAtPriceRange?.minVariantPrice?.amount) * 100 || null;

                            currProduct["price"] =
                                (originalProduct?.priceRange?.maxVariantPrice?.amount ||
                                originalProduct?.priceRange?.minVariantPrice?.amount) * 100;

                            currProduct["selling_plan_groups"] = [];

                            // Initialize variants array
                            currProduct["variants"] = [];
                            currProduct["metafields"] = getAllMetafieldValuesInArray(originalProduct);

                            const ogVariants = originalProduct.variants;

                            // Process variants
                            for (let j = 0; j < ogVariants.length; j++) {
                                const tempOptions = ogVariants[j]?.selectedOptions || [];
                                const variantId = parseInt(ogVariants[j].id.split("/").pop());

                                const variant = {
                                    "id": variantId,
                                    "title": ogVariants[j].title,
                                    "available": ogVariants[j].availableForSale,
                                    "price": parseFloat(ogVariants[j].price.amount) * 100,
                                    "options": tempOptions.map((item) => item.value),
                                    "option1": tempOptions[0]?.value || null,
                                    "option2": tempOptions[1]?.value || null,
                                    "option3": tempOptions[2]?.value || null,
                                    "public_title": tempOptions.map((item) => item.value).join(" / "),
                                    "name":
                                        ogVariants[j].title === "Default Title"
                                        ? currProduct["title"]
                                        : currProduct["title"] + " - " + ogVariants[j].title,
                                    "featured_image": {
                                        "id": ogVariants[j]?.image?.id?.split("/").pop(),
                                        "src": ogVariants[j]?.image?.originalSrc,
                                        "transformed_src": ogVariants[j]?.image?.transformedSrc,
                                    },
                                    "compare_at_price": ogVariants[j].compareAtPrice
                                        ? parseFloat(ogVariants[j].compareAtPrice.amount) * 100
                                        : null,
                                    "selling_plan_allocations": [],
                                };

                                currProduct["variants"].push(variant);
                            }

                            // Push the fully constructed currProduct to the returningArray
                            returningArray.push(currProduct);
                    }
            
                    return returningArray;
            } 
            catch (error) {
              gfg.utility.debugError("error in dataMappingFromGraphQL ", error);  
            }
        },
        trimHttps: function(url) {
           try {
                if (url.startsWith("https:")) {
                    return url.substring(6); // Remove the first 6 characters ("https:")
                }
                return url; // Return the original string if it doesn't start with "https:" 
           } catch (error) {
                gfg.utility.debugError("error in trimHttps", error);
           }
        },
        appendKiteUniqueIdToItemsProperty: function(items = []){
            try {
                items = items.map((item)=>{
                    if(item?.hasOwnProperty("_kite_uid")){
                        delete item["_kite_uid"];
                    }
                    item.properties["_kite_uid"] = gfg.utility.randomIdGenerator(20);
                    return item;
                })
                return items;
            } catch (error) {
                gfg.utility.debugError("error in appendKiteUniqueIdToItemsProperty", error);
            }
        },
        randomIdGenerator: function(length){
            try {
                let result = '';
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                const charactersLength = characters.length;
                for (let i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }
            catch (error) {
                gfg.utility.debugError("error in randomIdGenerator", error);
            }
        },
        generateMetafieldQueries: function(metafields) {

            try {
                
                return metafields.map((metafield) => {
                    const { key, namespace } = metafield;
                    return `metafield_${namespace}_${key}: metafield(key:"${key}", namespace:"${namespace}"){ 
                        id 
                        key
                        value
                        description
                    }`;
                }).join(' ');
            } catch (error) {
                gfg.utility.debugError("error in generateMetafieldQueries", error);
            }

        },
        getCartV2: async function (options = {}) {
            try {
                const { 
                    forceRefresh = false, 
                    maxAge = 5000 
                } = options;
        
                const now = Date.now();
                const cache = gfg.state.cartCache;
        
                // Check if we have valid cached data
                if (!forceRefresh && 
                    cache.data && 
                    cache.timestamp && 
                    (now - cache.timestamp) < maxAge) {

                    gfg.state.cartData = JSON.parse(JSON.stringify(cache.data));
                    return cache.data;
                }
        
                // If already loading, wait for existing request
                if (cache.isLoading) {
                    return new Promise((resolve, reject) => {
                        cache.pendingPromises.push({ resolve, reject });
                    });
                }
        
                // Fetch fresh data
                cache.isLoading = true;
                
                const url = "/cart.js?app=gfgfreegift&source=getCartV2";
                const response = await fetch(url);
                const result = await response.json();

                gfg.state.cartData = JSON.parse(JSON.stringify(result));
        
                // Update cache
                gfg.utility.updateCache(result);
        
                // Resolve pending promises
                const pending = cache.pendingPromises;
                cache.pendingPromises = [];
                pending.forEach(({ resolve }) => resolve(result));
        
                return result;
        
            } catch (error) {
                const cache = gfg.state.cartCache;
                cache.isLoading = false;
                
                const pending = cache.pendingPromises;
                cache.pendingPromises = [];
                pending.forEach(({ reject }) => reject(error));
        
                gfg.utility.debugError("gfg-utility-getCartV2", error);
                return false;
            }
        },
        updateCache : function(cartData) {
            try {
                if (!cartData) return;
        
                const cache = gfg.state.cartCache;
                cache.data = cartData;
                cache.timestamp = Date.now();
                cache.isLoading = false;

                const newReferencedCartData = JSON.parse(JSON.stringify(cartData));
                gfg.state.cartData = newReferencedCartData;
            
                // Keep existing behavior
                gfg.utility.refreshFreeGiftCartData(newReferencedCartData);
                return true;
            } catch (error) {
                gfg.utility.debugError("error in updateCache", error);
                return false;
            }
        },
        sendErrorLogAlerts: async function (logs = []) {
            try {
              const [logMessage, error] = logs;
              if(gfg.excludeErrors.some(log => log.startsWith(error?.message ?? logMessage))) return;
              const cacheKey = "gfgErrorLogsMap";
              if (!gfg.errorLogs) {
                const gfgExtErrorLogsMap = sessionStorage.getItem(cacheKey);
                gfg.errorLogs = gfgExtErrorLogsMap ? JSON.parse(gfgExtErrorLogsMap) : {};   
              }
              if (!gfg.errorLogs?.[logMessage]?.[error?.message]) {
                gfg.errorLogs[logMessage] = { ...(gfg.errorLogs?.[logMessage] ?? {}), [error?.message]: true };
                const fields = {
                    shopName: gfg?.settings?.merchantInfo?.shopName, 
                    currentUrl: window.location.href, 
                    browserDetails: window?.navigator?.userAgent, 
                    origin: "kite-storefront-extension-files", 
                    logMessage: logMessage
                  };
                const errorData = {message: error?.message, stack: error?.stack};
                const data = {fields, error: errorData};
                sessionStorage.setItem(cacheKey, JSON.stringify(gfg.errorLogs));
                try {
                  const response = await fetch("/apps/kite/triggerErrorSlackNotification", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });
                  if (!response?.ok) {
                    gfg.utility.debugConsole("Error Log Notification Sent Failed", response?.status);
                  }
      
                  gfg.utility.debugConsole("Error Log Notification Sent Successfully", response?.status);
                } catch (error) {
                  gfg.utility.debugConsole("Error Log Notification Sent Failed", error);
                }
              }
            } catch (error) {
              gfg.utility.debugConsole("error inside sendErrorLogAlerts", error);
            }
        },
        injectCssIntoShadowRoot: function(shadowRootReference){
            try {
                
                const linkElement = document.querySelector('link[href*="freeGiftLogicv1"]');
                if(linkElement?.href){
                    const externalLinkElement = document.createElement('link');
                    externalLinkElement.rel = 'stylesheet';
                    externalLinkElement.href = linkElement.href;
                    shadowRootReference.appendChild(externalLinkElement);
                }

            } catch (error) {
                gfg.utility.debugError("error in injectCssIntoShadowRoot", error);
            }
        },
        isPageRelevantForWidget: function(displaySettings, pageType) {
            try {
              const allProductPages = pageType === "PRODUCT_PAGE" && displaySettings?.productPages;
              const specificProductPages =
                pageType === "PRODUCT_PAGE" && displaySettings?.specificProductPages;
              const specificCollectionPages =
                pageType === "PRODUCT_PAGE" && displaySettings?.specificCollectionPages;
              const cartPage = pageType === "CART_PAGE" && displaySettings?.cartPage;
              const sideCart = pageType === "SIDE_CART" && displaySettings?.sideCart;

              if (cartPage || sideCart || allProductPages) {
                return true;
              }

              if (specificProductPages) {
                const specificProduct = displaySettings.specificProducts;
                const currProductPageHandle = gfg.f.getProductPageHandle();
                const currProductPageProductId = gfg.f.getProductPageId();
                for (const product of specificProduct) {
                  if (currProductPageHandle === product.handle || currProductPageProductId == product.productId) {
                    return true;
                  }
                }
              }

              if (specificCollectionPages) {
                const specificCollection = displaySettings.specificCollections;
                const currProductPageCollections = window.shopifyLiquidValuesApp7Ext.product?.collections || [];

                if (currProductPageCollections.length === 0) {
                  return false;
                }

                for (const collection of specificCollection) {
                  const collectionId = collection.id.replace("gid://shopify/Collection/", "");
                  const isValidCollection = currProductPageCollections.find(
                    (c) => c.handle == collection.handle || c.id == collectionId
                  );
                  if (isValidCollection) {
                    return true;
                  }
                }
              }
              return false;
            } catch (error) {
              gfg.utility.debugError("error in isPageRelevantForWidget", error);
              return false;
            }
        }
    },
    
    productPage: {
        init: async function (settings) {
            gfg.utility.debugConsole("productPage-init")
            gfg.productPage.f.insertWrapperIntoPage(settings)
            // Null checks for conditionally loaded features
            if (gfg.gfgFreeGift && !gfg.gfgFreeGift._isStub) gfg.gfgFreeGift.init(settings, "PRODUCT_PAGE")
            if (gfg.gfgFreeGiftV2 && !gfg.gfgFreeGiftV2._isStub && settings.freeGiftsV2?.length > 0) gfg.gfgFreeGiftV2.init(settings.freeGiftsV2)
            if (gfg.gfgVolDiscount && !gfg.gfgVolDiscount._isStub) gfg.gfgVolDiscount.init(settings, "PRODUCT_PAGE")
            if (gfg.gfgBogoFeature && !gfg.gfgBogoFeature._isStub) gfg.gfgBogoFeature.init(settings, "PRODUCT_PAGE")
            if (gfg.gfgUnifiedWidget && !gfg.gfgUnifiedWidget._isStub) gfg.gfgUnifiedWidget.init(settings , "PRODUCT_PAGE");
            if (typeof gfgCustomDiscount !== 'undefined' && gfgCustomDiscount.init) gfgCustomDiscount.init();
            if (typeof gfgConsolidatedCustomDiscount !== 'undefined' && gfgConsolidatedCustomDiscount.init) gfgConsolidatedCustomDiscount.init();
        },
        f: {
            insertWrapperIntoPage: function (settings) {
                const isProductPageAppBlockPresent = document.querySelector(".gfgProductPageAppBlock");
            
                if (isProductPageAppBlockPresent) {
                    gfg.utility.debugConsole("product page app block present");
                    return;
                }
            
                const isProductPage = gfg.state.page_type === "product";
                const addToCartButton = gfg.elements.addToCartBtn;
                const productPageWrapperExists = document.querySelector(gfg.selectors.productPageWrapperV2);
            
                if (isProductPage && addToCartButton && !productPageWrapperExists) {
                    const btn = addToCartButton;
                    if (btn.offsetParent) { // Check visibility
                        const parent = btn.parentNode;
                        const targetElement = gfg.elements.productPageWrapperV2;
        
                        parent.insertBefore(
                            targetElement,
                            gfg.settings.app.addAfterAddTocartBtn ? btn.nextSibling : btn
                        );
                    }
                }
            },
        },
         
        actions: {
            insertUpsellModal: function () {

                alert("popModal for upsell action")
            },
        },
    },
    cartPage: {
        init: async function (settings) {
            gfg.utility.debugConsole("cartPage-init")
            gfg.cartPage.f.insertSideCartWrappersIntoPage(settings)
            gfg.cartPage.f.insertWrapperIntoPage(settings)
            // Null checks for conditionally loaded features
            if (gfg.gfgFreeGift && !gfg.gfgFreeGift._isStub) gfg.gfgFreeGift.init(settings, "CART_PAGE")
            if (gfg.gfgFreeGiftV2 && !gfg.gfgFreeGiftV2._isStub && settings.freeGiftsV2?.length > 0) gfg.gfgFreeGiftV2.init(settings.freeGiftsV2)
            if (gfg.gfgVolDiscount && !gfg.gfgVolDiscount._isStub) gfg.gfgVolDiscount.init(settings, "CART_PAGE")
            if (gfg.gfgBogoFeature && !gfg.gfgBogoFeature._isStub) gfg.gfgBogoFeature.init(settings, "CART_PAGE")
            if (gfg.gfgUnifiedWidget && !gfg.gfgUnifiedWidget._isStub) gfg.gfgUnifiedWidget.init(settings , "CART_PAGE")
            if (typeof gfgCustomDiscount !== 'undefined' && gfgCustomDiscount.init) gfgCustomDiscount.init();
            if (typeof gfgConsolidatedCustomDiscount !== 'undefined' && gfgConsolidatedCustomDiscount.init) gfgConsolidatedCustomDiscount.init();
            // Initialize MutationObserver-based cart drawer observer for side cart
            if (gfg.state.page_type !== "cart") {
                gfg.cartDrawerObserver.init();
            }
        },
        f: {
            insertWrapperIntoPage: function (settings) {
                const isCartPageAppBlockPresent = document.querySelector(".gfgCartPageAppBlock");
            
                if (isCartPageAppBlockPresent) {
                    gfg.utility.debugConsole("Cart page app block present");
                    return;
                }
            
                const checkoutButtons = document.querySelectorAll(gfg.selectors.checkoutBtn);
                const isCartPageWrapperPresent = document.querySelector(gfg.selectors.cartPageWrapperV2);
            
                if (!checkoutButtons.length || isCartPageWrapperPresent) return;
            
                return new Promise((resolve) => {
                    checkoutButtons.forEach((button) => {
                        if (!button.offsetParent) return; // Skip invisible buttons
            
                        const { theme_store_id } = window.Shopify?.theme || {};
                        const isDawnTheme = theme_store_id === gfg.constants.themesIds.DAWN_THEME;
                        const wrapper = gfg.elements.cartPageWrapperV2;
            
                        if (isDawnTheme) {
                            button.parentNode.parentNode.insertBefore(wrapper, button.parentNode);
                        } else if (gfg.settings.app.addAftercheckoutBtn) {
                            button.parentNode.insertBefore(wrapper, button.nextSibling);
                        } else {
                            button.parentNode.insertBefore(wrapper, button);
                        }
                    });
                    resolve();
                });
            }
            ,
            insertSideCartWrappersIntoPage: function(settings) {
                try {

                    if(gfg.state.page_type === "cart"){
                        return;
                    }

                    const features = [
                        { 
                            selector: gfg.settings.app?.freeGiftSideCartSelector,
                            insertAbove: gfg.settings.app?.freeGiftSideCartWrapperAboveSelector,
                            wrapper: FREEGIFT_SIDE_CART_WRAPPER,
                            wrapperSelector: FREEGIFT_SIDE_CART_WRAPPER_SELECTOR
                        },
                        { 
                            selector: gfg.settings.app?.volumeDiscountSideCartSelector, 
                            insertAbove: gfg.settings.app?.volumeDiscountSideCartWrapperAboveSelector,
                            wrapper: VOLUME_DISCOUNT_SIDE_CART_WRAPPER ,
                            wrapperSelector: VOLUME_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR
                        },
                        { 
                            selector: gfg.settings.app?.unifiedSideCartSelector, 
                            insertAbove: gfg.settings.app?.unifiedSideCartWrapperAboveSelector,
                            wrapper: UNIFIED_SIDE_CART_WRAPPER ,
                            wrapperSelector: UNIFIED_SIDE_CART_WRAPPER_SELECTOR
                        },
                        { 
                            selector: gfg.settings.app?.customDiscountSideCartSelector, 
                            insertAbove: gfg.settings.app?.customDiscountSideCartWrapperAboveSelector,
                            wrapper: CUSTOM_DISCOUNT_SIDE_CART_WRAPPER ,
                            wrapperSelector: CUSTOM_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR
                        },
                        {
                            selector: gfg.settings.app?.consolidatedProgressBarSideCartSelector || DEFAULT_sideCartWidgetShowAboveSelectorsApp7Ext,
                            insertAbove: gfg.settings.app?.consolidatedProgressBarSideCartWrapperAboveSelector,
                            wrapper: CONSOLIDATED_PROGRESS_BAR_SIDE_CART_WRAPPER,
                            wrapperSelector: CONSOLIDATED_PROGRESS_BAR_SIDE_CART_WRAPPER_SELECTOR
                        },
                        {
                            selector: gfg.settings.app?.shippingDiscountSideCartSelector, 
                            insertAbove: gfg.settings.app?.shippingDiscountSideCartWrapperAboveSelector,
                            wrapper: SHIPPING_DISCOUNT_SIDE_CART_WRAPPER ,
                            wrapperSelector: SHIPPING_DISCOUNT_SIDE_CART_WRAPPER_SELECTOR
                        }
                    ];

                    let reference = document;
                    if(gfg.state.shadowRoot.isDetected){
                        reference = gfg.state.shadowRoot.reference;
                    }
            
                    features.forEach(feature => {
                        if (feature.selector && !reference.querySelector(feature.wrapperSelector)) {
                            gfg.utility.injectWrapperRelativeToSelector(
                                feature.wrapper, 
                                feature.selector, 
                                feature.insertAbove,
                                feature.wrapperSelector  // Pass wrapper selector to check by class instead of element reference
                            );
                        }
                    });
            
                    
                } catch (error) {
                    gfg.utility.debugConsole("error in insertSideCartWrappersIntoPage", error);
                }
            },
            
        },
        events: {
            ajaxSuccess: function (cartSettings) {
               return;
            }
        }
    },
    customDiscountValidationFunctions: {
        updateCartAttributesWithTotalAmountWithoutFreeGift: async function (cartData) {
            try {
      
              const attributesObject = cartData.attributes;
              //sending the discount amount in merchant's admin currency
              const calculatedDiscountedCartTotal =
                Number(gfg.customDiscountValidationFunctions.getAmountOfGivenProductsWithoutFreeGift(cartData.items)) /
                Number(gfg.utility.getActiveCurrencyRate());
                
              if(attributesObject && attributesObject["_kite_cfAdditionalData"]) {
                let kiteCfAdditionalData = JSON.parse(attributesObject["_kite_cfAdditionalData"]);
                const attributeDiscountedValue = kiteCfAdditionalData.totalAmountWithoutFreeGift;
                if(calculatedDiscountedCartTotal === attributeDiscountedValue) {
                  return;
                }
              }
      
              const attributeValue = {
                totalAmountWithoutFreeGift: calculatedDiscountedCartTotal
              }
              const dataToBeUpdated = {
                attributes: {
                  _kite_cfAdditionalData: JSON.stringify(attributeValue),
                }
              }
              await gfg.utility.updateCart(dataToBeUpdated);
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 updateCartAttributesWithTotalAmountWithoutFreeGift fn`, error);
            }
        },
        checkForActiveCampaign: function (discountData) {
            try {
              const campaignScheduleData = discountData?.campaignScheduleData;
              // If there is no campaign schedule data or the campaign is not scheduled, include the discount
              if (!campaignScheduleData || campaignScheduleData?.campaignSchedule != "SCHEDULED") {
                return true;
              }
      
              // If the campaign is scheduled, check if the current date falls within the start and end dates
              if (campaignScheduleData?.campaignSchedule == "SCHEDULED") {
                let currentDateUTC = new Date().toISOString();
                let startDateTime_UTC = campaignScheduleData.startDateTime_UTC;
                let endDateTime_UTC = campaignScheduleData.endDateTime_UTC;
      
                if (currentDateUTC >= startDateTime_UTC && currentDateUTC <= endDateTime_UTC) {
                  return true;
                }
              }
      
              return false;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgdiscountDataV2 checkForActiveCampaign fn`, error);
            }
        },
        checkCustomDiscountWidgetIsRelevantToCurrentPage: async function (discountData, pageType) {
            try {
              let widgetSettings;
              if(discountData.isUnifiedWidget) {
                widgetSettings = discountData;
              } else {
                widgetSettings = discountData?.widgetSettings
              }
              const rulesResultToShowWidget = await gfg.customDiscountValidationFunctions.checkRulesToHandleWidgetVisibility(discountData);
              if(!rulesResultToShowWidget){
                return false;
              }

              if(discountData.salesChannelSettings && !discountData.salesChannelSettings?.channels?.includes("ONLINE_STORE")) {
                return false;
              }

              return gfg.utility.isPageRelevantForWidget(widgetSettings?.displaySettings, pageType);
            } catch (error) {
              gfg.utility.debugError(`Error inside checkCustomDiscountWidgetIsRelevantToCurrentPage fn`, error);
            }
        },
        checkRulesToHandleWidgetVisibility: async function (discountData) {
            let result = true;
            try {
              let rulesData = discountData?.rulesData?.rulesGlobalList?.[0];
              if(discountData.isUnifiedWidget) {
                rulesData = discountData.customerRulesData.rulesGlobalList[0];
              } else if(discountData?.discountFunctionType === "CONSOLIDATED_PROGRESS_BAR") {
                rulesData = discountData.customerEligibilityRules;
              } else if(discountData?.discountFunctionType === "BUYX_GETY_DISCOUNT") {
                rulesData = discountData.customerEligibilityRules;
              }
              const rulesOperator = rulesData?.rulesOperator || "OR";
              const rulesList = rulesData?.rulesList || [];

              if(rulesList.length === 0) return true;
      
              const evaluateRules = [];
              for(let rule of rulesList){
      
                switch(rule.ruleType){
                  // currently handling widget visibility of widget for Shipping rules only & for other rules it will return true
                  case "shippingCountry":
                    evaluateRules.push(await gfg.customDiscountValidationFunctions.validateShippingRule(null,rule));
                    break;
                  case "customerTags":
                   evaluateRules.push(gfg.customDiscountValidationFunctions.checkIfCustomerTagsConditionMet(null,rule));
                   break;
                  case "isCustomerLoggedIn":
                  evaluateRules.push(gfg.customDiscountValidationFunctions.checkIfCustomerLoggedInConditionMet(null,rule));
                  break;
                  case "market":
                  evaluateRules.push(gfg.customDiscountValidationFunctions.checkIfMarketConditionMet(null,rule));
                  break;
                  default:
                    evaluateRules.push(true);
                }
              }
            if(rulesOperator === "AND"){
                result = evaluateRules.every((curr) => curr);
              }
              else{
                result = evaluateRules.some((curr) => curr);
              }
            } catch (error) {
               gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkRulesToHandleWidgetVisibility fn`, error);
            } finally{
              return result;
            }
        },
        verifyCustomDiscountRules: async function (customDiscount, cartData) {
            try {
              const rulesOperator = customDiscount.rulesData.rulesGlobalList[0].rulesOperator;
              const rulesList = customDiscount.rulesData.rulesGlobalList[0].rulesList;
      
              let evaluateRules = [];
              if(rulesList.length === 0) {
                evaluateRules.push(true);
              }
              
              for (let rule of rulesList) {
                if(customDiscount.isUnifiedWidget) {
                    rule.isUnifiedWidget = true;
                    rule.discountType = rule.discountSettings.type
                }
                if(customDiscount?.discountFunctionType && customDiscount.discountFunctionType == "SHIPPING_DISCOUNT" && customDiscount?.advancedSettings?.onlyUseWidget) {
                    rule.onlyUseWidget = true
                }
                if(customDiscount?.advancedSettings?.useDiscountedPrice) {
                    rule.useDiscountedPrice = true
                }
                let isRuleVerfied = await gfg.customDiscountValidationFunctions.checkRuleGroup(rule, cartData);
                evaluateRules.push(isRuleVerfied);
              }
      
              let verificationConditionMet = false;
              if (rulesOperator === "AND") {
                verificationConditionMet = evaluateRules.every(Boolean);
              } else {
                verificationConditionMet = evaluateRules.some(Boolean);
              }
      
              for (let i = 0; i < evaluateRules.length; i++) {
                let widgetSettings = customDiscount;
                let isConditionMet = evaluateRules[i];
                if(!customDiscount.isUnifiedWidget && customDiscount?.widgetSettings) {
                    customDiscount.widgetSettings.titleBar.conditionMet = verificationConditionMet;
                    customDiscount.widgetSettings.rulesData.rulesGlobalList[0].finalCheckBox.conditionMet = verificationConditionMet;
                    widgetSettings = customDiscount.widgetSettings;
                }
                if(customDiscount.widgetSettings || customDiscount.isUnifiedWidget) {
                    widgetSettings.rulesData.rulesGlobalList[0].rulesList[i].conditionMet = isConditionMet;
                    widgetSettings.rulesData.rulesGlobalList[0].rulesList[i].ruleValue = rulesList[i].ruleValue;
                    widgetSettings.rulesData.rulesGlobalList[0].rulesList[i].ruleType = rulesList[i].ruleType;
                }
              }

              return verificationConditionMet;

            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 verifyCustomDiscountRules fn`, error);
            }
        },
        getQtyOfGivenProducts: function (items) {
            try {
              let totalQuantity = 0;
              for(let i=0; i<items.length; i++) {
                let line = items[i];
                let lineQuantity = line.quantity;
                totalQuantity += lineQuantity;
              }
              return totalQuantity;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfCartQuantityConditionMet fn`, error);
            }
        },
        getAmountOfGivenProducts: function (items) {
            try {
              let totalAmount = 0;
              for(let i=0; i<items.length; i++) {
                let line = items[i];
                let lineQuantity = line.quantity;
                const lineAmount = parseFloat(lineQuantity * (line.price / 100))
                totalAmount += lineAmount;
              }
              return totalAmount;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfCartQuantityConditionMet fn`, error);
            }
        },
        getAmountOfGivenProductsWithDiscountedValue: function (items) {
            try {
              let totalAmount = 0;
              for(let i=0; i<items.length; i++) {
                let line = items[i];
                let lineQuantity = line.quantity;
                const lineAmount = parseFloat((line.final_line_price / 100))
                totalAmount += lineAmount;
              }
              return totalAmount;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfCartQuantityConditionMet fn`, error);
            }
        },
        getDiscountedPriceOfCart: function (cartData) {
            try {
                return parseFloat(cartData.total_price / 100);
            } catch (error) {
                gfg.utility.debugError(`Error inside gfgShippingDiscountV2 getDiscountedPriceOfCart fn`, error);
            }
        },
        getDiscountedAmountOfGivenProductsWithoutCurrentDiscount: function (items, currentDiscountTitle) {
            try {
                let totalAmount = 0;
                for(let i=0; i<items.length; i++) {
                    const line = items[i];
                    const discounts = line.discounts;
                    const discount = discounts.find((discount) => discount.title === currentDiscountTitle);
                    if(discount) {
                        totalAmount += parseFloat(line.original_line_price / 100);
                    } else {
                        totalAmount += parseFloat(line.final_line_price / 100);
                    }
                }
                return totalAmount;
            } catch (error) {
                gfg.utility.debugError(`Error inside gfgShippingDiscountV2 getDiscountedAmountOfGivenProductsWithoutCurrentDiscount fn`, error);
            }
        },
        getAmountOfGivenProductsWithoutFreeGift: function (items) {
            try {
              let totalAmount = 0;
              for(let i=0; i<items.length; i++) {
                let line = items[i];
                const lineAttributeObj = line.properties;
                const lineAttributeValue = lineAttributeObj["_free_product"];
                if(lineAttributeValue) {
                    continue;
                }
                let lineQuantity = line.quantity;
                const lineAmount = parseFloat(lineQuantity * (line.price / 100))
                totalAmount += lineAmount;
              }
              return totalAmount;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfCartQuantityConditionMet fn`, error);
            }
        },
        getQtyOfGivenProductsWithoutFreeGift: function (items) {
            try {
              let totalQty = 0;
              for(let i=0; i<items.length; i++) {
                let line = items[i];
                const lineAttributeObj = line.properties;
                const lineAttributeValue = lineAttributeObj["_free_product"];
                if(lineAttributeValue) {
                    continue;
                }
                let lineQuantity = line.quantity;
                totalQty += lineQuantity;
              }
              return totalQty;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfCartQuantityConditionMet fn`, error);
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
                comparisonValue = parseFloat(cartData?.original_total_price);
                
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
      
            } catch(err) {
                gfg.utility.debugError(`err inside getValidTieredDiscountValue`, err);
            }
        },
        checkIfCartSubTotalConditionMet: function (cartData, ruleData) {
            try {
              let { operatorType, value } = ruleData.ruleValue;
              const currencyRate = gfg.utility.getActiveCurrencyRate();
              value = value * currencyRate;
              let total = cartData.items_subtotal_price / 100;
              if(ruleData?.isUnifiedWidget || ruleData?.onlyUseWidget) {
                if(ruleData?.useDiscountedPrice) {
                    total = gfg.customDiscountValidationFunctions.getDiscountedPriceOfCart(cartData);
                } else {
                    total = gfg.customDiscountValidationFunctions.getAmountOfGivenProductsWithoutFreeGift(cartData.items);                
                }
              }
              const remainingSubtotalValue = (value - total >= 0 ? value - total : 0).toFixed(2);
              let dynamicProgressBarWidth = ((total / value) * 100).toFixed(2);
              let isConditionSatisfied = false;
              switch (operatorType) {
                case "equalTo":
                  isConditionSatisfied = total === Number(value);
                  dynamicProgressBarWidth = dynamicProgressBarWidth <= 100 ? dynamicProgressBarWidth : 100;
                  break;
                case "greaterThanOrEqualTo":
                  isConditionSatisfied = total >= Number(value);
                  dynamicProgressBarWidth = dynamicProgressBarWidth <= 100 ? dynamicProgressBarWidth : 100;
                  break;
                case "lessThanOrEqualTo":
                  isConditionSatisfied = total <= Number(value);
                  dynamicProgressBarWidth = isConditionSatisfied ? 100 : 0;
                  break;
                default:
                  isConditionSatisfied = false;
              }
              ruleData.ruleValue.remainingSubtotalValue = remainingSubtotalValue;
              ruleData.ruleValue.dynamicProgressBarWidth = dynamicProgressBarWidth;
              return isConditionSatisfied;
            } catch (err) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfCartSubTotalConditionMet fn`, err);
              return false;
            }
          },
          checkIfCartQuantityConditionMet: function (cartData, ruleData) {
            try {
              let { operatorType, value } = ruleData.ruleValue;
              let totalQuantity = cartData.item_count;
              if(ruleData?.isUnifiedWidget) {
                totalQuantity = this.getQtyOfGivenProductsWithoutFreeGift(cartData.items);                
             }
              const remainingQuantityValue = value - totalQuantity >= 0 ? value - totalQuantity : 0;
              let dynamicProgressBarWidth = (totalQuantity / value).toFixed(2) * 100;
              let isConditionSatisfied = false;
              switch (operatorType) {
                case "equalTo":
                  isConditionSatisfied = totalQuantity === Number(value);
                  dynamicProgressBarWidth = dynamicProgressBarWidth <= 100 ? dynamicProgressBarWidth : 100;
                  break;
                case "greaterThanOrEqualTo":
                  isConditionSatisfied = totalQuantity >= Number(value);
                  dynamicProgressBarWidth = dynamicProgressBarWidth <= 100 ? dynamicProgressBarWidth : 100;
                  break;
                case "lessThanOrEqualTo":
                  isConditionSatisfied = totalQuantity <= Number(value);
                  dynamicProgressBarWidth = isConditionSatisfied ? 100 : 0;
                  break;
                default:
                  isConditionSatisfied = false;
              }
      
              ruleData.ruleValue.remainingQuantityValue = remainingQuantityValue;
              ruleData.ruleValue.dynamicProgressBarWidth = dynamicProgressBarWidth;
              return isConditionSatisfied;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfCartQuantityConditionMet fn`, error);
            }
          },
          checkIfCartCurrencyConditionMet: function (cartData, ruleData) {
            try {
              const { currencies, operatorType } = ruleData.ruleValue;
              const currencyCode = cartData.currency;
              if (operatorType === "is" && currencies.includes(currencyCode)) {
                ruleData.ruleValue.dynamicProgressBarWidth = 100;
                return true;
              }
      
              if (operatorType === "isNot" && !currencies.includes(currencyCode)) {
                ruleData.ruleValue.dynamicProgressBarWidth = 100;
                return true;
              }
      
              ruleData.ruleValue.dynamicProgressBarWidth = 0;
              return false;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfCartCurrencyConditionMet fn`, error);
              return false;
            }
          },
          checkIfAttributesConditionMet: function (cartData, ruleData) {
            try {
              const { attributeKey, attributeValue } = ruleData.ruleValue;
              let qualifiedCartValue = attributeValue.value;
              let qualifiedCartKey = attributeKey.value;
              const cartAttributesObj = cartData.attributes;
              if (Object.keys(cartAttributesObj).length === 0) {
                ruleData.ruleValue.qualifiedCartKey = qualifiedCartKey;
                ruleData.ruleValue.qualifiedCartValue = qualifiedCartValue;
                ruleData.ruleValue.dynamicProgressBarWidth = 0;
                return false;
              }
      
              if (attributeKey.operatorType === "hasAnyValue") {
                ruleData.ruleValue.qualifiedCartKey = qualifiedCartKey;
                ruleData.ruleValue.qualifiedCartValue = qualifiedCartValue;
                ruleData.ruleValue.dynamicProgressBarWidth = 100;
                return Object.keys(cartAttributesObj).length > 0;
              }
      
              if (attributeKey.operatorType === "is" && !cartAttributesObj[attributeKey.value]) {
                ruleData.ruleValue.qualifiedCartKey = qualifiedCartKey;
                ruleData.ruleValue.qualifiedCartValue = qualifiedCartValue;
                ruleData.ruleValue.dynamicProgressBarWidth = 0;
                return false;
              }
      
              const cartAttributeValue = cartAttributesObj[attributeKey.value];
      
              let isConditionSatisfied = false;
              switch (attributeValue.operatorType) {
                case "is":
                  isConditionSatisfied = cartAttributeValue === attributeValue.value;
                  break;
                case "isNot":
                  isConditionSatisfied = cartAttributeValue !== attributeValue.value;
                  break;
                case "contains": {
                  let _cartAttributeValue = JSON.parse(JSON.stringify(cartAttributeValue));
                  _cartAttributeValue = _cartAttributeValue.toLowerCase();
                  isConditionSatisfied = _cartAttributeValue?.includes(attributeValue.value.toLowerCase());
                  break;
                }
                case "doesNotContain": {
                  let _cartAttributeValue = JSON.parse(JSON.stringify(cartAttributeValue));
                  _cartAttributeValue = _cartAttributeValue.toLowerCase();
                  isConditionSatisfied = !_cartAttributeValue?.includes(attributeValue.value.toLowerCase());
                  break;
                }
                default:
                  isConditionSatisfied = false;
              }
      
              ruleData.ruleValue.qualifiedCartKey = qualifiedCartKey;
              ruleData.ruleValue.qualifiedCartValue = qualifiedCartValue;
              ruleData.ruleValue.dynamicProgressBarWidth = isConditionSatisfied ? 100 : 0;
              return isConditionSatisfied;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfAttributesConditionMet fn`, error);
              return false;
            }
          },
          validateCartRule: function (cartData, ruleData) {
            try {
              switch (ruleData.ruleType) {
                case "cartSubtotal":
                  return gfg.customDiscountValidationFunctions.checkIfCartSubTotalConditionMet(cartData, ruleData);
                case "cartQuantity":
                  return gfg.customDiscountValidationFunctions.checkIfCartQuantityConditionMet(cartData, ruleData);
                case "cartCurrency":
                  return gfg.customDiscountValidationFunctions.checkIfCartCurrencyConditionMet(cartData, ruleData);
                case "cartAttributes":
                  return gfg.customDiscountValidationFunctions.checkIfAttributesConditionMet(cartData, ruleData);
                default:
                  gfg.utility.debugConsole(`Unsupported CART ruleType: ${ruleData.ruleType}`);
                  return false;
              }
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 validateCartRule fn`, error);
              return false;
            }
          },
          checkProductCondition: function (lineItem, ruleData) {
            try {
              let itemId = lineItem.variant_id || lineItem.id;
              let isEligible = false;
              const products = ruleData.ruleValue.products.filter((curr) => curr.productId == lineItem.product_id);
              let qualifiedProductObj = {
                title: ruleData.ruleValue.products[0].title,
                handle: ruleData.ruleValue.products[0].handle,
                variantTitle: ruleData.ruleValue.products[0].variants[0].variantTitle,
              };
              for (let product of products) {
                const variants = product.variants;
                let isVariantFound = false;
                let variantTitle = variants[0].variantTitle;
                for (let variant of variants) {
                  if (variant.variantId == itemId) {
                    isEligible = true;
                    isVariantFound = true;
                    variantTitle = variant.variantTitle;
                    break;
                  }
                }
      
                if (isVariantFound) {
                  qualifiedProductObj = { title: product.title, handle: product.handle, variantTitle };
                  break;
                }
              }
      
              ruleData.ruleValue.qualifiedProductObj = qualifiedProductObj;
              const isConditionSatisfied = ruleData.ruleValue.operatorType === "include" ? isEligible : !isEligible;
              return isConditionSatisfied;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkProductCondition fn`, error);
              return false;
            }
          },
          checkCollectionCondition_Old: function (lineItem, ruleData) {
            try {
              const collections = ruleData.ruleValue.collections;
              let qualifiedCollectionObj = { title: ruleData.ruleValue.collections[0].title, handle: ruleData.ruleValue.collections[0].handle };
              const collectionsData = ruleData.ruleValue.collectionsData;
              let isEligible = false;
              for (let i = 0; i < collections.length; i++) {
                let collection = collections[i];
                const collectionData = collectionsData[i];
                const productList = collectionData.productList;
                let itemId = lineItem.product_id;
                let idsToMatch = productList.map((curr) => (curr.productId ? curr.productId + "" : curr.id + ""));
                isEligible = idsToMatch.includes(itemId + "");
                if (isEligible && ruleData.ruleValue.operatorType === "include") {
                  qualifiedCollectionObj = { title: collection.title, handle: collection.handle };
                  break;
                }
              }
      
              ruleData.ruleValue.qualifiedCollectionObj = qualifiedCollectionObj;
              const isConditionSatisfied = ruleData.ruleValue.operatorType === "include" ? isEligible : !isEligible;
              return isConditionSatisfied;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkCollectionCondition fn`, error);
              return false;
            }
          },
          checkCollectionCondition: function (lineItem, ruleData) {
            try {
              const collections = ruleData.ruleValue.collections;
              let qualifiedCollectionObj = { title: ruleData.ruleValue.collections[0].title, handle: ruleData.ruleValue.collections[0].handle };
              let isEligible = false;
              for (let i = 0; i < collections.length; i++) {
                let collection = collections[i];
                let collectionId = collection.id;
                let lineItemsCollections = lineItem.latestShopifyData.collections.map((curr) => curr.id);
                isEligible = lineItemsCollections.includes(collectionId);
                if (isEligible && ruleData.ruleValue.operatorType === "include") {
                  qualifiedCollectionObj = { title: collection.title, handle: collection.handle };
                  break;
                }
              }
      
              ruleData.ruleValue.qualifiedCollectionObj = qualifiedCollectionObj;
              const isConditionSatisfied = ruleData.ruleValue.operatorType === "include" ? isEligible : !isEligible;
              return isConditionSatisfied;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkCollectionCondition fn`, error);
              return false;
            }
          },
          checkProductTypeCondition: function (lineItem, ruleData) {
            try {
              const typesToMatch = ruleData.ruleValue.types;
              const productType = lineItem.latestShopifyData.productType || "";
              const isEligible = typesToMatch.includes(productType);
              ruleData.ruleValue.productType = isEligible ? productType : typesToMatch[0];
              return ruleData.ruleValue.operatorType === "include" ? isEligible : !isEligible;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkProductTypeCondition fn`, error);
            }
          },
          checkProductTypeCondition_Old: function (lineItem, ruleData) {
            try {
              const typesToMatch = ruleData.ruleValue.types;
              const productType = lineItem.latestShopifyData.type || "";
              const isEligible = typesToMatch.includes(productType);
              ruleData.ruleValue.productType = isEligible ? productType : typesToMatch[0];
              return ruleData.ruleValue.operatorType === "include" ? isEligible : !isEligible;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkProductTypeCondition_Old fn`, error);
            }
          },
          checkTagCondition: function (lineItem, ruleData) {
            try {
              const tagsToMatch = ruleData.ruleValue.tags;
              const productTags = lineItem.latestShopifyData.tags || [];
              let matchingTag = tagsToMatch[0];
              const isEligible = productTags.some((tagInfo) => {
                for (tag of tagsToMatch) {
                  if (tagInfo === tag) {
                    matchingTag = tag;
                    return true;
                  }
                }
      
                return false;
              });
      
              ruleData.ruleValue.tagName = matchingTag;
              return ruleData.ruleValue.operatorType === "include" ? isEligible : !isEligible;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkTagCondition fn`, error);
            }
          },
          checkSubscriptionCondition: function (lineItem, ruleData) {
            try {
              const productHasSubscription = lineItem?.selling_plan_allocation?.selling_plan?.options?.length > 0 || false;
              const sellingPlanName = lineItem?.selling_plan_allocation?.selling_plan?.name || "";
              let isConditionSatisfied = false;
              switch(ruleData.ruleValue.operatorType) {
                case 'include':
                  isConditionSatisfied = Boolean(productHasSubscription);
                  break;
                case 'exclude':
                  isConditionSatisfied = !Boolean(productHasSubscription);
                  break;
                case 'is':
                  isConditionSatisfied = sellingPlanName === ruleData.ruleValue.value;
                  break;
                case 'isNot':
                  isConditionSatisfied = sellingPlanName !== ruleData.ruleValue.value;
                  break;
                default:
                  gfg.utility.debugConsole("Unsupported operator type:", ruleData.ruleValue.operatorType);
                  isConditionSatisfied = false;

              }
              return isConditionSatisfied;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkSubscriptionCondition fn`, error);
            }
          },
          checkLineAttributeCondition: function (lineItem, ruleData) {
            try {
              const { attributeKey, attributeValue } = ruleData.ruleValue;
              let qualifiedLineValue = attributeValue.value;
              let qualifiedLineProperty = attributeKey.value;
              const lineAttributeObj = lineItem.properties;
              if (attributeKey.operatorType === "hasAnyValue" && Object.keys(lineAttributeObj).length > 0) {
                ruleData.ruleValue.qualifiedLineValue = qualifiedLineValue;
                ruleData.ruleValue.qualifiedLineProperty = qualifiedLineProperty;
                ruleData.ruleValue.dynamicProgressBarWidth = 100;
                return true;
              }
              const lineAttributeValue = lineAttributeObj[attributeKey.value];
              if (!lineAttributeValue) {
                ruleData.ruleValue.qualifiedLineValue = qualifiedLineValue;
                ruleData.ruleValue.qualifiedLineProperty = qualifiedLineProperty;
                return false;
              }
      
              let isConditionSatisfied = false;
              switch (attributeValue.operatorType) {
                case "is":
                  isConditionSatisfied = lineAttributeValue === attributeValue.value;
                  break;
                case "isNot":
                  isConditionSatisfied = lineAttributeValue !== attributeValue.value;
                  break;
                case "contains":
                  isConditionSatisfied = lineAttributeValue.toLowerCase().includes(attributeValue.value.toLowerCase());
                  break;
                case "doesNotContain":
                  isConditionSatisfied = !lineAttributeValue.toLowerCase().includes(attributeValue.value.toLowerCase());
                  break;
                default:
                  isConditionSatisfied = false;
              }
      
              ruleData.ruleValue.qualifiedLineValue = qualifiedLineValue;
              ruleData.ruleValue.qualifiedLineProperty = qualifiedLineProperty;
              return isConditionSatisfied;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkLineAttributeCondition fn`, error);
              return false;
            }
          },
          compareMetrics: function (ruleData, cartValue) {
            try {
              let { qualifierOperatorType, qualifierValue } = ruleData.ruleValue;
              let dynamicProgressBarWidth = (cartValue / qualifierValue).toFixed(2) * 100;
              let isConditionSatisfied = false;
              qualifierValue = Number(qualifierValue);
              switch (qualifierOperatorType) {
                case "equalTo":
                  isConditionSatisfied = cartValue === qualifierValue;
                  dynamicProgressBarWidth = dynamicProgressBarWidth <= 100 ? dynamicProgressBarWidth : 100;
                  break;
                case "greaterThanOrEqualTo":
                  isConditionSatisfied = cartValue >= qualifierValue;
                  dynamicProgressBarWidth = dynamicProgressBarWidth <= 100 ? dynamicProgressBarWidth : 100;
                  break;
                case "lessThanOrEqualTo":
                  isConditionSatisfied = cartValue <= qualifierValue;
                  dynamicProgressBarWidth = isConditionSatisfied ? 100 : 0;
                  break;
                case "greaterThan":
                  isConditionSatisfied = cartValue > qualifierValue;
                  dynamicProgressBarWidth = (cartValue / (qualifierValue + 1)).toFixed(2) * 100;
                  dynamicProgressBarWidth = dynamicProgressBarWidth <= 100 ? dynamicProgressBarWidth : 100;
                  dynamicProgressBarWidth = dynamicProgressBarWidth;
                  break;
                case "lessThan":
                  isConditionSatisfied = cartValue < qualifierValue;
                  dynamicProgressBarWidth = isConditionSatisfied ? 100 : 0;
                  break;
                default:
                  gfg.utility.debugConsole("Unsupported comparison type:", qualifierOperatorType);
                  isConditionSatisfied = false;
              }
      
              const remainingValue = Number((qualifierValue - cartValue).toFixed(2));
              ruleData.ruleValue.remainingValue = remainingValue;
              ruleData.ruleValue.dynamicProgressBarWidth = dynamicProgressBarWidth;
              return isConditionSatisfied;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 compareMetrics fn`, error);
              return false;
            }
          },
          getQtyOfGivenDistinctProducts: function (items) {
            try {
              return items.length;
            } catch (err) {
              console.error("Error inside getQtyOfGivenDistinctProducts", err);
              return 0;
            }
          },
          evaluateProductMetrics: function (finalProducts, ruleData, cartData) {
            let { qualifierType, qualifierValue } = ruleData.ruleValue;
      
            if (!qualifierType || qualifierType == "none") {
              return true;
            }
      
            let result = false;
            let totalValue = 0;
            try {
              // Determine total value based on metric type
              if (qualifierType === "quantity") {
                totalValue = finalProducts.reduce((sum, item) => sum + parseInt(item?.quantity || 0), 0);
              } else if (qualifierType === "distinctQuantity") {
                totalValue = gfg.customDiscountValidationFunctions.getQtyOfGivenDistinctProducts(finalProducts);
              } else if (qualifierType === "amount") {
                const currencyRate = gfg.utility.getActiveCurrencyRate();
                qualifierValue = qualifierValue * currencyRate;
                if(ruleData?.onlyUseWidget) {
                    totalValue = finalProducts.reduce((sum, item) => sum + parseFloat(item?.original_line_price / 100 || 0), 0);
                } else {
                    totalValue = finalProducts.reduce((sum, item) => sum + parseFloat(item?.line_price / 100 || 0), 0);
                }
                const shopName = Shopify.shop;
                if(shopName.includes("rothys")) {
                    totalValue = Number((totalValue / (Number(currencyRate) || 1)).toFixed(2));
                }
              }
      
              // Compare the calculated total value against the rule's metric
              result = gfg.customDiscountValidationFunctions.compareMetrics(ruleData, totalValue);
              return result;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 evaluateProductMetrics fn`, error);
              return false;
            }
          },
          validateProductRule: async function (cartData, ruleData) {
            try {
              const shouldIncludeItemForMetricsArr = (isValid, operatorType) => {
                return (operatorType === "include" && isValid) || (operatorType === "exclude" && !isValid);
              };
      
              let matchingProducts = [];
              const storefrontAccessPresent = gfg.settings.merchantInfo.storefrontAccessToken ? true : false;
              switch (ruleData.ruleType) {
                case "products":
                case "productVariants":
                  if (cartData.items.length === 0) {
                    let qualifiedProductObjProductsAndVariants = {
                      title: ruleData.ruleValue.products[0].title,
                      handle: ruleData.ruleValue.products[0].handle,
                      variantTitle: ruleData.ruleValue.products[0].variants[0].variantTitle,
                    };
                    ruleData.ruleValue.qualifiedProductObj = qualifiedProductObjProductsAndVariants;
                    ruleData.ruleValue.dynamicProgressBarWidth = 0;
                  }
      
                  cartData.items.forEach((lineItem) => {
                    const isProductValid = gfg.customDiscountValidationFunctions.checkProductCondition(lineItem, ruleData);
                    if (shouldIncludeItemForMetricsArr(isProductValid, ruleData.ruleValue.operatorType)) {
                      matchingProducts.push(lineItem);
                    }
                  });
      
                  break;
                case "collections":
                  if (cartData.items.length === 0) {
                    let qualifiedCollectionObjCollection = {
                      title: ruleData.ruleValue.collections[0].title,
                      handle: ruleData.ruleValue.collections[0].handle,
                    };
                    ruleData.ruleValue.qualifiedCollectionObj = qualifiedCollectionObjCollection;
                    ruleData.ruleValue.dynamicProgressBarWidth = 0;
                  }
      
                  if (storefrontAccessPresent) {
                    await gfg.customDiscountValidationFunctions.getLatestCartItemsProductData(cartData);
                  }
                  cartData.items.forEach((lineItem) => {
                    const isCollectionValid = storefrontAccessPresent
                      ? gfg.customDiscountValidationFunctions.checkCollectionCondition(lineItem, ruleData)
                      : gfg.customDiscountValidationFunctions.checkCollectionCondition_Old(lineItem, ruleData);
                    if (shouldIncludeItemForMetricsArr(isCollectionValid, ruleData.ruleValue.operatorType)) {
                      matchingProducts.push(lineItem);
                    }
                  });
                  break;
                case "productTypes":
                  if (cartData.items.length === 0) {
                    ruleData.ruleValue.productType = ruleData.ruleValue.types[0];
                    ruleData.ruleValue.dynamicProgressBarWidth = 0;
                  }
                  await gfg.customDiscountValidationFunctions.getLatestCartItemsProductData(cartData);
                  cartData.items.forEach((lineItem) => {
                    const isTypeValid = storefrontAccessPresent
                      ? gfg.customDiscountValidationFunctions.checkProductTypeCondition(lineItem, ruleData)
                      : gfg.customDiscountValidationFunctions.checkProductTypeCondition_Old(lineItem, ruleData);
                    if (shouldIncludeItemForMetricsArr(isTypeValid, ruleData.ruleValue.operatorType)) {
                      matchingProducts.push(lineItem);
                    }
                  });
                  break;
                case "productTags":
                  if (cartData.items.length === 0) {
                    ruleData.ruleValue.tagName = ruleData.ruleValue.tags[0];
                    ruleData.ruleValue.dynamicProgressBarWidth = 0;
                  }
                  await gfg.customDiscountValidationFunctions.getLatestCartItemsProductData(cartData);
                  cartData.items.forEach((lineItem) => {
                    const isTagValid = gfg.customDiscountValidationFunctions.checkTagCondition(lineItem, ruleData);
                    if (shouldIncludeItemForMetricsArr(isTagValid, ruleData.ruleValue.operatorType)) {
                      matchingProducts.push(lineItem);
                    }
                  });
                  break;
                case "productVendors":
                // await gfg.customDiscountValidationFunctions.getLatestCartItemsProductData(cartData);
                // cartData.items.forEach((lineItem) => {
                //   const isTypeValid = checkProductTypeCondition(lineItem, ruleData);
                //   if (shouldIncludeItemForMetricsArr(isTypeValid, ruleData.ruleValue.operatorType)) {
                //     matchingProducts.push(lineItem);
                //   }
                // });
                // break;
                case "productHasSubscription":
                  if (cartData.items.length === 0) {
                    ruleData.ruleValue.dynamicProgressBarWidth = 0;
                  }
                  cartData.items.forEach((lineItem) => {
                    const isSubscriptionValid = gfg.customDiscountValidationFunctions.checkSubscriptionCondition(lineItem, ruleData);
                    if (shouldIncludeItemForMetricsArr(isSubscriptionValid, ruleData.ruleValue.operatorType)) {
                      matchingProducts.push(lineItem);
                    }
                  });
                  break;
                case "lineAttributes":
                  if (cartData.items.length === 0) {
                    let qualifiedLineValue = ruleData.ruleValue.attributeValue.value;
                    let qualifiedLineProperty = ruleData.ruleValue.attributeKey.value;
                    ruleData.ruleValue.qualifiedLineValue = qualifiedLineValue;
                    ruleData.ruleValue.qualifiedLineProperty = qualifiedLineProperty;
                    ruleData.ruleValue.dynamicProgressBarWidth = 0;
                  }
      
                  cartData.items.forEach((lineItem) => {
                    const isAttributeValid = gfg.customDiscountValidationFunctions.checkLineAttributeCondition(lineItem, ruleData);
                    if (shouldIncludeItemForMetricsArr(isAttributeValid, ruleData.ruleValue.operatorType)) {
                      matchingProducts.push(lineItem);
                    }
                  });
                  break;
                default:
                  gfg.utility.debugConsole(`Unsupported PRODUCT ruleType: ${ruleData.ruleType}`);
                  return false;
              }
      
              if (ruleData.ruleValue.operatorType === "exclude" && ruleData.ruleValue.qualifierType === "none") {
                return matchingProducts.length === 0;
              }
      
              return gfg.customDiscountValidationFunctions.evaluateProductMetrics(matchingProducts, ruleData, cartData);
            } catch (error) {
              gfg.utility.debugError(`Error in validateProductRule`, error);
              return false;
            }
          },
          validateProductRuleForDiscountableItems: async function (cartData, ruleData, lineItem) {
            try {
              const storefrontAccessPresent = gfg.settings.merchantInfo.storefrontAccessToken ? true : false;
              const getNewLineItem = (_cartData, lineItemId) => {
                return _cartData?.items.filter((ele) => ele.id == lineItemId)?.[0]
              }
              switch (ruleData.ruleType) {
                case "allProducts":
                    return true;
                case "products":
                case "productVariants":
                  const isProductValid = gfg.customDiscountValidationFunctions.checkProductCondition(lineItem, ruleData);
                  return isProductValid;
                
                  case "collections": {
                    if (storefrontAccessPresent) {
                        await gfg.customDiscountValidationFunctions.getLatestCartItemsProductData(cartData);
                      }
                      let newLineItem = getNewLineItem(cartData, lineItem.id);
                      const isCollectionValid = storefrontAccessPresent
                      ? gfg.customDiscountValidationFunctions.checkCollectionCondition(newLineItem, ruleData)
                      : gfg.customDiscountValidationFunctions.checkCollectionCondition_Old(newLineItem, ruleData);
    
                      return isCollectionValid;
                  }
                
                  case "productTypes": {
                    await gfg.customDiscountValidationFunctions.getLatestCartItemsProductData(cartData);
                    let newLineItem = getNewLineItem(cartData, lineItem.id);
                    const isTypeValid = storefrontAccessPresent
                      ? gfg.customDiscountValidationFunctions.checkProductTypeCondition(newLineItem, ruleData)
                      : gfg.customDiscountValidationFunctions.checkProductTypeCondition_Old(newLineItem, ruleData);
                    return isTypeValid;
                }
                case "productTags": {
                    await gfg.customDiscountValidationFunctions.getLatestCartItemsProductData(cartData);
                    let newLineItem = getNewLineItem(cartData, lineItem.id);
                    const isTagValid = gfg.customDiscountValidationFunctions.checkTagCondition(newLineItem, ruleData);
                    return isTagValid;
                }
                case "productVendors":
                // await gfg.f.getLatestCartItemsProductData(cartData);
                // cartData.items.forEach((lineItem) => {
                //   const isTypeValid = checkProductTypeCondition(lineItem, ruleData);
                //   if (shouldIncludeItemForMetricsArr(isTypeValid, ruleData.ruleValue.operatorType)) {
                //     matchingProducts.push(lineItem);
                //   }
                // });
                // break;
                case "productHasSubscription":
                    const isSubscriptionValid = gfg.customDiscountValidationFunctions.checkSubscriptionCondition(lineItem, ruleData);
                    return isSubscriptionValid;
                case "lineAttributes":
                  const isAttributeValid = gfg.customDiscountValidationFunctions.checkLineAttributeCondition(lineItem, ruleData);
                  return isAttributeValid;
                default:
                  gfg.utility.debugConsole(`Unsupported PRODUCT ruleType: ${ruleData.ruleType}`);
                  return false;
              }
      
            } catch (error) {
              gfg.utility.debugError(`Error in validateProductRuleForDiscountableItems`, error);
              return false;
            }
          },
          checkIfCustomerTagsConditionMet: function (cartData, ruleData) {
            try {
              const customerTags = window?.shopifyLiquidValuesApp7Ext?.customer?.customerTags;
              let { operatorType } = ruleData.ruleValue;
              let ruleTags = ruleData.ruleValue.tags || ruleData.ruleValue.value;
              let qualifiedTag = ruleTags[0];
              let isPresent = false;
              if(!customerTags && operatorType == "isNot") {
                ruleData.ruleValue.qualifiedTag = qualifiedTag;
                ruleData.ruleValue.dynamicProgressBarWidth = 0;
                return true;
              }
              if(!customerTags && operatorType == "is") {
                ruleData.ruleValue.qualifiedTag = qualifiedTag;
                ruleData.ruleValue.dynamicProgressBarWidth = 0;
                return false;
              }
              if (!customerTags) {
                ruleData.ruleValue.qualifiedTag = qualifiedTag;
                ruleData.ruleValue.dynamicProgressBarWidth = 0;
                return false;
              }
      
              switch (operatorType) {
                case "is":
                  isPresent = customerTags.some((tagInfo) => ruleTags.includes(tagInfo));
                  break;
                case "isNot":
                  isPresent = !customerTags.some((tagInfo) => ruleTags.includes(tagInfo));
                  break;
                case "contains":
                  for (let customerTag of customerTags) {
                    for (let ruleTag of ruleTags) {
                      if (customerTag.toLowerCase().includes(ruleTag.toLowerCase())) {
                        qualifiedTag = ruleTag;
                        isPresent = true;
                        break;
                      }
                    }
                  }
                  isPresent = false;
                  break;
                case "doesNotContain":
                  for (let customerTag of customerTags) {
                    for (let ruleTag of ruleTags) {
                      if (customerTag.toLowerCase().includes(ruleTag.toLowerCase())) {
                        qualifiedTag = ruleTag;
                        isPresent = false;
                        break;
                      }
                    }
                  }
                  isPresent = true;
                  break;
                default:
                  isPresent = false;
              }
      
              ruleData.ruleValue.qualifiedTag = qualifiedTag;
              ruleData.ruleValue.dynamicProgressBarWidth = isPresent ? 100 : 0;
              return isPresent;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfCustomerTagsConditionMet fn`, error);
              return false;
            }
          },
          checkIfCustomerLoggedInConditionMet: function (cartData, ruleData) {
            try {
              const isCustomerLoggedIn = window.shopifyLiquidValuesApp7Ext.customer.id ? true : false;
              const expectedLoginStatus = ruleData.ruleValue.value;
      
              if (expectedLoginStatus === "yes") {
                ruleData.ruleValue.dynamicProgressBarWidth = isCustomerLoggedIn ? 100 : 0;
                return isCustomerLoggedIn;
              }
              if (expectedLoginStatus === "no") {
                ruleData.ruleValue.dynamicProgressBarWidth = !isCustomerLoggedIn ? 100 : 0;
                return !isCustomerLoggedIn;
              }
              ruleData.ruleValue.dynamicProgressBarWidth = 0;
              return false;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfCustomerLoggedInConditionMet fn`, error);
              return false;
            }
          },

          checkIfMarketConditionMet: function (cartData, ruleData) {
            try {
                const { operatorType } = ruleData.ruleValue;
                const marketHandles = ruleData.ruleValue.markets || ruleData.ruleValue.value;
                const currentMarketHandle = gfg.state.activeCustomerData?.markets?.handle;

                if (!currentMarketHandle) return false;

                return operatorType === "is"
                    ? marketHandles.includes(currentMarketHandle)
                    : operatorType === "isNot"
                    ? !marketHandles.includes(currentMarketHandle)
                    : false;
            } catch (error) {
                gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfMarketConditionMet fn`, error);
                return false;
            }
          },
          validateCustomerRule: function (cartData, ruleData) {
            try {
              switch (ruleData.ruleType) {
                case "customerTags":
                  return gfg.customDiscountValidationFunctions.checkIfCustomerTagsConditionMet(cartData, ruleData);
                case "isCustomerLoggedIn":
                  return gfg.customDiscountValidationFunctions.checkIfCustomerLoggedInConditionMet(cartData, ruleData);
                default:
                  gfg.utility.debugConsole(`Unsupported CUSTOMER ruleType: ${ruleData.ruleType}`);
                  return false;
              }
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 validateCustomerRule fn`, error);
            }
          },
          checkIfShippingCountryConditionMet: async function (cartData, ruleData) {
            try {
              let { operatorType } = ruleData.ruleValue;
              let countries = ruleData.ruleValue.countries || ruleData.ruleValue.value;
            //   const shippingCountryCode = gfg.utility.getCountry();

            // Now shipping country Code = customer visiting country Code; not taking from shopify.
              const shippingCountryCode = await gfg.utility.getVisitingFromCountry();

              let qualifiedCountry = countries[0];
              if (operatorType === "include") {
                // Check if any delivery country is included in the list of specified countries.
                const isPresent = countries.includes(shippingCountryCode && shippingCountryCode.toUpperCase());
                if (isPresent) {
                  qualifiedCountry = shippingCountryCode;
                }
                ruleData.ruleValue.qualifiedCountry = qualifiedCountry;
                ruleData.ruleValue.dynamicProgressBarWidth = isPresent ? 100 : 0;
                return isPresent;
              } else if (operatorType === "exclude") {
                // Check if all delivery countries are not in the list of specified countries.
                ruleData.ruleValue.qualifiedCountry = qualifiedCountry;
                return !countries.includes(shippingCountryCode && shippingCountryCode.toUpperCase());
              }
              return false;
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkIfShippingCountryConditionMet fn`, error);
            }
          },
          validateShippingRule: function (cartData, ruleData) {
            try {
              switch (ruleData.ruleType) {
                case "shippingCountry":
                  return gfg.customDiscountValidationFunctions.checkIfShippingCountryConditionMet(cartData, ruleData);
                default:
                  gfg.utility.debugConsole(`Unsupported SHIPPING ruleType: ${ruleData.ruleType}`);
                  return false;
              }
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 validateShippingRule fn`, error);
            }
          },
          checkRuleGroup: async function (currentRule, cartData) {
            try {
              switch (currentRule.type) {
                case "CART":
                  return gfg.customDiscountValidationFunctions.validateCartRule(cartData, currentRule);
                case "PRODUCT":
                  return gfg.customDiscountValidationFunctions.validateProductRule(cartData, currentRule);
                case "CUSTOMER":
                  return gfg.customDiscountValidationFunctions.validateCustomerRule(cartData, currentRule);
                case "SHIPPING":
                  return gfg.customDiscountValidationFunctions.validateShippingRule(cartData, currentRule);
                default:
                  gfg.utility.debugConsole(`Unsupported rule type: ${currentRule.type}`);
                  return false;
              }
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 checkRuleGroup fn`, error);
            }
          },
          verifyIndividualRule: async function (ruleData, cartData) {
            try {
              const ruleType = ruleData.ruleType;
              const ruleValue = ruleData.ruleValue;
              const type = ruleData.type;
            } catch (error) {
              gfg.utility.debugConsole("Error inside gfgShippingDiscountV2 verifyIndividualRule fn", error);
            }
          },
          getLatestCartItemsProductData: async function (cartData) {
            try {
              if (cartData.items.length === 0) {
                return;
              }
      
              const productIds = [];
              const productHandles = [];
              const shopName = gfg.settings.merchantInfo.shopName;
              const storefrontAccessPresent = !!gfg.settings.merchantInfo.storefrontAccessToken;
              const cachedData = JSON.parse(sessionStorage.getItem(`customFunctionProductData-${shopName}`)) || {};
      
              // Extract product IDs, handles, and map their data
              cartData.items.forEach((item) => {
                const { product_id, handle, line_price, quantity } = item;
                productIds.push(product_id);
                productHandles.push(handle);
              });
      
              // Fetch product data, using cache if available
              const productIdsPromise = productIds.map((productId, index) => {
                if (cachedData[productId]) {
                  return Promise.resolve(cachedData[productId]);
                } else {
                  const latestData = storefrontAccessPresent
                    ? gfg.customDiscountStorefrontApis.getProductsDataById([`gid://shopify/Product/${productId}`])
                    : gfg.utility.getProductDataV2(productHandles[index]);
      
                  return latestData;
                }
              });
      
              // Wait for all product data fetches to complete
              const allProductsData = await Promise.all(productIdsPromise);
      
              // Update cart items with the latest Shopify data and update the cache
              cartData.items.forEach((currCartItem, index) => {
                const productId = currCartItem.product_id;
                const latestData = allProductsData[index];
      
                if (!cachedData[productId]) {
                  cachedData[productId] = latestData;
                }
      
                currCartItem.latestShopifyData = latestData;
              });
      
              // Update session storage cache
              sessionStorage.setItem(`customFunctionProductData-${shopName}`, JSON.stringify(cachedData));
            } catch (error) {
              gfg.utility.debugError(`Error inside gfgShippingDiscountV2 getLatestCartItemsProductData fn`, error);
            }
          },
          getProductsDataByProductIds: async function (productIds) {
            try {
                let shopName = window.Shopify.shop;
                const storefrontAccessPresent = !!gfg.settings.merchantInfo.storefrontAccessToken;
                const cachedData = JSON.parse(sessionStorage.getItem(`customFunctionProductData-${shopName}`)) || {};
                const productIdsPromise = productIds.map((productId, index) => {
                
                  let productGid = `gid://shopify/Product/${productId}`
                  if (cachedData[productGid]) {
                    return Promise.resolve(cachedData[productGid]);
                  } else {
                    const latestData = storefrontAccessPresent
                    ? gfg.customDiscountStorefrontApis.getProductsDataById([productGid])
                    : gfg.utility.getProductDataV2(productHandles[index]);
    
                    return latestData;
                  }
                });
                const allProductsData = await Promise.all(productIdsPromise);
                allProductsData.forEach((product) => {
                  const productId = product?.id;
                  if(!cachedData[productId]) {
                    cachedData[productId] = product;
                  }
                })
                sessionStorage.setItem(`customFunctionProductData-${shopName}`, JSON.stringify(cachedData));
                return allProductsData
            } catch (error) {
                gfg.utility.debugError(`Error inside getProductsDataByProductIds fn`, error);
            }
          },
          getProductsDataFromCollectionIds: async function (collectionIds) {
            try {
                let shopName = window.Shopify.shop;
                const storefrontAccessPresent = !!gfg.settings.merchantInfo.storefrontAccessToken;
                const cachedData = JSON.parse(sessionStorage.getItem(`customFunctionProductData-${shopName}`)) || {};
                let allProductsData = [];

                for(let i=0; i<collectionIds.length; i++) {
                    if(allProductsData.length >= 10) {
                        break;
                    }
                    const collectionId = collectionIds[i];
                    let collectionData = cachedData[collectionId];
                    if(!collectionData || collectionData.length === 0) {
                        collectionData = await gfg.customDiscountStorefrontApis.getCollectionsDataById([collectionId]);
                        cachedData[collectionId] = collectionData;
                    }
                    allProductsData = [...allProductsData, ...collectionData?.[0]?.products]
                }
                allProductsData?.forEach((product) => {
                  const productId = product?.id;
                  if(!cachedData[productId]) {
                    cachedData[productId] = product;
                  }
                })
                sessionStorage.setItem(`customFunctionProductData-${shopName}`, JSON.stringify(cachedData));
                return allProductsData;
            } catch (error) {
                gfg.utility.debugError(`Error inside getProductsDataFromCollectionIds fn`, error);
            }
        },
        getProductsDataByProductTags: async function (productTags) {
            try {
                let allProductsData = []
                let shopName = window.Shopify.shop;
                const cachedData = JSON.parse(sessionStorage.getItem(`customFunctionProductData-${shopName}`)) || {};

                for(let i=0; i<productTags.length; i++) {
                    if(allProductsData.length >= 10) {
                        break;
                    }
                    const productTag = productTags[i];
                    const response = await gfg.customDiscountStorefrontApis.getProductsDataByTagName(productTag);
                    const productsData = response?.products.filter((product) => product.tags.includes(productTag))
                    allProductsData = [...allProductsData, ...productsData]
                }

                allProductsData?.forEach((product) => {
                    const productId = product?.id;
                    if(!cachedData[productId]) {
                        cachedData[productId] = product;
                    }
                })
                sessionStorage.setItem(`customFunctionProductData-${shopName}`, JSON.stringify(cachedData));

                return allProductsData;
            } catch (error) {
                gfg.utility.debugError(`Error inside getProductsDataByProductTags fn`, error);
            }
        },
        getProductsDataByProductTypes: async function (productTypes) {
            try {
                let allProductsData = []
                let shopName = window.Shopify.shop;
                const cachedData = JSON.parse(sessionStorage.getItem(`customFunctionProductData-${shopName}`)) || {};

                for(let i=0; i<productTypes.length; i++) {
                    if(allProductsData.length >= 10) {
                        break;
                    }
                    const productType = productTypes[i];
                    const response = await gfg.customDiscountStorefrontApis.getProductsDataByProductType(productType);
                    const productsData = response?.products.filter((product) => product.productType === productType)

                    allProductsData = [...allProductsData, ...productsData]
                }
                allProductsData?.forEach((product) => {
                    const productId = product?.id;
                    if(!cachedData[productId]) {
                      cachedData[productId] = product;
                    }
                  })
                  sessionStorage.setItem(`customFunctionProductData-${shopName}`, JSON.stringify(cachedData));
                
                return allProductsData;
            } catch (error) {
                gfg.utility.debugError(`Error inside getProductsDataByProductTypes fn`, error);
            }
          }
    },
    customDiscountStorefrontApis: {
        flattenGraphQLResponse: function (response) {
          try {
            gfg.utility.debugConsole("response", response);
            const nodes = response.data ? response.data.nodes : [];
    
            gfg.utility.debugConsole("flattened-just-node", nodes);
            const flattenedNodes = nodes.map((node) => {
              if (node) {
                const flattenedNode = {};
                Object.keys(node).forEach((key) => {
                  const value = node[key];
                  if (value && typeof value === "object") {
                    if (value.edges) {
                      flattenedNode[key] = value.edges.map((edge) => edge.node);
                    } else if (value.node) {
                      flattenedNode[key] = value.node;
                    } else {
                      flattenedNode[key] = value;
                    }
                  } else {
                    flattenedNode[key] = value;
                  }
                });
    
                gfg.utility.debugConsole("flattenedNode", flattenedNode);
                return flattenedNode;
              }
            });
            gfg.utility.debugConsole("flattenedNodes", flattenedNodes);
    
            return flattenedNodes;
          } catch (error) {
            gfg.utility.debugError(`Error inside gfgCustomDiscount flattenGraphQLResponse fn`, error);
          }
        },
        flattenGraphQLResponseV2 : function (response) {
            try {
            gfg.utility.debugConsole("response", response);

            function processValue(value) {
              if (Array.isArray(value)) {
                return value.map(processValue);
              }
              
              if (typeof value === 'object' && value !== null) {
                if ('edges' in value) {
                  return processValue(value.edges);
                }
                if ('node' in value) {
                  return processValue(value.node);
                }

                if ('nodes' in value) {
                  return processValue(value.nodes);
                }

                
                const result = {};
                for (const [key, val] of Object.entries(value)) {
                  result[key] = processValue(val);
                }
                return result;
              }
              
              return value;
            }
          
            return processValue(response);
          } catch (error) {
            gfg.utility.debugError(`Error inside gfgCustomDiscount flattenGraphQLResponseV2 fn`, error);
          }
        },
        makeGraphQLApiCall: async function (query, variables) {
            try {

                variables.languageCode = normalizeLangCode(variables.languageCode);
                const { shopName, storefrontAccessToken } = gfg.settings.merchantInfo;
                const SHOP_DOMAIN = shopName;
                const STOREFRONT_ACCESS_TOKEN = storefrontAccessToken;
                const response = await fetch(`https://${SHOP_DOMAIN}/api/2023-04/graphql.json?skipListener=true`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
                  },
                  body: JSON.stringify({ query, variables }),
                });
      
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
      
                const data = await response.json();
                
                let cleanedData = gfg.customDiscountStorefrontApis.flattenGraphQLResponseV2(data);
                
                return cleanedData;
            } catch (error) {
                gfg.utility.debugError(`Error inside gfgCustomDiscount makeGraphQLApiCall fn`, error);
            }
        },
        getProductsDataById: async function (productIds) {
          try {
            const collectionsLimit = gfg.settings.app.collectionsFetchLimit || 250;
            const query = `query test($ids: [ID!]!, $countryCode: CountryCode!, $languageCode: LanguageCode!) @inContext(country: $countryCode, language: $languageCode) {    
                nodes(ids: $ids) {
                ... on Product{
                  id
                  availableForSale
                  title
                  handle
                  productType
                  collections(first: ${collectionsLimit}) {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                  featuredImage{
                    originalSrc
                  }
                  tags
                  vendor
                  compareAtPriceRange{
                    maxVariantPrice{
                        amount
                        currencyCode
                    }
                    minVariantPrice{
                        amount
                        currencyCode
                    }
                  }
                  priceRange{
                    maxVariantPrice{
                        amount
                        currencyCode
                    }
                    minVariantPrice{
                        amount
                        currencyCode
                    }
                  }
                  variants(first: 100) {
                    edges {
                      node {
                        id
                        title
                        price{
                          amount
                          currencyCode
                        }
                        currentlyNotInStock 
                        compareAtPrice{
                          amount
                          currencyCode
                        }
                        image {
                          originalSrc
                        }
                        selectedOptions{
                            name
                            value
                        }
                        availableForSale
                      }
                    }
                  }
                }
              }
              }`;
    
            const variables = {
              ids: productIds,
              countryCode: window?.Shopify?.country || "IN",
              languageCode: window?.Shopify?.locale?.toUpperCase() || "EN",
            };
            variables.languageCode = normalizeLangCode(variables.languageCode);
    
            try {
              const { shopName, storefrontAccessToken } = gfg.settings.merchantInfo;
              const SHOP_DOMAIN = shopName;
              const STOREFRONT_ACCESS_TOKEN = storefrontAccessToken;
              const response = await fetch(`https://${SHOP_DOMAIN}/api/2023-04/graphql.json?skipListener=true`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
                },
                body: JSON.stringify({ query, variables }),
              });
    
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
    
              const data = await response.json();
              
              let cleanedData = gfg.customDiscountStorefrontApis.flattenGraphQLResponse(data);
              
              return cleanedData[0];
            } catch (error) {
              gfg.utility.debugConsole("Error:", error);
            }
          } catch (err) {
            gfg.utility.debugError(`Error inside gfgCustomDiscount getProductsDataById fn`, err);
          }
        },
        getCollectionsDataById: async function (collectionIds) {
            try {
                const collectionsLimit = gfg.settings.app.collectionsFetchLimit || 250;
                const query = `query test($ids: [ID!]!, $countryCode: CountryCode!, $languageCode: LanguageCode!) @inContext(country: $countryCode, language: $languageCode) {    
                nodes(ids: $ids) {
                ... on Collection{
                      title
                      id
                      products(first: 50) {
                        edges {
                          node {
                            id
                            availableForSale
                            title
                            handle
                            productType
                            collections(first: ${collectionsLimit}) {
                              edges {
                                node {
                                  id
                                }
                              }
                            }
                            featuredImage {
                              originalSrc
                            }
                            tags
                            vendor
                            compareAtPriceRange {
                              maxVariantPrice {
                                amount
                                currencyCode
                              }
                              minVariantPrice {
                                amount
                                currencyCode
                              }
                            }
                            priceRange {
                              maxVariantPrice {
                                amount
                                currencyCode
                              }
                              minVariantPrice {
                                amount
                                currencyCode
                              }
                            }
                            variants(first: 100) {
                              edges {
                                node {
                                  id
                                  title
                                  price {
                                    amount
                                    currencyCode
                                  }
                                  currentlyNotInStock
                                  compareAtPrice {
                                    amount
                                    currencyCode
                                  }
                                  image {
                                    originalSrc
                                  }
                                  selectedOptions {
                                    name
                                    value
                                  }
                                  availableForSale
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }`;
      
              const variables = {
                ids: collectionIds,
                countryCode: window?.Shopify?.country || "IN",
                languageCode: window?.Shopify?.locale?.toUpperCase() || "EN",
              };
      
              const response = await gfg.customDiscountStorefrontApis.makeGraphQLApiCall(query, variables);
              return response?.data;
            } catch (err) {
              gfg.utility.debugError(`Error inside gfgCustomDiscount getCollectionsDataById fn`, err);
            }
        },
        getProductsDataByTagName: async function (productTag) {
            try {
                const collectionsLimit = gfg.settings.app.collectionsFetchLimit || 250;
                const query = `query GetProductsByTags($tag: String!) {
                    products(first: 50, query: $tag) {
                      edges {
                        node {
                          id
                          availableForSale
                          title
                          handle
                          productType
                          collections(first: ${collectionsLimit}) {
                            edges {
                              node {
                                id
                              }
                            }
                          }
                          featuredImage {
                            originalSrc
                          }
                          tags
                          vendor
                          compareAtPriceRange {
                            maxVariantPrice {
                              amount
                              currencyCode
                            }
                            minVariantPrice {
                              amount
                              currencyCode
                            }
                          }
                          priceRange {
                            maxVariantPrice {
                              amount
                              currencyCode
                            }
                            minVariantPrice {
                              amount
                              currencyCode
                            }
                          }
                          variants(first: 100) {
                            edges {
                              node {
                                id
                                title
                                price {
                                  amount
                                  currencyCode
                                }
                                currentlyNotInStock
                                compareAtPrice {
                                  amount
                                  currencyCode
                                }
                                image {
                                  originalSrc
                                }
                                selectedOptions {
                                  name
                                  value
                                }
                                availableForSale
                              }
                            }
                          }
                        }
                      }
                    }
                  }`;
      
              const variables = {
                tag: productTag,
                countryCode: window?.Shopify?.country || "IN",
                languageCode: window?.Shopify?.locale?.toUpperCase() || "EN",
              };
      
              const response = await gfg.customDiscountStorefrontApis.makeGraphQLApiCall(query, variables);
              return response?.data;
            } catch (err) {
              gfg.utility.debugError(`Error inside gfgCustomDiscount getProductsDataByTagName fn`, err);
            }
        },
        getProductsDataByProductType: async function (productType) {
            try {
                const collectionsLimit = gfg.settings.app.collectionsFetchLimit || 250;
                const query = `query GetProductsByTypes($product_type: String!) {
                    products(first: 50, query: $product_type) {
                      edges {
                        node {
                          id
                          availableForSale
                          title
                          handle
                          productType
                          collections(first: ${collectionsLimit}) {
                            edges {
                              node {
                                id
                              }
                            }
                          }
                          featuredImage {
                            originalSrc
                          }
                          tags
                          vendor
                          compareAtPriceRange {
                            maxVariantPrice {
                              amount
                              currencyCode
                            }
                            minVariantPrice {
                              amount
                              currencyCode
                            }
                          }
                          priceRange {
                            maxVariantPrice {
                              amount
                              currencyCode
                            }
                            minVariantPrice {
                              amount
                              currencyCode
                            }
                          }
                          variants(first: 100) {
                            edges {
                              node {
                                id
                                title
                                price {
                                  amount
                                  currencyCode
                                }
                                currentlyNotInStock
                                compareAtPrice {
                                  amount
                                  currencyCode
                                }
                                image {
                                  originalSrc
                                }
                                selectedOptions {
                                  name
                                  value
                                }
                                availableForSale
                              }
                            }
                          }
                        }
                      }
                    }
                  }`;
      
              const variables = {
                product_type: productType,
                countryCode: window?.Shopify?.country || "IN",
                languageCode: window?.Shopify?.locale?.toUpperCase() || "EN",
              };
      
              const response = await gfg.customDiscountStorefrontApis.makeGraphQLApiCall(query, variables);
              return response?.data;
            } catch (err) {
              gfg.utility.debugError(`Error inside gfgCustomDiscount getProductsDataByProductType fn`, err);
            }
        },
        getProductsDataByIdWithAjaxResponse: async function(productIds){
            try {
                const metafields = gfg.settings.app?.metafieldNameSpaceAndKeys || [];
                const metafieldQueries = metafields.length > 0 ? gfg.utility.generateMetafieldQueries(metafields) : "";
                const query = `query test($ids: [ID!]!, $countryCode: CountryCode!, $languageCode: LanguageCode!) @inContext(country: $countryCode, language: $languageCode) {    
                    nodes(ids: $ids) {
                    ... on Product{
                      id
                      availableForSale
                      title
                      handle
                      createdAt
                      description
                      ${metafieldQueries ? metafieldQueries : ""}
                      descriptionHtml
                      productType
                      onlineStoreUrl
                      options{
                        id
                        name
                        values
                      }
                      featuredImage{
                        id
                        originalSrc
                        transformedSrc(maxWidth: 200, maxHeight: 200, crop: CENTER)
                      }
                     updatedAt
                    tags
                    totalInventory
                    vendor
                    requiresSellingPlan
                    compareAtPriceRange{
                        maxVariantPrice{
                            amount
                            currencyCode
                        }
                        minVariantPrice{
                            amount
                            currencyCode
                        }
                    }
                    priceRange{
                        maxVariantPrice{
                            amount
                            currencyCode
                        }
                        minVariantPrice{
                            amount
                            currencyCode
                        }
                    }
                    media(first:100){
                        edges{
                            node{
                                id
                                alt
                                previewImage{
                                    url
                                    id
                                } 
                                
                            }
                        }
    
                    }
                    images(first:100){
                        edges{
                            node{
                                id
                                originalSrc
                                transformedSrc(maxWidth: 200, maxHeight: 200, crop: CENTER)
                            }
                        }
                    }
                    
                    variants(first: 100) {
                        edges {
                          node {
                            id
                            sku
                            title
                            price{
                              amount
                              currencyCode
                            }
                            weight
                            weightUnit
                            requiresShipping
                            currentlyNotInStock 
                            compareAtPrice{
                              amount
                              currencyCode
                            }
                            quantityAvailable
                            selectedOptions{
                                name
                                value
                            }
                           
                            availableForSale
                            image {
                              id
                              originalSrc
                              transformedSrc(maxWidth: 200, maxHeight: 200, crop: CENTER)
                            }
                          }
                        }
                      }
                    }
                  }
                  }`;
    
                  const variables = {
                    ids: productIds,
                    countryCode: window?.Shopify?.country || "IN",
                    languageCode: window?.Shopify?.locale?.toUpperCase()?.split("-")[0] || "EN",
                  };
                  const response = await gfg.customDiscountStorefrontApis.makeGraphQLApiCall(query, variables);
                  const cleanedData = response.data.filter((item) => item != null && item != undefined);
                  const productsData = gfg.utility.dataMappingFromGraphql(cleanedData);
                  return productsData;
            } catch (error) {
                gfg.utility.debugError(`Error inside getProductsDataByIdWithAjaxResponse fn`, error);
            }
        }
    },
    gfgCartRefreshHelper: {
        // Tracks pending restoration timeouts for cleanup
        _widgetRestorationTimeouts: [],

        THEME_NAMES: {
            GENERATED_DATA: "Generated Data Theme",
            TEST_DATA: "test-data",
            DEBUT: "Debut",
            DAWN: "Dawn",
            SENSE: "Sense",
            CRAFT: "Craft",
            REFRESH: "Refresh",
            STUDIO: "Studio",
            PUBLISHER: "Publisher",
            COLORBLOCK: "Colorblock",
            CRAVE: "Crave",
            ORIGIN: "Origin",
            SPOTLIGHT: "Spotlight",
            MINION: "Minion",
            SHRINE: "Shrine",
            SHRINE_PRO: "Shrine Pro",
            SHRINE_LITE: "Shrine Lite",
            BE_YOURS: "Be Yours",
            DISTRICT: "District",
            PRESTIGE: "Prestige",
            COMBINE: "Combine",
            ZALIFY: "Zalify",
            SYMMETRY: "Symmetry",
            BLOCKSHOP: "Blockshop",
            IMPACT: "Impact",
            WAREHOUSE: "Warehouse",
            FOCAL: "Focal",
            YUVA: "Yuva",
            PARALLAX: "Parallax",
            SHOPIWEB_PREMIUM: "Shopiweb Premium",
            BROADCAST: "Broadcast",
            IMPULSE: "Impulse",
            WOODSTOCK: "Woodstock",
            PALO_ALTO: "Palo Alto",
            CONCEPT: "Concept",
            DEBUTIFY: "Debutify",
            LOCAL: "Local",
            PRESTIGE_V10_2_0_O: "prestige-v10-2-0-O",
            VISION: "Vision",
            MOTION: "Motion",
            BIRKENSTOCK: "Birkenstock",
            KALLES: "Kalles",
            FLOW: "Flow",
            XTRA: "Xtra",
            JORDAN_LIBRARY: "Jordan's Library",
            SUMAMAO: "Sumamao",
            STORY_THEME: "Story Thème",
            MINIMOG_OS_2: "Minimog - OS 2.0",
            KRUUT_2020: "Kruut 2020",
            SHRINE_PRO_CAPS: "Shrine PRO",
            ELLA: "Ella",
            FASTOR: "Fastor",
            TURBO: "Turbo",
            BEAUTY: "Beauty",
            REFORMATION: "Reformation",
            GLOZIN: "Glozin",
            PIPELINE: "Pipeline",
            TOYO: "Toyo",
            SHRINE_LITE_CAPS: "Shrine LITE",
            ATLAS: "Atlas",
            BLUM: "Blum",
            ZENDROP: "Zendrop",
            STORY_THEME_2: "Story Theme",
            TRADE: "Trade",
            STILETTO: "Stiletto",
            ZEST: "Zest",
            ANHSTEINMMO_THEME: "AnhsteinMMO Theme",
            ECOMUS: "Ecomus",
            ANTHONY_WEBDEV: "@anthony.webdev",
            HORIZON: "Horizon",
            EURUS: "Eurus",
            LAUNCH_YOUR_STORE_BLOCKY: "LaunchYour.Store Blocky",
            NORTH: "North",
            SAVOR: "Savor",
            VESSEL: "Vessel",
            PITCH: "Pitch",
            DWELL: "Dwell",
            RITUAL: "Ritual",
            ATIELLER: "Atelier",
            TINKER: "Tinker",
            FABRIC: "Fabric",
            HERITAGE: "Heritage",
            HABITAT: "Habitat",
            DISTINCTIVE: "Distinctive",
            TASTE: "Taste",
            HIGHLEVEL_ECOM_BEAUTY: "HighLevel-eCom-Beauty",
            UMINO: "Umino",
            GECKO: "Gecko",
            STARTER: "2.0 Starter theme",
            ENTERPRISE: "Enterprise",
            PARADISE: "Paradise",
            AARAU: "Aarau",
            WONDER: "Wonder",
            ACENO_FASHION_HOME01: "aceno-fashion-home01",
            GALLERIA: "Galleria",
            SHOWTIME: "ShowTime",
            VIOLA: "Viola",
            REVIVE: "Revive",
            CANOPY: "Canopy",
            HYPER: "Hyper",
            APOLLO: "Apollo",
            BLUBOLT_THEME: "Blubolt Theme",
            ASCENT: "Ascent",
            AOLIE: "Aolie",
            SLEEK: "Sleek",
            HONGO: "Hongo",
            STRETCH: "Stretch",
            GLOOW: "Gloow",
            A_IMPACT: "A Impact",
            RISE: "Rise",
            RIDE: "Ride",
            SHRINE_PRO_R: "Shrine Pro®",
            SAVYO_X_VM_0_1: "Savyo x VM 0.1",
            CADIANT: "Cadiant",
            ROASELL: "Roasell",
            TINYBABIES: "Tinybabies",
            SHAPES: "Shapes",
            WHISK: "Whisk",
            MOLDING: "Molding",
            DROPMETA_SPEED: "DropmetaSPEED",
            EXPANSE: "Expanse",
            EMPIRE: "Empire",
            GRID: "Grid",
            OUTSIDERS: "Outsiders",
            VENUE: "Venue"
        },
        
        // Theme groups for different cart handling strategies
        get IMPACT_THEMES() { return [this.THEME_NAMES.IMPACT]; },
        get DAWN_LIKE_THEMES() { return [this.THEME_NAMES.DAWN, this.THEME_NAMES.FLOW, this.THEME_NAMES.XTRA, this.THEME_NAMES.GENERATED_DATA, this.THEME_NAMES.TEST_DATA]; },
        get SPECIAL_HANDLING_THEMES() {
          return [
            this.THEME_NAMES.BE_YOURS, this.THEME_NAMES.DISTRICT, this.THEME_NAMES.COMBINE, 
            this.THEME_NAMES.BLOCKSHOP, this.THEME_NAMES.SYMMETRY, this.THEME_NAMES.WAREHOUSE, 
            this.THEME_NAMES.YUVA, this.THEME_NAMES.PARALLAX, this.THEME_NAMES.MINION, 
            this.THEME_NAMES.SHOPIWEB_PREMIUM, this.THEME_NAMES.BROADCAST, this.THEME_NAMES.WOODSTOCK, 
            this.THEME_NAMES.REFORMATION, this.THEME_NAMES.GLOZIN, this.THEME_NAMES.FOCAL
          ];
        },
        get MODERN_THEMES() {
          return [
            this.THEME_NAMES.HORIZON, this.THEME_NAMES.SAVOR, this.THEME_NAMES.VESSEL, 
            this.THEME_NAMES.PITCH, this.THEME_NAMES.DWELL, this.THEME_NAMES.RITUAL, 
            this.THEME_NAMES.ATIELLER, this.THEME_NAMES.TINKER, this.THEME_NAMES.FABRIC, 
            this.THEME_NAMES.HERITAGE
          ];
        },
        
        // Cart refresh functions
        refreshAjaxCart: function() { return !!window.theme?.ajaxCart?.update && (window.theme.ajaxCart.update(), true); },
        refreshCartGlobal: function() { return !!window.refreshCart && (window.refreshCart(), true); },
        
        // Cart element types
        CART_ICON: "icon",
        CART_DRAWER: "cartDrawer",
        CART_LINE_ITEM: "cartLineItem",
        CART_SUBTOTAL: "cartSubtotal",
        CART_MINI: "cartMini",
        
        // Utility function to replace price in HTML string
        replacePriceInHtml: function(newPrice = "", htmlString = "") {
          if (!newPrice || !htmlString)
                return "";
          const priceMatch = newPrice.match(/\d+[\.,]?\d*/)?.[0];
          if (!priceMatch) return htmlString;
          return htmlString.replace(/\d+[\.,]?\d*/, priceMatch)
        },
        
        // Utility function to replace all elements matching selector with cloned node
        replaceAllElements: function(selector, newNode) {
          (document.querySelectorAll(selector) || []).forEach(element => {
              element.replaceWith(newNode.cloneNode(true))
          })
        },
        
        // Cart refresh functions
        refreshCartContents: function() { return !!window.updateCartContents && (window.updateCartContents(), true); },
        dispatchCartReloadEvent: function() {
            if ("function" != typeof window.CustomEvent || "function" != typeof document.dispatchEvent)
              return false;
          const cartReloadEvent = new CustomEvent("theme:cart:reload");
          return document.dispatchEvent(cartReloadEvent), true
        },
        forceUpdateCartStatus: function() { return !!window.SHTHelper?.forceUpdateCartStatus && (window.SHTHelper.forceUpdateCartStatus(), true); },
        
        // CSS selectors
        CART_LINK_SELECTOR: "a[href='/cart']",
        CART_SECTION_SELECTOR: ".cart-section",
        QUICK_CART_CONTAINER_SELECTOR: ".quick-cart__container",
        get SHOPIFY_ROOT() { return window.Shopify?.routes?.root; },
        SHOPIFY_SECTION_PREFIX: "shopify-section-",
        
        // Get current section ID from cart items component
        getCurrentSectionId: function() {
          const cartItemsComponent = document.querySelector("cart-items-component");
          return cartItemsComponent?.dataset?.sectionId || "header"
        },
        
        // Reload Alpine.js mini cart
        reloadAlpineMiniCart: function() {
          const miniCartStore = Alpine.store("xMiniCart");
          if (miniCartStore)
              return miniCartStore.reLoad(), true
        },
        
        // Additional selectors
        CART_CONTENT_SELECTOR: "#cartContent",
        HEADER_CART_COUNT_SELECTOR: ".header__cart-count",
        CART_DRAWER_SELECTOR: "#Cart-Drawer",
        CART_COUNT_BUBBLE_SELECTOR: ".cart-count-bubble",
        
        // Parse HTML and get cart element
        parseCartElement: function(sections, sectionType) {
            return (new DOMParser).parseFromString(sections[sectionType], "text/html").querySelector(sectionType === "cart-drawer" ? this.CART_DRAWER_SELECTOR : this.CART_COUNT_BUBBLE_SELECTOR);
        },
        
        // Cart refresh functions
        refreshBluboltCart: function() { return !!window.blubolt?.cart?.getCartState && (window.blubolt.cart.getCartState(), true); },
        refreshShopifyCart: function() { return !!window?.Shopify?.getCart && (window.Shopify.getCart(), true); },
        
        // Whisk theme section configuration
        WHISK_SECTIONS: [{
            id: "cart-items",
            section: "cart-items",
            selector: ".js-cart-contents"
        }, {
            id: "cart-icon-bubble",
            section: "cart-icon-bubble",
            selector: ".shopify-section"
        }, {
            id: "cart-live-region-text",
            section: "cart-live-region-text",
            selector: ".shopify-section"
        }, {
            id: "cart-footer",
            section: "cart-footer",
            selector: ".js-cart-footer-contents"
        }, {
            id: "cart-drawer-icon-bubble",
            section: "cart-drawer-icon-bubble",
            selector: ".shopify-section"
        }],
        
        // Check if current page is cart page
        isCartPage: function() {
            return ["/cart", this.SHOPIFY_ROOT + "/cart"].includes(window.location.pathname)
        },
        
        // Default theme configuration for cart sections
        DEFAULT_THEME_CONFIG: {
            allSections: "main-cart-items,cart-live-region-text,cart-drawer,cart-icon-bubble",
            cartDrawer: "cart-drawer",
            cartItems: "main-cart-items",
            cartSubTotal: "cart-live-region-text",
            cartIcon: "cart-icon-bubble",
            cartDrawerReplaceElem: ".drawer__inner",
            cartItemsReplaceElem: "#main-cart-items",
            cartSubtotalReplaceElem: ".cart__footer .totals__total-value",
            cartIconReplaceElem: ".cart-count-bubble"
        },
        
        // Theme-specific cart section configurations
        get THEME_CONFIGS() {
            const THEME_NAMES = this.THEME_NAMES;
            const DEFAULT_THEME_CONFIG = this.DEFAULT_THEME_CONFIG;
            return {
            [THEME_NAMES.DAWN]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.GENERATED_DATA]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.TEST_DATA]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.SENSE]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.CRAFT]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.REFRESH]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.STUDIO]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.PUBLISHER]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.COLORBLOCK]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.CRAVE]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.ORIGIN]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.SPOTLIGHT]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.MINION]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.SHRINE]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.SHRINE_PRO]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.SHRINE_LITE]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.JORDAN_LIBRARY]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.BEAUTY]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.ROASELL]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.RIDE]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.TRADE]: DEFAULT_THEME_CONFIG,
            [THEME_NAMES.TASTE]: DEFAULT_THEME_CONFIG, // Modern Shopify 2.0 theme with custom renderContents method
            [THEME_NAMES.EXPANSE]: DEFAULT_THEME_CONFIG, // Uses custom cart:build event
            [THEME_NAMES.EMPIRE]: DEFAULT_THEME_CONFIG, // Uses custom cart:refresh event
            [THEME_NAMES.GRID]: DEFAULT_THEME_CONFIG, // Flora theme (schema_name: Grid)
            [THEME_NAMES.OUTSIDERS]: { // Rebels theme (schema_name: Outsiders)
                allSections: "main-cart,cart-drawer,cart-icon-bubble",
                cartDrawer: "cart-drawer",
                cartItems: "main-cart",
                cartSubTotal: null,
                cartIcon: "cart-icon-bubble",
                cartDrawerReplaceElem: ".drawer__inner",
                cartItemsReplaceElem: "form#cart",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: ".cart-count-bubble"
            },
            [THEME_NAMES.VENUE]: {
                allSections: "cart-drawer,cart-icon-bubble,header",
                cartDrawer: "cart-drawer",
                cartItems: "cart-drawer",
                cartSubTotal: null,
                cartIcon: "cart-icon-bubble",
                cartDrawerReplaceElem: ".drawer__inner",
                cartItemsReplaceElem: ".cart-drawer__items",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: ".cart-count-bubble"
            },
            [THEME_NAMES.BE_YOURS]: {
                allSections: "mini-cart,cart-icon-bubble,main-cart-items,cart-live-region-text",
                cartDrawer: "mini-cart",
                cartItems: "main-cart-items",
                cartSubTotal: "cart-live-region-text",
                cartIcon: "cart-icon-bubble",
                cartDrawerReplaceElem: "form#cart",
                cartItemsReplaceElem: "#main-cart-items",
                cartSubtotalReplaceElem: ".cart__footer .totals__subtotal-value",
                cartIconReplaceElem: "#cart-icon-bubble"
            },
            [THEME_NAMES.DISTRICT]: {
                allSections: "cart-button,main-cart-items",
                cartDrawer: null,
                cartItems: "main-cart-items",
                cartSubTotal: "cart-button",
                cartIcon: "cart-button",
                cartDrawerReplaceElem: null,
                cartItemsReplaceElem: "form.cart-items__form",
                cartSubtotalReplaceElem: ".subtotal .subtotal__price",
                cartIconReplaceElem: "#cart-button"
            },
            [THEME_NAMES.PRESTIGE]: {
                allSections: "cart-drawer,main-cart,mini-cart",
                cartDrawer: "cart-drawer",
                cartItems: "main-cart",
                cartMini: "mini-cart",
                cartSubTotal: null,
                cartIcon: null,
                cartDrawerReplaceElem: "cart-drawer#cart-drawer",
                cartMiniReplaceElem: "#sidebar-cart",
                cartItemsReplaceElem: ".shopify-section--main-cart",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: null
            },
            [THEME_NAMES.COMBINE]: {
                allSections: "header,main-cart,helper-cart",
                cartDrawer: "helper-cart",
                cartItems: "helper-cart",
                cartSubTotal: null,
                cartIcon: "header",
                cartDrawerReplaceElem: "#AjaxCartForm",
                cartItemsReplaceElem: "cart-form#AjaxCartForm",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: ".icon-button__label"
            },
            [THEME_NAMES.PARALLAX]: {
                allSections: "cart-template,header",
                cartDrawer: "header",
                cartItems: "cart-template",
                cartSubTotal: null,
                cartIcon: "header",
                cartDrawerReplaceElem: "#cart ul",
                cartItemsReplaceElem: ".shopify-section--cart-template",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: "li.cart"
            },
            [THEME_NAMES.ZALIFY]: {
                allSections: "main-cart,mini-cart,header",
                cartDrawer: "mini-cart",
                cartItems: "main-cart",
                cartSubTotal: null,
                cartIcon: "header",
                cartDrawerReplaceElem: ".shopify-section--mini-cart",
                cartItemsReplaceElem: ".shopify-section--main-cart",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: "cart-count"
            },
            [THEME_NAMES.SYMMETRY]: {
                allSections: "cart-drawer,main-cart,header",
                cartDrawer: "cart-drawer",
                cartItems: "main-cart",
                cartSubTotal: null,
                cartIcon: "header",
                cartDrawerReplaceElem: "cart-form",
                cartItemsReplaceElem: ".page-section-spacing",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: ".cart-link__count"
            },
            [THEME_NAMES.BLOCKSHOP]: {
                allSections: "cart-desktop,cart-drawer,cart,header",
                cartDrawer: "cart-drawer",
                cartItems: "cart",
                cartSubTotal: null,
                cartIcon: "header",
                cartDrawerReplaceElem: ".cart--root",
                cartItemsReplaceElem: ".section--cart",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: "a.header--cart"
            },
            [THEME_NAMES.IMPACT]: {
                allSections: "main-cart,cart-drawer,header",
                cartDrawer: "cart-drawer",
                cartItems: "main-cart",
                cartSubTotal: "cart-drawer",
                cartIcon: "header",
                cartDrawerReplaceElem: "cart-drawer",
                cartItemsReplaceElem: ".shopify-section--main-cart .cart-order__summary",
                cartSubtotalReplaceElem: ".cart-form__totals",
                cartIconReplaceElem: ".header__cart-count"
            },
            [THEME_NAMES.WAREHOUSE]: {
                allSections: "header,mini-cart,main-cart",
                cartDrawer: "header",
                cartItems: "main-cart",
                cartSubTotal: null,
                cartIcon: "header",
                cartDrawerReplaceElem: ".mini-cart",
                cartItemsReplaceElem: 'section[data-section-type="cart"]',
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: ".header__cart-count"
            },
            [THEME_NAMES.FOCAL]: {
                allSections: "main-cart,mini-cart,header",
                cartDrawer: "mini-cart",
                cartItems: "main-cart",
                cartSubTotal: null,
                cartIcon: "header",
                cartDrawerReplaceElem: ".shopify-section--mini-cart",
                cartItemsReplaceElem: "section .container--medium",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: ".header__linklist .header__cart-count"
            },
            [THEME_NAMES.YUVA]: {
                allSections: "main-cart,header",
                cartDrawer: "main-cart",
                cartItems: "main-cart",
                cartSubTotal: null,
                cartIcon: "header",
                cartDrawerReplaceElem: "body",
                cartItemsReplaceElem: ".cart-section",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: ".cartCount"
            },
            [THEME_NAMES.SHOPIWEB_PREMIUM]: {
                allSections: "template-cart",
                cartDrawer: "template-cart",
                cartItems: "template-cart",
                cartSubTotal: null,
                cartIcon: null,
                cartDrawerReplaceElem: "ul.product-listing",
                cartItemsReplaceElem: "#cart",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: null
            },
            [THEME_NAMES.BROADCAST]: {
                allSections: "cart-drawer,cart,header",
                cartDrawer: "cart-drawer",
                cartItems: "cart",
                cartSubTotal: null,
                cartIcon: "header",
                cartDrawerReplaceElem: "#cart-drawer cart-items",
                cartItemsReplaceElem: "#cartForm",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: ".header__cart__status__holder cart-count"
            },
            [THEME_NAMES.IMPULSE]: {
                allSections: "main-cart,header",
                cartDrawer: "main-cart",
                cartItems: "main-cart",
                cartSubTotal: null,
                cartIcon: "header",
                cartDrawerReplaceElem: "div[data-products]",
                cartItemsReplaceElem: "#CartPageForm",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: ".cart-link"
            },
            [THEME_NAMES.WOODSTOCK]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.PALO_ALTO]: {
                allSections: "cart-drawer,header"
            },
            [THEME_NAMES.PRESTIGE_V10_2_0_O]: {
                allSections: "cart-drawer,main-cart",
                cartDrawer: null,
                cartItems: "main-cart",
                cartSubTotal: null,
                cartIcon: null,
                cartDrawerReplaceElem: "cart-drawer#cart-drawer",
                cartItemsReplaceElem: ".shopify-section--main-cart",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: null
            },
            [THEME_NAMES.BIRKENSTOCK]: {
                allSections: "main-cart-items,cart-notification-product,cart-icon-bubble,header",
                cartDrawer: "header",
                cartItems: "main-cart-items",
                cartSubTotal: null,
                cartIcon: "cart-icon-bubble",
                cartDrawerReplaceElem: "#cart-notification .mini-cart-content",
                cartItemsReplaceElem: "#main-cart-items",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: ".cart-count-bubble"
            },
            [THEME_NAMES.FLOW]: {
                allSections: "cart-drawer,template--cart,header",
                cartDrawer: "cart-drawer",
                cartItems: "template--cart",
                cartSubTotal: null,
                cartIcon: "header",
                cartDrawerReplaceElem: "cart-drawer .global-drawer__content",
                cartItemsReplaceElem: ".wrapper-spacing--v--template .width--content",
                cartSubtotalReplaceElem: null,
                cartIconReplaceElem: ".cart-item-count-bubble.cart-item-count-header.cart-item-count-header--quantity"
            },
            [THEME_NAMES.XTRA]: {
                allSections: "side-cart,main-cart",
                cartIcon: null,
                cartDrawer: "side-cart",
                cartItems: "main-cart",
                cartSubTotal: null,
                cartIconReplaceElem: null,
                cartDrawerReplaceElem: "#cart",
                cartSubtotalReplaceElem: null,
                cartItemsReplaceElem: "#content"
            },
            [THEME_NAMES.SUMAMAO]: {
                allSections: "main-cart,cart-drawer,header-inline",
                cartIcon: "header-inline",
                cartDrawer: "cart-drawer",
                cartItems: "main-cart",
                cartSubTotal: null,
                cartIconReplaceElem: "hdt-cart-count",
                cartDrawerReplaceElem: "hdt-cart-drawer",
                cartItemsReplaceElem: "#hdt-page-cart",
                cartSubtotalReplaceElem: null
            },
            [THEME_NAMES.SHRINE_PRO_CAPS]: {
                allSections: "main-cart-items,cart-live-region-text,cart-drawer,cart-icon-bubble",
                cartDrawer: "cart-drawer",
                cartItems: "main-cart-items",
                cartSubTotal: "cart-live-region-text",
                cartIcon: "cart-icon-bubble",
                cartDrawerReplaceElem: ".drawer__inner",
                cartItemsReplaceElem: "#main-cart-items",
                cartSubtotalReplaceElem: ".cart__footer .totals__total-value",
                cartIconReplaceElem: ".cart-count-bubble"
            },
            [THEME_NAMES.TURBO]: {
                allSections: "header,cart-template",
                cartIcon: "header",
                cartIconReplaceElem: ".cart-container .cart_count",
                cartItems: "cart-template",
                cartItemsReplaceElem: "section .container.content"
            },
            [THEME_NAMES.REFORMATION]: {
                allSections: "cart-drawer,cart-bubble",
                cartDrawer: "cart-drawer",
                cartIcon: "cart-bubble",
                cartDrawerReplaceElem: "#Cart-Drawer",
                cartIconReplaceElem: "#cart-drawer-toggle"
            },
            [THEME_NAMES.GLOZIN]: {
                allSections: "minicart-form,header",
                cartIcon: "header",
                cartDrawer: "minicart-form",
                cartIconReplaceElem: "#header__minicart .cart-count",
                cartDrawerReplaceElem: ".minicart__wrapper"
            },
            [THEME_NAMES.TOYO]: {
                allSections: "cart-drawer,cart-icon-bubble,cart-icon-bubble-sticky"
            },
            [THEME_NAMES.SHRINE_LITE_CAPS]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.SHRINE_PRO_R]: {
                allSections: "main-cart-items,cart-live-region-text,cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.MINIMOG_OS_2]: {
                allSections: "cart-drawer"
            },
            [THEME_NAMES.ATLAS]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.ZENDROP]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.STORY_THEME_2]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.STILETTO]: {
                allSections: "header,main-cart,quick-cart",
                cartDrawer: "quick-cart",
                cartItems: "main-cart",
                cartIcon: "header",
                cartDrawerReplaceElem: ".quick-cart__container",
                cartItemsReplaceElem: ".cart-section",
                cartIconReplaceElem: "a[href='/cart']"
            },
            [THEME_NAMES.ZEST]: {
                allSections: "cart-drawer,header"
            },
            [THEME_NAMES.ANHSTEINMMO_THEME]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.ANTHONY_WEBDEV]: {
                allSections: "cart-icon-bubble,mobile-cart-icon-bubble,mini-cart"
            },
            [THEME_NAMES.LAUNCH_YOUR_STORE_BLOCKY]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.NORTH]: {
                allSections: "cart-bubble,cart-side,main-cart",
                cartDrawer: "cart-side",
                cartDrawerReplaceElem: "#side-cart .side-panel-content",
                cartItems: "main-cart",
                cartItemsReplaceElem: ".thb-cart-form-container",
                cartIcon: "cart-bubble",
                cartIconReplaceElem: ".float_count"
            },
            [THEME_NAMES.HABITAT]: {
                allSections: "main-cart,cart-drawer,cart-bubble"
            },
            [THEME_NAMES.DISTINCTIVE]: {
                allSections: "main-cart,cart-drawer,cart-bubble"
            },
            [THEME_NAMES.HIGHLEVEL_ECOM_BEAUTY]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.UMINO]: {
                allSections: "form-mini-cart"
            },
            [THEME_NAMES.STARTER]: {
                allSections: "cart-content,header-link-cart"
            },
            [THEME_NAMES.PARADISE]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.WONDER]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.SHOWTIME]: {
                allSections: "g_cart-drawer"
            },
            [THEME_NAMES.VIOLA]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.REVIVE]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.APOLLO]: {
                allSections: "cart-drawer,cart-icon-bubble,main-cart-items,cart-icon-bubble-pc"
            },
            [THEME_NAMES.ASCENT]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.GLOOW]: {
                allSections: "cart-drawer,cart-icon-bubble"
            },
            [THEME_NAMES.RISE]: {
                allSections: "cart-notification-product,cart-notification-button,cart-icon-bubble"
            },
            [THEME_NAMES.SAVYO_X_VM_0_1]: {
                allSections: "minicart-form"
            },
            [THEME_NAMES.CADIANT]: {
                allSections: "cart-template"
            },
            [THEME_NAMES.WHISK]: {
                allSections: "cart-items,cart-icon-bubble,cart-live-region-text,cart-footer,cart-drawer-icon-bubble"
            }
            };
        },
        
        // Theme-specific cart update handler
        handleThemeSpecificUpdate: function(themeUpdateData) {
            const { themeName } = themeUpdateData;
            const THEME_NAMES = this.THEME_NAMES;
            const CART_DRAWER = this.CART_DRAWER;
            const CART_ICON = this.CART_ICON;
            const CART_LINE_ITEM = this.CART_LINE_ITEM;
            const CART_SUBTOTAL = this.CART_SUBTOTAL;
            const CART_MINI = this.CART_MINI;
            const replaceAllElements = this.replaceAllElements.bind(this);
            const replacePriceInHtml = this.replacePriceInHtml.bind(this);
            switch (themeName) {
            case THEME_NAMES.COMBINE:
                return ( ({type: elementType, newHtmlDOM: newHtmlDOM}) => {
                    if (elementType === CART_DRAWER) {
                        const newSubtotalElement = newHtmlDOM.querySelector("#AjaxCartSubtotal");
                        const currentSubtotalElement = document.querySelector("#AjaxCartSubtotal");
                        if (currentSubtotalElement && newSubtotalElement) {
                            currentSubtotalElement.innerHTML = newSubtotalElement.innerHTML;
                        }
                        const newCartCountElement = newHtmlDOM.querySelector("#AjaxCartForm .cart__count");
                        const currentCartCountElement = document.querySelector("#site-cart-sidebar [data-header-cart-count]");
                        if (currentCartCountElement && newCartCountElement) {
                            currentCartCountElement.innerHTML = newCartCountElement.innerHTML;
                        }
                    }
                    return false;
                }
                )(themeUpdateData);
            case THEME_NAMES.SYMMETRY:
                return ( ({type: elementType, newNode: newNode}) => (elementType === CART_DRAWER && newNode.querySelectorAll(".cart-item__column.cart-item__image a").forEach(cartItemLink => {
                    const imageElement = cartItemLink.querySelector("img");
                    const noscriptElement = cartItemLink.querySelector("noscript");
                    if (noscriptElement) {
                        const noscriptContent = noscriptElement.innerHTML.trim();
                        const tempDiv = document.createElement("div");
                        tempDiv.innerHTML = noscriptContent;
                        const noscriptImage = tempDiv.querySelector("img");
                        if (noscriptImage) {
                            const imageSrc = noscriptImage.getAttribute("src");
                            imageElement.setAttribute("src", imageSrc);
                        }
                    }
                }
                ),
                false))(themeUpdateData);
            case THEME_NAMES.BLOCKSHOP:
                return ( ({type: elementType, newNode: newNode}) => {
                    if (elementType === CART_ICON) {
                        const cartCount = newNode.getAttribute("data-cart-count");
                        return document.querySelector("a.header--cart").setAttribute("data-cart-count", cartCount), true;
                    }
                    if (elementType === CART_LINE_ITEM) {
                        newNode.querySelectorAll(".cart--item").forEach(cartItem => {
                            cartItem.style.opacity = "1";
                            cartItem.style.visibility = "visible";
                        });
                    }
                    if (elementType === CART_DRAWER && newNode.querySelectorAll(".cart--item").length) {
                        document.querySelector(".layout--viewport")?.setAttribute("data-cart-empty", false);
                    }
                    return false;
                }
                )(themeUpdateData);
            case THEME_NAMES.IMPACT:
                return ( ({type: elementType, newNode: newNode, currentNode: currentNode}) => elementType === CART_SUBTOTAL && (newNode = newNode.querySelectorAll(".h5")?.[1] || newNode,
                currentNode.querySelectorAll(".h-stack.gap-4.justify-between").forEach( (stackElement, index) => {
                    let priceElement;
                    priceElement = index === 0 ? stackElement.querySelectorAll(".text-subdued")[1] : stackElement.querySelectorAll(".h5")[1];
                    priceElement.innerHTML = replacePriceInHtml(newNode.innerHTML || "", priceElement.innerHTML);
                }
                ),
                true))(themeUpdateData);
            case THEME_NAMES.DISTRICT:
                return ( ({type: elementType, newNode: newNode, currentNode: currentNode}) => {
                    if (elementType === CART_ICON) {
                        const newIconHTML = newNode.innerHTML;
                        return currentNode.innerHTML = newIconHTML, true;
                    }
                    return false;
                }
                )(themeUpdateData);
            case THEME_NAMES.YUVA:
                return ( ({type: elementType, currentNode: currentNode}) => elementType === CART_DRAWER && (currentNode.classList.contains("side_Drawer_open") && currentNode.classList.remove("side_Drawer_open"),
                true))(themeUpdateData);
            case THEME_NAMES.PARALLAX:
                return ( ({type: elementType, newNode: newNode}) => (elementType === CART_DRAWER && (newNode.classList.add("mm-listview"),
                newNode.querySelectorAll("li").forEach(listItem => {
                    listItem.classList.add("mm-listitem");
                    const linkElement = listItem.querySelector("a");
                    if (linkElement) {
                        linkElement.classList.add("mm-listitem__text");
                    }
                }
                )),
                false))(themeUpdateData);
            case THEME_NAMES.MINION:
                return ( ({type: elementType, targetCurrentElem: targetSelector, newNode: newNode}) => elementType === CART_ICON && (replaceAllElements(targetSelector, newNode),
                true))(themeUpdateData);
            case THEME_NAMES.BROADCAST:
                return ( ({type: elementType, targetCurrentElem: targetSelector, currentNode: currentNode, newNode: newNode}) => {
                    if (elementType === CART_ICON)
                        return replaceAllElements(targetSelector, newNode), true;
                    if (elementType === CART_DRAWER) {
                        const cartCountElement = newNode.querySelector("cart-count");
                        if (cartCountElement && (document.querySelectorAll("cart-count") || []).forEach(cartCount => {
                            cartCount.replaceWith(cartCountElement.cloneNode(true))
                        }
                        ),
                        newNode.classList.contains("is-empty")) {
                            const cartDrawer = document.querySelector("cart-drawer");
                            return void (cartDrawer && cartDrawer.classList.add("is-empty"))
                        }
                        {
                            const cartDrawer = document.querySelector("cart-drawer");
                            cartDrawer && cartDrawer.classList.contains("is-empty") && cartDrawer.classList.remove("is-empty")
                        }
                        const totalPriceElement = newNode.querySelector(".cart__total__price");
                        if (totalPriceElement) {
                            const currentTotalPrice = document.querySelector(".cart__total__price");
                            currentTotalPrice && currentTotalPrice.replaceWith(totalPriceElement)
                        }
                        const cartItemsElement = newNode.querySelector("cart-items");
                        cartItemsElement.querySelectorAll(".cart__item").forEach(cartItem => {
                            cartItem.classList.add("is-animated")
                        }
                        ),
                        currentNode.replaceWith(cartItemsElement);
                        const progressBar = document.querySelector(".free-shipping__progress-bar");
                        if (progressBar) {
                            const maxValue = progressBar.getAttribute("max") || "100";
                            progressBar.setAttribute("value", maxValue)
                        }
                        return true
                    }
                    return false
                }
                )(themeUpdateData);
            case THEME_NAMES.IMPULSE:
                return ( ({type: elementType, newNode: newNode, currentNode: currentNode}) => {
                    if (elementType === CART_ICON)
                        return false;
                    let cartFormId = "CartPageForm";
                    if (newNode.querySelectorAll(".cart__image image-element").forEach(imageElement => {
                        imageElement.classList.add("aos", "init", "aos-animate")
                    }
                    ),
                    "cartDrawer" === elementType) {
                        cartFormId = "CartDrawerForm";
                        const subtotalElement = newNode.querySelector("div[data-subtotal]") || document.createElement("div");
                        document.querySelector("div[data-subtotal]").replaceWith(subtotalElement);
                        (newNode = newNode.querySelector("div[data-products]")) || (newNode = document.createElement("div"));
                        newNode.classList.remove("cart__page-col");
                        const cartItems = newNode.querySelectorAll(".cart__item");
                        if (console.log("Number of cart__item elements:", cartItems.length),
                        cartItems) {
                            const cartDrawer = document.querySelector("#CartDrawer");
                            cartDrawer && cartDrawer.classList.contains("is-empty") && cartDrawer.classList.remove("is-empty")
                        }
                    }
                    currentNode.replaceWith(newNode);
                    const cartFormElement = document.getElementById(cartFormId);
                    return cartFormElement && new theme.CartForm(cartFormElement), true
                }
                )(themeUpdateData);
            case THEME_NAMES.DAWN:
            case THEME_NAMES.GENERATED_DATA:
            case THEME_NAMES.TEST_DATA:
                return ( ({type: elementType, newNode: newNode, newHtmlDOM: newHtmlDOM}) => {
                    if (elementType === CART_DRAWER) {
                        const cartDrawerItems = newNode.querySelector("cart-drawer-items");
                        if (cartDrawerItems && cartDrawerItems.classList.contains("is-empty"))
                            return false;
                        const recommendationsWrapper = newNode.querySelector(".cart-recommendations-wrapper");
                        recommendationsWrapper && (recommendationsWrapper.style.display = "block")
                    }
                    if (elementType === CART_ICON) {
                        if (newHtmlDOM.querySelector(".cart-count-bubble"))
                            return false;
                        const cartIcon = newHtmlDOM.querySelector(".icon.icon-cart");
                        cartIcon && replaceAllElements(".header__icon.header__icon--cart .icon.icon-cart", cartIcon)
                    }
                    return false
                }
                )(themeUpdateData);
            case THEME_NAMES.BIRKENSTOCK:
                return ( ({type: elementType, targetCurrentElem: targetSelector, newNode: newNode}) => elementType === CART_ICON && (replaceAllElements(targetSelector, newNode),
                true))(themeUpdateData);
            case THEME_NAMES.PRESTIGE:
                return ( ({type: elementType, newNode: newNode, currentNode: currentNode}) => {
                    if (elementType === CART_MINI && newNode)
                        return currentNode.innerHTML = newNode.innerHTML, true;
                    if (elementType === CART_DRAWER && newNode) {
                        currentNode.innerHTML = newNode.innerHTML;
                        const cartDot = document.querySelector("cart-dot");
                        return cartDot && cartDot.classList.add("is-visible"), true
                    }
                    return false
                }
                )(themeUpdateData);
            case THEME_NAMES.XTRA:
                return ( ({type: elementType, dataToParse: htmlData}) => {
                    if (!window.ajaxCart)
                        return window.location.reload();
                    if (elementType === CART_DRAWER && window.ajaxCart.load({
                        sections: {
                            "side-cart": htmlData
                        }
                    }),
                    elementType === CART_LINE_ITEM) {
                        if (!window.cartPageContainer)
                            return window.location.reload();
                        window.cartPageContainer.innerHTML = newNode.innerHTML;
                        window.ajaxCart.init()
                    }
                    return true
                }
                )(themeUpdateData);
            case THEME_NAMES.BE_YOURS:
                return ( ({type: elementType, newNode: newNode, currentNode: currentNode}) => elementType === CART_ICON && (currentNode.innerHTML = newNode.innerHTML,
                true))(themeUpdateData);
            case THEME_NAMES.SUMAMAO:
                return ( ({type: elementType, newNode: newNode, currentNode: currentNode}) => {
                    const loadingBar = document.querySelector("hdt-loading-bar");
                    return loadingBar && (loadingBar.style.transform = ""),
                    elementType === CART_DRAWER && (currentNode.innerHTML = newNode.innerHTML),
                    false
                }
                )(themeUpdateData);
            case THEME_NAMES.TURBO:
                return ( ({type: elementType, targetCurrentElem: targetSelector, newNode: newNode}) => elementType === CART_ICON && (replaceAllElements(targetSelector, newNode),
                true))(themeUpdateData);
            case THEME_NAMES.REFORMATION:
                return ( ({type: elementType, newNode: newNode, currentNode: currentNode}) => {
                    if (elementType === CART_DRAWER && newNode)
                        return currentNode.innerHTML = newNode.innerHTML, true;
                    if (elementType === CART_ICON && newNode) {
                        const newItemCount = newNode.querySelector(".thb-item-count");
                        const currentItemCount = currentNode.querySelector(".thb-item-count");
                        if (newItemCount && currentItemCount)
                            return currentItemCount.innerText = newItemCount.innerText, true
                    }
                    return false
                }
                )(themeUpdateData);
            case THEME_NAMES.GLOZIN:
                return ( ({type: elementType, newNode: newNode, currentNode: currentNode}) => {
                    if (elementType === CART_DRAWER && newNode && currentNode)
                        try {
                            const currentProgressBar = currentNode.querySelector("free-ship-progress-bar");
                            const currentMinicartForm = currentNode.querySelector("#minicart-form");
                            const newProgressBar = newNode.querySelector("free-ship-progress-bar");
                            const newMinicartForm = newNode.querySelector("#minicart-form");
                            let hasUpdated = false;
                            if (currentProgressBar && newProgressBar && (currentProgressBar.replaceWith(newProgressBar),
                            hasUpdated = true),
                            currentMinicartForm && newMinicartForm) {
                                currentMinicartForm.replaceWith(newMinicartForm);
                                const cartItemCount = currentNode.querySelectorAll("#minicart .items .cart-item")?.length;
                                const cartCountElement = currentNode.querySelector(".minicart__wrapper .minicart__header .minicart-heading .cart-count");
                                cartCountElement && (cartCountElement.innerText = `(${cartItemCount})`);
                                hasUpdated = true
                            }
                            return hasUpdated
                        } catch (error) {
                            return false
                        }
                    if (elementType === CART_ICON && newNode) {
                        const currentCartCount = currentNode.querySelector(".cart-count");
                        const newCartCount = newNode.querySelector(".cart-count");
                        if (newCartCount && currentCartCount)
                            return currentCartCount.innerText = newCartCount.innerText, true
                    }
                    return false
                }
                )(themeUpdateData);
            case THEME_NAMES.WAREHOUSE:
                return ( ({type: elementType, newNode: newNode, currentNode: currentNode}) => !!(newNode && currentNode && [CART_DRAWER, CART_ICON].includes(elementType)) && (currentNode.innerHTML = newNode.innerHTML,
                true))(themeUpdateData);
            case THEME_NAMES.FOCAL:
                return ( ({type: elementType, newNode: newNode, currentNode: currentNode}) => {
                    if (!newNode || !currentNode) return false;
                    if (elementType === CART_DRAWER) {
                        // Check if cart-drawer is currently open before updating
                        const currentCartDrawer = currentNode.querySelector("cart-drawer");
                        const isOpen = currentCartDrawer?.hasAttribute("open");

                        // Update innerHTML
                        currentNode.innerHTML = newNode.innerHTML;

                        // Restore open state if it was open before
                        if (isOpen) {
                            const newCartDrawer = currentNode.querySelector("cart-drawer");
                            if (newCartDrawer) {
                                newCartDrawer.setAttribute("open", "");
                            }
                        }
                        return true;
                    }
                    if (elementType === CART_ICON) {
                        currentNode.innerHTML = newNode.innerHTML;
                        return true;
                    }
                    return false;
                })(themeUpdateData);
            case THEME_NAMES.ROASELL:
                return ( () => {
                    const cartDrawer = document.querySelector("cart-drawer");
                    cartDrawer && cartDrawer.open()
                }
                )();
            default:
                return false
            }
        },
      
        
        // Main function to replace HTML nodes in cart
        replaceCartHtmlNode: function({type: elementType, dataToParse: htmlData, targetCurrentElem: targetSelector, themeName: themeName=""}) {
            try {
                const THEME_NAMES = this.THEME_NAMES;
                const CART_SUBTOTAL = this.CART_SUBTOTAL;
                const CART_ICON = this.CART_ICON;
                const CART_DRAWER = this.CART_DRAWER;
                const CART_LINE_ITEM = this.CART_LINE_ITEM;
                const SPECIAL_HANDLING_THEMES = this.SPECIAL_HANDLING_THEMES;
                const IMPACT_THEMES = this.IMPACT_THEMES;
                const replacePriceInHtml = this.replacePriceInHtml.bind(this);
                const handleThemeSpecificUpdate = this.handleThemeSpecificUpdate.bind(this);
                
                const parsedHTML = (new DOMParser).parseFromString(htmlData, "text/html");
                let targetElement;
                let newElement;
                // Compute a selector override for element replacement, to account for theme-specific quirks:
                const getSelectorOverride = ({ themeName, type: elementType, targetCurrentElem: defaultSelector }) => {
                    // Special handling for Impact theme cart subtotal
                    if (themeName === THEME_NAMES.IMPACT && elementType === CART_SUBTOTAL) {
                        return ".h-stack.gap-4.justify-between";
                    }
      
                    // District theme has custom selectors
                    if (themeName === THEME_NAMES.DISTRICT) {
                        if (elementType === CART_ICON) return "#shopify-section-cart-button";
                        if (elementType === CART_SUBTOTAL) return ".cart-button__total.money";
                    }
      
                    // Impulse theme cart drawer section
                    if (themeName === THEME_NAMES.IMPULSE && elementType === CART_DRAWER) {
                        return "#CartPageForm";
                    }
      
                    // Broadcast theme cart drawer section
                    if (themeName === THEME_NAMES.BROADCAST && elementType === CART_DRAWER) {
                        return "#cart-drawer";
                    }
      
                    // Be Yours theme cart icon
                    if (themeName === THEME_NAMES.BE_YOURS && elementType === CART_ICON) {
                        return "#shopify-section-cart-icon-bubble";
                    }
      
                    // XTRA theme line item
                    if (themeName === THEME_NAMES.XTRA && elementType === CART_LINE_ITEM) {
                        return "#shopify-section-main-cart";
                    }
      
                    // Generic cart subtotal fallback
                    if (elementType === CART_SUBTOTAL) {
                        return "#shopify-section-cart-live-region-text";
                    }
      
                    // GLOZIN theme minicart drawer
                    if (themeName === THEME_NAMES.GLOZIN && elementType === CART_DRAWER) {
                        return "#shopify-section-minicart-form";
                    }
      
                    // Default fallback to provided selector
                    return defaultSelector;
                };
      
                const selectorOverride = getSelectorOverride({
                    themeName: themeName,
                    type: elementType,
                    targetCurrentElem: targetSelector,
                });
                const isSubtotalUpdate = elementType === CART_SUBTOTAL;
                const isIconUpdate = elementType === CART_ICON;
                newElement = parsedHTML.querySelector(selectorOverride);
      
                // Drawer empty state logic (for drawers)
                if (newElement) {
                    const drawer = document.querySelector(".drawer");
                    const isDrawerType = elementType === CART_DRAWER;
                    if (drawer && isDrawerType) {
                        const emptyNow = drawer.classList.contains("is-empty");
                        const cartIsEmpty = htmlData.includes("Continue shopping") || !!newElement.querySelector(".cart__empty-text");
                        if (emptyNow && !cartIsEmpty) {
                            drawer.classList.remove("is-empty");
                        } else if (!emptyNow && cartIsEmpty) {
                            drawer.classList.add("is-empty");
                        }
                    }
                }
      
                // Cart icon update logic for standard themes
                if (newElement) {
                    if (isIconUpdate && !SPECIAL_HANDLING_THEMES.includes(themeName)) {
                        const allTargets = document.querySelectorAll(targetSelector);
                        targetElement = Array.from(allTargets).find(el => el.parentElement?.matches('a[href*="/cart"]'));
                        if (!targetElement) {
                            const currentIcon = document.querySelector("#cart-icon-bubble");
                            const newIcon = parsedHTML.querySelector("#shopify-section-cart-icon-bubble");
                            if (currentIcon && newIcon) {
                                currentIcon.innerHTML = newIcon.innerHTML;
                            }
                        }
                    } else {
                        targetElement = document.querySelector(targetSelector);
                    }
                }
      
                if (!targetElement) return;
                if (!newElement) newElement = document.createElement("div");
      
                if (isSubtotalUpdate && !IMPACT_THEMES.includes(themeName)) {
                    if (newElement.innerHTML && newElement.innerHTML.trim() !== "") {
                        targetElement.innerHTML = replacePriceInHtml(newElement.innerHTML, targetElement.innerHTML);
                    }
                    return;
                }
      
                const handled = handleThemeSpecificUpdate({
                    themeName,
                    type: elementType,
                    newNode: newElement,
                    newHtmlDOM: parsedHTML,
                    currentNode: targetElement,
                    targetCurrentElem: targetSelector,
                    dataToParse: htmlData
                });
                if (handled) return;
      
                targetElement.replaceWith(newElement);
            } catch (error) {
                return void console.error("Error in replaceCartHtmlNode", error)
            }
        },
        
        // Third-party cart app identifiers
        AMP_CART: "amp",
        REBUY_CART: "rebuy",
        UPCART_CART: "upcart",
        VANGA_CART: "vanga",
        OPUS_CART: "opus",
        XB_CART: "xb",
        AOV_AI_CART: "aov_ai",
        QIKIFY_STICKY_CART: "qikify_sticky",
        SALE_MAX_CART_UPSELL: "sale_max_cart_upsell",
        SLIDE_CARTY: "slide_carty",
        I_CART: "i_cart",
      
        // Third-party cart app refresh functions, mapped by cart identifier
        get CART_APP_REFRESH_FUNCTIONS() {
            const REBUY_CART = this.REBUY_CART;
            const AMP_CART = this.AMP_CART;
            const UPCART_CART = this.UPCART_CART;
            const VANGA_CART = this.VANGA_CART;
            const OPUS_CART = this.OPUS_CART;
            const XB_CART = this.XB_CART;
            const AOV_AI_CART = this.AOV_AI_CART;
            const QIKIFY_STICKY_CART = this.QIKIFY_STICKY_CART;
            const SALE_MAX_CART_UPSELL = this.SALE_MAX_CART_UPSELL;
            const SLIDE_CARTY = this.SLIDE_CARTY;
            const I_CART = this.I_CART;
            return {
            [REBUY_CART]: () => {
                const rebuySmartCart = window?.Rebuy?.SmartCart;
                if (rebuySmartCart?.show) {
                    rebuySmartCart.show();
                }
                if (typeof rebuySmartCart?.initializeSmartCartExperiments === "function") {
                    rebuySmartCart.initializeSmartCartExperiments();
                }
                return true;
            },
            [AMP_CART]: async () => {
                if (typeof window?.SLIDECART_UPDATE === "function") {
                    await window.SLIDECART_UPDATE();
                }
                if (typeof window?.SLIDECART_OPEN === "function") {
                    await window.SLIDECART_OPEN();
                }
                return true;
            },
            [UPCART_CART]: async () => {
                if (typeof window?.upcartRefreshCart === "function") {
                    await window.upcartRefreshCart();
                    return true;
                }
                return false;
            },
            [VANGA_CART]:async () => {
                if (typeof window?.Vanga?.refresh === "function") {
                    await window.Vanga.refresh();
                    return true;
                }
                return false;
            },
            [OPUS_CART]: async () => {
                if (typeof window?.opusRefreshCart === "function") {
                    await window.opusRefreshCart();
                }
                if (typeof window?.opusOpen === "function") {
                    window.opusOpen();
                }
                return true;
            },
            [XB_CART]: () => {
                // XB AI Cart uses event-driven architecture
                if (window?.XBOOST_CART || typeof window?.xbcFetch === "function") {
                    document.dispatchEvent(new CustomEvent('xboost-need-refresh-and-open-cart', {
                        bubbles: true
                    }));
                    return true;
                }
                return false;
            },
            [AOV_AI_CART]: () => {
                if (typeof window?.aovCartDrawerUpdateAndOpen === "function") {
                    window.aovCartDrawerUpdateAndOpen()
                    return true;
                }
                return false;
            },
            [QIKIFY_STICKY_CART]: async () => {
                if (typeof window?.STICKY_CART_UPDATE === "function") {
                    await window.STICKY_CART_UPDATE();
                }
                if (typeof window?.STICKY_CART_OPEN === "function") {
                    window.STICKY_CART_OPEN();
                }
                return true;
            },
            [SALE_MAX_CART_UPSELL]: async () => {
                if (typeof window?.smeCartCall === "function") {
                    await window.smeCartCall();
                }
                if (typeof window?.openSmeCart === "function") {
                    window.openSmeCart();
                }
                return true;
            },
            [SLIDE_CARTY]: async () => {
                if (window.EasySlideCart.enabled) {
                    window.dispatchEvent(new CustomEvent('SLIDECARTY:refresh'))
                    window.dispatchEvent(new CustomEvent('SLIDECARTY:open'))  
                    return true;
                }
                return false;
            },
            [I_CART]: async () => {
                if (typeof window?.prepareDataForDisplayWidgetByRule === "function") {
                    await window.prepareDataForDisplayWidgetByRule();
                }
                return true;
            },
            // Cartly Slide Cart Drawer
            // the app itself keeps calling the refresh function on cart update so no need to handle it here 
            // KACHING CART APP
            //Works fine with our sections update approach without any custom logic handeler
            };
        },
        refreshCartForTheme: function(themeName, sectionsData) {
            const self = this;
            const isCartPageView = this.isCartPage();
            // Utility to execute a refresh function or reload the page if it returns falsey
            const executeOrReload = (refreshFunction) => {
                return refreshFunction ? refreshFunction() : window.location.reload();
            };
  
            // Handles MODERN_THEMES refresh logic
            const refreshModernThemeCart = (sectionsData) => {
                const currentSectionId = self.getCurrentSectionId();
                if (!currentSectionId) return false;
  
                const parser = new DOMParser();
                const rawSectionHtml = sectionsData[currentSectionId];
                const parsedHTML = parser.parseFromString(rawSectionHtml, "text/html");
  
                // Special handling for header (cart icon)
                if (currentSectionId === "header") {
                    const newCartIcon = parsedHTML.querySelector("cart-icon");
                    const currentCartIcon = document.querySelector("cart-icon");
                    if (!newCartIcon || !currentCartIcon) return false;
                    currentCartIcon.innerHTML = newCartIcon.innerHTML;
                    return true;
                }
  
                // Get the section element from parsed HTML
                const newSection = parsedHTML.querySelector(`#${self.SHOPIFY_SECTION_PREFIX}${currentSectionId}`);
                if (!newSection) return false;
  
                // Get cart items component elements
                const currentCartItems = document.querySelector(`#${self.SHOPIFY_SECTION_PREFIX}${currentSectionId} cart-items-component`);
                const newCartItems = newSection.querySelector("cart-items-component");
  
                if (!newCartItems || !currentCartItems) return false;
  
                // Handle cart page vs cart drawer differently
                if (isCartPageView) {
                    // For cart page: update the entire cart items wrapper
                    const currentWrapper = currentCartItems.querySelector(".cart-items__wrapper");
                    const newWrapper = newCartItems.querySelector(".cart-items__wrapper");
                    
                    if (currentWrapper && newWrapper) {
                        currentWrapper.innerHTML = newWrapper.innerHTML;
                    }
                    
                    // Update cart summary sections on the cart page
                    const currentPageSummary = document.querySelector(".cart__summary");
                    const newPageSummary = newSection.querySelector(".cart__summary");
                    
                    if (currentPageSummary && newPageSummary) {
                        currentPageSummary.innerHTML = newPageSummary.innerHTML;
                    }
                } else {
                    // For cart drawer: update only the scroll-hint section (cart items table)
                    const currentScrollHint = currentCartItems.querySelector("scroll-hint.cart-drawer__items");
                    const newScrollHint = newCartItems.querySelector("scroll-hint.cart-drawer__items");
                    
                    if (currentScrollHint && newScrollHint) {
                        currentScrollHint.innerHTML = newScrollHint.innerHTML;
                    }
  
                    // Update the cart drawer summary section (totals, discounts, checkout button)
                    const currentSummary = currentCartItems.querySelector(".cart-drawer__summary");
                    const newSummary = newCartItems.querySelector(".cart-drawer__summary");
                    
                    if (currentSummary && newSummary) {
                        currentSummary.innerHTML = newSummary.innerHTML;
                    }
                    
                    // Open cart drawer
                    let cartDrawerComponent = document.querySelector("cart-drawer-component");
                    cartDrawerComponent && cartDrawerComponent.open()
                }
  
                // Update cart bubble if it exists (for both page and drawer)
                const cartBubbleSelector = "[ref='cartBubble']";
                const newCartBubble = newCartItems.querySelector(cartBubbleSelector);
                if (newCartBubble) {
                    self.replaceAllElements(cartBubbleSelector, newCartBubble);
                }
  
                // Remove "has-cart" class from the cart icon if absent in updated header
                const parsedCartIcon = parsedHTML.querySelector("cart-icon");
                if (parsedCartIcon && !parsedCartIcon.classList.contains("header-actions__cart-icon--has-cart")) {
                    const liveCartIcon = document.querySelector("cart-icon");
                    if (liveCartIcon) {
                        liveCartIcon.classList.remove("header-actions__cart-icon--has-cart");
                    }
                }
                
                return true;
            };
  
            // Use block for modern themes
            if (this.MODERN_THEMES.includes(themeName)) {
                return executeOrReload(() => refreshModernThemeCart(sectionsData));
            }
  
            // Otherwise, handle all other themes with a readable and explicit switch
            // (Grouped switch cases for brevity; always one return per theme)
            const THEME_NAMES = this.THEME_NAMES;
            switch (themeName) {
                case THEME_NAMES.DEBUT:
                case THEME_NAMES.DEBUTIFY:
                    return executeOrReload(() => this.refreshAjaxCart());
  
                case THEME_NAMES.LOCAL:
                    return executeOrReload(() => this.refreshCartGlobal());
  
                case THEME_NAMES.VISION:
                    return executeOrReload(() => {
                        if (isCartPageView && typeof Cart !== "undefined") {
                            (new Cart).refresh();
                        }
                        const cartDrawer = document.querySelector("#Cart-Drawer");
                        if (cartDrawer?.refresh) {
                            cartDrawer.refresh();
                            return true;
                        }
                        return false;
                    });
  
                case THEME_NAMES.MOTION:
                    return executeOrReload(() => {
                        // Determine cart form type
                        const cartFormId = isCartPageView ? "CartPageForm" : "CartDrawer";
                        // Init drawer on non-cart pages
                        if (!isCartPageView && theme?.CartDrawer) {
                            new theme.CartDrawer();
                        }
                        // If cart motion already matches type, rebuild
                        if (window.cartFormMotion?.typeCart === cartFormId) {
                            window.cartFormMotion.cartForm.buildCart();
                            return true;
                        }
                        // Otherwise, build a new one if possible
                        const cartFormElement = document.getElementById(cartFormId);
                        if (cartFormElement) {
                            const cartForm = new theme.CartForm(cartFormElement);
                            if (cartForm?.buildCart) {
                                cartForm.buildCart();
                                window.cartFormMotion = { cartForm, typeCart: cartFormId };
                                return true;
                            }
                        }
                        return false;
                    });
  
                case THEME_NAMES.KALLES:
                    return executeOrReload(() => {
                        if (window.T4SThemeSP?.Cart?.getToFetch) {
                            window.T4SThemeSP.Cart.getToFetch();
                            return true;
                        }
                        document.dispatchEvent(new CustomEvent("cart:reload"));
                        return true;
                    });
  
                case THEME_NAMES.SHOPIWEB_PREMIUM:
                    return executeOrReload(() => self.refreshCartContents());
  
                case THEME_NAMES.STORY_THEME:
                    return executeOrReload(() => {
                        if (!isCartPageView && window?.ajaxCart?.load) {
                            window.ajaxCart.load();
                            return true;
                        }
                        return false;
                    });
  
                case THEME_NAMES.MINIMOG_OS_2:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (window.Shopify?.onCartUpdate)
                            return window.Shopify.onCartUpdate(), true;
                        const cartDrawer = document.querySelector("m-cart-drawer");
                        if (!cartDrawer)
                            return false;
                        if (sectionsData && cartDrawer.renderContents)
                            return cartDrawer.renderContents({
                                sections: sectionsData
                            }), cartDrawer.onCartDrawerUpdate(true), true;
                        if (cartDrawer.onCartRefresh)
                            return cartDrawer.onCartRefresh({
                                detail: {
                                    open: true
                                }
                            }), true;
                        const cartItems = document.querySelector("m-cart-items");
                        return !(!cartItems || !cartItems.onCartRefresh || (cartItems.onCartRefresh({
                            detail: {
                                open: false
                            }
                        }), 0))
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.KRUUT_2020:
                    return executeOrReload( () => (isCartPage => !(isCartPage || !window.ajaxCart?.load || (window.ajaxCart.load(), 0)))(isCartPageView));
  
                case THEME_NAMES.ELLA:
                    return executeOrReload( () => (isCartPage => !(isCartPage || !window.Shopify?.getCart || !window.sharedFunctions.updateSidebarCart || (window.Shopify.getCart(cart => {
                        window.sharedFunctions.updateSidebarCart(cart)
                    }), 0)))(isCartPageView));
  
                case THEME_NAMES.FASTOR:
                    return executeOrReload( () => (isCartPage => !(isCartPage && !window.Fastor.updateCart || (window.Fastor.updateCart(), 0)))(isCartPageView));
  
                case THEME_NAMES.PIPELINE:
                    return executeOrReload(() => self.dispatchCartReloadEvent());
  
                case THEME_NAMES.TOYO:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !(!cartDrawer || isCartPage || (cartDrawer.renderContents({
                            sections: sectionsData
                        }), 0))
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.SHRINE_PRO_R:
                case THEME_NAMES.SHRINE_LITE_CAPS:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !(!cartDrawer || isCartPage || (cartDrawer?.renderContents({
                            sections: sectionsData
                        }), 0))
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.ATLAS:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (sectionsData) {
                            const cartDrawer = document.querySelector("cart-drawer");
                            return !(!cartDrawer || isCartPage || (cartDrawer?.renderContents({
                                sections: sectionsData
                            }), cartDrawer?.classList?.remove("is-empty"), 0))
                        }
                        return false
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.BLUM:
                    return executeOrReload(() => self.forceUpdateCartStatus());
  
                case THEME_NAMES.ZENDROP:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (sectionsData) {
                            const cartDrawer = document.querySelector("cart-drawer");
                            if (!cartDrawer || isCartPage)
                                return false;
                            cartDrawer?.renderContents({
                                sections: sectionsData
                            });
                            const cartIconBubble = document.querySelector("#cart-icon-bubble");
                            const parsedCartIcon = (new DOMParser).parseFromString(sectionsData["cart-icon-bubble"], "text/html");
                            return cartIconBubble.innerHTML = parsedCartIcon.querySelector(".shopify-section").innerHTML, true
                        }
                        return false
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.STORY_THEME_2:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (sectionsData) {
                            const cartDrawer = document.querySelector("cart-drawer");
                            const cartIconBubble = document.querySelector("#cart-icon-bubble");
                            if (!cartDrawer || isCartPage)
                                return false;
                            const domParser = new DOMParser;
                            const parsedCartDrawer = domParser.parseFromString(sectionsData["cart-drawer"], "text/html");
                            const parsedCartIcon = domParser.parseFromString(sectionsData["cart-icon-bubble"], "text/html");
                            return cartDrawer.innerHTML = parsedCartDrawer.querySelector("cart-drawer").innerHTML,
                            cartIconBubble.innerHTML = parsedCartIcon.querySelector("#shopify-section-cart-icon-bubble").innerHTML,
                            cartDrawer.classList.remove("is-empty"), true
                        }
                        return false
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.TRADE:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (sectionsData) {
                            const cartDrawer = document.querySelector("cart-drawer");
                            if (!cartDrawer || isCartPage)
                                return false;
                            cartDrawer?.renderContents({
                                sections: sectionsData
                            });
                            const cartIconBubble = document.querySelector("#cart-icon-bubble");
                            const parsedCartIcon = (new DOMParser).parseFromString(sectionsData["cart-icon-bubble"], "text/html");
                            return cartIconBubble.innerHTML = parsedCartIcon.querySelector(".shopify-section").innerHTML, true
                        }
                        return false
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.STILETTO:
                    return executeOrReload( () => (sectionsData => {
                        if (sectionsData) {
                            const cartLink = document.querySelector(self.CART_LINK_SELECTOR);
                            const domParser = new DOMParser;
                            const parsedHeader = domParser.parseFromString(sectionsData.header, "text/html");
                            const parsedMainCart = domParser.parseFromString(sectionsData["main-cart"], "text/html");
                            const cartSection = document.querySelector(self.CART_SECTION_SELECTOR);
                            if (cartSection) {
                                cartSection.innerHTML = parsedMainCart.querySelector(self.CART_SECTION_SELECTOR).innerHTML;
                            }
                            cartLink.innerHTML = parsedHeader.querySelector(self.CART_LINK_SELECTOR).innerHTML;
                            const parsedQuickCart = domParser.parseFromString(sectionsData["quick-cart"], "text/html");
                            const quickCartContainer = document.querySelector(self.QUICK_CART_CONTAINER_SELECTOR);
                            return quickCartContainer && (quickCartContainer.innerHTML = parsedQuickCart.querySelector(self.QUICK_CART_CONTAINER_SELECTOR).innerHTML), true
                        }
                        return false
                    }
                    )(sectionsData));
  
                case THEME_NAMES.ZEST:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (sectionsData) {
                            const cartDrawer = document.querySelector("cart-drawer");
                            if (!cartDrawer || isCartPage)
                                return false;
                            cartDrawer?.renderContents({
                                sections: sectionsData
                            });
                            const cartLinkIcon = document.querySelector(".cart-link--icon");
                            const domParser = new DOMParser;
                            const parsedHeader = domParser.parseFromString(sectionsData.header, "text/html");
                            const parsedCartDrawer = domParser.parseFromString(sectionsData["cart-drawer"], "text/html");
                            return cartLinkIcon.innerHTML = parsedHeader.querySelector(".cart-link--icon").innerHTML,
                            document.querySelector(".f-drawer__header").innerHTML = parsedCartDrawer.querySelector(".f-drawer__header").innerHTML, true
                        }
                        return false
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.CONCEPT:
                    return executeOrReload( () => (sectionsData => {
                        const cartItems = document.querySelector("cart-items");
                        const cartCount = document.querySelector("cart-count");
                        return !(!cartItems?.onCartUpdate || !cartCount?.onCartUpdate || (window.fetch("/cart.js").then(response => response.json()).then(cartData => {
                            const cartUpdateData = {
                                cart: {
                                    ...cartData,
                                    sections: sectionsData
                                }
                            };
                            cartItems.onCartUpdate(cartUpdateData);
                            cartCount.onCartUpdate(cartUpdateData);
                        }), 0))
                    }
                    )(sectionsData));
  
                case THEME_NAMES.WOODSTOCK:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (!isCartPage) {
                            const cartDrawer = document.querySelector("cart-drawer");
                            return !!cartDrawer?.renderContents && (cartDrawer.renderContents({
                                sections: sectionsData
                            }), true)
                        }
                        return false
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.ANHSTEINMMO_THEME:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (!isCartPage) {
                            const cartDrawer = document.querySelector("cart-drawer");
                            return !!cartDrawer?.renderContents && (cartDrawer.renderContents({
                                sections: sectionsData
                            }), true)
                        }
                        return false
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.ECOMUS:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (!document.dispatchEvent(new CustomEvent("cart:refresh")))
                            return false;
                        if (document.querySelector("hdt-cart-drawer"))
                            return document.dispatchEvent(new CustomEvent("cart:refresh"));
                        if (!isCartPage)
                            return false;
                        const mainCartSection = document.querySelector("#MainContent .hdt-section-main-cart");
                        if (!mainCartSection?.id)
                            return false;
                        const sectionId = mainCartSection.id.replace(self.SHOPIFY_SECTION_PREFIX, "");
                        try {
                            const newSectionElement = (new DOMParser).parseFromString(sectionsData[sectionId], "text/html").querySelector(`#${self.SHOPIFY_SECTION_PREFIX}${sectionId}`);
                            return !!newSectionElement && (mainCartSection.innerHTML = newSectionElement.innerHTML, true)
                        } catch (error) {
                            return console.error("Error updating cart content:", error), false
                        }
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.ANTHONY_WEBDEV:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (!isCartPage) {
                            const miniCart = document.querySelector("mini-cart");
                            return !!miniCart?.renderContents && (miniCart.renderContents({
                                sections: sectionsData
                            }), true)
                        }
                        return false
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.EURUS:
                    return executeOrReload(() => self.reloadAlpineMiniCart());
  
                case THEME_NAMES.LAUNCH_YOUR_STORE_BLOCKY:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage)
                            return false;
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !!cartDrawer?.renderContents && (cartDrawer.renderContents({
                            sections: sectionsData
                        }), true)
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.HABITAT:
                case THEME_NAMES.DISTINCTIVE:
                    return executeOrReload( () => (sectionsData => {
                        const productCard = document.querySelector("product-card");
                        return !(!productCard || !productCard.renderContents || (productCard.renderContents({
                            sections: sectionsData
                        }), 0))
                    }
                    )(sectionsData));
  
                case THEME_NAMES.TASTE:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage)
                            return false;
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !!cartDrawer?.renderContents && (cartDrawer.renderContents({
                            sections: sectionsData
                        }), true)
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.HIGHLEVEL_ECOM_BEAUTY:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage)
                            return false;
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !!cartDrawer?.renderContents && (cartDrawer.renderContents({
                            sections: sectionsData
                        }), true)
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.UMINO:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (sectionsData) {
                            const minicartForm = document.querySelector("#form-mini-cart");
                            if (!minicartForm || isCartPage)
                                return false;
                            const formMinicartData = sectionsData["form-mini-cart"];
                            if (formMinicartData) {
                                const newFormElement = (new DOMParser).parseFromString(formMinicartData, "text/html").getElementById("form-mini-cart");
                                if (newFormElement) {
                                    newFormElement.querySelectorAll(".bls-minicart-product__image .bls__responsive-image").forEach(element => element.classList.remove("bls-loading-image"));
                                    minicartForm.innerHTML = newFormElement.innerHTML;
                                }
                            }
                            return fetch("/cart.json").then(response => response.json()).then(cartData => {
                                document.querySelectorAll(".cart-count").forEach(element => {
                                    element.innerHTML = cartData.item_count
                                });
                                const headerTotalPrice = document.querySelector("header-total-price");
                                if (headerTotalPrice) {
                                    headerTotalPrice.updateTotal(cartData);
                                }
                            }).catch(error => {
                                throw error
                            }), true
                        }
                        return false
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.GECKO:
                    return executeOrReload( () => !!window.T4SThemeSP?.Cart?.getToFetch && (window.T4SThemeSP.Cart.getToFetch(), true));
  
                case THEME_NAMES.STARTER:
                    return executeOrReload( () => (sectionsData => {
                        const domParser = new DOMParser;
                        const parsedCartContent = domParser.parseFromString(sectionsData["cart-content"], "text/html");
                        const parsedHeaderLinkCart = domParser.parseFromString(sectionsData["header-link-cart"], "text/html");
                        const cartContent = document.querySelector(self.CART_CONTENT_SELECTOR);
                        if (cartContent) {
                            cartContent.innerHTML = parsedCartContent.querySelector(self.CART_CONTENT_SELECTOR).innerHTML;
                        }
                        const headerCartCount = document.querySelector(self.HEADER_CART_COUNT_SELECTOR);
                        return headerCartCount && (headerCartCount.innerHTML = parsedHeaderLinkCart.querySelector(self.HEADER_CART_COUNT_SELECTOR).innerHTML), true
                    }
                    )(sectionsData));
  
                case THEME_NAMES.ENTERPRISE:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        const cartDrawer = document.querySelector("cart-drawer");
                        // Handle side cart for non-cart pages
                        if (!isCartPage && cartDrawer?.refresh) {
                            return cartDrawer.refresh(true).then( () => true).catch( () => false);
                        }
                        
                        // Handle cart page - try to refresh cart-items or reload
                        if (isCartPage) {
                            const cartItems = document.querySelector("cart-items");
                            if (cartItems && cartItems.refresh) {
                                return cartItems.refresh().then( () => true).catch( () => false);
                            }
                            // If no refresh method, allow page reload
                            return false;
                        }
                        return false;
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.PARADISE:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage)
                            return false;
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !!cartDrawer?.renderContents && (cartDrawer?.classList?.remove("is-empty"),
                        cartDrawer.renderContents({
                            sections: sectionsData
                        }), true)
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.AARAU:
                    return executeOrReload( () => !!window?.theme?.miniCart && (window?.theme?.miniCart?.updateElements(),
                    window?.theme?.miniCart?.generateCart(), true));
  
                case THEME_NAMES.WONDER:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage)
                            return false;
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !!cartDrawer?.renderContents && (cartDrawer.renderContents({
                            sections: sectionsData
                        }, false), true)
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.ACENO_FASHION_HOME01:
                    return executeOrReload( () => (isCartPage => !isCartPage && !!window?.ajaxCart?.load && (window.ajaxCart.load(), true))(isCartPageView));
  
                case THEME_NAMES.GALLERIA:
                    return executeOrReload( () => (isCartPage => !isCartPage && (document.querySelector('a[href="/cart"]').click(),
                    document.querySelector("main-cart")?.update(),
                    document.querySelectorAll("cart-counter")?.forEach(element => element?._fetchCart()), true))(isCartPageView));
  
                case THEME_NAMES.SHOWTIME:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage)
                            return false;
                        const cartDrawerData = sectionsData?.["g_cart-drawer"];
                        const cartDrawer = document.querySelector("cart-drawer");
                        return cartDrawer?._update({
                            drawer: {
                                section: cartDrawerData
                            },
                            meta: {
                                count: 1
                            }
                        }), fetch("/cart.js").then(response => response.json()).then(cartData => {
                            document.querySelectorAll("cart-counter").forEach(element => element?._cartUpdateHandler({
                                meta: {
                                    count: cartData.item_count
                                }
                            }))
                        }), true
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.VIOLA:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage)
                            return false;
                        const cartDrawer = document.querySelector("cart-drawer");
                        if (!cartDrawer?.renderContents || !cartDrawer)
                            return false;
                        if (cartDrawer.classList.contains("is-empty")) {
                            cartDrawer.classList.remove("is-empty");
                        }
                        try {
                            return cartDrawer.renderContents({
                                sections: sectionsData,
                                isOpenCartDrawer: false
                            }), true
                        } catch (error) {
                            return console.error("Viola theme renderContents error:", error), false
                        }
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.REVIVE:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage)
                            return false;
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !!cartDrawer?.renderContents && (cartDrawer.classList.contains("is-empty") && cartDrawer.classList.remove("is-empty"),
                        cartDrawer.renderContents({
                            sections: sectionsData
                        }), true)
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.PRESTIGE:
                    return executeOrReload( () => (isCartPage => !isCartPage && (window.fetch("/cart.js").then(response => response.json()).then(cartData => {
                        const itemCount = cartData?.item_count || 1;
                        document.dispatchEvent(new CustomEvent("product:added",{
                            bubbles: true,
                            detail: {
                                quantity: itemCount
                            }
                        }))
                    }).catch(error => {
                        console.error("Prestige theme V2 error:", error)
                    }), true))(isCartPageView));
  
                case THEME_NAMES.CANOPY:
                    return executeOrReload( () => ( () => {
                        const cartDrawer = document.querySelector("cart-drawer");
                        return cartDrawer && "function" == typeof cartDrawer.refreshCartDrawer ? (cartDrawer.refreshCartDrawer(), true) : (document.documentElement.dispatchEvent(new CustomEvent("theme:cartchanged",{
                            bubbles: true,
                            cancelable: false
                        })), true)
                    }
                    )());

                case THEME_NAMES.EXPANSE:
                    return executeOrReload( () => {
                        document.dispatchEvent(new CustomEvent('cart:build'));
                        return true;
                    });

                case THEME_NAMES.PALO_ALTO:
                    return executeOrReload( () => ( async (sectionsData) => {
                        try {
                            // Update cart icon if header section is available
                            if (sectionsData && sectionsData.header) {
                                const parser = new DOMParser();
                                const parsedHTML = parser.parseFromString(sectionsData.header, "text/html");
                                const newCartLink = parsedHTML.querySelector('.cart-link');
                                const currentCartLink = document.querySelector('.cart-link');
                                
                                if (newCartLink && currentCartLink) {
                                    currentCartLink.replaceWith(newCartLink);
                                }
                            }
                            
                            // Use cart-element's native methods to refresh the drawer
                            const cartElement = document.querySelector('cart-element');
                            
                            if (cartElement) {
                                // Fetch latest cart data
                                if (typeof cartElement.getCart === 'function') {
                                    await cartElement.getCart();
                                }
                                
                                // Render the cart drawer with updated content
                                if (typeof cartElement.renderCartDrawer === 'function') {
                                    cartElement.renderCartDrawer();
                                }
                                
                                // Open the cart drawer
                                if (typeof cartElement.openCartDrawer === 'function') {
                                    cartElement.openCartDrawer();
                                }
                            }
                            
                            return true;
                        } catch (error) {
                            console.error('PALO_ALTO cart refresh error:', error);
                            return false;
                        }
                    })(sectionsData));

                case THEME_NAMES.HYPER:
                    return executeOrReload( () => (isCartPage => !isCartPage && document.dispatchEvent(new Event("cart:refresh")))(isCartPageView));
  
                case THEME_NAMES.APOLLO:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage) {
                            const parsedMainCartItems = (new DOMParser).parseFromString(sectionsData["main-cart-items"], "text/html");
                            const cartItems = document.querySelector("cart-items");
                            const newCartItems = parsedMainCartItems.querySelector("cart-items");
                            return !(!cartItems || !newCartItems || (cartItems.innerHTML = newCartItems.innerHTML, 0))
                        }
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !!cartDrawer && (cartDrawer.renderContents({
                            sections: sectionsData
                        }), true)
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.BLUBOLT_THEME:
                    return executeOrReload(() => self.refreshBluboltCart());
  
                case THEME_NAMES.ASCENT:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage)
                            return false;
                        const currentElements = {
                            cartDrawer: document.querySelector(self.CART_DRAWER_SELECTOR),
                            cartIcon: document.querySelector(self.CART_COUNT_BUBBLE_SELECTOR)
                        };
                        const newElements = {
                            cartDrawer: self.parseCartElement(sectionsData, "cart-drawer"),
                            cartIcon: self.parseCartElement(sectionsData, "cart-icon-bubble")
                        };
                        return Object.entries(currentElements).forEach( ([elementType, currentElement]) => {
                            if (currentElement && newElements[elementType]) {
                                currentElement.innerHTML = newElements[elementType].innerHTML;
                            }
                        }), true
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.AOLIE:
                    return executeOrReload(() => self.refreshShopifyCart());
  
                case THEME_NAMES.SLEEK:
                    return executeOrReload( () => ( ({isCartView: isCartView}) => {
                        if (isCartView)
                            return false;
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !!cartDrawer?.onCartRefresh && (cartDrawer.onCartRefresh({
                            detail: {
                                open: true
                            }
                        }), fetch("/cart.js").then(response => response.json()).then(cartData => {
                            document.querySelectorAll(".cart-count").forEach(element => {
                                element.textContent = cartData.item_count;
                                element.removeAttribute("hidden")
                            })
                        }), true)
                    }
                    )({
                        isCartView: isCartPageView
                    }));
  
                case THEME_NAMES.HONGO:
                    return executeOrReload( () => (isCartPage => !isCartPage && "function" == typeof window?.handleFloCartBtn && (window.handleFloCartBtn(), true))(isCartPageView));
  
                case THEME_NAMES.STRETCH:
                    return executeOrReload( () => (isCartPage => !isCartPage && document.documentElement.dispatchEvent(new CustomEvent("cart:refresh",{
                        bubbles: true
                    })))(isCartPageView));
  
                case THEME_NAMES.GLOOW:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage)
                            return false;
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !(!cartDrawer?.renderContents || !cartDrawer || (cartDrawer.renderContents({
                            sections: sectionsData
                        }), 0))
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.A_IMPACT:
                    return executeOrReload( () => (isCartPage => {
                        if (isCartPage)
                            return false;
                        const cartDrawer = document.querySelector("cart-drawer");
                        return !!cartDrawer && (cartDrawer._onVariantAdded({}),
                        cartDrawer._onCartRefresh(), true)
                    }
                    )(isCartPageView));
  
                case THEME_NAMES.SAVYO_X_VM_0_1:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (isCartPage)
                            return false;
                        const parsedMinicartForm = (new DOMParser).parseFromString(sectionsData["minicart-form"], "text/html");
                        const minicartForm = document.querySelector("#minicart-form");
                        const newMinicartForm = parsedMinicartForm.querySelector("#minicart-form");
                        if (newMinicartForm && minicartForm) {
                            minicartForm.innerHTML = newMinicartForm.innerHTML;
                        }
                        return fetch("/cart.js").then(response => response.json()).then(cartData => {
                            if (cartData.item_count !== undefined) {
                                const itemCount = cartData.item_count;
                                document.querySelectorAll(".cart-count").forEach(element => {
                                    element.innerHTML = element.classList.contains("cart-count-drawer") ? `(${itemCount})` : itemCount > 100 ? "~" : itemCount
                                });
                                // Update header total price
                                const headerTotalPrice = document.querySelector("header-total-price");
                                if (headerTotalPrice) {
                                    headerTotalPrice.updateTotal(cartData);
                                }
                                // Update free shipping progress bar
                                const freeShipProgressBar = document.querySelector("free-ship-progress-bar");
                                if (freeShipProgressBar) {
                                    freeShipProgressBar.init(cartData.items_subtotal_price);
                                }
                                // Update cart countdown time
                                const cartCountdownTime = document.querySelector(".cart-countdown-time");
                                const newCartCountdownTime = parsedMinicartForm.querySelector(".cart-countdown-time");
                                if (newCartCountdownTime) {
                                    if (cartCountdownTime) {
                                        cartCountdownTime.innerHTML = newCartCountdownTime.innerHTML;
                                    } else {
                                        freeShipProgressBar.insertAdjacentElement("afterend", newCartCountdownTime);
                                    }
                                }
                            }
                        }).catch(error => {
                            console.error("Error fetching cart data:", error)
                        }), true
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.CADIANT:
                    return executeOrReload( () => ( (isCartPage, sectionsData) => {
                        if (!window.theme?.miniCart)
                            return false;
                        if (!isCartPage)
                            return window.theme.miniCart.updateElements(),
                            window.theme.miniCart.generateCart(), true;
                        const cartSectionSelector = '[data-section-type="cart"]';
                        try {
                            const newCartSection = (new DOMParser).parseFromString(sectionsData["cart-template"], "text/html").querySelector(cartSectionSelector);
                            const currentCartSection = document.querySelector(cartSectionSelector);
                            return !(!newCartSection || !currentCartSection || (currentCartSection.innerHTML = newCartSection.innerHTML,
                            window.theme?.Cart && new theme.Cart(document.querySelector(cartSectionSelector)),
                            window.theme.miniCart.updateElements(),
                            window.theme.miniCart.generateCart(), 0))
                        } catch (error) {
                            return console.error("🚀 ~ cadiantTheme ~ error:", error), false
                        }
                    }
                    )(isCartPageView, sectionsData));
  
                case THEME_NAMES.BROADCAST:
                    return !!window.cart?.getCart && (window.cart.getCart(), true);
  
                case THEME_NAMES.TINYBABIES:
                    return executeOrReload( () => (isCartPage => !isCartPage && !!theme.miniCart && (theme.miniCart.updateElements(),
                    window.theme.miniCart.generateCart(), true))(isCartPageView));
  
                case THEME_NAMES.SHAPES:
                    return executeOrReload( () => (isCartPage => !isCartPage && (document.dispatchEvent(new CustomEvent("shapes:cart:lock")),
                    fetch(`${window.location.pathname}?sections=cart-items,cart-footer,cart-item-count,cart-live-region`).then(response => response.json()).then(sectionsData => {
                        if (sectionsData && Object.keys(sectionsData).length > 0) {
                            document.dispatchEvent(new CustomEvent("shapes:cart:update",{
                                bubbles: true,
                            detail: {
                                response: {
                                    sections: {
                                            ...sectionsData
                                    }
                                }
                            }
                        }))
                    }
                    }).catch(error => {
                        console.error("Error updating cart:", error)
                    }).finally( () => {
                        document.dispatchEvent(new CustomEvent("shapes:cart:unlock"))
                    }), true))(isCartPageView));
  
                case THEME_NAMES.WHISK:
                    return executeOrReload( () => (sectionsData => {
                        try {
                            return self.WHISK_SECTIONS.forEach( ({id: sectionId, section: sectionName, selector: selector}) => {
                                document.getElementById(sectionId).innerHTML = ( (htmlData, defaultSelector=".shopify-section") => (new DOMParser).parseFromString(htmlData, "text/html").querySelector(defaultSelector).innerHTML)(sectionsData[sectionName], selector)
                            }), true
                        } catch (error) {
                            return console.error("Error updating cart content:", error), false
                        }
                    }
                    )(sectionsData));
  
                case THEME_NAMES.MOLDING:
                    return executeOrReload( () => (isCartPage => {
                        if (isCartPage)
                            return false;
                        if (!theme)
                            return false;
                        try {
                            return theme.miniCart.updateElements(),
                            theme.miniCart.generateCart(), true
                        } catch (error) {
                            return console.error("🚀 ~ moldingTheme ~ error:", error), false
                        }
                    }
                    )(isCartPageView));
  
                case THEME_NAMES.DROPMETA_SPEED:
                    return executeOrReload( () => (isCartPage => !isCartPage && (document.documentElement.dispatchEvent(new CustomEvent("product:added",{
                        detail: {
                            quantity: 1
                        },
                        bubbles: true
                    })), true))(isCartPageView));
                
                default:
                    return executeOrReload();
            }
        },
        
        // Update cart sections for specific theme
        updateSections: function({themeName: themeName, newHtmlSection: sectionsData}) {
            if (!sectionsData)
                return window.location.reload();
            const self = this;
            const isCartPageView = this.isCartPage();
            const themeConfig = this.THEME_CONFIGS[themeName];
            
            // Define section update configuration
            const sectionUpdateConfig = ({isCartView: isCartView, htmlSections: htmlSections, themeName: themeName}) => [{
                sectionKey: "cartIcon",
                type: self.CART_ICON,
                targetElem: htmlSections?.cartIconReplaceElem
            }, {
                sectionKey: "cartDrawer",
                type: self.CART_DRAWER,
                targetElem: htmlSections?.cartDrawerReplaceElem,
                condition: !isCartView || self.DAWN_LIKE_THEMES.includes(themeName)
            }, {
                sectionKey: "cartItems",
                type: self.CART_LINE_ITEM,
                targetElem: htmlSections?.cartItemsReplaceElem,
                condition: isCartView
            }, {
                sectionKey: "cartSubTotal",
                type: self.CART_SUBTOTAL,
                targetElem: htmlSections?.cartSubtotalReplaceElem,
                condition: isCartView
            }, {
                sectionKey: "cartMini",
                type: self.CART_MINI,
                targetElem: htmlSections?.cartMiniReplaceElem,
                condition: !isCartView || self.DAWN_LIKE_THEMES.includes(themeName)
            }];
            
            const sectionConfigs = sectionUpdateConfig({
                isCartView: isCartPageView,
                htmlSections: themeConfig,
                themeName: themeName
            });
  
            for (const config of sectionConfigs) {
                const {
                    sectionKey,
                    type: elementType,
                    targetElem: targetSelector,
                    condition: shouldUpdate = true
                } = config;
  
                const sectionName = themeConfig?.[sectionKey];
  
                const hasSectionData = sectionName && sectionsData?.[sectionName];
  
                if (shouldUpdate && hasSectionData) {
                    self.replaceCartHtmlNode({
                        type: elementType,
                        dataToParse: sectionsData[sectionName],
                        targetCurrentElem: targetSelector,
                        themeName: themeName
                    });
                }
            }
        },
  
        getThemeName: function() {
          return window.BOOMR?.themeName || window.Shopify?.theme?.schema_name || window.Shopify?.theme?.name;
        },
  
        // Get all sections for a specific theme
        getAllSectionsByTheme: function(themeName) {
            const THEME_NAMES = this.THEME_NAMES;
            if (themeName === THEME_NAMES.CONCEPT && window.theme?.utils?.sectionId) {
                const cartItemsElement = document.querySelector("cart-items");
                if (cartItemsElement)
                    return window.theme.utils.sectionId(cartItemsElement);
            }
            if (themeName === THEME_NAMES.ECOMUS) {
                const mainCartElement = document.querySelector("#MainContent .hdt-section-main-cart")?.id?.replace("shopify-section-", "");
                if (mainCartElement)
                    return mainCartElement;
            }
            return this.MODERN_THEMES.includes(themeName) ? this.getCurrentSectionId() : this.THEME_CONFIGS[themeName]?.allSections || "";
        },
        
        // Check if theme supports reload functionality
        isThemeReloadAble: function(themeName) {
            return !Object.values(this.THEME_NAMES).includes(themeName);
        },
  
        //get third-party cart app name
        getThirdPartyCartAppName: function() {
            let cartAppName = "";
            switch (true) {
                case !!window.Rebuy?.SmartCart:
                    cartAppName = this.REBUY_CART;
                    break;
                case !!window.SLIDECART:
                    cartAppName = this.AMP_CART;
                    break;
                case !!window?.upcartSettings:
                    cartAppName = this.UPCART_CART;
                    break;
                case !!window?.Vanga?.refresh:
                    cartAppName = this.VANGA_CART;
                    break;
                case !!window?.opusActive:
                    cartAppName = this.OPUS_CART;
                    break;
                case !!window?.XBOOST_CART || typeof window?.xbcFetch === "function":
                    cartAppName = this.XB_CART;
                    break;
                case !!window?.aovCartDrawerUpdateAndOpen:
                    cartAppName = this.AOV_AI_CART;
                    break;
                case !!window?.STICKY_CART_UPDATE || typeof window?.STICKY_CART_OPEN === "function":
                    cartAppName = this.QIKIFY_STICKY_CART;
                    break;
                case !!window?.sme_cart_data:
                    cartAppName = this.SALE_MAX_CART_UPSELL;
                    break;
                case !!window?.EasySlideCart?.enabled:
                    cartAppName = this.SLIDE_CARTY;
                    break;
                case !!window?.icart_cart_arr:
                    cartAppName = this.I_CART;
                    break;
                default:
                    cartAppName = "";
            }
            return cartAppName;
        },
        
        // Integrate with third-party cart apps
        integrateCartApp: function(cartAppName) {
            if (cartAppName && this.CART_APP_REFRESH_FUNCTIONS[cartAppName]) {
                this.CART_APP_REFRESH_FUNCTIONS[cartAppName]();
            }
        },

        // Initialize cart refresh - call this function manually to trigger cart refresh
        init: async function(options = {useUpdateSections: true, preferThirdParty: true}) {
            let theme;
            try {
                // Check if third-party cart app integration is needed
                const cartAppName = this.getThirdPartyCartAppName();
                const useThirdPartyCart = options.useThirdPartyCart !== false && cartAppName;

                // If third-party cart is detected and not disabled, use it instead
                if (useThirdPartyCart && options.preferThirdParty !== false) {
                    console.log('Using third-party cart app:', cartAppName);
                    this.integrateCartApp(cartAppName);
                    return { usingThirdParty: true, cartApp: cartAppName };
                }

                theme = this.getThemeName();
                if (!theme) {
                    console.error('Theme name not found');
                    throw new Error('Theme name not found');
                }
                
                const sections = this.getAllSectionsByTheme(theme);
                
                // Some themes don't use sections (e.g., Debut, Debutify, Local, Vision, Motion)
                // They use their own cart refresh methods (refreshAjaxCart, refreshCartGlobal, etc.)
                if (!sections) {
                    console.log('No sections needed for theme:', theme, '- using theme-specific refresh method');
                }

                const response = await fetch(window.Shopify.routes.root + `?sections=${sections}`);
                const data = await response.json();
                const isEmptyData = Object.values(data).every(value => !value);
                
                // Use updateSections for more granular control if theme config exists with full section mappings
                const themeConfig = this.THEME_CONFIGS[theme];
                const hasFullConfig = themeConfig && (themeConfig.cartDrawer !== undefined || themeConfig.cartItems !== undefined || themeConfig.cartIcon !== undefined);
                
                if (sections && options.useUpdateSections && hasFullConfig && !isEmptyData) {
                    this.updateSections({ themeName: theme, newHtmlSection: data });
                } else {
                    this.refreshCartForTheme(theme, data);
                }

                // Integrate third-party cart after refresh if needed
                if (useThirdPartyCart && !options.preferThirdParty) {
                    this.integrateCartApp(cartAppName);
                }

                // Schedule widget restoration after DOM stabilizes
                this._scheduleWidgetRestoration();

                return {
                    success: true,
                    theme: theme,
                    cartApp: cartAppName,
                    sections: data
                };
            } catch (error) {
                console.error('Cart refresh error:', error);

                // Fallback to page reload if theme is not in supported list
                if (this.isThemeReloadAble(theme)) {
                    console.warn('Theme not fully supported, reloading page...');
                    window.location.reload();
                }
                
                throw error;
            }
        },

        // Schedule widget restoration after cart refresh to handle async theme rendering
        // Focal and other themes load recommendations async which can wipe widgets
        _scheduleWidgetRestoration: function() {
            // Clear any pending restoration timeouts
            if (this._widgetRestorationTimeouts) {
                this._widgetRestorationTimeouts.forEach(t => clearTimeout(t));
            }
            this._widgetRestorationTimeouts = [];

            const checkAndRestore = (attempt) => {
                if (gfg.cartDrawerObserver) {
                    // Re-attach observer on first attempt - drawer element may have been replaced
                    if (attempt === 1) {
                        gfg.utility.debugConsole("Widget restoration: Re-attaching observer after cart refresh");
                        gfg.cartDrawerObserver.observeCartDrawer();
                    }

                    const drawer = gfg.cartDrawerObserver.state.observedDrawer;
                    if (typeof gfg.cartDrawerObserver.widgetsExist === 'function') {
                        const wrapperExists = gfg.cartDrawerObserver.widgetsExist(drawer);
                        const contentExists = gfg.cartDrawerObserver.widgetContentExists(drawer);

                        if (!wrapperExists) {
                            // Wrapper missing - inject wrapper and content
                            gfg.utility.debugConsole(`Widget restoration attempt ${attempt}: wrapper missing, re-injecting`);
                            gfg.cartDrawerObserver.reinjectWidgets(true);
                        } else if (!contentExists) {
                            // Wrapper exists but content is empty - trigger full re-render
                            gfg.utility.debugConsole(`Widget restoration attempt ${attempt}: wrapper exists but content missing, triggering full re-render`);
                            gfg.cartDrawerObserver.reinjectWidgets(true);
                        } else {
                            gfg.utility.debugConsole(`Widget restoration attempt ${attempt}: wrapper and content exist, skipping`);
                        }
                    }
                }
            };

            // Restoration attempts: first re-attaches observer, subsequent are fallback safety checks
            // Observer handles continuous monitoring after re-attachment
            const delays = [100, 500, 1500];
            delays.forEach((delay, index) => {
                const timeoutId = setTimeout(() => checkAndRestore(index + 1), delay);
                this._widgetRestorationTimeouts.push(timeoutId);
            });
        },

        // Quick refresh specific sections without full cart reload
        refreshSections: async function(themeName, options = {}) {
            const theme = themeName || this.getThemeName();
            if (!theme) {
                console.error('Theme name not found');
                throw new Error('Theme name not found');
            }

            if (!this.THEME_CONFIGS[theme]) {
                console.warn('Theme config not found, falling back to full refresh');
                return await this.init(options);
            }

            const sections = this.getAllSectionsByTheme(theme);
            
            try {
                const response = await fetch(window.Shopify.routes.root + `?sections=${sections}`);
                const data = await response.json();
                
                this.updateSections({ themeName: theme, newHtmlSection: data });
                return { success: true, theme: theme, sections: data };
            } catch (error) {
                console.error('Section refresh error:', error);
                throw error;
            }
        },

        // Check and integrate third-party cart if available
        checkAndIntegrateThirdPartyCart: function() {
            const cartAppName = this.getThirdPartyCartAppName();
            if (cartAppName) {
                console.log('Third-party cart detected:', cartAppName);
                this.integrateCartApp(cartAppName);
                return { integrated: true, cartApp: cartAppName };
            }
            return { integrated: false };
        }
    },

    // ============ EMPTY STUBS FOR BACKWARD COMPATIBILITY ============
    // These empty structures ensure custom scripts that reference paths like
    // gfg.gfgFreeGift.f.functionName won't break before the actual modules load.
    // The real implementations in separate files will overwrite these stubs.

    gfgFreeGift: {
        _isStub: true,
        state: {},
        init: function() {},
        initialize: function() {},
        f: {},
        utility: {},
        actions: {}
    },
    gfgBogoFeature: {
        _isStub: true,
        state: {},
        init: function() {},
        initialize: function() {},
        f: {},
        utility: {},
        actions: {}
    },
    gfgUnifiedWidget: {
        _isStub: true,
        state: {},
        init: function() {},
        initialize: function() {},
        f: {},
        utility: {},
        actions: {}
    },
    gfgVolDiscount: {
        _isStub: true,
        state: {},
        init: function() {},
        initialize: function() {},
        f: {},
        utility: {},
        actions: {}
    },
    gfgFreeGiftV2: {
        _isStub: true,
        state: {},
        init: function() {},
        onCartChange: function() {},
        destroy: function() {}
    }
}

window.gfg = gfg;

// Mark base module as loaded and dispatch event
if (window.gfgFileStatus) {
    window.gfgFileStatus.base = "LOADED";
}
document.dispatchEvent(new CustomEvent('gfg:module:base'));

// Dependencies to wait for before initializing (add more module names and events here if needed)
// Only the modules that are requested and are in NEED_TO_LOAD state will be waited for
var GFG_DEPENDENCIES = [
    { module: 'freeGiftV1', event: 'gfg:module:loaded' },
    { module: 'freeGiftV2', event: 'gfg:module:loaded' },
    { module: 'kiteV0Features', event: 'gfg:module:loaded' },
    { module: 'customDiscountLogic', event: 'gfg:module:loaded' }
];

// Check if all dependencies are loaded (NEED_TO_LOAD modules must become LOADED)
function checkAllDependenciesLoaded(dependencies, fileStatus) {
    for (var i = 0; i < dependencies.length; i++) {
        var dep = dependencies[i];
        if (fileStatus[dep.module] === "NEED_TO_LOAD") {
            return false;
        }
    }
    return true;
}

var gfgCodeActive = false; // gfgCodeActive is used to prevent multiple initialization of the module

// Check if already initialized and if all dependencies are loaded then initialize
// helper function to check if all dependencies are loaded and if so, initialize the module
function checkAndInitialize(dependencies, fileStatus) {
    if (gfgCodeActive) return;
    if (checkAllDependenciesLoaded(dependencies, fileStatus)) {
        gfgCodeActive = true;
        gfg.utility.debugConsole("GFG FREE GIFT - All dependencies loaded, initializing...");
        gfg.f.initialize();
    }
}

// Wait for dependencies before initializing
function waitForModulesAndInitialize() {
    var fileStatus = window.gfgFileStatus;

    // If no gfgFileStatus (backward compat / rollback mode), initialize immediately
    if (!fileStatus) {
        gfgCodeActive = true;
        gfg.utility.debugConsole("GFG FREE GIFT - No file status, initializing immediately");
        gfg.f.initialize();
        return;
    }

    // Check if any dependencies need to load
    var hasDependenciesToWaitFor = GFG_DEPENDENCIES.some(function(dep) {
        return fileStatus[dep.module] === "NEED_TO_LOAD";
    });

    // If no dependencies to load, initialize immediately
    if (!hasDependenciesToWaitFor) {
        gfgCodeActive = true;
        gfg.utility.debugConsole("GFG FREE GIFT - No dependencies to wait for, initializing...");
        gfg.f.initialize();
        return;
    }

    gfg.utility.debugConsole("GFG FREE GIFT - Waiting for dependencies:", GFG_DEPENDENCIES.filter(function(dep) {
        return fileStatus[dep.module] === "NEED_TO_LOAD";
    }).map(function(dep) { return dep.module; }));

    // Attach listener for module loaded events
    document.addEventListener('gfg:module:loaded', function() {
        checkAndInitialize(GFG_DEPENDENCIES, fileStatus);
    });

    // Check immediately in case dependencies already loaded (race condition fix)
    checkAndInitialize(GFG_DEPENDENCIES, fileStatus);
}

if (document?.readyState == "interactive" || document?.readyState == "complete") {
    waitForModulesAndInitialize();
} else {
    document.addEventListener("DOMContentLoaded", function(event) {
        waitForModulesAndInitialize();
    });
}

// Timeout fallback (3 seconds) - initialize anyway if modules don't load
setTimeout(function() {
    try {
        if (gfgCodeActive == false) {
            gfgCodeActive = true;
            gfg.utility.debugConsole("GFG FREE GIFT - Timeout reached, initializing with available modules...");
            gfg.f.initialize();
        }
    } catch(err) {
        gfg.utility.debugConsole("err before gfg initialize", err);
    }
}, 3000)
