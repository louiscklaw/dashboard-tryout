"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[5924],{5680:(n,e,a)=>{a.d(e,{xA:()=>g,yg:()=>m});var t=a(6540);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function i(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function s(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},l=Object.keys(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var o=t.createContext({}),p=function(n){var e=t.useContext(o),a=e;return n&&(a="function"==typeof n?n(e):i(i({},e),n)),a},g=function(n){var e=p(n.components);return t.createElement(o.Provider,{value:e},n.children)},c="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,l=n.originalType,o=n.parentName,g=s(n,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return a?t.createElement(m,i(i({ref:e},g),{},{components:a})):t.createElement(m,i({ref:e},g))}));function m(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s[c]="string"==typeof n?n:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4451:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=a(8168),r=(a(6540),a(5680));const l={id:"\u63a7\u5236\u8bed\u53e5",title:"\u63a7\u5236\u8bed\u53e5",sidebar_position:3,data:"2022\u5e744\u670828\u65e5"},i=void 0,s={unversionedId:"C++/\u63a7\u5236\u8bed\u53e5",id:"C++/\u63a7\u5236\u8bed\u53e5",title:"\u63a7\u5236\u8bed\u53e5",description:"\u6761\u4ef6\u8bed\u53e5",source:"@site/example/dev/C++/\u63a7\u5236\u8bed\u53e5.md",sourceDirName:"C++",slug:"/C++/\u63a7\u5236\u8bed\u53e5",permalink:"/dashboard-tryout/dev/C++/\u63a7\u5236\u8bed\u53e5",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/example/dev/C++/\u63a7\u5236\u8bed\u53e5.md",tags:[],version:"current",lastUpdatedBy:"Louis Law, louiscklaw",lastUpdatedAt:1712045647,formattedLastUpdatedAt:"Apr 2, 2024",sidebarPosition:3,frontMatter:{id:"\u63a7\u5236\u8bed\u53e5",title:"\u63a7\u5236\u8bed\u53e5",sidebar_position:3,data:"2022\u5e744\u670828\u65e5"},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u8bed\u6cd5",permalink:"/dashboard-tryout/dev/C++/\u57fa\u672c\u8bed\u6cd5"},next:{title:"\u51fd\u6570\u65b9\u6cd5",permalink:"/dashboard-tryout/dev/C++/\u51fd\u6570\u65b9\u6cd5"}},o={},p=[{value:"\u6761\u4ef6\u8bed\u53e5",id:"\u6761\u4ef6\u8bed\u53e5",level:2},{value:"if \u8bed\u53e5",id:"if-\u8bed\u53e5",level:3},{value:"if...else \u8bed\u53e5",id:"ifelse-\u8bed\u53e5",level:3},{value:"if...else if \u591a\u5206\u652f\u8bed\u53e5",id:"ifelse-if-\u591a\u5206\u652f\u8bed\u53e5",level:3},{value:"switch \u591a\u5206\u652f\u8bed\u53e5",id:"switch-\u591a\u5206\u652f\u8bed\u53e5",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:4},{value:"\u6d41\u7a0b\u56fe",id:"\u6d41\u7a0b\u56fe",level:4},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:4},{value:"\u5faa\u73af\u8bed\u53e5",id:"\u5faa\u73af\u8bed\u53e5",level:2},{value:"while \u5faa\u73af\u8bed\u53e5",id:"while-\u5faa\u73af\u8bed\u53e5",level:3},{value:"do...while \u5faa\u73af\u8bed\u53e5",id:"dowhile-\u5faa\u73af\u8bed\u53e5",level:3},{value:"for \u5faa\u73af\u8bed\u53e5",id:"for-\u5faa\u73af\u8bed\u53e5",level:3},{value:"\u8df3\u8f6c\u8bed\u53e5",id:"\u8df3\u8f6c\u8bed\u53e5",level:2},{value:"break \u8bed\u53e5",id:"break-\u8bed\u53e5",level:3},{value:"continue \u8bed\u53e5",id:"continue-\u8bed\u53e5",level:3},{value:"goto \u8bed\u53e5",id:"goto-\u8bed\u53e5",level:3},{value:"return \u8bed\u53e5",id:"return-\u8bed\u53e5",level:3}],g={toc:p},c="wrapper";function u(n){let{components:e,...a}=n;return(0,r.yg)(c,(0,t.A)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6761\u4ef6\u8bed\u53e5"},"\u6761\u4ef6\u8bed\u53e5"),(0,r.yg)("h3",{id:"if-\u8bed\u53e5"},"if \u8bed\u53e5"),(0,r.yg)("p",null,"\u5982\u679c\u5e03\u5c14\u8868\u8fbe\u5f0f\u4e3a ",(0,r.yg)("strong",{parentName:"p"},"true"),"\uff0c\u5219 if \u8bed\u53e5\u5185\u7684\u4ee3\u7801\u5757\u5c06\u88ab\u6267\u884c\u3002\u5982\u679c\u5e03\u5c14\u8868\u8fbe\u5f0f\u4e3a ",(0,r.yg)("strong",{parentName:"p"},"false"),"\uff0c\u5219 if \u8bed\u53e5\u7ed3\u675f\u540e\u7684\u7b2c\u4e00\u7ec4\u4ee3\u7801\uff08\u95ed\u62ec\u53f7\u540e\uff09\u5c06\u88ab\u6267\u884c\u3002"),(0,r.yg)("p",null,"C \u8bed\u8a00\u628a\u4efb\u4f55",(0,r.yg)("strong",{parentName:"p"},"\u975e\u96f6"),"\u548c",(0,r.yg)("strong",{parentName:"p"},"\u975e\u7a7a"),"\u7684\u503c\u5047\u5b9a\u4e3a ",(0,r.yg)("strong",{parentName:"p"},"true"),"\uff0c\u628a",(0,r.yg)("strong",{parentName:"p"},"\u96f6"),"\u6216 ",(0,r.yg)("strong",{parentName:"p"},"null")," \u5047\u5b9a\u4e3a ",(0,r.yg)("strong",{parentName:"p"},"false"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'if (boolean_expression)\n{\n   // \u5982\u679c\u5e03\u5c14\u8868\u8fbe\u5f0f\u4e3a\u771f\u5c06\u6267\u884c\u7684\u8bed\u53e5\n}\n\n// \u5b9e\u4f8b\n#include <iostream>\nusing namespace std;\n\nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int a = 10;\n\n   // \u4f7f\u7528 if \u8bed\u53e5\u68c0\u67e5\u5e03\u5c14\u6761\u4ef6\n   if( a < 20 )\n   {\n       // \u5982\u679c\u6761\u4ef6\u4e3a\u771f\uff0c\u5219\u8f93\u51fa\u4e0b\u9762\u7684\u8bed\u53e5\n       cout << "a \u5c0f\u4e8e 20" << endl;\n   }\n   cout << "a \u7684\u503c\u662f " << a << endl;\n\n   return 0;\n}\n\n// \u8f93\u51fa\na \u5c0f\u4e8e 20\na \u7684\u503c\u662f 10\n')),(0,r.yg)("h3",{id:"ifelse-\u8bed\u53e5"},"if...else \u8bed\u53e5"),(0,r.yg)("p",null,"\u5982\u679c\u5e03\u5c14\u8868\u8fbe\u5f0f\u4e3a ",(0,r.yg)("strong",{parentName:"p"},"true"),"\uff0c\u5219\u6267\u884c ",(0,r.yg)("strong",{parentName:"p"},"if")," \u5757\u5185\u7684\u4ee3\u7801\u3002\u5982\u679c\u5e03\u5c14\u8868\u8fbe\u5f0f\u4e3a ",(0,r.yg)("strong",{parentName:"p"},"false"),"\uff0c\u5219\u6267\u884c ",(0,r.yg)("strong",{parentName:"p"},"else")," \u5757\u5185\u7684\u4ee3\u7801\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'if (boolean_expression)\n{\n   // \u5982\u679c\u5e03\u5c14\u8868\u8fbe\u5f0f\u4e3a\u771f\u5c06\u6267\u884c\u7684\u8bed\u53e5\n}\nelse\n{\n   // \u5982\u679c\u5e03\u5c14\u8868\u8fbe\u5f0f\u4e3a\u5047\u5c06\u6267\u884c\u7684\u8bed\u53e5\n}\n\n// \u5b9e\u4f8b\n#include <iostream>\nusing namespace std;\n\nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int a = 100;\n\n   // \u68c0\u67e5\u5e03\u5c14\u6761\u4ef6\n   if( a < 20 )\n   {\n       // \u5982\u679c\u6761\u4ef6\u4e3a\u771f\uff0c\u5219\u8f93\u51fa\u4e0b\u9762\u7684\u8bed\u53e5\n       cout << "a \u5c0f\u4e8e 20" << endl;\n   }\n   else\n   {\n       // \u5982\u679c\u6761\u4ef6\u4e3a\u5047\uff0c\u5219\u8f93\u51fa\u4e0b\u9762\u7684\u8bed\u53e5\n       cout << "a \u5927\u4e8e 20" << endl;\n   }\n   cout << "a \u7684\u503c\u662f " << a << endl;\n\n   return 0;\n}\n\n// \u8f93\u51fa\na \u5927\u4e8e 20\na \u7684\u503c\u662f 100\n')),(0,r.yg)("h3",{id:"ifelse-if-\u591a\u5206\u652f\u8bed\u53e5"},"if...else if \u591a\u5206\u652f\u8bed\u53e5"),(0,r.yg)("p",null,"\u4e00\u4e2a ",(0,r.yg)("strong",{parentName:"p"},"if")," \u8bed\u53e5\u540e\u53ef\u8ddf\u4e00\u4e2a\u53ef\u9009\u7684 ",(0,r.yg)("strong",{parentName:"p"},"else if...else")," \u8bed\u53e5\uff0c\u8fd9\u53ef\u7528\u4e8e\u6d4b\u8bd5\u591a\u79cd\u6761\u4ef6\u3002"),(0,r.yg)("p",null,"\u5f53\u4f7f\u7528 if...else if...else \u8bed\u53e5\u65f6\uff0c\u4ee5\u4e0b\u51e0\u70b9\u9700\u8981\u6ce8\u610f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4e00\u4e2a if \u540e\u53ef\u8ddf\u96f6\u4e2a\u6216\u4e00\u4e2a else\uff0celse \u5fc5\u987b\u5728\u6240\u6709 else if \u4e4b\u540e\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4e00\u4e2a if \u540e\u53ef\u8ddf\u96f6\u4e2a\u6216\u591a\u4e2a else if\uff0celse if \u5fc5\u987b\u5728 else \u4e4b\u524d\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4e00\u65e6\u67d0\u4e2a else if \u5339\u914d\u6210\u529f\uff0c\u5176\u4ed6\u7684 else if \u6216 else \u5c06\u4e0d\u4f1a\u88ab\u6d4b\u8bd5\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'// \u8bed\u6cd5\nif(boolean_expression 1)\n{\n   // \u5f53\u5e03\u5c14\u8868\u8fbe\u5f0f 1 \u4e3a\u771f\u65f6\u6267\u884c\n}\nelse if( boolean_expression 2)\n{\n   // \u5f53\u5e03\u5c14\u8868\u8fbe\u5f0f 2 \u4e3a\u771f\u65f6\u6267\u884c\n}\nelse if( boolean_expression 3)\n{\n   // \u5f53\u5e03\u5c14\u8868\u8fbe\u5f0f 3 \u4e3a\u771f\u65f6\u6267\u884c\n}\nelse \n{\n   // \u5f53\u4e0a\u9762\u6761\u4ef6\u90fd\u4e0d\u4e3a\u771f\u65f6\u6267\u884c\n}\n\n// \u5b9e\u4f8b\n#include <iostream>\nusing namespace std;\n\nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int a = 100;\n\n   // \u68c0\u67e5\u5e03\u5c14\u6761\u4ef6\n   if( a == 10 )\n   {\n       // \u5982\u679c if \u6761\u4ef6\u4e3a\u771f\uff0c\u5219\u8f93\u51fa\u4e0b\u9762\u7684\u8bed\u53e5\n       cout << "a \u7684\u503c\u662f 10" << endl;\n   }\n   else if( a == 20 )\n   {\n       // \u5982\u679c else if \u6761\u4ef6\u4e3a\u771f\uff0c\u5219\u8f93\u51fa\u4e0b\u9762\u7684\u8bed\u53e5\n       cout << "a \u7684\u503c\u662f 20" << endl;\n   }\n   else if( a == 30 )\n   {\n       // \u5982\u679c else if \u6761\u4ef6\u4e3a\u771f\uff0c\u5219\u8f93\u51fa\u4e0b\u9762\u7684\u8bed\u53e5\n       cout << "a \u7684\u503c\u662f 30" << endl;\n   }\n   else\n   {\n       // \u5982\u679c\u4e0a\u9762\u6761\u4ef6\u90fd\u4e0d\u4e3a\u771f\uff0c\u5219\u8f93\u51fa\u4e0b\u9762\u7684\u8bed\u53e5\n       cout << "\u6ca1\u6709\u5339\u914d\u7684\u503c" << endl;\n   }\n   cout << "a \u7684\u51c6\u786e\u503c\u662f " << a << endl;\n\n   return 0;\n}\n\n// \u8f93\u51fa\n\u6ca1\u6709\u5339\u914d\u7684\u503c\na \u7684\u51c6\u786e\u503c\u662f 100\n')),(0,r.yg)("h3",{id:"switch-\u591a\u5206\u652f\u8bed\u53e5"},"switch \u591a\u5206\u652f\u8bed\u53e5"),(0,r.yg)("p",null,"\u4e00\u4e2a ",(0,r.yg)("strong",{parentName:"p"},"switch")," \u8bed\u53e5\u5141\u8bb8\u6d4b\u8bd5\u4e00\u4e2a\u53d8\u91cf\u7b49\u4e8e\u591a\u4e2a\u503c\u65f6\u7684\u60c5\u51b5\u3002\u6bcf\u4e2a\u503c\u79f0\u4e3a\u4e00\u4e2a case\uff0c\u4e14\u88ab\u6d4b\u8bd5\u7684\u53d8\u91cf\u4f1a\u5bf9\u6bcf\u4e2a ",(0,r.yg)("strong",{parentName:"p"},"switch case")," \u8fdb\u884c\u68c0\u67e5\u3002"),(0,r.yg)("h4",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"switch(expression){\n    case constant-expression  :\n       statement(s);\n       break; // \u53ef\u9009\u7684\n    case constant-expression  :\n       statement(s);\n       break; // \u53ef\u9009\u7684\n\n    // \u60a8\u53ef\u4ee5\u6709\u4efb\u610f\u6570\u91cf\u7684 case \u8bed\u53e5\n    default : // \u53ef\u9009\u7684\n       statement(s);\n}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"switch")," \u8bed\u53e5\u5fc5\u987b\u9075\u5faa\u4e0b\u9762\u7684\u89c4\u5219\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"switch")," \u8bed\u53e5\u4e2d\u7684 ",(0,r.yg)("strong",{parentName:"li"},"expression")," \u5fc5\u987b\u662f\u4e00\u4e2a\u6574\u578b\u6216\u679a\u4e3e\u7c7b\u578b\uff0c\u6216\u8005\u662f\u4e00\u4e2a class \u7c7b\u578b\uff0c\u5176\u4e2d class \u6709\u4e00\u4e2a\u5355\u4e00\u7684\u8f6c\u6362\u51fd\u6570\u5c06\u5176\u8f6c\u6362\u4e3a\u6574\u578b\u6216\u679a\u4e3e\u7c7b\u578b\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5728\u4e00\u4e2a switch \u4e2d\u53ef\u4ee5\u6709\u4efb\u610f\u6570\u91cf\u7684 case \u8bed\u53e5\u3002\u6bcf\u4e2a case \u540e\u8ddf\u4e00\u4e2a\u8981\u6bd4\u8f83\u7684\u503c\u548c\u4e00\u4e2a\u5192\u53f7\u3002"),(0,r.yg)("li",{parentName:"ul"},"case \u7684 ",(0,r.yg)("strong",{parentName:"li"},"constant-expression")," \u5fc5\u987b\u4e0e switch \u4e2d\u7684\u53d8\u91cf\u5177\u6709\u76f8\u540c\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4e14\u5fc5\u987b\u662f\u4e00\u4e2a\u5e38\u91cf\u6216\u5b57\u9762\u91cf\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5f53\u88ab\u6d4b\u8bd5\u7684\u53d8\u91cf\u7b49\u4e8e case \u4e2d\u7684\u5e38\u91cf\u65f6\uff0ccase \u540e\u8ddf\u7684\u8bed\u53e5\u5c06\u88ab\u6267\u884c\uff0c\u76f4\u5230\u9047\u5230 ",(0,r.yg)("strong",{parentName:"li"},"break")," \u8bed\u53e5\u4e3a\u6b62\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5f53\u9047\u5230 ",(0,r.yg)("strong",{parentName:"li"},"break")," \u8bed\u53e5\u65f6\uff0cswitch \u7ec8\u6b62\uff0c\u63a7\u5236\u6d41\u5c06\u8df3\u8f6c\u5230 switch \u8bed\u53e5\u540e\u7684\u4e0b\u4e00\u884c\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4e0d\u662f\u6bcf\u4e00\u4e2a case \u90fd\u9700\u8981\u5305\u542b ",(0,r.yg)("strong",{parentName:"li"},"break"),"\u3002\u5982\u679c case \u8bed\u53e5\u4e0d\u5305\u542b ",(0,r.yg)("strong",{parentName:"li"},"break"),"\uff0c\u63a7\u5236\u6d41\u5c06\u4f1a ",(0,r.yg)("em",{parentName:"li"},"\u7ee7\u7eed")," \u540e\u7eed\u7684 case\uff0c\u76f4\u5230\u9047\u5230 break \u4e3a\u6b62\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,r.yg)("strong",{parentName:"li"},"switch")," \u8bed\u53e5\u53ef\u4ee5\u6709\u4e00\u4e2a\u53ef\u9009\u7684 ",(0,r.yg)("strong",{parentName:"li"},"default")," case\uff0c\u51fa\u73b0\u5728 switch \u7684\u7ed3\u5c3e\u3002default case \u53ef\u7528\u4e8e\u5728\u4e0a\u9762\u6240\u6709 case \u90fd\u4e0d\u4e3a\u771f\u65f6\u6267\u884c\u4e00\u4e2a\u4efb\u52a1\u3002default case \u4e2d\u7684 ",(0,r.yg)("strong",{parentName:"li"},"break")," \u8bed\u53e5\u4e0d\u662f\u5fc5\u9700\u7684\u3002")),(0,r.yg)("h4",{id:"\u6d41\u7a0b\u56fe"},"\u6d41\u7a0b\u56fe"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://static.7wate.com/img/2022/04/28/03b2db1e8af32.jpg",alt:"\u56fe\u4f8b"})),(0,r.yg)("h4",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// \u5b9e\u4f8b\n#include <iostream>\nusing namespace std;\n\nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   char grade = 'D';\n\n   switch(grade)\n   {\n   case 'A' :\n      cout << \"\u5f88\u68d2\uff01\" << endl; \n      break;\n   case 'B' :\n   case 'C' :\n      cout << \"\u505a\u5f97\u597d\" << endl;\n      break;\n   case 'D' :\n      cout << \"\u60a8\u901a\u8fc7\u4e86\" << endl;\n      break;\n   case 'F' :\n      cout << \"\u6700\u597d\u518d\u8bd5\u4e00\u4e0b\" << endl;\n      break;\n   default :\n      cout << \"\u65e0\u6548\u7684\u6210\u7ee9\" << endl;\n   }\n   cout << \"\u60a8\u7684\u6210\u7ee9\u662f \" << grade << endl;\n\n   return 0;\n}\n\n// \u8f93\u51fa\n\u60a8\u901a\u8fc7\u4e86\n\u60a8\u7684\u6210\u7ee9\u662f D\n")),(0,r.yg)("h2",{id:"\u5faa\u73af\u8bed\u53e5"},"\u5faa\u73af\u8bed\u53e5"),(0,r.yg)("h3",{id:"while-\u5faa\u73af\u8bed\u53e5"},"while \u5faa\u73af\u8bed\u53e5"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'// \u8bed\u6cd5\nwhile(condition)\n{\n   statement(s);\n}\n\n// \u5b9e\u4f8b\n#include <iostream>\nusing namespace std;\n\nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int a = 10;\n\n   // while \u5faa\u73af\u6267\u884c\n   while( a < 20 )\n   {\n       cout << "a \u7684\u503c\uff1a" << a << endl;\n       a++;\n   }\n\n   return 0;\n}\n\n// \u8f93\u51fa\na \u7684\u503c\uff1a 10\na \u7684\u503c\uff1a 11\na \u7684\u503c\uff1a 12\na \u7684\u503c\uff1a 13\na \u7684\u503c\uff1a 14\na \u7684\u503c\uff1a 15\na \u7684\u503c\uff1a 16\na \u7684\u503c\uff1a 17\na \u7684\u503c\uff1a 18\na \u7684\u503c\uff1a 19\n')),(0,r.yg)("h3",{id:"dowhile-\u5faa\u73af\u8bed\u53e5"},"do...while \u5faa\u73af\u8bed\u53e5"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"do...while")," \u5faa\u73af\u4e0e while \u5faa\u73af\u7c7b\u4f3c\uff0c\u4f46\u662f do...while \u5faa\u73af\u4f1a\u786e\u4fdd\u81f3\u5c11\u6267\u884c\u4e00\u6b21\u5faa\u73af\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'// \u8bed\u6cd5\ndo\n{\n   statement(s);\n\n}while( condition );\n\n// \u5b9e\u4f8b\n#include <iostream>\nusing namespace std;\n\nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int a = 10;\n\n   // do \u5faa\u73af\u6267\u884c\n   do\n   {\n       cout << "a \u7684\u503c\uff1a" << a << endl;\n       a = a + 1;\n   }while( a < 20 );\n\n   return 0;\n}\n\n// \u8f93\u51fa\na \u7684\u503c\uff1a 10\na \u7684\u503c\uff1a 11\na \u7684\u503c\uff1a 12\na \u7684\u503c\uff1a 13\na \u7684\u503c\uff1a 14\na \u7684\u503c\uff1a 15\na \u7684\u503c\uff1a 16\na \u7684\u503c\uff1a 17\na \u7684\u503c\uff1a 18\na \u7684\u503c\uff1a 19\n')),(0,r.yg)("h3",{id:"for-\u5faa\u73af\u8bed\u53e5"},"for \u5faa\u73af\u8bed\u53e5"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"for")," \u5faa\u73af\u5141\u8bb8\u60a8\u7f16\u5199\u4e00\u4e2a\u6267\u884c\u7279\u5b9a\u6b21\u6570\u7684\u5faa\u73af\u7684\u91cd\u590d\u63a7\u5236\u7ed3\u6784"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"init")," \u4f1a\u9996\u5148\u88ab\u6267\u884c\uff0c\u4e14\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\u3002\u8fd9\u4e00\u6b65\u5141\u8bb8\u60a8\u58f0\u660e\u5e76\u521d\u59cb\u5316\u4efb\u4f55\u5faa\u73af\u63a7\u5236\u53d8\u91cf\u3002\u60a8\u4e5f\u53ef\u4ee5\u4e0d\u5728\u8fd9\u91cc\u5199\u4efb\u4f55\u8bed\u53e5\uff0c\u53ea\u8981\u6709\u4e00\u4e2a\u5206\u53f7\u51fa\u73b0\u5373\u53ef\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u63a5\u4e0b\u6765\uff0c\u4f1a\u5224\u65ad ",(0,r.yg)("strong",{parentName:"li"},"condition"),"\u3002\u5982\u679c\u4e3a\u771f\uff0c\u5219\u6267\u884c\u5faa\u73af\u4e3b\u4f53\u3002\u5982\u679c\u4e3a\u5047\uff0c\u5219\u4e0d\u6267\u884c\u5faa\u73af\u4e3b\u4f53\uff0c\u4e14\u63a7\u5236\u6d41\u4f1a\u8df3\u8f6c\u5230\u7d27\u63a5\u7740 for \u5faa\u73af\u7684\u4e0b\u4e00\u6761\u8bed\u53e5\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5728\u6267\u884c\u5b8c for \u5faa\u73af\u4e3b\u4f53\u540e\uff0c\u63a7\u5236\u6d41\u4f1a\u8df3\u56de\u4e0a\u9762\u7684 ",(0,r.yg)("strong",{parentName:"li"},"increment")," \u8bed\u53e5\u3002\u8be5\u8bed\u53e5\u5141\u8bb8\u60a8\u66f4\u65b0\u5faa\u73af\u63a7\u5236\u53d8\u91cf\u3002\u8be5\u8bed\u53e5\u53ef\u4ee5\u7559\u7a7a\uff0c\u53ea\u8981\u5728\u6761\u4ef6\u540e\u6709\u4e00\u4e2a\u5206\u53f7\u51fa\u73b0\u5373\u53ef\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u6761\u4ef6\u518d\u6b21\u88ab\u5224\u65ad\u3002\u5982\u679c\u4e3a\u771f\uff0c\u5219\u6267\u884c\u5faa\u73af\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u4e0d\u65ad\u91cd\u590d\uff08\u5faa\u73af\u4e3b\u4f53\uff0c\u7136\u540e\u589e\u52a0\u6b65\u503c\uff0c\u518d\u7136\u540e\u91cd\u65b0\u5224\u65ad\u6761\u4ef6\uff09\u3002\u5728\u6761\u4ef6\u53d8\u4e3a\u5047\u65f6\uff0cfor \u5faa\u73af\u7ec8\u6b62\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"for ( init; condition; increment )\n{\n   statement(s);\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\nusing namespace std;\n\nint main ()\n{\n   // for \u5faa\u73af\u6267\u884c\n   for( int a = 10; a < 20; a = a + 1 )\n   {\n       cout << "a \u7684\u503c\uff1a" << a << endl;\n   }\n\n   return 0;\n}\n\n// \u8f93\u51fa\na \u7684\u503c\uff1a 10\na \u7684\u503c\uff1a 11\na \u7684\u503c\uff1a 12\na \u7684\u503c\uff1a 13\na \u7684\u503c\uff1a 14\na \u7684\u503c\uff1a 15\na \u7684\u503c\uff1a 16\na \u7684\u503c\uff1a 17\na \u7684\u503c\uff1a 18\na \u7684\u503c\uff1a 19\n')),(0,r.yg)("h2",{id:"\u8df3\u8f6c\u8bed\u53e5"},"\u8df3\u8f6c\u8bed\u53e5"),(0,r.yg)("h3",{id:"break-\u8bed\u53e5"},"break \u8bed\u53e5"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5f53 ",(0,r.yg)("strong",{parentName:"li"},"break")," \u8bed\u53e5\u51fa\u73b0\u5728\u4e00\u4e2a\u5faa\u73af\u5185\u65f6\uff0c\u5faa\u73af\u4f1a\u7acb\u5373\u7ec8\u6b62\uff0c\u4e14\u7a0b\u5e8f\u6d41\u5c06\u7ee7\u7eed\u6267\u884c\u7d27\u63a5\u7740\u5faa\u73af\u7684\u4e0b\u4e00\u6761\u8bed\u53e5\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5b83\u53ef\u7528\u4e8e\u7ec8\u6b62 ",(0,r.yg)("strong",{parentName:"li"},"switch")," \u8bed\u53e5\u4e2d\u7684\u4e00\u4e2a case\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"break;\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\nusing namespace std;\n\nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int a = 10;\n\n   // do \u5faa\u73af\u6267\u884c\n   do\n   {\n       cout << "a \u7684\u503c\uff1a" << a << endl;\n       a = a + 1;\n       if( a > 15)\n       {\n          // \u7ec8\u6b62\u5faa\u73af\n          break;\n       }\n   }while( a < 20 );\n\n   return 0;\n}\n')),(0,r.yg)("h3",{id:"continue-\u8bed\u53e5"},"continue \u8bed\u53e5"),(0,r.yg)("p",null,"C++ \u4e2d\u7684 ",(0,r.yg)("strong",{parentName:"p"},"continue")," \u8bed\u53e5\u6709\u70b9\u50cf ",(0,r.yg)("strong",{parentName:"p"},"break")," \u8bed\u53e5\u3002\u4f46\u5b83\u4e0d\u662f\u5f3a\u8feb\u7ec8\u6b62\uff0ccontinue \u4f1a\u8df3\u8fc7\u5f53\u524d\u5faa\u73af\u4e2d\u7684\u4ee3\u7801\uff0c\u5f3a\u8feb\u5f00\u59cb\u4e0b\u4e00\u6b21\u5faa\u73af\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"continue;\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\nusing namespace std;\n\nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int a = 10;\n\n   // do \u5faa\u73af\u6267\u884c\n   do\n   {\n       if( a == 15)\n       {\n          // \u8df3\u8fc7\u8fed\u4ee3\n          a = a + 1;\n          continue;\n       }\n       cout << "a \u7684\u503c\uff1a" << a << endl;\n       a = a + 1;\n   }while( a < 20 );\n\n   return 0;\n}\n')),(0,r.yg)("h3",{id:"goto-\u8bed\u53e5"},"goto \u8bed\u53e5"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"goto")," \u8bed\u53e5\u5141\u8bb8\u628a\u63a7\u5236\u65e0\u6761\u4ef6\u8f6c\u79fb\u5230\u540c\u4e00\u51fd\u6570\u5185\u7684\u88ab\u6807\u8bb0\u7684\u8bed\u53e5\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5728\u4efb\u4f55\u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u90fd\u4e0d\u5efa\u8bae\u4f7f\u7528 goto \u8bed\u53e5\u3002\u56e0\u4e3a\u5b83\u4f7f\u5f97\u7a0b\u5e8f\u7684\u63a7\u5236\u6d41\u96be\u4ee5\u8ddf\u8e2a\uff0c\u4f7f\u7a0b\u5e8f\u96be\u4ee5\u7406\u89e3\u548c\u96be\u4ee5\u4fee\u6539\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"goto label;\n..\n.\nlabel: statement;\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\nusing namespace std;\n\nint main ()\n{\n   // \u5c40\u90e8\u53d8\u91cf\u58f0\u660e\n   int a = 10;\n\n   // do \u5faa\u73af\u6267\u884c\n   LOOP:do\n   {\n       if( a == 15)\n       {\n          // \u8df3\u8fc7\u8fed\u4ee3\n          a = a + 1;\n          goto LOOP;\n       }\n       cout << "a \u7684\u503c\uff1a" << a << endl;\n       a = a + 1;\n   }while( a < 20 );\n\n   return 0;\n}\n')),(0,r.yg)("h3",{id:"return-\u8bed\u53e5"},"return \u8bed\u53e5"),(0,r.yg)("p",null,"\u8fd4\u56de\u8bed\u53e5"))}u.isMDXComponent=!0}}]);