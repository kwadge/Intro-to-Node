var mysql = require('mysql2');
const fs = require('fs');

/* Create A Connection
//var con = mysql.createConnection({
//  host: "localhost",
//  user: "root",
//  password: "password",
//}); */

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

  /* Create Database
  var sql = 'CREATE DATABASE nodedb';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Database Created!');
  });*/

  /* Create Table
  var sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Table has been created...');
  });*/

  /* Alter Table
  var sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Our Table has been altered...');
  });*/

  /* Insert Into Table
  var sql = 'INSERT INTO customers (name, email) VALUES ("Mary Smith", "msmith@gmail.com")';
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Our Table has been altered...');
  });*/

  // Insert Many Into Table
  var sql = 'INSERT INTO customers (name, email) VALUES ?';
  var values = [
    ['Tim', 'tim@tim.com'],
    ['Tina', 'tina@tina.com'],
    ['Laura', 'laura@laura.com']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log('Records Inserted: ' + result.affectedRows);
  });

});