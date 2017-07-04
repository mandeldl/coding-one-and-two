// Single line comments can start with 2 /'s
/*
	Block comments start and end with these
*/

// JavaScript lines of code should end with a semi-colon: ; (like CSS rules)
// alert("Alert is a special function that creates a pop up.  You can put a string inside!");

console.log("console.log is a better way to test things, just keep your console open in the browser.");

// var is a special keyword - it says that the word after is going to act as a container
// for stuff on the other side of the "=" sign
// There are some basic rules about naming variables: can't start with a number

var firstVariable = "A string";
console.log(firstVariable);

// You have to DECLARE a variable before you use it:
console.log(secondVariable);  // You get 'undefined' - the variable exists, but the program doesn't know what's there.
var secondVariable = "Wrong order!";

// Variables can store different types of things: strings, numbers, booleans, arrays, objects:

var numberOne = 1;
var numberTwo = 2;
console.log(numberOne + numberTwo);

/*
	Think of strings like a string of words or letters.
	Strings start and end with quotation marks: either ' or "
	Just be consistent with which you use - you can't end with the other kind
*/

var stringOne = "Double quotes work";
var stringTwo = 'Single too';
// var badString = 'This will cause an error and nothing after will run!";
console.log(stringOne);
console.log(stringTwo);

/*
	Booleans can only be two values: true or false
	They're useful for determing IF something should happen or not
*/

var testingBoolean = true;

// An IF-block is a special type of structure to control what happens:
if (testingBoolean) {
	// Body of the if block
	console.log("Because the stuff in those parentheses was true, you see this.");
}

var anotherBoolean = false;

if (anotherBoolean) {
	console.log("You won't see this.  It's like it never happened");
}

/*
	Arrays are lists, useful for when you need to store more than one thing together, and in a specific order.
	Arrays use [brackets, and each item in the array is separated with a comma]
	Arrays can have all other types inside of them, including more arrays!
*/

var firstArray = ['item 1, a string', 2, true, ['inner array item 1', 100, false]];

// You can access the items in the array by using the variable name, 
// with brackets right after indicating which INDEX of the array, which starts at 0:
console.log(firstArray[0]);  // This will console the string 'item 1, a string'

/*
	Objects are kind of like variables within variables.
	They're like arrays, except instead of using number indexes you use named PROPERTIES
	Instead of [brackets] you use {curly braces}
*/

var david = {
	firstName: 'David',
	lastName: "Mandel",
	age: 33,
	petNames: ['Levon', 'Buckley']
};

// You can access the properties of an object with either a period "."
console.log("David's first name is: ", david.firstName);
console.log("David's first pet was named: ", david.petNames[0]);

// You can also access properties with brackets  (like an array!), but the property name needs to be in quotes
console.log("David's last name is: ", david["lastName"]);