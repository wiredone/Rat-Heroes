var Food = function(name, value){
  this.name = name;
  this.value = value;
  this.poison = false;
};

Food.prototype = {
  defiled: function(){
    console.log(this.value);
     this.value = (this.value * 0.5);
     return this.value
  },
  poisoned: function(){
    this.poison = true;
  }
}

module.exports = Food;
