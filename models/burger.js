// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call 
//the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var orm = require ('../config/orm.js');

var burger = {
	all: function(cb){//cb means callback
		orm.all('burgers', function(res){
			cb(res);
		});
	},
 	create: function(cols, vals, cb) {
 		orm.create('burgers', cols, vals, function(res){
 			cb(res);
 		});
 	},
 	update: function(id, cb) {
 		var condition ='id=' + id;
 		orm.update('burgers', {
 			devoured: true
 		}, condition, cb);
 	}
 	// },
 	// delete: function(condition, cb){
 	// 	orm.delete('burgers', condition, function(res){
 	// 		cb(res);
 	// 	});
 	// }
 };

//export database fns for the controller file
 module.exports = burger;



