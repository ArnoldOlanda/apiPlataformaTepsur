import{b as r,b4 as d,p as f,j as h,r as x}from"./index-b05c3593.js";import{A as C}from"./Autocomplete-7a426b1a.js";import{C as A}from"./CircularProgress-eeae7465.js";function j({options:s=[],name:o,value:t,onChange:m,label:u,required:a,disabled:i=!1,flex:c=1,loading:n=!1,wMargin:l=!1}){return r(d,{size:"small",fullWidth:!0,sx:{flex:c,minWidth:"150px",mt:l?0:2,mb:l?0:1},children:r(C,{value:t==""?null:s.includes(t)?t:null,onChange:(e,p)=>{m({target:{name:o,value:p}})},loading:n,disabled:i,size:"small",options:s,renderInput:e=>r(f,{color:"secondary",...e,label:u,required:a,InputProps:{...e.InputProps,endAdornment:h(x.Fragment,{children:[n?r(A,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}})})})}export{j as C};
