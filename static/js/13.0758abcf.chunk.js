(this["webpackJsonptnp-nsut"]=this["webpackJsonptnp-nsut"]||[]).push([[13],{407:function(e,t,a){},421:function(e,t,a){"use strict";a.r(t);var n=a(27),c=a.n(n),r=a(51),l=a(21),s=a(0),o=a.n(s),i=a(18),d=a(52),m=a(94),u=a.n(m),f=a(300),E=a(305),b=a(40),p=a(109),v=a(106),h=a(61),g=a(103),w=a(416);a(407);var k=function(e){var t=e.item,a=Object(s.useState)(!1),n=Object(l.a)(a,2),c=n[0],r=n[1],i=function(){return r(!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{className:"bg-light mb-3",style:{cursor:"pointer",overflowX:"hidden"}},o.a.createElement(E.a.Body,null,o.a.createElement(v.a,null,o.a.createElement(h.a,{sm:5},o.a.createElement(E.a.Title,null,"Feedback ID: ",t.id),o.a.createElement(g.a,{className:"mt-3",variant:"success",onClick:function(){return r(!0)}},"Details")),o.a.createElement(h.a,{sm:7},o.a.createElement("div",{className:"d-flex flex-column align-items-start"},o.a.createElement("div",{className:"d-flex w-100 p-1"},o.a.createElement("div",null,o.a.createElement("p",{style:{margin:"0px",fontWeight:"700"}},"Created on :"," ",new Date(t.createdAt).toString().slice(0,15))),o.a.createElement("div",{className:"tag border rounded px-1 ".concat(t.isResolved?"resolved":"pending")},t.isResolved?"Resolved":"Pending")),o.a.createElement("div",{className:"d-flex w-100 p-1"},o.a.createElement("div",null,o.a.createElement("p",{style:{margin:"0px",fontWeight:"700"}},"Resolved on :"," ",t.isResolved?"".concat(new Date(t.resolved_date).toString().slice(0,15)):"NA"))),o.a.createElement("div",{className:"d-flex w-100 p-1"},o.a.createElement("div",null,o.a.createElement("p",{style:{margin:"0px",fontWeight:"700"}},"Resolved By : ",t.isResolved?t.resolved_by:"NA")))))))),o.a.createElement(w.a,{show:c,onHide:i,size:"lg"},o.a.createElement(w.a.Header,{closeButton:!0},o.a.createElement(w.a.Title,{className:"text-center"},"Feedback Or Query")),o.a.createElement(w.a.Body,null,o.a.createElement(b.a.Group,null,o.a.createElement(b.a.Label,null,"Feedback Or Query :"),o.a.createElement(b.a.Control,{className:"mr-2",name:"feedback_data",value:t.feedback_data,id:"feedback_data",as:"textarea",rows:5,disabled:!0})),o.a.createElement(b.a.Group,null,o.a.createElement(b.a.Label,null,"Reply :"),o.a.createElement(b.a.Control,{className:"mr-2",name:"feedback_data",value:t.isResolved?t.feedback_reply:" ",id:"feedback_data",as:"textarea",rows:5,disabled:!0}))),o.a.createElement(w.a.Footer,null,o.a.createElement(g.a,{variant:"secondary",onClick:i},"Close"))))};t.default=function(){var e=Object(s.useContext)(i.a).state,t=Object(s.useState)([]),a=Object(l.a)(t,2),n=a[0],v=a[1],h=Object(s.useState)(!1),g=Object(l.a)(h,2),w=g[0],y=g[1],x=Object(s.useState)(!1),N=Object(l.a)(x,2),O=N[0],_=N[1],j=function(){var t=Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d.b.get("/feedbacks?_where[0][student_id]=".concat(e.userDetails.student,"&_sort=createdAt:desc")).then((function(e){v(e.data),y(!1)})).catch((function(e){y(!1),console.log(e,e.response),u.a.error("Something Went Wrong!")}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d.b.get("/feedbacks?_where[0][isResolved]=true&_where[1][student_id]=".concat(e.userDetails.student,"&_sort=createdAt:desc")).then((function(e){v(e.data),y(!1)})).catch((function(e){y(!1),console.log(e,e.response),u.a.error("Something Went Wrong!")}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){y(!0),O?R():j()}),[O]),w?o.a.createElement(p.a,null):o.a.createElement(f.a,{className:"p-4"},o.a.createElement(m.Toaster,null),o.a.createElement(E.a,{className:"p-4"},o.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-3"},o.a.createElement("div",{className:"text-center flex-grow-1"},o.a.createElement("h3",{className:"mb-0"},"My Feedbacks Or Queries")),o.a.createElement("div",null,o.a.createElement(b.a.Check,{type:"switch",id:"custom-switch",label:"Show Resolved",className:"mb-0",checked:O,onChange:function(){return _(!O)}}))),n.map((function(e,t){return o.a.createElement(k,{key:t,item:e})}))))}}}]);
//# sourceMappingURL=13.0758abcf.chunk.js.map