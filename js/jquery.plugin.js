/**
 *	jQuery plugin boilerplate.
 *	@version 1.0
 */

(function( $ ){

	var defaults = { };
	var data-attr = 'myplugin-data';

	var methods = {

		init : function(options) {

			return this.each(function(){
				var $this = $(this),
					data = $this.data(data-attr);

	        	data = $.extend({}, defaults, data, options);
	        	$this.data(data-attr, data);
	     	});
		},
		mymethod : function(){
			// get the data
			var $this = $(this),
				data = $this.data(data-attr);

			// doStuff();

			// save the data
			$this.data(data-attr, data);
		}
	};

	$.fn.myplugin = function( method ) {
	    // Method calling logic
	    if (!method) method = 'init';

	    if ( methods[method] ) {
	    	return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	    	return methods.init.apply( this, arguments );
	    } else {
	    	$.error( 'Method ' +  method + ' does not exist on jQuery.myplugin' );
	    }

	};
})( jQuery );
