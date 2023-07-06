"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[507],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>h});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=o.createContext({}),s=function(t){var e=o.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=s(t.components);return o.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(h,i(i({ref:e},l),{},{components:r})):o.createElement(h,i({ref:e},l))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[d]="string"==typeof t?t:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6430:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={title:"A doc with tags",description:"Create a doc page with rich content.",id:"doc-with-tags",tags:["Demo","Getting started"]},i="Pi hole notes",c={unversionedId:"doc-with-tags",id:"doc-with-tags",title:"A doc with tags",description:"Create a doc page with rich content.",source:"@site/setup-record/pi-hole-notes.md",sourceDirName:".",slug:"/doc-with-tags",permalink:"/dashboard-tryout/setup-record/doc-with-tags",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/setup-record/pi-hole-notes.md",tags:[{label:"Demo",permalink:"/dashboard-tryout/setup-record/tags/demo"},{label:"Getting started",permalink:"/dashboard-tryout/setup-record/tags/getting-started"}],version:"current",lastUpdatedBy:"Louis Law",lastUpdatedAt:1688618282,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"A doc with tags",description:"Create a doc page with rich content.",id:"doc-with-tags",tags:["Demo","Getting started"]},sidebar:"tutorialSidebar",previous:{title:"parts",permalink:"/dashboard-tryout/setup-record/parts"},next:{title:"portfolio",permalink:"/dashboard-tryout/setup-record/portfolio"}},p={},s=[],l={toc:s},d="wrapper";function u(t){let{components:e,...r}=t;return(0,n.kt)(d,(0,o.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pi-hole-notes"},"Pi hole notes"),(0,n.kt)("p",null,"Link: ",(0,n.kt)("a",{parentName:"p",href:"http://192.168.10.52/admin/"},"http://192.168.10.52/admin/")),(0,n.kt)("p",null,"repository: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/louiscklaw/docker-pi-hole"},"https://github.com/louiscklaw/docker-pi-hole")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"username: admin\npassword: hBt5z3rE\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ ssh pi@192.168.10.52\npi@192.168.10.52's password: raspberry\n")))}u.isMDXComponent=!0}}]);