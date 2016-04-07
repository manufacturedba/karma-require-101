define(['service/filter'], function() {
  var module = {};
  
  module.foo = 'bar';
  
  module.start = function() {
    module.foo = 'spam';
  };
  
  return module;
});