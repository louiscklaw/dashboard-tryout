"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8956],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>u});var t=r(6540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=t.createContext({}),o=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=o(e.components);return t.createElement(i.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=o(r),y=l,u=g["".concat(i,".").concat(y)]||g[y]||m[y]||a;return r?t.createElement(u,p(p({ref:n},c),{},{components:r})):t.createElement(u,p({ref:n},c))}));function u(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,p=new Array(a);p[0]=y;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[g]="string"==typeof e?e:l,p[1]=s;for(var o=2;o<a;o++)p[o]=r[o];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3003:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var t=r(8168),l=(r(6540),r(5680));const a={},p="string.h",s={unversionedId:"C/lib \u6807\u51c6\u5e93/string.h",id:"C/lib \u6807\u51c6\u5e93/string.h",title:"string.h",description:"string.h\u4e3b\u8981\u5b9a\u4e49\u4e86\u5b57\u7b26\u4e32\u5904\u7406\u51fd\u6570\u548c\u5185\u5b58\u64cd\u4f5c\u51fd\u6570\u3002",source:"@site/example/dev/C/lib \u6807\u51c6\u5e93/string.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/string.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/string.h",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/dev/C/lib \u6807\u51c6\u5e93/string.h.md",tags:[],version:"current",lastUpdatedBy:"Louis Law, louiscklaw",lastUpdatedAt:1712045647,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stdlib.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/stdlib.h"},next:{title:"time.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/time.h"}},i={},o=[{value:"\u5b57\u7b26\u4e32\u5904\u7406\u51fd\u6570",id:"\u5b57\u7b26\u4e32\u5904\u7406\u51fd\u6570",level:2},{value:"strchr()\uff0cstrrchr()",id:"strchrstrrchr",level:3},{value:"strspn()\uff0cstrcspn()",id:"strspnstrcspn",level:3},{value:"strpbrk()",id:"strpbrk",level:3},{value:"strstr()",id:"strstr",level:3},{value:"strtok()",id:"strtok",level:3},{value:"strcoll()",id:"strcoll",level:3},{value:"strxfrm()",id:"strxfrm",level:3},{value:"strerror()",id:"strerror",level:3},{value:"\u5185\u5b58\u64cd\u4f5c\u51fd\u6570",id:"\u5185\u5b58\u64cd\u4f5c\u51fd\u6570",level:2},{value:"memchr()",id:"memchr",level:3},{value:"memset()",id:"memset",level:3},{value:"\u5176\u4ed6\u51fd\u6570",id:"\u5176\u4ed6\u51fd\u6570",level:2}],c={toc:o},g="wrapper";function m(e){let{components:n,...r}=e;return(0,l.yg)(g,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"stringh"},"string.h"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"string.h"),"\u4e3b\u8981\u5b9a\u4e49\u4e86\u5b57\u7b26\u4e32\u5904\u7406\u51fd\u6570\u548c\u5185\u5b58\u64cd\u4f5c\u51fd\u6570\u3002"),(0,l.yg)("h2",{id:"\u5b57\u7b26\u4e32\u5904\u7406\u51fd\u6570"},"\u5b57\u7b26\u4e32\u5904\u7406\u51fd\u6570"),(0,l.yg)("p",null,"\u4ee5\u4e0b\u5b57\u7b26\u4e32\u5904\u7406\u51fd\u6570\uff0c\u8be6\u89c1\u300a\u5b57\u7b26\u4e32\u300b\u4e00\u7ae0\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"strcpy()\uff1a\u590d\u5236\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("li",{parentName:"ul"},"strncpy()\uff1a\u590d\u5236\u5b57\u7b26\u4e32\uff0c\u6709\u957f\u5ea6\u9650\u5236\u3002"),(0,l.yg)("li",{parentName:"ul"},"strcat()\uff1a\u8fde\u63a5\u4e24\u4e2a\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("li",{parentName:"ul"},"strncat()\uff1a\u8fde\u63a5\u4e24\u4e2a\u5b57\u7b26\u4e32\uff0c\u6709\u957f\u5ea6\u9650\u5236\u3002"),(0,l.yg)("li",{parentName:"ul"},"strcmp()\uff1a\u6bd4\u8f83\u4e24\u4e2a\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("li",{parentName:"ul"},"strncmp()\uff1a\u6bd4\u8f83\u4e24\u4e2a\u5b57\u7b26\u4e32\uff0c\u6709\u957f\u5ea6\u9650\u5236\u3002"),(0,l.yg)("li",{parentName:"ul"},"strlen()\uff1a\u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u5b57\u8282\u6570\u3002")),(0,l.yg)("h3",{id:"strchrstrrchr"},"strchr()\uff0cstrrchr()"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"strchr()"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"strrchr()"),"\u90fd\u7528\u4e8e\u5728\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u6307\u5b9a\u5b57\u7b26\u3002\u4e0d\u540c\u4e4b\u5904\u662f\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"strchr()"),"\u4ece\u5b57\u7b26\u4e32\u5f00\u5934\u5f00\u59cb\u67e5\u627e\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"strrchr()"),"\u4ece\u5b57\u7b26\u4e32\u7ed3\u5c3e\u5f00\u59cb\u67e5\u627e\uff0c\u51fd\u6570\u540d\u91cc\u9762\u591a\u51fa\u6765\u7684\u90a3\u4e2a",(0,l.yg)("inlineCode",{parentName:"p"},"r"),"\u8868\u793a reverse\uff08\u53cd\u5411\uff09\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"char* strchr(char* str, int c);\nchar* strrchr(char *str, int c);\n")),(0,l.yg)("p",null,"\u5b83\u4eec\u90fd\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u5b57\u7b26\u4e32\u6307\u9488\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6240\u8981\u67e5\u627e\u7684\u5b57\u7b26\u3002"),(0,l.yg)("p",null,"\u4e00\u65e6\u627e\u5230\u8be5\u5b57\u7b26\uff0c\u5b83\u4eec\u5c31\u4f1a\u505c\u6b62\u67e5\u627e\uff0c\u5e76\u8fd4\u56de\u6307\u5411\u8be5\u5b57\u7b26\u7684\u6307\u9488\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,l.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"char *str = \"Hello, world!\";\nchar *p;\n\np = strchr(str, ',');  // p \u6307\u5411\u9017\u53f7\u7684\u4f4d\u7f6e\np = strrchr(str, 'o'); // p \u6307\u5411 world \u91cc\u9762 o \u7684\u4f4d\u7f6e\n")),(0,l.yg)("h3",{id:"strspnstrcspn"},"strspn()\uff0cstrcspn()"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"strspn()"),"\u7528\u6765\u67e5\u627e\u5c5e\u4e8e\u6307\u5b9a\u5b57\u7b26\u96c6\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"strcspn()"),"\u6b63\u597d\u76f8\u53cd\uff0c\u7528\u6765\u67e5\u627e\u4e0d\u5c5e\u4e8e\u6307\u5b9a\u5b57\u7b26\u96c6\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"size_t strspn(char* str, const char* accept);\nsize_t strcspn(char *str, const char *reject);\n")),(0,l.yg)("p",null,"\u8fd9\u4e24\u4e2a\u51fd\u6570\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6e90\u5b57\u7b26\u4e32\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u7531\u6307\u5b9a\u5b57\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"strspn()"),"\u4ece\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u5f00\u5934\u5f00\u59cb\u67e5\u627e\uff0c\u4e00\u65e6\u53d1\u73b0\u7b2c\u4e00\u4e2a\u4e0d\u5c5e\u4e8e\u6307\u5b9a\u5b57\u7b26\u96c6\u8303\u56f4\u7684\u5b57\u7b26\uff0c\u5c31\u505c\u6b62\u67e5\u627e\uff0c\u8fd4\u56de\u5230\u76ee\u524d\u4e3a\u6b62\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u3002\u5982\u679c\u59cb\u7ec8\u6ca1\u6709\u4e0d\u5728\u6307\u5b9a\u5b57\u7b26\u96c6\u7684\u5b57\u7b26\uff0c\u5219\u8fd4\u56de\u7b2c\u4e00\u4e2a\u53c2\u6570\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"strcspn()"),"\u5219\u662f\u4e00\u65e6\u53d1\u73b0\u7b2c\u4e00\u4e2a\u5c5e\u4e8e\u6307\u5b9a\u5b57\u7b26\u96c6\u8303\u56f4\u7684\u5b57\u7b26\uff0c\u5c31\u505c\u6b62\u67e5\u627e\uff0c\u8fd4\u56de\u5230\u76ee\u524d\u4e3a\u6b62\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u3002\u5982\u679c\u59cb\u7ec8\u6ca1\u6709\u53d1\u73b0\u6307\u5b9a\u5b57\u7b26\u96c6\u7684\u5b57\u7b26\uff0c\u5219\u8fd4\u56de\u7b2c\u4e00\u4e2a\u53c2\u6570\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},'char str[] = "hello world";\nint n;\n\nn = strspn(str1, "aeiou");\nprintf("%d\\n", n);  // n == 0\n\nn = strcspn(str1, "aeiou");\nprintf("%d\\n", n); // n == 1\n')),(0,l.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u7b2c\u4e00\u4e2a",(0,l.yg)("inlineCode",{parentName:"p"},"n"),"\u7b49\u4e8e0\uff0c\u56e0\u4e3a0\u53f7\u4f4d\u7f6e\u7684\u5b57\u7b26",(0,l.yg)("inlineCode",{parentName:"p"},"h"),"\u5c31\u4e0d\u5c5e\u4e8e\u6307\u5b9a\u5b57\u7b26\u96c6",(0,l.yg)("inlineCode",{parentName:"p"},"aeiou"),"\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u5f00\u5934\u67090\u4e2a\u5b57\u7b26\u5c5e\u4e8e\u6307\u5b9a\u5b57\u7b26\u96c6\u3002\u7b2c\u4e8c\u4e2a",(0,l.yg)("inlineCode",{parentName:"p"},"n"),"\u7b49\u4e8e1\uff0c\u56e0\u4e3a1\u53f7\u4f4d\u7f6e\u7684\u5b57\u7b26",(0,l.yg)("inlineCode",{parentName:"p"},"e"),"\u5c5e\u4e8e\u6307\u5b9a\u5b57\u7b26\u96c6",(0,l.yg)("inlineCode",{parentName:"p"},"aeiou"),"\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u5f00\u5934\u67091\u4e2a\u5b57\u7b26\u4e0d\u5c5e\u4e8e\u6307\u5b9a\u5b57\u7b26\u96c6\u3002"),(0,l.yg)("h3",{id:"strpbrk"},"strpbrk()"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"strpbrk()"),"\u5728\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u6307\u5b9a\u5b57\u7b26\u96c6\u7684\u4efb\u4e00\u4e2a\u5b57\u7b26\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"char* strpbrk(const char* s1, const char* s2);\n")),(0,l.yg)("p",null,"\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6e90\u5b57\u7b26\u4e32\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u7531\u6307\u5b9a\u5b57\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("p",null,"\u5b83\u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u7b2c\u4e00\u4e2a\u5339\u914d\u5b57\u7b26\u7684\u6307\u9488\uff0c\u5982\u679c\u672a\u627e\u5230\u5339\u914d\u5b57\u7b26\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},'char* s1 = "Hello, world!";\nchar* s2 = "dow!";\n\nchar* p = strpbrk(s1, s2);\n\nprintf("%s\\n", p);  // "o, world!"\n')),(0,l.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u6307\u5b9a\u5b57\u7b26\u96c6\u662f\u201cdow!\u201d\uff0c\u90a3\u4e48",(0,l.yg)("inlineCode",{parentName:"p"},"s1"),"\u91cc\u9762\u7b2c\u4e00\u4e2a\u5339\u914d\u5b57\u7b26\u662f\u201cHello\u201d\u7684\u201co\u201d\uff0c\u6240\u4ee5\u6307\u9488",(0,l.yg)("inlineCode",{parentName:"p"},"p"),"\u6307\u5411\u8fd9\u4e2a\u5b57\u7b26\u3002\u8f93\u51fa\u7684\u8bdd\uff0c\u5c31\u4f1a\u8f93\u51fa\u4ece\u8fd9\u4e2a\u5b57\u7b26\u76f4\u5230\u5b57\u7b26\u4e32\u672b\u5c3e\u7684\u201co, world!\u201d\u3002"),(0,l.yg)("h3",{id:"strstr"},"strstr()"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"strstr()"),"\u5728\u4e00\u4e2a\u5b57\u7b26\u4e32\u91cc\u9762\uff0c\u67e5\u627e\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"char *strstr(\n  const char* str,\n  const char* substr\n);\n")),(0,l.yg)("p",null,"\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6e90\u5b57\u7b26\u4e32\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6240\u8981\u67e5\u627e\u7684\u5b50\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5c31\u8fd4\u56de\u4e00\u4e2a\u6307\u9488\uff0c\u6307\u5411\u6e90\u5b57\u7b26\u4e32\u91cc\u9762\u7684\u5b50\u5b57\u7b26\u4e32\u3002\u5982\u679c\u5339\u914d\u5931\u8d25\uff0c\u5c31\u8fd4\u56de NULL\uff0c\u8868\u793a\u65e0\u6cd5\u627e\u5230\u5b50\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},'char* str = "The quick brown fox jumped over the lazy dogs.";\nchar* p = strstr(str, "lazy");\n\nprintf("%s\\n", p == NULL ? "null": p); // "lazy dogs."\n')),(0,l.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"strstr()"),"\u7528\u6765\u5728\u6e90\u5b57\u7b26\u4e32",(0,l.yg)("inlineCode",{parentName:"p"},"str"),"\u91cc\u9762\uff0c\u67e5\u627e\u5b50\u5b57\u7b26\u4e32",(0,l.yg)("inlineCode",{parentName:"p"},"lazy"),"\u3002\u4ece\u8fd4\u56de\u7684\u6307\u9488\u5230\u5b57\u7b26\u4e32\u7ed3\u5c3e\uff0c\u5c31\u662f\u201clazy dogs.\u201d\u3002"),(0,l.yg)("h3",{id:"strtok"},"strtok()"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"strtok()"),"\u7528\u6765\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u6309\u7167\u6307\u5b9a\u7684\u5206\u9694\u7b26\uff08delimiter\uff09\uff0c\u5206\u89e3\u6210\u4e00\u7cfb\u5217\u8bcd\u5143\uff08tokens\uff09\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"char* strtok(char* str, const char* delim);\n")),(0,l.yg)("p",null,"\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u5f85\u62c6\u5206\u7684\u5b57\u7b26\u4e32\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6307\u5b9a\u7684\u5206\u9694\u7b26\u3002"),(0,l.yg)("p",null,"\u5b83\u8fd4\u56de\u4e00\u4e2a\u6307\u9488\uff0c\u6307\u5411\u5206\u89e3\u51fa\u6765\u7684\u7b2c\u4e00\u4e2a\u8bcd\u5143\uff0c\u5e76\u5c06\u8bcd\u5143\u7ed3\u675f\u4e4b\u5904\u7684\u5206\u9694\u7b26\u66ff\u6362\u6210\u5b57\u7b26\u4e32\u7ed3\u5c3e\u6807\u5fd7",(0,l.yg)("inlineCode",{parentName:"p"},"\\0"),"\u3002\u5982\u679c\u6ca1\u6709\u5f85\u5206\u89e3\u7684\u8bcd\u5143\uff0c\u5b83\u8fd4\u56de NULL\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u8981\u904d\u5386\u6240\u6709\u8bcd\u5143\uff0c\u5c31\u5fc5\u987b\u5faa\u73af\u8c03\u7528\uff0c\u53c2\u8003\u4e0b\u9762\u7684\u4f8b\u5b50\u3002"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"strtok()"),"\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u5982\u679c\u662f NULL\uff0c\u5219\u8868\u793a\u4ece\u4e0a\u4e00\u6b21",(0,l.yg)("inlineCode",{parentName:"p"},"strtok()"),"\u5206\u89e3\u7ed3\u675f\u7684\u4f4d\u7f6e\uff0c\u7ee7\u7eed\u5f80\u4e0b\u5206\u89e3\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n  char string[] = "This is a sentence with 7 tokens";\n  char* tokenPtr = strtok(string, " ");\n\n  while (tokenPtr != NULL) {\n    printf("%s\\n", tokenPtr);\n    tokenPtr = strtok(NULL, " ");\n  }\n}\n')),(0,l.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u5c06\u6e90\u5b57\u7b26\u4e32\u6309\u7167\u7a7a\u683c\uff0c\u5206\u89e3\u8bcd\u5143\u3002\u5b83\u7684\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"This\nis\na\nsentence\nwith\n7\ntokens\n")),(0,l.yg)("p",null,"\u6ce8\u610f\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"strtok()"),"\u4f1a\u4fee\u6539\u539f\u59cb\u5b57\u7b26\u4e32\uff0c\u5c06\u6240\u6709\u5206\u9694\u7b26\u90fd\u66ff\u6362\u6210\u5b57\u7b26\u4e32\u7ed3\u5c3e\u7b26\u53f7",(0,l.yg)("inlineCode",{parentName:"p"},"\\0"),"\u3002\u56e0\u6b64\uff0c\u6700\u597d\u751f\u6210\u4e00\u4e2a\u539f\u59cb\u5b57\u7b26\u4e32\u7684\u62f7\u8d1d\uff0c\u7136\u540e\u518d\u5bf9\u8fd9\u4e2a\u62f7\u8d1d\u6267\u884c",(0,l.yg)("inlineCode",{parentName:"p"},"strtok()"),"\u3002"),(0,l.yg)("h3",{id:"strcoll"},"strcoll()"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"strcoll()"),"\u7528\u4e8e\u6bd4\u8f83\u4e24\u4e2a\u542f\u7528\u4e86\u672c\u5730\u5316\u8bbe\u7f6e\u7684\u5b57\u7b26\u4e32\uff0c\u7528\u6cd5\u57fa\u672c\u4e0e",(0,l.yg)("inlineCode",{parentName:"p"},"strcmp()"),"\u76f8\u540c\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"int strcoll(const char *s1, const char *s2);\n")),(0,l.yg)("p",null,"\u8bf7\u770b\u4e0b\u9762\u7684\u793a\u4f8b\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},'setlocale(LC_ALL, "");\n\n// \u62a5\u544a \xe9 > f\nprintf("%d\\n", strcmp("\xe9", "f"));  \n\n// \u62a5\u544a \xe9 < f\nprintf("%d\\n", strcoll("\xe9", "f"));\n')),(0,l.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u6bd4\u8f83\u5e26\u91cd\u97f3\u7b26\u53f7\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"\xe9"),"\u4e0e",(0,l.yg)("inlineCode",{parentName:"p"},"f"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"strcmp()"),"\u4f1a\u8fd4\u56de",(0,l.yg)("inlineCode",{parentName:"p"},"\xe9"),"\u5927\u4e8e",(0,l.yg)("inlineCode",{parentName:"p"},"f"),"\uff0c\u800c",(0,l.yg)("inlineCode",{parentName:"p"},"strcoll()"),"\u5c31\u4f1a\u6b63\u786e\u8bc6\u522b",(0,l.yg)("inlineCode",{parentName:"p"},"\xe9"),"\u6392\u5728",(0,l.yg)("inlineCode",{parentName:"p"},"f"),"\u524d\u9762\uff0c\u6240\u4ee5\u5c0f\u4e8e",(0,l.yg)("inlineCode",{parentName:"p"},"f"),"\u3002\u6ce8\u610f\uff0c\u5728\u6bd4\u8f83\u4e4b\u524d\uff0c\u9700\u8981\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},'setlocale(LC_ALL, "")'),"\uff0c\u542f\u7528\u672c\u5730\u5316\u8bbe\u7f6e\u3002"),(0,l.yg)("h3",{id:"strxfrm"},"strxfrm()"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"strxfrm()"),"\u5c06\u4e00\u4e2a\u672c\u5730\u5316\u5b57\u7b26\u4e32\u8f6c\u6210\u53ef\u4ee5\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"strcmp()"),"\u8fdb\u884c\u6bd4\u8f83\u7684\u5f62\u5f0f\uff0c\u76f8\u5f53\u4e8e",(0,l.yg)("inlineCode",{parentName:"p"},"strcoll()"),"\u5185\u90e8\u7684\u7b2c\u4e00\u90e8\u5206\u64cd\u4f5c\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"size_t strxfrm(\n  char * restrict s1, \n  const char * restrict s2, \n  size_t n\n);\n")),(0,l.yg)("p",null,"\u5b83\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff0c\u5c06\u7b2c\u4e8c\u4e2a\u53c2\u6570",(0,l.yg)("inlineCode",{parentName:"p"},"s2"),"\u8f6c\u4e3a\u53ef\u4ee5\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"strcmp()"),"\u6bd4\u8f83\u7684\u5f62\u5f0f\uff0c\u5e76\u5c06\u7ed3\u679c\u5b58\u5165\u7b2c\u4e00\u4e2a\u53c2\u6570",(0,l.yg)("inlineCode",{parentName:"p"},"s1"),"\u3002\u7b2c\u4e09\u4e2a\u53c2\u6570",(0,l.yg)("inlineCode",{parentName:"p"},"n"),"\u7528\u6765\u9650\u5b9a\u5199\u5165\u7684\u5b57\u7b26\u6570\uff0c\u9632\u6b62\u8d85\u51fa",(0,l.yg)("inlineCode",{parentName:"p"},"s1"),"\u7684\u8fb9\u754c\u3002"),(0,l.yg)("p",null,"\u5b83\u8fd4\u56de\u8f6c\u6362\u540e\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\uff0c\u4e0d\u5305\u62ec\u7ed3\u5c3e\u7684\u7ec8\u6b62\u7b26\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f NULL\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f0\uff0c\u5219\u4e0d\u8fdb\u884c\u5b9e\u9645\u7684\u8f6c\u6362\uff0c\u53ea\u8fd4\u56de\u8f6c\u6362\u540e\u6240\u9700\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u3002"),(0,l.yg)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u662f\u7528\u8fd9\u4e2a\u51fd\u6570\u81ea\u5df1\u5b9e\u73b0\u4e00\u4e2a",(0,l.yg)("inlineCode",{parentName:"p"},"strcoll()"),"\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"int my_strcoll(char* s1, char* s2) {\n  int len1 = strxfrm(NULL, s1, 0) + 1;\n  int len2 = strxfrm(NULL, s2, 0) + 1;\n\n  char *d1 = malloc(len1);\n  char *d2 = malloc(len2);\n\n  strxfrm(d1, s1, len1);\n  strxfrm(d2, s2, len2);\n\n  int result = strcmp(d1, d2);\n\n  free(d2);\n  free(d1);\n\n  return result;\n}\n")),(0,l.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u5148\u4e3a\u4e24\u4e2a\u8fdb\u884c\u6bd4\u8f83\u7684\u672c\u5730\u5316\u5b57\u7b26\u4e32\uff0c\u5206\u914d\u8f6c\u6362\u540e\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"strxfrm()"),"\u5c06\u5b83\u4eec\u8f6c\u4e3a\u53ef\u6bd4\u8f83\u7684\u5f62\u5f0f\uff0c\u518d\u7528",(0,l.yg)("inlineCode",{parentName:"p"},"strcmp()"),"\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,l.yg)("h3",{id:"strerror"},"strerror()"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"strerror()"),"\u51fd\u6570\u8fd4\u56de\u7279\u5b9a\u9519\u8bef\u7684\u8bf4\u660e\u5b57\u7b26\u4e32\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"char *strerror(int errornum);\n")),(0,l.yg)("p",null,"\u5b83\u7684\u53c2\u6570\u662f\u9519\u8bef\u7684\u7f16\u53f7\uff0c\u7531",(0,l.yg)("inlineCode",{parentName:"p"},"errno.h"),"\u5b9a\u4e49\u3002\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u6307\u5411\u8bf4\u660e\u5b57\u7b26\u4e32\u7684\u6307\u9488\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},'// \u8f93\u51fa No such file or directory\nprintf("%s\\n", strerror(2));\n')),(0,l.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u8f93\u51fa2\u53f7\u9519\u8bef\u7684\u8bf4\u660e\u5b57\u7b26\u201cNo such file or directory\u201c\u3002"),(0,l.yg)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u662f\u81ea\u5b9a\u4e49\u62a5\u9519\u4fe1\u606f\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <string.h>\n#include <errno.h>\n\nint main(void) {\n  FILE* fp = fopen("NONEXISTENT_FILE.TXT", "r");\n\n  if (fp == NULL) {\n    char* errmsg = strerror(errno);\n    printf("Error %d opening file: %s\\n", errno, errmsg);\n  }\n}\n')),(0,l.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u901a\u8fc7",(0,l.yg)("inlineCode",{parentName:"p"},"strerror(errno)"),"\u62ff\u5230\u5f53\u524d\u7684\u9ed8\u8ba4\u62a5\u9519\u4fe1\u606f\uff0c\u5176\u4e2d",(0,l.yg)("inlineCode",{parentName:"p"},"errno"),"\u662f",(0,l.yg)("inlineCode",{parentName:"p"},"errno.h"),"\u5b9a\u4e49\u7684\u5b8f\uff0c\u8868\u793a\u5f53\u524d\u7684\u62a5\u9519\u7f16\u53f7\u3002\u7136\u540e\uff0c\u518d\u8f93\u51fa\u4e00\u6761\u81ea\u5b9a\u4e49\u7684\u62a5\u9519\u4fe1\u606f\u3002"),(0,l.yg)("h2",{id:"\u5185\u5b58\u64cd\u4f5c\u51fd\u6570"},"\u5185\u5b58\u64cd\u4f5c\u51fd\u6570"),(0,l.yg)("p",null,"\u4ee5\u4e0b\u5185\u5b58\u64cd\u4f5c\u51fd\u6570\uff0c\u8be6\u89c1\u300a\u5185\u5b58\u7ba1\u7406\u300b\u4e00\u7ae0\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"memcpy()\uff1a\u5185\u5b58\u590d\u5236\u51fd\u6570\u3002"),(0,l.yg)("li",{parentName:"ul"},"memmove()\uff1a\u5185\u5b58\u590d\u5236\u51fd\u6570\uff08\u5141\u8bb8\u91cd\u53e0\uff09\u3002"),(0,l.yg)("li",{parentName:"ul"},"memcmp()\uff1a\u6bd4\u8f83\u4e24\u4e2a\u5185\u5b58\u533a\u57df\u3002")),(0,l.yg)("h3",{id:"memchr"},"memchr()"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"memchr()"),"\u7528\u4e8e\u5728\u5185\u5b58\u533a\u57df\u4e2d\u67e5\u627e\u6307\u5b9a\u5b57\u7b26\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"void* memchr(const void* s, int c, size_t n);\n")),(0,l.yg)("p",null,"\u5b83\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u5185\u5b58\u533a\u57df\u7684\u6307\u9488\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6240\u8981\u67e5\u627e\u7684\u5b57\u7b26\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u5185\u5b58\u533a\u57df\u7684\u5b57\u8282\u957f\u5ea6\u3002"),(0,l.yg)("p",null,"\u4e00\u65e6\u627e\u5230\uff0c\u5b83\u5c31\u4f1a\u505c\u6b62\u67e5\u627e\uff0c\u5e76\u8fd4\u56de\u6307\u5411\u8be5\u4f4d\u7f6e\u7684\u6307\u9488\u3002\u5982\u679c\u76f4\u5230\u68c0\u67e5\u5b8c\u6307\u5b9a\u7684\u5b57\u8282\u6570\uff0c\u4f9d\u7136\u6ca1\u6709\u53d1\u73b0\u6307\u5b9a\u5b57\u7b26\uff0c\u5219\u8fd4\u56de NULL\u3002"),(0,l.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"char *str = \"Hello, world!\";\nchar *p;\n\np = memchr(str, '!', 13); // p \u6307\u5411\u611f\u53f9\u53f7\u7684\u4f4d\u7f6e\n")),(0,l.yg)("h3",{id:"memset"},"memset()"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"memset()"),"\u5c06\u4e00\u6bb5\u5185\u5b58\u5168\u90e8\u683c\u5f0f\u5316\u4e3a\u6307\u5b9a\u503c\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"void* memset(void* s, int c, size_t n);\n")),(0,l.yg)("p",null,"\u5b83\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6307\u9488\uff0c\u6307\u5411\u5185\u5b58\u533a\u57df\u7684\u5f00\u59cb\u4f4d\u7f6e\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5f85\u5199\u5165\u7684\u5b57\u7b26\u503c\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u8868\u793a\u9700\u8981\u683c\u5f0f\u5316\u7684\u5b57\u8282\u6570\u3002\u5b83\u8fd4\u56de\u7b2c\u4e00\u4e2a\u53c2\u6570\uff08\u6307\u9488\uff09\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"memset(p, ' ', N);\n")),(0,l.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0cp \u662f\u4e00\u4e2a\u6307\u9488\uff0c\u6307\u5411\u4e00\u4e2a\u957f\u5ea6\u4e3a N \u4e2a\u5b57\u8282\u7684\u5185\u5b58\u533a\u57df\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"memset()"),"\u5c06\u8be5\u5757\u5185\u5b58\u533a\u57df\u7684\u6bcf\u4e2a\u5b57\u8282\uff0c\u90fd\u6539\u5199\u4e3a\u7a7a\u683c\u5b57\u7b26\u3002"),(0,l.yg)("p",null,"\u4e0b\u9762\u662f\u53e6\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},'char string1[15] = "BBBBBBBBBBBBBB";\n\n// \u8f93\u51fa bbbbbbbBBBBBBB\nprintf("%s\\n", (char*) memset(string1, \'b\', 7));\n')),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"memset()"),"\u7684\u4e00\u4e2a\u91cd\u8981\u7528\u9014\uff0c\u5c31\u662f\u5c06\u6570\u7ec4\u6210\u5458\u5168\u90e8\u521d\u59cb\u5316\u4e3a0\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"memset(arr, 0, sizeof(arr));\n")),(0,l.yg)("p",null,"\u4e0b\u9762\u662f\u5c06 Struct \u7ed3\u6784\u90fd\u521d\u59cb\u5316\u4e3a0\u7684\u4f8b\u5b50\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"struct banana {\n  float ripeness;\n  char *peel_color;\n  int grams;\n};\n\nstruct banana b;\n\nmemset(&b, 0, sizeof b);\n\nb.ripeness == 0.0;     // True\nb.peel_color == NULL;  // True\nb.grams == 0;          // True\n")),(0,l.yg)("p",null,"\u4e0a\u9762\u793a\u4f8b\uff0c\u5c06 Struct banana \u7684\u5b9e\u4f8b b \u7684\u6240\u6709\u5c5e\u6027\u90fd\u521d\u59cb\u5316\u4e3a0\u3002"),(0,l.yg)("h2",{id:"\u5176\u4ed6\u51fd\u6570"},"\u5176\u4ed6\u51fd\u6570"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-c"},"void* memset(void* a, int c, size_t n);\n\nsize_t strlen(const char* s);\n")))}m.isMDXComponent=!0}}]);