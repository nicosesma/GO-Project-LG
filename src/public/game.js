"use strict";

class Game {
  constructor() {
    this.board = '.........'
    this.xNext = true // this could even actually be a function instead
  }

  place(position) {
    // (position is 0-8)
    // MAYBE check if move is valid i.e. square is free - or maybe you trust the UI
    // you know what to place by using this.xNext
    // at the end, make sure you flip this.xNext
    this.board == board;
    this.currentState.board
  }

  bestMove() {
    this.board = 'XX.......';
    this.xNext = function() {
      g.place(3)
    }
    // count each of the 8 available lines
    // count your pieces vs opponent's
      // if 2-0 for you, win
      // if 0-2, block immediately
      // if multiple 0-1s, choose (randomly?) between them and block
      // otherwise choose between your 1-0s
  }

  zeroPlayer() {
    // actually simulate the game
    // write a very simplistic bestMove - first available square?? - so you can test this
    // have fun with it
  }

  gameOver() {
    // return true if no . in this.board
  }
}

let player = human;
let comp = computer;

function getState(td) {
  if ($('td').html() === "")  {
    if (turnCount % 2 === 0){
      $(this).html('X');
      checkVictory('X');
    } else {
   //player 2's turn (O)
      $(this).html('O');
      checkVictory('O');
    }
    ($(this).html("O"));
    checkVictory("O");
  }
}
console.log('Bloopers')

// $(function() {
//
//   var player = 1;
//   var table = $('table');
//   var turn = $('.turn');
//   displayNextPlayer(turn, player);
//
//   $('td').click(function() {
//     td = $(this);
//     var state = getState(td);
//     if(!state) {
//       var pattern = definePatternForCurrentPlayer(player);
//       changeState(td, pattern);
//       if(checkIfPlayerWon(table, pattern)) {
//         messages.html('Player '+player+' has won.');
//         turn.html('');
//       } else {
//         player = setNextPlayer(player);
//         displayNextPlayer(turn, player);
//       }
//     } else {
//       messages.html('This box is already checked.');
//     }
//   });
//
//   $('.reset').click(function() {
//     player = 1;
//     messages.html('');
//     reset(table);
//     displayNextPlayer(turn, player);
//   });
//
// });

// function getState(td) {
//   if(td.hasClass('cross') || td.hasClass('circle')) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
//
// function changeState(td, pattern) {
//   return td.addClass(pattern);
// }
//
// function definePatternForCurrentPlayer(player) {
//   if(player == 1) {
//     return 'cross';
//   } else {
//     return 'circle';
//   }
// }
//
// function setNextPlayer(player) {
//   if(player == 1) {
//     return player = 2;
//   } else {
//     return player = 1;
//   }
// }
//
// function displayNextPlayer(turn, player) {
//   turn.html('Player turn : '+player);
// }
//
// function checkIfPlayerWon(table, pattern) {
//   var won = 0;
//   if(table.find('.item1').hasClass(pattern) && table.find('.item2').hasClass(pattern) && table.find('.item3').hasClass(pattern)) {
//     won = 1;
//   } else if (table.find('.item1').hasClass(pattern) && table.find('.item4').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
//     won = 1;
//   } else if (table.find('.item1').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
//     won = 1;
//   } else if (table.find('.item4').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item6').hasClass(pattern)) {
//     won = 1;
//   } else if (table.find('.item7').hasClass(pattern) && table.find('.item8').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
//     won = 1;
//   } else if (table.find('.item2').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item8').hasClass(pattern)) {
//     won = 1;
//   } else if (table.find('.item3').hasClass(pattern) && table.find('.item6').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
//     won = 1;
//   } else if (table.find('.item3').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
//     won = 1;
//   }
//   return won;
// }
//
// function reset(table) {
//   table.find('td').each(function() {
//     $(this).removeClass('circle').removeClass('cross');
//   });
// }

