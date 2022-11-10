"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,b=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={},a="stdbool.h",l={unversionedId:"C/lib \u6807\u51c6\u5e93/stdbool.h",id:"C/lib \u6807\u51c6\u5e93/stdbool.h",title:"stdbool.h",description:"stdbool.h\u5934\u6587\u4ef6\u5b9a\u4e49\u4e864\u4e2a\u5b8f\u3002",source:"@site/example/dev/C/lib \u6807\u51c6\u5e93/stdbool.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/stdbool.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/stdbool.h",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/dev/C/lib \u6807\u51c6\u5e93/stdbool.h.md",tags:[],version:"current",lastUpdatedBy:"louiscklaw",lastUpdatedAt:1668104767,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stdarg.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/stdarg.h"},next:{title:"stddef.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/stddef.h"}},u={},d=[],s={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stdboolh"},"stdbool.h"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"stdbool.h"),"\u5934\u6587\u4ef6\u5b9a\u4e49\u4e864\u4e2a\u5b8f\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bool"),"\uff1a\u5b9a\u4e49\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"_Bool"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"true"),"\uff1a\u5b9a\u4e49\u4e3a1\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"false"),"\uff1a\u5b9a\u4e49\u4e3a0\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"__bool_true_false_are_defined"),"\uff1a\u5b9a\u4e49\u4e3a1\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"bool isEven(int number) {\n  if (number % 2) {\n    return true;\n  } else {\n    return false;\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdbool.h>\n\nint main(void) {\n  unsigned long num;\n  unsigned long div;\n  bool isPrime = true;\n\n  num = 64457;\n\n  for (div = 2; (div * div) <= num; div++) {\n   if (num % div == 0) isPrime = false;\n  }\n\n  if (isPrime) {\n    printf("%lu is prime.\\n", num);\n  } else {\n    printf("%lu is not prime.\\n", num);\n  }\n\n  return 0;\n}\n')))}p.isMDXComponent=!0}}]);