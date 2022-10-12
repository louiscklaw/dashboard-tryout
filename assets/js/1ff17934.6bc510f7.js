"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9925],{1953:(t,e,r)=>{r.d(e,{Z:()=>f});var a=r(7462),n=r(3366),o=r(7294),i=r(6010),p=r(9731),s=r(6523),l=r(9707),h=r(9718),u=r(5893);const c=["className","component"];var g=r(7078);const m=function(t={}){const{defaultTheme:e,defaultClassName:r="MuiBox-root",generateClassName:g,styleFunctionSx:m=s.Z}=t,f=(0,p.ZP)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(m);return o.forwardRef((function(t,o){const p=(0,h.Z)(e),s=(0,l.Z)(t),{className:m,component:d="div"}=s,v=(0,n.Z)(s,c);return(0,u.jsx)(f,(0,a.Z)({as:d,ref:o,className:(0,i.Z)(m,g?g(r):r),theme:p},v))}))}({defaultTheme:(0,r(9762).Z)(),defaultClassName:"MuiBox-root",generateClassName:g.Z.generate}),f=m},9630:(t,e,r)=>{r.d(e,{Z:()=>w});var a=r(3366),n=r(7462),o=r(7294),i=r(6010),p=r(9707),s=r(4780),l=r(7074),h=r(5959),u=r(6622),c=r(4867);function g(t){return(0,c.Z)("MuiTypography",t)}(0,r(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(5893);const f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],d=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,u.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((({theme:t,ownerState:e})=>(0,n.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=o.forwardRef((function(t,e){const r=(0,h.Z)({props:t,name:"MuiTypography"}),o=(t=>y[t]||t)(r.color),l=(0,p.Z)((0,n.Z)({},r,{color:o})),{align:c="inherit",className:w,component:Z,gutterBottom:b=!1,noWrap:x=!1,paragraph:B=!1,variant:E="body1",variantMapping:O=v}=l,N=(0,a.Z)(l,f),P=(0,n.Z)({},l,{align:c,color:o,className:w,component:Z,gutterBottom:b,noWrap:x,paragraph:B,variant:E,variantMapping:O}),S=Z||(B?"p":O[E]||v[E])||"span",j=(t=>{const{align:e,gutterBottom:r,noWrap:a,paragraph:n,variant:o,classes:i}=t,p={root:["root",o,"inherit"!==t.align&&`align${(0,u.Z)(e)}`,r&&"gutterBottom",a&&"noWrap",n&&"paragraph"]};return(0,s.Z)(p,g,i)})(P);return(0,m.jsx)(d,(0,n.Z)({as:S,ref:e,ownerState:P,className:(0,i.Z)(j.root,w)},N))}))},4146:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var a=r(9960),n=r(1953),o=r(9630),i=r(9072),p=r(7294),s=r(6409);function l(){const t=(0,s.g)(),[e,r]=(0,p.useState)();return(0,p.useEffect)((()=>{fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en").then((t=>t.json())).then((t=>r(t))).catch((t=>console.error(t)))}),[]),p.createElement(p.Fragment,null,p.createElement(n.Z,{sx:{position:"absolute",bottom:"3vh",left:"3vh"}},p.createElement(a.Z,{to:"/"},p.createElement(o.Z,{variant:"h5"},"Back"))),p.createElement(i.ZP,{container:!0,sx:{height:t}},p.createElement(i.ZP,{item:!0,xs:2})))}},6409:(t,e,r)=>{r.d(e,{g:()=>s});var a=r(7294),n=function(){return n=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},n.apply(this,arguments)},o=function(t,e){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(r[a[n]]=t[a[n]])}return r},i=!1,p=(0,a.forwardRef)((function(t,e){var r=t.style,p=o(t,["style"]),l=s();!i&&(null==r?void 0:r.height)&&(i=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var h=n(n({},r),{height:l?l+"px":"100vh"});return a.createElement("div",n({ref:e,style:h},p))}));p.displayName="Div100vh";function s(){var t=(0,a.useState)(l),e=t[0],r=t[1],n=function(){var t=(0,a.useState)(!1),e=t[0],r=t[1];return(0,a.useEffect)((function(){h()&&r(!0)}),[]),e}();return(0,a.useEffect)((function(){if(n)return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)};function t(){var t=l();r(t)}}),[n]),n?e:null}function l(){return h()?window.innerHeight:null}function h(){return"undefined"!=typeof window&&"undefined"!=typeof document}}}]);