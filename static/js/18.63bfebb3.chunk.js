(this["webpackJsonptnp-nsut"]=this["webpackJsonptnp-nsut"]||[]).push([[18],{412:function(e,a,t){"use strict";t.r(a);var r=t(27),n=t.n(r),s=t(51),c=t(21),l=t(40),u=t(106),o=t(61),m=t(103),i=t(0),p=t.n(i),d=t(6),g=t(52),b=t(112);a.default=function(){var e=Object(d.h)(),a=Object(i.useState)(""),t=Object(c.a)(a,2),r=t[0],h=t[1],v=Object(i.useState)(""),w=Object(c.a)(v,2),E=w[0],f=w[1],j=Object(i.useState)({status:!1,message:""}),x=Object(c.a)(j,2),y=x[0],O=x[1],k=Object(d.g)(),C=function(){var a=Object(s.a)(n.a.mark((function a(t){var s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,g.a.post("/auth/reset-password",{code:e.search.split("=")[1],password:r,passwordConfirmation:E});case 4:k.push("/login"),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(1),s={status:!0,message:a.t0.response.data.message[0].messages[0].message},O(s);case 11:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e){return a.apply(this,arguments)}}();return p.a.createElement("div",{style:{background:"#262b40"}},p.a.createElement("div",{className:"d-flex justify-content-center px-2 align-items-center",style:{height:"100vh",width:"100vw",backgroundSize:"cover"}},p.a.createElement("div",{style:{width:"400px",maxWidth:"100%",color:"orange"}},p.a.createElement("h2",{style:{color:"darkorange"}},"Reset Password"),p.a.createElement(l.a,{onSubmit:C,className:"mt-3"},p.a.createElement(u.a,null,p.a.createElement(o.a,{xs:12},p.a.createElement(l.a.Group,null,p.a.createElement(l.a.Label,null,"New Password"),p.a.createElement(l.a.Control,{type:"password",required:!0,value:r,onChange:function(e){return h(e.target.value)}})))),p.a.createElement(u.a,{className:"mt-3"},p.a.createElement(o.a,{xs:12},p.a.createElement(l.a.Group,null,p.a.createElement(l.a.Label,null,"Confirm New Password"),p.a.createElement(l.a.Control,{type:"password",required:!0,value:E,onChange:function(e){return f(e.target.value)}})))),p.a.createElement(u.a,{className:"mt-5"},p.a.createElement(o.a,{xs:12},p.a.createElement(m.a,{style:{width:"100%",background:"linear-gradient(to right, #fb7b4a, #ee3344)"},type:"submit"},"Reset Password")))))),y.status&&p.a.createElement(b.a,{variant:"danger",message:y.message}))}}}]);
//# sourceMappingURL=18.63bfebb3.chunk.js.map