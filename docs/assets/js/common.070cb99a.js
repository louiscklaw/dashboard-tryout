(self.webpackChunkdocusaurus_helloworld=self.webpackChunkdocusaurus_helloworld||[]).push([[592],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9649:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(5999),i=n(6668),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",m=["as","id"];function d(e){var t=e.as,n=e.id,d=(0,a.Z)(e,m),p=(0,i.L)().navbar.hideOnScroll;return"h1"!==t&&n?o.createElement(t,(0,r.Z)({},d,{className:(0,l.Z)("anchor",p?u:s),id:n}),d.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.Z)({},d,{id:void 0}))}},80:function(e,t,n){"use strict";n.d(t,{Z:function(){return pe}});var r=n(7294),a=n(3905),o=n(7462),l=n(3366),c=n(5742),i=["mdxType","originalType"];var s=n(2389),u=n(6010),m=n(2949),d=n(6668);function p(){var e=(0,d.L)().prism,t=(0,m.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var f=n(6528),v=n(7594),h=n.n(v),g=(0,f.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),y=(0,f.Z)(/\{([\d,-]+)\}/,{range:1}),b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function k(e,t){var n=e.map((function(e){var n=b[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function E(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,o=t.metastring;if(o&&y.test(o)){var l=o.match(y).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+o+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=a[0].className,i=h()(l).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);default:return k(Object.keys(b),t)}}(r,a),u=n.split("\n"),m=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),v=0;v<u.length;){var g=u[v].match(s);if(g){var E=g.slice(1).find((function(e){return void 0!==e}));d[E]?m[d[E]].range+=v+",":p[E]?m[p[E]].start=v:f[E]&&(m[f[E]].range+=m[f[E]].start+"-"+(v-1)+","),u.splice(v,1)}else v+=1}n=u.join("\n");var N={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;h()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}var N=n(5281),C="codeBlockContainer_MPoW",L=["as"];function w(e){var t=e.as,n=(0,l.Z)(e,L),a=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(p());return r.createElement(t,(0,o.Z)({},n,{style:a,className:(0,u.Z)(n.className,C,N.k.common.codeBlock)}))}var O={codeBlockContent:"codeBlockContent_B9tL",codeBlockTitle:"codeBlockTitle_YYkX",codeBlock:"codeBlock__0OG",codeBlockStandalone:"codeBlockStandalone_Px3r",codeBlockLines:"codeBlockLines_gEuF",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_hGCP",buttonGroup:"buttonGroup_hRr1"};function Z(e){var t=e.children,n=e.className;return r.createElement(w,{as:"pre",tabIndex:0,className:(0,u.Z)(O.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:O.codeBlockLines},t))}var j={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},x={Prism:n(7410).default,theme:j};function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}var _=/\r\n|\r|\n/,H=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},P=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},S=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=T({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=T({},n,{backgroundColor:null}),a};function A(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var I=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),B(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?S(e.theme,e.language):void 0;return t.themeDict=n})),B(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=T({},A(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?T({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),B(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),B(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=T({},A(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?T({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),B(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=P(u,m.type),m.alias&&(u=P(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(_),p=d.length;c.push({types:u,content:d[0]});for(var f=1;f<p;f++)H(c),i.push(c=[]),c.push({types:u,content:d[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return H(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),D=I,M="codeLine_rqGN",R="codeLineNumber_hzTh",z="codeLineContent_hM6e";function F(e){var t=e.line,n=e.classNames,a=e.showLineNumbers,l=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=l({line:t,className:(0,u.Z)(n,a&&M)}),s=t.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},c({token:e,key:t})))}));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:R}),r.createElement("span",{className:z},s)):r.createElement(r.Fragment,null,s,r.createElement("br",null)))}var W=n(5999),V={copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function q(e){var t=e.code,n=e.className,a=(0,r.useState)(!1),o=a[0],l=a[1],c=(0,r.useRef)(void 0),i=(0,r.useCallback)((function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(t),l(!0),c.current=window.setTimeout((function(){l(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),r.createElement("button",{type:"button","aria-label":o?(0,W.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,W.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,W.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,V.copyButton,o&&V.copyButtonCopied),onClick:i},r.createElement("span",{className:V.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:V.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:V.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var G="wordWrapButtonIcon_azs1",U="wordWrapButtonEnabled_Geot";function $(e){var t=e.className,n=e.onClick,a=e.isEnabled,o=(0,W.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,a&&U),"aria-label":o,title:o},r.createElement("svg",{className:G,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function X(e){var t,n,a,l,c,i,s,m,f,v,h,y=e.children,b=e.className,k=void 0===b?"":b,N=e.metastring,C=e.title,L=e.showLineNumbers,Z=e.language,j=(0,d.L)().prism,B=j.defaultLanguage,T=j.magicComments,_=null!=(t=null!=Z?Z:null==(n=k.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:B,H=p(),P=(a=(0,r.useState)(!1),l=a[0],c=a[1],i=(0,r.useState)(!1),s=i[0],m=i[1],f=(0,r.useRef)(null),v=(0,r.useCallback)((function(){var e=f.current.querySelector("code");l?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",c((function(e){return!e}))}),[f,l]),h=(0,r.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");m(t)}),[f]),(0,r.useEffect)((function(){h()}),[l,h]),(0,r.useEffect)((function(){return window.addEventListener("resize",h,{passive:!0}),function(){window.removeEventListener("resize",h)}}),[h]),{codeBlockRef:f,isEnabled:l,isCodeScrollable:s,toggle:v}),S=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(g))?void 0:n.groups.title)?t:""}(N)||C,A=E(y,{metastring:N,language:_,magicComments:T}),I=A.lineClassNames,M=A.code,R=L||function(e){return(null==e?void 0:e.includes("showLineNumbers"))||!1}(N);return r.createElement(w,{as:"div",className:(0,u.Z)(k,_&&!k.includes("language-"+_)&&"language-"+_)},S&&r.createElement("div",{className:O.codeBlockTitle},S),r.createElement("div",{className:O.codeBlockContent},r.createElement(D,(0,o.Z)({},x,{theme:H,code:M,language:null!=_?_:"text"}),(function(e){var t=e.className,n=e.tokens,a=e.getLineProps,o=e.getTokenProps;return r.createElement("pre",{tabIndex:0,ref:P.codeBlockRef,className:(0,u.Z)(t,O.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,u.Z)(O.codeBlockLines,R&&O.codeBlockLinesWithNumbering)},n.map((function(e,t){return r.createElement(F,{key:t,line:e,getLineProps:a,getTokenProps:o,classNames:I[t],showLineNumbers:R})}))))})),r.createElement("div",{className:O.buttonGroup},(P.isEnabled||P.isCodeScrollable)&&r.createElement($,{className:O.codeButton,onClick:function(){return P.toggle()},isEnabled:P.isEnabled}),r.createElement(q,{className:O.codeButton,code:M}))))}var Y=["children"];function Q(e){var t=e.children,n=(0,l.Z)(e,Y),a=(0,s.Z)(),c=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof c?X:Z;return r.createElement(i,(0,o.Z)({key:String(a)},n),c)}var J=n(9960);var K=n(6043),ee="details_lb9f",te="isBrowser_bmU9",ne="collapsibleContent_i85q",re=["summary","children"];function ae(e){return!!e&&("SUMMARY"===e.tagName||ae(e.parentElement))}function oe(e,t){return!!e&&(e===t||oe(e.parentElement,t))}function le(e){var t=e.summary,n=e.children,a=(0,l.Z)(e,re),o=(0,s.Z)(),c=(0,r.useRef)(null),i=(0,K.u)({initialState:!a.open}),m=i.collapsed,d=i.setCollapsed,p=(0,r.useState)(a.open),f=p[0],v=p[1];return r.createElement("details",Object.assign({},a,{ref:c,open:f,"data-collapsed":m,className:(0,u.Z)(ee,o&&te,a.className),onMouseDown:function(e){ae(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;ae(t)&&oe(t,c.current)&&(e.preventDefault(),m?(d(!1),v(!0)):d(!0))}}),t||r.createElement("summary",null,"Details"),r.createElement(K.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){d(e),v(!e)}},r.createElement("div",{className:ne},n)))}var ce="details_BAp3";function ie(e){var t=Object.assign({},e);return r.createElement(le,(0,o.Z)({},t,{className:(0,u.Z)("alert alert--info",ce,t.className)}))}var se=n(9649);function ue(e){return r.createElement(se.Z,e)}var me="img_E7b_";var de={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,l.Z)(a,i));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(c.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(Q,e)},a:function(e){return r.createElement(J.Z,e)},pre:function(e){var t;return r.createElement(Q,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ie,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,me))}));var t},h1:function(e){return r.createElement(ue,(0,o.Z)({as:"h1"},e))},h2:function(e){return r.createElement(ue,(0,o.Z)({as:"h2"},e))},h3:function(e){return r.createElement(ue,(0,o.Z)({as:"h3"},e))},h4:function(e){return r.createElement(ue,(0,o.Z)({as:"h4"},e))},h5:function(e){return r.createElement(ue,(0,o.Z)({as:"h5"},e))},h6:function(e){return r.createElement(ue,(0,o.Z)({as:"h6"},e))}};function pe(e){var t=e.children;return r.createElement(a.Zo,{components:de},t)}},4608:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7294),a=n(8277),o=n(5999),l=n(1944);function c(){return r.createElement(r.Fragment,null,r.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),r.createElement(a.Z,null,r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},721:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(7462),a=n(3366),o=n(7294);function l(e){var t=e.toc,n=e.className,r=e.linkClassName,a=e.isChild;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(l,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var c=o.memo(l),i=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var r=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,o=(0,a.Z)(e,i);n>=0?t[n].children.push(o):r.push(o)})),r}function u(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=u({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}var m=n(6668);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function p(e,t){var n,r,a=t.anchorTopOffset,o=e.find((function(e){return d(e).top>=a}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(o))?o:null!=(r=e[e.indexOf(o)-1])?r:null:null!=(n=e[e.length-1])?n:null}function f(){var e=(0,o.useRef)(0),t=(0,m.L)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,o.useRef)(void 0),n=f();(0,o.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,o=e.minHeadingLevel,l=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],a=t;a<=n;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),i=p(c,{anchorTopOffset:n.current}),s=e.find((function(e){return i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var t=e.toc,n=e.className,l=void 0===n?"table-of-contents table-of-contents__left-border":n,i=e.linkClassName,d=void 0===i?"table-of-contents__link":i,p=e.linkActiveClassName,f=void 0===p?void 0:p,g=e.minHeadingLevel,y=e.maxHeadingLevel,b=(0,a.Z)(e,h),k=(0,m.L)(),E=null!=g?g:k.tableOfContents.minHeadingLevel,N=null!=y?y:k.tableOfContents.maxHeadingLevel,C=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,o.useMemo)((function(){return u({toc:s(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:E,maxHeadingLevel:N});return v((0,o.useMemo)((function(){if(d&&f)return{linkClassName:d,linkActiveClassName:f,minHeadingLevel:E,maxHeadingLevel:N}}),[d,f,E,N])),o.createElement(c,(0,r.Z)({toc:C,className:l,linkClassName:d},b))}},1575:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(721),i="tableOfContents_cNA8",s=["className"];function u(e){var t=e.className,n=(0,a.Z)(e,s);return o.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar",t)},o.createElement(c.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},4477:function(e,t,n){"use strict";n.d(t,{E:function(){return c},q:function(){return l}});var r=n(7294),a=n(9688),o=r.createContext(null);function l(e){var t=e.children,n=e.version;return r.createElement(o.Provider,{value:n},t)}function c(){var e=(0,r.useContext)(o);if(null===e)throw new a.i6("DocsVersionProvider");return e}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);