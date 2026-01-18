
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sanocio.github.io/project-templates/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/project-templates"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 485, hash: '4882e4e7793de522fec3599d3c5ce254243fe62dffc2ad8f1b84e77c07b60810', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 998, hash: 'a6b9acfc9eb1b748db1515253c68f03123211410a7680bb43c69cc5b34fb6783', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7451, hash: '33e28907b1d7795a16cca6bdf568bdbb4b2dfd3cfc8fe86f050819a95fbeee48', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
