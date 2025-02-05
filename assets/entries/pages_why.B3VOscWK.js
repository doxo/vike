import{j as e,L as r,o as s,i as a}from"../chunks/chunk-uTjOlwq5.js";import{L as i}from"../chunks/chunk-2v9SzRil.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BO0ZQs4D.js";/* empty css                      *//* empty css                      */const l=[{pageSectionId:"architecture",pageSectionLevel:2,pageSectionTitle:"Architecture"},{pageSectionId:"flexible-by-design",pageSectionLevel:3,pageSectionTitle:"Flexible by design"},{pageSectionId:"conservative-or-cutting-edge-your-choice",pageSectionLevel:3,pageSectionTitle:"Conservative or cutting-edge, your choice"},{pageSectionId:"grow-progressively",pageSectionLevel:3,pageSectionTitle:"Grow progressively"},{pageSectionId:"future-proof",pageSectionLevel:3,pageSectionTitle:"Future-proof"},{pageSectionId:"flexible-and-reliable-by-prioritization",pageSectionLevel:3,pageSectionTitle:"Flexible and reliable, by prioritization"},{pageSectionId:"build-your-own-framework",pageSectionLevel:3,pageSectionTitle:"Build your own framework"},{pageSectionId:"philosophy",pageSectionLevel:2,pageSectionTitle:"Philosophy"},{pageSectionId:"separation-of-concerns",pageSectionLevel:3,pageSectionTitle:"Separation of concerns"},{pageSectionId:"flourishing-do-one-thing-do-it-well-ecosystem",pageSectionLevel:3,pageSectionTitle:"Flourishing do-one-thing-do-it-well ecosystem"},{pageSectionId:"listening-to-users",pageSectionLevel:3,pageSectionTitle:"Listening to users"},{pageSectionId:"passionate-leadership",pageSectionLevel:3,pageSectionTitle:"Passionate leadership"}];function t(o){const n={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Deep dive into what makes Vike special."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Vike's ",e.jsx(i,{href:"#architecture",children:"architecture"}),", enabling unprecedented flexibility and dependability."]}),`
`,e.jsxs(n.li,{children:["Vike's ",e.jsx(i,{href:"#philosophy",children:"philosophy"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"architecture",children:"Architecture"}),`
`,e.jsx("h3",{id:"flexible-by-design",children:"Flexible by design"}),`
`,e.jsxs(n.p,{children:["Vike's low-level hooks represent a flexible foundation. For example, the hooks ",e.jsx(i,{href:"/onRenderHtml",children:e.jsx(n.code,{children:"onRenderHtml()"})})," and ",e.jsx(i,{href:"/onRenderClient",children:e.jsx(n.code,{children:"onRenderClient()"})})," allow you to fully control and integrate:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Any UI framework (React, Vue, Solid, ...)"}),`
`,e.jsx(n.li,{children:"Any data connection (REST, GraphQL, RPC, ...)"}),`
`,e.jsx(n.li,{children:"Any rendering strategy (SSR, SSG, SPA, HTML-only, islands, ...)"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For a quick start, we recommend using ",e.jsx(i,{href:"/extensions",children:"Vike extensions"})," instead of directly using low-level hooks. For example, if you use ",e.jsx(n.code,{children:"vike-react"})," or ",e.jsx(n.code,{children:"vike-vue"})," then you get a quick start like Next.js and Nuxt. Later, if the need arises, you can ",e.jsx(i,{href:"/eject",children:"eject"})," ",e.jsx(n.code,{children:"vike-react"}),"/",e.jsx(n.code,{children:"vike-vue"})," for a custom React/Vue integration."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Another example is the ",e.jsx(i,{href:"/renderPage",children:e.jsx("code",{children:"renderPage()"})})," function which enables you to embed Vike into:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Any server (Express.js, Hono, Fastify, ...)"}),`
`,e.jsx(n.li,{children:"Any deployment (AWS, Cloudflare, Vercel, ...)"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Alternatively, you can ",e.jsx(i,{href:"/pre-rendering",children:"pre-render your pages"})," and deploy your app to any static host."]}),`
`]}),`
`,e.jsx("h3",{id:"conservative-or-cutting-edge-your-choice",children:"Conservative or cutting-edge, your choice"}),`
`,e.jsxs(n.p,{children:["Vike is essentially a core with ",e.jsx(i,{href:"/extensions",children:"extensions"})," for automatic tool integratation. This architecture fosters a diverse ecosystem of Vike extensions:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Stable extensions, focusing on supporting conservative stacks in a long-term fashion."}),`
`,e.jsx(n.li,{children:"Cutting-edge extensions, focusing on experimenting new approaches."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For example, we are experimenting with RSC (React Server Components) in a separate extension ",e.jsx(n.code,{children:"vike-react-rsc"}),". This allows us to experiment without disrupting ",e.jsx(n.code,{children:"vike-react"})," users. Both extensions can be maintained for the foreseeable future, which means you can adopt RSC whenever you want and only if you need it."]}),`
`]}),`
`,e.jsx(n.p,{children:"You have the choice:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If you prefer stability, you can choose stable extensions.",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"You get unparalleled stability: Vike in itself is an unopinionated and stable core while Vike extensions are thin layers of glue code that can be maintained for a very long time."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["If you have special requirements or if you want to explore new approaches you can choose cutting-edge extensions, ",e.jsx(i,{href:"/eject",children:"eject"})," extensions, write your own extensions, and/or ",e.jsx(i,{href:"/build-your-own-framework",children:"build your own framework"}),".",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"You have full control over tool integration with unparalleled flexibility to build whatever you need."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Vike's architecture is a fundamentally more flexible and dependable foundation."}),`
`,e.jsx("h3",{id:"grow-progressively",children:"Grow progressively"}),`
`,e.jsx(n.p,{children:"Vike's flexibility allows you to adapt your stack to needs that evolve as you grow, in a progressive fashion:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"One page at a time"}),": you can ",e.jsx(i,{href:"/config#powerful",children:"progressively migrate your stack on a page-by-page basis"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For example, you can start with an SPA and later, if the need arises, you can ",e.jsx(i,{href:"/ssr",children:"add SSR progressively one page at a time"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Most configurations can be set on page-by-page basis, see ",e.jsx(i,{href:"/config#inheritance",children:"Vike's config inheritance"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"One architectural component at a time"}),": you can switch architectural components independently of each other."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For example, you can start with ",e.jsx(n.a,{href:"https://telefunc.com/RPC",children:"RPC"})," and later, if the need arises, you can progressively switch to GraphQL."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You can swap every major architectural component thanks to Vike's ",e.jsx(i,{href:"#separation-of-concerns",children:"separation of concerns"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Progressive migrations enable you to migrate much faster, iteratively, and in parallel to building your product."}),`
`,e.jsx("h3",{id:"future-proof",children:"Future-proof"}),`
`,e.jsx(n.p,{children:"Vike's flexible core is unopinionated and open to JavaScript's rapidly evolving ecosystem. It's a stable foundation with lightweight and flexible Vike extensions quickly adapting to the tools and approaches of tomorrow."}),`
`,e.jsx("h3",{id:"flexible-and-reliable-by-prioritization",children:"Flexible and reliable, by prioritization"}),`
`,e.jsx(n.p,{children:"If you create a feature request and explain why it's blocking you, we will treat it with higher priority."}),`
`,e.jsx(n.p,{children:"We quickly fix bugs, usually within 24 hours."}),`
`,e.jsxs(n.p,{children:["Vike's team is responsive and we provide ",e.jsx(i,{href:"/faq#how-can-i-reach-out-for-help",children:"a guideline"})," on how to receive assistance from us."]}),`
`,e.jsx("h3",{id:"build-your-own-framework",children:"Build your own framework"}),`
`,e.jsxs(n.p,{children:["Vike enables you to ",e.jsx(i,{href:"/build-your-own-framework",children:"build your own internal company framework"}),", empowering your Software Architects to fully own the architecture while providing your Product Developers with a company framework for quickly experimenting, iterating, and shipping production-grade apps."]}),`
`,e.jsx(n.p,{children:"Your company framework can include everything that is needed to ship products (frontend, backend, data fetching, authentication, deployment, error tracking, analytics, ...) so that your Product Developers can focus on what they do best."}),`
`,e.jsx(n.p,{children:"You can build your own internal ecosystem of tools. It's a powerful way to scale your teams. It also enables you to ensure that the same stack is being used throughout your company, fostering cross-domain contributions and sharing."}),`
`,e.jsx("h2",{id:"philosophy",children:"Philosophy"}),`
`,e.jsx("h3",{id:"separation-of-concerns",children:"Separation of concerns"}),`
`,e.jsx(n.p,{children:"Vike is carefully designed with a clean separation of concerns, for unprecedented flexibility and dependability."}),`
`,e.jsx(n.p,{children:"This enables you to choose architectural components independently of each other, and progressively switch them as you grow."}),`
`,e.jsx("h3",{id:"flourishing-do-one-thing-do-it-well-ecosystem",children:"Flourishing do-one-thing-do-it-well ecosystem"}),`
`,e.jsx(n.p,{children:"Vike's separation of concerns enables architectural components to be developed independently of each other."}),`
`,e.jsx(n.p,{children:"A vibrant ecosystem of do-one-thing-do-it-well tools competing with each other is one of the cornerstones of JavaScript's success."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Other frameworks tightly couple architectural components together, which is a fundamental and structural hindrance that prevents innovation."}),`
`,e.jsxs(n.p,{children:["For example, Vike doesn't have built-in ",e.jsx(n.a,{href:"https://telefunc.com/RPC",children:"RPC"})," (aka Server Actions). This flexibility enables RPC approaches to be developed and innovated independently of Vike."]}),`
`]}),`
`,e.jsx("h3",{id:"listening-to-users",children:"Listening to users"}),`
`,e.jsx(n.p,{children:"We engage in constructive conversations with users. While we enjoy pushing the envelope and innovating, our priority is, first and foremost, to listen and solve real-world needs of users."}),`
`,e.jsxs(n.p,{children:["Vike's ",e.jsx(i,{href:"/pricing",children:"Open Source Pricing"})," means that your success directly translates into our success. (Whereas other frameworks that make money from selling other products are inclined to have skewed priorities.)"]}),`
`,e.jsx("h3",{id:"passionate-leadership",children:"Passionate leadership"}),`
`,e.jsx(n.p,{children:"Vike is an independent project 100% led by engineers with a long-term vision."}),`
`,e.jsxs(n.p,{children:["Thanks to Vike's ",e.jsx(i,{href:"/pricing",children:"Open Source Pricing"})," we don't serve the interests of any unrelated business: we only serve the interests of users."]}),`
`,e.jsx(n.p,{children:"We are passionate about technology and strive for an increasingly collaborative society."})]})}function c(o={}){const{wrapper:n}=o.components||{};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:l},Symbol.toStringTag,{value:"Module"})),S={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:a}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/why/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{S as configValuesSerialized};
