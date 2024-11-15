(this.webpackJsonpthe_drag=this.webpackJsonpthe_drag||[]).push([[6],{216:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return r}));const n=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9;try{const a=await fetch(`https://thedrag.in/apis/v1/apis?page=${e}&limit=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(console.log(a),!a.data)throw new Error(`Error: ${a.status}`);return a}catch(a){return console.error("Error fetching user data:",a),null}},c=async e=>{let{page:t=1,limit:a=10,dealType:n=null,companyName:c=null}=e;try{const e=new URLSearchParams({page:(t||1).toString(),limit:(a||10).toString(),...null!==n&&{dealType:n.toString()},...null!==c&&{companyName:c.toString()}}).toString(),r=await fetch(`https://thedrag.in/apis/v1/apis/deals?${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!r.ok)throw new Error(`Error: ${r.status}`);return await r.json()}catch(r){return console.error("Error fetching deals data:",r),null}},r=async e=>{let{searchTerm:t,page:a=1,limit:n=9,filterdata:c={type:"",count:"",sort:"desc",location:"",platform:""}}=e;try{c||(c={type:"",count:"",sort:"desc",location:"",platform:""});const e=await fetch(`https://thedrag.in/apis/v1/apis/searchandfilter?page=${a}&limit=${n}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({search:t,type:c.type||"",location:c.location||"",platform:c.platform||"",count:c.count||"",sort:c.sort||"desc"})});if(!e.ok)throw new Error(`Error: ${e.status}`);return await e.json()}catch(r){return console.error("Error fetching search and filter data:",r),null}}},221:function(e,t,a){},231:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=(a(221),a(220)),s=a(16),l=a.n(s),o=a(216),i=a(222),d=a(1);l.a.config();const u=c.a.lazy((()=>a.e(5).then(a.bind(null,227)))),h=c.a.lazy((()=>Promise.resolve().then(a.bind(null,10)))),j=c.a.lazy((()=>a.e(8).then(a.bind(null,229)))),b=c.a.lazy((()=>a.e(7).then(a.bind(null,217))));l.a.config();t.default=()=>{const[e,t]=Object(n.useState)([]),[a,c]=Object(n.useState)(""),[s,l]=Object(n.useState)(1),[p,m]=Object(n.useState)(1),[O,g]=Object(n.useState)(!1),[f,x]=Object(n.useState)(!1),[y,v]=Object(n.useState)(null),N=Object(n.useCallback)(Object(i.debounce)((async(e,a,n)=>{g(!0);try{const c=await Object(o.b)({searchTerm:e,page:a,filterdata:n});c&&c.data?(t(c.data),m(c.totalPages||1)):t([])}catch(c){console.error("Error fetching data:",c)}finally{g(!1)}}),500),[]),w=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;g(!0);try{const a=await Object(o.c)(e);a&&(t(a.data),m(a.totalPages))}catch(a){console.error("Error fetching user data:",a)}finally{g(!1)}};Object(n.useEffect)((()=>{g(!0),w(s)}),[]);const S=e=>{v(e),N(a,1,e),l(1)};return Object(d.jsxs)("div",{className:"promotions-container "+(f?"blur-background":""),children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"h-deal",children:[Object(d.jsx)("h2",{children:"Creators"}),Object(d.jsx)(h,{contentStyle:{marginBottom:"5vh"},trigger:Object(d.jsx)("div",{className:"deal",children:Object(d.jsx)("p",{children:"Post a Deal"})}),modal:!0,closeOnDocumentClick:!1,onOpen:()=>x(!0),onClose:()=>x(!1),children:e=>Object(d.jsx)(b,{close:e})})]}),Object(d.jsxs)("div",{className:"searchfilter",children:[Object(d.jsx)("div",{className:"search",children:Object(d.jsx)("form",{onSubmit:e=>e.preventDefault(),children:Object(d.jsxs)("label",{htmlFor:"search",className:"field",children:[Object(d.jsx)(r.a,{className:"search-icon"}),Object(d.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"Search Creators",value:a,onChange:e=>{const t=e.target.value;c(t),N(t,1,y),l(1)}})]})})}),Object(d.jsxs)("div",{className:"all-filter",children:[Object(d.jsx)("div",{className:"all",onClick:()=>{w(1),l(1),v(null),c("")},children:Object(d.jsx)("p",{children:"ALL"})}),Object(d.jsx)(h,{trigger:Object(d.jsx)("div",{className:"filter",children:Object(d.jsx)("p",{children:"Filter"})}),modal:!0,onOpen:()=>x(!0),onClose:()=>x(!1),children:e=>Object(d.jsx)(j,{helper:S,loading:g,close:e})}),Object(d.jsx)(h,{contentStyle:{marginBottom:"5vh"},trigger:Object(d.jsx)("div",{className:"deal-h",children:Object(d.jsx)("p",{children:"Post Deal"})}),modal:!0,closeOnDocumentClick:!1,onOpen:()=>x(!0),onClose:()=>x(!1),children:e=>Object(d.jsx)(b,{close:e})})]})]})]}),Object(d.jsxs)("div",{className:"creators",children:[O?Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("div",{className:"loader"})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"creator-list",children:e&&e.length>0?e.map(((e,t)=>{if("true"===e.approved){var a;const n={name:e.userName,email:e.email,image:e.image,linkedinurl:e.socialMedia.linkedin.url,linkedincount:e.socialMedia.linkedin.count,instaurl:e.socialMedia.insta.url,instacount:e.socialMedia.insta.count,twitterurl:e.socialMedia.twitter.url,twittercount:e.socialMedia.twitter.count,facebookurl:e.socialMedia.facebook.url,facebookcount:null===(a=e.socialMedia.facebook)||void 0===a?void 0:a.count,youtubeurl:e.socialMedia.youtube.url,youtubecount:e.socialMedia.youtube.count};return Object(d.jsx)(u,{props:n},`${e.id}.${t}`)}return null})):Object(d.jsx)("p",{style:{color:"white",fontSize:"24px",textAlign:"center"},children:"No Creator Found"})})}),Object(d.jsxs)("div",{className:"pagination",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{disabled:1===s,onClick:()=>{s>1&&l(s-1),""===a?w(s-1):N(a,s-1,y)},className:"pagination-button",children:"Previous"}),Object(d.jsx)("button",{disabled:s===p,onClick:()=>{s<p&&(l(s+1),""===a?w(s+1):N(a,s+1,y))},className:"pagination-button",children:"Next"})]}),Object(d.jsx)("div",{className:"total",children:`Page ${s} of ${p}`})]})]})]})}}}]);
//# sourceMappingURL=6.df7e7d39.chunk.js.map