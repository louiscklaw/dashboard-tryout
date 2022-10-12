"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3875],{9144:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(3366),o=n(7462),a=n(7294),i=n(5408),c=n(8700),l=n(9707),s=n(9766),p=n(7074),u=n(5959),m=n(5893);const h=["component","direction","spacing","divider","children"];function f(e,t){const n=a.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,o)=>(e.push(r),o<n.length-1&&e.push(a.cloneElement(t,{key:`separator-${o}`})),e)),[])}const g=(0,p.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,o.Z)({display:"flex",flexDirection:"column"},(0,i.k9)({theme:t},(0,i.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,c.hB)(t),o=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),a=(0,i.P$)({values:e.direction,base:o}),l=(0,i.P$)({values:e.spacing,base:o});"object"==typeof a&&Object.keys(a).forEach(((e,t,n)=>{if(!a[e]){const r=t>0?a[n[t-1]]:"column";a[e]=r}}));const p=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${o=n?a[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,c.NA)(r,t)}};var o};n=(0,s.Z)(n,(0,i.k9)({theme:t},l,p))}return n=(0,i.dt)(t.breakpoints,n),n})),d=a.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiStack"}),a=(0,l.Z)(n),{component:i="div",direction:c="column",spacing:s=0,divider:p,children:d}=a,y=(0,r.Z)(a,h),v={direction:c,spacing:s};return(0,m.jsx)(g,(0,o.Z)({as:i,ownerState:v,ref:t},y,{children:p?f(d,p):d}))}))},9630:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(3366),o=n(7462),a=n(7294),i=n(6010),c=n(9707),l=n(4780),s=n(7074),p=n(5959),u=n(6622),m=n(4867);function h(e){return(0,m.Z)("MuiTypography",e)}(0,n(1588).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=n(5893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],d=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,u.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=a.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiTypography"}),a=(e=>v[e]||e)(n.color),s=(0,c.Z)((0,o.Z)({},n,{color:a})),{align:m="inherit",className:Z,component:b,gutterBottom:w=!1,noWrap:x=!1,paragraph:E=!1,variant:k="body1",variantMapping:j=y}=s,P=(0,r.Z)(s,g),S=(0,o.Z)({},s,{align:m,color:a,className:Z,component:b,gutterBottom:w,noWrap:x,paragraph:E,variant:k,variantMapping:j}),O=b||(E?"p":j[k]||y[k])||"span",B=(e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:a,classes:i}=e,c={root:["root",a,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,l.Z)(c,h,i)})(S);return(0,f.jsx)(d,(0,o.Z)({as:O,ref:t,ownerState:S,className:(0,i.Z)(B.root,Z)},P))}))},9702:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),o=n(7621),a=n(9072),i=(n(9960),n(7868));function c(e){let{to:t,text:n}=e;return r.createElement(o.Z,{fullWidth:!0,onClick:e=>{window.open(t,"_blank")},color:"secondary",size:"small",sx:{padding:"1rem"}},r.createElement(a.ZP,{container:!0,alignItems:"flex-start",justifyContent:"center",spacing:1},r.createElement(a.ZP,{item:!0,xs:3},r.createElement(i.Z,{fontSize:"large"})),r.createElement(a.ZP,{item:!0,xs:9,container:!0,justifyContent:"flex-start",alignItems:"center"},r.createElement(a.ZP,{item:!0,xs:12,container:!0,justifyContent:"flex-start"},r.createElement("div",{style:{fontSize:"1em",fontWeight:"500",textTransform:"uppercase"}},n)),r.createElement(a.ZP,{item:!0,xs:12,container:!0,justifyContent:"flex-start"},r.createElement("div",{style:{fontSize:"0.8em",fontWeight:"400",textTransform:"uppercase"}},n)))))}},553:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(7294),o=n(2263),a=n(9072),i=n(9144),c=n(9630),l=n(6409),s=n(9702);function p(){const{siteConfig:e}=(0,o.Z)();(0,l.g)();return r.createElement(a.ZP,{item:!0,xs:12,md:1.5},r.createElement(i.Z,{direction:"column",spacing:1},r.createElement(c.Z,{variant:"h6",align:"center"},"Printer"),r.createElement(s.Z,{to:"http://i3mega.local",text:"i3mega"})))}},6409:(e,t,n)=>{n.d(t,{g:()=>l});var r=n(7294),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=!1,c=(0,r.forwardRef)((function(e,t){var n=e.style,c=a(e,["style"]),s=l();!i&&(null==n?void 0:n.height)&&(i=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var p=o(o({},n),{height:s?s+"px":"100vh"});return r.createElement("div",o({ref:t,style:p},c))}));c.displayName="Div100vh";function l(){var e=(0,r.useState)(s),t=e[0],n=e[1],o=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){p()&&n(!0)}),[]),t}();return(0,r.useEffect)((function(){if(o)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)};function e(){var e=s();n(e)}}),[o]),o?t:null}function s(){return p()?window.innerHeight:null}function p(){return"undefined"!=typeof window&&"undefined"!=typeof document}}}]);