define(function() {
  function _clone(obj) {
    
    if (obj === null || typeof (obj) !== 'object') {
      return obj;
    }

    var temp = {};

    for (var key in obj) {
      temp[key] = clone(obj[key]);
    }

    return temp;
  }
  
  return function(path) {
    new Promise(function(resolve, reject) {
      require(['path'], function(module) {
        return _clone(module);
      });
    });
  };
});