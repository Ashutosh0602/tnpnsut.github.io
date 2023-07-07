(this["webpackJsonptnp-nsut"]=this["webpackJsonptnp-nsut"]||[]).push([[15],{303:function(e,a,t){"use strict";var r=t(1),n=t(0),c=t.n(n),l=t(4),o=t.n(l);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))}},304:function(e,a,t){"use strict";var r=t(1),n=t(2),c=t(4),l=t.n(c),o=t(0),m=t.n(o),s=t(5),u=t(29),d=t(303),i=t(108),b=m.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,i=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(s.a)(t,"card-img");return m.a.createElement(d,Object(r.a)({ref:a,className:l()(o?b+"-"+o:b,c)},i))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,p=Object(d.a)("h5"),E=Object(d.a)("h6"),v=Object(u.a)("card-body"),O=Object(u.a)("card-title",{Component:p}),h=Object(u.a)("card-subtitle",{Component:E}),y=Object(u.a)("card-link",{Component:"a"}),j=Object(u.a)("card-text",{Component:"p"}),k=Object(u.a)("card-header"),N=Object(u.a)("card-footer"),g=Object(u.a)("card-img-overlay"),_=m.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,u=e.bg,d=e.text,b=e.border,f=e.body,p=e.children,E=e.as,O=void 0===E?"div":E,h=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(s.a)(t,"card"),j=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return m.a.createElement(i.a.Provider,{value:j},m.a.createElement(O,Object(r.a)({ref:a},h,{className:l()(c,y,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),f?m.a.createElement(v,null,p):p))}));_.displayName="Card",_.defaultProps={body:!1},_.Img=f,_.Title=O,_.Subtitle=h,_.Body=v,_.Link=y,_.Text=j,_.Header=k,_.Footer=N,_.ImgOverlay=g;a.a=_},414:function(e,a,t){"use strict";t.r(a);var r=t(27),n=t.n(r),c=t(51),l=t(70),o=t(53),m=t(21),s=t(0),u=t.n(s),d=t(299),i=t(304),b=t(40),f=t(106),p=t(61),E=t(103),v=t(18),O=t(52),h=t(94),y=t.n(h),j=t(109),k=t(6);a.default=function(){var e=Object(s.useContext)(v.a).state,a=Object(s.useState)({student_id:"",email:"",name:"",roll_no:"",branch:"",degree:"",batch:"",feedback_type:"",feedback_data:""}),t=Object(m.a)(a,2),r=t[0],N=t[1],g=Object(k.g)(),_=function(e){var a=e.target,t=a.id,r=a.value;N((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(l.a)({},t,r))}))},x=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.b.get("/students/me").then((function(e){N({student_id:e.data.id,name:e.data.Name,branch:e.data.branch,degree:e.data.degree,batch:e.data.batch,email:e.data.email,roll_no:e.data.rollNumber,feedback_type:"query",feedback_data:""})})).catch((function(e){console.log(e,e.response),y.a.error("Something Went Wrong!")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.b.post("/feedbacks",r).then((function(e){y.a.success("Feedback Submitted!"),N((function(e){return Object(o.a)(Object(o.a)({},e),{},{feedback_type:"query",feedback_data:""})})),setTimeout((function(){g.push("/my-feedbacks")}),1e3)})).catch((function(e){console.log(e,e.response),y.a.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){x()}),[e]),""===r.name?u.a.createElement(j.a,null):u.a.createElement(d.a,{className:"p-4"},u.a.createElement(h.Toaster,null),u.a.createElement(i.a,{className:"p-4"},u.a.createElement("h2",{className:"text-center mb-4"},"Feedback Or Query"),u.a.createElement(b.a,null,u.a.createElement(f.a,null,u.a.createElement(p.a,{md:6,className:"mb-3"},u.a.createElement(b.a.Group,null,u.a.createElement(b.a.Label,{style:{fontSize:"1rem"}},"Name :"),u.a.createElement(b.a.Control,{className:"mr-2",required:!0,type:"text",name:"name",value:r.name,id:"name",placeholder:r.name,disabled:!0}))),u.a.createElement(p.a,{md:6,className:"mb-3"},u.a.createElement(b.a.Group,null,u.a.createElement(b.a.Label,{style:{fontSize:"1rem"}},"Roll No :"),u.a.createElement(b.a.Control,{className:"mr-2",required:!0,type:"text",name:"roll_no",value:r.roll_no,id:"roll_no",placeholder:r.roll_no,disabled:!0})))),u.a.createElement(f.a,null,u.a.createElement(p.a,{md:6,className:"mb-3"},u.a.createElement(b.a.Group,null,u.a.createElement(b.a.Label,null,"Email :"),u.a.createElement(b.a.Control,{required:!0,disabled:!0,className:"mr-2",name:"email",value:r.email,id:"email",type:"email",placeholder:r.email}))),u.a.createElement(p.a,{md:6,className:"mb-3"},u.a.createElement(b.a.Group,null,u.a.createElement(b.a.Label,null,"Feedback Type :"),u.a.createElement(b.a.Select,{value:r.feedback_type,id:"feedback_type",onChange:_,required:!0},u.a.createElement("option",{value:"query"},"Query"),u.a.createElement("option",{value:"suggestion"},"Suggestion"),u.a.createElement("option",{value:"complaint"},"Complaint"))))),u.a.createElement(f.a,null,u.a.createElement(p.a,{md:12,className:"mb-3"},u.a.createElement(b.a.Group,null,u.a.createElement(b.a.Label,null,"Feedback Or Query :"),u.a.createElement(b.a.Control,{className:"mr-2",name:"feedback_data",value:r.feedback_data,id:"feedback_data",as:"textarea",rows:5,placeholder:"Enter Your Feedback Or Query Here",required:!0,onChange:_})))),u.a.createElement(f.a,{className:"mt-4"},u.a.createElement(p.a,{md:12},u.a.createElement(E.a,{variant:"dark",type:"submit",onClick:function(e){e.preventDefault(),0!==r.feedback_data.length?C():y.a.error("Please enter your feedback or query.")}},"Submit"))))))}}}]);
//# sourceMappingURL=15.8a543cce.chunk.js.map