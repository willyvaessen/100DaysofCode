// const http = require('http');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World! This is a simple webserver on Node.js');
// }).listen(8080);
//
// //  Above is the "simple webserver" code.
require('dotenv').config();
const express = require('express');
const pool = require('./db');
const app = express();
const port = 8080;

//  Expose default endpoint "/

app.get('/', (req,res) => {
    res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(`Hello ${process.env.HELLO}`)
});

//  Expose an endpoint "/people"
app.get('/people', async (req,res) => {
    let conn;
    try {
        //  Establish connection to MariaDB
        conn = await pool.getConnection();

        //  Create a new query
        let query = "select * from people";

        //  Execute the query and set the result to a new variable
        let rows = await conn.query(query);

        //  Return the results
        res.send(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));