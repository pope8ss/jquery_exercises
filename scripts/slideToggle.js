$(document).ready(function(){  // do not delete 
// ----------------------------------------------------------------------------
// Step 1:
//   Load the HTML in your browser, click all the gray bars, and 
//   notice the differences among them.
// Step 2: 
//   Here in the JS/jQuery, change ALL boxes to slideToggle at the 
//   Test it in your browser.
// Step 3:
//   Can you do exactly the same thing with ONE function instead of FOUR? 
//   Now that all four work the same way, can you control all with a 
//   single function?
// ----------------------------------------------------------------------------


$('.box').hide(); // hides all elements with class '.box' 



$('h2').on('click', function() {
	$(this).next('.box').slideToggle();
});


// ----------------------------------------------------------------------------
}); // do not delete 
