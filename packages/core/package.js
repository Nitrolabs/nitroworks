Package.describe({
  name: 'nitrocad:core',
  version: '0.0.1',
  summary: 'Contains core libraries for nitrocad viewer',
  git: 'https://github.com/NitroLabs/nitrocad/',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('jquery');
  api.use('underscore')
  api.use('mizzao:jquery-ui');
  api.use('nitrocad:csg','client');
  api.use('nitrocad:lightgl','client');
  api.use('nitrolabs:jquery-hammer','client');
  api.export('OpenJsCad','client');
  //api.export('Blob','client');

  // Stylesheets
  api.addFiles('lib/css/style.css','client');
  api.addFiles('lib/css/openjscad.css','client');

  // Javascripts
  //api.addFiles('lib/js/Blob.js','client');
  api.addFiles('lib/js/formats.js','client');
  api.addFiles('lib/js/openjscad.js','client');
  api.addFiles('lib/js/openscad.js','client');
  api.addFiles('lib/js/openscad-openjscad-translator.js','client');

  // Export for web workers
  api.addAssets('lib/js/openscad.js','client');
  api.addAssets('lib/js/openjscad.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nitrocad:core');
});
