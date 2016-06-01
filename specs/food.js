// Create a food constructor.
//
//     Food should have a name
//     Food should have a replenishment value
var assert = require('chai').assert;
var Food = require('../food');



 describe('Food', function() {

  //  beforeEach(function(){
  //    var hero1 = new Hero("HiroProtagonist",22,"pizza");
   //
  //  });
  it('it should have a name', function () {
      var food1 = new Food("pizza",22)
     assert.equal("pizza", food1.name);
  })

  it('should have a replenishment value', function(){
    var food1 = new Food("pizza",22)
    assert.equal(22, food1.value);


  })
})
