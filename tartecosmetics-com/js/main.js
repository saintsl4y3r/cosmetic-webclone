(function(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["offers"] = factory();
	else
		root["og"] = root["og"] || {}, root["og"]["offers"] = factory();
})(window, function() {
  var module={}, exports={};(factory => {
if(typeof exports === 'object' && typeof module === 'object')
  module.exports = factory();
else if(typeof define === 'function' && define.amd)
  define([], factory);
else {
  window.og = window.og || {};
  window.og['offers'] = factory();
}      
})(()=>{ 
var lib=(()=>{var ic=Object.create;var bt=Object.defineProperty;var sc=Object.getOwnPropertyDescriptor;var ac=Object.getOwnPropertyNames;var cc=Object.getPrototypeOf,lc=Object.prototype.hasOwnProperty;var n=(t,e)=>bt(t,"name",{value:e,configurable:!0});var ee=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Kn=(t,e)=>{for(var r in e)bt(t,r,{get:e[r],enumerable:!0})},Qn=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ac(e))!lc.call(t,i)&&i!==r&&bt(t,i,{get:()=>e[i],enumerable:!(o=sc(e,i))||o.enumerable});return t};var ce=(t,e,r)=>(r=t!=null?ic(cc(t)):{},Qn(e||!t||!t.__esModule?bt(r,"default",{value:t,enumerable:!0}):r,t)),pc=t=>Qn(bt({},"__esModule",{value:!0}),t);var Qt=ee((Kt,ii)=>{(function(t,e){typeof Kt=="object"&&typeof ii<"u"?e(Kt):typeof define=="function"&&define.amd?define(["exports"],e):(t=t||self,e(t.throttleDebounce={}))})(Kt,function(t){"use strict";function e(o,i,s,a){var c,l=!1,p=0;function u(){c&&clearTimeout(c)}n(u,"clearExistingTimeout");function f(){u(),l=!0}n(f,"cancel"),typeof i!="boolean"&&(a=s,s=i,i=void 0);function h(){for(var w=arguments.length,x=new Array(w),g=0;g<w;g++)x[g]=arguments[g];var P=this,_=Date.now()-p;if(l)return;function y(){p=Date.now(),s.apply(P,x)}n(y,"exec");function v(){c=void 0}n(v,"clear"),a&&!c&&y(),u(),a===void 0&&_>o?y():i!==!0&&(c=setTimeout(a?v:y,a===void 0?o-_:o))}return n(h,"wrapper"),h.cancel=f,h}n(e,"throttle");function r(o,i,s){return s===void 0?e(o,i,!1):e(o,s,i!==!1)}n(r,"debounce"),t.debounce=r,t.throttle=e,Object.defineProperty(t,"__esModule",{value:!0})})});var Ot=ee((yd,vi)=>{var Ec="Expected a function",Si="__lodash_hash_undefined__",xc="[object Function]",Pc="[object GeneratorFunction]",Oc=/[\\^$.*+?()[\]{}|]/g,vc=/^\[object .+?Constructor\]$/,Tc=typeof window=="object"&&window&&window.Object===Object&&window,wc=typeof self=="object"&&self&&self.Object===Object&&self,_i=Tc||wc||Function("return this")();function Cc(t,e){return t?.[e]}n(Cc,"getValue");function Rc(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}n(Rc,"isHostObject");var Ac=Array.prototype,Ic=Function.prototype,Ei=Object.prototype,wo=_i["__core-js_shared__"],bi=function(){var t=/[^.]+$/.exec(wo&&wo.keys&&wo.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),xi=Ic.toString,Co=Ei.hasOwnProperty,Nc=Ei.toString,kc=RegExp("^"+xi.call(Co).replace(Oc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fc=Ac.splice,qc=Pi(_i,"Map"),Pt=Pi(Object,"create");function Ae(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(Ae,"Hash");function Dc(){this.__data__=Pt?Pt(null):{}}n(Dc,"hashClear");function Uc(t){return this.has(t)&&delete this.__data__[t]}n(Uc,"hashDelete");function Lc(t){var e=this.__data__;if(Pt){var r=e[t];return r===Si?void 0:r}return Co.call(e,t)?e[t]:void 0}n(Lc,"hashGet");function Mc(t){var e=this.__data__;return Pt?e[t]!==void 0:Co.call(e,t)}n(Mc,"hashHas");function $c(t,e){var r=this.__data__;return r[t]=Pt&&e===void 0?Si:e,this}n($c,"hashSet");Ae.prototype.clear=Dc;Ae.prototype.delete=Uc;Ae.prototype.get=Lc;Ae.prototype.has=Mc;Ae.prototype.set=$c;function Ze(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(Ze,"ListCache");function Vc(){this.__data__=[]}n(Vc,"listCacheClear");function jc(t){var e=this.__data__,r=mr(e,t);if(r<0)return!1;var o=e.length-1;return r==o?e.pop():Fc.call(e,r,1),!0}n(jc,"listCacheDelete");function Gc(t){var e=this.__data__,r=mr(e,t);return r<0?void 0:e[r][1]}n(Gc,"listCacheGet");function Hc(t){return mr(this.__data__,t)>-1}n(Hc,"listCacheHas");function Bc(t,e){var r=this.__data__,o=mr(r,t);return o<0?r.push([t,e]):r[o][1]=e,this}n(Bc,"listCacheSet");Ze.prototype.clear=Vc;Ze.prototype.delete=jc;Ze.prototype.get=Gc;Ze.prototype.has=Hc;Ze.prototype.set=Bc;function Ie(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(Ie,"MapCache");function zc(){this.__data__={hash:new Ae,map:new(qc||Ze),string:new Ae}}n(zc,"mapCacheClear");function Yc(t){return gr(this,t).delete(t)}n(Yc,"mapCacheDelete");function Wc(t){return gr(this,t).get(t)}n(Wc,"mapCacheGet");function Jc(t){return gr(this,t).has(t)}n(Jc,"mapCacheHas");function Kc(t,e){return gr(this,t).set(t,e),this}n(Kc,"mapCacheSet");Ie.prototype.clear=zc;Ie.prototype.delete=Yc;Ie.prototype.get=Wc;Ie.prototype.has=Jc;Ie.prototype.set=Kc;function mr(t,e){for(var r=t.length;r--;)if(tl(t[r][0],e))return r;return-1}n(mr,"assocIndexOf");function Qc(t){if(!Oi(t)||Xc(t))return!1;var e=rl(t)||Rc(t)?kc:vc;return e.test(el(t))}n(Qc,"baseIsNative");function gr(t,e){var r=t.__data__;return Zc(e)?r[typeof e=="string"?"string":"hash"]:r.map}n(gr,"getMapData");function Pi(t,e){var r=Cc(t,e);return Qc(r)?r:void 0}n(Pi,"getNative");function Zc(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}n(Zc,"isKeyable");function Xc(t){return!!bi&&bi in t}n(Xc,"isMasked");function el(t){if(t!=null){try{return xi.call(t)}catch{}try{return t+""}catch{}}return""}n(el,"toSource");function Ro(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(Ec);var r=n(function(){var o=arguments,i=e?e.apply(this,o):o[0],s=r.cache;if(s.has(i))return s.get(i);var a=t.apply(this,o);return r.cache=s.set(i,a),a},"memoized");return r.cache=new(Ro.Cache||Ie),r}n(Ro,"memoize");Ro.Cache=Ie;function tl(t,e){return t===e||t!==t&&e!==e}n(tl,"eq");function rl(t){var e=Oi(t)?Nc.call(t):"";return e==xc||e==Pc}n(rl,"isFunction");function Oi(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}n(Oi,"isObject");vi.exports=Ro});var bs=ee((Zd,jo)=>{function kl(t,e){var r,o,i,s,a,c,l,p,u,f;for(r=t.length&3,o=t.length-r,i=e,a=3432918353,l=461845907,f=0;f<o;)u=t.charCodeAt(f)&255|(t.charCodeAt(++f)&255)<<8|(t.charCodeAt(++f)&255)<<16|(t.charCodeAt(++f)&255)<<24,++f,u=(u&65535)*a+(((u>>>16)*a&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(u&65535)*l+(((u>>>16)*l&65535)<<16)&4294967295,i^=u,i=i<<13|i>>>19,s=(i&65535)*5+(((i>>>16)*5&65535)<<16)&4294967295,i=(s&65535)+27492+(((s>>>16)+58964&65535)<<16);switch(u=0,r){case 3:u^=(t.charCodeAt(f+2)&255)<<16;case 2:u^=(t.charCodeAt(f+1)&255)<<8;case 1:u^=t.charCodeAt(f)&255,u=(u&65535)*a+(((u>>>16)*a&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(u&65535)*l+(((u>>>16)*l&65535)<<16)&4294967295,i^=u}return i^=t.length,i^=i>>>16,i=(i&65535)*2246822507+(((i>>>16)*2246822507&65535)<<16)&4294967295,i^=i>>>13,i=(i&65535)*3266489909+(((i>>>16)*3266489909&65535)<<16)&4294967295,i^=i>>>16,i>>>0}n(kl,"murmurhash3_32_gc");typeof jo<"u"&&(jo.exports=kl)});var Ss=ee((Xd,Go)=>{function Fl(t,e){for(var r=t.length,o=e^r,i=0,s;r>=4;)s=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,s=(s&65535)*1540483477+(((s>>>16)*1540483477&65535)<<16),s^=s>>>24,s=(s&65535)*1540483477+(((s>>>16)*1540483477&65535)<<16),o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16)^s,r-=4,++i;switch(r){case 3:o^=(t.charCodeAt(i+2)&255)<<16;case 2:o^=(t.charCodeAt(i+1)&255)<<8;case 1:o^=t.charCodeAt(i)&255,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16)}return o^=o>>>13,o=(o&65535)*1540483477+(((o>>>16)*1540483477&65535)<<16),o^=o>>>15,o>>>0}n(Fl,"murmurhash2_32_gc");typeof Go!==void 0&&(Go.exports=Fl)});var Es=ee((ef,kr)=>{var _s=bs(),ql=Ss();kr.exports=_s;kr.exports.murmur3=_s;kr.exports.murmur2=ql});var Hr=ee((vh,Hs)=>{var ep={PAR_OPEN:"(".charCodeAt(0),PAR_CLOSE:")".charCodeAt(0),OP_NOT:"!".charCodeAt(0),BINARY_AND:"&".charCodeAt(0),BINARY_OR:"|".charCodeAt(0),LITERAL:"LITERAL",END:"END",LEAF:"LEAF",ATOMIC:"ATOMIC"};Hs.exports=ep});var zs=ee((Th,Bs)=>{var Ue=Hr(),tp=n(t=>{let e="",r=[];for(let o of t){let i=o.charCodeAt(0);switch(i){case Ue.PAR_OPEN:case Ue.PAR_CLOSE:case Ue.OP_NOT:case Ue.BINARY_AND:case Ue.BINARY_OR:e&&(r.push({type:Ue.LITERAL,value:e}),e=""),r.push({type:i,value:o});break;default:e+=o}}return e&&r.push({type:Ue.LITERAL,value:e}),r},"Tokenizer");Bs.exports=tp});var Ws=ee((wh,Ys)=>{var Pe=Hr(),rp=n(t=>{let e=[],r=[];return t.forEach(i=>{switch(i.type){case Pe.LITERAL:e.unshift(i);break;case Pe.BINARY_AND:case Pe.BINARY_OR:case Pe.OP_NOT:case Pe.PAR_OPEN:r.push(i);break;case Pe.PAR_CLOSE:for(;r.length&&r[r.length-1].type!==Pe.PAR_OPEN;)e.unshift(r.pop());r.pop(),r.length&&r[r.length-1].type===Pe.OP_NOT&&e.unshift(r.pop());break;default:break}}),r.length&&[...r.reverse(),...e]||e},"PolishNotation"),op=n(function*(t){for(let e=0;e<t.length-1;e++)yield t[e];return t[t.length-1]},"PolishGenerator");Ys.exports={PolishNotation:rp,PolishGenerator:op}});var Ks=ee((Ch,Js)=>{var V=Hr(),z=class{constructor(e,r,o,i){this.op=e,this.left=r,this.right=o,this.literal=i}isLeaf(){return this.op===V.LEAF}isAtomic(){return this.isLeaf()||this.op===V.OP_NOT&&this.left.isLeaf()}getLiteralValue(){return this.literal}static CreateAnd(e,r){return new z(V.BINARY_AND,e,r)}static CreateNot(e){return new z(V.OP_NOT,e)}static CreateOr(e,r){return new z(V.BINARY_OR,e,r)}static CreateLiteral(e){return new z(V.LEAF,null,null,e)}};n(z,"ExpNode");var dt=n(t=>{let e=t.next().value;switch(e.type){case V.LITERAL:return z.CreateLiteral(e.value);case V.OP_NOT:return z.CreateNot(dt(t));case V.BINARY_AND:{let r=dt(t),o=dt(t);return z.CreateAnd(r,o)}case V.BINARY_OR:{let r=dt(t),o=dt(t);return z.CreateOr(r,o)}}return null},"make"),ft=n((t,e)=>{if(t.isLeaf())return e(t.getLiteralValue());if(t.op===V.OP_NOT)return!ft(t.left,e);if(t.op===V.BINARY_OR)return ft(t.left,e)||ft(t.right,e);if(t.op===V.BINARY_AND)return ft(t.left,e)&&ft(t.right,e)},"nodeEvaluator");Js.exports={make:dt,nodeEvaluator:ft}});var ea=ee((Rh,Xs)=>{var np=zs(),Qs=Ws(),Zs=Ks(),ip=n((t,e)=>{let r=np(t),o=Qs.PolishNotation(r),i=Qs.PolishGenerator(o),s=Zs.make(i);return Zs.nodeEvaluator(s,e)},"parse");Xs.exports={parse:ip}});var cd={};Kn(cd,{addOptinChangedCallback:()=>$u,addTemplate:()=>Vu,autoInit:()=>sd,clear:()=>ju,config:()=>Gu,default:()=>ad,disableOptinChangedCallbacks:()=>Hu,getOptins:()=>Bu,getProductsForPurchasePost:()=>zu,initialize:()=>Yu,isReady:()=>Mu,offers:()=>O,platform:()=>R,previewMode:()=>Wu,register:()=>Ju,resolveSettings:()=>Ku,setAuthUrl:()=>Qu,setEnvironment:()=>Zu,setLocale:()=>Xu,setMerchantId:()=>ed,setPublicPath:()=>td,setTemplates:()=>rd,setupCart:()=>od,setupProduct:()=>nd,setupProducts:()=>id,store:()=>oc});function _o(t){var e,r=t.Symbol;return typeof r=="function"?r.observable?e=r.observable:(e=r("observable"),r.observable=e):e="@@observable",e}n(_o,"symbolObservablePonyfill");var $e;typeof self<"u"?$e=self:typeof window<"u"||typeof window<"u"?$e=window:typeof module<"u"?$e=module:$e=Function("return this")();var uc=_o($e),Eo=uc;var xo=n(function(){return Math.random().toString(36).substring(7).split("").join(".")},"randomString"),St={INIT:"@@redux/INIT"+xo(),REPLACE:"@@redux/REPLACE"+xo(),PROBE_UNKNOWN_ACTION:n(function(){return"@@redux/PROBE_UNKNOWN_ACTION"+xo()},"PROBE_UNKNOWN_ACTION")};function dc(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}n(dc,"isPlainObject");function Po(t,e,r){var o;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error("Expected the enhancer to be a function.");return r(Po)(t,e)}if(typeof t!="function")throw new Error("Expected the reducer to be a function.");var i=t,s=e,a=[],c=a,l=!1;function p(){c===a&&(c=a.slice())}n(p,"ensureCanMutateNextListeners");function u(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}n(u,"getState");function f(g){if(typeof g!="function")throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var P=!0;return p(),c.push(g),n(function(){if(!!P){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");P=!1,p();var y=c.indexOf(g);c.splice(y,1),a=null}},"unsubscribe")}n(f,"subscribe");function h(g){if(!dc(g))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(typeof g.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,s=i(s,g)}finally{l=!1}for(var P=a=c,_=0;_<P.length;_++){var y=P[_];y()}return g}n(h,"dispatch");function w(g){if(typeof g!="function")throw new Error("Expected the nextReducer to be a function.");i=g,h({type:St.REPLACE})}n(w,"replaceReducer");function x(){var g,P=f;return g={subscribe:n(function(y){if(typeof y!="object"||y===null)throw new TypeError("Expected the observer to be an object.");function v(){y.next&&y.next(u())}n(v,"observeState"),v();var Wt=P(v);return{unsubscribe:Wt}},"subscribe")},g[Eo]=function(){return this},g}return n(x,"observable"),h({type:St.INIT}),o={dispatch:h,subscribe:f,getState:u,replaceReducer:w},o[Eo]=x,o}n(Po,"createStore");function fc(t,e){var r=e&&e.type,o=r&&'action "'+String(r)+'"'||"an action";return"Given "+o+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}n(fc,"getUndefinedStateErrorMessage");function hc(t){Object.keys(t).forEach(function(e){var r=t[e],o=r(void 0,{type:St.INIT});if(typeof o>"u")throw new Error('Reducer "'+e+`" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);if(typeof r(void 0,{type:St.PROBE_UNKNOWN_ACTION()})>"u")throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+St.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.")})}n(hc,"assertReducerShape");function Jt(t){for(var e=Object.keys(t),r={},o=0;o<e.length;o++){var i=e[o];typeof t[i]=="function"&&(r[i]=t[i])}var s=Object.keys(r),a,c;try{hc(r)}catch(l){c=l}return n(function(p,u){if(p===void 0&&(p={}),c)throw c;if(!1)var f;for(var h=!1,w={},x=0;x<s.length;x++){var g=s[x],P=r[g],_=p[g],y=P(_,u);if(typeof y>"u"){var v=fc(g,u);throw new Error(v)}w[g]=y,h=h||y!==_}return h=h||s.length!==Object.keys(p).length,h?w:p},"combination")}n(Jt,"combineReducers");function Zn(t,e){return function(){return e(t.apply(this,arguments))}}n(Zn,"bindActionCreator");function ei(t,e){if(typeof t=="function")return Zn(t,e);if(typeof t!="object"||t===null)throw new Error("bindActionCreators expected an object or a function, instead received "+(t===null?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var o in t){var i=t[o];typeof i=="function"&&(r[o]=Zn(i,e))}return r}n(ei,"bindActionCreators");function mc(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}n(mc,"_defineProperty");function Xn(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r}n(Xn,"ownKeys");function gc(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Xn(r,!0).forEach(function(o){mc(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Xn(r).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}n(gc,"_objectSpread2");function Oo(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length===0?function(o){return o}:e.length===1?e[0]:e.reduce(function(o,i){return function(){return o(i.apply(void 0,arguments))}})}n(Oo,"compose");function ti(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(o){return function(){var i=o.apply(void 0,arguments),s=n(function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},"dispatch"),a={getState:i.getState,dispatch:n(function(){return s.apply(void 0,arguments)},"dispatch")},c=e.map(function(l){return l(a)});return s=Oo.apply(void 0,c)(i.dispatch),gc({},i,{dispatch:s})}}}n(ti,"applyMiddleware");function ri(t){var e=n(function(o){var i=o.dispatch,s=o.getState;return function(a){return function(c){return typeof c=="function"?c(i,s,t):a(c)}}},"middleware");return e}n(ri,"createThunkMiddleware");var oi=ri();oi.withExtraArgument=ri;var ni=oi;var ss=ce(Qt());var si=/^og_auth=/,yc=n((t=si)=>(document.cookie.split(/;\s*/).find(e=>e.match(t))||"").replace(si,""),"c"),Zt=n(t=>{if(typeof t=="object")return t;let e=String(t||"").split("|");return e.length===3?{sig_field:e[0],ts:parseInt(e[1],10),sig:e[2]}:null},"r"),bc=n(t=>new Promise((e,r)=>{let o=document.createElement("iframe");o.style.setProperty("display","none","important"),document.body.appendChild(o),o.onload=e,o.onerror=r,o.src=t}),"p"),Sc=n(t=>(t.headers.get("content-type")||"").indexOf("application/json")!==-1,"d");function ai(){return typeof window.og_auth<"u"?Zt(window.og_auth):null}n(ai,"a");async function _c(t=100){return new Promise(e=>{setTimeout(()=>e(ai()),t)})}n(_c,"f");async function ci(t,e=yc,r=bc){let o;if(o=Zt(ai())||Zt(e()),o)return o;if(t&&typeof t=="string"){let i=await fetch(t);i.status>=200&&i.status<300&&(o=e()||await(Sc(i)?i.json():Promise.resolve(r(t)).then(e)))}else o||(o=await _c());if(o=Zt(o),o)return o;throw new Error("Unauthorized")}n(ci,"u");var C="OPTIN_PRODUCT",F="OPTOUT_PRODUCT",q="PRODUCT_CHANGE_FREQUENCY",le="PRODUCT_CHANGE_PREPAID_SHIPMENTS",Ve="SET_MERCHANT_ID",L="REQUEST_OFFER",T="RECEIVE_OFFER",_t="PRODUCT_HAS_CHANGED",je="CREATED_SESSION_ID",Xt="SET_AUTH_URL",li="REQUEST_AUTH",er="AUTHORIZE",Te="UNAUTHORIZED",pi="REQUEST_ORDERS",tr="RECEIVE_ORDERS",Et="CART_PRODUCT_KEY_HAS_CHANGED",rr="RECEIVE_ORDER_ITEMS",ui="FETCH_RESPONSE_ERROR",Ge="SET_ENVIRONMENT_LOCAL",He="SET_ENVIRONMENT_STAGING",Be="SET_ENVIRONMENT_DEV",ze="SET_ENVIRONMENT_PROD",or="READY",di="CONCLUDE_UPSELL",fi="REQUEST_CREATE_IU_ORDER",nr="CREATE_ONE_TIME",hi="REQUEST_CONVERT_ONE_TIME",ir="CONVERT_ONE_TIME";var Ye="CHECKOUT",mi="RECEIVE_FETCH",sr="SET_LOCALE",We="SET_CONFIG",fe="SET_PREVIEW_STANDARD_OFFER",xt="SET_PREVIEW_UPSELL_OFFER",vo="SET_PREVIEW_PREPAID_OFFER",ar="ADD_TEMPLATE",cr="SET_TEMPLATES",we="LOCAL_STORAGE_CHANGE",he="LOCAL_STORAGE_CLEAR",lr="SET_FIRST_ORDER_PLACE_DATE",pr="SET_PRODUCT_TO_SUBSCRIBE",Je="RECEIVE_PRODUCT_PLANS",D="SETUP_PRODUCT",me="SETUP_CART",pe="RECEIVE_MERCHANT_SETTINGS",To="SET_EXPERIMENT_VARIANT",Ke="pdp",gi="local",ur="dev",Ce="staging",Re="prod",dr="static.ordergroove.com",fr="staging.static.ordergroove.com",ge={PSI:"PSI",PROGRAM_WIDE:"PROGRAM_WIDE"},hr={PREPAID:"prepaid"},yi="og-cart-updated";var yr=ce(Ot());var Ao=n((...t)=>JSON.stringify(t),"memoizeKey"),vt=n(t=>(...e)=>fetch(...t(...e)).then(r=>r.json()),"withFetchJson"),Tt=n(t=>(e,...r)=>{if(!e)throw Error("host required");let[o,i={}]=t(...r);return[`${e.replace(/\/+$/,"")}${o}`,i]},"withHost"),br=n(t=>(e,...r)=>{if(!e)throw Error("auth required");let[o,i={}]=t(...r);return[o,{...i,headers:{Authorization:JSON.stringify(e),...i.headers}}]},"withAuth"),Ti=n(t=>(...e)=>{let[r,o={}]=t(...e);return[r,{method:"POST",...o,body:JSON.stringify(o.body),headers:{"Content-type":"application/json",...o.headers}}]},"withJsonBody"),wi=n((t=[])=>(Array.isArray(t)?t:Object.entries(t)).map(([e,r])=>[e,encodeURIComponent(r)].join("=")).join("&"),"toQuery"),ol=n(t=>JSON.stringify([].concat(t).map(e=>typeof e=="object"?e.id:e).filter(e=>e)),"toProductId"),nl=(0,yr.default)(vt(Tt((t,e,r,o="pdp",i={})=>{if(!t)throw Error("merchantId required");if(!e)throw Error("sessionId required");if(!r)throw Error("product required");let s=[["session_id",e],["page_type",1],["p",ol(r)],["module_view",JSON.stringify(["regular"])],...Object.entries(i)];return[`/offer/${t}/${o}?${wi(s)}`]})),Ao),il=(0,yr.default)(vt(Tt(br((t=1,e="place")=>[`/orders/?${wi([["status",t],["ordering",e],["exclude_prepaid_orders","true"]])}`]))),Ao),sl=(0,yr.default)(vt(Tt(br(t=>{if(!t)throw Error("orderId required");return[`/items/?order=${t}`]}))),Ao),al=vt(Tt(br(Ti((t,e,r,o)=>{if(!t)throw Error("product required");if(!e)throw Error("order required");if(!r)throw Error("quantity required");if(r<=0)throw Error("quantity must be greater or equal than one");if(!o)throw Error("offer required");return["/items/iu/",{body:{product:t,order:e,quantity:r,offer:o}}]})))),wt=n(t=>{if(typeof t=="object")return{...t};let[e,r]=(t||"").split(/_/).map(o=>parseInt(o,10));return e&&r&&{every:e,every_period:r}},"parseFrequency"),Io=n(t=>t.match(/^\d+_\d$/),"isFrequencyValid"),cl=n((t,e)=>String.prototype.localeCompare.call(t&&t.split("_").reverse().join("_"),e&&e.split("_").reverse().join("_")),"compareFrequencies"),Ci=n(t=>[...new Set(t&&t.split(/\s+/))].filter(Io).sort(cl),"parseFrequenciesList");var Ct=n(t=>{if(typeof t=="object"){let{every:e,period:r,every_period:o}=t;return`${e}_${r||o}`}return typeof t=="string"?t:""},"stringifyFrequency"),ll=vt(Tt(br(Ti((t,e,r,o)=>{if(!t)throw Error("item required");if(!e)throw Error("frequency required");let i=wt(e);if(!i)throw Error("invalid frequency");return["/subscriptions/create_from_item/",{body:{item:t.public_id,offer:r,session_id:o,...i}}]})))),Xe={fetchOffer:nl,fetchOrders:il,fetchItems:sl,createOneTime:al,convertOneTimeToSubscription:ll},Ri=Xe;var No=Rt(),R={shopify:typeof window.Shopify!="undefined",shopify_selling_plans:typeof(No==null?void 0:No.dataset.shopifySellingPlans)!="undefined"};function pl(t,e){return t===e}n(pl,"defaultEqualityCheck");function ul(t,e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var o=e.length,i=0;i<o;i++)if(!t(e[i],r[i]))return!1;return!0}n(ul,"areArgumentsShallowlyEqual");function dl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pl,r=null,o=null;return function(){return ul(e,r,arguments)||(o=t.apply(null,arguments)),r=arguments,o}}n(dl,"defaultMemoize");function fl(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every(function(o){return typeof o=="function"})){var r=e.map(function(o){return typeof o}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+r+"]"))}return e}n(fl,"getDependencies");function hl(t){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return function(){for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];var c=0,l=s.pop(),p=fl(s),u=t.apply(void 0,[function(){return c++,l.apply(null,arguments)}].concat(r)),f=t(function(){for(var h=[],w=p.length,x=0;x<w;x++)h.push(p[x].apply(null,arguments));return u.apply(null,h)});return f.resultFunc=l,f.dependencies=p,f.recomputations=function(){return c},f.resetRecomputations=function(){return c=0},f}}n(hl,"createSelectorCreator");var A=hl(dl);var U=ce(Ot());var M=n((t,e)=>t===null?"":new Intl.NumberFormat(navigator.language,{style:"currency",currency:e}).format(t/100),"money"),et=n(t=>`${t}%`,"percentage"),ml="Subscribe and Save",gl="ordergroove-subscribe-and-save-",At=n((t=[])=>t.find(Ni)||t.find(Ii)||t.find(Sr),"getPayAsYouGoSellingPlanGroup"),Ai=n((t=[])=>t.filter(e=>Ii(e)||Ni(e)||Sr(e)),"getPayAsYouGoSellingPlanGroups"),Ii=n(t=>t.name===ml||t.app_id==="ordergroove-subscribe-and-save","isDefaultSellingPlanGroup"),Ni=n(t=>t.name.startsWith("og_psfl")||t.app_id==="ordergroove-product-specific-frequency-list","isProductSpecificFrequencySellingPlanGroup"),Sr=n(t=>{var e;return(e=t.app_id)==null?void 0:e.startsWith(gl)},"isExperimentSellingPlanGroup"),ki=n(t=>{let e=At(t.map(r=>r.group));return t.find(r=>r.group===e)},"getPayAsYouGoSellingPlan");function _r(t){var e;return(e=t==null?void 0:t.selling_plans)==null?void 0:e.map(({id:r})=>`${r}`)}n(_r,"sellingPlansToFrequencies");function Er(t){var e;return(e=t==null?void 0:t.selling_plans)==null?void 0:e.map(({options:r})=>r||[]).flat().map(({value:r})=>yl(r))}n(Er,"sellingPlansToEveryPeriod");function yl(t){let e=["day","week","month"].findIndex(o=>t.toLowerCase().includes(o))+1,r=(t.match(/(\d+)/)||["",1])[1];return r&&e?`${r}_${e}`:null}n(yl,"textToFreq");function xr(t){var r;let e=(r=t==null?void 0:t.options.find(({name:o})=>o==="Shipment amount"))==null?void 0:r.value.split(" ")[0];return e?Number(e):void 0}n(xr,"getPrepaidShipments");function It(t){return t[1]||t[0]}n(It,"getDefaultPrepaidOption");U.default.Cache=Map;function bl(t,e){if(t===e)return!0;if(t===null||e===null||t.length!==e.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}n(bl,"arraysEqual");function Sl(t,e,r){let o=Ct(r);return R.shopify_selling_plans?Q(t,e,o):o}n(Sl,"resolveFrequency");var I=n((t,e)=>!!(t===e||typeof t=="object"&&typeof e=="object"&&t&&e&&t.id===e.id&&(!(Array.isArray(t.components)&&Array.isArray(e.components))||bl((t.components||[]).sort(),(e.components||[]).sort()))),"isSameProduct"),Nt=n(t=>t.optedin||[],"optedinSelector"),Fi=n(t=>t.optedout||[],"optedoutSelector"),ko=n(t=>t.autoshipByDefault||{},"autoshipSelector"),_l=n(t=>t.defaultFrequencies||{},"defaultFrequenciesSelector"),Fo=n(t=>{var e;return((e=t==null?void 0:t.config)==null?void 0:e.prepaidSellingPlans)||[]},"prepaidSellingPlansSelector"),El=n(t=>(t==null?void 0:t.prepaidShipmentsSelected)||{},"prepaidShipmentsSelectedSelector"),te=(0,U.default)(t=>A(Nt,Fi,ko,(e,r,o)=>{let i=e.find(s=>I(t,s));return i||(r.find(s=>I(t,s))?!1:t&&o[t.id]?{id:t.id}:!1)}),t=>JSON.stringify(t)),Pr=(0,U.default)(t=>A(Nt,e=>{let r=e.find(o=>I(t,o));return r||!1}),t=>JSON.stringify(t)),qi=(0,U.default)(t=>A(Nt,e=>e.some(r=>I(t,r)&&r.prepaidShipments)),t=>JSON.stringify(t)),re=(0,U.default)(t=>A(El,e=>e[t.id]||null),t=>JSON.stringify(t)),Or=(0,U.default)(t=>A(Fi,e=>e.find(r=>I(t,r)))),oe=(0,U.default)(t=>A(te(t),e=>e&&"frequency"in e&&e.frequency||null),t=>JSON.stringify(t)),j=(0,U.default)(t=>A(te(t),e=>e&&"prepaidShipments"in e&&e.prepaidShipments||null),t=>JSON.stringify(t)),G=(0,U.default)(t=>A(Fo,e=>{var o;return(((o=e[S(t)])==null?void 0:o.map(({numberShipments:i})=>i))||[]).sort((i,s)=>i-s)})),tt=(0,U.default)(t=>A(_l,K(t),(e,{frequencies:r=[],frequenciesEveryPeriod:o=[]})=>e[S(t)]&&Sl(r,o,e[S(t)])||null)),rt=(0,U.default)(t=>A(K(t),e=>e.frequencies)),ne=(0,U.default)(t=>A(K(t),e=>e.defaultFrequency)),K=(0,U.default)(t=>A(e=>{var r;return(r=e==null?void 0:e.config)==null?void 0:r.productFrequencies},e=>{var r;return(r=e==null?void 0:e.config)==null?void 0:r.frequencies},e=>{var r;return(r=e==null?void 0:e.config)==null?void 0:r.frequenciesEveryPeriod},e=>{var r;return(r=e==null?void 0:e.config)==null?void 0:r.frequenciesText},e=>{var r;return(r=e==null?void 0:e.config)==null?void 0:r.defaultFrequency},(e,r,o,i,s)=>e?e[S(t)]||{}:{frequencies:r,frequenciesEveryPeriod:o,frequenciesText:i,defaultFrequency:s})),Di=n((t,e)=>A(Fo,K(t.id),(r,{frequencies:o})=>{var i;if(e){let s=S(t.id),a=(i=r[s])==null?void 0:i.find(c=>c.numberShipments===e);return a?a.sellingPlan:null}return o[0]}),"makeFrequencyForPrepaidShipmentsSelector"),Ui=n(t=>A(Fo,e=>{let r=S(t);return e[r]||[]}),"makePrepaidSellingPlansSelector"),Li=(0,U.default)(t=>A(e=>e.price||{},e=>e.incentives||{},e=>e.config.storeCurrency,(e,r,o)=>{let i=e[S(t)];if(i==null||!o)return{};let s=i.value,a=s,c=s,l=r[S(t)],p=l==null?void 0:l.initial.find(Pl),u="";return p&&(p.type==="Discount Percent"?(c=Math.round(s*(100-p.value)/100),u=et(p.value)):p.type==="Discount Amount"&&o==="USD"&&(c=Math.max(0,s-Math.round(p.value*100)))),{regularPrice:M(a,o),subscriptionPrice:M(c,o),discountRate:u||M(a-c,o)}})),xl=[ge.PROGRAM_WIDE,ge.PSI];function Pl(t){return t.object==="item"&&(t.type==="Discount Percent"||t.type==="Discount Amount")&&t.criteria&&t.criteria.node_type==="PREMISE"&&xl.includes(t.criteria.standard)}n(Pl,"findRelevantIncentive");var qo=n(t=>t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"kebabCase"),H=n((t,e,r)=>t&&t.hasAttribute&&t.hasAttribute(qo(e))&&t[e]||t.offer&&typeof(t.offer[e]!=="undefined")&&t.offer[e]||r,"getFallbackValue"),ot=n(t=>({templates:t.templates||[]}),"templatesSelector"),Mi=n(t=>{let e=Object.values(t.productPlans).flat();return e.length>0&&e.every(r=>r.hasPriceAdjustments===!1||r.prepaidShipments)},"isShopifyDiscountFunctionInUseSelector");function vr(t){document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t()}n(vr,"onReady");function Rt(){return document.querySelector([`script[src^="https://${dr}"]`,`script[src^="https://${fr}"]`,`script[src^="http://${dr}"]`,`script[src^="http://${fr}"]`].join(","))}n(Rt,"getMainJs");function Do(){let t=Rt();if(!t)return[];let e=new URL(t.src),r=e.host.startsWith(Ce)?Ce:Re,o=e.pathname.split("/")[1];return!r&&!o?[]:[o,r,t]}n(Do,"resolveEnvAndMerchant");var S=n(t=>{var r;if(!t)return"";let e=`${t.id||t}`;return(r=R)!=null&&r.shopify_selling_plans&&(e=e.split(":")[0]),e},"safeProductId"),$i=n((t,e,r)=>{if(R.shopify_selling_plans){let o=e==null?void 0:e.indexOf(t);if(o>=0&&r[o])return r[o]}return t},"safeOgFrequency"),kt=n((t,e)=>{if(!`${t}`.includes("_"))return t;let{frequencies:r,frequenciesEveryPeriod:o}=e,i=o==null?void 0:o.indexOf(t);return i>=0&&o[i]?r[i]:(r==null?void 0:r.length)>0&&(o==null?void 0:o.length)>0?(console.warn(`Unable to find selling plan match for frequency ${t}; falling back to first selling plan`),r[0]):t},"frequencyToSellingPlan");function Vi(t){if(t.isReady())return;console.info("OG offers are auto initializing");let[e,r]=Do();if(!r&&!e)return;let o=document.createElement("script");o.onload=()=>console.info("OG pull initialization chunk for merchant",e,r),o.onerror=()=>t.initialize(e,r),o.src=`${window.location.protocol}//${r===Re?dr:fr}/${e}/main.js?initOnly=true`,document.head.appendChild(o)}n(Vi,"autoInitializeOffers");var ji=n(t=>{document.cookie=`${t}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`},"clearCookie");function Gi(t){let e=document.cookie.match(`(^|;) ?${t}=([^;]*)(;|$)`);return e?e[2]:null}n(Gi,"getCookieValue");var Ne=n(t=>!!(t&&(t==null?void 0:t.includes("_"))),"isOgFrequency"),ue=n((t=[])=>(t==null?void 0:t[0])||null,"getFirstSellingPlan"),Tr=n((t=[],e=[])=>{var r;return!!(((r=R)==null?void 0:r.shopify_selling_plans)&&t.length&&e.length)},"hasShopifySellingPlans"),Q=n((t,e,r)=>{if(t.length!==e.length)return null;let o=e.findIndex(i=>i===r);return o>=0?t[o]:null},"mapFrequencyToSellingPlan");function wr(t,e,r){let o=t.querySelector(`[name="${e}"]`);if(o&&!r){o.remove();return}!o&&r&&(o=document.createElement("input"),o.type="hidden",o.name=e,t.appendChild(o)),o&&(o.value=r)}n(wr,"getOrCreateHidden");function nt(t,e){let[[r],o]=t.reduce((i,s)=>i[I(e,s)?0:1].push(s)&&i,[[],[]]);return[r||{},o||[]]}n(nt,"getMatchingProductIfExists");var Z=n((t,e,r)=>({type:C,payload:{product:t,frequency:e,offer:r}}),"optinProduct"),it=n((t,e)=>({type:F,payload:{product:t,offer:e}}),"optoutProduct"),Hi=n((t,e)=>({type:_t,payload:{newProduct:t,product:e}}),"productHasChangedComponents"),Rr=n((t,e,r)=>({type:q,payload:{product:t,frequency:e,offer:r}}),"productChangeFrequency"),be=n((t,e,r)=>(o,i)=>{let s=Di(t,e)(i());o({type:le,payload:{product:t,prepaidShipments:e,offer:r,frequency:s}})},"productChangePrepaidShipments");var Ar=n(t=>({type:di,payload:{product:t}}),"concludeUpsell"),Bi=n(t=>({type:Ve,payload:t}),"setMerchantId"),Uo=n(t=>({type:je,payload:`${t}.${Math.floor(Math.random()*999999)}.${Math.round(new Date().getTime()/1e3)}`}),"createSessionId"),Ol=n(t=>({type:li,payload:t}),"requestAuth"),Ft=n((t,e,r,o)=>({type:er,payload:{public_id:t,sig_field:e,ts:r,sig:o}}),"authorize"),ye=n(t=>({type:Te,payload:t}),"unauthorized"),zi=n(t=>({type:Xt,payload:t}),"setAuthUrl"),qt=n(t=>({type:mi,payload:t}),"fetchDone"),Yi=n((t=ci)=>n(function(r,o){if(window.og&&window.og.previewMode)return r(ye({message:"Offers are running in preview mode"}));let{merchantId:i,authUrl:s}=o(),a=Ol(s);return r(a),t(s).then(({sig_field:c,ts:l,sig:p})=>r(Ft(i,c,l,p)),c=>r(ye(c))).finally(()=>r(qt(a)))},"fetchAuthThunk"),"fetchAuth"),vl=n((t,e)=>({type:pi,payload:{status:t,ordering:e}}),"requestOrders"),Lo=n(t=>({type:tr,payload:t}),"receiveOrders"),Mo=n(t=>({type:rr,payload:t}),"receiveItems"),Ir=n((t=1,e="place")=>n(function(o,i){let{environment:{legoUrl:s},auth:a}=i();if(!a)return o(ye("No auth set."));let c=vl(t,e);return o(c),Xe.fetchOrders(s,a,t,e).then(l=>{if(l.results){o(Lo(l));let p=(l.results[0]||{}).public_id;if(p)return Xe.fetchItems(s,a,p).then(u=>o(Mo(u)))}return o(ye(l.detail)),null},l=>o(ye(l))).finally(()=>o(qt(c)))},"fetchOrdersThunk"),"fetchOrders"),Wi=n(t=>{switch(t){case gi:return{type:Ge,payload:t};case ur:return{type:Be,payload:t};case Ce:return{type:He,payload:t};case Re:return{type:ze,payload:t};default:throw new Error(`${t} is not a supported environment`)}},"setEnvironment"),Ji=n(()=>(t,e)=>{let{merchantId:r,sessionId:o}=e();return(!o||r&&!o.startsWith(r))&&t(Uo(r)),o},"requestSessionId"),Se=n((t,e,r)=>(o,i)=>{let s=i(),a=K(r)(s),c=Ui(r)(s);o({type:T,payload:{...t,offer:e,frequencyConfig:a,prepaidSellingPlans:c}})},"receiveOffer"),Cr=n(t=>({type:ui,payload:t}),"fetchResponseError"),$o=n((t,e=Ke,r)=>({type:L,payload:{product:t,module:e,offer:r}}),"requestOffer"),Ki=$o,Qi=n(()=>({type:Ye}),"checkout"),Tl=n((t,e,r,o)=>({type:fi,payload:{product:t,order:e,quantity:r,offerId:o}}),"requestCreateOneTime"),wl=n(t=>({type:nr,payload:t}),"receiveCreateOneTime"),Cl=n((t,e)=>({type:hi,payload:{item:t,frequency:e}}),"requestConvertOneTimeToSubscription"),Rl=n((t,e)=>({type:ir,payload:{response:t,product:e}}),"receiveConvertOneTime"),Nr=n((t,e,r,o=!1,i=null)=>n(function(a,c){let l=c(),{auth:p,environment:{legoUrl:u},previewUpsellOffer:f,offerId:h,sessionId:w}=l;if(!p)return a(ye("No auth set."));let{frequencies:x,frequenciesEveryPeriod:g}=K(t.id)(l),P=$i(i,x,g),_=Tl(t,e,r,h);return a(_),(f?Promise.resolve({legoUrl:u,product:t,order:e,quantity:r,offer:h}):Xe.createOneTime(u,p,t.id,e,r,h)).then(y=>(a(wl(y)),o?(a(Cl(y,P)),(f?Promise.resolve({item:y,frequency:P}):Xe.convertOneTimeToSubscription(u,p,y,P,h,w)).then(v=>a(Rl(v,t)),v=>a(Cr(v)))):y),y=>a(Cr(y))).finally(()=>a(qt(_)))},"createIuThunk"),"createIu"),Zi=n(t=>({type:sr,payload:t}),"setLocale"),Xi=n(t=>({type:We,payload:t}),"setConfig"),es=n((t,e,r)=>({type:ar,payload:{selector:t,markup:e,config:r}}),"addTemplate"),ts=n(t=>({type:cr,payload:t}),"setTemplates"),rs=n((t,e)=>({type:lr,payload:{product:t,firstOrderPlaceDate:e}}),"setFirstOrderPlaceDate"),os=n((t,e)=>({type:pr,payload:{product:t,productToSubscribe:e}}),"setProductToSubscribe"),ns=n(t=>({type:pe,payload:t}),"receiveMerchantSettings");var Dt="OG_STATE",as=n(t=>{try{return t===null?void 0:JSON.parse(t)}catch{return}},"safeParseState"),Vo=n(()=>window.og&&window.og.previewMode,"isPreviewMode"),cs=n(()=>Vo()?{}:as(localStorage.getItem(Dt)),"loadState"),Al=n(t=>!t||!t.sessionId?!1:JSON.stringify({sessionId:t.sessionId,optedin:t.optedin,optedout:t.optedout,productOffer:t.productOffer,firstOrderPlaceDate:t.firstOrderPlaceDate,productToSubscribe:t.productToSubscribe}),"serializeState"),ls=n(t=>{if(Vo())return;t&&t.sessionId&&(document.cookie="og_session_id="+encodeURIComponent(t.sessionId)+"; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=Lax");let e=Al(t);e&&localStorage.getItem(Dt)!==e&&localStorage.setItem(Dt,e)},"saveState"),ps=n(t=>(0,ss.throttle)(500,e=>{if(Vo())return;let{key:r,newValue:o}=e;r===Dt&&o===null?(t.dispatch({type:he}),setTimeout(()=>t.dispatch(Ji()),0)):r===Dt&&t.dispatch({type:we,newValue:as(o)})}),"listenLocalStorageChanges");var ds=ce(Qt());var Il=n((t,e,r=document)=>r.dispatchEvent(new CustomEvent(t,{detail:e})),"dispatchEvent"),us=n(t=>({payload:{product:{id:e,components:r}={}}={}}={})=>setTimeout(()=>Il("optin-changed",{productId:e,components:r,optedIn:t}),0),"dispatchOptinChangedEvent"),Nl=[{expressions:[({type:t}={})=>t===C,({type:t}={})=>t===q],fn:us(!0)},{expressions:[({type:t}={})=>t===F],fn:us(!1)}],fs=n(t=>e=>r=>{let o=t.getState();Nl.forEach(i=>{i.expressions.some(s=>s(r,o))&&i.fn(r)}),e(r)},"dispatchMiddleware"),hs=n(t=>e=>r=>{var i;let o;switch(r.type){case T:case F:case C:case q:o=new CustomEvent(`og-${r.type.toLowerCase().replace(/_/g,"-")}`,{bubbles:!0,cancelable:!0,detail:r.payload}),(((i=r.payload)==null?void 0:i.offer)||document).dispatchEvent(o);break;default:}o!=null&&o.defaultPrevented||e(r)},"offerEvents"),ms=n(t=>e=>r=>{e(r);let o=(0,ds.throttle)(500,()=>{ls({...t.getState()})});r.type!==we&&o()},"localStorageMiddleware");var Ut=n(()=>{let t,e;return[new Promise((r,o)=>{t=r,e=o}),t,e]},"waitFor");function gs(t){let[e,r]=Ut(),[o,i]=Ut(),[s,a]=Ut();o.then(l=>{let{sessionId:p}=t.getState();!p||l&&!p.startsWith(l)?t.dispatch(Uo(l)):a(p)});let c=Promise.all([o,e,s]);return c.then(()=>{var l;t.dispatch({type:or,payload:{}}),window.addEventListener("storage",ps(t)),(l=t.getState().auth)!=null&&l.ts||t.dispatch(Yi())}),l=>async p=>{Ge===p.type||Be===p.type||He===p.type||ze===p.type?r(p.payload):Ve===p.type?i(p.payload):je===p.type?a(p.payload):await c,l(p)}}n(gs,"waitUntilOffersReady");function ys(t){return e=>r=>{if(r.type===L){let{merchantId:o,sessionId:i,environment:{apiUrl:s}}=t.getState(),a=S(r.payload.product);a&&Ri.fetchOffer(s,o,i,a,r.payload.module||Ke,r.payload.searchParams).then(c=>t.dispatch(Se(c,r.payload.offer,a)),c=>t.dispatch(Cr(c))).finally(()=>t.dispatch(qt(r)))}return e(r)}}n(ys,"offerRequestMiddleware");var xs=ce(Es());function Dl(t,e){e.map(a=>a.weight).reduce((a,c)=>a+c,0)!==100&&console.error("OG: Sum of weights for variants must be 100. Defaulting to last variant.");let i=xs.default.murmur3(t,0)%100,s=0;for(let a=0;a<e.length;a++){let c=e[a],l=s+c.weight;if(c.weight>0&&i<l)return a;s=l}return e.length-1}n(Dl,"getVariantIx");function Fr(t={},e){var r;switch(e.type){case pe:return{...t,...e.payload.experiments};case To:return{...t,currentVariant:e.payload.index,offerProfileId:(r=e.payload.parameters)==null?void 0:r.offer_profile_public_id};default:return t}}n(Fr,"experimentsReducer");function Ul(t,e,r){if(!t||r.variants.length===0)return;let o=e.selling_plan_groups.filter(Sr);if(o.length!==r.variants.length)return;let i=o.find(({app_id:s})=>s.endsWith(t.public_id));if(!!i)return{...e,selling_plan_groups:[i],variants:e.variants.map(({selling_plan_allocations:s,...a})=>({...a,selling_plan_allocations:s.filter(({selling_plan_group_id:c})=>c===i.id)}))}}n(Ul,"resolveShopifySetupProductWhenExperiment");function Ll(t,e){let r=t==null?void 0:t.public_id;if(!r)return null;let o=t.variants,i=Dl(`${r}|${e}`,o);return{...o[i],index:i}}n(Ll,"getAssignedExperimentVariant");function Ps(t){let[e,r]=Ut(),o,i;return s=>async a=>{if(a.type===or)r();else if(a.type===pe){await e,i=a.payload.experiments;let{sessionId:c}=t.getState();o=Ll(i,c),o&&t.dispatch({type:To,payload:o})}else if(a.type===L)await e,o&&(a.payload.searchParams={...a.payload.searchParams,variant:o.public_id});else if(a.type===D){await e;let c=Ul(o,a.payload.product,i);if(c)return s({type:D,payload:{...a.payload,experiments:!0,originalPayload:a.payload,product:c}})}return s(a)}}n(Ps,"experimentsMiddleware");function Os(t,...e){if(window.og&&window.og.store)return window.og.store;let r=window.og&&window.og.previewMode,o=typeof window=="object"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name:"Ordergroove Offers"}):Oo,i=[gs,ni,Ps,ys,fs,hs],s={};if(!r)try{s=cs(),i.push(ms)}catch{}let a=o(ti(...i,...e.filter(l=>l))),c=Po(t,s,a);return window.og=window.og||{},window.og.store=c,c}n(Os,"makeStore");var Ml=Object.defineProperty,qr=n((t,e)=>Ml(t,"name",{value:e,configurable:!0}),"i"),$l=qr(t=>e=>t.indexOf(e.origin)>=0,"createIsMessageAllowed"),Ts=["https://rc3.ordergroove.com","https://rc3.stg.ordergroove.com","https://rc3-beta.stg.ordergroove.com","http://localhost:3000","http://localhost:3010","http://0.0.0.0:3010",window.location.origin],vs=qr(t=>(e,r)=>{Ts.forEach(o=>t.postMessage({ogType:e,...r},o))},"createBroadcastMessage");function Ho(t=window.opener,e=window.og){let r=qr(o=>{let i=$l(Ts),s=vs(o.source),a=o.data.options||{};if(i(o)&&o.data.ogType==="READY"){let c="//static.ordergroove.com/@ordergroove/offers-live-editor/0.6.9/dist/";c.startsWith("//")&&(c=window.location.protocol+c),c.endsWith("/")||(c+="/"),import(`${c}client.js`).then(({initializeClient:l})=>{l({isMessageAllowed:i,broadcastMessage:s,options:a,og:e}),window.removeEventListener("message",r)})}},"handleReady");t&&t!==window&&(window.addEventListener("message",r),vs(t)("READY"))}n(Ho,"h");qr(Ho,"offersLiveEditor");var Dr=null,Vl=n(t=>({dispatch:t}),"defaultMapDispatchToProps"),ws=n(t=>{if(!Dr)throw new Error("Missing redux store.");return Dr},"resolveStore"),jl=n((t,e)=>r=>{let{getState:o,dispatch:i}=ws(r),s=t?t(o(),r):{},a=e(i,r);Object.assign(r,s,a)},"createRecalcProps"),m=n((t,e=Vl)=>r=>{let i=jl(t,typeof e=="function"?e:s=>ei(e,s));return class extends r{get store(){return Dr}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=ws(this).subscribe(()=>i(this)),i(this)}attributeChangedCallback(s,a,c){super.attributeChangedCallback&&super.attributeChangedCallback(s,a,c),this._storeUnsubscribe&&a!==c&&i(this)}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}}},"connect"),Cs=n(t=>{Dr=t},"setStore");var Bo=n((t={},e=[])=>(t.optedin||[]).map(r=>{let o={product:r.id,subscription_info:{components:r.components||[]},tracking_override:{offer:((t.productOffer||{})[r.id]||[])[0],...t.sessionId&&{session_id:t.sessionId},...wt(r.frequency)}};return t.firstOrderPlaceDate&&t.firstOrderPlaceDate[r.id]&&(o.subscription_info.first_order_place_date=t.firstOrderPlaceDate[r.id]),t.productToSubscribe&&t.productToSubscribe[r.id]&&(o.tracking_override.product=t.productToSubscribe[r.id]),o}).filter(r=>r.tracking_override.offer).filter(r=>e.length?e.includes(r.product):r),"getProductsForPurchasePost"),Ur=n((t={})=>{let e={};return Object.entries(t).forEach(([r,o])=>{Object.entries(o).forEach(([i,s])=>{let a={};s&&!Array.isArray(s)?a=s:a={frequency:i,prepaidShipments:null,regularPrice:s[0],subscriptionPrice:s[2],discountRate:s[1]},e[r]?e[r].push(a):e[r]=[a]})}),e},"getObjectStructuredProductPlans");var zo=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0;var ke=n((t,e,r=null)=>{for(;e!==r;){let o=e.nextSibling;t.removeChild(e),e=o}},"removeNodes");var B=`{{lit-${String(Math.random()).slice(2)}}}`,Yo=`<!--${B}-->`,Rs=new RegExp(`${B}|${Yo}`),st="$lit$",_e=class{constructor(e,r){this.parts=[],this.element=r;let o=[],i=[],s=document.createTreeWalker(r.content,133,null,!1),a=0,c=-1,l=0,{strings:p,values:{length:u}}=e;for(;l<u;){let f=s.nextNode();if(f===null){s.currentNode=i.pop();continue}if(c++,f.nodeType===1){if(f.hasAttributes()){let h=f.attributes,{length:w}=h,x=0;for(let g=0;g<w;g++)As(h[g].name,st)&&x++;for(;x-- >0;){let g=p[l],P=Lr.exec(g)[2],_=P.toLowerCase()+st,y=f.getAttribute(_);f.removeAttribute(_);let v=y.split(Rs);this.parts.push({type:"attribute",index:c,name:P,strings:v}),l+=v.length-1}}f.tagName==="TEMPLATE"&&(i.push(f),s.currentNode=f.content)}else if(f.nodeType===3){let h=f.data;if(h.indexOf(B)>=0){let w=f.parentNode,x=h.split(Rs),g=x.length-1;for(let P=0;P<g;P++){let _,y=x[P];if(y==="")_=ie();else{let v=Lr.exec(y);v!==null&&As(v[2],st)&&(y=y.slice(0,v.index)+v[1]+v[2].slice(0,-st.length)+v[3]),_=document.createTextNode(y)}w.insertBefore(_,f),this.parts.push({type:"node",index:++c})}x[g]===""?(w.insertBefore(ie(),f),o.push(f)):f.data=x[g],l+=g}}else if(f.nodeType===8)if(f.data===B){let h=f.parentNode;(f.previousSibling===null||c===a)&&(c++,h.insertBefore(ie(),f)),a=c,this.parts.push({type:"node",index:c}),f.nextSibling===null?f.data="":(o.push(f),c--),l++}else{let h=-1;for(;(h=f.data.indexOf(B,h+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(let f of o)f.parentNode.removeChild(f)}};n(_e,"Template");var As=n((t,e)=>{let r=t.length-e.length;return r>=0&&t.slice(r)===e},"endsWith"),Lt=n(t=>t.index!==-1,"isTemplatePartActive"),ie=n(()=>document.createComment(""),"createMarker"),Lr=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var Wo=133;function Jo(t,e){let{element:{content:r},parts:o}=t,i=document.createTreeWalker(r,Wo,null,!1),s=Mt(o),a=o[s],c=-1,l=0,p=[],u=null;for(;i.nextNode();){c++;let f=i.currentNode;for(f.previousSibling===u&&(u=null),e.has(f)&&(p.push(f),u===null&&(u=f)),u!==null&&l++;a!==void 0&&a.index===c;)a.index=u!==null?-1:a.index-l,s=Mt(o,s),a=o[s]}p.forEach(f=>f.parentNode.removeChild(f))}n(Jo,"removeNodesFromTemplate");var Hl=n(t=>{let e=t.nodeType===11?0:1,r=document.createTreeWalker(t,Wo,null,!1);for(;r.nextNode();)e++;return e},"countNodes"),Mt=n((t,e=-1)=>{for(let r=e+1;r<t.length;r++){let o=t[r];if(Lt(o))return r}return-1},"nextActiveIndexInTemplateParts");function Is(t,e,r=null){let{element:{content:o},parts:i}=t;if(r==null){o.appendChild(e);return}let s=document.createTreeWalker(o,Wo,null,!1),a=Mt(i),c=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===r&&(c=Hl(e),r.parentNode.insertBefore(e,r));a!==-1&&i[a].index===l;){if(c>0){for(;a!==-1;)i[a].index+=c,a=Mt(i,a);return}a=Mt(i,a)}}n(Is,"insertNodeIntoTemplate");var Ns=new WeakMap,Ko=n(t=>(...e)=>{let r=t(...e);return Ns.set(r,!0),r},"directive"),Fe=n(t=>typeof t=="function"&&Ns.has(t),"isDirective");var $={},Mr={};var de=class{constructor(e,r,o){this.__parts=[],this.template=e,this.processor=r,this.options=o}update(e){let r=0;for(let o of this.__parts)o!==void 0&&o.setValue(e[r]),r++;for(let o of this.__parts)o!==void 0&&o.commit()}_clone(){let e=zo?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],o=this.template.parts,i=document.createTreeWalker(e,133,null,!1),s=0,a=0,c,l=i.nextNode();for(;s<o.length;){if(c=o[s],!Lt(c)){this.__parts.push(void 0),s++;continue}for(;a<c.index;)a++,l.nodeName==="TEMPLATE"&&(r.push(l),i.currentNode=l.content),(l=i.nextNode())===null&&(i.currentNode=r.pop(),l=i.nextNode());if(c.type==="node"){let p=this.processor.handleTextExpression(this.options);p.insertAfterNode(l.previousSibling),this.__parts.push(p)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,c.name,c.strings,this.options));s++}return zo&&(document.adoptNode(e),customElements.upgrade(e)),e}};n(de,"TemplateInstance");var ks=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),zl=` ${B} `,se=class{constructor(e,r,o,i){this.strings=e,this.values=r,this.type=o,this.processor=i}getHTML(){let e=this.strings.length-1,r="",o=!1;for(let i=0;i<e;i++){let s=this.strings[i],a=s.lastIndexOf("<!--");o=(a>-1||o)&&s.indexOf("-->",a+1)===-1;let c=Lr.exec(s);c===null?r+=s+(o?zl:Yo):r+=s.substr(0,c.index)+c[1]+c[2]+st+c[3]+B}return r+=this.strings[e],r}getTemplateElement(){let e=document.createElement("template"),r=this.getHTML();return ks!==void 0&&(r=ks.createHTML(r)),e.innerHTML=r,e}};n(se,"TemplateResult");var Vr=n(t=>t===null||!(typeof t=="object"||typeof t=="function"),"isPrimitive"),$r=n(t=>Array.isArray(t)||!!(t&&t[Symbol.iterator]),"isIterable"),qe=class{constructor(e,r,o){this.dirty=!0,this.element=e,this.name=r,this.strings=o,this.parts=[];for(let i=0;i<o.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new Ee(this)}_getValue(){let e=this.strings,r=e.length-1,o=this.parts;if(r===1&&e[0]===""&&e[1]===""){let s=o[0].value;if(typeof s=="symbol")return String(s);if(typeof s=="string"||!$r(s))return s}let i="";for(let s=0;s<r;s++){i+=e[s];let a=o[s];if(a!==void 0){let c=a.value;if(Vr(c)||!$r(c))i+=typeof c=="string"?c:String(c);else for(let l of c)i+=typeof l=="string"?l:String(l)}}return i+=e[r],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}};n(qe,"AttributeCommitter");var Ee=class{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==$&&(!Vr(e)||e!==this.value)&&(this.value=e,Fe(e)||(this.committer.dirty=!0))}commit(){for(;Fe(this.value);){let e=this.value;this.value=$,e(this)}this.value!==$&&this.committer.commit()}};n(Ee,"AttributePart");var ae=class{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ie()),this.endNode=e.appendChild(ie())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=ie()),e.__insert(this.endNode=ie())}insertAfterPart(e){e.__insert(this.startNode=ie()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;Fe(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=$,r(this)}let e=this.__pendingValue;e!==$&&(Vr(e)?e!==this.value&&this.__commitText(e):e instanceof se?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):$r(e)?this.__commitIterable(e):e===Mr?(this.value=Mr,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){let r=this.startNode.nextSibling;e=e??"";let o=typeof e=="string"?e:String(e);r===this.endNode.previousSibling&&r.nodeType===3?r.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){let r=this.options.templateFactory(e);if(this.value instanceof de&&this.value.template===r)this.value.update(e.values);else{let o=new de(r,e.processor,this.options),i=o._clone();o.update(e.values),this.__commitNode(i),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());let r=this.value,o=0,i;for(let s of e)i=r[o],i===void 0&&(i=new ae(this.options),r.push(i),o===0?i.appendIntoPart(this):i.insertAfterPart(r[o-1])),i.setValue(s),i.commit(),o++;o<r.length&&(r.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){ke(this.startNode.parentNode,e.nextSibling,this.endNode)}};n(ae,"NodePart");var at=class{constructor(e,r,o){if(this.value=void 0,this.__pendingValue=void 0,o.length!==2||o[0]!==""||o[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=r,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;Fe(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=$,r(this)}if(this.__pendingValue===$)return;let e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=$}};n(at,"BooleanAttributePart");var ct=class extends qe{constructor(e,r,o){super(e,r,o),this.single=o.length===2&&o[0]===""&&o[1]===""}_createPart(){return new $t(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}};n(ct,"PropertyCommitter");var $t=class extends Ee{};n($t,"PropertyPart");var Fs=!1;(()=>{try{let t={get capture(){return Fs=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{}})();var lt=class{constructor(e,r,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=r,this.eventContext=o,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(e){this.__pendingValue=e}commit(){for(;Fe(this.__pendingValue);){let s=this.__pendingValue;this.__pendingValue=$,s(this)}if(this.__pendingValue===$)return;let e=this.__pendingValue,r=this.value,o=e==null||r!=null&&(e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive),i=e!=null&&(r==null||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Yl(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=$}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}};n(lt,"EventPart");var Yl=n(t=>t&&(Fs?{capture:t.capture,passive:t.passive,once:t.once}:t.capture),"getOptions");function Qo(t){let e=De.get(t.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},De.set(t.type,e));let r=e.stringsArray.get(t.strings);if(r!==void 0)return r;let o=t.strings.join(B);return r=e.keyString.get(o),r===void 0&&(r=new _e(t,t.getTemplateElement()),e.keyString.set(o,r)),e.stringsArray.set(t.strings,r),r}n(Qo,"templateFactory");var De=new Map;var xe=new WeakMap,Zo=n((t,e,r)=>{let o=xe.get(e);o===void 0&&(ke(e,e.firstChild),xe.set(e,o=new ae(Object.assign({templateFactory:Qo},r))),o.appendInto(e)),o.setValue(t),o.commit()},"render");var Vt=class{handleAttributeExpressions(e,r,o,i){let s=r[0];return s==="."?new ct(e,r.slice(1),o).parts:s==="@"?[new lt(e,r.slice(1),i.eventContext)]:s==="?"?[new at(e,r.slice(1),o)]:new qe(e,r,o).parts}handleTextExpression(e){return new ae(e)}};n(Vt,"DefaultTemplateProcessor");var Xo=new Vt;typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");var d=n((t,...e)=>new se(t,e,"html",Xo),"html");var Ds=n((t,e)=>`${t}--${e}`,"getTemplateCacheKey"),jr=!0;typeof window.ShadyCSS>"u"?jr=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),jr=!1);var Jl=n(t=>e=>{let r=Ds(e.type,t),o=De.get(r);o===void 0&&(o={stringsArray:new WeakMap,keyString:new Map},De.set(r,o));let i=o.stringsArray.get(e.strings);if(i!==void 0)return i;let s=e.strings.join(B);if(i=o.keyString.get(s),i===void 0){let a=e.getTemplateElement();jr&&window.ShadyCSS.prepareTemplateDom(a,t),i=new _e(e,a),o.keyString.set(s,i)}return o.stringsArray.set(e.strings,i),i},"shadyTemplateFactory"),Kl=["html","svg"],Ql=n(t=>{Kl.forEach(e=>{let r=De.get(Ds(e,t));r!==void 0&&r.keyString.forEach(o=>{let{element:{content:i}}=o,s=new Set;Array.from(i.querySelectorAll("style")).forEach(a=>{s.add(a)}),Jo(o,s)})})},"removeStylesFromLitTemplates"),Us=new Set,Zl=n((t,e,r)=>{Us.add(t);let o=r?r.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:s}=i;if(s===0){window.ShadyCSS.prepareTemplateStyles(o,t);return}let a=document.createElement("style");for(let p=0;p<s;p++){let u=i[p];u.parentNode.removeChild(u),a.textContent+=u.textContent}Ql(t);let c=o.content;r?Is(r,a,c.firstChild):c.insertBefore(a,c.firstChild),window.ShadyCSS.prepareTemplateStyles(o,t);let l=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&l!==null)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(r){c.insertBefore(a,c.firstChild);let p=new Set;p.add(a),Jo(r,p)}},"prepareTemplateStyles"),Ls=n((t,e,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");let o=r.scopeName,i=xe.has(e),s=jr&&e.nodeType===11&&!!e.host,a=s&&!Us.has(o),c=a?document.createDocumentFragment():e;if(Zo(t,c,Object.assign({templateFactory:Jl(o)},r)),a){let l=xe.get(c);xe.delete(c);let p=l.value instanceof de?l.value.template:void 0;Zl(o,c,p),ke(e,e.firstChild),e.appendChild(c),xe.set(e,l)}!i&&s&&window.ShadyCSS.styleElement(e.host)},"render");var Ms;window.JSCompiler_renameProperty=(t,e)=>t;var sn={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return t!==null;case Number:return t===null?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},$s=n((t,e)=>e!==t&&(e===e||t===t),"notEqual"),en={attribute:!0,type:String,converter:sn,reflect:!1,hasChanged:$s},tn=1,rn=1<<2,on=1<<3,nn=1<<4,an="finalized",pt=class extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();let e=[];return this._classProperties.forEach((r,o)=>{let i=this._attributeNameForProperty(o,r);i!==void 0&&(this._attributeToPropertyMap.set(i,o),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((r,o)=>this._classProperties.set(o,r))}}static createProperty(e,r=en){if(this._ensureClassProperties(),this._classProperties.set(e,r),r.noAccessor||this.prototype.hasOwnProperty(e))return;let o=typeof e=="symbol"?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,r,o){return{get(){return this[r]},set(i){let s=this[e];this[r]=i,this.requestUpdateInternal(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||en}static finalize(){let e=Object.getPrototypeOf(this);if(e.hasOwnProperty(an)||e.finalize(),this[an]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let r=this.properties,o=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(let i of o)this.createProperty(i,r[i])}}static _attributeNameForProperty(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,r,o=$s){return o(e,r)}static _propertyValueFromAttribute(e,r){let o=r.type,i=r.converter||sn,s=typeof i=="function"?i:i.fromAttribute;return s?s(e,o):e}static _propertyValueToAttribute(e,r){if(r.reflect===void 0)return;let o=r.type,i=r.converter;return(i&&i.toAttribute||sn.toAttribute)(e,o)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,r)=>{if(this.hasOwnProperty(r)){let o=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,o)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,r)=>this[r]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,r,o){r!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,r,o=en){let i=this.constructor,s=i._attributeNameForProperty(e,o);if(s!==void 0){let a=i._propertyValueToAttribute(r,o);if(a===void 0)return;this._updateState=this._updateState|on,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._updateState=this._updateState&~on}}_attributeToProperty(e,r){if(this._updateState&on)return;let o=this.constructor,i=o._attributeToPropertyMap.get(e);if(i!==void 0){let s=o.getPropertyOptions(i);this._updateState=this._updateState|nn,this[i]=o._propertyValueFromAttribute(r,s),this._updateState=this._updateState&~nn}}requestUpdateInternal(e,r,o){let i=!0;if(e!==void 0){let s=this.constructor;o=o||s.getPropertyOptions(e),s._valueHasChanged(this[e],r,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,r),o.reflect===!0&&!(this._updateState&nn)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,r){return this.requestUpdateInternal(e,r),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|rn;try{await this._updatePromise}catch{}let e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&rn}get hasUpdated(){return this._updateState&tn}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1,r=this._changedProperties;try{e=this.shouldUpdate(r),e?this.update(r):this._markUpdated()}catch(o){throw e=!1,this._markUpdated(),o}e&&(this._updateState&tn||(this._updateState=this._updateState|tn,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~rn}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,o)=>this._propertyToAttribute(o,this[o],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}};n(pt,"UpdatingElement");Ms=an;pt[Ms]=!0;var Vs=Element.prototype,hh=Vs.msMatchesSelector||Vs.webkitMatchesSelector;var Gr=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cn=Symbol(),ut=class{constructor(e,r){if(r!==cn)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(Gr?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}};n(ut,"CSSResult");var js=n(t=>new ut(String(t),cn),"unsafeCSS"),Xl=n(t=>{if(t instanceof ut)return t.cssText;if(typeof t=="number")return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},"textFromCSSResult"),b=n((t,...e)=>{let r=e.reduce((o,i,s)=>o+Xl(i)+t[s+1],t[0]);return new ut(r,cn)},"css");(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");var Gs={},E=class extends pt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let e=this.getStyles();if(Array.isArray(e)){let r=n((s,a)=>s.reduceRight((c,l)=>Array.isArray(l)?r(l,c):(c.add(l),c),a),"addStyles"),o=r(e,new Set),i=[];o.forEach(s=>i.unshift(s)),this._styles=i}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(r=>{if(r instanceof CSSStyleSheet&&!Gr){let o=Array.prototype.slice.call(r.cssRules).reduce((i,s)=>i+s.cssText,"");return js(o)}return r})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){let e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(r=>r.cssText),this.localName):Gr?this.renderRoot.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){let r=this.render();super.update(e),r!==Gs&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(o=>{let i=document.createElement("style");i.textContent=o.cssText,this.renderRoot.appendChild(i)}))}render(){return Gs}};n(E,"LitElement");E.finalized=!0;E.render=Ls;var aa=ce(ea());var sp=n(t=>{let e=String(t||"").trim().match(/(\d+)\s*([dwm])/);return e?`${e[1]}_${{d:1,w:2,m:3}[e[2]]}`:t},"sanitizeFrequencyString"),ta=n(t=>t.hasAttribute("product")&&{id:t.getAttribute("product"),...t.hasAttribute("product-components")&&{components:JSON.parse(t.getAttribute("product-components"))}},"buildProduct");var jt=n(t=>{let e=ta(t);if(!e){let r=t.offer;r&&(e=ta(r))}return e},"resolveProduct"),ap=n(t=>{let e=t;for(;e;){if(e.tagName==="OG-OFFER")return e;e=e.nodeType===11?e.host:e.parentNode}},"resolveOffer"),ln=n(t=>class extends t{get offer(){return ap(this)}connectedCallback(){super.connectedCallback(),this.offersChangeTemplate=this.offersChangeTemplate.bind(this),this.offer&&this.offer.addEventListener("template-changed",this.offersChangeTemplate)}disconnectedCallback(){super.disconnectedCallback(),this.offer&&this.offer.removeEventListener("template-changed",this.offersChangeTemplate)}offersChangeTemplate(){this._enqueueUpdate()}},"withOfferTemplate"),N=n(t=>class extends ln(t){get product(){return jt(this)}},"withProduct"),Br=n(t=>class extends t{get childOptions(){let e=[],r=null;return this.querySelectorAll("option").forEach(o=>{let i=sp(o.value),s=o.innerText.trim();e.push({value:i,text:s}),!r&&o.selected&&(r=i)}),{options:e,isSelected:r}}},"withChildOptions");var zr={};Kn(zr,{autoshipByDefault:()=>cp,eligibilityGroups:()=>un,eligible:()=>ra,hasPrepaidOptions:()=>fp,hasUpcomingOrder:()=>ia,hasUpsellGroup:()=>na,inStock:()=>pn,optedout:()=>up,prepaidEligible:()=>lp,prepaidSubscribed:()=>dp,regularEligible:()=>mp,subscribed:()=>pp,subscriptionEligible:()=>oa,upcomingOrderContainsProduct:()=>hp,upsellEligible:()=>sa});var pn=n((t,e)=>(t.inStock||{})[(e.product||{}).id],"inStock"),ra=n((t,e)=>(t.autoshipEligible||{})[(e.product||{}).id]||!1,"eligible"),cp=n((t,e)=>(t.autoshipByDefault||{})[(e.product||{}).id]||!1,"autoshipByDefault"),oa=n((t,e)=>(t.offerId&&t.offerId!=="0"||!1)&&ra(t,e)&&pn(t,e),"subscriptionEligible"),un=n((t,e)=>{let r=S((e.product||{}).id);return(t.eligibilityGroups||{})[r]||null},"eligibilityGroups"),na=n((t,e)=>{let r=un(t,e);return r===null||!!r.find(o=>o==="upsell"||o==="impulse_upsell")},"hasUpsellGroup"),lp=n((t,e)=>{let r=un(t,e);return(r==null?void 0:r.some(o=>o===hr.PREPAID))||!1},"prepaidEligible"),pp=n((t,e)=>Pr(e.product)(t),"subscribed"),up=n((t,e)=>Or(e.product)(t),"optedout"),dp=n((t,e)=>qi(e.product)(t),"prepaidSubscribed"),fp=n((t,e)=>G(e.product.id)(t).length>0,"hasPrepaidOptions"),ia=n(t=>!!(t.nextUpcomingOrder&&t.nextUpcomingOrder.public_id),"hasUpcomingOrder"),hp=n((t,e)=>(t.nextUpcomingOrder&&t.nextUpcomingOrder.products||[]).includes((e.product||{}).id),"upcomingOrderContainsProduct"),sa=n((t,e)=>{var r;return!((r=e.offer)!=null&&r.isCart)&&t.offerId&&t.offerId!=="0"&&t.auth&&pn(t,e)&&ia(t)&&na(t,e)},"upsellEligible"),mp=n((t,e)=>oa(t,e)&&!sa(t,e),"regularEligible");var gp=n(t=>t.replace(/(\r\n|\n|\r|\s)+/gm,""),"removeWhitespace"),Yr=class extends N(E){static get properties(){return{...super.properties,state:{type:Object,attribute:!1},test:{type:String}}}render(){if(!this.test)return d``;let e=gp(this.test);return e=e.replace(/(![a-zA-Z]+)/g,"($1)"),aa.default.parse(e,o=>zr[o]&&zr[o](this.state,this))?d`
        <slot></slot>
      `:d``}shouldUpdate(e){return e.size&&(this.product&&this.product.id in this.state.autoshipEligible&&this.product.id in this.state.inStock||!this.product.id)}};n(Yr,"When");var yp=n(t=>({state:t}),"mapStateToProps"),ca=m(yp)(Yr);var la={type:Object,converter:{toAttribute(t){return t==null?t:JSON.stringify(t)},fromAttribute(t){return t&&t.match(/[{[]/)?JSON.parse(t):{id:t}}}},Oe={type:String,attribute:"default-frequency",converter:{fromAttribute(t){return t&&Io(t)?t:null}}},Wr={type:Boolean,attribute:!0,reflect:!0},ht={type:Object,attribute:!1};var bp=n(t=>class extends t{applyTemplate(e){this.template=e;let r=typeof e.markup=="undefined"?this.constructor.initialTemplate:e.markup;r&&this._templateMarkup!==r&&(this._templateMarkup=r,this.innerHTML=r)}refreshTemplate(){if(this._templates&&this._templates.length){let e=this._templates.find(({selector:r})=>{try{return this.matches(r)}catch{return!1}});this.applyTemplate(e||{})}}set templates(e){this._templates=e,this.refreshTemplate()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.constructor.initialTemplate&&!this.innerHTML.trim()&&(this.innerHTML=this.constructor.initialTemplate)}},"withTemplate"),Y=bp(E);var W=class extends N(Y){static get properties(){return{subscribed:Wr,frequencyMatch:{type:Boolean,reflect:!0,attribute:"frequency-match"},productDefaultFrequency:{type:String},defaultFrequency:{type:String},frequencies:{type:Array}}}static get styles(){return b`
      :host {
        cursor: default;
        display: inline-block;
      }

      :host[hidden] {
        display: none;
      }

      .btn {
        position: relative;
        width: var(--og-radio-width, 1.4em);
        height: var(--og-radio-height, 1.4em);
        margin: var(--og-radio-margin, 0);
        padding: 0;
        border: 1px solid var(--og-primary-color, var(--og-border-color, black));
        background: #fff;
        border-radius: 100%;
        vertical-align: middle;
        color: var(--og-primary-color, var(--og-btn-color, black));
      }

      .radio {
        text-indent: -9999px;
        flex-shrink: 0;
      }

      .checkbox {
        border-radius: 3px;
      }

      .radio,
      .checkbox {
        border-color: var(--og-checkbox-border-color, black);
      }

      .checkbox.active::after,
      .radio.active::after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: var(--og-checkbox-border-color, black);
      }

      .radio.active::after {
        content: ' ';
        border-radius: 100%;
        border: 2px solid #fff;
      }

      .checkbox.active::after {
        border: none;
        border-radius: 0;
        background: #fff;
        content: '\\2714';
        line-height: 1;
        text-align: center;
        overflow: visible;
      }
    `}constructor(){super(),this.addEventListener("click",this.handleClick.bind(this))}updated(e){e.has("subscribed")&&(this.frequencyMatch=this.frequency===this.defaultFrequency)}handleClick(){}render(){return this.subscribed&&!this.defaultFrequency?d`
        <slot name="subscribed"></slot>
        <slot name="frequency-mismatch"></slot>
      `:this.subscribed&&this.defaultFrequency===this.frequency?d`
        <slot name="subscribed"></slot>
        <slot name="frequency-match"></slot>
      `:this.subscribed&&this.defaultFrequency!==this.frequency?d`
        <slot name="subscribed"></slot>
        <slot name="frequency-mismatch"></slot>
      `:d`
      <slot name="not-subscribed"></slot>
    `}};n(W,"OptinStatus");var X=n((t,e={})=>{var r,o;return{subscribed:te(e.product)(t),frequency:oe(e.product)(t),productDefaultFrequency:tt((e.product||{}).id)(t),prepaidShipmentsOptedIn:j(e.product)(t),defaultFrequency:ne((r=e.product)==null?void 0:r.id)(t)||H(e,"defaultFrequency"),frequencies:rt((o=e.product)==null?void 0:o.id)(t)||H(e,"frequencies"),...ot(t,e),productFrequencies:K(e.product)(t)}},"mapStateToProps"),pa=m(X)(W);var mt=class extends W{static get properties(){return{...super.properties,frequency:{type:String,reflect:!0},defaultFrequency:Oe,optinButtonLabel:{type:String}}}updated(e){if(e.has("subscribed")||e.has("frequencies")){if(R.shopify_selling_plans&&this.store){let r=this.getAttribute("default-frequency");r=kt(r,this.productFrequencies),this.sellingPlanFreq=r}this.frequencyMatch=this.frequency===this.optinFrequency}}get optinFrequency(){let e;return this.sellingPlanFreq?e=this.sellingPlanFreq:this.hasAttribute("default-frequency")?e=this.getAttribute("default-frequency"):e=this.offer?this.offer.defaultFrequency:this.defaultFrequency,R.shopify_selling_plans&&this.store&&(e=kt(e,this.productFrequencies)),e}handleClick(e){this.optinProduct(jt(this),this.optinFrequency,this.offer),e.preventDefault()}render(){return d`
      <slot name="default">
        <button
          aria-labelledby="ogOfferOptInLabel"
          role="radio"
          aria-checked="${!!this.subscribed}"
          class="btn radio ${this.subscribed?"active":""}"
        ></button>
        <label id="ogOfferOptInLabel">
          <slot>
            <slot name="label"><og-text key="offerOptInLabel"></og-text></slot>
          </slot>
        </label>
      </slot>
    `}};n(mt,"OptinButton");var ua=m(X,{optinProduct:Z})(mt);var Jr=class extends W{static get properties(){return{...super.properties,label:{type:String}}}handleClick(e){this.optoutProduct(this.product,this.offer),e.preventDefault()}render(){return d`
      <slot name="default">
        <button
          aria-labelledby="ogOfferOptOutLabel"
          role="radio"
          aria-checked="${!this.subscribed}"
          class="btn radio ${this.subscribed?"":"active"}"
        ></button>
        <label id="ogOfferOptOutLabel">
          <slot>
            <og-text key="offerOptOutLabel"></og-text>
          </slot>
        </label>
      </slot>
    `}};n(Jr,"OptoutButton");var da=m(X,{optoutProduct:it})(Jr);var Le=n((t,e)=>{let{every:r,every_period:o}=wt(t);return r&&o?d`
        ${r}
        <og-text key="frequencyPeriods" variant="${o}" pluralize="${r}"></og-text>
        ${e&&e===t?d`
              <og-text key="defaultFrequencyCopy"></og-text>
            `:""}
      `:t},"frequencyText"),gt=class extends N(Y){static get properties(){return{...super.properties,disabled:{type:Boolean},subscribed:Wr,frequency:{type:String},defaultFrequency:Oe,productDefaultFrequency:{type:String},config:{type:Object},frequencies:{converter:{fromAttribute:Ci}}}}static get styles(){return b`
      :host[hidden] {
        display: none;
      }
      :host {
        display: inline-block;
      }
    `}constructor(){super(),this.frequencies=[]}render(){let e=this.frequency||this.defaultFrequency;return d`
      <span>
        ${this.subscribed&&d`
            <slot name="subscribed">${Le(e)}</slot>
          `||""}
        ${!this.subscribed&&d`
            <slot name="not-subscribed"></slot>
          `||""}
        ${this.subscribed&&this.defaultFrequency&&this.defaultFrequency!==this.frequency&&d`
            <slot name="frequency-mismatch"></slot>
          `||""}
      </span>
    `}};n(gt,"FrequencyStatus");var Gt=n((t,e)=>{var r,o;return{subscribed:te(e.product)(t),frequency:oe(e.product)(t),productDefaultFrequency:tt((e.product||{}).id)(t),frequencies:rt((r=e.product)==null?void 0:r.id)(t)||H(e,"frequencies"),defaultFrequency:ne((o=e.product)==null?void 0:o.id)(t)||H(e,"defaultFrequency"),...ot(t,e),productFrequencies:K(e.product)(t)}},"mapStateToProps"),fa=m(Gt)(gt);var Kr=class extends Br(W){static get properties(){return{...super.properties,frequencies:{type:Array,attribute:!1},frequency:{type:String},defaultFrequency:Oe}}static get styles(){return b`
      :host {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-radius: var(--og-select-border-radius, 0.5em);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
      }
    `}get currentFrequency(){return this.subscribed?this.frequency||this.productDefaultFrequency||this.defaultFrequency:"optedOut"}onOptinChange(e){e==="optedOut"?this.optoutProduct(this.product,this.offer):this.productChangeFrequency(this.product,e,this.offer)}render(){var o;let{options:e}=this.childOptions,r;if((o=this.frequencies)!=null&&o.length){let{frequenciesText:i}=this.productFrequencies;r=[e.find(s=>s.value==="optedOut"),...this.frequencies.map((s,a)=>({value:s,text:i&&a in i?i[a]:Le(s,this.defaultFrequency)}))]}else r=e;return d`
      <og-select
        .options="${r}"
        .selected="${this.currentFrequency}"
        .onChange="${({target:{value:i}})=>this.onOptinChange(i)}"
      ></og-select>
    `}};n(Kr,"OptinSelect");var ha=m((t,e)=>{var r;return{...X(t,e),...Gt(t,e),frequencies:rt((r=e.product)==null?void 0:r.id)(t)||H(e,"frequencies")}},{productChangeFrequency:Rr,optoutProduct:it})(Kr);var Qr=class extends N(Y){static get styles(){return b`
      :host[hidden] {
        display: none;
      }
      :host {
        display: inline-block;
      }
    `}static get properties(){return{...super.properties,upcomingOrderDate:{type:String,attribute:!1},auth:ht,isPreview:{type:Boolean,attribute:!1},target:{type:String},skipModal:{type:Boolean,attribute:"skip-modal"}}}constructor(){super(),this.fetchOrders=()=>0,this.createIu=()=>0,this.concludeUpsell=()=>0,this.addEventListener("click",this.handleClick.bind(this))}updated(e){e.has("auth")&&this.auth&&!this.upcomingOrderDate&&!this.isPreview&&this.fetchOrders()}handleClick(){let e;if(this.skipModal)this.createIu(this.product,this.nextUpcomingOrder.public_id,1,!1,null),this.concludeUpsell(this.product);else if(!this.target&&this.offer)e=this.offer.querySelector("og-upsell-modal"),e||(e=this.offer.shadowRoot.querySelector("og-upsell-modal"));else if(this.target)e=document.querySelector(this.target);else throw Error("You must specify a target attribute or place this element as child of og-offer");e&&e.setAttribute("show",!0)}render(){return d`
      <slot>
        <og-next-upcoming-order></og-next-upcoming-order>
      </slot>
    `}};n(Qr,"UpsellButton");var Sp=n(t=>({isPreview:t.previewUpsellOffer,nextUpcomingOrder:t.previewUpsellOffer?{public_id:"preview-order-id"}:t.nextUpcomingOrder}),"mapStateToProps"),ma=m(Sp,{fetchOrders:Ir,createIu:Nr,concludeUpsell:Ar})(Qr);var Zr=class extends N(Y){static get properties(){return{...super.properties,defaultFrequency:Oe,auth:ht,subscribed:{type:Boolean,attribute:!1},frequency:{type:String,attribute:!1},nextUpcomingOrder:{type:Object,attribute:!1},show:{type:Boolean,attribute:"show"},offerId:{type:String}}}constructor(){super(),this.createIu=()=>0,this.concludeUpsell=()=>0}render(){return d`
      <og-modal ?show=${this.show} @close=${()=>this.close()} @confirm=${()=>this.confirm()}>
        <div slot="content">
          <slot>
            <slot name="content">
              <og-text key="upsellModalContent"></og-text>
            </slot>
            <slot name="offer">
              <br />

              <og-optout-button>
                <slot name="opt-out-label">
                  <og-text key="upsellModalOptOutLabel" slot="label"></og-text>
                </slot>
              </og-optout-button>
              <br />
              <og-optin-button default-frequency=${this.defaultFrequency}>
                <slot name="opt-in-label">
                  <og-text key="upsellModalOptInLabel" slot="label"></og-text>
                </slot>
              </og-optin-button>
              <br />
              <slot name="every-label">
                <og-text key="offerEveryLabel"></og-text>
              </slot>
              <og-select-frequency default-frequency=${this.defaultFrequency}></og-select-frequency>
            </slot>
          </slot>
        </div>
        <span slot="confirm">
          <slot name="confirm"><og-text key="upsellModalConfirmLabel"></og-text></slot>
        </span>
        <span slot="cancel">
          <slot name="cancel">
            <og-text key="upsellModalCancelLabel"></og-text>
          </slot>
        </span>
      </og-modal>
    `}set defaultFrequency(e){this._defaultFrequency=e}get defaultFrequency(){let e=this.querySelector("og-select-frequency");return e?e.defaultFrequency:this._defaultFrequency}confirm(){this.createIu(this.product,this.nextUpcomingOrder.public_id,1,this.subscribed,this.frequency||this.defaultFrequency),this.close()}close(){this.concludeUpsell(),this.removeAttribute("show")}};n(Zr,"UpsellModal");var _p=n((t,e)=>{var r;return{auth:t.auth,offerId:t.offerId,subscribed:te(e.product)(t),frequency:oe(e.product)(t),defaultFrequency:ne((r=e.product)==null?void 0:r.id)(t)||H(e,"defaultFrequency"),nextUpcomingOrder:t.previewUpsellOffer?{public_id:"preview-order-id"}:t.nextUpcomingOrder,isPreview:t.previewUpsellOffer}},"mapStateToProps"),ga=m(_p,{concludeUpsell:Ar,createIu:Nr})(Zr);var Xr=class extends W{static get properties(){return{...super.properties,frequency:{type:String}}}static get styles(){return b`
      :host {
        cursor: default;
        display: inline-block;
      }

      .btn {
        position: relative;
        width: var(--og-radio-width, 1.4em);
        height: var(--og-radio-height, 1.4em);
        margin: var(--og-radio-margin, 0);
        padding: 0;
        border: 1px solid var(--og-checkbox-border-color, black);
        background: #fff;
        vertical-align: middle;
        color: var(--og-primary-color, black);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
      }

      .btn.active {
        background: var(--og-checkbox-border-color, black);
      }

      .btn.active:after {
        content: '✓';
        color: #fff;
        transform: scale(1.6);
        margin-left: 2px;
      }
    `}handleClick(e){this.subscribed?this.optoutProduct(this.product,this.offer):this.optinProduct(this.product,this.frequency||this.productDefaultFrequency||this.defaultFrequency,this.offer),e.preventDefault()}render(){return d`
      <slot name="default">
        <button id="action-trigger" class="btn checkbox ${this.subscribed?"active":""}"></button>
        <label for="action-trigger">
          <slot>
            <slot name="label"><og-text key="offerOptInLabel"></og-text></slot>
          </slot>
        </label>
      </slot>
    `}};n(Xr,"OptinToggle");var ya=m(X,{optoutProduct:it,optinProduct:Z})(Xr);var Ep=n((t,e)=>`${t}${parseInt(e,10)>1?"s":""}`,"pluralize"),eo=class extends ln(E){static get properties(){return{pluralize:{type:Number},variant:{type:Number},i18n:{type:Object,attribute:!1},locale:{type:Object,attribute:!1},key:{type:String}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._textOverride=this.innerText.trim()}getText(){return this._textOverride?this._textOverride:this.getPluralizedText(this.getVariantText(this.key))}getVariantText(e){let r={...this.i18n,...this.offer&&this.offer.locale},o=typeof r[e]!="undefined"?r[e]:"";return typeof this.variant=="undefined"?o:o[this.variant]}getPluralizedText(e){return typeof this.pluralize=="undefined"?e:e&&Ep(e,this.pluralize)}render(){return d`
      ${this.getText()}
    `}};n(eo,"Text");var xp=n(t=>({i18n:t.locale||{}}),"mapStateToProps"),ba=m(xp)(eo);var Me=class{constructor(e){this.value=e,this.className="DiscountAmount"}toString(){return`${this.value}`}};n(Me,"DiscountAmount");var yt=class extends Me{constructor(e){super(e),this.className="DiscountPercent"}toString(){return`${super.toString()}%`}};n(yt,"DiscountPercent");var to=class extends yt{constructor(e){super(e),this.className="ShippingDiscountPercent"}toString(){return this.value===100?"free shipping":super.toString()}};n(to,"ShippingDiscountPercent");var dn="Discount Percent",fn="Discount Amount",Sa="total_price",_a="shipping_total",Ea="sub_total",hn=n(({field:t,object:e,type:r,value:o})=>{let s=[[new yt(o),{field:Sa,object:"item",type:dn}],[new Me(o),{field:Sa,object:"item",type:fn}],[new to(o),{field:_a,object:"order",type:dn}],[new Me(o),{field:_a,object:"order",type:fn}],[new yt(o),{field:Ea,object:"order",type:dn}],[new Me(o),{field:Ea,object:"order",type:fn}]].find(([,a])=>a.field===t&&a.object===e&&a.type===r);return s&&s[0]},"discountBuilder");function Pp(t,{incentiveValue:e,incentiveClass:r}){return!(hn(t).className!==r||e&&e.toString()!==t.value.toString())}n(Pp,"isMatchingIncentive");var Op=[ge.PSI,ge.PROGRAM_WIDE],ro=class extends N(E){static get properties(){return{...super.properties,incentives:{type:Object,attribute:!1},from:{type:String},label:{type:String},initial:{type:Boolean,default:!1},value:{type:Number}}}createRenderRoot(){return this}render(){let e=this.from,r=this.value,o=this.initial?"initial":"ongoing",i=this.incentives[o]||[],s=i.filter(c=>c.criteria&&c.criteria.node_type==="PREMISE"&&!c.threshold_field&&Op.includes(c.criteria.standard)),a=[...s,...i.filter(c=>!s.includes(c))].find(c=>Pp(c,{incentiveClass:e,incentiveValue:r}));return d`
      ${this.label} ${a?hn(a):this.renderFallback()}
    `}renderFallback(){return d`
      ${hn({field:"sub_total",object:"order",type:"Discount Percent",value:this.value})}
    `}};n(ro,"IncentiveText");var vp=n((t,e)=>{var r;return{incentives:(t.incentives||{})[e&&(e==null?void 0:e.product)&&S((r=e==null?void 0:e.product)==null?void 0:r.id)]||{}}},"mapStateToProps"),xa=m(vp)(ro);var oo=class extends Br(gt){static get properties(){return{...super.properties,defaultText:{type:String,attribute:"default-text"}}}static get styles(){return b`
      :host {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-radius: var(--og-select-border-radius, 0.5em);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        z-index: 1;
      }
    `}set defaultFrequency(e){this._defaultFrequency=e}get defaultFrequency(){var i,s,a,c;let{options:e,isSelected:r}=this.childOptions,o;return this.productDefaultFrequency?o=this.productDefaultFrequency:r?o=r:e.length?o=e[0].value:o=this._defaultFrequency,((s=(i=this.productFrequencies)==null?void 0:i.frequencies)==null?void 0:s.length)&&o&&((c=(a=this.productFrequencies)==null?void 0:a.frequenciesEveryPeriod)==null?void 0:c.length)?kt(o,this.productFrequencies):o}get currentFrequency(){return this.frequency?this.frequency:this.defaultFrequency}productChangeFrequency(e,r){this.frequency=r}render(){var o;let e,r=this.defaultFrequency;return(o=this.frequencies)!=null&&o.length?e=this.frequencies.map((i,s)=>{let a,{frequenciesEveryPeriod:c,frequenciesText:l}=this.productFrequencies;return c&&s in c?a=Le(c[s],r):l&&s in l?a=l[s]:a=Le(i,this.defaultFrequency),{value:i,text:a}}):{options:e}=this.childOptions,e.length||(e=(this.frequencies||[]).map(i=>({value:i,text:Le(i,r)}))),e=e.map(({text:i,value:s})=>({text:s===r?d`
              ${i} ${this.defaultText||""}
            `:i,value:s})),d`
      <og-select
        ariaLabel="Delivery frequency"
        .options="${e}"
        .selected="${this.currentFrequency}"
        .onChange="${({target:{value:i}})=>{this.productChangeFrequency(this.product,i,this.offer)}}"
      ></og-select>
    `}};n(oo,"SelectFrequency");var Pa=m(Gt,{productChangeFrequency:Rr})(oo);var Tp={day:{day:"2-digit"},"day-numeric":{day:"numeric"},"day-short":{weekday:"short"},"day-long":{weekday:"long"},month:{month:"2-digit"},"month-numeric":{month:"numeric"},"month-short":{month:"short"},"month-long":{month:"long"},year:{year:"2-digit"},"year-numeric":{year:"numeric"}};var Oa=n((t,e)=>t instanceof Date?(e||"").toString().replace(/\{\{([-\w]+)\}\}/g,r=>{let o=r.replace(/[{}]/g,""),i=Tp[o];if(typeof i=="undefined")return o;let a=new Intl.DateTimeFormat("en-us",i).formatToParts(t),[{value:c}]=a;return c}):t,"formatDate");var no=class extends E{static get properties(){return{value:{type:String,reflect:!0},format:{type:String}}}createRenderRoot(){return this}render(){return d`
      ${Oa(this.value,this.format||"{{month-long}} {{day}}, {{year-numeric}}")}
    `}};n(no,"FormattedDate");var wp=n(t=>({value:t.previewUpsellOffer?new Date:t.nextUpcomingOrder.place}),"mapStateToProps"),va=m(wp)(no);var Ca=ce(Ot());var Ta=n((t,e,r)=>n(async function(i){await i({type:fe,payload:{isPreview:t,productId:e}}),await i({type:Te}),await i(Se({in_stock:{[e]:!0},eligibility_groups:{[e]:["subscription","upsell"]},result:"success",autoship:{[e]:!0},autoship_by_default:{[e]:!1},modifiers:{},module_view:{regular:"096135e6650111e9a444bc764e106cf4"},incentives_display:{"47c01e9aacbe40389b5c7325d79091aa":{field:"sub_total",object:"order",type:"Discount Percent",value:5},e6534b9d877f41e586c37b7d8abc3a58:{field:"total_price",object:"item",type:"Discount Percent",value:10},f35e842710b24929922db4a529eecd40:{field:"total_price",object:"item",type:"Discount Percent",value:10},"5be321d7c17f4e18a757212b9a20bfcc":{field:"total_price",object:"item",type:"Discount Percent",value:1}},incentives:{[e]:{initial:["5be321d7c17f4e18a757212b9a20bfcc"],ongoing:["e6534b9d877f41e586c37b7d8abc3a58","47c01e9aacbe40389b5c7325d79091aa","f35e842710b24929922db4a529eecd40"]}}},r,e))},"setPreviewStandardOfferThunk"),"setPreviewStandardOffer"),Cp=n((t,e)=>(Object.entries(e).forEach(([r,o])=>{if(Object.prototype.hasOwnProperty.call(t,r)){let i=t[r].concat(o),s=[...new Set(i.map(a=>JSON.stringify(a)))];t[r]=s.map(a=>JSON.parse(a))}else t[r]=o}),t),"mergeProductPlansToState"),Rp=n((t,e,r)=>n(async function(i,s){await i({type:xt,payload:{isPreview:t,productId:e}});let{merchantId:a}=s();t?(await i(Se({in_stock:{[e]:!0},module_view:{regular:"096135e6650111e9a444bc764e106cf4"},default_frequencies:{[e]:{every:1,every_period:3}},eligibility_groups:{[e]:["subscription","upsell"]},result:"success",autoship:{[e]:!0},autoship_by_default:{[e]:!1},modifiers:{}},r,e)),await i(Lo({count:1,next:null,previous:null,results:[{merchant:"0e5de2bedc5e11e3a2e4bc764e106cf4",customer:"TestCust",payment:"e98e789aba0111e9b90fbc764e107990",shipping_address:"b3a5816ae59611e78937bc764e1043b0",public_id:"23322d4a83eb11ea9a1ebc764e101db1",sub_total:"206.98",tax_total:"0.00",shipping_total:"10.00",discount_total:"0.00",total:"216.98",created:"2020-04-21 11:14:11",place:"2020-06-24 00:00:00",cancelled:null,tries:0,generic_error_count:0,status:1,type:1,order_merchant_id:null,rejected_message:null,extra_data:null,locked:!1,oos_free_shipping:!1}]})),await i(Ft(a,"sig_field","ts","sig"))):await i(ye())},"setPreviewUpsellOfferThunk"),"setPreviewUpsellOffer"),Ap=n((t,e,r)=>n(async function(i,s){let a=s().productPlans;await i({type:vo,payload:{isPreview:t,productId:e}}),await i({type:Te}),await i(Se({in_stock:{[e]:!0},eligibility_groups:{[e]:["subscription","upsell","prepaid"]},result:"success",autoship:{[e]:!0},autoship_by_default:{[e]:!1},modifiers:{},module_view:{regular:"096135e6650111e9a444bc764e106cf4"},incentives_display:{"47c01e9aacbe40389b5c7325d79091aa":{field:"sub_total",object:"order",type:"Discount Percent",value:5},e6534b9d877f41e586c37b7d8abc3a58:{field:"total_price",object:"item",type:"Discount Percent",value:10},f35e842710b24929922db4a529eecd40:{field:"total_price",object:"item",type:"Discount Percent",value:10},"5be321d7c17f4e18a757212b9a20bfcc":{field:"total_price",object:"item",type:"Discount Percent",value:1}},incentives:{[e]:{initial:["5be321d7c17f4e18a757212b9a20bfcc"],ongoing:["e6534b9d877f41e586c37b7d8abc3a58","47c01e9aacbe40389b5c7325d79091aa","f35e842710b24929922db4a529eecd40"]}}},r,e)),await i({type:Je,payload:Cp(a,Ur({[e]:[{frequency:"1_3",regularPrice:"$15.00",subscriptionPrice:"$12.00",discountRate:"25%",prepaidShipments:3,regularPrepaidPrice:"$36.00",prepaidSavingsPerShipment:"$3.00",prepaidSavingsTotal:"$9.00",prepaidExtraSavingsPercentage:"10%"},{frequency:"1_3",regularPrice:"$15.00",subscriptionPrice:"$12.00",discountRate:"20%",prepaidShipments:6,regularPrepaidPrice:"$72.00",prepaidSavingsPerShipment:"$3.00",prepaidSavingsTotal:"$18.00",prepaidExtraSavingsPercentage:"10%"},{frequency:"1_3",regularPrice:"$15.00",subscriptionPrice:"$12.00",discountRate:"20%",prepaidShipments:12,regularPrepaidPrice:"$144.00",prepaidSavingsPerShipment:"$3.00",prepaidSavingsTotal:"$36.00",prepaidExtraSavingsPercentage:"10%"}]}))}),await i({type:We,payload:{prepaidSellingPlans:{[e]:[{numberShipments:3,sellingPlan:"1_3"},{numberShipments:6,sellingPlan:"1_3"},{numberShipments:12,sellingPlan:"1_3"}]}}})},"setPreviewPrepaidThunk"),"setPreviewPrepaid"),wa=n((t,e,r)=>async function(o,i){switch(await o({type:he}),await o({type:fe,payload:{isPreview:!1,productId:r.product.id}}),await o({type:xt,payload:{isPreview:!1,productId:r.product.id}}),t){case"regular":o(Ta(!0,r.product.id,r));break;case"upsell":o(Rp(!0,r.product.id,r));break;case"subscribed":o(Ta(!0,r.product.id,r)),o(Z(r.product,"2_2"));break;case"prepaid":o(Ap(!0,r.product.id,r)),o(Z(r.product,"1_3"));break;default:}},"setPreview");var Ip=n((...t)=>JSON.stringify(t),"memoizeKey"),Ra=n(t=>{let e=!1;return(...r)=>{e||(console.warn(t(...r)),e=!0)}},"logOnce"),Np=Ra((t,e)=>`Hiding Ordergroove offer since the store currency ${t} does not match your configured currency ${e} and you are not set up for multicurrency. Contact your Ordergroove representative for next steps.`),Ig=Ra(()=>"Hiding Ordergroove offer since cart offers does not currently support product-specific frequency lists."),kp=(0,Ca.default)((t,e)=>Object.assign({components:e},t),Ip),io=class extends Y{static get properties(){return{...super.properties,config:{type:Object,attribute:!1},product:la,productComponents:{type:Array,attribute:"product-components"},offerId:{type:String,attribute:!1},auth:ht,preview:{type:String,attribute:"preview",reflect:"true"},location:{type:String},autoshipByDefault:{type:Boolean,attribute:"autoship-by-default"},productDefaultFrequency:{type:String,attribute:!1},locale:{type:Object,attribute:!0},firstOrderPlaceDate:{type:String,attribute:"first-order-place-date"},productToSubscribe:{type:String,attribute:"product-to-subscribe"},subscribed:{type:Boolean,reflect:!0},frequency:{type:String,reflect:!0},productFrequency:{type:String},isCart:{type:Boolean,attribute:"cart"},optedin:{type:Object},variationId:{type:String},overrideSellingPlanPrice:{type:Boolean,attribute:"dev-override-selling-plan-price"}}}firstUpdated(){try{let e=Array.from(this.getAttributeNames()).find(r=>r.startsWith("preview-"));e==="preview-standard-offer"?this.preview="regular":e==="preview-upsell-offer"?this.preview="upsell":e==="preview-subscribed-offer"?this.preview="subscribed":e==="preview-prepaid-offer"&&(this.preview="prepaid")}catch(e){console.warn("Unable to set preview property",e)}}static get styles(){return b`
      :host[hidden] {
        display: none;
      }

      :host {
        display: block;
      }

      :host {
        color: var(--og-global-color, #000);
        font-family: var(--og-global-family, inherit);
        font-size: var(--og-global-size, inherit);
        padding: var(--og-wrapper-padding, 10px 0);
        min-width: var(--og-wrapper-min-width, 0);
      }

      p {
        margin: 0 0 0.3em;
      }

      :host og-upsell-button button {
        font-family: var(--og-upsell-family, inherit);
        font-size: var(--og-upsell-size, inherit);
        background-color: var(--og-upsell-background, inherit);
        color: var(--og-upsell-color, inherit);
      }

      .og-modal__btn {
        font-size: var(--og-modal-button-size, 0.875rem);
        font-family: var(--og-modal-button-family, inherit);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: var(--og-modal-button-background, #e6e6e6);
        color: var(--og-modal-button-color, rgba(0, 0, 0, 0.8));
        border-radius: 0.25rem;
        border-style: none;
        border-width: 0;
        cursor: pointer;
        -webkit-appearance: button;
        text-transform: none;
        overflow: visible;
        line-height: 1.15;
        margin: 0;
        will-change: transform;
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: -webkit-transform 0.25s ease-out;
        transition: transform 0.25s ease-out;
        transition:
          transform 0.25s ease-out,
          -webkit-transform 0.25s ease-out;
      }

      .og-modal__btn:focus,
      .og-modal__btn:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      .og-modal__btn-primary {
        background-color: var(--og-confirm-button-background, #00449e);
        color: var(--og-confirm-button-color, #fff);
      }
    `}static get initialTemplate(){return`
    <og-when test="regularEligible">
      <div>

        <og-optout-button>
          <og-text key="offerOptOutLabel"></og-text>
        </og-optout-button>
      </div>
      <div>
        <og-optin-button>
          <og-price discount>
            <span slot="prepend">Subscribe and get</span>
            <span slot="append">off</span>
            <og-text key="offerOptInLabel" slot="fallback"></og-text> 
          </og-price>
          <og-price regular></og-price>
          <og-price subscription></og-price>
    
        </og-optin-button>
        <og-tooltip placement="bottom">
          <div slot="trigger">
            <og-text key="offerTooltipTrigger"></og-text>
          </div>
          <div slot="content">
            <og-text key="offerTooltipContent"></og-text>
          </div>
        </og-tooltip>
      </div>
      <div style="margin-left: 2.2em">
        <og-text key="offerEveryLabel"></og-text>
        <og-select-frequency>
          <option value="3_1" selected>3 Days</option>
          <option value="1_2">1 Week</option>
          <option value="1_3">1 Month</option>
        </og-select-frequency>
      </div>
    </og-when>

    <og-when test="upsellEligible">
      <og-when test="!upcomingOrderContainsProduct">
      <div class="og-iu-offer">
        <og-text key="upsellButtonLabel"></og-text>
        <og-upsell-button>
          <button type="button">
            <og-text key="upsellButtonContent"></og-text>
            <og-next-upcoming-order></og-next-upcoming-order>
          </button>
        </og-upsell-button>
        <og-upsell-modal>
          <og-text key="upsellModalContent"></og-text>
          <br />

          <og-optout-button>
            <og-text key="upsellModalOptOutLabel"></og-text>
          </og-optout-button>

          <br />

          <og-optin-button>
            <og-text key="upsellModalOptInLabel"></og-text>
          </og-optin-button>
          <br />

          <og-text key="offerEveryLabel"></og-text>
          <og-select-frequency>
            <option value="3_1" selected>3 Days</option>
            <option value="1_2">1 Week</option>
            <option value="1_3">1 Month</option>
          </og-select-frequency>

          <button slot="confirm" class="og-modal__btn og-modal__btn-primary">
            <og-text key="upsellModalConfirmLabel"></og-text>
          </button>
          <button slot="cancel" class="og-modal__btn"><og-text key="upsellModalCancelLabel"></og-text></button>
        </og-upsell-modal>
      </div>
      </og-when>
      <og-when test="upcomingOrderContainsProduct">
        The product is in your next upcomming order
      </og-when>
    </og-when>
    
    `}constructor(){super(),this.module="pdp",this.product={},this.productComponents=[],this.fetchOffer=()=>0,this.fetchOrders=()=>0,this.productHasChangedComponents=()=>0,this.setFirstOrderPlaceDate=()=>0,this.setProductToSubscribe=()=>0,this.productChangeFrequency=()=>0}applyTemplate(e){super.applyTemplate(e);let{id:r,locale:o}=e;this.variationId=r,this.locale=o;let i=new CustomEvent("template-changed");this.dispatchEvent(i)}updated(e){if(e.has("preview")&&this.setPreview(this.preview,e.get("preview"),this),this.frequency=this.defaultFrequency,e.has("product")&&!this.isPreview&&vr(()=>this.fetchOffer(this.product.id,Ke,this)),e.has("firstOrderPlaceDate")&&this.product.id&&!this.isPreview&&this.setFirstOrderPlaceDate(this.product.id,this.firstOrderPlaceDate),e.has("productToSubscribe")&&this.product.id&&!this.isPreview&&this.setProductToSubscribe(this.product.id,this.productToSubscribe),e.has("auth")&&this.auth&&!this.isPreview&&this.fetchOrders(),e.has("productComponents")){let r=kp(this.product,this.productComponents),o=Object.assign({},this.product,{components:e.get("productComponents")});I(r,o)||this.productHasChangedComponents(r,o)}(e.has("offerId")||e.has("autoshipByDefault")||e.has("location")||e.has("product"))&&this.offerId&&this.autoshipByDefault&&(this.location==="cart"||this.isCart)&&this.product.id&&this.optinProduct&&!(this.optedin||[]).find(r=>I(r,this.product))&&this.optinProduct({...this.product,...this.productComponents.length&&{components:this.productComponents}},this.defaultFrequency,this)}get isPreview(){return this.preview||window.og.previewMode}get shouldEnableOffer(){return this.config&&this.config.storeCurrency&&this.config.merchantSettings&&!(this.config.merchantSettings.multicurrency_enabled||this.config.storeCurrency===this.config.merchantSettings.currency_code)?(Np(this.config.storeCurrency,this.config.merchantSettings.currency_code),!1):!0}render(){return this.shouldEnableOffer?d`
          <slot></slot>
        `:null}get defaultFrequency(){let e=this.productFrequency||this.productDefaultFrequency;if(e)return e;let r=this.querySelector("og-select-frequency");if(r&&r.currentFrequency)return r.currentFrequency;let o=this.getValueFromAttribute("defaultFrequency");return o||(this.template&&this.template.config&&typeof this.template.config.defaultFrequency!="undefined"?this.template.config.defaultFrequency:this.configDefaultFrequency)}getValueFromAttribute(e){let r=qo(e);if(this.hasAttribute(r)){let o=this.getAttribute(r);return o.toString().toLowerCase()==="true"?!0:o.toString().toLowerCase()==="false"?!1:o}}};n(io,"Offer");var Fp=n((t,e)=>{var r;return{config:t.config,auth:t.auth,offerId:((t.productOffer||{})[(e.product||{}).id]||[])[0],configDefaultFrequency:ne((r=e.product)==null?void 0:r.id)(t),productFrequency:oe(e.product)(t),productDefaultFrequency:tt((e.product||{}).id)(t),autoshipByDefault:t.config&&t.config.autoshipByDefault||H(e,"autoshipByDefault",ko(t)[(e.product||{}).id]),...Or(e.product)(t)&&{autoshipByDefault:!1},optedin:Nt(t),subscribed:te(e.product)(t),...ot(t)}},"mapStateToProps"),Aa=m(Fp,{fetchOffer:Ki,fetchOrders:Ir,productHasChangedComponents:Hi,optinProduct:Z,setFirstOrderPlaceDate:rs,setProductToSubscribe:os,setPreview:wa})(io);var Ht=class extends E{constructor(){super(),this.showCancelButton=!0,this.showConfirmButton=!0}static get properties(){return{title:{type:String,attribute:!1},content:{type:String,attribute:!1},confirmText:{type:String,attribute:!1},cancelText:{type:String,attribute:!1},showCancelButton:{type:Boolean},showConfirmButton:{type:Boolean},show:{type:Boolean,attribute:"show"}}}static get styles(){return b`
      :host[hidden] {
        display: none;
      }

      :host {
        display: block;
      }

      .og-modal {
        display: none;
      }

      .og-modal.is-open {
        display: block;
      }

      .og-modal__overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .og-modal__container {
        background-color: var(--og-modal-background-color, #fff);
        padding: var(--og-modal-padding, 30px);
        max-width: 500px;
        max-height: 100vh;
        border-radius: var(--og-modal-border-radius, 4px);
        box-sizing: border-box;
      }

      .og-modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .og-modal__title {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.25;
        color: #00449e;
        box-sizing: border-box;
      }

      .og-modal__close {
        background: transparent;
        border: 0;
      }

      .og-modal__close:before {
        content: '✕';
      }

      .og-modal__content {
        margin-top: 2rem;
        margin-bottom: 2rem;
        line-height: 1.5;
      }

      .og-modal__btn {
        font-size: var(--og-modal-button-size, 0.875rem);
        font-family: var(--og-modal-button-family, inherit);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: var(--og-modal-button-background, #e6e6e6);
        color: var(--og-modal-button-color, rgba(0, 0, 0, 0.8));
        border-radius: 0.25rem;
        border-style: none;
        border-width: 0;
        cursor: pointer;
        -webkit-appearance: button;
        text-transform: none;
        overflow: visible;
        line-height: 1.15;
        margin: 0;
        will-change: transform;
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: -webkit-transform 0.25s ease-out;
        transition: transform 0.25s ease-out;
        transition:
          transform 0.25s ease-out,
          -webkit-transform 0.25s ease-out;
      }

      .og-modal__btn:focus,
      .og-modal__btn:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      .og-modal__btn-primary {
        background-color: var(--og-confirm-button-background, #00449e);
        color: var(--og-confirm-button-color, #fff);
      }
      .btn {
        cursor: pointer;
      }
    `}close(){this.removeAttribute("show"),this.dispatchEvent(new CustomEvent("close"))}confirm(){this.removeAttribute("show"),this.dispatchEvent(new CustomEvent("confirm"))}get confirmButton(){return this.showConfirmButton?d`
          <span @click="${()=>this.confirm()}">
            <slot name="confirm" class="btn">
              <button class="og-modal__btn og-modal__btn-primary og-modal__confirm" @click="${()=>this.confirm()}">
                ${this.confirmText}
              </button>
            </slot>
          </span>
        `:d``}get cancelButton(){return this.showCancelButton?d`
          <span @click="${()=>this.close()}" class="btn">
            <slot name="cancel">
              <button class="og-modal__btn og-modal__cancel" @click="${()=>this.close()}">${this.cancelText}</button>
            </slot>
          </span>
        `:d``}render(){return this.show?d`
      <div class="og-modal is-open" aria-hidden="true">
        <div class="og-modal__overlay" tabindex="-1">
          <div class="og-modal__container" role="dialog" aria-modal="true">
            <header class="og-modal__header">
              <h2 class="og-modal__title">
                <slot name="title">${this.title}</slot>
              </h2>
              <button class="og-modal__close" aria-label="Close" @click="${()=>this.close()}"></button>
            </header>
            <main class="og-modal__content">
              <slot name="content">${this.content}</slot>
            </main>
            <footer class="og-modal__footer">${this.confirmButton} ${this.cancelButton}</footer>
          </div>
        </div>
      </div>
    `:d``}};n(Ht,"Modal");var Bt=class extends E{static get styles(){return b`
      :host {
        display: inline-block;
        color: inherit;
        position: relative;
        height: 100%;
        cursor: inherit;
        font-family: inherit;
        font-weight: inherit;
      }
      select {
        font-weight: inherit;
        display: block;
        height: 100%;
        cursor: inherit;
        color: inherit;
        font-family: inherit;
        font-size: 1em;
        line-height: 1.3;
        padding: var(--og-select-padding, 0.4em 1.8em 0.3em 0.5em);
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        margin: 0;
        border: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
      }
      select::-ms-expand {
        display: none;
      }
      select:focus {
        outline: none;
      }
      select option {
        font-weight: inherit;
      }
      span {
        position: absolute;
        // background: white;
        color: inherit;
        fill: white;
        pointer-events: none;
        right: 0.3em;
        top: 50%;
        z-index: 1;
        font-size: 1em;
        line-height: 0.2em;
        transform: scaleY(0.5);
      }
    `}static get properties(){return{options:{type:Array},selected:{type:String},ariaLabel:{type:String}}}render(){return d`
      <select @change="${n(r=>this.onChange(r),"handleOnChange")}" aria-label="${this.ariaLabel}">
        ${this.options.map(r=>d`
            <option
              value="${r.value}"
              ?selected=${r.value===this.selected}
              .selected=${r.value===this.selected}
            >
              ${r.text}
            </option>
          `)}
      </select>
      <span>&#9660;</span>
    `}};n(Bt,"Select");var mn=new WeakMap,gn=Ko(t=>e=>{let r=mn.get(e);if(t===void 0&&e instanceof Ee){if(r!==void 0||!mn.has(e)){let o=e.committer.name;e.committer.element.removeAttribute(o)}}else t!==r&&e.setValue(t);mn.set(e,t)});var ve={AUTOMATIC:"automatic",MANUAL:"manual"},zt=class extends E{constructor(){super(),this.triggerLabel="Show tooltip",this.open=!1,this.activationType=ve.AUTOMATIC}static get properties(){return{placement:{type:String,default:"bottom"},triggerLabel:{type:String,attribute:"trigger-label"},activationType:{type:String,attribute:"activation-type"},open:{type:Boolean,attribute:!1}}}static get styles(){return b`
      :host[hidden] {
        display: none;
      }

      :host {
        display: inline-block;
        position: relative;
        z-index: 9;
      }

      /* reset default button styles */
      button.trigger {
        all: unset;
      }

      /* do not reset the button's default focus outline */
      button.trigger:focus {
        outline: revert;
      }

      .trigger {
        display: block;
        cursor: pointer;
      }

      /* for manual activation, hide the content completely from screen readers when the tooltip is closed */
      /* otherwise, interactive elements may receive focus even when they are not visible */
      [data-manual] .content {
        visibility: hidden;
      }

      .content {
        box-sizing: border-box;
        font-family: var(--og-tooltip-family, inherit);
        font-size: var(--og-tooltip-size, inherit);
        color: var(--og-tooltip-color, inherit);
        background-color: var(--og-tooltip-background, #ececec);
        box-shadow: var(--og-tooltip-box-shadow, 2px 2px 6px rgba(0, 0, 0, 0.28));
        display: block;
        opacity: 0;
        padding: var(--og-tooltip-padding, 0.5em);
        text-align: var(--og-tooltip-text-align, left);
        pointer-events: none;
        position: absolute;
        transform: translateY(10px);
        transition: transform 0.25s ease-out;
        z-index: 99999;
        border-radius: var(--og-tooltip-border-radius, 0);
      }

      .content:after {
        content: ' ';
        height: 0;
        position: absolute;
        width: 0;
      }

      .top {
        bottom: 100%;
        margin-bottom: 10px;
      }

      .bottom {
        top: 100%;
        margin-top: 10px;
      }

      .left {
        right: 100%;
        margin-right: 10px;
      }

      .right {
        left: 100%;
        margin-left: 10px;
      }

      .top-left {
        bottom: 100%;
        margin-bottom: 10px;
        right: 100%;
        margin-right: -16px;
      }

      .top-right {
        bottom: 100%;
        margin-bottom: 10px;
        left: 100%;
        margin-left: -16px;
      }

      .bottom-left {
        top: 100%;
        margin-top: 10px;
        right: 100%;
        margin-right: -16px;
      }

      .bottom-right {
        top: 100%;
        margin-top: 10px;
        left: 100%;
        margin-left: -16px;
      }

      .bottom-left:after,
      .bottom-right:after,
      .top-left:after,
      .top-right:after,
      .top:after,
      .bottom:after {
        margin-left: -10px;
        left: 50%;
        border-left: solid transparent 10px;
        border-right: solid transparent 10px;
      }

      .top-left:after,
      .top-right:after,
      .top:after {
        bottom: -10px;
        border-top: solid var(--og-tooltip-background, #ececec) 10px;
      }
      .bottom-left:after,
      .top-left:after {
        left: auto;
        right: 0;
      }

      .bottom-right:after,
      .top-right:after {
        left: 0;
        right: auto;
        margin-left: 0;
      }

      .bottom-left:after,
      .bottom-right:after,
      .bottom:after {
        top: -10px;
        border-bottom: solid var(--og-tooltip-background, #ececec) 10px;
      }

      .left:after,
      .right:after {
        margin-top: -10px;
        top: 50%;
        border-top: solid transparent 10px;
        border-bottom: solid transparent 10px;
      }
      .right:after {
        left: -10px;
        border-right: solid var(--og-tooltip-background, #ececec) 10px;
      }
      .left:after {
        right: -10px;
        border-left: solid var(--og-tooltip-background, #ececec) 10px;
      }

      .tooltip[data-open] .content {
        visibility: visible;
        opacity: 1;
        width: 200px;
        pointer-events: auto;
        transform: translateY(0px);
      }
    `}connectedCallback(){super.connectedCallback(),this.abortController=new AbortController;let e=this.abortController.signal;this.addEventListener("mouseenter",this.handleMouseEnter.bind(this),{signal:e}),this.addEventListener("mouseleave",this.handleMouseLeave.bind(this),{signal:e}),this.addEventListener("focusin",this.handleFocusIn.bind(this),{signal:e}),this.addEventListener("focusout",this.handleFocusOut.bind(this),{signal:e}),this.addEventListener("keydown",this.handleKeyDown.bind(this),{signal:e}),document.addEventListener("click",this.handleDocumentClick.bind(this),{signal:e})}async recalculatePosition(){if(await this.updateComplete,!this.open)return;let r=this.shadowRoot.querySelector(".trigger").getBoundingClientRect(),o=this.shadowRoot.querySelector(".content"),i=o.getBoundingClientRect();!this.placement||this.placement==="top"||this.placement==="bottom"?o.style.left=`${(-1*i.width+r.width)/2}px`:(this.placement==="left"||this.placement==="right")&&(o.style.top=`${(-1*i.height+r.height)/2}px`)}handleMouseEnter(){this.open=!0,this.recalculatePosition()}handleMouseLeave(){this.open=!1}handleFocusIn(){this.activationType===ve.AUTOMATIC&&(this.open=!0,this.recalculatePosition())}handleFocusOut(e){this.activationType===ve.AUTOMATIC&&(this.contains(e.relatedTarget)||(this.open=!1))}handleKeyDown(e){this.activationType===ve.MANUAL&&e.key==="Escape"&&this.open&&(this.open=!1,e.stopPropagation())}handleClick(){this.activationType===ve.MANUAL&&(this.open=!this.open,this.recalculatePosition())}handleDocumentClick(e){this.activationType!==ve.MANUAL||!this.open||this.contains(e.target)||(this.open=!1)}disconnectedCallback(){super.disconnectedCallback(),this.abortController.abort()}render(){let e=this.triggerLabel?this.triggerLabel:void 0;return d`
      <span class="tooltip" ?data-open="${this.open}" ?data-manual="${this.activationType===ve.MANUAL}">
        ${this.activationType===ve.MANUAL?d`
              <button
                class="trigger"
                aria-label="${gn(e)}"
                aria-expanded="${this.open}"
                aria-controls="tooltip-content"
                @click="${this.handleClick}"
              >
                <slot name="trigger">${this.trigger}</slot>
              </button>
            `:d`
              <span class="trigger" tabindex="0" aria-label="${gn(e)}">
                <slot name="trigger">${this.trigger}</slot>
              </span>
            `}
        <div class="content ${this.placement||"bottom"}" role="tooltip" id="tooltip-content">
          <slot name="content">${this.content}</slot>
        </div>
      </span>
    `}};n(zt,"Tooltip");var J=class extends N(E){static get properties(){return{options:{type:Array},shipmentsOptedIn:{type:Number},prepaidShipmentsSelected:{type:Number},defaultPrepaidShipments:{type:Number,attribute:"default-prepaid-shipments"}}}get prepaidOptedIn(){return this.shipmentsOptedIn>1}get selectedNumberOfShipments(){return this.prepaidShipmentsSelected||this.shipmentsOptedIn||this.getDefaultPrepaidShipments()}getDefaultPrepaidShipments(){return this.options.includes(this.defaultPrepaidShipments)?this.defaultPrepaidShipments:It(this.options)}handleSelect({target:{value:e}}){let r=+e;this.productChangePrepaidShipments(this.product,r,this.offer)}render(){return d``}};n(J,"PrepaidStatus");var qp=n((t,e)=>({options:G(e.product.id)(t),shipmentsOptedIn:j(e.product)(t),prepaidShipmentsSelected:re(e.product)(t)}),"mapStateToProps"),Wg=m(qp,{productChangePrepaidShipments:be})(J);var so=class extends J{constructor(){super(),this.options=[],this.text="shipments"}static get properties(){return{...super.properties,text:{type:String}}}static get styles(){return b`
      og-select {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        z-index: 1;
      }

      input {
        width: 1.2em;
        height: 1.2em;
        accent-color: var(--og-prepaid-checkbox-color, black);
        border-radius: 4px;
      }
    `}handleChange(e){e.target.checked?this.productChangePrepaidShipments(this.product,this.selectedNumberOfShipments,this.offer):this.productChangePrepaidShipments(this.product,null,this.offer)}render(){if(this.options.length===0)return d``;let e=this.options.map(r=>({value:r,text:`${r} ${this.text}`}));return d`
      <div>
        <input id="cbx" type="checkbox" .checked=${this.prepaidOptedIn} @change=${this.handleChange} />
        <label for="cbx">
          <slot name="label">Prepay for</slot>
          ${this.options.length>1?d`
                <og-select
                  .options=${e}
                  .selected=${this.selectedNumberOfShipments}
                  .onChange="${r=>this.handleSelect(r)}"
                ></og-select>
              `:d`
                <span>${e[0].text}</span>
              `}
          <slot name="append"></slot>
        </label>
      </div>
    `}};n(so,"PrepaidToggle");var Dp=n((t,e)=>({options:G(e.product.id)(t),shipmentsOptedIn:j(e.product)(t),prepaidShipmentsSelected:re(e.product)(t)}),"mapStateToProps"),Ia=m(Dp,{productChangePrepaidShipments:be})(so);var ao=class extends J{static get properties(){return{...super.properties,productPlans:{type:Object},prepaidShipmentsSelected:{type:Number},totalPrice:{type:Boolean,reflect:!0,attribute:"total-price"},perDeliveryPrice:{type:Boolean,reflect:!0,attribute:"per-delivery-price"},totalSavings:{type:Boolean,reflect:!0,attribute:"total-savings"},perDeliverySavings:{type:Boolean,reflect:!0,attribute:"per-delivery-savings"},percentageSavings:{type:Boolean,reflect:!0,attribute:"percentage-savings"},extraPercentageSavings:{type:Boolean,reflect:!0,attribute:"extra-percentage-savings"},numberOfShipments:{type:Boolean,reflect:!0,attribute:"number-of-shipments"}}}static get styles(){return b`
      :host {
        display: inline-block;
        text-indent: initial;
      }
    `}get value(){let e=S(this.product),r=this.productPlans[e]||[],o=this.selectedNumberOfShipments,i=r.find(h=>h.prepaidShipments>1&&h.prepaidShipments===o);if(!i&&(i=r.find(h=>h.prepaidShipments>1),!i))return"";let{discountRate:s,subscriptionPrice:a,prepaidShipments:c,regularPrepaidPrice:l,prepaidSavingsPerShipment:p,prepaidSavingsTotal:u,prepaidExtraSavingsPercentage:f}=i;return this.totalPrice?l:this.perDeliveryPrice?a:this.totalSavings?u:this.perDeliverySavings?p:this.percentageSavings?s:this.extraPercentageSavings?f:this.numberOfShipments?c:""}render(){let e=this.value;return e?d`
        <slot name="prepend"></slot>
        ${e}
        <slot name="append"></slot>
      `:d`
      <slot name="fallback"></slot>
    `}};n(ao,"PrepaidData");var Up=n((t,e)=>({options:G(e.product.id)(t),shipmentsOptedIn:j(e.product)(t),prepaidShipmentsSelected:re(e.product)(t),productPlans:t.productPlans}),"mapStateToProps"),Na=m(Up)(ao);var co=class extends J{constructor(){super(),this.addEventListener("click",this.handleClick.bind(this))}static get styles(){return b`
      :host {
        cursor: pointer;
        display: inline-block;
      }

      :host[hidden] {
        display: none;
      }

      .btn {
        position: relative;
        width: var(--og-radio-width, 1.4em);
        height: var(--og-radio-height, 1.4em);
        margin: var(--og-radio-margin, 0);
        padding: 0;
        border: 1px solid var(--og-primary-color, var(--og-border-color, black));
        background: #fff;
        border-radius: 100%;
        vertical-align: middle;
        color: var(--og-primary-color, var(--og-btn-color, black));
      }

      .radio {
        text-indent: -9999px;
        flex-shrink: 0;
      }

      .radio {
        border-color: var(--og-checkbox-border-color, black);
      }

      .radio.active::after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: var(--og-checkbox-border-color, black);
      }

      .radio.active::after {
        content: ' ';
        border-radius: 100%;
        border: 2px solid #fff;
      }
    `}handleClick(e){this.prepaidOptedIn||this.productChangePrepaidShipments(this.product,this.selectedNumberOfShipments,this.offer),e.preventDefault()}render(){return d`
      <slot name="default">
        <button id="action-trigger" class="btn radio ${this.prepaidOptedIn?"active":""}"></button>
        <label for="action-trigger">
          <slot name="label"><og-text key="prepaidOptInLabel"></og-text></slot>
        </label>
      </slot>
    `}};n(co,"PrepaidButton");var Lp=n((t,e)=>({options:G(e.product.id)(t),shipmentsOptedIn:j(e.product)(t),prepaidShipmentsSelected:re(e.product)(t)}),"mapStateToProps"),ka=m(Lp,{productChangePrepaidShipments:be})(co);var lo=class extends J{constructor(){super(),this.options=[],this.text="shipments"}static get properties(){return{...super.properties,text:{type:String}}}static get styles(){return b`
      og-select {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        z-index: 1;
      }
    `}render(){if(this.options.length===0)return d``;let e=this.options.map(r=>({value:r,text:`${r} ${this.text}`}));return d`
      ${this.options.length>1?d`
            <og-select
              .options=${e}
              .selected=${this.selectedNumberOfShipments}
              .onChange="${r=>this.handleSelect(r)}"
            ></og-select>
          `:d`
            <span>${e[0].text}</span>
          `}
      <slot name="append"></slot>
    `}};n(lo,"PrepaidSelect");var Mp=n((t,e)=>({options:G(e.product.id)(t),shipmentsOptedIn:j(e.product)(t),prepaidShipmentsSelected:re(e.product)(t)}),"mapStateToProps"),Fa=m(Mp,{productChangePrepaidShipments:be})(lo);var po=class extends mt{static get properties(){return{...super.properties,prepaidShipmentsOptedIn:{type:Number}}}get isActive(){return this.prepaidShipmentsOptedIn>0?!1:this.subscribed}handleClick(e){if(!this.isActive){let r=this.frequencies&&this.frequencies.length>0?this.frequencies[0]:this.optinFrequency;this.optinProduct(jt(this),r,this.offer)}e.preventDefault()}render(){return d`
      <slot name="default">
        <button id="action-trigger" class="btn radio ${this.isActive?" active":""}"></button>
        <label for="action-trigger">
          <slot>
            <slot name="label"><og-text key="offerOptInLabel"></og-text></slot>
          </slot>
        </label>
      </slot>
    `}};n(po,"SubscriptionButton");var qa=m(X,{optinProduct:Z})(po);var Yt=class extends E{static get styles(){return b`
      :host {
        position: fixed;
        top: 5em;
        righit: 5em;
        background-color: rgba(255, 255, 255, 0.7);
        width: 400px;
        padding: 1em;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 0 0 #000;
      }

      button {
        margin: 0 0.5em 0.5em;
        background-color: gray;
        color: white;
        border: 0;
        border-radius: 3px;
        cursor: pointer;
        padding: 0.5em;
      }

      button.primary {
        background-color: blue;
        padding: 1em;
        color: white;
        border: 0;
        border-radius: 3px;
      }

      button[disabled] {
        background-color: #777;
      }

      div {
        margin-bottom: 0.5em;
      }

      .message {
        margin-left: 0.5em;
        margin: 1em;
      }

      .success {
        color: green;
      }

      .error {
        color: red;
      }

      .warning {
        color: orange;
      }
      a {
        color: white;
      }
    `}runTests(){this.results=[],this.disabled=!0,this.requestUpdate(),document.querySelectorAll("og-offer").forEach(r=>{let o=r.store.getState(),i=r.getAttribute("product"),s=r.getAttribute("location"),a={messages:this.getOfferAttributeMessages(i,s).concat(this.getOfferRequestMessages(i,o)),product:i};this.results.push(a)}),this.testsRan=!0,this.disabled=!1,this.requestUpdate()}getOfferAttributeMessages(e,r){let o=[];return e||o.push({name:"Offer element found but missing product attribute",type:"error"}),r||o.push({name:"Offer element found but missing location attribute",type:"warning"}),e&&r&&o.push({name:"Offer element found and properly tagged",type:"success"}),o}getOfferRequestMessages(e,r){let o=r.inStock[e],i=r.autoshipEligible[e],s=[];return e&&o===!1&&s.push({name:"This product is marked as out of stock in the OG database",type:"warning"}),e&&i===!1&&s.push({name:"This product is not eligible for autoship",type:"warning"}),e&&o===null&&i===null&&s.push({name:"This product does not exist in our database",type:"error"}),s}resultsCodeBlock(){return this.results.length===0?d`
          <div class="message error">No offer element found on the page</div>
        `:this.results.map((e,r)=>d`
            <div>For offer tag with product = "${e.product}"</div>
            ${e.messages.map(o=>d`
                <div class="message ${o.type}">${o.name}</div>
              `)}
            <button @click=${this.toggleProductFlags(r,{})}>Set inStock and eligible</button>
            <br />
            <button @click=${this.toggleProductFlags(r,{inStock:!1})}>Set to not inStock</button>
            <br />
            <button @click=${this.toggleProductFlags(r,{autoship:!1})}>Set to not eligible</button>
            <br />
            <button @click=${this.toggleProductFlags(r,{autoship:!1,inStock:!1})}>
              Set to not eligible and not in stock
            </button>
            <br />
            <button @click=${this.toggleUpsellPreview(r)}>Toggle upsell/regular in this offer</button>
            <br />
            <button @click=${this.toggleUpsellNextOrder(r)}>upsell product is in next order</button>
            <br />
          `)}toggleUpsellPreview(e){return r=>{r.preventDefault();let o=document.querySelectorAll("og-offer")[e];o.getAttribute("preview-upsell-offer")?o.removeAttribute("preview-upsell-offer"):o.setAttribute("preview-upsell-offer",!0),this.runTests()}}toggleProductFlags(e,{inStock:r=!0,autoship:o=!0,groups:i=["subscription","upsell"]}){return s=>{s.preventDefault();let a=document.querySelectorAll("og-offer")[e],c=a.product.id;a.store.dispatch(Se({in_stock:{[c]:r},eligibility_groups:{[c]:i},result:"success",autoship:{[c]:o},module_view:{regular:"58a01e9aacbe40389b5c7325d79091bb"},modifiers:{},incentives_display:{"47c01e9aacbe40389b5c7325d79091aa":{field:"sub_total",object:"order",type:"Discount Percent",value:5},e6534b9d877f41e586c37b7d8abc3a58:{field:"total_price",object:"item",type:"Discount Percent",value:5},f35e842710b24929922db4a529eecd40:{field:"total_price",object:"item",type:"Discount Percent",value:10},"5be321d7c17f4e18a757212b9a20bfcc":{field:"total_price",object:"item",type:"Discount Percent",value:1}},incentives:{[c]:{initial:["5be321d7c17f4e18a757212b9a20bfcc"],ongoing:["e6534b9d877f41e586c37b7d8abc3a58","47c01e9aacbe40389b5c7325d79091aa","f35e842710b24929922db4a529eecd40"]}}},{},c)),this.runTests()}}toggleUpsellNextOrder(e){return r=>{let o=document.querySelectorAll("og-offer")[e],i=o.product.id;r.preventDefault(),o.store.dispatch(Mo({count:1,next:null,previous:null,results:[{order:"24d50352579511ea806cbc764e100cfd",offer:null,subscription:"8a076b7a0ea011e7a5bcbc764e105eda",product:i,components:[],quantity:1,public_id:"24d6901e579511ea806cbc764e100cfd",product_attribute:null,price:"14.99",extra_cost:"0.00",total_price:"13.49",one_time:!1,frozen:!1,first_placed:null}]})),this.runTests()}}render(){return d`
      <div>
        ${this.testsRan?this.resultsCodeBlock():d`
              <div>Click the button to run tests</div>
            `}
        <button ?disabled=${this.disabled} @click="${this.runTests.bind(this)}" class="primary">Run Test</button>
      </div>
    `}};n(Yt,"TestWizard");function yn(){let t="og-test-wizard";customElements.get(t)||customElements.define(t,Yt);let e=document.createElement(t);document.body.appendChild(e)}n(yn,"default");var bn=[79,71,68,69,86],Da=n(()=>{if(window.OG_OFFERS_TEST_MODE_ENABLE)return;window.OG_OFFERS_TEST_MODE_ENABLE=!0;let t=0;document.addEventListener("keyup",async function(e){if(e.which===bn[t]){let o=bn[t];setTimeout(function(){t<=o&&(t=0)},5e3),t+=1,t>=bn.length&&yn()}else t=0},!1)},"enable");var uo=class extends N(Y){static get properties(){return{...super.properties,regular:{type:Boolean,reflect:!0},subscription:{type:Boolean,reflect:!0},discount:{type:Boolean,reflect:!0},payAsYouGo:{type:Boolean,reflect:!0,attribute:"pay-as-you-go"},frequency:{type:Object},productPlans:{type:Object},discountedProductPriceFromOffers:{type:Object}}}static get styles(){return b`
      :host::before {
        clip-path: inset(100%);
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      :host([subscription])::before {
        content: 'Discounted subscription price';
      }

      :host([regular])::before {
        content: 'Regular price';
      }
    `}get value(){var l,p;let e=S(this.product),r=this.frequency||this.configDefaultFrequency||((l=this.offer)==null?void 0:l.defaultFrequency),o=this.productPlans[e]||[],i=this.payAsYouGo?o.find(u=>u.prepaidShipments===null||u.prepaidShipments===void 0):o.find(u=>u.frequency===r);if(!i)return"";let{regularPrice:s,discountRate:a,subscriptionPrice:c}=i;return(i.hasPriceAdjustments===!1||((p=this.offer)==null?void 0:p.overrideSellingPlanPrice))&&!i.prepaidShipments&&({regularPrice:s,discountRate:a,subscriptionPrice:c}=this.discountedProductPriceFromOffers),c===s&&!this.payAsYouGo?"":this.regular?s:this.discount?a:c}render(){let e=this.value;return e?d`
        <slot name="prepend"></slot>
        ${e}
        <slot name="append"></slot>
      `:d`
      <slot name="fallback"></slot>
    `}};n(uo,"Price");var Vp=n((t,e)=>{var r,o;return{productPlans:t.productPlans,configDefaultFrequency:ne((r=e.product)==null?void 0:r.id)(t),frequency:oe(e.product)(t),discountedProductPriceFromOffers:Li((o=e.product)==null?void 0:o.id)(t)}},"mapStateToProps"),Ua=m(Vp)(uo);function Sn(t){Da(),Cs(t);try{customElements.define("og-when",ca),customElements.define("og-text",ba),customElements.define("og-incentive-text",xa),customElements.define("og-offer",Aa),customElements.define("og-select-frequency",Pa),customElements.define("og-optout-button",da),customElements.define("og-optin-toggle",ya),customElements.define("og-optin-status",pa),customElements.define("og-optin-button",ua),customElements.define("og-optin-select",ha),customElements.define("og-upsell-button",ma),customElements.define("og-frequency-status",fa),customElements.define("og-modal",Ht),customElements.define("og-select",Bt),customElements.define("og-tooltip",zt),customElements.define("og-upsell-modal",ga),customElements.define("og-next-upcoming-order",va),customElements.define("og-price",Ua),customElements.define("og-prepaid-toggle",Ia),customElements.define("og-prepaid-data",Na),customElements.define("og-prepaid-button",ka),customElements.define("og-prepaid-select",Fa),customElements.define("og-subscription-button",qa)}catch{console.info("OG WebComponents already registered, skipping.")}let e=!1,r={store:t,isReady:()=>e,setEnvironment(o){return t.dispatch(Wi(o)),this},setMerchantId(o){return t.dispatch(Bi(o)),this},setAuthUrl(o){return t.dispatch(zi(o)),this},receiveMerchantSettings(o){return t.dispatch(ns(o)),this},getProductsForPurchasePost(o=[]){return Bo(t.getState(),o)},getOptins(o=[]){return Bo(t.getState(),o)},clear(){t.dispatch(Qi())},addOptinChangedCallback(o){typeof o=="function"&&document.addEventListener("optin-changed",i=>o(i.detail))},disableOptinChangedCallbacks(){document.addEventListener("optin-changed",o=>o.stopPropagation(),!0)},register(){},previewMode(o){return window.og=window.og||{},o===!1?delete window.og:(window.og.previewMode=!0,console.log("OG Offers preview mode enabled")),this},config(o){return t.dispatch(Xi(o)),this},setLocale(o){return t.dispatch(Zi(o)),this},addTemplate(o,i,s){return t.dispatch(es(o,i,s)),this},setTemplates(o){return t.dispatch(ts(o)),this},setPublicPath(o){return this},resolveSettings(o,i,s,a=t){if(!R.shopify_selling_plans&&o&&i&&s){let c=[];s.product?c.push(s.product):s.cart&&Array.isArray(s.cart.products)&&(c=c.concat(s.cart.products));let l=a.getState(),{sessionId:p}=l;p&&c.forEach(u=>a.dispatch($o(u))),s.product_discounts&&typeof s.product_discounts=="object"&&a.dispatch({type:Je,payload:s.product_discounts})}},initialize(o,i,s,a={}){var l;e&&console.warn("og.offers has been initialized already. Skipping.");let c=t.getState();return o&&o!==c.merchantId&&r.setMerchantId(o),i&&i!==((l=c.environment)==null?void 0:l.name)&&r.setEnvironment(i),r.receiveMerchantSettings(a),s&&r.setAuthUrl(s),e||r.resolveSettings(o,i,window.og_settings,t),e=!0,this}};return window.OG=window.OG||{},Object.assign(window.OG,r),Object.assign(r.initialize,r),Ho(window.opener,r),r}n(Sn,"makeApi");var fo=n((t=[],e)=>{switch(e.type){case he:return[];case we:return e.newValue?e.newValue.optedin:t;case C:case q:{let[{prepaidShipments:r,...o},i]=nt(t,e.payload.product);return i.concat({...o,...e.payload.product,frequency:e.payload.frequency})}case le:{let{payload:r}=e,[{prepaidShipments:o,...i},s]=nt(t,r.product),a={...i,...r.product};return r.prepaidShipments&&(a.prepaidShipments=r.prepaidShipments),s.concat(a)}case F:return t.filter(r=>!I(e.payload.product,r));case _t:return t.map(r=>I(e.payload.product,r)?{...r,...e.payload.newProduct}:r);case ir:return t.filter(r=>!I(e.payload.product,r));case Ye:return[];default:return t}},"optedin"),_n=n((t=[],e)=>{switch(e.type){case he:return[];case we:return e.newValue?e.newValue.optedout:t;case C:case q:return t.filter(r=>!I(e.payload.product,r));case F:{let[r,o]=nt(t,e.payload.product);return o.concat({...r,...e.payload.product,frequency:e.payload.frequency})}case _t:return t.map(r=>I(e.payload.product,r)?{...r,...e.payload.newProduct}:r);case Ye:return[];default:return t}},"optedout"),En=n((t={},{type:e,payload:r})=>{switch(e){case tr:return r&&r.count>0?{...t,...r.results[0]&&{...r.results[0],place:new Date(Date.parse(r.results[0].place.replace(/-/gi,"/")))}}:t;case rr:return{...t,products:(r.results||[]).map(o=>o.product)};case nr:return{...t,...r,public_id:r.order,...r.product&&{products:(t.products||[]).concat(r.product)}};default:return t}},"nextUpcomingOrder"),jp=n((t={},e)=>{switch(e.type){case T:return{...t,...e.payload.autoship};default:return t}},"autoshipEligible"),Gp=n((t={},e)=>{switch(e.type){case L:return{...t};case T:return{...t,...e.payload.in_stock};default:return t}},"inStock"),xn=n((t={},e)=>{switch(e.type){case T:return{...t,...e.payload.eligibility_groups};default:return t}},"eligibilityGroups"),La=n((t,e,r)=>t.map(o=>{let i=r==null?void 0:r[o];return{...e[o],...i?{criteria:i.criteria?i.criteria:{node_type:"PREMISE",standard:ge.PROGRAM_WIDE,premise_value:null},threshold_field:i.threshold_field,threshold_value:i.threshold_value}:{},id:[o][0]}}),"mapIncentive"),Pn=n((t={},e)=>{switch(e.type){case T:return{...t,...[...new Set(Object.keys(e.payload.incentives||{}))].reduce((r,o)=>({...r,[o]:Object.entries(e.payload.incentives).filter(([i])=>i===o).reduce((i,[,{initial:s,ongoing:a}])=>({...i,initial:[...i.initial||[],...La(s,e.payload.incentives_display,e.payload.incentives_display_enhanced)],ongoing:[...i.ongoing||[],...La(a,e.payload.incentives_display,e.payload.incentives_display_enhanced)]}),{})}),{})};default:return t}},"incentives"),Hp=n((t={},e)=>{switch(e.type){case C:case q:return{...t,[S(e.payload.product)]:e.payload.frequency};case F:return{...t,[S(e.payload.product)]:void 0};default:return t}},"frequency"),On=n((t=!1,e)=>{switch(e.type){case er:return{...e.payload};case Te:return!1;default:return t}},"auth"),vn=n((t="",e)=>{switch(e.type){case Ve:return e.payload;default:return t}},"merchantId"),Tn=n((t=null,e)=>{switch(e.type){case Xt:return e.payload;default:return t}},"authUrl"),Bp=n((t={},e)=>{switch(e.type){case T:return{...t,offerId:(e.payload.module_view||{}).regular,...e.payload.modifiers};default:return t}},"offer"),wn=n((t="",e)=>{switch(e.type){case T:return(e.payload.module_view||{}).regular||"";default:return t}},"offerId"),Cn=n((t=null,e)=>{switch(e.type){case he:return null;case je:return e.payload;default:return t}},"sessionId"),zp=n((t={},e)=>{switch(e.type){case T:return{...t,...Object.entries(e.payload.autoship).map(([r])=>({[r]:Object.keys(e.payload.modifiers)})).reduce((r,o)=>({...r,...o}),{})};case Ye:return{};default:return t}},"productOffer"),Rn=n((t={},e)=>{switch(e.type){case lr:return{...t,[S(e.payload.product)]:e.payload.firstOrderPlaceDate};default:return t}},"firstOrderPlaceDate"),An=n((t={},e)=>{switch(e.type){case pr:return{...t,[S(e.payload.product)]:e.payload.productToSubscribe};default:return t}},"productToSubscribe"),In=n((t={},e)=>{switch(e.type){case Ge:return{...t,name:"local",apiUrl:"http://py3web.ordergroove.localhost",legoUrl:"http://py3lego.ordergroove.localhost"};case He:return{...t,name:Ce,apiUrl:"https://staging.offers.ordergroove.com",legoUrl:"https://staging.restapi.ordergroove.com"};case Be:return{...t,name:ur,apiUrl:"https://dev.offers.ordergroove.com",legoUrl:"https://dev.restapi.ordergroove.com"};case ze:return{...t,name:Re,apiUrl:"https://offers.ordergroove.com",legoUrl:"https://restapi.ordergroove.com"};default:return t}},"environment"),Nn=n((t={offerOptInLabel:"Subscribe to save",offerIncentiveText:"Save {{ogIncentive DiscountPercent}} when you subscribe",offerOptOutLabel:"Deliver one-time only",offerEveryLabel:"Delivery Every",offerTooltipTrigger:"[?]",offerTooltipContent:"Seems this is a great subscription offering. Many fun details about this program exist.",optinButtonLabel:"\u2022",optoutButtonLabel:"\u2022",optinStatusOptedInLabel:"You're opted in!",optinStatusOptedOutLabel:"You're not opted in.",optinToggleLabel:"\u2022",upsellButtonLabel:"Add item to order on ",upsellButtonPrefix:"",upsellModalContent:"Some upsell modal content",upsellModalOptInLabel:"Subscribe",upsellModalOptOutLabel:"Purchase one time",upsellModalTitle:"Impulse Upsell",upsellModalConfirmLabel:"Ok",upsellModalCancelLabel:"Cancel",defaultFrequencyCopy:"(Most Popular)",frequencyPeriods:{1:"day",2:"week",3:"month"},prepaidOptInLabel:"Prepaid Subscription",prepaidShipmentsLabel:"Number of prepaid shipments"},e)=>{switch(e.type){case sr:return{...t,...e.payload};default:return t}},"locale"),Yp=n((t={offerType:"radio"},e)=>{switch(e.type){case We:return{...t,...e.payload,defaultFrequency:e.payload.defaultFrequency?Ct(e.payload.defaultFrequency):t.defaultFrequency,frequenciesEveryPeriod:[],frequencies:e.payload.frequencies?e.payload.frequencies.map(Ct):t.frequencies};case pe:return{...t,merchantSettings:{...e.payload}};default:return t}},"config"),kn=n((t=!1,e)=>{switch(e.type){case fe:return e.payload.isPreview;default:return t}},"previewStandardOffer"),Fn=n((t=!1,e)=>{switch(e.type){case xt:return e.payload.isPreview;default:return t}},"previewUpsellOffer");var qn=n((t={},e)=>{switch(e.type){case T:return{...t,...e.payload.autoship_by_default};default:return t}},"autoshipByDefault"),Dn=n((t=[],e)=>{switch(e.type){case T:return{...t,...e.payload.default_frequencies};default:return t}},"defaultFrequencies"),Un=n((t=[],e)=>{switch(e.type){case cr:return[...e.payload||[]];case ar:return[e.payload,...t];default:return t}},"templates"),Wp=n((t={},e)=>{switch(e.type){case Je:return Ur(e.payload);default:return t}},"productPlans"),Ln=n((t={},e)=>{switch(e.type){case Et:{let{[e.payload.oldCartProductKey]:r,...o}=t;return{...o,[e.payload.newCartProductKey]:r}}case le:return e.payload.prepaidShipments?{...t,[e.payload.product.id]:e.payload.prepaidShipments}:t;default:return t}},"prepaidShipmentsSelected"),Jp=n((t={},e)=>t,"price"),ho=Jt({optedin:fo,optedout:_n,nextUpcomingOrder:En,autoshipEligible:jp,inStock:Gp,eligibilityGroups:xn,incentives:Pn,frequency:Hp,auth:On,merchantId:vn,authUrl:Tn,offer:Bp,offerId:wn,experiments:Fr,sessionId:Cn,productOffer:zp,firstOrderPlaceDate:Rn,productToSubscribe:An,environment:In,locale:Nn,config:Yp,previewStandardOffer:kn,previewUpsellOffer:Fn,autoshipByDefault:qn,defaultFrequencies:Dn,templates:Un,productPlans:Wp,prepaidShipmentsSelected:Ln,price:Jp});var mo=n(t=>{var e,r;return Array.isArray((e=t.selling_plan)==null?void 0:e.options)&&((r=t.selling_plan)==null?void 0:r.options.some(o=>(o==null?void 0:o.name)==="Shipment amount"))},"isPrepaidAllocation"),go=n(t=>{if(t&&t.length>1){let e=t.find(r=>(r==null?void 0:r.name)==="Shipment amount").value.split(" ");return e.length>0?+e[0]:null}return null},"getPrepaidShipmentsNumberFromOptions"),Kp=n(t=>{var e,r;return(t.selling_plan_id||((r=(e=t.selling_plan)==null?void 0:e.id)!=null?r:"")).toString()},"getAllocationFrequency"),Qp=n((t,e)=>M(t.compare_at_price,e),"getAllocationRegularPrice"),Zp=n((t,e)=>{var r;if(mo(t)){let o=go((r=t.selling_plan)==null?void 0:r.options),i=Math.round(t.price/o);return M(i,e)}return M(t.price,e)},"getAllocationSubscriptionPrice"),Ma=n((t,e)=>Math.round((t.compare_at_price-e)*100/t.compare_at_price),"getPrepaidPercentage"),Xp=n((t,e)=>{var o,i,s;if(mo(t)){let a=go((o=t.selling_plan)==null?void 0:o.options),c=t.price/a,l=Ma(t,c);return et(l)}let r="";return((i=t.price_adjustments[0])==null?void 0:i.value_type)==="percentage"?r=et(t.price_adjustments[0].value):(s=t.price_adjustments[0])!=null&&s.value?r=M(t.price_adjustments[0].value,e):t.compare_at_price&&(r=M(t.compare_at_price-t.price,e)),r},"getAllocationDiscountRate"),eu=n(t=>{var e;return mo(t)?go((e=t.selling_plan)==null?void 0:e.options):null},"getAllocationNumberOfShipments"),tu=n((t,e,r,o)=>{var u,f;let i=go((u=t.selling_plan)==null?void 0:u.options),s=t.price/i,a=t.compare_at_price-s,c=Ma(t,s),l=(f=r==null?void 0:r.price_adjustments)==null?void 0:f[0],p=l&&l.value_type==="percentage"?l.value:null;return e.regularPrepaidPrice=M(t.price,o),e.prepaidSavingsPerShipment=M(Math.round(a),o),e.prepaidSavingsTotal=M(Math.round(a*i),o),p&&c&&(e.prepaidExtraSavingsPercentage=et(c-p)),e},"addPrepaidPriceAndSavings"),ru=n((t,e,r)=>{var i;t.selling_plan||(t.selling_plan=e.find(s=>s.id===t.selling_plan_id));let o={frequency:Kp(t),regularPrice:Qp(t,r),subscriptionPrice:Zp(t,r),discountRate:Xp(t,r),prepaidShipments:eu(t),hasPriceAdjustments:((i=t.price_adjustments)==null?void 0:i.length)>0};if(mo(t)){let s=ki(e);return tu(t,o,s,r)}return o},"mapSellingPlanToDiscount"),Mn=n((t,e,r=[],o)=>[...t,ru(e,r,o)],"sellingPlanAllocationsReducer"),$a=n(t=>t.selling_plan_groups.reduce((e,r)=>[...e,...r.selling_plans.map(o=>({...o,group:r}))],[]),"getSellingPlans");var ou=n((t={offerType:"radio",productFrequencies:{},frequencies:[],frequenciesEveryPeriod:[]},e)=>{var r;if(D===e.type){let{payload:{product:o,currency:i}}=e,s={},a=(r=o.variants)==null?void 0:r.reduce((p,u)=>iu(p,u,o.selling_plan_groups,t),{}),c={...t.productFrequencies,...a};s={...s,productFrequencies:c,...Object.values(c)[0]};let l=$n(o);return Object.keys(l).length&&(s={...s,prepaidSellingPlans:{...t.prepaidSellingPlans,...l}}),{...t,...s,storeCurrency:i}}if(T===e.type){let{payload:{offer:o}}=e,{defaultFrequency:i,product:s}=o||{},{prepaidSellingPlans:a={}}=t,c=S(s==null?void 0:s.id),l=t.productFrequencies[c],p={...t.productFrequencies,[c]:{...l,defaultFrequency:su(c,i,a,l==null?void 0:l.frequencies,l==null?void 0:l.frequenciesEveryPeriod)}};return{...t,productFrequencies:p,...Object.values(p)[0]}}return pe===e.type?{...t,merchantSettings:{...e.payload}}:t},"config");function nu(t,e){var i,s;let r=At(t),o=_r(r);if(o!=null&&o.length){let a=Er(r),c=((s=(i=r.options)==null?void 0:i[0])==null?void 0:s.values)||o,l=e==null?void 0:e.defaultFrequency;return l&&Ne(l)&&(l=Q(o,a,l)||ue(o)||l),{frequencies:o,frequenciesEveryPeriod:a,frequenciesText:c,...l?{defaultFrequency:l}:{}}}return null}n(nu,"getFrequencies");function iu(t,e,r,o){let i=e.selling_plan_allocations.map(c=>c.selling_plan_group_id),s=r.filter(c=>i.includes(c.id)),a=nu(s,o.productFrequencies[e.id]);return a&&(t[e.id]=a),t}n(iu,"reduceSellingPlansToFrequencies");function su(t,e,r,o=[],i=[]){var s;return(s=r[t])!=null&&s.some(({sellingPlan:a})=>a===e)?ue(o)||e:Ne(e)&&(Q(o,i,e)||ue(o))||e}n(su,"getUpdatedDefaultFrequency");function $n(t){let e=t==null?void 0:t.selling_plan_groups.filter(r=>/^Prepaid-.*/.test(r.name));return e.length?e.reduce((r,o)=>{let i=o.name.split("-")[1],s=o.selling_plans.map(a=>({numberShipments:xr(a),sellingPlan:String(a.id)}));return{...r,[i]:s}},{}):{}}n($n,"getPrepaidSellingPlans");var Va=ou;var Ga=n((t,e,r)=>{let o=Object.keys(t).filter(i=>i.startsWith(e.toString()));return o.length?{...t,...o.reduce((i,s)=>({...i,[s]:r}),{})}:t},"overrideLineKey"),ja=n((t,e,r)=>{if(!r)return null;if(!Ne(r))return r;if(Tr(t,e)){let o=Q(t,e,r);return o||ue(t)}return r},"getDefaultSellingPlan"),au=n((t,e,r)=>t.map(o=>Ne(o==null?void 0:o.frequency)?{...o,frequency:Tr(r==null?void 0:r.frequencies,r==null?void 0:r.frequenciesEveryPeriod)?Q(r==null?void 0:r.frequencies,r==null?void 0:r.frequenciesEveryPeriod,o.frequency)||Q(r==null?void 0:r.frequencies,r==null?void 0:r.frequenciesEveryPeriod,e==null?void 0:e.defaultFrequency)||ue(r==null?void 0:r.frequencies):o.frequency}:o),"mapExistingOptinsFromOfferResponse"),cu=n(({autoship:t={},autoship_by_default:e={},default_frequencies:r={},in_stock:o={},eligibility_groups:i={}},s,a,c,l)=>Object.keys(t).reduce((p,u)=>{var f;if(!s.some(h=>h.id===u)&&e[u]&&o[u]){if(t[u])return p.concat({id:u,frequency:lu({frequencyConfig:c,offerEl:a,default_frequencies:r,id:u})});if((f=i[u])!=null&&f.includes(hr.PREPAID)){let h=l?It(l):null;return p.concat({id:u,frequency:(h==null?void 0:h.sellingPlan)||Vn,prepaidShipments:(h==null?void 0:h.numberShipments)||null})}}return p},[]),"reduceNewOptinsFromOfferResponse"),lu=n(({frequencyConfig:t,offerEl:e,default_frequencies:r,id:o})=>{let{frequencies:i,frequenciesEveryPeriod:s}=t,{defaultFrequency:a}=e||{},c=r[o],l;return r[o]&&Tr(i,s)?l=Q(i,s,`${c.every}_${c.every_period}`)||ja(i,s,a)||ue(i):r[o]?l=`${c.every}_${c.every_period}`:l=ja(i,s,a)||"_",l},"getOptInDefaultFrequency"),pu=n((t,e)=>({...Ga(t,e.id,e.available),[e.id]:e.available}),"productOrVariantInStockReducer"),Ha=n((t,e)=>{let r=S(e.key);return{...t,[e.key]:t[r]||null}},"reduceProductCartLine"),uu=n((t={},e)=>{var r;if(me===e.type){let{payload:o}=e;return o.items.reduce(Ha,t)}if(D===e.type){let{payload:{product:o}}=e,i=Ai(o==null?void 0:o.selling_plan_groups),s=new Set((r=i.flatMap(a=>a.selling_plans.map(c=>c.id)))!=null?r:[]);return o.variants.reduce((a,c)=>{var u,f;let p=((f=(u=c==null?void 0:c.selling_plan_allocations)==null?void 0:u.filter(h=>s.has(h.selling_plan_id)))!=null?f:[]).length>0;return{...Ga(a,c.id,p),[c.id]:p}},t)}return fe===e.type?e.payload.isPreview!==!0?t:{...t,[e.payload.productId]:!0}:t},"autoshipEligible"),du=n((t={},e)=>{var r;if(me===e.type)return e.payload.items.reduce(Ha,t);if(D===e.type){let{payload:{product:o}}=e;return[o,...(r=o==null?void 0:o.variants)!=null?r:[]].reduce(pu,t)||t}return L===e.type&&e.payload.product===null?{...t}:fe===e.type?e.payload.isPreview!==!0?t:{...t,[e.payload.productId]:!0}:t},"inStock"),fu=n((t={},e)=>t,"offer");function hu(t){let e=xr(t.selling_plan_allocation.selling_plan),r={id:t.key,frequency:`${t.selling_plan_allocation.selling_plan.id}`};return e&&(r.prepaidShipments=e),r}n(hu,"getOptedInItem");var Vn="prepaid-replace-me",mu=n((t=[],e)=>{if(me===e.type){let r=e.payload;return t.filter(o=>!o.id.includes(":")).concat(r.items.reduce((o,i)=>i.selling_plan_allocation?[...o,hu(i)]:o,[]))}if(T===e.type){let r=e.payload,{offer:o={},frequencyConfig:i,prepaidSellingPlans:s}=r,a=au(t,o,i),c=cu(r,a,o,i,s);return[...a,...c]}if(D===e.type){let{product:r}=e.payload,o=At(r==null?void 0:r.selling_plan_groups),i=$n(r),s=o?_r(o):[],a=o?Er(o):[];return t.map(c=>{let l=i[c.id];if(o&&Ne(c.frequency))return{...c,frequency:Q(s,a,c.frequency)||ue(s)};if(c.frequency===Vn&&(l==null?void 0:l.length)>0){let{sellingPlan:p,numberShipments:u}=It(l);return{...c,frequency:p,prepaidShipments:u}}return c}).filter(c=>c.frequency!==Vn)}if(le===e.type){let{payload:r}=e,o=fo(t,e),[i,s]=nt(o,r.product);return s.concat({...i,...r.product,frequency:r.frequency})}return fo(t,e)},"optedin"),gu=n((t={},e)=>{var r;if(D===e.type){let{payload:{product:o}}=e;return((r=o.variants)==null?void 0:r.reduce((i,s)=>({...i,[s.id]:{value:s.price}}),t))||t}return t},"price"),yu=n((t={},e)=>t,"productOffer"),bu=n((t={},e)=>{if(D===e.type){let{payload:{product:r,currency:o}}=e,i=$a(r);return r.variants.reduce((s,a)=>{var c;return{...s,[a.id]:(c=a.selling_plan_allocations)==null?void 0:c.reduce((l,p)=>Mn(l,p,i,o),[])}},t)||t}if(me===e.type){let r=e.payload;return r.items.reduce((o,i)=>i.selling_plan_allocation?{...o,[i.key]:Mn([],i.selling_plan_allocation,[],r.currency)}:o,t)||t}return t},"productPlans"),Su=Jt({auth:On,authUrl:Tn,autoshipByDefault:qn,autoshipEligible:uu,config:Va,defaultFrequencies:Dn,eligibilityGroups:xn,environment:In,firstOrderPlaceDate:Rn,incentives:Pn,inStock:du,locale:Nn,merchantId:vn,nextUpcomingOrder:En,offer:fu,offerId:wn,experiments:Fr,optedin:mu,optedout:_n,previewStandardOffer:kn,previewUpsellOffer:Fn,price:gu,productOffer:yu,productPlans:bu,productToSubscribe:An,sessionId:Cn,templates:Un,prepaidShipmentsSelected:Ln});function jn(t,e){return window.og&&window.og.previewMode?ho(t,e):Su(t,e)}n(jn,"shopifyReducer");var Wa=ce(Ot()),Ja=ce(Qt());function Ba(t,e,r){let o=`[name="id"][value="${t}"]`,i=`form[action="/cart/add"] option[value="${t}"]`;if(!e)return;let s=document.querySelectorAll(o);s.length||(s=document.querySelectorAll(i)),[...s].forEach(a=>{let c=a.form,l=c==null?void 0:c.querySelector(`[name="${e}"]`);l||(l=document.createElement("input"),l.type="hidden",l.name=`attributes[${e}]`,c==null||c.appendChild(l)),l.value=r})}n(Ba,"updateTrackingInputs");function Gn(){return`og__${Math.ceil(new Date().getTime()/1e3)}`}n(Gn,"getTrackingKey");function _u(t,e){var u,f,h,w;if(!((u=t.payload.offer)==null?void 0:u.autoshipByDefault))return;let o=(f=t.payload.offer)==null?void 0:f.product.id,i=Gn(),s=((h=t.payload.offer)==null?void 0:h.location)||"",a=((w=t.payload.offer)==null?void 0:w.variationId)||"",c=yo(o,e),p=[o,C.toLowerCase(),s,c,a].join(",");Ba(o,i,p)}n(_u,"addDefaultToSubTracking");function Hn(t){return e=>r=>{switch(e(r),r.type){case C:case F:case q:{let o=r.payload.offer,i=Bn(r);o&&!o.isCart&&Ba(o.product.id,i[0],i[1]);break}case T:_u(r,t);break;default:}}}n(Hn,"shopifyTrackingMiddleware");var za,Ya,bo=((Ya=(za=window.Shopify)==null?void 0:za.routes)==null?void 0:Ya.root)||"/",Eu="/cart",xu=`${bo}cart.js`,Pu=`${bo}cart/change.js`,Ou=`${bo}cart/update.js`,vu=`${bo}products/`,Ka="__ordergroove_offer_id",Tu='[id^="shopify-section-"][id$=__cart-items], [id^="shopify-section-"][id$="__cart-footer"],#cart-live-region-text,#cart-icon-bubble',wu=n(t=>(0,Ja.debounce)(100,!1,function(e){let{id:r}=Object.fromEntries([...new FormData(e).entries()]);r?t.setAttribute("product",r):t.removeAttribute("product")}),"makeSyncProductId");async function Cu(){var r,o;let t=(o=(r=window.Shopify)==null?void 0:r.currency)==null?void 0:o.active;return t||(await zn()).currency}n(Cu,"getCurrency");async function Ru(t,e){let r=Au(e);if(r)try{let[i,s]=await Promise.all([Qa(r),Cu()]),a={product:i,offer:e,currency:s};t.dispatch({type:D,payload:a})}catch(i){console.warn("OG: Unable to fetch product details for PDP",i)}let o=e.closest("form");if(!o){let i=e.parentElement;for(;i&&(o=i.querySelector('form[action$="/cart/add"]'),!(o||i.tagName.toLowerCase()==="body"));)i=i.parentElement}if(o){let i=wu(e);o.addEventListener("change",()=>i(o)),new MutationObserver(a=>{a.every(c=>c.type==="attributes")?a.some(c=>c.target.name==="id")&&i(o):i(o)}).observe(o,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["value"]})}else console.info("no /cart/add form found for og-offer",e)}n(Ru,"setupPdp");async function zn(){return(await fetch(xu)).json()}n(zn,"getCart");function Au(t){return[()=>t==null?void 0:t.dataset.shopifyProductHandle,()=>{var e,r;return(((r=(e=document.querySelector('[href$=".oembed"]'))==null?void 0:e.getAttribute("href"))==null?void 0:r.match(/\/([^/]+)\.oembed$/))||[])[1]},()=>{var e,r;return(document.querySelector('meta[property="og:type"][content="product"]')&&((r=(e=document.querySelector('meta[property="og:url"][content]'))==null?void 0:e.getAttribute("content"))==null?void 0:r.match(/\/([^/]+)$/))||[])[1]},()=>{var e;return(e=[...document.querySelectorAll("[type$=json]")].map(r=>JSON.parse(r.textContent||"{}")).find(r=>r.handle&&r.price))==null?void 0:e.handle}].reduce((e,r)=>e||r(),"")}n(Au,"guessProductHandle");var Qa=(0,Wa.default)(async function(t){return(await fetch(`${vu}${t}.js`)).json()});async function Iu(t,e){let r=await zn(),{items:o}=r,i=r;t.dispatch({type:me,payload:i});let s=Number(e.product.id);s<=o.length&&e.setAttribute("product",o[s-1].key),(await Promise.all(Array.from(new Set(o.map(({handle:c})=>c))).map(Qa))).forEach(c=>{let l={product:c,offer:e,currency:r.currency};t.dispatch({type:D,payload:l})})}n(Iu,"setupCart");async function Nu(t,e){var s,a;let r=t.payload.offer,o=t.payload.frequency||yo(t.payload.product.id,e),i=Bn(t);if(!!(r!=null&&r.isCart))try{r.style.pointerEvents="none",r.style.opacity=".7";let c=Array.from(document.querySelectorAll(Tu)),l=t.payload.product.id,p=await zn(),u=(s=p==null?void 0:p.items)==null?void 0:s.findIndex(k=>k.key===l),f=p.items[u],h=f.quantity,w=S(l),x=Za(e),g={...Object.fromEntries([i]),...x?{[Ka]:x}:{}};if(Object.keys(g).length>0&&(await fetch(Ou,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({attributes:g})})).status!==200)throw new Error("Cart attributes not updated");let P=await fetch(Pu,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l,quantity:h,properties:f.properties,selling_plan:o||null,sections:c.map(k=>k.id.replace(/^shopify-section-/,""))})});if(P.status!==200)throw new Error("Cart not updated");let _=await P.json(),y=p.items.length===_.items.length?_.items[u].key:(a=_.items.find(k=>k.quantity===h&&k.product_id===w&&(!o&&!k.selling_plan_allocation||(k==null?void 0:k.selling_plan_allocation.selling_plan.id)===o)))==null?void 0:a.key;y&&(e.dispatch({type:Et,payload:{oldCartProductKey:l,newCartProductKey:y}}),r.setAttribute("product",y));let v=_;e.dispatch({type:me,payload:v});let Wt=new CustomEvent(yi,{bubbles:!0,cancelable:!0});if(r.dispatchEvent(Wt),Wt.defaultPrevented)return;let So=_.sections;Object.values(So).length?c.forEach(k=>{let Wn=k.id.replace(/^shopify-section-/,"");if(!(Wn in So))return;let nc=So[Wn],Jn=new DOMParser().parseFromString(nc.toString()||"","text/html").getElementById(k.id);Jn&&(k.innerHTML=Jn.innerHTML)}):window.location.pathname.startsWith(Eu)&&window.location.reload()}catch(c){console.log("OG Error updating cart",c)}finally{r.style.pointerEvents="auto",r.style.opacity="1"}}n(Nu,"synchronizeCartOptin");function Bn(t){var a,c;let e=t.payload.product.id;if(!e)return[];let r=Gn(),o=((a=t.payload.offer)==null?void 0:a.location)||"",i=((c=t.payload.offer)==null?void 0:c.variationId)||"",s=[e,t.type.toLowerCase(),o];switch(t.type){case L:case F:s.push(""),s.push(i);break;case C:case q:s.push(t.payload.frequency),s.push(i);break;default:return[]}return[r,s.join(",")]}n(Bn,"getTrackingEvent");function yo(t,e){var i;return(i=Pr({id:t})(e.getState()))==null?void 0:i.frequency}n(yo,"getSubscribedFrequency");function Za(t){let e=t.getState();return Mi(e)?e.offerId:null}n(Za,"getOfferIdAttribute");function ku(t,e){e!=null&&e.isCart||!(e!=null&&e.shouldEnableOffer)||[...document.querySelectorAll('form[action$="/cart/add"] [name=id]')].forEach(r=>{let o=r.value,i=yo(o,t);wr(r.form,"selling_plan",i),wr(r.form,"attributes[og__session]",t.getState().sessionId);let s=Za(t);s&&wr(r.form,`attributes[${Ka}]`,s)})}n(ku,"synchronizeSellingPlan");function Yn(t){return e=>r=>{var o;switch(r.type){case C:case F:case q:break;case L:(o=r.payload.offer)!=null&&o.isCart?Iu(t,r.payload.offer):Ru(t,r.payload.offer);break;default:}switch(e(r),r.type){case C:case F:case q:case le:Nu(r,t);case L:case T:case D:ku(t,r.payload.offer);break;default:}}}n(Yn,"shopifyMiddleware");var Fu="/apps/subscriptions/auth/",Xa="og_auth_begin",qu="og_auth_end",Du=n(t=>{let[e,r,o,i]=atob(t).split("|");return{id:e,signature:o,timestamp:r,email:i}},"parseIntegrationTempAuth");async function ec({store:t}){var i;let[e]=Do(),r=Rt(),o=r!=null&&r.dataset.customer?Du(r.dataset.customer):(i=window.ogShopifyConfig)==null?void 0:i.customer;if(o){let s=await Lu(o);if(s){let[a,c,l]=s.split("|");t.dispatch(Ft(e,a,Number(c),l))}}else ji("og_auth")}n(ec,"authorizeShopifyCustomer");async function Uu(t){try{let r=await(await fetch(`${Fu}?customer=${t.id}&customer_signature=${t.signature}&customer_timestamp=${t.timestamp}`)).text(),o=r.lastIndexOf(Xa);if(o<0)throw"Invalid response from OG auth endpoint";return JSON.parse(r.substring(o+Xa.length,r.lastIndexOf(qu)))}catch(e){console.error(e)}}n(Uu,"fetchOGSignature");async function Lu(t){let e=Gi("og_auth");if(e)return e;let{customerId:r,timestamp:o,signature:i}=await Uu(t);if(!r)return"";let s=new Date,a=btoa(i);s.setTime(s.getTime()+2*60*60*1e3);let c=`${r}|${o}|${a};expires=${s.toUTCString()}`;return document.cookie=`og_auth=${c};secure;path=/`,c}n(Lu,"getOrCreateAuthCookie");var tc,oc=Os(...(tc=R)!=null&&tc.shopify_selling_plans?[jn,Yn]:[ho],R.shopify&&Hn),O=Sn(oc),Mu=O.isReady,$u=O.addOptinChangedCallback,Vu=O.addTemplate,ju=O.clear,Gu=O.config,Hu=O.disableOptinChangedCallbacks,Bu=O.getOptins,zu=O.getProductsForPurchasePost,Yu=O.initialize,Wu=O.previewMode,Ju=O.register,Ku=O.resolveSettings,Qu=O.setAuthUrl,Zu=O.setEnvironment,Xu=O.setLocale,ed=O.setMerchantId,td=O.setPublicPath,rd=O.setTemplates,od=O.setupCart,nd=O.setupProduct,id=O.setupProducts,sd=n(()=>Vi(O),"autoInit");var ad=O.initialize,rc;(rc=R)!=null&&rc.shopify_selling_plans&&vr(()=>ec(O));return pc(cd);})();
; return lib; });
//# sourceMappingURL=offers.js.map

var og=window.og||{};og.offers=og.offers||"undefined"!=typeof module&&module.exports,og.offers.initialize("0222bf1ac66f40929f2a1c52cfe101ad","prod","",{currency_code:"USD",multicurrency_enabled:!1}).setTemplates([{id:"fe649254",markup:'<og-when test="regularEligible">\n    <div class="og-container">\n      <div>\n        <og-optout-button>\n          <span class="check"></span>\n          One time purchase\n        </og-optout-button>        \n        <og-price regular></og-price>\n      </div>\n      <div>\n        <og-optin-button>\n          <span class="check"></span>\n          Subscribe to save <og-incentive-text from="DiscountPercent"></og-incentive-text>\n        </og-optin-button>        \n        <og-price regular class="italic line-through"></og-price>\n        <og-price subscription></og-price>\n          \n        <og-tooltip placement="bottom-right" >\n          <span slot="trigger">\n            <og-tooltip placement="bottom-right" >\n              <svg slot="trigger" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n                width="20" height="20"\n                viewBox="0 0 32 32"\n                style=" fill: #000000;"\n              >\n                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"></path>\n              </svg>\n              <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Promotion subject to change.</span>\n            </og-tooltip>\n          </span>\n          <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Promotion subject to change.</span>\n        </og-tooltip>\n      </div>\n      <div class="select-container">\n        <og-text key="offerEveryLabel">\n          <span class="select-label">Deliver Every</span>\n        </og-text>\n        <og-select-frequency default-text="(Most Popular)">\n          <option value="1_3" selected="selected">\n            1 month\n          </option>\n          <option value="2_3">\n            2 months\n          </option>\n          <option value="3_3">\n            3 months\n          </option>\n        </og-select-frequency>\n      </div>\n    </div>\n  </og-when>\n  <og-when test="upsellEligible">\n    <og-when test="!upcomingOrderContainsProduct">\n      Add to upcoming subscription order and receive 20% off\n      <og-upsell-button>\n        <button type="button">\n          Add to Next Order on \n          <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}"></og-nextupcoming-order>\n        </button>\n      </og-upsell-button>\n  \n      <og-upsell-modal>\n        Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Read the FAQ here. Promotion subject to change.\n        <br />\n        <og-when test="subscriptionEligible">\n          <og-optout-button>\n            Get one-time\n          </og-optout-button>\n          <br />\n          <og-optin-button>\n            Subscribe and get 15% off on every order\n          </og-optin-button>\n          Deliver Every\n          <og-select-frequency default-text="(Most Popular)">\n            <option value="1_3" selected="selected">\n              1 month\n            </option>\n            <option value="2_3" >\n              2 months\n            </option>\n            <option value="3_3" >\n              3 months\n            </option>\n          </og-select-frequency>\n        </og-when>\n        <og-when test="!subscriptionEligible">\n          <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">              \n        </og-when>\n        <br />\n        <span slot="confirm">\n          <button type="button">Add</button>\n        </span>\n        <span slot="cancel">\n          <button type="button"></button>\n        </span>\n      </og-upsell-modal>\n    </og-when>\n  \n    <og-when test="upcomingOrderContainsProduct">\n        <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\n        </og-nextupcoming-order>\n    </og-when>\n  </og-when>',selector:'[location="cart"]'},{id:"562be77f",markup:'<og-when test="regularEligible">\n    <div class="og-container">\n        <div class="og-optin-button-container">\n            <div class="og-subscription-text">\n                <og-optin-button>\n                \x3c!--<span class="check"></span> --\x3e\n                subscribe & <div class="og-save-discount">save 15%</div>\n                </og-optin-button>\n                \x3c!-- <og-price regular class="italic line-through"></og-price> --\x3e\n                <og-price subscription></og-price>\n            </div>\n            <div class="select-container">\n                <og-text key="offerEveryLabel">\n                delivery duration\n                </og-text>\n                <og-select-frequency default-text="(recommended)">\n                <option value="3_3" selected="selected">\n                    3 month\n                </option>\n                <option value="4_3">\n                    4 months\n                </option>\n                <option value="6_3">\n                    6 months\n                </option>\n                </og-select-frequency>\n            </div>\n        </div>\n        \x3c!--<og-tooltip placement="bottom-right" >\n          <span slot="trigger">\n            <og-tooltip placement="bottom-right" >\n              <svg slot="trigger" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n                width="20" height="20"\n                viewBox="0 0 32 32"\n                style=" fill: #000000;"\n              >\n                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"></path>\n              </svg>\n              <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Promotion subject to change.</span>\n            </og-tooltip> \n          </span>\n          <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Promotion subject to change.</span>\n        </og-tooltip> --\x3e\n        <div class="og-optout-button-container">\n            <og-optout-button>\n              \x3c!-- <span class="check"></span> --\x3e\n              one-time purchase\n            </og-optout-button>\n            <og-price regular></og-price>\n        </div>\n    </div>\n  </og-when>\n  <og-when test="upsellEligible">\n    <og-when test="!upcomingOrderContainsProduct">\n      Add to upcoming subscription order and receive 20% off\n      <og-upsell-button>\n        <button type="button">\n          Add to Next Order on \n          <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}"></og-nextupcoming-order>\n        </button>\n      </og-upsell-button>\n  \n      <og-upsell-modal>\n        Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Read the FAQ here. Promotion subject to change.\n        <br />\n        <og-when test="subscriptionEligible">\n          <og-optout-button>\n            Get one-time\n          </og-optout-button>\n          <br />\n          <og-optin-button>\n            Subscribe and get 15% off on every order\n          </og-optin-button>\n          Deliver Every\n          <og-select-frequency default-text="(recommended)">\n            <option value="3_3" selected="selected">\n              3 month\n            </option>\n            <option value="4_3" >\n              4 months\n            </option>\n            <option value="6_3" >\n              6 months\n            </option>\n          </og-select-frequency>\n        </og-when>\n        <og-when test="!subscriptionEligible">\n          <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">              \n        </og-when>\n        <br />\n        <span slot="confirm">\n          <button type="button">Add</button>\n        </span>\n        <span slot="cancel">\n          <button type="button"></button>\n        </span>\n      </og-upsell-modal>\n    </og-when>\n  \n    <og-when test="upcomingOrderContainsProduct">\n        <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\n        </og-nextupcoming-order>\n    </og-when>\n  </og-when>',selector:'[location="pdp"]'},{id:"3753bb00",markup:'<og-when test="subscribed">\n    Deliver Every: \n    <og-frequency-status></og-frequency-status>\n</og-when>',selector:'[location="minibag"]'},{id:"633b6591",markup:'<og-when test="regularEligible">\n    <div class="og-container">\n        <div class="og-optin-button-container">\n            <div class="og-subscription-text">\n                <og-optin-button>\n                \x3c!--<span class="check"></span> --\x3e\n                subscribe & <div class="og-save-discount">save 15% + FREE brush*</div>\n                <div class="gwp-subline">*delivered with 2nd order</div>\n                </og-optin-button>\n                \x3c!-- <og-price regular class="italic line-through"></og-price> --\x3e\n                <og-price subscription></og-price>\n            </div>\n            <div class="select-container">\n                <og-text key="offerEveryLabel">\n                delivery duration\n                </og-text>\n                <og-select-frequency default-text="(recommended)">\n                <option value="1_3">\n                    1 month\n                </option>\n                <option value="2_3">\n                    2 months\n                </option>\n                <option value="3_3" selected="selected">\n                    3 months\n                </option>\n                </og-select-frequency>\n            </div>\n        </div>\n        \x3c!--<og-tooltip placement="bottom-right" >\n          <span slot="trigger">\n            <og-tooltip placement="bottom-right" >\n              <svg slot="trigger" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n                width="20" height="20"\n                viewBox="0 0 32 32"\n                style=" fill: #000000;"\n              >\n                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"></path>\n              </svg>\n              <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Promotion subject to change.</span>\n            </og-tooltip> \n          </span>\n          <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Promotion subject to change.</span>\n        </og-tooltip> --\x3e\n        <div class="og-optout-button-container">\n            <og-optout-button>\n              \x3c!-- <span class="check"></span> --\x3e\n              one-time purchase\n            </og-optout-button>\n            <og-price regular></og-price>\n        </div>\n    </div>\n  </og-when>\n  <og-when test="upsellEligible">\n    <og-when test="!upcomingOrderContainsProduct">\n      Add to upcoming subscription order and receive 20% off\n      <og-upsell-button>\n        <button type="button">\n          Add to Next Order on \n          <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}"></og-nextupcoming-order>\n        </button>\n      </og-upsell-button>\n  \n      <og-upsell-modal>\n        Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Read the FAQ here. Promotion subject to change.\n        <br />\n        <og-when test="subscriptionEligible">\n          <og-optout-button>\n            Get one-time\n          </og-optout-button>\n          <br />\n          <og-optin-button>\n            Subscribe and get 15% off on every order\n          </og-optin-button>\n          Deliver Every\n          <og-select-frequency default-text="(recommended)">\n            <option value="1_3" selected="selected">\n              1 month\n            </option>\n            <option value="2_3" >\n              2 months\n            </option>\n            <option value="3_3" >\n              3 months\n            </option>\n          </og-select-frequency>\n        </og-when>\n        <og-when test="!subscriptionEligible">\n          <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">              \n        </og-when>\n        <br />\n        <span slot="confirm">\n          <button type="button">Add</button>\n        </span>\n        <span slot="cancel">\n          <button type="button"></button>\n        </span>\n      </og-upsell-modal>\n    </og-when>\n  \n    <og-when test="upcomingOrderContainsProduct">\n        <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\n        </og-nextupcoming-order>\n    </og-when>\n  </og-when>',selector:'[location="gwp-pdp"]'},{id:"711cf873",markup:'<og-when test="regularEligible">\n    <div class="og-regular-offer-content">\n        <div>\n            <og-optout-button>\n                Deliver one-time only\n            </og-optout-button>            <og-price regular></og-price>\n        </div>\n        <div>\n            <og-optin-button>\n                subscribe &amp; save\n            </og-optin-button>            <og-price regular class="italic line-through"></og-price>\n            <og-price subscription></og-price>\n            \n            <og-tooltip placement="bottom" >\n                <span slot="trigger"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n    width="20" height="20"\n    viewBox="0 0 32 32"\n    style=" fill: #000000;"\n>\n    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"></path>\n</svg></span>\n                <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Promotion subject to change.</span>\n            </og-tooltip>\n        </div>\n    </div>\n    <div style="margin-left: 2.2em">\n        <div class="og-offer-incentive">\n        \t<svg\n        \theight="1em"\n        \twidth="1em"\n        \tviewBox="0 0 24 24"\n        \tfill="none"\n        \txmlns="http://www.w3.org/2000/svg"\n        \t>\n        \t<path\n        \t\td="M20,8 C18.5343681,5.03213345 15.4860999,3 11.9637942,3 C7.01333514,3 3,7.02954545 3,12 M4,16 C5.4656319,18.9678666 8.51390007,21 12.0362058,21 C16.9866649,21 21,16.9704545 21,12 M9,16 L3,16 L3,22 M21,2 L21,8 L15,8"\n        \t\tstroke="currentColor"\n        \t\tstroke-width="2"\n        \t></path>\n        \t</svg>\n        \tSave <og-incentive-text from="DiscountPercent"></og-incentive-text> when you subscribe\n        </div>        <og-text key="offerEveryLabel">\n            Deliver Every\n        </og-text>\n        <og-select-frequency default-text="(Most Popular)">\n          <option value="3_3" selected="selected"\n            >\n            3 months\n          </option>\n          <option value="4_3" >\n            4 months\n          </option>\n          <option value="6_3" >\n            6 months\n          </option>\n        </og-select-frequency>\n    </div>\n</og-when>\n<og-when test="upsellEligible">\n    <og-when test="!upcomingOrderContainsProduct">\n        Add to upcoming subscription order and receive 20% off\n        <og-upsell-button>\n            <button type="button">\n                Add to Next Order on \n                <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\n                    </og-nextupcoming-order>\n            </button>\n        </og-upsell-button>\n\n        <og-upsell-modal>\n            Subscribe to this product and have it conveniently delivered to you at the frequency you choose! Read the FAQ here. Promotion subject to change.\n            <br />\n            <og-when test="subscriptionEligible">\n              <og-optout-button>\n                  Get one-time\n              </og-optout-button>\n              <br />\n              <og-optin-button>\n                  Subscribe and get 10% off on every order\n              </og-optin-button>\n              Deliver Every\n              <og-select-frequency default-text="(Most Popular)">\n                <option value="3_3" selected="selected"\n                  >\n                  3 months\n                </option>\n                <option value="4_3" >\n                  4 months\n                </option>\n                <option value="6_3" >\n                  6 months\n                </option>\n              </og-select-frequency>\n            </og-when>\n            <og-when test="!subscriptionEligible">\n              <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">              \n            </og-when>\n            <br />\n            <span slot="confirm">\n                <button type="button">Add</button>\n            </span>\n            <span slot="cancel">\n                <button type="button"></button>\n            </span>\n        </og-upsell-modal>\n    </og-when>\n\n    <og-when test="upcomingOrderContainsProduct">\n       <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\n        </og-nextupcoming-order>\n    </og-when>\n</og-when>',selector:"og-offer"}]).setPublicPath("//static.ordergroove.com/@ordergroove/offers/2.48.1/dist/"),function(n){const o=n.createElement("style");o.type="text/css",o.appendChild(n.createTextNode('[location="cart"] {\n  --og-global-family: inherit;\n  --og-global-size: inherit;\n  --og-global-color: inherit;\n  --og-wrapper-padding: 10px 0;\n  --og-tooltip-placement: bottom-right;\n  --og-upsell-family: Arial, Helvetica, sans-serif;\n  --og-upsell-size: 13px;\n  --og-upsell-color: rgba(99,119,219,1);\n  --og-radio-width: 25px;\n  --og-radio-height: 25px;\n  --og-radio-margin: 0 5px 0 0;\n  --og-radio-border: 0px solid #f00;\n  --og-select-padding: 1.0em 2.8em 0.4em 0.5em;\n  --og-select-bg-color: transparent;\n  --og-select-border: none;\n  --og-select-font-size: 12px;\n  --og-tooltip-family: inherit;\n  --og-tooltip-size: inherit;\n  --og-tooltip-color: inherit;\n  --og-tooltip-background: rgba(255,255,255,1);\n  --og-tooltip-border: 1px solid #cdcdcd;\n  --og-tooltip-border-radius: 5px;\n  --og-tooltip-padding: 1em;\n  --og-tooltip-text-align: left;\n  --og-tooltip-placement: bottom;\n  --og-tooltip-box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n}\n\n[location="cart"] .og-container > div:nth-of-type(3) {\n  display:none;\n}\n\n/* For whatever reasons, these have to be defined in the site CSS */\n/* Hide the Subscription details until selected */\n[location="cart"] og-offer[subscribed] > og-when > .og-container > div:nth-of-type(3) {\n  display:block;\n}\n/* End Site CSS */\n\n[location="cart"] og-optout-button,\n[location="cart"] og-optin-button {\n  font-family: Roboto, Helvetica, sans-serif;\n  font-size: 16px;\n  line-height:28px;\n}\n\n[location="cart"] og-optin-button .btn,\n[location="cart"] og-optin-button button {\n  transform: scale(2);\n}\n\n[location="cart"] og-optin-button {\n  margin-top: 0.5em;\n}\n\n/* I don\'t think this is something we need */\n[location="cart"] og-optout-button::part(button):after {\n  border:none;\n  background:#f00;\n}\n\n[location="cart"] .og-offer-incentive {\n  font-size: var(--og-secondary-font-size, 12px);\n}\n\n/* BEGIN Checkmark Styles */\n/* Create the white checkmark */\n[location="cart"] og-optout-button span, [location="cart"] og-optin-button[subscribed] span {\n  width: 4px;\n  height: 9px;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  transform: rotate(45deg);\n  position: absolute;\n  margin-left:-24px;\n  margin-top:7px;\n  display:inline-block;\n}\n/* Hide the checkmark when not active */\n[location="cart"] og-optout-button[subscribed] span, [location="cart"] og-optin-button span {\n  display:none;\n}\n/* END Checkmark Styles */\n\n/* Begin select and label styles */\n[location="cart"] .og-container .select-container {\n  margin-top:0.5em;\n}\n\n[location="cart"] .og-container .select-container og-text {\n  position:absolute;\n  color:#69646C;\n  font-weight:normal;\n  padding:0px;\n  margin:0.3em 0 0 0.8em;\n}\n[location="cart"] .og-container .select-container og-select-frequency {\n  border:1px solid;\n  border-radius:5px;\n}\n\n[location="cart"] og-text[key="offerEveryLabel"] {\n  font-weight: 700;\n  font-family: var(--og-global-family, Roboto, sans-serif);\n  color: var(--og-global-color, #090909);\n  font-size: var(--og-select-font-size, 12px);\n  margin: 1em 0 0.3em;\n  display: block;\n}\n/* End select and label styles */\n\n[location="cart"] og-tooltip {\n  transform: translateY(3px);\n  font-size:0.8em;\n  line-height: 16px;\n}\n\n/* General Price and text stylings */\n[location="cart"] og-price[regular] {\n  font-size: 14px;\n  opacity: 67.5%;\n}\n\n[location="cart"] og-price[subscription] {\n  color: var(--og-global-color, #090909);\n  font-weight: 700;\n}\n\n[location="cart"] .italic {\n  font-style: italic;\n}\n\n[location="cart"] .line-through {\n  text-decoration: line-through;\n}\n[location="pdp"] {\n    --og-global-family: inherit;\n    --og-global-size: inherit;\n    --og-global-color: inherit;\n    --og-wrapper-padding: 10px 0;\n    --og-tooltip-placement: bottom-right;\n    --og-upsell-family: Arial, Helvetica, sans-serif;\n    --og-upsell-size: 13px;\n    --og-upsell-color: rgba(99,119,219,1);\n    --og-radio-width: 20px;\n    --og-radio-height: 20px;\n    --og-radio-margin: 0 5px 0 0;\n    --og-radio-border: 0px solid #f00;\n    --og-select-padding: 24px 16px 8px;\n    --og-select-bg-color: transparent;\n    --og-select-border: none;\n    --og-select-font-size: 12px;\n    --og-tooltip-family: inherit;\n    --og-tooltip-size: inherit;\n    --og-tooltip-color: inherit;\n    --og-tooltip-background: rgba(255,255,255,1);\n    --og-tooltip-border: 1px solid #cdcdcd;\n    --og-tooltip-border-radius: 5px;\n    --og-tooltip-padding: 1em;\n    --og-tooltip-text-align: left;\n    --og-tooltip-placement: bottom;\n    --og-tooltip-box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n    --og-select-width: 100%: \n}\n  \n/* For whatever reasons, these have to be defined in the site CSS */\n/*.og-container {*/\n/*    border-radius:5px;*/\n/*    padding:16px 16px 16px 16px;*/\n/*}*/\n\n[location="pdp"] og-select {\n  width: 100%;\n}\n  \n[location="pdp"] .og-container > div:first-of-type {\n    padding-bottom: 10px;\n}\n  \n[location="pdp"] .og-container > div:nth-of-type(3) {\n    display:none;\n}\n  \n/* For whatever reasons, these have to be defined in the site CSS */\n/* Hide the Subscription details until selected */\n[location="pdp"] og-offer[subscribed] > og-when > .og-container > div:nth-of-type(3) {\n    display:block;\n}\n/* End Site CSS */\n  \n/*og-optout-button,*/\n/*og-optin-button {*/\n/*    font-family: Roboto, Helvetica, sans-serif;*/\n/*    font-size: 14px;*/\n/*    line-height:20px;*/\n/*}*/\n\n[location="pdp"] og-optin-button .btn,\n[location="pdp"] og-optin-button button {\n    transform: scale(2);\n}\n  \n[location="pdp"] og-optin-button {\n    margin-top: 0.5em;\n    color: #4A444E;\n}\n\n[location="pdp"] .og-save-discount {\n  display: inline-flex;\n  background-color: #fedb93;\n  border-radius: 10px;\n  padding: 0 1rem 0.5rem;\n  width: max-content;\n  height: 20px;\n  align-items: center;\n  justify-content: space-around;\n}\n\n[location="pdp"] og-optin-button,\n[location="pdp"] og-price[subscription] {\n  font-family: var(--font-medium-family) !important;\n}\n\n[location="pdp"] og-optout-button {\n   color: #4A444E;\n}\n  \n/* I don\'t think this is something we need */\n/* og-optout-button::part(button):after {\n    border:none;\n    background:#f00;\n} */\n\n[location="pdp"] .og-offer-incentive {\n    font-size: var(--og-secondary-font-size, 12px);\n}\n\n/* BEGIN Checkmark Styles */\n/* Create the white checkmark */\n[location="pdp"] og-optout-button span, [location="pdp"] og-optin-button[subscribed] span {\n    width: 4px;\n    height: 9px;\n    border-right: 2px solid #fff;\n    border-bottom: 2px solid #fff;\n    transform: rotate(45deg);\n    position: absolute;\n    margin-left:-24px;\n    margin-top:7px;\n    display:inline-block;\n}\n/* Hide the checkmark when not active */\n[location="pdp"] og-optout-button[subscribed] span, [location="pdp"] og-optin-button span {\n    display:none;\n}\n/* END Checkmark Styles */\n\n/* Begin select and label styles */\n[location="pdp"] .og-container .select-container {\n    margin-top:0.5em;\n  }\n  \n[location="pdp"] .og-container .select-container og-text {\nposition:absolute;\ncolor:#69646C;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 12px;\npadding:0px;\nmargin: 8px 0 0 16px;\n}\n\n[location="pdp"] .og-container .select-container og-select-frequency {\nborder-radius:2000px;\nborder: 1px solid #4A444E;\nwidth: 327px;\nheight: 50px;\n}\n\n[location="pdp"] .og-save-discount {\n  display: inline-block;\n}\n\n[location="pdp"] og-text[key="offerEveryLabel"] {\nfont-weight: 700;\nfont-family: var(--og-global-family, Roboto, sans-serif);\ncolor: var(--og-global-color, #090909);\nfont-size: var(--og-select-font-size, 12px);\nmargin: 1em 0 0.3em;\nline-height:10px;\ndisplay: block;\n}\n/* End select and label styles */\n\n[location="pdp"] og-tooltip {\n    transform: translateY(3px);\n    font-size:0.8em;\n    line-height: 16px;\n}\n\n/* General Price and text stylings */\n[location="pdp"] og-price[regular],\n[location="pdp"] og-price[subscription] {\n    font-size: 14px;\n    line-height: 20px;\n}\n\n[location="pdp"] og-price[subscription] {\n  font-weight: 500;\n}\n\n[location="pdp"] og-offer og-price[regular] {\n  opacity: 1 !important;\n}\n\n[location="pdp"] .og-subscription-text,\n[location="pdp"] .og-optout-button-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n[location="pdp"] og-price[regular] {\n  color: #69646C;\n}\n\n[location="pdp"] og-price[subscription] {\n  color: #4A444E;\n  font-weight: 500;\n}\n\n@media only screen and (min-width: 1024px) {\n  [location="pdp"] og-price[regular],\n  [location="pdp"] og-price[subscription] {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}\n\n[location="pdp"] .italic {\n    font-style: italic;\n}\n\n[location="pdp"] .line-through {\n    text-decoration: line-through;\n}\n[location="minibag"] {\n--og-global-family: inherit;\n--og-global-size: inherit;\n--og-global-color: inherit;\n--og-wrapper-padding: 10px 0;\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 13px;\n--og-tooltip-color: #000;\n--og-upsell-color: #c3e7c3;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: #298266;\n--og-tooltip-background: rgba(255,255,255,1);\n--og-tooltip-placement: bottom;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n}\n[location="gwp-pdp"] {\n    --og-global-family: inherit;\n    --og-global-size: inherit;\n    --og-global-color: inherit;\n    --og-wrapper-padding: 10px 0;\n    --og-tooltip-placement: bottom-right;\n    --og-upsell-family: Arial, Helvetica, sans-serif;\n    --og-upsell-size: 13px;\n    --og-upsell-color: rgba(99,119,219,1);\n    --og-radio-width: 20px;\n    --og-radio-height: 20px;\n    --og-radio-margin: 0 5px 0 0;\n    --og-radio-border: 0px solid #f00;\n    --og-select-padding: 24px 16px 8px;\n    --og-select-bg-color: transparent;\n    --og-select-border: none;\n    --og-select-font-size: 12px;\n    --og-tooltip-family: inherit;\n    --og-tooltip-size: inherit;\n    --og-tooltip-color: inherit;\n    --og-tooltip-background: rgba(255,255,255,1);\n    --og-tooltip-border: 1px solid #cdcdcd;\n    --og-tooltip-border-radius: 5px;\n    --og-tooltip-padding: 1em;\n    --og-tooltip-text-align: left;\n    --og-tooltip-placement: bottom;\n    --og-tooltip-box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n}\n  \n/* For whatever reasons, these have to be defined in the site CSS */\n/*.og-container {*/\n/*    border-radius:5px;*/\n/*    padding:16px 16px 16px 16px;*/\n/*}*/\n  \n[location="gwp-pdp"] .og-container > div:first-of-type {\n    padding-bottom: 10px;\n}\n  \n[location="gwp-pdp"] .og-container > div:nth-of-type(3) {\n    display:none;\n}\n\n[location="gwp-pdp"] .gwp-subline {\n\tfont-family: \'Helvetica-Neue\';\n\tfont-size: 1rem;\n}\n  \n/* For whatever reasons, these have to be defined in the site CSS */\n/* Hide the Subscription details until selected */\n[location="gwp-pdp"] og-offer[subscribed] > og-when > .og-container > div:nth-of-type(3) {\n    display:block;\n}\n/* End Site CSS */\n  \n/*og-optout-button,*/\n/*og-optin-button {*/\n/*    font-family: Roboto, Helvetica, sans-serif;*/\n/*    font-size: 14px;*/\n/*    line-height:20px;*/\n/*}*/\n\n[location="gwp-pdp"] og-optin-button .btn,\n[location="gwp-pdp"] og-optin-button button {\n    transform: scale(2);\n}\n  \n[location="gwp-pdp"] og-optin-button {\n    margin-top: 0.5em;\n    color: #4A444E;\n}\n\n[location="gwp-pdp"] .og-save-discount {\n  display: inline-flex;\n  background-color: #fedb93;\n  border-radius: 10px;\n  padding: 0 1rem 0.5rem;\n  width: max-content;\n  height: 20px;\n  align-items: center;\n  justify-content: space-around;\n}\n\n[location="gwp-pdp"] og-optin-button,\n[location="gwp-pdp"] og-price[subscription] {\n  font-family: var(--font-medium-family) !important;\n}\n\n[location="gwp-pdp"] og-optout-button {\n   color: #4A444E;\n}\n  \n/* I don\'t think this is something we need */\n/* og-optout-button::part(button):after {\n    border:none;\n    background:#f00;\n} */\n\n[location="gwp-pdp"] .og-offer-incentive {\n    font-size: var(--og-secondary-font-size, 12px);\n}\n\n/* BEGIN Checkmark Styles */\n/* Create the white checkmark */\n[location="gwp-pdp"] og-optout-button span, [location="gwp-pdp"] og-optin-button[subscribed] span {\n    width: 4px;\n    height: 9px;\n    border-right: 2px solid #fff;\n    border-bottom: 2px solid #fff;\n    transform: rotate(45deg);\n    position: absolute;\n    margin-left:-24px;\n    margin-top:7px;\n    display:inline-block;\n}\n/* Hide the checkmark when not active */\n[location="gwp-pdp"] og-optout-button[subscribed] span, [location="gwp-pdp"] og-optin-button span {\n    display:none;\n}\n/* END Checkmark Styles */\n\n/* Begin select and label styles */\n[location="gwp-pdp"] .og-container .select-container {\n    margin-top:0.5em;\n  }\n  \n[location="gwp-pdp"] .og-container .select-container og-text {\nposition:absolute;\ncolor:#69646C;\nfont-weight: 400;\nfont-size: 12px;\nline-height: 12px;\npadding:0px;\nmargin: 8px 0 0 16px;\n}\n\n[location="gwp-pdp"] .og-container .select-container og-select-frequency {\nborder-radius:2000px;\nborder: 1px solid #4A444E;\nwidth: 327px;\nheight: 50px;\n}\n\n[location="gwp-pdp"] .og-save-discount {\n  display: inline-block;\n}\n\n[location="gwp-pdp"] og-text[key="offerEveryLabel"] {\nfont-weight: 700;\nfont-family: var(--og-global-family, Roboto, sans-serif);\ncolor: var(--og-global-color, #090909);\nfont-size: var(--og-select-font-size, 12px);\nmargin: 1em 0 0.3em;\nline-height:10px;\ndisplay: block;\n}\n/* End select and label styles */\n\n[location="gwp-pdp"] og-tooltip {\n    transform: translateY(3px);\n    font-size:0.8em;\n    line-height: 16px;\n}\n\n/* General Price and text stylings */\n[location="gwp-pdp"] og-price[regular],\n[location="gwp-pdp"] og-price[subscription] {\n    font-size: 14px;\n    line-height: 20px;\n}\n\n[location="gwp-pdp"] og-price[subscription] {\n  font-weight: 500;\n}\n\n[location="gwp-pdp"] og-offer og-price[regular] {\n  opacity: 1 !important;\n}\n\n[location="gwp-pdp"] .og-subscription-text,\n[location="gwp-pdp"] .og-optout-button-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n[location="gwp-pdp"] og-price[regular] {\n  color: #69646C;\n}\n\n[location="gwp-pdp"] og-price[subscription] {\n  color: #4A444E;\n  font-weight: 500;\n}\n\n@media only screen and (min-width: 1024px) {\n  [location="gwp-pdp"] og-price[regular],\n  [location="gwp-pdp"] og-price[subscription] {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}\n\n[location="gwp-pdp"] .italic {\n    font-style: italic;\n}\n\n[location="gwp-pdp"] .line-through {\n    text-decoration: line-through;\n}\nog-offer {\n  --og-radio-width: 22px;\n  --og-radio-height: 22px;\n  --og-radio-margin: 0 5px 0 0;\n  --og-select-padding: 0.4em 2.8em 0.4em 0.5em;\n  --og-select-bg-color: transparent;\n  --og-select-border: 1px solid #090909;\n  --og-select-font-size: 12px;\n  --og-tooltip-family: Roboto, Helvetica, sans-serif;\n  --og-tooltip-size: 12px;\n  --og-tooltip-color: #090909;\n  --og-tooltip-background: #ffffff;\n  --og-tooltip-border: 1px solid #cdcdcd;\n  --og-tooltip-border-radius: 5px;\n  --og-tooltip-padding: 1em;\n  --og-tooltip-text-align: center;\n  --og-tooltip-placement: bottom;\n  --og-tooltip-box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n}\n\nog-offer og-optout-button,\nog-offer og-optin-button {\n  font-family: Roboto, Helvetica, sans-serif;\n  font-size: 16px;\n}\n\nog-offer og-optin-button {\n  font-weight: 700;\n}\n\nog-offer og-optin-button .btn,\nog-offer og-optin-button button {\n  transform: scale(2);\n}\n\nog-offer og-tooltip {\n  vertical-align: middle;\n}\n\nog-offer .og-offer-incentive {\n  font-size: var(--og-secondary-font-size, 12px);\n}\n\nog-offer .og-offer-incentive svg {\n  transform: translateY(0.125em);\n}\n\nog-offer og-text[key=\'offerEveryLabel\'] {\n  font-weight: 700;\n  font-family: var(--og-global-family, Roboto, sans-serif);\n  color: var(--og-global-color, #090909);\n  font-size: var(--og-select-font-size, 12px);\n  margin: 1em 0 0.3em;\n  display: block;\n}\n\nog-offer og-optin-button {\n  font-weight: 700;\n}\n\nog-offer og-select-frequency {\n  border-radius: 0;\n}\n\nog-offer og-price {\n  display: inline-flex;\n}\n\nog-offer og-price[regular] {\n  font-size: 14px;\n  opacity: 67.5%;\n}\n\nog-offer og-price[subscription] {\n  color: var(--og-global-color, #090909);\n  font-weight: 700;\n}\n\nog-offer .italic {\n  font-style: italic;\n}\n\nog-offer .line-through {\n  text-decoration: line-through;\n}\n\nog-offer .og-regular-offer-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n\nog-offer .og-regular-offer-content > div {\n  line-height: 1em;\n}\n\nog-offer {\n--og-global-family: inherit;\n--og-global-size: inherit;\n--og-global-color: inherit;\n--og-wrapper-padding: 10px 0;\n--og-tooltip-family: inherit;\n--og-tooltip-size: inherit;\n--og-tooltip-color: inherit;\n--og-tooltip-background: rgba(255,255,255,1);\n--og-tooltip-placement: bottom;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n}')),n.head.appendChild(o)}(document),(window.location.hash.includes("og_quick_action=")||window.location.search.includes("og_quick_action="))&&function(n){const o=n.createElement("script");o.type="text/javascript",o.src="//static.ordergroove.com/0222bf1ac66f40929f2a1c52cfe101ad/oca.js",n.head.appendChild(o)}(document);return module.exports;});
//# sourceMappingURL=offers.js.map?v=2.48.1