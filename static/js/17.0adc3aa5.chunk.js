(this["webpackJsonptnp-nsut"]=this["webpackJsonptnp-nsut"]||[]).push([[17],{306:function(e,a,t){"use strict";t.r(a);var s=t(42),r=t(99),n=t(56),l=t(98),c=t(0),o=t.n(c),m=t(8),u=t(43),i=t(141);a.default=()=>{const e=Object(m.h)(),[a,t]=Object(c.useState)(""),[d,p]=Object(c.useState)(""),[g,h]=Object(c.useState)({status:!1,message:""}),E=Object(m.g)();return o.a.createElement("div",{style:{background:"#262b40"}},o.a.createElement("div",{className:"d-flex justify-content-center px-2 align-items-center",style:{height:"100vh",width:"100vw",backgroundSize:"cover"}},o.a.createElement("div",{style:{width:"400px",maxWidth:"100%",color:"orange"}},o.a.createElement("h2",{style:{color:"darkorange"}},"Reset Password"),o.a.createElement(s.a,{onSubmit:async t=>{t.preventDefault();try{await u.a.post("/auth/reset-password",{code:e.search.split("=")[1],password:a,passwordConfirmation:d}),E.push("/login")}catch(g){const a={status:!0,message:g.response.data.message[0].messages[0].message};h(a)}},className:"mt-3"},o.a.createElement(r.a,null,o.a.createElement(n.a,{xs:12},o.a.createElement(s.a.Group,null,o.a.createElement(s.a.Label,null,"New Password"),o.a.createElement(s.a.Control,{type:"password",required:!0,value:a,onChange:e=>t(e.target.value)})))),o.a.createElement(r.a,{className:"mt-3"},o.a.createElement(n.a,{xs:12},o.a.createElement(s.a.Group,null,o.a.createElement(s.a.Label,null,"Confirm New Password"),o.a.createElement(s.a.Control,{type:"password",required:!0,value:d,onChange:e=>p(e.target.value)})))),o.a.createElement(r.a,{className:"mt-5"},o.a.createElement(n.a,{xs:12},o.a.createElement(l.a,{style:{width:"100%",background:"linear-gradient(to right, #fb7b4a, #ee3344)"},type:"submit"},"Reset Password")))))),g.status&&o.a.createElement(i.a,{variant:"danger",message:g.message}))}}}]);
//# sourceMappingURL=17.0adc3aa5.chunk.js.map