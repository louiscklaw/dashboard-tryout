"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8942],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>N});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),o=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),u=o(a),N=n,g=u["".concat(m,".").concat(N)]||u[N]||d[N]||l;return a?r.createElement(g,p(p({ref:e},k),{},{components:a})):r.createElement(g,p({ref:e},k))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4207:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const l={id:"\u7b80\u4ecb",title:"\u7b80\u4ecb",sidebar_position:1,data:"2022\u5e742\u670817\u65e5"},p=void 0,i={unversionedId:"C++/\u7b80\u4ecb",id:"C++/\u7b80\u4ecb",title:"\u7b80\u4ecb",description:"\u7b80\u4ecb",source:"@site/dev/C++/\u7b80\u4ecb.md",sourceDirName:"C++",slug:"/C++/\u7b80\u4ecb",permalink:"https://louiscklaw.github.io/dashboard-tryout/dev/C++/\u7b80\u4ecb",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/dev/C++/\u7b80\u4ecb.md",tags:[],version:"current",lastUpdatedBy:"louiscklaw",lastUpdatedAt:1657484196,formattedLastUpdatedAt:"Jul 10, 2022",sidebarPosition:1,frontMatter:{id:"\u7b80\u4ecb",title:"\u7b80\u4ecb",sidebar_position:1,data:"2022\u5e742\u670817\u65e5"},sidebar:"tutorialSidebar",previous:{title:"wctype.h",permalink:"https://louiscklaw.github.io/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/wctype.h"},next:{title:"\u57fa\u672c\u8bed\u6cd5",permalink:"https://louiscklaw.github.io/dashboard-tryout/dev/C++/\u57fa\u672c\u8bed\u6cd5"}},m={},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u6807\u51c6\u5316",id:"\u6807\u51c6\u5316",level:3},{value:"\u53d1\u5c55\u5386\u7a0b",id:"\u53d1\u5c55\u5386\u7a0b",level:3},{value:"\u9762\u5411\u5bf9\u8c61",id:"\u9762\u5411\u5bf9\u8c61",level:3},{value:"\u6807\u51c6\u5e93",id:"\u6807\u51c6\u5e93",level:3},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2},{value:"g++ \u7f16\u8bd1\u5668",id:"g-\u7f16\u8bd1\u5668",level:3}],k={toc:o};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,n.kt)("p",null,"C++ \u662f\u4e00\u79cd\u9759\u6001\u7c7b\u578b\u7684\u3001\u7f16\u8bd1\u5f0f\u7684\u3001\u901a\u7528\u7684\u3001\u5927\u5c0f\u5199\u654f\u611f\u7684\u3001\u4e0d\u89c4\u5219\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u652f\u6301\u8fc7\u7a0b\u5316\u7f16\u7a0b\u3001\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u548c\u6cdb\u578b\u7f16\u7a0b\u3002"),(0,n.kt)("p",null,"C++ \u88ab\u8ba4\u4e3a\u662f\u4e00\u79cd",(0,n.kt)("strong",{parentName:"p"},"\u4e2d\u7ea7"),"\u8bed\u8a00\uff0c\u5b83\u7efc\u5408\u4e86\u9ad8\u7ea7\u8bed\u8a00\u548c\u4f4e\u7ea7\u8bed\u8a00\u7684\u7279\u70b9\u3002"),(0,n.kt)("p",null,"C++ \u662f\u7531 Bjarne Stroustrup \u4e8e 1979 \u5e74\u5728\u65b0\u6cfd\u897f\u5dde\u7f8e\u5229\u5c71\u8d1d\u5c14\u5b9e\u9a8c\u5ba4\u5f00\u59cb\u8bbe\u8ba1\u5f00\u53d1\u7684\u3002C++ \u8fdb\u4e00\u6b65\u6269\u5145\u548c\u5b8c\u5584\u4e86 C \u8bed\u8a00\uff0c\u6700\u521d\u547d\u540d\u4e3a\u5e26\u7c7b\u7684C\uff0c\u540e\u6765\u5728 1983 \u5e74\u66f4\u540d\u4e3a C++\u3002"),(0,n.kt)("p",null,"C++ \u662f C \u7684\u4e00\u4e2a\u8d85\u96c6\uff0c\u4e8b\u5b9e\u4e0a\uff0c\u4efb\u4f55\u5408\u6cd5\u7684 C \u7a0b\u5e8f\u90fd\u662f\u5408\u6cd5\u7684 C++ \u7a0b\u5e8f\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u4f7f\u7528\u9759\u6001\u7c7b\u578b\u7684\u7f16\u7a0b\u8bed\u8a00\u662f\u5728\u7f16\u8bd1\u65f6\u6267\u884c\u7c7b\u578b\u68c0\u67e5\uff0c\u800c\u4e0d\u662f\u5728\u8fd0\u884c\u65f6\u6267\u884c\u7c7b\u578b\u68c0\u67e5\u3002"),(0,n.kt)("h3",{id:"\u6807\u51c6\u5316"},"\u6807\u51c6\u5316"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53d1\u5e03\u65f6\u95f4"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u901a\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2017"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C++17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e94\u4e2aC++\u6807\u51c6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2017"),(0,n.kt)("td",{parentName:"tr",align:"left"},"coroutines TS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u534f\u7a0b\u5e93\u6269\u5c55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2017"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ranges TS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u63d0\u4f9b\u8303\u56f4\u673a\u5236")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2017"),(0,n.kt)("td",{parentName:"tr",align:"left"},"library fundamentals TS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6807\u51c6\u5e93\u6269\u5c55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2016"),(0,n.kt)("td",{parentName:"tr",align:"left"},"concurrency TS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4e8e\u5e76\u53d1\u8ba1\u7b97\u7684\u6269\u5c55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2015"),(0,n.kt)("td",{parentName:"tr",align:"left"},"concepts TS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6982\u5ff5\u5e93\uff0c\u7528\u4e8e\u4f18\u5316\u7f16\u8bd1\u671f\u4fe1\u606f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2015"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TM TS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e8b\u52a1\u6027\u5185\u5b58\u64cd\u4f5c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2015"),(0,n.kt)("td",{parentName:"tr",align:"left"},"parallelism TS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4e8e\u5e76\u884c\u8ba1\u7b97\u7684\u6269\u5c55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2015"),(0,n.kt)("td",{parentName:"tr",align:"left"},"filesystem TS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6587\u4ef6\u7cfb\u7edf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2014"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C++14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u56db\u4e2aC++\u6807\u51c6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2011"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5341\u8fdb\u5236\u6d6e\u70b9\u6570\u6269\u5c55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2011"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C++11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e09\u4e2aC++\u6807\u51c6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2010"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6570\u5b66\u51fd\u6570\u6269\u5c55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2007"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C++TR1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C++\u6280\u672f\u62a5\u544a\uff1a\u5e93\u6269\u5c55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2006"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C++\u6027\u80fd\u6280\u672f\u62a5\u544a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2003"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C++03"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e8c\u4e2aC++\u6807\u51c6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1998"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C++98"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e00\u4e2aC++\u6807\u51c6")))),(0,n.kt)("h3",{id:"\u53d1\u5c55\u5386\u7a0b"},"\u53d1\u5c55\u5386\u7a0b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"C++ \u7f16\u7a0b\u8bed\u8a00\u7684\u5386\u53f2\u53ef\u4ee5\u8ffd\u6eaf\u5230 ",(0,n.kt)("strong",{parentName:"li"},"1979 \u5e74"),"\uff0c\u5f53\u65f6 Bjarne Stroustrup \u4e3a\u535a\u58eb\u5b66\u4f4d\u8bba\u6587\u8fdb\u884c\u4e86\u4e00\u4e9b\u5f00\u53d1\u3002\u5728 Stroustrup \u53ef\u4ee5\u4f7f\u7528\u7684\u6240\u6709\u8bed\u8a00\u4e2d\uff0c\u6709\u4e00\u79cd\u88ab\u79f0\u4e3a Simula \u7684\u8bed\u8a00\uff0c\u987e\u540d\u601d\u4e49\uff0c\u5b83\u53ef\u80fd\u662f\u4e00\u79cd\u4e3b\u8981\u4e3a\u4eff\u771f\u800c\u8bbe\u8ba1\u7684\u8bed\u8a00\u3002Simula 67 \u8bed\u8a00\u662f Stroustrup \u4f7f\u7528\u7684\u53d8\u4f53\uff0c\u88ab\u8ba4\u4e3a\u662f\u652f\u6301\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u8303\u4f8b\u7684\u4e3b\u8981\u8bed\u8a00\u3002Stroustrup \u53d1\u73b0\u8fd9\u79cd\u8303\u4f8b\u5bf9\u5305\u88c5\u5f00\u53d1\u5f88\u6709\u5e2e\u52a9\u3002\u4f46\u662f\uff0cSimula \u8bed\u8a00\u5bf9\u4e8e\u5b9e\u8df5\u548c\u5b9e\u9645\u4f7f\u7528\u800c\u8a00\u592a\u6162\u4e86\u3002 \u968f\u540e\u4e0d\u4e45\uff0cBjarne Stroustrup \u5e0c\u671b\u901a\u8fc7\u652f\u6301\u9762\u5411\u5bf9\u8c61\u8303\u4f8b\u6765\u589e\u5f3a C\u3002\u4ed6\u6df1\u5165\u7814\u7a76\u4e86 Smalltalk \u7684 OO \u5b9e\u73b0\uff0c\u4ee5\u83b7\u53d6\u6709\u5173\u5b9e\u73b0\u7684\u60f3\u6cd5\u3002\u4f46\u662f\u4ed6\u4e0d\u613f\u610f\u4e3a\u6b64\u653e\u5f03\u6027\u80fd\uff0c\u56e0\u6b64\u4ed6\u5f00\u59cb\u4ece\u4e8b \u201cC with Classes (\u5e26\u6709\u7c7b\u7684 C\uff09\u201d \u7684\u5de5\u4f5c\uff0c\u5e0c\u671b C++ \u4ee3\u7801\u8fd0\u884c\u65f6\u5e94\u5177\u6709\u4e0e C \u4ee3\u7801\u76f8\u4f3c\uff08\u6216\u66f4\u597d\uff09\u7684\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"1983 \u5e74"),"\uff0c\u8bed\u8a00\u7684\u540d\u79f0\u4ece \u201c\u5e26\u6709\u7c7b\u7684 C\u201d \u66f4\u6539\u4e3a C++\u3002C \u8bed\u8a00\u4e2d\u7684 ++ \u8fd0\u7b97\u7b26\u662f\u7528\u4e8e\u9012\u589e\u53d8\u91cf\u7684\u8fd0\u7b97\u7b26\uff0c\u5b83\u4f7f\u60a8\u53ef\u4ee5\u6df1\u5165\u4e86\u89e3 Stroustrup \u5982\u4f55\u770b\u5f85\u8be5\u8bed\u8a00\u3002\u5728\u6b64\u671f\u95f4\u6dfb\u52a0\u4e86\u8bb8\u591a\u65b0\u529f\u80fd\uff0c\u5176\u4e2d\u6700\u5f15\u4eba\u6ce8\u76ee\u7684\u662f\u865a\u51fd\u6570\uff0c\u51fd\u6570\u91cd\u8f7d\uff0c\u5e26\u6709\uff06\u7b26\u53f7\u7684\u5f15\u7528\uff0cconst \u5173\u952e\u5b57\u548c\u4f7f\u7528\u4e24\u4e2a\u6b63\u659c\u6760\u7684\u5355\u884c\u6ce8\u91ca\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"1985 \u5e74"),"\uff0cStroustrup \u51fa\u7248\u4e86\u540d\u4e3a",(0,n.kt)("em",{parentName:"li"},"\u201cC++ \u7f16\u7a0b\u8bed\u8a00\u201d \u7684\u4e66\u7c4d"),"\u3002\u540c\u5e74\uff0cC++ \u88ab\u5b9e\u73b0\u4e3a\u5546\u4e1a\u4ea7\u54c1\u3002\u8be5\u8bed\u8a00\u5c1a\u672a\u6b63\u5f0f\u6807\u51c6\u5316\uff0c\u56e0\u6b64\u4f7f\u8be5\u4e66\u6210\u4e3a\u975e\u5e38\u91cd\u8981\u7684\u53c2\u8003\u3002\u8be5\u8bed\u8a00\u5728 1989 \u5e74\u518d\u6b21\u8fdb\u884c\u4e86\u66f4\u65b0\uff0c\u4ee5\u5305\u62ec\u53d7\u4fdd\u62a4\u7684\u6210\u5458\u548c\u9759\u6001\u6210\u5458\uff0c\u4ee5\u53ca\u4ece\u591a\u4e2a\u7c7b\u7684\u7ee7\u627f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"1990 \u5e74"),"\uff0c\u53d1\u884c\u4e86",(0,n.kt)("em",{parentName:"li"},"\u300a\u5e26\u6ce8\u91ca\u7684 C++ \u53c2\u8003\u624b\u518c"),"\u300b\u3002\u540c\u5e74\uff0cBorland \u7684 Turbo C++ \u7f16\u8bd1\u5668\u5c06\u4f5c\u4e3a\u5546\u4e1a\u4ea7\u54c1\u53d1\u5e03\u3002Turbo C++ \u6dfb\u52a0\u4e86\u8bb8\u591a\u5176\u4ed6\u5e93\uff0c\u8fd9\u4e9b\u5e93\u4f1a\u5bf9 C++ \u7684\u5f00\u53d1\u4ea7\u751f\u76f8\u5f53\u5927\u7684\u5f71\u54cd\u3002\u5c3d\u7ba1 Turbo C++ \u7684\u6700\u540e\u4e00\u4e2a\u7a33\u5b9a\u7248\u672c\u662f 2006 \u5e74\uff0c\u4f46\u8be5\u7f16\u8bd1\u5668\u4ecd\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"1998 \u5e74"),"\uff0cC++ \u6807\u51c6\u59d4\u5458\u4f1a\u53d1\u5e03\u4e86\u7b2c\u4e00\u4e2a C++ ISO / IEC 14882\uff1a1998 \u56fd\u9645\u6807\u51c6\uff0c\u5176\u975e\u6b63\u5f0f\u540d\u79f0\u4e3a C++ 98\u3002\u636e\u8bf4",(0,n.kt)("em",{parentName:"li"},"\u300a\u5e26\u6ce8\u91ca\u7684 C++ \u53c2\u8003\u624b\u518c"),"\u300b\u5bf9\u6807\u51c6\u7684\u5236\u5b9a\u4ea7\u751f\u4e86\u5f88\u5927\u7684\u5f71\u54cd\u3002\u8fd8\u5305\u62ec\u6807\u51c6\u6a21\u677f\u5e93\uff0c\u8be5\u6a21\u677f\u5e93\u4e8e 1979 \u5e74\u5f00\u59cb\u6982\u5ff5\u5f00\u53d1\u30022003 \u5e74\uff0c\u8be5\u59d4\u5458\u4f1a\u5bf9 1998 \u5e74\u6807\u51c6\u6240\u62a5\u544a\u7684\u591a\u4e2a\u95ee\u9898\u505a\u51fa\u4e86\u56de\u5e94\uff0c\u5e76\u5bf9\u5176\u8fdb\u884c\u4e86\u76f8\u5e94\u7684\u4fee\u8ba2\u3002\u66f4\u6539\u7684\u8bed\u8a00\u79f0\u4e3a C++ 03\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"2005 \u5e74"),"\uff0cC++ \u6807\u51c6\u59d4\u5458\u4f1a\u53d1\u5e03\u4e86\u4e00\u4efd\u6280\u672f\u62a5\u544a\uff08\u79f0\u4e3a TR1\uff09\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u4ed6\u4eec\u8ba1\u5212\u6dfb\u52a0\u5230\u6700\u65b0 C++ \u6807\u51c6\u4e2d\u7684\u5404\u79cd\u529f\u80fd\u3002\u65b0\u6807\u51c6\u88ab\u975e\u6b63\u5f0f\u5730\u79f0\u4e3a C++ 0x\uff0c\u56e0\u4e3a\u5b83\u6709\u671b\u5728\u7b2c\u4e00\u4e2a\u5341\u5e74\u7ed3\u675f\u4e4b\u524d\u7684\u67d0\u4e2a\u65f6\u95f4\u53d1\u5e03\u3002\u5177\u6709\u8bbd\u523a\u610f\u5473\u7684\u662f\uff0c\u65b0\u6807\u51c6\u8981\u5230 2011 \u5e74\u5e74\u4e2d\u624d\u4f1a\u53d1\u5e03\u3002\u76f4\u5230\u90a3\u65f6\u4e3a\u6b62\uff0c\u5df2\u7ecf\u53d1\u5e03\u4e86\u51e0\u4efd\u6280\u672f\u62a5\u544a\uff0c\u5e76\u4e14\u4e00\u4e9b\u7f16\u8bd1\u5668\u5f00\u59cb\u4e3a\u65b0\u529f\u80fd\u6dfb\u52a0\u5b9e\u9a8c\u6027\u652f\u6301\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"2011 \u5e74\u4e2d"),"\uff0c\u65b0\u7684 C++ \u6807\u51c6\uff08\u79f0\u4e3a C++ 11\uff09\u5b8c\u6210\u3002Boost \u5e93\u9879\u76ee\u5bf9\u65b0\u6807\u51c6\u4ea7\u751f\u4e86\u91cd\u5927\u5f71\u54cd\uff0c\u5176\u4e2d\u4e00\u4e9b\u65b0\u6a21\u5757\u76f4\u63a5\u6765\u81ea\u76f8\u5e94\u7684 Boost \u5e93\u3002\u4e00\u4e9b\u65b0\u529f\u80fd\u5305\u62ec\u6b63\u5219\u8868\u8fbe\u5f0f\u652f\u6301\uff0c\u5168\u9762\u7684\u968f\u673a\u5316\u5e93\uff0c\u65b0\u7684 C++ \u65f6\u95f4\u5e93\uff0c\u539f\u5b50\u652f\u6301\uff0c\u6807\u51c6\u7ebf\u7a0b\u5e93 \uff0c\u4e00\u79cd\u65b0\u7684 for \u5faa\u73af\u8bed\u6cd5\uff0c\u63d0\u4f9b\u7684\u529f\u80fd\u7c7b\u4f3c\u4e8e\u67d0\u4e9b\u5176\u4ed6\u8bed\u8a00\u4e2d\u7684 foreach \u5faa\u73af\uff0cauto \u5173\u952e\u5b57\uff0c\u65b0\u7684\u5bb9\u5668\u7c7b\uff0c\u5bf9\u8054\u5408\u548c\u6570\u7ec4\u521d\u59cb\u5316\u5217\u8868\u4ee5\u53ca\u53ef\u53d8\u53c2\u6570\u6a21\u677f\u7684\u66f4\u597d\u652f\u6301\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"2014 \u5e74"),"\uff0cC++ 14\uff08\u4e5f\u79f0\u4e3a C++ 1y\uff09\u4f5c\u4e3a C++11 \u7684\u4e00\u4e2a\u5c0f\u6269\u5c55\u53d1\u5e03\uff0c\u4e3b\u8981\u529f\u80fd\u662f\u9519\u8bef\u4fee\u590d\u548c\u5c0f\u7684\u6539\u8fdb\uff0c\u56fd\u9645\u6807\u51c6\u6295\u7968\u7a0b\u5e8f\u8349\u6848\u4e8e 2014 \u5e74 8 \u6708\u4e2d\u5b8c\u6210\uff0c\u52a0\u5f3a lambda \u51fd\u6570\uff0cconstexpr \u548c\u7c7b\u578b\u63a8\u5bfc\u7279\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"2017 \u5e74"),"\uff0c\u53d1\u5e03 C17 \u6807\u51c6\uff0cC17 \u63d0\u4f9b\u4e86\u5f88\u591a\u4e1c\u897f\u3002\u589e\u5f3a\u4e86\u6838\u5fc3\u8bed\u8a00\u548c\u5e93\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"2020 \u5e74"),"\uff0c\u53d1\u5e03 C++20 \u6807\u51c6\uff0c\u63a8\u51fa\u4e86\u5f88\u591a\u91cd\u91cf\u7ea7\u529f\u80fd\uff0c\u5176\u4e2d\u6bd4\u8f83\u91cd\u8981\u7684\u6709\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Concepts\uff1a\u6982\u5ff5\u6539\u53d8\u4e86\u6211\u4eec\u601d\u8003\u548c\u7f16\u7a0b\u6a21\u677f\u7684\u65b9\u5f0f\u3002\u5b83\u4eec\u662f\u6a21\u677f\u53c2\u6570\u7684\u8bed\u4e49\u7c7b\u522b\u3002\u5b83\u4eec\u4f7f\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u7c7b\u578b\u7cfb\u7edf\u4e2d\u8868\u8fbe\u60a8\u7684\u610f\u56fe\u3002\u5982\u679c\u51fa\u4e86\u4ec0\u4e48\u95ee\u9898\uff0c\u60a8\u4f1a\u6536\u5230\u6e05\u6670\u7684\u9519\u8bef\u6d88\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},"Ranges library\uff1a\u65b0\u7684 ranges \u5e93\u4f7f\u5b83\u53ef\u4ee5\u76f4\u63a5\u5728\u5bb9\u5668\u4e0a\u6267\u884c\u7b97\u6cd5\uff0c\u7528\u7ba1\u9053\u7b26\u53f7\u7ec4\u6210\u7b97\u6cd5\uff0c\u5e76\u5c06\u5176\u5e94\u7528\u4e8e\u65e0\u9650\u6570\u636e\u6d41\u3002"),(0,n.kt)("li",{parentName:"ul"},"Coroutines\uff1a\u7531\u4e8e\u534f\u7a0b\uff0cC++ \u4e2d\u7684\u5f02\u6b65\u7f16\u7a0b\u6210\u4e3a\u4e3b\u6d41\u3002\u534f\u7a0b\u662f\u534f\u4f5c\u4efb\u52a1\uff0c\u4e8b\u4ef6\u5faa\u73af\uff0c\u65e0\u9650\u6570\u636e\u6d41\u6216\u7ba1\u9053\u7684\u57fa\u7840\u3002"),(0,n.kt)("li",{parentName:"ul"},"Modules\uff1a\u6a21\u5757\u514b\u670d\u4e86\u5934\u6587\u4ef6\u7684\u9650\u5236\u3002\u5934\u6587\u4ef6\u548c\u6e90\u6587\u4ef6\u7684\u5206\u79bb\u53d8\u5f97\u548c\u9884\u5904\u7406\u5668\u4e00\u6837\u8fc7\u65f6\u4e86\u3002\u6700\u540e\uff0c\u6211\u4eec\u6709\u66f4\u5feb\u7684\u6784\u5efa\u65f6\u95f4\u548c\u66f4\u8f7b\u677e\u7684\u6784\u5efa\u8f6f\u4ef6\u5305\u7684\u65b9\u6cd5\u3002"),(0,n.kt)("li",{parentName:"ul"},"Concurrency\uff1aAtomic Smart Pointers,Joining & Cancellable Threads,The C20 Synchronization Library\uff0c\u589e\u5f3a\u4e86 C++ \u5e76\u53d1\u7f16\u7a0b\u80fd\u529b\uff1b")))),(0,n.kt)("h3",{id:"\u9762\u5411\u5bf9\u8c61"},"\u9762\u5411\u5bf9\u8c61"),(0,n.kt)("p",null,"C++ \u5b8c\u5168\u652f\u6301\u9762\u5411\u5bf9\u8c61\u7684\u7a0b\u5e8f\u8bbe\u8ba1\uff0c\u5305\u62ec\u9762\u5411\u5bf9\u8c61\u5f00\u53d1\u7684\u56db\u5927\u7279\u6027\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c01\u88c5"),(0,n.kt)("li",{parentName:"ul"},"\u62bd\u8c61"),(0,n.kt)("li",{parentName:"ul"},"\u7ee7\u627f"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u6001")),(0,n.kt)("h3",{id:"\u6807\u51c6\u5e93"},"\u6807\u51c6\u5e93"),(0,n.kt)("p",null,"\u6807\u51c6\u7684 C++ \u7531\u4e09\u4e2a\u91cd\u8981\u90e8\u5206\u7ec4\u6210\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u8bed\u8a00\uff0c\u63d0\u4f9b\u4e86\u6240\u6709\u6784\u4ef6\u5757\uff0c\u5305\u62ec\u53d8\u91cf\u3001\u6570\u636e\u7c7b\u578b\u548c\u5e38\u91cf\uff0c\u7b49\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"C++ \u6807\u51c6\u5e93\uff0c\u63d0\u4f9b\u4e86\u5927\u91cf\u7684\u51fd\u6570\uff0c\u7528\u4e8e\u64cd\u4f5c\u6587\u4ef6\u3001\u5b57\u7b26\u4e32\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6807\u51c6\u6a21\u677f\u5e93\uff08STL\uff09\uff0c\u63d0\u4f9b\u4e86\u5927\u91cf\u7684\u65b9\u6cd5\uff0c\u7528\u4e8e\u64cd\u4f5c\u6570\u636e\u7ed3\u6784\u7b49\u3002")),(0,n.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'// \u8f93\u51fa\u5355\u8bcd Hello World\n#include <iostream>\nusing namespace std; \n\n// main() \u662f\u7a0b\u5e8f\u5f00\u59cb\u6267\u884c\u7684\u5730\u65b9 \nint main(){   \n // \u8f93\u51fa Hello World\n cout << "Hello World";    \n return 0;\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"C++ \u8bed\u8a00\u5b9a\u4e49\u4e86\u4e00\u4e9b\u5934\u6587\u4ef6\uff0c\u8fd9\u4e9b\u5934\u6587\u4ef6\u5305\u542b\u4e86\u7a0b\u5e8f\u4e2d\u5fc5\u9700\u7684\u6216\u6709\u7528\u7684\u4fe1\u606f\u3002\u4e0a\u9762\u8fd9\u6bb5\u7a0b\u5e8f\u4e2d\uff0c\u5305\u542b\u4e86\u5934\u6587\u4ef6")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u884c ",(0,n.kt)("strong",{parentName:"p"},"using namespace std;")," \u544a\u8bc9\u7f16\u8bd1\u5668\u4f7f\u7528 std \u547d\u540d\u7a7a\u95f4\u3002\u547d\u540d\u7a7a\u95f4\u662f C++ \u4e2d\u4e00\u4e2a\u76f8\u5bf9\u65b0\u7684\u6982\u5ff5\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"// main() \u662f\u7a0b\u5e8f\u5f00\u59cb\u6267\u884c\u7684\u5730\u65b9")," \u662f\u4e00\u4e2a\u5355\u884c\u6ce8\u91ca\u3002\u5355\u884c\u6ce8\u91ca\u4ee5 // \u5f00\u5934\uff0c\u5728\u884c\u672b\u7ed3\u675f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"int main()")," \u662f\u4e3b\u51fd\u6570\uff0c\u7a0b\u5e8f\u4ece\u8fd9\u91cc\u5f00\u59cb\u6267\u884c\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},'cout << "Hello World";'),' \u4f1a\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u6d88\u606f "Hello World"\u3002')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"return 0;")," \u7ec8\u6b62 main( )\u51fd\u6570\uff0c\u5e76\u5411\u8c03\u7528\u8fdb\u7a0b\u8fd4\u56de\u503c 0\u3002"))),(0,n.kt)("h3",{id:"g-\u7f16\u8bd1\u5668"},"g++ \u7f16\u8bd1\u5668"),(0,n.kt)("p",null,"\u7a0b\u5e8f g++ \u662f\u5c06 gcc \u9ed8\u8ba4\u8bed\u8a00\u8bbe\u4e3a C++ \u7684\u4e00\u4e2a\u7279\u6b8a\u7684\u7248\u672c\uff0c\u94fe\u63a5\u65f6\u5b83\u81ea\u52a8\u4f7f\u7528 C++ \u6807\u51c6\u5e93\u800c\u4e0d\u7528 C \u6807\u51c6\u5e93\u3002\u901a\u8fc7\u9075\u5faa\u6e90\u7801\u7684\u547d\u540d\u89c4\u8303\u5e76\u6307\u5b9a\u5bf9\u5e94\u5e93\u7684\u540d\u5b57\uff0c\u7528 gcc \u6765\u7f16\u8bd1\u94fe\u63a5 C++ \u7a0b\u5e8f\u662f\u53ef\u884c\u7684\uff0c\u5982\u4e0b\u4f8b\u6240\u793a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"gcc main.cpp -lstdc++ -o main\n")),(0,n.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4fdd\u5b58\u5728\u6587\u4ef6 helloworld.cpp \u4e2d\u4e00\u4e2a\u7b80\u5355\u7684 C++ \u7a0b\u5e8f\u7684\u4ee3\u7801\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>using namespace std;int main(){\n    cout << "Hello, world!" << endl;\n    return 0;}\n')),(0,n.kt)("p",null,"\u6700\u7b80\u5355\u7684\u7f16\u8bd1\u65b9\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"g++ helloworld.cpp\n")),(0,n.kt)("p",null,"\u7531\u4e8e\u547d\u4ee4\u884c\u4e2d\u672a\u6307\u5b9a\u53ef\u6267\u884c\u7a0b\u5e8f\u7684\u6587\u4ef6\u540d\uff0c\u7f16\u8bd1\u5668\u91c7\u7528\u9ed8\u8ba4\u7684 a.out\u3002\u7a0b\u5e8f\u53ef\u4ee5\u8fd9\u6837\u6765\u8fd0\u884c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"./a.outHello, world!\n")),(0,n.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u4f7f\u7528 ",(0,n.kt)("strong",{parentName:"p"},"-o")," \u9009\u9879\u6307\u5b9a\u53ef\u6267\u884c\u7a0b\u5e8f\u7684\u6587\u4ef6\u540d\uff0c\u4ee5\u4e0b\u5b9e\u4f8b\u751f\u6210\u4e00\u4e2a helloworld \u7684\u53ef\u6267\u884c\u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"g++ helloworld.cpp -o helloworld\n")),(0,n.kt)("p",null,"\u6267\u884c helloworld:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"./helloworldHello, world!\n")),(0,n.kt)("p",null,"\u5982\u679c\u662f\u591a\u4e2a C++ \u4ee3\u7801\u6587\u4ef6\uff0c\u5982 runoob1.cpp\u3001runoob2.cpp\uff0c\u7f16\u8bd1\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"g++ runoob1.cpp cpp\u3001runoob2.cpp -o runoob\n")),(0,n.kt)("p",null,"\u751f\u6210\u4e00\u4e2a runoob \u53ef\u6267\u884c\u6587\u4ef6\u3002"),(0,n.kt)("p",null,"g++ \u6709\u4e9b\u7cfb\u7edf\u9ed8\u8ba4\u662f\u4f7f\u7528 C++98\uff0c\u6211\u4eec\u53ef\u4ee5\u6307\u5b9a\u4f7f\u7528 C++11 \u6765\u7f16\u8bd1 main.cpp \u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"g++ -g -Wall -std=c++11 main.cpp\n")),(0,n.kt)("p",null,"\u5e38\u7528\u547d\u4ee4\u9009\u9879"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,n.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-ansi"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53ea\u652f\u6301 ANSI \u6807\u51c6\u7684 C \u8bed\u6cd5\u3002\u8fd9\u4e00\u9009\u9879\u5c06\u7981\u6b62 GNU C \u7684\u67d0\u4e9b\u7279\u8272\uff0c \u4f8b\u5982 asm \u6216 typeof \u5173\u952e\u8bcd\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-c"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53ea\u7f16\u8bd1\u5e76\u751f\u6210\u76ee\u6807\u6587\u4ef6\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-DMACRO"),(0,n.kt)("td",{parentName:"tr",align:null},'\u4ee5\u5b57\u7b26\u4e32"1"\u5b9a\u4e49 MACRO \u5b8f\u3002')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-DMACRO=DEFN"),(0,n.kt)("td",{parentName:"tr",align:null},'\u4ee5\u5b57\u7b26\u4e32"DEFN"\u5b9a\u4e49 MACRO \u5b8f\u3002')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-E"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53ea\u8fd0\u884c C \u9884\u7f16\u8bd1\u5668\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-g"),(0,n.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u8c03\u8bd5\u4fe1\u606f\u3002GNU \u8c03\u8bd5\u5668\u53ef\u5229\u7528\u8be5\u4fe1\u606f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-IDIRECTORY"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u989d\u5916\u7684\u5934\u6587\u4ef6\u641c\u7d22\u8def\u5f84DIRECTORY\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-LDIRECTORY"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u989d\u5916\u7684\u51fd\u6570\u5e93\u641c\u7d22\u8def\u5f84DIRECTORY\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-lLIBRARY"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u65f6\u641c\u7d22\u6307\u5b9a\u7684\u51fd\u6570\u5e93LIBRARY\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-m486"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9488\u5bf9 486 \u8fdb\u884c\u4ee3\u7801\u4f18\u5316\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-o"),(0,n.kt)("td",{parentName:"tr",align:null},"FILE \u751f\u6210\u6307\u5b9a\u7684\u8f93\u51fa\u6587\u4ef6\u3002\u7528\u5728\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6\u65f6\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-O0"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u8fdb\u884c\u4f18\u5316\u5904\u7406\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-O"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6216 -O1 \u4f18\u5316\u751f\u6210\u4ee3\u7801\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-O2"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8fdb\u4e00\u6b65\u4f18\u5316\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-O3"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6bd4 -O2 \u66f4\u8fdb\u4e00\u6b65\u4f18\u5316\uff0c\u5305\u62ec inline \u51fd\u6570\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-shared"),(0,n.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u5171\u4eab\u76ee\u6807\u6587\u4ef6\u3002\u901a\u5e38\u7528\u5728\u5efa\u7acb\u5171\u4eab\u5e93\u65f6\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-static"),(0,n.kt)("td",{parentName:"tr",align:null},"\u7981\u6b62\u4f7f\u7528\u5171\u4eab\u8fde\u63a5\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-UMACRO"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u5bf9 MACRO \u5b8f\u7684\u5b9a\u4e49\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-w"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u751f\u6210\u4efb\u4f55\u8b66\u544a\u4fe1\u606f\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"-Wall"),(0,n.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u6240\u6709\u8b66\u544a\u4fe1\u606f\u3002")))))}d.isMDXComponent=!0}}]);