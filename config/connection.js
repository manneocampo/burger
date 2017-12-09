// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.

var mysql = require('mysql');


//declare config for our db
var connection;

 if(process.env.JAWSDB_URL) {
 	connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
 	connection = mysql.createConnection({
 	host: 'localhost',
	user: 'root',
	password: 'H8passwords1!',
	database: 'burgers_db'
	}); 
};

//connect to database 
connection.connect(function(err){
	if(err){
		console.log("error connecting:" + err.stack);
		return;
	}
	console.log("connected as id" + connection.threadId);
});

module.exports = connection;



