"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5172],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>s});var l=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),y=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},u=function(e){var t=y(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=y(a),d=n,s=m["".concat(p,".").concat(d)]||m[d]||o[d]||r;return a?l.createElement(s,g(g({ref:t},u),{},{components:a})):l.createElement(s,g({ref:t},u))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,g=new Array(r);g[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,g[1]=i;for(var y=2;y<r;y++)g[y]=a[y];return l.createElement.apply(null,g)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>y});var l=a(8168),n=(a(6540),a(5680));const r={id:"\u57fa\u7840",title:"\u57fa\u7840",sidebar_position:2,data:"2022\u5e741\u670813\u65e5"},g=void 0,i={unversionedId:"Git/\u57fa\u7840",id:"Git/\u57fa\u7840",title:"\u57fa\u7840",description:"\u5982\u679c\u4f60\u53ea\u60f3\u901a\u8fc7\u9605\u8bfb\u4e00\u7ae0\u6765\u5b66\u4e60 Git\uff0c\u90a3\u4e48\u672c\u7ae0\u5c06\u662f\u4f60\u7684\u4e0d\u4e8c\u9009\u62e9\u3002 \u672c\u7ae0\u6db5\u76d6\u4e86\u4f60\u5728\u4f7f\u7528 Git\u5b8c\u6210\u5404\u79cd\u5de5\u4f5c\u65f6\u5c06\u4f1a\u7528\u5230\u7684\u5404\u79cd\u57fa\u672c\u547d\u4ee4\u3002 \u5728\u5b66\u4e60\u5b8c\u672c\u7ae0\u4e4b\u540e\uff0c\u4f60\u5e94\u8be5\u80fd\u591f\u914d\u7f6e\u5e76\u521d\u59cb\u5316\u4e00\u4e2a\u4ed3\u5e93\uff08repository\uff09\u3001\u5f00\u59cb\u6216\u505c\u6b62\u8ddf\u8e2a\uff08track\uff09\u6587\u4ef6\u3001\u6682\u5b58\uff08stage\uff09\u6216\u63d0\u4ea4\uff08commit\uff09\u66f4\u6539\u3002 \u672c\u7ae0\u4e5f\u5c06\u5411\u4f60\u6f14\u793a\u4e86\u5982\u4f55\u914d\u7f6e Git \u6765\u5ffd\u7565\u6307\u5b9a\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u6a21\u5f0f\u3001\u5982\u4f55\u8fc5\u901f\u800c\u7b80\u5355\u5730\u64a4\u9500\u9519\u8bef\u64cd\u4f5c\u3001\u5982\u4f55\u6d4f\u89c8\u4f60\u7684\u9879\u76ee\u7684\u5386\u53f2\u7248\u672c\u4ee5\u53ca\u4e0d\u540c\u63d0\u4ea4\uff08commits\uff09\u4e4b\u95f4\u7684\u5dee\u5f02\u3001\u5982\u4f55\u5411\u4f60\u7684\u8fdc\u7a0b\u4ed3\u5e93\u63a8\u9001\uff08push\uff09\u4ee5\u53ca\u5982\u4f55\u4ece\u4f60\u7684\u8fdc\u7a0b\u4ed3\u5e93\u62c9\u53d6\uff08pull\uff09\u6587\u4ef6\u3002",source:"@site/example/dev/Git/\u57fa\u7840.md",sourceDirName:"Git",slug:"/Git/\u57fa\u7840",permalink:"/dashboard-tryout/dev/Git/\u57fa\u7840",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/dev/Git/\u57fa\u7840.md",tags:[],version:"current",lastUpdatedBy:"louiscklaw",lastUpdatedAt:1665430613,formattedLastUpdatedAt:"Oct 10, 2022",sidebarPosition:2,frontMatter:{id:"\u57fa\u7840",title:"\u57fa\u7840",sidebar_position:2,data:"2022\u5e741\u670813\u65e5"},sidebar:"tutorialSidebar",previous:{title:"\u8d77\u6b65",permalink:"/dashboard-tryout/dev/Git/\u8d77\u6b65"},next:{title:"\u5206\u652f",permalink:"/dashboard-tryout/dev/Git/\u5206\u652f"}},p={},y=[{value:"\u83b7\u53d6 Git \u4ed3\u5e93",id:"\u83b7\u53d6-git-\u4ed3\u5e93",level:2},{value:"\u5728\u76ee\u5f55\u4e2d\u521d\u59cb\u5316\u4ed3\u5e93",id:"\u5728\u76ee\u5f55\u4e2d\u521d\u59cb\u5316\u4ed3\u5e93",level:3},{value:"\u514b\u9686\u73b0\u6709\u7684\u4ed3\u5e93",id:"\u514b\u9686\u73b0\u6709\u7684\u4ed3\u5e93",level:3},{value:"\u8bb0\u5f55\u6bcf\u6b21\u66f4\u65b0\u5230\u4ed3\u5e93",id:"\u8bb0\u5f55\u6bcf\u6b21\u66f4\u65b0\u5230\u4ed3\u5e93",level:2},{value:"\u5ffd\u7565\u6587\u4ef6",id:"\u5ffd\u7565\u6587\u4ef6",level:3},{value:"\u68c0\u67e5\u5f53\u524d\u4ed3\u5e93\u72b6\u6001",id:"\u68c0\u67e5\u5f53\u524d\u4ed3\u5e93\u72b6\u6001",level:3},{value:"\u8e2a\u65b0\u6587\u4ef6\u6216\u6682\u5b58\u5df2\u4fee\u6539\u7684\u6587\u4ef6",id:"\u8e2a\u65b0\u6587\u4ef6\u6216\u6682\u5b58\u5df2\u4fee\u6539\u7684\u6587\u4ef6",level:3},{value:"\u63d0\u4ea4\u66f4\u65b0",id:"\u63d0\u4ea4\u66f4\u65b0",level:3},{value:"\u67e5\u770b\u63d0\u4ea4\u5386\u53f2",id:"\u67e5\u770b\u63d0\u4ea4\u5386\u53f2",level:2},{value:"git log \u7684\u5e38\u7528\u9009\u9879",id:"git-log-\u7684\u5e38\u7528\u9009\u9879",level:3},{value:"git log --pretty=format \u5e38\u7528\u7684\u9009\u9879",id:"git-log---prettyformat-\u5e38\u7528\u7684\u9009\u9879",level:3},{value:"\u9650\u5236 git log \u8f93\u51fa\u7684\u9009\u9879",id:"\u9650\u5236-git-log-\u8f93\u51fa\u7684\u9009\u9879",level:3},{value:"\u64a4\u6d88\u64cd\u4f5c",id:"\u64a4\u6d88\u64cd\u4f5c",level:2},{value:"\u64a4\u9500\u5df2\u6682\u5b58\u7684\u6587\u4ef6",id:"\u64a4\u9500\u5df2\u6682\u5b58\u7684\u6587\u4ef6",level:3},{value:"\u64a4\u6d88\u5bf9\u6587\u4ef6\u7684\u4fee\u6539",id:"\u64a4\u6d88\u5bf9\u6587\u4ef6\u7684\u4fee\u6539",level:3},{value:"\u8fdc\u7a0b\u4ed3\u5e93",id:"\u8fdc\u7a0b\u4ed3\u5e93",level:2},{value:"\u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93",id:"\u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93",level:3},{value:"\u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93",id:"\u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93",level:3},{value:"\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u6293\u53d6\u4e0e\u62c9\u53d6",id:"\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u6293\u53d6\u4e0e\u62c9\u53d6",level:3},{value:"\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93",id:"\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93",level:3},{value:"\u67e5\u770b\u3001\u91cd\u547d\u540d\u4e0e\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93",id:"\u67e5\u770b\u91cd\u547d\u540d\u4e0e\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93",level:3},{value:"\u6253\u6807\u7b7e",id:"\u6253\u6807\u7b7e",level:2},{value:"\u521b\u5efa\u6807\u7b7e",id:"\u521b\u5efa\u6807\u7b7e",level:3},{value:"\u67e5\u770b\u6807\u7b7e",id:"\u67e5\u770b\u6807\u7b7e",level:3},{value:"\u5171\u4eab\u6807\u7b7e",id:"\u5171\u4eab\u6807\u7b7e",level:3},{value:"\u5220\u9664\u6807\u7b7e",id:"\u5220\u9664\u6807\u7b7e",level:3},{value:"Git \u522b\u540d",id:"git-\u522b\u540d",level:2}],u={toc:y},m="wrapper";function o(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,l.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u5982\u679c\u4f60\u53ea\u60f3\u901a\u8fc7\u9605\u8bfb\u4e00\u7ae0\u6765\u5b66\u4e60 Git\uff0c\u90a3\u4e48\u672c\u7ae0\u5c06\u662f\u4f60\u7684\u4e0d\u4e8c\u9009\u62e9\u3002 \u672c\u7ae0\u6db5\u76d6\u4e86\u4f60\u5728\u4f7f\u7528 Git\u5b8c\u6210\u5404\u79cd\u5de5\u4f5c\u65f6\u5c06\u4f1a\u7528\u5230\u7684\u5404\u79cd\u57fa\u672c\u547d\u4ee4\u3002 \u5728\u5b66\u4e60\u5b8c\u672c\u7ae0\u4e4b\u540e\uff0c\u4f60\u5e94\u8be5\u80fd\u591f\u914d\u7f6e\u5e76\u521d\u59cb\u5316\u4e00\u4e2a\u4ed3\u5e93\uff08repository\uff09\u3001\u5f00\u59cb\u6216\u505c\u6b62\u8ddf\u8e2a\uff08track\uff09\u6587\u4ef6\u3001\u6682\u5b58\uff08stage\uff09\u6216\u63d0\u4ea4\uff08commit\uff09\u66f4\u6539\u3002 \u672c\u7ae0\u4e5f\u5c06\u5411\u4f60\u6f14\u793a\u4e86\u5982\u4f55\u914d\u7f6e Git \u6765\u5ffd\u7565\u6307\u5b9a\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u6a21\u5f0f\u3001\u5982\u4f55\u8fc5\u901f\u800c\u7b80\u5355\u5730\u64a4\u9500\u9519\u8bef\u64cd\u4f5c\u3001\u5982\u4f55\u6d4f\u89c8\u4f60\u7684\u9879\u76ee\u7684\u5386\u53f2\u7248\u672c\u4ee5\u53ca\u4e0d\u540c\u63d0\u4ea4\uff08commits\uff09\u4e4b\u95f4\u7684\u5dee\u5f02\u3001\u5982\u4f55\u5411\u4f60\u7684\u8fdc\u7a0b\u4ed3\u5e93\u63a8\u9001\uff08push\uff09\u4ee5\u53ca\u5982\u4f55\u4ece\u4f60\u7684\u8fdc\u7a0b\u4ed3\u5e93\u62c9\u53d6\uff08pull\uff09\u6587\u4ef6\u3002"),(0,n.yg)("h2",{id:"\u83b7\u53d6-git-\u4ed3\u5e93"},"\u83b7\u53d6 Git \u4ed3\u5e93"),(0,n.yg)("p",null,"\u901a\u5e38\u6709\u4e24\u79cd\u83b7\u53d6 Git \u9879\u76ee\u4ed3\u5e93\u7684\u65b9\u5f0f\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u5c06\u5c1a\u672a\u8fdb\u884c\u7248\u672c\u63a7\u5236\u7684\u672c\u5730\u76ee\u5f55\u8f6c\u6362\u4e3a Git \u4ed3\u5e93\u3002"),(0,n.yg)("li",{parentName:"ol"},"\u4ece\u5176\u5b83\u670d\u52a1\u5668\u514b\u9686\u4e00\u4e2a\u5df2\u5b58\u5728\u7684 Git \u4ed3\u5e93\u3002")),(0,n.yg)("h3",{id:"\u5728\u76ee\u5f55\u4e2d\u521d\u59cb\u5316\u4ed3\u5e93"},"\u5728\u76ee\u5f55\u4e2d\u521d\u59cb\u5316\u4ed3\u5e93"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u5728\u5f53\u524d\u76ee\u5f55\u521d\u59cb\u5316\u4ed3\u5e93\ngit init\n")),(0,n.yg)("p",null,"\u8be5\u547d\u4ee4\u5c06\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a .git \u7684\u5b50\u76ee\u5f55\uff0c\u8fd9\u4e2a\u5b50\u76ee\u5f55\u542b\u6709\u4f60\u521d\u59cb\u5316\u7684 Git \u4ed3\u5e93\u4e2d\u6240\u6709\u7684\u5fc5\u987b\u6587\u4ef6\uff0c\u8fd9\u4e9b\u6587\u4ef6\u662f Git \u4ed3\u5e93\u7684\u9aa8\u5e72\u3002"),(0,n.yg)("h3",{id:"\u514b\u9686\u73b0\u6709\u7684\u4ed3\u5e93"},"\u514b\u9686\u73b0\u6709\u7684\u4ed3\u5e93"),(0,n.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u83b7\u5f97\u4e00\u4efd\u5df2\u7ecf\u5b58\u5728\u4e86\u7684 Git \u4ed3\u5e93\u7684\u62f7\u8d1d\uff0c\u6bd4\u5982\u8bf4\uff0c\u4f60\u60f3\u4e3a\u67d0\u4e2a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u81ea\u5df1\u7684\u4e00\u4efd\u529b\uff0c\u8fd9\u65f6\u5c31\u8981\u7528\u5230 git clone \u547d\u4ee4\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u514b\u9686\u8fdc\u7a0b\u4ed3\u5e93\ngit clone <url> \n")),(0,n.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u5728\u514b\u9686\u8fdc\u7a0b\u4ed3\u5e93\u7684\u65f6\u5019\uff0c\u81ea\u5b9a\u4e49\u672c\u5730\u4ed3\u5e93\u7684\u540d\u5b57\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u989d\u5916\u7684\u53c2\u6570\u6307\u5b9a\u65b0\u7684\u76ee\u5f55\u540d\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u6307\u5b9a\u4ed3\u5e93\u672c\u5730\u547d\u540d\ngit clone <url> <name>\n")),(0,n.yg)("p",null,"\u514b\u9686\u73b0\u6709\u7684\u4ed3\u5e93\uff0c\u5b9e\u9645\u4e0a\u662f\u591a\u4e2a\u547d\u4ee4\u7684\u5206\u89e3\u3002\u9996\u5148\u521d\u59cb\u5316\u4e00\u4e2a\u672c\u5730\u4ed3\u5e93\uff0c\u63a5\u7740\u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u6700\u540e\u62c9\u53d6\u8fdc\u7a0b\u4ed3\u5e93\u6570\u636e\u5230\u672c\u5730\u3002"),(0,n.yg)("h2",{id:"\u8bb0\u5f55\u6bcf\u6b21\u66f4\u65b0\u5230\u4ed3\u5e93"},"\u8bb0\u5f55\u6bcf\u6b21\u66f4\u65b0\u5230\u4ed3\u5e93"),(0,n.yg)("p",null,"\u5f53\u6211\u4eec\u6210\u529f\u62e5\u6709\u4e00\u4e2a\u4ed3\u5e93\u540e\uff0c\u53ef\u4ee5\u8fd0\u884c git status \u5f53\u4ed3\u5e93\u72b6\u6001\u3002\u5728\u672a\u8fdb\u884c\u5f00\u53d1\u7684\u60c5\u51b5\u4e0b\uff0c\u4ed3\u5e93\u90fd\u662f\u5e72\u51c0\u7684\u3002\u5f53\u6211\u4eec\u5728\u5de5\u4f5c\u76ee\u5f55\u5bf9\u6587\u4ef6\u8fdb\u884c\u4e86\u53d8\u52a8\uff0c\u6b64\u65f6\u5de5\u4f5c\u76ee\u5f55\u4e0b\u7684\u6bcf\u4e00\u4e2a\u6587\u4ef6\u90fd\u4e0d\u5916\u4e4e\u8fd9\u4e24\u79cd\u72b6\u6001\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u5df2\u8ddf\u8e2a"),"\uff1a\u6307\u90a3\u4e9b\u88ab\u7eb3\u5165\u4e86\u7248\u672c\u63a7\u5236\u7684\u6587\u4ef6\uff0c\u5728\u4e0a\u4e00\u6b21\u5feb\u7167\u4e2d\u6709\u5b83\u4eec\u7684\u8bb0\u5f55\uff0c\u5728\u5de5\u4f5c\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c \u5b83\u4eec\u7684\u72b6\u6001\u53ef\u80fd\u662f\u672a\u4fee\u6539\uff0c\u5df2\u4fee\u6539\u6216\u5df2\u653e\u5165\u6682\u5b58\u533a\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u5df2\u8ddf\u8e2a\u7684\u6587\u4ef6\u5c31\u662f Git \u5df2\u7ecf\u77e5\u9053\u7684\u6587\u4ef6\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"\u672a\u8ddf\u8e2a"),"\uff1a\u5de5\u4f5c\u76ee\u5f55\u4e2d\u9664\u5df2\u8ddf\u8e2a\u6587\u4ef6\u5916\u7684\u5176\u5b83\u6240\u6709\u6587\u4ef6\u90fd\u5c5e\u4e8e\u672a\u8ddf\u8e2a\u6587\u4ef6\uff0c\u5b83\u4eec\u65e2\u4e0d\u5b58\u5728\u4e8e\u4e0a\u6b21\u5feb\u7167\u7684\u8bb0\u5f55\u4e2d\uff0c\u4e5f\u6ca1\u6709\u88ab\u653e\u5165\u6682\u5b58\u533a\u3002")),(0,n.yg)("p",null,"\u8fd0\u884c git status \u5c31\u4f1a\u663e\u793a\u6211\u4eec\u5bf9\u90a3\u4e9b\u6587\u4ef6\u8fdb\u884c\u4e86\u53d8\u52a8\uff0c\u90a3\u4e9b\u662f\u5df2\u8ddf\u8e2a\uff0c\u90a3\u4e9b\u662f\u672a\u8ddf\u8e2a\u3002\u63a5\u7740\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 git add \u5c06\u6587\u4ef6\u6dfb\u52a0\u81f3\u6682\u5b58\u533a\u3002\u6dfb\u52a0\u81f3\u6682\u5b58\u533a\u540e\u53ef\u4ee5\u63d0\u4ea4\u66f4\u65b0\u6216\u7ee7\u7eed\u5de5\u4f5c\uff1b\u5982\u679c\u7ee7\u7eed\u5de5\u4f5c\uff0c\u540c\u65f6\u5bf9\u5df2\u6682\u5b58\u7684\u6587\u4ef6\u8fdb\u884c\u4e86\u66f4\u6539\uff0c\u53ef\u4ee5\u4f7f\u7528 git diff \u67e5\u770b\u8be5\u6587\u4ef6\u5de5\u4f5c\u533a\u548c\u6682\u5b58\u533a\u4e4b\u95f4\u7684\u5dee\u5f02\u3002"),(0,n.yg)("p",null,"\u5982\u679c\u63d0\u4ea4\u65b0\u4fee\u6539\u7684\u6587\u4ef6\u81f3\u6682\u5b58\u533a\uff0c\u6682\u5b58\u533a\u7684\u6587\u4ef6\u4f1a\u88ab\u65b0\u63d0\u4ea4\u7684\u8986\u76d6\u3002\u5b8c\u6210\u6240\u6709\u7684\u5de5\u4f5c\u5f00\u53d1\uff0c\u5e76\u4e14\u63d0\u4ea4\u81f3\u6682\u5b58\u533a\u540e\uff0c\u5c31\u8fd0\u884c git commit \u63d0\u4ea4\u66f4\u65b0\u81f3 git \u76ee\u5f55\uff0c\u8bb0\u5f55\u6b64\u6b21\u5feb\u7167\u3002"),(0,n.yg)("p",null,"\u8fdb\u884c\u591a\u6b21\u5f00\u53d1\u4e4b\u540e\uff0c\u60f3\u8981\u56de\u987e\u4e00\u4e0b\u63d0\u4ea4\u5386\u53f2\uff0c\u53ef\u4ee5\u4f7f\u7528 git log \u67e5\u770b\u63d0\u4ea4\u5386\u53f2\u3002"),(0,n.yg)("h3",{id:"\u5ffd\u7565\u6587\u4ef6"},"\u5ffd\u7565\u6587\u4ef6"),(0,n.yg)("p",null,"\u6709\u4e9b\u6587\u4ef6\u65e0\u9700\u7eb3\u5165 Git \u7684\u7ba1\u7406\uff0c\u4e5f\u4e0d\u5e0c\u671b\u5b83\u4eec\u603b\u51fa\u73b0\u5728\u672a\u8ddf\u8e2a\u6587\u4ef6\u5217\u8868\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a .gitignore \u7684\u6587\u4ef6\uff0c\u5217\u51fa\u8981\u5ffd\u7565\u7684\u6587\u4ef6\u7684\u6a21\u5f0f\u3002\u4e0d\u540c\u76ee\u5f55\u4e0b\u53ef\u4ee5\u62e5\u6709\u4e0d\u540c\u7684 .gitignore \u3002"),(0,n.yg)("p",null,"\u6587\u4ef6 .gitignore \u7684\u683c\u5f0f\u89c4\u8303\u5982\u4e0b\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u6240\u6709\u7a7a\u884c\u6216\u8005\u4ee5 # \u5f00\u5934\u7684\u884c\u90fd\u4f1a\u88ab Git \u5ffd\u7565\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u7684 glob \u6a21\u5f0f\u5339\u914d\uff0c\u5b83\u4f1a\u9012\u5f52\u5730\u5e94\u7528\u5728\u6574\u4e2a\u5de5\u4f5c\u533a\u4e2d\uff08glob \u6a21\u5f0f\u662f\u6307 shell \u6240\u4f7f\u7528\u7684\u7b80\u5316\u4e86\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\uff09\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5339\u914d\u6a21\u5f0f\u53ef\u4ee5\u4ee5\uff08/\uff09\u5f00\u5934\u9632\u6b62\u9012\u5f52\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u5339\u914d\u6a21\u5f0f\u53ef\u4ee5\u4ee5\uff08/\uff09\u7ed3\u5c3e\u6307\u5b9a\u76ee\u5f55\u3002"),(0,n.yg)("li",{parentName:"ul"},"\u8981\u5ffd\u7565\u6307\u5b9a\u6a21\u5f0f\u4ee5\u5916\u7684\u6587\u4ef6\u6216\u76ee\u5f55\uff0c\u53ef\u4ee5\u5728\u6a21\u5f0f\u524d\u52a0\u4e0a\u53f9\u53f7\uff08!\uff09\u53d6\u53cd\u3002")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"GitHub \u6709\u4e00\u4e2a\u5341\u5206\u8be6\u7ec6\u7684\u9488\u5bf9\u6570\u5341\u79cd\u9879\u76ee\u53ca\u8bed\u8a00\u7684 .gitignore \u6587\u4ef6\u5217\u8868\uff0c \u4f60\u53ef\u4ee5\u5728 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/github/gitignore"},"https://github.com/github/gitignore")," \u627e\u5230\u5b83\u3002")),(0,n.yg)("h3",{id:"\u68c0\u67e5\u5f53\u524d\u4ed3\u5e93\u72b6\u6001"},"\u68c0\u67e5\u5f53\u524d\u4ed3\u5e93\u72b6\u6001"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u67e5\u770b\u5f53\u524d\u4ed3\u5e93\u72b6\u6001\u603b\u89c8\ngit status\n\n// \u67e5\u770b\u5f53\u524d\u4ed3\u5e93\u72b6\u6001\u7b80\u89c8\ngit status -s \ngit status --short \n\n// \u5f53\u524d\u6587\u4ef6\u548c\u6682\u5b58\u533a\u4e4b\u95f4\u7684\u5177\u4f53\u5dee\u5f02\ngit diff \n\n// \u6682\u5b58\u533a\u548c\u6700\u540e\u4e00\u6b21\u63d0\u4ea4\u7684\u5177\u4f53\u5dee\u5f02\ngit diff --staged\ngit diff --cached\n")),(0,n.yg)("h3",{id:"\u8e2a\u65b0\u6587\u4ef6\u6216\u6682\u5b58\u5df2\u4fee\u6539\u7684\u6587\u4ef6"},"\u8e2a\u65b0\u6587\u4ef6\u6216\u6682\u5b58\u5df2\u4fee\u6539\u7684\u6587\u4ef6"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u6dfb\u52a0\u6587\u4ef6\u5230\u6682\u5b58\u533a\ngit add <file>\n\n// \u6dfb\u52a0\u8def\u5f84\u5230\u6682\u5b58\u533a\ngit add <path>\n")),(0,n.yg)("h3",{id:"\u63d0\u4ea4\u66f4\u65b0"},"\u63d0\u4ea4\u66f4\u65b0"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u63d0\u4ea4\u66f4\u65b0\uff0c\u540c\u65f6\u4f1a\u542f\u52a8\u6587\u672c\u7f16\u8f91\u5668\u6765\u8f93\u5165\u63d0\u4ea4\u8bf4\u660e\u3002\ngit commit\n\n// \u5c06\u63d0\u4ea4\u4fe1\u606f\u4e0e\u547d\u4ee4\u653e\u5728\u540c\u4e00\u884c\ngit commit -m <msg>\n\n// \u8df3\u8fc7\u6682\u5b58\uff0c\u76f4\u63a5\u63d0\u4ea4\u5df2\u8ddf\u8e2a\u6587\u4ef6\u3002\ngit commit -a\n")),(0,n.yg)("h2",{id:"\u67e5\u770b\u63d0\u4ea4\u5386\u53f2"},"\u67e5\u770b\u63d0\u4ea4\u5386\u53f2"),(0,n.yg)("h3",{id:"git-log-\u7684\u5e38\u7528\u9009\u9879"},"git log \u7684\u5e38\u7528\u9009\u9879"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u683c\u5f0f\u5316\u8f93\u51fa\u4e00\u884c\u663e\u793a\u63d0\u4ea4\u5386\u53f2\ngit log --oneline\n")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,n.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-p"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6309\u8865\u4e01\u683c\u5f0f\u663e\u793a\u6bcf\u4e2a\u63d0\u4ea4\u5f15\u5165\u7684\u5dee\u5f02\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--stat"),(0,n.yg)("td",{parentName:"tr",align:null},"\u663e\u793a\u6bcf\u6b21\u63d0\u4ea4\u7684\u6587\u4ef6\u4fee\u6539\u7edf\u8ba1\u4fe1\u606f\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--shortstat"),(0,n.yg)("td",{parentName:"tr",align:null},"\u53ea\u663e\u793a --stat \u4e2d\u6700\u540e\u7684\u884c\u6570\u4fee\u6539\u6dfb\u52a0\u79fb\u9664\u7edf\u8ba1\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--name-only"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728\u63d0\u4ea4\u4fe1\u606f\u540e\u663e\u793a\u5df2\u4fee\u6539\u7684\u6587\u4ef6\u6e05\u5355\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--name-status"),(0,n.yg)("td",{parentName:"tr",align:null},"\u663e\u793a\u65b0\u589e\u3001\u4fee\u6539\u3001\u5220\u9664\u7684\u6587\u4ef6\u6e05\u5355\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--abbrev-commit"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a SHA-1 \u6821\u9a8c\u548c\u6240\u6709 40 \u4e2a\u5b57\u7b26\u4e2d\u7684\u524d\u51e0\u4e2a\u5b57\u7b26\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--relative-date"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u8f83\u77ed\u7684\u76f8\u5bf9\u65f6\u95f4\u800c\u4e0d\u662f\u5b8c\u6574\u683c\u5f0f\u663e\u793a\u65e5\u671f\uff08\u6bd4\u5982\u201c2 weeks ago\u201d\uff09\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--graph"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5728\u65e5\u5fd7\u65c1\u4ee5 ASCII \u56fe\u5f62\u663e\u793a\u5206\u652f\u4e0e\u5408\u5e76\u5386\u53f2\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--pretty"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5176\u4ed6\u683c\u5f0f\u663e\u793a\u5386\u53f2\u63d0\u4ea4\u4fe1\u606f\u3002\u53ef\u7528\u7684\u9009\u9879\u5305\u62ec oneline\u3001short\u3001full\u3001fuller \u548cformat\uff08\u7528\u6765\u5b9a\u4e49\u81ea\u5df1\u7684\u683c\u5f0f\uff09\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--oneline"),(0,n.yg)("td",{parentName:"tr",align:null},"--pretty=oneline --abbrev-commit \u5408\u7528\u7684\u7b80\u5199\u3002")))),(0,n.yg)("h3",{id:"git-log---prettyformat-\u5e38\u7528\u7684\u9009\u9879"},"git log --pretty=format \u5e38\u7528\u7684\u9009\u9879"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'// format \u53ef\u4ee5\u5b9a\u5236\u8bb0\u5f55\u7684\u663e\u793a\u683c\u5f0f\ngit log --pretty=format:"%h - %an, %ar : %s"\n')),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,n.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%H"),(0,n.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u7684\u5b8c\u6574\u54c8\u5e0c\u503c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%h"),(0,n.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u7684\u7b80\u5199\u54c8\u5e0c\u503c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%T"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6811\u7684\u5b8c\u6574\u54c8\u5e0c\u503c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%t"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6811\u7684\u7b80\u5199\u54c8\u5e0c\u503c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%P"),(0,n.yg)("td",{parentName:"tr",align:null},"\u7236\u63d0\u4ea4\u7684\u5b8c\u6574\u54c8\u5e0c\u503c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%p"),(0,n.yg)("td",{parentName:"tr",align:null},"\u7236\u63d0\u4ea4\u7684\u7b80\u5199\u54c8\u5e0c\u503c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%an"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4f5c\u8005\u540d\u5b57")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%ae"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4f5c\u8005\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%ad"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4f5c\u8005\u4fee\u8ba2\u65e5\u671f\uff08\u53ef\u4ee5\u7528 --date=\u9009\u9879 \u6765\u5b9a\u5236\u683c\u5f0f\uff09")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%ar"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4f5c\u8005\u4fee\u8ba2\u65e5\u671f\uff0c\u6309\u591a\u4e45\u4ee5\u524d\u7684\u65b9\u5f0f\u663e\u793a")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%cn"),(0,n.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u8005\u7684\u540d\u5b57")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%ce"),(0,n.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u8005\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%cd"),(0,n.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u65e5\u671f")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%cr"),(0,n.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u65e5\u671f\uff08\u8ddd\u4eca\u591a\u957f\u65f6\u95f4\uff09")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"%s"),(0,n.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u8bf4\u660e")))),(0,n.yg)("h3",{id:"\u9650\u5236-git-log-\u8f93\u51fa\u7684\u9009\u9879"},"\u9650\u5236 git log \u8f93\u51fa\u7684\u9009\u9879"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,n.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-n"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u6700\u8fd1\u7684 n \u6761\u63d0\u4ea4\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--since, --after"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u6307\u5b9a\u65f6\u95f4\u4e4b\u540e\u7684\u63d0\u4ea4\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--until, --before"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u6307\u5b9a\u65f6\u95f4\u4e4b\u524d\u7684\u63d0\u4ea4\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--author"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u4f5c\u8005\u5339\u914d\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u63d0\u4ea4\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--committer"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u63d0\u4ea4\u8005\u5339\u914d\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u63d0\u4ea4\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--grep"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u63d0\u4ea4\u8bf4\u660e\u4e2d\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u63d0\u4ea4\u3002")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"-S"),(0,n.yg)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u6dfb\u52a0\u6216\u5220\u9664\u5185\u5bb9\u5339\u914d\u6307\u5b9a\u5b57\u7b26\u4e32\u7684\u63d0\u4ea4\u3002")))),(0,n.yg)("h2",{id:"\u64a4\u6d88\u64cd\u4f5c"},"\u64a4\u6d88\u64cd\u4f5c"),(0,n.yg)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u63d0\u4ea4\u5b8c\u4e86\u624d\u53d1\u73b0\u6f0f\u6389\u4e86\u51e0\u4e2a\u6587\u4ef6\u6ca1\u6709\u6dfb\u52a0\uff0c\u6216\u8005\u63d0\u4ea4\u4fe1\u606f\u5199\u9519\u4e86\u3002 \u6b64\u65f6\uff0c\u53ef\u4ee5\u8fd0\u884c\u5e26\u6709 --amend \u9009\n\u9879\u7684\u63d0\u4ea4\u547d\u4ee4\u6765\u91cd\u65b0\u63d0\u4ea4\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u64a4\u9500\u4e0a\u6b21\u63d0\u4ea4\ngit commit --amend\n")),(0,n.yg)("p",null,"\u6b64\u547d\u4ee4\u4f1a\u5c06\u5f53\u524d\u6682\u5b58\u533a\u7684\u6587\u4ef6\u4e00\u5e76\u63d0\u4ea4\uff0c\u6700\u7ec8\u53ea\u4f1a\u6709\u4e00\u4e2a\u63d0\u4ea4\u2014\u2014\u7b2c\u4e8c\u6b21\u63d0\u4ea4\u5c06\u4ee3\u66ff\u7b2c\u4e00\u6b21\u63d0\u4ea4\u7684\u7ed3\u679c\u3002"),(0,n.yg)("h3",{id:"\u64a4\u9500\u5df2\u6682\u5b58\u7684\u6587\u4ef6"},"\u64a4\u9500\u5df2\u6682\u5b58\u7684\u6587\u4ef6"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u53d6\u6d88\u6682\u5b58\u533a\u6587\u4ef6\ngit reset HEAD <file>\n")),(0,n.yg)("p",null,"git reset \u786e\u5b9e\u662f\u4e2a\u5371\u9669\u7684\u547d\u4ee4\uff0c\u5982\u679c\u52a0\u4e0a\u4e86 --hard \u9009\u9879\u5219\u66f4\u662f\u5982\u6b64\u3002 \u7136\u800c\u5728\u4e0a\u8ff0\u573a\u666f\u4e2d\uff0c\u5de5\u4f5c\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u5c1a\u672a\u4fee\u6539\uff0c\u56e0\u6b64\u76f8\u5bf9\u5b89\u5168\u4e00\u4e9b\u3002"),(0,n.yg)("h3",{id:"\u64a4\u6d88\u5bf9\u6587\u4ef6\u7684\u4fee\u6539"},"\u64a4\u6d88\u5bf9\u6587\u4ef6\u7684\u4fee\u6539"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u64a4\u9500\u5de5\u4f5c\u533a\u7684\u6587\u4ef6\u4fee\u6539\ngit checkout -- <file>\n")),(0,n.yg)("p",null,"\u8bf7\u52a1\u5fc5\u8bb0\u5f97 ",(0,n.yg)("inlineCode",{parentName:"p"},"git checkout -- <file>")," \u662f\u4e00\u4e2a\u5371\u9669\u7684\u547d\u4ee4\u3002 \u4f60\u5bf9\u90a3\u4e2a\u6587\u4ef6\u5728\u672c\u5730\u7684\u4efb\u4f55\u4fee\u6539\u90fd\u4f1a\u6d88\u5931\u2014\u2014Git \u4f1a\u7528\u6700\u8fd1\u63d0\u4ea4\u7684\u7248\u672c\u8986\u76d6\u6389\u5b83\u3002 \u9664\u975e\u4f60\u786e\u5b9e\u6e05\u695a\u4e0d\u60f3\u8981\u5bf9\u90a3\u4e2a\u6587\u4ef6\u7684\u672c\u5730\u4fee\u6539\u4e86\uff0c\u5426\u5219\u8bf7\u4e0d\u8981\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4\u3002"),(0,n.yg)("h2",{id:"\u8fdc\u7a0b\u4ed3\u5e93"},"\u8fdc\u7a0b\u4ed3\u5e93"),(0,n.yg)("p",null,"\u4e3a\u4e86\u80fd\u5728\u4efb\u610f Git \u9879\u76ee\u4e0a\u534f\u4f5c\uff0c\u4f60\u9700\u8981\u77e5\u9053\u5982\u4f55\u7ba1\u7406\u81ea\u5df1\u7684\u8fdc\u7a0b\u4ed3\u5e93\u3002\u8fdc\u7a0b\u4ed3\u5e93\u662f\u6307\u6258\u7ba1\u5728\u56e0\u7279\u7f51\u6216\u5176\u4ed6\u7f51\u7edc\u4e2d\n\u7684\u4f60\u7684\u9879\u76ee\u7684\u7248\u672c\u5e93\u3002"),(0,n.yg)("p",null,"\u4f60\u53ef\u4ee5\u6709\u597d\u51e0\u4e2a\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u901a\u5e38\u6709\u4e9b\u4ed3\u5e93\u5bf9\u4f60\u53ea\u8bfb\uff0c\u6709\u4e9b\u5219\u53ef\u4ee5\u8bfb\u5199\u3002 \u4e0e\u4ed6\u4eba\u534f\u4f5c\u6d89\u53ca\u7ba1\u7406\u8fdc\u7a0b\u4ed3\u5e93\u4ee5\u53ca\u6839\u636e\u9700\u8981\u63a8\u9001\u6216\u62c9\u53d6\u6570\u636e\u3002 \u7ba1\u7406\u8fdc\u7a0b\u4ed3\u5e93\u5305\u62ec\u4e86\u89e3\u5982\u4f55\u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93\u3001\u79fb\u9664\u65e0\u6548\u7684\u8fdc\u7a0b\u4ed3\u5e93\u3001\u7ba1\u7406\u4e0d\u540c\u7684\u8fdc\u7a0b\u5206\u652f\u5e76\u5b9a\u4e49\u5b83\u4eec\u662f\u5426\u88ab\u8ddf\u8e2a\u7b49\u7b49\u3002"),(0,n.yg)("h3",{id:"\u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93"},"\u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93"),(0,n.yg)("p",null,"\u53ef\u4ee5\u8fd0\u884c git remote \u547d\u4ee4\uff0c\u67e5\u770b\u4f60\u5df2\u7ecf\u914d\u7f6e\u7684\u8fdc\u7a0b\u4ed3\u5e93\u670d\u52a1\u5668\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93\ngit remote\n")),(0,n.yg)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u9009\u9879 -v\uff0c\u4f1a\u663e\u793a\u9700\u8981\u8bfb\u5199\u8fdc\u7a0b\u4ed3\u5e93\u4f7f\u7528\u7684 Git \u4fdd\u5b58\u7684\u7b80\u5199\u4e0e\u5176\u5bf9\u5e94\u7684 URL"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u663e\u793a\u8fdc\u7a0b\u4ed3\u5e93\u7b80\u5199\u53ca\u5176 URL\ngit remote -v\n")),(0,n.yg)("h3",{id:"\u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93"},"\u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93"),(0,n.yg)("p",null,"\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,n.yg)("inlineCode",{parentName:"p"},"git remote add <shortname> <url>")," \u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u8fdc\u7a0b Git \u4ed3\u5e93\uff0c\u540c\u65f6\u6307\u5b9a\u4e00\u4e2a\u65b9\u4fbf\u4f7f\u7528\u7684\u7b80\u5199\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u8fdc\u7a0b Git \u4ed3\u5e93\ngit remote add <remote-name> <url>\n")),(0,n.yg)("h3",{id:"\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u6293\u53d6\u4e0e\u62c9\u53d6"},"\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u6293\u53d6\u4e0e\u62c9\u53d6"),(0,n.yg)("p",null,"\u5f53\u4f60\u6dfb\u52a0\u8fdc\u7a0b\u4ed3\u5e93\u540e\uff0c\u53ef\u4ee5\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u62c9\u53d6\u6570\u636e\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u4ece\u8fdc\u7a0b\u4ed3\u5e93\u62c9\u53d6\u6570\u636e\uff0c\u4e0d\u81ea\u52a8\u5408\u5e76\u3002\ngit fetch <remote-name>\n\n// \u4ece\u8fdc\u7a0b\u4ed3\u5e93\u6293\u53d6\u6570\u636e\uff0c\u5e76\u5c1d\u8bd5\u81ea\u52a8\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f\u3002\ngit pull\n")),(0,n.yg)("h3",{id:"\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93"},"\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93"),(0,n.yg)("p",null,"\u5f53\u4f60\u60f3\u5206\u4eab\u4f60\u7684\u9879\u76ee\u65f6\uff0c\u5fc5\u987b\u5c06\u5176\u63a8\u9001\u5230\u4e0a\u6e38\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u63a8\u9001\u5206\u652f\u5230\u8fdc\u7a0b\u4ed3\u5e93\ngit push <remote> <branch>\n")),(0,n.yg)("h3",{id:"\u67e5\u770b\u91cd\u547d\u540d\u4e0e\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93"},"\u67e5\u770b\u3001\u91cd\u547d\u540d\u4e0e\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93"),(0,n.yg)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5bf9\u8fdc\u7a0b\u4ed3\u5e93\u8fdb\u884c\u67e5\u770b\u3001\u91cd\u547d\u540d\u4e0e\u79fb\u9664\u64cd\u4f5c\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93\ngit remote show <remote>\n\n// \u8fdc\u7a0b\u4ed3\u5e93\u7684\u91cd\u547d\u540d\ngit remote rename <old> <new>\n\n// \u8fdc\u7a0b\u4ed3\u5e93\u7684\u79fb\u9664\ngit remote remove <name>\n")),(0,n.yg)("h2",{id:"\u6253\u6807\u7b7e"},"\u6253\u6807\u7b7e"),(0,n.yg)("p",null,"Git \u53ef\u4ee5\u7ed9\u4ed3\u5e93\u5386\u53f2\u4e2d\u7684\u67d0\u4e00\u4e2a\u63d0\u4ea4\u6253\u4e0a\u6807\u7b7e\uff0c\u4ee5\u793a\u91cd\u8981\u3002 \u6bd4\u8f83\u6709\u4ee3\u8868\u6027\u7684\u662f\u4eba\u4eec\u4f1a\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\u6765\u6807\u8bb0\u53d1\u5e03\u7ed3\u70b9\uff08 v1.0 \u3001 v2.0 \u7b49\u7b49\uff09"),(0,n.yg)("p",null,"Git \u652f\u6301\u4e24\u79cd\u6807\u7b7e\uff1a",(0,n.yg)("strong",{parentName:"p"},"\u8f7b\u91cf\u6807\u7b7e\uff08lightweight\uff09"),"\u4e0e",(0,n.yg)("strong",{parentName:"p"},"\u9644\u6ce8\u6807\u7b7e\uff08annotated\uff09"),"\u3002"),(0,n.yg)("p",null,"\u8f7b\u91cf\u6807\u7b7e\u5f88\u50cf\u4e00\u4e2a\u4e0d\u4f1a\u6539\u53d8\u7684\u5206\u652f\u2014\u2014\u5b83\u53ea\u662f\u67d0\u4e2a\u7279\u5b9a\u63d0\u4ea4\u7684\u5f15\u7528\u3002"),(0,n.yg)("p",null,"\u800c\u9644\u6ce8\u6807\u7b7e\u662f\u5b58\u50a8\u5728 Git \u6570\u636e\u5e93\u4e2d\u7684\u4e00\u4e2a\u5b8c\u6574\u5bf9\u8c61\uff0c \u5b83\u4eec\u662f\u53ef\u4ee5\u88ab\u6821\u9a8c\u7684\uff0c\u5176\u4e2d\u5305\u542b\u6253\u6807\u7b7e\u8005\u7684\u540d\u5b57\u3001\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3001\u65e5\u671f\u65f6\u95f4\uff0c \u6b64\u5916\u8fd8\u6709\u4e00\u4e2a\u6807\u7b7e\u4fe1\u606f\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528 GNU Privacy Guard \uff08GPG\uff09\u7b7e\u540d\u5e76\u9a8c\u8bc1\u3002 \u901a\u5e38\u4f1a\u5efa\u8bae\u521b\u5efa\u9644\u6ce8\u6807\u7b7e\uff0c\u8fd9\u6837\u4f60\u53ef\u4ee5\u62e5\u6709\u4ee5\u4e0a\u6240\u6709\u4fe1\u606f\u3002"),(0,n.yg)("p",null,"\u4f46\u662f\u5982\u679c\u4f60\u53ea\u662f\u60f3\u7528\u4e00\u4e2a\u4e34\u65f6\u7684\u6807\u7b7e\uff0c \u6216\u8005\u56e0\u4e3a\u67d0\u4e9b\u539f\u56e0\u4e0d\u60f3\u8981\u4fdd\u5b58\u8fd9\u4e9b\u4fe1\u606f\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u7528\u8f7b\u91cf\u6807\u7b7e\u3002"),(0,n.yg)("h3",{id:"\u521b\u5efa\u6807\u7b7e"},"\u521b\u5efa\u6807\u7b7e"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u521b\u5efa\u8f7b\u91cf\u6807\u7b7e\ngit tag <tagname>\n\n// \u521b\u5efa\u9644\u6ce8\u6807\u7b7e\ngit tag -a <tagname>\n")),(0,n.yg)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5bf9\u8fc7\u53bb\u7684\u63d0\u4ea4\u6253\u6807\u7b7e\u3002\uff0c\u53ea\u9700\u8981\u8f93\u5165\u63d0\u4ea4\u7684 SHA-1 \u6570\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u540e\u671f\u6253\u6807\u7b7e\ngit tag <tagname> <commit-id>\n")),(0,n.yg)("h3",{id:"\u67e5\u770b\u6807\u7b7e"},"\u67e5\u770b\u6807\u7b7e"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u5217\u51fa\u5df2\u6709\u7684\u6807\u7b7e\ngit tag\n\n// \u663e\u793a\u6807\u7b7e\u4fe1\u606f\ngit show <tagname>\n")),(0,n.yg)("h3",{id:"\u5171\u4eab\u6807\u7b7e"},"\u5171\u4eab\u6807\u7b7e"),(0,n.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cgit push \u547d\u4ee4\u5e76\u4e0d\u4f1a\u4f20\u9001\u6807\u7b7e\u5230\u8fdc\u7a0b\u4ed3\u5e93\u670d\u52a1\u5668\u4e0a\u3002 \u5728\u521b\u5efa\u5b8c\u6807\u7b7e\u540e\u4f60\u5fc5\u987b\u663e\u5f0f\u5730\u63a8\u9001\u6807\u7b7e\u5230\u5171\u4eab\u670d\u52a1\u5668\u4e0a\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u63a8\u9001\u6807\u7b7e\u5230\u8fdc\u7a0b\u4ed3\u5e93\ngit push origin <tagname>\n\n// \u63a8\u9001\u5168\u90e8\u6807\u7b7e\ngit push origin --tags\n")),(0,n.yg)("h3",{id:"\u5220\u9664\u6807\u7b7e"},"\u5220\u9664\u6807\u7b7e"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"// \u5220\u9664\u6807\u7b7e\ngit tag -d <tagname>\n\n// \u5220\u9664\u8fdc\u7a0b\u4ed3\u5e93\u6807\u7b7e\ngit push origin --delete <tagname>\n")),(0,n.yg)("h2",{id:"git-\u522b\u540d"},"Git \u522b\u540d"),(0,n.yg)("p",null,"Git \u5e76\u4e0d\u4f1a\u5728\u4f60\u8f93\u5165\u90e8\u5206\u547d\u4ee4\u65f6\u81ea\u52a8\u63a8\u65ad\u51fa\u4f60\u60f3\u8981\u7684\u547d\u4ee4\u3002 \u5982\u679c\u4e0d\u60f3\u6bcf\u6b21\u90fd\u8f93\u5165\u5b8c\u6574\u7684 Git \u547d\u4ee4\uff0c\u53ef\u4ee5\u901a\u8fc7 git\nconfig \u6587\u4ef6\u6765\u8f7b\u677e\u5730\u4e3a\u6bcf\u4e00\u4e2a\u547d\u4ee4\u8bbe\u7f6e\u4e00\u4e2a\u522b\u540d\u3002\u5982\u4e0b\uff1a"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"git config --global alias.co checkout\ngit config --global alias.br branch\ngit config --global alias.ci commit\ngit config --global alias.st status\n")),(0,n.yg)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 git co \u7b49\u4ef7\u4ee3\u66ff git checkout\uff0c\u5176\u4ed6\u540c\u7406\u3002"))}o.isMDXComponent=!0}}]);