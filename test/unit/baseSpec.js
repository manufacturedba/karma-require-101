define(['app', '../../test/lib/dep-loader'], function(app, depLoader) {
  var filterService;
  
  beforeEach(function(done) {
    depLoader('service/filter')
    .then(function(module) {
      filterService = module;
      done();
    });
  });
  
  describe('App module', function() {
    it('should have a property of foo with a value of "bar"', function() {
      
    });
    
    describe('start method', function() {
      it('should set property foo to "spam"', function() {
        
      });
    });
  });
});