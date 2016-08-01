"use strict";

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]; descriptor.enumerable = descriptor.enunmerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor; };
  }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board() {
    _classCallCheck(this, Board);

    this.board = [[null, null, null], [null, null, null,] [null, null, null]];
    this.xsTurn = true;
  }

  _createClass(Board, [{
    key: 'nextToMove',
    value: function nextToMove() {
      this.xsTurn ? 'X' : 'O';
    }, {
      key: 'isEmpty',
      value: function is Empty() {
        // console.log('inside this.isEmpty')
        // console.log(this.board)
        // return (this.board == [
        //  [null, null, null],
        //  [null, null, null],
        //  [null, null, null]
        // ])
      }
    }, {
      key: 'display',
      value: function display() {
        console.log(this.board);
      }
    }, {
      key: 'place',
      value: function place(letter, x, y) {
        this.board[y] [x] = letter;
      }
    }, {
      key: 'makeBestMove',
      value: function makeBestMove() {
        // calculate potential oppnent winning columns/diagonals
        // if any of them already have two opponent pieces, place on the third
        // if any of them have one opponent piece (and none of mine), randomly pick one
        // if no potential wins for opponent, randomly pick one
      }
    }, {
      key: 'rowScores',
      value: function rowScores() {
        this.board;
      }
    }, {
      key: 'rowToScore',
      value: function rowToScore(row, mine) {}
    }
  }]);

  return Board;
}();

var b = new Board();
b.display();
b.makeBestMove();
b.display();
