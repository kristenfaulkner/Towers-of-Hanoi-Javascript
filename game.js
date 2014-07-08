(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});
  
  var readline = require('readline');

  var Game = Hanoi.Game = function() {
    this.towers = [[], [], []];
    this.callBuildTowers();
  };

  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function buildTowers(callback) {
    reader.question("How many pegs would you like to play with?", function (num) {
      var num_pegs = parseInt(num);
      callback(num_pegs);
    });
  }
 
  Game.prototype.callBuildTowers = function() {
    var that = this;
    buildTowers(function (num_pegs) {
      for (var i = 0; i < num_pegs; i++) {
        that.towers[0].push(i);
      }
    });
  }
  //
  //
  // function getMove(callback) {
  // reader.question("Which peg would you like to pick up from?", function (peg1) {
  //     reader.question("Which peg would you like to put down on?", function (peg2) {
  //       var peg1 = parseInt(numString1);
  //       var peg2 = parseInt(numString2);
  //
  //       callback(peg1, peg2);
  //     });
  //   });
  // }
  //
  // function get_another_move() {
  //   display(towers);
  //   getMove(function (peg1, peg2) {
  //     check_valid_move(peg1, peg2);
  //   });
  // }
  //
  //
  // function check_valid_move(peg1, peg2) {
  //   if (peg1[-1] == []) {
  //     get_another_move();
  //   } else if (peg2 == []) {
  //     move_pegs();
  //   } else if (peg1.slice(-1) < peg2.slice(-1))
  //     move_pegs();
  //   } else if (peg1.slice(-1) > peg2.slice(-1))
  //     get_another_move();
  //   }
  // }

  // function move_pegs(peg1, peg2) {
  //   disk = peg1.pop();
  //   peg2.push(disk);
  //   check_game_over();
  // }
  //
  // function check_game_over() {
  //   if ((towers[0] == []) && (towers[1] == []) && (sorted(towers[2]))) {
  //     console.log("Game over. You won!");
  //   } else {
  //     get_another_move();
  //   }
  // }
  //
  // function sorted(array) {
  //   for(var i = 0; i < array.length - 1; i ++) {
  //       if (a[i] > a[i+1]) {
  //           return false;
  //       }
  //   }
  //   return true;
  // }
  //
  // function display(towers) {
  //   var longest = Math.max.apply(Math, towers.map(function (el) { return el.length }));
  //   for (var i = longest; i > 0; i--) {
  //     num1 = towers[0][i] || "";
  //     num2 = towers[0][i] || "";
  //     num3 = towers[0][i] || "";
  //     console.log(num1 + "\t" + num2 + "\t" + num3)
  //   }
  //   console.log("______ \t ______ \t ______")
  //   console.log("tower1 \t tower2 \t tower3")
  // }

})(this);