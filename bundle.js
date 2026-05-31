const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/About-CmmIe_3F.js","assets/js/vendor-cbZc9Uze.js","assets/js/vendor-ui-Bf1prFm1.js","assets/css/vendor-ui-DrRzsxAO.css","assets/js/Services-DuOCP_eH.js","assets/js/Training-BHNAX3kw.js","assets/js/Projects-BHMFmq82.js","assets/js/Testimonials-AL88eyzK.js","assets/js/Contact-J1EIyxnr.js","assets/js/Shop-DBzWyfGm.js","assets/js/NotFound-MZPile4s.js"])))=>i.map(i=>d[i]);
import{r as n,j as e,x as $,y as T,z as N,L as M,A as C,H as O,C as D,D as Y,F,O as q,G as V,a as B,I as U}from"./vendor-cbZc9Uze.js";import{M as I,S as H}from"./vendor-ui-Bf1prFm1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const t of c.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();const W="modulepreload",G=function(o){return"/"+o},E={},w=function(r,a,i){let s=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),l=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));s=Promise.allSettled(a.map(p=>{if(p=G(p),p in E)return;E[p]=!0;const b=p.endsWith(".css"),g=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const h=document.createElement("link");if(h.rel=b?"stylesheet":W,b||(h.as="script"),h.crossOrigin="",h.href=p,l&&h.setAttribute("nonce",l),document.head.appendChild(h),b)return new Promise((m,u)=>{h.addEventListener("load",m),h.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(t){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=t,window.dispatchEvent(l),!l.defaultPrevented)throw t}return s.then(t=>{for(const l of t||[])l.status==="rejected"&&c(l.reason);return r().catch(c)})},_=({show:o,handleClose:r})=>{var S;const[a,i]=n.useState(1),[s,c]=n.useState(!1),[t,l]=n.useState({firstName:"",lastName:"",phone:"",email:"",service:"",serviceCategory:"",isStudent:"",school:"",yearLevel:"",message:""}),[p,b]=n.useState({}),[g,h]=n.useState(!1),m="service_e4r2g6e",u="template_xka3g6d",v="eCr5RqmrbAyr7vP0X",y={firstName:"",lastName:"",phone:"",email:"",service:"",serviceCategory:"",isStudent:"",school:"",yearLevel:"",message:""},x={dev:["Web Portfolio","E-commerce","Management System","Mobile App"],training:["Web Development","UI/UX Design","Database Management","Python Basics","Computer Skills"],support:["Hardware Repair","Software Installation","Network Setup","OS Maintenance"],consulting:["Project Planning","Tech Audit","Digital Strategy"]},j=()=>{l(y),i(1),c(!1),b({}),r()},z=d=>{const f={};return d===1&&(t.firstName.trim()||(f.firstName=!0),t.email.includes("@")||(f.email=!0),t.phone.trim()||(f.phone=!0)),d===2&&(t.service||(f.service=!0),t.service&&!t.serviceCategory&&(f.serviceCategory=!0),t.isStudent||(f.isStudent=!0)),b(f),Object.keys(f).length===0},k=async d=>{if(!t.message.trim()){b({message:!0});return}h(!0);const f=t.isStudent==="yes"?`Student at ${t.school} (Year: ${t.yearLevel})`:"Professional / Non-Student",R=`*🚀 NEW SERVICE REQUEST*%0A━━━━━━━━━━━━━━━━━━%0A*👤 Name:* ${t.firstName} ${t.lastName}%0A*📧 Email:* ${t.email}%0A*📞 Phone:* ${t.phone}%0A*🛠 Service:* ${t.service} - ${t.serviceCategory}%0A*🎓 Status:* ${f}%0A*📝 Details:* ${t.message}`,L="250791767725",A={name:`${t.firstName} ${t.lastName}`,email:t.email,phone:t.phone,service:`${t.service} - ${t.serviceCategory}`,status:f,message:t.message};try{d==="email"?(await $.send(m,u,A,v),h(!1),c(!0)):(window.open(`https://wa.me/${L}?text=${R}`,"_blank"),h(!1),j())}catch(P){console.error("Submission Error:",P),alert("Error sending request. Please check your connection and try again."),h(!1)}};return e.jsxs(I,{show:o,onHide:j,size:"lg",centered:!0,className:"service-modal p-0",children:[e.jsx(I.Body,{className:"p-0 rounded-5 overflow-hidden border-0 shadow-lg bg-white",children:e.jsxs("div",{className:"row g-0",children:[e.jsxs("div",{className:"col-lg-4 bg-dark p-5 text-white d-none d-lg-flex flex-column justify-content-between",children:[e.jsxs("div",{className:"brand-section",children:[e.jsx("div",{className:"mb-4 bg-white p-2 d-inline-block rounded-3",children:e.jsx("img",{src:"images/logo.webp",alt:"Logo",style:{width:"60px",height:"60px",objectFit:"contain"}})}),e.jsx("h3",{className:"fw-bold mb-3",children:"InfinityMura"}),e.jsx("p",{className:"small opacity-75",children:"Scale your vision with premium software and technical training."})]}),e.jsxs("div",{className:"features-list small opacity-50",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("i",{className:"bi bi-shield-check me-2"})," Verified Service"]}),e.jsxs("div",{children:[e.jsx("i",{className:"bi bi-lightning me-2"})," Fast Turnaround"]})]})]}),e.jsxs("div",{className:"col-lg-8 p-4 p-md-5 position-relative",children:[s&&e.jsxs("div",{className:"success-overlay d-flex flex-column align-items-center justify-content-center text-center p-4",children:[e.jsx("div",{className:"checkmark-circle mb-3",children:e.jsx("i",{className:"bi bi-check-lg text-white fs-1"})}),e.jsx("h4",{className:"fw-bold",children:"Request Sent!"}),e.jsx("p",{className:"text-muted",children:"I have received your official request and will respond to your email shortly."}),e.jsx("button",{className:"btn btn-orange rounded-pill px-5 mt-3 shadow",onClick:j,children:"Close"})]}),e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[e.jsxs("div",{className:"d-lg-none d-flex align-items-center gap-2",children:[e.jsx("img",{src:"images/logo.webp",alt:"Logo",style:{width:"30px",height:"30px"}}),e.jsx("span",{className:"fw-bold text-orange small",children:"InfinityMura"})]}),e.jsx("div",{className:"step-dots d-flex gap-2 ms-auto me-3",children:[1,2,3].map(d=>e.jsx("div",{className:`dot ${a>=d?"active":""}`},d))}),e.jsx("button",{onClick:j,className:"btn-close shadow-none"})]}),e.jsxs("div",{className:"form-content",style:{minHeight:"340px"},children:[a===1&&e.jsxs("div",{className:"animate-in",children:[e.jsx("h4",{className:"fw-bold mb-1",children:"Basic Info"}),e.jsx("p",{className:"text-muted small mb-4",children:"Provide your contact details so I can reach you."}),e.jsxs("div",{className:"row g-3",children:[e.jsx("div",{className:"col-6",children:e.jsx("input",{className:`form-control-custom ${p.firstName?"err":""}`,placeholder:"First Name",value:t.firstName,onChange:d=>l({...t,firstName:d.target.value})})}),e.jsx("div",{className:"col-6",children:e.jsx("input",{className:"form-control-custom",placeholder:"Last Name",value:t.lastName,onChange:d=>l({...t,lastName:d.target.value})})}),e.jsx("div",{className:"col-12",children:e.jsx("input",{className:`form-control-custom ${p.email?"err":""}`,type:"email",placeholder:"Email Address",value:t.email,onChange:d=>l({...t,email:d.target.value})})}),e.jsx("div",{className:"col-12",children:e.jsx("input",{className:`form-control-custom ${p.phone?"err":""}`,placeholder:"Phone Number",value:t.phone,onChange:d=>l({...t,phone:d.target.value})})})]})]}),a===2&&e.jsxs("div",{className:"animate-in",children:[e.jsx("h4",{className:"fw-bold mb-1",children:"Select Service"}),e.jsx("p",{className:"text-muted small mb-4",children:"Choose the category that fits your needs."}),e.jsxs("select",{className:`form-select-custom mb-3 ${p.service?"err":""}`,value:t.service,onChange:d=>l({...t,service:d.target.value,serviceCategory:""}),children:[e.jsx("option",{value:"",children:"Select Service..."}),e.jsx("option",{value:"dev",children:"Software Development"}),e.jsx("option",{value:"training",children:"Training & Coaching"}),e.jsx("option",{value:"support",children:"IT Support"}),e.jsx("option",{value:"consulting",children:"IT Consulting"})]}),t.service&&e.jsxs("select",{className:"form-select-custom mb-4",value:t.serviceCategory,onChange:d=>l({...t,serviceCategory:d.target.value}),children:[e.jsx("option",{value:"",children:"Specific Category..."}),(S=x[t.service])==null?void 0:S.map(d=>e.jsx("option",{value:d,children:d},d))]}),e.jsx("label",{className:"x-small-label mb-2",children:"ARE YOU A STUDENT?"}),e.jsxs("div",{className:"d-flex gap-2 mb-4",children:[e.jsx("button",{className:`status-btn flex-fill ${t.isStudent==="yes"?"active":""}`,onClick:()=>l({...t,isStudent:"yes"}),children:"Yes"}),e.jsx("button",{className:`status-btn flex-fill ${t.isStudent==="no"?"active":""}`,onClick:()=>l({...t,isStudent:"no"}),children:"No"})]}),t.isStudent==="yes"&&e.jsxs("div",{className:"row g-2 animate-in",children:[e.jsx("div",{className:"col-7",children:e.jsx("input",{className:"form-control-custom",placeholder:"School Name",value:t.school,onChange:d=>l({...t,school:d.target.value})})}),e.jsx("div",{className:"col-5",children:e.jsx("input",{className:"form-control-custom",placeholder:"Year/Level",value:t.yearLevel,onChange:d=>l({...t,yearLevel:d.target.value})})})]})]}),a===3&&e.jsxs("div",{className:"animate-in",children:[e.jsx("h4",{className:"fw-bold mb-1",children:"Project Details"}),e.jsx("p",{className:"text-muted small mb-4",children:"Describe your project or questions below."}),e.jsx("textarea",{className:`form-control-custom ${p.message?"err":""}`,rows:"6",placeholder:"Your message...",value:t.message,onChange:d=>l({...t,message:d.target.value})})]})]}),e.jsxs("div",{className:"mt-4 d-flex flex-column-reverse flex-md-row justify-content-between gap-3",children:[a>1&&e.jsx("button",{className:"btn btn-link text-decoration-none text-muted fw-bold",onClick:()=>i(a-1),children:"Back"}),a<3?e.jsxs("button",{className:"btn-modern-action btn-orange py-3 px-5 rounded-pill shadow ms-auto",onClick:()=>z(a)&&i(a+1),children:["Continue ",e.jsx("i",{className:"bi bi-arrow-right ms-2"})]}):e.jsxs("div",{className:"d-flex flex-column flex-md-row gap-2 ms-auto",children:[e.jsxs("button",{className:"btn-modern-action btn-success py-3 px-4 rounded-pill shadow",onClick:()=>k("whatsapp"),disabled:g,children:[e.jsx("i",{className:"bi bi-whatsapp me-2"})," WhatsApp"]}),e.jsxs("button",{className:"btn-modern-action btn-dark py-3 px-4 rounded-pill shadow",onClick:()=>k("email"),disabled:g,children:[g?e.jsx(H,{size:"sm",className:"me-2"}):e.jsx("i",{className:"bi bi-envelope-at me-2"}),"Email Official"]})]})]})]})]})}),e.jsx("style",{children:`
        .text-orange { color: #eb7604; }
        .btn-orange { background: #eb7604; color: white; border: none; }
        .x-small-label { font-size: 0.65rem; font-weight: 800; color: #94a3b8; margin-bottom: 0.4rem; display: block; }
        .form-control-custom, .form-select-custom { width: 100%; background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 12px; font-weight: 500; outline: none; transition: 0.2s; }
        .form-control-custom:focus { border-color: #eb7604; background: white; }
        .form-control-custom.err { border-color: #ef4444; }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: #e2e8f0; transition: 0.3s; }
        .dot.active { width: 20px; border-radius: 10px; background: #eb7604; }
        .status-btn { border: 1px solid #e2e8f0; background: white; padding: 10px; border-radius: 12px; color: #64748b; font-weight: 700; transition: 0.3s; }
        .status-btn.active { border-color: #eb7604; color: #eb7604; background: rgba(235,118,4,0.05); }
        .btn-modern-action { font-weight: 800; border: none; transition: 0.3s; }
        .btn-modern-action:hover { transform: translateY(-2px); opacity: 0.9; }
        .success-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: white; z-index: 10; border-radius: 0 2rem 2rem 0; animation: fadeIn 0.4s; }
        .checkmark-circle { width: 80px; height: 80px; background: #198754; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .animate-in { animation: slideIn 0.4s ease-out; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 768px) { 
            .btn-modern-action { width: 100%; } 
            .success-overlay { border-radius: 2rem; }
        }
      `})]})};function X(){const[o,r]=n.useState(!1),[a,i]=n.useState(!1),[s,c]=n.useState(!1),[t,l]=n.useState(!0),[p,b]=n.useState(!1),g=T(),h=N(),m=[{name:"Home",to:"hero"},{name:"About",to:"about"},{name:"Services",to:"services"},{name:"Training",to:"training"},{name:"Projects",to:"projects"},{name:"Contact",to:"contact"}];n.useEffect(()=>{const x=()=>c(window.scrollY>20);window.addEventListener("scroll",x);const j=setTimeout(()=>{b(!0),setTimeout(()=>{l(!1)},600)},1800);return()=>{window.removeEventListener("scroll",x),clearTimeout(j)}},[]);const u=()=>r(!o),v=()=>r(!1),y=x=>{h.pathname!=="/"&&(g("/"),setTimeout(()=>{const j=document.getElementById(x);j&&j.scrollIntoView({behavior:"smooth"})},150)),v()};return e.jsxs(e.Fragment,{children:[t&&e.jsx("div",{className:`app-preloader ${p?"fade-out":""}`,children:e.jsxs("div",{className:"preloader-content",children:[e.jsx("img",{src:"/favicon.svg",alt:"InfinityMura",className:"loader-logo"}),e.jsx("div",{className:"loader-progress-bar",children:e.jsx("div",{className:"progress-fill"})}),e.jsx("span",{className:"loader-text fw-bold tracking-tighter",children:"InfinityMura"})]})}),e.jsx("nav",{className:`navbar navbar-expand-lg fixed-top transition-all ${s?"bg-dark-navbar shadow-lg py-2":"bg-transparent py-3"} text-white`,style:{zIndex:1030,backdropFilter:s?"blur(15px)":"none","--brand-1":"#f28a29","--brand-5":"#d19f4f"},children:e.jsxs("div",{className:"container",children:[e.jsxs(M,{to:"/",className:"navbar-brand d-flex align-items-center text-decoration-none",onClick:()=>window.scrollTo(0,0),children:[e.jsx("img",{src:"/favicon.svg",alt:"Logo",height:"35",className:"me-2",style:{borderRadius:"8px"}}),e.jsx("span",{className:"fw-bold tracking-tighter text-white fs-4",children:"InfinityMura"})]}),e.jsxs("div",{className:"d-none d-lg-flex align-items-center",children:[e.jsx("ul",{className:"navbar-nav me-4",children:m.map(x=>e.jsx("li",{className:"nav-item mx-1",children:h.pathname==="/"?e.jsxs(C,{to:x.to,smooth:!0,spy:!0,offset:-80,activeClass:"active-link",className:"nav-link text-white fw-medium px-3 cursor-pointer position-relative",children:[x.name,e.jsx("span",{className:"nav-indicator"})]}):e.jsx("span",{onClick:()=>y(x.to),className:"nav-link text-white fw-medium px-3 cursor-pointer",children:x.name})},x.to))}),e.jsxs("div",{className:"d-flex gap-2 align-items-center",children:[e.jsxs("button",{className:`btn-shop-nav ${h.pathname==="/shop"?"active-shop":""}`,onClick:()=>{g("/shop"),v()},children:[e.jsx("i",{className:"bi bi-bag-check-fill me-2"}),"Shop"]}),e.jsx("button",{className:"btn-request-nav",onClick:()=>i(!0),children:"Request Service"})]})]}),e.jsx("button",{className:"navbar-toggler border-0 p-2",onClick:u,children:e.jsxs("div",{className:`hamburger-icon ${o?"active":""}`,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})})]})}),e.jsxs("div",{className:`mobile-sidebar ${o?"open":""}`,children:[e.jsxs("div",{className:"sidebar-header d-flex justify-content-between p-4",children:[e.jsx("span",{className:"fw-bold text-orange",children:"MENU"}),e.jsx("button",{className:"btn-close btn-close-white",onClick:v})]}),e.jsx("div",{className:"sidebar-body px-4",children:e.jsx("ul",{className:"list-unstyled",children:m.map(x=>e.jsx("li",{className:"mb-3",children:e.jsx("span",{className:"fs-4 fw-bold text-white d-block cursor-pointer",onClick:()=>{h.pathname==="/"?v():y(x.to)},children:h.pathname==="/"?e.jsx(C,{to:x.to,smooth:!0,onClick:v,children:x.name}):x.name})},x.to))})}),e.jsxs("div",{className:"sidebar-footer p-4 d-grid gap-3",children:[e.jsxs("button",{className:"btn-shop-nav py-3",onClick:()=>{g("/shop"),v()},children:[e.jsx("i",{className:"bi bi-bag-check-fill me-2"}),"Visit Marketplace"]}),e.jsx("button",{className:"btn-request-nav py-3",onClick:()=>{i(!0),v()},children:"Request Service"})]})]}),o&&e.jsx("div",{className:"sidebar-overlay",onClick:v}),e.jsx("style",{children:`

        /* PRELOADER STYLES */

        .app-preloader {

          position: fixed; top: 0; left: 0; width: 100%; height: 100%;

          background: #020617; display: flex; align-items: center;

          justify-content: center; z-index: 9999;

          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.6s;

        }

        .app-preloader.fade-out {

          opacity: 0;

          visibility: hidden;

        }

        .loader-logo { 

          height: 80px; margin-bottom: 20px; 

          animation: logo-breathe 2s infinite ease-in-out;

        }

        .loader-text { 

          display: block; color: white; font-size: 1.5rem; 

          letter-spacing: -1px; margin-top: 15px;

        }

        .loader-progress-bar {

          width: 140px; height: 3px; background: rgba(255,255,255,0.1);

          margin: 0 auto; border-radius: 10px; overflow: hidden;

        }

        .progress-fill {

          width: 0%; height: 100%; background: #f28a29;

          animation: load-progress 1.6s forwards cubic-bezier(0.445, 0.05, 0.55, 0.95);

        }



        @keyframes logo-breathe {

          0%, 100% { transform: scale(1); opacity: 0.8; }

          50% { transform: scale(1.1); opacity: 1; }

        }

        @keyframes load-progress {

          0% { width: 0%; }

          100% { width: 100%; }

        }



        /* EXISTING NAV STYLES UNCHANGED */

        .transition-all { transition: all 0.3s ease-in-out; }

        .bg-dark-navbar { background-color: rgba(2, 6, 23, 0.98); }

        .cursor-pointer { cursor: pointer; }

        .text-orange { color: var(--brand-1); }

        .nav-indicator {

          position: absolute; bottom: 0; left: 50%; width: 0; height: 2px;

          background: var(--brand-1); transition: 0.3s; transform: translateX(-50%);

        }

        .active-link .nav-indicator { width: 60%; }

        .active-link { color: var(--brand-1) !important; }

        .btn-shop-nav {

          background: transparent; color: white; border: 2px solid var(--brand-1);

          padding: 6px 18px; border-radius: 12px; font-weight: 600; transition: 0.3s;

        }

        .btn-shop-nav:hover, .active-shop { background: var(--brand-1); box-shadow: 0 0 15px rgba(242, 138, 41, 0.4); }

        .btn-request-nav {

          background: linear-gradient(90deg, var(--brand-1), var(--brand-5));

          color: white; border: none; padding: 8px 20px; border-radius: 12px; font-weight: 600;

        }

        .hamburger-icon span { display: block; width: 25px; height: 2px; background: white; margin: 6px 0; transition: 0.4s; }

        .mobile-sidebar { position: fixed; top: 0; right: -100%; width: 280px; height: 100vh; background: #020617; z-index: 2000; transition: 0.4s; }

        .mobile-sidebar.open { right: 0; }

        .sidebar-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1050; }

      `}),e.jsx(_,{show:a,handleClose:()=>i(!1)})]})}const K=()=>{const o=new Date().getFullYear(),[r,a]=n.useState(""),[i,s]=n.useState("idle"),[c,t]=n.useState(!1),l=T(),p=N();n.useEffect(()=>{const m=()=>t(window.pageYOffset>400);return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const b=()=>{window.scrollTo({top:0,behavior:"smooth"})},g=m=>{if(p.pathname!=="/")l("/"),setTimeout(()=>{const u=document.getElementById(m);u&&u.scrollIntoView({behavior:"smooth"})},150);else{const u=document.getElementById(m);u&&u.scrollIntoView({behavior:"smooth"})}},h=m=>{if(m.preventDefault(),!r||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){s("error");return}s("submitting"),fetch("https://formspree.io/f/mgovgodz",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:r})}).then(u=>{u.ok?(s("success"),a(""),setTimeout(()=>s("idle"),4e3)):s("error")}).catch(()=>s("error"))};return e.jsxs("footer",{className:"footer-modern text-white pt-5 pb-4 position-relative overflow-hidden",style:{background:"#0b0c0e"},children:[e.jsx("div",{className:"position-absolute top-0 start-0 w-100",style:{height:"4px",background:"linear-gradient(90deg, #eb7604, #2563eb)"}}),e.jsxs("div",{className:"container position-relative z-1 mt-3",children:[e.jsxs("div",{className:"row gy-5",children:[e.jsxs("div",{className:"col-lg-4 text-center text-lg-start",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-4",children:[e.jsx("img",{src:"images/logo.webp",alt:"InfinityMura Logo",style:{width:"45px",height:"45px",objectFit:"contain",filter:"brightness(1.1)"}}),e.jsx("h4",{className:"fw-black mb-0 text-white tracking-tighter",children:"InfinityMura"})]}),e.jsx("p",{className:"text-secondary mb-4 footer-bio",children:"Software Developer & IT Specialist based in Kigali, Rwanda. Building high-performance digital solutions and empowering tech talent."}),e.jsx("div",{className:"d-flex gap-3 justify-content-center justify-content-lg-start",children:[{icon:"bi-github",url:"https://github.com/schdrack"},{icon:"bi-linkedin",url:"https://linkedin.com/in/schadrack-muragijimana"},{icon:"bi-twitter-x",url:"https://x.com/MSchadrack566"}].map((m,u)=>e.jsx("a",{href:m.url,target:"_blank",rel:"noreferrer",className:"social-icon-btn",children:e.jsx("i",{className:`bi ${m.icon}`})},u))})]}),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs("div",{className:"row text-center text-md-start",children:[e.jsxs("div",{className:"col-6",children:[e.jsx("h6",{className:"footer-title",children:"Explore"}),e.jsxs("ul",{className:"list-unstyled",children:[["Home","Services","Training","Projects"].map(m=>e.jsx("li",{className:"mb-2",children:e.jsx("button",{onClick:()=>g(m.toLowerCase()),className:"footer-link-btn small border-0 bg-transparent p-0",children:m})},m)),e.jsx("li",{className:"mt-3",children:e.jsxs("button",{onClick:()=>l("/shop"),className:"btn-footer-shop",children:[e.jsx("i",{className:"bi bi-cart-fill me-2"}),"Shop Now"]})})]})]}),e.jsxs("div",{className:"col-6",children:[e.jsx("h6",{className:"footer-title",children:"Legal"}),e.jsx("ul",{className:"list-unstyled",children:[{name:"Privacy",path:"/privacy-policy.html"},{name:"Terms",path:"/terms.html"},{name:"Support",path:"/support.html"}].map(m=>e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:m.path,className:"footer-link text-decoration-none small",children:m.name})},m.name))})]})]})}),e.jsx("div",{className:"col-lg-4 col-md-6",children:e.jsxs("div",{className:"newsletter-box p-4 rounded-4 text-center text-md-start shadow-sm",children:[e.jsx("h6",{className:"footer-title",children:"Stay Connected"}),e.jsx("p",{className:"text-secondary small mb-3",children:"Join my newsletter for tech insights."}),e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"custom-input-group",children:[e.jsx("input",{type:"email",className:"newsletter-input",placeholder:"Email address",value:r,onChange:m=>{a(m.target.value),i==="error"&&s("idle")},required:!0}),e.jsx("button",{type:"submit",className:"newsletter-btn",disabled:i==="submitting",children:i==="submitting"?e.jsx("span",{className:"spinner-border spinner-border-sm"}):e.jsx("i",{className:"bi bi-send-fill"})})]}),i==="error"&&e.jsx("div",{className:"text-danger x-small mt-2",children:"Invalid email address."}),i==="success"&&e.jsx("div",{className:"text-success x-small mt-2",children:"Successfully subscribed! ✨"})]})]})})]}),e.jsx("hr",{className:"my-5 border-secondary opacity-10"}),e.jsxs("div",{className:"footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3",children:[e.jsxs("p",{className:"text-secondary small mb-0",children:["© ",o," ",e.jsx("span",{className:"text-white fw-bold",children:"Schadrack Muragijimana"}),"."]}),e.jsxs("p",{className:"text-secondary small mb-0 d-flex align-items-center",children:["Made with ",e.jsx("i",{className:"bi bi-heart-fill text-danger mx-2"})," in Musanze"]})]})]}),e.jsx("button",{className:`scroll-top-btn ${c?"show":""}`,onClick:b,children:e.jsx("i",{className:"bi bi-chevron-up"})}),e.jsx("style",{children:`
        .footer-modern { font-family: 'Inter', sans-serif; }
        .fw-black { font-weight: 900; }
        .footer-bio { line-height: 1.8; font-size: 0.95rem; color: #94a3b8 !important; }
        .footer-title { color: #eb7604; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 800; font-size: 0.75rem; margin-bottom: 1.5rem; }
        
        .footer-link, .footer-link-btn { color: #64748b; transition: 0.3s; text-decoration: none; }
        .footer-link:hover, .footer-link-btn:hover { color: #eb7604; transform: translateX(5px); }

        .btn-footer-shop {
          background: #1a1c20;
          color: #eb7604;
          border: 1px solid #eb7604;
          padding: 6px 15px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: 0.3s;
        }
        .btn-footer-shop:hover {
          background: #eb7604;
          color: white;
          box-shadow: 0 0 15px rgba(235, 118, 4, 0.3);
        }
        
        .social-icon-btn { 
          width: 42px; height: 42px; border-radius: 10px; border: 1px solid #2d3139;
          display: flex; align-items: center; justify-content: center; color: #94a3b8;
          transition: 0.3s; text-decoration: none; background: #1a1c20;
        }
        .social-icon-btn:hover { background: #eb7604; color: white; border-color: #eb7604; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(235,118,4,0.2); }

        .newsletter-box { background: #16181d; border: 1px solid #2d3139; }
        .custom-input-group { display: flex; background: #0b0c0e; border: 1px solid #2d3139; padding: 5px; border-radius: 12px; }
        .newsletter-input { background: transparent; border: none; color: white; flex: 1; padding: 8px 12px; outline: none; font-size: 0.9rem; }
        .newsletter-btn { background: #eb7604; color: white; border: none; border-radius: 8px; width: 45px; height: 40px; display: flex; align-items: center; justify-content: center; transition: 0.3s; }
        .newsletter-btn:hover { background: #ff8a1d; }

        .scroll-top-btn {
          position: fixed; bottom: 30px; right: 30px; width: 45px; height: 45px;
          background: #eb7604; color: white; border: none; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; visibility: hidden; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 1000; box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }
        .scroll-top-btn.show { opacity: 1; visibility: visible; }
        .scroll-top-btn:hover { background: #2563eb; transform: translateY(-5px); }

        .x-small { font-size: 0.75rem; }
        @media (max-width: 768px) {
          .footer-title { margin-top: 1rem; }
          .footer-modern { text-align: center; }
          .scroll-top-btn { bottom: 20px; right: 20px; width: 40px; height: 40px; }
        }
      `})]})},J=({title:o,description:r})=>{const a="InfinityMura",i=o?`${o} | ${a}`:a,s="https://infinitymura.vercel.app",c={"@context":"https://schema.org","@type":"ProfessionalService",name:a,image:`${s}/images/logo.webp`,"@id":s,url:s,telephone:"+250791767725",priceRange:"$$",address:{"@type":"PostalAddress",addressLocality:"Kigali",addressRegion:"Kigali City",addressCountry:"RW"},areaServed:[{"@type":"City",name:"Kigali"},{"@type":"City",name:"Musanze"}],geo:{"@type":"GeoCoordinates",latitude:-1.9441,longitude:30.0619},openingHoursSpecification:{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday"],opens:"08:00",closes:"18:00"},sameAs:["https://www.linkedin.com/company/infinitymura","https://wa.me/250791767725","https://github.com/schdrack"]};return e.jsxs(O,{children:[e.jsx("title",{children:i}),e.jsx("meta",{name:"title",content:i}),e.jsx("meta",{name:"description",content:r}),e.jsx("link",{rel:"canonical",href:s}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:url",content:s}),e.jsx("meta",{property:"og:title",content:i}),e.jsx("meta",{property:"og:description",content:r}),e.jsx("meta",{property:"og:image",content:`${s}/images/logo.webp`}),e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{property:"twitter:url",content:s}),e.jsx("meta",{property:"twitter:title",content:i}),e.jsx("meta",{property:"twitter:description",content:r}),e.jsx("meta",{property:"twitter:image",content:`${s}/images/logo.webp`}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify(c)})]})},Z=({onOpenServiceModal:o})=>{const[r,a]=n.useState(!1),[i,s]=n.useState("instruction"),c=[{title:"Full-Stack Web Development",link:"https://drive.google.com/file/d/12GBK0I8GXNT-iy46wT7tRyw-pWFSak5T/view?usp=drive_link",icon:"bi-code-slash"},{title:"Mobile App Development (Flutter)",link:"https://drive.google.com/file/d/1tAV03e_gGI3ucGuEsFAVJqYRVgTiSdlB/view?usp=drive_link",icon:"bi-phone"},{title:"Data Science & Analytics",link:"https://drive.google.com/file/d/1CNbtxI4og_nLqXATcAjPxnmKeyXGKCkw/view?usp=drive_link",icon:"bi-bar-chart"},{title:"Cybersecurity Essentials",link:"https://drive.google.com/file/d/189awMxrSivcYQhvmm6SjqJVmZ6_cbcNT/view?usp=drive_link",icon:"bi-shield-lock"},{title:"UI/UX Design Masterclass",link:"https://drive.google.com/file/d/1r826S2nkRZJi_AsIywxgIiZLK5eOJVjm/view?usp=drive_link",icon:"bi-palette"},{title:"C++ For Electrical Automation",link:"https://drive.google.com/file/d/1W5USAFmxZ3PB-oG5vmN1b49P6zLG5kJL/view?usp=drive_link",icon:"bi-cpu"}],t=()=>{const p="250791767725",b=encodeURIComponent("Hello Infinity_Mura! I've read the course instructions and I would like to request access to the learning materials.");window.open(`https://wa.me/${p}?text=${b}`,"_blank"),s("files")},l=()=>{a(!1),s("instruction")};return e.jsxs("section",{id:"hero",className:"min-vh-100 d-flex flex-column justify-content-center position-relative overflow-hidden",style:{backgroundColor:"#0f172a",color:"#ffffff",paddingTop:"8rem",paddingBottom:"2rem"},children:[e.jsxs("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{zIndex:0},children:[e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100 hero-zoom-bg",style:{backgroundImage:"url('/images/photo1.jpg')",backgroundSize:"cover",backgroundPosition:"center"}}),e.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.8) 70%, #0f172a 100%)"}})]}),e.jsx("div",{className:"container",style:{position:"relative",zIndex:3},children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col-12 col-lg-6 reveal-fade-left",children:e.jsxs("div",{className:"text-center text-lg-start",children:[e.jsx("div",{className:"mb-3",children:e.jsxs("span",{className:"badge bg-gradient-primary text-white px-3 py-2 rounded-pill fw-bold small shadow-sm border border-white border-opacity-10",children:[e.jsx("i",{className:"bi bi-rocket-takeoff-fill me-1"})," Rwanda’s Tech Catalyst"]})}),e.jsx("h1",{className:"display-3 fw-bold mb-3 lh-1",style:{fontSize:"2.8rem"},children:e.jsx("span",{className:"text-gradient",children:"Infinity_Mura"})}),e.jsxs("p",{className:"text-white mb-4 fw-bold hero-subtitle",style:{fontSize:"1.1rem",borderLeft:"4px solid #eb7604",paddingLeft:"15px"},children:["Software ",e.jsx("span",{style:{color:"#eb7604"},children:"•"})," Training ",e.jsx("span",{style:{color:"#eb7604"},children:"•"})," IT Solutions",e.jsx("span",{className:"d-block mt-1 fw-normal text-white-50",style:{fontSize:"0.85rem",letterSpacing:"2px"},children:"— PROUDLY BUILT IN MUSANZE —"})]}),e.jsxs("div",{className:"d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4",children:[e.jsxs("button",{onClick:o,className:"btn btn-lg px-4 py-2 fw-bold btn-hover-grow",style:{backgroundColor:"#eb7604",color:"white",borderRadius:"8px",border:"none"},children:[e.jsx("i",{className:"bi bi-whatsapp me-1"})," Get Started"]}),e.jsx("button",{onClick:()=>a(!0),className:"btn btn-outline-light btn-lg px-4 py-2 fw-bold glass-btn",style:{borderRadius:"8px"},children:"Explore Courses"})]})]})}),e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end mt-5 mt-lg-0 reveal-fade-right",children:e.jsxs("div",{className:"position-relative",style:{maxWidth:"400px"},children:[e.jsx("img",{src:"/images/mura.png",alt:"Founder",className:"img-fluid main-hero-img",style:{position:"relative",zIndex:2,display:"block"}}),e.jsxs("div",{className:"position-absolute shadow-lg animate-float-slow",style:{bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:4,background:"rgba(15, 23, 42, 0.8)",backdropFilter:"blur(16px)",padding:"15px 25px",borderRadius:"20px",border:"1px solid rgba(255, 255, 255, 0.1)",width:"90%",textAlign:"center"},children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-center gap-2 mb-1",children:[e.jsx("i",{className:"bi bi-patch-check-fill text-orange"}),e.jsx("span",{className:"text-white fw-bold",style:{fontSize:"1rem",letterSpacing:"1px",textTransform:"uppercase"},children:"Founder & Lead Engineer"})]}),e.jsx("div",{className:"text-white fw-light mb-2",style:{fontSize:"0.9rem",opacity:.9},children:"Schadrack Muragijimana"}),e.jsx("div",{className:"mx-auto mb-2",style:{height:"1px",width:"60%",background:"linear-gradient(90deg, transparent, #eb7604, transparent)"}}),e.jsxs("p",{className:"mb-0 text-white-50 fw-normal",style:{fontSize:"0.75rem",fontStyle:"italic",lineHeight:"1.4"},children:[`"Empowering Rwanda's digital future through `,e.jsx("br",{}),' elegant code and innovative training."']})]})]})})]})}),r&&e.jsxs("div",{className:"portal-overlay d-flex align-items-center justify-content-center",children:[e.jsxs("div",{className:"portal-window shadow-2xl reveal-bounce-up position-relative",children:[e.jsx("button",{onClick:l,className:"portal-close-btn",children:e.jsx("i",{className:"bi bi-x-lg"})}),e.jsxs("div",{className:"p-4 p-md-5",children:[i==="instruction"&&e.jsxs("div",{className:"text-center animate-in",children:[e.jsx("div",{className:"status-icon mb-4",children:e.jsx("i",{className:"bi bi-journal-text"})}),e.jsx("h2",{className:"text-white fw-bold mb-3",children:"Access Protocol"}),e.jsx("p",{className:"text-white-50 mb-4",children:"To maintain a quality learning environment, we verify our students before granting full access to course materials."}),e.jsxs("div",{className:"instruction-box text-start mb-4",children:[e.jsxs("div",{className:"d-flex gap-3 mb-2",children:[e.jsx("i",{className:"bi bi-1-circle text-orange"}),e.jsx("span",{children:"Read the course overview."})]}),e.jsxs("div",{className:"d-flex gap-3 mb-2",children:[e.jsx("i",{className:"bi bi-2-circle text-orange"}),e.jsx("span",{children:"Request viewing permission via WhatsApp."})]}),e.jsxs("div",{className:"d-flex gap-3",children:[e.jsx("i",{className:"bi bi-3-circle text-orange"}),e.jsx("span",{children:"Unlock immediate access to Drive files."})]})]}),e.jsx("button",{onClick:()=>s("permission"),className:"btn btn-orange w-100 py-3 fw-bold",children:"Accept & Continue"})]}),i==="permission"&&e.jsxs("div",{className:"text-center animate-in",children:[e.jsx("div",{className:"status-icon pulse-orange mb-4",children:e.jsx("i",{className:"bi bi-shield-lock"})}),e.jsx("h2",{className:"text-white fw-bold mb-3",children:"Identity Verification"}),e.jsx("p",{className:"text-white-50 mb-4",children:"Click below to send your request. Our team will grant access to your Google account instantly."}),e.jsxs("button",{onClick:t,className:"btn btn-whatsapp w-100 py-3 fw-bold mb-3",children:[e.jsx("i",{className:"bi bi-whatsapp me-2"})," Request Access Now"]}),e.jsx("button",{onClick:()=>s("instruction"),className:"btn btn-link text-white-50 small",children:"Back to instructions"})]}),i==="files"&&e.jsxs("div",{className:"animate-in",children:[e.jsxs("div",{className:"d-flex align-items-center mb-4",children:[e.jsx("div",{className:"status-icon-sm me-3",children:e.jsx("i",{className:"bi bi-unlock-fill"})}),e.jsx("h3",{className:"text-white fw-bold mb-0",children:"Academy Resources"})]}),e.jsx("div",{className:"course-list",children:c.map((p,b)=>e.jsxs("a",{href:p.link,target:"_blank",rel:"noopener noreferrer",className:"course-card-modern",children:[e.jsx("div",{className:"card-icon",children:e.jsx("i",{className:`bi ${p.icon}`})}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsx("div",{className:"text-white fw-bold small",children:p.title}),e.jsx("div",{className:"text-white-50 tiny",children:"Click to Open Google Drive"})]}),e.jsx("i",{className:"bi bi-arrow-right text-orange"})]},b))})]})]})]}),e.jsx("div",{className:"portal-backdrop",onClick:l})]}),e.jsx("style",{children:`
        .portal-overlay { position: fixed; top:0; left:0; width:100%; height:100%; z-index: 9999; }
        .portal-backdrop { position: absolute; width:100%; height:100%; background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(10px); z-index: -1; }
        .portal-window { 
          background: #1e293b; border: 1px solid rgba(255,255,255,0.1); 
          border-radius: 24px; width: 95%; maxWidth: 500px; max-height: 90vh; overflow-y: auto;
        }
        .portal-close-btn { position: absolute; top: 20px; right: 20px; background: none; border: none; color: white; opacity: 0.5; transition: 0.3s; }
        .portal-close-btn:hover { opacity: 1; transform: scale(1.2); }
        
        .status-icon { width: 80px; height: 80px; background: rgba(235, 118, 4, 0.1); color: #eb7604; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 2.5rem; }
        .status-icon-sm { width: 40px; height: 40px; background: rgba(25, 135, 84, 0.1); color: #198754; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }
        
        .instruction-box { background: rgba(0,0,0,0.2); border-radius: 15px; padding: 20px; color: rgba(255,255,255,0.7); font-size: 0.9rem; }
        .text-orange { color: #eb7604; }
        .btn-orange { background: #eb7604; color: white; border: none; border-radius: 12px; transition: 0.3s; }
        .btn-orange:hover { background: #ff8c1a; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(235, 118, 4, 0.3); }
        .btn-whatsapp { background: #25D366; color: white; border: none; border-radius: 12px; transition: 0.3s; }
        .btn-whatsapp:hover { background: #1ebe57; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3); }

        .course-list { display: flex; flex-direction: column; gap: 12px; }
        .course-card-modern { 
          display: flex; align-items: center; gap: 15px; padding: 15px; 
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);
          border-radius: 15px; text-decoration: none; transition: 0.3s;
        }
        .course-card-modern:hover { background: rgba(235, 118, 4, 0.08); border-color: #eb7604; transform: translateX(8px); }
        .card-icon { color: #eb7604; font-size: 1.2rem; }
        .tiny { font-size: 0.7rem; }

        .pulse-orange { animation: pulse-o 2s infinite; }
        @keyframes pulse-o { 0% { box-shadow: 0 0 0 0 rgba(235, 118, 4, 0.4); } 70% { box-shadow: 0 0 0 15px rgba(235, 118, 4, 0); } 100% { box-shadow: 0 0 0 0 rgba(235, 118, 4, 0); } }
        .animate-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        .glass-btn { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(4px); transition: 0.3s; border: 1px solid rgba(255, 255, 255, 0.2) !important; }
        .glass-btn:hover { background: rgba(255, 255, 255, 0.15); transform: translateY(-3px); }
        .btn-hover-grow { transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .btn-hover-grow:hover { transform: translateY(-5px) scale(1.02); }
      `})]})},Q=()=>{const o=n.useRef(null),r=[{name:"TechStart Rwanda",logo:"images/techstart.png"},{name:"Dione Coaching Center",logo:"images/dione.png"},{name:"Kigali Innovation Hub",logo:"images/techstart.png"},{name:"Rwanda ICT Chamber",logo:"images/chamber.png"},{name:"University of Rwanda",logo:"images/logo.webp"},{name:"Banks of Rwanda",logo:"images/bnr.png"}],a={goldenrod:"#e4973b",orange:"#eb7604",crimson:"#b6252a",dark:"#0f172a"};return n.useEffect(()=>{const i=new IntersectionObserver(c=>{c.forEach(t=>{t.isIntersecting&&t.target.classList.add("reveal-visible")})},{threshold:.1});return o.current.querySelectorAll(".reveal-item").forEach(c=>i.observe(c)),()=>i.disconnect()},[]),e.jsxs("section",{ref:o,id:"clients",className:"py-5 position-relative client-section-padding",style:{backgroundColor:"#ffffff"},children:[e.jsx("div",{className:"position-absolute bottom-0 end-0 opacity-10 d-none d-md-block",style:{width:"300px",height:"300px",background:`radial-gradient(circle, ${a.goldenrod} 0%, transparent 70%)`,filter:"blur(80px)",zIndex:0}}),e.jsxs("div",{className:"container position-relative",style:{zIndex:1},children:[e.jsxs("div",{className:"text-center mb-5 reveal-item",children:[e.jsxs("div",{className:"d-flex align-items-center justify-content-center gap-2 mb-2",children:[e.jsx("div",{style:{width:"20px",height:"2px",backgroundColor:a.goldenrod}}),e.jsx("h6",{className:"text-uppercase fw-bold m-0",style:{color:a.orange,fontSize:"0.85rem",letterSpacing:"3px"},children:"Our Ecosystem"}),e.jsx("div",{style:{width:"20px",height:"2px",backgroundColor:a.goldenrod}})]}),e.jsx("h3",{className:"fw-bold mb-3",style:{color:a.dark},children:"Trusted By Leading Organizations"}),e.jsxs("div",{className:"d-flex justify-content-center",children:[e.jsx("div",{style:{width:"40px",height:"4px",backgroundColor:a.crimson,borderRadius:"10px",margin:"0 2px"}}),e.jsx("div",{style:{width:"100px",height:"4px",backgroundColor:a.orange,borderRadius:"10px",margin:"0 2px"}})]})]}),e.jsx("div",{className:"row g-3 g-lg-4 justify-content-center align-items-center",children:r.map((i,s)=>e.jsx("div",{className:"col-6 col-md-4 col-lg-2",children:e.jsx("div",{className:"client-card reveal-item p-3 p-lg-4 rounded-4 d-flex align-items-center justify-content-center transition-all",style:{transitionDelay:`${s*100}ms`},children:e.jsx("img",{src:i.logo,alt:i.name,className:"img-fluid client-img",style:{maxHeight:"55px",filter:"grayscale(100%) opacity(0.5)",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"},title:i.name})})},s))})]}),e.jsx("style",{children:`
        /* Spacing adjustment for Hero Photo Push */
        @media (max-width: 991px) {
          .client-section-padding {
            padding-top: 180px !important; /* Creates space for the hero image overlapping from above */
            padding-bottom: 4rem !important;
          }
        }

        /* Animation Base Classes */
        .reveal-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .client-card {
          background-color: #f8fafc;
          border: 1px solid transparent;
          cursor: pointer;
          min-height: 120px;
        }

        .client-card:hover {
          background-color: #fff;
          border-color: ${a.goldenrod}44;
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
          transform: translateY(-8px) scale(1.02);
        }

        .client-card:hover .client-img {
          filter: grayscale(0%) opacity(1) !important;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .client-card {
            min-height: 100px;
            padding: 1.5rem !important;
          }
          .client-img {
            max-height: 45px !important;
          }
        }
      `})]})},ee=()=>{const o=D();console.error("Routing Error:",o);const r=()=>{window.location.reload(!0)};return e.jsx("div",{className:"container py-5 min-vh-100 d-flex align-items-center justify-content-center text-center",children:e.jsxs("div",{className:"card shadow-lg p-5 rounded-5 border-0 bg-white",style:{maxWidth:"500px"},children:[e.jsx("div",{className:"mb-4",children:e.jsx("i",{className:"bi bi-cloud-arrow-down text-warning display-1"})}),e.jsx("h2",{className:"fw-black text-dark mb-3",children:"Update Available"}),e.jsx("p",{className:"lead text-muted mb-4",children:"We've updated InfinityMura with new features. Please refresh to continue to the latest version."}),e.jsxs("button",{onClick:r,className:"btn btn-warning btn-lg rounded-pill px-5 fw-bold shadow-sm",style:{backgroundColor:"#f28a29",border:"none",color:"#fff"},children:[e.jsx("i",{className:"bi bi-arrow-clockwise me-2"})," Refresh Page"]})]})})},te=n.lazy(()=>w(()=>import("./About-CmmIe_3F.js"),__vite__mapDeps([0,1,2,3]))),se=n.lazy(()=>w(()=>import("./Services-DuOCP_eH.js"),__vite__mapDeps([4,1]))),ae=n.lazy(()=>w(()=>import("./Training-BHNAX3kw.js"),__vite__mapDeps([5,1,2,3]))),ie=n.lazy(()=>w(()=>import("./Projects-BHMFmq82.js"),__vite__mapDeps([6,1,2,3]))),ne=n.lazy(()=>w(()=>import("./Testimonials-AL88eyzK.js"),__vite__mapDeps([7,1]))),re=n.lazy(()=>w(()=>import("./Contact-J1EIyxnr.js"),__vite__mapDeps([8,1]))),oe=n.lazy(()=>w(()=>import("./Shop-DBzWyfGm.js"),__vite__mapDeps([9,1,2,3]))),le=n.lazy(()=>w(()=>import("./NotFound-MZPile4s.js"),__vite__mapDeps([10,1]))),ce=()=>{const{pathname:o}=N();return n.useEffect(()=>{window.scrollTo(0,0)},[o]),null},de=({onOpenServiceModal:o,showServiceModal:r,handleCloseModal:a})=>e.jsxs(e.Fragment,{children:[e.jsx(ce,{}),e.jsx(J,{title:"Premium Software Development & IT Training | InfinityMura",description:"InfinityMura delivers high-performance web development and professional IT coaching in Rwanda."}),e.jsx("a",{href:"#main-content",className:"visually-hidden-focusable bg-dark text-white p-3 position-absolute",style:{zIndex:9999},children:"Skip to main content"}),e.jsx(X,{onOpenServiceModal:o}),e.jsx("main",{id:"main-content",className:"min-vh-100",children:e.jsxs(n.Suspense,{fallback:e.jsxs("div",{className:"py-5 text-center",children:[e.jsx("div",{className:"spinner-border text-orange",role:"status"}),e.jsx("p",{className:"mt-2 text-muted",children:"Loading content..."})]}),children:[e.jsx(q,{})," "]})}),e.jsx(K,{}),e.jsxs("div",{className:"floating-hub position-fixed d-flex flex-column gap-3",children:[e.jsx("a",{href:"https://wa.me/250791767725",target:"_blank",rel:"noopener noreferrer",className:"btn rounded-circle d-flex align-items-center justify-content-center floating-btn whatsapp-transparent","aria-label":"Chat on WhatsApp",children:e.jsx("i",{className:"bi bi-whatsapp"})}),e.jsx("a",{href:"tel:+250791767725",className:"btn rounded-circle d-flex align-items-center justify-content-center floating-btn phone-transparent","aria-label":"Call Support",children:e.jsx("i",{className:"bi bi-telephone-fill"})})]}),e.jsx(_,{show:r,handleClose:a}),e.jsx("style",{children:`
      :root { --infinity-orange: #f28a29; }
      .text-orange { color: var(--infinity-orange); }
      .animate-fade-in { animation: fadeIn 0.5s ease-out; }
      .animate-pulse { animation: pulse 2s infinite; }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes pulse { 0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.6; } }
      .floating-hub { z-index: 1050; right: 24px; bottom: 24px; }
      .floating-btn { width: 60px; height: 60px; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2) !important; box-shadow: 0 8px 32px 0 rgba(0,0,0,0.15); }
      .whatsapp-transparent { background: rgba(37, 211, 102, 0.15) !important; color: #25d366 !important; }
      .phone-transparent { background: rgba(37, 99, 235, 0.15) !important; color: #2563eb !important; }
      .floating-btn i { font-size: 1.6rem; }
      .floating-btn:hover { transform: scale(1.1) translateY(-5px); background: rgba(255,255,255,0.95) !important; color: #000 !important; }
      @media (max-width: 768px) {
        .floating-hub { right: auto !important; left: 20px !important; bottom: 20px !important; }
        .floating-btn { width: 52px; height: 52px; }
        .floating-btn i { font-size: 1.3rem; }
        .floating-btn:hover { transform: scale(1.1) translateX(5px); }
      }
      .visually-hidden-focusable:not(:focus):not(:active) { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
    `})]}),me=({onOpenServiceModal:o})=>e.jsxs("div",{className:"animate-fade-in",children:[e.jsx(Z,{onOpenServiceModal:o}),e.jsx(Q,{}),e.jsxs(n.Suspense,{fallback:e.jsx("div",{className:"p-5 text-center text-muted",children:"Loading sections..."}),children:[e.jsx(te,{}),e.jsx(se,{}),e.jsx(ae,{}),e.jsx(ie,{}),e.jsx(ne,{}),e.jsx(re,{})]})]});function pe(){const[o,r]=n.useState(!1);n.useEffect(()=>{const i=s=>{s.message.includes("Failed to fetch dynamically imported module")&&window.location.reload()};return window.addEventListener("error",i),()=>window.removeEventListener("error",i)},[]);const a=Y([{path:"/",element:e.jsx(de,{onOpenServiceModal:()=>r(!0),showServiceModal:o,handleCloseModal:()=>r(!1)}),errorElement:e.jsx(ee,{}),children:[{index:!0,element:e.jsx(me,{onOpenServiceModal:()=>r(!0)})},{path:"shop",element:e.jsx(oe,{})},{path:"*",element:e.jsx(le,{})}]}]);return e.jsx(n.Suspense,{fallback:e.jsxs("div",{className:"vh-100 d-flex flex-column align-items-center justify-content-center bg-light",children:[e.jsx("div",{className:"spinner-border text-orange mb-3",style:{width:"3rem",height:"3rem"}}),e.jsx("p",{className:"text-muted fw-medium animate-pulse",children:"Initializing InfinityMura..."})]}),children:e.jsx(F,{router:a})})}V.createRoot(document.getElementById("root")).render(e.jsx(B.StrictMode,{children:e.jsx(U,{children:e.jsx(pe,{})})}));export{J as S};
