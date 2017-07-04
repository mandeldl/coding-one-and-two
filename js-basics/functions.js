
/*  Functions are a series of steps that you DECLARE and then EXECUTE:
	Function declarations start with the word function
	Then the name of the function
	Then a set of parentheses that are either empty or contain ARGUMENTS (a.k.a. PARAMETERS)
	Then a set of curly braces {}
	Inside the braces is the BODY of the function, where you list the steps you want to happen
	A function can optionally RETURN a single value, which also ends the execution of the function
*/

function thisIsAFunction() { // <- no arguments
	//The body of the function:
	return 'The function ran!'; // return stops anything afterward from running
	console.log("You won't see this line, because it happens after the return");
} // end of function declaration, doesn't need semicolon

// Declaring a function is just like writing a recipe, it doesn't do anything on its own.

// To exectute a function, you need to write out the function name with parentheses.
thisIsAFunction();

// But this also doesn't do anything (that we can see).  
// If we want, we can store the value RETURNED from the function in a variable.
var thisVariableStoresTheReturnFromTheFunction = thisIsAFunction();

// Now we can console log this variable:
console.log(thisVariableStoresTheReturnFromTheFunction);

// Notice that console.log inside the function didn't run.

// The power of functions comes from passing in the arguments/parameters to use them together
function usingArguments(argument1, argument2) {
	console.log('First argument: ', argument1);
	console.log('Second argument: ', argument2);
	// You can have variables within the body of the function:
	var toUpperCaseArgument1 = argument1.toUpperCase();
	var toUpperCaseArgument2 = argument2.toUpperCase();
	console.log('First argument toUpperCase: ', toUpperCaseArgument1);
	console.log('Second argument toUpperCase: ', toUpperCaseArgument2);
	
	return toUpperCaseArgument1;
}

usingArguments('Trump', 'Clinton');