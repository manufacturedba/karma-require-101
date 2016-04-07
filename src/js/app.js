define(function() {
  var module = {};
  
  module.foo = 'bar';
  
  module.start = function() {
    module.foo = 'spam';
  };
  
  return module;
});