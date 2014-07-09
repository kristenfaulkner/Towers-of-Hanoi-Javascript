Function.prototype.myBind = function(object) {
  var that = this;
  return function() {
    return that.apply(object, [])
  }
}

//testing
var dog = {name: "Fido"}

var dogFun = function() {
  console.log(this.name + ' is playing!');
}

var boundFun = dogFun.myBind(dog)

boundFun();