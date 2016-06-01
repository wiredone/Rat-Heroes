var Rat = function(name, power){
  this.name = name;
  this.power = power;
};

Rat.prototype = {
  touch: function(food){
     food.defiled()
  }
}

module.exports = Rat;
