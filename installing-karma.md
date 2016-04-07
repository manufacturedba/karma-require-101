## Installing Karma

`karma` will need to be installed twice. Install globally to add its binary to your path.  
When running `karma` through `package.json` scripts, you will need to have a local copy with a specified version.
Refer to [installation.html](https://karma-runner.github.io/0.8/intro/installation.html)

`npm install karma -g`
`npm install karma --save-dev`

Once `karma` has finished installing run the following:

`karma init`

You will have several prompts for setting up your `karma` configuration. Set up as such:

`"Which testing framework do you want to use ?"`

Select either `jasmine` or `mocha`. Their API is incredibly similar and ship only slightly different features.  

For this repository, I have selected `mocha`.  `sinon` and `chai` have been included to fill in for missing features.

`"Do you want to use Require.js ?"`

`yes`

`"Do you want to capture any browsers automatically ?"`

If you do not plan to run this on a CI server that requires a headless browser, use your browser of choice. 
This repo is set up for **Chrome**.

`"What is the location of your source and test files ?"`

This project is structured with all source code in `src/js` and tests in `test/unit`

`src/js/**/*.js`
`test/unit/**/*Spec.js`

`"Should any of the files included by the previous patterns be excluded ?"`

Because we do not want the application to load before we can set up our test suite, we need to excluded `src/js/main.js` (entry point).

`src/js/main.js`

`"Do you wanna generate a bootstrap file for RequireJS?"`

This file will behave similarly to `src/js/main.js`.

`yes`

`"Do you want Karma to watch all the files and run the tests on change ?"`

For the learning purposes we'll select yes but we would not this turned on for CI servers.

You should now have both a `karma.conf.js` file and a `test-main.js` in your directory. 

To prevent some possible clutter, move `test-main.js` into `test/`.  In your `karma.conf.js` file, update the location of `test-main.js`

### Possible Errors

`Failed to install "karma-requirejs". No permissions to write in /usr/lib!`

Ignore this warning. Most likely it is trying to install `karma-requirejs` in a 
globally accessible directory.  Instead run `npm install karma-requirejs --save-dev`.