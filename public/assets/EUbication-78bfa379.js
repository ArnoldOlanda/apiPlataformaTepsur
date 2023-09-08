import{U as T,b as e,l as u,m as w,j as s,T as N,r as t}from"./index-b05c3593.js";import{T as a}from"./TableRowCustom-f60afab4.js";import{C as O,d as W,g as V,c as H,M as I,b as J,h as K,E as Q,D as X,G as Y,f as Z}from"./TextfieldsTools-ddad1e93.js";import{b as M,c as v}from"./TableRow-52fc41de.js";import{P as $}from"./Person-b92946bf.js";import{C as f}from"./CustomSelectSearch-f02217ed.js";const F=T(e("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn"),S=T(e("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone"),de=({children:n})=>e(u,{sx:{flex:1,display:"flex",flexDirection:"row",gap:"24px 24px;",flexWrap:"wrap"},children:n}),ue=({matricula:n,formState:i,onInputChange:r,edit:p,setFormState:c})=>e(w,{flexDirection:"column",children:s(u,{width:"100%",gap:1,children:[s(u,{flexDirection:"row",alignItems:"center",gap:2,children:[e(S,{}),e(N,{component:"h1",variant:"h6",sx:{textAlign:"left"},children:"Información de Contacto"})]}),e(M,{size:"small",sx:{alignSelf:"flex-start"},children:p?s(v,{children:[e(a,{align:"right",name:"Correo",value:e(O,{formState:i,onInputChange:r,setFormState:c})}),e(a,{align:"right",name:"Celular",value:e(W,{formState:i,onInputChange:r,setFormState:c})}),e(a,{align:"right",name:"Celular de Referencia",value:e(V,{formState:i,onInputChange:r,setFormState:c})})]}):s(v,{children:[e(a,{name:"Correo",value:n?n.alumno.correo?n.alumno.correo:"Inexistente":"-"}),e(a,{name:"Celular",value:n?n.alumno.celular:"-"}),e(a,{name:"Celular de Referencia",value:n?n.alumno.celular_referencia:"-"})]})})]})}),ve=({setFormState:n,formState:i,onInputChange:r,grados:p,edit:c,matricula:l})=>{const d=p.map(h=>({label:h.descripcion,value:h.uuid}));return e(w,{children:s(u,{width:"100%",gap:1,children:[s(u,{flexDirection:"row",alignItems:"center",gap:2,children:[e($,{}),e(N,{component:"h1",variant:"h6",sx:{textAlign:"left"},children:"Información Personal"})]}),e(M,{size:"small",children:c?s(v,{children:[e(a,{align:"right",name:"Apellido Paterno",value:e(H,{formState:i,onInputChange:r,setFormState:n})}),e(a,{align:"right",name:"Apellido Materno",value:e(I,{formState:i,onInputChange:r,setFormState:n})}),e(a,{align:"right",name:"Nombres",value:e(J,{formState:i,onInputChange:r,setFormState:n})}),e(a,{align:"right",name:"Sexo",value:e(K,{formState:i,onInputChange:r,setFormState:n})}),e(a,{align:"right",name:"Edad",value:e(Q,{formState:i,onInputChange:r,setFormState:n})}),e(a,{align:"right",name:"DNI",value:e(X,{formState:i,onInputChange:r,setFormState:n})}),e(a,{align:"right",name:"Grado de instrucción",value:e(Y,{formState:i,onInputChange:r,options:d,setFormState:n})})]}):s(v,{children:[e(a,{name:"Apellido Paterno",value:l?l.alumno.ape_paterno:"-"}),e(a,{name:"Apellido Materno",value:l?l.alumno.ape_materno:"-"}),e(a,{name:"Nombres",value:l?l.alumno.nombres:"-"}),e(a,{name:"Sexo",value:l?ee[l.alumno.sexo]:"-"}),e(a,{name:"Edad",value:l?l.alumno.edad:"-"}),e(a,{name:"DNI",value:l?l.alumno.dni:"-"}),e(a,{name:"Grado de instrucción",value:l&&l.alumno.grado_estudios?l.alumno.grado_estudios.descripcion:"-"})]})})]})})},ee={m:"Masculino",f:"Femenino"},pe=({matricula:n,formState:i,onInputChange:r,ubicacion:p,loading:c,setUbication:l,edit:d,setFormState:h})=>{const{departamentos:D,provincias:b,distritos:z,getListDistritos:y,getListProvincias:R}=p,A=[...D.map(o=>o.departamento)],[q,L]=t.useState([]),[G,_]=t.useState([]),[j,P]=t.useState(i.departamento),[U,C]=t.useState(""),[k,x]=t.useState("");return t.useEffect(()=>{d&&P(i.departamento)},[i.departamento]),t.useEffect(()=>{d&&(i.departamento!=""&&l(i.departamento,i.provincia,i.distrito),P(i.departamento))},[d]),t.useEffect(()=>{d&&(L([...b.map(o=>o.provincia)]),C(i.provincia))},[b]),t.useEffect(()=>{d&&(_([...z.map(o=>o.distrito)]),x(i.distrito))},[z]),e(w,{flexDirection:"column",children:s(u,{width:"100%",gap:1,children:[s(u,{flexDirection:"row",alignItems:"center",gap:2,children:[e(F,{}),e(N,{component:"h1",variant:"h6",sx:{textAlign:"left"},children:"Ubicación"})]}),e(M,{size:"small",sx:{alignSelf:"flex-start"},children:d?s(v,{children:[e(a,{name:"Departamento",value:e(f,{label:"Departamento",name:"departamento",value:j,onChange:o=>{o.target.value!=""&&o.target.value!=null&&(P(o.target.value),C(""),x(""),R(D.find(m=>m.departamento==o.target.value).ubigeoId).then(m=>{L([...m.map(E=>E.provincia)]),r(o)}))},options:A,required:!0})}),e(a,{name:"Provincia",value:e(f,{required:!0,label:"Provincia",name:"provincia",value:U,onChange:o=>{if(o.target.value!=""&&o.target.value!=null){C(o.target.value),x("");const m=D.find(g=>g.departamento==i.departamento).ubigeoId,E=b.find(g=>g.provincia==o.target.value).ubigeoId;y(m,E).then(g=>{_([...g.map(B=>B.distrito)]),r(o)})}},options:q,loading:c})}),e(a,{name:"Distrito",value:e(f,{required:!0,label:"Distrito",name:"distrito",value:k,onChange:o=>{o.target.value!=""&&o.target.value!=null&&(x(o.target.value),r(o))},options:G,loading:c})}),e(a,{name:"Dirección",value:e(Z,{formState:i,onInputChange:r,setFormState:h,sx:{flex:1,minWidth:"150px"},name:"direccion",variant:"outlined",size:"small",color:"secondary",value:i.direccion,onChange:r})}),e(a,{name:"Lugar de residencia",value:e(f,{label:"Lugar de residencia",name:"residencia",value:i.residencia,onChange:r,options:A,required:!0})})]}):s(v,{children:[e(a,{name:"Departamento",value:n?n.alumno.direccion.departamento:"-"}),e(a,{name:"Provincia",value:n?n.alumno.direccion.provincia:"-"}),e(a,{name:"Distrito",value:n?n.alumno.direccion.distrito:"-"}),e(a,{name:"Dirección",value:n?n.alumno.direccion.direccion_exacta:"-"}),e(a,{name:"Lugar de residencia",value:n?n.alumno.lugar_residencia:"-"})]})})]})})};export{ve as E,de as S,pe as a,ue as b};