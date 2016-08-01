var express = require('express');
var app = express();
var path = require('path');

const displayBoard = () => "XOX<br>OXO<br>  X"

import { Board } from './board'

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  res.send(displayBoard());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/games/new', function (req, res) {
  console.log('Hitting /board/new')
  let b = new Board()
});


let b = new Board()