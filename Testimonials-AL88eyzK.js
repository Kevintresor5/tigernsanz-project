import{r as s,j as e}from"./vendor-cbZc9Uze.js";const f=()=>{const[m,i]=s.useState(!1),[o,n]=s.useState(!1),[c,d]=s.useState(!1),[t,r]=s.useState({name:"",idea:"",category:"Web App"}),[x,b]=s.useState(""),h=[{id:1,name:"Jean Marie Viane",role:"CEO, KGL Logistics",quote:"Schadrack built our inventory system in just 3 weeks. It’s intuitive, efficient, and saved us over 10 hours of work every week.",avatar:"https://i.pravatar.cc/150?u=jmv",rating:5,color:"#eb7604"},{id:2,name:"Emmanuel Niyonzima",role:"Fullstack Developer",quote:"His Laravel coaching was the turning point in my career. He breaks down complex topics into simple, actionable lessons.",avatar:"https://i.pravatar.cc/150?u=en",rating:5,color:"#e4973b"},{id:3,name:"TechStart Rwanda",role:"Startup Incubator",quote:"Schadrack is reliable, professional, and deeply knowledgeable. We confidently recommend him to all our founders.",avatar:"https://i.pravatar.cc/150?u=tr",rating:5,color:"#b6252a"},{id:4,name:"Clarisse Umuhoza",role:"E-commerce Vendor",quote:"The payment integration he set up is flawless. Our customers now pay easily via Mobile Money and Card.",avatar:"https://i.pravatar.cc/150?u=cu",rating:5,color:"#0f172a"}];s.useEffect(()=>{if(o){const a=setTimeout(()=>n(!1),4e3);return()=>clearTimeout(a)}},[o]);const u=a=>{a.preventDefault(),d(!0),b(t.name),setTimeout(()=>{i(!1),n(!0),d(!1);const p="250791767725",l=`*🚀 New Partnership Inquiry*%0A%0A*Client:* ${t.name}%0A*Category:* ${t.category}%0A*Vision:* ${t.idea}%0A%0A_Sent from Portfolio Testimonials Section_`;setTimeout(()=>{window.open(`https://wa.me/${p}?text=${l}`,"_blank"),r({name:"",idea:"",category:"Web App"})},1500)},800)};return e.jsxs("section",{id:"testimonials",className:"py-5 position-relative overflow-hidden bg-white",children:[e.jsx("div",{className:"decor-circle circle-1"}),e.jsx("div",{className:"decor-circle circle-2"}),e.jsxs("div",{className:`toast-custom ${o?"active":""}`,children:[e.jsxs("div",{className:"d-flex align-items-center gap-3",children:[e.jsx("div",{className:"icon-circle bg-success",children:e.jsx("i",{className:"bi bi-check-lg"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"fw-bold text-dark",children:["Awesome, ",x,"!"]}),e.jsx("div",{className:"small text-muted",children:"Opening WhatsApp..."})]})]}),e.jsx("div",{className:"toast-bar"})]}),e.jsxs("div",{className:"container py-lg-5 position-relative z-2",children:[e.jsxs("div",{className:"text-center mb-5",children:[e.jsxs("div",{className:"d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3 glass-badge",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"text-uppercase fw-bold ls-1",style:{fontSize:"0.7rem",color:"#64748b"},children:"Wall of Love"})]}),e.jsxs("h2",{className:"display-4 fw-900 mb-3 text-dark",children:["What People ",e.jsx("span",{className:"text-orange-gradient",children:"Say"})]}),e.jsx("p",{className:"text-muted mx-auto",style:{maxWidth:"600px"},children:"Trusted by founders and developers across Rwanda for high-quality software delivery and technical mentorship."})]}),e.jsx("div",{className:"row g-4 justify-content-center",children:h.map(a=>e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"pro-testimonial-card h-100 p-4",children:[e.jsx("div",{className:"d-flex gap-1 mb-3",children:[...Array(a.rating)].map((p,l)=>e.jsx("i",{className:"bi bi-star-fill text-warning fs-small"},l))}),e.jsxs("p",{className:"testimonial-text mb-4",children:['"',a.quote,'"']}),e.jsxs("div",{className:"d-flex align-items-center gap-3 pt-3 border-top border-light-subtle mt-auto",children:[e.jsxs("div",{className:"avatar-wrapper",children:[e.jsx("img",{src:a.avatar,alt:a.name,className:"avatar-img"}),e.jsx("div",{className:"verify-badge",children:e.jsx("i",{className:"bi bi-patch-check-fill"})})]}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-0 fw-bold text-dark",children:a.name}),e.jsx("small",{className:"text-muted d-block",children:a.role})]})]})]})},a.id))}),e.jsx("div",{className:"text-center mt-5 pt-4",children:e.jsxs("div",{className:"partner-cta p-4 p-md-5 rounded-5 shadow-sm bg-light border border-white",children:[e.jsx("h4",{className:"fw-bold mb-3",children:"Ready to be my next success story?"}),e.jsxs("button",{onClick:()=>i(!0),className:"btn btn-dark btn-lg rounded-pill px-5 fw-bold shadow-lg hover-up",children:["Start Your Project ",e.jsx("i",{className:"bi bi-rocket-takeoff ms-2"})]}),e.jsxs("div",{className:"mt-3 d-flex justify-content-center align-items-center gap-3",children:[e.jsxs("div",{className:"avatar-group d-flex",children:[e.jsx("img",{src:"https://i.pravatar.cc/100?img=1",className:"group-avatar"}),e.jsx("img",{src:"https://i.pravatar.cc/100?img=2",className:"group-avatar"}),e.jsx("img",{src:"https://i.pravatar.cc/100?img=3",className:"group-avatar"})]}),e.jsx("span",{className:"small text-muted fw-500",children:"Joined by 50+ partners"})]})]})})]}),m&&e.jsx("div",{className:"modal-overlay d-flex align-items-center justify-content-center p-3",children:e.jsxs("div",{className:"pro-modal-content animate-pop",children:[e.jsx("button",{onClick:()=>i(!1),className:"btn-close-modal",children:e.jsx("i",{className:"bi bi-x-lg"})}),e.jsxs("div",{className:"modal-header-custom mb-4",children:[e.jsx("div",{className:"modal-icon",children:e.jsx("i",{className:"bi bi-lightning-charge-fill"})}),e.jsx("h3",{className:"fw-900 mb-1",children:"Let's Build It"}),e.jsx("p",{className:"text-muted mb-0",children:"Tell me about your vision."})]}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"label-pro",children:"Full Name"}),e.jsx("input",{type:"text",className:"input-pro",placeholder:"John Doe",required:!0,value:t.name,onChange:a=>r({...t,name:a.target.value})})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"label-pro",children:"Category"}),e.jsxs("select",{className:"input-pro",value:t.category,onChange:a=>r({...t,category:a.target.value}),children:[e.jsx("option",{children:"Web App"}),e.jsx("option",{children:"Mobile App"}),e.jsx("option",{children:"System Automation"}),e.jsx("option",{children:"IT Consultation"})]})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"label-pro",children:"Your Project Idea"}),e.jsx("textarea",{className:"input-pro",rows:"3",placeholder:"I need a system that...",required:!0,value:t.idea,onChange:a=>r({...t,idea:a.target.value})})]})]}),e.jsx("button",{type:"submit",disabled:c,className:"btn-submit-pro mt-4",children:c?e.jsx("span",{className:"spinner-border spinner-border-sm me-2"}):e.jsxs(e.Fragment,{children:["Continue to WhatsApp ",e.jsx("i",{className:"bi bi-whatsapp ms-2"})]})})]})]})}),e.jsx("style",{jsx:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        section { font-family: 'Plus Jakarta Sans', sans-serif; }
        .fw-900 { font-weight: 800; }
        .ls-1 { letter-spacing: 1px; }
        .fs-small { font-size: 0.8rem; }
        
        .text-orange-gradient { background: linear-gradient(135deg, #eb7604, #e4973b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

        /* Background Decor */
        .decor-circle { position: absolute; border-radius: 50%; filter: blur(80px); z-index: 1; opacity: 0.4; }
        .circle-1 { top: -10%; left: -5%; width: 400px; height: 400px; background: #eb760420; }
        .circle-2 { bottom: -10%; right: -5%; width: 350px; height: 350px; background: #b6252a15; }

        .glass-badge { background: #f8fafc; border: 1px solid #e2e8f0; padding: 5px 15px; }
        .dot { width: 8px; height: 8px; background: #eb7604; border-radius: 50%; }

        /* Pro Testimonial Card */
        .pro-testimonial-card { 
          background: #ffffff; 
          border: 1px solid #f1f5f9; 
          border-radius: 24px; 
          transition: all 0.4s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          position: relative;
        }
        .pro-testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.08);
          border-color: #eb760430;
        }
        .testimonial-text { color: #475569; font-size: 0.95rem; line-height: 1.7; font-weight: 500; }

        /* Avatar styling */
        .avatar-wrapper { position: relative; }
        .avatar-img { width: 50px; height: 50px; border-radius: 14px; object-fit: cover; background: #f1f5f9; }
        .verify-badge { 
          position: absolute; bottom: -5px; right: -5px; 
          background: #fff; border-radius: 50%; width: 20px; height: 20px;
          display: flex; align-items: center; justify-content: center;
          color: #0ea5e9; font-size: 0.7rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        /* Action Section */
        .partner-cta { background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); }
        .group-avatar { width: 32px; height: 32px; border-radius: 50%; border: 2px solid #fff; margin-left: -10px; }
        .group-avatar:first-child { margin-left: 0; }
        .hover-up:hover { transform: translateY(-3px); }

        /* Toast UI */
        .toast-custom {
          position: fixed; top: 20px; right: -400px; 
          background: white; padding: 20px; border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          z-index: 10000; transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          width: 320px; overflow: hidden;
        }
        .toast-custom.active { right: 20px; }
        .icon-circle { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; }
        .toast-bar { position: absolute; bottom: 0; left: 0; height: 4px; background: #198754; width: 100%; animation: shrink 4s linear forwards; }
        @keyframes shrink { from { width: 100%; } to { width: 0%; } }

        /* Modal Pro */
        .modal-overlay { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(8px); z-index: 9999; }
        .pro-modal-content {
          background: white; width: 100%; maxWidth: 480px; border-radius: 32px; padding: 40px;
          position: relative; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .btn-close-modal { 
          position: absolute; top: 20px; right: 20px; border: none; 
          background: #f1f5f9; width: 35px; height: 35px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; font-size: 0.8rem;
        }
        .modal-icon { width: 50px; height: 50px; background: #eb760415; color: #eb7604; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 20px; }
        
        .label-pro { font-size: 0.8rem; font-weight: 700; color: #64748b; margin-bottom: 8px; display: block; }
        .input-pro {
          width: 100%; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;
          padding: 12px 16px; font-weight: 500; transition: 0.3s;
        }
        .input-pro:focus { outline: none; border-color: #eb7604; background: #fff; box-shadow: 0 0 0 4px #eb760410; }
        
        .btn-submit-pro {
          width: 100%; background: #0f172a; color: #fff; border: none; padding: 16px;
          border-radius: 14px; font-weight: 700; transition: 0.3s;
        }
        .btn-submit-pro:hover { background: #000; transform: translateY(-2px); }

        .animate-pop { animation: popScale 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes popScale { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      `})]})};export{f as default};
