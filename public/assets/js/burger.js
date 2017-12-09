// console.log('linked');
// $('#submit').click(function(e) {
// 	e.preventDefault();
// 	console.log($('#bname'));
// 	var burgerName = $('#bname').val().trim();
// 	console.log(burgerName);

// 	return false;
// });

// $(".devourBurger").on('click', function(event) {
// 		var id = $(this).data('id');
// 		$.ajax('/api/burgers/' + id, {
// 			type: "PUT"
// 		}).then(function() {
// 			console.log("devoured ", id);
// 			location.reload();
// 		});
// 	})
// 	$(".deleteButton").on('click', function(event) {
// 		var id = $(this).data('id');
// 		$.ajax('/api/burgers/' + id, {
// 			type: "DELETE"
// 		}).then(function() {
// 			console.log("deleted ", id);
// 			location.reload();
// 		});
// 	});

// $('#devour').click(function(e){
// 	e.preventDefault();
// 	var devour = $('#devour').val().trim();
// 	console.log($('#devour'));
// 	console.log("btn click");
// 	if (devour){
// 		return true; //need to be able to update the database with the form input burgerNames values for devour to true
// 		//look into method-override to be able to use .put for form udpating and read more about .get and .post for forms
// 	}
// });