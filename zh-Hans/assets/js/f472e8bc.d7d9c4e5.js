"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[4132],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(a),k=l,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||r;return a?n.createElement(u,o(o({ref:e},c),{},{components:a})):n.createElement(u,o({ref:e},c))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7182:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={slug:"/helloworld-md",sidebar_position:9999},o="MD helloworld",i={unversionedId:"helloworld",id:"helloworld",title:"MD helloworld",description:"tags: Tag(change me!)",source:"@site/projects-note/helloworld.md",sourceDirName:".",slug:"/helloworld-md",permalink:"https://louiscklaw.github.io/dashboard-tryout/zh-Hans/projects-note/helloworld-md",draft:!1,editUrl:"https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki/projects-note/helloworld.md",tags:[],version:"current",lastUpdatedBy:"louiscklaw",lastUpdatedAt:1657557461,formattedLastUpdatedAt:"2022\u5e747\u670811\u65e5",sidebarPosition:9999,frontMatter:{slug:"/helloworld-md",sidebar_position:9999},sidebar:"tutorialSidebar",previous:{title:"lynked",permalink:"https://louiscklaw.github.io/dashboard-tryout/zh-Hans/projects-note/lynked"},next:{title:"change_detect",permalink:"https://louiscklaw.github.io/dashboard-tryout/zh-Hans/projects-note/change-detect"}},s={},p=[{value:"tags: <code>Tag(change me!)</code>",id:"tags-tagchange-me",level:6},{value:"\ud83d\udcdd Where do I start?",id:"-where-do-i-start",level:2},{value:"Step 1: Change the title and add a tag",id:"step-1-change-the-title-and-add-a-tag",level:3},{value:"Step 2: Write something in Markdown",id:"step-2-write-something-in-markdown",level:3},{value:"Step 3: Invite your team to collaborate!",id:"step-3-invite-your-team-to-collaborate",level:3},{value:"BONUS: More cool ways to HackMD!",id:"bonus-more-cool-ways-to-hackmd",level:2}],c={toc:p};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"md-helloworld"},"MD helloworld"),(0,l.kt)("h6",{id:"tags-tagchange-me"},"tags: ",(0,l.kt)("inlineCode",{parentName:"h6"},"Tag(change me!)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This note is yours, feel free to play around. \ud83c\udfae\nType on the left \u2b05\ufe0f and see the rendered result on the right. \u27a1\ufe0f")),(0,l.kt)("h2",{id:"-where-do-i-start"},"\ud83d\udcdd Where do I start?"),(0,l.kt)("h3",{id:"step-1-change-the-title-and-add-a-tag"},"Step 1: Change the title and add a tag"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Create my first HackMD note (this one!)"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Change its title"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add a tag")),(0,l.kt)("p",null,"\ud83d\ude80"),(0,l.kt)("h3",{id:"step-2-write-something-in-markdown"},"Step 2: Write something in Markdown"),(0,l.kt)("p",null,"Let's try it out!\nApply different styling to this paragraph:\n",(0,l.kt)("strong",{parentName:"p"},"HackMD gets everyone on the same page with Markdown.")," ==Real-time collaborate on any documentation in markdown.== Capture fleeting ideas and formalize tribal knowledge."),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("strong",{parentName:"li"},"Bold")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("em",{parentName:"li"},"Italic")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Super^script^"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Sub~script~"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("del",{parentName:"li"},"Crossed")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","==Highlight==")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\ud83d\udca1 ",(0,l.kt)("strong",{parentName:"p"},"Hint:")," You can also apply styling from the toolbar at the top \u2196\ufe0f of the editing area."),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/Cnle9f9.png",alt:null}))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Drag-n-drop image from your file system to the editor to paste it!")),(0,l.kt)("h3",{id:"step-3-invite-your-team-to-collaborate"},"Step 3: Invite your team to collaborate!"),(0,l.kt)("p",null,"Click on the ",(0,l.kt)("i",{class:"fa fa-share-alt"})," ",(0,l.kt)("strong",{parentName:"p"},"Sharing")," menu \u2197\ufe0f and invite your team to collaborate on this note!"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/PjUhQBB.gif",alt:"permalink setting demo"})),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Register and sign-in to HackMD (to use advanced features \ud83c\udf89 )"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Set Permalink for this note"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Copy and share the link with your team")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\ud83d\udccc Want to learn more? \u279c ",(0,l.kt)("a",{parentName:"p",href:"https://hackmd.io/c/tutorials"},"HackMD Tutorials"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"bonus-more-cool-ways-to-hackmd"},"BONUS: More cool ways to HackMD!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Table")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Features"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Tutorials"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GitHub Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://hackmd.io/c/tutorials/%2Fs%2Flink-with-github"},"\ud83d\udd17"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Browser Extension"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://hackmd.io/c/tutorials/%2Fs%2Fhackmd-it"},"\ud83d\udd17"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Book Mode"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://hackmd.io/c/tutorials/%2Fs%2Fhow-to-create-book"},"\ud83d\udd17"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slide Mode"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://hackmd.io/c/tutorials/%2Fs%2Fhow-to-create-slide-deck"},"\ud83d\udd17"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Share & Publish"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://hackmd.io/c/tutorials/%2Fs%2Fhow-to-publish-note"},"\ud83d\udd17"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LaTeX for formulas")),(0,l.kt)("p",null,"$$\nx = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\n$$"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Code block with color and line numbers\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript=16"},'var s = "JavaScript syntax highlighting";\nalert(s);\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UML diagrams")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sequence"},"Alice->Bob: Hello Bob, how are you?\nNote right of Bob: Bob thinks\nBob--\x3eAlice: I am good thanks!\nNote left of Alice: Alice responds\nAlice->Bob: Where have you been?\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Auto-generated Table of Content\n","[ToC]")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Leave in-line comments! ","[color=#3b75c6]")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Embed YouTube Videos")),(0,l.kt)("p",null,"{%youtube PJuNmlE74BQ %}"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Put your cursor right behind an empty bracket {} \u2b05\ufe0f and see all your choices.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"And MORE \u279c ",(0,l.kt)("a",{parentName:"li",href:"https://hackmd.io/c/tutorials"},"HackMD Tutorials"))))}d.isMDXComponent=!0}}]);