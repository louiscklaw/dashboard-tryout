"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9820],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),k=l,m=c["".concat(o,".").concat(k)]||c[k]||u[k]||r;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(7462),l=(t(7294),t(3905));const r={id:"rsync \u547d\u4ee4",title:"rsync \u547d\u4ee4",sidebar_position:8,data:"2022\u5e744\u670813\u65e5"},i=void 0,p={unversionedId:"SSH/rsync \u547d\u4ee4",id:"SSH/rsync \u547d\u4ee4",title:"rsync \u547d\u4ee4",description:"\u7b80\u4ecb",source:"@site/example/safe/SSH/rsync \u547d\u4ee4.md",sourceDirName:"SSH",slug:"/SSH/rsync \u547d\u4ee4",permalink:"/dashboard-tryout/safe/SSH/rsync \u547d\u4ee4",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/safe/SSH/rsync \u547d\u4ee4.md",tags:[],version:"current",lastUpdatedBy:"Louis Law",lastUpdatedAt:1696908055,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:8,frontMatter:{id:"rsync \u547d\u4ee4",title:"rsync \u547d\u4ee4",sidebar_position:8,data:"2022\u5e744\u670813\u65e5"},sidebar:"tutorialSidebar",previous:{title:"scp \u547d\u4ee4",permalink:"/dashboard-tryout/safe/SSH/scp \u547d\u4ee4"},next:{title:"sftp \u547d\u4ee4",permalink:"/dashboard-tryout/safe/SSH/sftp \u547d\u4ee4"}},o={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"<code>-r</code>\u53c2\u6570",id:"-r\u53c2\u6570",level:3},{value:"<code>-a</code>\u53c2\u6570",id:"-a\u53c2\u6570",level:3},{value:"<code>-n</code>\u53c2\u6570",id:"-n\u53c2\u6570",level:3},{value:"<code>--delete</code>\u53c2\u6570",id:"--delete\u53c2\u6570",level:3},{value:"\u6392\u9664\u6587\u4ef6",id:"\u6392\u9664\u6587\u4ef6",level:2},{value:"<code>--exclude</code>\u53c2\u6570",id:"--exclude\u53c2\u6570",level:3},{value:"<code>--include</code>\u53c2\u6570",id:"--include\u53c2\u6570",level:3},{value:"\u8fdc\u7a0b\u540c\u6b65",id:"\u8fdc\u7a0b\u540c\u6b65",level:2},{value:"SSH \u534f\u8bae",id:"ssh-\u534f\u8bae",level:3},{value:"rsync \u534f\u8bae",id:"rsync-\u534f\u8bae",level:3},{value:"\u589e\u91cf\u5907\u4efd",id:"\u589e\u91cf\u5907\u4efd",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],d={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"rsync \u662f\u4e00\u4e2a\u5e38\u7528\u7684 Linux \u5e94\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u6587\u4ef6\u540c\u6b65\u3002"),(0,l.kt)("p",null,"\u5b83\u53ef\u4ee5\u5728\u672c\u5730\u8ba1\u7b97\u673a\u4e0e\u8fdc\u7a0b\u8ba1\u7b97\u673a\u4e4b\u95f4\uff0c\u6216\u8005\u4e24\u4e2a\u672c\u5730\u76ee\u5f55\u4e4b\u95f4\u540c\u6b65\u6587\u4ef6\uff08\u4f46\u4e0d\u652f\u6301\u4e24\u53f0\u8fdc\u7a0b\u8ba1\u7b97\u673a\u4e4b\u95f4\u7684\u540c\u6b65\uff09\u3002\u5b83\u4e5f\u53ef\u4ee5\u5f53\u4f5c\u6587\u4ef6\u590d\u5236\u5de5\u5177\uff0c\u66ff\u4ee3",(0,l.kt)("inlineCode",{parentName:"p"},"cp"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"mv"),"\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u5b83\u540d\u79f0\u91cc\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"r"),"\u6307\u7684\u662f remote\uff0crsync \u5176\u5b9e\u5c31\u662f\u201c\u8fdc\u7a0b\u540c\u6b65\u201d\uff08remote sync\uff09\u7684\u610f\u601d\u3002\u4e0e\u5176\u4ed6\u6587\u4ef6\u4f20\u8f93\u5de5\u5177\uff08\u5982 FTP \u6216 scp\uff09\u4e0d\u540c\uff0crsync \u7684\u6700\u5927\u7279\u70b9\u662f\u4f1a\u68c0\u67e5\u53d1\u9001\u65b9\u548c\u63a5\u6536\u65b9\u5df2\u6709\u7684\u6587\u4ef6\uff0c\u4ec5\u4f20\u8f93\u6709\u53d8\u52a8\u7684\u90e8\u5206\uff08\u9ed8\u8ba4\u89c4\u5219\u662f\u6587\u4ef6\u5927\u5c0f\u6216\u4fee\u6539\u65f6\u95f4\u6709\u53d8\u52a8\uff09\u3002"),(0,l.kt)("p",null,"\u867d\u7136 rsync \u4e0d\u662f SSH \u5de5\u5177\u96c6\u7684\u4e00\u90e8\u5206\uff0c\u4f46\u56e0\u4e3a\u4e5f\u6d89\u53ca\u5230\u8fdc\u7a0b\u64cd\u4f5c\uff0c\u6240\u4ee5\u653e\u5728\u8fd9\u91cc\u4e00\u8d77\u4ecb\u7ecd\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u5982\u679c\u672c\u673a\u6216\u8005\u8fdc\u7a0b\u8ba1\u7b97\u673a\u6ca1\u6709\u5b89\u88c5 rsync\uff0c\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u5b89\u88c5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Debian\n$ sudo apt-get install rsync\n\n# Red Hat\n$ sudo yum install rsync\n\n# Arch Linux\n$ sudo pacman -S rsync\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u4f20\u8f93\u7684\u53cc\u65b9\u90fd\u5fc5\u987b\u5b89\u88c5 rsync\u3002"),(0,l.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"rsync \u53ef\u4ee5\u7528\u4e8e\u672c\u5730\u8ba1\u7b97\u673a\u7684\u4e24\u4e2a\u76ee\u5f55\u4e4b\u95f4\u7684\u540c\u6b65\u3002\u4e0b\u9762\u5c31\u7528\u672c\u5730\u540c\u6b65\u4e3e\u4f8b\uff0c\u987a\u4fbf\u8bb2\u89e3 rsync \u51e0\u4e2a\u4e3b\u8981\u53c2\u6570\u7684\u7528\u6cd5\u3002"),(0,l.kt)("h3",{id:"-r\u53c2\u6570"},(0,l.kt)("inlineCode",{parentName:"h3"},"-r"),"\u53c2\u6570"),(0,l.kt)("p",null,"\u672c\u673a\u4f7f\u7528 rsync \u547d\u4ee4\u65f6\uff0c\u53ef\u4ee5\u4f5c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"cp"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"mv"),"\u547d\u4ee4\u7684\u66ff\u4ee3\u65b9\u6cd5\uff0c\u5c06\u6e90\u76ee\u5f55\u62f7\u8d1d\u5230\u76ee\u6807\u76ee\u5f55\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -r source destination\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-r"),"\u8868\u793a\u9012\u5f52\uff0c\u5373\u5305\u542b\u5b50\u76ee\u5f55\u3002\u6ce8\u610f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-r"),"\u662f\u5fc5\u987b\u7684\uff0c\u5426\u5219 rsync \u8fd0\u884c\u4e0d\u4f1a\u6210\u529f\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"source"),"\u76ee\u5f55\u8868\u793a\u6e90\u76ee\u5f55\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"destination"),"\u8868\u793a\u76ee\u6807\u76ee\u5f55\u3002\u4e0a\u9762\u547d\u4ee4\u6267\u884c\u4ee5\u540e\uff0c\u76ee\u6807\u76ee\u5f55\u4e0b\u5c31\u4f1a\u51fa\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},"destination/source"),"\u8fd9\u4e2a\u5b50\u76ee\u5f55\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6709\u591a\u4e2a\u6587\u4ef6\u6216\u76ee\u5f55\u9700\u8981\u540c\u6b65\uff0c\u53ef\u4ee5\u5199\u6210\u4e0b\u9762\u8fd9\u6837\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -r source1 source2 destination\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"source1"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"source2"),"\u90fd\u4f1a\u88ab\u540c\u6b65\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"destination"),"\u76ee\u5f55\u3002"),(0,l.kt)("h3",{id:"-a\u53c2\u6570"},(0,l.kt)("inlineCode",{parentName:"h3"},"-a"),"\u53c2\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-a"),"\u53c2\u6570\u53ef\u4ee5\u66ff\u4ee3",(0,l.kt)("inlineCode",{parentName:"p"},"-r"),"\uff0c\u9664\u4e86\u53ef\u4ee5\u9012\u5f52\u540c\u6b65\u4ee5\u5916\uff0c\u8fd8\u53ef\u4ee5\u540c\u6b65\u5143\u4fe1\u606f\uff08\u6bd4\u5982\u4fee\u6539\u65f6\u95f4\u3001\u6743\u9650\u7b49\uff09\u3002\u7531\u4e8e rsync \u9ed8\u8ba4\u4f7f\u7528\u6587\u4ef6\u5927\u5c0f\u548c\u4fee\u6539\u65f6\u95f4\u51b3\u5b9a\u6587\u4ef6\u662f\u5426\u9700\u8981\u66f4\u65b0\uff0c\u6240\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"-a"),"\u6bd4",(0,l.kt)("inlineCode",{parentName:"p"},"-r"),"\u66f4\u6709\u7528\u3002\u4e0b\u9762\u7684\u7528\u6cd5\u624d\u662f\u5e38\u89c1\u7684\u5199\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -a source destination\n")),(0,l.kt)("p",null,"\u76ee\u6807\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"destination"),"\u5982\u679c\u4e0d\u5b58\u5728\uff0crsync \u4f1a\u81ea\u52a8\u521b\u5efa\u3002\u6267\u884c\u4e0a\u9762\u7684\u547d\u4ee4\u540e\uff0c\u6e90\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"source"),"\u88ab\u5b8c\u6574\u5730\u590d\u5236\u5230\u4e86\u76ee\u6807\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"destination"),"\u4e0b\u9762\uff0c\u5373\u5f62\u6210\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"destination/source"),"\u7684\u76ee\u5f55\u7ed3\u6784\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u53ea\u60f3\u540c\u6b65\u6e90\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"source"),"\u91cc\u9762\u7684\u5185\u5bb9\u5230\u76ee\u6807\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"destination"),"\uff0c\u5219\u9700\u8981\u5728\u6e90\u76ee\u5f55\u540e\u9762\u52a0\u4e0a\u659c\u6760\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -a source/ destination\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u6267\u884c\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"source"),"\u76ee\u5f55\u91cc\u9762\u7684\u5185\u5bb9\uff0c\u5c31\u90fd\u88ab\u590d\u5236\u5230\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"destination"),"\u76ee\u5f55\u91cc\u9762\uff0c\u5e76\u4e0d\u4f1a\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"destination"),"\u4e0b\u9762\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"source"),"\u5b50\u76ee\u5f55\u3002"),(0,l.kt)("h3",{id:"-n\u53c2\u6570"},(0,l.kt)("inlineCode",{parentName:"h3"},"-n"),"\u53c2\u6570"),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u786e\u5b9a rsync \u6267\u884c\u540e\u4f1a\u4ea7\u751f\u4ec0\u4e48\u7ed3\u679c\uff0c\u53ef\u4ee5\u5148\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"-n"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"--dry-run"),"\u53c2\u6570\u6a21\u62df\u6267\u884c\u7684\u7ed3\u679c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -anv source/ destination\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-n"),"\u53c2\u6570\u6a21\u62df\u547d\u4ee4\u6267\u884c\u7684\u7ed3\u679c\uff0c\u5e76\u4e0d\u771f\u7684\u6267\u884c\u547d\u4ee4\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"-v"),"\u53c2\u6570\u5219\u662f\u5c06\u7ed3\u679c\u8f93\u51fa\u5230\u7ec8\u7aef\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u770b\u5230\u54ea\u4e9b\u5185\u5bb9\u4f1a\u88ab\u540c\u6b65\u3002"),(0,l.kt)("h3",{id:"--delete\u53c2\u6570"},(0,l.kt)("inlineCode",{parentName:"h3"},"--delete"),"\u53c2\u6570"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0crsync \u53ea\u786e\u4fdd\u6e90\u76ee\u5f55\u7684\u6240\u6709\u5185\u5bb9\uff08\u660e\u786e\u6392\u9664\u7684\u6587\u4ef6\u9664\u5916\uff09\u90fd\u590d\u5236\u5230\u76ee\u6807\u76ee\u5f55\u3002\u5b83\u4e0d\u4f1a\u4f7f\u4e24\u4e2a\u76ee\u5f55\u4fdd\u6301\u76f8\u540c\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5220\u9664\u6587\u4ef6\u3002\u5982\u679c\u8981\u4f7f\u5f97\u76ee\u6807\u76ee\u5f55\u6210\u4e3a\u6e90\u76ee\u5f55\u7684\u955c\u50cf\u526f\u672c\uff0c\u5219\u5fc5\u987b\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--delete"),"\u53c2\u6570\uff0c\u8fd9\u5c06\u5220\u9664\u53ea\u5b58\u5728\u4e8e\u76ee\u6807\u76ee\u5f55\u3001\u4e0d\u5b58\u5728\u4e8e\u6e90\u76ee\u5f55\u7684\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av --delete source/ destination\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"--delete"),"\u53c2\u6570\u4f1a\u4f7f\u5f97",(0,l.kt)("inlineCode",{parentName:"p"},"destination"),"\u6210\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"source"),"\u7684\u4e00\u4e2a\u955c\u50cf\u3002"),(0,l.kt)("h2",{id:"\u6392\u9664\u6587\u4ef6"},"\u6392\u9664\u6587\u4ef6"),(0,l.kt)("h3",{id:"--exclude\u53c2\u6570"},(0,l.kt)("inlineCode",{parentName:"h3"},"--exclude"),"\u53c2\u6570"),(0,l.kt)("p",null,"\u6709\u65f6\uff0c\u6211\u4eec\u5e0c\u671b\u540c\u6b65\u65f6\u6392\u9664\u67d0\u4e9b\u6587\u4ef6\u6216\u76ee\u5f55\uff0c\u8fd9\u65f6\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--exclude"),"\u53c2\u6570\u6307\u5b9a\u6392\u9664\u6a21\u5f0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ rsync -av --exclude='*.txt' source/ destination\n# \u6216\u8005\n$ rsync -av --exclude '*.txt' source/ destination\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u6392\u9664\u4e86\u6240\u6709 TXT \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0crsync \u4f1a\u540c\u6b65\u4ee5\u201c\u70b9\u201d\u5f00\u5934\u7684\u9690\u85cf\u6587\u4ef6\uff0c\u5982\u679c\u8981\u6392\u9664\u9690\u85cf\u6587\u4ef6\uff0c\u53ef\u4ee5\u8fd9\u6837\u5199",(0,l.kt)("inlineCode",{parentName:"p"},'--exclude=".*"'),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u6392\u9664\u67d0\u4e2a\u76ee\u5f55\u91cc\u9762\u7684\u6240\u6709\u6587\u4ef6\uff0c\u4f46\u4e0d\u5e0c\u671b\u6392\u9664\u76ee\u5f55\u672c\u8eab\uff0c\u53ef\u4ee5\u5199\u6210\u4e0b\u9762\u8fd9\u6837\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av --exclude 'dir1/*' source/ destination\n")),(0,l.kt)("p",null,"\u591a\u4e2a\u6392\u9664\u6a21\u5f0f\uff0c\u53ef\u4ee5\u7528\u591a\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"--exclude"),"\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av --exclude 'file1.txt' --exclude 'dir1/*' source/ destination\n")),(0,l.kt)("p",null,"\u591a\u4e2a\u6392\u9664\u6a21\u5f0f\u4e5f\u53ef\u4ee5\u5229\u7528 Bash \u7684\u5927\u6269\u53f7\u7684\u6269\u5c55\u529f\u80fd\uff0c\u53ea\u7528\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"--exclude"),"\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av --exclude={'file1.txt','dir1/*'} source/ destination\n")),(0,l.kt)("p",null,"\u5982\u679c\u6392\u9664\u6a21\u5f0f\u5f88\u591a\uff0c\u53ef\u4ee5\u5c06\u5b83\u4eec\u5199\u5165\u4e00\u4e2a\u6587\u4ef6\uff0c\u6bcf\u4e2a\u6a21\u5f0f\u4e00\u884c\uff0c\u7136\u540e\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--exclude-from"),"\u53c2\u6570\u6307\u5b9a\u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av --exclude-from='exclude-file.txt' source/ destination\n")),(0,l.kt)("h3",{id:"--include\u53c2\u6570"},(0,l.kt)("inlineCode",{parentName:"h3"},"--include"),"\u53c2\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--include"),"\u53c2\u6570\u7528\u6765\u6307\u5b9a\u5fc5\u987b\u540c\u6b65\u7684\u6587\u4ef6\u6a21\u5f0f\uff0c\u5f80\u5f80\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"--exclude"),"\u7ed3\u5408\u4f7f\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av --include=\"*.txt\" --exclude='*' source/ destination\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u6307\u5b9a\u540c\u6b65\u65f6\uff0c\u6392\u9664\u6240\u6709\u6587\u4ef6\uff0c\u4f46\u662f\u4f1a\u5305\u62ec TXT \u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u8fdc\u7a0b\u540c\u6b65"},"\u8fdc\u7a0b\u540c\u6b65"),(0,l.kt)("h3",{id:"ssh-\u534f\u8bae"},"SSH \u534f\u8bae"),(0,l.kt)("p",null,"rsync \u9664\u4e86\u652f\u6301\u672c\u5730\u4e24\u4e2a\u76ee\u5f55\u4e4b\u95f4\u7684\u540c\u6b65\uff0c\u4e5f\u652f\u6301\u8fdc\u7a0b\u540c\u6b65\u3002\u5b83\u53ef\u4ee5\u5c06\u672c\u5730\u5185\u5bb9\uff0c\u540c\u6b65\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av source/ username@remote_host:destination\n")),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5c06\u8fdc\u7a0b\u5185\u5bb9\u540c\u6b65\u5230\u672c\u5730\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av username@remote_host:source/ destination\n")),(0,l.kt)("p",null,"rsync \u9ed8\u8ba4\u4f7f\u7528 SSH \u8fdb\u884c\u8fdc\u7a0b\u767b\u5f55\u548c\u6570\u636e\u4f20\u8f93\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u65e9\u671f rsync \u4e0d\u4f7f\u7528 SSH \u534f\u8bae\uff0c\u9700\u8981\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"-e"),"\u53c2\u6570\u6307\u5b9a\u534f\u8bae\uff0c\u540e\u6765\u624d\u6539\u7684\u3002\u6240\u4ee5\uff0c\u4e0b\u9762",(0,l.kt)("inlineCode",{parentName:"p"},"-e ssh"),"\u53ef\u4ee5\u7701\u7565\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av -e ssh source/ user@remote_host:/destination\n")),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c ssh \u547d\u4ee4\u6709\u9644\u52a0\u7684\u53c2\u6570\uff0c\u5219\u5fc5\u987b\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"-e"),"\u53c2\u6570\u6307\u5b9a\u6240\u8981\u6267\u884c\u7684 SSH \u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av -e 'ssh -p 2234' source/ user@remote_host:/destination\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-e"),"\u53c2\u6570\u6307\u5b9a SSH \u4f7f\u75282234\u7aef\u53e3\u3002"),(0,l.kt)("h3",{id:"rsync-\u534f\u8bae"},"rsync \u534f\u8bae"),(0,l.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 SSH\uff0c\u5982\u679c\u53e6\u4e00\u53f0\u670d\u52a1\u5668\u5b89\u88c5\u5e76\u8fd0\u884c\u4e86 rsync \u5b88\u62a4\u7a0b\u5e8f\uff0c\u5219\u4e5f\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"rsync://"),"\u534f\u8bae\uff08\u9ed8\u8ba4\u7aef\u53e3873\uff09\u8fdb\u884c\u4f20\u8f93\u3002\u5177\u4f53\u5199\u6cd5\u662f\u670d\u52a1\u5668\u4e0e\u76ee\u6807\u76ee\u5f55\u4e4b\u95f4\u4f7f\u7528\u53cc\u5192\u53f7\u5206\u9694",(0,l.kt)("inlineCode",{parentName:"p"},"::"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av source/ 192.168.122.32::module/destination\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u4e0a\u9762\u5730\u5740\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"module"),"\u5e76\u4e0d\u662f\u5b9e\u9645\u8def\u5f84\u540d\uff0c\u800c\u662f rsync \u5b88\u62a4\u7a0b\u5e8f\u6307\u5b9a\u7684\u4e00\u4e2a\u8d44\u6e90\u540d\uff0c\u7531\u7ba1\u7406\u5458\u5206\u914d\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u77e5\u9053 rsync \u5b88\u62a4\u7a0b\u5e8f\u5206\u914d\u7684\u6240\u6709 module \u5217\u8868\uff0c\u53ef\u4ee5\u6267\u884c\u4e0b\u9762\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync rsync://192.168.122.32\n")),(0,l.kt)("p",null,"rsync \u534f\u8bae\u9664\u4e86\u4f7f\u7528\u53cc\u5192\u53f7\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"rsync://"),"\u534f\u8bae\u6307\u5b9a\u5730\u5740\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av source/ rsync://192.168.122.32/module/destination\n")),(0,l.kt)("h2",{id:"\u589e\u91cf\u5907\u4efd"},"\u589e\u91cf\u5907\u4efd"),(0,l.kt)("p",null,"rsync \u7684\u6700\u5927\u7279\u70b9\u5c31\u662f\u5b83\u53ef\u4ee5\u5b8c\u6210\u589e\u91cf\u5907\u4efd\uff0c\u4e5f\u5c31\u662f\u9ed8\u8ba4\u53ea\u590d\u5236\u6709\u53d8\u52a8\u7684\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u6e90\u76ee\u5f55\u4e0e\u76ee\u6807\u76ee\u5f55\u76f4\u63a5\u6bd4\u8f83\uff0crsync \u8fd8\u652f\u6301\u4f7f\u7528\u57fa\u51c6\u76ee\u5f55\uff0c\u5373\u5c06\u6e90\u76ee\u5f55\u4e0e\u57fa\u51c6\u76ee\u5f55\u4e4b\u95f4\u53d8\u52a8\u7684\u90e8\u5206\uff0c\u540c\u6b65\u5230\u76ee\u6807\u76ee\u5f55\u3002"),(0,l.kt)("p",null,"\u5177\u4f53\u505a\u6cd5\u662f\uff0c\u7b2c\u4e00\u6b21\u540c\u6b65\u662f\u5168\u91cf\u5907\u4efd\uff0c\u6240\u6709\u6587\u4ef6\u5728\u57fa\u51c6\u76ee\u5f55\u91cc\u9762\u540c\u6b65\u4e00\u4efd\u3002\u4ee5\u540e\u6bcf\u4e00\u6b21\u540c\u6b65\u90fd\u662f\u589e\u91cf\u5907\u4efd\uff0c\u53ea\u540c\u6b65\u6e90\u76ee\u5f55\u4e0e\u57fa\u51c6\u76ee\u5f55\u4e4b\u95f4\u6709\u53d8\u52a8\u7684\u90e8\u5206\uff0c\u5c06\u8fd9\u90e8\u5206\u4fdd\u5b58\u5728\u4e00\u4e2a\u65b0\u7684\u76ee\u6807\u76ee\u5f55\u3002\u8fd9\u4e2a\u65b0\u7684\u76ee\u6807\u76ee\u5f55\u4e4b\u4e2d\uff0c\u4e5f\u662f\u5305\u542b\u6240\u6709\u6587\u4ef6\uff0c\u4f46\u5b9e\u9645\u4e0a\uff0c\u53ea\u6709\u90a3\u4e9b\u53d8\u52a8\u8fc7\u7684\u6587\u4ef6\u662f\u5b58\u5728\u4e8e\u8be5\u76ee\u5f55\uff0c\u5176\u4ed6\u6ca1\u6709\u53d8\u52a8\u7684\u6587\u4ef6\u90fd\u662f\u6307\u5411\u57fa\u51c6\u76ee\u5f55\u6587\u4ef6\u7684\u786c\u94fe\u63a5\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--link-dest"),"\u53c2\u6570\u7528\u6765\u6307\u5b9a\u540c\u6b65\u65f6\u7684\u57fa\u51c6\u76ee\u5f55\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -a --delete --link-dest /compare/path /source/path /target/path\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"--link-dest"),"\u53c2\u6570\u6307\u5b9a\u57fa\u51c6\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"/compare/path"),"\uff0c\u7136\u540e\u6e90\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"/source/path"),"\u8ddf\u57fa\u51c6\u76ee\u5f55\u8fdb\u884c\u6bd4\u8f83\uff0c\u627e\u51fa\u53d8\u52a8\u7684\u6587\u4ef6\uff0c\u5c06\u5b83\u4eec\u62f7\u8d1d\u5230\u76ee\u6807\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"/target/path"),"\u3002\u90a3\u4e9b\u6ca1\u53d8\u52a8\u7684\u6587\u4ef6\u5219\u4f1a\u751f\u6210\u786c\u94fe\u63a5\u3002\u8fd9\u4e2a\u547d\u4ee4\u7684\u7b2c\u4e00\u6b21\u5907\u4efd\u65f6\u662f\u5168\u91cf\u5907\u4efd\uff0c\u540e\u9762\u5c31\u90fd\u662f\u589e\u91cf\u5907\u4efd\u4e86\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u811a\u672c\u793a\u4f8b\uff0c\u5907\u4efd\u7528\u6237\u7684\u4e3b\u76ee\u5f55\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# A script to perform incremental backups using rsync\n\nset -o errexit\nset -o nounset\nset -o pipefail\n\nreadonly SOURCE_DIR="${HOME}"\nreadonly BACKUP_DIR="/mnt/data/backups"\nreadonly DATETIME="$(date \'+%Y-%m-%d_%H:%M:%S\')"\nreadonly BACKUP_PATH="${BACKUP_DIR}/${DATETIME}"\nreadonly LATEST_LINK="${BACKUP_DIR}/latest"\n\nmkdir -p "${BACKUP_DIR}"\n\nrsync -av --delete \\\n  "${SOURCE_DIR}/" \\\n  --link-dest "${LATEST_LINK}" \\\n  --exclude=".cache" \\\n  "${BACKUP_PATH}"\n\nrm -rf "${LATEST_LINK}"\nln -s "${BACKUP_PATH}" "${LATEST_LINK}"\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u811a\u672c\u4e2d\uff0c\u6bcf\u4e00\u6b21\u540c\u6b65\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"${BACKUP_DIR}/${DATETIME}"),"\uff0c\u5e76\u5c06\u8f6f\u94fe\u63a5",(0,l.kt)("inlineCode",{parentName:"p"},"${BACKUP_DIR}/latest"),"\u6307\u5411\u8fd9\u4e2a\u76ee\u5f55\u3002\u4e0b\u4e00\u6b21\u5907\u4efd\u65f6\uff0c\u5c31\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"${BACKUP_DIR}/latest"),"\u4f5c\u4e3a\u57fa\u51c6\u76ee\u5f55\uff0c\u751f\u6210\u65b0\u7684\u5907\u4efd\u76ee\u5f55\u3002\u6700\u540e\uff0c\u518d\u5c06\u8f6f\u94fe\u63a5",(0,l.kt)("inlineCode",{parentName:"p"},"${BACKUP_DIR}/latest"),"\u6307\u5411\u65b0\u7684\u5907\u4efd\u76ee\u5f55\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-a"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"--archive"),"\u53c2\u6570\u8868\u793a\u5b58\u6863\u6a21\u5f0f\uff0c\u4fdd\u5b58\u6240\u6709\u7684\u5143\u6570\u636e\uff0c\u6bd4\u5982\u4fee\u6539\u65f6\u95f4\uff08modification time\uff09\u3001\u6743\u9650\u3001\u6240\u6709\u8005\u7b49\uff0c\u5e76\u4e14\u8f6f\u94fe\u63a5\u4e5f\u4f1a\u540c\u6b65\u8fc7\u53bb\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--append"),"\u53c2\u6570\u6307\u5b9a\u6587\u4ef6\u63a5\u7740\u4e0a\u6b21\u4e2d\u65ad\u7684\u5730\u65b9\uff0c\u7ee7\u7eed\u4f20\u8f93\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--append-verify"),"\u53c2\u6570\u8ddf",(0,l.kt)("inlineCode",{parentName:"p"},"--append"),"\u53c2\u6570\u7c7b\u4f3c\uff0c\u4f46\u4f1a\u5bf9\u4f20\u8f93\u5b8c\u6210\u540e\u7684\u6587\u4ef6\u8fdb\u884c\u4e00\u6b21\u6821\u9a8c\u3002\u5982\u679c\u6821\u9a8c\u5931\u8d25\uff0c\u5c06\u91cd\u65b0\u53d1\u9001\u6574\u4e2a\u6587\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-b"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"--backup"),"\u53c2\u6570\u6307\u5b9a\u5728\u5220\u9664\u6216\u66f4\u65b0\u76ee\u6807\u76ee\u5f55\u5df2\u7ecf\u5b58\u5728\u7684\u6587\u4ef6\u65f6\uff0c\u5c06\u8be5\u6587\u4ef6\u66f4\u540d\u540e\u8fdb\u884c\u5907\u4efd\uff0c\u9ed8\u8ba4\u884c\u4e3a\u662f\u5220\u9664\u3002\u66f4\u540d\u89c4\u5219\u662f\u6dfb\u52a0\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"--suffix"),"\u53c2\u6570\u6307\u5b9a\u7684\u6587\u4ef6\u540e\u7f00\u540d\uff0c\u9ed8\u8ba4\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"~"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--backup-dir"),"\u53c2\u6570\u6307\u5b9a\u6587\u4ef6\u5907\u4efd\u65f6\u5b58\u653e\u7684\u76ee\u5f55\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"--backup-dir=/path/to/backups"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--bwlimit"),"\u53c2\u6570\u6307\u5b9a\u5e26\u5bbd\u9650\u5236\uff0c\u9ed8\u8ba4\u5355\u4f4d\u662f KB/s\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"--bwlimit=100"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-c"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"--checksum"),"\u53c2\u6570\u6539\u53d8",(0,l.kt)("inlineCode",{parentName:"p"},"rsync"),"\u7684\u6821\u9a8c\u65b9\u5f0f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0crsync \u53ea\u68c0\u67e5\u6587\u4ef6\u7684\u5927\u5c0f\u548c\u6700\u540e\u4fee\u6539\u65e5\u671f\u662f\u5426\u53d1\u751f\u53d8\u5316\uff0c\u5982\u679c\u53d1\u751f\u53d8\u5316\uff0c\u5c31\u91cd\u65b0\u4f20\u8f93\uff1b\u4f7f\u7528\u8fd9\u4e2a\u53c2\u6570\u4ee5\u540e\uff0c\u5219\u901a\u8fc7\u5224\u65ad\u6587\u4ef6\u5185\u5bb9\u7684\u6821\u9a8c\u548c\uff0c\u51b3\u5b9a\u662f\u5426\u91cd\u65b0\u4f20\u8f93\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--delete"),"\u53c2\u6570\u5220\u9664\u53ea\u5b58\u5728\u4e8e\u76ee\u6807\u76ee\u5f55\u3001\u4e0d\u5b58\u5728\u4e8e\u6e90\u76ee\u6807\u7684\u6587\u4ef6\uff0c\u5373\u4fdd\u8bc1\u76ee\u6807\u76ee\u5f55\u662f\u6e90\u76ee\u6807\u7684\u955c\u50cf\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-e"),"\u53c2\u6570\u6307\u5b9a\u4f7f\u7528 SSH \u534f\u8bae\u4f20\u8f93\u6570\u636e\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--exclude"),"\u53c2\u6570\u6307\u5b9a\u6392\u9664\u4e0d\u8fdb\u884c\u540c\u6b65\u7684\u6587\u4ef6\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},'--exclude="*.iso"'),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--exclude-from"),"\u53c2\u6570\u6307\u5b9a\u4e00\u4e2a\u672c\u5730\u6587\u4ef6\uff0c\u91cc\u9762\u662f\u9700\u8981\u6392\u9664\u7684\u6587\u4ef6\u6a21\u5f0f\uff0c\u6bcf\u4e2a\u6a21\u5f0f\u4e00\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--existing"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-non-existing"),"\u53c2\u6570\u8868\u793a\u4e0d\u540c\u6b65\u76ee\u6807\u76ee\u5f55\u4e2d\u4e0d\u5b58\u5728\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-h"),"\u53c2\u6570\u8868\u793a\u4ee5\u4eba\u7c7b\u53ef\u8bfb\u7684\u683c\u5f0f\u8f93\u51fa\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-h"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"--help"),"\u53c2\u6570\u8fd4\u56de\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-i"),"\u53c2\u6570\u8868\u793a\u8f93\u51fa\u6e90\u76ee\u5f55\u4e0e\u76ee\u6807\u76ee\u5f55\u4e4b\u95f4\u6587\u4ef6\u5dee\u5f02\u7684\u8be6\u7ec6\u60c5\u51b5\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-existing"),"\u53c2\u6570\u8868\u793a\u53ea\u8981\u8be5\u6587\u4ef6\u5728\u76ee\u6807\u76ee\u5f55\u4e2d\u5df2\u7ecf\u5b58\u5728\uff0c\u5c31\u8df3\u8fc7\u53bb\uff0c\u4e0d\u518d\u540c\u6b65\u8fd9\u4e9b\u6587\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--include"),"\u53c2\u6570\u6307\u5b9a\u540c\u6b65\u65f6\u8981\u5305\u62ec\u7684\u6587\u4ef6\uff0c\u4e00\u822c\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"--exclude"),"\u7ed3\u5408\u4f7f\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--link-dest"),"\u53c2\u6570\u6307\u5b9a\u589e\u91cf\u5907\u4efd\u7684\u57fa\u51c6\u76ee\u5f55\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-m"),"\u53c2\u6570\u6307\u5b9a\u4e0d\u540c\u6b65\u7a7a\u76ee\u5f55\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--max-size"),"\u53c2\u6570\u8bbe\u7f6e\u4f20\u8f93\u7684\u6700\u5927\u6587\u4ef6\u7684\u5927\u5c0f\u9650\u5236\uff0c\u6bd4\u5982\u4e0d\u8d85\u8fc7200KB\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"--max-size='200k'"),"\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--min-size"),"\u53c2\u6570\u8bbe\u7f6e\u4f20\u8f93\u7684\u6700\u5c0f\u6587\u4ef6\u7684\u5927\u5c0f\u9650\u5236\uff0c\u6bd4\u5982\u4e0d\u5c0f\u4e8e10KB\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"--min-size=10k"),"\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-n"),"\u53c2\u6570\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"--dry-run"),"\u53c2\u6570\u6a21\u62df\u5c06\u8981\u6267\u884c\u7684\u64cd\u4f5c\uff0c\u800c\u5e76\u4e0d\u771f\u7684\u6267\u884c\u3002\u914d\u5408",(0,l.kt)("inlineCode",{parentName:"p"},"-v"),"\u53c2\u6570\u4f7f\u7528\uff0c\u53ef\u4ee5\u770b\u5230\u54ea\u4e9b\u5185\u5bb9\u4f1a\u88ab\u540c\u6b65\u8fc7\u53bb\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-P"),"\u53c2\u6570\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"--progress"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"--partial"),"\u8fd9\u4e24\u4e2a\u53c2\u6570\u7684\u7ed3\u5408\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--partial"),"\u53c2\u6570\u5141\u8bb8\u6062\u590d\u4e2d\u65ad\u7684\u4f20\u8f93\u3002\u4e0d\u4f7f\u7528\u8be5\u53c2\u6570\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"rsync"),"\u4f1a\u5220\u9664\u4f20\u8f93\u5230\u4e00\u534a\u88ab\u6253\u65ad\u7684\u6587\u4ef6\uff1b\u4f7f\u7528\u8be5\u53c2\u6570\u540e\uff0c\u4f20\u8f93\u5230\u4e00\u534a\u7684\u6587\u4ef6\u4e5f\u4f1a\u540c\u6b65\u5230\u76ee\u6807\u76ee\u5f55\uff0c\u4e0b\u6b21\u540c\u6b65\u65f6\u518d\u6062\u590d\u4e2d\u65ad\u7684\u4f20\u8f93\u3002\u4e00\u822c\u9700\u8981\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"--append"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"--append-verify"),"\u914d\u5408\u4f7f\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--partial-dir"),"\u53c2\u6570\u6307\u5b9a\u5c06\u4f20\u8f93\u5230\u4e00\u534a\u7684\u6587\u4ef6\u4fdd\u5b58\u5230\u4e00\u4e2a\u4e34\u65f6\u76ee\u5f55\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"--partial-dir=.rsync-partial"),"\u3002\u4e00\u822c\u9700\u8981\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"--append"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"--append-verify"),"\u914d\u5408\u4f7f\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--progress"),"\u53c2\u6570\u8868\u793a\u663e\u793a\u8fdb\u5c55\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-r"),"\u53c2\u6570\u8868\u793a\u9012\u5f52\uff0c\u5373\u5305\u542b\u5b50\u76ee\u5f55\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--remove-source-files"),"\u53c2\u6570\u8868\u793a\u4f20\u8f93\u6210\u529f\u540e\uff0c\u5220\u9664\u53d1\u9001\u65b9\u7684\u6587\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--size-only"),"\u53c2\u6570\u8868\u793a\u53ea\u540c\u6b65\u5927\u5c0f\u6709\u53d8\u5316\u7684\u6587\u4ef6\uff0c\u4e0d\u8003\u8651\u6587\u4ef6\u4fee\u6539\u65f6\u95f4\u7684\u5dee\u5f02\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--suffix"),"\u53c2\u6570\u6307\u5b9a\u6587\u4ef6\u540d\u5907\u4efd\u65f6\uff0c\u5bf9\u6587\u4ef6\u540d\u6dfb\u52a0\u7684\u540e\u7f00\uff0c\u9ed8\u8ba4\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"~"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-u"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"--update"),"\u53c2\u6570\u8868\u793a\u540c\u6b65\u65f6\u8df3\u8fc7\u76ee\u6807\u76ee\u5f55\u4e2d\u4fee\u6539\u65f6\u95f4\u66f4\u65b0\u7684\u6587\u4ef6\uff0c\u5373\u4e0d\u540c\u6b65\u8fd9\u4e9b\u6709\u66f4\u65b0\u7684\u65f6\u95f4\u6233\u7684\u6587\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-v"),"\u53c2\u6570\u8868\u793a\u8f93\u51fa\u7ec6\u8282\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"-vv"),"\u8868\u793a\u8f93\u51fa\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"-vvv"),"\u8868\u793a\u8f93\u51fa\u6700\u8be6\u7ec6\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--version"),"\u53c2\u6570\u8fd4\u56de rsync \u7684\u7248\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-z"),"\u53c2\u6570\u6307\u5b9a\u540c\u6b65\u65f6\u538b\u7f29\u6570\u636e\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps"},"How To Use Rsync to Sync Local and Remote Directories on a VPS"),", Justin Ellingwood"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.howtoforge.com/mirroring_with_rsync"},"Mirror Your Web Site With rsync"),", Falko Timme"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linuxconfig.org/examples-on-how-to-use-rsync-for-local-and-remote-data-backups-and-synchonization"},"Examples on how to use Rsync"),", Egidio Docile"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linuxconfig.org/how-to-create-incremental-backups-using-rsync-on-linux"},"How to create incremental backups using rsync on Linux"),", Egidio Docile")))}u.isMDXComponent=!0}}]);