String.prototype.replaceAt = function (index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
};

// $('#newAiGame').click(function (){
//   $('.g.board').button.ai('');
// });

"use strict";

class Game {
  constructor() {
    this.board = '.........'
    this.xNext = true // this could even actually be a function instead
  }

  xo() {
    return this.xNext ? 'X' : 'O'
  }

  place(position) {
    // MAYBE check if move is valid i.e. square is free - or maybe you trust the UI
    this.board = this.board.replaceAt(position, this.xo())
    this.xNext = !this.xNext
  }

  makeBestMove() {
    // easy version
    // find the first dot
    let indexOfFirstDot = this.board.indexOf('.')

    if (indexOfFirstDot == -1) {
      return false
    } else {
      this.place(indexOfFirstDot)
      return true
    }

    // count each of the 8 available lines
    // count your pieces vs opponent's
      // if 2-0 for you, win
      // if 0-2, block immediately
      // if multiple 0-1s, choose (randomly?) between them and block
      // otherwise choose between your 1-0s
    // return an integer representing position of desired move
  }

  autoPlay() {
    let stillGoing = true
    while (stillGoing === true) {
      stillGoing = this.makeBestMove()
    }
  }

  gameOver() {
    if (this.board !== ".........") {
      return true
    }
  }
}
