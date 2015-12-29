Package.describe({
  name: 'nitrocad:csg',
  version: '0.0.1',
  summary: 'CSG rendering code for nitrocad',
  git: 'https://github.com/joostn/openjscad/tree/gh-pages',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.export(['CSG','CAG'],'client');
  api.addFiles('lib/js/csg.js','client');
  api.addAssets('lib/js/csg.js','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('nitrocad:csg');
});
