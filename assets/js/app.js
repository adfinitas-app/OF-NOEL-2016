$(document).ready(function() {
	adaptArrowDown();
});

$(window).resize(function() {
	adaptArrowDown();
});

function	adaptArrowDown() {
	var x = $('.container-box-actions').width();

	$('#arrow').css({'left': (x / 2) - 24});
}