// var human = 'x'; // turn = 0
// var computer = 'o'; // turn = 1
// var compMove;
// var turn = 0; // toggles btw 0 and 1 for switching turns
//
// var boardCheck; // function to check value in each cell
// var 1; // value within each cell
// var 2;
// var 3;
// var 4;
// var 5;
// var 6;
// var 7;
// var 8;
// var 9;
//
// var checkWin; // function that checks the board for winning combo
// var xWin = false; // true if X wins
// var oWin = false; // true if O wins
// var winAlert; // function that declares winner and restarts game
//
// var newGame;
// var clearBoard;
//
//
// // PLACES AN X OR O IN THE BOX WHEN CLICKED. TOGGLES.
// var newGame = function () {
//     $('td').one('click', function (event) {
//         if (turn == 0) {
//             $(this).text(human);
//             boardCheck();
//             checkWin();
//             turn == 1;
//             compMove();
//             boardCheck();
//             checkWin();
//         }
//     });
// };
//
//
// // INITIALIZES GAME - keep after var newGame
// $(document).ready(function () {
//     newGame();
// });
//
// // COMP MOVE AI DETECTS IF THERE ARE TWO IN A ROW NEXT TO AN EMPTY CELL AND PLACES MOVE THERE
// var compMove = function () {
//     if (1 == "" && ((3 == "x" && 2 == "x") || (8 == "x" && 5 == "x") || (7 == "x" && 4 == "x"))) {
//         $('#a1').text("o");
//         turn = 0;
//     } else {
//       if (2 == "" && ((1 == "x" && a3 == "x") || (8 == "x" && 5 == "x"))) {
//         $('#2').text("o");
//         turn = 0;
//         }
//         else{
//         if (3 == "" && ((1 == "x" && 2 == "x") || (7 == "x" && 5 == "x") || (9 == "x" && 6 == "x"))) {
//             $('#3').text("o");
//             turn = 0;
//         }
//             else{
//             if (9 == "" && ((7 == "x" && 8 == "x") || (1 == "x" && 5 == "x") || (3 == "x" && 6 == "x"))) {
//                 $('#9').text("o");
//                 turn = 0;
//         }
//                 else{
//                 if (7 == "" && ((9 == "x" && 8 == "x") || (3 == "x" && 5 == "x") || (1 == "x" && 4 == "x"))) {
//                     $('#7').text("o");
//                     turn = 0;
//         }
//                     else{
//                     if (8 == "" && ((9 == "x" && 7 == "x") || (2 == "x" && 5 == "x"))) {
//                         $('#8').text("o");
//                         turn = 0;
//         }
//                         else{
//                         if (4 == "" && ((6 == "x" && 5 == "x") || (1 == "x" && 7 == "x"))) {
//                             $('#1').text("o");
//                             turn = 0;
//         }
//                             else{
//                             if (6 == "" && ((3 == "x" && 9 == "x") || (5 == "x" && 4 == "x"))) {
//                                 $('#6').text("o");
//                                 turn = 0;
//         }
//                                 else{
//                                 if (5 == "" && ((3 == "x" && 7 == "x") || (9 == "x" && 1 == "x") || (6 == "x" && 4 == "x") || (8 == "x" && 2 == "x"))) {
//                                     $('#5').text("o");
//                                     turn = 0;
//         }
//                                    else{ // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
//                                     if (5 == "") {
//                                         $('#5').text("o");
//                                         turn = 0;
//
//                                     }
//                                         else{
//                                         if (1 == "") {
//                                             $('#1').text("o");
//                                             turn = 0;
//
//                                     }
//                                             else{
//                                             if (9 == "") {
//                                             $('#9').text("o");
//                                             turn = 0;
//
//                                     }
//                                                 else {
//                                                 if (8 == "") {
//                                             $('#8').text("o");
//                                             turn = 0;
//
//                                     }
//                                                     else{
//                                                     if (b1 == "") {
//                                             $('#4').text("o");
//                                             turn = 0;
//
//                                     }
//                                                     }
//                                                 }
//                                             }
//
//
//                                         }
//                                    }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };
//
//
// // CREATES A FUNCTION TO DETECT WHAT IS IN EACH BOX AFTER EACH MOVE
// boardCheck = function () {
//     1 = $('#1').html();
//     2 = $('#2').html();
//     3 = $('#3').html();
//     4 = $('#4').html();
//     5 = $('#5').html();
//     6 = $('#6').html();
//     7 = $('#7').html();
//     8 = $('#8').html();
//     9 = $('#9').html();
// };
//
// // CREATES A FUNCTION TO DETECT A WIN OR A TIE
// checkWin = function () { // CHECKS IF X WON
//     if ((1 == 2 && 1 == 3 && (1 == "x")) || //first row
//     (4 == 5 && 4 == 6 && (4 == "x")) || //second row
//     (7 == 8 && 7 == 9 && (7 == "x")) || //third row
//     (1 == 4 && 1 == 7 && (1 == "x")) || //first column
//     (2 == 5 && 2 == 8 && (2 == "x")) || //second column
//     (3 == 6 && 3 == 9 && (3 == "x")) || //third column
//     (1 == 5 && 1 == 9 && (1 == "x")) || //diagonal 1
//     (3 == 5 && 3 == 7 && (3 == "x")) //diagonal 2
//     ) {
//         xWin = true;
//         winAlert();
//
//     } else { // CHECKS IF O WON
//         if ((1 == 2 && 1 == 3 && (1 == "o")) || //first row
//         (4 == 5 && 4 == 6 && (4 == "o")) || //second row
//         (7 == 8 && 7 == 9 && (7 == "o")) || //third row
//         (1 == 4 && 1 == 7 && (1 == "o")) || //first column
//         (2 == 5 && 2 == 8 && (2 == "o")) || //second column
//         (3 == 6 && 3 == 9 && (3 == "o")) || //third column
//         (1 == 5 && 1 == 9 && (1 == "o")) || //diagonal 1
//         (3 == 4 && 3 == 7 && (3 == "o")) //diagonal 2
//         ) {
//             oWin = true;
//             winAlert();
//
//         } else { // CHECKS FOR TIE GAME IF ALL CELLS ARE FILLED
//             if (((1 == "x") || (1 == "o")) && ((4 == "x") || (4 == "o")) && ((7 == "x") || (7 == "o")) && ((2 == "x") || (2 == "o")) && ((5 == "x") || (5 == "o")) && ((8 == "x") || (8 == "o")) && ((3 == "x") || (3 == "o")) && ((6 == "x") || (6 == "o")) && ((9 == "x") || (9 == "o"))) {
//                 alert("It's a tie!");
//             }
//         }
//     }
// };
//
//
// // DECLARES WHO WON
// var winAlert = function () {
//     if (xWin == true) {
//         alert("You won!");
//         clearBoard(); // THIS DOESN'T WORK
//     } else {
//         if (oWin == true) {
//             alert("Sorry, you lose!");
//             clearBoard(); // THIS DOESN'T WORK
//         }
//     }
// };
//
//
// // NEWGAME BUTTON CLEARS THE BOARD, RESTARTS GAME, AND RESETS THE WINS
// var clearBoard = $('#restart').click(function (event) {
//     1 = $('#1').text("");
//     4 = $('#4').text("");
//     7 = $('#7').text("");
//     2 = $('#2').text("");
//     5 = $('#5').text("");
//     8 = $('#8').text("");
//     3 = $('#3').text("");
//     6 = $('#6').text("");
//     9 = $('#9').text("");
//     xWin = false;
//     oWin = false;
//     newGame();
//     location.reload(); // WITHOUT THIS, THERE'S A BUG WHICH PLACES MULTIPLE 0'S ON ALL GAMES AFTER THE FIRST
// });
//
// // STILL NEED TO FIX:
// // * Alert for tie game or xWin appears twice
// // * X's can replace O's
// // * Missed opportunities for O to win
// // * Almost never let's human win
// // * Clean up logic for compMove
