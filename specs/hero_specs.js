var assert = require('chai').assert;
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');




 describe('Hero', function() {

   beforeEach(function(){
      hero1 = new Hero("HiroProtagonist",22,"pizza");
      food1 = new Food("pizza",22)
      food2 = new Food("fish",22)
      rat2 = new Rat("Rat King","poison");

   });

  it('it should have a name', function () {
     assert.equal("HiroProtagonist", hero1.name);
  });

  it('should have health', function () {
    assert.equal("22",hero1.health)
  });

  it('should have a favorite food', function () {
    assert.equal("pizza", hero1.food)
  });

  it('should say their name', function(){
    assert.equal("HiroProtagonist", hero1.talk())
  });

  it('should be able to eat food', function(){
    assert.equal(44,hero1.eats(food2))
  });

  it('should have their health should go up by 1.5 * value, If the food is their favourite food.', function(){
    assert.equal(55,hero1.eats(food1))
  });

  it('should lose health, if it eats poisoned food', function(){
  //  food1.poisoned()
    rat2.touch(food1)
    assert.equal(2,hero1.eats(food1))
  })

})

// var
