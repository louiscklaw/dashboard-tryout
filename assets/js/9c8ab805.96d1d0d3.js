"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3584],{7357:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7462),a=n(3366),o=n(7294),i=n(6010),s=n(9731),c=n(6523),l=n(9707),u=n(9718),f=n(5893);const h=["className","component"];var d=n(7078);const m=function(e={}){const{defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:d}=e,m=(0,s.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(c.Z);return o.forwardRef((function(e,o){const s=(0,u.Z)(t),c=(0,l.Z)(e),{className:p,component:v="div"}=c,w=(0,a.Z)(c,h);return(0,f.jsx)(m,(0,r.Z)({as:v,ref:o,className:(0,i.Z)(p,d?d(n):n),theme:s},w))}))}({defaultTheme:(0,n(1265).Z)(),defaultClassName:"MuiBox-root",generateClassName:d.Z.generate}),p=m},8242:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(7294),a=n(7357),o=n(5861),i=n(6886),s=n(9960),c=n(6409);function l(){const e=(0,c.g)();return r.createElement(r.Fragment,null,r.createElement(a.Z,{sx:{position:"absolute",bottom:"3vh",left:"3vh"}},r.createElement(s.Z,{to:"/"},r.createElement(o.Z,{variant:"h5"},"Back"))),r.createElement(i.ZP,{container:!0,sx:{height:e,overflowY:"hidden"}},r.createElement(i.ZP,{item:!0,xs:6,sx:{width:"100%",height:e}},r.createElement("iframe",{src:"http://192.168.10.61:50102/dashboard",target:"_parent",height:e,width:"100%"})),r.createElement(i.ZP,{item:!0,xs:6,sx:{width:"100%",height:e}},r.createElement("iframe",{src:"http://192.168.10.61:5000/",height:e,width:"100%"}))))}},6409:(e,t,n)=>{n.d(t,{g:()=>c});var r=n(7294),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},i=!1,s=(0,r.forwardRef)((function(e,t){var n=e.style,s=o(e,["style"]),l=c();!i&&(null==n?void 0:n.height)&&(i=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var u=a(a({},n),{height:l?l+"px":"100vh"});return r.createElement("div",a({ref:t,style:u},s))}));s.displayName="Div100vh";function c(){var e=(0,r.useState)(l),t=e[0],n=e[1],a=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){u()&&n(!0)}),[]),t}();return(0,r.useEffect)((function(){if(a)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)};function e(){var e=l();n(e)}}),[a]),a?t:null}function l(){return u()?window.innerHeight:null}function u(){return"undefined"!=typeof window&&"undefined"!=typeof document}}}]);