(this["webpackJsonptnp-nsut"]=this["webpackJsonptnp-nsut"]||[]).push([[19],{418:function(e,a,t){"use strict";t.r(a);var r=t(27),l=t.n(r),n=t(51),c=t(21),m=t(13),o=t(39),s=t(409),d=t(305),u=t(40),i=t(106),p=t(61),b=t(372),h=t(394),E=t.n(h),g=t(0),f=t.n(g),v=t(398),N=t.n(v),_=t(52),y=t(109),x=t(18),w=t(111);function C(e){return k.apply(this,arguments)}function k(){return(k=Object(n.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("files",a),e.next=4,_.b.post("/upload",t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,a){return O.apply(this,arguments)}function O(){return(O=Object(n.a)(l.a.mark((function e(a,t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,C(a);case 4:return r=e.sent,e.next=7,_.b.put("/students/resume",{uploadId:r.data[0]._id,index:t});case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return L.apply(this,arguments)}function L(){return(L=Object(n.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,_.b.put("/students/resume/".concat(a));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=t(103),q=function(e){var a=e.onChange,t=e.currentFile,r=e.uploadFile,l=e.deleteFile,n=e.isLoading;if(t){if(t instanceof File)return f.a.createElement("div",null,f.a.createElement("div",null,f.a.createElement("p",null,"File selected: ",t.name)),f.a.createElement("div",{className:"d-flex"},f.a.createElement(F.a,{className:"me-3",size:"sm",onClick:r,disabled:n},"Upload this file"),f.a.createElement(F.a,{size:"sm",variant:"danger",onClick:function(){return a(null)},disabled:n},"Remove this file")));if(t.url&&t.name)return f.a.createElement("div",null,f.a.createElement("p",null,t.name," :"," ",f.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.url},"Open")),f.a.createElement("div",null,f.a.createElement(F.a,{size:"sm",onClick:l},"Delete this file")))}return f.a.createElement(d.a,null,f.a.createElement("input",{type:"file",onChange:a}))},D=function(e){var a=e.resumes,t=e.uploadFn,r=e.deleteFn,m=Object(g.useState)(0),o=Object(c.a)(m,2),s=o[0],b=o[1],h=Object(g.useState)(""),E=Object(c.a)(h,2),v=E[0],N=E[1],_=Object(g.useState)(!1),y=Object(c.a)(_,2),x=y[0],w=y[1],C=function(){var e=Object(n.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,t(v,s);case 3:w(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(n.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,r(v._id);case 3:w(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){N(a[s]||"")}),[a,s]),f.a.createElement("div",null,f.a.createElement("h4",null,"Upload your resume"),f.a.createElement(d.a,{className:"p-4"},f.a.createElement(i.a,null,f.a.createElement(p.a,{lg:4},f.a.createElement(u.a.Select,{disabled:x,value:s,onChange:function(e){var a=e.target.value;b(a)}},f.a.createElement("option",{value:0},"Resume 1"),f.a.createElement("option",{value:1},"Resume 2"),f.a.createElement("option",{value:2},"Resume 3"))),f.a.createElement(p.a,{lg:12},f.a.createElement("div",{className:"mt-3"},f.a.createElement(q,{currentFile:v,onChange:function(e){var a,t=null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.files[0];N(t||"")},uploadFile:C,deleteFile:k,isLoading:x}))))))};a.default=function(){var e=Object(g.useContext)(x.a).state,a=Object(g.useContext)(w.a).showNotification,t=Object(s.a)(),r=Object(g.useState)({Name:"",photo:null,branch:"",batch:"",email:"",personal_email:"",blood_group:"",academic_certificates:"",contact_number:"",perm_address:"",curr_address:"",rollNumber:"",sem1:"",sem2:"",pan:"",aadhar:"",sem3:"",sem4:"",sem5:"",sem6:"",cgpa:"",gpa10th:"",gpa12th:"",dropCgpa:"",backlogs:"",graduation_gpa:"",bans:"",appliedCompaniesIntern:"",appliedCompaniesPlacement:"",resumes:null,resume1:null,resume2:null,resume3:null,dob:"",alt_contact_number:"",gender:"Male"}),h=Object(c.a)(r,2),v=h[0],C=h[1],k=Object(g.useState)(!0),O=Object(c.a)(k,1)[0],L=function(){var e=Object(n.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.b.get("/students/me").then((function(e){var a,t,r,l,n,c,m,o,s,d,u,i,p,b,h,E,g;C({Name:e.data.Name,photo:e.data.photo,branch:e.data.branch,degree:e.data.degree,batch:e.data.batch,email:e.data.email,personal_email:e.data.personal_email,alt_contact_number:e.data.alt_contact_number,gender:e.data.gender,blood_group:e.data.blood_group,academic_certificates:"",contact_number:e.data.contact_number,perm_address:e.data.perm_address,curr_address:e.data.present_address,rollNumber:e.data.rollNumber,sem1:null===(a=e.data)||void 0===a?void 0:a.sem1_gpa,sem2:null===(t=e.data)||void 0===t?void 0:t.sem2_gpa,pan:null===(r=e.data)||void 0===r?void 0:r.pan,aadhar:null===(l=e.data)||void 0===l?void 0:l.aadhar,sem3:null===(n=e.data)||void 0===n?void 0:n.sem3_gpa,sem4:null===(c=e.data)||void 0===c?void 0:c.sem4_gpa,sem5:null===(m=e.data)||void 0===m?void 0:m.sem5_gpa,sem6:null===(o=e.data)||void 0===o?void 0:o.sem6_gpa,cgpa:e.data.cgpa,gpa10th:e.data.cgpa_10th,gpa12th:e.data.cgpa_12th,dropCgpa:null===(s=e.data)||void 0===s?void 0:s.dropCgpa,graduation_gpa:null===(d=e.data)||void 0===d?void 0:d.graduation_gpa,backlogs:null===(u=e.data)||void 0===u?void 0:u.backlogs,bans:null===(i=e.data)||void 0===i?void 0:i.bans,resumes:null===(p=e.data)||void 0===p?void 0:p.resume,resume1:(null===(b=e.data)||void 0===b?void 0:b.resume[0])||null,resume2:(null===(h=e.data)||void 0===h?void 0:h.resume[1])||null,resume3:(null===(E=e.data)||void 0===E?void 0:E.resume[2])||null,dob:null===(g=e.data)||void 0===g?void 0:g.dob,cgpa_before_drop:e.data.cgpa_before_drop})})).catch((function(e){console.log(e,e.response)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(g.useEffect)((function(){L()}),[e]);var F=function(){var e=Object(n.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,G(t,r);case 5:e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(2),e.abrupt("return",console.log(e.t0));case 10:a("Resume has been uploaded"),L();case 12:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(a,t){return e.apply(this,arguments)}}(),q=function(){var e=Object(n.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(t);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 8:L(),a("Resume has been deleted");case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(a){return e.apply(this,arguments)}}();return""===v.Name?f.a.createElement(y.a,null):f.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},f.a.createElement("div",{style:{width:"90%"}},f.a.createElement("div",null,f.a.createElement("h1",null,"Your Profile")),f.a.createElement(d.a,{style:{flexDirection:"row"},border:"light",className:"bg-white shadow-sm p-4"},f.a.createElement(d.a.Body,null,f.a.createElement(d.a.Title,{className:"mb-1"},v.Name),f.a.createElement(d.a.Text,null,v.branch,"| ",v.batch))),f.a.createElement("h4",{className:"mt-3 mb-1 mx-2"},"Personal"),f.a.createElement(u.a,null,f.a.createElement(d.a,{className:"p-4"},f.a.createElement(i.a,null,f.a.createElement(p.a,{md:6,className:"mb-3"},f.a.createElement(u.a.Group,{id:"batch"},f.a.createElement(u.a.Label,{style:{fontSize:"1rem"}},"Name"),f.a.createElement(u.a.Control,{style:t>1200?{width:"75%",float:"right"}:{width:"100"},className:"mr-2",required:!0,type:"text",name:"batch",value:v.Name,placeholder:v.Name,disabled:!0}))),f.a.createElement(p.a,{md:6,className:"mb-3"},f.a.createElement(u.a.Group,{id:"blood_group"},f.a.createElement(u.a.Label,{style:{fontSize:"1rem"}},"Blood Group"),f.a.createElement(u.a.Control,{style:t>1200?{width:"75%",float:"right"}:{width:"100"},className:"mr-2",required:!0,type:"text",name:"blood_group",value:v.blood_group,placeholder:v.blood_group,disabled:!0})))),f.a.createElement(i.a,null,f.a.createElement(p.a,{md:6,className:"mb-3"},f.a.createElement(u.a.Group,null,f.a.createElement(u.a.Label,{className:"mt-2"},"Date of Birth : "),f.a.createElement("div",{style:t>1200?{width:"75%",float:"right"}:{},className:"mr-2"},f.a.createElement(N.a,{timeFormat:!1,closeOnSelect:!1,renderInput:function(e,a){return f.a.createElement(b.a,null,f.a.createElement(b.a.Text,null,f.a.createElement(o.a,{icon:m.b})),f.a.createElement(u.a.Control,{required:!0,type:"text",value:v.dob?E()(v.dob).format("MM/DD/YYYY"):"",placeholder:v.dob?E()(v.dob).format("MM/DD/YYYY"):"",onFocus:a,onChange:function(){},disabled:!0}))}})))),f.a.createElement(p.a,{md:6,className:"mb-3"},f.a.createElement(u.a.Group,{id:"gender"},f.a.createElement(u.a.Label,null,"Gender"),f.a.createElement(u.a.Control,{style:t>1200?{width:"75%",float:"right"}:{},disabled:!0,className:"mr-2",type:"text",name:"gender",value:v.gender,placeholder:v.gender}))),f.a.createElement(p.a,{md:6,className:"mb-3"},f.a.createElement(u.a.Group,{id:"batch"},f.a.createElement(u.a.Label,null,"Batch"),f.a.createElement(u.a.Control,{style:t>1200?{width:"75%",float:"right"}:{},disabled:!0,className:"mr-2",type:"text",name:"batch",value:v.batch,placeholder:v.batch}))),f.a.createElement(p.a,{md:6,className:"mb-3"},f.a.createElement(u.a.Group,{id:"degree"},f.a.createElement(u.a.Label,null,"Degree"),f.a.createElement(u.a.Control,{style:t>1200?{width:"75%",float:"right"}:{},disabled:!0,className:"mr-2",type:"text",name:"degree",value:v.degree,placeholder:v.degree}))),f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"email"},f.a.createElement(u.a.Label,null,"Email"),f.a.createElement(u.a.Control,{style:t>1200?{width:"75%",float:"right"}:{},disabled:!0,className:"mr-2",name:"email",value:v.email,type:"email",placeholder:v.email}))),f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"email"},f.a.createElement(u.a.Label,null,"Personal Email"),f.a.createElement(u.a.Control,{style:t>1200?{width:"75%",float:"right"}:{},className:"mr-2",name:"personal_email",value:v.personal_email,type:"email",placeholder:v.personal_email,disabled:!0})))),f.a.createElement(i.a,null,f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"roll-number"},f.a.createElement(u.a.Label,null,"Roll Number"),f.a.createElement(u.a.Control,{disabled:!0,style:t>1200?{width:"75%",float:"right"}:{},type:"text",className:"mr-2",name:"rollNumber",value:v.rollNumber,placeholder:v.rollNumber}))),f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"branch"},f.a.createElement(u.a.Label,null,"Branch"),f.a.createElement(u.a.Control,{disabled:!0,style:t>1200?{width:"75%",float:"right"}:{},type:"text",className:"mr-2",name:"branch",value:v.branch,placeholder:v.branch})))),f.a.createElement(i.a,null,f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"contact_num"},f.a.createElement(u.a.Label,null,"Contact Number"),f.a.createElement(u.a.Control,{style:t>1200?{width:"75%",float:"right"}:{},className:"mr-2",name:"contact_number",disabled:!0,value:v.contact_number,type:"text",placeholder:v.contact_number}))),f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"contact_num"},f.a.createElement(u.a.Label,null,"Alt. Contact No."),f.a.createElement(u.a.Control,{style:t>1200?{width:"75%",float:"right"}:{},className:"mr-2",name:"alt_contact_number",disabled:!0,value:v.alt_contact_number,type:"text",placeholder:v.alt_contact_number}))),f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"curr_address"},f.a.createElement(u.a.Label,null,"Current Address"),f.a.createElement(u.a.Control,{style:t>1200?{width:"75%",float:"right",mcursor:"no-drop"}:{},name:"present_address",disabled:!0,className:"mr-2",value:v.curr_address,type:"text",placeholder:v.curr_address}))),f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"perm_address"},f.a.createElement(u.a.Label,null,"Permanent Address"),f.a.createElement(u.a.Control,{style:t>1200?{width:"75%",float:"right",mcursor:"no-drop"}:{},name:"perm_address",disabled:!0,className:"mr-2",value:v.perm_address,type:"text",placeholder:v.perm_address}))))),f.a.createElement("h4",{className:"mt-3 mb-1 mx-2"},"Academics"),f.a.createElement(d.a,{className:"p-4"},f.a.createElement(i.a,null,f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"cgpa"},f.a.createElement(u.a.Label,null,"Final CGPA"),f.a.createElement(u.a.Control,{style:t>500?{width:"75%",float:"right",mcursor:"no-drop"}:{mcursor:"no-drop"},className:"mr-2",required:!0,disabled:O,type:"text",name:"cgpa",value:v.cgpa,placeholder:v.cgpa}))),f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"cgpa-drop"},f.a.createElement(u.a.Label,null,"CGPA - Before Drop"),f.a.createElement(u.a.Control,{disabled:O,style:t>500?{width:"75%",float:"right",mcursor:"no-drop"}:{mcursor:"no-drop"},required:!0,className:"mr-2",type:"text",name:"dropCgpa",value:v.cgpa_before_drop,placeholder:v.cgpa_before_drop}))),f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"gpa-12th"},f.a.createElement(u.a.Label,null,"12th Percentage"),f.a.createElement(u.a.Control,{disabled:O,style:t>500?{width:"75%",float:"right",mcursor:"no-drop"}:{mcursor:"no-drop"},required:!0,className:"mr-2",type:"text",name:"cgpa12th",value:v.gpa12th,placeholder:v.gpa12th}))),f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"gpa-1oth"},f.a.createElement(u.a.Label,null,"10th Percentage"),f.a.createElement(u.a.Control,{disabled:O,style:t>500?{width:"75%",float:"right",mcursor:"no-drop"}:{mcursor:"no-drop"},required:!0,className:"mr-2",type:"text",name:"cgpa10th",value:v.gpa10th,placeholder:v.gpa10th}))),f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"grad-cgpa"},f.a.createElement(u.a.Label,null,"Graduation CGPA"),f.a.createElement(u.a.Control,{disabled:O,style:t>500?{width:"75%",float:"right",mcursor:"no-drop"}:{mcursor:"no-drop"},required:!0,className:"mr-2",type:"text",name:"gradcgpa",value:-1===v.graduation_gpa?"NA":v.graduation_gpa,placeholder:-1===v.graduation_gpa?"NA":v.graduation_gpa})))),f.a.createElement(i.a,null,f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"backlogs"},f.a.createElement(u.a.Label,null,"Backlogs"),f.a.createElement(u.a.Control,{style:t>500?{width:"75%",float:"right",mcursor:"no-drop"}:{mcursor:"no-drop"},disabled:O,className:"mr-2",required:!0,type:"text",name:"backlogs",value:v.backlogs,placeholder:v.backlogs}))),f.a.createElement(p.a,{md:12,className:"mb-3"},f.a.createElement(u.a.Group,{id:"bans"},f.a.createElement(u.a.Label,null,"Bans"),f.a.createElement(u.a.Control,{disabled:!0,required:!0,style:t>500?{width:"75%",float:"right",mcursor:"no-drop"}:{mcursor:"no-drop"},type:"text",name:"bans",className:"mr-2",value:v.bans,placeholder:v.bans}))))),f.a.createElement("div",{className:"mt-3"},f.a.createElement(D,{resumes:v.resumes,uploadFn:F,deleteFn:q})))))}}}]);
//# sourceMappingURL=19.eb04904e.chunk.js.map