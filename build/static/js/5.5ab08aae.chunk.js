(this.webpackJsonpthe_drag=this.webpackJsonpthe_drag||[]).push([[5],{221:function(e,t,a){"use strict";a(2),a(225),a(61);var c=a(17),r=a.n(c);a(1);r.a.config()},222:function(e,t,a){"use strict";a(2),a(226),a(61);var c=a(17),r=a.n(c),n=a(35),s=a(1);r.a.config();t.a=e=>{let{email:t,name:a,close:c}=e;return Object(s.jsxs)("div",{className:"contact-container",children:[Object(s.jsxs)("div",{className:"email",children:[Object(s.jsx)("p",{children:"To:"}),Object(s.jsx)("p",{className:"email-main",children:`${a}`})]}),Object(s.jsxs)("form",{className:"contact-form",action:"https://thedrag.in/apis/v1/apis/contact",method:"post",encType:"multipart/form-data",onSubmit:e=>{(async e=>{document.getElementById("email-btn").setAttribute("disabled","true"),e.preventDefault();const a={subject:document.getElementById("subject").value,body:document.getElementById("body").value,attachment:document.getElementById("attachment").files[0],creatormail:t},c=new FormData;for(let t in a)c.append(t,a[t]);await fetch(e.target.action,{method:"post",body:c,credentials:"include"}).then((e=>e.json())).then((e=>{e.success?(alert(e.message),window.location.reload()):(alert(e.error||e.message),window.location.reload())}))})(e)},children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"subject",children:"Subject:"}),Object(s.jsx)("input",{type:"text",id:"subject",name:"subject",placeholder:"Enter the subject",className:"contact-input"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"body",children:"Message:"}),Object(s.jsx)("textarea",{id:"body",name:"body",placeholder:"Write your message here...",rows:"5"})]}),Object(s.jsxs)("div",{className:"form-group attachment",children:[Object(s.jsx)("p",{children:"Attachment:"}),Object(s.jsx)("label",{htmlFor:"attachment",className:"file-label",children:"Upload Your Files Here"}),Object(s.jsx)("input",{type:"file",name:"attachment",id:"attachment",className:"contact-file"})]}),Object(s.jsx)("button",{type:"submit",id:"email-btn",children:"SEND"})]}),Object(s.jsx)("div",{className:"close-icon",children:Object(s.jsx)(n.a,{onClick:c,fontSize:24})})]})}},225:function(e,t,a){},226:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);a(2),a(235);var c=a(12),r=(a(221),a(33)),n=a(222),s=a(1);t.default=e=>{let{props:t,selectedFilter:a,setIsBlurred:o}=e;const{name:l,image:i,email:j,instaurl:d,instacount:b,facebookurl:m,facebookcount:h,youtubeurl:u,youtubecount:f,twitterurl:x,twittercount:p,linkedinurl:O,linkedincount:g}=t,N=b+h+f+p+g,w=Math.floor(N/1e3),y=Math.floor(b/1e3),v=Math.floor(h/1e3),k=Math.floor(f/1e3),F=Math.floor(p/1e3),$=Math.floor(g/1e3);return Object(s.jsxs)("div",{className:"creator-card",children:[Object(s.jsx)("img",{src:i,alt:l,className:"creator-image"}),Object(s.jsxs)("div",{className:"creator-info",children:[Object(s.jsx)("div",{className:"creator",children:Object(s.jsxs)("div",{className:"creator-total",children:[Object(s.jsx)("h3",{className:"creator-name",children:l}),Object(s.jsx)("p",{className:"total-followers",children:"all"===a||""===a?`Total Followers ${w?`${w}K`:N}`:"insta"===a?`Instagram Followers ${y?`${y}K`:b}`:"linkedin"===a?`LinkedIn Followers ${$?`${$}K`:g}`:"facebook"===a?`Facebook Followers ${v?`${v}K`:h}`:"twitter"===a?`Twitter Followers ${F?`${F}K`:p}`:"youtube"===a?`YouTube Followers ${k?`${k}K`:f}`:null})]})}),Object(s.jsxs)("div",{className:"contact",children:[Object(s.jsxs)("div",{className:"social-icons",children:[d&&Object(s.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)(r.b,{})}),m&&Object(s.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)(r.a,{})}),u&&Object(s.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)(r.e,{})}),O&&Object(s.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)(r.c,{})}),x&&Object(s.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)(r.d,{})})]}),"logout"===sessionStorage.getItem("State")?Object(s.jsx)("button",{type:"button",className:"contact-btn",onClick:()=>alert("Please Login First!"),children:"Contact"}):Object(s.jsx)(c.default,{trigger:Object(s.jsx)("button",{className:"contact-btn",children:"Contact"}),modal:!0,onOpen:()=>o(!0),onClose:()=>o(!1),position:"top center",children:e=>Object(s.jsx)(n.a,{email:j,name:l,close:e})})]})]})]})}},235:function(e,t,a){}}]);
//# sourceMappingURL=5.5ab08aae.chunk.js.map