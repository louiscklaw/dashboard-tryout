"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),k=r,s=c["".concat(o,".").concat(k)]||c[k]||m[k]||p;return n?a.createElement(s,l(l({ref:t},u),{},{components:n})):a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<p;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const p={id:"Typedef \u547d\u4ee4",title:"Typedef \u547d\u4ee4",sidebar_position:13,data:"2022\u5e743\u670830\u65e5"},l=void 0,i={unversionedId:"C/Typedef \u547d\u4ee4",id:"C/Typedef \u547d\u4ee4",title:"Typedef \u547d\u4ee4",description:"\u7b80\u4ecb",source:"@site/example/dev/C/Typedef \u547d\u4ee4.md",sourceDirName:"C",slug:"/C/Typedef \u547d\u4ee4",permalink:"/dashboard-tryout/dev/C/Typedef \u547d\u4ee4",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/dev/C/Typedef \u547d\u4ee4.md",tags:[],version:"current",lastUpdatedBy:"Louis Law",lastUpdatedAt:1696908055,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:13,frontMatter:{id:"Typedef \u547d\u4ee4",title:"Typedef \u547d\u4ee4",sidebar_position:13,data:"2022\u5e743\u670830\u65e5"},sidebar:"tutorialSidebar",previous:{title:"Struct \u7ed3\u6784",permalink:"/dashboard-tryout/dev/C/Struct \u7ed3\u6784"},next:{title:"Union \u7ed3\u6784",permalink:"/dashboard-tryout/dev/C/Union \u7ed3\u6784"}},o={},d=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4e3b\u8981\u597d\u5904",id:"\u4e3b\u8981\u597d\u5904",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"typedef"),"\u547d\u4ee4\u7528\u6765\u4e3a\u67d0\u4e2a\u7c7b\u578b\u8d77\u522b\u540d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef type name;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\u4ee3\u8868\u7c7b\u578b\u540d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u4ee3\u8868\u522b\u540d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef unsigned char BYTE;\n\nBYTE c = 'z';\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"typedef"),"\u547d\u4ee4\u4e3a\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"unsign char"),"\u8d77\u522b\u540d",(0,r.kt)("inlineCode",{parentName:"p"},"BYTE"),"\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"BYTE"),"\u58f0\u660e\u53d8\u91cf\u3002"),(0,r.kt)("p",null,"typedef \u53ef\u4ee5\u4e00\u6b21\u6307\u5b9a\u591a\u4e2a\u522b\u540d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef int antelope, bagel, mushroom;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u4e00\u6b21\u6027\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"int"),"\u7c7b\u578b\u8d77\u4e86\u4e09\u4e2a\u522b\u540d\u3002"),(0,r.kt)("p",null,"typedef \u53ef\u4ee5\u4e3a\u6307\u9488\u8d77\u522b\u540d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef int* intptr;\n\nint a = 10;\nintptr x = &a;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"intptr"),"\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"int*"),"\u7684\u522b\u540d\u3002\u4e0d\u8fc7\uff0c\u4f7f\u7528\u7684\u65f6\u5019\u8981\u5c0f\u5fc3\uff0c\u8fd9\u6837\u4e0d\u5bb9\u6613\u770b\u51fa\u6765\uff0c\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"\u662f\u4e00\u4e2a\u6307\u9488\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"typedef \u4e5f\u53ef\u4ee5\u7528\u6765\u4e3a\u6570\u7ec4\u7c7b\u578b\u8d77\u522b\u540d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef int five_ints[5];\n\nfive_ints x = {11, 22, 33, 44, 55};\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"five_ints"),"\u662f\u4e00\u4e2a\u6570\u7ec4\u7c7b\u578b\uff0c\u5305\u542b5\u4e2a\u6574\u6570\u7684"),(0,r.kt)("p",null,"typedef \u4e3a\u51fd\u6570\u8d77\u522b\u540d\u7684\u5199\u6cd5\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef signed char (*fp)(void);\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u7c7b\u578b\u522b\u540d",(0,r.kt)("inlineCode",{parentName:"p"},"fp"),"\u662f\u4e00\u4e2a\u6307\u9488\uff0c\u4ee3\u8868\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"signed char (*)(void)"),"\u3002"),(0,r.kt)("h2",{id:"\u4e3b\u8981\u597d\u5904"},"\u4e3b\u8981\u597d\u5904"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"typedef"),"\u4e3a\u7c7b\u578b\u8d77\u522b\u540d\u7684\u597d\u5904\uff0c\u4e3b\u8981\u6709\u4e0b\u9762\u51e0\u70b9\u3002"),(0,r.kt)("p",null,"\uff081\uff09\u66f4\u597d\u7684\u4ee3\u7801\u53ef\u8bfb\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef char* STRING;\n\nSTRING name;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e3a\u5b57\u7b26\u6307\u9488\u8d77\u522b\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"STRING"),"\uff0c\u4ee5\u540e\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"STRING"),"\u58f0\u660e\u53d8\u91cf\u65f6\uff0c\u5c31\u53ef\u4ee5\u8f7b\u6613\u8fa8\u522b\u8be5\u53d8\u91cf\u662f\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("p",null,"\uff082\uff09\u4e3a struct\u3001union\u3001enum \u7b49\u547d\u4ee4\u5b9a\u4e49\u7684\u590d\u6742\u6570\u636e\u7ed3\u6784\u521b\u5efa\u522b\u540d\uff0c\u4ece\u800c\u4fbf\u4e8e\u5f15\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"struct treenode {\n  // ...\n};\n\ntypedef struct treenode* Tree;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Tree"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"struct treenode*"),"\u7684\u522b\u540d\u3002"),(0,r.kt)("p",null,"typedef \u4e5f\u53ef\u4ee5\u4e0e struct \u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u7684\u547d\u4ee4\u5199\u5728\u4e00\u8d77\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct animal {\n  char* name;\n  int leg_count, speed;\n} animal;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u65f6\uff0c\u540c\u65f6\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"typedef"),"\u547d\u4ee4\uff0c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"struct animal"),"\u8d77\u4e86\u4e00\u4e2a\u522b\u540d",(0,r.kt)("inlineCode",{parentName:"p"},"animal"),"\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cC \u8bed\u8a00\u5141\u8bb8\u7701\u7565 struct \u547d\u4ee4\u540e\u9762\u7684\u7c7b\u578b\u540d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct {\n  char *name;\n  int leg_count, speed;\n} animal;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u76f8\u5f53\u4e8e\u4e3a\u4e00\u4e2a\u533f\u540d\u7684\u6570\u636e\u7c7b\u578b\u8d77\u4e86\u522b\u540d",(0,r.kt)("inlineCode",{parentName:"p"},"animal"),"\u3002"),(0,r.kt)("p",null,"\uff083\uff09typedef \u65b9\u4fbf\u4ee5\u540e\u4e3a\u53d8\u91cf\u6539\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef float app_float;\n\napp_float f1, f2, f3;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"f1"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"f2"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"f3"),"\u7684\u7c7b\u578b\u90fd\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"float"),"\u3002\u5982\u679c\u4ee5\u540e\u9700\u8981\u4e3a\u5b83\u4eec\u6539\u7c7b\u578b\uff0c\u53ea\u9700\u8981\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"typedef"),"\u8bed\u53e5\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef long double app_float;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u5c06\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"f1"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"f2"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"f3"),"\u7684\u7c7b\u578b\u90fd\u6539\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"long double"),"\u3002"),(0,r.kt)("p",null,"\uff084\uff09\u53ef\u79fb\u690d\u6027"),(0,r.kt)("p",null,"\u67d0\u4e00\u4e2a\u503c\u5728\u4e0d\u540c\u8ba1\u7b97\u673a\u4e0a\u7684\u7c7b\u578b\uff0c\u53ef\u80fd\u662f\u4e0d\u4e00\u6837\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int i = 100000;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u572832\u4f4d\u6574\u6570\u7684\u8ba1\u7b97\u673a\u6ca1\u6709\u95ee\u9898\uff0c\u4f46\u662f\u572816\u4f4d\u6574\u6570\u7684\u8ba1\u7b97\u673a\u5c31\u4f1a\u51fa\u9519\u3002"),(0,r.kt)("p",null,"C \u8bed\u8a00\u7684\u89e3\u51b3\u529e\u6cd5\uff0c\u5c31\u662f\u63d0\u4f9b\u4e86\u7c7b\u578b\u522b\u540d\uff0c\u5728\u4e0d\u540c\u8ba1\u7b97\u673a\u4e0a\u4f1a\u89e3\u91ca\u6210\u4e0d\u540c\u7c7b\u578b\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"int32_t"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int32_t i = 100000;\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u5c06\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"i"),"\u58f0\u660e\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"int32_t"),"\u7c7b\u578b\uff0c\u4fdd\u8bc1\u5b83\u5728\u4e0d\u540c\u8ba1\u7b97\u673a\u4e0a\u90fd\u662f32\u4f4d\u5bbd\u5ea6\uff0c\u79fb\u690d\u4ee3\u7801\u65f6\u5c31\u4e0d\u4f1a\u51fa\u9519\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u7c7b\u7684\u7c7b\u578b\u522b\u540d\u90fd\u662f\u7528 typedef \u5b9a\u4e49\u7684\u3002\u4e0b\u9762\u662f\u7c7b\u4f3c\u7684\u4f8b\u5b50\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef long int ptrdiff_t;\ntypedef unsigned long int size_t;\ntypedef int wchar_t;\n")),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6574\u6570\u7c7b\u578b\u522b\u540d\u90fd\u653e\u5728\u5934\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"stdint.h"),"\uff0c\u4e0d\u540c\u67b6\u6784\u7684\u8ba1\u7b97\u673a\u53ea\u9700\u4fee\u6539\u8fd9\u4e2a\u5934\u6587\u4ef6\u5373\u53ef\uff0c\u800c\u65e0\u9700\u4fee\u6539\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"typedef"),"\u6709\u52a9\u4e8e\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u79fb\u690d\u6027\uff0c\u4f7f\u5176\u80fd\u9002\u914d\u4e0d\u540c\u67b6\u6784\u7684\u8ba1\u7b97\u673a\u3002"),(0,r.kt)("p",null,"\uff085\uff09\u7b80\u5316\u7c7b\u578b\u58f0\u660e"),(0,r.kt)("p",null,"C \u8bed\u8a00\u6709\u4e9b\u7c7b\u578b\u58f0\u660e\u76f8\u5f53\u590d\u6742\uff0c\u6bd4\u5982\u4e0b\u9762\u8fd9\u4e2a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"char (*(*x(void))[5])(void);\n")),(0,r.kt)("p",null,"typedef \u53ef\u4ee5\u7b80\u5316\u590d\u6742\u7684\u7c7b\u578b\u58f0\u660e\uff0c\u4f7f\u5176\u66f4\u5bb9\u6613\u7406\u89e3\u3002\u9996\u5148\uff0c\u6700\u5916\u9762\u4e00\u5c42\u8d77\u4e00\u4e2a\u7c7b\u578b\u522b\u540d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef char (*Func)(void);\nFunc (*x(void))[5];\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u770b\u8d77\u6765\u8fd8\u662f\u6709\u70b9\u590d\u6742\uff0c\u5c31\u4e3a\u91cc\u9762\u4e00\u5c42\u4e5f\u5b9a\u4e49\u4e00\u4e2a\u522b\u540d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef char (*Func)(void);\ntypedef Func Arr[5];\nArr* x(void);\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u5c31\u6bd4\u8f83\u5bb9\u6613\u89e3\u8bfb\u4e86\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x"),"\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u6307\u5411 Arr \u7c7b\u578b\u7684\u6307\u9488\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Arr"),"\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u67095\u4e2a\u6210\u5458\uff0c\u6bcf\u4e2a\u6210\u5458\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"Func"),"\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Func"),"\u662f\u4e00\u4e2a\u51fd\u6570\u6307\u9488\uff0c\u6307\u5411\u4e00\u4e2a\u65e0\u53c2\u6570\u3001\u8fd4\u56de\u5b57\u7b26\u503c\u7684\u51fd\u6570\u3002")))}m.isMDXComponent=!0}}]);