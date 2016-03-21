/*
	JQUery plugin for easy autoscrolling to divs

	Author: Trevor Crupi
	Date: 2/29/15
*/

(function( $ ) {

	$.fn.smoothAnchor = function( options ) {

		var opts = $.extend( {}, $.fn.smoothAnchor.defaults, options );

		function getPosition(el) {
		    // yay readability
		    for (var lx=0, ly=0;
		         el != null;
		         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
		    return {x: lx,y: ly};
		}

		var anchor = this;
		$.when(
			$(opts.animated).animate({
        	scrollTop: getPosition($(anchor.attr('href'))[0]).y-opts.offset
    		}, opts.speed)
    	)
    	.then(opts.callback());
    	//opts.callback();			
	};
	$.fn.smoothAnchor.defaults = {
		animated: 'html, body',
		speed: "2000",
		offset: "0",
		callback: function() { }
	};

}(jQuery));