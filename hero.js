var Hero = function(name, health, food){
  this.name = name;
  this.health = health;
  this.food = food;
};

Hero.prototype = {
  eats: function(eatenfood){
    console.log(eatenfood);
    console.log(this.food);
    if (eatenfood.name === this.food){
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
