import{j as e,L as a,o as t,i}from"../chunks/chunk-uTjOlwq5.js";import{L as s}from"../chunks/chunk-2v9SzRil.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BO0ZQs4D.js";/* empty css                      */const o=[{pageSectionId:"built-in",pageSectionLevel:2,pageSectionTitle:"Built-in"},{pageSectionId:"custom",pageSectionLevel:2,pageSectionTitle:"Custom"},{pageSectionId:"faq",pageSectionLevel:2,pageSectionTitle:"FAQ"},{pageSectionId:"can-i-mutate-pagecontext",pageSectionLevel:3,pageSectionTitle:"Can I mutate `pageContext`?"},{pageSectionId:"can-i-use-pagecontext-as-a-ui-store",pageSectionLevel:3,pageSectionTitle:"Can I use `pageContext` as a UI store?"},{pageSectionId:"can-i-check-whether-ssr-is-enabled",pageSectionLevel:3,pageSectionTitle:"Can I check whether SSR is enabled?"},{pageSectionId:"typescript",pageSectionLevel:2,pageSectionTitle:"TypeScript"},{pageSectionId:"lifecycle",pageSectionLevel:2,pageSectionTitle:"Lifecycle"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function r(l){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"pageContext"})," object provides contextual information about the current page."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/product/@id/+data.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" async"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" data"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Commonly used built-in properties"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContext.urlParsed.pathname "}),e.jsx(n.span,{style:{color:"#6A737D"},children:"// /product/42"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContext.routeParams.id "}),e.jsx(n.span,{style:{color:"#6A737D"},children:"// 42"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContext.headers "}),e.jsx(n.span,{style:{color:"#6A737D"},children:"// { cookie: 'user-id=1337', ... }"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Commonly added custom properties"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContext.user "}),e.jsx(n.span,{style:{color:"#6A737D"},children:"// { name: 'John', id: 1337 }"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContext.initialStoreState "}),e.jsx(n.span,{style:{color:"#6A737D"},children:"// { time: 1718872184291 }"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"+data"})," hook is explained at ",e.jsx(s,{href:"/data-fetching"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"It includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(s,{href:"#built-in",children:"Built-in properties"})," such as ",e.jsx(n.code,{children:"pageContext.urlParsed"})," and ",e.jsx(n.code,{children:"pageContext.routeParams"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(s,{href:"#custom",children:"Custom properties"})," that you can add, for example ",e.jsx(n.code,{children:"pagecontext.user"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"It's accessible to all:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(s,{href:"/hooks",children:"Vike hooks"}),", such as ",e.jsx(s,{href:"/data",children:e.jsx(n.code,{children:"+data"})}),"."]}),`
`,e.jsxs(n.li,{children:["UI components, by using ",e.jsx(s,{href:"/usePageContext",children:e.jsx(n.code,{children:"usePageContext()"})}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can access ",e.jsx(n.code,{children:"pageContext"})," from the client-side by using ",e.jsx(s,{href:"/passToClient",children:e.jsx(n.code,{children:"passToClient"})}),"."]}),`
`,e.jsx("h2",{id:"built-in",children:"Built-in"}),`
`,e.jsx(n.p,{children:"Built-in properties:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.Page"})}),": the ",e.jsx(n.code,{children:"export { Page }"})," or ",e.jsx(n.code,{children:"export default"})," of the ",e.jsxs(s,{href:"/Page",children:[e.jsx(n.code,{children:"+Page.js"})," file"]}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.data"})}),": the value returned by the ",e.jsxs(s,{href:"/data",children:[e.jsx(n.code,{children:"data()"})," hook"]}),", see also ",e.jsx(s,{href:"/useData"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.routeParams"})}),": the route parameters. (E.g. ",e.jsx(n.code,{children:"pageContext.routeParams.movieId"})," for a page with a Route String ",e.jsx(n.code,{children:"/movie/@movieId"}),".)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.urlOriginal"})}),": the current URL."]}),`
`,e.jsxs(n.p,{children:["On the server-side, ",e.jsx(n.code,{children:"pageContext.urlOriginal"})," is the value you passed at the server middleware:"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Server middleware"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"app."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"get"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'*'"}),e.jsx(n.span,{style:{color:"#24292E"},children:", "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"async"}),e.jsx(n.span,{style:{color:"#24292E"},children:" ("}),e.jsx(n.span,{style:{color:"#E36209"},children:"req"}),e.jsx(n.span,{style:{color:"#24292E"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" pageContextInit"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E"},children:" {}"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // `pageContext.urlOriginal` is defined here"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContextInit.urlOriginal "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#24292E"},children:" req.url"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" pageContext"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" await"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" renderPage"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(pageContextInit)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  /* ... */"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"})"})})]})})}),`
`,e.jsx(n.p,{children:"On the client-side:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When using ",e.jsx(s,{href:"/client-routing",children:"Client Routing"}),", the value of ",e.jsx(n.code,{children:"pageContext.urlOriginal"})," is the browser's current URL (",e.jsx(n.code,{children:"window.location.href"}),")."]}),`
`,e.jsxs(n.li,{children:["When using ",e.jsx(s,{href:"/server-routing",children:"Server Routing"}),", the value of ",e.jsx(n.code,{children:"pageContext.urlOriginal"})," is ",e.jsx(n.code,{children:"undefined"})," (unless you use ",e.jsx(n.a,{href:"/passToClient",children:e.jsx(n.code,{children:"passToClient"})}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.urlPathname"})}),": alias for ",e.jsx(n.code,{children:"pageContext.urlParsed.pathname"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.urlParsed"})}),": URL information:"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"ts","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"ts","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"{"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  pathname"}),e.jsx(n.span,{style:{color:"#24292E"},children:": string"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  pathnameOriginal"}),e.jsx(n.span,{style:{color:"#24292E"},children:": string"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  search"}),e.jsx(n.span,{style:{color:"#24292E"},children:": Record"}),e.jsx(n.span,{style:{color:"#D73A49"},children:"<"}),e.jsx(n.span,{style:{color:"#24292E"},children:"string, string"}),e.jsx(n.span,{style:{color:"#D73A49"},children:">"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" // AKA query parameters"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  searchAll"}),e.jsx(n.span,{style:{color:"#24292E"},children:": Record"}),e.jsx(n.span,{style:{color:"#D73A49"},children:"<"}),e.jsx(n.span,{style:{color:"#24292E"},children:"string, string[]"}),e.jsx(n.span,{style:{color:"#D73A49"},children:">"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  searchOriginal"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"null"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(n.span,{style:{color:"#24292E"},children:" string"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  hash"}),e.jsx(n.span,{style:{color:"#24292E"},children:": string"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  hashOriginal"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"null"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(n.span,{style:{color:"#24292E"},children:" string"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  href"}),e.jsx(n.span,{style:{color:"#24292E"},children:": string"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  origin"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"null"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(n.span,{style:{color:"#24292E"},children:" string"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  protocol"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"null"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(n.span,{style:{color:"#24292E"},children:" string"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  hostname"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"null"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(n.span,{style:{color:"#24292E"},children:" string"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  port"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"null"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" |"}),e.jsx(n.span,{style:{color:"#24292E"},children:" string"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`https://example.com/some-base-url/hello/s%C3%A9bastien?fruit=%C3%A2pple&fruit=orânge#%C3%A2ge
`})}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"{"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Without Base URL, decodes escaped characters"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  pathname"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'/hello/sébastien'"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // With Base URL, doesn't decode escaped characters"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  pathnameOriginal"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'/some-base-url/hello/s%C3%A9bastien'"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  search"}),e.jsx(n.span,{style:{color:"#24292E"},children:": { "}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"fruit"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'orânge'"}),e.jsx(n.span,{style:{color:"#24292E"},children:" },"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  searchAll"}),e.jsx(n.span,{style:{color:"#24292E"},children:": { "}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"fruit"}),e.jsx(n.span,{style:{color:"#24292E"},children:": ["}),e.jsx(n.span,{style:{color:"#032F62"},children:"'âpple'"}),e.jsx(n.span,{style:{color:"#24292E"},children:", "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'orânge'"}),e.jsx(n.span,{style:{color:"#24292E"},children:"] },"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  searchOriginal"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'?fruit=%C3%A2pple&fruit=orânge'"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  hash"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'âge'"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  hashOriginal"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'#%C3%A2ge'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Without Base URL, doesn't decode escaped characters"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  href"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'https://example.com/hello/s%C3%A9bastien?fruit=%C3%A2pple&fruit=orânge#%C3%A2ge'"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  origin"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'https://example.com'"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  protocol"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'https://'"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  hostname"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'example.com'"}),e.jsx(n.span,{style:{color:"#24292E"},children:", "}),e.jsx(n.span,{style:{color:"#6A737D"},children:"// 'localhost' for http://localhost:3000"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  port"}),e.jsx(n.span,{style:{color:"#24292E"},children:": "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"null"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" // 3000 for http://localhost:3000"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.headers"})}),": The headers of the HTTP Request. As a string object (",e.jsx(n.code,{children:"Record<string, string>"}),") normalized by Vike, see ",e.jsx(s,{href:"/headers"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.headersOriginal"})}),": The headers of the HTTP Request. The original object provided by the server, see ",e.jsx(s,{href:"/headers"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.config"})}),": See ",e.jsx(s,{href:"/meta"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.isHydration"})}),": Whether the page is rendered to HTML. When using ",e.jsx(s,{href:"/client-routing",noBreadcrumb:!0}),", the value is ",e.jsx(n.code,{children:"true"})," for the first page the user navigates to, and ",e.jsx(n.code,{children:"false"})," for any subsequent navigation. (When using ",e.jsx(s,{href:"/server-routing",noBreadcrumb:!0}),", the value is always ",e.jsx(n.code,{children:"true"}),".) (If the page doesn't throw an error then it's equivalent to ",e.jsx(n.code,{children:"!pageContext.isClientSideNavigation"}),", otherwise the error page is rendered and thus ",e.jsx(n.code,{children:"pageContext.isHydration"})," is ",e.jsx(n.code,{children:"false"})," whereas ",e.jsx(n.code,{children:"!pageContext.isClientSideNavigation"})," is ",e.jsx(n.code,{children:"true"}),".)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.isBackwardNavigation"})}),": Whether the user is navigating back in history. The value is ",e.jsx(n.code,{children:"true"})," when the user clicks on his browser's backward navigation button, or when invoking ",e.jsx(n.code,{children:"history.back()"}),". The ",e.jsx(n.code,{children:"isBackwardNavigation"})," property only works with Client Routing. (The value is always ",e.jsx(n.code,{children:"null"})," when using Server Routing.)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.previousPageContext"})}),": Upon client-side page navigation, you can use ",e.jsx(n.code,{children:"pageContext.previousPageContext"})," to access the ",e.jsx(n.code,{children:"pageContext"})," of the previous page. See ",e.jsx(s,{href:"#lifecycle"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.is404"})}),": If an error occurs, whether the error is a ",e.jsx(n.code,{children:"404 Page Not Found"})," or a ",e.jsx(n.code,{children:"500 Internal Error"}),", see ",e.jsx(s,{href:"/error-page"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.isClientSideNavigation"})}),": Whether the page was navigated by the client-side router. In other words, when using ",e.jsx(s,{href:"/client-routing",noBreadcrumb:!0}),", the value is ",e.jsx(n.code,{children:"false"})," for the first page the user visits, and ",e.jsx(n.code,{children:"true"})," for any subsequent navigation. (When using ",e.jsx(s,{href:"/server-routing",noBreadcrumb:!0}),", the value is always ",e.jsx(n.code,{children:"false"}),".)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.abortReason"})}),": Set by ",e.jsx(s,{href:"/render",text:e.jsx(n.code,{children:"throw render()"})})," and used by the ",e.jsx(s,{text:"error page",href:"/error-page"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.abortStatusCode"})}),": Set by ",e.jsx(s,{href:"/render",text:e.jsx(n.code,{children:"throw render()"})})," and used by the ",e.jsx(s,{text:"error page",href:"/error-page"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pageContext.errorWhileRendering"})}),": The first error (if there is any) that occurred while rendering the page, see ",e.jsx(s,{href:"/error-tracking"}),"."]}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"custom",children:"Custom"}),`
`,e.jsxs(n.p,{children:["You can define custom ",e.jsx(n.code,{children:"pageContext"})," properties. (See ",e.jsx(s,{href:"#typescript"})," for how to define their types.)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["At ",e.jsx(s,{href:"/renderPage",children:e.jsx(n.code,{children:"renderPage()"})}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Your Vike server middleware integration"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"app."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"get"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'*'"}),e.jsx(n.span,{style:{color:"#24292E"},children:", "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"async"}),e.jsx(n.span,{style:{color:"#24292E"},children:" ("}),e.jsx(n.span,{style:{color:"#E36209"},children:"req"}),e.jsx(n.span,{style:{color:"#24292E"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" pageContextInit"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    urlOriginal: req.url,"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    headersOriginal: req.headers,"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // ***************************************"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // **** Custom pageContext properties ****"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // ***************************************"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // Common use case: make information about logged-in user available at pageContext.user"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    user: req.user,"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // Or any other value:"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // pageContext.someCustomProp"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"    someCustomProp: "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'some-value'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" pageContext"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" await"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" renderPage"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(pageContextInit)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // ..."})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"})"})})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Setting ",e.jsx(n.code,{children:"pageContext.user"})," is a common use case for integrating authentication tools, see ",e.jsx(s,{href:"/auth#integration"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["At any ",e.jsx(s,{href:"/",children:"Vike hook"}),"."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// +someHook.js"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" someHook"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContext.someCustomProp "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'some-value'"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" // Add or modify property"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["At any UI component, by using ",e.jsx(s,{href:"/usePageContext",children:e.jsx(n.code,{children:"usePageContext()"})}),"."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Inside a UI component"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" pageContext"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" usePageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:"()"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"pageContext.someCustomProp "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'some-value'"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" // Add or modify property"})]})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["At ",e.jsx(s,{href:"/navigate#options",children:e.jsx(n.code,{children:"navigate({ pageContext: { someExtra: 'value' } })"})}),"."]}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"faq",children:"FAQ"}),`
`,e.jsxs("h3",{id:"can-i-mutate-pagecontext",children:["Can I mutate ",e.jsx("code",{children:"pageContext"}),"?"]}),`
`,e.jsxs(n.p,{children:["Yes, it's a common practice to change/add ",e.jsx(n.code,{children:"pageContext"})," properties at any time."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Anywhere"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"pageContext.someProp "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#24292E"},children:" someValue"})]})]})})}),`
`,e.jsxs("h3",{id:"can-i-use-pagecontext-as-a-ui-store",children:["Can I use ",e.jsx("code",{children:"pageContext"})," as a UI store?"]}),`
`,e.jsxs(n.p,{children:["Instead of using ",e.jsx(n.code,{children:"pageContext"}),", we generally recommend using a proper UI state management tool such as React's ",e.jsx(n.code,{children:"useState()"}),", Redux, Vue's ",e.jsx(n.code,{children:"ref()"}),", Pinia, etc."]}),`
`,e.jsxs(n.p,{children:["That said, there are use cases for using ",e.jsx(n.code,{children:"pageContext"})," to store client-side state. For example to pass information from the previous page to the next during navigation."]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(s,{href:"#lifecycle"})," to understand whether using ",e.jsx(n.code,{children:"pageContext"})," can make sense for your use case."]}),`
`,e.jsx("h3",{id:"can-i-check-whether-ssr-is-enabled",children:"Can I check whether SSR is enabled?"}),`
`,e.jsxs(n.p,{children:["On the server-side, you can tell ",e.jsx(s,{href:"/ssr",children:"whether SSR is enabled"})," by checking whether ",e.jsx(s,{href:"#:~:text=pageContext.Page,-%3A",children:e.jsx(n.code,{children:"pageContext.Page"})})," is set:"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// +onAfterRenderHtml.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onAfterRenderHtml"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" isSSR"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" !!"}),e.jsx(n.span,{style:{color:"#24292E"},children:"pageContext.Page"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  if"}),e.jsx(n.span,{style:{color:"#24292E"},children:" (isSSR) {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // ..."})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h2",{id:"typescript",children:"TypeScript"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"ts","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"ts","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // For code loaded in client and server"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  PageContext,"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // For code loaded in client only"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  PageContextClient,"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // For code loaded in server only"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  PageContextServer"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"} "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/types'"})]})]})})}),`
`,e.jsxs(n.p,{children:["To extend and/or refine Vike's types ",e.jsx(n.code,{children:"PageContext"}),"/",e.jsx(n.code,{children:"PageContextServer"}),"/",e.jsx(n.code,{children:"PageContextClient"}),", use the global interface ",e.jsx(n.code,{children:"Vike.PageContext"}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"ts","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"ts","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"declare"}),e.jsx(n.span,{style:{color:"#24292E"},children:" global {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  namespace"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" Vike"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"    interface"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" PageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      // Type of pageContext.user"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#E36209"},children:"      user"}),e.jsx(n.span,{style:{color:"#D73A49"},children:"?:"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#E36209"},children:"        name"}),e.jsx(n.span,{style:{color:"#D73A49"},children:":"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" string"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#E36209"},children:"        id"}),e.jsx(n.span,{style:{color:"#D73A49"},children:":"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" string"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#E36209"},children:"        isAdmin"}),e.jsx(n.span,{style:{color:"#D73A49"},children:":"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" boolean"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"      }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      // Refine type of pageContext.Page (it's `unknown` by default)"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"      Page"}),e.jsx(n.span,{style:{color:"#D73A49"},children:":"}),e.jsx(n.span,{style:{color:"#24292E"},children:" () "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" React"}),e.jsx(n.span,{style:{color:"#24292E"},children:"."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"JSX"}),e.jsx(n.span,{style:{color:"#24292E"},children:"."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"Element"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// If you define Vike.PageContext in a .d.ts file then"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// make sure there is at least one export/import statement."})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Tell TypeScript this file isn't an ambient module:"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {}"})]})]})})}),`
`,e.jsxs(n.p,{children:["If you use ",e.jsx(s,{text:"Server Routing",href:"/server-routing"}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"ts","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"ts","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" type"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // For code loaded in client and server"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  PageContextWithServerRouting "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"as"}),e.jsx(n.span,{style:{color:"#24292E"},children:" PageContext,"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // For code loaded in client only"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  PageContextClientWithServerRouting "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"as"}),e.jsx(n.span,{style:{color:"#24292E"},children:" PageContextClient,"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // For code loaded in server only"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  PageContextServer"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"} "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/types'"})]})]})})}),`
`,e.jsx("h2",{id:"lifecycle",children:"Lifecycle"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Server-side"})}),`
`,e.jsxs(n.p,{children:["On the server-side, upon an HTTP request, a new ",e.jsx(n.code,{children:"pageContext"})," object is created. It's used for rendering the page to HTML. The ",e.jsx(n.code,{children:"pageContext"})," object is discarded after the HTTP response is sent."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Client-side"})}),`
`,e.jsxs(n.p,{children:["Upon ",e.jsx(s,{text:"client-side page navigation",href:"/client-routing"}),", a new ",e.jsx(n.code,{children:"pageContext"})," object is created."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You can use ",e.jsx(n.code,{children:"pageContext.previousPageContext"})," to access the ",e.jsx(n.code,{children:"pageContext"})," of the previous page."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Pre-rendering"})}),`
`,e.jsxs(n.p,{children:["If a page is ",e.jsx(s,{href:"/pre-rendering",children:"pre-rendered"}),", its ",e.jsxs(s,{href:"/pageContext.json",children:["initial ",e.jsx(n.code,{children:"pageContext"})," value"]})," is determined at build-time and saved at ",e.jsx(n.code,{children:"dist/client/${url}/index.pageContext.json"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Consequently, the initial ",e.jsx(n.code,{children:"pageContext"})," value of a pre-rendered page is set in stone at build-time."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Upon pre-redering, a different ",e.jsx(n.code,{children:"pageContext"})," object is created for each page."]}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/usePageContext"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/useData"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/renderPage"}),`
`]}),`
`]})]})}function c(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(r,{...l})}):r(l)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:o},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:a}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:t}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/pageContext/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{A as configValuesSerialized};
