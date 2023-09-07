import{U as I,b as r,F as d,$ as T,a1 as l,bc as R,a3 as N,Y as A,Z as U,T as E,r as p,a2 as L,aa as _,a4 as j,a5 as H}from"./index-b05c3593.js";const re=I(r("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),O=I(r("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),W=["slots","slotProps"],q=d(T)(({theme:e})=>l({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":l({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":l({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:R(e.palette.grey[200],.12)}:{backgroundColor:R(e.palette.grey[600],.12)})})),F=d(O)({width:24,height:16});function V(e){const{slots:o={},slotProps:n={}}=e,a=N(e,W),t=e;return r("li",{children:r(q,l({focusRipple:!0},a,{ownerState:t,children:r(F,l({as:o.CollapsedIcon,ownerState:t},n.collapsedIcon))}))})}function Y(e){return U("MuiBreadcrumbs",e)}const Z=A("MuiBreadcrumbs",["root","ol","li","separator"]),D=Z,G=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],J=e=>{const{classes:o}=e;return H({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},Y,o)},K=d(E,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,o)=>[{[`& .${D.li}`]:o.li},o.root]})({}),Q=d("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,o)=>o.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),X=d("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,o)=>o.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ee(e,o,n,a){return e.reduce((t,u,c)=>(c<e.length-1?t=t.concat(u,r(X,{"aria-hidden":!0,className:o,ownerState:a,children:n},`separator-${c}`)):t.push(u),t),[])}const oe=p.forwardRef(function(o,n){const a=L({props:o,name:"MuiBreadcrumbs"}),{children:t,className:u,component:c="nav",slots:x={},slotProps:P={},expandText:B="Show path",itemsAfterCollapse:m=1,itemsBeforeCollapse:b=1,maxItems:f=8,separator:y="/"}=a,M=N(a,G),[S,$]=p.useState(!1),i=l({},a,{component:c,expanded:S,expandText:B,itemsAfterCollapse:m,itemsBeforeCollapse:b,maxItems:f,separator:y}),g=J(i),k=_({elementType:x.CollapsedIcon,externalSlotProps:P.collapsedIcon,ownerState:i}),w=p.useRef(null),z=s=>{const C=()=>{$(!0);const v=w.current.querySelector("a[href],button,[tabindex]");v&&v.focus()};return b+m>=s.length?s:[...s.slice(0,b),r(V,{"aria-label":B,slots:{CollapsedIcon:x.CollapsedIcon},slotProps:{collapsedIcon:k},onClick:C},"ellipsis"),...s.slice(s.length-m,s.length)]},h=p.Children.toArray(t).filter(s=>p.isValidElement(s)).map((s,C)=>r("li",{className:g.li,children:s},`child-${C}`));return r(K,l({ref:n,component:c,color:"text.secondary",className:j(g.root,u),ownerState:i},M,{children:r(Q,{className:g.ol,ref:w,ownerState:i,children:ee(S||f&&h.length<=f?h:z(h),g.separator,y,i)})}))}),te=oe;export{te as B,re as N};
