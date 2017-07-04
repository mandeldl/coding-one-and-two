
// First we use jQuery ($) to SELECT an element (using the CSS selector inside a string)
var $jquerySelectedElement = $("#test-id");

// Now this special variable has special properties and methods:
$jquerySelectedElement.css('color','red');

// Note we could have just as easily done:
$("#test-id").css('color', 'red');

/*
	To do the same thing WITHOUT jQuery:
	document.querySelector("#test-id").style.color = 'red';
*/

/*
	jQuery makes handling EVENTS easier:
*/

$("#alert-button").click(function() {
	alert("You clicked the button!");
});

/*
	jQuery makes gives us animation powers:
*/

var $buttonToTriggerAnimation = $('#animation-button');

$buttonToTriggerAnimation.click(function(){
	// Store a reference to the variable we want to change (optional)
	var $theParagraphWeWantToChange = $('.another-test');

	// Use the 'animate' method on that variable:
	$theParagraphWeWantToChange.animate({
		fontSize: '30px',
	}, 500,
		function() {
			if ($buttonToTriggerAnimation.text() == 'Already clicked') {
				$buttonToTriggerAnimation.text('Click me again!');
			} else {
				$buttonToTriggerAnimation.text('Already clicked');
			}
			console.log('animation over');
	});
});

/* Hide and show the paragraph: */
// Store the paragraph as a variable because we keep using it:
var $hideAndShowP = $(".hide-and-show");

$("#hider").click(function(){
	if ($hideAndShowP.css('display') == 'none') {
		$hideAndShowP.show();
	} else {
		$hideAndShowP.hide();
	}
});


/* That same function could be rewritten as:
	$("#hider").click(function(){
		$hideAndShowP.toggle();
	});
*/