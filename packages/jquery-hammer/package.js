Package.describe({
  name: 'nitrolabs:jquery-hammer',
  version: '0.0.1',
  summary: 'Meteor wrapper for the jquery Hammer plugin',
  git: 'https://github.com/noorderstorm/meteor-hammer',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('jquery','client');
  api.addFiles('lib/js/jquery.hammer.js','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('nitrolabs:jquery-hammer');
});
