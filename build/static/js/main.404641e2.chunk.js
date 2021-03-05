(this["webpackJsonpresume-app"]=this["webpackJsonpresume-app"]||[]).push([[0],{124:function(e,t,n){e.exports={section:"Section_section__2rmXH",sectionTitle:"Section_sectionTitle__2_5V7"}},132:function(e,t,n){e.exports={doc:"Doc_doc__1wU2V"}},135:function(e){e.exports=JSON.parse('{"templateName":"LatestTemplate","documentType":"Resume","dataGroups":[{"groupId":"WORK_EXP","dataFields":[{"field":"company","description":"Company"},{"field":"location","description":"Location"},{"field":"role","description":"Role"},{"field":"dateRange","description":"From - To"},{"field":"contributions","description":"Acheivements","type":"MULTILINE","multiple":true}]},{"groupId":"SKILL_SET","dataFields":[{"field":"category","description":"Category"},{"field":"skills","description":"Skills","type":"SKILLS","multiple":true}]},{"groupId":"SKILLS","dataFields":[{"field":"label","description":"Label"},{"field":"rating","description":"Rating","type":"SELECT","data":{"options":[{"name":"Proficient","value":2},{"name":"Familiar","value":1}]}}]},{"groupId":"EDUCATION","dataFields":[{"field":"degree","description":"Degree"},{"field":"school","description":"School / College / University"},{"field":"dateRange","description":"From - To"},{"field":"details","description":"Details","type":"MULTILINE"}]},{"groupId":"LABEL_VAL_PAIR","dataFields":[{"field":"label","description":"Label"},{"field":"value","description":"Details"}]}],"dataFields":[{"field":"docTitle","description":"Document Title"},{"field":"name","description":"Name"},{"field":"currentLocation","description":"Current Location"},{"field":"contactNumber","description":"Contact Number"},{"field":"email","description":"Email"},{"field":"skype","description":"Skype"},{"field":"github","description":"Github URL"},{"field":"linkedin","description":"Linkedin URL"},{"field":"summary","description":"Summary","type":"MULTILINE"},{"field":"skillSet","description":"Skill Sets","multiple":true,"type":"SKILL_SET"},{"field":"experience","description":"Work Experience","multiple":true,"type":"WORK_EXP"},{"field":"education","description":"Education","multiple":true,"type":"EDUCATION"},{"field":"personalDetails","description":"Personal Details","multiple":true,"type":"LABEL_VAL_PAIR"}]}')},136:function(e){e.exports=JSON.parse('{"docTitle":"Suhaib Khan Resume","name":"Suhaib Khan","currentLocation":"Dubai, UAE","contactNumber":"+971-565436746","email":"suhaibklm@gmail.com","skype":"suhaib.khan.s","github":"github.com/suhaibkhan","linkedin":"in.linkedin.com/in/suhaibkhans","summary":"8+ years of experience in design and development of enterprise-level application in Java, Spring and related technologies. Proficient inclient-side technologies like ReactJS, JavaScript / TypeScript. Posses a sound understanding of system design and architecture concepts with experience in microservices architecture and DevOps practises. Experienced in Agile methodologies like SCRUM.","skillSet":[{"category":"Languages & Technologies","skills":[{"label":"Java","rating":2},{"label":"Spring","rating":2},{"label":"Spring Boot","rating":2},{"label":"MySQL","rating":2},{"label":"Cassandra","rating":2},{"label":"Apache Kafka","rating":2},{"label":"JUnit / Mockito","rating":2},{"label":"ReactJS","rating":2},{"label":"Redux","rating":2},{"label":"JavaScript","rating":2},{"label":"TypeScript","rating":2},{"label":"CSS","rating":2},{"label":"HTML5","rating":2},{"label":"Jest","rating":2},{"label":"Scala","rating":1},{"label":"Apache Spark","rating":1},{"label":"Quartz","rating":1},{"label":"NodeJS","rating":1},{"label":"React Native","rating":1},{"label":"Angular","rating":1},{"label":"D3.js","rating":1},{"label":"jQuery","rating":1}]},{"category":"Tools & Platform","skills":[{"label":"AWS","rating":2},{"label":"Gradle","rating":2},{"label":"Maven","rating":2},{"label":"Webpack","rating":2},{"label":"Jenkins","rating":2},{"label":"Docker","rating":2},{"label":"IntelliJ","rating":2},{"label":"Eclipse","rating":2},{"label":"VSCode","rating":2},{"label":"Git","rating":2}]}],"education":[{"degree":"B.Tech in Computer Science and Engineering","school":"Kerala University","dateRange":"2008 - 2012","details":"CGPA: 7.33/10"},{"degree":"Higher Secondary Education/ 12th Grade","school":"G.H.S.S, Paravur","dateRange":"2005 - 2017","details":"Aggregate: 76%"}],"experience":[{"company":"Emirates Airlines","location":"Dubai, UAE","role":"Senior Software Engineer","dateRange":"Apr 2018 - Present","contributions":["Designed and implemented micro-frontend(UI as service) framework using ReactJS. The purpose of the framework was to facilitate implementation of reusable UI components which can be lazy loaded into other single page applications in a platform agnostic way. This approach helped in reducing the development cost by 40%.","Implemented CI/CD pipeline in Jenkins for newly added microservices in the application.","Designed and developed multiple API across different microservices using Spring Boot.","Improved unit test coverage of existing codebase upto 65%. Made use of Junit, Mockito, Jest libraries.","Provided mentorship to junior developers and interns, conducted cross-skilling workshops."]},{"company":"Baker Hughes (GE)","location":"Cochin, India","role":"Senior Software Engineer","dateRange":"May 2015 - Mar 2018","contributions":["Participated in architecture level redesign of existing monolithic application platform into microservices using Spring Boot and Spring Cloud. Developed POC for demonstrating microservices architecture patterns.","Developed the base framework for real-time alarming system using Apache Kafka. The new framework helped in improving the throughput and performance of the system by providing a pub-sub model for multiple consumers.","Designed algorithms for aggregating temperature data from fiber optic sensors and implemented these on real-time data pipelines using Apache Spark, Kafka and Cassandra.","Provided mentorship to junior developers."]},{"role":"Senior Software Engineer","dateRange":"Dec 2012 - Apr 2015","contributions":["Developed Report Scheduler system, which generates and sends dynamic data reports via email based on given XML based configuration in a time-zone specific manner. Quartz library was used for scheduling report generation jobs.","Developed data visualisation components in HTML5 and JavaScript using D3.js for data analysis dashboards."]}],"personalDetails":[{"label":"DOB","value":"20/07/1990"},{"label":"Gender","value":"Male"},{"label":"Nationality","value":"India"},{"label":"Languages","value":"English, Malayalam"}]}')},137:function(e,t,n){e.exports={container:"ResumeEditor_container__2vIzm",skillContainer:"ResumeEditor_skillContainer__1VEai"}},171:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),l=n(51),c=n.n(l),r=n(48),o=n(173),s=n(58),d=n.n(s),u=n(132),p=n.n(u),b=n(2);var j=function(e){var t=e.children,n=e.scale,i={};return i.zoom="".concat(n),Object(b.jsx)("div",{className:p.a.doc,children:Object(b.jsx)("div",{style:i,children:t})})},h=n(123),m=n(80),f=n(46),v=n(142),x=/msie\s|trident\/|edge\//i.test(window.navigator.userAgent),g=function(e,t,n){var i=t.match(/^(.*)\[(\d+)\]$/);if(i){var a=i[1],l=+i[2],c=Object(v.a)(e[a]);return l>=0&&l<c.length?c[l]=n:l===c.length&&c.push(n),Object(f.a)(Object(f.a)({},e),{},Object(m.a)({},a,c))}return Object(f.a)(Object(f.a)({},e),{},Object(m.a)({},t,n))},O=function(e,t){if(!e)return e;var n=t.match(/^(.*)\[(\d+)\]$/);if(n){var i=n[1],a=+n[2],l=e[i];return l&&Array.isArray(l)&&l[a]}return e[t]},S=function e(t,n,i){if(!n)return t;var a=n.split(".");if(1===a.length)return g(t,a[0],i);var l=Object(h.a)(a),c=l[0],r=l.slice(1),o=e(O(t,c),r.join("."),i);return g(t,c,o)},_=function e(t,n){if(!n)return null;var i=n.split(".");if(1===i.length)return O(t,i[0]);var a=Object(h.a)(i),l=a[0],c=a.slice(1);return e(O(t,l),c.join("."))},y={INPUT:"INPUT",SELECT:"SELECT",MULTILINE:"MULTILINE"},L=function(e,t,n){var i,a=n||{},l={};return null===e||void 0===e||null===(i=e.dataFields)||void 0===i||i.forEach((function(e){l[e.field]=T(e,t,a[e.field])})),l},T=function(e,t,n){var i=e.type,a=void 0===i?y.INPUT:i,l=e.multiple,c=n;if(!l&&Array.isArray(n)?(console.error("Invalid array data for non multiple field ".concat(e.field)),c=null):l&&!Array.isArray(n)&&(console.error("Invalid data for multi-value field ".concat(e.field)),c=null),l&&c&&0===c.length&&(c=null),!function(e){return Object.values(y).indexOf(e)<0}(a))return c||(l?[""]:"");var r=t[a];return r?l?c?c.map((function(e){return L(r,t,e)})):[L(r,t,null)]:L(r,t,c):(console.error("Group with type ".concat(a," not found")),l?[{}]:{})},k=n(25),C=n.n(k),I=n(56),N=n(134),D=n(86),E=n(85),A=n.n(E),P=n(133);var R=function(e){var t=e.icon,n=e.children,i=e.textStyle,a=void 0===i?"":i,l=e.iconStyle,c=void 0===l?"":l,r=e.isLink,o=void 0!==r&&r;return n?Object(b.jsxs)("div",{className:A.a.iconLabelBlock,children:[Object(b.jsx)(P.a,{icon:t,className:"".concat(A.a.iconLabelIcon," ").concat(c)}),o?Object(b.jsx)("a",{href:"https://".concat(n.replace(/(http|https):\/\//g,"")),className:"".concat(A.a.iconLabelTxt," ").concat(a),target:"blank",children:n}):Object(b.jsx)("span",{className:"".concat(A.a.iconLabelTxt," ").concat(a),children:n})]}):null},w=n(33),F=n.n(w);var U=function(e){var t=e.title,n=e.children,i=e.subtitle,a=e.date,l=e.location;return Object(b.jsxs)("div",{className:F.a.subSection,children:[(t||l)&&Object(b.jsxs)("div",{className:F.a.subSectionHead,children:[t&&Object(b.jsx)("div",{className:F.a.subSecTitleText,children:t}),l&&Object(b.jsx)(R,{icon:"map-marker-alt",textStyle:F.a.subSecLocText,iconStyle:F.a.subSecIcon,children:l})]}),(i||a)&&Object(b.jsxs)("div",{className:F.a.subSectionHead,children:[i&&Object(b.jsx)("div",{className:F.a.subSecSubTitleText,children:i}),a&&Object(b.jsx)(R,{icon:"calendar-alt",textStyle:F.a.subSecDateText,iconStyle:F.a.subSecIcon,children:a})]}),Object(b.jsx)("div",{children:n})]})},J=n(124),M=n.n(J);var B=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("div",{className:M.a.section,children:[Object(b.jsx)("div",{className:M.a.sectionTitle,children:t}),Object(b.jsx)("div",{children:n})]})};I.b.add(N.a,D.b,D.c,D.d,D.a);var G=function(e){for(var t=e.length,n=Math.ceil(t/2),i=[],a=0;a<n;a++){var l=[null,null];l[0]=e[a],a+n<t&&(l[1]=e[a+n]),i.push(l)}return i},H=function(e){var t=function(e){return e.reduce((function(e,t){return e[t.rating&&t.rating>1?"proficient":"familiar"].push(t),e}),{proficient:[],familiar:[]})}(e),n=t.proficient.length,i=t.familiar.length,a=n>0&&i>0,l=G(t.proficient),c=G(t.familiar);return Object(b.jsx)("table",{className:C.a.skillTable,cellSpacing:0,cellPadding:0,children:Object(b.jsxs)("tbody",{children:[Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:2,className:C.a.grpHeader,children:a?"Proficient":""})}),l.length>0&&l.map((function(e,t){var n,i;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:null===(n=e[0])||void 0===n?void 0:n.label}),Object(b.jsx)("td",{children:null===(i=e[1])||void 0===i?void 0:i.label})]},t)})),a&&Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:2,className:C.a.grpHeader,children:"Familiar"})}),c.length>0&&c.map((function(e,t){var n,i;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:null===(n=e[0])||void 0===n?void 0:n.label}),Object(b.jsx)("td",{children:null===(i=e[1])||void 0===i?void 0:i.label})]},t)}))]})})};var K=function(e){var t,n,a,l,c=e.data;return Object(i.useEffect)((function(){document.title=c.docTitle}),[c.docTitle]),Object(b.jsxs)("div",{className:C.a.container,children:[Object(b.jsxs)("div",{className:C.a.header,children:[Object(b.jsx)("div",{className:C.a.topHeading,children:c.name}),Object(b.jsxs)("div",{className:C.a.topInfo,children:[Object(b.jsx)(R,{icon:"map-marker-alt",children:c.currentLocation}),Object(b.jsx)(R,{icon:"mobile-alt",children:c.contactNumber}),Object(b.jsx)(R,{icon:"envelope",children:c.email}),Object(b.jsx)(R,{icon:["fab","skype"],children:c.skype}),Object(b.jsx)(R,{icon:["fab","github"],isLink:!0,children:c.github}),Object(b.jsx)(R,{icon:["fab","linkedin"],isLink:!0,children:c.linkedin})]})]}),Object(b.jsxs)("div",{className:C.a.lefCol,children:[Object(b.jsx)(B,{title:"Summary",children:c.summary}),Object(b.jsx)(B,{title:"Experience",children:null===(t=c.experience)||void 0===t?void 0:t.map((function(e,t){var n;return Object(b.jsx)(U,{title:e.company,subtitle:e.role,location:e.location,date:e.dateRange,children:Object(b.jsx)("ul",{className:C.a.sectionList,children:null===(n=e.contributions)||void 0===n?void 0:n.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))})},t)}))})]}),Object(b.jsxs)("div",{className:C.a.rightCol,children:[Object(b.jsx)(B,{title:"Skills",children:null===(n=c.skillSet)||void 0===n?void 0:n.map((function(e,t){return Object(b.jsx)(U,{title:e.category,children:H(e.skills)},t)}))}),Object(b.jsx)(B,{title:"Education",children:null===(a=c.education)||void 0===a?void 0:a.map((function(e,t){return Object(b.jsx)(U,{title:e.degree,subtitle:e.school,date:e.dateRange,children:Object(b.jsx)("div",{children:e.details})},t)}))}),Object(b.jsx)(B,{title:"Personal Details",children:null===(l=c.personalDetails)||void 0===l?void 0:l.map((function(e,t){var n=e.label,i=e.value;return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:C.a.detailsLabel,children:"".concat(n,":")}),Object(b.jsx)("span",{children:i})]},t)}))})]})]})},z=n(135),V=K,W=n(136),X=n(189),Q=n(190),Z=n(191),$=n(186),q=n(188),Y=n(187),ee=n(137),te=n.n(ee),ne=[[{path:"docTitle",label:"Document Title"},{path:"name",label:"Name"},{path:"currentLocation",label:"Current Location"}],[{path:"contactNumber",label:"Contact Number"},{path:"email",label:"Email"},{path:"skype",label:"Skype"}],[{path:"github",label:"Github URL"},{path:"linkedin",label:"Linkedin URL"}]],ie=[[{path:"summary",label:"Summary",type:"multiline",viewOptions:{rows:"8"}}]],ae=[[{path:"category",label:"Category"}]],le=[{path:"label",label:"Name",viewOptions:{fluid:!1,inline:!1}},{path:"rating",label:"Rating",type:"select",viewOptions:{fluid:!1,inline:!1,options:[{value:5,text:"5"},{value:4,text:"4"},{value:3,text:"3"},{value:2,text:"2"},{value:1,text:"1"}]}}],ce=[[{path:"company",label:"Company"},{path:"location",label:"Location"}],[{path:"role",label:"Role"},{path:"dateRange",label:"From - To"}]],re=[{path:"contributions",label:"Acheivements",type:"multiline"}],oe=[[{path:"degree",label:"Degree"},{path:"school",label:"School / College / University"},{path:"dateRange",label:"From - To"}],[{path:"details",label:"Details",type:"multiline"}]],se=[[{path:"label",label:"Label"},{path:"value",label:"Details"}]],de=[{menuItem:"Summary",render:function(){return Object(b.jsx)(X.a.Pane,{children:Object(b.jsx)(Q.a,{children:Object(b.jsx)(fe,{formDef:ie})})})}},{menuItem:"Skills",render:function(){return Object(b.jsx)(ue,{})}},{menuItem:"Experience",render:function(){return Object(b.jsx)(pe,{})}},{menuItem:"Education",render:function(){return Object(b.jsx)(be,{})}},{menuItem:"Personal Details",render:function(){return Object(b.jsx)(je,{})}}];function ue(){var e,t=Object(i.useContext)(he).data,n=Object(i.useState)(0),a=Object(r.a)(n,2),l=a[0],c=a[1],o=function(e,t){var n=t.index;c((function(e){return e!==n?n:-1}))};return Object(b.jsx)(X.a.Pane,{children:Object(b.jsx)(Q.a,{children:Object(b.jsx)(Z.a,{fluid:!0,styled:!0,children:null===t||void 0===t||null===(e=t.skillSet)||void 0===e?void 0:e.map((function(e,t){var n;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Z.a.Title,{index:t,active:t===l,onClick:o,children:"Skills Category ".concat(t+1)}),Object(b.jsxs)(Z.a.Content,{active:t===l,children:[Object(b.jsx)(fe,{formDef:ae,pathPrefix:"skillSet[".concat(t,"]")},"skillSet[".concat(t,"]")),Object(b.jsx)("div",{className:te.a.skillContainer,children:null===e||void 0===e||null===(n=e.skills)||void 0===n?void 0:n.map((function(e,n){return Object(b.jsx)(Q.a.Group,{children:Object(b.jsx)(fe,{formDef:le,pathPrefix:"skillSet[".concat(t,"].skills[").concat(n,"]")})},"skillSet[".concat(t,"].skills[").concat(n,"]"))}))})]})]})}))})})})}function pe(){var e,t=Object(i.useContext)(he).data,n=Object(i.useState)(0),a=Object(r.a)(n,2),l=a[0],c=a[1],o=function(e,t){var n=t.index;c((function(e){return e!==n?n:-1}))};return Object(b.jsx)(X.a.Pane,{children:Object(b.jsx)(Q.a,{children:Object(b.jsx)(Z.a,{fluid:!0,styled:!0,children:null===t||void 0===t||null===(e=t.experience)||void 0===e?void 0:e.map((function(e,t){var n;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Z.a.Title,{index:t,active:t===l,onClick:o,children:"Experience ".concat(t+1)}),Object(b.jsxs)(Z.a.Content,{active:t===l,children:[Object(b.jsx)(fe,{formDef:ce,pathPrefix:"experience[".concat(t,"]")},"experience[".concat(t,"]")),null===e||void 0===e||null===(n=e.contributions)||void 0===n?void 0:n.map((function(e,n){return Object(b.jsx)(fe,{formDef:re,pathPrefix:"experience[".concat(t,"]"),pathIndex:n},"experience[".concat(t,"].contributions[").concat(n,"]"))}))]})]})}))})})})}function be(){var e,t=Object(i.useContext)(he).data,n=Object(i.useState)(0),a=Object(r.a)(n,2),l=a[0],c=a[1],o=function(e,t){var n=t.index;c((function(e){return e!==n?n:-1}))};return Object(b.jsx)(X.a.Pane,{children:Object(b.jsx)(Q.a,{children:Object(b.jsx)(Z.a,{fluid:!0,styled:!0,children:null===t||void 0===t||null===(e=t.education)||void 0===e?void 0:e.map((function(e,t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Z.a.Title,{index:t,active:t===l,onClick:o,children:"Education ".concat(t+1)}),Object(b.jsx)(Z.a.Content,{active:t===l,children:Object(b.jsx)(fe,{formDef:oe,pathPrefix:"education[".concat(t,"]")},"education[".concat(t,"]"))})]})}))})})})}function je(){var e,t=Object(i.useContext)(he).data;return Object(b.jsx)(X.a.Pane,{children:Object(b.jsx)(Q.a,{children:null===t||void 0===t||null===(e=t.personalDetails)||void 0===e?void 0:e.map((function(e,t){return Object(b.jsx)(fe,{formDef:se,pathPrefix:"personalDetails[".concat(t,"]")},"personalDetails[".concat(t,"]"))}))})})}var he=a.a.createContext({onDataChange:function(e){}}),me={input:$.a,multiline:q.a,select:Y.a},fe=function(e){var t=e.formDef,n=e.pathPrefix,a=void 0===n?"":n,l=e.pathIndex,c=Object(i.useContext)(he),r=c.data,o=c.onDataChange,s=function(e){return function(t,n){var i=n.value;o(S(r,e,i))}},d=function(e){var t=a?"".concat(a,".").concat(e):e;return"undefined"!==typeof l&&(t+="[".concat(l,"]")),t};return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(b.Fragment,{children:Array.isArray(e)?Object(b.jsx)(Q.a.Group,{widths:"equal",children:e.map((function(e){var t=e.label,n=e.path,i=e.type,a=e.viewOptions;return Object(b.jsx)(Q.a.Field,Object(f.a)({fluid:!0,control:me[i||"input"],label:t,placeholder:t,onChange:s(d(n)),value:_(r,d(n))},a),d(n))}))}):Object(b.jsx)(Q.a.Field,Object(f.a)({fluid:!0,control:me[e.type||"input"],label:e.label,placeholder:e.label,onChange:s(d(e.path)),value:_(r,d(e.path))},e.viewOptions),d(e.path))})}))})};var ve=function(e){var t=e.data,n=e.onDataChange;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Resume Editor"}),Object(b.jsxs)(he.Provider,{value:{data:t,onDataChange:n},children:[Object(b.jsx)(Q.a,{children:Object(b.jsx)(fe,{formDef:ne})}),Object(b.jsx)(X.a,{menu:{color:"blue",inverted:!0,attached:!0,tabular:!0},panes:de})]})]})};var xe=function(){var e,t=Object(i.useMemo)((function(){return function(e){var t;return null===e||void 0===e||null===(t=e.dataGroups)||void 0===t?void 0:t.reduce((function(e,t){return e[t.groupId]=t,e}),{})}(z)}),[]),n=Object(i.useState)(function(e,t,n){var i;if(!t||!n)return e;var a={};return null===t||void 0===t||null===(i=t.dataFields)||void 0===i||i.forEach((function(t){a[t.field]=T(t,n,e[t.field])})),a}(W,z,t)),a=Object(r.a)(n,2),l=a[0],c=a[1],s=Object(i.useState)(1),u=Object(r.a)(s,2),p=u[0],h=u[1],m=Object(i.useState)(!1),f=Object(r.a)(m,2),v=f[0],g=f[1],O=function(e){return function(){h(p+(e?.1:-.1))}};return Object(b.jsxs)("div",{className:d.a.app,children:[Object(b.jsxs)("div",{className:"".concat(d.a.toolbar," hideInPrint"),children:[Object(b.jsx)(o.a,{primary:!0,icon:"expand",onClick:function(){h(1)}}),Object(b.jsx)(o.a,{primary:!0,icon:"zoom-in",onClick:O(!0)}),Object(b.jsx)(o.a,{primary:!0,icon:"zoom-out",onClick:O(!1)}),Object(b.jsx)(o.a,{primary:!0,toggle:!0,icon:"edit",active:v,onClick:(e=!v,function(){g(e)})}),Object(b.jsx)(o.a,{primary:!0,icon:"print",onClick:function(){if(x)try{window.document.execCommand("print",!1)}catch(e){window.print()}else window.print()}})]}),Object(b.jsxs)("div",{className:"".concat(d.a.panels," ").concat(v?"":d.a.hideEdit),children:[Object(b.jsx)("div",{className:d.a.editContainer,children:Object(b.jsx)(ve,{data:l,onDataChange:function(e){c(e)}})}),Object(b.jsx)("div",{className:d.a.docContainer,children:Object(b.jsx)(j,{scale:p,children:Object(b.jsx)(V,{data:l})})})]})]})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,192)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),l(e),c(e)}))};n(170),n(171);c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(xe,{})}),document.getElementById("root")),ge()},25:function(e,t,n){e.exports={container:"LatestTemplate_container__3fNn2",fontThin:"LatestTemplate_fontThin__3BNR7",fontLight:"LatestTemplate_fontLight__VZKBu",fontBold:"LatestTemplate_fontBold__18x2G",header:"LatestTemplate_header__293nT",topHeading:"LatestTemplate_topHeading__ga712",topInfo:"LatestTemplate_topInfo__3DPIV",lefCol:"LatestTemplate_lefCol__36YaX",rightCol:"LatestTemplate_rightCol__inndC",sectionList:"LatestTemplate_sectionList__2BZXf",skillTable:"LatestTemplate_skillTable__1EnxW",grpHeader:"LatestTemplate_grpHeader__2EmGU",detailsLabel:"LatestTemplate_detailsLabel__2fVk3"}},33:function(e,t,n){e.exports={subSection:"SubSection_subSection__2OSGx",subSectionHead:"SubSection_subSectionHead__Ae0xt",subSecIcon:"SubSection_subSecIcon__3wEcD",subSecLocText:"SubSection_subSecLocText__hTzKO",subSecDateText:"SubSection_subSecDateText__1zjcK",subSecTitleText:"SubSection_subSecTitleText__2Wd8O",subSecSubTitleText:"SubSection_subSecSubTitleText__r42sh"}},58:function(e,t,n){e.exports={app:"App_app__1kX79",toolbar:"App_toolbar__11cl6",panels:"App_panels__1JbaM",docContainer:"App_docContainer__ghnyp",editContainer:"App_editContainer__LozrB",hideEdit:"App_hideEdit__8ZaTR"}},85:function(e,t,n){e.exports={iconLabelBlock:"IconLabel_iconLabelBlock__1BJ6R",iconLabelIcon:"IconLabel_iconLabelIcon__uIxNV",iconLabelTxt:"IconLabel_iconLabelTxt__1BxdN"}}},[[172,1,2]]]);
//# sourceMappingURL=main.404641e2.chunk.js.map