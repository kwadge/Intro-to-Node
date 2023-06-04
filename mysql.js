var mysql = require('mysql2');
const fs = require('fs');

// Create A Connection
//var con = mysql.createConnection({
//  host: "localhost",
//  user: "root",
//  password: "password",
//});
console.log(__dirname);
var con = mysql.createConnection({
  host: 'a5471bb9-c213-4eaf-a9c2-6409bd077891.br37s45d0p54n73ffbr0.databases.appdomain.cloud',
  user: 'admin',
  password: '89fc18fa88332a6c0d7b25b76b94b89a2ed590f6c97ab28a4a',
  port: '30099',
  database: 'ibmclouddb',
  ssl: {
    ca: fs.readFileSync(__dirname + '/48b1ff99-7b37-4370-b9e6-229f4b939777'),
  }
});

// Connect To MySQL
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the Database!");
});