(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});
  
  var readline = require('readline');

  var Game = Hanoi.Game = function() {
    this.towers = [[], [], []];
    this.turns = 0;
  };

  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  Game.prototype.buildTowers = function(callback) {
    reader.question("How many disks would you like to play with?\t", function (num) {
      var num_pegs = parseInt(num);
      callback(num_pegs);
    });
  }
 
  Game.prototype.callBuildTowers = function() {
    var that = this;
    this.buildTowers(function (num_pegs) {
      for (var i = num_pegs; i > 0; i--) {
        that.towers[0].push(i);
      }
      that.getAnotherMove();
    });
  }


  Game.prototype.getMove = function(callback) {
  reader.question("Which tower would you like to pick up from?\t", function (peg1) {
      reader.question("Which tower would you like to put down on?\t", function (peg2) {
        var pickup = parseInt(peg1);
        var putdown = parseInt(peg2);

        callback(pickup, putdown);
      });
    });
  }

  Game.prototype.getAnotherMove = function() {
    this.display();
    var that = this;
    this.getMove(function (peg1, peg2) {
      that.checkValidMove(peg1, peg2);
    });
  }


  Game.prototype.checkValidMove = function(pickup, putdown) {
    
    var peg1 = this.towers[pickup-1];
    var peg2 = this.towers[putdown-1];
    
    if (peg1 == undefined || peg2 == undefined) {
      console.log("\n Sorry, that is not a valid tower number. Please enter 1,2, or 3")
      this.getAnotherMove();
    } else{
  
      if (peg1.slice(-1).length == 0) {
        console.log("\nSorry, you cannot pick up from an empty tower.");
        console.log("\nPlease try again.");
        this.getAnotherMove();
      } else if (peg2.length == 0) {
        this.movePegs(peg1, peg2);
      } else if (peg1.slice(-1)[0] < peg2.slice(-1)[0]) {
        this.movePegs(peg1, peg2);
      } else {
          console.log("\nSorry, you cannot put a large disk on a smaller one");
          console.log("\nPlease try again.");
          this.getAnotherMove();
      }
    }
  }

  Game.prototype.movePegs = function(peg1, peg2) {
    this.turns++;
    var disk = peg1.pop();
    peg2.push(disk);
    this.checkGameOver();
  }

  Game.prototype.checkGameOver = function() {
    if ((this.towers[0].length == 0) && 
        (this.towers[1].length == 0)) {
        this.display();
        console.log("Congratulations! You finished the game in " + this.turns + " turns!\n");
        this.requestAnotherGame();
    } else {
      this.getAnotherMove();
    }
  }

  Game.prototype.startNewGame = function(callback) {
  reader.question("Would you like to play again? (y or n)\n", function (response) {
        callback(response);
      });
  }

  Game.prototype.requestAnotherGame = function() {
    var that = this;
    this.startNewGame(function (response) {
      if (response == "y") {
        new Game().run();
      } else if (response == "n") {
        reader.close();
      } else {
        console.log("Sorry, please type in a valid response.")
        that.requestAnotherGame();
      }
    });
  }

  
  Game.prototype.display = function () {
    var longest = Math.max.apply(Math, 
            this.towers.map(function (el) { 
              return el.length 
            }));
    for (var i = longest; i >= 0; i--) {
      num1 = this.towers[0][i] || "";
      num2 = this.towers[1][i] || "";
      num3 = this.towers[2][i] || "";
      console.log("  " + num1 + "\t\t" + "   " + num2 + "\t\t" + "   " + num3);
    }
    console.log("______\t\t______\t\t______");
    console.log("tower1\t\ttower2\t\ttower3\n");
  }
  
  Game.prototype.run = function() {
    this.callBuildTowers();
  }

})(this);

var g = new this.Hanoi.Game();
g.run()