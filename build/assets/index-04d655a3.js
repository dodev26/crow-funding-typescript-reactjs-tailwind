import{_ as e,t,s as f,u as I,a as G,e as N,R as P,T as y,j as s,L as x,G as p,I as g,P as A,B as F,O as k}from"./index-895e883f.js";import{L as u}from"./Label-29ac64f5.js";import{B as v,u as S}from"./useGoogleAuth-482fd03e.js";const n={heading:()=>e(t.signIn.heading),signUp:()=>e(t.signUp.signUp),dontHaveAccount:()=>e(t.signIn.dontHaveAccount),signInWithGG:()=>e(t.signIn.signInWithGG),email:()=>e(t.signIn.email),password:()=>e(t.signIn.password),signIn:()=>e(t.signIn.submit),pEmail:()=>e(t.signIn.pEmail),pPassword:()=>e(t.signIn.pPassword),forgotPassword:()=>e(t.signIn.forgotPassword),submit:()=>e(t.signIn.submit)},L=f.pick(["email","password"]),B={email:"",password:""},W=()=>{var d,c;const{t:a}=I(),{signInWithGoogle:h}=S(),{loading:r,error:o}=G(i=>i.auth),{handleSubmit:b,control:l,formState:{errors:m}}=N({defaultValues:B,resolver:k(L)}),j=P(),w=b(i=>{j(y(i))});return s.jsxs(s.Fragment,{children:[s.jsx("h1",{className:"mb-1 text-lg capitalize lg:text-xl  text-center lg:mb-3  font-semibold text-text1 dark:text-white",children:a(n.heading())}),s.jsxs("p",{className:"text-xs mb-5  text-text3 font-normal text-center lg:text-sm",children:[a(n.dontHaveAccount())," ",s.jsx(x,{to:"/sign-up",className:"text-primary font-medium underline",children:a(n.signUp())})]}),s.jsx(v,{onClick:h,text:a(n.signInWithGG())}),o&&s.jsx("div",{className:"w-full rounded-xl p-4 flex mb-5 items-center justify-center text-sm bg-red-100 border text-error border-error",children:o}),s.jsxs("form",{onSubmit:w,children:[s.jsxs(p,{children:[s.jsx(u,{htmlFor:"email",className:"dark:text-text3  text-sm",children:a(n.email())}),s.jsx(g,{disabled:r,errorField:(d=m.email)==null?void 0:d.message,id:"email",name:"email",type:"text",control:l,placeholder:a(n.pEmail())})]}),s.jsxs(p,{className:"mb-0",children:[s.jsx(u,{htmlFor:"password",className:"dark:text-text3  text-sm",children:a(n.password())}),s.jsx(g,{disabled:r,errorField:(c=m.password)==null?void 0:c.message,id:"password",name:"password",type:"password",control:l,placeholder:a(n.pPassword())})]}),s.jsx("div",{className:"flex items-center justify-end mb-5",children:s.jsx(x,{to:A.reset_password,className:"text-primary text-sm font-medium hover:underline",children:a(n.forgotPassword())})}),s.jsx(F,{disabled:r,isLoading:r,type:"submit",kind:"primary",className:"w-full",children:a(n.submit())})]})]})};export{W as SignInPage};