import{j as e,L as a,o as i,i as t}from"../chunks/chunk-uTjOlwq5.js";import{L as r}from"../chunks/chunk-2v9SzRil.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-BO0ZQs4D.js";/* empty css                      */const d=[{pageSectionId:"toggle",pageSectionLevel:2,pageSectionTitle:"Toggle"},{pageSectionId:"different-defaults",pageSectionLevel:3,pageSectionTitle:"Different defaults"},{pageSectionId:"conditional-pre-rendering",pageSectionLevel:3,pageSectionTitle:"Conditional pre-rendering"},{pageSectionId:"settings",pageSectionLevel:2,pageSectionTitle:"Settings"},{pageSectionId:"partial",pageSectionLevel:3,pageSectionTitle:"`partial`"},{pageSectionId:"noextradir",pageSectionLevel:3,pageSectionTitle:"`noExtraDir`"},{pageSectionId:"parallel",pageSectionLevel:3,pageSectionTitle:"`parallel`"},{pageSectionId:"disableautorun",pageSectionLevel:3,pageSectionTitle:"`disableAutoRun`"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function l(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(r,{href:"/pre-rendering"})," explains what pre-rendering is and how to use it."]}),`
`]}),`
`,e.jsx(n.p,{children:"By default, pre-rendering is disabled. To enable it:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// pages/+config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Enable pre-rendering"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  prerender: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"true"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Or enable with settings"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  prerender: {"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"    partial: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"false"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"    noExtraDir: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"false"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"    parallel: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"4"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"    disableAutoRun: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"false"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h2",{id:"toggle",children:"Toggle"}),`
`,e.jsx(n.p,{children:`In some situations, a page shouldn't be pre-rendered.
For example a news page that displays the latest news fetched from a database should be rendered at request-time (not at build-time).`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(r,{href:"/pre-rendering"})," explains in depth whether a page should be pre-rendered or not."]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can use ",e.jsx(n.code,{children:"prerender: false"})," to tell Vike to skip a page from pre-rendering."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/news/+config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  prerender: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"false"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h3",{id:"different-defaults",children:"Different defaults"}),`
`,e.jsxs(n.p,{children:["You can define ",e.jsx(n.code,{children:"prerender"})," in ",e.jsx(r,{href:"/config#inheritance",children:"higher levels so it applies to more/all pages"}),"."]}),`
`,e.jsxs(n.p,{children:["This is especially handy with ",e.jsx(r,{text:"Domain-Driven File Structure",href:"/routing#domain-driven-file-structure"}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/marketing/+prerender.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Using Domain-Driven File Structure, +prerender.js applies to"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// all marketing pages."})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Enable pre-rendering for all marketing pages"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" prerender"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#005CC5"},children:" true"})]})]})})}),`
`,e.jsx(n.p,{children:"You can also make pre-rendering opt-in instead of opt-out:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /renderer/+config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // By default, pages are not pre-rendered"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  prerender: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"false"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/about-us/+prerender.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Opt-in pre-rendering"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" prerender"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#005CC5"},children:" true"})]})]})})}),`
`,e.jsx("h3",{id:"conditional-pre-rendering",children:"Conditional pre-rendering"}),`
`,e.jsx(n.p,{children:"You can pre-render pages conditionally:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /renderer/+prerender.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" prerender"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" isCmsPreview"}),e.jsx(n.span,{style:{color:"#24292E"},children:"() "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"?"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" false"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" :"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" true"})]})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This is useful for previewing CMS pages (you don't want to pre-renderer a CMS deploy preview)."}),`
`]}),`
`,e.jsxs(n.p,{children:["Note that ",e.jsxs(r,{href:"/onBeforePrerenderStart",children:[e.jsx(n.code,{children:"onBeforePrerenderStart()"})," hooks"]})," are always called, even if ",e.jsx(n.code,{children:"prerender"})," is ",e.jsx(n.code,{children:"false"}),`.
If you want to call `,e.jsx(n.code,{children:"onBeforePrerenderStart()"})," hooks conditionally as well:"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/movie/+prerender.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { prerender }"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { someCondition } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" './someCondition'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" prerender"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" someCondition"}),e.jsx(n.span,{style:{color:"#24292E"},children:"()"})]})]})})}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/movie/+onBeforePrerenderStart.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { onBeforePrerenderStart }"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { someCondition } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" './someCondition'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" onBeforePrerenderStart"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" someCondition"}),e.jsx(n.span,{style:{color:"#24292E"},children:"()"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  ?"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" async"}),e.jsx(n.span,{style:{color:"#24292E"},children:" () "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      // ..."})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"      return"}),e.jsx(n.span,{style:{color:"#24292E"},children:" listOfUrls"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    }"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  :"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" null"})]})]})})}),`
`,e.jsx("h2",{id:"settings",children:"Settings"}),`
`,e.jsx("h3",{id:"partial",children:e.jsx("code",{children:"partial"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"boolean"})," (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsx(n.p,{children:"Allow only some of your pages to be pre-rendered."}),`
`,e.jsx(n.p,{children:"This setting doesn't affect the pre-rendering process: it merely suppresses the warning that some pages aren't pre-rendered."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["As explained in ",e.jsx(r,{href:"/pre-rendering"}),", if you don't pre-render ",e.jsx(n.em,{children:"all"})," your pages then you need a production server."]}),`
`,e.jsxs(n.p,{children:["That said, if you cannot or don't want to pre-render all your pages while still deploying to a ",e.jsx(r,{href:"/static-hosts",children:"static host"}),", then see the workaround at ",e.jsx(n.a,{href:"https://github.com/vikejs/vike/issues/1476",children:"#1476 - Pre-rendered dynamic routes (static host deployment)"}),"."]}),`
`,e.jsxs(n.p,{children:["Also, by using ",e.jsx(r,{text:e.jsx(n.code,{children:"vite-plugin-vercel"}),href:"/vercel#vite-plugin-vercel"}),", you can statically deploy your pre-rendered pages while using a production server for your non-pre-rendered pages."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Vike shows a warning that a page cannot be pre-rendered when the page has a parameterized route (e.g. a  ",e.jsx(r,{text:"Route String",href:"/route-string"})," ",e.jsx(n.code,{children:"/movie/@movieId"}),", or a ",e.jsx(r,{text:"Route Function",href:"/route-function"}),") while there isn't any ",e.jsx(r,{text:e.jsxs(e.Fragment,{children:[e.jsx(n.code,{children:"onBeforePrerenderStart()"})," hook"]}),href:"/onBeforePrerenderStart"})," that provides at least one URL matching the page's route (e.g. ",e.jsx(n.code,{children:"/movie/42"}),")."]}),`
`]}),`
`,e.jsx("h3",{id:"noextradir",children:e.jsx("code",{children:"noExtraDir"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"boolean"})," (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsx(n.p,{children:"Don't create a new directory for each HTML file."}),`
`,e.jsxs(n.p,{children:["For example, generate ",e.jsx(n.code,{children:"dist/client/about.html"})," instead of ",e.jsx(n.code,{children:"dist/client/about/index.html"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Generating a directory for each HTML file is the most reliable way for telling Static Hosts the static URL of each static HTML.
But some static hosts prefer the other way.`}),`
`]}),`
`,e.jsx("h3",{id:"parallel",children:e.jsx("code",{children:"parallel"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"boolean | number"})," (default: ",e.jsx(n.a,{href:"https://nodejs.org/api/os.html#os_os_cpus",children:e.jsx(n.code,{children:"os.cpus().length"})}),")"]}),`
`,e.jsx(n.p,{children:"Number of concurrent pre-render jobs."}),`
`,e.jsxs(n.p,{children:["Set to ",e.jsx(n.code,{children:"false"})," (or ",e.jsx(n.code,{children:"1"}),") to disable concurrency."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The default value is the fastest, but it may induce high spikes of memory usage."}),`
`,e.jsx(n.p,{children:"Disable concurrency if:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You encounter ",e.jsx(n.code,{children:"JavaScript heap out of memory"})," errors."]}),`
`,e.jsx(n.li,{children:"If pre-rendering takes an abnormal high amount of time. (Caused by the very slow process of memory swapping that kicks-in when memory starts to saturate)."}),`
`]}),`
`]}),`
`,e.jsx("h3",{id:"disableautorun",children:e.jsx("code",{children:"disableAutoRun"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"boolean"})," (default: ",e.jsx(n.code,{children:"false"}),")"]}),`
`,e.jsxs(n.p,{children:["When running ",e.jsx(n.code,{children:"$ vike build"}),", Vike automatically triggers ",e.jsx(r,{href:"/pre-rendering",children:"pre-rendering"}),". (If you ",e.jsx(r,{text:"enabled it",href:"/pre-rendering#how-to-pre-render"}),".)"]}),`
`,e.jsx(n.p,{children:"You can disable the automatic triggering:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// pages/+config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  prerender: {"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // Stop `$ vike build` from initiating pre-rendering"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"    disableAutoRun: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"true"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(n.p,{children:"You can then manually trigger pre-rendering using:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"/cli"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"/api#prerender",doNotInferSectionTitle:!0}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"/pre-rendering"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"/ssr"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"/stream"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"/streaming"}),`
`]}),`
`]})]})}function o(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:o,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),S={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:a}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:i}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:t}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/prerender/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{S as configValuesSerialized};
