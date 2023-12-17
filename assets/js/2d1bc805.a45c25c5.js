"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5562],{3905:(t,e,l)=>{l.d(e,{Zo:()=>c,kt:()=>T});var r=l(7294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function i(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?i(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,r,n=function(t,e){if(null==t)return{};var l,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)l=i[r],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)l=i[r],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},c=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},S="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var l=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),S=p(l),s=n,T=S["".concat(o,".").concat(s)]||S[s]||d[s]||i;return l?r.createElement(T,a(a({ref:e},c),{},{components:l})):r.createElement(T,a({ref:e},c))}));function T(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=l.length,a=new Array(i);a[0]=s;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[S]="string"==typeof t?t:n,a[1]=u;for(var p=2;p<i;p++)a[p]=l[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,l)}s.displayName="MDXCreateElement"},2817:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=l(7462),n=(l(7294),l(3905));const i={id:"\u670d\u52a1",title:"\u670d\u52a1",sidebar_position:5,data:"2022\u5e741\u670813\u65e5"},a=void 0,u={unversionedId:"Git/\u670d\u52a1",id:"Git/\u670d\u52a1",title:"\u670d\u52a1",description:"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u4f60\u5e94\u8be5\u5df2\u7ecf\u6709\u529e\u6cd5\u4f7f\u7528 Git \u6765\u5b8c\u6210\u65e5\u5e38\u5de5\u4f5c\u3002 \u7136\u800c\uff0c\u4e3a\u4e86\u4f7f\u7528 Git \u534f\u4f5c\u529f\u80fd\uff0c\u4f60\u8fd8\u9700\u8981\u6709\u8fdc\u7a0b\u7684 Git \u4ed3\u5e93\u3002 \u5c3d\u7ba1\u5728\u6280\u672f\u4e0a\u4f60\u53ef\u4ee5\u4ece\u4e2a\u4eba\u4ed3\u5e93\u8fdb\u884c\u63a8\u9001\uff08push\uff09\u548c\u62c9\u53d6\uff08pull\uff09\u6765\u4fee\u6539\u5185\u5bb9\uff0c\u4f46\u4e0d\u9f13\u52b1\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0c\u56e0\u4e3a\u4e00\u4e0d\u7559\u5fc3\u5c31\u5f88\u5bb9\u6613\u5f04\u6df7\u5176\u4ed6\u4eba\u7684\u8fdb\u5ea6\u3002 \u6b64\u5916\uff0c\u4f60\u5e0c\u671b\u4f60\u7684\u5408\u4f5c\u8005\u4eec\u5373\u4f7f\u5728\u4f60\u7684\u7535\u8111\u672a\u8054\u673a\u65f6\u4ea6\u80fd\u5b58\u53d6\u4ed3\u5e93 \u2014 \u62e5\u6709\u4e00\u4e2a\u66f4\u53ef\u9760\u7684\u516c\u7528\u4ed3\u5e93\u5341\u5206\u6709\u7528\u3002 \u56e0\u6b64\uff0c\u4e0e\u4ed6\u4eba\u5408\u4f5c\u7684\u6700\u4f73\u65b9\u6cd5\u5373\u662f\u5efa\u7acb\u4e00\u4e2a\u4f60\u4e0e\u5408\u4f5c\u8005\u4eec\u90fd\u6709\u6743\u5229\u8bbf\u95ee\uff0c\u4e14\u53ef\u4ece\u90a3\u91cc\u63a8\u9001\u548c\u62c9\u53d6\u8d44\u6599\u7684\u5171\u7528\u4ed3\u5e93\u3002",source:"@site/example/dev/Git/\u670d\u52a1.md",sourceDirName:"Git",slug:"/Git/\u670d\u52a1",permalink:"/dashboard-tryout/dev/Git/\u670d\u52a1",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/dev/Git/\u670d\u52a1.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"\u670d\u52a1",title:"\u670d\u52a1",sidebar_position:5,data:"2022\u5e741\u670813\u65e5"},sidebar:"tutorialSidebar",previous:{title:"\u5de5\u4f5c\u6d41",permalink:"/dashboard-tryout/dev/Git/\u5de5\u4f5c\u6d41"},next:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/dashboard-tryout/dev/Git/\u5e38\u7528\u547d\u4ee4"}},o={},p=[{value:"Git \u534f\u8bae",id:"git-\u534f\u8bae",level:2},{value:"\u672c\u5730\u534f\u8bae",id:"\u672c\u5730\u534f\u8bae",level:3},{value:"HTTP \u534f\u8bae",id:"http-\u534f\u8bae",level:3},{value:"\u667a\u80fd HTTP \u534f\u8bae",id:"\u667a\u80fd-http-\u534f\u8bae",level:4},{value:"\u54d1\uff08Dumb\uff09 HTTP \u534f\u8bae",id:"\u54d1dumb-http-\u534f\u8bae",level:4},{value:"SSH \u534f\u8bae",id:"ssh-\u534f\u8bae",level:3},{value:"Git \u534f\u8bae",id:"git-\u534f\u8bae-1",level:3},{value:"\u7b2c\u4e09\u65b9\u6258\u7ba1",id:"\u7b2c\u4e09\u65b9\u6258\u7ba1",level:2}],c={toc:p},S="wrapper";function d(t){let{components:e,...l}=t;return(0,n.kt)(S,(0,r.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u4f60\u5e94\u8be5\u5df2\u7ecf\u6709\u529e\u6cd5\u4f7f\u7528 Git \u6765\u5b8c\u6210\u65e5\u5e38\u5de5\u4f5c\u3002 \u7136\u800c\uff0c\u4e3a\u4e86\u4f7f\u7528 Git \u534f\u4f5c\u529f\u80fd\uff0c\u4f60\u8fd8\u9700\u8981\u6709\u8fdc\u7a0b\u7684 Git \u4ed3\u5e93\u3002 \u5c3d\u7ba1\u5728\u6280\u672f\u4e0a\u4f60\u53ef\u4ee5\u4ece\u4e2a\u4eba\u4ed3\u5e93\u8fdb\u884c\u63a8\u9001\uff08push\uff09\u548c\u62c9\u53d6\uff08pull\uff09\u6765\u4fee\u6539\u5185\u5bb9\uff0c\u4f46\u4e0d\u9f13\u52b1\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0c\u56e0\u4e3a\u4e00\u4e0d\u7559\u5fc3\u5c31\u5f88\u5bb9\u6613\u5f04\u6df7\u5176\u4ed6\u4eba\u7684\u8fdb\u5ea6\u3002 \u6b64\u5916\uff0c\u4f60\u5e0c\u671b\u4f60\u7684\u5408\u4f5c\u8005\u4eec\u5373\u4f7f\u5728\u4f60\u7684\u7535\u8111\u672a\u8054\u673a\u65f6\u4ea6\u80fd\u5b58\u53d6\u4ed3\u5e93 \u2014 \u62e5\u6709\u4e00\u4e2a\u66f4\u53ef\u9760\u7684\u516c\u7528\u4ed3\u5e93\u5341\u5206\u6709\u7528\u3002 \u56e0\u6b64\uff0c\u4e0e\u4ed6\u4eba\u5408\u4f5c\u7684\u6700\u4f73\u65b9\u6cd5\u5373\u662f\u5efa\u7acb\u4e00\u4e2a\u4f60\u4e0e\u5408\u4f5c\u8005\u4eec\u90fd\u6709\u6743\u5229\u8bbf\u95ee\uff0c\u4e14\u53ef\u4ece\u90a3\u91cc\u63a8\u9001\u548c\u62c9\u53d6\u8d44\u6599\u7684\u5171\u7528\u4ed3\u5e93\u3002"),(0,n.kt)("p",null,"\u67b6\u8bbe\u4e00\u53f0 Git \u670d\u52a1\u5668\u5e76\u4e0d\u96be\u3002\u5982\u679c\u4f60\u4e0d\u4ecb\u610f\u6258\u7ba1\u4f60\u7684\u4ee3\u7801\u5728\u5176\u4ed6\u4eba\u7684\u670d\u52a1\u5668\uff0c\u4e14\u4e0d\u60f3\u7ecf\u5386\u8bbe\u7f6e\u4e0e\u7ef4\u62a4\u81ea\u5df1\u670d\u52a1\u5668\u7684\u9ebb\u70e6\uff0c\u53ef\u4ee5\u8bd5\u8bd5\u7b2c\u4e09\u65b9\u4ed3\u5e93\u6258\u7ba1\u670d\u52a1\u3002"),(0,n.kt)("p",null,"\u4e00\u4e2a\u8fdc\u7a0b\u4ed3\u5e93\u901a\u5e38\u53ea\u662f\u4e00\u4e2a\u88f8\u4ed3\u5e93\uff08bare repository\uff09\u2014\u2014\u5373\u4e00\u4e2a\u6ca1\u6709\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u7684\u4ed3\u5e93\u3002 \u56e0\u4e3a\u8be5\u4ed3\u5e93\u4ec5\u4ec5\n\u4f5c\u4e3a\u5408\u4f5c\u5a92\u4ecb\uff0c\u4e0d\u9700\u8981\u4ece\u78c1\u76d8\u68c0\u67e5\u5feb\u7167\uff1b\u5b58\u653e\u7684\u53ea\u6709 Git \u7684\u8d44\u6599\u3002 \u7b80\u5355\u7684\u8bf4\uff0c\u88f8\u4ed3\u5e93\u5c31\u662f\u4f60\u5de5\u7a0b\u76ee\u5f55\u5185\u7684 .git\n\u5b50\u76ee\u5f55\u5185\u5bb9\uff0c\u4e0d\u5305\u542b\u5176\u4ed6\u8d44\u6599\u3002"),(0,n.kt)("h2",{id:"git-\u534f\u8bae"},"Git \u534f\u8bae"),(0,n.kt)("p",null,"Git \u53ef\u4ee5\u4f7f\u7528\u56db\u79cd\u4e0d\u540c\u7684\u534f\u8bae\u6765\u4f20\u8f93\u8d44\u6599\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u534f\u8bae\uff08Local\uff09"),(0,n.kt)("li",{parentName:"ul"},"HTTP \u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"SSH\uff08Secure Shell\uff09\u534f\u8bae"),(0,n.kt)("li",{parentName:"ul"},"Git\u534f\u8bae")),(0,n.kt)("h3",{id:"\u672c\u5730\u534f\u8bae"},"\u672c\u5730\u534f\u8bae"),(0,n.kt)("p",null,"\u6700\u57fa\u672c\u7684\u5c31\u662f \u672c\u5730\u534f\u8bae\uff08Local protocol\uff09\uff0c\u5176\u4e2d\u7684\u8fdc\u7a0b\u7248\u672c\u5e93\u5c31\u662f\u540c\u4e00\u4e3b\u673a\u4e0a\u7684\u53e6\u4e00\u4e2a\u76ee\u5f55\u3002 \u8fd9\u5e38\u89c1\u4e8e\u56e2\u961f\u6bcf\u4e00\u4e2a\u6210\u5458\u90fd\u5bf9\u4e00\u4e2a\u5171\u4eab\u7684\u6587\u4ef6\u7cfb\u7edf\uff08\u4f8b\u5982\u4e00\u4e2a\u6302\u8f7d\u7684 NFS\uff09\u62e5\u6709\u8bbf\u95ee\u6743\uff0c\u6216\u8005\u6bd4\u8f83\u5c11\u89c1\u7684\u591a\u4eba\u5171\u7528\u540c\u4e00\u53f0\u7535\u8111\u7684\u60c5\u51b5\u3002 \u540e\u8005\u5e76\u4e0d\u7406\u60f3\uff0c\u56e0\u4e3a\u4f60\u7684\u6240\u6709\u4ee3\u7801\u7248\u672c\u5e93\u5982\u679c\u957f\u5b58\u4e8e\u540c\u4e00\u53f0\u7535\u8111\uff0c\u66f4\u53ef\u80fd\u53d1\u751f\u707e\u96be\u6027\u7684\u635f\u5931\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f18\u70b9")),(0,n.kt)("p",null,"\u57fa\u4e8e\u6587\u4ef6\u7cfb\u7edf\u7684\u7248\u672c\u5e93\u7684\u4f18\u70b9\u662f\u7b80\u5355\uff0c\u5e76\u4e14\u76f4\u63a5\u4f7f\u7528\u4e86\u73b0\u6709\u7684\u6587\u4ef6\u6743\u9650\u548c\u7f51\u7edc\u8bbf\u95ee\u6743\u9650\u3002 \u5982\u679c\u4f60\u7684\u56e2\u961f\u5df2\u7ecf\u6709\u5171\u4eab\u6587\u4ef6\u7cfb\u7edf\uff0c\u5efa\u7acb\u7248\u672c\u5e93\u4f1a\u5341\u5206\u5bb9\u6613\u3002 \u53ea\u9700\u8981\u50cf\u8bbe\u7f6e\u5176\u4ed6\u5171\u4eab\u76ee\u5f55\u4e00\u6837\uff0c\u628a\u4e00\u4e2a\u88f8\u7248\u672c\u5e93\u7684\u526f\u672c\u653e\u5230\u5927\u5bb6\u90fd\u53ef\u4ee5\u8bbf\u95ee\u7684\u8def\u5f84\uff0c\u5e76\u8bbe\u7f6e\u597d\u8bfb/\u5199\u7684\u6743\u9650\uff0c\u5c31\u53ef\u4ee5\u4e86\uff0c \u6211\u4eec\u4f1a\u5728\u5728\u670d\u52a1\u5668\u4e0a\u642d\u5efa Git \u8ba8\u8bba\u5982\u4f55\u5bfc\u51fa\u4e00\u4e2a\u88f8\u7248\u672c\u5e93\u3002\u8fd9\u4e5f\u662f\u5feb\u901f\u4ece\u522b\u4eba\u7684\u5de5\u4f5c\u76ee\u5f55\u4e2d\u62c9\u53d6\u66f4\u65b0\u7684\u65b9\u6cd5\u3002 \u5982\u679c\u4f60\u548c\u522b\u4eba\u4e00\u8d77\u5408\u4f5c\u4e00\u4e2a\u9879\u76ee\uff0c\u4ed6\u60f3\u8ba9\u4f60\u4ece\u7248\u672c\u5e93\u4e2d\u62c9\u53d6\u66f4\u65b0\u65f6\uff0c\u8fd0\u884c\u7c7b\u4f3c git pull /home/john/project \u7684\u547d\u4ee4\u6bd4\u63a8\u9001\u5230\u670d\u52a1\u5668\u518d\u6293\u53d6\u56de\u6765\u7b80\u5355\u591a\u4e86\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7f3a\u70b9")),(0,n.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u7684\u7f3a\u70b9\u662f\uff0c\u901a\u5e38\u5171\u4eab\u6587\u4ef6\u7cfb\u7edf\u6bd4\u8f83\u96be\u914d\u7f6e\uff0c\u5e76\u4e14\u6bd4\u8d77\u57fa\u672c\u7684\u7f51\u7edc\u8fde\u63a5\u8bbf\u95ee\uff0c\u8fd9\u4e0d\u65b9\u4fbf\u4ece\u591a\u4e2a\u4f4d\u7f6e\u8bbf\u95ee\u3002\u5982\u679c\u4f60\u60f3\u4ece\u5bb6\u91cc\u63a8\u9001\u5185\u5bb9\uff0c\u5fc5\u987b\u5148\u6302\u8f7d\u4e00\u4e2a\u8fdc\u7a0b\u78c1\u76d8\uff0c\u76f8\u6bd4\u7f51\u7edc\u8fde\u63a5\u7684\u8bbf\u95ee\u65b9\u5f0f\uff0c\u914d\u7f6e\u4e0d\u65b9\u4fbf\uff0c\u901f\u5ea6\u4e5f\u6162\u3002\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u7c7b\u4f3c\u4e8e\u5171\u4eab\u6302\u8f7d\u7684\u6587\u4ef6\u7cfb\u7edf\u65f6\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4e0d\u4e00\u5b9a\u662f\u6700\u5feb\u7684\u3002 \u8bbf\u95ee\u672c\u5730\u7248\u672c\u5e93\u7684\u901f\u5ea6\u4e0e\u4f60\u8bbf\u95ee\u6570\u636e\u7684\u901f\u5ea6\u662f\u4e00\u6837\u7684\u3002 \u5728\u540c\u4e00\u4e2a\u670d\u52a1\u5668\u4e0a\uff0c\u5982\u679c\u5141\u8bb8 Git \u8bbf\u95ee\u672c\u5730\u786c\u76d8\uff0c\u4e00\u822c\u7684\u901a\u8fc7 NFS \u8bbf\u95ee\u7248\u672c\u5e93\u8981\u6bd4\u901a\u8fc7 SSH \u8bbf\u95ee\u6162\u3002\u6700\u7ec8\uff0c\u8fd9\u4e2a\u534f\u8bae\u5e76\u4e0d\u4fdd\u62a4\u4ed3\u5e93\u907f\u514d\u610f\u5916\u7684\u635f\u574f\u3002 \u6bcf\u4e00\u4e2a\u7528\u6237\u90fd\u6709\u201c\u8fdc\u7a0b\u201d\u76ee\u5f55\u7684\u5b8c\u6574 shell \u6743\u9650\uff0c\u6ca1\u6709\u65b9\u6cd5\u53ef\u4ee5\u963b\u6b62\u4ed6\u4eec\u4fee\u6539\u6216\u5220\u9664 Git \u5185\u90e8\u6587\u4ef6\u548c\u635f\u574f\u4ed3\u5e93\u3002"),(0,n.kt)("h3",{id:"http-\u534f\u8bae"},"HTTP \u534f\u8bae"),(0,n.kt)("p",null,"Git \u901a\u8fc7 HTTP \u901a\u4fe1\u6709\u4e24\u79cd\u6a21\u5f0f\uff1a",(0,n.kt)("strong",{parentName:"p"},"\u667a\u80fd HTTP \u534f\u8bae\u3001\u54d1\uff08Dumb\uff09 HTTP \u534f\u8bae\u3002")),(0,n.kt)("h4",{id:"\u667a\u80fd-http-\u534f\u8bae"},"\u667a\u80fd HTTP \u534f\u8bae"),(0,n.kt)("p",null,"\u667a\u80fd HTTP \u7684\u8fd0\u884c\u65b9\u5f0f\u548c SSH \u53ca Git \u534f\u8bae\u7c7b\u4f3c\uff0c\u53ea\u662f\u8fd0\u884c\u5728\u6807\u51c6\u7684 HTTP/S \u7aef\u53e3\u4e0a\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd HTTP \u9a8c\u8bc1\u673a\u5236\uff0c \u8fd9\u610f\u5473\u7740\u4f7f\u7528\u8d77\u6765\u4f1a\u6bd4 SSH \u534f\u8bae\u7b80\u5355\u7684\u591a\uff0c\u6bd4\u5982\u53ef\u4ee5\u4f7f\u7528 HTTP \u534f\u8bae\u7684\u7528\u6237\u540d/\u5bc6\u7801\u6388\u6743\uff0c\u514d\u53bb\u8bbe\u7f6e SSH \u516c\u94a5\u3002"),(0,n.kt)("h4",{id:"\u54d1dumb-http-\u534f\u8bae"},"\u54d1\uff08Dumb\uff09 HTTP \u534f\u8bae"),(0,n.kt)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u6ca1\u6709\u63d0\u4f9b\u667a\u80fd HTTP \u534f\u8bae\u7684\u670d\u52a1\uff0cGit \u5ba2\u6237\u7aef\u4f1a\u5c1d\u8bd5\u4f7f\u7528\u66f4\u7b80\u5355\u7684\u201c\u54d1\u201d HTTP \u534f\u8bae\u3002 \u54d1 HTTP \u534f\u8bae\u91cc web \u670d\u52a1\u5668\u4ec5\u628a\u88f8\u7248\u672c\u5e93\u5f53\u4f5c\u666e\u901a\u6587\u4ef6\u6765\u5bf9\u5f85\uff0c\u63d0\u4f9b\u6587\u4ef6\u670d\u52a1\u3002 \u54d1 HTTP \u534f\u8bae\u7684\u4f18\u7f8e\u4e4b\u5904\u5728\u4e8e\u8bbe\u7f6e\u8d77\u6765\u7b80\u5355\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f18\u70b9")),(0,n.kt)("p",null,"\u6211\u4eec\u5c06\u53ea\u5173\u6ce8\u667a\u80fd HTTP \u534f\u8bae\u7684\u4f18\u70b9\u3002\u4e0d\u540c\u7684\u8bbf\u95ee\u65b9\u5f0f\u53ea\u9700\u8981\u4e00\u4e2a URL \u4ee5\u53ca\u670d\u52a1\u5668\u53ea\u5728\u9700\u8981\u6388\u6743\u65f6\u63d0\u793a\u8f93\u5165\u6388\u6743\u4fe1\u606f\uff0c\u8fd9\u4e24\u4e2a\u7b80\u4fbf\u6027\u8ba9\u7ec8\u7aef\u7528\u6237\u4f7f\u7528 Git \u53d8\u5f97\u975e\u5e38\u7b80\u5355\u3002 \u76f8\u6bd4 SSH \u534f\u8bae\uff0c\u53ef\u4ee5\u4f7f\u7528\u7528\u6237\u540d\uff0f\u5bc6\u7801\u6388\u6743\u662f\u4e00\u4e2a\u5f88\u5927\u7684\u4f18\u52bf\uff0c\u8fd9\u6837\u7528\u6237\u5c31\u4e0d\u5fc5\u987b\u5728\u4f7f\u7528 Git \u4e4b\u524d\u5148\u5728\u672c\u5730\u751f\u6210 SSH \u5bc6\u94a5\u5bf9\u518d\u628a\u516c\u94a5\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002 \u5bf9\u975e\u8d44\u6df1\u7684\u4f7f\u7528\u8005\uff0c\u6216\u8005\u7cfb\u7edf\u4e0a\u7f3a\u5c11 SSH \u76f8\u5173\u7a0b\u5e8f\u7684\u4f7f\u7528\u8005\uff0cHTTP \u534f\u8bae\u7684\u53ef\u7528\u6027\u662f\u4e3b\u8981\u7684\u4f18\u52bf\u3002 \u4e0e SSH \u534f\u8bae\u7c7b\u4f3c\uff0cHTTP \u534f\u8bae\u4e5f\u975e\u5e38\u5feb\u548c\u9ad8\u6548\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728 HTTPS \u534f\u8bae\u4e0a\u63d0\u4f9b\u53ea\u8bfb\u7248\u672c\u5e93\u7684\u670d\u52a1\uff0c\u5982\u6b64\u4f60\u5728\u4f20\u8f93\u6570\u636e\u7684\u65f6\u5019\u5c31\u53ef\u4ee5\u52a0\u5bc6\u6570\u636e\uff1b\u6216\u8005\uff0c\u4f60\u751a\u81f3\u53ef\u4ee5\u8ba9\u5ba2\u6237\u7aef\u4f7f\u7528\u6307\u5b9a\u7684 SSL \u8bc1\u4e66\u3002\u53e6\u4e00\u4e2a\u597d\u5904\u662f HTTPS \u534f\u8bae\u88ab\u5e7f\u6cdb\u4f7f\u7528\uff0c\u4e00\u822c\u7684\u4f01\u4e1a\u9632\u706b\u5899\u90fd\u4f1a\u5141\u8bb8\u8fd9\u4e9b\u7aef\u53e3\u7684\u6570\u636e\u901a\u8fc7\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7f3a\u70b9")),(0,n.kt)("p",null,"\u5728\u4e00\u4e9b\u670d\u52a1\u5668\u4e0a\uff0c\u67b6\u8bbe HTTPS \u534f\u8bae\u7684\u670d\u52a1\u7aef\u4f1a\u6bd4 SSH \u534f\u8bae\u7684\u68d8\u624b\u4e00\u4e9b\u3002 \u9664\u4e86\u8fd9\u4e00\u70b9\uff0c\u7528\u5176\u4ed6\u534f\u8bae\u63d0\u4f9b Git \u670d\u52a1\u4e0e\u667a\u80fd HTTP \u534f\u8bae\u76f8\u6bd4\u5c31\u51e0\u4e4e\u6ca1\u6709\u4f18\u52bf\u4e86\u3002\u5982\u679c\u4f60\u5728 HTTP \u4e0a\u4f7f\u7528\u9700\u6388\u6743\u7684\u63a8\u9001\uff0c\u7ba1\u7406\u51ed\u8bc1\u4f1a\u6bd4\u4f7f\u7528 SSH \u5bc6\u94a5\u8ba4\u8bc1\u9ebb\u70e6\u4e00\u4e9b\u3002 \u7136\u800c\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u51ed\u8bc1\u5b58\u50a8\u5de5\u5177\uff0c\u6bd4\u5982 macOS \u7684 Keychain \u6216\u8005 Windows \u7684\u51ed\u8bc1\u7ba1\u7406\u5668\u3002 \u53c2\u8003 \u51ed\u8bc1\u5b58\u50a8 \u5982\u4f55\u5b89\u5168\u5730\u4fdd\u5b58 HTTP \u5bc6\u7801\u3002"),(0,n.kt)("h3",{id:"ssh-\u534f\u8bae"},"SSH \u534f\u8bae"),(0,n.kt)("p",null,"\u67b6\u8bbe Git \u670d\u52a1\u5668\u65f6\u5e38\u7528 SSH \u534f\u8bae\u4f5c\u4e3a\u4f20\u8f93\u534f\u8bae\u3002 \u56e0\u4e3a\u5927\u591a\u6570\u73af\u5883\u4e0b\u670d\u52a1\u5668\u5df2\u7ecf\u652f\u6301\u901a\u8fc7 SSH \u8bbf\u95ee \u2014\u2014 \u5373\u4f7f\u6ca1\u6709\u4e5f\u5f88\u5bb9\u6613\u67b6\u8bbe\u3002 SSH \u534f\u8bae\u4e5f\u662f\u4e00\u4e2a\u9a8c\u8bc1\u6388\u6743\u7684\u7f51\u7edc\u534f\u8bae\uff1b\u5e76\u4e14\uff0c\u56e0\u4e3a\u5176\u666e\u904d\u6027\uff0c\u67b6\u8bbe\u548c\u4f7f\u7528\u90fd\u5f88\u5bb9\u6613\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f18\u70b9")),(0,n.kt)("p",null,"\u7528 SSH \u534f\u8bae\u7684\u4f18\u52bf\u6709\u5f88\u591a\u3002 \u9996\u5148\uff0cSSH \u67b6\u8bbe\u76f8\u5bf9\u7b80\u5355 \u2014\u2014 SSH \u5b88\u62a4\u8fdb\u7a0b\u5f88\u5e38\u89c1\uff0c\u591a\u6570\u7ba1\u7406\u5458\u90fd\u6709\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5e76\n\u4e14\u591a\u6570\u64cd\u4f5c\u7cfb\u7edf\u90fd\u5305\u542b\u4e86\u5b83\u53ca\u76f8\u5173\u7684\u7ba1\u7406\u5de5\u5177\u3002 \u5176\u6b21\uff0c\u901a\u8fc7 SSH \u8bbf\u95ee\u662f\u5b89\u5168\u7684 \u2014\u2014 \u6240\u6709\u4f20\u8f93\u6570\u636e\u90fd\u8981\u7ecf\u8fc7\u6388\u6743\u548c\u52a0\u5bc6\u3002 \u6700\u540e\uff0c\u4e0e HTTPS \u534f\u8bae\u3001Git \u534f\u8bae\u53ca\u672c\u5730\u534f\u8bae\u4e00\u6837\uff0cSSH \u534f\u8bae\u5f88\u9ad8\u6548\uff0c\u5728\u4f20\u8f93\u524d\u4e5f\u4f1a\u5c3d\u91cf\u538b\u7f29\u6570\u636e\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\nSSH \u534f\u8bae\u7684\u7f3a\u70b9\u5728\u4e8e\u5b83\u4e0d\u652f\u6301\u533f\u540d\u8bbf\u95ee Git \u4ed3\u5e93\u3002 \u5982\u679c\u4f60\u4f7f\u7528 SSH\uff0c\u90a3\u4e48\u5373\u4fbf\u53ea\u662f\u8bfb\u53d6\u6570\u636e\uff0c\u4f7f\u7528\u8005\u4e5f \u5fc5\u987b \u901a\n\u8fc7 SSH \u8bbf\u95ee\u4f60\u7684\u4e3b\u673a\uff0c \u8fd9\u4f7f\u5f97 SSH \u534f\u8bae\u4e0d\u5229\u4e8e\u5f00\u6e90\u7684\u9879\u76ee\uff0c\u6bd5\u7adf\u4eba\u4eec\u53ef\u80fd\u53ea\u60f3\u628a\u4f60\u7684\u4ed3\u5e93\u514b\u9686\u4e0b\u6765\u67e5\u770b\u3002 \u5982\u679c\u4f60\u53ea\u5728\u516c\u53f8\u7f51\u7edc\u4f7f\u7528\uff0cSSH \u534f\u8bae\u53ef\u80fd\u662f\u4f60\u552f\u4e00\u8981\u7528\u5230\u7684\u534f\u8bae\u3002 \u5982\u679c\u4f60\u8981\u540c\u65f6\u63d0\u4f9b\u533f\u540d\u53ea\u8bfb\u8bbf\u95ee\u548c SSH \u534f\u8bae\uff0c\u90a3\u4e48\u4f60\u9664\u4e86\u4e3a\u81ea\u5df1\u63a8\u9001\u67b6\u8bbe SSH \u670d\u52a1\u4ee5\u5916\uff0c \u8fd8\u5f97\u67b6\u8bbe\u4e00\u4e2a\u53ef\u4ee5\u8ba9\u5176\u4ed6\u4eba\u8bbf\u95ee\u7684\u670d\u52a1\u3002")),(0,n.kt)("h3",{id:"git-\u534f\u8bae-1"},"Git \u534f\u8bae"),(0,n.kt)("p",null,"\u8fd9\u662f\u5305\u542b\u5728 Git \u91cc\u7684\u4e00\u4e2a\u7279\u6b8a\u7684\u5b88\u62a4\u8fdb\u7a0b\uff1b\u5b83\u76d1\u542c\u5728\u4e00\u4e2a\u7279\u5b9a\u7684\u7aef\u53e3\uff089418\uff09\uff0c\u7c7b\u4f3c\u4e8e SSH \u670d\u52a1\uff0c\u4f46\u662f\u8bbf\u95ee\u65e0\u9700\u4efb\u4f55\u6388\u6743\u3002 \u8981\u8ba9\u7248\u672c\u5e93\u652f\u6301 Git \u534f\u8bae\uff0c\u9700\u8981\u5148\u521b\u5efa\u4e00\u4e2a git-daemon-export-ok \u6587\u4ef6 \u2014\u2014 \u5b83\u662f Git \u534f\u8bae\u5b88\u62a4\u8fdb\u7a0b\u4e3a\u8fd9\u4e2a\u7248\u672c\u5e93\u63d0\u4f9b\u670d\u52a1\u7684\u5fc5\u8981\u6761\u4ef6 \u2014\u2014 \u4f46\u662f\u9664\u6b64\u4e4b\u5916\u6ca1\u6709\u4efb\u4f55\u5b89\u5168\u63aa\u65bd\u3002 \u8981\u4e48\u8c01\u90fd\u53ef\u4ee5\u514b\u9686\u8fd9\u4e2a\u7248\u672c\u5e93\uff0c\u8981\u4e48\u8c01\u4e5f\u4e0d\u80fd\u3002 \u8fd9\u610f\u5473\u7740\uff0c\u901a\u5e38\u4e0d\u80fd\u901a\u8fc7 Git \u534f\u8bae\u63a8\u9001\u3002 \u7531\u4e8e\u6ca1\u6709\u6388\u6743\u673a\u5236\uff0c\u4e00\u65e6\u4f60\u5f00\u653e\u63a8\u9001\u64cd\u4f5c\uff0c\u610f\u5473\u7740\u7f51\u7edc\u4e0a\u77e5\u9053\u8fd9\u4e2a\u9879\u76ee URL \u7684\u4eba\u90fd\u53ef\u4ee5\u5411\u9879\u76ee\u63a8\u9001\u6570\u636e\u3002 \u4e0d\u7528\u8bf4\uff0c\u6781\u5c11\u4f1a\u6709\u4eba\u8fd9\u4e48\u505a\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f18\u70b9")),(0,n.kt)("p",null,"\u76ee\u524d\uff0cGit \u534f\u8bae\u662f Git \u4f7f\u7528\u7684\u7f51\u7edc\u4f20\u8f93\u534f\u8bae\u91cc\u6700\u5feb\u7684\u3002 \u5982\u679c\u4f60\u7684\u9879\u76ee\u6709\u5f88\u5927\u7684\u8bbf\u95ee\u91cf\uff0c\u6216\u8005\u4f60\u7684\u9879\u76ee\u5f88\u5e9e\u5927\u5e76\u4e14\u4e0d\u9700\u8981\u4e3a\u5199\u8fdb\u884c\u7528\u6237\u6388\u6743\uff0c\u67b6\u8bbe Git \u5b88\u62a4\u8fdb\u7a0b\u6765\u63d0\u4f9b\u670d\u52a1\u662f\u4e0d\u9519\u7684\u9009\u62e9\u3002 \u5b83\u4f7f\u7528\u4e0e SSH \u76f8\u540c\u7684\u6570\u636e\u4f20\u8f93\u673a\u5236\uff0c\u4f46\u662f\u7701\u53bb\u4e86\u52a0\u5bc6\u548c\u6388\u6743\u7684\u5f00\u9500\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7f3a\u70b9")),(0,n.kt)("p",null,"Git \u534f\u8bae\u7f3a\u70b9\u662f\u7f3a\u4e4f\u6388\u6743\u673a\u5236\u3002 \u628a Git \u534f\u8bae\u4f5c\u4e3a\u8bbf\u95ee\u9879\u76ee\u7248\u672c\u5e93\u7684\u552f\u4e00\u624b\u6bb5\u662f\u4e0d\u53ef\u53d6\u7684\u3002 \u4e00\u822c\u7684\u505a\u6cd5\u91cc\uff0c\u4f1a\u540c\u65f6\u63d0\u4f9b SSH \u6216\u8005 HTTPS \u534f\u8bae\u7684\u8bbf\u95ee\u670d\u52a1\uff0c\u53ea\u8ba9\u5c11\u6570\u51e0\u4e2a\u5f00\u53d1\u8005\u6709\u63a8\u9001\uff08\u5199\uff09\u6743\u9650\uff0c\u5176\u4ed6\u4eba\u901a\u8fc7 git:// \u8bbf\u95ee\u53ea\u6709\u8bfb\u6743\u9650\u3002 Git \u534f\u8bae\u4e5f\u8bb8\u4e5f\u662f\u6700\u96be\u67b6\u8bbe\u7684\u3002 \u5b83\u8981\u6c42\u6709\u81ea\u5df1\u7684\u5b88\u62a4\u8fdb\u7a0b\uff0c\u8fd9\u5c31\u8981\u914d\u7f6e xinetd\u3001systemd \u6216\u8005\u5176\u4ed6\u7684\u7a0b\u5e8f\uff0c\u8fd9\u4e9b\u5de5\u4f5c\u5e76\u4e0d\u7b80\u5355\u3002 \u5b83\u8fd8\u8981\u6c42\u9632\u706b\u5899\u5f00\u653e 9418 \u7aef\u53e3\uff0c\u4f46\u662f\u4f01\u4e1a\u9632\u706b\u5899\u4e00\u822c\u4e0d\u4f1a\u5f00\u653e\u8fd9\u4e2a\u975e\u6807\u51c6\u7aef\u53e3\u3002\u800c\u5927\u578b\u7684\u4f01\u4e1a\u9632\u706b\u5899\u901a\u5e38\u4f1a\u5c01\u9501\u8fd9\u4e2a\u7aef\u53e3\u3002"),(0,n.kt)("h2",{id:"\u7b2c\u4e09\u65b9\u6258\u7ba1"},"\u7b2c\u4e09\u65b9\u6258\u7ba1"),(0,n.kt)("p",null,"\u73b0\u5728\u5df2\u7ecf\u62e5\u6709\u4e86\u5f88\u591a\u66f4\u73b0\u4ee3\uff0c\u529f\u80fd\u66f4\u5168\u7684 Git \u670d\u52a1\u5668\uff0cGitLab \u4fbf\u662f\u5176\u4e2d\u6700\u51fa\u540d\u7684\u4e00\u4e2a\uff0c\u540c\u65f6 GitHub\u3001Gitte \u90fd\u662f\u5f88\u68d2\u7684\u5f00\u6e90\u793e\u533a\u3002"))}d.isMDXComponent=!0}}]);