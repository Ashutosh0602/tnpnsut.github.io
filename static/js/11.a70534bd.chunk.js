(this["webpackJsonptnp-nsut"]=this["webpackJsonptnp-nsut"]||[]).push([[11],{299:function(e,a,t){},314:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(21),s=t(43),r=t(71),d=t.n(r),o=t(252),m=t(257),i=t(42),u=t(103),E=t(99),b=t(56),v=t(98),p=t(309);t(299);var f=function(e){let{item:a}=e;const[t,c]=Object(l.useState)(!1),s=()=>c(!1);return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{className:"bg-light mb-3",style:{cursor:"pointer",overflowX:"hidden"}},n.a.createElement(m.a.Body,null,n.a.createElement(E.a,null,n.a.createElement(b.a,{sm:5},n.a.createElement(m.a.Title,null,"Feedback ID: ",a.id),n.a.createElement(v.a,{className:"mt-3",variant:"success",onClick:()=>c(!0)},"Details")),n.a.createElement(b.a,{sm:7},n.a.createElement("div",{className:"d-flex flex-column align-items-start"},n.a.createElement("div",{className:"d-flex w-100 p-1"},n.a.createElement("div",null,n.a.createElement("p",{style:{margin:"0px",fontWeight:"700"}},"Created on :"," ",new Date(a.createdAt).toString().slice(0,15))),n.a.createElement("div",{className:"tag border rounded px-1 ".concat(a.isResolved?"resolved":"pending")},a.isResolved?"Resolved":"Pending")),n.a.createElement("div",{className:"d-flex w-100 p-1"},n.a.createElement("div",null,n.a.createElement("p",{style:{margin:"0px",fontWeight:"700"}},"Resolved on :"," ",a.isResolved?"".concat(new Date(a.resolved_date).toString().slice(0,15)):"NA"))),n.a.createElement("div",{className:"d-flex w-100 p-1"},n.a.createElement("div",null,n.a.createElement("p",{style:{margin:"0px",fontWeight:"700"}},"Resolved By : ",a.isResolved?a.resolved_by:"NA")))))))),n.a.createElement(p.a,{show:t,onHide:s,size:"lg"},n.a.createElement(p.a.Header,{closeButton:!0},n.a.createElement(p.a.Title,{className:"text-center"},"Feedback Or Query")),n.a.createElement(p.a.Body,null,n.a.createElement(i.a.Group,null,n.a.createElement(i.a.Label,null,"Feedback Or Query :"),n.a.createElement(i.a.Control,{className:"mr-2",name:"feedback_data",value:a.feedback_data,id:"feedback_data",as:"textarea",rows:5,disabled:!0})),n.a.createElement(i.a.Group,null,n.a.createElement(i.a.Label,null,"Reply :"),n.a.createElement(i.a.Control,{className:"mr-2",name:"feedback_data",value:a.isResolved?a.feedback_reply:" ",id:"feedback_data",as:"textarea",rows:5,disabled:!0}))),n.a.createElement(p.a.Footer,null,n.a.createElement(v.a,{variant:"secondary",onClick:s},"Close"))))};a.default=function(){const{state:e}=Object(l.useContext)(c.a),[a,t]=Object(l.useState)([]),[E,b]=Object(l.useState)(!1),[v,p]=Object(l.useState)(!1);return Object(l.useEffect)(()=>{b(!0),v?(async()=>{s.b.get("/feedbacks?_where[0][isResolved]=true&_where[1][student_id]=".concat(e.userDetails.student,"&_sort=createdAt:desc")).then(e=>{t(e.data),b(!1)}).catch(e=>{b(!1),console.log(e,e.response),d.a.error("Something Went Wrong!")})})():(async()=>{s.b.get("/feedbacks?_where[0][student_id]=".concat(e.userDetails.student,"&_sort=createdAt:desc")).then(e=>{t(e.data),b(!1)}).catch(e=>{b(!1),console.log(e,e.response),d.a.error("Something Went Wrong!")})})()},[v]),E?n.a.createElement(u.a,null):n.a.createElement(o.a,{className:"p-4"},n.a.createElement(r.Toaster,null),n.a.createElement(m.a,{className:"p-4"},n.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-3"},n.a.createElement("div",{className:"text-center flex-grow-1"},n.a.createElement("h3",{className:"mb-0"},"My Feedbacks Or Queries")),n.a.createElement("div",null,n.a.createElement(i.a.Check,{type:"switch",id:"custom-switch",label:"Show Resolved",className:"mb-0",checked:v,onChange:()=>p(!v)}))),a.map((e,a)=>n.a.createElement(f,{key:a,item:e}))))}}}]);
//# sourceMappingURL=11.a70534bd.chunk.js.map