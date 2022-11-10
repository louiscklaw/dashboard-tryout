"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),o=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(n),m=l,d=c["".concat(i,".").concat(m)]||c[m]||k[m]||r;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,s[1]=p;for(var o=2;o<r;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={id:"\u8bc1\u4e66\u767b\u5f55",title:"\u8bc1\u4e66\u767b\u5f55",sidebar_position:6,data:"2022\u5e744\u670813\u65e5"},s=void 0,p={unversionedId:"SSH/\u8bc1\u4e66\u767b\u5f55",id:"SSH/\u8bc1\u4e66\u767b\u5f55",title:"\u8bc1\u4e66\u767b\u5f55",description:"SSH \u662f\u670d\u52a1\u5668\u767b\u5f55\u5de5\u5177\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u90fd\u91c7\u7528\u5bc6\u7801\u767b\u5f55\u6216\u5bc6\u94a5\u767b\u5f55\u3002",source:"@site/example/safe/SSH/\u8bc1\u4e66\u767b\u5f55.md",sourceDirName:"SSH",slug:"/SSH/\u8bc1\u4e66\u767b\u5f55",permalink:"/dashboard-tryout/safe/SSH/\u8bc1\u4e66\u767b\u5f55",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/safe/SSH/\u8bc1\u4e66\u767b\u5f55.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1668104338,formattedLastUpdatedAt:"Nov 10, 2022",sidebarPosition:6,frontMatter:{id:"\u8bc1\u4e66\u767b\u5f55",title:"\u8bc1\u4e66\u767b\u5f55",sidebar_position:6,data:"2022\u5e744\u670813\u65e5"},sidebar:"tutorialSidebar",previous:{title:"\u7aef\u53e3\u8f6c\u53d1",permalink:"/dashboard-tryout/safe/SSH/\u7aef\u53e3\u8f6c\u53d1"},next:{title:"scp \u547d\u4ee4",permalink:"/dashboard-tryout/safe/SSH/scp \u547d\u4ee4"}},i={},o=[{value:"\u975e\u8bc1\u4e66\u767b\u5f55\u7684\u7f3a\u70b9",id:"\u975e\u8bc1\u4e66\u767b\u5f55\u7684\u7f3a\u70b9",level:2},{value:"\u8bc1\u4e66\u767b\u5f55\u662f\u4ec0\u4e48\uff1f",id:"\u8bc1\u4e66\u767b\u5f55\u662f\u4ec0\u4e48",level:2},{value:"\u8bc1\u4e66\u767b\u5f55\u7684\u6d41\u7a0b",id:"\u8bc1\u4e66\u767b\u5f55\u7684\u6d41\u7a0b",level:2},{value:"\u751f\u6210 CA \u7684\u5bc6\u94a5",id:"\u751f\u6210-ca-\u7684\u5bc6\u94a5",level:2},{value:"CA \u7b7e\u53d1\u670d\u52a1\u5668\u8bc1\u4e66",id:"ca-\u7b7e\u53d1\u670d\u52a1\u5668\u8bc1\u4e66",level:2},{value:"CA \u7b7e\u53d1\u7528\u6237\u8bc1\u4e66",id:"ca-\u7b7e\u53d1\u7528\u6237\u8bc1\u4e66",level:2},{value:"\u670d\u52a1\u5668\u5b89\u88c5\u8bc1\u4e66",id:"\u670d\u52a1\u5668\u5b89\u88c5\u8bc1\u4e66",level:2},{value:"\u670d\u52a1\u5668\u5b89\u88c5 CA \u516c\u94a5",id:"\u670d\u52a1\u5668\u5b89\u88c5-ca-\u516c\u94a5",level:2},{value:"\u5ba2\u6237\u7aef\u5b89\u88c5\u8bc1\u4e66",id:"\u5ba2\u6237\u7aef\u5b89\u88c5\u8bc1\u4e66",level:2},{value:"\u5ba2\u6237\u7aef\u5b89\u88c5 CA \u516c\u94a5",id:"\u5ba2\u6237\u7aef\u5b89\u88c5-ca-\u516c\u94a5",level:2},{value:"\u5e9f\u9664\u8bc1\u4e66",id:"\u5e9f\u9664\u8bc1\u4e66",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],u={toc:o};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"SSH \u662f\u670d\u52a1\u5668\u767b\u5f55\u5de5\u5177\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u90fd\u91c7\u7528\u5bc6\u7801\u767b\u5f55\u6216\u5bc6\u94a5\u767b\u5f55\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0cSSH \u8fd8\u6709\u7b2c\u4e09\u79cd\u767b\u5f55\u65b9\u6cd5\uff0c\u90a3\u5c31\u662f\u8bc1\u4e66\u767b\u5f55\u3002\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5b83\u662f\u66f4\u5408\u7406\u3001\u66f4\u5b89\u5168\u7684\u767b\u5f55\u65b9\u6cd5\uff0c\u672c\u6587\u5c31\u4ecb\u7ecd\u8fd9\u79cd\u767b\u5f55\u65b9\u6cd5\u3002"),(0,l.kt)("h2",{id:"\u975e\u8bc1\u4e66\u767b\u5f55\u7684\u7f3a\u70b9"},"\u975e\u8bc1\u4e66\u767b\u5f55\u7684\u7f3a\u70b9"),(0,l.kt)("p",null,"\u5bc6\u7801\u767b\u5f55\u548c\u5bc6\u94a5\u767b\u5f55\uff0c\u90fd\u6709\u5404\u81ea\u7684\u7f3a\u70b9\u3002"),(0,l.kt)("p",null,"\u5bc6\u7801\u767b\u5f55\u9700\u8981\u8f93\u5165\u670d\u52a1\u5668\u5bc6\u7801\uff0c\u8fd9\u975e\u5e38\u9ebb\u70e6\uff0c\u4e5f\u4e0d\u5b89\u5168\uff0c\u5b58\u5728\u88ab\u66b4\u529b\u7834\u89e3\u7684\u98ce\u9669\u3002"),(0,l.kt)("p",null,"\u5bc6\u94a5\u767b\u5f55\u9700\u8981\u670d\u52a1\u5668\u4fdd\u5b58\u7528\u6237\u7684\u516c\u94a5\uff0c\u4e5f\u9700\u8981\u7528\u6237\u4fdd\u5b58\u670d\u52a1\u5668\u516c\u94a5\u7684\u6307\u7eb9\u3002\u8fd9\u5bf9\u4e8e\u591a\u7528\u6237\u3001\u591a\u670d\u52a1\u5668\u7684\u5927\u578b\u673a\u6784\u5f88\u4e0d\u65b9\u4fbf\uff0c\u5982\u679c\u6709\u5458\u5de5\u79bb\u804c\uff0c\u9700\u8981\u5c06\u4ed6\u7684\u516c\u94a5\u4ece\u6bcf\u53f0\u670d\u52a1\u5668\u5220\u9664\u3002"),(0,l.kt)("h2",{id:"\u8bc1\u4e66\u767b\u5f55\u662f\u4ec0\u4e48"},"\u8bc1\u4e66\u767b\u5f55\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u8bc1\u4e66\u767b\u5f55\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u4e0a\u9762\u7684\u7f3a\u70b9\u800c\u8bbe\u8ba1\u7684\u3002\u5b83\u5f15\u5165\u4e86\u4e00\u4e2a\u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff08Certificate Authority\uff0c\u7b80\u79f0 CA\uff09\uff0c\u5bf9\u4fe1\u4efb\u7684\u670d\u52a1\u5668\u9881\u53d1\u670d\u52a1\u5668\u8bc1\u4e66\uff0c\u5bf9\u4fe1\u4efb\u7684\u7528\u6237\u9881\u53d1\u7528\u6237\u8bc1\u4e66\u3002"),(0,l.kt)("p",null,"\u767b\u5f55\u65f6\uff0c\u7528\u6237\u548c\u670d\u52a1\u5668\u4e0d\u9700\u8981\u63d0\u524d\u77e5\u9053\u5f7c\u6b64\u7684\u516c\u94a5\uff0c\u53ea\u9700\u8981\u4ea4\u6362\u5404\u81ea\u7684\u8bc1\u4e66\uff0c\u9a8c\u8bc1\u662f\u5426\u53ef\u4fe1\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u8bc1\u4e66\u767b\u5f55\u7684\u4e3b\u8981\u4f18\u70b9\u6709\u4e24\u4e2a\uff1a\uff081\uff09\u7528\u6237\u548c\u670d\u52a1\u5668\u4e0d\u7528\u4ea4\u6362\u516c\u94a5\uff0c\u8fd9\u66f4\u5bb9\u6613\u7ba1\u7406\uff0c\u4e5f\u5177\u6709\u66f4\u597d\u7684\u53ef\u6269\u5c55\u6027\u3002\uff082\uff09\u8bc1\u4e66\u53ef\u4ee5\u8bbe\u7f6e\u5230\u671f\u65f6\u95f4\uff0c\u800c\u516c\u94a5\u6ca1\u6709\u5230\u671f\u65f6\u95f4\u3002\u9488\u5bf9\u4e0d\u540c\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u6709\u6548\u671f\u5f88\u77ed\u7684\u8bc1\u4e66\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8\u5b89\u5168\u6027\u3002"),(0,l.kt)("h2",{id:"\u8bc1\u4e66\u767b\u5f55\u7684\u6d41\u7a0b"},"\u8bc1\u4e66\u767b\u5f55\u7684\u6d41\u7a0b"),(0,l.kt)("p",null,"SSH \u8bc1\u4e66\u767b\u5f55\u4e4b\u524d\uff0c\u5982\u679c\u8fd8\u6ca1\u6709\u8bc1\u4e66\uff0c\u9700\u8981\u751f\u6210\u8bc1\u4e66\u3002\u5177\u4f53\u65b9\u6cd5\u662f\uff1a\uff081\uff09\u7528\u6237\u548c\u670d\u52a1\u5668\u90fd\u5c06\u81ea\u5df1\u7684\u516c\u94a5\uff0c\u53d1\u7ed9 CA\uff1b\uff082\uff09CA \u4f7f\u7528\u670d\u52a1\u5668\u516c\u94a5\uff0c\u751f\u6210\u670d\u52a1\u5668\u8bc1\u4e66\uff0c\u53d1\u7ed9\u670d\u52a1\u5668\uff1b\uff083\uff09CA \u4f7f\u7528\u7528\u6237\u7684\u516c\u94a5\uff0c\u751f\u6210\u7528\u6237\u8bc1\u4e66\uff0c\u53d1\u7ed9\u7528\u6237\u3002"),(0,l.kt)("p",null,"\u6709\u4e86\u8bc1\u4e66\u4ee5\u540e\uff0c\u7528\u6237\u5c31\u53ef\u4ee5\u767b\u5f55\u670d\u52a1\u5668\u4e86\u3002\u6574\u4e2a\u8fc7\u7a0b\u90fd\u662f SSH \u81ea\u52a8\u5904\u7406\uff0c\u7528\u6237\u65e0\u611f\u77e5\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b65\uff0c\u7528\u6237\u767b\u5f55\u670d\u52a1\u5668\u65f6\uff0cSSH \u81ea\u52a8\u5c06\u7528\u6237\u8bc1\u4e66\u53d1\u7ed9\u670d\u52a1\u5668\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff0c\u670d\u52a1\u5668\u68c0\u67e5\u7528\u6237\u8bc1\u4e66\u662f\u5426\u6709\u6548\uff0c\u4ee5\u53ca\u662f\u5426\u7531\u53ef\u4fe1\u7684 CA \u9881\u53d1\u3002\u8bc1\u5b9e\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u4fe1\u4efb\u7528\u6237\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e09\u6b65\uff0cSSH \u81ea\u52a8\u5c06\u670d\u52a1\u5668\u8bc1\u4e66\u53d1\u7ed9\u7528\u6237\u3002"),(0,l.kt)("p",null,"\u7b2c\u56db\u6b65\uff0c\u7528\u6237\u68c0\u67e5\u670d\u52a1\u5668\u8bc1\u4e66\u662f\u5426\u6709\u6548\uff0c\u4ee5\u53ca\u662f\u5426\u7531\u4fe1\u4efb\u7684 CA \u9881\u53d1\u3002\u8bc1\u5b9e\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u4fe1\u4efb\u670d\u52a1\u5668\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e94\u6b65\uff0c\u53cc\u65b9\u5efa\u7acb\u8fde\u63a5\uff0c\u670d\u52a1\u5668\u5141\u8bb8\u7528\u6237\u767b\u5f55\u3002"),(0,l.kt)("h2",{id:"\u751f\u6210-ca-\u7684\u5bc6\u94a5"},"\u751f\u6210 CA \u7684\u5bc6\u94a5"),(0,l.kt)("p",null,"\u8bc1\u4e66\u767b\u5f55\u7684\u524d\u63d0\u662f\uff0c\u5fc5\u987b\u6709\u4e00\u4e2a CA\uff0c\u800c CA \u672c\u8d28\u4e0a\u5c31\u662f\u4e00\u5bf9\u5bc6\u94a5\uff0c\u8ddf\u5176\u4ed6\u5bc6\u94a5\u6ca1\u6709\u4e0d\u540c\uff0cCA \u5c31\u7528\u8fd9\u5bf9\u5bc6\u94a5\u53bb\u7b7e\u53d1\u8bc1\u4e66\u3002"),(0,l.kt)("p",null,"\u867d\u7136 CA \u53ef\u4ee5\u7528\u540c\u4e00\u5bf9\u5bc6\u94a5\u7b7e\u53d1\u7528\u6237\u8bc1\u4e66\u548c\u670d\u52a1\u5668\u8bc1\u4e66\uff0c\u4f46\u662f\u51fa\u4e8e\u5b89\u5168\u6027\u548c\u7075\u6d3b\u6027\uff0c\u6700\u597d\u7528\u4e0d\u540c\u7684\u5bc6\u94a5\u5206\u522b\u7b7e\u53d1\u3002\u6240\u4ee5\uff0cCA \u81f3\u5c11\u9700\u8981\u4e24\u5bf9\u5bc6\u94a5\uff0c\u4e00\u5bf9\u662f\u7b7e\u53d1\u7528\u6237\u8bc1\u4e66\u7684\u5bc6\u94a5\uff0c\u5047\u8bbe\u53eb\u505a",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca"),"\uff0c\u53e6\u4e00\u5bf9\u662f\u7b7e\u53d1\u670d\u52a1\u5668\u8bc1\u4e66\u7684\u5bc6\u94a5\uff0c\u5047\u8bbe\u53eb\u505a",(0,l.kt)("inlineCode",{parentName:"p"},"host_ca"),"\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210 CA \u7b7e\u53d1\u7528\u6237\u8bc1\u4e66\u7684\u5bc6\u94a5\n$ ssh-keygen -t rsa -b 4096 -f ~/.ssh/user_ca -C user_ca\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"~/.ssh"),"\u76ee\u5f55\u751f\u6210\u4e00\u5bf9\u5bc6\u94a5\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca"),"\uff08\u79c1\u94a5\uff09\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca.pub"),"\uff08\u516c\u94a5\uff09\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u7684\u5404\u4e2a\u53c2\u6570\u542b\u4e49\u5982\u4e0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-t rsa"),"\uff1a\u6307\u5b9a\u5bc6\u94a5\u7b97\u6cd5 RSA\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-b 4096"),"\uff1a\u6307\u5b9a\u5bc6\u94a5\u7684\u4f4d\u6570\u662f4096\u4f4d\u3002\u5b89\u5168\u6027\u8981\u6c42\u4e0d\u9ad8\u7684\u573a\u5408\uff0c\u8fd9\u4e2a\u503c\u53ef\u4ee5\u5c0f\u4e00\u70b9\uff0c\u4f46\u662f\u4e0d\u5e94\u5c0f\u4e8e1024\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-f ~/.ssh/user_ca"),"\uff1a\u6307\u5b9a\u751f\u6210\u5bc6\u94a5\u7684\u4f4d\u7f6e\u548c\u6587\u4ef6\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-C user_ca"),"\uff1a\u6307\u5b9a\u5bc6\u94a5\u7684\u8bc6\u522b\u5b57\u7b26\u4e32\uff0c\u76f8\u5f53\u4e8e\u6ce8\u91ca\uff0c\u53ef\u4ee5\u968f\u610f\u8bbe\u7f6e\u3002")),(0,l.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"host_ca"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210 CA \u7b7e\u53d1\u670d\u52a1\u5668\u8bc1\u4e66\u7684\u5bc6\u94a5\n$ ssh-keygen -t rsa -b 4096 -f host_ca -C host_ca\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"~/.ssh"),"\u76ee\u5f55\u751f\u6210\u4e00\u5bf9\u5bc6\u94a5\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"host_ca"),"\uff08\u79c1\u94a5\uff09\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"host_ca.pub"),"\uff08\u516c\u94a5\uff09\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"~/.ssh"),"\u76ee\u5f55\u5e94\u8be5\u81f3\u5c11\u6709\u56db\u628a\u5bc6\u94a5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~/.ssh/user_ca")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~/.ssh/user_ca.pub")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~/.ssh/host_ca")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~/.ssh/host_ca.pub"))),(0,l.kt)("h2",{id:"ca-\u7b7e\u53d1\u670d\u52a1\u5668\u8bc1\u4e66"},"CA \u7b7e\u53d1\u670d\u52a1\u5668\u8bc1\u4e66"),(0,l.kt)("p",null,"\u6709\u4e86 CA \u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u7b7e\u53d1\u670d\u52a1\u5668\u8bc1\u4e66\u4e86\u3002"),(0,l.kt)("p",null,"\u7b7e\u53d1\u8bc1\u4e66\uff0c\u9664\u4e86 CA \u7684\u5bc6\u94a5\u4ee5\u5916\uff0c\u8fd8\u9700\u8981\u670d\u52a1\u5668\u7684\u516c\u94a5\u3002\u4e00\u822c\u6765\u8bf4\uff0cSSH \u670d\u52a1\u5668\uff08\u901a\u5e38\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"sshd"),"\uff09\u5b89\u88c5\u65f6\uff0c\u5df2\u7ecf\u751f\u6210\u5bc6\u94a5",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/ssh/ssh_host_rsa_key"),"\u4e86\u3002\u5982\u679c\u6ca1\u6709\u7684\u8bdd\uff0c\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u751f\u6210\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ssh-keygen -f /etc/ssh/ssh_host_rsa_key -b 4096 -t rsa\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4f1a\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/ssh"),"\u76ee\u5f55\uff0c\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"ssh_host_rsa_key"),"\uff08\u79c1\u94a5\uff09\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"ssh_host_rsa_key.pub"),"\uff08\u516c\u94a5\uff09\u3002\u7136\u540e\uff0c\u9700\u8981\u628a\u670d\u52a1\u5668\u516c\u94a5",(0,l.kt)("inlineCode",{parentName:"p"},"ssh_host_rsa_key.pub"),"\uff0c\u590d\u5236\u6216\u4e0a\u4f20\u5230 CA \u6240\u5728\u7684\u670d\u52a1\u5668\u3002"),(0,l.kt)("p",null,"\u4e0a\u4f20\u4ee5\u540e\uff0cCA \u5c31\u53ef\u4ee5\u4f7f\u7528\u5bc6\u94a5",(0,l.kt)("inlineCode",{parentName:"p"},"host_ca"),"\u4e3a\u670d\u52a1\u5668\u7684\u516c\u94a5",(0,l.kt)("inlineCode",{parentName:"p"},"ssh_host_rsa_key.pub"),"\u7b7e\u53d1\u670d\u52a1\u5668\u8bc1\u4e66\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -s host_ca -I host.example.com -h -n host.example.com -V +52w ssh_host_rsa_key.pub\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u751f\u6210\u670d\u52a1\u5668\u8bc1\u4e66",(0,l.kt)("inlineCode",{parentName:"p"},"ssh_host_rsa_key-cert.pub"),"\uff08\u670d\u52a1\u5668\u516c\u94a5\u540d\u5b57\u52a0\u540e\u7f00",(0,l.kt)("inlineCode",{parentName:"p"},"-cert"),"\uff09\u3002\u8fd9\u4e2a\u547d\u4ee4\u5404\u4e2a\u53c2\u6570\u7684\u542b\u4e49\u5982\u4e0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-s"),"\uff1a\u6307\u5b9a CA \u7b7e\u53d1\u8bc1\u4e66\u7684\u5bc6\u94a5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-I"),"\uff1a\u8eab\u4efd\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u968f\u4fbf\u8bbe\u7f6e\uff0c\u76f8\u5f53\u4e8e\u6ce8\u91ca\uff0c\u65b9\u4fbf\u533a\u5206\u8bc1\u4e66\uff0c\u5c06\u6765\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u5b57\u7b26\u4e32\u64a4\u9500\u8bc1\u4e66\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-h"),"\uff1a\u6307\u5b9a\u8be5\u8bc1\u4e66\u662f\u670d\u52a1\u5668\u8bc1\u4e66\uff0c\u800c\u4e0d\u662f\u7528\u6237\u8bc1\u4e66\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-n host.example.com"),"\uff1a\u6307\u5b9a\u670d\u52a1\u5668\u7684\u57df\u540d\uff0c\u8868\u793a\u8bc1\u4e66\u4ec5\u5bf9\u8be5\u57df\u540d\u6709\u6548\u3002\u5982\u679c\u6709\u591a\u4e2a\u57df\u540d\uff0c\u5219\u4f7f\u7528\u9017\u53f7\u5206\u9694\u3002\u7528\u6237\u767b\u5f55\u8be5\u57df\u540d\u670d\u52a1\u5668\u65f6\uff0cSSH \u901a\u8fc7\u8bc1\u4e66\u7684\u8fd9\u4e2a\u503c\uff0c\u5206\u8fa8\u5e94\u8be5\u4f7f\u7528\u54ea\u5f20\u8bc1\u4e66\u53d1\u7ed9\u7528\u6237\uff0c\u7528\u6765\u8bc1\u660e\u670d\u52a1\u5668\u7684\u53ef\u4fe1\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-V +52w"),"\uff1a\u6307\u5b9a\u8bc1\u4e66\u7684\u6709\u6548\u671f\uff0c\u8fd9\u91cc\u4e3a52\u5468\uff08\u4e00\u5e74\uff09\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bc1\u4e66\u662f\u6c38\u8fdc\u6709\u6548\u7684\u3002\u5efa\u8bae\u4f7f\u7528\u8be5\u53c2\u6570\u6307\u5b9a\u6709\u6548\u671f\uff0c\u5e76\u4e14\u6709\u6548\u671f\u6700\u597d\u77ed\u4e00\u70b9\uff0c\u6700\u957f\u4e0d\u8d85\u8fc752\u5468\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ssh_host_rsa_key.pub"),"\uff1a\u670d\u52a1\u5668\u516c\u94a5\u3002")),(0,l.kt)("p",null,"\u751f\u6210\u8bc1\u4e66\u4ee5\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u67e5\u770b\u8bc1\u4e66\u7684\u7ec6\u8282\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -L -f ssh_host_rsa_key-cert.pub\n")),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u4e3a\u8bc1\u4e66\u8bbe\u7f6e\u6743\u9650\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 600 ssh_host_rsa_key-cert.pub\n")),(0,l.kt)("h2",{id:"ca-\u7b7e\u53d1\u7528\u6237\u8bc1\u4e66"},"CA \u7b7e\u53d1\u7528\u6237\u8bc1\u4e66"),(0,l.kt)("p",null,"\u4e0b\u9762\uff0c\u518d\u7528 CA \u7b7e\u53d1\u7528\u6237\u8bc1\u4e66\u3002\u8fd9\u65f6\u9700\u8981\u7528\u6237\u7684\u516c\u94a5\uff0c\u5982\u679c\u6ca1\u6709\u7684\u8bdd\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u751f\u6210\u4e00\u5bf9\u5bc6\u94a5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -f ~/.ssh/user_key -b 4096 -t rsa\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4f1a\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"~/.ssh"),"\u76ee\u5f55\uff0c\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"user_key"),"\uff08\u79c1\u94a5\uff09\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"user_key.pub"),"\uff08\u516c\u94a5\uff09\u3002"),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5c06\u7528\u6237\u516c\u94a5",(0,l.kt)("inlineCode",{parentName:"p"},"user_key.pub"),"\uff0c\u4e0a\u4f20\u6216\u590d\u5236\u5230 CA \u670d\u52a1\u5668\u3002\u63a5\u4e0b\u6765\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 CA \u7684\u5bc6\u94a5",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca"),"\u4e3a\u7528\u6237\u516c\u94a5",(0,l.kt)("inlineCode",{parentName:"p"},"user_key.pub"),"\u7b7e\u53d1\u7528\u6237\u8bc1\u4e66\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -s user_ca -I user@example.com -n user -V +1d user_key.pub\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u751f\u6210\u7528\u6237\u8bc1\u4e66",(0,l.kt)("inlineCode",{parentName:"p"},"user_key-cert.pub"),"\uff08\u7528\u6237\u516c\u94a5\u540d\u5b57\u52a0\u540e\u7f00",(0,l.kt)("inlineCode",{parentName:"p"},"-cert"),"\uff09\u3002\u8fd9\u4e2a\u547d\u4ee4\u5404\u4e2a\u53c2\u6570\u7684\u542b\u4e49\u5982\u4e0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-s"),"\uff1a\u6307\u5b9a CA \u7b7e\u53d1\u8bc1\u4e66\u7684\u5bc6\u94a5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-I"),"\uff1a\u8eab\u4efd\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u968f\u4fbf\u8bbe\u7f6e\uff0c\u76f8\u5f53\u4e8e\u6ce8\u91ca\uff0c\u65b9\u4fbf\u533a\u5206\u8bc1\u4e66\uff0c\u5c06\u6765\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u5b57\u7b26\u4e32\u64a4\u9500\u8bc1\u4e66\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-n user"),"\uff1a\u6307\u5b9a\u7528\u6237\u540d\uff0c\u8868\u793a\u8bc1\u4e66\u4ec5\u5bf9\u8be5\u7528\u6237\u540d\u6709\u6548\u3002\u5982\u679c\u6709\u591a\u4e2a\u7528\u6237\u540d\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694\u3002\u7528\u6237\u4ee5\u8be5\u7528\u6237\u540d\u767b\u5f55\u670d\u52a1\u5668\u65f6\uff0cSSH \u901a\u8fc7\u8fd9\u4e2a\u503c\uff0c\u5206\u8fa8\u5e94\u8be5\u4f7f\u7528\u54ea\u5f20\u8bc1\u4e66\uff0c\u8bc1\u660e\u81ea\u5df1\u7684\u8eab\u4efd\uff0c\u53d1\u7ed9\u670d\u52a1\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-V +1d"),"\uff1a\u6307\u5b9a\u8bc1\u4e66\u7684\u6709\u6548\u671f\uff0c\u8fd9\u91cc\u4e3a1\u5929\uff0c\u5f3a\u5236\u7528\u6237\u6bcf\u5929\u90fd\u7533\u8bf7\u4e00\u6b21\u8bc1\u4e66\uff0c\u63d0\u9ad8\u5b89\u5168\u6027\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bc1\u4e66\u662f\u6c38\u8fdc\u6709\u6548\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user_key.pub"),"\uff1a\u7528\u6237\u516c\u94a5\u3002")),(0,l.kt)("p",null,"\u751f\u6210\u8bc1\u4e66\u4ee5\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u67e5\u770b\u8bc1\u4e66\u7684\u7ec6\u8282\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -L -f user_key-cert.pub\n")),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u4e3a\u8bc1\u4e66\u8bbe\u7f6e\u6743\u9650\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 600 user_key-cert.pub\n")),(0,l.kt)("h2",{id:"\u670d\u52a1\u5668\u5b89\u88c5\u8bc1\u4e66"},"\u670d\u52a1\u5668\u5b89\u88c5\u8bc1\u4e66"),(0,l.kt)("p",null,"CA \u751f\u6210\u670d\u52a1\u5668\u8bc1\u4e66",(0,l.kt)("inlineCode",{parentName:"p"},"ssh_host_rsa_key-cert.pub"),"\u4ee5\u540e\uff0c\u9700\u8981\u5c06\u8be5\u8bc1\u4e66\u53d1\u56de\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"scp"),"\u547d\u4ee4\uff0c\u5c06\u8bc1\u4e66\u62f7\u8d1d\u8fc7\u53bb\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scp ~/.ssh/ssh_host_rsa_key-cert.pub root@host.example.com:/etc/ssh/\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5c06\u4e0b\u9762\u4e00\u884c\u6dfb\u52a0\u5230\u670d\u52a1\u5668\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"HostCertificate /etc/ssh/ssh_host_rsa_key-cert.pub\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u544a\u8bc9 sshd\uff0c\u670d\u52a1\u5668\u8bc1\u4e66\u662f\u54ea\u4e00\u4e2a\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u91cd\u65b0\u542f\u52a8 sshd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl restart sshd.service\n# \u6216\u8005\n$ sudo service sshd restart\n")),(0,l.kt)("h2",{id:"\u670d\u52a1\u5668\u5b89\u88c5-ca-\u516c\u94a5"},"\u670d\u52a1\u5668\u5b89\u88c5 CA \u516c\u94a5"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ba9\u670d\u52a1\u5668\u4fe1\u4efb\u7528\u6237\u8bc1\u4e66\uff0c\u5fc5\u987b\u5c06 CA \u7b7e\u53d1\u7528\u6237\u8bc1\u4e66\u7684\u516c\u94a5",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca.pub"),"\uff0c\u62f7\u8d1d\u5230\u670d\u52a1\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scp ~/.ssh/user_ca.pub root@host.example.com:/etc/ssh/\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\uff0c\u5c06 CA \u7b7e\u53d1\u7528\u6237\u8bc1\u4e66\u7684\u516c\u94a5",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca.pub"),"\uff0c\u62f7\u8d1d\u5230 SSH \u670d\u52a1\u5668\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/ssh"),"\u76ee\u5f55\u3002"),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5c06\u4e0b\u9762\u4e00\u884c\u6dfb\u52a0\u5230\u670d\u52a1\u5668\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"TrustedUserCAKeys /etc/ssh/user_ca.pub\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u505a\u6cd5\u662f\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca.pub"),"\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config"),"\uff0c\u8fd9\u4f1a\u4ea7\u751f\u5168\u5c40\u6548\u679c\uff0c\u5373\u670d\u52a1\u5668\u7684\u6240\u6709\u8d26\u6237\u90fd\u4f1a\u4fe1\u4efb",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca"),"\u7b7e\u53d1\u7684\u6240\u6709\u7528\u6237\u8bc1\u4e66\u3002"),(0,l.kt)("p",null,"\u53e6\u4e00\u79cd\u505a\u6cd5\u662f\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca.pub"),"\u52a0\u5230\u670d\u52a1\u5668\u67d0\u4e2a\u8d26\u6237\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys"),"\u6587\u4ef6\uff0c\u53ea\u8ba9\u8be5\u8d26\u6237\u4fe1\u4efb",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca"),"\u7b7e\u53d1\u7684\u7528\u6237\u8bc1\u4e66\u3002\u5177\u4f53\u65b9\u6cd5\u662f\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys"),"\uff0c\u8ffd\u52a0\u4e00\u884c\uff0c\u5f00\u5934\u662f",(0,l.kt)("inlineCode",{parentName:"p"},'@cert-authority principals="..."'),"\uff0c\u7136\u540e\u540e\u9762\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca.pub"),"\u7684\u5185\u5bb9\uff0c\u5927\u6982\u662f\u4e0b\u9762\u8fd9\u4e2a\u6837\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'@cert-authority principals="user" ssh-rsa AAAAB3Nz...XNRM1EX2gQ==\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},'principals="user"'),"\u6307\u5b9a\u7528\u6237\u767b\u5f55\u7684\u670d\u52a1\u5668\u8d26\u6237\u540d\uff0c\u4e00\u822c\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"authorized_keys"),"\u6587\u4ef6\u6240\u5728\u7684\u8d26\u6237\u3002"),(0,l.kt)("p",null,"\u91cd\u65b0\u542f\u52a8 sshd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl restart sshd.service\n# \u6216\u8005\n$ sudo service sshd restart\n")),(0,l.kt)("p",null,"\u81f3\u6b64\uff0cSSH \u670d\u52a1\u5668\u5df2\u914d\u7f6e\u4e3a\u4fe1\u4efb",(0,l.kt)("inlineCode",{parentName:"p"},"user_ca"),"\u7b7e\u53d1\u7684\u8bc1\u4e66\u3002"),(0,l.kt)("h2",{id:"\u5ba2\u6237\u7aef\u5b89\u88c5\u8bc1\u4e66"},"\u5ba2\u6237\u7aef\u5b89\u88c5\u8bc1\u4e66"),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef\u5b89\u88c5\u7528\u6237\u8bc1\u4e66\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u4ece CA \u5c06\u7528\u6237\u8bc1\u4e66",(0,l.kt)("inlineCode",{parentName:"p"},"user_key-cert.pub"),"\u590d\u5236\u5230\u5ba2\u6237\u7aef\uff0c\u4e0e\u7528\u6237\u7684\u5bc6\u94a5",(0,l.kt)("inlineCode",{parentName:"p"},"user_key"),"\u4fdd\u5b58\u5728\u540c\u4e00\u4e2a\u76ee\u5f55\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"\u5ba2\u6237\u7aef\u5b89\u88c5-ca-\u516c\u94a5"},"\u5ba2\u6237\u7aef\u5b89\u88c5 CA \u516c\u94a5"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ba9\u5ba2\u6237\u7aef\u4fe1\u4efb\u670d\u52a1\u5668\u8bc1\u4e66\uff0c\u5fc5\u987b\u5c06 CA \u7b7e\u53d1\u670d\u52a1\u5668\u8bc1\u4e66\u7684\u516c\u94a5",(0,l.kt)("inlineCode",{parentName:"p"},"host_ca.pub"),"\uff0c\u52a0\u5230\u5ba2\u6237\u7aef\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/ssh/ssh_known_hosts"),"\u6587\u4ef6\uff08\u5168\u5c40\u7ea7\u522b\uff09\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"~/.ssh/known_hosts"),"\u6587\u4ef6\uff08\u7528\u6237\u7ea7\u522b\uff09\u3002"),(0,l.kt)("p",null,"\u5177\u4f53\u505a\u6cd5\u662f\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"ssh_known_hosts"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"known_hosts"),"\u6587\u4ef6\uff0c\u8ffd\u52a0\u4e00\u884c\uff0c\u5f00\u5934\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"@cert-authority *.example.com"),"\uff0c\u7136\u540e\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"host_ca.pub"),"\u6587\u4ef6\u7684\u5185\u5bb9\uff08\u5373\u516c\u94a5\uff09\u7c98\u8d34\u5728\u540e\u9762\uff0c\u5927\u6982\u662f\u4e0b\u9762\u8fd9\u4e2a\u6837\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"@cert-authority *.example.com ssh-rsa AAAAB3Nz...XNRM1EX2gQ==\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"*.example.com"),"\u662f\u57df\u540d\u7684\u6a21\u5f0f\u5339\u914d\uff0c\u8868\u793a\u53ea\u8981\u670d\u52a1\u5668\u7b26\u5408\u8be5\u6a21\u5f0f\u7684\u57df\u540d\uff0c\u4e14\u7b7e\u53d1\u670d\u52a1\u5668\u8bc1\u4e66\u7684 CA \u5339\u914d\u540e\u9762\u7ed9\u51fa\u7684\u516c\u94a5\uff0c\u5c31\u90fd\u53ef\u4ee5\u4fe1\u4efb\u3002\u5982\u679c\u6ca1\u6709\u57df\u540d\u9650\u5236\uff0c\u8fd9\u91cc\u53ef\u4ee5\u5199\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"*"),"\u3002\u5982\u679c\u6709\u591a\u4e2a\u57df\u540d\u6a21\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528\u9017\u53f7\u5206\u9694\uff1b\u5982\u679c\u670d\u52a1\u5668\u6ca1\u6709\u57df\u540d\uff0c\u53ef\u4ee5\u7528\u4e3b\u673a\u540d\uff08\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"host1,host2,host3"),"\uff09\u6216\u8005 IP \u5730\u5740\uff08\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"11.12.13.14,21.22.23.24"),"\uff09\u3002"),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u8bc1\u4e66\uff0c\u767b\u5f55\u8fdc\u7a0b\u670d\u52a1\u5668\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i ~/.ssh/user_key user@host.example.com\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"-i"),"\u53c2\u6570\u7528\u6765\u6307\u5b9a\u7528\u6237\u7684\u5bc6\u94a5\u3002\u5982\u679c\u8bc1\u4e66\u4e0e\u5bc6\u94a5\u5728\u540c\u4e00\u4e2a\u76ee\u5f55\uff0c\u5219\u8fde\u63a5\u670d\u52a1\u5668\u65f6\u5c06\u81ea\u52a8\u4f7f\u7528\u8be5\u8bc1\u4e66\u3002"),(0,l.kt)("h2",{id:"\u5e9f\u9664\u8bc1\u4e66"},"\u5e9f\u9664\u8bc1\u4e66"),(0,l.kt)("p",null,"\u5e9f\u9664\u8bc1\u4e66\u7684\u64cd\u4f5c\uff0c\u5206\u6210\u7528\u6237\u8bc1\u4e66\u7684\u5e9f\u9664\u548c\u670d\u52a1\u5668\u8bc1\u4e66\u7684\u5e9f\u9664\u4e24\u79cd\u3002"),(0,l.kt)("p",null,"\u670d\u52a1\u5668\u8bc1\u4e66\u7684\u5e9f\u9664\uff0c\u7528\u6237\u9700\u8981\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"known_hosts"),"\u6587\u4ef6\u91cc\u9762\uff0c\u4fee\u6539\u6216\u5220\u9664\u5bf9\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@cert-authority"),"\u547d\u4ee4\u7684\u90a3\u4e00\u884c\u3002"),(0,l.kt)("p",null,"\u7528\u6237\u8bc1\u4e66\u7684\u5e9f\u9664\uff0c\u9700\u8981\u5728\u670d\u52a1\u5668\u65b0\u5efa\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/ssh/revoked_keys"),"\u6587\u4ef6\uff0c\u7136\u540e\u5728\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"sshd_config"),"\u6dfb\u52a0\u4e00\u884c\uff0c\u5185\u5bb9\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"RevokedKeys /etc/ssh/revoked_keys\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"revoked_keys"),"\u6587\u4ef6\u4fdd\u5b58\u4e0d\u518d\u4fe1\u4efb\u7684\u7528\u6237\u516c\u94a5\uff0c\u7531\u4e0b\u9762\u7684\u547d\u4ee4\u751f\u6210\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -kf /etc/ssh/revoked_keys -z 1 ~/.ssh/user1_key.pub\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-z"),"\u53c2\u6570\u7528\u6765\u6307\u5b9a\u7528\u6237\u516c\u94a5\u4fdd\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"revoked_keys"),"\u6587\u4ef6\u7684\u54ea\u4e00\u884c\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u662f\u4fdd\u5b58\u5728\u7b2c1\u884c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4ee5\u540e\u9700\u8981\u5e9f\u9664\u5176\u4ed6\u7684\u7528\u6237\u516c\u94a5\uff0c\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u4fdd\u5b58\u5728\u7b2c2\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -ukf /etc/ssh/revoked_keys -z 2 ~/.ssh/user2_key.pub\n")),(0,l.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://smallstep.com/blog/ssh-emergency-access/"},"SSH Emergency Access"),", Carl Tashian"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/sec-using_openssh_certificate_authentication"},"Using OpenSSH Certificate Authentication"),", Red Hat Enterprise Linux Deployment Guide"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://gravitational.com/blog/how-to-ssh-properly/"},"How to SSH Properly"),", Gus Luxton")))}k.isMDXComponent=!0}}]);