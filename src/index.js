var express = require('express');
var app = express();

const displayBoard = () => "XOX<br>OXO<br>  X"
  


app.get('/', function (req, res) {
  res.send(displayBoard());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

