"use strict";

$(document).ready(function(){
  $('.square').click(function() {
    let value = $(this).html()
    $(this).html(value === 'X' ? 'O' : 'X')
  })
})

let createTable = ()=>{
  $.get('/games/new', function (result) {
    console.log('Got my ajax request', result)
  })
}
