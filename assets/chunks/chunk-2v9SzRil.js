import{a as c,u as g,c as m,d as k,j as l,b as j,p as d,R as L,e as p}from"./chunk-uTjOlwq5.js";import{p as u}from"./chunk-BO0ZQs4D.js";function T(n){n=n.toLowerCase(),n=P(n);const t=n.split(/[^a-z0-9\u4E00-\u9FA5]+/).filter(Boolean).join("-");return t===""?null:t}function P(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function F(n){return c(n.includes("#"),{urlWithHash:n}),n.split("#")[1].split("-").map((e,i)=>i===0?b(e):e).join(" ")}function b(n){return n[0].toUpperCase()+n.slice(1)}function H({href:n,text:t,noBreadcrumb:s,doNotInferSectionTitle:e,children:i}){const r=g();if(m(n.startsWith("/")||n.startsWith("#"),`<Link href /> prop \`href==='${n}'\` but should start with '/' or '#'`),m(!t||!i,"Cannot use both `text` or `children`"),t=t??i,k(n))return l.jsx(j,{path:n,text:t});{const a=R(n,r,e);return a?t||(t=D({noBreadcrumb:s,...a})):t="LINK-TARGET-NOT-FOUND",l.jsx("a",{href:n,children:t})}}function D({noBreadcrumb:n,linkData:t,sectionTitle:s,isLinkOnSamePage:e}){const i=[];return t.linkBreadcrumb&&i.push(...(t.linkBreadcrumb??[]).slice().reverse().map(d)),i.push(d(t.title)),s&&i.push(s),n||e?i[i.length-1]:l.jsx(l.Fragment,{children:i.map((r,a)=>{const o=a===0?l.jsx(l.Fragment,{}):" > ";return l.jsxs(L.Fragment,{children:[o,r]},a)})})}function R(n,t,s){const{hrefPathname:e,hrefHash:i}=x(n),r=h(e||t.urlPathname,t);c(r);const a=r.url===t.urlPathname;e||c(a);let o=null;if(i){if(c(!i.startsWith("#")),a){const f=h(`#${i}`,t);if(!f)return null;o=d(f.title)}else"sectionTitles"in r&&r.sectionTitles&&r.sectionTitles.forEach(f=>{T(f)===i&&(o=d(f))});if(!o){if(s)return p(!1,`Page section title not found for <Link href="\`${n}\`" doNotInferSectionTitle={true} />.`),null;o=l.jsx(l.Fragment,{children:F(n)})}}return{linkData:r,sectionTitle:o,isLinkOnSamePage:a}}function h(n,t){c(n.startsWith("/")||n.startsWith("#"));const{linksAll:s}=t,e=s.find(({url:i})=>n===i);return n.startsWith("#")?p(e,`Couldn't find ${n} in ${t.urlPathname}, does it exist?`):p(e,[`Couldn't find page with URL ${u.bold(n)}`,"— did you define it in",[u.cyan("docpress.config.js"),u.dim("#{"),u.cyan("headings"),u.dim(","),u.cyan("headingsDetached"),u.dim("}"),"?"].join("")].join(" ")),e??null}function x(n){let t=null,s=null;if(!n.includes("#"))s=n;else{const[e,...i]=n.split("#");e&&(s=e),t=i.join("#")}return c(s!==null||t!==null),c(s||t),t&&(t=t.split(":~:text")[0]),{hrefPathname:s,hrefHash:t}}export{H as L};
