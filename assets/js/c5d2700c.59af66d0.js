"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2892],{9702:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(3321),o=n(6447),i=n(6886),l=n(7294);function a(e){let{to:t,text:n,icon:a,icon_color:c,text_color:s,subtitle:u}=e;return l.createElement(r.Z,{fullWidth:!0,onClick:e=>{window.open(t,"_blank")},color:"primary",size:"small",sx:{padding:"0.5rem"}},l.createElement(o.Z,null,l.createElement(o.Z,{item:!0},l.createElement(i.ZP,{container:!0},l.createElement(i.ZP,{item:!0,xs:12,container:!0},l.createElement(i.ZP,{item:!0,xs:3,color:c,sx:{}},a),l.createElement(i.ZP,{item:!0,xs:9,container:!0,justifyContent:"flex-start",alignItems:"center",color:s,sx:{}},l.createElement(i.ZP,{item:!0,xs:12,container:!0,justifyContent:"flex-start"},l.createElement("div",{style:{fontSize:"1.1em",fontWeight:"500",textTransform:"uppercase"}},n)))),l.createElement(i.ZP,{item:!0,xs:12},l.createElement("div",{style:{fontSize:"0.8em",fontWeight:"400",textTransform:"uppercase"}},u))))))}},896:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),o=n(9702);function i(e){let{to:t,text:n,status_id:i,icon:l,icon_color:a,text_color:c,subtitle:s}=e;return r.createElement(r.Fragment,null,r.createElement(o.Z,{to:t,text:n,icon:l,icon_color:a,text_color:c,subtitle:s}))}},3990:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(7294),o=n(2263),i=n(6886),l=n(6447),a=n(5861),c=n(6409),s=n(9702),u=n(896);function m(){const{siteConfig:e}=(0,o.Z)();(0,c.g)();return r.createElement(i.ZP,{item:!0,xs:12,md:1.5},r.createElement(l.Z,{direction:"column",spacing:1},r.createElement(a.Z,{variant:"h6",align:"center"},"tools"),r.createElement(u.Z,{to:"http://192.168.10.61:5010",text:"proxy pool",status_id:42}),r.createElement("pre",null,"curl --proxy 127.0.0.1:5566 https://api.my-ip.io/ip"),r.createElement(s.Z,{to:"http://192.168.10.61:4445/haproxy?stats",text:"tor proxy 4445"}),r.createElement(s.Z,{to:"http://192.168.10.61:8096",text:"mitm proxy 8096"}),r.createElement(u.Z,{to:"http://192.168.10.21:6080",text:"android emu 6080",status_id:49}),r.createElement(s.Z,{to:"http://192.168.10.21:6081",text:"android emu 6081"}),r.createElement(s.Z,{to:"http://192.168.10.21:6082",text:"android emu 6082"})))}},6409:(e,t,n)=>{n.d(t,{g:()=>c});var r=n(7294),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},l=!1,a=(0,r.forwardRef)((function(e,t){var n=e.style,a=i(e,["style"]),s=c();!l&&(null==n?void 0:n.height)&&(l=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var u=o(o({},n),{height:s?s+"px":"100vh"});return r.createElement("div",o({ref:t,style:u},a))}));a.displayName="Div100vh";function c(){var e=(0,r.useState)(s),t=e[0],n=e[1],o=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){u()&&n(!0)}),[]),t}();return(0,r.useEffect)((function(){if(o)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)};function e(){var e=s();n(e)}}),[o]),o?t:null}function s(){return u()?window.innerHeight:null}function u(){return"undefined"!=typeof window&&"undefined"!=typeof document}}}]);