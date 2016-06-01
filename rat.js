var Rat = function(name, power){
  this.name = name;
  this.power = power;
};

Rat.prototype = {
  touch: function(food){
    if(this.power === "defile"){
     food.defiled()}
     else{
     food.poisoned()
     }
  }
}

module.exports = Rat;
