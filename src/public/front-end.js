"use strict";

let createTable = ()=>{
  $.get('/games/new', function (result) {
    console.log('Got my ajax request', result)
  })
}

// $(document).ready(function(){
//   $('.square').click(function() {
//     let value = $(this).html()
//     $(this).html(value === 'X' ? 'O' : 'X')
//   })
// })
//

$(document).ready(function(){
    var turnCount=0;


      $('.board').find('td').click(function(){
        if ($(this).html() === "") {
            if (turnCount % 2 === 0){
              $(this).html('X');
              checkVictory('X');
            } else {
           //player 2's turn (O)
              $(this).html('O');
              checkVictory('O');
            }
          turnCount++;
        }
      });


    function checkVictory(player){
       //top row check
        if ($('.board').find('#1').html() !== ''){
            if ($('.board').find('#1').html() == $('.board').find('#2').html()) {
                if ($('.board').find('#1').html() == $('#3').html()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        //left column check
            if ($('.board').find('#1').html() == $('.board').find('#4').html()) {
                if ($('.board').find('#1').html() == $('#7').html()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        //left diagonal check
            if ($('.board').find('#1').html() == $('.board').find('#5').html()) {
                if ($('.board').find('#1').html() == $('#9').html()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

       //middle column check
        if ($('.board').find('#2').html() !== ''){
            if ($('.board').find('#2').html() == $('.board').find('#5').html()) {
                if ($('.board').find('#2').html() == $('#8').html()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

        //right column check
        if ($('.board').find('#3').html() !== ''){
            if ($('.board').find('#3').html() == $('.board').find('#6').html()) {
                if ($('.board').find('#3').html() == $('#9').html()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
            //right diag check
            if ($('.board').find('#3').html() == $('.board').find('#5').html()) {
                if ($('.board').find('#3').html() == $('#7').html()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

        //middle row check

        if ($('.board').find('#4').html() !== ''){
            if ($('.board').find('#4').html() == $('.board').find('#5').html()) {
                if ($('.board').find('#4').html() == $('#6').html()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }

        //bottom row check
        if ($('.board').find('#7').html() !== ''){
            if ($('.board').find('#7').html() == $('.board').find('#8').html()) {
                if ($('.board').find('#7').html() == $('#9').html()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        } //else if ($('.board').find('#7').html() !== ''){
        //     if ($('.board').find('#7').html() !== $('.board').find('#8').html()) {
        //       if ($('.board').find('#7').html() !== $('board').find('#9').html())
        //       alert('Game over!  YOU BOTH LOSE!!');
        //       $('#newGame').removeClass('invisible');
      }
    $('#newGame').click(function(){
        $('.square').html('');
    });

});
