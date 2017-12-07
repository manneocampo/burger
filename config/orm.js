// Import (require) connection.js into orm.js
// In the orm.js file, create the methods that will execute the necessary MySQL commands
// in the controllers. These are the methods you will need to use in order to 
//retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.
var connection = require('../config/connection.js');

function printQuestionMarks(num){
	var arr = []; 

	for (var i=0; i <num; i++){
		arr.push('?');
	}
	return arr.toString();
}

function objToSql(ob){
	var arr = [];

	for (var key in ob) {
		var value = ob[key];
		if (Object.hasOwnProperty.call(ob, key)){
			if(typeof value === 'string' && value.indexOf('') >= 0){
				value = '' + value + '';
			}
			arr.push(key + '=' + value);
		}
	}
	return arr.toString();
}

//check methods below
var orm = {
	all:function(tableInput, cb)/*cb means callback*/{
		var queryString = 'SELECT * FROM ' + tableInput + ';'
		console.log("QUERY123: ", queryString);
		connection.query(queryString, function(err, results){
			if(err){
				throw err;
			}
			cb(results);
		});
	},
	create: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table;

		queryString += '(';
		queryString += cols.toString();
		queryString += ')';
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ')';

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	},
	update: function(table, objColVals, condition, cb){
		var queryString = 'UPDATE ' + table;

		queryString += 'SET';
		queryString += objToSql(objColVals);
		queryString += 'WHERE';
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, results){
			if(err){
				throw err;
			}
			cb(results);
		});
	}, 
	delete: function(table, condition, cb){
		var queryString = 'DELETE FROM ' + table;
		queryString += 'WHERE';
		queryString += condition;

		connection.query(queryString, function(err, result){
			if(err){
				throw err;
			}
			cb(results);
		});
	}
};

module.exports = orm;


