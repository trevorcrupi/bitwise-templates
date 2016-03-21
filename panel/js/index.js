/*
	Main JavaScript Funtionality for Panels

	Author: Trevor Crupi
	Date: 2/29/15

	Wrapped Panel into one JS Class
*/

$('body').scrollspy({ target: '#navbar' });

$('.navbar li a').click(function(event) {
	event.preventDefault();
	$(this).smoothAnchor({
		speed: "1500",
		offset: "75"
	});
});