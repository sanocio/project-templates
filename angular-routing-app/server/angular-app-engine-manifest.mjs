
export default {
  basePath: 'https://sanocio.github.io/project-templates',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
