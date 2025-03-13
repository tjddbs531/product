//mysql 모듈 소환
const mariadb = require('mysql2');

//DB와 연결 
const connection = mariadb.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'Bookshop',
    dateStrings: true,
});

module.exports = connection;
