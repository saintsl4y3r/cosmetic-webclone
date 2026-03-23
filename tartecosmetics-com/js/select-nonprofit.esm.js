import{h as k,f as $,y as d,g as f,t as L,q as v,u as H,m as D,k as q}from"../chunks/lit-WqMxC_PA.esm.js";import{i as V,d as J}from"../chunks/lodash-D3TLHRR_.esm.js";import{u as S,A as E,d as h,a as G,_ as z,i as m}from"../chunks/localize-Btu9xYcE.esm.js";import{D as Q,W as C,d as X,h as Y,S as Z}from"../chunks/routes-BnPd0lrO.esm.js";import{p as ee}from"../chunks/progress-bar-DF7UuuHb.esm.js";import{p as te}from"../chunks/promo-pill-label-CbW_Vcru.esm.js";import{c as oe,d as ie,e as P}from"../chunks/enforce-config-CZ3ToOgr.esm.js";import{_ as ne}from"../chunks/loading-template-DG4lkIIc.esm.js";import{f as A,c as M,i as re,g as T,a as B}from"../chunks/events-BohmT6Lp.esm.js";import{logger as ae}from"../utils/logger.esm.js";import{createScopedLocalStorage as se}from"../utils/local-storage.esm.js";import{f as le,i as ce,e as pe,h as de,k as fe,s as me}from"../chunks/promoManager-fl54hq13.esm.js";import{c as ge}from"../chunks/responsive-BR8qUfBa.esm.js";import{B as F}from"../chunks/cart-contents-DkoytiZh.esm.js";import{getBeamCartId as K,getExternalCartId as _}from"../utils/cart.esm.js";import"../chunks/beam-errors-Ci0d3926.esm.js";import"../chunks/vendor-KKSARHWL.esm.js";import"../utils/cookies.esm.js";class he extends k{static get styles(){return $`
      :host {
      }

      .notification-blip {
        background-color: var(--beam-notificationBlip-color-background, #000);
        border-radius: 50%;
        width: 12px;
        height: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
      }
    `}render(){return d`<div
      class="notification-blip-container"
      part="notification-blip-container"
      aria-label="Notification Blip"
    >
      <span class="notification-blip" part="notification-blip" role="button" tabindex="0" aria-hidden="true"></span>
    </div>`}}customElements.get("beam-notification-blip")||customElements.define("beam-notification-blip",he);const be={"--beam-notificationBlip-color-background":"#000"},g={en:{beamAttribution:()=>"Powered by Beam",ctaTitle:()=>"Choose your impact",ctaPromoPrefixMessage:()=>"At no extra cost,",ctaPromoMessage:({donationPercentage:r="1"}={})=>`select a nonprofit and ${r}% of your purchase will be donated.`,ctaMessage:({donationPercentage:r="1"}={})=>`At no extra cost, select a nonprofit and ${r}% of your purchase will be donated.`,inlineSeparator:()=>": "},fr:{beamAttribution:()=>"Optimis\xE9 par Beam",ctaTitle:()=>"Choisissez votre cause",ctaPromoPrefixMessage:()=>"",ctaPromoMessage:()=>"",ctaMessage:({donationPercentage:r="1"}={})=>`Sans frais suppl\xE9mentaires, choisissez un organisme \xE0 but non lucratif et ${r} % lui sera vers\xE9 en votre nom.`,inlineSeparator:()=>" : "},de:{beamAttribution:()=>"Unterst\xFCtzt von Beam",ctaTitle:()=>"W\xE4hle deinen Impact",ctaPromoPrefixMessage:()=>"",ctaPromoMessage:()=>"",ctaMessage:({donationPercentage:r="1"}={})=>`Ohne zus\xE4tzliche Kosten, w\xE4hle eine der gemeinn\xFCtzigen Organisationen und spende ${r}% deines Einkaufs`,inlineSeparator:()=>": "},es:{beamAttribution:()=>"Ofrecido por Beam",ctaTitle:()=>"Elige tu contribuci\xF3n",ctaPromoPrefixMessage:()=>"",ctaPromoMessage:()=>"",ctaMessage:({donationPercentage:r="1"}={})=>`Sin coste adicional, elige una organizaci\xF3n sin fines de lucro y donaremos ${r}% de tu compra.`,inlineSeparator:()=>": "},it:{beamAttribution:()=>"Gestito da Beam",ctaTitle:()=>"Scegli dove fare la differenza",ctaPromoPrefixMessage:()=>"",ctaPromoMessage:()=>"",ctaMessage:({donationPercentage:r="1"}={})=>`Senza costi aggiuntivi, seleziona un'organizzazione no-profit a cui devolvere l\u2019${r}% del tuo acquisto`,inlineSeparator:()=>": "},pl:{beamAttribution:()=>"Wspierany przez Beam",ctaTitle:()=>"Wybierz inicjatyw\u0119, kt\xF3r\u0105 chcesz wesprze\u0107",ctaPromoPrefixMessage:()=>"",ctaPromoMessage:()=>"",ctaMessage:({donationPercentage:r="1"}={})=>`Bez \u017Cadnych dodatkowych koszt\xF3w wybierz organizacj\u0119, kt\xF3rej przeka\u017Cesz ${r}% warto\u015Bci Twoich zakup\xF3w!`,inlineSeparator:()=>": "}};var ue=Object.defineProperty,p=(r,e,t,n)=>{for(var o=void 0,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=s(e,t,o)||o);return o&&ue(e,t,o),o};class l extends k{constructor(){super(...arguments),this.baseUrl=Q,this.selectedNonprofitId=null,this.lang="en",this.debug=!1,this.draftConfig=!1,this.isMobile=window.innerWidth<768,this.enableNonprofitDeselection=!1,this.didTryToCreateNewSelectionFromCache=!1,this.pluginPromoCodes=[],this.handlePromoCodesStored=e=>{const t=(e.detail.promoCodes?.unvalidatedPromoCodes??[]).map(n=>n.attributes?.value??n.attributes?.url??"").sort();this.pluginPromoCodes=t},this.getChainNonprofits=async()=>{P(["apiKey"],this);const e=K(F,{apiKey:this.apiKey}),t=_("cart",{apiKey:this.apiKey}),n=this.cart?.content?{schema:this.cart?.schema,content:this.cart?.content}:void 0,o=this.getManualPromoCodes(),i=le(o.map(b=>({value:b})),this.apiKey),s=i&&!ce(i);s&&this.dispatchEvent(new A({source:C.select_nonprofit}));const c=await X({baseUrl:this.baseUrl,apiRoot:"/api/v3",headers:{authorization:`Api-Key ${this.apiKey}`},requestBody:{storeId:this.storeId,widgetName:C.select_nonprofit,postalCode:this.postalCode,countryCode:this.countryCode,beamCartId:e||void 0,cartId:t||void 0,version:"1.0.0",lang:this.configLang,...s&&{promos:i},options:{config:{draftConfig:this.draftConfig}},cart:n}});return this.enableNonprofitDeselection=!!c.config.enableNonprofitDeselection,this.selectedNonprofitId!==null&&this.selectedNonprofitId&&!c.nonprofits.map(b=>b.nonprofit.id).includes(this.selectedNonprofitId)&&(this.selectedNonprofitId=null,await this.postSelectNonprofit({selectedNonprofitId:null}),this.localStorage.setItem("nonprofit",null)),c.store?.id&&c.store.id!==this.storeId&&(this.storeId=c.store.id),await this.createNewSelectionForCachedNonprofit(),this.localStorage.setItemJson("chainNonprofits",{createdAt:new Date,data:c}),this.handleValidatedPromoCodes(c),c},this.postSelectNonprofit=async({selectedNonprofitId:e})=>{P(["apiKey","storeId"],this);const t=_("cart",{apiKey:this.apiKey}),n=K(F,{apiKey:this.apiKey}),o=await Y({baseUrl:this.baseUrl,headers:{authorization:`Api-Key ${this.apiKey}`},requestBody:{nonprofitId:e,selectionId:this.selectionId,storeId:this.storeId,cartId:t||void 0,beamCartId:n||void 0,postalCode:this.postalCode,countryCode:this.countryCode}});this.selectionId=o?.selectionId,this.localStorage.setItem("transaction",this.selectionId),this.localStorage.setItem("nonprofit",e),this.localStorage.setItem("nonprofit_selected_at",new Date().toISOString()),await this.updateComplete;const i=this.getNonprofitById(e);e!==null&&this.dispatchEvent(new M({selectedNonprofitId:e,selectionId:this.selectionId,nonprofitName:i?.nonprofit?.name??null,source:C.select_nonprofit})),e===null&&this.dispatchEvent(new re({newNonprofitId:null,selectionId:this.selectionId}))},this.nonprofitListDataController=new E(this,this.getChainNonprofits),this.selectionDataController=new E(this,this.postSelectNonprofit),this.localStorage=se(this),this.handleCartChange=e=>{this.cart=e.detail},this.makeHandleSelect=(e,t,n)=>async o=>{const i=this.selectedNonprofitId;if(o instanceof KeyboardEvent){let s=null;switch(o.key){case"ArrowUp":case"ArrowLeft":t===0?s=n[n.length-1]:s=n[t-1],o.preventDefault();break;case"ArrowRight":case"ArrowDown":t===n.length-1?s=n[0]:s=n[t+1],o.preventDefault();break;case"Enter":case" ":o.preventDefault();break;default:return}if(s){i!=null&&(this.selectedNonprofitId=s.nonprofit.id);const c=this.renderRoot.querySelector(`[data-value="${s.nonprofit.id}"]`);c!==null&&(c.tabIndex=0,c.focus());return}}if(o.currentTarget instanceof HTMLElement)if(i===e)if(this.enableNonprofitDeselection)this.selectedNonprofitId=null,this.localStorage.setItem("nonprofit",null);else return;else this.selectedNonprofitId=e;await this.selectionDataController.exec({selectedNonprofitId:this.selectedNonprofitId})},this.evaluateBreakPoints=J(()=>{this.isMobile=window.innerWidth<768},50,{maxWait:50,leading:!0})}get configLang(){return Z[this.lang]||"en"}get parsedPromoCodes(){return pe(this.promoCodes)}getManualPromoCodes(){if(this.parsedPromoCodes&&this.parsedPromoCodes.length>0)return this.parsedPromoCodes;const e=this.localStorage.getItemJson("cart");return e?de(e):[]}async handleValidatedPromoCodes(e){e.promos?.validatedPromoCodes&&(await Promise.all([fe({apiKey:this.apiKey,promoCodes:{validatedPromoCodes:e.promos.validatedPromoCodes,unvalidatedPromoCodes:[]}}),me({validatedPromoCodes:e.promos.validatedPromoCodes,domain:this.domain})]),this.dispatchEvent(new A({source:C.select_nonprofit})))}getNonprofitById(e){return e?this.nonprofitListDataController?.data?.nonprofits.find(t=>t.nonprofit.id===e):null}async connectedCallback(){super.connectedCallback(),this.nonprofitListDataController.loading=!0,window.addEventListener(T.eventName,this.handleCartChange),window.addEventListener("resize",this.evaluateBreakPoints)}async firstUpdated(){await this.restoreStateFromCache(),window.addEventListener(B.eventName,this.handlePromoCodesStored)}async updated(e){const t=["baseUrl","storeId","apiKey","countryCode","postalCode","cart","lang","promoCodes","pluginPromoCodes"];this.pluginPromoCodes;for(const n of t)if(e.has(n)){await this.nonprofitListDataController.exec();break}}disconnectedCallback(){window.removeEventListener(T.eventName,this.handleCartChange),window.removeEventListener("resize",this.evaluateBreakPoints),window.removeEventListener(B.eventName,this.handlePromoCodesStored),super.disconnectedCallback()}async restoreStateFromCache(){try{const e=new Date().valueOf();this.cart=this.localStorage.getItemJson("cart")??void 0;const t=30*24*60*60*1e3,n=this.localStorage.getItem("nonprofit_selected_at")??0,o=e>new Date(n).valueOf()+t;o?o&&this.selectedNonprofitId!==null&&(await this.postSelectNonprofit({selectedNonprofitId:null}),this.localStorage.setItem("nonprofit",null)):(this.selectedNonprofitId=parseInt(this.localStorage.getItem("nonprofit")||"")||null,this.selectionId=this.localStorage.getItem("transaction")??void 0);const{createdAt:i=0,data:s}=this.localStorage.getItemJson("chainNonprofits")||{},c=2*60*60*1e3;!(e>new Date(i).valueOf()+c)&&this.nonprofitListDataController.loading&&(this.nonprofitListDataController.data=s,this.nonprofitListDataController.loading=!1)}catch(e){ae.error(e)}}async createNewSelectionForCachedNonprofit(){if(P(["apiKey"],this),!(!this.storeId||this.didTryToCreateNewSelectionFromCache))try{if(this.didTryToCreateNewSelectionFromCache=!0,this.selectedNonprofitId){this.selectionId||await this.selectionDataController.exec({selectedNonprofitId:this.selectedNonprofitId});const e=this.getNonprofitById(this.selectedNonprofitId);this.dispatchEvent(new M({selectedNonprofitId:this.selectedNonprofitId,selectionId:this.selectionId,nonprofitName:e?.nonprofit?.name,source:C.select_nonprofit}))}}catch{}}get cssVariables(){const e={"--beam-fontFamily":"inherit","--beam-fontStyle":"inherit","--beam-fontSize":"inherit","--beam-textColor":"inherit","--beam-backgroundColor":"inherit",...ee,"--beam-SelectNonprofit-title-textAlign":"inherit","--beam-SelectNonprofit-description-textAlign":"inherit","--beam-SelectNonprofit-maxWidth":"800px","--beam-SelectNonprofit-options-marginTop":"0px","--beam-SelectNonprofit-options-iconHeight":"24px","--beam-SelectNonprofit-options-padding":"10px","--beam-SelectNonprofit-options-borderRadius":"0px","--beam-SelectNonprofit-options-borderColor":"currentColor","--beam-SelectNonprofit-options--selected-borderColor":"currentColor","--beam-SelectNonprofit-options-backgroundColor":"transparent","--beam-SelectNonprofit-options-gap":"8px","--beam-SelectNonprofit-options--selected-backgroundColor":"currentColor","--beam-SelectNonprofit-details-marginTop":"10px","--beam-SelectNonprofit-details-borderRadius":"0px","--beam-SelectNonprofit-details-borderColor":"currentColor","--beam-SelectNonprofit-details-backgroundColor":"inherit","--beam-SelectNonprofit-details-padding":"10px",...h("--beam-SelectNonprofit-title",{fontSize:"1.25em",fontWeight:"bold"}),"--beam-SelectNonprofit-header-inline-lineHeight":"inherit",...h("--beam-SelectNonprofit-title-inline",{fontWeight:"bold"}),"--beam-SelectNonprofit-title-inline-textTransform":"none","--beam-SelectNonprofit-title-block-margin-right":"8px",...h("--beam-SelectNonprofit-description",{marginTop:"0.5em"}),...h("--beam-SelectNonprofit-description-inline"),...h("--beam-SelectNonprofit-details-cause",{fontSize:"0.85em",fontWeight:"bold"}),...h("--beam-SelectNonprofit-details-beamAttribution",{fontSize:"0.85em"}),...h("--beam-SelectNonprofit-details-impactDescription",{fontSize:"1em",marginTop:"10px"}),"--beam-SelectNonprofit-details-nonprofitName-fontWeight":"bold","--beam-SelectNonprofit-details-nonprofitName-fontStyle":"inherit","--beam-SelectNonprofit-details-fundingProgress-marginTop":"10px",...h("--beam-SelectNonprofit-details-fundingProgressLabel",{fontSize:"0.85em"}),...be,...te,"--beam-SelectNonprofit-promo-block-header-justifyContent":"initial","--beam-SelectNonprofit-notification-blip-top":"4px","--beam-SelectNonprofit-notification-blip-left":"50%","--beam-SelectNonprofit-display-notification-blip":"true","--beam-SelectNonprofit-enable-inline-header":"false"},t=this.nonprofitListDataController?.data?.config?.web?.theme||{},n={...e,...t};return Object.assign(Object.create({toCSS(){return G(this)}}),n)}render(){const{selectedNonprofitId:e}=this,{data:t,loading:n}=this.nonprofitListDataController;if(n&&!t)return ne();if(this.nonprofitListDataController.error)return this.debug?z({error:this.nonprofitListDataController.error}):"";if(this.selectionDataController.error&&this.debug)return z({error:this.selectionDataController.error});const o=t?.nonprofits||[],i=o.find(a=>a.nonprofit.id===e)||null,s=!!t?.config?.web?.promo,c=o.some(a=>!a.promo||!a.promo.isActive),b=a=>this.cssVariables[a],W=b("--beam-SelectNonprofit-display-notification-blip")==="true",y=b("--beam-SelectNonprofit-title-textAlign")==="center",u=b("--beam-SelectNonprofit-enable-inline-header")==="true"||this.isMobile,I=d`<h3
      class=${v({"title-block":!0,"d-none":!0,"d-block":!u})}
      part="title"
      id="beam-SelectNonprofit-title"
    >
      ${m(this.configLang,t?.config?.web?.title||"")||g[this.configLang].ctaTitle()}
    </h3>`,U=()=>{const a=v({"block-header-promo-pill-container":!u&&!y,"block-header-promo-pill-container-responsive":u&&!y,"block-header-promo-pill-center-block-container-responsive":!u&&y}),x=D({display:u?"flex":void 0});return s?d`<div class=${a} style=${x}>
            ${I}
            <beam-promo-info-pill .promo=${t?.config?.web?.promo}></beam-promo-info-pill>
          </div>`:I},R=()=>d`
      <div part="heading">
          ${U()}
          <p class="description" part="description">
            <span class=${v({"d-none":!0,"d-inline":!u})}>
            ${s?d`<span style="font-weight:bold">
                      ${m(this.configLang,t?.config?.web?.promoDescriptionPrefix||"")||g[this.configLang].ctaPromoPrefixMessage()}
                    </span>
                    <span>
                      ${m(this.configLang,t?.config?.web?.promoDescription||"")||g[this.configLang].ctaPromoMessage()}
                    </span>`:d`<span>
                    ${m(this.configLang,t?.config?.web?.description||"")||g[this.configLang].ctaMessage()}
                  </span>`}
            </span>
            <div class=${v({"d-none":!u,"header-inline":!0})}>
              <span class="title-inline" part="title">
                ${(m(this.configLang,t?.config?.web?.title||"")||g[this.configLang].ctaTitle())+g[this.configLang].inlineSeparator()}
              </span>
              <span class="description-inline" part="description">
              ${s?d`<span style="font-weight:bold">
                        ${m(this.configLang,t?.config?.web?.promoDescriptionPrefix||"")||g[this.configLang].ctaPromoPrefixMessage()}
                      </span>
                      <span>
                        ${m(this.configLang,t?.config?.web?.promoDescription||"")||g[this.configLang].ctaPromoMessage()}
                      </span>`:d`<span
                      >${m(this.configLang,t?.config?.web?.description||"")||g[this.configLang].ctaMessage()}
                    </span>`}
            </div>
          </p>
        </div>`;return d`
      <style>
        :host {
          ${this.cssVariables.toCSS()}
        }
      </style>
      ${R()}
      <div
        class="options"
        part="options"
        role="radiogroup"
        aria-labelledby="beam-SelectNonprofit-title"
        style="display: flex; gap: var(--beam-SelectNonprofit-options-gap); margin: 10px 0 0 0;"
      >
        ${H(o,a=>a.nonprofit.id,({nonprofit:a,promo:x},w)=>{const N=e===a.id,O=N||i==null&&w===0,j=x?.isActive&&t?.config.web.promo&&c&&W;return d`
              <div
                class="option"
                part="option"
                role="radio"
                tabindex="${O?0:-1}"
                data-value=${a.id}
                aria-checked=${N}
                @click=${this.makeHandleSelect(a.id,w,o)}
                @keydown=${this.makeHandleSelect(a.id,w,o)}
                aria-label="${m(this.configLang,a.cause||"")}"
                style="${D({cursor:"pointer",flex:"1",textAlign:"center",lineHeight:"1",marginTop:"var(--beam-SelectNonprofit-options-marginTop, 0px)",padding:"var(--beam-SelectNonprofit-options-padding, 10px)",borderWidth:"var(--beam-SelectNonprofit-options-borderWidth, 1px)",borderStyle:"solid",position:"relative",borderRadius:"var(--beam-SelectNonprofit-options-borderRadius, 0)",borderColor:N?a.causeColor||"var(--beam-SelectNonprofit-options--selected-borderColor, currentColor)":"var(--beam-SelectNonprofit-options-borderColor, currentColor)",backgroundColor:N?a.causeColor||"var(--beam-SelectNonprofit-options--selected-backgroundColor, currentColor)":"var(--beam-SelectNonprofit-options-backgroundColor, transparent)"})}"
              >
                <img
                  src="${N?a.causeIconSelectedUrl:a.causeIconUrl}"
                  alt=""
                  role="presentation"
                  style="
                        height: var(--beam-SelectNonprofit-options-iconHeight, 24px);
                        user-select: none;
                        vertical-align: -webkit-baseline-middle;
                    "
                />
                ${j?d`<beam-notification-blip></beam-notification-blip>`:d``}
              </div>
            `})}
      </div>
      ${i!=null?d`
            <div
              class="details"
              part="details"
              style="
              border: 1px solid var(--beam-SelectNonprofit-details-borderColor);
              border-radius: var(--beam-SelectNonprofit-details-borderRadius);
              background-color: var(--beam-SelectNonprofit-details-backgroundColor);
              padding: var(--beam-SelectNonprofit-details-padding);
              margin-top: var(--beam-SelectNonprofit-details-marginTop);
            "
              aria-label="Funding information for selected nonprofit ${i.nonprofit?.name}. Powered by Beam"
            >
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap-reverse">
                <span
                  class="details-cause"
                  style="flex: 0 1; white-space: nowrap; ${S("--beam-SelectNonprofit-details-cause")}"
                >
                  ${i?.promo?.isActive&&c?t?.config.web.promo?.["promo-cause-alt-text"]||i.nonprofit.cause:m(this.configLang,i.nonprofit.cause||"")}
                </span>
                <div aria-hidden="true">
                  <span
                    class="details-beamAttribution"
                    aria-hidden="true"
                    style="flex: 0 1; white-space: nowrap; ${S("--beam-SelectNonprofit-details-beamAttribution")}"
                  >
                    ${g[this.configLang].beamAttribution()}
                  </span>
                </div>
              </div>
              <p class="details-impactDescription">
                ${q(m(this.configLang,i.impact.description||""))}
              </p>
              <div
                style="display: flex; margin-top: var(--beam-SelectNonprofit-details-fundingProgress-marginTop); align-items: center;"
              >
                <beam-progress-bar
                  value="${i.impact.goalProgressPercentage}"
                  style="flex: 1 0;"
                ></beam-progress-bar>
                <span
                  class="details-fundingProgressLabel"
                  style="${S("--beam-SelectNonprofit-details-fundingProgressLabel")} white-space: nowrap; text-align: right; flex: 0 1; margin-left: 15px;"
                >
                  ${m(this.configLang,i.impact.goalProgressText)}
                </span>
              </div>
            </div>
          `:""}
    `}}l.tagName="beam-select-nonprofit",l.styles=[oe,ge,$`
      :host {
        display: block;
        max-width: var(--beam-SelectNonprofit-maxWidth, 800px);
        font-family: var(--beam-fontFamily);
        font-style: var(--beam-fontStyle);
        font-size: var(--beam-fontSize);
        background-color: var(--beam-backgroundColor);
        color: var(--beam-textColor);
        word-break: normal;
      }

      .details-impactDescription {
        ${S("--beam-SelectNonprofit-details-impactDescription")}
      }

      .details-impactDescription .nonprofitName {
        font-weight: var(--beam-SelectNonprofit-details-nonprofitName-fontWeight);
        font-style: var(--beam-SelectNonprofit-details-nonprofitName-fontStyle, inherit);
      }

      /* Note: title/description display is responsive */

      .title-block {
        margin-right: var(--beam-SelectNonprofit-title-block-margin-right);
        ${S("--beam-SelectNonprofit-title")}
        text-align: var(--beam-SelectNonprofit-title-textAlign);
      }

      .header-inline {
        line-height: var(--beam-SelectNonprofit-header-inline-lineHeight);
      }

      .title-inline {
        font-size: var(--beam-SelectNonprofit-title-inline-fontSize);
        font-weight: var(--beam-SelectNonprofit-title-inline-fontWeight);
        color: var(--beam-SelectNonprofit-title-inline-color);
        font-family: var(--beam-SelectNonprofit-title-inline-fontFamily);
        text-transform: var(--beam-SelectNonprofit-title-inline-textTransform);
      }

      .description-inline {
        font-family: var(--beam-SelectNonprofit-description-inline-fontFamily);
        font-weight: var(--beam-SelectNonprofit-description-inline-fontWeight);
        color: var(--beam-SelectNonprofit-description-inline-color);
        text-transform: var(--beam-SelectNonprofit-description-inline-textTransform);
        font-size: var(--beam-SelectNonprofit-description-inline-fontSize);
      }

      .description {
        ${S("--beam-SelectNonprofit-description")}
        text-align: var(--beam-SelectNonprofit-description-textAlign);
      }

      .block-header-promo-pill-container {
        display: flex;
        align-items: center;
        justify-content: var(--beam-SelectNonprofit-promo-block-header-justifyContent);
      }

      .block-header-promo-pill-container-responsive {
        flex-direction: column;
        align-items: flex-start;
      }
      .block-header-promo-pill-center-block-container-responsive {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .block-header-promo-pill-container-responsive beam-promo-info-pill {
        order: -1;
      }
      .block-header-promo-pill-center-block-container-responsive beam-promo-info-pill {
        order: -1;
      }
      .option {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      beam-notification-blip::part(notification-blip-container) {
        position: absolute;
        top: var(--beam-SelectNonprofit-notification-blip-top);
        left: var(--beam-SelectNonprofit-notification-blip-left);
      }
    `],p([f({type:String})],l.prototype,"baseUrl"),p([f({type:String})],l.prototype,"apiKey"),p([f({type:Number,reflect:!0})],l.prototype,"storeId"),p([f({type:String})],l.prototype,"countryCode"),p([f({type:String})],l.prototype,"postalCode"),p([f({attribute:!1,hasChanged:(r,e)=>!V(r,e)})],l.prototype,"cart"),p([f({type:Number,reflect:!0})],l.prototype,"selectedNonprofitId"),p([f({type:String})],l.prototype,"lang"),p([f({type:Boolean})],l.prototype,"debug"),p([f({type:Boolean})],l.prototype,"draftConfig"),p([f({type:String})],l.prototype,"promoCodes"),p([f({type:String})],l.prototype,"domain"),p([L()],l.prototype,"isMobile"),p([L()],l.prototype,"pluginPromoCodes"),ie(l);export{l as BeamSelectNonprofit};
//# sourceMappingURL=select-nonprofit.esm.js.map
