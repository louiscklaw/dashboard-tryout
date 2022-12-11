"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1663],{9144:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(3366),r=n(7462),i=n(7294),c=n(5408),s=n(8700),a=n(9707),l=n(9766),u=n(7074),d=n(5959),p=n(5893);const f=["component","direction","spacing","divider","children"];function m(e,t){const n=i.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,r)=>(e.push(o),r<n.length-1&&e.push(i.cloneElement(t,{key:`separator-${r}`})),e)),[])}const h=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,r.Z)({display:"flex",flexDirection:"column"},(0,c.k9)({theme:t},(0,c.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,s.hB)(t),r=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),i=(0,c.P$)({values:e.direction,base:r}),a=(0,c.P$)({values:e.spacing,base:r});"object"==typeof i&&Object.keys(i).forEach(((e,t,n)=>{if(!i[e]){const o=t>0?i[n[t-1]]:"column";i[e]=o}}));const u=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${r=n?i[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,s.NA)(o,t)}};var r};n=(0,l.Z)(n,(0,c.k9)({theme:t},a,u))}return n=(0,c.dt)(t.breakpoints,n),n})),v=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiStack"}),i=(0,a.Z)(n),{component:c="div",direction:s="column",spacing:l=0,divider:u,children:v}=i,g=(0,o.Z)(i,f),y={direction:s,spacing:l};return(0,p.jsx)(h,(0,r.Z)({as:c,ownerState:y,ref:t},g,{children:u?m(v,u):v}))}))},9702:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(5084),r=n(9072),i=n(7294);function c(e){let{to:t,text:n,icon:c,icon_color:s,text_color:a,subtitle:l}=e;return i.createElement(o.Z,{fullWidth:!0,onClick:e=>{window.open(t,"_blank")},color:"primary",size:"small",sx:{padding:"0.5rem"}},i.createElement(r.ZP,{container:!0},i.createElement(r.ZP,{item:!0,xs:12,container:!0},i.createElement(r.ZP,{item:!0,xs:3,color:s,sx:{}},c),i.createElement(r.ZP,{item:!0,xs:9,container:!0,justifyContent:"flex-start",alignItems:"center",color:a,sx:{}},i.createElement(r.ZP,{item:!0,xs:12,container:!0,justifyContent:"flex-start"},i.createElement("div",{style:{fontSize:"1.1em",fontWeight:"500",textTransform:"uppercase"}},n)))),i.createElement(r.ZP,{item:!0,xs:12},i.createElement("div",{style:{fontSize:"0.8em",fontWeight:"400",textTransform:"uppercase"}},l))))}},4352:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=n(7294),r=n(2263),i=n(9072),c=n(9144),s=n(9630),a=n(6409),l=n(9702);function u(){const{siteConfig:e}=(0,r.Z)();(0,a.g)();return o.createElement(i.ZP,{item:!0,xs:12,md:1.5},o.createElement(c.Z,{direction:"column",spacing:1},o.createElement(s.Z,{variant:"h6",align:"center"},"notes"),o.createElement(l.Z,{to:"https://docs.google.com/spreadsheets/d/1nwIj4Jt-LvN-RLqtY2O9Jbe-XsMyVs-04DWGLUPwzEM/edit#gid=0",text:"port schedule"}),o.createElement(l.Z,{to:"https://docs.google.com/spreadsheets/d/1jdimi5kt6ZOkYph96k6EpsICYtSJzco6G3WuXQVoF4o",text:"\u6dd8\u5b9d\u5de5\u4f5c\u7d19"}),o.createElement(l.Z,{to:"https://docs.google.com/spreadsheets/d/1hNURy7NIED8XXQ99tB0bLfmKpdELkRzhXBoHIqjvp0s",text:"password sheet"}),o.createElement(l.Z,{to:"https://docs.google.com/spreadsheets/d/1TGaBTmKhGolKcalNePcAAhq6IHRlWGfbELQQoOMfCvU",text:"carousell \u5de5\u4f5c\u7d19"}),o.createElement(l.Z,{to:"https://louiscklaw.github.io/",text:"louiscklaw.github.io"}),o.createElement(l.Z,{to:"https://aboutme.louislabs.com/",text:"aboutme.louislabs.com"}),o.createElement(l.Z,{to:"https://github.com/louiscklaw/dashboard-tryout/",text:"louiscklaw/dashboard-tryout"})))}},6409:(e,t,n)=>{n.d(t,{g:()=>a});var o=n(7294),r=function(){return r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},i=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},c=!1,s=(0,o.forwardRef)((function(e,t){var n=e.style,s=i(e,["style"]),l=a();!c&&(null==n?void 0:n.height)&&(c=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var u=r(r({},n),{height:l?l+"px":"100vh"});return o.createElement("div",r({ref:t,style:u},s))}));s.displayName="Div100vh";function a(){var e=(0,o.useState)(l),t=e[0],n=e[1],r=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return(0,o.useEffect)((function(){u()&&n(!0)}),[]),t}();return(0,o.useEffect)((function(){if(r)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)};function e(){var e=l();n(e)}}),[r]),r?t:null}function l(){return u()?window.innerHeight:null}function u(){return"undefined"!=typeof window&&"undefined"!=typeof document}}}]);