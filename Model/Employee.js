var db = require('../db');

var Employee = {
    getemployeeyid: function(id,callback)
    {
        return db.query('SELECT * from employees where id=?',[id],callback);
    },

    getemployees: function(callback)
    {
        return db.query('SELECT * from employees', callback);
    },
    createmployee: function (Matiere, callback) {
        return db.query('Insert into employees(firstname,lastname,email) values(?, ?, ? , ?)',[employees.lastname, employees.lastname,employees.email], callback);
    },
   deletemployee: function (id,callback){
       return db.query('DELETE from employees where id=?',[id], callback);

    }

}

module.exports = Employee;