"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3692],{3812:(e,t,n)=>{n.d(t,{c:()=>ie});var o=n(5656),r=n(5072),i=n(1504),a=n(2768),c=n(8196),s=n(3284),l=n(9312),u=n(6940),d=n(8060),p=n(4184),h=n(6796),m=n(4208);var f=n(8992);const v=i.createContext(null);function b(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function g(e,t,n){return null!=n[t]?n[t]:e.props[t]}function x(e,t,n){var o=b(e.children),r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o,r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var c={};for(var s in t){if(r[s])for(o=0;o<r[s].length;o++){var l=r[s][o];c[r[s][o]]=n(l)}c[s]=n(s)}for(o=0;o<i.length;o++)c[i[o]]=n(i[o]);return c}(t,o);return Object.keys(r).forEach((function(a){var c=r[a];if((0,i.isValidElement)(c)){var s=a in t,l=a in o,u=t[a],d=(0,i.isValidElement)(u)&&!u.props.in;!l||s&&!d?l||!s||d?l&&s&&(0,i.isValidElement)(u)&&(r[a]=(0,i.cloneElement)(c,{onExited:n.bind(null,c),in:u.props.in,exit:g(c,"exit",e),enter:g(c,"enter",e)})):r[a]=(0,i.cloneElement)(c,{in:!1}):r[a]=(0,i.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:g(c,"exit",e),enter:g(c,"enter",e)})}})),r}var y=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},S=function(e){function t(t,n){var o,r=(o=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}(0,f.c)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,o,r=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,o=a,b(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:o.bind(null,e),in:!0,appear:g(e,"appear",n),enter:g(e,"enter",n),exit:g(e,"exit",n)})}))):x(e,r,a),firstRender:!1}},n.handleExited=function(e,t){var n=b(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.c)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,o.c)(e,["component","childFactory"]),a=this.state.contextValue,c=y(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(v.Provider,{value:a},c):i.createElement(v.Provider,{value:a},i.createElement(t,r,c))},t}(i.Component);S.propTypes={},S.defaultProps={component:"div",childFactory:function(e){return e}};const R=S;n(2476);var w=n(1758);n(6628),n(4792);function E(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,w.k)(t)}var k=function(){var e=E.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};var z=n(4148),C=n(7624);const M=function(e){const{className:t,classes:n,pulsate:o=!1,rippleX:r,rippleY:c,rippleSize:s,in:l,onExited:u,timeout:d}=e,[p,h]=i.useState(!1),m=(0,a.c)(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),f={width:s,height:s,top:-s/2+c,left:-s/2+r},v=(0,a.c)(n.child,p&&n.childLeaving,o&&n.childPulsate);return l||p||h(!0),i.useEffect((()=>{if(!l&&null!=u){const e=setTimeout(u,d);return()=>{clearTimeout(e)}}}),[u,l,d]),(0,C.jsx)("span",{className:m,style:f,children:(0,C.jsx)("span",{className:v})})};var $=n(7100);const I=(0,$.c)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),T=["center","classes","className"];let V,L,B,N,P=e=>e;const W=k(V||(V=P`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),j=k(L||(L=P`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),F=k(B||(B=P`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),D=(0,u.cp)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),O=(0,u.cp)(M,{name:"MuiTouchRipple",slot:"Ripple"})(N||(N=P`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),I.rippleVisible,W,550,(({theme:e})=>e.transitions.easing.easeInOut),I.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),I.child,I.childLeaving,j,550,(({theme:e})=>e.transitions.easing.easeInOut),I.childPulsate,F,(({theme:e})=>e.transitions.easing.easeInOut)),A=i.forwardRef((function(e,t){const n=(0,d.c)({props:e,name:"MuiTouchRipple"}),{center:c=!1,classes:s={},className:l}=n,u=(0,o.c)(n,T),[p,h]=i.useState([]),m=i.useRef(0),f=i.useRef(null);i.useEffect((()=>{f.current&&(f.current(),f.current=null)}),[p]);const v=i.useRef(!1),b=(0,z.c)(),g=i.useRef(null),x=i.useRef(null),y=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:o,rippleSize:r,cb:i}=e;h((e=>[...e,(0,C.jsx)(O,{classes:{ripple:(0,a.c)(s.ripple,I.ripple),rippleVisible:(0,a.c)(s.rippleVisible,I.rippleVisible),ripplePulsate:(0,a.c)(s.ripplePulsate,I.ripplePulsate),child:(0,a.c)(s.child,I.child),childLeaving:(0,a.c)(s.childLeaving,I.childLeaving),childPulsate:(0,a.c)(s.childPulsate,I.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:o,rippleSize:r},m.current)])),m.current+=1,f.current=i}),[s]),S=i.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:o=!1,center:r=c||t.pulsate,fakeElement:i=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&v.current)return void(v.current=!1);"touchstart"===(null==e?void 0:e.type)&&(v.current=!0);const a=i?null:x.current,s=a?a.getBoundingClientRect():{width:0,height:0,left:0,top:0};let l,u,d;if(r||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)l=Math.round(s.width/2),u=Math.round(s.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;l=Math.round(t-s.left),u=Math.round(n-s.top)}if(r)d=Math.sqrt((2*s.width**2+s.height**2)/3),d%2==0&&(d+=1);else{const e=2*Math.max(Math.abs((a?a.clientWidth:0)-l),l)+2,t=2*Math.max(Math.abs((a?a.clientHeight:0)-u),u)+2;d=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===g.current&&(g.current=()=>{y({pulsate:o,rippleX:l,rippleY:u,rippleSize:d,cb:n})},b.start(80,(()=>{g.current&&(g.current(),g.current=null)}))):y({pulsate:o,rippleX:l,rippleY:u,rippleSize:d,cb:n})}),[c,y,b]),w=i.useCallback((()=>{S({},{pulsate:!0})}),[S]),E=i.useCallback(((e,t)=>{if(b.clear(),"touchend"===(null==e?void 0:e.type)&&g.current)return g.current(),g.current=null,void b.start(0,(()=>{E(e,t)}));g.current=null,h((e=>e.length>0?e.slice(1):e)),f.current=t}),[b]);return i.useImperativeHandle(t,(()=>({pulsate:w,start:S,stop:E})),[w,S,E]),(0,C.jsx)(D,(0,r.c)({className:(0,a.c)(I.root,s.root,l),ref:x},u,{children:(0,C.jsx)(R,{component:null,exit:!0,children:p})}))}));var K=n(1272);function U(e){return(0,K.cp)("MuiButtonBase",e)}const X=(0,$.c)("MuiButtonBase",["root","disabled","focusVisible"]),Y=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],H=(0,u.cp)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${X.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),_=i.forwardRef((function(e,t){const n=(0,d.c)({props:e,name:"MuiButtonBase"}),{action:c,centerRipple:l=!1,children:u,className:f,component:v="button",disabled:b=!1,disableRipple:g=!1,disableTouchRipple:x=!1,focusRipple:y=!1,LinkComponent:S="a",onBlur:R,onClick:w,onContextMenu:E,onDragLeave:k,onFocus:z,onFocusVisible:M,onKeyDown:$,onKeyUp:I,onMouseDown:T,onMouseLeave:V,onMouseUp:L,onTouchEnd:B,onTouchMove:N,onTouchStart:P,tabIndex:W=0,TouchRippleProps:j,touchRippleRef:F,type:D}=n,O=(0,o.c)(n,Y),K=i.useRef(null),X=i.useRef(null),_=(0,p.c)(X,F),{isFocusVisibleRef:G,onFocus:q,onBlur:J,ref:Q}=(0,m.c)(),[Z,ee]=i.useState(!1);b&&Z&&ee(!1),i.useImperativeHandle(c,(()=>({focusVisible:()=>{ee(!0),K.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const oe=te&&!g&&!b;function re(e,t,n=x){return(0,h.c)((o=>{t&&t(o);return!n&&X.current&&X.current[e](o),!0}))}i.useEffect((()=>{Z&&y&&!g&&te&&X.current.pulsate()}),[g,y,Z,te]);const ie=re("start",T),ae=re("stop",E),ce=re("stop",k),se=re("stop",L),le=re("stop",(e=>{Z&&e.preventDefault(),V&&V(e)})),ue=re("start",P),de=re("stop",B),pe=re("stop",N),he=re("stop",(e=>{J(e),!1===G.current&&ee(!1),R&&R(e)}),!1),me=(0,h.c)((e=>{K.current||(K.current=e.currentTarget),q(e),!0===G.current&&(ee(!0),M&&M(e)),z&&z(e)})),fe=()=>{const e=K.current;return v&&"button"!==v&&!("A"===e.tagName&&e.href)},ve=i.useRef(!1),be=(0,h.c)((e=>{y&&!ve.current&&Z&&X.current&&" "===e.key&&(ve.current=!0,X.current.stop(e,(()=>{X.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),$&&$(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!b&&(e.preventDefault(),w&&w(e))})),ge=(0,h.c)((e=>{y&&" "===e.key&&X.current&&Z&&!e.defaultPrevented&&(ve.current=!1,X.current.stop(e,(()=>{X.current.pulsate(e)}))),I&&I(e),w&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&w(e)}));let xe=v;"button"===xe&&(O.href||O.to)&&(xe=S);const ye={};"button"===xe?(ye.type=void 0===D?"button":D,ye.disabled=b):(O.href||O.to||(ye.role="button"),b&&(ye["aria-disabled"]=b));const Se=(0,p.c)(t,Q,K);const Re=(0,r.c)({},n,{centerRipple:l,component:v,disabled:b,disableRipple:g,disableTouchRipple:x,focusRipple:y,tabIndex:W,focusVisible:Z}),we=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:r}=e,i={root:["root",t&&"disabled",n&&"focusVisible"]},a=(0,s.c)(i,U,r);return n&&o&&(a.root+=` ${o}`),a})(Re);return(0,C.jsxs)(H,(0,r.c)({as:xe,className:(0,a.c)(we.root,f),ownerState:Re,onBlur:he,onClick:w,onContextMenu:ae,onFocus:me,onKeyDown:be,onKeyUp:ge,onMouseDown:ie,onMouseLeave:le,onMouseUp:se,onDragLeave:ce,onTouchEnd:de,onTouchMove:pe,onTouchStart:ue,ref:Se,tabIndex:b?-1:W,type:D},ye,O,{children:[u,oe?(0,C.jsx)(A,(0,r.c)({ref:_,center:l},j)):null]}))}));var G=n(3068);function q(e){return(0,K.cp)("MuiButton",e)}const J=(0,$.c)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const Q=i.createContext({});const Z=i.createContext(void 0),ee=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],te=e=>(0,r.c)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),ne=(0,u.cp)(_,{shouldForwardProp:e=>(0,u.CU)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,G.c)(n.color)}`],t[`size${(0,G.c)(n.size)}`],t[`${n.variant}Size${(0,G.c)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,o;const i="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],a="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,r.c)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,r.c)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.W4)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.W4)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.W4)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:a,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,r.c)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${J.focusVisible}`]:(0,r.c)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${J.disabled}`]:(0,r.c)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,l.W4)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(o=e.palette).getContrastText)?void 0:n.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${J.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${J.disabled}`]:{boxShadow:"none"}})),oe=(0,u.cp)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,G.c)(n.size)}`]]}})((({ownerState:e})=>(0,r.c)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},te(e)))),re=(0,u.cp)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,G.c)(n.size)}`]]}})((({ownerState:e})=>(0,r.c)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},te(e)))),ie=i.forwardRef((function(e,t){const n=i.useContext(Q),l=i.useContext(Z),u=(0,c.c)(n,e),p=(0,d.c)({props:u,name:"MuiButton"}),{children:h,color:m="primary",component:f="button",className:v,disabled:b=!1,disableElevation:g=!1,disableFocusRipple:x=!1,endIcon:y,focusVisibleClassName:S,fullWidth:R=!1,size:w="medium",startIcon:E,type:k,variant:z="text"}=p,M=(0,o.c)(p,ee),$=(0,r.c)({},p,{color:m,component:f,disabled:b,disableElevation:g,disableFocusRipple:x,fullWidth:R,size:w,type:k,variant:z}),I=(e=>{const{color:t,disableElevation:n,fullWidth:o,size:i,variant:a,classes:c}=e,l={root:["root",a,`${a}${(0,G.c)(t)}`,`size${(0,G.c)(i)}`,`${a}Size${(0,G.c)(i)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,G.c)(i)}`],endIcon:["endIcon",`iconSize${(0,G.c)(i)}`]},u=(0,s.c)(l,q,c);return(0,r.c)({},c,u)})($),T=E&&(0,C.jsx)(oe,{className:I.startIcon,ownerState:$,children:E}),V=y&&(0,C.jsx)(re,{className:I.endIcon,ownerState:$,children:y}),L=l||"";return(0,C.jsxs)(ne,(0,r.c)({ownerState:$,className:(0,a.c)(n.className,I.root,v,L),component:f,disabled:b,focusRipple:!x,focusVisibleClassName:(0,a.c)(I.focusVisible,S),ref:t,type:k},M,{classes:I,children:[T,h,V]}))}))},8968:(e,t,n)=>{n.d(t,{c:()=>z});var o=n(5656),r=n(5072),i=n(1504),a=n(7312),c=n(2808),s=n(3284),l=n(1272);const u=(0,n(4892).cp)();var d=n(8920),p=n(4088),h=n(5244),m=n(4968),f=n(5848),v=n(7624);const b=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,h.c)(),x=u("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function y(e){return(0,d.c)({props:e,name:"MuiStack",defaultTheme:g})}function S(e,t){const n=i.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,r)=>(e.push(o),r<n.length-1&&e.push(i.cloneElement(t,{key:`separator-${r}`})),e)),[])}const R=({ownerState:e,theme:t})=>{let n=(0,r.c)({display:"flex",flexDirection:"column"},(0,m.ls)({theme:t},(0,m.Ws)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,f.IV)(t),r=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),i=(0,m.Ws)({values:e.direction,base:r}),a=(0,m.Ws)({values:e.spacing,base:r});"object"==typeof i&&Object.keys(i).forEach(((e,t,n)=>{if(!i[e]){const o=t>0?i[n[t-1]]:"column";i[e]=o}}));const s=(t,n)=>{return e.useFlexGap?{gap:(0,f.uc)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${r=n?i[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,f.uc)(o,t)}};var r};n=(0,c.c)(n,(0,m.ls)({theme:t},a,s))}return n=(0,m.cD)(t.breakpoints,n),n};var w=n(6940),E=n(8060);const k=function(e={}){const{createStyledComponent:t=x,useThemeProps:n=y,componentName:c="MuiStack"}=e,u=t(R),d=i.forwardRef((function(e,t){const i=n(e),d=(0,p.c)(i),{component:h="div",direction:m="column",spacing:f=0,divider:g,children:x,className:y,useFlexGap:R=!1}=d,w=(0,o.c)(d,b),E={direction:m,spacing:f,useFlexGap:R},k=(0,s.c)({root:["root"]},(e=>(0,l.cp)(c,e)),{});return(0,v.jsx)(u,(0,r.c)({as:h,ownerState:E,ref:t,className:(0,a.c)(k.root,y)},w,{children:g?S(x,g):x}))}));return d}({createStyledComponent:(0,w.cp)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,E.c)({props:e,name:"MuiStack"})}),z=k},6796:(e,t,n)=>{n.d(t,{c:()=>i});var o=n(1504),r=n(3912);const i=function(e){const t=o.useRef(e);return(0,r.c)((()=>{t.current=e})),o.useRef(((...e)=>(0,t.current)(...e))).current}},4184:(e,t,n)=>{n.d(t,{c:()=>i});var o=n(1504),r=n(6384);const i=function(...e){return o.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{(0,r.c)(e,t)}))}),e)}},4208:(e,t,n)=>{n.d(t,{c:()=>h});var o=n(1504),r=n(4148);let i=!0,a=!1;const c=new r.S,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function u(){i=!1}function d(){"hidden"===this.visibilityState&&a&&(i=!0)}function p(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return i||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!s[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}const h=function(){const e=o.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",d,!0))}),[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(a=!0,c.start(100,(()=>{a=!1})),t.current=!1,!0)},ref:e}}},6384:(e,t,n)=>{function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{c:()=>o})},3912:(e,t,n)=>{n.d(t,{c:()=>r});var o=n(1504);const r="undefined"!=typeof window?o.useLayoutEffect:o.useEffect},4148:(e,t,n)=>{n.d(t,{S:()=>a,c:()=>c});var o=n(1504);const r={};const i=[];class a{constructor(){this.currentId=0,this.clear=()=>{0!==this.currentId&&(clearTimeout(this.currentId),this.currentId=0)},this.disposeEffect=()=>this.clear}static create(){return new a}start(e,t){this.clear(),this.currentId=setTimeout((()=>{this.currentId=0,t()}),e)}}function c(){const e=function(e,t){const n=o.useRef(r);return n.current===r&&(n.current=e(t)),n}(a.create).current;var t;return t=e.disposeEffect,o.useEffect(t,i),e}}}]);