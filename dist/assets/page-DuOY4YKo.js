import{u as w,a as x,b as C,c as z,r as g,j as e,F as r,B as h,n as b,i as j}from"./index-CbNkVbyA.js";import{u as N,F as o}from"./index-nfIlcgR5.js";import{config as s}from"./page-00kqqR_g.js";import{u as T,g as q}from"./cols-BOaOIlnr.js";import{S as D}from"./index-MxrXartz.js";import{P as A}from"./index-UsCyEadM.js";import{R as W,C as L}from"./row-CIqPCr0D.js";import{I as l}from"./index-VC5Afaew.js";import{S as y}from"./index-Bs3OOa-i.js";import{F as M}from"./FileDoneOutlined-CyyXZx_B.js";import{Q}from"./QuestionCircleOutlined-CFn8tONO.js";import{D as R}from"./DeleteOutlined-BtHf3aBj.js";import"./index-CC6DCI0n.js";import"./utils-km2FGkQ4.js";import"./index-De1vea9t.js";import"./index-CbNQXSC4.js";const{Option:X}=y;function ce(){`${w().pathname.split("/").filter(a=>a).slice(0,2).join("/")}`;const S=x(({profile:a})=>a.data),{idToken:d}=x(a=>a.Auth),{locale:m}=x(({LanguageSwitcher:a})=>a.language),{id:t}=C(),[f]=N(),c=z(),[P,u]=g.useState(!1),[E,p]=g.useState(!1),F=a=>{u(!0),b.promise(j[t?s.edit.method:s.add.method](t?`${s.edit.url}/${t}`:s.add.url,a,{headers:{"X-Portal":"dashboard",Authorization:`Bearer ${d}`}}),{loading:e.jsx("div",{className:"min-w-[200px]",children:m==="ar"?"جاري المعالجة ":"Pending"}),success:i=>{const{message:n}=i.data;return c(-1),u(!1),n||"Backend Error Occured"},error:i=>{var n,_;return u(!1),((_=(n=i.response)==null?void 0:n.data)==null?void 0:_.message)||"Backend Error Occured"}})},O=()=>{p(!0),b.promise(j[s.delete.method](`${s.delete.url}/${t}`,{headers:{"X-Portal":"dashboard",Authorization:`Bearer ${d}`}}),{loading:m==="ar"?"جاري المعالجة ":"Pending",success:a=>{const{message:i}=a.data;return c(-1),p(!1),i||"Backend Error Occured"},error:a=>{var i,n;return p(!1),((n=(i=a.response)==null?void 0:i.data)==null?void 0:n.message)||"Backend Error Occured"}})},{isFetching:B,isPending:I,isError:V,data:v,isSuccess:$}=T({queryKey:[t,d],queryFn:()=>j[s.findOne.method](`${s.findOne.url}/${t}`,{headers:{"X-Portal":"dashboard",Authorization:`Bearer ${d}`}}),enabled:!!t});g.useEffect(()=>{var a;$&&f.setFieldsValue((a=v.data)==null?void 0:a.data)},[I]);const k=[{id:1,name_en:"Outlets",name_ar:"Outlets"},{id:2,name_en:"AC Switch",name_ar:"AC Switch"},{id:3,name_en:"TELE Point",name_ar:"TELE Point"},{id:4,name_en:"Data Point",name_ar:"Data Point"},{id:5,name_en:"Bath Tub",name_ar:"Bath Tub"},{id:6,name_en:"Water Sink",name_ar:"Water Sink"},{id:7,name_en:"Water Mixer",name_ar:"Water Mixer"},{id:8,name_en:"Toilet Cabinet",name_ar:"Toilet Cabinet"},{id:9,name_en:"Water Heater",name_ar:"Water Heater"}];return e.jsx(e.Fragment,{children:e.jsxs(D,{spinning:B,children:[e.jsx("div",{className:"flex flex-row-reverse",children:t&&q(s.delete.url,s.delete.type,S)?e.jsx(A,{title:e.jsx(r,{id:"delete.deleteItem"}),description:e.jsx(r,{id:"delete.areYouSure"}),onConfirm:()=>O(),icon:e.jsx(Q,{style:{color:"red"}}),children:e.jsx(h,{loading:E,icon:e.jsx(R,{className:"mx-1"}),type:"primary",danger:!0,children:e.jsx(r,{id:"delete"})})}):""}),e.jsx(W,{children:e.jsx(L,{span:24,children:e.jsxs(o,{form:f,onFinish:F,layout:"vertical",className:"login-form",children:[e.jsx(o.Item,{label:e.jsx(r,{id:"name_en"}),name:"name_en",rules:[{required:!0,message:e.jsx(r,{id:"name_en"})}],children:e.jsx(l,{type:"text",size:"large"})}),e.jsx(o.Item,{label:e.jsx(r,{id:"name_ar"}),name:"name_ar",rules:[{required:!0,message:e.jsx(r,{id:"name_ar"})}],children:e.jsx(l,{type:"text",size:"large"})}),e.jsx(o.Item,{label:e.jsx(r,{id:"price"}),name:"price",rules:[{required:!0,message:e.jsx(r,{id:"price"})}],children:e.jsx(l,{type:"text",size:"large"})}),e.jsx(o.Item,{label:e.jsx(r,{id:"percentage"}),name:"percentage",rules:[{required:!0,message:e.jsx(r,{id:"percentage"})}],children:e.jsx(l,{type:"text",size:"large"})}),e.jsx(o.Item,{label:e.jsx(r,{id:"category"}),name:"category",rules:[{required:!0,message:e.jsx(r,{id:"category"})}],children:e.jsx(y,{size:"large",children:k.map(a=>e.jsx(X,{value:a.id,children:m==="ar"?a.name_ar:a.name_en},a.id))})}),e.jsxs("div",{className:"flex gap-4 flex-wrap mt-8",children:[e.jsx(h,{className:"w-[90px]",icon:e.jsx(M,{}),loading:P,type:"primary",htmlType:"submit",children:e.jsx("span",{children:t?e.jsx(r,{id:"global.save"}):e.jsx(r,{id:"global.save"})})}),e.jsx(h,{onClick:()=>c(-1),className:"w-[90px]",children:e.jsx(r,{id:"global.back"})})]})]})})})]})})}export{ce as default};