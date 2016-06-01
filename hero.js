var Hero = function(name, health, food){
  this.name = name;
  this.health = health;
  this.food = food;
};

Hero.prototype = {
  eat: function(){
    // this.eat = this.weight + 10;
  },
  talk: function(){
return this.name
  }
}

module.exports = Hero;
