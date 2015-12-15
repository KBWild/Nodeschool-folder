
 // LEARN YOU THE NODE.JS FOR MUCH WIN!
// -------------------------------------
 // MY FIRST I/O!
 // Exercise 3 of 13

// Write a program that uses a single synchronous filesystem operation to read a fi
// le and print the number of newlines (\n) it contains to the console (stdout), si
// milar to running cat file | wc -l.

// The full path to the file to read will be provided as the first command-line arg
// ument. You do not need to make your own test file.

// -------------------------------------------------------------------------------

// ## HINTS

// To perform a filesystem operation you are going to need the fs module from the N
// ode core library. To load this kind of module, or any other "global" module, use
 // the following incantation:

    // var fs = require('fs')

// Now you have the full fs module available in a variable named fs.

// All synchronous (or blocking) filesystem methods in the fs module end with 'Sync
// '. To read a file, you'll need to use fs.readFileSync('/path/to/file'). This met
// hod will return a Buffer object containing the complete contents of the file.

// Documentation on the fs module can be found by pointing your browser here:
  // file://C:\Users\Phuong\AppData\Roaming\npm\node_modules\learnyounode\node_apid
// oc\fs.html

// Buffer objects are Node's way of efficiently representing arbitrary arrays of da
// ta, whether it be ascii, binary or some other format. Buffer objects can be conv
// erted to strings by simply calling the toString() method on them. e.g. var str =
 // buf.toString().

// Documentation on Buffers can be found by pointing your browser here:
  // file://C:\Users\Phuong\AppData\Roaming\npm\node_modules\learnyounode\node_apid
// oc\buffer.html

// If you're looking for an easy way to count the number of newlines in a string, r
// ecall that a JavaScript String can be .split() into an array of substrings and t
// hat '\n' can be used as a delimiter. Note that the test file does not have a new
// line character ('\n') at the end of the last line, so using this method you'll e
// nd up with an array that has one more element than the number of newlines.

// -------------------------------------------------------------------------------

 // » To print these instructions again, run: learnyounode print
 // » To execute your program in a test environment, run: learnyounode run program.
// js
 // » To verify your program, run: learnyounode verify program.js
 // » For help run: learnyounode help



// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>type NUL>myfi
// rstio.js

// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>myfirstio.js

// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>


var fs = require ('fs');
//File being read and converted into a 'Buffer' object
var file = fs.readFileSync(process.argv[2]);
//'process.argv' Refer to Line 14-16 babysteps.js
//Gets the first argument in the command line and uses it.
//FORMAT for Command Line statement: 
//learnyounode verify myfirstio.js 
//					 '/path/to/file' 

var num_newlines = file.toString().split('\n').length - 1;
//file with data translated into an array, which includes all
//types of text including delimiters. Then created into a 
//single string. Then 'split' to create an array that holds
//values and are separated by commas where '\n' has occurred 
//in the single string.
console.log(num_newlines);














/* //load fs module from Node core library
var fs = require('fs');
//get path to file
var path = process.argv[2];
//read file, returning Buffer object containing file contents;
Then convert to string & split into array of lines //
var data = fs.readFileSync(path).toString().split('\n');
console.log(data.length-1); */