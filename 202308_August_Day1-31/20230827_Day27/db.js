require('dotenv').config();
// console.log(process.env);
//import mariadb
const mariadb = require('mariadb');
const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_user_pwd = process.env.DB_PASSWD;


//  Create a new connection pool
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: "demo_user",
    password: process.env.DB_PASSWD,
    database: "demo"
});

//  Expose the ability to create new connections
module.exports={
    getConnection: function(){
      return new Promise(function(resolve,reject){
        pool.getConnection().then(function(connection){
          resolve(connection);
        }).catch(function(error){
          reject(error);
        });
      });
    }
  }