
(function($) {


	$.fn.select2.amd.require(['select2/compat/matcher'], function() {
		//	jQuery.fn.select2.defaults.set('matcher', jb_test_matcher );
	});
	$.fn.select2.defaults.set('matcher', jb_test_matcher );


	// Based on custom matcher here: https://select2.org/searching#customizing-how-results-are-matched
	function jb_test_matcher(params, data ) {
		
		// If there are no search terms, return all of the data
	    if ($.trim(params.term) === '') {
	      return data;
	    }

	    // Do not display the item if there is no 'text' property
	    if (typeof data.text === 'undefined') {
	      return null;
	    }

	    // `params.term` should be the term that is used for searching
	    // `data.text` is the text that is displayed for the data object
	    // Make sure to compare in the same case! 
	    if ( data.text.toLowerCase().indexOf(params.term.toLowerCase() ) === 0 ) {
	    	return data;
	    }

	    // Return `null` if the term should not be displayed
	    return null;

	}


})(jQuery);
