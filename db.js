

var mysql      = require('mysql');
var db = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'serviceweb'
});
module.exports=db;