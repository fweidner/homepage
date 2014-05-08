var language = de;

/*Register functions*/
$(function(){

	$('#about_button').click(show_about);
	$('#social_button').click(show_social);
	$('#impressum_button').click(show_impressum);
	$('#work_button').click(show_work);

	show_about();



});


function resetColor(){
	$('#about_button').css('background-color', 'rgba(255, 255, 255, 0.1)');
	$('#social_button').css('background-color', 'rgba(255, 255, 255, 0.1)');
	$('#impressum_button').css('background-color', 'rgba(255, 255, 255, 0.1)');
	$('#work_button').css('background-color', 'rgba(255, 255, 255, 0.1)');
}

/*Nav functions*/
function show_about(event) {
	
	window.location.href = "about.html";

	resetColor();
	$('#about_button').css('background-color', 'rgba(255, 255, 255, 0.5)');

	return false;
}

function show_social(event) {

	window.location.href = "social.html";

	resetColor();
	$('#social_button').css('background-color', 'rgba(255, 255, 255, 0.5)');

	return false;
}

function show_impressum(event) {

	window.location.href = "impressum.html";

	resetColor();
	$('#social_button').css('background-color', 'rgba(255, 255, 255, 0.5)');

	return false;
}

function show_work(event) {

	window.location.href = "work.html";

	resetColor();
	$('#work_button').css('background-color', 'rgba(255, 255, 255, 0.5)');

	return false;
}