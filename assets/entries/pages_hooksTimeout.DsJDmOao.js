import{j as e,L as i,o,i as d}from"../chunks/chunk-uTjOlwq5.js";import{L as s}from"../chunks/chunk-2v9SzRil.js";/* empty css                      */import{W as l}from"../chunks/chunk-DCNDSUYq.js";import{C as r}from"../chunks/chunk-tZivrO_A.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BO0ZQs4D.js";/* empty css                      *//* empty css                      *//* empty css                      */const c=[{pageSectionId:"disable",pageSectionLevel:2,pageSectionTitle:"Disable"}];function t(a){const n={code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...a.components};return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:["This is a V1 design only feature: make sure to 1. update Vike to the latest version and 2. ",e.jsx(s,{href:"/migration/v1-design",children:"migrate to the V1 design"}),"."]}),`
`,e.jsxs(n.p,{children:["If a ",e.jsx(s,{href:"/hooks",children:"hook"})," returns a promise that takes too much time to resolve, then Vike logs an error and your ",e.jsx(s,{href:"/error-page",children:"error page"})," is rendered."]}),`
`,e.jsx(r,{lineBreak:"white-space",children:e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Vike first logs a warning (still awaiting your hook)"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"[vike][Warning] The "}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"data"}),e.jsx(n.span,{style:{color:"#24292E"},children:"() hook defined by /pages/movies/+data.js is slow: it's taking more than 4 seconds"})]})]})})})}),`
`,e.jsx(r,{lineBreak:"white-space",children:e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Then Vike logs an error (and renders your error page)"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"[vike][Error] The "}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"data"}),e.jsx(n.span,{style:{color:"#24292E"},children:"() hook defined by /pages/movies/+data.js timed out: it didn't finish after 30 seconds"})]})]})})})}),`
`,e.jsx(n.p,{children:"You can configure the timeout of hooks:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// +config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  hooksTimeout: {"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    data: {"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      // Increase warning timeout to 5 seconds"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"      warning: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"5"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" *"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" 1000"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      // Increase error timeout to one minute"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"      error: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"60"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" *"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" 1000"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h2",{id:"disable",children:"Disable"}),`
`,e.jsx(n.p,{children:"You can disable timeouts:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// +config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  hooksTimeout: {"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    data: {"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      // Disable the warning timeout"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"      warning: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"false"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // No timeout at all: Vike won't warn and will indefinitely await the"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // promise returned by onRenderClient()"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"    onRenderClient: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"false"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(l,{children:[e.jsx(n.p,{children:"We strongly discourage this practice:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You may always want to be informed when one of your hooks is slowing down your UI."}),`
`,e.jsx(n.li,{children:"Showing an error page is usually a better UX than displaying a UI that hangs indefinitely."}),`
`,e.jsx(n.li,{children:`If your server doesn't time out long running HTTP requests, then you have a memory leak.
Instead, consider increasing timeouts as the need arises.`}),`
`]})]}),`
`,e.jsx(n.p,{children:"You can also disable timeouts for all hooks:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// +config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // We strongly recommend against this"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  hooksTimeout: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"false"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})})]})}function h(a={}){const{wrapper:n}=a.components||{};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:h,pageSectionsExport:c},Symbol.toStringTag,{value:"Module"})),v={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:i}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/hooksTimeout/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{v as configValuesSerialized};
