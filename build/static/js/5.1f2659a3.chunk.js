(this.webpackJsonpthe_drag=this.webpackJsonpthe_drag||[]).push([[5],{218:function(e,t,c){"use strict";c(2),c(222);var a=c(57),n=c(16),s=c.n(n),r=c(1);s.a.config();t.a=e=>{let{email:t,name:c,close:n}=e;return Object(r.jsxs)("div",{className:"contact-container",children:[Object(r.jsxs)("div",{className:"email",children:[Object(r.jsx)("p",{children:"To:"}),Object(r.jsx)("p",{className:"email-main",children:`${c} <${t}>`})]}),Object(r.jsxs)("form",{className:"contact-form",action:"https://thedrag.in/apis/v1/apis/contact",method:"post",encType:"multipart/form-data",onSubmit:e=>{(async e=>{document.getElementById("email-btn").setAttribute("disabled","true"),e.preventDefault();const c={subject:document.getElementById("subject").value,body:document.getElementById("body").value,attachment:document.getElementById("attachment").files[0],creatormail:t},a=new FormData;for(let t in c)a.append(t,c[t]);await fetch(e.target.action,{method:"post",body:a,credentials:"include"}).then((e=>e.json())).then((e=>{e.success?(alert(e.message),window.location.reload()):(alert(e.error||e.message),window.location.reload())}))})(e)},children:[Object(r.jsxs)("div",{className:"subject",children:[Object(r.jsx)("label",{htmlFor:"subject",children:"Subject:"}),Object(r.jsx)("input",{type:"text",id:"subject",name:"subject"})]}),Object(r.jsxs)("div",{className:"body",children:[Object(r.jsx)("label",{htmlFor:"body",children:"Message:"}),Object(r.jsx)("textarea",{name:"",id:"body"})]}),Object(r.jsxs)("div",{className:"attachment",children:[Object(r.jsx)("p",{children:"Attachment:"}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{htmlFor:"attachment",children:["Drag Your Files Here ",Object(r.jsx)("p",{style:{textAlign:"center"},children:"Or"})]}),Object(r.jsx)("input",{type:"file",name:"attachment",id:"attachment"})]})]}),Object(r.jsx)("button",{type:"submit",id:"email-btn",children:"SEND"})]}),Object(r.jsx)("img",{src:a.a,alt:"",width:40,height:40,onClick:n,style:{cursor:"pointer"}})]})}},222:function(e,t,c){},233:function(e,t,c){"use strict";c.r(t);c(2),c(234);var a=c(10),n=c(218),s=c(30),r=c(1);t.default=e=>{let{props:t}=e;const{name:c,image:l,email:o,instaurl:i,instacount:j,facebookurl:d,facebookcount:b,youtubeurl:m,youtubecount:h,twitterurl:u,twittercount:x,linkedinurl:O,linkedincount:p}=t,f=j+b+h+x+p,g=Math.floor(f/1e3);return Object(r.jsxs)("div",{className:"creator-card",children:[Object(r.jsx)("img",{src:l,alt:c,className:"creator-image"}),Object(r.jsxs)("div",{className:"creator-info",children:[Object(r.jsx)("div",{className:"creator",children:Object(r.jsxs)("div",{className:"creator-total",children:[Object(r.jsx)("h3",{className:"creator-name",children:c}),Object(r.jsxs)("p",{className:"total-followers",children:["Total Followers ",g?`${g}K`:f]})]})}),Object(r.jsxs)("div",{className:"contact",children:[Object(r.jsxs)("div",{className:"social-icons",children:[i&&Object(r.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(s.b,{})}),d&&Object(r.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(s.a,{})}),m&&Object(r.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(s.e,{})}),O&&Object(r.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(s.c,{})}),u&&Object(r.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(s.d,{})})]}),"logout"===sessionStorage.getItem("State")?Object(r.jsx)("button",{type:"button",className:"contact-btn",onClick:()=>alert("Please Login First!"),children:"Contact"}):Object(r.jsx)(a.default,{trigger:Object(r.jsx)("button",{className:"contact-btn",children:"Contact"}),modal:!0,position:"top center",children:e=>Object(r.jsx)(n.a,{email:o,name:c,close:e})})]})]})]})}},234:function(e,t,c){}}]);
//# sourceMappingURL=5.1f2659a3.chunk.js.map