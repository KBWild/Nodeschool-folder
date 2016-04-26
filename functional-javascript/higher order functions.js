
 // FUNCTIONAL JAVASCRIPT IS GOOD
// -------------------------------
 // Higher Order Functions
 // Exercise 2 of 18

// A higher-order function is a function that does at least one of the following:

  // * Take one or more functions as an input
  // * Output a function

// All other functions are first order functions. [1]

// Unlike many other languages with imperative features, JavaScript allows you to uti
// lize higher-order functions because it has "first-class functions". This means fun
// ctions can be treated just like any other value in JavaScript: just like Strings o
// r Numbers, Function values can be stored as variables, properties on objects or pa
// ssed to other functions as arguments. Function values are actually Objects (inheri
// ting from Function.prototype) so you can even add properties and store values on t
// hem, just like any regular Object.

// The key difference between Functions and other value types in JavaScript is the ca
// ll syntax: if a reference to a function is followed by parens and some optional co
// mma-separated values: someFunctionValue(arg1, arg2, etc), then the function body w
// ill be executed with the supplied arguments (if any).

// In this exercise we're going demonstrate that functions can be passed as values by
 // passing you a function as an argument.

// # Task

// Implement a function that takes a function as its first argument, a number num as
// its second argument, then executes the passed in function num times.

// Use the boilerplate code given to you below to get started. Most/all future exerci
// ses will provide boilerplate.

// ## Arguments

  // * operation: A Function, takes no arguments, returns no useful value.
  // * num: the number of times to call `operation`

// ## Resources

  // * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_f
// unction_scope
  // * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objec
// ts/Function/prototype

// ## Hints

  // * Don't overthink it, the code should be rather simple.
  // * It's ok to use a loop in your implementation, bonus pointsif you use recursion
 // instead.
  // * You may notice some output. That is coming from the function we passed you.
  // * You do not need to console.log anything.

// ## Boilerplate

    // function repeat(operation, num) {
    //  SOLUTION GOES HERE
    // }

    //Do not remove the line below
    // module.exports = repeat


 // » To print these instructions again, run: functional-javascript print
 // » To execute your program in a test environment, run: functional-javascript run p
// rogram.js
 // » To verify your program, run: functional-javascript verify program.js
 // » For help run: functional-javascript help



// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >type NUL>higher order functions.js
// The system cannot find the file specified.
// Error occurred while processing: order.
// The system cannot find the file specified.
// Error occurred while processing: functions.js.

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >type NUL>"higher order functions.js"

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >"higher order functions.js"

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >

function repeat(operation,num){
	for(i=0;i++;i<num+1){
		operation;	
	}
}

repeat;
module.exports = repeat;
///////////////////////////////////////////
// VERIFICATION PROCESS///////////////////
///////////////////////////////////////////

 // FUNCTIONAL JAVASCRIPT IS GOOD
// -------------------------------
 // Higher Order Functions
 // Exercise 2 of 18

// A higher-order function is a function that does at least one of the following:

  // * Take one or more functions as an input
  // * Output a function

// All other functions are first order functions. [1]

// Unlike many other languages with imperative features, JavaScript allows you to uti
// lize higher-order functions because it has "first-class functions". This means fun
// ctions can be treated just like any other value in JavaScript: just like Strings o
// r Numbers, Function values can be stored as variables, properties on objects or pa
// ssed to other functions as arguments. Function values are actually Objects (inheri
// ting from Function.prototype) so you can even add properties and store values on t
// hem, just like any regular Object.

// The key difference between Functions and other value types in JavaScript is the ca
// ll syntax: if a reference to a function is followed by parens and some optional co
// mma-separated values: someFunctionValue(arg1, arg2, etc), then the function body w
// ill be executed with the supplied arguments (if any).

// In this exercise we're going demonstrate that functions can be passed as values by
 // passing you a function as an argument.

// # Task

// Implement a function that takes a function as its first argument, a number num as
// its second argument, then executes the passed in function num times.

// Use the boilerplate code given to you below to get started. Most/all future exerci
// ses will provide boilerplate.

// ## Arguments

  // * operation: A Function, takes no arguments, returns no useful value.
  // * num: the number of times to call `operation`

// ## Resources

  // * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_f
// unction_scope
  // * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objec
// ts/Function/prototype

// ## Hints

  // * Don't overthink it, the code should be rather simple.
  // * It's ok to use a loop in your implementation, bonus pointsif you use recursion
 // instead.
  // * You may notice some output. That is coming from the function we passed you.
  // * You do not need to console.log anything.

// ## Boilerplate

    // function repeat(operation, num) {
    //  SOLUTION GOES HERE
    // }

    //Do not remove the line below
    // module.exports = repeat


 // » To print these instructions again, run: functional-javascript print
 // » To execute your program in a test environment, run: functional-javascript run p
// rogram.js
 // » To verify your program, run: functional-javascript verify program.js
 // » For help run: functional-javascript help



// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >type NUL>higher order functions.js
// The system cannot find the file specified.
// Error occurred while processing: order.
// The system cannot find the file specified.
// Error occurred while processing: functions.js.

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >type NUL>"higher order functions.js"

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >"higher order functions.js"

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >functional-javascript run "higher order functions.js"
// ? C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascri
// pt\higher order functions.js:61
      // SOLUTION GOES HERE
               // ^^^^
// SyntaxError: Unexpected identifier
    // at exports.runInThisContext (vm.js:73:16)
    // at Module._compile (module.js:443:25)
    // at Object.Module._extensions..js (module.js:478:10)
    // at Module.load (module.js:355:32)
    // at Function.Module._load (module.js:310:12)
    // at Module.require (module.js:365:17)
    // at require (module.js:384:17)
    // at Exercise.<anonymous> (C:\Users\Phuong\AppData\Roaming\npm\node_modules\func
// tional-javascript-workshop\exercises\runner.js:22:23)
    // at next (C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascrip
// t-workshop\node_modules\workshopper-exercise\exercise.js:182:19)
    // at C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascript-work
// shop\node_modules\workshopper-exercise\exercise.js:189:7
// Could not run: C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functi
// onal-javascript\higher order functions.js:61
      // SOLUTION GOES HERE
               // ^^^^
// Unexpected identifier

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >functional-javascript run "higher order functions.js"
// ------------------------

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >functional-javascript run "higher order functions.js"
// ------------------------

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >functional-javascript run "higher order functions.js"
// ------------------------

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >functional-javascript verify "higher order functions.js"
// ------------------------
// ------------------------
// Called function 1 times.
// Called function 2 times.
// Called function 3 times.
// Called function 4 times.
// Called function 5 times.

// # PASS

// Your solution to Higher Order Functions passed!

// Here's the official solution in case you want to compare notes:

// --------------------------------------------------------------------------------
    // function repeat(operation, num) {
      // if (num <= 0) return
      // operation()
      // return repeat(operation, --num)
    // }

    // module.exports = repeat

// --------------------------------------------------------------------------------

// You have 16 challenges left.
// Type 'functional-javascript' to show the menu.


// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >