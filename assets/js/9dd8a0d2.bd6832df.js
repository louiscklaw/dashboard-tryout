"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7054,5233,5368],{9702:(t,e,o)=>{o.d(e,{Z:()=>r});var l=o(7258),c=o(5616),i=o(7294);function r(t){let{to:e,text:o,icon:r,icon_color:n,text_color:s,subtitle:a}=t;return i.createElement(l.Z,{fullWidth:!0,onClick:t=>{window.open(e,"_blank")},color:"primary",size:"small",sx:{padding:"0.5rem"}},i.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column"}},i.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start"}},i.createElement("div",{style:{}},r),i.createElement("div",{style:{flexGrow:1}},i.createElement("div",{style:{paddingLeft:"0.5rem",paddingRight:"0.5rem",textAlign:"left",fontSize:"1.1em",fontWeight:"500",textTransform:"uppercase"}},o))),i.createElement("div",null,i.createElement(c.Z,{sx:{paddingLeft:"0.5rem",paddingRight:"0.5rem",textAlign:"left",fontSize:"0.8em",fontWeight:"400",textTransform:"uppercase",display:{xs:"none",md:"block"}}},a))))}},896:(t,e,o)=>{o.d(e,{Z:()=>i});var l=o(7294),c=o(9702);function i(t){let{to:e,text:o,status_id:i,icon:r,icon_color:n,text_color:s,subtitle:a}=t;return l.createElement(l.Fragment,null,l.createElement(c.Z,{to:e,text:o,icon:r,icon_color:n,text_color:s,subtitle:a}))}},3345:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});var l=o(7294);const c=()=>{var[t,e]=l.useState(""),[o,c]=l.useState("");return l.createElement(l.Fragment,null,l.createElement("div",{style:{fontSize:"0.75rem"}},l.createElement("div",null,"post test result:"),l.createElement("div",null,t),l.createElement("div",null,l.createElement("img",{src:"https://status.iamon99.com/api/badge/21/status?label=demo-react"}))))}},1373:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});var l=o(7294);const c=()=>{var[t,e]=l.useState({}),[o,c]=l.useState(""),[i,r]=l.useState(""),[n,s]=l.useState(""),[a,u]=l.useState(""),[m,d]=l.useState(""),[_,p]=l.useState(""),[x,h]=l.useState("");return l.useEffect((()=>{fetch("https://raw.githubusercontent.com/louiscklaw/carousell-monitor-playlist/gh-pages/post_test_result.json").then((t=>t.text())).then((t=>JSON.parse(t))).then((t=>{e(t);var{result:o}=t;c(o.last_update),r(o.vba_post_check),s(o.coding_post_check),u(o.programming_post_check),d(o.javascript_post_check),p(o.python_post_check),h(o.tableau_post_check||"NOT_FOUND")})).catch((t=>{console.log(t)}))}),[]),l.createElement(l.Fragment,null,l.createElement("div",{style:{fontSize:"0.75rem"}},l.createElement("div",null,"post test result:"),l.createElement("div",null,o),l.createElement("div",{style:{color:"white",backgroundColor:"OK"==n?"green":"red"}},"coding:",n),l.createElement("div",{style:{color:"white",backgroundColor:"OK"==i?"green":"red"}},"vba:",i),l.createElement("div",{style:{color:"white",backgroundColor:"OK"==a?"green":"red"}},"programming:",a),l.createElement("div",{style:{color:"white",backgroundColor:"OK"==m?"green":"red"}},"javascript:",m),l.createElement("div",{style:{color:"white",backgroundColor:"OK"==_?"green":"red"}},"python:",_),l.createElement("div",{style:{color:"white",backgroundColor:"OK"==x?"green":"red"}},"tableau:",x),l.createElement("div",null,l.createElement("a",{href:"https://changedetect.iamon99.com/?tag=carousell%2Fsearch",target:"_blank"},"changedetect"))))}},5657:(t,e,o)=>{o.r(e),o.d(e,{default:()=>I});var l=o(2263),c=o(179),i=o(7294),r=o(1265),n=o(2430),s=o(1181),a=o(5861),u=o(896),m=o(7868),d=o(1261);const _={title:"applications",links:[{to:"http://192.168.10.61:8095",text:"teedy",subtitle:"file sharing",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:9091",text:"torrent",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"}]},p={title:"carousell",links:[{to:"https://www.carousell.com.hk/u/louiscklaw/",text:"my-carousell",subtitle:"my carousell profile",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(m.Z,null)},{to:"https://louiscklaw.atlassian.net/jira/software/projects/CSELL/boards/1",text:"carousell - jira",subtitle:"jira",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://louiscklaw.github.io/carousell-playlist/",text:"carousell test result",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://trends.google.com/trends/trendingsearches/daily?geo=HK",text:"google search trend",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"}]},x={title:"change-detect",links:[{to:"http://changedetect.iamon99.com",text:"changedetect",subtitle:"changedetect.iamon99.com",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(m.Z,null)},{to:"http://192.168.10.61:15999/metrics",text:"browserless-metrics",subtitle:"browserless metrics",status_id:17,icon_color:"#800000",text_color:"#800000"}]};var h=o(5709);const b={title:"dashbaord",links:[{to:"http://192.168.10.61:9000",text:"m73 portainer",subtitle:"m73 portainer",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(h.Z,null)},{to:"https://trello.com/b/JNF4AVto/lynked-insight",text:"lynked-insight",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"http://192.168.10.61:28080/",text:"traefik dashboard",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://sentry.io/organizations/helloworld-sg/projects/",text:"sentry",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"}]},g={title:"profile",links:[{to:"https://freehunter.hk/settings",text:"freehunter",subtitle:"freehunter.hk/settings",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(m.Z,null)},{to:"https://www.hellotoby.com/dashboard/project",text:"hellotoby",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.fiverr.com/louiscklaw",text:"fiverr",subtitle:"fiverr.com/louiscklaw",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.upwork.com/freelancers/settings/contactInfo",text:"upwork",subtitle:"upwork",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.freelancer.com/u/louiscklaw",text:"freelancer",subtitle:"freelancer.com/u/louiscklaw",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.twitch.tv/7goolook",text:"twitch",subtitle:"twitch.tv/7goolook",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.youtube.com/channel/UCoFP0jiw4HAe6J4iprjcqag",text:"youtube",subtitle:"youtube profile",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.carousell.com.hk/u/louiscklaw/",text:"carousell",subtitle:"carousell profile",status_id:17,icon_color:"#800000",text_color:"#800000"}]};var E=o(5449),f=o(6023),k=o(5154),w=o(3800);const y={title:"outside links",links:[{to:"https://colors.dopely.top/",text:"dopely",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://colorhunt.co/palettes/retro",text:"colorhunt",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://brandpalettes.com",text:"brandpalettes",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://aboutme.louislabs.com",text:"aboutme.louislabs.com",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"http://brandcolors.net/",text:"brandcolors",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"http://192.168.10.61:8096",text:"mitm proxy ",subtitle:"8096",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(k.GzT,{size:"2em"})},{to:"http://i3mega.local",text:"i3mega",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(f.Z,null),tags:"printer"},{to:"https://flatuicolors.com/",text:"flatuicolors",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://github.com/webkul/coolhue",text:"coolhue",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://github.com/louiscklaw/dashboard-tryout/",text:"louiscklaw/dashboard-tryout",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(E.Z,null)},{to:"https://www.gradientos.app/",text:"gradientos",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://material.colorion.co/",text:"colorion",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(k.GzT,{size:"2em"})},{to:"https://louiscklaw.github.io/",text:"louiscklaw.github.io",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(k.GzT,{size:"2em"})},{to:"https://mui.com/material-ui/material-icons/",text:"material icons",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})}]},Z={title:"routine check",links:[{to:"https://github.com/louiscklaw/routine_check/actions",text:"routine_check/actions",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(m.Z,null),tags:"check"},{to:"https://louiscklaw.github.io/upptime-playlist",text:"upptime-playlist",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(m.Z,null)}]};var v=o(4117),z=o(4492);const S={title:"tools",links:[{to:"http://192.168.10.21:9000",text:"nuc portainer",subtitle:"nuc portainer",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(h.Z,null)},{to:"http://192.168.10.61:5010",text:"proxy pool",subtitle:"proxy pool",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(z.Z,null)},{to:"https://status.iamon99.com/dashboard",text:"uptime kuma",subtitle:"uptime kuma",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(z.Z,null)},{to:"http://192.168.10.61:2017/",text:"v2raya",subtitle:"v2raya",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(z.Z,null)},{to:"http://192.168.10.21:50080",text:"Homer",subtitle:"Homer",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(h.Z,null)},{to:"http://192.168.10.61:8087",text:"jenkins",subtitle:"jenkins",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(k.KPE,{size:"2em"})},{to:"http://192.168.10.61:8089",text:"checkmk",subtitle:"checkmk",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(z.Z,null)},{to:"http://192.168.10.61:8093",text:"RethinkDb",subtitle:"8093",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null),tags:"db database"},{to:"http://192.168.10.61:8086",text:"influxdb",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null),tags:"db database"},{to:"http://192.168.10.61:8086",text:"appwrite",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:8081",text:"phpmyadmin",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:5050",text:"pgadmin",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:5678",text:"n8n ",subtitle:"port 5678",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:8088",text:"appwrite",subtitle:"port 8088",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:9001",text:"questdb",subtitle:"port 9001",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"https://www.figma.com/files/recent?fuid=765995386551996371",text:"figma",subtitle:"figma.com",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"https://console.firebase.google.com/project/dashboard-76c7d/overview",text:"firebase console",subtitle:"console.firebase.google.com",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.21:6080",text:"android emu",subtitle:"6080",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(v.Z,null)},{to:"https://drone.iamon99.com",text:"drone ci",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(v.Z,null)},{to:"https://healthcheck.iamon99.com",text:"healthcheck",subtitle:"healthcheck.iamon99.com",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(v.Z,null)},{to:"http://192.168.10.21:6081",text:"android emu",subtitle:"6081",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(v.Z,null)},{to:"http://192.168.10.21:6082",text:"android emu",subtitle:"6082",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(v.Z,null)},{to:"http://192.168.10.61:4445/haproxy?stats",text:"haproxy",subtitle:"tor proxy 4445",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(v.Z,null)},{to:"http://192.168.10.61:9004/",text:"minio",subtitle:"tor proxy 4445",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(k.i1q,null)}]},j={title:"worksheets",links:[{to:"https://docs.google.com/spreadsheets/d/1TGaBTmKhGolKcalNePcAAhq6IHRlWGfbELQQoOMfCvU",text:"carousell \u5de5\u4f5c\u7d19",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(k.GzT,{size:"2em"})},{to:"https://docs.google.com/spreadsheets/d/1jdimi5kt6ZOkYph96k6EpsICYtSJzco6G3WuXQVoF4o",text:"\u6dd8\u5b9d\u5de5\u4f5c\u7d19",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(k.GzT,{size:"2em"})},{to:"https://docs.google.com/spreadsheets/d/1n8q-aFic3PKHCBQ-VKpp2NakSmHFbgrHiVrabNTorNg",text:"\u652f\u4ed8\u5bf3\u51fa\u5165\u6578",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(k.GzT,{size:"2em"})},{to:"https://docs.google.com/spreadsheets/d/1nwIj4Jt-LvN-RLqtY2O9Jbe-XsMyVs-04DWGLUPwzEM",text:"port schedule",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(k.GzT,{size:"2em"})},{to:"https://docs.google.com/spreadsheets/d/1hNURy7NIED8XXQ99tB0bLfmKpdELkRzhXBoHIqjvp0s",text:"password sheet",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(k.GzT,{size:"2em"})},{to:"https://docs.google.com/spreadsheets/d/1FSF0caQH2GbDivXbFNz2ZBiOUNbvyTAZvxptW6qXDHc",text:"HKBN sheet",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(k.GzT,{size:"2em"})}]};var C=o(2949),F=(o(9702),o(7258)),T=o(1536);function P(t){let{to:e,text:o,icon:l,icon_color:c,text_color:r,subtitle:n,badge:a}=t;return i.createElement(F.Z,{fullWidth:!0,onClick:t=>{window.open(e,"_blank")},color:"primary",size:"small",sx:{padding:"0.5rem"}},i.createElement(T.Z,null,i.createElement(T.Z,{item:!0},i.createElement(s.ZP,{container:!0},i.createElement(s.ZP,{item:!0,xs:12,container:!0},i.createElement(s.ZP,{item:!0,xs:3,color:c,sx:{}},l),i.createElement(s.ZP,{item:!0,xs:9,container:!0,justifyContent:"flex-start",alignItems:"center",color:r,sx:{}},i.createElement(s.ZP,{item:!0,xs:12,container:!0,justifyContent:"flex-start"},i.createElement("div",{style:{fontSize:"1.1em",fontWeight:"500",textTransform:"uppercase"}},o)))),i.createElement(s.ZP,{item:!0,xs:12},i.createElement("div",{style:{fontSize:"0.8em",fontWeight:"400",textTransform:"uppercase"}},n)))),i.createElement(T.Z,{item:!0},i.createElement("img",{src:`${a}`}))))}function G(t){let{to:e,text:o,status_id:l,icon:c,icon_color:r,text_color:n,subtitle:s,badge:a}=t;return i.createElement(i.Fragment,null,i.createElement(P,{badge:a,to:e,text:o,icon:c,icon_color:r,text_color:n,subtitle:s}))}var K=o(1373),N=o(3345);let H=22;const O=[g,b,_,S,x,Z,p,y,j];function D(){let[t,e]=i.useState("");const{colorMode:o,setColorMode:l}=(0,C.I)(),c=(0,r.Z)({palette:{primary:{main:"light"==o?"#2c3e50":"#95a5a6"},secondary:{main:"#95a5a6"}}});return i.createElement(i.Fragment,null,i.createElement(n.Z,{theme:c},i.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},i.createElement("div",{style:{margin:"0.5rem"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//status.iamon99.com/status/louiscklaw-github-io",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},i.createElement("div",{style:{fontSize:"0.75rem"}},"louiscklaw.github.io"),i.createElement("div",null,i.createElement("img",{src:"//status.iamon99.com/api/badge/2/status?label=homepage"})),i.createElement("div",null,i.createElement("img",{src:"//status.iamon99.com/api/badge/13/status?label=upload"})),i.createElement("div",null,i.createElement("img",{src:"//status.iamon99.com/api/badge/9/status?label=meet"})))),i.createElement("div",{style:{margin:"0.5rem"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//status.iamon99.com/status/changedetect",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},i.createElement("div",{style:{fontSize:"0.75rem"}},"changedetect"),i.createElement("div",null,i.createElement("img",{src:"//status.iamon99.com/api/badge/5/status?label=homepage"})))),i.createElement("div",{style:{margin:"0.5rem"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//status.iamon99.com/status/n8n",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},i.createElement("div",{style:{fontSize:"0.75rem"}},"n8n"),i.createElement("div",null,i.createElement("img",{src:`//status.iamon99.com/api/badge/${H}/status?label=homepage`}))),i.createElement("a",{href:"//n8n.iamon99.com",target:"_blank"},i.createElement("div",{style:{fontSize:"0.8rem"}},"n8n.iamon99.com"))),i.createElement("div",null,i.createElement(K.default,null)),i.createElement("div",null,i.createElement(N.default,null))),i.createElement(s.ZP,{container:!0,spacing:2},i.createElement(s.ZP,{item:!0,xs:12,container:!0,m:2},O.map((t=>i.createElement(i.Fragment,null,i.createElement(s.ZP,{item:!0,xs:12,m:2},i.createElement(a.Z,{variant:"h5"},t.title)),i.createElement(s.ZP,{item:!0,xs:12,container:!0},t.links.map((t=>t?.badge?i.createElement(i.Fragment,null,i.createElement(s.ZP,{item:!0,xs:6,sm:4,md:3,xl:1.5},i.createElement(G,{to:t.to,text:t.text||"",icon:t.icon||i.createElement(m.Z,null),subtitle:t.subtitle,badge:t.badge}))):i.createElement(i.Fragment,null,i.createElement(s.ZP,{item:!0,xs:6,sm:4,md:3,xl:1.5},i.createElement(u.Z,{to:t.to,text:t.text||"",icon:t.icon||i.createElement(m.Z,null),subtitle:t.subtitle})))))))))))))}function I(){const{siteConfig:t}=(0,l.Z)();return i.createElement(c.Z,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},i.createElement("main",null,i.createElement(D,null)))}}}]);