import{j as e,L as s,o as r,i as o}from"../chunks/chunk-uTjOlwq5.js";import{L as t}from"../chunks/chunk-2v9SzRil.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BO0ZQs4D.js";/* empty css                      */const a=[];function i(l){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"If you get this warning:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Client runtime of both Server Routing and Client Routing loaded
`})}),`
`,e.jsxs(n.p,{children:["Then this means that the page loads the client runtime of ",e.jsx(t,{href:"/server-routing",children:"Server Routing"})," as well as the client runtime of ",e.jsx(t,{href:"/client-routing",children:"Client Routing"}),"."]}),`
`,e.jsxs(n.p,{children:["A given page should ",e.jsx(n.em,{children:"either"})," use Server Routing ",e.jsx(n.em,{children:"or"})," Client Routing, never both. Thus only one runtime should be loaded."]}),`
`,e.jsx(n.p,{children:"The problem is often due to one the following."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You configured ",e.jsx(n.a,{href:"https://vitejs.dev/guide/build.html#chunking-strategy",children:"Rollup's code splitting"})," in a way that includes both runtimes inside a same bundle. For example:",`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// vite.config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// This will lead to the warning above. We recommend against this practice: not only because"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// of the above warning but also because, in general, a given page should only load what is"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// strictly needed for that page. (Initial page load speed is usually more critical than"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// subsequent page load speed.)"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" rollupOptions"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  output: {"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"    manualChunks"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"id"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"      if"}),e.jsx(n.span,{style:{color:"#24292E"},children:" (id."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"includes"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'node_modules'"}),e.jsx(n.span,{style:{color:"#24292E"},children:")) {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"        return"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vendor'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"      }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { build: { rollupOptions } }"})]})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:["You're importing a utility that is only available to ",e.jsx(t,{href:"/client-routing",children:"Client Routing"})," such as ",e.jsx(n.code,{children:"prefetch()"})," or ",e.jsx(n.code,{children:"navigate()"}),", for a page that uses ",e.jsx(t,{href:"/server-routing",children:"Server Routing"}),".",`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// ❌ Don't import these for pages that use Server Routing"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { prefetch } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/client/router'"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { navigate } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/client/router'"})]})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"You'll get a warning:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:"You shouldn't `import { something } from 'vike/client/router'` when using\nServer Routing. The 'vike/client/router' utilities work only with\nClient Routing. In particular, don't `import { navigate }` nor `import { prefetch }`\nas they unnecessarily bloat your client-side bundle.\n"})}),`
`,e.jsx(n.p,{children:"If you don't get this warning, then the issue is somewhere else."}),`
`]}),`
`]}),`
`]})]})}function d(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(i,{...l})}):i(l)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:a},Symbol.toStringTag,{value:"Module"})),S={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:o}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/client-runtimes-conflict/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{S as configValuesSerialized};
