var express = require('express');
var app = express();
var path = require('path');

const displayBoard = () => "XOX<br>OXO<br>  X"

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  res.send(displayBoard());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
