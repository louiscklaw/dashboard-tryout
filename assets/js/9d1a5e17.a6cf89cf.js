"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,m=u["".concat(p,".").concat(c)]||u[c]||d[c]||o;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="stddef.h",l={unversionedId:"C/lib \u6807\u51c6\u5e93/stddef.h",id:"C/lib \u6807\u51c6\u5e93/stddef.h",title:"stddef.h",description:"stddef.h\u63d0\u4f9b\u4e86\u5e38\u7528\u7c7b\u578b\u548c\u5b8f\u7684\u5b9a\u4e49\uff0c\u4f46\u6ca1\u6709\u58f0\u660e\u4efb\u4f55\u51fd\u6570\u3002",source:"@site/dev/C/lib \u6807\u51c6\u5e93/stddef.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/stddef.h",permalink:"dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/stddef.h",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/dev/C/lib \u6807\u51c6\u5e93/stddef.h.md",tags:[],version:"current",lastUpdatedBy:"louiscklaw",lastUpdatedAt:1657484196,formattedLastUpdatedAt:"Jul 10, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stdbool.h",permalink:"dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/stdbool.h"},next:{title:"stdint.h",permalink:"dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/stdint.h"}},p={},s=[{value:"offsetof()",id:"offsetof",level:2}],f={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stddefh"},"stddef.h"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stddef.h"),"\u63d0\u4f9b\u4e86\u5e38\u7528\u7c7b\u578b\u548c\u5b8f\u7684\u5b9a\u4e49\uff0c\u4f46\u6ca1\u6709\u58f0\u660e\u4efb\u4f55\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u5934\u6587\u4ef6\u5b9a\u4e49\u7684\u7c7b\u578b\u5982\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ptrdiff_t\uff1a\u6307\u9488\u76f8\u51cf\u8fd0\u7b97\u65f6\uff0c\u8fd4\u56de\u7ed3\u679c\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"size_t\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"sizeof"),"\u8fd0\u7b97\u7b26\u8fd4\u56de\u7684\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"wchar_t\uff1a\u4e00\u79cd\u8db3\u591f\u5927\u3001\u80fd\u5bb9\u7eb3\u5404\u79cd\u5b57\u7b26\u7684\u7c7b\u578b\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u4e09\u4e2a\u7c7b\u578b\u90fd\u662f\u6574\u6570\u7c7b\u578b\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"ptrdiff_t"),"\u662f\u6709\u7b26\u53f7\u6574\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"size_t"),"\u662f\u65e0\u7b26\u53f7\u6574\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"stddef.h"),"\u5b9a\u4e49\u4e86\u4e24\u4e2a\u5b8f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NULL\uff1a\u7a7a\u6307\u9488\u3002"),(0,a.kt)("li",{parentName:"ul"},"offsetof()")),(0,a.kt)("h2",{id:"offsetof"},"offsetof()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"offsetof()"),"\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"stddef.h"),"\u5b9a\u4e49\u7684\u4e00\u4e2a\u5b8f\uff0c\u7528\u6765\u8fd4\u56de\u67d0\u4e2a\u5c5e\u6027\u5728 Struct \u7ed3\u6784\u5185\u90e8\u7684\u8d77\u59cb\u4f4d\u7f6e\u3002\u7531\u4e8e\u7cfb\u7edf\u4e3a\u4e86\u5b57\u8282\u5bf9\u9f50\uff0c\u53ef\u80fd\u4f1a\u5728 Struct \u7ed3\u6784\u7684\u5c5e\u6027\u4e4b\u95f4\u63d2\u5165\u7a7a\u5b57\u8282\uff0c\u8fd9\u4e2a\u5b8f\u5bf9\u4e8e\u786e\u5b9a\u67d0\u4e2a\u5c5e\u6027\u7684\u5185\u5b58\u4f4d\u7f6e\u5f88\u6709\u7528\u3002"),(0,a.kt)("p",null,"\u5b83\u662f\u4e00\u4e2a\u5e26\u53c2\u6570\u7684\u5b8f\uff0c\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\u3002\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f Struct \u7ed3\u6784\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8be5\u7ed3\u6784\u7684\u4e00\u4e2a\u5c5e\u6027\uff0c\u8fd4\u56de Struct \u8d77\u59cb\u4f4d\u7f6e\u5230\u8be5\u5c5e\u6027\u4e4b\u95f4\u7684\u5b57\u8282\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'struct s {\n  char a;\n  int b[2];\n  float c;\n};\n\nprintf("%zu\\n", offsetof(struct s, a)); // 0\nprintf("%zu\\n", offsetof(struct s, b)); // 4\nprintf("%zu\\n", offsetof(struct s, c)); // 12\n')),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u9762\u8fd9\u4e2a Struct \u7ed3\u6784\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"offsetof(struct s, a)"),"\u4e00\u5b9a\u7b49\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\u5c5e\u6027\u662f\u7b2c\u4e00\u4e2a\u5c5e\u6027\uff0c\u4e0e Struct \u7ed3\u6784\u81ea\u8eab\u7684\u5730\u5740\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u7cfb\u7edf\u4e3a\u4e86\u5b57\u8282\u5bf9\u9f50\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\u5c5e\u6027\u540e\u9762\u5206\u914d\u4e863\u4e2a\u7a7a\u5b57\u8282\uff0c\u5bfc\u81f4",(0,a.kt)("inlineCode",{parentName:"p"},"b"),"\u5c5e\u6027\u5b58\u50a8\u5728\u7b2c4\u4e2a\u5b57\u8282\uff0c\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"offsetof(struct s, b)"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"offsetof(struct s, c)"),"\u5206\u522b\u662f4\u548c12\u3002"))}d.isMDXComponent=!0}}]);