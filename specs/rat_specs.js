var assert = require('chai').assert;
var Rat = require('../rat');
var Food = require('../food');
// var Food = require('../food');




 describe('Rat', function() {

   beforeEach(function(){
      rat1 = new Rat("Socrates","defile");
      food1 = new Food("pizza",22)
      food2 = new Food("fish",22)
   });

  it('it should have a name', function () {
     assert.equal("Socrates", rat1.name);
  });
  it('it should have a power', function () {
     assert.equal("defile", rat1.power);
  })
  it('it should be able to defile food', function () {
    rat1.touch(food1)
     assert.equal(11, food1.value);
  })

})
