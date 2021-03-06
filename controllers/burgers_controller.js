// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

//create all routes and set up logic within those routes 

router.get('/', function(req, res){
	burger.all(function(data){
		var hbsObject = {
			burgers:data
		};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/api/burgers', function(req, res){
	console.log('hit route');
	burger.create([
	'burger_name', 'devoured'
	], [
	req.body.name, false
	], function(result){
		//send back the ID of the new burger
		burger.all(function(data){
		var hbsObject = {
			burgers:data
		};
		console.log(hbsObject);
		res.redirect('/');
		});
	});
});

//put route back to index
router.put('/api/burgers/update', function(req, res){

	burger.update(req.body.id, function(result){
		console.log("router.put", result);
		res.redirect('/');
	});
	
});

router.delete('/api/burgers/:id', function(req, res){
	var condition = 'id =' + req.params.id;

	burger.delete(condition, function(result){
		if(result.affectedRows ==0){
			//if no rows were changed, then the ID must not exist, so 404 error
		return res.status(404).end();			
		}else{
			res.status(200).end();
		}
	});
});

//export routes for server.js to use.
module.exports = router;
