define(function() {
  function _clone(obj) {
    
    if (obj === null || typeof (obj) !== 'object') {
      return obj;
    }

    var temp = {};

    for (var key in obj) {
      temp[key] = _clone(obj[key]);
    }

    return temp;
  }
  
  return function(path) {
    return new Promise(function(resolve, reject) {
      require([path], function(module) {
         resolve(_clone(module));
      });
    });
  };
});