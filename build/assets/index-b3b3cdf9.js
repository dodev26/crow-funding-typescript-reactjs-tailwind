import{_ as a,t,f as u,u as x,j as e,H as h,B as p,s as v,e as N,r as E,q as P,c as S,d as M,w as L,g as R,ae as F,y as q,F as B,G as I,I as V,O as z}from"./index-895e883f.js";import{L as C}from"./Label-29ac64f5.js";const o={heading:()=>a(t.resetPassword.heading),label:()=>a(t.resetPassword.label),placeholder:()=>a(t.resetPassword.placeholder),submit:()=>a(t.resetPassword.submit)},c={heading:()=>a(t.sendSuccessModal.heading),subheading:()=>a(t.sendSuccessModal.subheading),back:()=>a(t.sendSuccessModal.back)},G=()=>{const{closeModal:n}=u(),{t:l}=x();return e.jsxs("div",{className:"md:w-[500px] w-full sm:w-[400px] px-6 pb-6",children:[e.jsx("div",{className:"w-[60px] mx-auto h-[60px] animate-pulse text-primary bg-primary/10 flex items-center justify-center rounded-full overflow-hidden",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})})}),e.jsx(h,{className:"text-center sm:text-lg text-base font-semibold mt-4",children:l(c.heading())}),e.jsx("p",{className:"text-xs text-center sm:text-sm text-text3 mt-2",children:l(c.subheading())}),e.jsx(p,{onClick:n,kind:"secondary",type:"button",className:"w-full mt-4",children:l(c.back())})]})},H=v.pick(["email"]),_=()=>{var m;const{control:n,handleSubmit:l,reset:w,setError:b,formState:{errors:g}}=N({defaultValues:{email:""},resolver:z(H)}),{t:r}=x(),{openModal:f}=u(),[i,d]=E.useState(!1),j=l(async y=>{d(!0);try{const{email:s}=y;console.log(s);const k=P(S(M,"users"),L("email","==",s));if((await R(k)).empty)throw new Error("Email does not exist");await F(q,s),f(e.jsx(G,{})),w({email:""})}catch(s){(s instanceof Error||s instanceof B)&&b("email",{type:"manual",message:s.message})}finally{d(!1)}});return e.jsxs("div",{className:"w-full h-auto relative",children:[e.jsx(h,{className:"text-lg sm:text-xl text-center font-semibold capitalize",children:r(o.heading())}),e.jsxs("form",{onSubmit:j,className:"mt-5",children:[e.jsxs(I,{children:[e.jsx(C,{className:"capitalize",children:r(o.label())}),e.jsx(V,{disabled:i,errorField:(m=g.email)==null?void 0:m.message,type:"email",control:n,name:"email",placeholder:r(o.placeholder())})]}),e.jsx(p,{type:"submit",disabled:i,isLoading:i,className:"w-full",kind:"primary",children:r(o.submit())})]})]})},O=_;export{O as ResetPassword};
