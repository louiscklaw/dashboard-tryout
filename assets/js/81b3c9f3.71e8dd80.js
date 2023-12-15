"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const s={},i="assert.h",l={unversionedId:"C/lib \u6807\u51c6\u5e93/assert.h",id:"C/lib \u6807\u51c6\u5e93/assert.h",title:"assert.h",description:"assert()",source:"@site/example/dev/C/lib \u6807\u51c6\u5e93/assert.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/assert.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/assert.h",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/dev/C/lib \u6807\u51c6\u5e93/assert.h.md",tags:[],version:"current",lastUpdatedBy:"Louis Law",lastUpdatedAt:1702628064,formattedLastUpdatedAt:"Dec 15, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u591a\u5b57\u8282\u5b57\u7b26",permalink:"/dashboard-tryout/dev/C/\u591a\u5b57\u8282\u5b57\u7b26"},next:{title:"ctype.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/ctype.h"}},p={},o=[{value:"assert()",id:"assert",level:2},{value:"static_assert()",id:"static_assert",level:2}],c={toc:o},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"asserth"},"assert.h"),(0,r.kt)("h2",{id:"assert"},"assert()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assert.h"),"\u5934\u6587\u4ef6\u5b9a\u4e49\u4e86\u5b8f",(0,r.kt)("inlineCode",{parentName:"p"},"assert()"),"\uff0c\u7528\u4e8e\u5728\u8fd0\u884c\u65f6\u786e\u4fdd\u7a0b\u5e8f\u7b26\u5408\u6307\u5b9a\u6761\u4ef6\uff0c\u5982\u679c\u4e0d\u7b26\u5408\uff0c\u5c31\u62a5\u9519\u7ec8\u6b62\u8fd0\u884c\u3002\u8fd9\u4e2a\u5b8f\u5e38\u5e38\u88ab\u79f0\u4e3a\u201c\u65ad\u8a00\u201d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"assert(PI > 3);\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u5728\u7a0b\u5e8f\u8fd0\u884c\u5230\u8fd9\u4e00\u884c\u8bed\u53e5\u65f6\uff0c\u9a8c\u8bc1\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"PI"),"\u662f\u5426\u5927\u4e8e3\u3002\u5982\u679c\u786e\u5b9e\u5927\u4e8e3\uff0c\u7a0b\u5e8f\u7ee7\u7eed\u8fd0\u884c\uff0c\u5426\u5219\u5c31\u4f1a\u7ec8\u6b62\u8fd0\u884c\uff0c\u5e76\u4e14\u7ed9\u51fa\u62a5\u9519\u4fe1\u606f\u63d0\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assert()"),"\u5b8f\u63a5\u53d7\u4e00\u4e2a\u8868\u8fbe\u5f0f\u4f5c\u4e3a\u53c2\u6570\u3002\u5982\u679c\u8be5\u8868\u8fbe\u5f0f\u4e3a\u771f\uff08\u8fd4\u56de\u503c\u975e\u96f6\uff09\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"assert()"),"\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u4f5c\u7528\uff0c\u7a0b\u5e8f\u7ee7\u7eed\u8fd0\u884c\u3002\u5982\u679c\u8be5\u8868\u8fbe\u5f0f\u4e3a\u5047\uff08\u8fd4\u56de\u503c\u4e3a\u96f6\uff09\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"assert()"),"\u5c31\u4f1a\u62a5\u9519\uff0c\u5728\u6807\u51c6\u9519\u8bef\u6d41",(0,r.kt)("inlineCode",{parentName:"p"},"stderr"),"\u4e2d\u5199\u5165\u4e00\u6761\u9519\u8bef\u4fe1\u606f\uff0c\u663e\u793a\u6ca1\u6709\u901a\u8fc7\u7684\u8868\u8fbe\u5f0f\uff0c\u4ee5\u53ca\u5305\u542b\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u7684\u6587\u4ef6\u540d\u548c\u884c\u53f7\u3002\u6700\u540e\uff0c\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"abort()"),"\u51fd\u6570\u7ec8\u6b62\u7a0b\u5e8f\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"abort()"),"\u51fd\u6570\u7684\u539f\u578b\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"stdlib.h"),"\u5934\u6587\u4ef6\u4e2d\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"z = x * x - y * y;\nassert(z >= 0);\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"assert()"),"\u8bed\u53e5\u7c7b\u4f3c\u4e8e\u4e0b\u9762\u7684\u4ee3\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'if (z < 0) {\n  puts("z less than 0");\n  abort();\n}\n')),(0,r.kt)("p",null,"\u5982\u679c\u65ad\u8a00\u5931\u8d25\uff0c\u7a0b\u5e8f\u4f1a\u4e2d\u65ad\u6267\u884c\uff0c\u4f1a\u663e\u793a\u4e0b\u9762\u7684\u63d0\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"Assertion failed: (z >= 0), function main, file /Users/assert.c, line 14.\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u62a5\u9519\u7684\u683c\u5f0f\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"Assertion failed: [expression], function [abc], file [xyz], line [nnn].\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u65b9\u62ec\u53f7\u7684\u90e8\u5206\u4f7f\u7528\u5b9e\u9645\u6570\u636e\u66ff\u6362\u6389\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"assert()"),"\u6709\u51e0\u4e2a\u597d\u5904\uff1a\u5b83\u4e0d\u4ec5\u80fd\u81ea\u52a8\u6807\u8bc6\u6587\u4ef6\u548c\u51fa\u95ee\u9898\u7684\u884c\u53f7\uff0c\u8fd8\u6709\u4e00\u79cd\u65e0\u9700\u66f4\u6539\u4ee3\u7801\u5c31\u80fd\u5f00\u542f\u6216\u5173\u95ed",(0,r.kt)("inlineCode",{parentName:"p"},"assert()"),"\u7684\u673a\u5236\u3002\u5982\u679c\u5df2\u7ecf\u786e\u8ba4\u7a0b\u5e8f\u6ca1\u6709\u95ee\u9898\uff0c\u4e0d\u9700\u8981\u518d\u505a\u65ad\u8a00\uff0c\u5c31\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"#include <assert.h>"),"\u8bed\u53e5\u7684\u524d\u9762\uff0c\u5b9a\u4e49\u4e00\u4e2a\u5b8f",(0,r.kt)("inlineCode",{parentName:"p"},"NDEBUG"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#define NDEBUG\n#include <assert.h>\n")),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u91cd\u65b0\u7f16\u8bd1\u7a0b\u5e8f\uff0c\u7f16\u8bd1\u5668\u5c31\u4f1a\u7981\u7528\u6587\u4ef6\u4e2d\u6240\u6709\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"assert()"),"\u8bed\u53e5\u3002\u5982\u679c\u7a0b\u5e8f\u53c8\u51fa\u73b0\u95ee\u9898\uff0c\u53ef\u4ee5\u79fb\u9664\u8fd9\u6761",(0,r.kt)("inlineCode",{parentName:"p"},"#define NDBUG"),"\u6307\u4ee4\uff08\u6216\u8005\u628a\u5b83\u6ce8\u91ca\u6389\uff09\uff0c\u518d\u6b21\u7f16\u8bd1\uff0c\u8fd9\u6837\u5c31\u91cd\u65b0\u542f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"assert()"),"\u8bed\u53e5\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assert()"),"\u7684\u7f3a\u70b9\u662f\uff0c\u56e0\u4e3a\u5f15\u5165\u4e86\u989d\u5916\u7684\u68c0\u67e5\uff0c\u589e\u52a0\u4e86\u7a0b\u5e8f\u7684\u8fd0\u884c\u65f6\u95f4\u3002"),(0,r.kt)("h2",{id:"static_assert"},"static_assert()"),(0,r.kt)("p",null,"C11 \u5f15\u5165\u4e86\u9759\u6001\u65ad\u8a00",(0,r.kt)("inlineCode",{parentName:"p"},"static_assert()"),"\uff0c\u7528\u4e8e\u5728\u7f16\u8bd1\u9636\u6bb5\u8fdb\u884c\u65ad\u8a00\u5224\u65ad\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"static_assert(constant-expression, string-literal);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static_assert()"),"\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"constant-expression"),"\u662f\u4e00\u4e2a\u5e38\u91cf\u8868\u8fbe\u5f0f\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"string-literal"),"\u662f\u4e00\u4e2a\u63d0\u793a\u5b57\u7b26\u4e32\u3002\u5982\u679c\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u503c\u4e3afalse\uff0c\u4f1a\u4ea7\u751f\u4e00\u6761\u7f16\u8bd1\u9519\u8bef\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5c31\u662f\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'static_assert(sizeof(int) == 4, "64-bit code generation is not supported.");\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u7684\u610f\u601d\u662f\uff0c\u5982\u679c\u5f53\u524d\u8ba1\u7b97\u673a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"\u7c7b\u578b\u4e0d\u7b49\u4e8e4\u4e2a\u5b57\u8282\uff0c\u5c31\u4f1a\u7f16\u8bd1\u62a5\u9519\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"static_assert()"),"\u53ea\u5728\u7f16\u8bd1\u9636\u6bb5\u8fd0\u884c\uff0c\u65e0\u6cd5\u83b7\u5f97\u53d8\u91cf\u7684\u503c\u3002\u5982\u679c\u5bf9\u53d8\u91cf\u8fdb\u884c\u9759\u6001\u65ad\u8a00\uff0c\u5c31\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'int positive(const int n) {\n  static_assert(n > 0, "value must > 0");\n  return 0;\n}\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u62a5\u9519\uff0c\u56e0\u4e3a\u7f16\u8bd1\u65f6\u65e0\u6cd5\u77e5\u9053\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"\u7684\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"static_assert()"),"\u7684\u597d\u5904\u662f\uff0c\u5c3d\u91cf\u5728\u7f16\u8bd1\u9636\u6bb5\u53d1\u73b0\u9519\u8bef\uff0c\u907f\u514d\u8fd0\u884c\u65f6\u518d\u62a5\u9519\uff0c\u8282\u7701\u5f00\u53d1\u65f6\u95f4\u3002\u53e6\u5916\uff0c\u6709\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"assert()"),"\u65ad\u8a00\u4f4d\u4e8e\u51fd\u6570\u4e4b\u4e2d\uff0c\u5982\u679c\u4e0d\u6267\u884c\u8be5\u51fd\u6570\uff0c\u5c31\u4e0d\u4f1a\u62a5\u9519\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"static_assert()"),"\u4e0d\u7ba1\u51fd\u6570\u662f\u5426\u6267\u884c\uff0c\u90fd\u4f1a\u8fdb\u884c\u65ad\u8a00\u5224\u65ad\u3002\u6700\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"static_assert()"),"\u4e0d\u4f1a\u751f\u6210\u53ef\u6267\u884c\u4ee3\u7801\uff0c\u6240\u4ee5\u4e0d\u4f1a\u9020\u6210\u4efb\u4f55\u8fd0\u884c\u65f6\u7684\u6027\u80fd\u635f\u5931\u3002"))}d.isMDXComponent=!0}}]);