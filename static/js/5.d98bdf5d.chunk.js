(this["webpackJsonptnp-nsut"]=this["webpackJsonptnp-nsut"]||[]).push([[5],{324:function(e,t,a){e.exports=a.p+"static/media/plus-solid.d4055c0a.svg"},374:function(e,t,a){},380:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){var n={"./Hackathon.svg":383,"./Internship.svg":384,"./Placement.svg":385,"./Update.svg":386,"./Webinar.svg":387,"./github.svg":388,"./google-tag-manager.svg":389,"./google_analytics.svg":390,"./old_update.svg":391,"./plus-solid.svg":324};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=382},383:function(e,t,a){e.exports=a.p+"static/media/Hackathon.ae37a854.svg"},384:function(e,t,a){e.exports=a.p+"static/media/Internship.808d4404.svg"},385:function(e,t,a){e.exports=a.p+"static/media/Placement.c5c9c176.svg"},386:function(e,t,a){e.exports=a.p+"static/media/Update.82a4a362.svg"},387:function(e,t,a){e.exports=a.p+"static/media/Webinar.e6274850.svg"},388:function(e,t,a){e.exports=a.p+"static/media/github.34119f98.svg"},389:function(e,t,a){e.exports=a.p+"static/media/google-tag-manager.0990d9e9.svg"},390:function(e,t,a){e.exports=a.p+"static/media/google_analytics.95a87f80.svg"},391:function(e,t,a){e.exports=a.p+"static/media/old_update.1adfd22f.svg"},415:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),l=a.n(r),i=a(53),o=a(51),s=a(21),d=a(103),u=a(303),m=a(106),p=a(61),g=a(52),f=a(373),v=a.n(f),x=(a(374),function(e){var t=e.htmlText;return c.a.createElement("div",{className:"html-text",dangerouslySetInnerHTML:{__html:v.a.sanitize(t)}})}),h=a(375),b=(a(379),a(6)),E=a(109);a(380),a(381);var y=function(e){var t=e.type;return c.a.createElement("img",{className:"icon-".concat(t),src:a(382)("./".concat(t,".svg")),alt:"test_icon",style:{width:"80%",height:"80%"}})},w=a(18),_=function(){var e=Object(n.useContext)(w.a).state.profileData,t=null===e||void 0===e?void 0:e.degree,r=null===e||void 0===e?void 0:e.campus,f=null===e||void 0===e?void 0:e.batch,v=Object(n.useState)(0),_=Object(s.a)(v,2),j=_[0],O=_[1],k=Object(n.useState)({loading:!1,data:[],error:null}),N=Object(s.a)(k,2),S=N[0],T=N[1],C=Object(n.useState)(!0),U=Object(s.a)(C,2),D=U[0],I=U[1],W=Object(n.useState)(!0),A=Object(s.a)(W,2),H=A[0],V=A[1],B={Placement:"#5b7cf3",Internship:"#2cc972",Update:"#77d1e8",Webinar:"#ffc111",Hackathon:"#8e5bf3"},L=Object(b.g)();Object(n.useEffect)((function(){M()}),[]);var M=function(){var e=Object(o.a)(l.a.mark((function e(){var a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(Object(i.a)(Object(i.a)({},S),{},{loading:!0})),e.prev=1,e.next=4,g.b.get("/announcements?_sort=createdAt:desc&batch=".concat(f,"&_where[0][degrees_allowed_contains]=").concat(t,"&campus=").concat(r,"&_start=").concat(j,"&_limit=").concat(7));case 4:a=e.sent,n=a.data,c=S.data,n.length<7&&I(!1),n.map((function(e){return c.push(e)})),T({loading:!1,data:c,error:null}),O(j+7),V(!1),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(1),T({loading:!1,data:[],error:e.t0}),V(!1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return S.error?c.a.createElement("div",null,c.a.createElement("h1",null,"Error in fetching notifications.")):H?c.a.createElement(E.a,null):c.a.createElement("div",null,function(){if(S.data)return c.a.createElement(c.a.Fragment,null,0!==S.data.length&&c.a.createElement(h.VerticalTimeline,{animate:!1,layout:"1-column-left"},S.data.map((function(e,t){return c.a.createElement(h.VerticalTimelineElement,{contentArrowStyle:{display:"none"},contentStyle:{background:"transparent",boxSahdow:"0px 4px 8px -2px rgb(16 24 40 / 10%), 0px 2px 4px -2px rgb(16 24 40 / 6%)",transform:"translateY(-5px)"},onTimelineElementClick:function(){return L.push("/"===e.redirect_url?"/companies/".concat(e.event_id):e.redirect_url)},icon:c.a.createElement(y,{type:e.event_type}),iconStyle:{backgroundColor:B[e.event_type||"Update"],display:"flex",justifyContent:"center",alignItems:"center"},key:t},c.a.createElement(u.a,{className:"bg-transparent",style:{cursor:"pointer",overflowX:"hidden"}},c.a.createElement(u.a.Body,{className:"p-0"},c.a.createElement(m.a,null,c.a.createElement(p.a,{sm:5},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("div",{className:"image bg-black rounded-circle d-flex justify-content-center align-items-center",style:{height:"50px",width:"50px",marginRight:"7%",overflow:"hidden",marginBottom:"7px"}},c.a.createElement("div",{className:"text-logo",style:{color:"white",fontSize:"1.8rem",fontWeight:"bolder",paddingTop:"0px"}},e.for.split(" ").length>1?e.for.split(" ")[0].substring(0,1)+e.for.split(" ")[1].substring(0,1):e.for.split(" ")[0].substring(0,1))),c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("h5",null,e.title),c.a.createElement("h6",{style:{color:"#6f7274"}},e.for)))),c.a.createElement(p.a,{sm:7},c.a.createElement("div",{className:"d-flex flex-column align-items-start"},c.a.createElement(x,{htmlText:e.content}),c.a.createElement("div",{className:"d-flex w-100"},c.a.createElement("div",null,c.a.createElement("p",{style:{margin:"0px",fontWeight:"700"}},new Date(e.createdAt).toString().slice(0,15),","," ",new Date(e.createdAt).toString().slice(16,21))),c.a.createElement("div",{className:"tag border rounded px-1 ".concat(e.event_type||"Update")},e.event_type||"Update"))))))))})),D&&c.a.createElement(h.VerticalTimelineElement,{icon:c.a.createElement("img",{src:a(324),alt:"load_more",style:{width:"100%",height:"100%"}}),iconOnClick:M,iconStyle:{cursor:"pointer",backgroundColor:"#e44e72"}})))}(),function(){if(S.loading)return c.a.createElement(E.a,null)}(),function(){if(D)return c.a.createElement("div",{className:"d-flex justify-content-center mt-4"},c.a.createElement(d.a,{className:"view_more",variant:"dark",disabled:S.loading,onClick:M},S.loading?c.a.createElement(E.a,null):"View More"))}())};t.default=function(){return Object(n.useContext)(w.a).state.isLoading?c.a.createElement(E.a,null):c.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column w-80 mt-3 bg-white"},c.a.createElement("div",{className:"w-100",style:{paddingTop:"10px",paddingBottom:"10px"}},c.a.createElement(_,null)))}}}]);
//# sourceMappingURL=5.d98bdf5d.chunk.js.map