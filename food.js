var Food = function(name, value){
  this.name = name;
  this.value = value;
};

Food.prototype = {
  defiled: function(){
    console.log(this.value);
     this.value = (this.value * 0.5);
     return this.value

  }
}

module.exports = Food;
