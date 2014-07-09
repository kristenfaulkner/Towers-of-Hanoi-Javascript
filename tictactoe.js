(function (root) {
  var TicTacToe = root.TicTacToe = (root.TicTacToe || {});
  
  var readline = require('readline');

  var Game = TicTacToe.Game = function() {
    this.board = [[ , , , ], [ , , , ], [ , , , ]];
    this.turn = "X"
  };

  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  Game.prototype.getMove = function(callback) {
    that = this;
  reader.question("Which square would you like to make your move? [x,y]\t", function (coord) {
        callback(coord);
      });
  }

  Game.prototype.requestMove = function() {
    this.display();
    var that = this;
    this.getMove(function (coord) {
      that.checkValidMove(coord);
    });
  }


  Game.prototype.checkValidMove = function(coord) {
    
    var x = coord[0];
    var y = coord[1];
    
    if (this.board[x][y] != undefined) {
      console.log("\n Sorry, that is not a valid move. Please try again");
      this.getAnotherMove();
    } else {
      this.board[x][y] = this.turn;
      this.checkGameOver();
    }
  }

  Game.prototype.checkGameOver = function() {
      //check for horizontal or vertical win
      for (var i = 0; i < 3; i++) {
        if ((this.board[i][0] == this.board[i][1] == this.board[i][2]) ||
           (this.board[0][i] == this.board[1][i] == this.board[2][i]))  {
             console.log("Game over." + this.player + "wins!");
             reader.close();
        }
      }
    
       //check for diagnol win
       if (this.board[0][0] == this.board[1][1] == this.board[2][2]  ||
           this.board[0][2] == this.board[1][1] == this.board[2][0]) {
  
             console.log("Game over." + this.player + "wins!");
             reader.close();
        
       } else {
         this.player = (this.player == "X" ? "O" : "X");
         this.getAnotherMove();
       }
  }

  // Game.prototype.startNewGame = function(callback) {
  // reader.question("Would you like to play again? (y or n)\n", function (response) {
  //       callback(response);
  //     });
  // }
  //
  // Game.prototype.requestAnotherGame = function() {
  //   var that = this;
  //   this.startNewGame(function (response) {
  //     if (response == "y") {
  //       new Game().run();
  //     } else if (response == "n") {
  //       reader.close();
  //     } else {
  //       console.log("Sorry, please type in a valid response.")
  //       that.requestAnotherGame();
  //     }
  //   });
  // }

  
  Game.prototype.display = function () {
    for (var i = 2; i >= 0; i--) {
      num1 = this.board[0][i] || "_";
      num2 = this.board[1][i] || "_";
      num3 = this.board[2][i] || "_";
      console.log("  " + num1 + "\t" + "   " + num2 + "\t" + "   " + num3);
    }
    console.log("  " + 1 + "\t" + "   " + 2 + "\t" + "   " + 3);
  }
  
  Game.prototype.run = function() {
    this.requestMove();
  }

})(this);

var g = new this.TicTacToe.Game();
g.run()