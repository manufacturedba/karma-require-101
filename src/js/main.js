require.config({
    baseUrl: 'js'
});

// Start loading the main app file. Put all of
// your application logic in there.
require(['app'], function(app) {
  app.start();
});