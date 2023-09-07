import{j as a,m as z,l as g,b as e,as as ne,T as u,p as A,ah as se,G as le,g as ce,r as h,u as de,a as me,E as pe,n as I,aI as ue,W as he,q as k}from"./index-b05c3593.js";import{S as F,E as ge,a as fe,b as be}from"./EUbication-78bfa379.js";import{g as T,c as ve,d as xe}from"./utilities-59a1cf49.js";import{P as Se}from"./Page-87bac860.js";import{P as Ce,U as ye}from"./UpdateImgPago-63cb66da.js";import{T as t}from"./TableRowCustom-f60afab4.js";import{S as Ee}from"./SelectCustom-ab67c468.js";import{C as _}from"./CustomSelectSearchLabel-0730f57a.js";import{b as Pe,c as M}from"./TableRow-52fc41de.js";import{u as De}from"./useSpecializations-d4d20def.js";import{A as we}from"./AddSchedule-c46ae1fc.js";import{E as Le}from"./Edit-18203eee.js";import{S as Ae}from"./Save-65a6da06.js";import{P as Ie}from"./Print-c93fef86.js";import"./TextfieldsTools-ddad1e93.js";import"./CircularProgress-eeae7465.js";import"./Person-b92946bf.js";import"./CustomSelectSearch-f02217ed.js";import"./Autocomplete-7a426b1a.js";import"./GlobalAlerts-e291f7f6.js";import"./Tooltip-8a46e05f.js";import"./index-bf7d37e3.js";/* empty css               */import"./TableContainer-10b5223d.js";import"./Upload-b6926ce3.js";import"./DragDrop-a7418bc8.js";import"./stylesDrag-a0f829b9.js";import"./MenuItem-d8a67f6c.js";import"./specialization.service-3d04622c.js";import"./schedule.service-5bfabb81.js";import"./careers.service-c54b684b.js";import"./ToggleButtonGroup-67aa73a9.js";import"./LoadingButton-caa486e8.js";const ke=({matricula:i,formState:s,onInputChange:c,especialidades:C,edit:f,sedes:b,handleOpenAdd:y})=>{const v=[...C.map(r=>({label:r.nombre,value:r.uuid}))],x=[...b.map(r=>({label:r.nombre,value:r.uuid}))];return a(z,{flexDirection:"column",justifyContent:"space-between",children:[a(g,{flexDirection:"row",alignItems:"center",gap:2,children:[e(ne,{}),e(u,{component:"h1",variant:"h6",sx:{textAlign:"left"},children:"Datos Académicos"})]}),e(Pe,{size:"small",sx:{alignSelf:"flex-start"},children:f?a(M,{children:[e(t,{align:"right",name:"Modalidad",value:e(Ee,{label:"Modalidad",name:"modalidad",value:s.modalidad,onChange:c,opts:Fe})}),e(t,{align:"right",name:"Especialidad",value:e(_,{required:!0,label:"Especialidad",name:"especializacion",value:s.especializacion,onChange:c,options:v})}),e(t,{align:"right",name:"Sede",value:e(_,{required:!0,label:"Sede",name:"sede",value:s.sede,onChange:c,options:x})}),e(t,{align:"right",name:"Horario",value:e(A,{margin:"normal",sx:{flex:1,minWidth:"150px"},name:"horario",label:"Horario",onClick:y,variant:"outlined",size:"small",color:"secondary",value:s.horario,readOnly:!0})}),e(t,{align:"right",name:"Fecha de Inicio",value:e(A,{margin:"normal",sx:{flex:1,minWidth:"150px"},name:"inicio",label:"Inicio",type:"date",InputLabelProps:{shrink:!0},variant:"outlined",size:"small",color:"secondary",value:s.inicio,onChange:c})})]}):a(M,{children:[e(t,{align:"right",name:"Especialidad",value:i?i.especializacion.nombre:"-"}),e(t,{align:"right",name:"Modalidad",value:i?_e[i.modalidad]:"-"}),e(t,{align:"right",name:"Sede",value:i?i.sede.nombre:"-"}),e(t,{align:"right",name:"Horario",value:i?`${i.horario.hora_inicio} - ${i.horario.hora_fin} / ${T(i.horario.dias)}`:"-"}),e(t,{align:"right",name:"Fecha de Inicio",value:i?ve(i.fecha_inicio):"-"})]})})]})},Fe=[{label:"Presencial",value:"presencial"},{label:"Virtual",value:"virtual"}],_e={presencial:"Presencial",virtual:"Virtual"},ua=({toggleDrawer:i})=>{const{id:s}=se(),c=le(),f=new URLSearchParams(c.search).get("edit"),{user:b,isLoading:y,token:v}=ce(p=>p.user),x={token:v,uuid:"",anio:new Date().getFullYear(),mes:new Date().getMonth(),searchFor:"",search:"",nombres:"",ape_paterno:"",ape_materno:"",celular:"",celReferencia:"",correo:"",edad:"",dni:"",sexo:"",grado:"",departamento:"",provincia:"",distrito:"",direccion:"",residencia:"",carrera:"",isCarrera:!0,modulos:[],horario:"",inicio:"",sede:b.sede.uuid,modo:"",pendiente:!1,tipoPago:"",nroDocu:"",entidad:"",monto:0,imgDoc:null,hora_inicio:"",hora_fin:"",turno:"",dias:[],responsable:"",edit:!1,horaPago:"00:00",tipoCarre:"modular",fechaPago:""},r=De(x),{formState:n,onInputChange:d,modules:W,loading:$,setUbication:j,departamentos:R,distritos:U,provincias:O,getListDistritos:B,getListProvincias:H,grados:V,matricula:o,getSpecialization:q,getpdf:G,data:N,sedes:J,getListSpecializations:Q,setFormState:m,onEditMatricula:Y}=r,[l,K]=h.useState(f??!1),X={departamentos:R,distritos:U,provincias:O,getListDistritos:B,getListProvincias:H},Z=de(),E=me(Z.breakpoints.up("sm")),S=()=>{K(!l)},ee=p=>{p.preventDefault(),Y(()=>{S()})},[ae,P]=h.useState(!1),ie=()=>{P(!1)},oe=()=>{P(!0)},[te,D]=h.useState(!1),re=()=>{D(!0)},w=()=>{D(!1)},L=async()=>{d({target:{name:"horario",value:`${n.hora_inicio} - ${n.hora_fin} / ${T(n.dias.map(p=>Me[p]))}`}}),w()};return h.useEffect(()=>{q(s),Q()},[]),o==-1?e(pe,{}):a(Se,{toggleDrawer:i,Actions:l?e(I,{onClick:S,children:e(ue,{})}):e(I,{onClick:S,children:e(Le,{})}),customTitle:!0,title:a(g,{flexDirection:"row",alignItems:"center",columnGap:1,justifyContent:"center",flexWrap:"wrap",children:[e(he,{to:"/home/matricula/especialidades",style:{color:"gray",textDecoration:"none"},children:a(u,{fontWeight:"bold",component:"h1",variant:E?"body1":"caption",sx:{textAlign:"left","&:hover":{textDecoration:"underline"}},children:["Listado Especialidades ",">"]})}),e(u,{fontWeight:"bold",component:"h1",variant:E?"h6":"body1",sx:{textAlign:"left",position:"sticky"},children:"Detalle Matricula"})]}),children:[a(g,{component:"form",gap:3,onSubmit:ee,children:[e(z,{sx2:{background:"#2C2C2C"},flexDirection:"column",children:a(g,{justifyContent:"space-between",flexDirection:"row",flexWrap:"wrap",gap:1,children:[a(u,{color:"white",children:[e("b",{children:"Fecha:"})," ",o?xe(o.fecha_inscripcion):"-"]}),a(u,{color:"white",children:[e("b",{children:"Responsable:"})," ",o?`${o.secretaria.nombres.split(" ")[0]} ${o.secretaria.ape_paterno}`:"-"]})]})}),a(F,{children:[e(ge,{matricula:o,formState:n,onInputChange:d,grados:V,edit:l,setFormState:m}),e(fe,{matricula:o,formState:n,onInputChange:d,ubicacion:X,loading:$,setUbication:j,edit:l,setFormState:m})]}),e(ke,{sedes:J,especialidades:N,modules:W,matricula:o,formState:n,onInputChange:d,edit:l,setFormState:m,handleOpenAdd:re}),a(F,{children:[e(be,{matricula:o,formState:n,onInputChange:d,edit:l,setFormState:m}),e(Ce,{handleOpenImg:oe,especialidad:!0,matricula:o,setFormState:m})]}),l?a(k,{variant:"contained",color:"primary",type:"submit",children:[" ",e(Ae,{sx:{mr:1}})," Guardar matricula"]}):a(k,{variant:"contained",color:"primary",onClick:()=>G(o.uuid),children:[" ",e(Ie,{sx:{mr:1}})," Imprimir matricula"]})]}),e(ye,{formPago:r,handleClose:ie,open:ae}),e(we,{formState:n,handleClose:w,isLoading:!1,onEdit:L,onInputChange:d,onSubmit:L,open:te})]})},Me={0:"Lun",1:"Mar",2:"Mie",3:"Jue",4:"Vie",5:"Sab",6:"Dom"};export{ua as default};
