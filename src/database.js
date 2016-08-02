const bluebird = require('bluebird')
const options = {
    promiseLib: bluebird // overriding the default (ES6 Promise);
}
const pgp = require('pg-promise')(options)
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'go-game-development'
}

var db = pgp(connection)

function sql(file) {
  return new pgp.QueryFile(file, {minify: true})
}

var sqlInit = sql('./db.sql')

db.one(sqlInit)
.then(data => {
  console.log('data', data)
})
.catch((error) => {
  console.log("ERROR:", error.message || error); // print error;
})
.finally(pgp.end())