"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||d[c]||l;return n?i.createElement(k,a(a({ref:t},m),{},{components:n})):i.createElement(k,a({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const l={},a="limits.h",o={unversionedId:"C/lib \u6807\u51c6\u5e93/limits.h",id:"C/lib \u6807\u51c6\u5e93/limits.h",title:"limits.h",description:"limits.h\u63d0\u4f9b\u4e86\u7528\u6765\u5b9a\u4e49\u5404\u79cd\u6574\u6570\u7c7b\u578b\uff08\u5305\u62ec\u5b57\u7b26\u7c7b\u578b\uff09\u53d6\u503c\u8303\u56f4\u7684\u5b8f\u3002",source:"@site/dev/C/lib \u6807\u51c6\u5e93/limits.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/limits.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/limits.h",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/dev/C/lib \u6807\u51c6\u5e93/limits.h.md",tags:[],version:"current",lastUpdatedBy:"louiscklaw",lastUpdatedAt:1657484196,formattedLastUpdatedAt:"Jul 10, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"iso646.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/iso646.h"},next:{title:"locale.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/locale.h"}},p={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"limitsh"},"limits.h"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"limits.h"),"\u63d0\u4f9b\u4e86\u7528\u6765\u5b9a\u4e49\u5404\u79cd\u6574\u6570\u7c7b\u578b\uff08\u5305\u62ec\u5b57\u7b26\u7c7b\u578b\uff09\u53d6\u503c\u8303\u56f4\u7684\u5b8f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHAR_BIT"),"\uff1a\u6bcf\u4e2a\u5b57\u7b26\u5305\u542b\u7684\u4e8c\u8fdb\u5236\u4f4d\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SCHAR_MIN"),"\uff1asigned char \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SCHAR_MAX"),"\uff1asigned char \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UCHAR_MAX"),"\uff1aunsiged char \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHAR_MIN"),"\uff1achar \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHAR_MAX"),"\uff1achar \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MB_LEN_MAX"),"\uff1a\u591a\u5b57\u8282\u5b57\u7b26\u6700\u591a\u5305\u542b\u7684\u5b57\u8282\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SHRT_MIN"),"\uff1ashort int \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SHRT_MAX"),"\uff1ashort int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"USHRT_MAX"),"\uff1aunsigned short int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INT_MIN"),"\uff1aint \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INT_MAX"),"\uff1aint \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UINT_MAX"),"\uff1aunsigned int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LONG_MIN"),"\uff1along int \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LONG_MAX"),"\uff1along int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ULONG_MAX"),"\uff1aunsigned long int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LLONG_MIN"),"\uff1along long int \u7c7b\u578b\u7684\u6700\u5c0f\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LLONG_MAX"),"\uff1along long int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ULLONG_MAX"),"\uff1aunsigned long long int \u7c7b\u578b\u7684\u6700\u5927\u503c\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u662f\u4f7f\u7528\u9884\u5904\u7406\u6307\u4ee4\u5224\u65ad\uff0cint \u7c7b\u578b\u662f\u5426\u53ef\u4ee5\u7528\u6765\u5b58\u50a8\u5927\u4e8e 100000 \u7684\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#if INT_MAX < 100000\n  #error int type is too small\n#endif\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u5982\u679c int \u7c7b\u578b\u592a\u5c0f\uff0c\u9884\u5904\u7406\u5668\u4f1a\u663e\u793a\u4e00\u6761\u51fa\u9519\u6d88\u606f\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"limit.h"),"\u91cc\u9762\u7684\u5b8f\uff0c\u4e3a\u7c7b\u578b\u522b\u540d\u9009\u62e9\u6b63\u786e\u7684\u5e95\u5c42\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#if INT_MAX >= 100000\n  typedef int Quantity;\n#else\n  typedef long int Quantity;\n#endif\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u5982\u679c\u6574\u6570\u7c7b\u578b\u7684\u6700\u5927\u503c\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"INT_MAX"),"\uff09\u4e0d\u5c0f\u4e8e100000\uff0c\u90a3\u4e48\u7c7b\u578b\u522b\u540d",(0,r.kt)("inlineCode",{parentName:"p"},"Quantity"),"\u6307\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"\uff0c\u5426\u5219\u5c31\u6307\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"long int"),"\u3002"))}d.isMDXComponent=!0}}]);