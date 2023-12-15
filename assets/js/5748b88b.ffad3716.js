"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),k=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=k(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=k(n),N=l,c=u["".concat(o,".").concat(N)]||u[N]||d[N]||r;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=N;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},7720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var a=n(7462),l=(n(7294),n(3905));const r={id:"Dockerfile \u6587\u4ef6\u8be6\u89e3",title:"Dockerfile \u6587\u4ef6\u8be6\u89e3",data:"2022\u5e741\u670813\u65e5"},i=void 0,p={unversionedId:"Docker/Dockerfile \u6587\u4ef6\u8be6\u89e3",id:"Docker/Dockerfile \u6587\u4ef6\u8be6\u89e3",title:"Dockerfile \u6587\u4ef6\u8be6\u89e3",description:"Docker \u53ef\u4ee5\u901a\u8fc7\u8bfb\u53d6 Dockerfile \u4e2d\u7684\u6307\u4ee4\u81ea\u52a8\u6784\u5efa\u955c\u50cf\u3002 Dockerfile \u662f\u4e00\u4e2a\u6587\u672c\u6587\u6863\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u7528\u6237\u521b\u5efa\u955c\u50cf\u7684\u6240\u6709\u547d\u4ee4\u548c\u8bf4\u660e\u3002",source:"@site/example/dev/Docker/Dockerfile \u6587\u4ef6\u8be6\u89e3.md",sourceDirName:"Docker",slug:"/Docker/Dockerfile \u6587\u4ef6\u8be6\u89e3",permalink:"/dashboard-tryout/dev/Docker/Dockerfile \u6587\u4ef6\u8be6\u89e3",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/dev/Docker/Dockerfile \u6587\u4ef6\u8be6\u89e3.md",tags:[],version:"current",lastUpdatedBy:"Louis Law",lastUpdatedAt:1702627968,formattedLastUpdatedAt:"Dec 15, 2023",frontMatter:{id:"Dockerfile \u6587\u4ef6\u8be6\u89e3",title:"Dockerfile \u6587\u4ef6\u8be6\u89e3",data:"2022\u5e741\u670813\u65e5"},sidebar:"tutorialSidebar",previous:{title:"\u9762\u5bf9\u5bf9\u8c61",permalink:"/dashboard-tryout/dev/C++/\u9762\u5bf9\u5bf9\u8c61"},next:{title:"\u8d77\u6b65",permalink:"/dashboard-tryout/dev/Git/\u8d77\u6b65"}},o={},k=[{value:"\u4e00\u3001 \u53d8\u91cf",id:"\u4e00-\u53d8\u91cf",level:2},{value:"\u4e8c\u3001FROM",id:"\u4e8cfrom",level:2},{value:"\u4e09\u3001RUN",id:"\u4e09run",level:2},{value:"\u56db\u3001CMD",id:"\u56dbcmd",level:2},{value:"\u4e94\u3001LABEL",id:"\u4e94label",level:2},{value:"\u516d\u3001EXPOSE",id:"\u516dexpose",level:2},{value:"\u4e03\u3001ENV",id:"\u4e03env",level:2},{value:"\u516b\u3001ADD",id:"\u516badd",level:2},{value:"\u4e5d\u3001COPY",id:"\u4e5dcopy",level:2},{value:"\u5341\u3001ENTRYPOINT",id:"\u5341entrypoint",level:2},{value:"\u5341\u4e00\u3001VOLUME",id:"\u5341\u4e00volume",level:2},{value:"\u5341\u4e8c\u3001ARG",id:"\u5341\u4e8carg",level:2},{value:"\u5341\u4e09\u3001ONBUILD",id:"\u5341\u4e09onbuild",level:2},{value:"\u5341\u56db\u3001STOPSIGNAL",id:"\u5341\u56dbstopsignal",level:2},{value:"\u5341\u4e94\u3001HEALTHCHECK",id:"\u5341\u4e94healthcheck",level:2},{value:"\u5341\u516d\u3001SHELL",id:"\u5341\u516dshell",level:2},{value:"\u5341\u4e03\u3001WORKDIR",id:"\u5341\u4e03workdir",level:2},{value:"\u5341\u516b\u3001USER",id:"\u5341\u516buser",level:2}],m={toc:k},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Docker \u53ef\u4ee5\u901a\u8fc7\u8bfb\u53d6 Dockerfile \u4e2d\u7684\u6307\u4ee4\u81ea\u52a8\u6784\u5efa\u955c\u50cf\u3002 Dockerfile \u662f\u4e00\u4e2a\u6587\u672c\u6587\u6863\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u7528\u6237\u521b\u5efa\u955c\u50cf\u7684\u6240\u6709\u547d\u4ee4\u548c\u8bf4\u660e\u3002"),(0,l.kt)("h2",{id:"\u4e00-\u53d8\u91cf"},"\u4e00\u3001 \u53d8\u91cf"),(0,l.kt)("p",null,"\u53d8\u91cf\u7528 ",(0,l.kt)("strong",{parentName:"p"},"$variable_name")," \u6216\u8005 ",(0,l.kt)("strong",{parentName:"p"},"${variable_name}")," \u8868\u793a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"${variable:-word}"),"\u8868\u793a\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"li"},"variable"),"\u8bbe\u7f6e\uff0c\u5219\u7ed3\u679c\u5c06\u662f\u8be5\u503c\u3002\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"li"},"variable"),"\u672a\u8bbe\u7f6e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"word"),"\u5219\u5c06\u662f\u7ed3\u679c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"${variable:+word}"),"\u8868\u793a\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"li"},"variable"),"\u8bbe\u7f6e\u5219\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"word"),"\u7ed3\u679c\uff0c\u5426\u5219\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,l.kt)("p",null,"\u53d8\u91cf\u524d\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," \u53ef\u4ee5\u8f6c\u4e49\u6210\u666e\u901a\u5b57\u7b26\u4e32\uff1a`",(0,l.kt)("inlineCode",{parentName:"p"},"\\$foo")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"\\${foo}"),"\uff0c\u8868\u793a\u8f6c\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"$foo"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"${foo}"),"\u6587\u672c\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("h2",{id:"\u4e8cfrom"},"\u4e8c\u3001FROM"),(0,l.kt)("p",null,"\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684\u6784\u5efa\u9636\u6bb5\uff0c\u5e76\u8bbe\u7f6e\u57fa\u7840\u6620\u50cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"FROM [--platform=<platform>] <image> [AS <name>]\nFROM [--platform=<platform>] <image>[:<tag>] [AS <name>]\nFROM [--platform=<platform>] <image>[@<digest>] [AS <name>]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5355\u4e2a dockfile \u53ef\u4ee5\u591a\u6b21\u51fa\u73b0 ",(0,l.kt)("strong",{parentName:"li"},"FROM \uff0c"),"\u4ee5\u4f7f\u7528\u4e4b\u524d\u7684\u6784\u5efa\u9636\u6bb5\u4f5c\u4e3a\u53e6\u4e00\u4e2a\u6784\u5efa\u9636\u6bb5\u7684\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AS name"),"\u8868\u793a\u4e3a\u6784\u5efa\u9636\u6bb5\u547d\u540d\uff0c\u5728\u540e\u7eed",(0,l.kt)("inlineCode",{parentName:"li"},"FROM"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"COPY --from=<name>"),"\u8bf4\u660e\u4e2d\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u540d\u8bcd\uff0c\u5f15\u7528\u6b64\u9636\u6bb5\u6784\u5efa\u7684\u6620\u50cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"digest"),"\u5176\u5b9e\u5c31\u662f\u5c31\u662f\u6839\u636e\u955c\u50cf\u5185\u5bb9\u4ea7\u751f\u7684\u4e00\u4e2a ID\uff0c\u53ea\u8981\u955c\u50cf\u7684\u5185\u5bb9\u4e0d\u53d8 ",(0,l.kt)("strong",{parentName:"li"},"digest")," \u4e5f\u4e0d\u4f1a\u53d8\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tag"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"digest"),"\u503c\u662f\u53ef\u9009\u7684\u3002\u5982\u679c\u60a8\u7701\u7565\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\uff0c\u6784\u5efa\u5668\u9ed8\u8ba4\u4f7f\u7528\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"latest"),"\u6807\u7b7e\u3002\u5982\u679c\u627e\u4e0d\u5230\u8be5",(0,l.kt)("inlineCode",{parentName:"li"},"tag"),"\u503c\uff0c\u6784\u5efa\u5668\u5c06\u8fd4\u56de\u9519\u8bef\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--platform"),"\u6807\u5fd7\u53ef\u7528\u4e8e\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"FROM"),"\u5f15\u7528\u591a\u5e73\u53f0\u955c\u50cf\u7684\u60c5\u51b5\u4e0b\u6307\u5b9a\u5e73\u53f0\u3002\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"linux/amd64"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"linux/arm64"),"\u3001 \u6216",(0,l.kt)("inlineCode",{parentName:"li"},"windows/amd64"))),(0,l.kt)("h2",{id:"\u4e09run"},"\u4e09\u3001RUN"),(0,l.kt)("p",null,"\u5c06\u5728\u5f53\u524d\u955c\u50cf\u4e4b\u4e0a\u7684\u65b0\u5c42\u4e2d\u6267\u884c\u547d\u4ee4\uff0c\u5728 docker build \u65f6\u8fd0\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"RUN /bin/bash -c 'source $HOME/.bashrc; \\\necho $HOME'\n")),(0,l.kt)("p",null,"RUN \u6709\u4e24\u79cd\u5f62\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RUN <command>"),"\uff08shell \u5f62\u5f0f\uff0c\u547d\u4ee4\u5728 shell \u4e2d\u8fd0\u884c\uff0c\u9ed8\u8ba4",(0,l.kt)("inlineCode",{parentName:"li"},"/bin/sh -c"),"\u5728 Linux \u6216",(0,l.kt)("inlineCode",{parentName:"li"},"cmd /S /C"),"Windows \u4e0a\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'RUN ["executable", "param1", "param2"]'),"\uff08\u6267\u884c\u5f62\u5f0f\uff09\u3002")),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"\\"),"\uff08\u53cd\u659c\u6760\uff09\u5c06\u5355\u4e2a RUN \u6307\u4ee4\u5ef6\u7eed\u5230\u4e0b\u4e00\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RUN"),"\u5728\u4e0b\u4e00\u6b21\u6784\u5efa\u671f\u95f4\uff0c\u6307\u4ee4\u7f13\u5b58\u4e0d\u4f1a\u81ea\u52a8\u5931\u6548\u3002\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"--no-cache"),"\u6807\u5fd7\u4f7f\u6307\u4ee4\u7f13\u5b58\u65e0\u6548\u3002"),(0,l.kt)("li",{parentName:"ul"},"Dockerfile \u7684\u6307\u4ee4\u6bcf\u6267\u884c\u4e00\u6b21\u90fd\u4f1a\u5728 docker \u4e0a\u65b0\u5efa\u4e00\u5c42\u3002\u6240\u4ee5\u8fc7\u591a\u65e0\u610f\u4e49\u7684\u5c42\uff0c\u4f1a\u9020\u6210\u955c\u50cf\u81a8\u80c0\u8fc7\u5927\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"li"},"&&")," \u7b26\u53f7\u8fde\u63a5\u547d\u4ee4\uff0c\u8fd9\u6837\u6267\u884c\u540e\uff0c\u53ea\u4f1a\u521b\u5efa ",(0,l.kt)("strong",{parentName:"li"},"1\u5c42")," \u955c\u50cf\u3002")),(0,l.kt)("h2",{id:"\u56dbcmd"},"\u56db\u3001CMD"),(0,l.kt)("p",null,"\u8fd0\u884c\u7a0b\u5e8f\uff0c\u5728 docker run \u65f6\u8fd0\u884c\uff0c\u4f46\u662f\u548c run \u547d\u4ee4\u4e0d\u540c\uff0cRUN \u662f\u5728 docker build \u65f6\u8fd0\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'FROM ubuntu\nCMD ["/usr/bin/wc","--help"]\n')),(0,l.kt)("p",null,"\u652f\u6301\u4e09\u79cd\u683c\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'CMD ["executable","param1","param2"]')," \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"exec")," \u6267\u884c\uff0c\u63a8\u8350\u65b9\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CMD command param1 param2")," \u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"/bin/sh")," \u4e2d\u6267\u884c\uff0c\u63d0\u4f9b\u7ed9\u9700\u8981\u4ea4\u4e92\u7684\u5e94\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'CMD ["param1","param2"]')," \u63d0\u4f9b\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT")," \u7684\u9ed8\u8ba4\u53c2\u6570\u3002")),(0,l.kt)("p",null,"\u6307\u5b9a\u542f\u52a8\u5bb9\u5668\u65f6\u6267\u884c\u7684\u547d\u4ee4\uff0c\u6bcf\u4e2a Dockerfile \u53ea\u80fd\u6709\u4e00\u6761 ",(0,l.kt)("inlineCode",{parentName:"p"},"CMD")," \u547d\u4ee4\u3002\u5982\u679c\u6307\u5b9a\u4e86\u591a\u6761\u547d\u4ee4\uff0c\u53ea\u6709\u6700\u540e\u4e00\u6761\u4f1a\u88ab\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u7528\u6237\u542f\u52a8\u5bb9\u5668\u65f6\u5019\u6307\u5b9a\u4e86\u8fd0\u884c\u7684\u547d\u4ee4\uff0c\u5219\u4f1a\u8986\u76d6\u6389 ",(0,l.kt)("inlineCode",{parentName:"p"},"CMD")," \u6307\u5b9a\u7684\u547d\u4ee4\u3002"),(0,l.kt)("h2",{id:"\u4e94label"},"\u4e94\u3001LABEL"),(0,l.kt)("p",null,"\u6dfb\u52a0\u5143\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'LABEL multi.label1="value1" \\\n      multi.label2="value2" \\\n      other="value3"\n')),(0,l.kt)("h2",{id:"\u516dexpose"},"\u516d\u3001EXPOSE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"EXPOSE <port> [<port>/<protocol>...]\n")),(0,l.kt)("p",null,"Docker \u5bb9\u5668\u5728\u8fd0\u884c\u65f6\u4fa6\u542c\u6307\u5b9a\u7684\u7f51\u7edc\u7aef\u53e3\u3002\u53ef\u4ee5\u6307\u5b9a\u7aef\u53e3\u662f\u76d1\u542c TCP \u8fd8\u662f UDP \uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u534f\u8bae\uff0c\u9ed8\u8ba4\u4e3a TCP\u3002"),(0,l.kt)("p",null,"\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"EXPOSE"),"\u6307\u4ee4\u5b9e\u9645\u4e0a\u5e76\u672a\u53d1\u5e03\u7aef\u53e3\u3002\u8981\u5728\u8fd0\u884c\u5bb9\u5668\u65f6\u5b9e\u9645\u53d1\u5e03\u7aef\u53e3\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"docker run")," -P \u6765\u53d1\u5e03\u548c\u6620\u5c04\u4e00\u4e2a\u6216\u591a\u4e2a\u7aef\u53e3\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"EXPOSE"),"\u5047\u5b9a TCP\u3002\u60a8\u8fd8\u53ef\u4ee5\u6307\u5b9a UDP\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"EXPOSE 80/udp\n")),(0,l.kt)("h2",{id:"\u4e03env"},"\u4e03\u3001ENV"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ENV <key>=<value> ...\n")),(0,l.kt)("p",null,"\u8bbe\u7f6e\u7684\u73af\u5883\u53d8\u91cf\u5c06\u6301\u7eed\u5b58\u5728\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"docker inspect"),"\u6765\u67e5\u770b\u3002\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"docker run --env <key>=<value>"),"\u6765\u66f4\u6539\u73af\u5883\u53d8\u91cf\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u73af\u5883\u53d8\u91cf\u53ea\u5728\u6784\u5efa\u671f\u95f4\u9700\u8981\uff0c\u8bf7\u8003\u8651\u4e3a\u5355\u4e2a\u547d\u4ee4\u8bbe\u7f6e\u4e00\u4e2a\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y ...\n")),(0,l.kt)("p",null,"\u6216\u8005\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ARG"),"\uff0c\u5b83\u4e0d\u4f1a\u4fdd\u7559\u5728\u6700\u7ec8\u955c\u50cf\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ARG DEBIAN_FRONTEND=noninteractive\nRUN apt-get update && apt-get install -y ...\n")),(0,l.kt)("h2",{id:"\u516badd"},"\u516b\u3001ADD"),(0,l.kt)("p",null,"\u590d\u5236\u65b0\u6587\u4ef6\u3001\u76ee\u5f55\u6216\u8fdc\u7a0b\u6587\u4ef6 URL ",(0,l.kt)("inlineCode",{parentName:"p"},"<src>")," \uff0c\u5e76\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"<dest>"),"\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<src>"),"\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u8d44\u6e90\uff0c\u4f46\u5982\u679c\u5b83\u4eec\u662f\u6587\u4ef6\u6216\u76ee\u5f55\uff0c\u5219\u5b83\u4eec\u7684\u8def\u5f84\u88ab\u89e3\u91ca\u4e3a\u76f8\u5bf9\u4e8e\u6784\u5efa\u4e0a\u4e0b\u6587\u7684\u6e90\uff0c\u4e5f\u5c31\u662f ",(0,l.kt)("strong",{parentName:"p"},"WORKDIR"),"\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u90fd",(0,l.kt)("inlineCode",{parentName:"p"},"<src>"),"\u53ef\u80fd\u5305\u542b\u901a\u914d\u7b26\uff0c\u5339\u914d\u5c06\u4f7f\u7528 Go \u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=http%3A//golang.org/pkg/path/filepath%23Match"},"filepath.Match"),'\u89c4\u5219\u3002\u4f8b\u5982\uff1a\u6dfb\u52a0\u6240\u6709\u4ee5 "hom" \u5f00\u5934\u7684\u6587\u4ef6\uff1a'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ADD hom* /mydir/\n")),(0,l.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"?"),'\u88ab\u66ff\u6362\u4e3a\u4efb\u4f55\u5355\u4e2a\u5b57\u7b26\uff0c\u4f8b\u5982\uff1a"home.txt"\u3002'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ADD hom?.txt /mydir/\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<dest>"),"\u662f\u4e00\u4e2a\u7edd\u5bf9\u8def\u5f84\uff0c\u6216\u76f8\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u7684\u76f8\u5bf9\u8def\u5f84\u3002"),(0,l.kt)("h2",{id:"\u4e5dcopy"},"\u4e5d\u3001COPY"),(0,l.kt)("p",null,"\u8bed\u6cd5\u540c ADD \u4e00\u81f4\uff0c\u590d\u5236\u62f7\u8d1d\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"COPY \u6307\u4ee4\u548c ADD \u6307\u4ee4\u7684\u552f\u4e00\u533a\u522b\u5728\u4e8e\uff1a\u662f\u5426\u652f\u6301\u4ece\u8fdc\u7a0b URL \u83b7\u53d6\u8d44\u6e90\u3002COPY \u6307\u4ee4\u53ea\u80fd\u4ece\u6267\u884c docker build \u6240\u5728\u7684\u4e3b\u673a\u4e0a\u8bfb\u53d6\u8d44\u6e90\u5e76\u590d\u5236\u5230\u955c\u50cf\u4e2d\u3002\u800c ADD \u6307\u4ee4\u8fd8\u652f\u6301\u901a\u8fc7 URL \u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u8bfb\u53d6\u8d44\u6e90\u5e76\u590d\u5236\u5230\u955c\u50cf\u4e2d\u3002"),(0,l.kt)("p",null,"\u76f8\u540c\u9700\u6c42\u65f6\uff0c\u63a8\u8350\u4f7f\u7528 COPY \u6307\u4ee4\u3002ADD \u6307\u4ee4\u66f4\u64c5\u957f\u8bfb\u53d6\u672c\u5730 tar \u6587\u4ef6\u5e76\u89e3\u538b\u7f29\u3002"),(0,l.kt)("h2",{id:"\u5341entrypoint"},"\u5341\u3001ENTRYPOINT"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ENTRYPOINT")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"CMD")," \u4e00\u6837\uff0c\u90fd\u662f\u5728\u6307\u5b9a\u5bb9\u5668\u542f\u52a8\u7a0b\u5e8f\u53ca\u53c2\u6570\uff0c\u4e0d\u8fc7\u5b83\u4e0d\u4f1a\u88ab docker run \u7684\u547d\u4ee4\u884c\u53c2\u6570\u6307\u5b9a\u7684\u6307\u4ee4\u6240\u8986\u76d6\u3002\u5982\u679c\u8981\u8986\u76d6\u7684\u8bdd\uff0c\u9700\u8981\u901a\u8fc7 docker run --entrypoint \u6765\u6307\u5b9a\u3002"),(0,l.kt)("p",null,"\u5b83\u6709 2 \u79cd\u683c\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'ENTRYPOINT ["executable", "param1", "param2"]\nENTRYPOINT command param1 param2\n')),(0,l.kt)("p",null,"\u5f53\u6307\u5b9a\u4e86 ENTRYPOINT \u540e\uff0c CMD \u7684\u5185\u5bb9\u4f5c\u4e3a\u53c2\u6570\u4f20\u7ed9 ENTRYPOINT \u6307\u4ee4\uff0c\u5b9e\u9645\u6267\u884c\u65f6\uff0c\u5c06\u53d8\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"<ENTRYPOINT> <CMD>\n")),(0,l.kt)("h2",{id:"\u5341\u4e00volume"},"\u5341\u4e00\u3001VOLUME"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u6307\u5b9a\u540d\u79f0\u7684\u6302\u8f7d\u6570\u636e\u5377\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'VOLUME ["/var/log/"]\nVOLUME /var/log\n')),(0,l.kt)("p",null,"\u5b83\u7684\u4e3b\u8981\u4f5c\u7528\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d\u91cd\u8981\u7684\u6570\u636e\uff0c\u56e0\u5bb9\u5668\u91cd\u542f\u800c\u4e22\u5931"),(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d\u5bb9\u5668\u4e0d\u65ad\u53d8\u5927")),(0,l.kt)("h2",{id:"\u5341\u4e8carg"},"\u5341\u4e8c\u3001ARG"),(0,l.kt)("p",null,"\u5b9a\u4e49\u53d8\u91cf\uff0c\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"ENV")," \u4f5c\u7528\u76f8\u540c\uff0c\u4e0d\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"ARG"),"\u53d8\u91cf\u4e0d\u4f1a\u50cf",(0,l.kt)("inlineCode",{parentName:"p"},"ENV"),"\u53d8\u91cf\u90a3\u6837\u6301\u4e45\u5316\u5230\u6784\u5efa\u597d\u7684\u955c\u50cf\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ARG <name>[=<default value>]\n")),(0,l.kt)("p",null,"Docker \u6709\u4e00\u7ec4\u9884\u5b9a\u4e49\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ARG"),"\u53d8\u91cf\uff0c\u60a8\u53ef\u4ee5\u5728 Dockerfile \u4e2d\u6ca1\u6709\u76f8\u5e94\u6307\u4ee4\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u8fd9\u4e9b\u53d8\u91cf\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http_proxy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https_proxy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FTP_PROXY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ftp_proxy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NO_PROXY")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"no_proxy"))),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e9b\uff0c\u8bf7\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--build-arg"),"\u6807\u5fd7\u5728\u547d\u4ee4\u884c\u4e0a\u4f20\u9012\u5b83\u4eec\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"}," docker build --build-arg HTTPS_PROXY=https://my-proxy.example.com .\n")),(0,l.kt)("h2",{id:"\u5341\u4e09onbuild"},"\u5341\u4e09\u3001ONBUILD"),(0,l.kt)("p",null,"\u5c06\u4e00\u4e2a\u89e6\u53d1\u6307\u4ee4\u6dfb\u52a0\u5230\u955c\u50cf\u4e2d\uff0c\u4ee5\u4fbf\u7a0d\u540e\u5728\u8be5\u955c\u50cf\u7528\u4f5c\u53e6\u4e00\u4e2a\u6784\u5efa\u7684\u57fa\u7840\u65f6\u6267\u884c\u3002\u4e5f\u5c31\u662f\u53e6\u5916\u4e00\u4e2a dockerfile FROM \u4e86\u8fd9\u4e2a\u955c\u50cf\u7684\u65f6\u5019\u6267\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ONBUILD ADD . /app/src\nONBUILD RUN /usr/local/bin/python-build --dir /app/src\n")),(0,l.kt)("h2",{id:"\u5341\u56dbstopsignal"},"\u5341\u56db\u3001STOPSIGNAL"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u5c06\u53d1\u9001\u5230\u5bb9\u5668\u9000\u51fa\u7684\u7cfb\u7edf\u8c03\u7528\u4fe1\u53f7\u3002\u8be5\u4fe1\u53f7\u53ef\u4ee5\u662f\u4e0e\u5185\u6838\u7cfb\u7edf\u8c03\u7528\u8868\u4e2d\u7684\u4f4d\u7f6e\u5339\u914d\u7684\u6709\u6548\u65e0\u7b26\u53f7\u6570\uff0c\u4f8b\u5982 9\uff0c\u6216\u683c\u5f0f\u4e3a SIGNAME \u7684\u4fe1\u53f7\u540d\u79f0\uff0c\u4f8b\u5982 SIGKILL\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"STOPSIGNAL signal\n")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u7684 stop-signal \u662f ",(0,l.kt)("strong",{parentName:"p"},"SIGTERM"),"\uff0c\u5728 docker stop \u7684\u65f6\u5019\u4f1a\u7ed9\u5bb9\u5668\u5185 PID \u4e3a 1 \u7684\u8fdb\u7a0b\u53d1\u9001\u8fd9\u4e2a signal\uff0c\u901a\u8fc7 --stop-signal \u53ef\u4ee5\u8bbe\u7f6e\u81ea\u5df1\u9700\u8981\u7684 signal\uff0c\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u8ba9\u5bb9\u5668\u5185\u7684\u5e94\u7528\u7a0b\u5e8f\u5728\u63a5\u6536\u5230 signal \u4e4b\u540e\u53ef\u4ee5\u5148\u5904\u7406\u4e00\u4e9b\u4e8b\u7269\uff0c\u5b9e\u73b0\u5bb9\u5668\u7684\u5e73\u6ed1\u9000\u51fa\uff0c\u5982\u679c\u4e0d\u505a\u4efb\u4f55\u5904\u7406\uff0c\u5bb9\u5668\u5c06\u5728\u4e00\u6bb5\u65f6\u95f4\u4e4b\u540e\u5f3a\u5236\u9000\u51fa\uff0c\u4f1a\u9020\u6210\u4e1a\u52a1\u7684\u5f3a\u5236\u4e2d\u65ad\uff0c\u9ed8\u8ba4\u65f6\u95f4\u662f 10s\u3002"),(0,l.kt)("h2",{id:"\u5341\u4e94healthcheck"},"\u5341\u4e94\u3001HEALTHCHECK"),(0,l.kt)("p",null,"\u7528\u4e8e\u6307\u5b9a\u67d0\u4e2a\u7a0b\u5e8f\u6216\u8005\u6307\u4ee4\u6765\u76d1\u63a7 docker \u5bb9\u5668\u670d\u52a1\u7684\u8fd0\u884c\u72b6\u6001\u3002\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"HEALTHCHECK"),"\u6307\u4ee4\u6709\u4e24\u79cd\u5f62\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HEALTHCHECK [OPTIONS] CMD command")," \uff08\u901a\u8fc7\u5728\u5bb9\u5668\u5185\u8fd0\u884c\u547d\u4ee4\u6765\u68c0\u67e5\u5bb9\u5668\u5065\u5eb7\u72b6\u51b5\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HEALTHCHECK NONE")," \uff08\u7981\u7528\u4ece\u57fa\u7840\u955c\u50cf\u7ee7\u627f\u7684\u4efb\u4f55\u5065\u5eb7\u68c0\u67e5\uff09")),(0,l.kt)("h2",{id:"\u5341\u516dshell"},"\u5341\u516d\u3001SHELL"),(0,l.kt)("p",null,"\u8986\u76d6\u7528\u4e8e\u547d\u4ee4\u7684 ",(0,l.kt)("strong",{parentName:"p"},"shell")," \u5f62\u5f0f\u7684\u9ed8\u8ba4 shell\u3002Linux \u4e0a\u7684\u9ed8\u8ba4 shell \u662f",(0,l.kt)("inlineCode",{parentName:"p"},'["/bin/sh", "-c"]'),"\uff0cWindows \u4e0a\u662f",(0,l.kt)("inlineCode",{parentName:"p"},'["cmd", "/S", "/C"]')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'SHELL ["executable", "parameters"] \n')),(0,l.kt)("p",null,"\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"SHELL"),"\u6307\u4ee4\u5728 Windows \u4e0a\u7279\u522b\u6709\u7528\uff0c\u56e0\u4e3a Windows \u6709\u4e24\u79cd\u5e38\u7528\u4e14\u622a\u7136\u4e0d\u540c\u7684\u672c\u673a shell\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"cmd"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"powershell"),"\uff0c\u4ee5\u53ca\u53ef\u7528\u7684\u5907\u7528 shell\uff0c\u5305\u62ec",(0,l.kt)("inlineCode",{parentName:"p"},"sh"),"\u3002\u8be5 SHELL \u6307\u4ee4\u53ef\u4ee5\u51fa\u73b0\u591a\u6b21\u3002\u6bcf\u6761 SHELL \u6307\u4ee4\u90fd\u4f1a\u8986\u76d6\u6240\u6709\u5148\u524d\u7684 SHELL \u6307\u4ee4\uff0c\u5e76\u5f71\u54cd\u6240\u6709\u540e\u7eed\u6307\u4ee4\u3002"),(0,l.kt)("h2",{id:"\u5341\u4e03workdir"},"\u5341\u4e03\u3001WORKDIR"),(0,l.kt)("p",null,"\u5de5\u4f5c\u76ee\u5f55\uff0c\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u4e0d\u5b58\u5728\uff0c\u5373\u4f7f\u5b83\u6ca1\u6709\u5728\u540e\u7eed",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\u6307\u4ee4\u4e2d\u4f7f\u7528\uff0c\u5b83\u4e5f\u4f1a\u88ab\u521b\u5efa\u3002"),(0,l.kt)("p",null,"docker build \u6784\u5efa\u955c\u50cf\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u4e00\u4e2a RUN \u547d\u4ee4\u90fd\u4f1a\u65b0\u5efa\u4e00\u5c42\u3002\u53ea\u6709\u901a\u8fc7 WORKDIR \u521b\u5efa\u7684\u76ee\u5f55\u624d\u4f1a\u4e00\u76f4\u5b58\u5728\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a WORKDIR\uff0c\u5982\u679c\u63d0\u4f9b\u4e86\u76f8\u5bf9\u8def\u5f84\uff0c\u5b83\u5c06\u76f8\u5bf9\u4e8e\u524d\u4e00\u6761",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u6307\u4ee4\u7684\u8def\u5f84\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"WORKDIR /a\nWORKDIR b\nWORKDIR c\nRUN pwd \n")),(0,l.kt)("p",null,"\u6700\u7ec8",(0,l.kt)("inlineCode",{parentName:"p"},"pwd"),"\u547d\u4ee4\u7684\u8f93\u51fa\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"/a/b/c"),"."),(0,l.kt)("p",null,"\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u6307\u4ee4\u53ef\u4ee5\u89e3\u6790\u5148\u524d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ENV"),"\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ENV DIRPATH=/path\nWORKDIR $DIRPATH/$DIRNAME\nRUN pwd\n")),(0,l.kt)("p",null,"\u6700\u7ec8",(0,l.kt)("inlineCode",{parentName:"p"},"pwd"),"\u547d\u4ee4\u7684\u8f93\u51fa\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"/path/$DIRNAME"),"\u3002"),(0,l.kt)("h2",{id:"\u5341\u516buser"},"\u5341\u516b\u3001USER"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u7528\u6237\u540d\uff08\u6216 UID\uff09\u548c\u53ef\u9009\u7684\u7528\u6237\u7ec4\uff08\u6216 GID\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"USER <user>[:<group>]\nUSER <UID>[:<GID>]\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Dockerfile\u6587\u4ef6\u5168\u9762\u8be6\u89e3 - \u9752\u706b\u7684\u6587\u7ae0 - \u77e5\u4e4e ",(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/387855002"},"https://zhuanlan.zhihu.com/p/387855002"))))}d.isMDXComponent=!0}}]);