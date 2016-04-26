
 // FUNCTIONAL JAVASCRIPT IS GOOD
// -------------------------------
 // Basic: Map
 // Exercise 3 of 18


// # Task

// Convert the following code from a for-loop to Array#map:

    // function doubleAll(numbers) {
      // var result = []
      // for (var i = 0; i < numbers.length; i++) {
        // result.push(numbers[i] * 2)
      // }
      // return result
    // }

    // module.exports = doubleAll

// ## Arguments

  // * numbers: An Array of 0 to 20 Integers between 0 and 9

// ## Conditions

  // * Your solution should use Array.prototype.map()
  // * Do not use any for/while loops or Array.prototype.forEach.
  // * Do not create any unnecessary functions e.g. helpers.

// ## Resources

  // * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objec
// ts/Array/map

// ## Boilerplate

    // function doubleAll(numbers) {
    //  SOLUTION GOES HERE
    // }

    // module.exports = doubleAll


 // » To print these instructions again, run: functional-javascript print
 // » To execute your program in a test environment, run: functional-javascript run p
// rogram.js
 // » To verify your program, run: functional-javascript verify program.js
 // » For help run: functional-javascript help



// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >

// function doubleAll(numbers) {
      // var result = []
      // for (var i = 0; i < numbers.length; i++) {
        // result.push(numbers[i] * 2)
      // }
      // return result
    // }


function doubleAll(numbers){
	var doubled = numbers.map(function(num){
			return num*2;
	});
	return doubled;
}

module.exports = doubleAll;




 // FUNCTIONAL JAVASCRIPT IS GOOD
// -------------------------------
 // Basic: Map
 // Exercise 3 of 18


// # Task

// Convert the following code from a for-loop to Array#map:

    // function doubleAll(numbers) {
      // var result = []
      // for (var i = 0; i < numbers.length; i++) {
        // result.push(numbers[i] * 2)
      // }
      // return result
    // }

    // module.exports = doubleAll

// ## Arguments

  // * numbers: An Array of 0 to 20 Integers between 0 and 9

// ## Conditions

  // * Your solution should use Array.prototype.map()
  // * Do not use any for/while loops or Array.prototype.forEach.
  // * Do not create any unnecessary functions e.g. helpers.

// ## Resources

  // * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objec
// ts/Array/map

// ## Boilerplate

    // function doubleAll(numbers) {
    //  SOLUTION GOES HERE
    // }

    // module.exports = doubleAll


 // » To print these instructions again, run: functional-javascript print
 // » To execute your program in a test environment, run: functional-javascript run p
// rogram.js
 // » To verify your program, run: functional-javascript verify program.js
 // » For help run: functional-javascript help



// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >type NUL>"map.js"

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >map.js

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >functional-javascript verify map.js
// C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascript-workshop\ex
// ercises\basic_map\exercise.js:13
  // return regularMap.apply(this, arguments)
                    // ^
// TypeError: NaN is not a function
    // at Array.map (native)
    // at Array.map (C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-java
// script-workshop\exercises\basic_map\exercise.js:13:21)
    // at doubleAll (C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\fun
// ctional-javascript\map.js:68:23)
    // at obtainResult (C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-j
// avascript-workshop\exercises\runner.js:102:13)
    // at Exercise.<anonymous> (C:\Users\Phuong\AppData\Roaming\npm\node_modules\func
// tional-javascript-workshop\exercises\runner.js:66:27)
    // at next (C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascrip
// t-workshop\node_modules\workshopper-exercise\exercise.js:182:19)
    // at C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascript-work
// shop\node_modules\workshopper-exercise\exercise.js:189:7
    // at Exercise.<anonymous> (C:\Users\Phuong\AppData\Roaming\npm\node_modules\func
// tional-javascript-workshop\exercises\runner.js:34:5)
    // at next (C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascrip
// t-workshop\node_modules\workshopper-exercise\exercise.js:182:19)
    // at C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascript-work
// shop\node_modules\workshopper-exercise\exercise.js:189:7

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >functional-javascript verify map.js
// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// \map.js:70
        // return result;
               // ^
// ReferenceError: result is not defined
    // at doubleAll (C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\fun
// ctional-javascript\map.js:70:9)
    // at obtainResult (C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-j
// avascript-workshop\exercises\runner.js:102:13)
    // at Exercise.<anonymous> (C:\Users\Phuong\AppData\Roaming\npm\node_modules\func
// tional-javascript-workshop\exercises\runner.js:66:27)
    // at next (C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascrip
// t-workshop\node_modules\workshopper-exercise\exercise.js:182:19)
    // at C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascript-work
// shop\node_modules\workshopper-exercise\exercise.js:189:7
    // at Exercise.<anonymous> (C:\Users\Phuong\AppData\Roaming\npm\node_modules\func
// tional-javascript-workshop\exercises\runner.js:34:5)
    // at next (C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascrip
// t-workshop\node_modules\workshopper-exercise\exercise.js:182:19)
    // at C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascript-work
// shop\node_modules\workshopper-exercise\exercise.js:189:7
    // at C:\Users\Phuong\AppData\Roaming\npm\node_modules\functional-javascript-work
// shop\node_modules\workshopper-exercise\execute.js:110:7
    // at process._tickCallback (node.js:355:11)

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >functional-javascript verify map.js
// input:      [ 0, 0, 7, 7, 7, 8, 3, 0, 8, 9, 0, 4, 9, 7, 7, 2 ]
// submission: [ 0, 0, 14, 14, 14, 16, 6, 0, 16, 18, 0, 8, 18, 14, 14, 4 ]
// solution:   [ 0, 0, 14, 14, 14, 16, 6, 0, 16, 18, 0, 8, 18, 14, 14, 4 ]
// V Yay!  You used Array#map

// # PASS

// Your solution to Basic: Map passed!

// Here's the official solution in case you want to compare notes:

// --------------------------------------------------------------------------------
    // module.exports = function doubleAll(numbers) {
      // return numbers.map(function double(num) {
        // return num * 2
      // })
    // }

// --------------------------------------------------------------------------------

// You have 15 challenges left.
// Type 'functional-javascript' to show the menu.


// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\functional-javascript
// >