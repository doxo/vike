export { headingsDetached }

import React from 'react'
import type { HeadingDetachedDefinition } from '@brillout/docpress'

const headingsDetached = [
  {
    title: 'vue-i18n',
    url: '/vue-i18n'
  },
  {
    title: 'Page moved',
    url: '/Head-setting'
  },
  {
    title: 'Page moved',
    url: '/head'
  },
  {
    title: '`favicon`',
    url: '/favicon'
  },
  {
    title: '`<head>` tags without `vike-{react,vue,solid}`',
    url: '/head-manual'
  },
  {
    title: '`<Loading>`',
    url: '/Loading'
  },
  {
    title: 'React Query',
    url: '/react-query'
  },
  {
    title: 'Vue Query',
    url: '/vue-query'
  },
  {
    title: 'Vuex',
    url: '/vuex'
  },
  {
    title: 'PullState',
    url: '/pullstate'
  },
  {
    title: 'Panda CSS',
    url: '/panda-css'
  },
  {
    title: 'PM2',
    url: '/PM2'
  },
  {
    title: 'Koa',
    url: '/koa'
  },
  {
    title: 'hapi',
    url: '/hapi'
  },
  {
    title: 'HatTip',
    url: '/hattip'
  },
  {
    title: 'Architecture',
    url: '/architecture'
  },
  {
    title: 'Optional Control',
    url: '/optional-control'
  },
  {
    title: 'Consulting',
    url: '/consulting'
  },
  {
    title: 'Next.js Comparison',
    url: '/nextjs-comparison'
  },
  {
    title: <code>useClientRouter()</code>,
    url: '/useClientRouter'
  },
  {
    title: (
      <>
        Migration <code>0.4</code>
      </>
    ),
    url: '/migration-0.4'
  },
  {
    title: 'HTML Streaming',
    url: '/html-streaming'
  },
  {
    title: '`stream`',
    url: '/stream'
  },
  {
    title: 'Preloading',
    url: '/preload'
  },
  {
    title: 'Layouts',
    url: '/layouts'
  },
  {
    title: 'SPA vs SSR vs HTML',
    url: '/SPA-vs-SSR-vs-HTML'
  },
  {
    title: 'NextAuth.js',
    url: '/nextauth'
  },
  {
    title: 'NextAuth.js',
    url: '/NextAuth.js'
  },
  {
    title: 'HTML `<head>`',
    url: '/html-head'
  },
  {
    title: 'Server Routing VS Client Routing',
    url: '/SR-vs-CR'
  },
  {
    title: 'Render-as-you-Fetch',
    url: '/render-as-you-fetch'
  },
  {
    title: 'V1 Design',
    url: '/v1-design'
  },
  {
    title: (
      <>
        <code>+config.js</code> code splitting
      </>
    ),
    url: '/config-code-splitting'
  },
  {
    title: 'Error Tracking',
    url: '/error-tracking'
  },
  {
    title: 'Dynamic `import()`',
    url: '/dynamic-import'
  },
  {
    title: '`.env` Files',
    url: '/.env-files'
  },
  {
    title: (
      <>
        Migration <code>0.4.23</code>
      </>
    ),
    url: '/migration/0.4.23'
  },
  {
    title: (
      <>
        Migration <code>0.4</code>
      </>
    ),
    url: '/migration/0.4'
  },
  {
    title: (
      <>
        Migration from <code>0.4.x</code> to <code>1.0.0</code>
      </>
    ),
    url: '/migration/v1'
  },
  {
    title: 'V1 Design Migration',
    url: '/migration/v1-design',
    sectionTitles: ['Custom hooks/exports']
  },
  {
    title: 'Why the V1 design?',
    url: '/why-the-v1-design'
  },
  {
    title: 'Migrations',
    url: '/migration'
  },
  {
    title: 'Client Routing',
    url: '/client-routing'
  },
  {
    title: 'Server Routing',
    url: '/server-routing'
  },
  { title: 'What is Hydration?', url: '/hydration' },
  { title: <code>dist/server/importBuild.js</code>, url: '/importBuild.js' },
  { title: <code>importBuild.cjs</code>, url: '/importBuild.cjs' },
  { title: <code>injectAssets()</code>, url: '/injectAssets' },
  {
    title: (
      <>
        Multiple <code>onBeforeRender()</code> hooks
      </>
    ),
    url: '/onBeforeRender-multiple'
  },
  {
    title: (
      <>
        Manipulating <code>pageContext</code>
      </>
    ),
    url: '/pageContext-manipulation'
  },
  { title: 'Server-Side Rendering (SSR)', url: '/SSR' },
  { title: 'TypeScript', url: '/typescript' },
  {
    title: (
      <>
        Multiple <code>renderer/</code>
      </>
    ),
    url: '/multiple-renderer'
  },
  {
    title: '`createPageRenderer()`',
    url: '/createPageRenderer'
  },
  {
    title: 'Command `prerender`',
    url: '/command-prerender'
  },
  {
    title: 'Vite Plugin',
    url: '/vite-plugin'
  },
  {
    title: 'Content- VS interactive-centric',
    url: '/content-vs-interactive'
  },
  {
    title: 'SPA vs SSR (and more)',
    url: '/SPA-vs-SSR'
  },
  {
    title: 'Server-side Rendering (SSR)',
    url: '/server-side-rendering'
  },
  {
    title: 'Hydration Mismatch',
    url: '/hydration-mismatch'
  },
  {
    title: 'Broken npm package',
    url: '/broken-npm-package'
  },
  {
    title: 'Deployment synchronization',
    url: '/deploy-sync'
  },
  {
    title: 'Languages',
    url: '/languages'
  },
  {
    title: 'Common Problems',
    url: '/common-problems'
  },
  {
    title: <code>doNotPrerender</code>,
    url: '/doNotPrerender'
  },
  {
    title: (
      <>
        <code>render()</code> hook (server-side)
      </>
    ),
    url: '/render-hook'
  },
  {
    title: (
      <>
        <code>render()</code> hook (client-side)
      </>
    ),
    url: '/render-client'
  },
  {
    title: <code>.page.js</code>,
    url: '/.page.js'
  },
  {
    title: <code>.page.server.js</code>,
    url: '/.page.server.js'
  },
  {
    title: <code>.page.client.js</code>,
    url: '/.page.client.js'
  },
  {
    title: (
      <>
        <code>Page</code> (server-side)
      </>
    ),
    url: '/Page-server'
  },
  {
    title: (
      <>
        <code>Page</code> (client-side)
      </>
    ),
    url: '/Page-client'
  },
  {
    title: <code>.page.route.js</code>,
    url: '/.page.route.js'
  },
  {
    title: <code>_default.page.route.js</code>,
    url: '/_default.page.route.js'
  },
  {
    title: 'Vue Router & React Router',
    url: '/vue-router-and-react-router'
  },
  {
    title: 'Vue Router',
    url: '/vue-router'
  },
  {
    title: 'React Router',
    url: '/react-router'
  },
  {
    title: <code>throw RenderErrorPage()</code>,
    url: '/RenderErrorPage'
  },
  {
    title: <code>process.env.NODE_ENV</code>,
    url: '/NODE_ENV'
  },
  {
    title: 'Header file (`.h.js`)',
    url: '/header-file'
  },
  {
    title: (
      <>
        Header file (<code>.h.js</code>), import from same file
      </>
    ),
    url: '/header-file/import-from-same-file'
  },
  {
    title: 'Client runtimes conflict',
    url: '/client-runtimes-conflict'
  },
  {
    title: 'Client runtime loaded twice',
    url: '/client-runtime-twice'
  },
  {
    title: '`includeAssetsImportedByServer`',
    url: '/includeAssetsImportedByServer'
  },
  {
    title: (
      <>
        Migration <code>0.4.134</code>
      </>
    ),
    url: '/migration/0.4.134'
  },
  {
    title: 'Page Redirection',
    url: '/page-redirection'
  },
  {
    title: (
      <>
        Migration <code>0.5</code>
      </>
    ),
    url: '/migration/0.5'
  },
  {
    title: 'Lazy Transpiling',
    url: '/lazy-transpiling'
  },
  {
    title: 'CJS',
    url: '/CJS'
  },
  {
    title: 'URL Normalization',
    url: '/url-normalization'
  },
  {
    title: 'Vike',
    url: '/vike'
  },
  {
    title: 'Press Kit',
    url: '/press'
  },
  {
    title: 'Vike Packages',
    url: '/vike-packages'
  },
  {
    title: 'Extensions',
    url: '/extensions'
  },
  {
    title: 'Abort',
    url: '/abort',
    sectionTitles: ['`throw redirect()` VS `throw render()` VS `navigate()`']
  },
  {
    title: 'Custom Exports/Hooks',
    url: '/exports'
  },
  {
    title: '`onRenderHtml()` hook',
    url: '/onRenderHtml'
  },
  {
    title: '`onRenderClient()` hook',
    url: '/onRenderClient'
  },
  {
    title: '`onBeforeRoute()` hook',
    // titleInNav: '`onBeforeRoute`',
    url: '/onBeforeRoute'
  },
  {
    title: '`disableAutoFullBuild`',
    url: '/disableAutoFullBuild'
  },
  {
    title: '`hydrationCanBeAborted`',
    url: '/hydrationCanBeAborted'
  },
  {
    title: '`extends`',
    url: '/extends'
  },
  {
    title: 'Image Optimizing',
    url: '/img'
  },
  {
    title: 'Access `pageContext` anywhere',
    url: '/pageContext-anywhere'
  },
  {
    title: 'Client-only Components',
    url: '/client-only-components'
  },
  {
    title: 'Render Modes (SPA, SSR, SSG, HTML-only)',
    url: '/render-modes',
    sectionTitles: ['HTML-only', 'SPA', 'SSR']
  },
  {
    title: '`lang`',
    url: '/lang'
  },
  {
    title: '`<Wrapper>`',
    url: '/Wrapper'
  },
  {
    title: 'Server Routing VS Client Routing',
    url: '/server-routing-vs-client-routing'
  },
  {
    title: 'Tour',
    url: '/tour'
  },
  {
    title: 'Vue Tour',
    url: '/vue-tour'
  },
  {
    title: 'React Tour',
    url: '/react-tour'
  },
  {
    title: '`onCreateApp()` hook',
    url: '/onCreateApp'
  },
  {
    title: '`prerender`',
    url: '/prerender-config'
  },
  {
    title: '`getGlobalContextSync()` & `getGlobalContextAsync()`',
    url: '/getGlobalContext'
  },
  {
    title: '`getPageContext()`',
    url: '/getPageContext'
  },
  {
    title: '`pageContext.json`',
    url: '/pageContext.json',
    sectionTitles: ['Avoid `pageContext.json` requests']
  },
  {
    title: 'HTTP Headers',
    url: '/headers'
  },
  {
    title: '`vike-react`',
    url: '/vike-react'
  },
  {
    title: '`vike-vue`',
    url: '/vike-vue'
  },
  {
    title: '`vike-solid`',
    url: '/vike-solid'
  },
  {
    title: '`reactStrictMode`',
    url: '/reactStrictMode'
  },
  {
    title: '`onBeforeRenderClient()` hook',
    url: '/onBeforeRenderClient'
  },
  {
    title: '`onAfterRenderClient()` hook',
    url: '/onAfterRenderClient'
  },
  {
    title: '`onAfterRenderHtml()` hook',
    url: '/onAfterRenderHtml'
  },
  {
    title: 'Scaffold new app',
    url: '/scaffold'
  },
  {
    title: 'Add SSR/SSG to existing Vite app',
    url: '/add-ssr-to-vite-app'
  },
  {
    title: 'Getting started with Vike',
    url: '/start'
  },
  {
    title: 'Vike extension VS custom integration',
    url: '/extension-vs-custom'
  },
  {
    title: '`clientHooks`',
    url: '/clientHooks'
  },
  {
    title: '`require`',
    url: '/require'
  },
  {
    title: '`filesystemRoutingRoot`',
    url: '/filesystemRoutingRoot'
  },
  {
    title: 'Releases',
    url: '/releases'
  },
  {
    title: 'Mai 2024 Releases',
    url: '/releases/2024-05'
  },
  {
    title: 'June Releases',
    url: '/releases/2024-06'
  },
  {
    title: 'July Releases',
    url: '/releases/2024-07'
  },
  {
    title: 'August Releases',
    url: '/releases/2024-08'
  },
  {
    title: '`<ClientOnly>`',
    url: '/ClientOnly'
  },
  {
    title: '`bodyHtmlBegin`',
    url: '/bodyHtmlBegin'
  },
  {
    title: '`bodyHtmlEnd`',
    url: '/bodyHtmlEnd'
  },
  {
    title: '`injectScriptsAt`',
    url: '/injectScriptsAt'
  }
] satisfies HeadingDetachedDefinition[]
