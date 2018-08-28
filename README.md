# stencil-global-js-bug

Repro of https://github.com/ionic-team/stencil/issues/1044:

  * `yarn install`
  * `yarn build-dev`
  
Then, comment out the `es6-tween` code and rerun. Error disappears.
