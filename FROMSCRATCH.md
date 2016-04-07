## From Scratch

`karma` will need to be installed twice. Install globally so you can use its included 
executable wherever.  When running `karma` through `npm` scripts, you will need to 
have a local copy with a specified version.
Refer to [installation.html](https://karma-runner.github.io/0.8/intro/installation.html)

`npm install karma -g`
`npm install karma --save-dev`

Once `karma` has finished installing run the following:

`karma init`

You will have several prompts for setting up your `karma` configuration. Set up as such:

`"Which testing framework do you want to use ?"`

Using `tab`, select either `jasmine` or `mocha`. Their API is incredibly similar 
and ship only slightly different features.  For this repository, I have selected `mocha`.

`"Do you want to use Require.js ?"`

Of course answer `yes`.

`"Do you want to capture any browsers automatically ?"`

If you do not plan to run this on a CI server that requires a headless browser, use 
`Chrome`.

### Possible Errors

`Failed to install "karma-requirejs". No permissions to write in /usr/lib!`

Ignore this warning. Most likely it is trying to install `karma-requirejs` in a 
globally accessible directory.  Instead run `npm install karma-requirejs --save-dev`.