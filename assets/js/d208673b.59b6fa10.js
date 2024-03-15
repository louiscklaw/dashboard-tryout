"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8491],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>s});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),y=u(t),d=r,s=y["".concat(p,".").concat(d)]||y[d]||g[d]||a;return t?i.createElement(s,l(l({ref:n},m),{},{components:t})):i.createElement(s,l({ref:n},m))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=t(8168),r=(t(6540),t(5680));const a={},l="limits.h",o={unversionedId:"C/lib \u6807\u51c6\u5e93/limits.h",id:"C/lib \u6807\u51c6\u5e93/limits.h",title:"limits.h",description:"limits.h\u63d0\u4f9b\u4e86\u7528\u6765\u5b9a\u4e49\u5404\u79cd\u6574\u6570\u7c7b\u578b\uff08\u5305\u62ec\u5b57\u7b26\u7c7b\u578b\uff09\u53d6\u503c\u8303\u56f4\u7684\u5b8f\u3002",source:"@site/example/dev/C/lib \u6807\u51c6\u5e93/limits.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/limits.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/limits.h",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/dev/C/lib \u6807\u51c6\u5e93/limits.h.md",tags:[],version:"current",lastUpdatedBy:"Louis Law, louiscklaw",lastUpdatedAt:1710474584,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"iso646.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/iso646.h"},next:{title:"locale.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/locale.h"}},p={},u=[],m={toc:u},y="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,i.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"limitsh"},"limits.h"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"limits.h"),"\u63d0\u4f9b\u4e86\u7528\u6765\u5b9a\u4e49\u5404\u79cd\u6574\u6570\u7c7b\u578b\uff08\u5305\u62ec\u5b57\u7b26\u7c7b\u578b\uff09\u53d6\u503c\u8303\u56f4\u7684\u5b8f\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"CHAR_BIT"),"\uff1a\u6bcf\u4e2a\u5b57\u7b26\u5305\u542b\u7684\u4e8c\u8fdb\u5236\u4f4d\u6570\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SCHAR_MIN"),"\uff1asigned char \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SCHAR_MAX"),"\uff1asigned char \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"UCHAR_MAX"),"\uff1aunsiged char \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"CHAR_MIN"),"\uff1achar \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"CHAR_MAX"),"\uff1achar \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MB_LEN_MAX"),"\uff1a\u591a\u5b57\u8282\u5b57\u7b26\u6700\u591a\u5305\u542b\u7684\u5b57\u8282\u6570\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SHRT_MIN"),"\uff1ashort int \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SHRT_MAX"),"\uff1ashort int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"USHRT_MAX"),"\uff1aunsigned short int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"INT_MIN"),"\uff1aint \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"INT_MAX"),"\uff1aint \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"UINT_MAX"),"\uff1aunsigned int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"LONG_MIN"),"\uff1along int \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"LONG_MAX"),"\uff1along int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ULONG_MAX"),"\uff1aunsigned long int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"LLONG_MIN"),"\uff1along long int \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"LLONG_MAX"),"\uff1along long int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ULLONG_MAX"),"\uff1aunsigned long long int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002")),(0,r.yg)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u662f\u4f7f\u7528\u9884\u5904\u7406\u6307\u4ee4\u5224\u65ad\uff0cint \u7c7b\u578b\u662f\u5426\u53ef\u4ee5\u7528\u6765\u5b58\u50a8\u5927\u4e8e 100000 \u7684\u6570\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"#if INT_MAX < 100000\n  #error int type is too small\n#endif\n")),(0,r.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u5982\u679c int \u7c7b\u578b\u592a\u5c0f\uff0c\u9884\u5904\u7406\u5668\u4f1a\u663e\u793a\u4e00\u6761\u51fa\u9519\u6d88\u606f\u3002"),(0,r.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"limit.h"),"\u91cc\u9762\u7684\u5b8f\uff0c\u4e3a\u7c7b\u578b\u522b\u540d\u9009\u62e9\u6b63\u786e\u7684\u5e95\u5c42\u7c7b\u578b\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"#if INT_MAX >= 100000\n  typedef int Quantity;\n#else\n  typedef long int Quantity;\n#endif\n")),(0,r.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u5982\u679c\u6574\u6570\u7c7b\u578b\u7684\u6700\u5927\u503c\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"INT_MAX"),"\uff09\u4e0d\u5c0f\u4e8e100000\uff0c\u90a3\u4e48\u7c7b\u578b\u522b\u540d",(0,r.yg)("inlineCode",{parentName:"p"},"Quantity"),"\u6307\u5411",(0,r.yg)("inlineCode",{parentName:"p"},"int"),"\uff0c\u5426\u5219\u5c31\u6307\u5411",(0,r.yg)("inlineCode",{parentName:"p"},"long int"),"\u3002"))}g.isMDXComponent=!0}}]);