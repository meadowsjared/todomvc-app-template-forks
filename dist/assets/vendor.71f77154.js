var Bu=Object.defineProperty,Uu=Object.defineProperties;var Hu=Object.getOwnPropertyDescriptors;var xo=Object.getOwnPropertySymbols;var Wu=Object.prototype.hasOwnProperty,$u=Object.prototype.propertyIsEnumerable;var Ro=(t,e,n)=>e in t?Bu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ao=(t,e)=>{for(var n in e||(e={}))Wu.call(e,n)&&Ro(t,n,e[n]);if(xo)for(var n of xo(e))$u.call(e,n)&&Ro(t,n,e[n]);return t},Po=(t,e)=>Uu(t,Hu(e));function gr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Vu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ju=gr(Vu);function Jl(t){return!!t||t===""}function mr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=pe(s)?Ku(s):mr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(pe(t))return t;if(le(t))return t}}const qu=/;(?![^(]*\))/g,zu=/:(.+)/;function Ku(t){const e={};return t.split(qu).forEach(n=>{if(n){const s=n.split(zu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function yr(t){let e="";if(pe(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const s=yr(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Gu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=$s(t[s],e[s]);return n}function $s(t,e){if(t===e)return!0;let n=Oo(t),s=Oo(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=k(t),s=k(e),n||s)return n&&s?Gu(t,e):!1;if(n=le(t),s=le(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!$s(t[o],e[o]))return!1}}return String(t)===String(e)}function Zl(t,e){return t.findIndex(n=>$s(n,e))}const uy=t=>pe(t)?t:t==null?"":k(t)||le(t)&&(t.toString===na||!F(t.toString))?JSON.stringify(t,ea,2):String(t),ea=(t,e)=>e&&e.__v_isRef?ea(t,e.value):Zt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:js(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!k(e)&&!sa(e)?String(e):e,K={},Jt=[],We=()=>{},Yu=()=>!1,Qu=/^on[^a-z]/,Vs=t=>Qu.test(t),Cr=t=>t.startsWith("onUpdate:"),Ce=Object.assign,vr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xu=Object.prototype.hasOwnProperty,$=(t,e)=>Xu.call(t,e),k=Array.isArray,Zt=t=>qs(t)==="[object Map]",js=t=>qs(t)==="[object Set]",Oo=t=>t instanceof Date,F=t=>typeof t=="function",pe=t=>typeof t=="string",Er=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",ta=t=>le(t)&&F(t.then)&&F(t.catch),na=Object.prototype.toString,qs=t=>na.call(t),Ju=t=>qs(t).slice(8,-1),sa=t=>qs(t)==="[object Object]",br=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fs=gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zu=/-(\w)/g,on=zs(t=>t.replace(Zu,(e,n)=>n?n.toUpperCase():"")),eh=/\B([A-Z])/g,$t=zs(t=>t.replace(eh,"-$1").toLowerCase()),ia=zs(t=>t.charAt(0).toUpperCase()+t.slice(1)),_i=zs(t=>t?`on${ia(t)}`:""),Fn=(t,e)=>!Object.is(t,e),ds=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ms=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ko;const th=()=>ko||(ko=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Xe;class ra{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Xe&&(this.parent=Xe,this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Xe=this,e()}finally{Xe=this.parent}}on(){Xe=this}off(){Xe=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function oa(t){return new ra(t)}function nh(t,e=Xe){e&&e.active&&e.effects.push(t)}const wr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},la=t=>(t.w&Ct)>0,aa=t=>(t.n&Ct)>0,sh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ct},ih=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];la(i)&&!aa(i)?i.delete(t):e[n++]=i,i.w&=~Ct,i.n&=~Ct}e.length=n}},Oi=new WeakMap;let Sn=0,Ct=1;const ki=30;let Ke;const kt=Symbol(""),Di=Symbol("");class Ir{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nh(this,s)}run(){if(!this.active)return this.fn();let e=Ke,n=dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ke,Ke=this,dt=!0,Ct=1<<++Sn,Sn<=ki?sh(this):Do(this),this.fn()}finally{Sn<=ki&&ih(this),Ct=1<<--Sn,Ke=this.parent,dt=n,this.parent=void 0}}stop(){this.active&&(Do(this),this.onStop&&this.onStop(),this.active=!1)}}function Do(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let dt=!0;const ca=[];function pn(){ca.push(dt),dt=!1}function _n(){const t=ca.pop();dt=t===void 0?!0:t}function Oe(t,e,n){if(dt&&Ke){let s=Oi.get(t);s||Oi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=wr()),ua(i)}}function ua(t,e){let n=!1;Sn<=ki?aa(t)||(t.n|=Ct,n=!la(t)):n=!t.has(Ke),n&&(t.add(Ke),Ke.deps.push(t))}function st(t,e,n,s,i,r){const o=Oi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&k(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":k(t)?br(n)&&l.push(o.get("length")):(l.push(o.get(kt)),Zt(t)&&l.push(o.get(Di)));break;case"delete":k(t)||(l.push(o.get(kt)),Zt(t)&&l.push(o.get(Di)));break;case"set":Zt(t)&&l.push(o.get(kt));break}if(l.length===1)l[0]&&Mi(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Mi(wr(a))}}function Mi(t,e){for(const n of k(t)?t:[...t])(n!==Ke||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const rh=gr("__proto__,__v_isRef,__isVue"),ha=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Er)),oh=Tr(),lh=Tr(!1,!0),ah=Tr(!0),Mo=ch();function ch(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=V(this);for(let r=0,o=this.length;r<o;r++)Oe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pn();const s=V(this)[e].apply(this,n);return _n(),s}}),t}function Tr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Th:ga:e?_a:pa).get(s))return s;const o=k(s);if(!t&&o&&$(Mo,i))return Reflect.get(Mo,i,r);const l=Reflect.get(s,i,r);return(Er(i)?ha.has(i):rh(i))||(t||Oe(s,"get",i),e)?l:re(l)?!o||!br(i)?l.value:l:le(l)?t?ma(l):Gs(l):l}}const uh=fa(),hh=fa(!0);function fa(t=!1){return function(n,s,i,r){let o=n[s];if(Ln(o)&&re(o)&&!re(i))return!1;if(!t&&!Ln(i)&&(ya(i)||(i=V(i),o=V(o)),!k(n)&&re(o)&&!re(i)))return o.value=i,!0;const l=k(n)&&br(s)?Number(s)<n.length:$(n,s),a=Reflect.set(n,s,i,r);return n===V(r)&&(l?Fn(i,o)&&st(n,"set",s,i):st(n,"add",s,i)),a}}function fh(t,e){const n=$(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&st(t,"delete",e,void 0),s}function dh(t,e){const n=Reflect.has(t,e);return(!Er(e)||!ha.has(e))&&Oe(t,"has",e),n}function ph(t){return Oe(t,"iterate",k(t)?"length":kt),Reflect.ownKeys(t)}const da={get:oh,set:uh,deleteProperty:fh,has:dh,ownKeys:ph},_h={get:ah,set(t,e){return!0},deleteProperty(t,e){return!0}},gh=Ce({},da,{get:lh,set:hh}),Sr=t=>t,Ks=t=>Reflect.getPrototypeOf(t);function rs(t,e,n=!1,s=!1){t=t.__v_raw;const i=V(t),r=V(e);e!==r&&!n&&Oe(i,"get",e),!n&&Oe(i,"get",r);const{has:o}=Ks(i),l=s?Sr:n?Rr:Bn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function os(t,e=!1){const n=this.__v_raw,s=V(n),i=V(t);return t!==i&&!e&&Oe(s,"has",t),!e&&Oe(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function ls(t,e=!1){return t=t.__v_raw,!e&&Oe(V(t),"iterate",kt),Reflect.get(t,"size",t)}function Fo(t){t=V(t);const e=V(this);return Ks(e).has.call(e,t)||(e.add(t),st(e,"add",t,t)),this}function Lo(t,e){e=V(e);const n=V(this),{has:s,get:i}=Ks(n);let r=s.call(n,t);r||(t=V(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Fn(e,o)&&st(n,"set",t,e):st(n,"add",t,e),this}function Bo(t){const e=V(this),{has:n,get:s}=Ks(e);let i=n.call(e,t);i||(t=V(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&st(e,"delete",t,void 0),r}function Uo(){const t=V(this),e=t.size!==0,n=t.clear();return e&&st(t,"clear",void 0,void 0),n}function as(t,e){return function(s,i){const r=this,o=r.__v_raw,l=V(o),a=e?Sr:t?Rr:Bn;return!t&&Oe(l,"iterate",kt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function cs(t,e,n){return function(...s){const i=this.__v_raw,r=V(i),o=Zt(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Sr:e?Rr:Bn;return!e&&Oe(r,"iterate",a?Di:kt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:this}}function mh(){const t={get(r){return rs(this,r)},get size(){return ls(this)},has:os,add:Fo,set:Lo,delete:Bo,clear:Uo,forEach:as(!1,!1)},e={get(r){return rs(this,r,!1,!0)},get size(){return ls(this)},has:os,add:Fo,set:Lo,delete:Bo,clear:Uo,forEach:as(!1,!0)},n={get(r){return rs(this,r,!0)},get size(){return ls(this,!0)},has(r){return os.call(this,r,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:as(!0,!1)},s={get(r){return rs(this,r,!0,!0)},get size(){return ls(this,!0)},has(r){return os.call(this,r,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:as(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=cs(r,!1,!1),n[r]=cs(r,!0,!1),e[r]=cs(r,!1,!0),s[r]=cs(r,!0,!0)}),[t,n,e,s]}const[yh,Ch,vh,Eh]=mh();function Nr(t,e){const n=e?t?Eh:vh:t?Ch:yh;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get($(n,i)&&i in s?n:s,i,r)}const bh={get:Nr(!1,!1)},wh={get:Nr(!1,!0)},Ih={get:Nr(!0,!1)},pa=new WeakMap,_a=new WeakMap,ga=new WeakMap,Th=new WeakMap;function Sh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nh(t){return t.__v_skip||!Object.isExtensible(t)?0:Sh(Ju(t))}function Gs(t){return Ln(t)?t:xr(t,!1,da,bh,pa)}function xh(t){return xr(t,!1,gh,wh,_a)}function ma(t){return xr(t,!0,_h,Ih,ga)}function xr(t,e,n,s,i){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Nh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function pt(t){return Ln(t)?pt(t.__v_raw):!!(t&&t.__v_isReactive)}function Ln(t){return!!(t&&t.__v_isReadonly)}function ya(t){return!!(t&&t.__v_isShallow)}function Ca(t){return pt(t)||Ln(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function ln(t){return ms(t,"__v_skip",!0),t}const Bn=t=>le(t)?Gs(t):t,Rr=t=>le(t)?ma(t):t;function va(t){dt&&Ke&&(t=V(t),ua(t.dep||(t.dep=wr())))}function Ea(t,e){t=V(t),t.dep&&Mi(t.dep)}function re(t){return!!(t&&t.__v_isRef===!0)}function ba(t){return Rh(t,!1)}function Rh(t,e){return re(t)?t:new Ah(t,e)}class Ah{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:Bn(e)}get value(){return va(this),this._value}set value(e){e=this.__v_isShallow?e:V(e),Fn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Bn(e),Ea(this))}}function Ph(t){return re(t)?t.value:t}const Oh={get:(t,e,n)=>Ph(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return re(i)&&!re(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function wa(t){return pt(t)?t:new Proxy(t,Oh)}function kh(t){const e=k(t)?new Array(t.length):{};for(const n in t)e[n]=Mh(t,n);return e}class Dh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Mh(t,e,n){const s=t[e];return re(s)?s:new Dh(t,e,n)}class Fh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ir(e,()=>{this._dirty||(this._dirty=!0,Ea(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=V(this);return va(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Lh(t,e,n=!1){let s,i;const r=F(t);return r?(s=t,i=We):(s=t.get,i=t.set),new Fh(s,i,r||!i,n)}Promise.resolve();function _t(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ys(r,e,n)}return i}function Me(t,e,n,s){if(F(t)){const r=_t(t,e,n,s);return r&&ta(r)&&r.catch(o=>{Ys(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Me(t[r],e,n,s));return i}function Ys(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){_t(a,null,10,[t,o,l]);return}}Bh(t,n,i,s)}function Bh(t,e,n,s=!0){console.error(t)}let ys=!1,Fi=!1;const Pe=[];let Ze=0;const xn=[];let Nn=null,Yt=0;const Rn=[];let ht=null,Qt=0;const Ia=Promise.resolve();let Ar=null,Li=null;function Ta(t){const e=Ar||Ia;return t?e.then(this?t.bind(this):t):e}function Uh(t){let e=Ze+1,n=Pe.length;for(;e<n;){const s=e+n>>>1;Un(Pe[s])<t?e=s+1:n=s}return e}function Sa(t){(!Pe.length||!Pe.includes(t,ys&&t.allowRecurse?Ze+1:Ze))&&t!==Li&&(t.id==null?Pe.push(t):Pe.splice(Uh(t.id),0,t),Na())}function Na(){!ys&&!Fi&&(Fi=!0,Ar=Ia.then(Aa))}function Hh(t){const e=Pe.indexOf(t);e>Ze&&Pe.splice(e,1)}function xa(t,e,n,s){k(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Na()}function Wh(t){xa(t,Nn,xn,Yt)}function $h(t){xa(t,ht,Rn,Qt)}function Pr(t,e=null){if(xn.length){for(Li=e,Nn=[...new Set(xn)],xn.length=0,Yt=0;Yt<Nn.length;Yt++)Nn[Yt]();Nn=null,Yt=0,Li=null,Pr(t,e)}}function Ra(t){if(Rn.length){const e=[...new Set(Rn)];if(Rn.length=0,ht){ht.push(...e);return}for(ht=e,ht.sort((n,s)=>Un(n)-Un(s)),Qt=0;Qt<ht.length;Qt++)ht[Qt]();ht=null,Qt=0}}const Un=t=>t.id==null?1/0:t.id;function Aa(t){Fi=!1,ys=!0,Pr(t),Pe.sort((n,s)=>Un(n)-Un(s));const e=We;try{for(Ze=0;Ze<Pe.length;Ze++){const n=Pe[Ze];n&&n.active!==!1&&_t(n,null,14)}}finally{Ze=0,Pe.length=0,Ra(),ys=!1,Ar=null,(Pe.length||xn.length||Rn.length)&&Aa(t)}}function Vh(t,e,...n){const s=t.vnode.props||K;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||K;d?i=n.map(g=>g.trim()):h&&(i=n.map(Pi))}let l,a=s[l=_i(e)]||s[l=_i(on(e))];!a&&r&&(a=s[l=_i($t(e))]),a&&Me(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Me(c,t,6,i)}}function Pa(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!F(t)){const a=c=>{const u=Pa(c,e,!0);u&&(l=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(s.set(t,null),null):(k(r)?r.forEach(a=>o[a]=null):Ce(o,r),s.set(t,o),o)}function Or(t,e){return!t||!Vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),$(t,e[0].toLowerCase()+e.slice(1))||$(t,$t(e))||$(t,e))}let Be=null,Qs=null;function Cs(t){const e=Be;return Be=t,Qs=t&&t.type.__scopeId||null,e}function hy(t){Qs=t}function fy(){Qs=null}function jh(t,e=Be,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Yo(-1);const r=Cs(e),o=t(...i);return Cs(r),s._d&&Yo(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function gi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:S}=t;let x,M;const ae=Cs(t);try{if(n.shapeFlag&4){const H=i||s;x=ze(u.call(H,H,h,r,g,d,v)),M=a}else{const H=e;x=ze(H.length>1?H(r,{attrs:a,slots:l,emit:c}):H(r,null)),M=e.props?a:qh(a)}}catch(H){An.length=0,Ys(H,t,1),x=tt(Ge)}let se=x;if(M&&S!==!1){const H=Object.keys(M),{shapeFlag:ce}=se;H.length&&ce&7&&(o&&H.some(Cr)&&(M=zh(M,o)),se=an(se,M))}return n.dirs&&(se.dirs=se.dirs?se.dirs.concat(n.dirs):n.dirs),n.transition&&(se.transition=n.transition),x=se,Cs(ae),x}const qh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vs(n))&&((e||(e={}))[n]=t[n]);return e},zh=(t,e)=>{const n={};for(const s in t)(!Cr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Kh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ho(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Or(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ho(s,o,c):!0:!!o;return!1}function Ho(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Or(n,r))return!0}return!1}function Gh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Yh=t=>t.__isSuspense;function Qh(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):$h(t)}function Xh(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function ps(t,e,n=!1){const s=me||Be;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&F(e)?e.call(s.proxy):e}}const Wo={};function _s(t,e,n){return Oa(t,e,n)}function Oa(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=K){const l=me;let a,c=!1,u=!1;if(re(t)?(a=()=>t.value,c=ya(t)):pt(t)?(a=()=>t,s=!0):k(t)?(u=!0,c=t.some(pt),a=()=>t.map(M=>{if(re(M))return M.value;if(pt(M))return At(M);if(F(M))return _t(M,l,2)})):F(t)?e?a=()=>_t(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Me(t,l,3,[d])}:a=We,e&&s){const M=a;a=()=>At(M())}let h,d=M=>{h=x.onStop=()=>{_t(M,l,4)}};if(Hn)return d=We,e?n&&Me(e,l,3,[a(),u?[]:void 0,d]):a(),We;let g=u?[]:Wo;const v=()=>{if(!!x.active)if(e){const M=x.run();(s||c||(u?M.some((ae,se)=>Fn(ae,g[se])):Fn(M,g)))&&(h&&h(),Me(e,l,3,[M,g===Wo?void 0:g,d]),g=M)}else x.run()};v.allowRecurse=!!e;let S;i==="sync"?S=v:i==="post"?S=()=>Ie(v,l&&l.suspense):S=()=>{!l||l.isMounted?Wh(v):v()};const x=new Ir(a,S);return e?n?v():g=x.run():i==="post"?Ie(x.run.bind(x),l&&l.suspense):x.run(),()=>{x.stop(),l&&l.scope&&vr(l.scope.effects,x)}}function Jh(t,e,n){const s=this.proxy,i=pe(t)?t.includes(".")?ka(s,t):()=>s[t]:t.bind(s,s);let r;F(e)?r=e:(r=e.handler,n=e);const o=me;cn(this);const l=Oa(i,r.bind(s),n);return o?cn(o):Mt(),l}function ka(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function At(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),re(t))At(t.value,e);else if(k(t))for(let n=0;n<t.length;n++)At(t[n],e);else if(js(t)||Zt(t))t.forEach(n=>{At(n,e)});else if(sa(t))for(const n in t)At(t[n],e);return t}function Zh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return La(()=>{t.isMounted=!0}),Ba(()=>{t.isUnmounting=!0}),t}const De=[Function,Array],ef={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(t,{slots:e}){const n=Lr(),s=Zh();let i;return()=>{const r=e.default&&Ma(e.default(),!0);if(!r||!r.length)return;const o=V(t),{mode:l}=o,a=r[0];if(s.isLeaving)return mi(a);const c=$o(a);if(!c)return mi(a);const u=Bi(c,o,s,n);Ui(c,u);const h=n.subTree,d=h&&$o(h);let g=!1;const{getTransitionKey:v}=c.type;if(v){const S=v();i===void 0?i=S:S!==i&&(i=S,g=!0)}if(d&&d.type!==Ge&&(!Nt(c,d)||g)){const S=Bi(d,o,s,n);if(Ui(d,S),l==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},mi(a);l==="in-out"&&c.type!==Ge&&(S.delayLeave=(x,M,ae)=>{const se=Da(s,d);se[String(d.key)]=d,x._leaveCb=()=>{M(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ae})}return a}}},tf=ef;function Da(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Bi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:S,onAppear:x,onAfterAppear:M,onAppearCancelled:ae}=e,se=String(t.key),H=Da(n,t),ce=(P,te)=>{P&&Me(P,s,9,te)},q={mode:r,persisted:o,beforeEnter(P){let te=l;if(!n.isMounted)if(i)te=S||l;else return;P._leaveCb&&P._leaveCb(!0);const X=H[se];X&&Nt(t,X)&&X.el._leaveCb&&X.el._leaveCb(),ce(te,[P])},enter(P){let te=a,X=c,_e=u;if(!n.isMounted)if(i)te=x||a,X=M||c,_e=ae||u;else return;let ve=!1;const Re=P._enterCb=ke=>{ve||(ve=!0,ke?ce(_e,[P]):ce(X,[P]),q.delayedLeave&&q.delayedLeave(),P._enterCb=void 0)};te?(te(P,Re),te.length<=1&&Re()):Re()},leave(P,te){const X=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return te();ce(h,[P]);let _e=!1;const ve=P._leaveCb=Re=>{_e||(_e=!0,te(),Re?ce(v,[P]):ce(g,[P]),P._leaveCb=void 0,H[X]===t&&delete H[X])};H[X]=t,d?(d(P,ve),d.length<=1&&ve()):ve()},clone(P){return Bi(P,e,n,s)}};return q}function mi(t){if(Xs(t))return t=an(t),t.children=null,t}function $o(t){return Xs(t)?t.children?t.children[0]:void 0:t}function Ui(t,e){t.shapeFlag&6&&t.component?Ui(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ma(t,e=!1){let n=[],s=0;for(let i=0;i<t.length;i++){const r=t[i];r.type===qe?(r.patchFlag&128&&s++,n=n.concat(Ma(r.children,e))):(e||r.type!==Ge)&&n.push(r)}if(s>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function dy(t){return F(t)?{setup:t,name:t.name}:t}const Hi=t=>!!t.type.__asyncLoader,Xs=t=>t.type.__isKeepAlive;function nf(t,e){Fa(t,"a",e)}function sf(t,e){Fa(t,"da",e)}function Fa(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Js(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Xs(i.parent.vnode)&&rf(s,e,n,i),i=i.parent}}function rf(t,e,n,s){const i=Js(e,t,s,!0);kr(()=>{vr(s[e],i)},n)}function Js(t,e,n=me,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pn(),cn(n);const l=Me(e,n,t,o);return Mt(),_n(),l});return s?i.unshift(r):i.push(r),r}}const ot=t=>(e,n=me)=>(!Hn||t==="sp")&&Js(t,e,n),of=ot("bm"),La=ot("m"),lf=ot("bu"),af=ot("u"),Ba=ot("bum"),kr=ot("um"),cf=ot("sp"),uf=ot("rtg"),hf=ot("rtc");function ff(t,e=me){Js("ec",t,e)}let Wi=!0;function df(t){const e=Ha(t),n=t.proxy,s=t.ctx;Wi=!1,e.beforeCreate&&Vo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:S,deactivated:x,beforeDestroy:M,beforeUnmount:ae,destroyed:se,unmounted:H,render:ce,renderTracked:q,renderTriggered:P,errorCaptured:te,serverPrefetch:X,expose:_e,inheritAttrs:ve,components:Re,directives:ke,filters:Ee}=e;if(c&&pf(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const J=o[ie];F(J)&&(s[ie]=J.bind(n))}if(i){const ie=i.call(n,n);le(ie)&&(t.data=Gs(ie))}if(Wi=!0,r)for(const ie in r){const J=r[ie],Ye=F(J)?J.bind(n,n):F(J.get)?J.get.bind(n,n):We,fi=!F(J)&&F(J.set)?J.set.bind(n):We,vn=Za({get:Ye,set:fi});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>vn.value,set:jt=>vn.value=jt})}if(l)for(const ie in l)Ua(l[ie],s,n,ie);if(a){const ie=F(a)?a.call(n):a;Reflect.ownKeys(ie).forEach(J=>{Xh(J,ie[J])})}u&&Vo(u,t,"c");function we(ie,J){k(J)?J.forEach(Ye=>ie(Ye.bind(n))):J&&ie(J.bind(n))}if(we(of,h),we(La,d),we(lf,g),we(af,v),we(nf,S),we(sf,x),we(ff,te),we(hf,q),we(uf,P),we(Ba,ae),we(kr,H),we(cf,X),k(_e))if(_e.length){const ie=t.exposed||(t.exposed={});_e.forEach(J=>{Object.defineProperty(ie,J,{get:()=>n[J],set:Ye=>n[J]=Ye})})}else t.exposed||(t.exposed={});ce&&t.render===We&&(t.render=ce),ve!=null&&(t.inheritAttrs=ve),Re&&(t.components=Re),ke&&(t.directives=ke)}function pf(t,e,n=We,s=!1){k(t)&&(t=$i(t));for(const i in t){const r=t[i];let o;le(r)?"default"in r?o=ps(r.from||i,r.default,!0):o=ps(r.from||i):o=ps(r),re(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Vo(t,e,n){Me(k(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ua(t,e,n,s){const i=s.includes(".")?ka(n,s):()=>n[s];if(pe(t)){const r=e[t];F(r)&&_s(i,r)}else if(F(t))_s(i,t.bind(n));else if(le(t))if(k(t))t.forEach(r=>Ua(r,e,n,s));else{const r=F(t.handler)?t.handler.bind(n):e[t.handler];F(r)&&_s(i,r,t)}}function Ha(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>vs(a,c,o,!0)),vs(a,e,o)),r.set(e,a),a}function vs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&vs(t,r,n,!0),i&&i.forEach(o=>vs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=_f[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const _f={data:jo,props:It,emits:It,methods:It,computed:It,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:It,directives:It,watch:mf,provide:jo,inject:gf};function jo(t,e){return e?t?function(){return Ce(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function gf(t,e){return It($i(t),$i(e))}function $i(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function It(t,e){return t?Ce(Ce(Object.create(null),t),e):e}function mf(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const s in e)n[s]=be(t[s],e[s]);return n}function yf(t,e,n,s=!1){const i={},r={};ms(r,Zs,1),t.propsDefaults=Object.create(null),Wa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:xh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Cf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=V(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];const g=e[d];if(a)if($(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const v=on(d);i[v]=Vi(a,l,v,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Wa(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!$(e,h)&&((u=$t(h))===h||!$(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Vi(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!$(e,h)&&!0)&&(delete r[h],c=!0)}c&&st(t,"set","$attrs")}function Wa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(fs(a))continue;const c=e[a];let u;i&&$(i,u=on(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Or(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=V(n),c=l||K;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Vi(i,a,h,c[h],t,!$(c,h))}}return o}function Vi(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=$(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&F(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(cn(i),s=c[n]=a.call(null,e),Mt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===$t(n))&&(s=!0))}return s}function $a(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!F(t)){const u=h=>{a=!0;const[d,g]=$a(h,e,!0);Ce(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return s.set(t,Jt),Jt;if(k(r))for(let u=0;u<r.length;u++){const h=on(r[u]);qo(h)&&(o[h]=K)}else if(r)for(const u in r){const h=on(u);if(qo(h)){const d=r[u],g=o[h]=k(d)||F(d)?{type:d}:d;if(g){const v=Go(Boolean,g.type),S=Go(String,g.type);g[0]=v>-1,g[1]=S<0||v<S,(v>-1||$(g,"default"))&&l.push(h)}}}const c=[o,l];return s.set(t,c),c}function qo(t){return t[0]!=="$"}function zo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ko(t,e){return zo(t)===zo(e)}function Go(t,e){return k(e)?e.findIndex(n=>Ko(n,t)):F(e)&&Ko(e,t)?0:-1}const Va=t=>t[0]==="_"||t==="$stable",Dr=t=>k(t)?t.map(ze):[ze(t)],vf=(t,e,n)=>{const s=jh((...i)=>Dr(e(...i)),n);return s._c=!1,s},ja=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Va(i))continue;const r=t[i];if(F(r))e[i]=vf(i,r,s);else if(r!=null){const o=Dr(r);e[i]=()=>o}}},qa=(t,e)=>{const n=Dr(e);t.slots.default=()=>n},Ef=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),ms(e,"_",n)):ja(e,t.slots={})}else t.slots={},e&&qa(t,e);ms(t.slots,Zs,1)},bf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=K;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Ce(i,e),!n&&l===1&&delete i._):(r=!e.$stable,ja(e,i)),o=e}else e&&(qa(t,e),o={default:1});if(r)for(const l in i)!Va(l)&&!(l in o)&&delete i[l]};function py(t,e){const n=Be;if(n===null)return t;const s=n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=K]=e[r];F(o)&&(o={mounted:o,updated:o}),o.deep&&At(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return t}function bt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(pn(),Me(a,n,8,[t.el,l,t,e]),_n())}}function za(){return{app:null,config:{isNativeTag:Yu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wf=0;function If(t,e){return function(s,i=null){i!=null&&!le(i)&&(i=null);const r=za(),o=new Set;let l=!1;const a=r.app={_uid:wf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Kf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&F(c.install)?(o.add(c),c.install(a,...u)):F(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=tt(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Br(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function ji(t,e,n,s,i=!1){if(k(t)){t.forEach((d,g)=>ji(d,e&&(k(e)?e[g]:e),n,s,i));return}if(Hi(s)&&!i)return;const r=s.shapeFlag&4?Br(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===K?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(pe(c)?(u[c]=null,$(h,c)&&(h[c]=null)):re(c)&&(c.value=null)),F(a))_t(a,l,12,[o,u]);else{const d=pe(a),g=re(a);if(d||g){const v=()=>{if(t.f){const S=d?u[a]:a.value;i?k(S)&&vr(S,r):k(S)?S.includes(r)||S.push(r):d?u[a]=[r]:(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,$(h,a)&&(h[a]=o)):re(a)&&(a.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Ie(v,n)):v()}}}const Ie=Qh;function Tf(t){return Sf(t)}function Sf(t,e){const n=th();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=We,cloneNode:v,insertStaticContent:S}=t,x=(f,p,_,y=null,m=null,w=null,T=!1,b=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!Nt(f,p)&&(y=is(f),ct(f,m,w,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:C,ref:R,shapeFlag:N}=p;switch(C){case Mr:M(f,p,_,y);break;case Ge:ae(f,p,_,y);break;case yi:f==null&&se(p,_,y,T);break;case qe:ke(f,p,_,y,m,w,T,b,I);break;default:N&1?q(f,p,_,y,m,w,T,b,I):N&6?Ee(f,p,_,y,m,w,T,b,I):(N&64||N&128)&&C.process(f,p,_,y,m,w,T,b,I,qt)}R!=null&&m&&ji(R,f&&f.ref,w,p||f,!p)},M=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},ae=(f,p,_,y)=>{f==null?s(p.el=a(p.children||""),_,y):p.el=f.el},se=(f,p,_,y)=>{[f.el,f.anchor]=S(f.children,p,_,y,f.el,f.anchor)},H=({el:f,anchor:p},_,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,_,y),f=m;s(p,_,y)},ce=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},q=(f,p,_,y,m,w,T,b,I)=>{T=T||p.type==="svg",f==null?P(p,_,y,m,w,T,b,I):_e(f,p,m,w,T,b,I)},P=(f,p,_,y,m,w,T,b)=>{let I,C;const{type:R,props:N,shapeFlag:A,transition:D,patchFlag:W,dirs:ne}=f;if(f.el&&v!==void 0&&W===-1)I=f.el=v(f.el);else{if(I=f.el=o(f.type,w,N&&N.is,N),A&8?u(I,f.children):A&16&&X(f.children,I,null,y,m,w&&R!=="foreignObject",T,b),ne&&bt(f,null,y,"created"),N){for(const Z in N)Z!=="value"&&!fs(Z)&&r(I,Z,null,N[Z],w,f.children,y,m,Qe);"value"in N&&r(I,"value",null,N.value),(C=N.onVnodeBeforeMount)&&je(C,y,f)}te(I,f,f.scopeId,T,y)}ne&&bt(f,null,y,"beforeMount");const z=(!m||m&&!m.pendingBranch)&&D&&!D.persisted;z&&D.beforeEnter(I),s(I,p,_),((C=N&&N.onVnodeMounted)||z||ne)&&Ie(()=>{C&&je(C,y,f),z&&D.enter(I),ne&&bt(f,null,y,"mounted")},m)},te=(f,p,_,y,m)=>{if(_&&g(f,_),y)for(let w=0;w<y.length;w++)g(f,y[w]);if(m){let w=m.subTree;if(p===w){const T=m.vnode;te(f,T,T.scopeId,T.slotScopeIds,m.parent)}}},X=(f,p,_,y,m,w,T,b,I=0)=>{for(let C=I;C<f.length;C++){const R=f[C]=b?ft(f[C]):ze(f[C]);x(null,R,p,_,y,m,w,T,b)}},_e=(f,p,_,y,m,w,T)=>{const b=p.el=f.el;let{patchFlag:I,dynamicChildren:C,dirs:R}=p;I|=f.patchFlag&16;const N=f.props||K,A=p.props||K;let D;_&&wt(_,!1),(D=A.onVnodeBeforeUpdate)&&je(D,_,p,f),R&&bt(p,f,_,"beforeUpdate"),_&&wt(_,!0);const W=m&&p.type!=="foreignObject";if(C?ve(f.dynamicChildren,C,b,_,y,W,w):T||Ye(f,p,b,null,_,y,W,w,!1),I>0){if(I&16)Re(b,p,N,A,_,y,m);else if(I&2&&N.class!==A.class&&r(b,"class",null,A.class,m),I&4&&r(b,"style",N.style,A.style,m),I&8){const ne=p.dynamicProps;for(let z=0;z<ne.length;z++){const Z=ne[z],Fe=N[Z],zt=A[Z];(zt!==Fe||Z==="value")&&r(b,Z,Fe,zt,m,f.children,_,y,Qe)}}I&1&&f.children!==p.children&&u(b,p.children)}else!T&&C==null&&Re(b,p,N,A,_,y,m);((D=A.onVnodeUpdated)||R)&&Ie(()=>{D&&je(D,_,p,f),R&&bt(p,f,_,"updated")},y)},ve=(f,p,_,y,m,w,T)=>{for(let b=0;b<p.length;b++){const I=f[b],C=p[b],R=I.el&&(I.type===qe||!Nt(I,C)||I.shapeFlag&70)?h(I.el):_;x(I,C,R,null,y,m,w,T,!0)}},Re=(f,p,_,y,m,w,T)=>{if(_!==y){for(const b in y){if(fs(b))continue;const I=y[b],C=_[b];I!==C&&b!=="value"&&r(f,b,C,I,T,p.children,m,w,Qe)}if(_!==K)for(const b in _)!fs(b)&&!(b in y)&&r(f,b,_[b],null,T,p.children,m,w,Qe);"value"in y&&r(f,"value",_.value,y.value)}},ke=(f,p,_,y,m,w,T,b,I)=>{const C=p.el=f?f.el:l(""),R=p.anchor=f?f.anchor:l("");let{patchFlag:N,dynamicChildren:A,slotScopeIds:D}=p;D&&(b=b?b.concat(D):D),f==null?(s(C,_,y),s(R,_,y),X(p.children,_,R,m,w,T,b,I)):N>0&&N&64&&A&&f.dynamicChildren?(ve(f.dynamicChildren,A,_,m,w,T,b),(p.key!=null||m&&p===m.subTree)&&Ka(f,p,!0)):Ye(f,p,_,R,m,w,T,b,I)},Ee=(f,p,_,y,m,w,T,b,I)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?m.ctx.activate(p,_,y,T,I):hi(p,_,y,m,w,T,I):we(f,p,I)},hi=(f,p,_,y,m,w,T)=>{const b=f.component=Wf(f,y,m);if(Xs(f)&&(b.ctx.renderer=qt),$f(b),b.asyncDep){if(m&&m.registerDep(b,ie),!f.el){const I=b.subTree=tt(Ge);ae(null,I,p,_)}return}ie(b,f,p,_,m,w,T)},we=(f,p,_)=>{const y=p.component=f.component;if(Kh(f,p,_))if(y.asyncDep&&!y.asyncResolved){J(y,p,_);return}else y.next=p,Hh(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},ie=(f,p,_,y,m,w,T)=>{const b=()=>{if(f.isMounted){let{next:R,bu:N,u:A,parent:D,vnode:W}=f,ne=R,z;wt(f,!1),R?(R.el=W.el,J(f,R,T)):R=W,N&&ds(N),(z=R.props&&R.props.onVnodeBeforeUpdate)&&je(z,D,R,W),wt(f,!0);const Z=gi(f),Fe=f.subTree;f.subTree=Z,x(Fe,Z,h(Fe.el),is(Fe),f,m,w),R.el=Z.el,ne===null&&Gh(f,Z.el),A&&Ie(A,m),(z=R.props&&R.props.onVnodeUpdated)&&Ie(()=>je(z,D,R,W),m)}else{let R;const{el:N,props:A}=p,{bm:D,m:W,parent:ne}=f,z=Hi(p);if(wt(f,!1),D&&ds(D),!z&&(R=A&&A.onVnodeBeforeMount)&&je(R,ne,p),wt(f,!0),N&&pi){const Z=()=>{f.subTree=gi(f),pi(N,f.subTree,f,m,null)};z?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=gi(f);x(null,Z,_,y,f,m,w),p.el=Z.el}if(W&&Ie(W,m),!z&&(R=A&&A.onVnodeMounted)){const Z=p;Ie(()=>je(R,ne,Z),m)}p.shapeFlag&256&&f.a&&Ie(f.a,m),f.isMounted=!0,p=_=y=null}},I=f.effect=new Ir(b,()=>Sa(f.update),f.scope),C=f.update=I.run.bind(I);C.id=f.uid,wt(f,!0),C()},J=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Cf(f,p.props,y,_),bf(f,p.children,_),pn(),Pr(void 0,f.update),_n()},Ye=(f,p,_,y,m,w,T,b,I=!1)=>{const C=f&&f.children,R=f?f.shapeFlag:0,N=p.children,{patchFlag:A,shapeFlag:D}=p;if(A>0){if(A&128){vn(C,N,_,y,m,w,T,b,I);return}else if(A&256){fi(C,N,_,y,m,w,T,b,I);return}}D&8?(R&16&&Qe(C,m,w),N!==C&&u(_,N)):R&16?D&16?vn(C,N,_,y,m,w,T,b,I):Qe(C,m,w,!0):(R&8&&u(_,""),D&16&&X(N,_,y,m,w,T,b,I))},fi=(f,p,_,y,m,w,T,b,I)=>{f=f||Jt,p=p||Jt;const C=f.length,R=p.length,N=Math.min(C,R);let A;for(A=0;A<N;A++){const D=p[A]=I?ft(p[A]):ze(p[A]);x(f[A],D,_,null,m,w,T,b,I)}C>R?Qe(f,m,w,!0,!1,N):X(p,_,y,m,w,T,b,I,N)},vn=(f,p,_,y,m,w,T,b,I)=>{let C=0;const R=p.length;let N=f.length-1,A=R-1;for(;C<=N&&C<=A;){const D=f[C],W=p[C]=I?ft(p[C]):ze(p[C]);if(Nt(D,W))x(D,W,_,null,m,w,T,b,I);else break;C++}for(;C<=N&&C<=A;){const D=f[N],W=p[A]=I?ft(p[A]):ze(p[A]);if(Nt(D,W))x(D,W,_,null,m,w,T,b,I);else break;N--,A--}if(C>N){if(C<=A){const D=A+1,W=D<R?p[D].el:y;for(;C<=A;)x(null,p[C]=I?ft(p[C]):ze(p[C]),_,W,m,w,T,b,I),C++}}else if(C>A)for(;C<=N;)ct(f[C],m,w,!0),C++;else{const D=C,W=C,ne=new Map;for(C=W;C<=A;C++){const Ae=p[C]=I?ft(p[C]):ze(p[C]);Ae.key!=null&&ne.set(Ae.key,C)}let z,Z=0;const Fe=A-W+1;let zt=!1,To=0;const En=new Array(Fe);for(C=0;C<Fe;C++)En[C]=0;for(C=D;C<=N;C++){const Ae=f[C];if(Z>=Fe){ct(Ae,m,w,!0);continue}let Ve;if(Ae.key!=null)Ve=ne.get(Ae.key);else for(z=W;z<=A;z++)if(En[z-W]===0&&Nt(Ae,p[z])){Ve=z;break}Ve===void 0?ct(Ae,m,w,!0):(En[Ve-W]=C+1,Ve>=To?To=Ve:zt=!0,x(Ae,p[Ve],_,null,m,w,T,b,I),Z++)}const So=zt?Nf(En):Jt;for(z=So.length-1,C=Fe-1;C>=0;C--){const Ae=W+C,Ve=p[Ae],No=Ae+1<R?p[Ae+1].el:y;En[C]===0?x(null,Ve,_,No,m,w,T,b,I):zt&&(z<0||C!==So[z]?jt(Ve,_,No,2):z--)}}},jt=(f,p,_,y,m=null)=>{const{el:w,type:T,transition:b,children:I,shapeFlag:C}=f;if(C&6){jt(f.component.subTree,p,_,y);return}if(C&128){f.suspense.move(p,_,y);return}if(C&64){T.move(f,p,_,qt);return}if(T===qe){s(w,p,_);for(let N=0;N<I.length;N++)jt(I[N],p,_,y);s(f.anchor,p,_);return}if(T===yi){H(f,p,_);return}if(y!==2&&C&1&&b)if(y===0)b.beforeEnter(w),s(w,p,_),Ie(()=>b.enter(w),m);else{const{leave:N,delayLeave:A,afterLeave:D}=b,W=()=>s(w,p,_),ne=()=>{N(w,()=>{W(),D&&D()})};A?A(w,W,ne):ne()}else s(w,p,_)},ct=(f,p,_,y=!1,m=!1)=>{const{type:w,props:T,ref:b,children:I,dynamicChildren:C,shapeFlag:R,patchFlag:N,dirs:A}=f;if(b!=null&&ji(b,null,_,f,!0),R&256){p.ctx.deactivate(f);return}const D=R&1&&A,W=!Hi(f);let ne;if(W&&(ne=T&&T.onVnodeBeforeUnmount)&&je(ne,p,f),R&6)Lu(f.component,_,y);else{if(R&128){f.suspense.unmount(_,y);return}D&&bt(f,null,p,"beforeUnmount"),R&64?f.type.remove(f,p,_,m,qt,y):C&&(w!==qe||N>0&&N&64)?Qe(C,p,_,!1,!0):(w===qe&&N&384||!m&&R&16)&&Qe(I,p,_),y&&wo(f)}(W&&(ne=T&&T.onVnodeUnmounted)||D)&&Ie(()=>{ne&&je(ne,p,f),D&&bt(f,null,p,"unmounted")},_)},wo=f=>{const{type:p,el:_,anchor:y,transition:m}=f;if(p===qe){Fu(_,y);return}if(p===yi){ce(f);return}const w=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:b}=m,I=()=>T(_,w);b?b(f.el,w,I):I()}else w()},Fu=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},Lu=(f,p,_)=>{const{bum:y,scope:m,update:w,subTree:T,um:b}=f;y&&ds(y),m.stop(),w&&(w.active=!1,ct(T,f,p,_)),b&&Ie(b,p),Ie(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Qe=(f,p,_,y=!1,m=!1,w=0)=>{for(let T=w;T<f.length;T++)ct(f[T],p,_,y,m)},is=f=>f.shapeFlag&6?is(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Io=(f,p,_)=>{f==null?p._vnode&&ct(p._vnode,null,null,!0):x(p._vnode||null,f,p,null,null,null,_),Ra(),p._vnode=f},qt={p:x,um:ct,m:jt,r:wo,mt:hi,mc:X,pc:Ye,pbc:ve,n:is,o:t};let di,pi;return e&&([di,pi]=e(qt)),{render:Io,hydrate:di,createApp:If(Io,di)}}function wt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ka(t,e,n=!1){const s=t.children,i=e.children;if(k(s)&&k(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=ft(i[r]),l.el=o.el),n||Ka(o,l))}}function Nf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const xf=t=>t.__isTeleport,Rf=Symbol(),qe=Symbol(void 0),Mr=Symbol(void 0),Ge=Symbol(void 0),yi=Symbol(void 0),An=[];let Dt=null;function Af(t=!1){An.push(Dt=t?null:[])}function Pf(){An.pop(),Dt=An[An.length-1]||null}let Es=1;function Yo(t){Es+=t}function Ga(t){return t.dynamicChildren=Es>0?Dt||Jt:null,Pf(),Es>0&&Dt&&Dt.push(t),t}function _y(t,e,n,s,i,r){return Ga(Qa(t,e,n,s,i,r,!0))}function Of(t,e,n,s,i){return Ga(tt(t,e,n,s,i,!0))}function kf(t){return t?t.__v_isVNode===!0:!1}function Nt(t,e){return t.type===e.type&&t.key===e.key}const Zs="__vInternal",Ya=({key:t})=>t!=null?t:null,gs=({ref:t,ref_key:e,ref_for:n})=>t!=null?pe(t)||re(t)||F(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function Qa(t,e=null,n=null,s=0,i=null,r=t===qe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ya(e),ref:e&&gs(e),scopeId:Qs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Fr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=pe(n)?8:16),Es>0&&!o&&Dt&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Dt.push(a),a}const tt=Df;function Df(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Rf)&&(t=Ge),kf(t)){const l=an(t,e,!0);return n&&Fr(l,n),l}if(zf(t)&&(t=t.__vccOpts),e){e=Mf(e);let{class:l,style:a}=e;l&&!pe(l)&&(e.class=yr(l)),le(a)&&(Ca(a)&&!k(a)&&(a=Ce({},a)),e.style=mr(a))}const o=pe(t)?1:Yh(t)?128:xf(t)?64:le(t)?4:F(t)?2:0;return Qa(t,e,n,s,i,o,r,!0)}function Mf(t){return t?Ca(t)||Zs in t?Ce({},t):t:null}function an(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Lf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ya(l),ref:e&&e.ref?n&&i?k(i)?i.concat(gs(e)):[i,gs(e)]:gs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor}}function Ff(t=" ",e=0){return tt(Mr,null,t,e)}function gy(t="",e=!1){return e?(Af(),Of(Ge,null,t)):tt(Ge,null,t)}function ze(t){return t==null||typeof t=="boolean"?tt(Ge):k(t)?tt(qe,null,t.slice()):typeof t=="object"?ft(t):tt(Mr,null,String(t))}function ft(t){return t.el===null||t.memo?t:an(t)}function Fr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Fr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Zs in e)?e._ctx=Be:i===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),s&64?(n=16,e=[Ff(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=yr([e.class,s.class]));else if(i==="style")e.style=mr([e.style,s.style]);else if(Vs(i)){const r=e[i],o=s[i];o&&r!==o&&!(k(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function je(t,e,n,s=null){Me(t,e,7,[n,s])}function my(t,e,n,s){let i;const r=n&&n[s];if(k(t)||pe(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(le(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const qi=t=>t?Xa(t)?Br(t)||t.proxy:qi(t.parent):null,bs=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qi(t.parent),$root:t=>qi(t.root),$emit:t=>t.emit,$options:t=>Ha(t),$forceUpdate:t=>()=>Sa(t.update),$nextTick:t=>Ta.bind(t.proxy),$watch:t=>Jh.bind(t)}),Bf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==K&&$(s,e))return o[e]=1,s[e];if(i!==K&&$(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&$(c,e))return o[e]=3,r[e];if(n!==K&&$(n,e))return o[e]=4,n[e];Wi&&(o[e]=0)}}const u=bs[e];let h,d;if(u)return e==="$attrs"&&Oe(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==K&&$(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,$(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==K&&$(i,e)?(i[e]=n,!0):s!==K&&$(s,e)?(s[e]=n,!0):$(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==K&&$(t,o)||e!==K&&$(e,o)||(l=r[0])&&$(l,o)||$(s,o)||$(bs,o)||$(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Uf=za();let Hf=0;function Wf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Uf,r={uid:Hf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ra(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$a(s,i),emitsOptions:Pa(s,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Vh.bind(null,r),t.ce&&t.ce(r),r}let me=null;const Lr=()=>me||Be,cn=t=>{me=t,t.scope.on()},Mt=()=>{me&&me.scope.off(),me=null};function Xa(t){return t.vnode.shapeFlag&4}let Hn=!1;function $f(t,e=!1){Hn=e;const{props:n,children:s}=t.vnode,i=Xa(t);yf(t,n,i,e),Ef(t,s);const r=i?Vf(t,e):void 0;return Hn=!1,r}function Vf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ln(new Proxy(t.ctx,Bf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?qf(t):null;cn(t),pn();const r=_t(s,t,0,[t.props,i]);if(_n(),Mt(),ta(r)){if(r.then(Mt,Mt),e)return r.then(o=>{Qo(t,o,e)}).catch(o=>{Ys(o,t,0)});t.asyncDep=r}else Qo(t,r,e)}else Ja(t,e)}function Qo(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=wa(e)),Ja(t,n)}let Xo;function Ja(t,e,n){const s=t.type;if(!t.render){if(!e&&Xo&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Ce(Ce({isCustomElement:r,delimiters:l},o),a);s.render=Xo(i,c)}}t.render=s.render||We}cn(t),pn(),df(t),_n(),Mt()}function jf(t){return new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}})}function qf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=jf(t))},slots:t.slots,emit:t.emit,expose:e}}function Br(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(wa(ln(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bs)return bs[n](t)}}))}function zf(t){return F(t)&&"__vccOpts"in t}const Za=(t,e)=>Lh(t,e,Hn),Kf="3.2.31",Gf="http://www.w3.org/2000/svg",xt=typeof document!="undefined"?document:null,Jo=xt&&xt.createElement("template"),Yf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?xt.createElementNS(Gf,t):xt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Jo.innerHTML=s?`<svg>${t}</svg>`:t;const l=Jo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Qf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Xf(t,e,n){const s=t.style,i=pe(n);if(n&&!i){for(const r in n)zi(s,r,n[r]);if(e&&!pe(e))for(const r in e)n[r]==null&&zi(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Zo=/\s*!important$/;function zi(t,e,n){if(k(n))n.forEach(s=>zi(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=Jf(t,e);Zo.test(n)?t.setProperty($t(s),n.replace(Zo,""),"important"):t[s]=n}}const el=["Webkit","Moz","ms"],Ci={};function Jf(t,e){const n=Ci[e];if(n)return n;let s=on(e);if(s!=="filter"&&s in t)return Ci[e]=s;s=ia(s);for(let i=0;i<el.length;i++){const r=el[i]+s;if(r in t)return Ci[e]=r}return e}const tl="http://www.w3.org/1999/xlink";function Zf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(tl,e.slice(6,e.length)):t.setAttributeNS(tl,e,n);else{const r=ju(e);n==null||r&&!Jl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function ed(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const l=typeof t[e];if(l==="boolean"){t[e]=Jl(n);return}else if(n==null&&l==="string"){t[e]="",t.removeAttribute(e);return}else if(l==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let ws=Date.now,ec=!1;if(typeof window!="undefined"){ws()>document.createEvent("Event").timeStamp&&(ws=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ec=!!(t&&Number(t[1])<=53)}let Ki=0;const td=Promise.resolve(),nd=()=>{Ki=0},sd=()=>Ki||(td.then(nd),Ki=ws());function Rt(t,e,n,s){t.addEventListener(e,n,s)}function id(t,e,n,s){t.removeEventListener(e,n,s)}function rd(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=od(e);if(s){const c=r[e]=ld(s,i);Rt(t,l,c,a)}else o&&(id(t,l,o,a),r[e]=void 0)}}const nl=/(?:Once|Passive|Capture)$/;function od(t){let e;if(nl.test(t)){e={};let n;for(;n=t.match(nl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[$t(t.slice(2)),e]}function ld(t,e){const n=s=>{const i=s.timeStamp||ws();(ec||i>=n.attached-1)&&Me(ad(s,n.value),e,5,[s])};return n.value=t,n.attached=sd(),n}function ad(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const sl=/^on[a-z]/,cd=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Qf(t,s,i):e==="style"?Xf(t,n,s):Vs(e)?Cr(e)||rd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ud(t,e,s,i))?ed(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Zf(t,e,s,i))};function ud(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&sl.test(e)&&F(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||sl.test(e)&&pe(n)?!1:e in t}const hd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};tf.props;const Is=t=>{const e=t.props["onUpdate:modelValue"];return k(e)?n=>ds(e,n):e};function fd(t){t.target.composing=!0}function il(t){const e=t.target;e.composing&&(e.composing=!1,dd(e,"input"))}function dd(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const yy={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Is(i);const r=s||i.props&&i.props.type==="number";Rt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n?l=l.trim():r&&(l=Pi(l)),t._assign(l)}),n&&Rt(t,"change",()=>{t.value=t.value.trim()}),e||(Rt(t,"compositionstart",fd),Rt(t,"compositionend",il),Rt(t,"change",il))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Is(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Pi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Cy={deep:!0,created(t,e,n){t._assign=Is(n),Rt(t,"change",()=>{const s=t._modelValue,i=pd(t),r=t.checked,o=t._assign;if(k(s)){const l=Zl(s,i),a=l!==-1;if(r&&!a)o(s.concat(i));else if(!r&&a){const c=[...s];c.splice(l,1),o(c)}}else if(js(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(tc(t,r))})},mounted:rl,beforeUpdate(t,e,n){t._assign=Is(n),rl(t,e,n)}};function rl(t,{value:e,oldValue:n},s){t._modelValue=e,k(e)?t.checked=Zl(e,s.props.value)>-1:js(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=$s(e,tc(t,!0)))}function pd(t){return"_value"in t?t._value:t.value}function tc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const _d={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vy=(t,e)=>n=>{if(!("key"in n))return;const s=$t(n.key);if(e.some(i=>i===s||_d[i]===s))return t(n)},gd=Ce({patchProp:cd},Yf);let ol;function md(){return ol||(ol=Tf(gd))}const Ey=(...t)=>{const e=md().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=yd(s);if(!i)return;const r=e._component;!F(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function yd(t){return pe(t)?document.querySelector(t):t}var Cd=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let nc;const ei=t=>nc=t,sc=Symbol();function Gi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Pn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Pn||(Pn={}));function by(){const t=oa(!0),e=t.run(()=>ba({}));let n=[],s=[];const i=ln({install(r){ei(i),i._a=r,r.provide(sc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Cd?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const ic=()=>{};function ll(t,e,n,s=ic){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Lr()&&kr(i),i}function Kt(t,...e){t.slice().forEach(n=>{n(...e)})}function Yi(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Gi(i)&&Gi(s)&&t.hasOwnProperty(n)&&!re(s)&&!pt(s)?t[n]=Yi(i,s):t[n]=s}return t}const vd=Symbol();function Ed(t){return!Gi(t)||!t.hasOwnProperty(vd)}const{assign:Je}=Object;function bd(t){return!!(re(t)&&t.effect)}function wd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=kh(n.state.value[t]);return Je(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=ln(Za(()=>{ei(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return a=rc(t,c,e,n),a.$reset=function(){const h=i?i():{};this.$patch(d=>{Je(d,h)})},a}function rc(t,e,n={},s,i){let r;const o=n.state,l=Je({actions:{}},n),a={deep:!0};let c,u,h=ln([]),d=ln([]),g;const v=s.state.value[t];!o&&!v&&(s.state.value[t]={}),ba({});function S(q){let P;c=u=!1,typeof q=="function"?(q(s.state.value[t]),P={type:Pn.patchFunction,storeId:t,events:g}):(Yi(s.state.value[t],q),P={type:Pn.patchObject,payload:q,storeId:t,events:g}),Ta().then(()=>{c=!0}),u=!0,Kt(h,P,s.state.value[t])}const x=ic;function M(){r.stop(),h=[],d=[],s._s.delete(t)}function ae(q,P){return function(){ei(s);const te=Array.from(arguments),X=[],_e=[];function ve(Ee){X.push(Ee)}function Re(Ee){_e.push(Ee)}Kt(d,{args:te,name:q,store:H,after:ve,onError:Re});let ke;try{ke=P.apply(this&&this.$id===t?this:H,te)}catch(Ee){throw Kt(_e,Ee),Ee}return ke instanceof Promise?ke.then(Ee=>(Kt(X,Ee),Ee)).catch(Ee=>(Kt(_e,Ee),Promise.reject(Ee))):(Kt(X,ke),ke)}}const se={_p:s,$id:t,$onAction:ll.bind(null,d),$patch:S,$reset:x,$subscribe(q,P={}){const te=ll(h,q,P.detached,()=>X()),X=r.run(()=>_s(()=>s.state.value[t],_e=>{(P.flush==="sync"?u:c)&&q({storeId:t,type:Pn.direct,events:g},_e)},Je({},a,P)));return te},$dispose:M},H=Gs(Je({},se));s._s.set(t,H);const ce=s._e.run(()=>(r=oa(),r.run(()=>e())));for(const q in ce){const P=ce[q];if(re(P)&&!bd(P)||pt(P))o||(v&&Ed(P)&&(re(P)?P.value=v[q]:Yi(P,v[q])),s.state.value[t][q]=P);else if(typeof P=="function"){const te=ae(q,P);ce[q]=te,l.actions[q]=P}}return Je(H,ce),Je(V(H),ce),Object.defineProperty(H,"$state",{get:()=>s.state.value[t],set:q=>{S(P=>{Je(P,q)})}}),s._p.forEach(q=>{Je(H,r.run(()=>q({store:H,app:s._a,pinia:s,options:l})))}),v&&o&&n.hydrate&&n.hydrate(H.$state,v),c=!0,u=!0,H}function wy(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,a){const c=Lr();return l=l||c&&ps(sc),l&&ei(l),l=nc,l._s.has(s)||(r?rc(s,e,i,l):wd(s,i,l)),l._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw gn(e)},gn=function(t){return new Error("Firebase Database ("+oc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Id=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ur={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Id(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const v=c<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ac=function(t){const e=lc(t);return Ur.encodeByteArray(e,!0)},Ts=function(t){return ac(t).replace(/\./g,"")},Qi=function(t){try{return Ur.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t){return cc(void 0,t)}function cc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Sd(n)||(t[n]=cc(t[n],e[n]));return t}function Sd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nd())}function xd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hc(){return oc.NODE_ADMIN===!0}function Rd(){return typeof indexedDB=="object"}function Ad(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Pd(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=()=>Pd().__FIREBASE_DEFAULTS__,kd=()=>{!(typeof process=="undefined"||typeof process.env=="undefined")},Dd=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qi(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return Od()||kd()||Dd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Md=t=>{var e,n;return(n=(e=fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fd=t=>{const e=Md(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ld=()=>{var t;return(t=fc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Ts(JSON.stringify(n)),Ts(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="FirebaseError";class Xn extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=Ud,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dc.prototype.create)}}class dc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Hd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xn(i,l,s)}}function Hd(t,e){return t.replace(Wd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Wd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Wn(Qi(r[0])||""),n=Wn(Qi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},$d=function(t){const e=pc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Vd=function(t){const e=pc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function un(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function al(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ss(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Xi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(cl(r)&&cl(o)){if(!Xi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function cl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Hr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ni=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ti;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yd(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gd(t){return t===Tt?void 0:t}function Yd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Xd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Jd=Y.INFO,Zd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},ep=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Zd[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _c{constructor(e){this.name=e,this._logLevel=Jd,this._logHandler=ep,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const tp=(t,e)=>e.some(n=>t instanceof n);let ul,hl;function np(){return ul||(ul=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sp(){return hl||(hl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gc=new WeakMap,Ji=new WeakMap,mc=new WeakMap,vi=new WeakMap,Wr=new WeakMap;function ip(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(gt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gc.set(n,t)}).catch(()=>{}),Wr.set(e,t),e}function rp(t){if(Ji.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ji.set(t,e)}let Zi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ji.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function op(t){Zi=t(Zi)}function lp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ei(this),e,...n);return mc.set(s,e.sort?e.sort():[e]),gt(s)}:sp().includes(t)?function(...e){return t.apply(Ei(this),e),gt(gc.get(this))}:function(...e){return gt(t.apply(Ei(this),e))}}function ap(t){return typeof t=="function"?lp(t):(t instanceof IDBTransaction&&rp(t),tp(t,np())?new Proxy(t,Zi):t)}function gt(t){if(t instanceof IDBRequest)return ip(t);if(vi.has(t))return vi.get(t);const e=ap(t);return e!==t&&(vi.set(t,e),Wr.set(e,t)),e}const Ei=t=>Wr.get(t);function cp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=gt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(gt(o.result),a.oldVersion,a.newVersion,gt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const up=["get","getKey","getAll","getAllKeys","count"],hp=["put","add","delete","clear"],bi=new Map;function fl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bi.get(e))return bi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=hp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||up.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return bi.set(e,r),r}op(t=>Po(Ao({},t),{get:(e,n,s)=>fl(e,n)||t.get(e,n,s),has:(e,n)=>!!fl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function dp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const er="@firebase/app",dl="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new _c("@firebase/app"),pp="@firebase/app-compat",_p="@firebase/analytics-compat",gp="@firebase/analytics",mp="@firebase/app-check-compat",yp="@firebase/app-check",Cp="@firebase/auth",vp="@firebase/auth-compat",Ep="@firebase/database",bp="@firebase/database-compat",wp="@firebase/functions",Ip="@firebase/functions-compat",Tp="@firebase/installations",Sp="@firebase/installations-compat",Np="@firebase/messaging",xp="@firebase/messaging-compat",Rp="@firebase/performance",Ap="@firebase/performance-compat",Pp="@firebase/remote-config",Op="@firebase/remote-config-compat",kp="@firebase/storage",Dp="@firebase/storage-compat",Mp="@firebase/firestore",Fp="@firebase/firestore-compat",Lp="firebase",Bp="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]",Up={[er]:"fire-core",[pp]:"fire-core-compat",[gp]:"fire-analytics",[_p]:"fire-analytics-compat",[yp]:"fire-app-check",[mp]:"fire-app-check-compat",[Cp]:"fire-auth",[vp]:"fire-auth-compat",[Ep]:"fire-rtdb",[bp]:"fire-rtdb-compat",[wp]:"fire-fn",[Ip]:"fire-fn-compat",[Tp]:"fire-iid",[Sp]:"fire-iid-compat",[Np]:"fire-fcm",[xp]:"fire-fcm-compat",[Rp]:"fire-perf",[Ap]:"fire-perf-compat",[Pp]:"fire-rc",[Op]:"fire-rc-compat",[kp]:"fire-gcs",[Dp]:"fire-gcs-compat",[Mp]:"fire-fst",[Fp]:"fire-fst-compat","fire-js":"fire-js",[Lp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new Map,nr=new Map;function Hp(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xs(t){const e=t.name;if(nr.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;nr.set(e,t);for(const n of Ns.values())Hp(n,t);return!0}function Wp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mt=new dc("app","Firebase",$p);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=Bp;function qp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:tr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(n||(n=Ld()),!n)throw mt.create("no-options");const r=Ns.get(i);if(r){if(Xi(n,r.options)&&Xi(s,r.config))return r;throw mt.create("duplicate-app",{appName:i})}const o=new Qd(i);for(const a of nr.values())o.addComponent(a);const l=new Vp(n,s,o);return Ns.set(i,l),l}function zp(t=tr){const e=Ns.get(t);if(!e&&t===tr)return qp();if(!e)throw mt.create("no-app",{appName:t});return e}function en(t,e,n){var s;let i=(s=Up[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(l.join(" "));return}xs(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="firebase-heartbeat-database",Gp=1,Vn="firebase-heartbeat-store";let wi=null;function yc(){return wi||(wi=cp(Kp,Gp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vn)}}}).catch(t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})})),wi}async function Yp(t){var e;try{return(await yc()).transaction(Vn).objectStore(Vn).get(Cc(t))}catch(n){if(n instanceof Xn)Lt.warn(n.message);else{const s=mt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Lt.warn(s.message)}}}async function pl(t,e){var n;try{const i=(await yc()).transaction(Vn,"readwrite");return await i.objectStore(Vn).put(e,Cc(t)),i.done}catch(s){if(s instanceof Xn)Lt.warn(s.message);else{const i=mt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Lt.warn(i.message)}}}function Cc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=1024,Xp=30*24*60*60*1e3;class Jp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new e_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_l();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Xp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_l(),{heartbeatsToSend:n,unsentEntries:s}=Zp(this._heartbeatsCache.heartbeats),i=Ts(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _l(){return new Date().toISOString().substring(0,10)}function Zp(t,e=Qp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),gl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class e_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rd()?Ad().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gl(t){return Ts(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){xs(new $n("platform-logger",e=>new fp(e),"PRIVATE")),xs(new $n("heartbeat",e=>new Jp(e),"PRIVATE")),en(er,dl,t),en(er,dl,"esm2017"),en("fire-js","")}t_("");const ml="@firebase/database",yl="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc="";function n_(t){vc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new s_(e)}}catch{}return new i_},Pt=Ec("localStorage"),sr=Ec("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new _c("@firebase/database"),r_=function(){let t=1;return function(){return t++}}(),bc=function(t){const e=zd(t),n=new qd;n.update(e);const s=n.digest();return Ur.encodeByteArray(s)},Zn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Zn.apply(null,s):typeof s=="object"?e+=de(s):e+=s,e+=" "}return e};let Ft=null,Cl=!0;const o_=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(tn.logLevel=Y.VERBOSE,Ft=tn.log.bind(tn),e&&sr.set("logging_enabled",!0)):typeof t=="function"?Ft=t:(Ft=null,sr.remove("logging_enabled"))},ye=function(...t){if(Cl===!0&&(Cl=!1,Ft===null&&sr.get("logging_enabled")===!0&&o_(!0)),Ft){const e=Zn.apply(null,t);Ft(e)}},es=function(t){return function(...e){ye(t,...e)}},ir=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zn(...t);tn.error(e)},it=function(...t){const e=`FIREBASE FATAL ERROR: ${Zn(...t)}`;throw tn.error(e),new Error(e)},Ne=function(...t){const e="FIREBASE WARNING: "+Zn(...t);tn.warn(e)},l_=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},a_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hn="[MIN_NAME]",Bt="[MAX_NAME]",mn=function(t,e){if(t===e)return 0;if(t===hn||e===Bt)return-1;if(e===hn||t===Bt)return 1;{const n=vl(t),s=vl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},c_=function(t,e){return t===e?0:t<e?-1:1},bn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},$r=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=de(e[s]),n+=":",n+=$r(t[e[s]]);return n+="}",n},Ic=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Tc=function(t){E(!wc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},u_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},h_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function f_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const d_=new RegExp("^-?(0*)\\d{1,10}$"),p_=-2147483648,__=2147483647,vl=function(t){if(d_.test(t)){const e=Number(t);if(e>=p_&&e<=__)return e}return null},yn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ne("Exception was thrown by user callback.",n),e},Math.floor(0))}},g_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},On=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ne(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ne(e)}}class nn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="5",Sc="v",Nc="s",xc="r",Rc="f",Ac=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pc="ls",Oc="p",rr="ac",kc="websocket",Dc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function C_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Fc(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===kc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Dc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);C_(t)&&(n.ns=t.namespace);const i=[];return xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.counters_={}}incrementCounter(e,n=1){lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Td(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii={},Ti={};function jr(t){const e=t.toString();return Ii[e]||(Ii[e]=new v_),Ii[e]}function E_(t,e){const n=t.toString();return Ti[n]||(Ti[n]=e()),Ti[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&yn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="start",w_="close",I_="pLPCommand",T_="pRTLPCB",Lc="id",Bc="pw",Uc="ser",S_="cb",N_="seg",x_="ts",R_="d",A_="dframe",Hc=1870,Wc=30,P_=Hc-Wc,O_=25e3,k_=3e4;class Xt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=es(e),this.stats_=jr(n),this.urlFn=a=>(this.appCheckToken&&(a[rr]=this.appCheckToken),Fc(n,Dc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new b_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(k_)),a_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===El)this.id=l,this.password=a;else if(o===w_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[El]="t",s[Uc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[S_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Sc]=Vr,this.transportSessionId&&(s[Nc]=this.transportSessionId),this.lastSessionId&&(s[Pc]=this.lastSessionId),this.applicationId&&(s[Oc]=this.applicationId),this.appCheckToken&&(s[rr]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Ac.test(location.hostname)&&(s[xc]=Rc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xt.forceAllow_=!0}static forceDisallow(){Xt.forceDisallow_=!0}static isAvailable(){return Xt.forceAllow_?!0:!Xt.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!u_()&&!h_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ac(n),i=Ic(s,P_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[A_]="t",s[Lc]=e,s[Bc]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=r_(),window[I_+this.uniqueCallbackIdentifier]=e,window[T_+this.uniqueCallbackIdentifier]=n,this.myIFrame=qr.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ye("frame writing exception"),l.stack&&ye(l.stack),ye(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ye("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lc]=this.myID,e[Bc]=this.myPW,e[Uc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wc+s.length<=Hc;){const o=this.pendingSegs.shift();s=s+"&"+N_+i+"="+o.seg+"&"+x_+i+"="+o.ts+"&"+R_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(O_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=16384,M_=45e3;let Rs=null;typeof MozWebSocket!="undefined"?Rs=MozWebSocket:typeof WebSocket!="undefined"&&(Rs=WebSocket);class Le{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=es(this.connId),this.stats_=jr(n),this.connURL=Le.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Sc]=Vr,typeof location!="undefined"&&location.hostname&&Ac.test(location.hostname)&&(o[xc]=Rc),n&&(o[Nc]=n),s&&(o[Pc]=s),i&&(o[rr]=i),r&&(o[Oc]=r),Fc(e,kc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pt.set("previous_websocket_failure",!0);try{let s;hc(),this.mySock=new Rs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Rs!==null&&!Le.forceDisallow_}static previouslyFailed(){return Pt.isInMemoryStorage||Pt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Wn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ic(n,D_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(M_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Le.responsesRequiredToBeHealthy=2;Le.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Xt,Le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Le&&Le.isAvailable();let s=n&&!Le.previouslyFailed();if(e.webSocketOnly&&(n||Ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Le];else{const i=this.transports_=[];for(const r of jn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);jn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}jn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=6e4,L_=5e3,B_=10*1024,U_=100*1024,Si="t",bl="d",H_="s",wl="r",W_="e",Il="o",Tl="a",Sl="n",Nl="p",$_="h";class V_{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=es("c:"+this.id+":"),this.transportManager_=new jn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=On(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>U_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>B_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Si in e){const n=e[Si];n===Tl?this.upgradeIfSecondaryHealthy_():n===wl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Il&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bn("t",e),s=bn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Tl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bn("t",e),s=bn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bn(Si,e);if(bl in e){const s=e[bl];if(n===$_)this.onHandshake_(s);else if(n===Sl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===H_?this.onConnectionShutdown_(s):n===wl?this.onReset_(s):n===W_?ir("Server Error: "+s):n===Il?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ir("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vr!==s&&Ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),On(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(F_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):On(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(L_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends Vc{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!uc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new As}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=32,Rl=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new G("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vt(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function jc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function j_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ue(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof G)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new G(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Te(t,e){const n=L(t),s=L(e);if(n===null)return e;if(n===s)return Te(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zr(t,e){if(vt(t)!==vt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ue(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(vt(t)>vt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class q_{constructor(e,n){this.errorPrefix_=n,this.parts_=qc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ni(this.parts_[s]);Kc(this)}}function z_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ni(e),Kc(t)}function K_(t){const e=t.parts_.pop();t.byteLength_-=ni(e),t.parts_.length>0&&(t.byteLength_-=1)}function Kc(t){if(t.byteLength_>Rl)throw new Error(t.errorPrefix_+"has a key path longer than "+Rl+" bytes ("+t.byteLength_+").");if(t.parts_.length>xl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xl+") or object contains a cycle "+St(t))}function St(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Vc{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Kr}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=1e3,G_=60*5*1e3,Al=30*1e3,Y_=1.3,Q_=3e4,X_="server_kill",Pl=3;class nt extends $c{constructor(e,n,s,i,r,o,l,a){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=nt.nextPersistentConnectionId_++,this.log_=es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wn,this.maxReconnectDelay_=G_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!hc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Kr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&As.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(de(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ti,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;nt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&lt(e,"w")){const s=un(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Vd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Al)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$d(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ir("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Q_&&(this.reconnectDelay_=wn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Y_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ye("getToken() completed but was canceled"):(ye("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new V_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Ne(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(X_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ne(h),a())}}}interrupt(e){ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],al(this.interruptReasons_)&&(this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>$r(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new G(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pl&&(this.reconnectDelay_=Al,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vc.replace(/\./g,"-")]=1,uc()?e["framework.cordova"]=1:xd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=As.getInstance().currentlyOnline();return al(this.interruptReasons_)&&e}}nt.nextPersistentConnectionId_=0;nt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new B(hn,e),i=new B(hn,n);return this.compare(s,i)!==0}minPost(){return B.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us;class Gc extends si{static get __EMPTY_NODE(){return us}static set __EMPTY_NODE(e){us=e}compare(e,n){return mn(e.name,n.name)}isDefinedOn(e){throw gn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(Bt,us)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,us)}toString(){return".key"}}const sn=new Gc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:fe.RED,this.left=i!=null?i:Se.EMPTY_NODE,this.right=r!=null?r:Se.EMPTY_NODE}copy(e,n,s,i,r){return new fe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Se.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class J_{copy(e,n,s,i,r){return this}insert(e,n,s){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Se{constructor(e,n=Se.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Se(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hs(this.root_,null,this.comparator_,!0,e)}}Se.EMPTY_NODE=new J_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t,e){return mn(t.name,e.name)}function Gr(t,e){return mn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or;function eg(t){or=t}const Yc=function(t){return typeof t=="number"?"number:"+Tc(t):"string:"+t},Qc=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&lt(e,".sv"),"Priority must be a string or number.")}else E(t===or||t.isEmpty(),"priority of unexpected type.");E(t===or||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;class he{constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qc(this.priorityNode_)}static set __childrenNodeConstructor(e){Ol=e}static get __childrenNodeConstructor(){return Ol}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:L(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=L(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||vt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Tc(this.value_):e+=this.value_,this.lazyHash_=bc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),r=he.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc,Jc;function tg(t){Xc=t}function ng(t){Jc=t}class sg extends si{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?mn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(Bt,new he("[PRIORITY-POST]",Jc))}makePost(e,n){const s=Xc(e);return new B(n,new he("[PRIORITY-POST]",s))}toString(){return".priority"}}const oe=new sg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=Math.log(2);class rg{constructor(e){const n=r=>parseInt(Math.log(r)/ig,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ps=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new fe(d,h.node,fe.BLACK,null,null);{const g=parseInt(u/2,10)+a,v=i(a,g),S=i(g+1,c);return h=t[g],d=n?n(h):h,new fe(d,h.node,fe.BLACK,v,S)}},r=function(a){let c=null,u=null,h=t.length;const d=function(v,S){const x=h-v,M=h;h-=v;const ae=i(x+1,M),se=t[x],H=n?n(se):se;g(new fe(H,se.node,S,null,ae))},g=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<a.count;++v){const S=a.nextBitIsOne(),x=Math.pow(2,a.count-(v+1));S?d(x,fe.BLACK):(d(x,fe.BLACK),d(x,fe.RED))}return u},o=new rg(t.length),l=r(o);return new Se(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ni;const Gt={};class et{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Gt&&oe,"ChildrenNode.ts has not been loaded"),Ni=Ni||new et({".priority":Gt},{".priority":oe}),Ni}get(e){const n=un(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Se?n:null}hasIndex(e){return lt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==sn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(B.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Ps(s,e.getCompare()):l=Gt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new et(u,c)}addToIndexes(e,n){const s=Ss(this.indexes_,(i,r)=>{const o=un(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===Gt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(B.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Ps(l,o.getCompare())}else return Gt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new B(e.name,l))),a.insert(e,e.node)}});return new et(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ss(this.indexes_,i=>{if(i===Gt)return i;{const r=n.get(e.name);return r?i.remove(new B(e.name,r)):i}});return new et(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In;class O{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Qc(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return In||(In=new O(new Se(Gr),null,et.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||In}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?In:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new B(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?In:this.priorityNode_;return new O(i,o,r)}}updateChild(e,n){const s=L(e);if(s===null)return n;{E(L(e)!==".priority"||vt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Q(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),s++,r&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yc(this.getPriority().val())+":"),this.forEachChild(oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":bc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new B(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ts?-1:0}withIndex(e){if(e===sn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===sn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(oe),i=n.getIterator(oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===sn?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class og extends O{constructor(){super(new Se(Gr),O.EMPTY_NODE,et.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const ts=new og;Object.defineProperties(B,{MIN:{value:new B(hn,O.EMPTY_NODE)},MAX:{value:new B(Bt,ts)}});Gc.__EMPTY_NODE=O.EMPTY_NODE;he.__childrenNodeConstructor=O;eg(ts);ng(ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=!0;function ge(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,ge(e))}if(!(t instanceof Array)&&lg){const n=[];let s=!1;if(xe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new B(o,a)))}}),n.length===0)return O.EMPTY_NODE;const r=Ps(n,Z_,o=>o.name,Gr);if(s){const o=Ps(n,oe.getCompare());return new O(r,ge(e),new et({".priority":o},{".priority":oe}))}else return new O(r,ge(e),et.Default)}else{let n=O.EMPTY_NODE;return xe(t,(s,i)=>{if(lt(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}tg(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag extends si{constructor(e){super();this.indexPath_=e,E(!U(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?mn(e.name,n.name):r}makePost(e,n){const s=ge(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,s);return new B(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,ts);return new B(Bt,e)}toString(){return qc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg extends si{compare(e,n){const s=e.node.compareTo(n.node);return s===0?mn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const s=ge(e);return new B(n,s)}toString(){return".value"}}const ug=new cg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t){return{type:"value",snapshotNode:t}}function fn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(qn(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(fn(n,s)):o.trackChildChange(zn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(qn(i,r))}),n.isLeafNode()||n.forEachChild(oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(zn(i,r,o))}else s.trackChildChange(fn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.indexedFilter_=new Yr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Kn.getStartPost_(e),this.endPost_=Kn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new B(n,s))||(s=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const r=this;return n.forEachChild(oe,(o,l)=>{r.matches(new B(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.rangedFilter_=new Kn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new B(n,s))||(s=O.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(d,g)=>h(g,d)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new B(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(zn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(qn(n,h));const S=l.updateImmediateChild(n,O.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(fn(d.name,d.node)),S.updateImmediateChild(d.name,d.node)):S}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(qn(c.name,c.node)),r.trackChildChange(fn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new Qr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dg(t){return t.loadsAllData()?new Yr(t.getIndex()):t.hasLimit()?new fg(t):new Kn(t)}function kl(t){const e={};if(t.isDefault())return e;let n;return t.index_===oe?n="$priority":t.index_===ug?n="$value":t.index_===sn?n="$key":(E(t.index_ instanceof ag,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_&&(e.startAt=de(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+de(t.indexStartName_))),t.endSet_&&(e.endAt=de(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+de(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Dl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends $c{constructor(e,n,s,i){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=es("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Os.getListenId_(e,s),l={};this.listens_[o]=l;const a=kl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),un(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Os.getListenId_(e,n);delete this.listens_[s]}get(e){const n=kl(e._queryParams),s=e._path.toString(),i=new ti;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jd(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Wn(l.responseText)}catch{Ne("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ne("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){return{value:null,children:new Map}}function eu(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=L(e);t.children.has(s)||t.children.set(s,ks());const i=t.children.get(s);e=Q(e),eu(i,e,n)}}function lr(t,e,n){t.value!==null?n(e,t.value):_g(t,(s,i)=>{const r=new G(e.toString()+"/"+s);lr(i,r,n)})}function _g(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=10*1e3,mg=30*1e3,yg=5*60*1e3;class Cg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gg(e);const s=Ml+(mg-Ml)*Math.random();On(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;xe(e,(i,r)=>{r>0&&lt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),On(this.reportStats_.bind(this),Math.floor(Math.random()*2*yg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(He||(He={}));function tu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=He.ACK_USER_WRITE,this.source=tu()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Ds(j(),n,this.revert)}}else return E(L(this.path)===e,"operationForChild called for unrelated child."),new Ds(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this.source=e,this.path=n,this.type=He.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new Gn(this.source,j()):new Gn(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=He.OVERWRITE}operationForChild(e){return U(this.path)?new Ut(this.source,j(),this.snap.getImmediateChild(e)):new Ut(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=He.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new Ut(this.source,j(),n.value):new Yn(this.source,j(),n)}else return E(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yn(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Eg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(hg(o.childName,o.snapshotNode))}),Tn(t,i,"child_removed",e,s,n),Tn(t,i,"child_added",e,s,n),Tn(t,i,"child_moved",r,s,n),Tn(t,i,"child_changed",e,s,n),Tn(t,i,"value",e,s,n),i}function Tn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>wg(t,l,a)),o.forEach(l=>{const a=bg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function bg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function wg(t,e,n){if(e.childName==null||n.childName==null)throw gn("Should only compare child_ events.");const s=new B(e.childName,e.snapshotNode),i=new B(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e){return{eventCache:t,serverCache:e}}function kn(t,e,n,s){return ii(new Ht(e,n,s),t.serverCache)}function nu(t,e,n,s){return ii(t.eventCache,new Ht(e,n,s))}function ar(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi;const Ig=()=>(xi||(xi=new Se(c_)),xi);class ee{constructor(e,n=Ig()){this.value=e,this.children=n}static fromObject(e){let n=new ee(null);return xe(e,(s,i)=>{n=n.set(new G(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(U(e))return null;{const s=L(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Q(e),n);return r!=null?{path:ue(new G(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=L(e),s=this.children.get(n);return s!==null?s.subtree(Q(e)):new ee(null)}}set(e,n){if(U(e))return new ee(n,this.children);{const s=L(e),r=(this.children.get(s)||new ee(null)).set(Q(e),n),o=this.children.insert(s,r);return new ee(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=L(e),s=this.children.get(n);if(s){const i=s.remove(Q(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ee(null):new ee(this.value,r)}else return this}}get(e){if(U(e))return this.value;{const n=L(e),s=this.children.get(n);return s?s.get(Q(e)):null}}setTree(e,n){if(U(e))return n;{const s=L(e),r=(this.children.get(s)||new ee(null)).setTree(Q(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ee(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ue(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(U(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(Q(e),ue(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,s){if(U(e))return this;{this.value&&s(n,this.value);const i=L(e),r=this.children.get(i);return r?r.foreachOnPath_(Q(e),ue(n,i),s):new ee(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ue(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.writeTree_=e}static empty(){return new $e(new ee(null))}}function Dn(t,e,n){if(U(e))return new $e(new ee(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Te(i,e);return r=r.updateChild(o,n),new $e(t.writeTree_.set(i,r))}else{const i=new ee(n),r=t.writeTree_.setTree(e,i);return new $e(r)}}}function Fl(t,e,n){let s=t;return xe(n,(i,r)=>{s=Dn(s,ue(e,i),r)}),s}function Ll(t,e){if(U(e))return $e.empty();{const n=t.writeTree_.setTree(e,new ee(null));return new $e(n)}}function cr(t,e){return Vt(t,e)!=null}function Vt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Te(n.path,e)):null}function Bl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(s,i)=>{e.push(new B(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new B(s,i.value))}),e}function yt(t,e){if(U(e))return t;{const n=Vt(t,e);return n!=null?new $e(new ee(n)):new $e(t.writeTree_.subtree(e))}}function ur(t){return t.writeTree_.isEmpty()}function dn(t,e){return su(j(),t.writeTree_,e)}function su(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=su(ue(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ue(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t,e){return lu(e,t)}function Tg(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Dn(t.visibleWrites,e,n)),t.lastWriteId=s}function Sg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Ng(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&xg(l,s.path)?i=!1:Ue(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Rg(t),!0;if(s.snap)t.visibleWrites=Ll(t.visibleWrites,s.path);else{const l=s.children;xe(l,a=>{t.visibleWrites=Ll(t.visibleWrites,ue(s.path,a))})}return!0}else return!1}function xg(t,e){if(t.snap)return Ue(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ue(ue(t.path,n),e))return!0;return!1}function Rg(t){t.visibleWrites=iu(t.allWrites,Ag,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ag(t){return t.visible}function iu(t,e,n){let s=$e.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ue(n,o)?(l=Te(n,o),s=Dn(s,l,r.snap)):Ue(o,n)&&(l=Te(o,n),s=Dn(s,j(),r.snap.getChild(l)));else if(r.children){if(Ue(n,o))l=Te(n,o),s=Fl(s,l,r.children);else if(Ue(o,n))if(l=Te(o,n),U(l))s=Fl(s,j(),r.children);else{const a=un(r.children,L(l));if(a){const c=a.getChild(Q(l));s=Dn(s,j(),c)}}}else throw gn("WriteRecord should have .snap or .children")}}return s}function ru(t,e,n,s,i){if(!s&&!i){const r=Vt(t.visibleWrites,e);if(r!=null)return r;{const o=yt(t.visibleWrites,e);if(ur(o))return n;if(n==null&&!cr(o,j()))return null;{const l=n||O.EMPTY_NODE;return dn(o,l)}}}else{const r=yt(t.visibleWrites,e);if(!i&&ur(r))return n;if(!i&&n==null&&!cr(r,j()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ue(c.path,e)||Ue(e,c.path))},l=iu(t.allWrites,o,e),a=n||O.EMPTY_NODE;return dn(l,a)}}}function Pg(t,e,n){let s=O.EMPTY_NODE;const i=Vt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=yt(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=dn(yt(r,new G(o)),l);s=s.updateImmediateChild(o,a)}),Bl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=yt(t.visibleWrites,e);return Bl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Og(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ue(e,n);if(cr(t.visibleWrites,r))return null;{const o=yt(t.visibleWrites,r);return ur(o)?i.getChild(n):dn(o,i.getChild(n))}}function kg(t,e,n,s){const i=ue(e,n),r=Vt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=yt(t.visibleWrites,i);return dn(o,s.getNode().getImmediateChild(n))}else return null}function Dg(t,e){return Vt(t.visibleWrites,e)}function Mg(t,e,n,s,i,r,o){let l;const a=yt(t.visibleWrites,e),c=Vt(a,j());if(c!=null)l=c;else if(n!=null)l=dn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function Fg(){return{visibleWrites:$e.empty(),allWrites:[],lastWriteId:-1}}function Ms(t,e,n,s){return ru(t.writeTree,t.treePath,e,n,s)}function eo(t,e){return Pg(t.writeTree,t.treePath,e)}function Ul(t,e,n,s){return Og(t.writeTree,t.treePath,e,n,s)}function Fs(t,e){return Dg(t.writeTree,ue(t.treePath,e))}function Lg(t,e,n,s,i,r){return Mg(t.writeTree,t.treePath,e,n,s,i,r)}function to(t,e,n){return kg(t.writeTree,t.treePath,e,n)}function ou(t,e){return lu(ue(t.treePath,e),t.writeTree)}function lu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,zn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,qn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,fn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,zn(s,e.snapshotNode,i.oldSnap));else throw gn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const au=new Ug;class no{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ht(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return to(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wt(this.viewCache_),r=Lg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){return{filter:t}}function Wg(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $g(t,e,n,s,i){const r=new Bg;let o,l;if(n.type===He.OVERWRITE){const c=n;c.source.fromUser?o=hr(t,e,c.path,c.snap,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=Ls(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===He.MERGE){const c=n;c.source.fromUser?o=jg(t,e,c.path,c.children,s,i,r):(E(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=fr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===He.ACK_USER_WRITE){const c=n;c.revert?o=Kg(t,e,c.path,s,i,r):o=qg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===He.LISTEN_COMPLETE)o=zg(t,e,n.path,s,r);else throw gn("Unknown operation type: "+n.type);const a=r.getChanges();return Vg(e,o,a),{viewCache:o,changes:a}}function Vg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ar(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Zc(ar(e)))}}function cu(t,e,n,s,i,r){const o=e.eventCache;if(Fs(s,n)!=null)return e;{let l,a;if(U(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Wt(e),u=c instanceof O?c:O.EMPTY_NODE,h=eo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ms(s,Wt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=L(n);if(c===".priority"){E(vt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ul(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=Q(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Ul(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=to(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return kn(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Ls(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(U(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=L(n);if(!a.isCompleteForPath(n)&&vt(n)>1)return e;const v=Q(n),x=a.getNode().getImmediateChild(g).updateChild(v,s);g===".priority"?c=u.updatePriority(a.getNode(),x):c=u.updateChild(a.getNode(),g,x,v,au,null)}const h=nu(e,c,a.isFullyInitialized()||U(n),u.filtersNodes()),d=new no(i,h,r);return cu(t,h,n,i,d,l)}function hr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new no(i,e,r);if(U(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=kn(e,c,!0,t.filter.filtersNodes());else{const h=L(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=kn(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Q(n),g=l.getNode().getImmediateChild(h);let v;if(U(d))v=s;else{const S=u.getCompleteChild(h);S!=null?jc(d)===".priority"&&S.getChild(zc(d)).isEmpty()?v=S:v=S.updateChild(d,s):v=O.EMPTY_NODE}if(g.equals(v))a=e;else{const S=t.filter.updateChild(l.getNode(),h,v,d,u,o);a=kn(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Hl(t,e){return t.eventCache.isCompleteForChild(e)}function jg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ue(n,a);Hl(e,L(u))&&(l=hr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ue(n,a);Hl(e,L(u))||(l=hr(t,l,u,c,i,r,o))}),l}function Wl(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function fr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;U(n)?c=s:c=new ee(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),v=Wl(t,g,d);a=Ls(t,a,new G(h),v,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const v=e.serverCache.getNode().getImmediateChild(h),S=Wl(t,v,d);a=Ls(t,a,new G(h),S,i,r,o,l)}}),a}function qg(t,e,n,s,i,r,o){if(Fs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ls(t,e,n,a.getNode().getChild(n),i,r,l,o);if(U(n)){let c=new ee(null);return a.getNode().forEachChild(sn,(u,h)=>{c=c.set(new G(u),h)}),fr(t,e,n,c,i,r,l,o)}else return e}else{let c=new ee(null);return s.foreach((u,h)=>{const d=ue(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),fr(t,e,n,c,i,r,l,o)}}function zg(t,e,n,s,i){const r=e.serverCache,o=nu(e,r.getNode(),r.isFullyInitialized()||U(n),r.isFiltered());return cu(t,o,n,s,au,i)}function Kg(t,e,n,s,i,r){let o;if(Fs(s,n)!=null)return e;{const l=new no(s,e,i),a=e.eventCache.getNode();let c;if(U(n)||L(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ms(s,Wt(e));else{const h=e.serverCache.getNode();E(h instanceof O,"serverChildren would be complete if leaf node"),u=eo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=L(n);let h=to(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,Q(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,O.EMPTY_NODE,Q(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ms(s,Wt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Fs(s,j())!=null,kn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Yr(s.getIndex()),r=dg(s);this.processor_=Hg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(O.EMPTY_NODE,l.getNode(),null),u=new Ht(a,o.isFullyInitialized(),i.filtersNodes()),h=new Ht(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ii(h,u),this.eventGenerator_=new vg(this.query_)}get query(){return this.query_}}function Yg(t){return t.viewCache_.serverCache.getNode()}function Qg(t,e){const n=Wt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function $l(t){return t.eventRegistrations_.length===0}function Xg(t,e){t.eventRegistrations_.push(e)}function Vl(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function jl(t,e,n,s){e.type===He.MERGE&&e.source.queryId!==null&&(E(Wt(t.viewCache_),"We should always have a full cache before handling merges"),E(ar(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=$g(t.processor_,i,e,n,s);return Wg(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,uu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Jg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(r,o)=>{s.push(fn(r,o))}),n.isFullyInitialized()&&s.push(Zc(n.getNode())),uu(t,s,n.getNode(),e)}function uu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Eg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs;class Zg{constructor(){this.views=new Map}}function em(t){E(!Bs,"__referenceConstructor has already been defined"),Bs=t}function tm(){return E(Bs,"Reference.ts has not been loaded"),Bs}function nm(t){return t.views.size===0}function so(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),jl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(jl(o,e,n,s));return r}}function sm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ms(n,i?s:null),a=!1;l?a=!0:s instanceof O?(l=eo(n,s),a=!1):(l=O.EMPTY_NODE,a=!1);const c=ii(new Ht(l,a,!1),new Ht(s,i,!1));return new Gg(e,c)}return o}function im(t,e,n,s,i,r){const o=sm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Xg(o,n),Jg(o,n)}function rm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Et(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Vl(c,n,s)),$l(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Vl(a,n,s)),$l(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Et(t)&&r.push(new(tm())(e._repo,e._path)),{removed:r,events:o}}function hu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function rn(t,e){let n=null;for(const s of t.views.values())n=n||Qg(s,e);return n}function fu(t,e){if(e._queryParams.loadsAllData())return ri(t);{const s=e._queryIdentifier;return t.views.get(s)}}function du(t,e){return fu(t,e)!=null}function Et(t){return ri(t)!=null}function ri(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us;function om(t){E(!Us,"__referenceConstructor has already been defined"),Us=t}function lm(){return E(Us,"Reference.ts has not been loaded"),Us}let am=1;class ql{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=Fg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pu(t,e,n,s,i){return Tg(t.pendingWriteTree_,e,n,s,i),i?ns(t,new Ut(tu(),e,n)):[]}function Ot(t,e,n=!1){const s=Sg(t.pendingWriteTree_,e);if(Ng(t.pendingWriteTree_,e)){let r=new ee(null);return s.snap!=null?r=r.set(j(),!0):xe(s.children,o=>{r=r.set(new G(o),!0)}),ns(t,new Ds(s.path,r,n))}else return[]}function oi(t,e,n){return ns(t,new Ut(Xr(),e,n))}function cm(t,e,n){const s=ee.fromObject(n);return ns(t,new Yn(Xr(),e,s))}function um(t,e){return ns(t,new Gn(Xr(),e))}function hm(t,e,n){const s=ro(t,n);if(s){const i=oo(s),r=i.path,o=i.queryId,l=Te(r,e),a=new Gn(Jr(o),l);return lo(t,r,a)}else return[]}function dr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||du(o,e))){const a=rm(o,e,n,s);nm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>Et(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=pm(d);for(let v=0;v<g.length;++v){const S=g[v],x=S.query,M=mu(t,S);t.listenProvider_.startListening(Mn(x),Hs(t,x),M.hashFn,M.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Mn(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(li(d));t.listenProvider_.stopListening(Mn(d),g)}))}_m(t,c)}return l}function fm(t,e,n,s){const i=ro(t,s);if(i!=null){const r=oo(i),o=r.path,l=r.queryId,a=Te(o,e),c=new Ut(Jr(l),a,n);return lo(t,o,c)}else return[]}function dm(t,e,n,s){const i=ro(t,s);if(i){const r=oo(i),o=r.path,l=r.queryId,a=Te(o,e),c=ee.fromObject(n),u=new Yn(Jr(l),a,c);return lo(t,o,u)}else return[]}function zl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const v=Te(d,i);r=r||rn(g,v),o=o||Et(g)});let l=t.syncPointTree_.get(i);l?(o=o||Et(l),r=r||rn(l,j())):(l=new Zg,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const S=rn(v,j());S&&(r=r.updateImmediateChild(g,S))}));const c=du(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=li(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=gm();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=Zr(t.pendingWriteTree_,i);let h=im(l,e,n,u,r,a);if(!c&&!o&&!s){const d=fu(l,e);h=h.concat(mm(t,e,d))}return h}function io(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Te(o,e),c=rn(l,a);if(c)return c});return ru(i,e,r,n,!0)}function ns(t,e){return _u(e,t.syncPointTree_,null,Zr(t.pendingWriteTree_,j()))}function _u(t,e,n,s){if(U(t.path))return gu(t,e,n,s);{const i=e.get(j());n==null&&i!=null&&(n=rn(i,j()));let r=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=ou(s,o);r=r.concat(_u(l,a,c,u))}return i&&(r=r.concat(so(i,t,s,n))),r}}function gu(t,e,n,s){const i=e.get(j());n==null&&i!=null&&(n=rn(i,j()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=ou(s,o),u=t.operationForChild(o);u&&(r=r.concat(gu(u,l,a,c)))}),i&&(r=r.concat(so(i,t,s,n))),r}function mu(t,e){const n=e.query,s=Hs(t,n);return{hashFn:()=>(Yg(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?hm(t,n._path,s):um(t,n._path);{const r=f_(i,n);return dr(t,n,null,r)}}}}function Hs(t,e){const n=li(e);return t.queryToTagMap.get(n)}function li(t){return t._path.toString()+"$"+t._queryIdentifier}function ro(t,e){return t.tagToQueryMap.get(e)}function oo(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function lo(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=Zr(t.pendingWriteTree_,e);return so(s,n,i,null)}function pm(t){return t.fold((e,n,s)=>{if(n&&Et(n))return[ri(n)];{let i=[];return n&&(i=hu(n)),xe(s,(r,o)=>{i=i.concat(o)}),i}})}function Mn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(lm())(t._repo,t._path):t}function _m(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=li(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function gm(){return am++}function mm(t,e,n){const s=e._path,i=Hs(t,e),r=mu(t,n),o=t.listenProvider_.startListening(Mn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!Et(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!U(c)&&u&&Et(u))return[ri(u).query];{let d=[];return u&&(d=d.concat(hu(u).map(g=>g.query))),xe(h,(g,v)=>{d=d.concat(v)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Mn(u),Hs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ao(n)}node(){return this.node_}}class co{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new co(this.syncTree_,n)}node(){return io(this.syncTree_,this.path_)}}const ym=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Kl=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Cm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vm(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Cm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},vm=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Em=function(t,e,n,s){return uo(e,new co(n,t),s)},yu=function(t,e,n){return uo(t,new ao(e),n)};function uo(t,e,n){const s=t.getPriority().val(),i=Kl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Kl(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new he(i))),o.forEachChild(oe,(l,a)=>{const c=uo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function fo(t,e){let n=e instanceof G?e:new G(e),s=t,i=L(n);for(;i!==null;){const r=un(s.node.children,i)||{children:{},childCount:0};s=new ho(i,s,r),n=Q(n),i=L(n)}return s}function Cn(t){return t.node.value}function Cu(t,e){t.node.value=e,pr(t)}function vu(t){return t.node.childCount>0}function bm(t){return Cn(t)===void 0&&!vu(t)}function ai(t,e){xe(t.node.children,(n,s)=>{e(new ho(n,t,s))})}function Eu(t,e,n,s){n&&!s&&e(t),ai(t,i=>{Eu(i,e,!0,s)}),n&&s&&e(t)}function wm(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ss(t){return new G(t.parent===null?t.name:ss(t.parent)+"/"+t.name)}function pr(t){t.parent!==null&&Im(t.parent,t.name,t)}function Im(t,e,n){const s=bm(n),i=lt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,pr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,pr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=/[\[\].#$\/\u0000-\u001F\u007F]/,Sm=/[\[\].#$\u0000-\u001F\u007F]/,Ri=10*1024*1024,bu=function(t){return typeof t=="string"&&t.length!==0&&!Tm.test(t)},wu=function(t){return typeof t=="string"&&t.length!==0&&!Sm.test(t)},Nm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wu(t)},xm=function(t,e,n,s){s&&e===void 0||po(Hr(t,"value"),e,n)},po=function(t,e,n){const s=n instanceof G?new q_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+St(s));if(typeof e=="function")throw new Error(t+"contains a function "+St(s)+" with contents = "+e.toString());if(wc(e))throw new Error(t+"contains "+e.toString()+" "+St(s));if(typeof e=="string"&&e.length>Ri/3&&ni(e)>Ri)throw new Error(t+"contains a string greater than "+Ri+" utf8 bytes "+St(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(xe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!bu(o)))throw new Error(t+" contains an invalid key ("+o+") "+St(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);z_(s,o),po(t,l,s),K_(s)}),i&&r)throw new Error(t+' contains ".value" child '+St(s)+" in addition to actual children.")}},Iu=function(t,e,n,s){if(!(s&&n===void 0)&&!wu(n))throw new Error(Hr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Rm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iu(t,e,n,s)},Tu=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Am=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Nm(n))throw new Error(Hr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _o(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!zr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Su(t,e,n){_o(t,n),Nu(t,s=>zr(s,e))}function rt(t,e,n){_o(t,n),Nu(t,s=>Ue(s,e)||Ue(e,s))}function Nu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Om(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Om(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ft&&ye("event: "+n.toString()),yn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="repo_interrupt",Dm=25;class Mm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Pm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ks(),this.transactionQueueTree_=new ho,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Fm(t,e,n){if(t.stats_=jr(t.repoInfo_),t.forceRestClient_||g_())t.server_=new Os(t.repoInfo_,(s,i,r,o)=>{Gl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Yl(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new nt(t.repoInfo_,e,(s,i,r,o)=>{Gl(t,s,i,r,o)},s=>{Yl(t,s)},s=>{Bm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=E_(t.repoInfo_,()=>new Cg(t.stats_,t.server_)),t.infoData_=new pg,t.infoSyncTree_=new ql({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=oi(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),mo(t,"connected",!1),t.serverSyncTree_=new ql({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);rt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Lm(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function go(t){return ym({timestamp:Lm(t)})}function Gl(t,e,n,s,i){t.dataUpdateCount++;const r=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ss(n,c=>ge(c));o=dm(t.serverSyncTree_,r,a,i)}else{const a=ge(n);o=fm(t.serverSyncTree_,r,a,i)}else if(s){const a=Ss(n,c=>ge(c));o=cm(t.serverSyncTree_,r,a)}else{const a=ge(n);o=oi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ci(t,r)),rt(t.eventQueue_,l,o)}function Yl(t,e){mo(t,"connected",e),e===!1&&Hm(t)}function Bm(t,e){xe(e,(n,s)=>{mo(t,n,s)})}function mo(t,e,n){const s=new G("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=oi(t.infoSyncTree_,s,i);rt(t.eventQueue_,s,r)}function xu(t){return t.nextWriteId_++}function Um(t,e,n,s,i){yo(t,"set",{path:e.toString(),value:n,priority:s});const r=go(t),o=ge(n,s),l=io(t.serverSyncTree_,e),a=yu(o,l,r),c=xu(t),u=pu(t.serverSyncTree_,e,a,c,!0);_o(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const v=d==="ok";v||Ne("set at "+e+" failed: "+d);const S=Ot(t.serverSyncTree_,c,!v);rt(t.eventQueue_,e,S),Vm(t,i,d,g)});const h=ku(t,e);ci(t,h),rt(t.eventQueue_,h,[])}function Hm(t){yo(t,"onDisconnectEvents");const e=go(t),n=ks();lr(t.onDisconnect_,j(),(i,r)=>{const o=Em(i,r,t.serverSyncTree_,e);eu(n,i,o)});let s=[];lr(n,j(),(i,r)=>{s=s.concat(oi(t.serverSyncTree_,i,r));const o=ku(t,i);ci(t,o)}),t.onDisconnect_=ks(),rt(t.eventQueue_,j(),s)}function Wm(t,e,n){let s;L(e._path)===".info"?s=zl(t.infoSyncTree_,e,n):s=zl(t.serverSyncTree_,e,n),Su(t.eventQueue_,e._path,s)}function Ql(t,e,n){let s;L(e._path)===".info"?s=dr(t.infoSyncTree_,e,n):s=dr(t.serverSyncTree_,e,n),Su(t.eventQueue_,e._path,s)}function $m(t){t.persistentConnection_&&t.persistentConnection_.interrupt(km)}function yo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ye(n,...e)}function Vm(t,e,n,s){e&&yn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ru(t,e,n){return io(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Co(t,e=t.transactionQueueTree_){if(e||ui(t,e),Cn(e)){const n=Pu(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&jm(t,ss(e),n)}else vu(e)&&ai(e,n=>{Co(t,n)})}function jm(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ru(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Te(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{yo(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ot(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ui(t,fo(t.transactionQueueTree_,e)),Co(t,t.transactionQueueTree_),rt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)yn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ne("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ci(t,e)}},o)}function ci(t,e){const n=Au(t,e),s=ss(n),i=Pu(t,n);return qm(t,i,s),s}function qm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Te(n,a.path);let u=!1,h;if(E(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Dm)u=!0,h="maxretry",i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Ru(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){po("transaction failed: Data returned ",g,a.path);let v=ge(g);typeof g=="object"&&g!=null&&lt(g,".priority")||(v=v.updatePriority(d.getPriority()));const x=a.currentWriteId,M=go(t),ae=yu(v,d,M);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=ae,a.currentWriteId=xu(t),o.splice(o.indexOf(x),1),i=i.concat(pu(t.serverSyncTree_,a.path,ae,a.currentWriteId,a.applyLocally)),i=i.concat(Ot(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0))}rt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}ui(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)yn(s[l]);Co(t,t.transactionQueueTree_)}function Au(t,e){let n,s=t.transactionQueueTree_;for(n=L(e);n!==null&&Cn(s)===void 0;)s=fo(s,n),e=Q(e),n=L(e);return s}function Pu(t,e){const n=[];return Ou(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ou(t,e,n){const s=Cn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ai(e,i=>{Ou(t,i,n)})}function ui(t,e){const n=Cn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Cu(e,n.length>0?n:void 0)}ai(e,s=>{ui(t,s)})}function ku(t,e){const n=ss(Au(t,e)),s=fo(t.transactionQueueTree_,e);return wm(s,i=>{Ai(t,i)}),Ai(t,s),Eu(s,i=>{Ai(t,i)}),n}function Ai(t,e){const n=Cn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ot(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cu(e,void 0):n.length=r+1,rt(t.eventQueue_,ss(e),i);for(let o=0;o<s.length;o++)yn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Km(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ne(`Invalid query segment '${n}' in query '${t}'`)}return e}const Xl=function(t,e){const n=Gm(t),s=n.namespace;n.domain==="firebase.com"&&it(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&it("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||l_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Mc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new G(n.pathString)}},Gm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=zm(t.substring(u,h)));const d=Km(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class Mu{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return U(this._path)?null:jc(this._path)}get ref(){return new at(this._repo,this._path)}get _queryIdentifier(){const e=Dl(this._queryParams),n=$r(e);return n==="{}"?"default":n}get _queryObject(){return Dl(this._queryParams)}isEqual(e){if(e=Jn(e),!(e instanceof vo))return!1;const n=this._repo===e._repo,s=zr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+j_(this._path)}}class at extends vo{constructor(e,n){super(e,n,new Qr,!1)}get parent(){const e=zc(this._path);return e===null?null:new at(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),s=Ws(this.ref,e);return new Qn(this._node.getChild(n),s,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Qn(i,Ws(this.ref,s),oe)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Iy(t,e){return t=Jn(t),t._checkNotDeleted("ref"),e!==void 0?Ws(t._root,e):t._root}function Ws(t,e){return t=Jn(t),L(t._path)===null?Rm("child","path",e,!1):Iu("child","path",e,!1),new at(t._repo,ue(t._path,e))}function Ty(t){return Tu("remove",t._path),Qm(t,null)}function Qm(t,e){t=Jn(t),Tu("set",t._path),xm("set",e,t._path,!1);const n=new ti;return Um(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Eo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Du("value",this,new Qn(e.snapshotNode,new at(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Mu(this,e,n):null}matches(e){return e instanceof Eo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class bo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Mu(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const s=Ws(new at(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Du(e.type,this,new Qn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof bo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Xm(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Ql(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Ym(n,r||void 0),l=e==="value"?new Eo(o):new bo(e,o);return Wm(t._repo,t,l),()=>Ql(t._repo,t,l)}function Sy(t,e,n,s){return Xm(t,"value",e,n,s)}em(at);om(at);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="FIREBASE_DATABASE_EMULATOR_HOST",_r={};let Zm=!1;function ey(t,e,n,s){t.repoInfo_=new Mc(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function ty(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||it("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ye("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Xl(r,i),l=o.repoInfo,a,c;typeof process!="undefined"&&process.env&&(c=process.env[Jm]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Xl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new nn(nn.OWNER):new y_(t.name,t.options,e);Am("Invalid Firebase Database URL",o),U(o.path)||it("Database URL must point to the root of a Firebase Database (not including a child path).");const h=sy(l,t,u,new m_(t.name,n));return new iy(h,t)}function ny(t,e){const n=_r[e];(!n||n[t.key]!==t)&&it(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$m(t),delete n[t.key]}function sy(t,e,n,s){let i=_r[e.name];i||(i={},_r[e.name]=i);let r=i[t.toURLString()];return r&&it("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Mm(t,Zm,n,s),i[t.toURLString()]=r,r}class iy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Fm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new at(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ny(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&it("Cannot call "+e+" on a deleted database.")}}function Ny(t=zp(),e){const n=Wp(t,"database").getImmediate({identifier:e}),s=Fd("database");return s&&ry(n,...s),n}function ry(t,e,n,s={}){t=Jn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&it("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&it('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new nn(nn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Bd(s.mockUserToken,t.app.options.projectId);r=new nn(o)}ey(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){n_(jp),xs(new $n("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ty(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),en(ml,yl,t),en(ml,yl,"esm2017")}nt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};oy();var ly="firebase",ay="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(ly,ay,"app");export{tt as A,Ey as B,by as C,qe as F,wy as a,Ty as b,_y as c,dy as d,Sy as e,Qa as f,Ny as g,ba as h,qp as i,py as j,yy as k,fy as l,vy as m,yr as n,Af as o,hy as p,my as q,Iy as r,Qm as s,uy as t,Ph as u,Cy as v,_s as w,Of as x,gy as y,Ff as z};
