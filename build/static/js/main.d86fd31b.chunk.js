(this.webpackJsonpthe_drag=this.webpackJsonpthe_drag||[]).push([[1],{107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},114:function(e,t){},119:function(e,t){},121:function(e,t){},151:function(e,t){},153:function(e,t){},154:function(e,t){},159:function(e,t){},161:function(e,t){},181:function(e,t){},197:function(e,t){},200:function(e,t){},205:function(e,t,n){},206:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(99),l=n.n(c),o=(n(107),n(108),n(109),n.p+"static/media/logo.563ea112.png"),i=n(15),r=n(10),d=(n(110),n.p,n(16)),u=n.n(d),j=n(1);u.a.config();n(205);var b=n(22);n.p,n.p,n.p,n.p,n.p,n(57),n(58);u.a.config();var m=n(101),p=n(38);const h=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{horizontal:!1,vertical:!1};const a=await g(e),c=document.createElement("canvas"),l=c.getContext("2d");if(!l)return null;const o=O(n),{width:i,height:r}=function(e,t,n){const s=O(n);return{width:Math.abs(Math.cos(s)*e)+Math.abs(Math.sin(s)*t),height:Math.abs(Math.sin(s)*e)+Math.abs(Math.cos(s)*t)}}(a.width,a.height,n);c.width=i,c.height=r,l.translate(i/2,r/2),l.rotate(o),l.scale(s.horizontal?-1:1,s.vertical?-1:1),l.translate(-a.width/2,-a.height/2),l.drawImage(a,0,0);const d=document.createElement("canvas"),u=d.getContext("2d");return u?(d.width=t.width,d.height=t.height,u.drawImage(c,t.x,t.y,t.width,t.height,0,0,t.width,t.height),new Promise(((e,t)=>{d.toBlob((t=>{e(URL.createObjectURL(t))}),"image/jpeg")}))):null},g=e=>new Promise(((t,n)=>{const s=new Image;s.addEventListener("load",(()=>t(s))),s.addEventListener("error",(e=>n(e))),s.setAttribute("crossOrigin","anonymous"),s.src=e}));function O(e){return e*Math.PI/180}n(98);var x=n.p+"static/media/upload.8f065011.svg",v=n(31);var f=e=>{let{close:t}=e;const[n,a]=Object(s.useState)(null),[c,l]=Object(s.useState)({x:0,y:0}),[o,i]=Object(s.useState)(1),[d,u]=Object(s.useState)(null),[m,g]=Object(s.useState)(null),[O,f]=Object(s.useState)(""),[y,w]=Object(s.useState)(!0),N=Object(s.useRef)(null),[S,k]=Object(s.useState)(!1);const I=async e=>{if(e.preventDefault(),m)if(y){document.getElementById("register-btn").setAttribute("disabled","true");const s={type:document.getElementById("type").value,userName:document.getElementById("username").value,location:document.getElementById("location").value,phone:O,insta:document.getElementById("instaurl").value,instacount:document.getElementById("instacount").value,twitter:document.getElementById("twitterurl").value,twittercount:document.getElementById("twittercount").value,linkedin:document.getElementById("linkedinurl").value,linkedincount:document.getElementById("linkedincount").value,facebook:document.getElementById("facebookurl").value,facebookcount:document.getElementById("facebookcount").value,youtube:document.getElementById("youtubeurl").value,youtubecount:document.getElementById("youtubecount").value},a=new FormData;for(let e in s)a.append(e,s[e]);try{const n=await async function(e,t,n){const s=await fetch(e),a=await s.blob();return new File([a],t,{type:n})}(m,"profile-image.jpg","image/jpeg");a.append("profileImage",n),fetch(e.target.action,{method:"post",body:a,credentials:"include"}).then((e=>e.json())).then((e=>{document.getElementById("register-btn").removeAttribute("disabled"),e.success?(sessionStorage.setItem("creator",e.creator.approved),alert(e.message),t()):alert(e.error)}))}catch(n){console.error("Error converting blob URL to file:",n),alert("Failed to upload image.")}}else alert("Mobile Number is Invalid or Image Size Exceeds 1MB");else y?alert("Please upload an image."):alert("Mobile Number is Invalid")};return Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("h2",{children:"Register"}),Object(j.jsxs)("form",{action:"https://thedrag.in/apis/v1/apis/register",encType:"multipart/form-data",method:"post",onSubmit:e=>{I(e)},className:"reg-form",children:[Object(j.jsxs)("div",{className:"top-form",children:[Object(j.jsxs)("div",{className:"top-left-form",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{type:"text",id:"username",placeholder:"Username",required:!0})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Type"}),Object(j.jsx)("select",{id:"type",required:!0,children:b.a.map((e=>Object(j.jsx)("option",{value:e,children:e})))})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Location"}),Object(j.jsx)("input",{type:"text",id:"location",placeholder:"Enter location"})]})]}),Object(j.jsxs)("div",{className:"profile-picture-section",children:[Object(j.jsx)("input",{type:"file",onChange:e=>{const t=e.target.files[0];t&&(a(URL.createObjectURL(t)),k(!0))},ref:N,required:!0,style:{display:"none"}}),Object(j.jsx)("label",{children:"Profile Picture"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:m||x,alt:"upload_image",className:"preview",onClick:()=>{N.current.click()}}),Object(j.jsx)(r.default,{open:S,modal:!0,closeOnDocumentClick:!1,onClose:()=>k(!1),children:Object(j.jsx)("div",{className:"crop-container",children:n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p.a,{image:n,crop:c,zoom:o,aspect:1.625,onCropChange:e=>{l(e)},onZoomChange:e=>{i(e)},onCropComplete:(e,t)=>{u(t)}}),Object(j.jsx)("button",{type:"button",onClick:async()=>{if(!d)return;const e=await h(n,d);g(e),k(!1)},children:"Crop & Save"})]}):Object(j.jsx)("p",{children:"Please select an image to crop."})})})]})]})]}),Object(j.jsxs)("div",{className:"bottom-form",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Phone"}),Object(j.jsx)("input",{type:"tel",value:O,onChange:e=>{const t=e.target.value;if(f(t),10===t.length){w(/^[1-9][0-9]*$/.test(t))}else w(0===t.length)},placeholder:"Phone",required:!0}),!y&&Object(j.jsx)("span",{className:"error",children:"Invalid phone number"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Instagrma"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"url",id:"instaurl",placeholder:"Link"}),Object(j.jsx)("input",{type:"text",id:"instacount",placeholder:"Number of Followers"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"youtube"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"url",id:"youtubeurl",placeholder:"Link"}),Object(j.jsx)("input",{type:"text",id:"youtubecount",placeholder:"Number of Followers"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Facebook"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"url",id:"facebookurl",placeholder:"Link"}),Object(j.jsx)("input",{type:"text",id:"facebookcount",placeholder:"Number of Followers"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"LinkedIn"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"url",id:"linkedinurl",placeholder:"Link"}),Object(j.jsx)("input",{type:"text",id:"linkedincount",placeholder:"Number of Followers"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Twitter"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"url",id:"twitterurl",placeholder:"Link"}),Object(j.jsx)("input",{type:"text",id:"twittercount",placeholder:"Number of Followers"})]})]})]}),Object(j.jsx)("button",{id:"register-btn",className:"submit-button",type:"submit",children:"Done"})]}),Object(j.jsx)(v.a,{className:"close",onClick:t})]})};var y=e=>{let{close:t}=e;const[n,a]=Object(s.useState)(null),[c,l]=Object(s.useState)({x:0,y:0}),[o,i]=Object(s.useState)(1),[d,u]=Object(s.useState)(null),[m,g]=Object(s.useState)(null),[O,f]=Object(s.useState)(""),[y,w]=Object(s.useState)(!0),N=Object(s.useRef)(null),[S,k]=Object(s.useState)(!1);const I=async e=>{if(e.preventDefault(),m)if(y){document.getElementById("register-btn").setAttribute("disabled","true");const s={type:document.getElementById("type").value,userName:document.getElementById("username").value,location:document.getElementById("location").value,phone:O,insta:document.getElementById("instaurl").value,instacount:document.getElementById("instacount").value,twitter:document.getElementById("twitterurl").value,twittercount:document.getElementById("twittercount").value,linkedin:document.getElementById("linkedinurl").value,linkedincount:document.getElementById("linkedincount").value,facebook:document.getElementById("facebookurl").value,facebookcount:document.getElementById("facebookcount").value,youtube:document.getElementById("youtubeurl").value,youtubecount:document.getElementById("youtubecount").value},a=new FormData;for(let e in s)a.append(e,s[e]);try{const n=await async function(e,t,n){const s=await fetch(e),a=await s.blob();return new File([a],t,{type:n})}(m,"profile-image.jpg","image/jpeg");a.append("profileImage",n),fetch(e.target.action,{method:"post",body:a,credentials:"include"}).then((e=>e.json())).then((e=>{document.getElementById("register-btn").removeAttribute("disabled"),e.success?(sessionStorage.setItem("creator",!0),alert(e.message),t()):(alert(e.error),document.getElementById("update-btn").removeAttribute("disabled"))}))}catch(n){console.error("Error converting blob URL to file:",n),alert("Failed to upload image.")}}else alert("Mobile Number is Invalid or Image Size Exceeds 1MB");else y?alert("Please upload an image."):alert("Mobile Number is Invalid")};return Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("h2",{children:"Edit Creator Details"}),Object(j.jsxs)("form",{action:"https://thedrag.in/apis/v1/apis/edit",encType:"multipart/form-data",method:"post",onSubmit:e=>{I(e)},className:"reg-form",children:[Object(j.jsxs)("div",{className:"top-form",children:[Object(j.jsxs)("div",{className:"top-left-form",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{type:"text",id:"username",placeholder:"Username"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Type"}),Object(j.jsx)("select",{id:"type",children:b.a.map((e=>Object(j.jsx)("option",{value:e,children:e})))})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Location"}),Object(j.jsx)("input",{type:"text",id:"location",placeholder:"Enter location"})]})]}),Object(j.jsxs)("div",{className:"profile-picture-section",children:[Object(j.jsx)("input",{type:"file",onChange:e=>{const t=e.target.files[0];t&&(a(URL.createObjectURL(t)),k(!0))},ref:N,style:{display:"none"}}),Object(j.jsx)("label",{children:"Profile Picture"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:m||x,alt:"upload_image",className:"preview",onClick:()=>{N.current.click()}}),Object(j.jsx)(r.default,{open:S,modal:!0,closeOnDocumentClick:!1,onClose:()=>k(!1),children:Object(j.jsx)("div",{className:"crop-container",children:n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p.a,{image:n,crop:c,zoom:o,aspect:1.625,onCropChange:e=>{l(e)},onZoomChange:e=>{i(e)},onCropComplete:(e,t)=>{u(t)}}),Object(j.jsx)("button",{type:"button",onClick:async()=>{if(!d)return;const e=await h(n,d);g(e),k(!1)},children:"Crop & Save"})]}):Object(j.jsx)("p",{children:"Please select an image to crop."})})})]})]})]}),Object(j.jsxs)("div",{className:"bottom-form",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Phone"}),Object(j.jsx)("input",{type:"tel",value:O,onChange:e=>{const t=e.target.value;if(f(t),10===t.length){w(/^[1-9][0-9]*$/.test(t))}else w(0===t.length)},placeholder:"Phone"}),!y&&Object(j.jsx)("span",{className:"error",children:"Invalid phone number"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Instagrma"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"url",id:"instaurl",placeholder:"Link"}),Object(j.jsx)("input",{type:"text",id:"instacount",placeholder:"Number of Followers"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"youtube"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"url",id:"youtubeurl",placeholder:"Link"}),Object(j.jsx)("input",{type:"text",id:"youtubecount",placeholder:"Number of Followers"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Facebook"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"url",id:"facebookurl",placeholder:"Link"}),Object(j.jsx)("input",{type:"text",id:"facebookcount",placeholder:"Number of Followers"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"LinkedIn"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"url",id:"linkedinurl",placeholder:"Link"}),Object(j.jsx)("input",{type:"text",id:"linkedincount",placeholder:"Number of Followers"})]})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Twitter"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"url",id:"twitterurl",placeholder:"Link"}),Object(j.jsx)("input",{type:"text",id:"twittercount",placeholder:"Number of Followers"})]})]})]}),Object(j.jsx)("button",{id:"register-btn",className:"submit-button",type:"submit",children:"Done"})]}),Object(j.jsx)(v.a,{className:"close",onClick:t})]})};n(211);const w=e=>{let{setResponse:t}=e;const[n,a]=Object(s.useState)(!1),[c,l]=Object(s.useState)(""),[o,i]=Object(s.useState)("signup"),[r,d]=Object(s.useState)(!1),[u,b]=Object(s.useState)(""),[m,p]=Object(s.useState)(!1),[h,g]=Object(s.useState)(""),[O,x]=Object(s.useState)(!1),[v,f]=Object(s.useState)(""),[y,w]=Object(s.useState)(!1),[N,S]=Object(s.useState)(""),[k,I]=Object(s.useState)(!1),[C,E]=Object(s.useState)(!1);Object(s.useEffect)((()=>{const e=document.getElementById("password");r?e.setAttribute("type","text"):e.setAttribute("type","password")}),[r]);return Object(j.jsxs)("section",{className:"auth-wrapper "+(n?"auth-active":""),children:[Object(j.jsxs)("div",{className:"auth-form auth-signup",children:[Object(j.jsx)("header",{onClick:()=>a(!1),children:"Signup"}),Object(j.jsxs)("form",{onSubmit:e=>(async e=>{if(e.preventDefault(),m&&y){const e={name:c,email:v,password:u,isChecked:k};console.log("formdata",e),await fetch("https://thedrag.in/apis/v1/apis/signup",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e),credentials:"include"}).then((e=>e.json())).then((e=>{e.success?(sessionStorage.setItem("State","login"),t(e.iscreator,sessionStorage.getItem("State")),sessionStorage.setItem("creator",e.iscreator),sessionStorage.setItem("email",e.email),alert("Sign Up Sucessfull!"),window.location.reload()):alert(e.error)}))}else y?alert("Password is Invalid"):m?alert("Email is Invalid"):alert("Password and Email are Invalid")})(e),children:[Object(j.jsx)("input",{type:"text",placeholder:"Full name",required:!0,name:"name",id:"name",value:c,onChange:e=>l(e.target.value)}),Object(j.jsx)("input",{placeholder:"Email address",type:"email",name:"email",id:"email",value:v,onInput:e=>{(e=>{const t=e.target.value;f(t),(e=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e))(t)?(w(!0),S("")):(w(!1),S("Please enter a valid email address"))})(e)},required:!0}),Object(j.jsx)("div",{style:{fontSize:"12px",color:y?"green":"red"},children:y?"Email is valid":N}),Object(j.jsx)("div",{className:"password",children:Object(j.jsx)("input",{type:"password",placeholder:"Password",id:"password",value:u,onClick:e=>(e=>{0!=e.target.value.length||O||(alert("Password Should include:\n        * Password must be at least 8 characters long.\n        * Password must contain at least one special character.\n        * Password must contain at least one uppercase letter.\n        * Password must contain at least one lowercase letter.\n        * Password must contain at least one number."),x(!0))})(e),onChange:e=>{const t=e.target.value;b(t);const n=(e=>e.length<8?"Password must be at least 8 characters long":/[!@#$%^&*(),.?":{}|<>]/.test(e)?/[A-Z]/.test(e)?/[a-z]/.test(e)?/[0-9]/.test(e)?"":"Password must contain at least one number":"Password must contain at least one lowercase letter":"Password must contain at least one uppercase letter":"Password must contain at least one special character")(t);g(n),p(!n)},required:!0})}),Object(j.jsx)("div",{style:{fontSize:"12px",color:m?"green":"red"},children:m?"Password is valid":h}),Object(j.jsxs)("div",{className:"auth-checkbox",children:[Object(j.jsx)("input",{type:"checkbox",id:"auth-signupCheck",onChange:()=>{I(!k)}}),Object(j.jsx)("label",{htmlFor:"auth-signupCheck",children:"Signup as a Brand"})]}),Object(j.jsx)("input",{type:"submit",value:"Signup"})]})]}),Object(j.jsxs)("div",{className:"auth-form auth-login",children:[Object(j.jsx)("header",{onClick:()=>a(!0),children:"Login"}),Object(j.jsxs)("form",{onSubmit:e=>{(async()=>{const e={email:document.getElementById("email").value,password:document.getElementById("password").value};await fetch("https://thedrag.in/apis/v1/apis/login",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((e=>(console.log(e),e.json()))).then((e=>{console.log("login response",e),e.success?(alert("You are Successfully Logged In"),sessionStorage.setItem("State","login"),console.log(e.iscreator),t(e.iscreator,sessionStorage.getItem("State")),sessionStorage.setItem("creator",e.iscreator),sessionStorage.setItem("email",e.email),window.location.reload()):alert(e.error)}))})(),e.preventDefault()},children:[Object(j.jsx)("input",{placeholder:"Email address",required:!0,type:"email",name:"email",id:"email",value:v,onChange:e=>f(e.target.value)}),Object(j.jsx)("input",{type:"password",placeholder:"Password",required:!0,name:"password",id:"password",value:u,onChange:e=>b(e.target.value)}),Object(j.jsx)("input",{type:"submit",value:"Login"})]})]})]})};u.a.config();var N=e=>{let{SetBlur:t}=e;const[n,a]=Object(s.useState)(sessionStorage.getItem("State")),[c,l]=Object(s.useState)(sessionStorage.getItem("creator")),[d,u]=Object(s.useState)(!1),[b,p]=Object(s.useState)(!1),h=()=>{u(!d)},g=(e,t)=>{l(e),a(t)},O=()=>{fetch("https://thedrag.in/apis/v1/apis/logout",{method:"post",credentials:"include"}).then((e=>e.json())).then((e=>{sessionStorage.setItem("State","logout"),sessionStorage.removeItem("creator"),sessionStorage.removeItem("email"),alert(e.message),a(sessionStorage.getItem("State")),window.location.reload()}))};return Object(j.jsx)("div",{className:"nav-container "+(b?"blurred":""),children:Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("div",{className:"nav",children:Object(j.jsxs)("div",{className:"nav-links",children:[Object(j.jsx)(i.b,{to:"/",className:"nav-logo-container",children:Object(j.jsx)("img",{src:o,alt:"Logo",className:"nav-logo"})}),Object(j.jsx)(i.b,{to:"/creators",className:"nav-link",children:"Creators"}),Object(j.jsx)(i.b,{to:"/deals",className:"nav-link",children:"Deals"})]})}),Object(j.jsxs)("div",{className:"nav-icons-list",children:["login"===n?"true"===c?Object(j.jsx)(r.default,{trigger:Object(j.jsx)("button",{type:"button",className:"nav-btn",children:"Update Creator Id"}),closeOnDocumentClick:!1,onOpen:()=>t(!0),onClose:()=>t(!1),modal:!0,children:e=>Object(j.jsx)(y,{close:e})}):"false"===c?Object(j.jsx)(r.default,{trigger:Object(j.jsx)("button",{type:"button",className:"nav-btn",children:"Register as Creator"}),closeOnDocumentClick:!1,modal:!0,onOpen:()=>t(!0),onClose:()=>t(!1),nested:!0,children:e=>Object(j.jsx)(f,{close:e})}):Object(j.jsx)("button",{type:"button",className:"nav-btn",children:"Waiting for Approval"}):Object(j.jsx)(j.Fragment,{}),"login"!==n?Object(j.jsx)(r.default,{className:"login-popup",trigger:Object(j.jsx)("button",{type:"button",className:"nav-btn",children:"Sign Up/ Login"}),modal:!0,onOpen:()=>t(!0),onClose:()=>t(!1),children:e=>Object(j.jsx)(w,{setResponse:g})}):Object(j.jsx)("button",{type:"button",className:"nav-btn",onClick:O,children:"Log Out"})]}),Object(j.jsx)("div",{onClick:h,className:"hamburger-icon",children:Object(j.jsx)(m.a,{size:24})}),Object(j.jsxs)("div",{className:"sidebar "+(d?"open":""),children:[Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{to:"/",className:"nav-logo-container",children:Object(j.jsx)("img",{src:o,alt:"Logo",className:"nav-logo"})})}),Object(j.jsxs)("div",{className:"hamburger-links",children:[Object(j.jsx)(i.b,{to:"/creators",className:"hamburger-link",onClick:h,children:"Creators"}),Object(j.jsx)(i.b,{to:"/deals",className:"hamburger-link",onClick:h,children:"Deals"}),"login"===n?"true"===c?Object(j.jsx)(r.default,{trigger:Object(j.jsx)("p",{type:"button",className:"hamburger-link",onClick:h,children:"Update Creator Id"}),closeOnDocumentClick:!1,onOpen:()=>t(!0),onClose:()=>t(!1),modal:!0,children:e=>Object(j.jsx)(y,{close:e})}):"false"===c?Object(j.jsx)(r.default,{trigger:Object(j.jsx)("p",{type:"button",className:"hamburger-link",onClick:h,children:"Register as Creator"}),closeOnDocumentClick:!1,onOpen:()=>t(!0),onClose:()=>t(!1),modal:!0,nested:!0,children:e=>Object(j.jsx)(f,{close:e})}):Object(j.jsx)("p",{type:"button",className:"hamburger-link",children:"Waiting for Approval"}):Object(j.jsx)(j.Fragment,{}),"login"!==n?Object(j.jsx)(r.default,{className:"login-popup",trigger:Object(j.jsx)("p",{type:"button",className:"hamburger-link",children:"Sign Up/ Login"}),modal:!0,onOpen:()=>t(!0),onClose:()=>t(!1),children:e=>Object(j.jsx)(w,{setResponse:g})}):Object(j.jsx)("p",{type:"button",className:"hamburger-link",onClick:()=>{O(),h()},children:"Log Out"})]})]})]})})},S=(n(212),n(30));var k=()=>Object(j.jsxs)("div",{className:"footer-container",children:[Object(j.jsxs)("div",{className:"footer-upper",children:[Object(j.jsxs)("div",{className:"handle",children:[Object(j.jsx)("a",{href:"https://www.instagram.com/thedrag.club/",children:Object(j.jsx)(S.b,{className:"handle"})}),Object(j.jsx)("a",{href:"",children:Object(j.jsx)(S.a,{className:"handle"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/company/thedrag/",children:Object(j.jsx)(S.c,{className:"handle"})}),Object(j.jsx)("a",{href:"",children:Object(j.jsx)(S.e,{className:"handle"})})]}),Object(j.jsx)("p",{children:"DRAG"})]}),Object(j.jsx)("div",{className:"query",style:{margin:"20px auto",display:"flex",justifyContent:"center",fontFamily:"poppins",fontSize:"20px",color:"#FAFAFA",fontWeight:"500"},children:Object(j.jsx)("p",{style:{textAlign:"center"},children:"Queries: info@thedrag.in"})})]}),I=n(4);const C=Object(s.lazy)((()=>Promise.all([n.e(0),n.e(9),n.e(6)]).then(n.bind(null,237)))),E=Object(s.lazy)((()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,239))));var B=function(){const[e,t]=Object(s.useState)(!1);return Object(j.jsxs)("div",{className:"container "+(e?"background":""),children:[console.log("https://thedrag.in/apis/"),Object(j.jsxs)(i.a,{children:[Object(j.jsx)(N,{SetBlur:t}),Object(j.jsx)(s.Suspense,{fallback:Object(j.jsx)("div",{className:"loading",children:Object(j.jsx)("div",{className:"loader"})}),children:Object(j.jsxs)(I.c,{children:[Object(j.jsx)(I.a,{path:"/",element:Object(j.jsx)(C,{SetBlur:t})}),Object(j.jsx)(I.a,{path:"/creators",element:Object(j.jsx)(C,{SetBlur:t})}),Object(j.jsx)(I.a,{path:"/deals",element:Object(j.jsx)(E,{SetBlur:t})})]})}),Object(j.jsx)(k,{})]})]})};var P=Object(s.createContext)();u.a.config();const L=l.a.createRoot(document.getElementById("root"));null==sessionStorage.getItem("State")&&sessionStorage.setItem("State","logout"),L.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(P.Provider,{value:{},children:Object(j.jsx)(B,{})})}))},22:function(e,t,n){"use strict";t.a=["Life Style","Food Blogger","Travel","Gaming","Beauty Influencer","Fashion","Fitness","Tech & Gadgets","Health & Wellness","Finance & Investing","Parenting","Education & Learning","DIY & Crafts","Art & Illustration","Music and Dance","Photography","Home Decor","Comedy","Entertainment","Motivational","Self-Help","Books & Literature","Pet Care & Training","Automotive & Vehicles","Sports","Fitness Training","Movie & TV Reviews","Gaming Commentary & Walkthroughs","Product Reviews & Unboxing","Sustainability","Eco-friendly Living","Mindfulness and Meditation","Outdoor and Adventure","Luxury Lifestyle","Event Planning","Career","Productivity","Spirituality","Film-making","Vlogging","Virtual Reality & Augmented Reality","Streetwear","Sneakers","Home Renovation & Improvement","Men\u2019s Grooming","Tattoo Art and Body Modification","Relationship Advice","Social Commentary and Political Analysis","Photography Tutorials","Interior Design","Food Challenges","Language Learning","Minimalist Lifestyle","Cryptocurrency and Blockchain","Fashion Design","Mental Health Awareness","Digital Marketing","Business Growth"]},57:function(e,t,n){"use strict";t.a=n.p+"static/media/close_icon.82ebf0e6.svg"},58:function(e,t,n){"use strict";n(2),n(206);var s=n(1);t.a=e=>{let{entries:t,input:n=null,category:a,setinput:c=null,Input:l=null,func:o=null}=e;const i=(e,t)=>{"location"===a?n(e):c(e,t)};return Object(s.jsx)("div",{className:"dropdown",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:Object(s.jsx)("ul",{children:t.map(((e,t)=>Object(s.jsx)("li",{children:"location"===a?Object(s.jsx)("div",{onClick:()=>i(e,!0),children:e}):Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",name:e,id:t,checked:l.includes(e),onChange:t=>i(e,t.target.checked)}),Object(s.jsx)("p",{children:" "+e})]})},t)))})})}},98:function(e,t,n){}},[[213,2,3]]]);
//# sourceMappingURL=main.d86fd31b.chunk.js.map