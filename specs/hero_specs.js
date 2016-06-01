var assert = require('chai').assert;
var Hero = require('../hero');
var Food = require('../food');




 describe('Hero', function() {

   beforeEach(function(){
     var hero1 = new Hero("HiroProtagonist",22,"pizza");
     var food1 = new Food("pizza",22)

   });

  it('it should have a name', function () {
      var hero1 = new Hero("HiroProtagonist",22,"pizza")
     assert.equal("HiroProtagonist", hero1.name);
  });

  it('should have health', function () {
    var hero1 = new Hero("HiroProtagonist",22,"pizza")
    assert.equal("22",hero1.health)

  });
  it('should have a favorite food', function () {

    var hero1 = new Hero("HiroProtagonist",22,"pizza")
  assert.equal("pizza", hero1.food)
  });

  it('should say their name', function(){

    // var hero1 = new Hero("HiroProtagonist",22,"pizza")
  assert.equal("HiroProtagonist", hero1.talk())
  })

  it('should be able to eat food', function(){
    // var hero1 = new Hero("HiroProtagonist",22,"pizza")
    // var food2 = new Food("fish",22)

    assert.equal(22,hero1.eats(food2))
  })
  it('should have their health should go up by 1.5 * value, If the food is their favourite food.', function(){
    // var hero1 = new Hero("HiroProtagonist",22,"pizza")
    // var food1 = new Food("pizza",22)

    assert.equal(55,hero1.eats(food1))

  })

})

// var
