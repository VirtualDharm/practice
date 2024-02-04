# * Mid - Senior Level Questions and Answers
# closure:
The inner function has access to the outer's function scope and parameters even after the outer function has returned.
# differences between call, apply, and bind?
call and apply immediately calls a function while bind creates a new function that can be invoked in the future. Arguments with call are passed in one by one, separated with a comma while apply expects an array as its argument.
let nameObj = {name: "Tony"} 
let PrintName = {name: "steve",sayHi: function (age) {console.log(this.name + " age is " + age)}} 
let HiFun = PrintName.sayHi.bind(nameObj, 42)
HiFun()
# event loop:
executing javascript code, collecting and processing events, and executing queued sub-tasks.
# currying function: 
A currying function is the process of taking a function with multiple arguments and turning it into a sequence of functions each with a single argument. Curried functions are a great way to improve code reusability and functional composition.
* function simpleFunction(param1, param2, param3, .....) => function 
curriedFunction(param1)(param2)(param3)(....
function calculateVolume(length) {
	return function (breadth) {
		return function (height) {
			return length * breadth * height;
		}
	}
}
console.log(calculateVolume(4)(5)(6));   
# What is prototype in javascript?
Prototypes are the mechanism by which JavaScript objects inherit from another object.
# Memoization:
optimization technique by storing the result of expensive function calls and returning the cached results when the same inputs occur again.
# higher-order function:
it is a function that accepts another function as an argument or returns a function as a return value or both of them.
ex. Map, filter and reduce
# Event delegation:
it is a pattern of adding a single event listener to a parent element instead of multiple elements.
# to handle asynchronous operation in javascript
# Callback:
a function that is used to notify the calling instance
# Promise:
it is an object representing the eventual completion or failure of an asynchronous operation. A pending promise can either be fulfilled with a value or rejected with a reason.Callbacks are attached to the returned promises that make handling of asynchronous code easier and more readable.
# async/await:
it is a new addition to ES2017 which is syntactic sugar on top of promises and make asynchronous code look synchronous code
# JS : scripting/interpret language
# AJAX
send data to the server and get data without refreshing the page.
# DOM: Document Object Model
# Regex:
Regular expressions can be used to perform all types of text search and text replace operations.
# Syntax: /pattern/modifiers;
// Case-insensitive(i), global search(g) with optional multiline(m) support
// Character ranges using brackets [abc]; [0-9]; 
// Alternatives using | (x|y); 
// Metacharacters for digits, whitespace, word boundaries, and Unicode characters \d; \s; \b; \uxxxx; 
// Quantifiers for one or more, zero or more, and zero or one occurrences n+; n*; n?;
