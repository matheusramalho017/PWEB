var mysql = require('mysql');
module.exports = function(){
return connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'casa54321',
database: 'site_fatec'
});
}