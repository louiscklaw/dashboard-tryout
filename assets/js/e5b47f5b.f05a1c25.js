"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3593],{5680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},y=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),s=u(t),c=a,m=s["".concat(o,".").concat(c)]||s[c]||d[c]||i;return t?r.createElement(m,l(l({ref:n},y),{},{components:t})):r.createElement(m,l({ref:n},y))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=t(8168),a=(t(6540),t(5680));const i={},l="inttypes.h",p={unversionedId:"C/lib \u6807\u51c6\u5e93/inttypes.h",id:"C/lib \u6807\u51c6\u5e93/inttypes.h",title:"inttypes.h",description:"C \u8bed\u8a00\u8fd8\u5728\u5934\u6587\u4ef6 inttypes.h \u91cc\u9762\uff0c\u4e3a stdint.h \u5b9a\u4e49\u7684\u56db\u7c7b\u6574\u6570\u7c7b\u578b\uff0c\u63d0\u4f9b\u4e86printf()\u548cscanf()\u7684\u5360\u4f4d\u7b26\u3002",source:"@site/example/dev/C/lib \u6807\u51c6\u5e93/inttypes.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/inttypes.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/inttypes.h",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/dev/C/lib \u6807\u51c6\u5e93/inttypes.h.md",tags:[],version:"current",lastUpdatedBy:"louiscklaw",lastUpdatedAt:1665430613,formattedLastUpdatedAt:"Oct 10, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"float.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/float.h"},next:{title:"iso646.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/iso646.h"}},o={},u=[],y={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"inttypesh"},"inttypes.h"),(0,a.yg)("p",null,"C \u8bed\u8a00\u8fd8\u5728\u5934\u6587\u4ef6 inttypes.h \u91cc\u9762\uff0c\u4e3a stdint.h \u5b9a\u4e49\u7684\u56db\u7c7b\u6574\u6570\u7c7b\u578b\uff0c\u63d0\u4f9b\u4e86",(0,a.yg)("inlineCode",{parentName:"p"},"printf()"),"\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"scanf()"),"\u7684\u5360\u4f4d\u7b26\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u56fa\u5b9a\u5bbd\u5ea6\u6574\u6570\u7c7b\u578b\uff0c\u6bd4\u5982 int8_t\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6700\u5c0f\u5bbd\u5ea6\u6574\u6570\u7c7b\u578b\uff0c\u6bd4\u5982 int_least8_t\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6700\u5feb\u6700\u5c0f\u5bbd\u5ea6\u6574\u6570\u7c7b\u578b\uff0c\u6bd4\u5982 int_fast8_t\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6700\u5927\u5bbd\u5ea6\u6574\u6570\u7c7b\u578b\uff0c\u6bd4\u5982 intmax_t\u3002")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"printf()"),"\u7684\u5360\u4f4d\u7b26\u91c7\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"PRI + \u539f\u59cb\u5360\u4f4d\u7b26 + \u7c7b\u578b\u5173\u952e\u5b57/\u5bbd\u5ea6"),"\u7684\u5f62\u5f0f\u6784\u6210\u3002\u4e3e\u4f8b\u6765\u8bf4\uff0c\u539f\u59cb\u5360\u4f4d\u7b26\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"%d"),"\uff0c\u5219\u5bf9\u5e94\u7684\u5360\u4f4d\u7b26\u5982\u4e0b\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"PRIdn \uff08\u56fa\u5b9a\u5bbd\u5ea6\u7c7b\u578b\uff09"),(0,a.yg)("li",{parentName:"ul"},"PRIdLEASTn \uff08\u6700\u5c0f\u5bbd\u5ea6\u7c7b\u578b\uff09"),(0,a.yg)("li",{parentName:"ul"},"PRIdFASTn \uff08\u6700\u5feb\u6700\u5c0f\u5bbd\u5ea6\u7c7b\u578b\uff09"),(0,a.yg)("li",{parentName:"ul"},"PRIdMAX \uff08\u6700\u5927\u5bbd\u5ea6\u7c7b\u578b\uff09")),(0,a.yg)("p",null,"\u4e0a\u9762\u5360\u4f4d\u7b26\u4e2d\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"n"),"\uff0c\u53ef\u4ee5\u75288\u300116\u300132\u300164\u4ee3\u5165\u3002"),(0,a.yg)("p",null,"\u4e0b\u9762\u662f\u7528\u6cd5\u793a\u4f8b\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdint.h>\n#include <inttypes.h>\n\nint main(void) {\n  int_least16_t x = 3490;\n  printf("The value is %" PRIdLEAST16 "!\\n", x);\n}\n')),(0,a.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"PRIdLEAST16"),"\u5bf9\u5e94\u7684\u6574\u6570\u7c7b\u578b\u4e3a int_least16_t\uff0c\u539f\u59cb\u5360\u4f4d\u7b26\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"%d"),"\u3002\u53e6\u5916\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"printf()"),"\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u7528\u5230\u4e86\u591a\u4e2a\u5b57\u7b26\u4e32\u81ea\u52a8\u5408\u5e76\u7684\u5199\u6cd5\u3002"),(0,a.yg)("p",null,"\u4e0b\u9762\u662f\u5176\u5b83\u7684\u539f\u59cb\u5360\u4f4d\u7b26\u5bf9\u5e94\u7684\u5360\u4f4d\u7b26\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"%i\uff1aPRIin    PRIiLEASTn    PRIiFASTn    PRIiMAX"),(0,a.yg)("li",{parentName:"ul"},"%o\uff1aPRIon    PRIoLEASTn    PRIoFASTn    PRIoMAX"),(0,a.yg)("li",{parentName:"ul"},"%u\uff1aPRIun    PRIuLEASTn    PRIuFASTn    PRIuMAX"),(0,a.yg)("li",{parentName:"ul"},"%x\uff1aPRIxn    PRIxLEASTn    PRIxFASTn    PRIxMAX"),(0,a.yg)("li",{parentName:"ul"},"%X\uff1aPRIXn    PRIXLEASTn    PRIXFASTn    PRIXMAX")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"scanf()"),"\u7684\u5360\u4f4d\u7b26\u89c4\u5219\u4e5f\u4e0e\u4e4b\u7c7b\u4f3c\u3002"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"%d\uff1aSCNdn    SCNdLEASTn    SCNdFASTn    SCNdMAX"),(0,a.yg)("li",{parentName:"ul"},"%i\uff1aSCNin    SCNiLEASTn    SCNiFASTn    SCNiMAX"),(0,a.yg)("li",{parentName:"ul"},"%o\uff1aSCNon    SCNoLEASTn    SCNoFASTn    SCNoMAX"),(0,a.yg)("li",{parentName:"ul"},"%u\uff1aSCNun    SCNuLEASTn    SCNuFASTn    SCNuMAX"),(0,a.yg)("li",{parentName:"ul"},"%x\uff1aSCNxn    SCNxLEASTn    SCNxFASTn    SCNxMAX")))}d.isMDXComponent=!0}}]);