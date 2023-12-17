/*! For license information please see 2dd6a4f2.b4b34bef.js.LICENSE.txt */
"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1017],{1201:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(9960),o=r(5616),u=r(5861),c=r(1181),a=r(7294),i=r(6409),l=r(2520);function f(){const e=(0,i.g)(),[t,r]=(0,a.useState)();return(0,a.useEffect)((()=>{fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en").then((e=>e.json())).then((e=>r(e))).catch((e=>console.error(e)))}),[]),a.createElement(a.Fragment,null,a.createElement(o.Z,{sx:{position:"absolute",bottom:"3vh",left:"3vh"}},a.createElement(n.Z,{to:"/"},a.createElement(u.Z,{variant:"h5"},"Back"))),a.createElement(c.ZP,{container:!0,sx:{height:e}},a.createElement(c.ZP,{item:!0,xs:4,sx:{width:"100%",height:e/2}},t?a.createElement(l._,{json:t}):a.createElement(a.Fragment,null,a.createElement(u.Z,{variant:"h6"},"loading"))),a.createElement(c.ZP,{item:!0,xs:4,sx:{width:"100%",height:e/2}},a.createElement("iframe",{src:"https://www.weather.org.hk/",height:e,width:"100%"})),a.createElement(c.ZP,{item:!0,xs:4,sx:{width:"100%",height:e/2}},a.createElement("iframe",{src:"https://www.metwarn.com/",height:e,width:"100%"}))))}},8861:(e,t,r)=>{r.r(t)},6002:(e,t,r)=>{r.r(t)},6409:(e,t,r)=>{r.d(t,{g:()=>i});var n=r(7294),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},c=!1,a=(0,n.forwardRef)((function(e,t){var r=e.style,a=u(e,["style"]),l=i();!c&&(null==r?void 0:r.height)&&(c=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var f=o(o({},r),{height:l?l+"px":"100vh"});return n.createElement("div",o({ref:t,style:f},a))}));a.displayName="Div100vh";function i(){var e=(0,n.useState)(l),t=e[0],r=e[1],o=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1];return(0,n.useEffect)((function(){f()&&r(!0)}),[]),t}();return(0,n.useEffect)((function(){if(o)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)};function e(){var e=l();r(e)}}),[o]),o?t:null}function l(){return f()?window.innerHeight:null}function f(){return"undefined"!=typeof window&&"undefined"!=typeof document}},483:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var u=r(9856);r(8861);var c=r(1410),a=r(1410),i=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.renderObject=function(e,t,r){var o,i=[];switch(t&&i.push(n.renderRowHeader(t)),a.default.getObjectType(e)){case c.JSONObjectType.ObjectWithNonNumericKeys:o=t?u.createElement("table",{key:"__j2t_tableObj"+r},u.createElement("tbody",{key:"__j2t_bObj"+r},n.renderRows(e))):n.renderRows(e);break;case c.JSONObjectType.Array:o=t?u.createElement("table",{key:"__j2t_tableArr"+r},u.createElement("tbody",{key:"__j2t_bArr"+r},n.parseArray(e))):n.parseArray(e)}i.push(o);var l=i.map((function(e){return e}));return t?u.createElement("tr",{key:"__j2t_trObj"+r},n.renderCell({content:l,colspan:2})):l},n.renderCell=function(e){var t=e.content,r=e.colspan,n=e.isHeader?u.createElement("strong",null,t):t;return u.createElement("td",{colSpan:r||0,key:"__j2t_trObj"+n},n)},n.renderHeader=function(e){return u.createElement("tr",{key:"__j2t_trHeader"},e.map((function(e){return n.renderCell({content:e})})))},n.renderValues=function(e){return u.createElement("tr",{key:"__j2t_trArrString"},e.map((function(e){return n.renderCell({content:e})})))},n.renderRowValues=function(e,t){return e.map((function(e,r){return u.createElement("tr",{key:"__j2t_Arr"+r.toString()},t.map((function(t){return a.default.getObjectType(e[t])===c.JSONObjectType.Primitive?n.renderCell({content:e[t]}):n.renderObject(e[t],t,r)})))}))},n.parseArray=function(e){var t=[],r=a.default.getUniqueObjectKeys(e);return"number"!==a.default.checkLabelTypes(r.labels)?(t.push(n.renderHeader(r.labels)),t.push(n.renderRowValues(e,r.labels))):t.push(n.renderValues(e)),t},n.renderRow=function(e,t,r){return u.createElement("tr",{key:"__j2t_tr"+r},u.createElement("td",{key:"__j2t_tdk"+r},u.createElement("strong",null,e)),u.createElement("td",{key:"__j2t_tdv"+r},t))},n.renderRowHeader=function(e){return u.createElement("div",{key:"__j2t_rw"+e},u.createElement("strong",null,e))},n.renderRows=function(e,t){return Object.keys(e).map((function(t,r){var o=e[t];return a.default.getObjectType(o)===c.JSONObjectType.Primitive?n.renderRow(t,o,r):n.renderObject(o,t,r)}))},n}return o(t,e),t.prototype.render=function(){return u.createElement("div",{className:"json-to-table"},u.createElement("table",{key:"__j2t_root_table"},u.createElement("tbody",{key:"__j2t_root_tbody"},this.renderObject(this.props.json,void 0,0))))},t}(u.Component);t.default=i},1410:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Array=0]="Array",e[e.ObjectWithNonNumericKeys=1]="ObjectWithNonNumericKeys",e[e.Object=2]="Object",e[e.Primitive=3]="Primitive"}(r=t.JSONObjectType||(t.JSONObjectType={}));var n=function(){function e(){}return e.getObjectType=function(e){return null!==e&&"object"==typeof e?Array.isArray(e)?r.Array:Object.keys(e).length?r.ObjectWithNonNumericKeys:r.Object:r.Primitive},e.checkLabelTypes=function(e){return"number"==typeof e.reduce((function(e,t){return e+(isNaN(Number(t))?t:Number(t))}),0)?"number":"string"},e.getUniqueObjectKeys=function(e){var t=[],n=r.Object;return e.forEach((function(e){t=t.concat(Object.keys(e)).filter((function(e,t,r){return r.indexOf(e)===t}))})),{labels:t,type:n}},e}();t.default=n},6094:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(483);t.default=n.default},2520:(e,t,r)=>{r(6002);var n=r(6094);t._=n.default},6259:(e,t,r)=>{var n=r(7418),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_={};function j(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||v}function w(){}function O(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=j.prototype;var E=O.prototype=new w;E.constructor=O,n(E,j.prototype),E.isPureReactComponent=!0;var g={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,o={},c=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:c,ref:a,props:o,_owner:g.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var R=/\/+/g,C=[];function A(e,t,r,n){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function $(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case u:case c:a=!0}}if(a)return r(n,e,""===t?"."+H(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+H(o=e[i],i);a+=$(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)a+=$(o=o.value,l=t+H(o,i++),r,n);else if("object"===o)throw r=""+e,Error(b(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return a}function T(e,t,r){return null==e?0:$(e,"",t,r)}function H(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(R,"$&/")+"/"),T(e,L,t=A(t,u,n,o)),N(t)}var M={current:null};function V(){var e=M.current;if(null===e)throw Error(b(321));return e}var Z={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;T(e,I,t=A(null,null,t,r)),N(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(b(143));return e}},t.Component=j,t.Fragment=a,t.Profiler=l,t.PureComponent=O,t.StrictMode=i,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,t.cloneElement=function(e,t,r){if(null==e)throw Error(b(267,e));var o=n({},e.props),c=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=g.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)k.call(t,f)&&!S.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:u,type:e.type,key:c,ref:a,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return V().useCallback(e,t)},t.useContext=function(e,t){return V().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return V().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return V().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return V().useLayoutEffect(e,t)},t.useMemo=function(e,t){return V().useMemo(e,t)},t.useReducer=function(e,t,r){return V().useReducer(e,t,r)},t.useRef=function(e){return V().useRef(e)},t.useState=function(e){return V().useState(e)},t.version="16.14.0"},9856:(e,t,r)=>{e.exports=r(6259)}}]);