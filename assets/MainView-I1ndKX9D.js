import{d as m,o as w,c as a,a as s,b as r,t as o,F as u,r as h,e,f as p,g as f,u as i,h as k,n as x,i as $,j as g}from"./index-al44aGwb.js";const C={class:"card"},D={class:"basic-main-info text-center mb-1"},M=["src"],S={class:"text-[1.2rem] font-bold"},A={key:1,class:"text-[0.8rem]"},Z=s("hr",null,null,-1),V={class:"basic-sub-info ml-3 mt-3"},B={key:0},T=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"size-4 inline"},[s("path",{d:"M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"}),s("path",{d:"m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"})],-1),j=["href"],L={key:1},E=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"size-4 inline"},[s("path",{d:"M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"}),s("path",{"fill-rule":"evenodd",d:"M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z","clip-rule":"evenodd"})],-1),P={key:2},H=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"size-4 inline"},[s("path",{d:"M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"}),s("path",{d:"M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"})],-1),z=["href"],N={key:3},I=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"size-4 inline"},[s("path",{"fill-rule":"evenodd",d:"m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z","clip-rule":"evenodd"})],-1),O={key:4},R={class:"profiles"},q={class:"font-semibold"},K=["href"],U=["href"],W={key:5,class:"mt-4"},F=m({__name:"BasicsCard",props:{data:{type:Object,required:!0}},setup(n){const l=n;return w(()=>{document.title=`${l.data.name} - Resume`}),(d,t)=>(e(),a("div",C,[s("div",D,[n.data.image?(e(),a("img",{key:0,src:n.data.image,alt:""},null,8,M)):r("",!0),s("div",S,o(n.data.name||"no-name"),1),n.data.label?(e(),a("div",A,o(n.data.label),1)):r("",!0)]),Z,s("div",V,[n.data.email?(e(),a("div",B,[T,s("a",{href:`mailto:${n.data.email}`},o(n.data.email),9,j)])):r("",!0),n.data.phone?(e(),a("div",L,[E,s("span",null,o(n.data.phone),1)])):r("",!0),n.data.url?(e(),a("div",P,[H,s("a",{href:n.data.url},o(n.data.url),9,z)])):r("",!0),n.data.location?(e(),a("div",N,[I,s("span",null,o(n.data.location.city)+" "+o(n.data.location.city&&n.data.location.countryCode?", ":"")+" "+o(n.data.location.countryCode),1)])):r("",!0),n.data.profiles&&n.data.profiles.length>0?(e(),a("div",O,[(e(!0),a(u,null,h(n.data.profiles,c=>(e(),a("div",R,[s("span",q,o(c.network||"Unknown")+": ",1),c.url?(e(),a("a",{key:0,href:c.url},o(c.username||"Link"),9,K)):(e(),a("span",{key:1,href:c.url},o(c.username||"N/A"),9,U))]))),256))])):r("",!0),n.data.summary?(e(),a("div",W,o(n.data.summary),1)):r("",!0)])]))}}),v=n=>{const l=new Date(n);if(isNaN(l.getTime()))return n;const d={year:"numeric",month:"short"};return l.toLocaleDateString("en-US",d)},G={class:"card"},J=p('<div class="education-header mb-1"><span class="text-base pl-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"></path></svg><span class="ml-1">Education</span></span></div>',1),Q={class:"education-main-info ml-3 mt-3"},Y=s("hr",{class:"mb-2"},null,-1),X={key:0},ee={class:"font-bold"},te={key:0,class:"text-[0.6rem]"},se={key:1,class:"text-xs text-zinc-500"},ae={key:2,class:"text-xs my-2 ml-4"},ne={class:"list-disc"},oe=m({__name:"EducationCard",props:{data:{type:Object,required:!0}},setup(n){return(l,d)=>(e(),a("div",G,[J,s("div",Q,[(e(!0),a(u,null,h(n.data,t=>(e(),a("div",null,[Y,t.institution?(e(),a("div",X,[s("span",ee,[f(o(t.studyType)+" ",1),s("span",null,o(t.studyType&&t.area?" in ":""),1),f(" "+o(t.area),1)]),s("span",null,o(t.studyType&&t.area&&t.institution?", ":""),1),s("span",null,o(t.institution),1),t.score?(e(),a("span",te," ("+o(t.score)+") ",1)):r("",!0)])):r("",!0),t.startDate||t.endDate?(e(),a("div",se,[s("span",null,o(i(v)(t.startDate))+" - "+o(i(v)(t.endDate)),1)])):r("",!0),t.courses&&t.courses.length>0?(e(),a("div",ae,[s("ul",ne,[(e(!0),a(u,null,h(t.courses,c=>(e(),a("li",null,o(c),1))),256))])])):r("",!0)]))),256))])]))}}),y=k([{background:"#ff9999",text:"#660000"},{background:"#99ccff",text:"#003366"},{background:"#ffff99",text:"#666600"},{background:"#cc99ff",text:"#330066"},{background:"#ffcc99",text:"#663300"},{background:"#99ff99",text:"#006600"}]),b=k([{background:"#fcd34d",text:"#92400e"},{background:"#6ee7b7",text:"#065f46"},{background:"#93c5fd",text:"#1e3a8a"},{background:"#fca5a5",text:"#7f1d1d"},{background:"#e9d5ff",text:"#4c1d95"},{background:"#fed7aa",text:"#9a3412"}]),le={class:"card"},re=p('<div class="interests-header mb-1"><span class="text-base pl-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"></path></svg><span class="ml-1">Interests</span></span></div>',1),ie={class:"interests-main-info ml-3 mt-3 mb-1"},ce=s("hr",{class:"mb-3"},null,-1),de=m({__name:"InterestsCard",props:{data:{type:Object,required:!0}},setup(n){const l=d=>{const t=b[d%b.length];return{backgroundColor:t.background,color:t.text}};return(d,t)=>(e(),a("div",le,[re,s("div",ie,[ce,(e(!0),a(u,null,h(n.data,(c,_)=>(e(),a("div",{style:x(l(_)),class:"text-[0.6rem] inline-flex items-center font-bold leading-sm uppercase px-2 py-1 mr-2 mb-2 rounded-full"},o(c.name),5))),256))])]))}}),ue={class:"card"},he=p('<div class="language-header mb-1"><span class="text-base pl-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 inline"><path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"></path></svg><span class="ml-1">Language</span></span></div>',1),me={class:"language-main-info ml-3 mt-3 mb-1"},ge=s("hr",{class:"mb-3"},null,-1),pe=m({__name:"LanguagesCard",props:{data:{type:Object,required:!0}},setup(n){const l=d=>{const t=y[d%y.length];return{backgroundColor:t.background,color:t.text}};return(d,t)=>(e(),a("div",ue,[he,s("div",me,[ge,(e(!0),a(u,null,h(n.data,(c,_)=>(e(),a("div",{style:x(l(_)),class:"text-[0.6rem] inline-flex items-center font-bold leading-sm uppercase px-2 py-1 mr-2 mb-2 rounded-full"},o(c.language),5))),256))])]))}}),ve={class:"card"},_e=p('<div class="skills-header mb-1"><span class="text-base pl-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"></path></svg><span class="ml-1">Skills</span></span></div>',1),fe={class:"language-main-info ml-3 mt-3 mb-1"},ye=s("hr",{class:"mb-3"},null,-1),be=s("br",null,null,-1),ke={class:"text-[0.6rem] inline-flex items-center font-bold leading-sm uppercase px-2 py-1 mr-2 mb-2 bg-gray-200 text-gray-700 rounded-full"},xe=m({__name:"SkillsCard",props:{data:{type:Object,required:!0}},setup(n){return(l,d)=>(e(),a("div",ve,[_e,s("div",fe,[ye,(e(!0),a(u,null,h(n.data,t=>(e(),a("div",null,[f(o(t.name)+" ",1),be,t.keywords?(e(!0),a(u,{key:0},h(t.keywords,c=>(e(),a("div",ke,o(c),1))),256)):r("",!0)]))),256))])]))}}),we={class:"card"},$e=p('<div class="work-header mb-1"><span class="text-base pl-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3 inline"><path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd"></path></svg><span class="ml-1">Experience</span></span></div>',1),Ce={class:"work-main-info ml-3 mt-3"},De=s("hr",{class:"mb-2"},null,-1),Me={key:0},Se={class:"font-bold"},Ae={key:1,class:"text-xs text-zinc-500"},Ze={key:2,class:"text-xs mt-2"},Ve={key:3,class:"text-xs my-2 ml-4"},Be={class:"list-disc"},Te=m({__name:"WorkCard",props:{data:{type:Object,required:!0}},setup(n){return(l,d)=>(e(),a("div",we,[$e,s("div",Ce,[(e(!0),a(u,null,h(n.data,t=>(e(),a("div",null,[De,t.position?(e(),a("div",Me,[s("span",Se,o(t.position),1),s("span",null,o(t.name?`, ${t.name}`:""),1)])):r("",!0),t.startDate||t.endDate?(e(),a("div",Ae,[s("span",null,o(i(v)(t.startDate))+" - "+o(i(v)(t.endDate)),1)])):r("",!0),t.summary?(e(),a("div",Ze,[s("span",null,o(t.summary),1)])):r("",!0),t.highlights&&t.highlights.length>0?(e(),a("div",Ve,[s("ul",Be,[(e(!0),a(u,null,h(t.highlights,c=>(e(),a("li",null,o(c),1))),256))])])):r("",!0)]))),256))])]))}}),je="https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",Le={name:"Loh Han Yong",label:"Full Stack Developer",image:"",email:"dannylohhy1998@hotmail.com",phone:"(011) 2109-2185",summary:"Developer that keen on embracing new technologies and methodologies with particular interest in expanding skills in areas such as DevOps practices, Web3 Auth & blockchain, self-trained AI models, and integrating them into web application.",location:{city:"Kepong",countryCode:"MY"},profiles:[]},Ee=[{name:"Percetakan Tenaga Sdn Bhd",location:"Kepong",position:"IT Assistant Executive",startDate:"2018-05-01",endDate:"2019-05-01",highlights:["Develop HRM modules for ERP system","Create winforms for to collect production data"]},{name:"Ean Label Sdn Bhd",location:"Kepong",position:"Junior Web Developer",startDate:"2023-02-01",endDate:"2023-08-01",highlights:["Use Laravel & Vue 2","Develop CRM for customer as one stop labeling service","Develop in-house ERP modules such as IMS and CRM"]},{name:"Percetakan Tenaga Sdn Bhd",location:"Kepong",position:"IT Executive",startDate:"2023-08-01",highlights:["Revamp ERP using Vite + Vue 3 with Typescript and ASP.NET Core","Develop production dashboard using open source charting library like ECharts and Chart.js","Artwork Management System with NAS as storage","Build in-house api for e-Invoice"]}],Pe=[],He=[{institution:"SEGi University & College, KL",area:"Computer Studies",studyType:"Diploma",startDate:"2016",endDate:"2018",score:"3.76",courses:["Object-Oriented Programming","Data Structure Algorithem"]},{institution:" Tunku Abdul Rahman University College, KL",area:"Information Technology (Honours) in Software Systems Development",studyType:"Bachelor Degree",startDate:"2019",endDate:"2022",score:"3.58",courses:["CCNA 1 - 4","Web Development","Internet of Things","Mobile Apps Development"]}],ze=[],Ne=[],Ie=[{name:"Programming",keywords:["Javascript","Vue","PHP","Laravel","C#",".NET"]},{name:"Database",keywords:["MSSQL","MySQL","Firebase"]},{name:"Tools",keywords:["VScode","Visual Studio","Postman","Insomnia"]},{name:"CMS",keywords:["Wordpress"]}],Oe=[{language:"English"},{language:"Chinese"},{language:"Bahasa Malaysia"}],Re=[{name:"Technology"},{name:"Gaming"}],qe=[],Ke=[],Ue={canonical:"https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json",version:"v1.0.0",lastModified:"2017-12-24T15:53:00"},We={$schema:je,basics:Le,work:Ee,volunteer:Pe,education:He,awards:ze,publications:Ne,skills:Ie,languages:Oe,interests:Re,references:qe,projects:Ke,meta:Ue},Fe={class:"gap-2 sm:grid lg:grid-cols-3 text-[0.8rem]"},Ge={class:"space-y-5"},Je={class:"mt-4 space-y-5 sm:mt-0 lg:col-span-2 lg:overflow-y-auto lg:h-screen"},Ye=m({__name:"MainView",setup(n){const l=We;return(d,t)=>(e(),a("div",Fe,[s("div",Ge,[$(F,{data:i(l).basics},null,8,["data"])]),s("div",Je,[i(l).work&&i(l).work.length>0?(e(),g(Te,{key:0,data:i(l).work},null,8,["data"])):r("",!0),i(l).education&&i(l).education.length>0?(e(),g(oe,{key:1,data:i(l).education},null,8,["data"])):r("",!0),i(l).skills&&i(l).skills.length>0?(e(),g(xe,{key:2,data:i(l).skills},null,8,["data"])):r("",!0),i(l).languages&&i(l).languages.length>0?(e(),g(pe,{key:3,data:i(l).languages},null,8,["data"])):r("",!0),i(l).interests&&i(l).interests.length>0?(e(),g(de,{key:4,data:i(l).interests},null,8,["data"])):r("",!0)])]))}});export{Ye as default};
