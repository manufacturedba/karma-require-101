# karma-require-101

> The goal of this repository is to teach setting up Karma with RequireJS.

The code included does not run out of the box intentionally.  Set up is included however.

## Installing Karma

We will first need to install Karma and generate some configuration files.  

These will tell which files should be included for running our tests in the browser.

Refer to this [guide](installing-karma.md)

## Configuring Karma

After we have our configurations, we will need a few plugins to get going.

`karma-*` plugins simplify loading in our testing libraries. 

If you have a library that is incompatible with Karma's plugin loader, you can 
add its files manually to the top of `files` in `karma.conf.js`. They should run 
immediately so there is no need to not include them. More on this below. *Order does matter*

`npm install karma-mocha mocha karma-requirejs requirejs karma-chai chai karma-sinon sinon --save-dev`

For launching your selected browser you will need to install its plugin as well.

`npm install karma-BROWSER-launcher --save-dev` 

ex. `npm install karma-chrome-launcher --save-dev`

At this point, you should be able to run `npm test` or `karma start karma.conf.js` without Karma crashing.

### Adding Additional Plugins

Although we have installed `sinon` and `chai` they need to be added to your `karma.conf.js`.

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai`, `sinon`]
    
## Correcting Script Paths

`test-main.js` is meant to emulate `main.js` with the only difference that they 
have will not resolve `require`'d paths the same.  In an effort to not have two 
sets of paths that must be maintained, we have to update our `baseUrl`

    require.config({
      // Karma serves files under /base, which is the basePath from your config file
      baseUrl: '/base/src/js/',

      // dynamically load all test files
      deps: allTestFiles,

      // we have to kickoff jasmine, as it is asynchronous
      callback: window.__karma__.start
    });

This means RequireJS will grab files from the same location for both main files. 

    // Get a list of all the test files to include
    Object.keys(window.__karma__.files).forEach(function(file) {
      if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
        // then do not normalize the paths
        var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
        // We now step back two directories to the root of our app
        normalizedTestModule = '../../' + normalizedTestModule;
        allTestFiles.push(normalizedTestModule);
      }
    });

`npm test`

Your tests should run again.

### Possible Errors

`throw error('No provider for "' + name + '"!');`

You are either missing the necessary plugin `karma-PLUGINNAME` or do not have `karma` installed locally.

