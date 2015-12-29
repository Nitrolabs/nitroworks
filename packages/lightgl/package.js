Package.describe({
  name: 'nitrocad:lightgl',
  version: '0.0.1',
  summary: 'lightgl.js packaged for Meteor',
  git: 'https://github.com/evanw/lightgl.js/',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.export('GL');
  api.addFiles('lib/js/lightgl.js','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('nitrocad:lightgl');
  api.addFiles('lightgl-tests.js');
});
