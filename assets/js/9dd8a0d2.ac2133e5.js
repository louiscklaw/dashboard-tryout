"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7054,5233,5368],{9702:(e,t,l)=>{l.d(t,{Z:()=>r});var o=l(7258),n=l(5616),i=l(7294);function r(e){let{to:t,text:l,icon:r,icon_color:a,text_color:c,subtitle:s}=e;return i.createElement(o.Z,{fullWidth:!0,onClick:e=>{window.open(t,"_blank")},color:"primary",size:"small",sx:{padding:"0.5rem"}},i.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column"}},i.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start"}},i.createElement("div",{style:{}},r),i.createElement("div",{style:{flexGrow:1}},i.createElement("div",{style:{paddingLeft:"0.5rem",paddingRight:"0.5rem",textAlign:"left",fontSize:"1.1em",fontWeight:"500",textTransform:"uppercase"}},l))),i.createElement("div",null,i.createElement(n.Z,{sx:{paddingLeft:"0.5rem",paddingRight:"0.5rem",textAlign:"left",fontSize:"0.8em",fontWeight:"400",textTransform:"uppercase",display:{xs:"none",md:"block"}}},s))))}},896:(e,t,l)=>{l.d(t,{Z:()=>i});var o=l(7294),n=l(9702);function i(e){let{to:t,text:l,status_id:i,icon:r,icon_color:a,text_color:c,subtitle:s}=e;return o.createElement(o.Fragment,null,o.createElement(n.Z,{to:t,text:l,icon:r,icon_color:a,text_color:c,subtitle:s}))}},3345:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});var o=l(7294);const n=()=>{var[e,t]=o.useState(""),[l,n]=o.useState("");return o.createElement(o.Fragment,null,o.createElement("div",{style:{fontSize:"0.75rem"}},o.createElement("div",null,"post test result:"),o.createElement("div",null,e),o.createElement("div",null,o.createElement("img",{src:"https://status.iamon99.com/api/badge/21/status?label=demo-react"}))))}},1373:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});var o=l(7294);const n=()=>{var[e,t]=o.useState({}),[l,n]=o.useState(""),[i,r]=o.useState(""),[a,c]=o.useState(""),[s,m]=o.useState(""),[u,d]=o.useState(""),[p,_]=o.useState(""),[x,f]=o.useState(""),[h,b]=o.useState("");return o.useEffect((()=>{fetch("https://raw.githubusercontent.com/louiscklaw/carousell-monitor-playlist/gh-pages/post_test_result.json").then((e=>e.text())).then((e=>JSON.parse(e))).then((e=>{t(e);var{result:l}=e;n(l.last_update),r(l.vba_post_check),c(l.coding_post_check),m(l.programming_post_check),d(l.javascript_post_check),_(l.python_post_check),f(l.tableau_post_check||"NOT_FOUND"),b(l.wordpress_post_check||"NOT_FOUND")})).catch((e=>{console.log(e)}))}),[]),o.createElement(o.Fragment,null,o.createElement("div",{style:{fontSize:"0.75rem"}},o.createElement("div",null,"post test result:"),o.createElement("div",null,l),o.createElement("a",{href:"https://github.com/louiscklaw/carousell-monitor-playlist/actions/workflows/carousell-post-test.yml",target:"_blank"},o.createElement("img",{src:"https://github.com/louiscklaw/carousell-monitor-playlist/actions/workflows/carousell-post-test.yml/badge.svg"})),o.createElement("div",{style:{color:"white",backgroundColor:"OK"==a?"green":"red"}},"coding:",a),o.createElement("div",{style:{color:"white",backgroundColor:"OK"==i?"green":"red"}},"vba:",i),o.createElement("div",{style:{color:"white",backgroundColor:"OK"==s?"green":"red"}},"programming:",s),o.createElement("div",{style:{color:"white",backgroundColor:"OK"==u?"green":"red"}},"javascript:",u),o.createElement("div",{style:{color:"white",backgroundColor:"OK"==p?"green":"red"}},"python:",p),o.createElement("div",{style:{color:"white",backgroundColor:"OK"==x?"green":"red"}},"tableau:",x),o.createElement("div",{style:{color:"white",backgroundColor:"OK"==h?"green":"red"}},"wordpress:",h),o.createElement("div",null,o.createElement("a",{href:"https://changedetect.iamon99.com/?tag=carousell%2Fsearch",target:"_blank"},"changedetect")),o.createElement("div",null,o.createElement("a",{href:"https://github.com/louiscklaw/carousell-monitor-playlist",target:"_blank"},"source"))))}},5210:(e,t,l)=>{l.r(t),l.d(t,{default:()=>A});var o=l(2263),n=l(179),i=l(7294),r=l(1265),a=l(2430),c=l(1181),s=l(5861),m=l(896),u=l(7868),d=l(1261);const p={title:"applications",links:[{to:"http://192.168.10.61:8095",text:"teedy",subtitle:"file sharing",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:9091",text:"torrent",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"}]},_={title:"carousell",links:[{to:"https://www.carousell.com.hk/u/louiscklaw/",text:"my-carousell",subtitle:"my carousell profile",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(u.Z,null)},{to:"https://louiscklaw.atlassian.net/jira/software/projects/CSELL/boards/1",text:"carousell - jira",subtitle:"jira",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://louiscklaw.github.io/carousell-playlist/",text:"carousell test result",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://trends.google.com/trends/trendingsearches/daily?geo=HK",text:"google search trend",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"}]},x={title:"change-detect",links:[{to:"http://changedetect.iamon99.com",text:"changedetect",subtitle:"changedetect.iamon99.com",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(u.Z,null)},{to:"http://192.168.10.61:15999/metrics",text:"browserless-metrics",subtitle:"browserless metrics",status_id:17,icon_color:"#800000",text_color:"#800000"}]};var f=l(5709);const h={title:"dashbaord",links:[{to:"http://192.168.10.61:9000",text:"m73 portainer",subtitle:"m73 portainer",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(f.Z,null)},{to:"https://trello.com/b/JNF4AVto/lynked-insight",text:"lynked-insight",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"http://192.168.10.61:28080/",text:"traefik dashboard",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://sentry.io/organizations/helloworld-sg/projects/",text:"sentry",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"}]},b={title:"profile",links:[{to:"https://freehunter.hk/settings",text:"freehunter",subtitle:"freehunter.hk/settings",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(u.Z,null)},{to:"https://www.hellotoby.com/dashboard/project",text:"hellotoby",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.fiverr.com/louiscklaw",text:"fiverr",subtitle:"fiverr.com/louiscklaw",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.upwork.com/freelancers/settings/contactInfo",text:"upwork",subtitle:"upwork",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.freelancer.com/u/louiscklaw",text:"freelancer",subtitle:"freelancer.com/u/louiscklaw",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.twitch.tv/7goolook",text:"twitch",subtitle:"twitch.tv/7goolook",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.youtube.com/channel/UCoFP0jiw4HAe6J4iprjcqag",text:"youtube",subtitle:"youtube profile",status_id:17,icon_color:"#800000",text_color:"#800000"},{to:"https://www.carousell.com.hk/u/louiscklaw/",text:"carousell",subtitle:"carousell profile",status_id:17,icon_color:"#800000",text_color:"#800000"}]};var g=l(5449),E=l(6023),y=l(5154),w=l(3800);const k={title:"outside links",links:[{to:"https://colors.dopely.top/",text:"dopely",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://colorhunt.co/palettes/retro",text:"colorhunt",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://brandpalettes.com",text:"brandpalettes",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://aboutme.louislabs.com",text:"aboutme.louislabs.com",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"http://brandcolors.net/",text:"brandcolors",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"http://192.168.10.61:8096",text:"mitm proxy ",subtitle:"8096",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(y.GzT,{size:"2em"})},{to:"http://i3mega.local",text:"i3mega",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(E.Z,null),tags:"printer"},{to:"https://flatuicolors.com/",text:"flatuicolors",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://github.com/webkul/coolhue",text:"coolhue",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://github.com/louiscklaw/dashboard-tryout/",text:"louiscklaw/dashboard-tryout",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(g.Z,null)},{to:"https://www.gradientos.app/",text:"gradientos",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})},{to:"https://material.colorion.co/",text:"colorion",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(y.GzT,{size:"2em"})},{to:"https://louiscklaw.github.io/",text:"louiscklaw.github.io",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(y.GzT,{size:"2em"})},{to:"https://mui.com/material-ui/material-icons/",text:"material icons",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(w.Z,{size:"2em"})}]},v={title:"routine check",links:[{to:"https://github.com/louiscklaw/routine_check/actions",text:"routine_check/actions",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(u.Z,null),tags:"check"},{to:"https://louiscklaw.github.io/upptime-playlist",text:"upptime-playlist",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(u.Z,null)}]};var Z=l(4117),j=l(4492);const C={title:"tools",links:[{to:"http://192.168.10.21:9000",text:"nuc portainer",subtitle:"nuc portainer",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(f.Z,null)},{to:"http://192.168.10.61:5010",text:"proxy pool",subtitle:"proxy pool",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(j.Z,null)},{to:"https://status.iamon99.com/dashboard",text:"uptime kuma",subtitle:"uptime kuma",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(j.Z,null)},{to:"http://192.168.10.61:2017/",text:"v2raya",subtitle:"v2raya",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(j.Z,null)},{to:"http://192.168.10.21:50080",text:"Homer",subtitle:"Homer",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(f.Z,null)},{to:"http://192.168.10.61:8087",text:"jenkins",subtitle:"jenkins",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(y.KPE,{size:"2em"})},{to:"http://192.168.10.61:8089",text:"checkmk",subtitle:"checkmk",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(j.Z,null)},{to:"http://192.168.10.61:8093",text:"RethinkDb",subtitle:"8093",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null),tags:"db database"},{to:"http://192.168.10.61:8086",text:"influxdb",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null),tags:"db database"},{to:"http://192.168.10.61:8086",text:"appwrite",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:8081",text:"phpmyadmin",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:5050",text:"pgadmin",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:5678",text:"n8n ",subtitle:"port 5678",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:8088",text:"appwrite",subtitle:"port 8088",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.61:9001",text:"questdb",subtitle:"port 9001",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"https://www.figma.com/files/recent?fuid=765995386551996371",text:"figma",subtitle:"figma.com",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"https://console.firebase.google.com/project/dashboard-76c7d/overview",text:"firebase console",subtitle:"console.firebase.google.com",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(d.Z,null)},{to:"http://192.168.10.21:6080",text:"android emu",subtitle:"6080",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(Z.Z,null)},{to:"https://drone.iamon99.com",text:"drone ci",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(Z.Z,null)},{to:"https://healthcheck.iamon99.com",text:"healthcheck",subtitle:"healthcheck.iamon99.com",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(Z.Z,null)},{to:"http://192.168.10.21:6081",text:"android emu",subtitle:"6081",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(Z.Z,null)},{to:"http://192.168.10.21:6082",text:"android emu",subtitle:"6082",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(Z.Z,null)},{to:"http://192.168.10.61:4445/haproxy?stats",text:"haproxy",subtitle:"tor proxy 4445",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(Z.Z,null)},{to:"http://192.168.10.61:9004/",text:"minio",subtitle:"tor proxy 4445",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(y.i1q,null)}]},z={title:"worksheets",links:[{to:"https://docs.google.com/spreadsheets/d/1TGaBTmKhGolKcalNePcAAhq6IHRlWGfbELQQoOMfCvU",text:"carousell \u5de5\u4f5c\u7d19",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(y.GzT,{size:"2em"})},{to:"https://docs.google.com/spreadsheets/d/1jdimi5kt6ZOkYph96k6EpsICYtSJzco6G3WuXQVoF4o",text:"\u6dd8\u5b9d\u5de5\u4f5c\u7d19",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(y.GzT,{size:"2em"})},{to:"https://docs.google.com/spreadsheets/d/1n8q-aFic3PKHCBQ-VKpp2NakSmHFbgrHiVrabNTorNg",text:"\u652f\u4ed8\u5bf3\u51fa\u5165\u6578",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(y.GzT,{size:"2em"})},{to:"https://docs.google.com/spreadsheets/d/1nwIj4Jt-LvN-RLqtY2O9Jbe-XsMyVs-04DWGLUPwzEM",text:"port schedule",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(y.GzT,{size:"2em"})},{to:"https://docs.google.com/spreadsheets/d/1hNURy7NIED8XXQ99tB0bLfmKpdELkRzhXBoHIqjvp0s",text:"password sheet",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(y.GzT,{size:"2em"})},{to:"https://docs.google.com/spreadsheets/d/1FSF0caQH2GbDivXbFNz2ZBiOUNbvyTAZvxptW6qXDHc",text:"HKBN sheet",subtitle:"",status_id:17,icon_color:"#800000",text_color:"#800000",icon:i.createElement(y.GzT,{size:"2em"})}]};var T=l(2949),D=(l(9702),l(7258)),S=l(1536);function I(e){let{to:t,text:l,icon:o,icon_color:n,text_color:r,subtitle:a,badge:s}=e;return i.createElement(D.Z,{fullWidth:!0,onClick:e=>{window.open(t,"_blank")},color:"primary",size:"small",sx:{padding:"0.5rem"}},i.createElement(S.Z,null,i.createElement(S.Z,{item:!0},i.createElement(c.ZP,{container:!0},i.createElement(c.ZP,{item:!0,xs:12,container:!0},i.createElement(c.ZP,{item:!0,xs:3,color:n,sx:{}},o),i.createElement(c.ZP,{item:!0,xs:9,container:!0,justifyContent:"flex-start",alignItems:"center",color:r,sx:{}},i.createElement(c.ZP,{item:!0,xs:12,container:!0,justifyContent:"flex-start"},i.createElement("div",{style:{fontSize:"1.1em",fontWeight:"500",textTransform:"uppercase"}},l)))),i.createElement(c.ZP,{item:!0,xs:12},i.createElement("div",{style:{fontSize:"0.8em",fontWeight:"400",textTransform:"uppercase"}},a)))),i.createElement(S.Z,{item:!0},i.createElement("img",{src:`${s}`}))))}function F(e){let{to:t,text:l,status_id:o,icon:n,icon_color:r,text_color:a,subtitle:c,badge:s}=e;return i.createElement(i.Fragment,null,i.createElement(I,{badge:s,to:t,text:l,icon:n,icon_color:r,text_color:a,subtitle:c}))}var P=l(1373),G=l(3345);const N=()=>i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"10vw"}},i.createElement("div",null,i.createElement("div",{style:{fontSize:"0.75rem",width:"100%",fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"flex-end"}},"louiscklaw.github.io"),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/2/status?label=homepage"}))),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/13/status?label=upload"}))),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/9/status?label=meet"})))))),O=()=>i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"10vw"}},i.createElement("div",{style:{}},i.createElement("div",{style:{fontSize:"0.75rem",width:"100%",fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"flex-end"}},"wordpress demo"),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/36/status?label=mobile_apps_demo"}))),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/26/status?label=relocation_demo"}))),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/35/status?label=company_web_demo"}))),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/34/status?label=freelancer_demo"}))),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/32/status?label=fotop_demo"}))),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/33/status?label=private_tutor_demo"}))),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/33/status?label=interior_design_demo"}))),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/30/status?label=property_agency_demo"}))),i.createElement("div",{style:{paddingTop:"0.1rem",width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//mobile_apps_demo.louislabs.com/",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("img",{src:"//status.iamon99.com/api/badge/29/status?label=insurence_agent_demo"})))))),K=()=>i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"10vw"}},i.createElement("div",{style:{}},i.createElement("div",{style:{fontSize:"0.75rem",width:"100%",fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"flex-end"}},"change detect"),i.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://carousell-changedetect.iamon99.com/",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("div",null,i.createElement("img",{src:"//status.iamon99.com/api/badge/25/status?label=carousell"})))),i.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://job-changedetect.iamon99.com/",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("div",null,i.createElement("img",{src:"//status.iamon99.com/api/badge/24/status?label=job"})))),i.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://private-changedetect.iamon99.com/",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("div",null,i.createElement("img",{src:"//status.iamon99.com/api/badge/5/status?label=private"}))))))),W=()=>i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"10vw"}},i.createElement("div",{style:{}},i.createElement("div",{style:{fontSize:"0.75rem",width:"100%",fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"flex-end"}},"n8n"),i.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//status.iamon99.com/status/n8n",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}},i.createElement("div",null,i.createElement("img",{src:"//status.iamon99.com/api/badge/1/status?label=homepage"})))),i.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"}},i.createElement("a",{href:"//n8n.iamon99.com",target:"_blank"},i.createElement("div",{style:{fontSize:"0.8rem"}},"n8n.iamon99.com")))))),H=()=>i.createElement(i.Fragment,null,i.createElement("div",null,"Status section"),i.createElement("div",{style:{display:"flex"}},i.createElement(N,null),i.createElement(O,null),i.createElement(K,null),i.createElement(W,null),i.createElement(P.default,null),i.createElement(G.default,null)));const L=[b,h,p,C,x,v,_,k,z];function q(){let[e,t]=i.useState("");const{colorMode:l,setColorMode:o}=(0,T.I)(),n=(0,r.Z)({palette:{primary:{main:"light"==l?"#2c3e50":"#95a5a6"},secondary:{main:"#95a5a6"}}});return i.createElement(i.Fragment,null,i.createElement(a.Z,{theme:n},i.createElement(H,null),i.createElement(c.ZP,{container:!0,spacing:2},i.createElement(c.ZP,{item:!0,xs:12,container:!0,m:2},L.map((e=>i.createElement(i.Fragment,null,i.createElement(c.ZP,{item:!0,xs:12,m:2},i.createElement(s.Z,{variant:"h5"},e.title)),i.createElement(c.ZP,{item:!0,xs:12,container:!0},e.links.map((e=>e?.badge?i.createElement(i.Fragment,null,i.createElement(c.ZP,{item:!0,xs:6,sm:4,md:3,xl:1.5},i.createElement(F,{to:e.to,text:e.text||"",icon:e.icon||i.createElement(u.Z,null),subtitle:e.subtitle,badge:e.badge}))):i.createElement(i.Fragment,null,i.createElement(c.ZP,{item:!0,xs:6,sm:4,md:3,xl:1.5},i.createElement(m.Z,{to:e.to,text:e.text||"",icon:e.icon||i.createElement(u.Z,null),subtitle:e.subtitle})))))))))))))}function A(){const{siteConfig:e}=(0,o.Z)();return i.createElement(n.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},i.createElement("main",null,i.createElement(q,null)))}}}]);