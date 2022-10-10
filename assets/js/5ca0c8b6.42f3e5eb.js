"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>N});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),d=u(n),N=a,c=d["".concat(o,".").concat(N)]||d[N]||m[N]||r;return n?l.createElement(c,i(i({ref:t},k),{},{components:n})):l.createElement(c,i({ref:t},k))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={},i="float.h",p={unversionedId:"C/lib \u6807\u51c6\u5e93/float.h",id:"C/lib \u6807\u51c6\u5e93/float.h",title:"float.h",description:"float.h\u5b9a\u4e49\u4e86\u6d6e\u70b9\u6570\u7c7b\u578b float\u3001double\u3001long double \u7684\u4e00\u4e9b\u5b8f\uff0c\u89c4\u5b9a\u4e86\u8fd9\u4e9b\u7c7b\u578b\u7684\u8303\u56f4\u548c\u7cbe\u5ea6\u3002",source:"@site/dev/C/lib \u6807\u51c6\u5e93/float.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/float.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/float.h",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/dev/C/lib \u6807\u51c6\u5e93/float.h.md",tags:[],version:"current",lastUpdatedBy:"louiscklaw",lastUpdatedAt:1665430046,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"errno.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/errno.h"},next:{title:"inttypes.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/inttypes.h"}},o={},u=[],k={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"floath"},"float.h"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"float.h"),"\u5b9a\u4e49\u4e86\u6d6e\u70b9\u6570\u7c7b\u578b float\u3001double\u3001long double \u7684\u4e00\u4e9b\u5b8f\uff0c\u89c4\u5b9a\u4e86\u8fd9\u4e9b\u7c7b\u578b\u7684\u8303\u56f4\u548c\u7cbe\u5ea6\u3002"),(0,a.kt)("p",null,"(1) ",(0,a.kt)("inlineCode",{parentName:"p"},"FLT_ROUNDS")),(0,a.kt)("p",null,"\u5b8f",(0,a.kt)("inlineCode",{parentName:"p"},"FLT_ROUNDS"),"\u8868\u793a\u5f53\u524d\u6d6e\u70b9\u6570\u52a0\u6cd5\u7684\u56db\u820d\u4e94\u5165\u65b9\u5411\u3002"),(0,a.kt)("p",null,"\u5b83\u6709\u4ee5\u4e0b\u53ef\u80fd\u7684\u503c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-1\uff1a\u4e0d\u786e\u5b9a\u3002"),(0,a.kt)("li",{parentName:"ul"},"0\uff1a\u5411\u96f6\u820d\u5165\u3002"),(0,a.kt)("li",{parentName:"ul"},"1\uff1a\u5411\u6700\u8fd1\u7684\u6574\u6570\u820d\u5165\u3002"),(0,a.kt)("li",{parentName:"ul"},"2\uff1a\u5411\u6b63\u65e0\u7a77\u65b9\u5411\u820d\u5165\u3002"),(0,a.kt)("li",{parentName:"ul"},"3\uff1a\u5411\u8d1f\u65e0\u7a77\u65b9\u5411\u820d\u5165\u3002")),(0,a.kt)("p",null,"\uff082\uff09",(0,a.kt)("inlineCode",{parentName:"p"},"FLT_RADIX")),(0,a.kt)("p",null,"\u5b8f",(0,a.kt)("inlineCode",{parentName:"p"},"FLT_RADIX"),"\u8868\u793a\u79d1\u5b66\u8ba1\u6570\u6cd5\u7684\u6307\u6570\u90e8\u5206\u7684\u5e95\uff08base\uff09\uff0c\u4e00\u822c\u603b\u662f2\u3002"),(0,a.kt)("p",null,"\uff083\uff09\u6d6e\u70b9\u6570\u7c7b\u578b\u7684\u6700\u5927\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FLT_MAX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DBL_MAX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LDBL_MAX"))),(0,a.kt)("p",null,"\uff084\uff09\u6d6e\u70b9\u6570\u7c7b\u578b\u7684\u6700\u5c0f\u6b63\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FLT_MIN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DBL_MIN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LDBL_MIN"))),(0,a.kt)("p",null,"\uff085\uff09\u4e24\u4e2a\u540c\u7c7b\u578b\u6d6e\u70b9\u6570\u4e4b\u95f4\u53ef\u8868\u793a\u7684\u6700\u5c0f\u5dee\u503c\uff08\u6700\u5c0f\u7cbe\u5ea6\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FLT_EPSILON")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DBL_EPSILON")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LDBL_EPSILON"))),(0,a.kt)("p",null,"\uff086\uff09",(0,a.kt)("inlineCode",{parentName:"p"},"DECIMAL_DIG")),(0,a.kt)("p",null,"\u5b8f",(0,a.kt)("inlineCode",{parentName:"p"},"DECIMAL_DIG"),"\u8868\u793a\u5341\u8fdb\u5236\u6709\u6548\u4f4d\u6570\u3002"),(0,a.kt)("p",null,"\uff087\uff09",(0,a.kt)("inlineCode",{parentName:"p"},"FLT_EVAL_METHOD")),(0,a.kt)("p",null,"\u5b8f",(0,a.kt)("inlineCode",{parentName:"p"},"FLT_EVAL_METHOD"),"\u8868\u793a\u6d6e\u70b9\u6570\u8fd0\u7b97\u65f6\u7684\u7c7b\u578b\u8f6c\u6362\u3002"),(0,a.kt)("p",null,"\u5b83\u53ef\u80fd\u6709\u4ee5\u4e0b\u503c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-1\uff1a\u4e0d\u786e\u5b9a\u3002"),(0,a.kt)("li",{parentName:"ul"},"0\uff1a\u5728\u5f53\u524d\u7c7b\u578b\u4e2d\u8fd0\u7b97\u3002"),(0,a.kt)("li",{parentName:"ul"},"1\uff1afloat \u548c double \u7c7b\u578b\u7684\u8fd0\u7b97\u4f7f\u7528 double \u7c7b\u578b\u7684\u8303\u56f4\u548c\u7cbe\u5ea6\u6c42\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"2\uff1a\u6240\u6709\u6d6e\u70b9\u6570\u7c7b\u578b\u7684\u8fd0\u7b97\u4f7f\u7528 long double \u7c7b\u578b\u7684\u8303\u56f4\u548c\u7cbe\u5ea6\u6c42\u503c\u3002")),(0,a.kt)("p",null,"\uff088\uff09\u6d6e\u70b9\u6570\u5c3e\u6570\u90e8\u5206\u7684\u4e2a\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FLT_MANT_DIG")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DBL_MANT_DIG")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LDBL_MANT_DIG"))),(0,a.kt)("p",null,"\uff089\uff09\u6d6e\u70b9\u6570\u6307\u6570\u90e8\u5206\u6709\u6548\u6570\u5b57\u7684\u4e2a\u6570\uff08\u5341\u8fdb\u5236\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FLT_DIG")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DBL_DIG")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LDBL_DIG"))),(0,a.kt)("p",null,"\uff0810\uff09\u79d1\u5b66\u8ba1\u6570\u6cd5\u7684\u6307\u6570\u90e8\u5206\u7684\u6700\u5c0f\u6b21\u5e42\uff08\u8d1f\u6570\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FLT_MIN_EXP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DBL_MIN_EXP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LDBL_MIN_EXP"))),(0,a.kt)("p",null,"\uff0811\uff09\u79d1\u5b66\u8ba1\u6570\u6cd5\u7684\u6307\u6570\u90e8\u5206\u7684\u5341\u8fdb\u5236\u6700\u5c0f\u6b21\u5e42\uff08\u8d1f\u6570\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FLT_MIN_10_EXP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DBL_MIN_10_EXP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LDBL_MIN_10_EXP"))),(0,a.kt)("p",null,"\uff0812\uff09\u79d1\u5b66\u8ba1\u6570\u6cd5\u7684\u6307\u6570\u90e8\u5206\u7684\u6700\u5927\u6b21\u5e42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FLT_MAX_EXP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DBL_MAX_EXP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LDBL_MAX_EXP"))),(0,a.kt)("p",null,"\uff0813\uff09\u79d1\u5b66\u8ba1\u6570\u6cd5\u7684\u6307\u6570\u90e8\u5206\u7684\u5341\u8fdb\u5236\u6700\u5927\u6b21\u5e42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FLT_MAX_10_EXP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DBL_MAX_10_EXP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LDBL_MAX_10_EXP"))))}m.isMDXComponent=!0}}]);