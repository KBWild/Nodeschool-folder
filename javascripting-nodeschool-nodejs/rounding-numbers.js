// -------------------
// # ROUNDING NUMBERS

// We can do basic math using familiar operators like +, -, *, /, and %.

// For more complex math, we can use the Math object.

// In this challenge we'll use the Math object to round numbers.

// ## The challenge:

// Create a file named rounding-numbers.js.

// In that file define a variable named roundUp that references the float 1.5.

// We will use the Math.round() method to round the number up.

// An example of using Math.round():

// Math.round(0.5);

// Define a second variable named rounded that references the output of the Math.ro
// und() method, passing in the roundUp variable as the argument.

// Use console.log() to print that number to the terminal.

// Check to see if your program is correct by running this command:

// javascripting verify rounding-numbers.js

// -------------------

 // » To print these instructions again, run: javascripting print
 // » To execute your program in a test environment, run: javascripting run program
// .js
 // » To verify your program, run: javascripting verify program.js
 // » For help run: javascripting help


// C:\Users\Phuong\javascripting-nodeschool-nodejs>
var roundUP = 1.5;

var roundednumber = Math.round(roundUP);

console.log(roundednumber);