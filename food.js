var Food = function(name, value){
  this.name = name;
  this.value = value;
};

Food.prototype = {
  eaten: function(){
    // this.eat = this.weight + 10;
  }
}

module.exports = Food;
