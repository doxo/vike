import{j as e,L as n,o as s,i as l}from"../chunks/chunk-uTjOlwq5.js";import{L as a}from"../chunks/chunk-2v9SzRil.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BO0ZQs4D.js";import{U as d}from"../chunks/chunk-CLcx6xD0.js";import{C as p}from"../chunks/chunk-BReOJ8Zz.js";import{E as i}from"../chunks/chunk-CkBnwtOo.js";/* empty css                      *//* empty css                      */import"../chunks/chunk-DCNDSUYq.js";const m=[{pageSectionId:"example",pageSectionLevel:2,pageSectionTitle:"Example"},{pageSectionId:"html-streaming",pageSectionLevel:2,pageSectionTitle:"HTML Streaming"}];function r(o){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{url:"https://www.fastify.io"}),`
`,e.jsx(d,{children:"Fastify"}),`
`,e.jsx("h2",{id:"example",children:"Example"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(i,{timestamp:"2025.01",repo:"whyte50/vike-example-fastify"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(i,{timestamp:"2024.01",repo:"royalswe/vike-fastify-boilerplate"}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"html-streaming",children:"HTML Streaming"}),`
`,e.jsxs(t.p,{children:["In general, we recommend using ",e.jsx(t.code,{children:"pageContext.httpResponse.pipe()"})," for integrating ",e.jsx(a,{href:"/streaming",children:"HTML streaming"})," to your server, see ",e.jsx(a,{href:"/streaming#basics"}),"."]}),`
`,e.jsxs(t.p,{children:["But Fastify doesn't seem to expose any writable stream (as far as we know). As a workaround, you can directly use Node.js's writable stream as shown ",e.jsx(t.a,{href:"https://github.com/royalswe/vike-fastify-boilerplate/blob/74bf861b98bfc6ab0cdffc5d3483b52c18cf1c14/server/index.ts#L84-L87",children:"here"}),". If this workaround doesn't work out for you, you can fallback to ",e.jsx(t.code,{children:"pageContext.httpResponse.getReadableNodeStream()"}),"."]})]})}function u(o={}){const{wrapper:t}=o.components||{};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:u,pageSectionsExport:m},Symbol.toStringTag,{value:"Module"})),U={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:n}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:l}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/fastify/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{U as configValuesSerialized};
