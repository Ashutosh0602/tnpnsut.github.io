(this["webpackJsonptnp-nsut"]=this["webpackJsonptnp-nsut"]||[]).push([[8],{308:function(e,a,t){"use strict";var r=t(1),n=t(0),c=t.n(n),l=t(4),o=t.n(l);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))}},309:function(e,a,t){"use strict";var r=t(1),n=t(2),c=t(4),l=t.n(c),o=t(0),s=t.n(o),i=t(5),d=t(29),m=t(308),b=t(108),u=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,d=e.as,m=void 0===d?"img":d,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),u=Object(i.a)(t,"card-img");return s.a.createElement(m,Object(r.a)({ref:a,className:l()(o?u+"-"+o:u,c)},b))}));u.displayName="CardImg",u.defaultProps={variant:null};var p=u,f=Object(m.a)("h5"),v=Object(m.a)("h6"),g=Object(d.a)("card-body"),y=Object(d.a)("card-title",{Component:f}),h=Object(d.a)("card-subtitle",{Component:v}),E=Object(d.a)("card-link",{Component:"a"}),j=Object(d.a)("card-text",{Component:"p"}),O=Object(d.a)("card-header"),N=Object(d.a)("card-footer"),x=Object(d.a)("card-img-overlay"),S=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,m=e.text,u=e.border,p=e.body,f=e.children,v=e.as,y=void 0===v?"div":v,h=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(i.a)(t,"card"),j=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return s.a.createElement(b.a.Provider,{value:j},s.a.createElement(y,Object(r.a)({ref:a},h,{className:l()(c,E,d&&"bg-"+d,m&&"text-"+m,u&&"border-"+u)}),p?s.a.createElement(g,null,f):f))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=p,S.Title=y,S.Subtitle=h,S.Body=g,S.Link=E,S.Text=j,S.Header=O,S.Footer=N,S.ImgOverlay=x;a.a=S},315:function(e,a,t){e.exports={tableWrapper:"AllCompanies_tableWrapper__2NlpR",clrbtn:"AllCompanies_clrbtn__16POh"}},316:function(e,a,t){"use strict";var r=t(1),n=t(2),c=t(4),l=t.n(c),o=t(0),s=t.n(o),i=t(5),d=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.striped,d=e.bordered,m=e.borderless,b=e.hover,u=e.size,p=e.variant,f=e.responsive,v=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),g=Object(i.a)(t,"table"),y=l()(c,g,p&&g+"-"+p,u&&g+"-"+u,o&&g+"-striped",d&&g+"-bordered",m&&g+"-borderless",b&&g+"-hover"),h=s.a.createElement("table",Object(r.a)({},v,{className:y,ref:a}));if(f){var E=g+"-responsive";return"string"===typeof f&&(E=E+"-"+f),s.a.createElement("div",{className:E},h)}return h}));a.a=d},354:function(e,a,t){"use strict";t.r(a),t.d(a,"PageTrafficTable",(function(){return O}));var r=t(27),n=t.n(r),c=t(53),l=t(51),o=t(21),s=t(0),i=t.n(s),d=t(316),m=t(40),b=t(39),u=t(13),p=t(309),f=t(103),v=t(52),g=t(6),y=t(315),h=t.n(y),E=t(109),j=t(18),O=function(e){var a=e.companies,t=e.searchState,r=e.companyName,n=e.eventType,c=function(e){var t=e.sourceIcon,r=e.sourceIconColor,c=e.searchState,l=Object(g.g)();return i.a.createElement(i.a.Fragment,null,a.map((function(e,a){return!(""===c||e.title&&e.title.toLowerCase().includes(c.toLowerCase())||e.company&&e.company.Name.toLowerCase().includes(c.toLowerCase()))||"All"!==n&&e.type!==n?null:i.a.createElement("tr",{key:a},i.a.createElement("td",null,i.a.createElement(p.a.Link,{href:"#",className:"text-primary fw-bold"},a+1)),i.a.createElement("td",{onClick:function(){return l.push("/companies/".concat(e.id))},className:"fw-bold",style:{cursor:"pointer",color:"#0089ff",textTransform:"capitalize"}},i.a.createElement(b.a,{icon:t,className:"icon icon-xs text-".concat(r," w-30")}),e.jobtitle),i.a.createElement("td",null,e.type),i.a.createElement("td",null,e.company?e.company.Name:""),i.a.createElement("td",null,e.placeOfPosting),i.a.createElement("td",null,e.status?e.status:"--"))})))};return i.a.createElement(p.a,{border:"light",className:"shadow-sm mb-4",style:{borderRadius:"0 0 0.5rem 0.5rem",border:"none"}},i.a.createElement(p.a.Body,{className:h.a.tableWrapper},i.a.createElement(d.a,{responsive:!0,className:"table-centered table-nowrap rounded mb-0"},i.a.createElement("thead",{className:"thead-light"},i.a.createElement("tr",null,i.a.createElement("th",{className:"border-0"},"#"),i.a.createElement("th",{className:"border-0"},"Job Profile"),i.a.createElement("th",{className:"border-0"},"Type"),i.a.createElement("th",{className:"border-0"},"Company"),i.a.createElement("th",{className:"border-0"},"Location"),i.a.createElement("th",{className:"border-0"},"Status"))),i.a.createElement("tbody",null,i.a.createElement(c,{searchState:t,companyName:r,eventType:n})))))};a.default=function(){var e=Object(s.useContext)(j.a).state.profileData,a=null===e||void 0===e?void 0:e.degree,t=null===e||void 0===e?void 0:e.campus,r=null===e||void 0===e?void 0:e.batch,d=Object(s.useState)([{loading:!1,data:[],error:null}]),p=Object(o.a)(d,2),g=p[0],y=p[1],h=Object(s.useState)(!0),N=Object(o.a)(h,2),x=N[0],S=N[1],w=Object(s.useState)(0),C=Object(o.a)(w,2),k=C[0],P=C[1],R=Object(s.useState)(!0),T=Object(o.a)(R,2),_=T[0],L=T[1],A=Object(s.useState)(""),I=Object(o.a)(A,2),z=I[0],F=I[1],J=Object(s.useState)("All"),B=Object(o.a)(J,2),W=B[0],H=B[1],M=Object(s.useState)("All"),Q=Object(o.a)(M,2),D=Q[0],G=Q[1];Object(s.useEffect)((function(){V()}),[]);var V=function(){var e=Object(l.a)(n.a.mark((function e(){var l,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(Object(c.a)(Object(c.a)({},g),{},{loading:!0})),e.next=4,v.b.get("/company-events?_sort=createdAt:desc&batch=".concat(r,"&_where[0][degrees_allowed_contains]=").concat(a,"&campus=").concat(t,"&_start=").concat(k,"&_limit=").concat(20));case 4:l=e.sent,o=l.data,l.data.length<=20&&S(!1),y({loading:!1,data:o,error:null}),P(k+20),L(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),y({loading:!1,data:[],error:e.t0}),console.log(e.t0),L(!1);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{background:"white",padding:"24px"}},i.a.createElement("h2",{style:{color:"black"}},"Job Profiles"),i.a.createElement("div",{className:"p-0 mt-4 bg-white rounded"},i.a.createElement(m.a,{className:"d-md-flex p-0 align-items-center ",style:{gap:"35px"}},i.a.createElement("div",{className:"col-12 col-md-4 mb-2 mb-md-0",style:{border:"0.0625rem solid #d1d7e0",borderRadius:"10px"}},i.a.createElement(m.a.Group,{className:"d-flex justify-content-center align-items-center",style:{padding:"0 0.75rem"}},i.a.createElement(m.a.Label,{className:"mb-0 d-flex justify-content-center align-items-center",style:{fontSize:"13px"}},i.a.createElement(b.a,{icon:u.i,style:{marginRight:"5px"}}),"Search"),i.a.createElement(m.a.Control,{placeholder:"Start typing company name...",value:z,style:{border:"none",marginLeft:"10px",marginRight:"10px",boxShadow:"none",fontStyle:"italic"},onChange:function(e){F(e.target.value)}}))),i.a.createElement("div",{className:"col-12 col-md-4 mb-2 mb-md-0 d-flex justify-content-center align-items-center",style:{border:"0.0625rem solid #d1d7e0",padding:"0 0.75rem",paddingRight:"0px",borderRadius:"10px"}},i.a.createElement(m.a.Label,{className:"mb-0",style:{marginRight:"10px",fontSize:"13px"}},"Type"),i.a.createElement(m.a.Select,{style:{border:"none",boxShadow:"none",fontStyle:"italic"},value:D,onChange:function(e){return G(e.target.value)}},i.a.createElement("option",null,"All"),i.a.createElement("option",null,"Internship"),i.a.createElement("option",null,"Placement"))),i.a.createElement(f.a,{className:"col-4 col-md-1 mb-2 mb-md-0",style:{height:"35px",background:"linear-gradient(to right, #fb7b4a, #ee3344)",borderColor:"#fb7b4a",padding:0},onClick:function(){H("All"),G("All"),F("")}},"Clear")))),_?i.a.createElement("div",null,i.a.createElement(E.a,null)):i.a.createElement(i.a.Fragment,null,function(e){var a=e.searchQuery,t=e.companySelected,r=e.eventTypeSelected;if(g.data)return i.a.createElement(O,{companies:g.data,searchState:a,companyName:t,eventType:r})}({searchQuery:z,companySelected:W,eventTypeSelected:D}),function(){if(g.loading)return i.a.createElement(E.a,null)}(),function(){if(x)return i.a.createElement("div",{className:"d-flex justify-content-center mt-4"},i.a.createElement(f.a,{variant:"dark",style:{background:"linear-gradient(to right, #fb7b4a, #ee3344)",borderColor:"#fb7b4a"},disabled:g.loading,onClick:function(){return V()}},g.loading?i.a.createElement(E.a,null):"View More"))}()))}}}]);
//# sourceMappingURL=8.cc7146cf.chunk.js.map