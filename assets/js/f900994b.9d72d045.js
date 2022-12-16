"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2785],{7357:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(3366),o=n(7294),i=n(6010),l=n(9731),s=n(6523),v=n(9707),u=n(9718),c=n(5893);const d=["className","component"];var f=n(7078);const p=function(e={}){const{defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:f}=e,p=(0,l.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.Z);return o.forwardRef((function(e,o){const l=(0,u.Z)(t),s=(0,v.Z)(e),{className:m,component:h="div"}=s,w=(0,r.Z)(s,d);return(0,c.jsx)(p,(0,a.Z)({as:h,ref:o,className:(0,i.Z)(m,f?f(n):n),theme:l},w))}))}({defaultTheme:(0,n(1265).Z)(),defaultClassName:"MuiBox-root",generateClassName:f.Z.generate}),m=p},629:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(3366),r=n(7462),o=n(7294),i=n(6010),l=n(4780),s=n(1796),v=n(1496);const u=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var c=n(7623),d=n(1588),f=n(4867);function p(e){return(0,f.Z)("MuiPaper",e)}(0,d.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=n(5893);const h=["className","component","elevation","square","variant"],w=(0,v.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,r.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",u(t.elevation))}, ${(0,s.Fq)("#fff",u(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))})),b=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiPaper"}),{className:o,component:s="div",elevation:v=1,square:u=!1,variant:d="elevation"}=n,f=(0,a.Z)(n,h),b=(0,r.Z)({},n,{component:s,elevation:v,square:u,variant:d}),Z=(e=>{const{square:t,elevation:n,variant:a,classes:r}=e,o={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${n}`]};return(0,l.Z)(o,p,r)})(b);return(0,m.jsx)(w,(0,r.Z)({as:s,ownerState:b,className:(0,i.Z)(Z.root,o),ref:t},f))}))},1066:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(7294),r=n(629),o=n(7357),i=n(5861),l=n(9960),s=n(6409);function v(){const e=(0,s.g)();return a.createElement(a.Fragment,null,a.createElement(r.Z,null,a.createElement(o.Z,{sx:{position:"absolute",bottom:"3vh",left:"3vh"}},a.createElement(l.Z,{to:"/"},a.createElement(i.Z,{variant:"h5"},"Back"))),a.createElement("iframe",{src:"https://louiscklaw-bus-dashboard.web.app/bus_stops/41E81A921D79F375/C3201264CC8E5C5D/6CF34EF02CDBE26B/26305AF62FBEE2BC/1AEB39A1738104D3/7188D2451C5AF461",target:"_parent",height:e,width:"100%"})))}},6409:(e,t,n)=>{n.d(t,{g:()=>s});var a=n(7294),r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},i=!1,l=(0,a.forwardRef)((function(e,t){var n=e.style,l=o(e,["style"]),v=s();!i&&(null==n?void 0:n.height)&&(i=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var u=r(r({},n),{height:v?v+"px":"100vh"});return a.createElement("div",r({ref:t,style:u},l))}));l.displayName="Div100vh";function s(){var e=(0,a.useState)(v),t=e[0],n=e[1],r=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,a.useEffect)((function(){u()&&n(!0)}),[]),t}();return(0,a.useEffect)((function(){if(r)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)};function e(){var e=v();n(e)}}),[r]),r?t:null}function v(){return u()?window.innerHeight:null}function u(){return"undefined"!=typeof window&&"undefined"!=typeof document}}}]);