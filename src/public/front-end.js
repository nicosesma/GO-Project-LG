"use strict"

$(document).ready(function(){
  let xPlayerMode = 0
  ZeroPlayerMode()

  addListenerToclearTheBoard()
  addNavListeners()
  var turnCount = 0

  $('.board').find('td').click(function(){
    if ($(this).html() === "") {
        if (turnCount % 2 === 0){
          $(this).html('X')
          checkVictory('X')
        } else {
       //player 2's turn (O)
          $(this).html('O')
          checkVictory('O')
        }
      turnCount++
    }
  })
})

const ZeroPlayerMode = () => {
  let g = new Game()
  g.autoPlay()
  console.log('g.moveHistory', g.moveHistory)
  // give it a random pause between .5 and 2 seconds
  g.moveHistory.forEach(m => {
    setTimeout(function(){
      $('#1').html('X')
      setTimeout(function(){
        $('#2').html('O')
        setTimeout(function(){
          $('#3').html('X')
          setTimeout(function(){
            $('#4').html('O')
            setTimeout(function(){
              $('#5').html('X')
              setTimeout(function(){
                $('#6').html('O')
                setTimeout(function(){
                  $('#7').html('O')
                  setTimeout(function(){
                    $('#8').html('')
                    setTimeout(function(){
                      $('#9').html('X')
                      $('.score').html('Game over! X is the winner!')
                    }, 660)
                  }, 780)
                }, 800)
              }, 600)
            }, 800)
          }, 700)
        }, 900)
      }, 1200)
    }, 1750)
  })
}

const addNavListeners = () => {
  $('#0-player').click(function(e) {
    e.preventDefault()
    console.log('You clicked on #0-player!!!')
  })
  $('#1-player').click(function(e) {
    e.preventDefault()
    console.log('You clicked on #1-player!!!')
  })
  $('#2-player').click(function(e) {
    e.preventDefault()
    console.log('You clicked on #2-player!!!')
  })
}

function checkVictory(player) {
  //top row check
  if ($('.board').find('#1').html() !== '') {
    if ($('.board').find('#1').html() == $('.board').find('#2').html()) {
      if ($('.board').find('#1').html() == $('#3').html()) {
        $('.score').html('Game over! ' + player + ' is the winner!')
        $('#newGame').removeClass('invisible')
      }
    }
    //left column check
    if ($('.board').find('#1').html() == $('.board').find('#4').html()) {
      if ($('.board').find('#1').html() == $('#7').html()) {
        $('.score').html('Game over! ' + player + ' is the winner!')
        $('#newGame').removeClass('invisible')
      }
    }
    //left diagonal check
    if ($('.board').find('#1').html() == $('.board').find('#5').html()) {
      if ($('.board').find('#1').html() == $('#9').html()) {
        $('.score').html('Game over! ' + player + ' is the winner!')
        $('#newGame').removeClass('invisible')
      }
    }
  }

  //middle column check
  if ($('.board').find('#2').html() !== '') {
    if ($('.board').find('#2').html() == $('.board').find('#5').html()) {
      if ($('.board').find('#2').html() == $('#8').html()) {
        $('.score').html('Game over! ' + player + ' is the winner!')
        $('#newGame').removeClass('invisible')
      }
    }
  }

  //right column check
  if ($('.board').find('#3').html() !== '') {
    if ($('.board').find('#3').html() == $('.board').find('#6').html()) {
      if ($('.board').find('#3').html() == $('#9').html()) {
        $('.score').html('Game over! ' + player + ' is the winner!')
        $('#newGame').removeClass('invisible')
      }
    }
    //right diag check
    if ($('.board').find('#3').html() == $('.board').find('#5').html()) {
      if ($('.board').find('#3').html() == $('#7').html()) {
        $('.score').html('Game over! ' + player + ' is the winner!')
        $('#newGame').removeClass('invisible')
      }
    }
  }

  //middle row check

  if ($('.board').find('#4').html() !== '') {
    if ($('.board').find('#4').html() == $('.board').find('#5').html()) {
      if ($('.board').find('#4').html() == $('#6').html()) {
        $('.score').html('Game over! ' + player + ' is the winner!')
        $('#newGame').removeClass('invisible')
      }
    }
  }

  //bottom row check
  if ($('.board').find('#7').html() !== '') {
    if ($('.board').find('#7').html() == $('.board').find('#8').html()) {
      if ($('.board').find('#7').html() == $('#9').html()) {
        $('.score').html('Game over! ' + player + ' is the winner!')
        $('#newGame').removeClass('invisible')
      }
    }
  } //else if ($('.board').find('#7').html() !== ''){
  //     if ($('.board').find('#7').html() !== $('.board').find('#8').html()) {
  //       if ($('.board').find('#7').html() !== $('board').find('#9').html())
  //       alert('Game over!  YOU BOTH LOSE!!')
  //       $('#newGame').removeClass('invisible')
}

// function scoreBoard(score) {
//   $.get(score = this.score)
//   console.log('ScoreBoard created')
// }
//
// scoreBoard.prototype.addPoint = function(score) {
//   console.log(this.checkVictory + 1)
// }

function addListenerToclearTheBoard() {
  $('#newGame').click(function() {
    $('.square').html('')
    $('.score').html('')
    $('#mode').html(' 2')
    // $('.scoreBoard').html(scoreBoard(this.score)) //have to figure out how to define this function and
  })
}
