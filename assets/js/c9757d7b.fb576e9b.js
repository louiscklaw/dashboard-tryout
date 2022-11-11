"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7461],{9144:(e,t,o)=>{o.d(t,{Z:()=>x});var n=o(3366),r=o(7462),c=o(7294),i=o(5408),l=o(8700),s=o(9707),a=o(9766),m=o(7074),p=o(5959),u=o(5893);const d=["component","direction","spacing","divider","children"];function f(e,t){const o=c.Children.toArray(e).filter(Boolean);return o.reduce(((e,n,r)=>(e.push(n),r<o.length-1&&e.push(c.cloneElement(t,{key:`separator-${r}`})),e)),[])}const h=(0,m.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let o=(0,r.Z)({display:"flex",flexDirection:"column"},(0,i.k9)({theme:t},(0,i.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const n=(0,l.hB)(t),r=Object.keys(t.breakpoints.values).reduce(((t,o)=>(("object"==typeof e.spacing&&null!=e.spacing[o]||"object"==typeof e.direction&&null!=e.direction[o])&&(t[o]=!0),t)),{}),c=(0,i.P$)({values:e.direction,base:r}),s=(0,i.P$)({values:e.spacing,base:r});"object"==typeof c&&Object.keys(c).forEach(((e,t,o)=>{if(!c[e]){const n=t>0?c[o[t-1]]:"column";c[e]=n}}));const m=(t,o)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${r=o?c[o]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,l.NA)(n,t)}};var r};o=(0,a.Z)(o,(0,i.k9)({theme:t},s,m))}return o=(0,i.dt)(t.breakpoints,o),o})),x=c.forwardRef((function(e,t){const o=(0,p.Z)({props:e,name:"MuiStack"}),c=(0,s.Z)(o),{component:i="div",direction:l="column",spacing:a=0,divider:m,children:x}=c,Z=(0,n.Z)(c,d),g={direction:l,spacing:a};return(0,u.jsx)(h,(0,r.Z)({as:i,ownerState:g,ref:t},Z,{children:m?f(x,m):x}))}))},9702:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(5084),r=o(9072),c=o(7294);function i(e){let{to:t,text:o,icon:i,icon_color:l,text_color:s,subtitle:a}=e;return c.createElement(n.Z,{fullWidth:!0,onClick:e=>{window.open(t,"_blank")},color:"primary",size:"small",sx:{padding:"1rem"}},c.createElement(r.ZP,{container:!0,alignItems:"flex-start",justifyContent:"center",spacing:1},c.createElement(r.ZP,{item:!0,xs:3,color:l},i),c.createElement(r.ZP,{item:!0,xs:9,container:!0,justifyContent:"flex-start",alignItems:"center",color:s},c.createElement(r.ZP,{item:!0,xs:12,container:!0,justifyContent:"flex-start"},c.createElement("div",{style:{fontSize:"1em",fontWeight:"500",textTransform:"uppercase"}},o)),c.createElement(r.ZP,{item:!0,xs:12,container:!0,justifyContent:"flex-start"},c.createElement("div",{style:{fontSize:"0.8em",fontWeight:"400",textTransform:"uppercase"}},a)))))}},7254:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var n=o(9072),r=o(9144),c=o(9630),i=o(7294),l=o(9702);function s(){return i.createElement(n.ZP,{item:!0,xs:12,md:1.5},i.createElement(r.Z,{direction:"column",spacing:1},i.createElement(c.Z,{variant:"h6",align:"center"},"Colors"),i.createElement(l.Z,{to:"https://colorhunt.co/palettes/retro",text:"colorhunt"}),i.createElement(l.Z,{to:"https://flatuicolors.com/",text:"flatuicolors"}),i.createElement(l.Z,{to:"https://github.com/webkul/coolhue",text:"coolhue"}),i.createElement(l.Z,{to:"https://colors.dopely.top/",text:"dopely"}),i.createElement(l.Z,{to:"https://www.gradientos.app/",text:"gradientos"}),i.createElement(l.Z,{to:"https://brandpalettes.com/",text:"brandpalettes"}),i.createElement(l.Z,{to:"http://brandcolors.net/",text:"brandcolors"}),i.createElement(l.Z,{to:"https://material.colorion.co/",text:"colorion"}),i.createElement(l.Z,{to:"https://github.com/bradtraversy/design-resources-for-developers/",text:"design-resources-for-developers"})))}}}]);