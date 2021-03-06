
 // LEARN YOU THE NODE.JS FOR MUCH WIN!
// -------------------------------------
 // BABY STEPS
 // Exercise 2 of 13

// Write a program that accepts one or more numbers as command-line arguments and p
// rints the sum of those numbers to the console (stdout).

// -------------------------------------------------------------------------------

// ## HINTS

// You can access command-line arguments via the global process object. The process
 // object has an argv property which is an array containing the complete command-l
// ine. i.e. process.argv.

// To get started, write a program that simply contains:

    // console.log(process.argv)

// Run it with node program.js and some numbers as arguments. e.g:

    // $ node program.js 1 2 3

// In which case the output would be an array looking something like:

    // [ 'node', '/path/to/your/program.js', '1', '2', '3' ]

// You'll need to think about how to loop through the number arguments so  you can
// output just their sum. The first element of the process.argv array is always 'no
// de', and the second element is always the path to your program.js file, so you n
// eed to start at the 3rd element (index 2), adding each item to the total until y
// ou reach the end of the array.

// Also be aware that all elements of process.argv are strings and you may need to
// coerce them into numbers. You can do this by prefixing the property with + or pa
// ssing it to Number(). e.g. +process.argv[2] or Number(process.argv[2]).

// learnyounode will be supplying arguments to your program when you run learnyouno
// de verify program.js so you don't need to supply them yourself. To test your pro
// gram without verifying it, you can invoke it with learnyounode run program.js. W
// hen you use run, you are invoking the test environment that learnyounode sets up
 // for each exercise.

// -------------------------------------------------------------------------------

 // � To print these instructions again, run: learnyounode print
 // � To execute your program in a test environment, run: learnyounode run program.
// js
 // � To verify your program, run: learnyounode verify program.js
 // � For help run: learnyounode help



// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>type NUL>baby
// steps.js

// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>babysteps.js

// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>

// console.log(process.argv); Check to see what process.argv outputs.

var sum=0; //Must set variable to a value. "instantiation"

for(var i=2; i<(process.argv).length;i++) //note here function ".length"
//used to find the size of the array
{
	sum += Number(process.argv[i]);
}
console.log(sum);