"use strict";

$( document ).ready(function() {
  console.log('Running...')
  $.get('/games/new', function (result) {
      console.log('Got my ajax request', result)
  })
  
  // let boardDiv = $('#board')
  // console.log(boardDiv)
  // boardDiv.html('Hola')
  // console.log(boardDiv)
})

