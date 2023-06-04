## H2 MySQL
- installed mysql with homebrew
  - brew install mysql
  - brew services start mysql

- nodejs (mysql.js) connection did't work with error: 
  - sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client'
- initially fixed with:
  % mysql -u root // Conect to database
  mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
  mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
- but better fix:
  - switch from mysql to mysql2 in node
    npm un mysql && npm i mysql2
    see https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server