console.log('linked');
$('#submit').click(function(e) {
	e.preventDefault();
	console.log($('#bname'));
	var burgerName = $('#bname').val();
	console.log(burgerName);

	return false;
});
