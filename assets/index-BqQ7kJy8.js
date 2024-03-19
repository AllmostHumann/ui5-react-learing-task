import{l as o,m as s,n as m,s as H,p as w,q as v,aQ as u,v as z,U as b,x as g,w as y}from"./index-q_WfVvSH.js";var d;(function(e){e.H1="H1",e.H2="H2",e.H3="H3",e.H4="H4",e.H5="H5",e.H6="H6"})(d||(d={}));const f=d;function $(e,t,i){return o`${this.h1?x.call(this,e,t,i):void 0}${this.h2?_.call(this,e,t,i):void 0}${this.h3?k.call(this,e,t,i):void 0}${this.h4?T.call(this,e,t,i):void 0}${this.h5?F.call(this,e,t,i):void 0}${this.h6?S.call(this,e,t,i):void 0}`}function x(e,t,i){return o`<h1 class="ui5-title-root"><span id="${s(this._id)}-inner"><slot></slot></span></h1>`}function _(e,t,i){return o`<h2 class="ui5-title-root"><span id="${s(this._id)}-inner"><slot></slot></span></h2>`}function k(e,t,i){return o`<h3 class="ui5-title-root"><span id="${s(this._id)}-inner"><slot></slot></span></h3>`}function T(e,t,i){return o`<h4 class="ui5-title-root"><span id="${s(this._id)}-inner"><slot></slot></span></h4>`}function F(e,t,i){return o`<h5 class="ui5-title-root"><span id="${s(this._id)}-inner"><slot></slot></span></h5>`}function S(e,t,i){return o`<h6 class="ui5-title-root"><span id="${s(this._id)}-inner"><slot></slot></span></h6>`}m("@ui5/webcomponents-theming","sap_horizon",async()=>H);m("@ui5/webcomponents","sap_horizon",async()=>w);const L={packageName:"@ui5/webcomponents",fileName:"themes/Title.css.ts",content:`:host(:not([hidden])){display:block;cursor:text}:host{max-width:100%;color:var(--sapGroup_TitleTextColor);font-size:var(--sapFontHeader2Size);font-family:"72override",var(--sapFontHeaderFamily);text-shadow:var(--sapContent_TextShadow)}.ui5-title-root{display:inline-block;position:relative;font-weight:400;font-size:inherit;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;vertical-align:bottom;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0;margin:0;cursor:inherit}:host([wrapping-type="Normal"]) .ui5-title-root,:host([wrapping-type="Normal"]) ::slotted(*){white-space:pre-line}::slotted(*){font-size:inherit;font-family:inherit;text-shadow:inherit}:host([level="H1"]){font-size:var(--sapFontHeader1Size)}:host([level="H2"]){font-size:var(--sapFontHeader2Size)}:host([level="H3"]){font-size:var(--sapFontHeader3Size)}:host([level="H4"]){font-size:var(--sapFontHeader4Size)}:host([level="H5"]){font-size:var(--sapFontHeader5Size)}:host([level="H6"]){font-size:var(--sapFontHeader6Size)}
`};var c=function(e,t,i,a){var l=arguments.length,n=l<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,a);else for(var p=e.length-1;p>=0;p--)(h=e[p])&&(n=(l<3?h(n):l>3?h(t,i,n):h(t,i))||n);return l>3&&n&&Object.defineProperty(t,i,n),n};let r=class extends b{get normalizedLevel(){return this.level.toLowerCase()}get h1(){return this.normalizedLevel==="h1"}get h2(){return this.normalizedLevel==="h2"}get h3(){return this.normalizedLevel==="h3"}get h4(){return this.normalizedLevel==="h4"}get h5(){return this.normalizedLevel==="h5"}get h6(){return this.normalizedLevel==="h6"}};c([v({type:u,defaultValue:u.None})],r.prototype,"wrappingType",void 0);c([v({type:f,defaultValue:f.H2})],r.prototype,"level",void 0);r=c([z({tag:"ui5-title",renderer:g,template:$,styles:L})],r);r.define();const N=y("ui5-title",["level","wrappingType"],[],[],[]);N.displayName="Title";export{N as T};
