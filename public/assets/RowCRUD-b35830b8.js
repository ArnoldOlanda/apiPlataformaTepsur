import{U as f,b as n,u as $,aD as i,j as y,n as z,bb as w,l as S}from"./index-b05c3593.js";import{a as v,T as c}from"./TableRow-52fc41de.js";const x=f(n("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");function I({id:l,row:r,dataTypes:d=[],extraActions:t=[],columnWidths:p,setSelected:m,matches:s,selected:u}){const a=$(),[h,g]=i.useState(null),k=!!h,b=e=>{g(e.currentTarget)},C=()=>{g(null)};return y(v,{onClick:()=>{t.length!=0&&m(l)},sx:{backgroundColor:!s&&u==l?"#C5C5C5":""},children:[r.missing&&n(c,{align:"center",children:r.missing}),n(c,{align:"center",children:l+1}),d.filter(e=>e!="missing").map((e,o)=>n(c,{align:"center",component:"th",scope:"row",style:{minWidth:`${p[e]}ch`,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:r[e]},`row${l}${o}`)),s&&t.length!=0&&(t.length>2?n(c,{align:"center",style:{position:"sticky",right:0,background:a.palette.background.defaul2,zIndex:2,borderLeft:`1px solid ${a.palette.background.border}`},children:n(z,{onClick:b,children:n(x,{})})}):n(c,{align:"center",style:{position:"sticky",right:0,background:a.palette.background.defaul2,zIndex:2},children:t.map((e,o)=>i.cloneElement(e,{key:`action${l}${o}`,id:l}))})),n(w,{anchorEl:h,open:k,onClose:C,transformOrigin:{horizontal:"right",vertical:"center"},anchorOrigin:{horizontal:"left",vertical:"center"},children:n(S,{px:1,children:t.map((e,o)=>i.cloneElement(e,{key:`action${l}${o}`,id:l}))})})]})}export{I as R};
