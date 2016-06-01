var Hero = function(name, health, food){
  this.name = name;
  this.health = health;
  this.food = food;
};

Hero.prototype = {
  eats: function(eatenfood){
    if (eatenfood === this.food){
      this.health += (1.5* eatenfood.value);
    }
    else{
    this.health += eatenfood.value};
    return this.health
  },
  talk: function(){
return this.name
  }
}

module.exports = Hero;
