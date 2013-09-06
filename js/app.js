$(function() {
	$('#twerk').click(function(e) {
		console.log('twerking');
		e.preventDefault();
		twerk.getLow()
	})
})