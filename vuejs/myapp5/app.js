const express = require('express')
const app = express()

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// configure db connection
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'people'
});

///////////// すべてのデータを取得 ////////////

// axios({
//     url: `person/`,
//     method: "get",
// })

////////////////////////////////////

app.get('/person/', function (req, res) {
  connection.query('select * from person', function (err, rows, fields) {
      if (err) throw err
      res.send(rows);
  })
});

//////////// データの作成 ////////////

// const name = "matsumura"
// axios({
//     url: `person/create`,
//     method: "post",
//     data: {
//         name: name
//     }
// })

////////////////////////////////////

app.post('/person/create', upload.array(), function (req, res, next) {
  const name = req.body.name
  connection.query(`insert into person (name) values ("${name}");`, function (err, rows, fields) {
      if (err) throw err
      res.send(rows);
  })
});

//////////// idを指定してデータの取得 ////////////

// const id = 1
// axios({
//     url: `person/${id}/`,
//     method: "get",
// })

////////////////////////////////////

app.get('/person/:id/', function (req, res) {
  const id = req.params.id
  connection.query(`select * from person where id = ${id};`, function (err, rows, fields) {
      if (err) throw err
      res.send(rows);
  })
});

//////////// idを指定してデータのアップデート ////////////

// const id = 1
// const name = "matsumura"
// axios({
//     url: `person/${id}/`,
//     method: "put",
//     data: {
//         name: name
//     }
// })

////////////////////////////////////

app.put('/person/:id/', function (req, res) {
  const id = req.params.id
  const name = req.body.name
  connection.query(`update person set name = "${name}" where id = ${id};`, function (err, rows, fields) {
    // updateのあとにくるテーブルを読み込み、次のset nameで、書き換える値を指定する。
      if (err) throw err
      res.send(rows);
  })
});

//////////// idを指定してデータの削除 ////////////

// const id = 1
// axios({
//     url: `person/${id}/`,
//     method: "delete",
// })

////////////////////////////////////

app.delete('/person/:id/', function (req, res) {
  console.log("うんち")
  const id = req.params.id
  connection.query(`delete from person where id = ${id};`, function (err, rows, fields) {
      if (err) throw err
      res.send(rows);
  })
});


app.use(express.static('public'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))