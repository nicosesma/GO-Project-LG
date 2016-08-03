const express = require('express');
const app = express();
const path = require('path');

const displayBoard = () => "XOX<br>OXO<br>  X"

import { Board } from './board'

var port = process.env.PORT || 3000

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  res.render('index');
});

// app.listen(process.env.PORT, function () {
//   console.log('Example app listening on port 3000!');
// });

app.get('/games/new', function (req, res) {
  console.log('Hitting /board/new')
  let b = new Board()
});

app.listen(process.env.PORT || 3000);
