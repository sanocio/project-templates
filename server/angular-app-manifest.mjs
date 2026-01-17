
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/project-templates/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/project-templates"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 460, hash: '007819ba917fce20117053d3b4427a5c8069756f200bf225c812e3da7dd78969', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 973, hash: '8b28ef6e0eeffc01f8f88774ce8d7705fda8bcf4ccc994181eda639e7cad1201', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7145, hash: 'd3b003f1274916807390c1554f6c3a97e89f2f2fb8899465d0c5250414bfd1c6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
