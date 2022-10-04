"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6294],{3905:(a,e,t)=>{t.d(e,{Zo:()=>J,kt:()=>c});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function v(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},l=Object.keys(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var o=n.createContext({}),u=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):v(v({},e),a)),t},J=function(a){var e=u(a.components);return n.createElement(o.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,l=a.originalType,o=a.parentName,J=i(a,["components","mdxType","originalType","parentName"]),d=u(t),c=r,s=d["".concat(o,".").concat(c)]||d[c]||p[c]||l;return t?n.createElement(s,v(v({ref:e},J),{},{components:t})):n.createElement(s,v({ref:e},J))}));function c(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var l=t.length,v=new Array(l);v[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=a,i.mdxType="string"==typeof a?a:r,v[1]=i;for(var u=2;u<l;u++)v[u]=t[u];return n.createElement.apply(null,v)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9711:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>v,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=t(7462),r=(t(7294),t(3905));const l={id:"\u7b80\u4ecb",title:"\u7b80\u4ecb",sidebar_position:1,data:"2022\u5e744\u670825\u65e5"},v=void 0,i={unversionedId:"Java/\u7b80\u4ecb",id:"Java/\u7b80\u4ecb",title:"\u7b80\u4ecb",description:"Java \u662f\u4ec0\u4e48",source:"@site/dev/Java/\u7b80\u4ecb.md",sourceDirName:"Java",slug:"/Java/\u7b80\u4ecb",permalink:"/dev/Java/\u7b80\u4ecb",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/dev/Java/\u7b80\u4ecb.md",tags:[],version:"current",lastUpdatedBy:"louiscklaw",lastUpdatedAt:1657484196,formattedLastUpdatedAt:"Jul 10, 2022",sidebarPosition:1,frontMatter:{id:"\u7b80\u4ecb",title:"\u7b80\u4ecb",sidebar_position:1,data:"2022\u5e744\u670825\u65e5"},sidebar:"tutorialSidebar",previous:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/dev/Git/\u5e38\u7528\u547d\u4ee4"},next:{title:"\u57fa\u672c\u8bed\u6cd5",permalink:"/dev/Java/\u57fa\u672c\u8bed\u6cd5"}},o={},u=[{value:"Java \u662f\u4ec0\u4e48",id:"java-\u662f\u4ec0\u4e48",level:2},{value:"Java SE",id:"java-se",level:3},{value:"Java EE",id:"java-ee",level:3},{value:"Java ME",id:"java-me",level:3},{value:"Java \u7684\u7279\u70b9",id:"java-\u7684\u7279\u70b9",level:2},{value:"\u7b80\u5355",id:"\u7b80\u5355",level:3},{value:"\u9762\u5bf9\u5bf9\u8c61",id:"\u9762\u5bf9\u5bf9\u8c61",level:3},{value:"\u5e73\u53f0\u72ec\u7acb\u6027",id:"\u5e73\u53f0\u72ec\u7acb\u6027",level:3},{value:"\u53ef\u79fb\u690d\u6027",id:"\u53ef\u79fb\u690d\u6027",level:3},{value:"\u591a\u7ebf\u7a0b",id:"\u591a\u7ebf\u7a0b",level:3},{value:"\u9ad8\u6027\u80fd",id:"\u9ad8\u6027\u80fd",level:3},{value:"\u5065\u58ee\u6027",id:"\u5065\u58ee\u6027",level:3},{value:"\u5206\u5e03\u5f0f",id:"\u5206\u5e03\u5f0f",level:3},{value:"\u5b89\u5168\u6027",id:"\u5b89\u5168\u6027",level:3},{value:"Java \u7684\u5f00\u53d1\u73af\u5883",id:"java-\u7684\u5f00\u53d1\u73af\u5883",level:2},{value:"JDK",id:"jdk",level:3},{value:"JRE",id:"jre",level:3}],J={toc:u};function p(a){let{components:e,...t}=a;return(0,r.kt)("wrapper",(0,n.Z)({},J,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"java-\u662f\u4ec0\u4e48"},"Java \u662f\u4ec0\u4e48"),(0,r.kt)("p",null,"Java \u662f\u4e16\u754c\u4e0a\u4f7f\u7528\u6700\u5e7f\u6cdb\u7684\u7f16\u7a0b\u8bed\u8a00\u4e4b\u4e00\u3002"),(0,r.kt)("p",null,"Java \u6700\u521d\u7531 Sun Microsystems \u5728 1990 \u5e74\u4ee3\u5f00\u53d1\uff0c\u7528\u4e8e\u5f00\u53d1\u4ece Web \u5e94\u7528\u7a0b\u5e8f\u5230\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\uff0c\u518d\u5230\u6279\u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u7684\u6240\u6709\u5185\u5bb9\u3002Java \u6700\u521d\u662f\u4e00\u79cd\u7eaf\u7cb9\u7684\u9762\u5411\u5bf9\u8c61\u7684\u8bed\u8a00\uff0c\u4f46\u73b0\u5728\u5df2\u7ecf\u53d1\u5c55\u6210\u4e3a\u4e00\u79cd\u591a\u8303\u4f8b\u8bed\u8a00\uff0c\u53ef\u4ee5\u9ad8\u5ea6\u9002\u5e94\u4efb\u4f55\u60c5\u51b5\u3002\u62e5\u6709\u5e9e\u5927\u7684\u5f00\u53d1\u4eba\u5458\u793e\u533a\u548c\u652f\u6301\u5e93\uff0cJava \u662f\u5f00\u53d1\u51e0\u4e4e\u6240\u6709\u7c7b\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u7406\u60f3\u9009\u62e9\u3002"),(0,r.kt)("p",null,"Java \u662f\u6700\u521d\u7531\u5f00\u53d1 James Gosling (\u8a79\u59c6\u65af\xb7\u9ad8\u65af\u6797\uff0c\u4ed6\u88ab\u79f0\u4e3a Java \u7f16\u7a0b\u8bed\u8a00\u4e4b\u7236)\u5728 Sun Microsystems \u516c\u53f8\uff08\u73b0\u5df2\u88ab Oracle \u6536\u8d2d\uff09\uff0c\u5e76\u4e8e1995\u5e74\u53d1\u5e03\u4e86\u4f5c\u4e3a Sun \u516c\u53f8\u7684\u4e00\u4e2a\u6838\u5fc3\u7ec4\u6210\u90e8\u5206 Java \u5e73\u53f0\u3002"),(0,r.kt)("p",null,"James Gosling (\u8a79\u59c6\u65af\xb7\u9ad8\u65af\u6797)\uff0cMike Sheridan (\u8fc8\u514b\xb7\u8c22\u91cc\u4e39)\u548c Patrick Naughton (\u5e15\u7279\u91cc\u514b\xb7\u8bfa\u987f)\u4e8e 1991 \u5e74 6\u6708\u542f\u52a8\u4e86 Java \u8bed\u8a00\u9879\u76ee\u3002Java \u6700\u521d\u662f\u4e3a\u4ea4\u4e92\u5f0f\u7535\u89c6\u8bbe\u8ba1\u7684\uff0c\u4f46\u5728\u5f53\u65f6\u7684\u6570\u5b57\u6709\u7ebf\u7535\u89c6\u884c\u4e1a\u6765\u8bf4\u592a\u5148\u8fdb\u4e86\u3002\u8be5\u8bed\u8a00\u6700\u521d\u662f\u5728 James Gosling (\u8a79\u59c6\u65af\xb7\u9ad8\u65af\u6797)\u529e\u516c\u5ba4\u5916\u7684\u4e00\u68f5\u6a61\u6811\u4e4b\u540e\u88ab\u79f0\u4e3a Oak \u7684\u3002"),(0,r.kt)("p",null,"\u540e\u6765\uff0c\u8be5\u9879\u76ee\u4ee5 ",(0,r.kt)("em",{parentName:"p"},"Green")," \u547d\u540d\uff0c\u5e76\u6700\u7ec8\u4ece Java coffee (\u5370\u5ea6\u5c3c\u897f\u4e9a\u7684\u4e00\u79cd\u5496\u5561)\u91cd\u547d\u540d\u4e3a ",(0,r.kt)("em",{parentName:"p"},"Java"),"\u3002"),(0,r.kt)("h3",{id:"java-se"},"Java SE"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Java SE\uff08Java Platform Standard Edition\uff0cJava \u5e73\u53f0\u6807\u51c6\u7248\uff09"),"\u4ee5\u524d\u79f0\u4e3a J2SE\uff0c\u5b83\u5141\u8bb8\u5f00\u53d1\u548c\u90e8\u7f72\u5728\u684c\u9762\u3001\u670d\u52a1\u5668\u3001\u5d4c\u5165\u5f0f\u73af\u5883\u548c\u5b9e\u65f6\u73af\u5883\u4e2d\u4f7f\u7528\u7684 Java \u5e94\u7528\u7a0b\u5e8f\u3002Java SE \u5305\u542b\u4e86\u652f\u6301 Java Web \u670d\u52a1\u5f00\u53d1\u7684\u7c7b\uff0c\u5e76\u4e3a Java EE \u63d0\u4f9b\u57fa\u7840\uff0c\u5982 Java \u8bed\u8a00\u57fa\u7840\u3001JDBC \u64cd\u4f5c\u3001I/O \u64cd\u4f5c\u3001\u7f51\u7edc\u901a\u4fe1\u4ee5\u53ca\u591a\u7ebf\u7a0b\u7b49\u6280\u672f\u3002"),(0,r.kt)("h3",{id:"java-ee"},"Java EE"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Java EE\uff08Java Platform Enterprise Edition\uff0cJava \u5e73\u53f0\u4f01\u4e1a\u7248\uff09"),"\u4ee5\u524d\u79f0\u4e3a J2EE\u3002\u4f01\u4e1a\u7248\u672c\u5e2e\u52a9\u5f00\u53d1\u548c\u90e8\u7f72\u53ef\u79fb\u690d\u3001\u5065\u58ee\u3001\u53ef\u4f38\u7f29\u4e14\u5b89\u5168\u7684\u670d\u52a1\u5668\u7aef Java \u5e94\u7528\u7a0b\u5e8f\u3002Java EE \u662f\u5728 Java SE \u57fa\u7840\u4e0a\u6784\u5efa\u7684\uff0c\u5b83\u63d0\u4f9b Web \u670d\u52a1\u3001\u7ec4\u4ef6\u6a21\u578b\u3001\u7ba1\u7406\u548c\u901a\u4fe1 API\uff0c\u53ef\u4ee5\u7528\u6765\u5b9e\u73b0\u4f01\u4e1a\u7ea7\u7684\u9762\u5411\u670d\u52a1\u4f53\u7cfb\u7ed3\u6784\uff08Service Oriented Architecture\uff0cSOA\uff09\u548c Web 2.0 \u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("h3",{id:"java-me"},"Java ME"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Java ME\uff08Java Platform Micro Edition\uff0cJava \u5e73\u53f0\u5fae\u578b\u7248\uff09"),"\u4ee5\u524d\u79f0\u4e3a J2ME\uff0c\u4e5f\u53eb K-JAVA\u3002 Java ME \u4e3a\u5728\u79fb\u52a8\u8bbe\u5907\u548c\u5d4c\u5165\u5f0f\u8bbe\u5907\uff08\u6bd4\u5982\u624b\u673a\u3001PDA\u3001\u7535\u89c6\u673a\u9876\u76d2\u548c\u6253\u5370\u673a\uff09\u4e0a\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u4e00\u4e2a\u5065\u58ee\u4e14\u7075\u6d3b\u7684\u73af\u5883\u3002"),(0,r.kt)("p",null,"Java ME \u5305\u62ec\u7075\u6d3b\u7684\u7528\u6237\u754c\u9762\u3001\u5065\u58ee\u7684\u5b89\u5168\u6a21\u578b\u3001\u4e30\u5bcc\u7684\u5185\u7f6e\u7f51\u7edc\u534f\u8bae\u4ee5\u53ca\u5bf9\u53ef\u4ee5\u52a8\u6001\u4e0b\u8f7d\u7684\u8054\u7f51\u548c\u79bb\u7ebf\u5e94\u7528\u7a0b\u5e8f\u3002\u57fa\u4e8e Java ME \u89c4\u8303\u7684\u5e94\u7528\u7a0b\u5e8f \u53ea\u9700\u7f16\u5199\u4e00\u6b21\u5c31\u53ef\u4ee5\u7528\u4e8e\u8bb8\u591a\u8bbe\u5907\uff0c\u800c\u4e14\u53ef\u4ee5\u5229\u7528\u6bcf\u4e2a\u8bbe\u5907\u7684\u672c\u673a\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"java-\u7684\u7279\u70b9"},"Java \u7684\u7279\u70b9"),(0,r.kt)("h3",{id:"\u7b80\u5355"},"\u7b80\u5355"),(0,r.kt)("p",null,"Java \u8bed\u8a00\u7684\u98ce\u683c\u5f88\u50cf C \u8bed\u8a00\u548c C++ \u8bed\u8a00\uff0c\u662f\u4e00\u79cd\u7eaf\u7cb9\u7684\u9762\u5411\u5bf9\u8c61\u8bed\u8a00\uff0c\u5b83\u7ee7\u627f\u4e86 C++ \u8bed\u8a00\u9762\u5411\u5bf9\u8c61\u7684\u6280\u672f\u6838\u5fc3\uff0c\u4f46\u662f\u62cb\u5f03\u4e86 C++ \u7684\u4e00\u4e9b\u7f3a\u70b9\uff0c\u6bd4\u5982\u8bf4\u5bb9\u6613\u5f15\u8d77\u9519\u8bef\u7684\u6307\u9488\u4ee5\u53ca\u591a\u7ee7\u627f\u7b49\uff0c\u540c\u65f6\u4e5f\u589e\u52a0\u4e86\u5783\u573e\u56de\u6536\u673a\u5236\uff0c\u91ca\u653e\u6389\u4e0d\u88ab\u4f7f\u7528\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u89e3\u51b3\u4e86\u7ba1\u7406\u5185\u5b58\u7a7a\u95f4\u7684\u70e6\u607c\u3002"),(0,r.kt)("h3",{id:"\u9762\u5bf9\u5bf9\u8c61"},"\u9762\u5bf9\u5bf9\u8c61"),(0,r.kt)("p",null,"Java \u662f\u4e00\u79cd\u9762\u5411\u5bf9\u8c61\u7684\u8bed\u8a00\uff0c\u5b83\u5bf9\u5bf9\u8c61\u4e2d\u7684\u7c7b\u3001\u5bf9\u8c61\u3001\u7ee7\u627f\u3001\u5c01\u88c5\u3001\u591a\u6001\u3001\u63a5\u53e3\u3001\u5305\u7b49\u5747\u6709\u5f88\u597d\u7684\u652f\u6301\u3002\u4e3a\u4e86\u7b80\u5355\u8d77\u89c1\uff0cJava \u53ea\u652f\u6301\u7c7b\u4e4b\u95f4\u7684\u5355\u7ee7\u627f\uff0c\u4f46\u662f\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u6765\u5b9e\u73b0\u591a\u7ee7\u627f\u3002\u4f7f\u7528 Java \u8bed\u8a00\u5f00\u53d1\u7a0b\u5e8f\uff0c\u9700\u8981\u91c7\u7528\u9762\u5411\u5bf9\u8c61\u7684\u601d\u60f3\u8bbe\u8ba1\u7a0b\u5e8f\u548c\u7f16\u5199\u4ee3\u7801\u3002"),(0,r.kt)("h3",{id:"\u5e73\u53f0\u72ec\u7acb\u6027"},"\u5e73\u53f0\u72ec\u7acb\u6027"),(0,r.kt)("p",null,"\u5e73\u53f0\u72ec\u7acb\u6027\u7684\u5177\u4f53\u8868\u73b0\u5728\u4e8e\uff0cJava \u662f\u201c",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u6b21\u7f16\u5199\uff0c\u5230\u5904\u8fd0\u884c\uff08Write Once\uff0cRun any Where\uff09"),"\u201d\u7684\u8bed\u8a00\uff0c\u56e0\u6b64\u91c7\u7528 Java \u8bed\u8a00\u7f16\u5199\u7684\u7a0b\u5e8f\u5177\u6709\u5f88\u597d\u7684\u53ef\u79fb\u690d\u6027\uff0c\u800c\u4fdd\u8bc1\u8fd9\u4e00\u70b9\u7684\u6b63\u662f Java \u7684\u865a\u62df\u673a\u673a\u5236\u3002\u5728\u5f15\u5165\u865a\u62df\u673a\u4e4b\u540e\uff0cJava \u8bed\u8a00\u5728\u4e0d\u540c\u7684\u5e73\u53f0\u4e0a\u8fd0\u884c\u4e0d\u9700\u8981\u91cd\u65b0\u7f16\u8bd1\u3002"),(0,r.kt)("h3",{id:"\u53ef\u79fb\u690d\u6027"},"\u53ef\u79fb\u690d\u6027"),(0,r.kt)("p",null,"Java \u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u6570\u636e\u5927\u5c0f\u90fd\u505a\u4e86\u7edf\u4e00\u7684\u89c4\u5b9a\uff0c\u6ca1\u6709\u201c\u4e0e\u5177\u4f53\u5b9e\u73b0\u76f8\u5173\u201d\u7684\u6982\u5ff5\u3002\u6240\u4ee5 .jar \u6587\u4ef6\u80fd\u591f\u540c\u65f6\u5728 Windows\u3001Mac OS\u3001Linux \u7cfb\u7edf\u4e0b\u8fd0\u884c\uff0c\u4e0d\u9700\u8981\u518d\u6b21\u7f16\u8bd1\u3002"),(0,r.kt)("h3",{id:"\u591a\u7ebf\u7a0b"},"\u591a\u7ebf\u7a0b"),(0,r.kt)("p",null,"Java \u8bed\u8a00\u662f\u5bb9\u6613\u5b9e\u73b0\u591a\u7ebf\u7a0b\u7684\uff0c\u8fd9\u4e5f\u662f Java \u8bed\u8a00\u7684\u4e00\u5927\u7279\u6027\uff0c\u5b83\u5fc5\u987b\u7531 Thread \u7c7b\u548c\u5b83\u7684\u5b50\u7c7b\u6765\u521b\u5efa\u3002Java \u652f\u6301\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u6267\u884c\uff0c\u5e76\u63d0\u4f9b\u591a\u7ebf\u7a0b\u4e4b\u95f4\u7684\u540c\u6b65\u673a\u5236\u3002\u4efb\u4f55\u4e00\u4e2a\u7ebf\u7a0b\u90fd\u6709\u81ea\u5df1\u7684 run() \u65b9\u6cd5\uff0c\u8981\u6267\u884c\u7684\u65b9\u6cd5\u5c31\u5199\u5728 run() \u65b9\u6cd5\u4f53\u5185\u3002\u5b9e\u73b0\u591a\u7ebf\u7a0b\u7684\u65b9\u5f0f\u4e3b\u8981\u6709\u4e0b\u9762\u8fd9\u51e0\u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u7a7a\u95f4\u4e2d\u5b9e\u73b0\u591a\u7ebf\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"\u5185\u6838\u7a7a\u95f4\u4e2d\u5b9e\u73b0\u591a\u7ebf\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u548c\u5185\u6838\u7a7a\u95f4\u4e2d\u6df7\u5408\u5b9e\u73b0\u7ebf\u7a0b")),(0,r.kt)("h3",{id:"\u9ad8\u6027\u80fd"},"\u9ad8\u6027\u80fd"),(0,r.kt)("p",null,"\u7f16\u5199\u7684\u4ee3\u7801\uff0c\u7ecf\u8fc7 javac \u7f16\u8bd1\u5668\u7f16\u8bd1\u4e3a\u5b57\u8282\u7801\uff08bytecode\uff09\uff0c\u7ecf\u8fc7 JVM \u5185\u5d4c\u7684\u89e3\u91ca\u5668\u5c06\u5b57\u8282\u7801\u8f6c\u4e3a\u673a\u5668\u7801\uff0c\u8fd9\u662f\u89e3\u91ca\u6267\u884c\uff0c\u8fd9\u79cd\u6548\u7387\u76f8\u5bf9\u8f83\u4f4e\u3002\u4f46\u90e8\u5206 JVM \u7684\u5b9e\u73b0\u6bd4\u5982 Hotspot JVM \u90fd\u63d0\u4f9b\u4e86  ",(0,r.kt)("strong",{parentName:"p"},"JIT\uff08Just in Time\uff09\u52a8\u6001\u7f16\u8bd1\u5668"),"\uff0cJIT \u80fd\u591f\u5728\u8fd0\u884c\u65f6\u5c06\u70ed\u70b9\u4ee3\u7801\u7f16\u8bd1\u673a\u5668\u7801\u3002\u968f\u7740 JIT\uff08Just in Time\uff09\u7684\u53d1\u5c55\uff0cJava \u7684\u8fd0\u884c\u901f\u5ea6\u4e5f\u8d8a\u6765\u8d8a\u9ad8\u3002"),(0,r.kt)("h3",{id:"\u5065\u58ee\u6027"},"\u5065\u58ee\u6027"),(0,r.kt)("p",null,"Java \u7684\u5f3a\u7c7b\u578b\u673a\u5236\u3001\u5f02\u5e38\u5904\u7406\u3001\u5783\u573e\u56de\u6536\u673a\u5236\u7b49\u90fd\u662f Java \u5065\u58ee\u6027\u7684\u91cd\u8981\u4fdd\u8bc1\u3002\u5bf9\u6307\u9488\u7684\u4e22\u5f03\u662f Java \u7684\u4e00\u5927\u8fdb\u6b65\u3002\u53e6\u5916\uff0cJava \u7684\u5f02\u5e38\u673a\u5236\u4e5f\u662f\u5065\u58ee\u6027\u7684\u4e00\u5927\u4f53\u73b0\u3002"),(0,r.kt)("h3",{id:"\u5206\u5e03\u5f0f"},"\u5206\u5e03\u5f0f"),(0,r.kt)("p",null,"Java \u8bed\u8a00\u652f\u6301 Internet \u5e94\u7528\u7684\u5f00\u53d1\uff0c\u5728 Java \u7684\u57fa\u672c\u5e94\u7528\u7f16\u7a0b\u63a5\u53e3\u4e2d\u5c31\u6709\u4e00\u4e2a\u7f51\u7edc\u5e94\u7528\u7f16\u7a0b\u63a5\u53e3\uff0c\u5b83\u63d0\u4f9b\u4e86\u7f51\u7edc\u5e94\u7528\u7f16\u7a0b\u7684\u7c7b\u5e93\uff0c\u5305\u62ec URL\u3001URLConnection\u3001Socket \u7b49\u3002Java \u7684 RIM \u673a\u5236\u4e5f\u662f\u5f00\u53d1\u5206\u5e03\u5f0f\u5e94\u7528\u7684\u91cd\u8981\u624b\u6bb5\u3002"),(0,r.kt)("h3",{id:"\u5b89\u5168\u6027"},"\u5b89\u5168\u6027"),(0,r.kt)("p",null,"Java \u901a\u5e38\u88ab\u7528\u5728\u7f51\u7edc\u73af\u5883\u4e2d\uff0c\u4e3a\u6b64\uff0cJava \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b89\u5168\u673a\u5236\u4ee5\u9632\u6076\u610f\u4ee3\u7801\u7684\u653b\u51fb\u3002\u9664\u4e86 Java \u8bed\u8a00\u5177\u6709\u7684\u8bb8\u591a\u5b89\u5168\u7279\u6027\u4ee5\u5916\uff0cJava \u5bf9\u901a\u8fc7\u7f51\u7edc\u4e0b\u8f7d\u7684\u7c7b\u5177\u6709\u4e00\u4e2a\u5b89\u5168\u9632\u8303\u673a\u5236\uff08\u7c7b ClassLoader\uff09\uff0c\u5982\u5206\u914d\u4e0d\u540c\u7684\u540d\u5b57\u7a7a\u95f4\u4ee5\u9632\u66ff\u4ee3\u672c\u5730\u7684\u540c\u540d\u7c7b\u3001\u5b57\u8282\u4ee3\u7801\u68c0\u67e5\uff0c\u5e76\u63d0\u4f9b\u5b89\u5168\u7ba1\u7406\u673a\u5236\uff08\u7c7b SecurityManager\uff09\u8ba9 Java \u5e94\u7528\u8bbe\u7f6e\u5b89\u5168\u54e8\u5175\u3002"),(0,r.kt)("h2",{id:"java-\u7684\u5f00\u53d1\u73af\u5883"},"Java \u7684\u5f00\u53d1\u73af\u5883"),(0,r.kt)("h3",{id:"jdk"},"JDK"),(0,r.kt)("p",null,"JDK\uff08Java Development Kit\uff09\u79f0\u4e3a Java \u5f00\u53d1\u5305\u6216 Java \u5f00\u53d1\u5de5\u5177\uff0c\u662f\u4e00\u4e2a\u7f16\u5199 Java \u7684 Applet \u5c0f\u7a0b\u5e8f\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u7a0b\u5e8f\u5f00\u53d1\u73af\u5883\u3002JDK \u662f\u6574\u4e2a java \u7684\u6838\u5fc3\uff0c\u5305\u62ec\u4e86 Java \u8fd0\u884c\u73af\u5883\uff08Java Runtime Environment\uff09\uff0c\u4e00\u4e9b Java \u5de5\u5177\u548c Java \u7684\u6838\u5fc3\u7c7b\u5e93\uff08Java API\uff09\u3002"),(0,r.kt)("h3",{id:"jre"},"JRE"),(0,r.kt)("p",null,"JRE\uff08Java Runtime Environment\uff09\u662f\u4e2a\u8fd0\u884c\u73af\u5883\uff0c\u8fd0\u884c Java \u7a0b\u5e8f\u7684\u65f6\u5019\u5c31\u9700\u8981 JRE\u3002JDK \u91cc\u9762\u5305\u542b JRE\uff0c\u56e0\u6b64\u53ea\u8981\u5b89\u88c5\u4e86 JDK \u5c31\u53ef\u4ee5\u7f16\u8f91\u3001\u8fd0\u884c Java \u7a0b\u5e8f\u3002\u5982\u679c\u53ea\u662f\u8fd0\u884c\u666e\u901a\u7684 java \u7a0b\u5e8f\u65e0\u987b\u5b89\u88c5 JDK\uff0c\u53ea\u9700\u8981\u5b89\u88c5 JRE \u5373\u53ef\u3002"))}p.isMDXComponent=!0}}]);