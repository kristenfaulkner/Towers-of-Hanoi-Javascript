(function (root) {
  
  var Numbers = root.Numbers = (root.Numbers || {});
  var Add = Numbers.Add = function() {
  };

  var readline = require('readline');
  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


Add.prototype.addNumbers = function(sum, numsLeft) {
  that = this;
  if (numsLeft > 0) {
    reader.question("What number would you like to add?\n", function (n) {
          var num = parseInt(n);
          sum += num;
          console.log("Total Sum: " + sum);
          that.addNumbers(sum, numsLeft-1);
    });
  } else {
    reader.close();
  }
}

Add.prototype.getNums = function() {
  that = this;
    reader.question("How many numbers would you like to add?\n", function (n) {
          that.addNumbers(0, n)
    });
}

})(this);

var adder = new this.Numbers.Add();
adder.getNums();

