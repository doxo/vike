export { inferAssetTag }
export { inferPreloadTag }
export { inferEarlyHintLink }
export { scriptAttrs }

import { assert } from '../../utils.js'
import type { PageAsset } from '../../renderPage/getPageAssets.js'

// We can't use `defer` here. With `defer`, the entry script won't start before `</body>` has been parsed, preventing progressive hydration during SSR streaming, see https://github.com/vikejs/vike/pull/1271
const scriptAttrs = 'type="module" async'

function inferPreloadTag(pageAsset: PageAsset): string {
  const { src, assetType, mediaType, integrity } = pageAsset
  const rel = getRel(pageAsset)
  // `crossorigin` is needed for fonts, see https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload#cors-enabled_fetches
  let crossorigin = null
  if (isCrossOrigin(pageAsset) && !integrity) crossorigin = 'crossorigin'
  if (integrity) crossorigin = 'crossorigin="anonymous"'
  const attributes = [
    `rel="${rel}"`,
    `href="${src}"`,
    !assetType ? null : `as="${assetType}"`,
    !mediaType ? null : `type="${mediaType}"`,
    !integrity ? null : `integrity="${integrity}"`,
    crossorigin
  ]
    .filter(Boolean)
    .join(' ')
  return `<link ${attributes}>`
}

function inferAssetTag(pageAsset: PageAsset): string {
  const { src, assetType, mediaType, integrity } = pageAsset

  const integrityAttrs = !integrity ? null : `integrity="${integrity}" crossorigin="anonymous"`

  if (assetType === 'script') {
    assert(mediaType === 'text/javascript')
    return `<script src="${src}" ${scriptAttrs} ${integrityAttrs}></script>`
  }
  if (assetType === 'style') {
    // WARNING: if changing following line, then also update https://github.com/vikejs/vike/blob/fae90a15d88e5e87ca9fcbb54cf2dc8773d2f229/vike/client/shared/removeFoucBuster.ts#L29
    return `<link rel="stylesheet" type="text/css" href="${src}" ${integrityAttrs}>`
  }
  assert(false, { pageAsset })
}

// We ignore crossorigin, it seems like Early Hints doesn't have a "crossorigin" property: https://github.com/vikejs/vike/issues/618#issuecomment-1415752222
// We ignore integrity, as Early Hints does not support integrity hashes.  The browser only checks integrity when it loads actual HTML.
function inferEarlyHintLink(pageAsset: PageAsset): string {
  const { src, assetType } = pageAsset
  const rel = getRel(pageAsset)
  return [`<${src}>`, `rel=${rel}`, !assetType ? null : `as=${assetType}`].filter(Boolean).join('; ')
}

function getRel({ assetType }: PageAsset): string {
  if (assetType === 'script') {
    // Vite transpiles all browser-side JavaScript to ESM
    return 'modulepreload'
  }
  return 'preload'
}

function isCrossOrigin({ src, assetType }: PageAsset): boolean {
  return assetType === 'font' || src.startsWith('http://') || src.startsWith('https://')
}
