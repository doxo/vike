import{j as e,L as s,o as a,i}from"../chunks/chunk-uTjOlwq5.js";/* empty css                      */import"../chunks/chunk-BO0ZQs4D.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */const o=[];function l(n){const t={code:"code",figure:"figure",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.p,{children:"If you update to the latest Vike version and you were to apply all deprecation warnings, then you can completely ignore this migration."}),`
`,e.jsx(t.p,{children:"This migration page is only for double checking that you applied all deprecation warnings."}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Update to the latest ",e.jsx(t.code,{children:"0.4"})," version (",e.jsx(t.code,{children:"0.4.x"}),"), follow the deprecation warnings which include instructions of how to update outdated code. (TODO/v1-release: replace ",e.jsx(t.code,{children:"x"})," with actual version number.)"]}),`
`,e.jsxs(t.li,{children:["Update to ",e.jsx(t.code,{children:"v1.0.0"})," and, again, follow the new deprecation instructions (if you encounter any) ",e.jsx(t.code,{children:"v1.0.0"}),". (INTERNAL-NOTE: for example the outdated warning for ",e.jsx(t.code,{children:"pageContext.urlParsed"})," can only exist in ",e.jsx(t.code,{children:"v1.0.0"}),")"]}),`
`,e.jsxs(t.li,{children:["All types have been moved to ",e.jsx(t.code,{children:"'vike/types'"}),":",`
`,e.jsx(t.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(t.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(t.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(t.span,{className:"diff remove","data-line":"",children:[e.jsx(t.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(t.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(t.span,{style:{color:"#24292E"},children:" { SomeType } "}),e.jsx(t.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(t.span,{style:{color:"#032F62"},children:" 'vike/any-path'"})]}),`
`,e.jsxs(t.span,{className:"diff add","data-line":"",children:[e.jsx(t.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(t.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(t.span,{style:{color:"#24292E"},children:" { SomeType } "}),e.jsx(t.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(t.span,{style:{color:"#032F62"},children:" 'vike/types'"})]})]})})}),`
`,"And ",e.jsx(t.code,{children:"PageContextBuiltInClient"})," has been renamed to ",e.jsx(t.code,{children:"PageContextBuiltInClientWithClientRouting"})," and ",e.jsx(t.code,{children:"PageContextBuiltInClientWithServerRouting"}),":",`
`,e.jsx(t.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(t.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(t.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(t.span,{className:"diff remove","data-line":"",children:[e.jsx(t.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(t.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(t.span,{style:{color:"#24292E"},children:" { PageContextBuiltInClient } "}),e.jsx(t.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(t.span,{style:{color:"#032F62"},children:" 'vike/client/router'"})]}),`
`,e.jsxs(t.span,{className:"diff add","data-line":"",children:[e.jsx(t.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(t.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(t.span,{style:{color:"#24292E"},children:" { "})]}),`
`,e.jsx(t.span,{className:"diff add","data-line":"",children:e.jsx(t.span,{style:{color:"#24292E"},children:"  PageContextBuiltInClientWithClientRouting as "})}),`
`,e.jsx(t.span,{className:"diff add","data-line":"",children:e.jsx(t.span,{style:{color:"#24292E"},children:"  PageContextBuiltInClient "})}),`
`,e.jsxs(t.span,{className:"diff add","data-line":"",children:[e.jsx(t.span,{style:{color:"#24292E"},children:"} "}),e.jsx(t.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(t.span,{style:{color:"#032F62"},children:" 'vike/types'"})]}),`
`,e.jsx(t.span,{"data-line":"",children:" "}),`
`,e.jsxs(t.span,{className:"diff remove","data-line":"",children:[e.jsx(t.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(t.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(t.span,{style:{color:"#24292E"},children:" { PageContextBuiltInClient } "}),e.jsx(t.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(t.span,{style:{color:"#032F62"},children:" 'vike/client'"})]}),`
`,e.jsxs(t.span,{className:"diff add","data-line":"",children:[e.jsx(t.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(t.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(t.span,{style:{color:"#24292E"},children:" { "})]}),`
`,e.jsx(t.span,{className:"diff add","data-line":"",children:e.jsx(t.span,{style:{color:"#24292E"},children:"  PageContextBuiltInClientWithServerRouting as "})}),`
`,e.jsx(t.span,{className:"diff add","data-line":"",children:e.jsx(t.span,{style:{color:"#24292E"},children:"  PageContextBuiltInClient "})}),`
`,e.jsxs(t.span,{className:"diff add","data-line":"",children:[e.jsx(t.span,{style:{color:"#24292E"},children:"} "}),e.jsx(t.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(t.span,{style:{color:"#032F62"},children:" 'vike/types'"})]})]})})}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:"Changes that are relevant only for a (small) subset of users:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["The server entry has been renamed from ",e.jsx(t.code,{children:"dist/server/importBuild.js"})," to ",e.jsx(t.code,{children:"dist/server/entry.js"}),". (If you manually import the server entry, then make sure to update your import accordingly.)"]}),`
`]}),`
`,e.jsxs(t.p,{children:["That's it! Welcome to the ",e.jsx(t.code,{children:"v1"})," release."]})]})}function r(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:r,pageSectionsExport:o},Symbol.toStringTag,{value:"Module"})),v={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:a}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/migration/v1/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{v as configValuesSerialized};
