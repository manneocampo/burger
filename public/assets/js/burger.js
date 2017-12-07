console.log('linked');
$('#submit').click(function(e) {
	e.preventDefault();
	console.log($('#bname'));
	var burgerName = $('#bname').val();
	console.log(burgerName);

	return false;
});

$('#devour').click(function(e){
	e.preventDefault();
	var devour = $('#devour').val();
	console.log($('#devour'));
	console.log("btn click");
	if (devour){
		return true; //need to be able to update the database with the form input burgerNames values for devour to true
		//look into method-override to be able to use .put for form udpating and read more about .get and .post for forms
	}
});