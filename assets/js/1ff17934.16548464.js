"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9925],{1953:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7462),a=n(3366),o=n(7294),s=n(6010),i=n(2030),u=n(6523),c=n(9707),l=n(9718),f=n(5893);const h=["className","component"];var d=n(7078);const p=function(e={}){const{defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:d,styleFunctionSx:p=u.Z}=e,v=(0,i.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(p);return o.forwardRef((function(e,o){const i=(0,l.Z)(t),u=(0,c.Z)(e),{className:p,component:m="div"}=u,w=(0,a.Z)(u,h);return(0,f.jsx)(v,(0,r.Z)({as:m,ref:o,className:(0,s.Z)(p,d?d(n):n),theme:i},w))}))}({defaultTheme:(0,n(9762).Z)(),defaultClassName:"MuiBox-root",generateClassName:d.Z.generate}),v=p},4146:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(9960),a=n(1953),o=n(9630),s=n(2370),i=n(7294),u=n(6409);function c(){const e=(0,u.g)(),[t,n]=(0,i.useState)();return(0,i.useEffect)((()=>{fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en").then((e=>e.json())).then((e=>n(e))).catch((e=>console.error(e)))}),[]),i.createElement(i.Fragment,null,i.createElement(a.Z,{sx:{position:"absolute",bottom:"3vh",left:"3vh"}},i.createElement(r.Z,{to:"/"},i.createElement(o.Z,{variant:"h5"},"Back"))),i.createElement(s.ZP,{container:!0,sx:{height:e}},i.createElement(s.ZP,{item:!0,xs:2})))}},6409:(e,t,n)=>{n.d(t,{g:()=>u});var r=n(7294),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},s=!1,i=(0,r.forwardRef)((function(e,t){var n=e.style,i=o(e,["style"]),c=u();!s&&(null==n?void 0:n.height)&&(s=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var l=a(a({},n),{height:c?c+"px":"100vh"});return r.createElement("div",a({ref:t,style:l},i))}));i.displayName="Div100vh";function u(){var e=(0,r.useState)(c),t=e[0],n=e[1],a=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){l()&&n(!0)}),[]),t}();return(0,r.useEffect)((function(){if(a)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)};function e(){var e=c();n(e)}}),[a]),a?t:null}function c(){return l()?window.innerHeight:null}function l(){return"undefined"!=typeof window&&"undefined"!=typeof document}}}]);