import{r as S,j as o,B as P,m as D,T as B,b as e,q as v,g as I,l as y,Q as j,p as A,S as F}from"./index-b05c3593.js";import{P as T}from"./Page-87bac860.js";import{u as _}from"./usePagos-2be5453f.js";import{T as C}from"./TablaDeudas-0a20c1ac.js";import"./stylesDrag-a0f829b9.js";/* empty css               */import{S as q}from"./Step3-ca5f4f1f.js";import{C as z}from"./CaptionBox-53db12e8.js";import{L}from"./LoadingButton-caa486e8.js";import"./utilities-59a1cf49.js";import"./Tooltip-8a46e05f.js";import"./GlobalAlerts-e291f7f6.js";import"./TableRow-52fc41de.js";import"./TableContainer-10b5223d.js";import"./TableHead-f4539647.js";import"./SelectCustom-ab67c468.js";import"./MenuItem-d8a67f6c.js";import"./DragDrop-a7418bc8.js";import"./index-bf7d37e3.js";import"./TextfieldsTools-ddad1e93.js";import"./CircularProgress-eeae7465.js";import"./InputAdornment-b1693cda.js";import"./Info-b8afdcbc.js";const E=({formState:s,onInputChange:l,onImageChange:c,tipoPago:p,onBack:m,selected:d,onSubmit:u,alumno:r,deudas:x=[]})=>{const a=x.find((g,f)=>g.uuid==d);return S.useEffect(()=>{l({target:{name:"monto",value:a.monto}})},[]),o(P,{component:"form",style:{gap:"24px 24px",display:"flex",flexDirection:"column",flexWrap:"wrap",maxWidth:"100%"},onSubmit:u,children:[o(D,{sx2:N,children:[o(B,{variant:"body1",sx:{textAlign:"left",mb:3},children:[e("b",{children:"Alumno: "})," ",`${r.nombres} ${r.ape_paterno} ${r.ape_materno}`]}),e(C,{deudas:a?[a]:[]})]}),e(q,{formState:s,onImageChange:c,onInputChange:l,pagos:p,flag:!1,requiredFig:!0,sistema:!0}),o(P,{sx:{...Q,justifyContent:"space-between"},children:[e(v,{color:"secondary",variant:"contained",onClick:m,children:"Atras"}),e(v,{type:"submit",color:"primary",variant:"contained",children:"Registrar"})]})]})},N={flex:1,borderRadius:2,p:4,gap:0,display:"flex",flexDirection:"column",boxSizing:"border-box",maxWidth:"100%"},Q={flex:0,display:"flex",flexDirection:"row",gap:"0px 24px;",flexWrap:"wrap"},ge=({toggleDrawer:s})=>{const{user:l,isLoading:c,token:p}=I(t=>t.user),m={token:p,nroDocu:"",entidad:"",monto:0,tipoPago:"",imgDoc:null,horaPago:"00:00",fechaPago:""},{formState:d,onInputChange:u,tipoPago:r,onImageChange:x,onSubmit:a,onResetForm:g,deudas:f,getDeudas:R,alumno:n}=_(m),[i,W]=S.useState(""),[h,b]=S.useState(""),$=({target:t})=>W(t.value),k=t=>{b(t),g()};return o(T,{title:"Registrar Pago",toggleDrawer:s,children:[e(y,{gap:3,sx:{maxWidth:"100%",height:"100%",flex:1},children:h?e(E,{formState:d,onInputChange:u,onImageChange:x,tipoPago:r,onBack:()=>{b(null)},selected:h,onSubmit:t=>{t.preventDefault(),a(h,()=>b(null))},alumno:n,deudas:f}):o(j,{children:[e(D,{sx2:w,children:o(y,{flexDirection:"row",alignItems:"center",flexWrap:"wrap",gap:2,children:[e(B,{fontWeight:"medium",children:"Buscar deudas"}),o(y,{flexDirection:"row",alignItems:"center",gap:"0px 24px",children:[e(A,{sx:{minWidth:"150px"},label:"DNI",variant:"outlined",size:"small",color:"secondary",value:i,onChange:$}),e(L,{loading:c,color:"primary",variant:"contained",onClick:()=>{if(i==""||i.length!=8)return F.fire({title:"DNI incorrecto",icon:"error",timer:1e3,showConfirmButton:!1});R(i)},children:"Buscar"})]})]})}),o(D,{sx2:w,children:[o(B,{variant:"body1",sx:{textAlign:"left",mb:3},children:[e("b",{children:"Alumno: "})," ",n?`${n.nombres} ${n.ape_paterno} ${n.ape_materno}`:"-"]}),e(C,{deudas:f,onPay:k})]})]})}),e(z,{text:"Busque un alumno por su dni y en la tabla apareceran las deudas pendientes. Para pagar presione el boton pagar."})]})},w={flex:0,borderRadius:2,p:4,display:"flex",flexDirection:"column",boxSizing:"border-box",justifyContent:"start",alignItems:"start"};export{ge as default};
