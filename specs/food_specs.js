// Create a food constructor.
//
//     Food should have a name
//     Food should have a replenishment value
var assert = require('chai').assert;
var Food = require('../food');



 describe('Food', function() {

   beforeEach(function(){
     food1 = new Food("pizza",22)
     food2 = new Food("fish",22)
   });

  it('it should have a name', function () {
     assert.equal("pizza", food1.name);
  })

  it('should have a replenishment value', function(){
    assert.equal(22, food1.value);

  })

  it('should be poisonable by a rat', function(){

     assert.equal(11, food1.defiled());

  })


})
