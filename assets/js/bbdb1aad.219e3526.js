"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7034],{3905:(e,l,t)=>{t.d(l,{Zo:()=>k,kt:()=>s});var n=t(7294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function p(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),o=function(e){var l=n.useContext(u),t=l;return e&&(t="function"==typeof e?e(l):i(i({},l),e)),t},k=function(e){var l=o(e.components);return n.createElement(u.Provider,{value:l},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},N=n.forwardRef((function(e,l){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),d=o(t),N=a,s=d["".concat(u,".").concat(N)]||d[N]||m[N]||r;return t?n.createElement(s,i(i({ref:l},k),{},{components:t})):n.createElement(s,i({ref:l},k))}));function s(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=N;var p={};for(var u in l)hasOwnProperty.call(l,u)&&(p[u]=l[u]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var o=2;o<r;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},1854:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=t(7462),a=(t(7294),t(3905));const r={},i="math.h",p={unversionedId:"C/lib \u6807\u51c6\u5e93/math.h",id:"C/lib \u6807\u51c6\u5e93/math.h",title:"math.h",description:"math.h\u5934\u6587\u4ef6\u63d0\u4f9b\u4e86\u5f88\u591a\u6570\u5b66\u51fd\u6570\u3002",source:"@site/example/dev/C/lib \u6807\u51c6\u5e93/math.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/math.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/math.h",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/dev/C/lib \u6807\u51c6\u5e93/math.h.md",tags:[],version:"current",lastUpdatedBy:"Louis Law",lastUpdatedAt:1688618282,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"locale.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/locale.h"},next:{title:"signal.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/signal.h"}},u={},o=[{value:"\u7c7b\u578b\u548c\u5b8f",id:"\u7c7b\u578b\u548c\u5b8f",level:2},{value:"\u9519\u8bef\u7c7b\u578b",id:"\u9519\u8bef\u7c7b\u578b",level:2},{value:"\u6570\u503c\u7c7b\u578b",id:"\u6570\u503c\u7c7b\u578b",level:2},{value:"signbit()",id:"signbit",level:2},{value:"\u4e09\u89d2\u51fd\u6570",id:"\u4e09\u89d2\u51fd\u6570",level:2},{value:"\u53cc\u66f2\u51fd\u6570",id:"\u53cc\u66f2\u51fd\u6570",level:2},{value:"\u6307\u6570\u51fd\u6570\u548c\u5bf9\u6570\u51fd\u6570",id:"\u6307\u6570\u51fd\u6570\u548c\u5bf9\u6570\u51fd\u6570",level:2},{value:"frexp()",id:"frexp",level:2},{value:"ilogb()",id:"ilogb",level:2},{value:"ldexp()",id:"ldexp",level:2},{value:"modf()",id:"modf",level:2},{value:"scalbn()",id:"scalbn",level:2},{value:"round()",id:"round",level:2},{value:"trunc()",id:"trunc",level:2},{value:"ceil()",id:"ceil",level:2},{value:"floor()",id:"floor",level:2},{value:"fmod()",id:"fmod",level:2},{value:"\u6d6e\u70b9\u6570\u6bd4\u8f83\u51fd\u6570",id:"\u6d6e\u70b9\u6570\u6bd4\u8f83\u51fd\u6570",level:2},{value:"isunordered()",id:"isunordered",level:2},{value:"\u5176\u4ed6\u51fd\u6570",id:"\u5176\u4ed6\u51fd\u6570",level:2}],k={toc:o},d="wrapper";function m(e){let{components:l,...t}=e;return(0,a.kt)(d,(0,n.Z)({},k,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mathh"},"math.h"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"math.h"),"\u5934\u6587\u4ef6\u63d0\u4f9b\u4e86\u5f88\u591a\u6570\u5b66\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u5f88\u591a\u6570\u5b66\u51fd\u6570\u7684\u8fd4\u56de\u503c\u662f double \u7c7b\u578b\uff0c\u4f46\u662f\u540c\u65f6\u63d0\u4f9b float \u7c7b\u578b\u4e0e long double \u7c7b\u578b\u7684\u7248\u672c\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"pow()"),"\u51fd\u6570\u5c31\u8fd8\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"powf()"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"powl()"),"\u7248\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"double      pow(double x, double y); \nfloat       powf(float x, float y);\nlong double powl(long double x, long double y);\n")),(0,a.kt)("p",null,"\u4e3a\u4e86\u7b80\u6d01\uff0c\u4e0b\u9762\u5c31\u7565\u53bb\u4e86\u51fd\u6570\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"f"),"\u540e\u7f00\uff08float \u7c7b\u578b\uff09\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"l"),"\u540e\u7f00\uff08long double\uff09\u7248\u672c\u3002"),(0,a.kt)("h2",{id:"\u7c7b\u578b\u548c\u5b8f"},"\u7c7b\u578b\u548c\u5b8f"),(0,a.kt)("p",null,"math.h \u65b0\u5b9a\u4e49\u4e86\u4e24\u4e2a\u7c7b\u578b\u522b\u540d\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"float_t\uff1a\uff08\u5f53\u524d\u7cfb\u7edf\uff09\u6700\u6709\u6548\u6267\u884c float \u8fd0\u7b97\u7684\u7c7b\u578b\uff0c\u5bbd\u5ea6\u81f3\u5c11\u4e0e float \u4e00\u6837\u3002"),(0,a.kt)("li",{parentName:"ul"},"double_t\uff1a\uff08\u5f53\u524d\u7cfb\u7edf\uff09\u6700\u6709\u6548\u6267\u884c double \u8fd0\u7b97\u7684\u7c7b\u578b\uff0c\u5bbd\u5ea6\u81f3\u5c11\u4e0e double \u4e00\u6837\u3002")),(0,a.kt)("p",null,"\u5b83\u4eec\u7684\u5177\u4f53\u7c7b\u578b\u53ef\u4ee5\u901a\u8fc7\u5b8f",(0,a.kt)("inlineCode",{parentName:"p"},"FLT_EVAL_METHOD"),"\u6765\u4e86\u89e3\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"FLT_EVAL_METHOD \u7684\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"float_t \u5bf9\u5e94\u7684\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"double_t \u5bf9\u5e94\u7684\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"double")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"double"),(0,a.kt)("td",{parentName:"tr",align:null},"double")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"long double"),(0,a.kt)("td",{parentName:"tr",align:null},"long double")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5176\u4ed6"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7531\u5b9e\u73b0\u51b3\u5b9a"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7531\u5b9e\u73b0\u51b3\u5b9a")))),(0,a.kt)("p",null,"math.h \u8fd8\u5b9a\u4e49\u4e86\u4e00\u4e9b\u5b8f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"INFINITY"),"\uff1a\u8868\u793a\u6b63\u65e0\u7a77\uff0c\u8fd4\u56de\u4e00\u4e2a float \u7c7b\u578b\u7684\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NAN"),"\uff1a\u8868\u793a\u975e\u6570\u5b57\uff08Not-A-Number\uff09\uff0c\u8fd4\u56de\u4e00\u4e2a float \u7c7b\u578b\u7684\u503c\u3002")),(0,a.kt)("h2",{id:"\u9519\u8bef\u7c7b\u578b"},"\u9519\u8bef\u7c7b\u578b"),(0,a.kt)("p",null,"\u6570\u5b66\u51fd\u6570\u7684\u62a5\u9519\u6709\u4ee5\u4e0b\u7c7b\u578b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Range errors\uff1a\u8fd0\u7b97\u7ed3\u679c\u4e0d\u80fd\u7528\u51fd\u6570\u8fd4\u56de\u7c7b\u578b\u8868\u793a\u3002"),(0,a.kt)("li",{parentName:"ul"},"Domain errors\uff1a\u51fd\u6570\u53c2\u6570\u4e0d\u9002\u7528\u5f53\u524d\u51fd\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"Pole errors\uff1a\u53c2\u6570\u5bfc\u81f4\u51fd\u6570\u7684\u6781\u9650\u503c\u53d8\u6210\u65e0\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"Overflow errors\uff1a\u8fd0\u7b97\u7ed3\u679c\u592a\u5927\uff0c\u5bfc\u81f4\u6ea2\u51fa\u3002"),(0,a.kt)("li",{parentName:"ul"},"Underflow errors\uff1a\u8fd0\u7b97\u7ed3\u679c\u592a\u5c0f\uff0c\u5bfc\u81f4\u6ea2\u51fa\u3002")),(0,a.kt)("p",null,"\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"math_errhandling"),"\u63d0\u793a\u4e86\u5f53\u524d\u7cfb\u7edf\u5982\u4f55\u5904\u7406\u6570\u5b66\u8fd0\u7b97\u9519\u8bef\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"math_errhandling \u7684\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MATH_ERRNO"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u4f7f\u7528 errno \u8868\u793a\u6570\u5b66\u9519\u8bef")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MATH_ERREXCEPT"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u4f7f\u7528\u5f02\u5e38\u8868\u793a\u6570\u5b66\u9519\u8bef")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MATH_ERREXCEPT"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u540c\u65f6\u4f7f\u7528\u4e24\u8005\u8868\u793a\u6570\u5b66\u9519\u8bef")))),(0,a.kt)("h2",{id:"\u6570\u503c\u7c7b\u578b"},"\u6570\u503c\u7c7b\u578b"),(0,a.kt)("p",null,"\u6570\u5b66\u51fd\u6570\u7684\u53c2\u6570\u53ef\u4ee5\u5206\u6210\u4ee5\u4e0b\u51e0\u7c7b\uff1a\u6b63\u5e38\u503c\uff0c\u65e0\u9650\u503c\uff0c\u6709\u9650\u503c\u548c\u975e\u6570\u5b57\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u51fd\u6570\u7528\u6765\u5224\u65ad\u4e00\u4e2a\u503c\u7684\u7c7b\u578b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fpclassify()\uff1a\u8fd4\u56de\u7ed9\u5b9a\u6d6e\u70b9\u6570\u7684\u5206\u7c7b\u3002"),(0,a.kt)("li",{parentName:"ul"},"isfinite()\uff1a\u5982\u679c\u53c2\u6570\u4e0d\u662f\u65e0\u9650\u6216 NaN\uff0c\u5219\u4e3a\u771f\u3002"),(0,a.kt)("li",{parentName:"ul"},"isinf()\uff1a\u5982\u679c\u53c2\u6570\u662f\u65e0\u9650\u7684\uff0c\u5219\u4e3a\u771f\u3002"),(0,a.kt)("li",{parentName:"ul"},"isnan()\uff1a\u5982\u679c\u53c2\u6570\u4e0d\u662f\u6570\u5b57\uff0c\u5219\u4e3a\u771f\u3002"),(0,a.kt)("li",{parentName:"ul"},"isnormal()\uff1a\u5982\u679c\u53c2\u6570\u662f\u6b63\u5e38\u6570\u5b57\uff0c\u5219\u4e3a\u771f\u3002")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"isfinite(1.23)    // 1\nisinf(1/tan(0))   // 1\nisnan(sqrt(-1))   // 1\nisnormal(1e-310)) // 0\n")),(0,a.kt)("h2",{id:"signbit"},"signbit()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"signbit()"),"\u5224\u65ad\u53c2\u6570\u662f\u5426\u5e26\u6709\u7b26\u53f7\u3002\u5982\u679c\u53c2\u6570\u4e3a\u8d1f\u503c\uff0c\u5219\u8fd4\u56de1\uff0c\u5426\u5219\u8fd4\u56de0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"signbit(3490.0) // 0\nsignbit(-37.0)  // 1\n")),(0,a.kt)("h2",{id:"\u4e09\u89d2\u51fd\u6570"},"\u4e09\u89d2\u51fd\u6570"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e09\u89d2\u51fd\u6570\uff0c\u53c2\u6570\u4e3a\u5f27\u5ea6\u503c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"acos()\uff1a\u53cd\u4f59\u5f26\u3002"),(0,a.kt)("li",{parentName:"ul"},"asin()\uff1a\u53cd\u6b63\u5f26\u3002"),(0,a.kt)("li",{parentName:"ul"},"atan()\uff1a\u53cd\u6b63\u5207"),(0,a.kt)("li",{parentName:"ul"},"atan2()\uff1a\u53cd\u6b63\u5207\u3002"),(0,a.kt)("li",{parentName:"ul"},"cos()\uff1a\u4f59\u5f26\u3002"),(0,a.kt)("li",{parentName:"ul"},"sin()\uff1a\u6b63\u5f26\u3002"),(0,a.kt)("li",{parentName:"ul"},"tan()\uff1a\u6b63\u5207\u3002")),(0,a.kt)("p",null,"\u4e0d\u8981\u5fd8\u4e86\uff0c\u4e0a\u9762\u6240\u6709\u51fd\u6570\u90fd\u6709 float \u7248\u672c\uff08\u51fd\u6570\u540d\u52a0\u4e0a f \u540e\u7f00\uff09\u548c long double \u7248\u672c\uff08\u51fd\u6570\u540d\u52a0\u4e0a l \u540e\u7f00\uff09\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"cos(PI/4) // 0.707107\n")),(0,a.kt)("h2",{id:"\u53cc\u66f2\u51fd\u6570"},"\u53cc\u66f2\u51fd\u6570"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u53cc\u66f2\u51fd\u6570\uff0c\u53c2\u6570\u90fd\u4e3a\u6d6e\u70b9\u6570\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"acosh()\uff1a\u53cd\u53cc\u66f2\u4f59\u5f26\u3002 "),(0,a.kt)("li",{parentName:"ul"},"asinh()\uff1a\u53cd\u53cc\u66f2\u6b63\u5f26\u3002"),(0,a.kt)("li",{parentName:"ul"},"atanh()\uff1a\u53cd\u53cc\u66f2\u6b63\u5207\u3002"),(0,a.kt)("li",{parentName:"ul"},"cosh()\uff1a\u53cc\u66f2\u4f59\u5f26\u3002"),(0,a.kt)("li",{parentName:"ul"},"tanh()\uff1a\u53cc\u66f2\u6b63\u5207\u3002"),(0,a.kt)("li",{parentName:"ul"},"sinh()\uff1a\u53cc\u66f2\u6b63\u5f26\u3002 ")),(0,a.kt)("h2",{id:"\u6307\u6570\u51fd\u6570\u548c\u5bf9\u6570\u51fd\u6570"},"\u6307\u6570\u51fd\u6570\u548c\u5bf9\u6570\u51fd\u6570"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u6307\u6570\u51fd\u6570\u548c\u5bf9\u6570\u51fd\u6570\uff0c\u5b83\u4eec\u7684\u8fd4\u56de\u503c\u90fd\u662f double \u7c7b\u578b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"exp()\uff1a\u8ba1\u7b97\u6b27\u62c9\u6570 e \u7684\u4e58\u65b9\uff0c\u5373 e",(0,a.kt)("sup",null,"x"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"exp2()\uff1a\u8ba1\u7b97 2 \u7684\u4e58\u65b9\uff0c\u5373 2",(0,a.kt)("sup",null,"x"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"expm1()\uff1a\u8ba1\u7b97 e",(0,a.kt)("sup",null,"x")," - 1\u3002"),(0,a.kt)("li",{parentName:"ul"},"log()\uff1a\u8ba1\u7b97\u81ea\u7136\u5bf9\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"exp()"),"\u7684\u9006\u8fd0\u7b97\u3002"),(0,a.kt)("li",{parentName:"ul"},"log2()\uff1a\u8ba1\u7b97\u4ee52\u4e3a\u5e95\u7684\u5bf9\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"log10()\uff1a\u8ba1\u7b97\u4ee510\u4e3a\u5e95\u7684\u5bf9\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"logp1()\uff1a\u8ba1\u7b97\u4e00\u4e2a\u6570\u52a0 1 \u7684\u81ea\u7136\u5bf9\u6570\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"li"},"ln(x + 1)"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"logb()\uff1a\u8ba1\u7b97\u4ee5\u5b8f",(0,a.kt)("inlineCode",{parentName:"li"},"FLT_RADIX"),"\uff08\u4e00\u822c\u4e3a2\uff09\u4e3a\u5e95\u7684\u5bf9\u6570\uff0c\u4f46\u53ea\u8fd4\u56de\u6574\u6570\u90e8\u5206\u3002")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"exp(3.0) // 20.085500\nlog(20.0855) // 3.000000\nlog10(10000) // 3.000000\n")),(0,a.kt)("p",null,"\u5982\u679c\u7ed3\u679c\u503c\u8d85\u51fa\u4e86 C \u8bed\u8a00\u53ef\u4ee5\u8868\u793a\u7684\u6700\u5927\u503c\uff0c\u51fd\u6570\u5c06\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"HUGE_VAL"),"\uff0c\u5b83\u662f\u4e00\u4e2a\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"math.h"),"\u4e2d\u5b9a\u4e49\u7684 double \u7c7b\u578b\u7684\u503c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u7ed3\u679c\u503c\u592a\u5c0f\uff0c\u65e0\u6cd5\u7528 double \u503c\u8868\u793a\uff0c\u51fd\u6570\u5c06\u8fd4\u56de0\u3002\u4ee5\u4e0a\u8fd9\u4e24\u79cd\u60c5\u51b5\u90fd\u5c5e\u4e8e\u51fa\u9519\u3002"),(0,a.kt)("h2",{id:"frexp"},"frexp()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"frexp()"),"\u5c06\u53c2\u6570\u5206\u89e3\u6210\u6d6e\u70b9\u6570\u548c\u6307\u6570\u90e8\u5206\uff082\u4e3a\u5e95\u6570\uff09\uff0c\u6bd4\u5982 1234.56 \u53ef\u4ee5\u5199\u6210 0.6028125 * 2",(0,a.kt)("sup",null,"11"),"\uff0c\u8fd9\u4e2a\u51fd\u6570\u5c31\u80fd\u5206\u89e3\u51fa 0.6028125 \u548c 11\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"double frexp(double value, int* exp);\n")),(0,a.kt)("p",null,"\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u7528\u6765\u5206\u89e3\u7684\u6d6e\u70b9\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6574\u6570\u53d8\u91cf\u6307\u9488\u3002"),(0,a.kt)("p",null,"\u5b83\u8fd4\u56de\u5c0f\u6570\u90e8\u5206\uff0c\u5e76\u5c06\u6307\u6570\u90e8\u5206\u653e\u5165\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"exp"),"\u3002\u5982\u679c\u53c2\u6570\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u5219\u8fd4\u56de\u7684\u5c0f\u6570\u90e8\u5206\u548c\u6307\u6570\u90e8\u5206\u90fd\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'double frac;\nint expt;\n\n// expt \u7684\u503c\u662f 11\nfrac = frexp(1234.56, &expt);\n\n// \u8f93\u51fa 1234.56 = 0.6028125 x 2^11\nprintf("1234.56 = %.7f x 2^%d\\n", frac, expt);\n')),(0,a.kt)("h2",{id:"ilogb"},"ilogb()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ilogb()"),"\u8fd4\u56de\u4e00\u4e2a\u6d6e\u70b9\u6570\u7684\u6307\u6570\u90e8\u5206\uff0c\u6307\u6570\u7684\u57fa\u6570\u662f\u5b8f",(0,a.kt)("inlineCode",{parentName:"p"},"FLT_RADIX"),"\uff08\u4e00\u822c\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int ilogb(double x);\n")),(0,a.kt)("p",null,"\u5b83\u7684\u53c2\u6570\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\uff0c\u8fd4\u56de\u503c\u662f log",(0,a.kt)("sub",null,"r"),"|x|\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"r"),"\u4e3a\u5b8f",(0,a.kt)("inlineCode",{parentName:"p"},"FLT_RADIX"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u7528\u6cd5\u793a\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"ilogb(257) // 8\nilogb(256) // 8\nilogb(255) // 7\n")),(0,a.kt)("h2",{id:"ldexp"},"ldexp()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ldexp()"),"\u5c06\u4e00\u4e2a\u6570\u4e58\u4ee52\u7684\u4e58\u65b9\u3002\u5b83\u53ef\u4ee5\u770b\u6210\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"frexp()"),"\u7684\u9006\u8fd0\u7b97\uff0c\u5c06\u5c0f\u6570\u90e8\u5206\u548c\u6307\u6570\u90e8\u5206\u5408\u6210\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"f * 2^n"),"\u5f62\u5f0f\u7684\u6d6e\u70b9\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"double ldexp(double x, int exp);\n")),(0,a.kt)("p",null,"\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e58\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f2\u7684\u6307\u6570\u90e8\u5206",(0,a.kt)("inlineCode",{parentName:"p"},"exp"),"\uff0c\u8fd4\u56de\u201cx * 2",(0,a.kt)("sup",null,"exp"),"\u201d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"ldexp(1, 10) // 1024.000000\nldexp(3, 2) // 12.000000\nldexp(0.75, 4) // 12.000000\nldexp(0.5, -1) // 0.250000\n")),(0,a.kt)("h2",{id:"modf"},"modf()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"modf()"),"\u51fd\u6570\u63d0\u53d6\u4e00\u4e2a\u6570\u7684\u6574\u6570\u90e8\u5206\u548c\u5c0f\u6570\u90e8\u5206\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"}," double modf(double value, double* iptr);\n")),(0,a.kt)("p",null,"\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\u8868\u793a\u5f85\u5206\u89e3\u7684\u6570\u503c\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6d6e\u70b9\u6570\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"iptr"),"\u3002\u8fd4\u56de\u503c\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\u7684\u5c0f\u6570\u90e8\u5206\uff0c\u6574\u6570\u90e8\u5206\u653e\u5165\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"double"),"\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// int_part \u7684\u503c\u662f 3.0\nmodf(3.14159, &int_part); // \u8fd4\u56de 0.14159\n")),(0,a.kt)("h2",{id:"scalbn"},"scalbn()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"scalbn()"),"\u7528\u6765\u8ba1\u7b97\u201cx * r",(0,a.kt)("sup",null,"n"),"\u201d\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"r"),"\u662f\u5b8f",(0,a.kt)("inlineCode",{parentName:"p"},"FLT_RADIX"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"double scalbn(double x, int n);\n")),(0,a.kt)("p",null,"\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u662f\u4e58\u6570\u90e8\u5206\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"\u662f\u6307\u6570\u90e8\u5206\uff0c\u8fd4\u56de\u503c\u662f\u201cx * r",(0,a.kt)("sup",null,"n"),"\u201d\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"scalbn(2, 8) // 512.000000\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u6709\u591a\u4e2a\u7248\u672c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"scalbn()\uff1a\u6307\u6570 n \u662f int \u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"scalbnf()\uff1afloat \u7248\u672c\u7684 scalbn()\u3002"),(0,a.kt)("li",{parentName:"ul"},"scalbnl()\uff1along double \u7248\u672c\u7684 scalbn()\u3002"),(0,a.kt)("li",{parentName:"ul"},"scalbln()\uff1a\u6307\u6570 n \u662f long int \u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"scalblnf()\uff1afloat \u7248\u672c\u7684 scalbln()\u3002"),(0,a.kt)("li",{parentName:"ul"},"scalblnl()\uff1along double \u7248\u672c\u7684 scalbln()\u3002")),(0,a.kt)("h2",{id:"round"},"round()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"round()"),"\u51fd\u6570\u4ee5\u4f20\u7edf\u65b9\u5f0f\u8fdb\u884c\u56db\u820d\u4e94\u5165\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"1.5"),"\u820d\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"-1.5"),"\u820d\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"-2"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"double round(double x);\n")),(0,a.kt)("p",null,"\u5b83\u8fd4\u56de\u4e00\u4e2a\u6d6e\u70b9\u6570\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"round(3.14)  // 3.000000\nround(3.5)   // 4.000000\nround(-1.5)  // -2.000000\nround(-1.14) // -1.000000\n")),(0,a.kt)("p",null,"\u5b83\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u7248\u672c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lround()\uff1a\u8fd4\u56de\u503c\u662f long int \u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"llround()\uff1a\u8fd4\u56de\u503c\u662f long long int \u7c7b\u578b\u3002")),(0,a.kt)("h2",{id:"trunc"},"trunc()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"trunc()"),"\u7528\u6765\u622a\u53bb\u4e00\u4e2a\u6d6e\u70b9\u6570\u7684\u5c0f\u6570\u90e8\u5206\uff0c\u5c06\u5269\u4e0b\u7684\u6574\u6570\u90e8\u5206\u4ee5\u6d6e\u70b9\u6570\u7684\u5f62\u5f0f\u8fd4\u56de\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"double trunc(double x);\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"trunc(3.14)  // 3.000000\ntrunc(3.8)   // 3.000000\ntrunc(-1.5)  // -1.000000\ntrunc(-1.14) // -1.000000\n")),(0,a.kt)("h2",{id:"ceil"},"ceil()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ceil()"),"\u8fd4\u56de\u4e0d\u5c0f\u4e8e\u5176\u53c2\u6570\u7684\u6700\u5c0f\u6574\u6570\uff08double \u7c7b\u578b\uff09\uff0c\u5c5e\u4e8e\u201c\u5411\u4e0a\u820d\u5165\u201d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"double ceil(double x);\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"ceil(7.1) // 8.0\nceil(7.9) // 8.0\nceil(-7.1) // -7.0\nceil(-7.9) // -7.0\n")),(0,a.kt)("h2",{id:"floor"},"floor()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"floor()"),"\u8fd4\u56de\u4e0d\u5927\u4e8e\u5176\u53c2\u6570\u7684\u6700\u5927\u6574\u6570\uff0c\u5c5e\u4e8e\u201c\u5411\u4e0b\u820d\u5165\u201d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"double floor(double x);\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"floor(7.1) // 7.0\nfloor(7.9) // 7.0\nfloor(-7.1) // -8.0\nfloor(-7.9) // -8.0\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u51fd\u6570\u53ef\u4ee5\u5b9e\u73b0\u201c\u56db\u820d\u4e94\u5165\u201d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"double round_nearest(double x) {\n  return x < 0.0 ? ceil(x - 0.5) : floor(x + 0.5);\n}\n")),(0,a.kt)("h2",{id:"fmod"},"fmod()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fmod()"),"\u8fd4\u56de\u7b2c\u4e00\u4e2a\u53c2\u6570\u9664\u4ee5\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u4f59\u6570\uff0c\u5c31\u662f\u4f59\u503c\u8fd0\u7b97\u7b26",(0,a.kt)("inlineCode",{parentName:"p"},"%"),"\u7684\u6d6e\u70b9\u6570\u7248\u672c\uff0c\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"%"),"\u53ea\u80fd\u7528\u4e8e\u6574\u6570\u8fd0\u7b97\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"double fmod(double x, double y);\n")),(0,a.kt)("p",null,"\u5b83\u5728\u5e55\u540e\u6267\u884c\u7684\u8ba1\u7b97\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"x - trunc(x / y) * y"),"\uff0c\u8fd4\u56de\u503c\u7684\u7b26\u53f7\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u7b26\u53f7\u76f8\u540c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"fmod(5.5, 2.2)  //  1.100000\nfmod(-9.2, 5.1) // -4.100000\nfmod(9.2, 5.1)  //  4.100000\n")),(0,a.kt)("h2",{id:"\u6d6e\u70b9\u6570\u6bd4\u8f83\u51fd\u6570"},"\u6d6e\u70b9\u6570\u6bd4\u8f83\u51fd\u6570"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u51fd\u6570\u7528\u4e8e\u4e24\u4e2a\u6d6e\u70b9\u6570\u7684\u6bd4\u8f83\uff0c\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u662f\u6574\u6570\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"isgreater()\uff1a\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"x > y"),"\u7684\u7ed3\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"isgreaterequal()\uff1a\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"x >= y"),"\u7684\u7ed3\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"isless()\uff1a\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"x < y"),"\u7684\u7ed3\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"islessequal()\uff1a\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"x <= y"),"\u7684\u7ed3\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"islessgreater()\uff1a\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"(x < y) || (x > y)"),"\u7684\u7ed3\u679c\u3002")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"isgreater(10.0, 3.0)   // 1\nisgreaterequal(10.0, 10.0)   // 1\nisless(10.0, 3.0)  // 0\nislessequal(10.0, 3.0)   // 0\nislessgreater(10.0, 3.0)   // 1\nislessgreater(10.0, 30.0)   // 1\nislessgreater(10.0, 10.0)   // 0\n")),(0,a.kt)("h2",{id:"isunordered"},"isunordered()"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isunordered()"),"\u8fd4\u56de\u4e24\u4e2a\u53c2\u6570\u4e4b\u4e2d\uff0c\u662f\u5426\u5b58\u5728 NAN\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int isunordered(any_floating_type x, any_floating_type y);\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"isunordered(1.0, 2.0)    // 0\nisunordered(1.0, sqrt(-1))  // 1\nisunordered(NAN, 30.0)  // 1\nisunordered(NAN, NAN)   // 1\n")),(0,a.kt)("h2",{id:"\u5176\u4ed6\u51fd\u6570"},"\u5176\u4ed6\u51fd\u6570"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f math.h \u5305\u542b\u7684\u5176\u5b83\u51fd\u6570\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pow()\uff1a\u8ba1\u7b97\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"y"),"\u6b21\u65b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"sqrt()\uff1a\u8ba1\u7b97\u4e00\u4e2a\u6570\u7684\u5e73\u65b9\u6839\u3002"),(0,a.kt)("li",{parentName:"ul"},"cbrt()\uff1a\u8ba1\u7b97\u7acb\u65b9\u6839\u3002"),(0,a.kt)("li",{parentName:"ul"},"fabs()\uff1a\u8ba1\u7b97\u7edd\u5bf9\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"hypot()\uff1a\u6839\u636e\u76f4\u89d2\u4e09\u89d2\u5f62\u7684\u4e24\u6761\u76f4\u89d2\u8fb9\uff0c\u8ba1\u7b97\u659c\u8fb9\u3002"),(0,a.kt)("li",{parentName:"ul"},"fmax()\uff1a\u8fd4\u56de\u4e24\u4e2a\u53c2\u6570\u4e4b\u4e2d\u7684\u6700\u5927\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"fmin()\uff1a\u8fd4\u56de\u4e24\u4e2a\u53c2\u6570\u4e4b\u4e2d\u7684\u6700\u5c0f\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"remainder()\uff1a\u8fd4\u56de IEC 60559 \u6807\u51c6\u7684\u4f59\u6570\uff0c\u7c7b\u4f3c\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"fmod()"),"\uff0c\u4f46\u662f\u4f59\u6570\u8303\u56f4\u662f\u4ece",(0,a.kt)("inlineCode",{parentName:"li"},"-y/2"),"\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"y/2"),"\uff0c\u800c\u4e0d\u662f\u4ece",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"y"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"remquo()\uff1a\u540c\u65f6\u8fd4\u56de\u4f59\u6570\u548c\u5546\uff0c\u4f59\u6570\u7684\u8ba1\u7b97\u65b9\u6cd5\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"remainder()"),"\u76f8\u540c\u3002"),(0,a.kt)("li",{parentName:"ul"},"copysign()\uff1a\u8fd4\u56de\u4e00\u4e2a\u5927\u5c0f\u7b49\u4e8e\u7b2c\u4e00\u4e2a\u53c2\u6570\u3001\u7b26\u53f7\u7b49\u4e8e\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"nan()\uff1a\u8fd4\u56de NAN\u3002  "),(0,a.kt)("li",{parentName:"ul"},"nextafter()\uff1a\u83b7\u53d6\u4e0b\u4e00\u4e2a\uff08\u6216\u8005\u4e0a\u4e00\u4e2a\uff0c\u5177\u4f53\u65b9\u5411\u53d6\u51b3\u4e8e\u7b2c\u4e8c\u4e2a\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"li"},"y"),"\uff09\u5f53\u524d\u7cfb\u7edf\u53ef\u4ee5\u8868\u793a\u7684\u6d6e\u70b9\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"nextoward()\uff1a\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"nextafter()"),"\u76f8\u540c\uff0c\u9664\u4e86\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f long double \u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},"fdim()\uff1a\u5982\u679c\u7b2c\u4e00\u4e2a\u53c2\u6570\u51cf\u53bb\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5927\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"\uff0c\u5219\u8fd4\u56de\u5dee\u503c\uff0c\u5426\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"fma()\uff1a\u4ee5\u5feb\u901f\u8ba1\u7b97\u7684\u65b9\u5f0f\uff0c\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"x * y + z"),"\u7684\u7ed3\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"nearbyint()\uff1a\u5728\u5f53\u524d\u820d\u5165\u65b9\u5411\u4e0a\uff0c\u820d\u5165\u5230\u6700\u63a5\u8fd1\u7684\u6574\u6570\u3002\u5f53\u524d\u820d\u5165\u65b9\u5411\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"fesetround()"),"\u51fd\u6570\u8bbe\u5b9a\u3002"),(0,a.kt)("li",{parentName:"ul"},"rint()\uff1a\u5728\u5f53\u524d\u820d\u5165\u65b9\u5411\u4e0a\uff0c\u820d\u5165\u5230\u6700\u63a5\u8fd1\u7684\u6574\u6570\uff0c\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"nearbyint()"),"\u76f8\u540c\u3002\u4e0d\u540c\u4e4b\u5904\u662f\uff0c\u5b83\u4f1a\u89e6\u53d1\u6d6e\u70b9\u6570\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"INEXACT"),"\u5f02\u5e38\u3002"),(0,a.kt)("li",{parentName:"ul"},"lrint()\uff1a\u5728\u5f53\u524d\u820d\u5165\u65b9\u5411\u4e0a\uff0c\u820d\u5165\u5230\u6700\u63a5\u8fd1\u7684\u6574\u6570\uff0c\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"rint()"),"\u76f8\u540c\u3002\u4e0d\u540c\u4e4b\u5904\u662f\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u800c\u4e0d\u662f\u6d6e\u70b9\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"erf()\uff1a\u8ba1\u7b97\u4e00\u4e2a\u503c\u7684\u8bef\u5dee\u51fd\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"erfc()\uff1a\u8ba1\u7b97\u4e00\u4e2a\u503c\u7684\u4e92\u8865\u8bef\u5dee\u51fd\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"tgamma()\uff1a\u8ba1\u7b97 Gamma \u51fd\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"lgamma()\uff1a\u8ba1\u7b97 Gamma \u51fd\u6570\u7edd\u5bf9\u503c\u7684\u81ea\u7136\u5bf9\u6570\u3002")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"pow(3, 4) // 81.000000\nsqrt(3.0) // 1.73205\ncbrt(1729.03) // 12.002384\nfabs(-3490.0) // 3490.000000\nhypot(3, 4) // 5.000000\nfmax(3.0, 10.0) // 10.000000\nfmin(10.0, 3.0) //  3.000000\n")))}m.isMDXComponent=!0}}]);