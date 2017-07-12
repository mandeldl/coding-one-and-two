// 1st Example: Changing classes

// First declare our variable: in this example,
// this is both the target of the event AND the class change:
var $firstExample = $('#first-example');

// We can write the functions separately:
function whiteOnBlue() {
	$firstExample.removeClass('black-on-white'); //remove first class
	$firstExample.addClass('white-on-blue'); //add second
}

function blackOnWhite() {
	$firstExample.addClass('black-on-white');  //same in reverse:
	$firstExample.removeClass('white-on-blue');
}

// Hover can take 2 functions: 1st is for hover ON, second is for hover OFF:
$firstExample.hover(whiteOnBlue, blackOnWhite);


// 2nd Example: Even simpler with toggleClass()

var $secondExample = $('#second-example');

function toggleBlackAndWhite() {
	// toggleClass checks to see if that class is already on the element:
	// If it is, it removes it, if it isn't, it adds it
	$firstExample.toggleClass('black-on-white white-on-red');
	// Note that we can add/remove/toggle multiple classes: just separate with a space!
}

$secondExample.hover(toggleBlackAndWhite);

// 3rd Example: just .toggle() switches display

var $thirdExample = $('#third-example');
var $hider = $('#hider');

$hider.click(function () {
	$thirdExample.toggle(1000);
});