"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3474],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>w});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=r.createContext({}),o=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,p=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=o(n),w=l,k=m["".concat(p,".").concat(w)]||m[w]||s[w]||a;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function w(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:l,i[1]=c;for(var o=2;o<a;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5017:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(7462),l=(n(7294),n(3905));const a={},i="wchar.h",c={unversionedId:"C/lib \u6807\u51c6\u5e93/wchar.h",id:"C/lib \u6807\u51c6\u5e93/wchar.h",title:"wchar.h",description:"\u5bbd\u5b57\u7b26\u4f7f\u7528\u4e24\u4e2a\u6216\u56db\u4e2a\u5b57\u8282\u8868\u793a\u4e00\u4e2a\u5b57\u7b26\uff0c\u5bfc\u81f4 C \u8bed\u8a00\u5e38\u89c4\u7684\u5b57\u7b26\u5904\u7406\u51fd\u6570\u90fd\u4f1a\u5931\u6548\u3002wchar.h \u5b9a\u4e49\u4e86\u8bb8\u591a\u5bbd\u5b57\u7b26\u4e13\u7528\u7684\u5904\u7406\u51fd\u6570\u3002",source:"@site/dev/C/lib \u6807\u51c6\u5e93/wchar.h.md",sourceDirName:"C/lib \u6807\u51c6\u5e93",slug:"/C/lib \u6807\u51c6\u5e93/wchar.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/wchar.h",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/dev/C/lib \u6807\u51c6\u5e93/wchar.h.md",tags:[],version:"current",lastUpdatedBy:"louiscklaw",lastUpdatedAt:1665123489,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"time.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/time.h"},next:{title:"wctype.h",permalink:"/dashboard-tryout/dev/C/lib \u6807\u51c6\u5e93/wctype.h"}},p={},o=[{value:"\u7c7b\u578b\u522b\u540d\u548c\u5b8f",id:"\u7c7b\u578b\u522b\u540d\u548c\u5b8f",level:2},{value:"btowc()\uff0cwctob()",id:"btowcwctob",level:2},{value:"fwide()",id:"fwide",level:2},{value:"\u5bbd\u5b57\u7b26\u4e13\u7528\u51fd\u6570",id:"\u5bbd\u5b57\u7b26\u4e13\u7528\u51fd\u6570",level:2},{value:"\u591a\u5b57\u8282\u5b57\u7b26\u4e13\u7528\u51fd\u6570",id:"\u591a\u5b57\u8282\u5b57\u7b26\u4e13\u7528\u51fd\u6570",level:2}],u={toc:o};function s(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wcharh"},"wchar.h"),(0,l.kt)("p",null,"\u5bbd\u5b57\u7b26\u4f7f\u7528\u4e24\u4e2a\u6216\u56db\u4e2a\u5b57\u8282\u8868\u793a\u4e00\u4e2a\u5b57\u7b26\uff0c\u5bfc\u81f4 C \u8bed\u8a00\u5e38\u89c4\u7684\u5b57\u7b26\u5904\u7406\u51fd\u6570\u90fd\u4f1a\u5931\u6548\u3002wchar.h \u5b9a\u4e49\u4e86\u8bb8\u591a\u5bbd\u5b57\u7b26\u4e13\u7528\u7684\u5904\u7406\u51fd\u6570\u3002"),(0,l.kt)("h2",{id:"\u7c7b\u578b\u522b\u540d\u548c\u5b8f"},"\u7c7b\u578b\u522b\u540d\u548c\u5b8f"),(0,l.kt)("p",null,"wchar.h \u5b9a\u4e49\u4e86\u4e00\u4e2a\u7c7b\u578b\u522b\u540d wint_t\uff0c\u8868\u793a\u5bbd\u5b57\u7b26\u5bf9\u5e94\u6574\u6570\u503c\u3002"),(0,l.kt)("p",null,"wchar.h \u8fd8\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5b8f WEOF\uff0c\u8868\u793a\u6587\u4ef6\u7ed3\u675f\u5b57\u7b26 EOF \u7684\u5bbd\u5b57\u7b26\u7248\u3002"),(0,l.kt)("h2",{id:"btowcwctob"},"btowc()\uff0cwctob()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"btowc()"),"\u5c06\u5355\u5b57\u8282\u5b57\u7b26\u8f6c\u6362\u4e3a\u5bbd\u5b57\u7b26\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"wctob()"),"\u5c06\u5bbd\u5b57\u7b26\u8f6c\u6362\u4e3a\u5355\u5b57\u8282\u5b57\u7b26\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"wint_t btowc(int c);\nint wctob(wint_t c);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"btowc()"),"\u8fd4\u56de\u4e00\u4e2a\u5bbd\u5b57\u7b26\u3002\u5982\u679c\u53c2\u6570\u662f EOF\uff0c\u6216\u8f6c\u6362\u5931\u8d25\uff0c\u5219\u8fd4\u56de WEOF\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wctob()"),"\u8fd4\u56de\u4e00\u4e2a\u5355\u5b57\u8282\u5b57\u7b26\u3002\u5982\u679c\u53c2\u6570\u662f WEOF\uff0c\u6216\u8005\u53c2\u6570\u5bbd\u5b57\u7b26\u65e0\u6cd5\u5bf9\u5e94\u5355\u4e2a\u7684\u5355\u5b57\u8282\u5b57\u7b26\uff0c\u5219\u8fd4\u56de EOF\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u7528\u6cd5\u793a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'wint_t wc = btowc(\'B\'); \n\n// \u8f93\u51fa\u5bbd\u5b57\u7b26 B\nwprintf(L"Wide character: %lc\\n", wc);\n\nunsigned char c = wctob(wc);\n\n// \u8f93\u51fa\u5355\u5b57\u8282\u5b57\u7b26 B\nwprintf(L"Single-byte character: %c\\n", c);\n')),(0,l.kt)("h2",{id:"fwide"},"fwide()"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fwide()"),"\u7528\u6765\u8bbe\u7f6e\u4e00\u4e2a\u5b57\u8282\u6d41\u662f\u5bbd\u5b57\u7b26\u6d41\uff0c\u8fd8\u662f\u591a\u5b57\u8282\u5b57\u7b26\u6d41\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u5bbd\u5b57\u7b26\u4e13\u7528\u51fd\u6570\u5904\u7406\u5b57\u8282\u6d41\uff0c\u5c31\u4f1a\u9ed8\u8ba4\u8bbe\u7f6e\u5b57\u8282\u6d41\u4e3a\u5bbd\u5b57\u7b26\u6d41\uff0c\u5426\u5219\u5c31\u9700\u8981\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"fwide()"),"\u663e\u5f0f\u8bbe\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int fwide(FILE* stream, int mode);\n")),(0,l.kt)("p",null,"\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6587\u4ef6\u6307\u9488\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5b57\u8282\u6d41\u6a21\u5f0f\uff0c\u6709\u4e09\u79cd\u9009\u62e9\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0\uff1a\u5b57\u8282\u6d41\u6a21\u5f0f\u4fdd\u6301\u539f\u6837\u3002"),(0,l.kt)("li",{parentName:"ul"},"-1\uff08\u6216\u5176\u4ed6\u8d1f\u503c\uff09\uff1a\u8bbe\u4e3a\u591a\u5b57\u8282\u5b57\u7b26\u6d41\u3002"),(0,l.kt)("li",{parentName:"ul"},"1\uff08\u6216\u5176\u4ed6\u6b63\u503c\uff09\uff1a\u8bbe\u4e3a\u5bbd\u5b57\u7b26\u6d41\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fwide()"),"\u7684\u8fd4\u56de\u503c\u4e5f\u5206\u6210\u4e09\u79cd\u60c5\u51b5\uff1a\u5982\u679c\u662f\u5bbd\u5b57\u7b26\u6d41\uff0c\u8fd4\u56de\u4e00\u4e2a\u6b63\u503c\uff1b\u5982\u679c\u662f\u591a\u5b57\u8282\u5b57\u7b26\u6d41\uff0c\u8fd4\u56de\u4e00\u4e2a\u8d1f\u503c\uff1b\u5982\u679c\u662f\u666e\u901a\u5b57\u7b26\u6d41\uff0c\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\u3002"),(0,l.kt)("p",null,"\u4e00\u65e6\u8bbe\u7f6e\u4e86\u5b57\u8282\u6d41\u6a21\u5f0f\uff0c\u5c31\u65e0\u6cd5\u518d\u66f4\u6539\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <wchar.h>\n\nint main(void) {\n  wprintf(L"Hello world!\\n");\n  int mode = fwide(stdout, 0);\n  wprintf(L"Stream is %ls-oriented\\n", mode < 0 ? L"byte" : L"wide");\n}\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"wprintf()"),"\u5c06\u5b57\u8282\u6d41\u9690\u5f0f\u8bbe\u4e3a\u5bbd\u5b57\u7b26\u6a21\u5f0f\uff0c\u6240\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"fwide(stdout, 0)"),"\u7684\u8fd4\u56de\u503c\u5927\u4e8e\u96f6\u3002"),(0,l.kt)("h2",{id:"\u5bbd\u5b57\u7b26\u4e13\u7528\u51fd\u6570"},"\u5bbd\u5b57\u7b26\u4e13\u7528\u51fd\u6570"),(0,l.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e9b\u51fd\u6570\u57fa\u672c\u90fd\u662f stdio.h \u91cc\u9762\u7684\u5b57\u7b26\u5904\u7406\u51fd\u6570\u7684\u5bbd\u5b57\u7b26\u7248\u672c\uff0c\u5fc5\u987b\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u6765\u64cd\u4f5c\u5bbd\u5b57\u7b26\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fgetwc()\t\u4ece\u5bbd\u5b57\u7b26\u6d41\u4e2d\u83b7\u53d6\u5bbd\u5b57\u7b26\uff0c\u5bf9\u5e94 fgetc()\u3002"),(0,l.kt)("li",{parentName:"ul"},"fgetws()\t\u4ece\u5bbd\u5b57\u7b26\u6d41\u4e2d\u8bfb\u53d6\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 fgets()\u3002"),(0,l.kt)("li",{parentName:"ul"},"fputwc()\t\u5c06\u5bbd\u5b57\u7b26\u5199\u5165\u5bbd\u5b57\u7b26\u6d41\uff0c\u5bf9\u5e94 fputc()\u3002"),(0,l.kt)("li",{parentName:"ul"},"fputws()\t\u5c06\u5bbd\u5b57\u7b26\u4e32\u5199\u5165\u5bbd\u5b57\u7b26\u6d41\uff0c\u5bf9\u5e94 fputs()\u3002"),(0,l.kt)("li",{parentName:"ul"},"fwprintf()\t\u683c\u5f0f\u5316\u5bbd\u8f93\u51fa\u5230\u5bbd\u5b57\u7b26\u6d41\uff0c\u5bf9\u5e94 fprintf()\u3002"),(0,l.kt)("li",{parentName:"ul"},"fwscanf()\t\u6765\u81ea\u5bbd\u5b57\u7b26\u6d41\u7684\u683c\u5f0f\u5316\u5bbd\u5b57\u7b26\u8f93\u5165\uff0c\u5bf9\u5e94 fscanf()\u3002"),(0,l.kt)("li",{parentName:"ul"},"getwchar()\t\u4ece stdin \u83b7\u53d6\u4e00\u4e2a\u5bbd\u5b57\u7b26\uff0c\u5bf9\u5e94 getchar()\u3002"),(0,l.kt)("li",{parentName:"ul"},"getwc()\t\u4ece stdin \u83b7\u53d6\u4e00\u4e2a\u5bbd\u5b57\u7b26\uff0c\u5bf9\u5e94 getc()\u3002"),(0,l.kt)("li",{parentName:"ul"},"putwchar()\t\u5199\u4e00\u4e2a\u5bbd\u5b57\u7b26\u5230 stdout\uff0c\u5bf9\u5e94 putchar()\u3002"),(0,l.kt)("li",{parentName:"ul"},"putwc()\t\u5199\u4e00\u4e2a\u5bbd\u5b57\u7b26\u5230 stdout\uff0c\u5bf9\u5e94 putc()\u3002"),(0,l.kt)("li",{parentName:"ul"},"swprintf()\t\u683c\u5f0f\u5316\u5bbd\u8f93\u51fa\u5230\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 sprintf()\u3002"),(0,l.kt)("li",{parentName:"ul"},"swscanf()\t\u6765\u81ea\u5bbd\u5b57\u7b26\u4e32\u7684\u683c\u5f0f\u5316\u5bbd\u8f93\u5165\uff0c\u5bf9\u5e94 sscanf()\u3002"),(0,l.kt)("li",{parentName:"ul"},"ungetwc()\t\u5c06\u5bbd\u5b57\u7b26\u63a8\u56de\u8f93\u5165\u6d41\uff0c\u5bf9\u5e94 ungetc()\u3002"),(0,l.kt)("li",{parentName:"ul"},"vfwprintf()\t\u53ef\u53d8\u53c2\u6570\u7684\u683c\u5f0f\u5316\u5bbd\u5b57\u7b26\u8f93\u51fa\u5230\u5bbd\u5b57\u7b26\u6d41\uff0c\u5bf9\u5e94 vfprintf()\u3002"),(0,l.kt)("li",{parentName:"ul"},"vfwscanf()\t\u6765\u81ea\u5bbd\u5b57\u7b26\u6d41\u7684\u53ef\u53d8\u53c2\u6570\u683c\u5f0f\u5316\u5bbd\u5b57\u7b26\u8f93\u5165\uff0c\u5bf9\u5e94 vfscanf()\u3002"),(0,l.kt)("li",{parentName:"ul"},"vswprintf()\t\u53ef\u53d8\u53c2\u6570\u7684\u683c\u5f0f\u5316\u5bbd\u5b57\u7b26\u8f93\u51fa\u5230\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 vswprintf()\u3002"),(0,l.kt)("li",{parentName:"ul"},"vswscanf()\t\u6765\u81ea\u5bbd\u5b57\u7b26\u4e32\u7684\u53ef\u53d8\u53c2\u6570\u683c\u5f0f\u5316\u5bbd\u5b57\u7b26\u8f93\u5165\uff0c\u5bf9\u5e94 vsscanf()\u3002"),(0,l.kt)("li",{parentName:"ul"},"vwprintf()\t\u53ef\u53d8\u53c2\u6570\u683c\u5f0f\u5316\u5bbd\u5b57\u7b26\u8f93\u51fa\uff0c\u5bf9\u5e94 vprintf()\u3002"),(0,l.kt)("li",{parentName:"ul"},"vwscanf()\t\u53ef\u53d8\u53c2\u6570\u7684\u683c\u5f0f\u5316\u5bbd\u5b57\u7b26\u8f93\u5165\uff0c\u5bf9\u5e94 vscanf()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcscat()\t\u5371\u9669\u5730\u8fde\u63a5\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 strcat()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcschr()\t\u5728\u5bbd\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u5bbd\u5b57\u7b26\uff0c\u5bf9\u5e94 strchr()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcscmp()\t\u6bd4\u8f83\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 strcmp()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcscoll()\t\u6bd4\u8f83\u4e24\u4e2a\u8003\u8651\u8bed\u8a00\u73af\u5883\u7684\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 strcoll()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcscpy()\t\u5371\u9669\u5730\u590d\u5236\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 strcpy()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcscspn()\t\u4e0d\u662f\u4ece\u5bbd\u5b57\u7b26\u4e32\u524d\u9762\u5f00\u59cb\u8ba1\u7b97\u5b57\u7b26\uff0c\u5bf9\u5e94 strcspn()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcsftime()\t\u683c\u5f0f\u5316\u7684\u65e5\u671f\u548c\u65f6\u95f4\u8f93\u51fa\uff0c\u5bf9\u5e94 strftime()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcslen()\t\u8fd4\u56de\u5bbd\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\uff0c\u5bf9\u5e94 strlen()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcsncat()\t\u66f4\u5b89\u5168\u5730\u8fde\u63a5\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 strncat()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcsncmp()\t\u6bd4\u8f83\u5bbd\u5b57\u7b26\u4e32\uff0c\u957f\u5ea6\u6709\u9650\uff0c\u5bf9\u5e94 strncmp()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcsncpy()\t\u66f4\u5b89\u5168\u5730\u590d\u5236\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 strncpy()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcspbrk()\t\u5728\u5bbd\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u4e00\u7ec4\u5bbd\u5b57\u7b26\u4e2d\u7684\u4e00\u4e2a\uff0c\u5bf9\u5e94 strpbrk()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcsrchr()\t\u4ece\u672b\u5c3e\u5f00\u59cb\u5728\u5bbd\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u5bbd\u5b57\u7b26\uff0c\u5bf9\u5e94 strrchr()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcsspn()\t\u4ece\u5bbd\u5b57\u7b26\u4e32\u524d\u9762\u7684\u96c6\u5408\u4e2d\u8ba1\u7b97\u5b57\u7b26\uff0c\u5bf9\u5e94 strspn()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcsstr()\t\u5728\u53e6\u4e00\u4e2a\u5bbd\u5b57\u7b26\u4e32\u4e2d\u627e\u5230\u4e00\u4e2a\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 strstr()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcstod()\t\u5c06\u5bbd\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a double\uff0c\u5bf9\u5e94 strtod()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcstof()\t\u5c06\u5bbd\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a float\uff0c\u5bf9\u5e94 strtof()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcstok()\t\u6807\u8bb0\u4e00\u4e2a\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 strtok()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcstold()\t\u5c06\u5bbd\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a long double\uff0c\u5bf9\u5e94 strtold()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcstoll()\t\u5c06\u5bbd\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a long long\uff0c\u5bf9\u5e94 strtoll()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcstol()\t\u5c06\u5bbd\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a long\uff0c\u5bf9\u5e94 strtol()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcstoull()\t\u5c06\u5bbd\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a unsigned long long\uff0c\u5bf9\u5e94 strtoull()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcstoul()\t\u5c06\u5bbd\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a unsigned long\uff0c\u5bf9\u5e94 strtoul()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcsxfrm()\t\u8f6c\u6362\u5bbd\u5b57\u7b26\u4e32\u4ee5\u6839\u636e\u8bed\u8a00\u73af\u5883\u8fdb\u884c\u6bd4\u8f83\uff0c\u5bf9\u5e94 strxfrm()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wmemcmp()\t\u6bd4\u8f83\u5185\u5b58\u4e2d\u7684\u5bbd\u5b57\u7b26\uff0c\u5bf9\u5e94 memcmp()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wmemcpy()\t\u590d\u5236\u5bbd\u5b57\u7b26\u5185\u5b58\uff0c\u5bf9\u5e94 memcpy()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wmemmove()\t\u590d\u5236\u5bbd\u5b57\u7b26\u5185\u5b58\uff0c\u53ef\u80fd\u91cd\u53e0\uff0c\u5bf9\u5e94 memmove()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wprintf()\t\u683c\u5f0f\u5316\u5bbd\u8f93\u51fa\uff0c\u5bf9\u5e94 printf()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wscanf()\t\u683c\u5f0f\u5316\u5bbd\u8f93\u5165\uff0c\u5bf9\u5e94 scanf()\u3002")),(0,l.kt)("h2",{id:"\u591a\u5b57\u8282\u5b57\u7b26\u4e13\u7528\u51fd\u6570"},"\u591a\u5b57\u8282\u5b57\u7b26\u4e13\u7528\u51fd\u6570"),(0,l.kt)("p",null,"wchar.h \u4e5f\u5b9a\u4e49\u4e86\u4e00\u4e9b\u591a\u5b57\u8282\u5b57\u7b26\u7684\u4e13\u7528\u51fd\u6570\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mbsinit() \u5224\u65ad mbstate_t \u662f\u5426\u5904\u4e8e\u521d\u59cb\u8f6c\u6362\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},"mbrlen()\t\u7ed9\u5b9a\u8f6c\u6362\u72b6\u6001\u65f6\uff0c\u8ba1\u7b97\u591a\u5b57\u8282\u5b57\u7b26\u4e32\u7684\u5b57\u8282\u6570\uff0c\u5bf9\u5e94 mblen()\u3002"),(0,l.kt)("li",{parentName:"ul"},"mbrtowc()\t\u7ed9\u5b9a\u8f6c\u6362\u72b6\u6001\u65f6\uff0c\u5c06\u591a\u5b57\u8282\u5b57\u7b26\u8f6c\u6362\u4e3a\u5bbd\u5b57\u7b26\uff0c\u5bf9\u5e94 mbtowc()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wctombr()\t\u7ed9\u5b9a\u8f6c\u6362\u72b6\u6001\u65f6\uff0c\u5c06\u5bbd\u5b57\u7b26\u8f6c\u6362\u4e3a\u591a\u5b57\u8282\u5b57\u7b26\uff0c\u5bf9\u5e94 wctomb()\u3002"),(0,l.kt)("li",{parentName:"ul"},"mbsrtowcs()\t\u7ed9\u5b9a\u8f6c\u6362\u72b6\u6001\u65f6\uff0c\u5c06\u591a\u5b57\u8282\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5bbd\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 mbstowcs()\u3002"),(0,l.kt)("li",{parentName:"ul"},"wcsrtombs() \u7ed9\u5b9a\u8f6c\u6362\u72b6\u6001\u65f6\uff0c\u5c06\u5bbd\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u591a\u5b57\u8282\u5b57\u7b26\u4e32\uff0c\u5bf9\u5e94 wcstombs()\u3002")))}s.isMDXComponent=!0}}]);