import{j as t,a as i}from"./chunk-uTjOlwq5.js";/* empty css              */function f(n){return t.jsx(s,{type:"warning",...n})}function j(n){return t.jsx(s,{type:"advanced",...n})}function x(n){return t.jsx(s,{type:"construction",...n})}function m(n){return t.jsx(s,{type:"contribution",...n})}function g(n){return t.jsx(s,{type:"danger",...n})}function s({type:n,icon:o,iconMargin:a,children:l,style:u}){i(o===null||o||n,{icon:o,type:n}),a??(a=2);let e="custom-icon";if(n&&(e=`${e} type-${n}`),!o&&n){let r="";n==="danger"&&(o="⛔",r="note-color-red"),n==="warning"&&(o="⚠️",r="note-color-yellow"),n==="construction"&&(o="🚧",r="note-color-yellow"),n==="contribution"&&(o="💚",r="note-color-green"),n==="advanced"&&(o="🧠",r="note-color-pink"),i(o),i(r),e=`${e} ${r}`}return t.jsxs("blockquote",{className:e,style:u,children:[t.jsx("div",{style:{marginBottom:20}}),o&&t.jsxs(t.Fragment,{children:[t.jsx("span",{style:{fontFamily:"emoji"},children:o}),t.jsx("span",{style:{width:a??void 0,display:"inline-block"}})," "]}),t.jsx("div",{className:"blockquote-content",children:l}),t.jsx("div",{style:{marginTop:20}})]})}export{j as A,m as C,g as D,f as W,x as a};
