const mysql = require('mysql2');

let con = mysql.createConnection({
    host: "nassi:3306",
    user:  "testdb_user",
    password:   "***********",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
});