"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[270],{9702:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(3321),i=n(7294);function o(t){let{to:e,text:n,icon:o,icon_color:l,text_color:a,subtitle:c}=t;return i.createElement(r.Z,{fullWidth:!0,onClick:t=>{window.open(e,"_blank")},color:"primary",size:"small",sx:{padding:"0.5rem"}},i.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column"}},i.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start"}},i.createElement("div",{style:{}},o),i.createElement("div",{style:{flexGrow:1}},i.createElement("div",{style:{paddingLeft:"0.5rem",paddingRight:"0.5rem",textAlign:"left",fontSize:"1.1em",fontWeight:"500",textTransform:"uppercase"}},n))),i.createElement("div",null,i.createElement("div",{style:{paddingLeft:"0.5rem",paddingRight:"0.5rem",textAlign:"left",fontSize:"0.8em",fontWeight:"400",textTransform:"uppercase"}},c))))}},896:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(7294),i=n(9702);function o(t){let{to:e,text:n,status_id:o,icon:l,icon_color:a,text_color:c,subtitle:s}=t;return r.createElement(r.Fragment,null,r.createElement(i.Z,{to:e,text:n,icon:l,icon_color:a,text_color:c,subtitle:s}))}},8535:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var r=n(7294),i=n(2263),o=n(6886),l=n(6447),a=n(5861),c=n(6409),s=(n(9702),n(896));function u(){const{siteConfig:t}=(0,i.Z)();(0,c.g)();return r.createElement(o.ZP,{item:!0,xs:12,md:1.5},r.createElement(l.Z,{direction:"column",spacing:1},r.createElement(a.Z,{variant:"h6",align:"center"},"Dashboards"),r.createElement(s.Z,{to:"http://192.168.10.61:8089",text:"checkmk",status_id:33}),r.createElement(s.Z,{to:"http://192.168.10.61:8080/dashboard",text:"traefik",status_id:24}),r.createElement(s.Z,{to:"http://192.168.10.61:50080",text:"Homer"}),r.createElement(s.Z,{to:"http://192.168.10.61:9091",text:"torrent",status_id:75}),r.createElement(s.Z,{to:"http://localhost:8082",text:"luigi dashboard",status_id:26}),r.createElement(a.Z,{variant:"h6",align:"center"},"Status"),r.createElement(s.Z,{to:"http://192.168.10.61:50102/dashboard",text:"uptime kuma"}),r.createElement(s.Z,{to:"https://github.com/louiscklaw/routine_check/actions",text:"routine_check/actions"}),r.createElement(s.Z,{to:"https://louiscklaw.github.io/upptime-playlist",text:"upptime-playlist",status_id:48}),r.createElement(s.Z,{to:"https://healthcheck.iamon99.com",text:"healthcheck.iamon99.com",status_id:47})))}},6409:(t,e,n)=>{n.d(e,{g:()=>c});var r=n(7294),i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},i.apply(this,arguments)},o=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},l=!1,a=(0,r.forwardRef)((function(t,e){var n=t.style,a=o(t,["style"]),s=c();!l&&(null==n?void 0:n.height)&&(l=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var u=i(i({},n),{height:s?s+"px":"100vh"});return r.createElement("div",i({ref:e,style:u},a))}));a.displayName="Div100vh";function c(){var t=(0,r.useState)(s),e=t[0],n=t[1],i=function(){var t=(0,r.useState)(!1),e=t[0],n=t[1];return(0,r.useEffect)((function(){u()&&n(!0)}),[]),e}();return(0,r.useEffect)((function(){if(i)return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)};function t(){var t=s();n(t)}}),[i]),i?e:null}function s(){return u()?window.innerHeight:null}function u(){return"undefined"!=typeof window&&"undefined"!=typeof document}}}]);