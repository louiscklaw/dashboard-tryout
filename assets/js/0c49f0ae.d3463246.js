"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[107],{2586:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(7294);const c=()=>{var[e,t]=a.useState({}),[r,c]=a.useState(""),[l,o]=a.useState(""),[n,s]=a.useState(""),[u,i]=a.useState(""),[h,d]=a.useState(""),[g,p]=a.useState("");return a.useEffect((()=>{fetch("https://raw.githubusercontent.com/louiscklaw/carousell-monitor-playlist/gh-pages/post_test_result.json").then((e=>e.text())).then((e=>JSON.parse(e))).then((e=>{t(e);var{result:r}=e;c(r.last_update),o(r.vba_post_check),s(r.coding_post_check),i(r.programming_post_check),d(r.javascript_post_check),p(r.python_post_check)})).catch((e=>{console.log(e)}))}),[]),a.createElement(a.Fragment,null,a.createElement("div",{style:{fontSize:"0.75rem"}},a.createElement("div",null,"post test result:"),a.createElement("div",null,r),a.createElement("div",{style:{color:"white",backgroundColor:"OK"==n?"green":"red"}},"coding:",n),a.createElement("div",{style:{color:"white",backgroundColor:"OK"==l?"green":"red"}},"vba:",l),a.createElement("div",{style:{color:"white",backgroundColor:"OK"==u?"green":"red"}},"programming:",u),a.createElement("div",{style:{color:"white",backgroundColor:"OK"==h?"green":"red"}},"javascript:",h),a.createElement("div",{style:{color:"white",backgroundColor:"OK"==g?"green":"red"}},"python:",g),a.createElement("div",null,a.createElement("a",{href:"https://changedetect.iamon99.com/?tag=carousell%2Fsearch",target:"_blank"},"changedetect"))))}}}]);