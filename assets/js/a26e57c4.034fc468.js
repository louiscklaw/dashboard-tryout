"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[4608],{4667:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(5489),o=n(7733),a=n(7859),i=n(1662),c=n(6540),u=n(6091);function f(){const e=(0,u.xc)(),[t,n]=(0,c.useState)();return(0,c.useEffect)((()=>{fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en").then((e=>e.json())).then((e=>n(e))).catch((e=>console.error(e)))}),[]),c.createElement(c.Fragment,null,c.createElement(o.A,{sx:{position:"absolute",bottom:"3vh",left:"3vh"}},c.createElement(r.A,{to:"/"},c.createElement(a.A,{variant:"h5"},"Back"))),c.createElement(i.Ay,{container:!0,sx:{height:e}},c.createElement(i.Ay,{item:!0,xs:2})))}},6091:(e,t,n)=>{n.d(t,{xc:()=>u});var r=n(6540),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=!1,c=(0,r.forwardRef)((function(e,t){var n=e.style,c=a(e,["style"]),f=u();!i&&(null==n?void 0:n.height)&&(i=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var l=o(o({},n),{height:f?f+"px":"100vh"});return r.createElement("div",o({ref:t,style:l},c))}));c.displayName="Div100vh";function u(){var e=(0,r.useState)(f),t=e[0],n=e[1],o=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){l()&&n(!0)}),[]),t}();return(0,r.useEffect)((function(){if(o)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)};function e(){var e=f();n(e)}}),[o]),o?t:null}function f(){return l()?window.innerHeight:null}function l(){return"undefined"!=typeof window&&"undefined"!=typeof document}}}]);