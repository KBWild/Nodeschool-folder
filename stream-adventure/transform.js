

    // STREAM ADVENTURE
    // ----------------
    // BEEP BOOP                                             [COMPLETED]
    // MEET PIPE                                             [COMPLETED]
    // INPUT OUTPUT                                          [COMPLETED]
    // TRANSFORM
    // LINES
    // CONCAT
    // HTTP SERVER
    // HTTP CLIENT
    // WEBSOCKETS
    // HTML STREAM
    // DUPLEXER
    // DUPLEXER REDUX
    // COMBINER
    // CRYPT
    // SECRETZ
    // -----------------
    // HELP
    // EXIT


// Convert data from `process.stdin` to upper-case data on `process.stdout`
// using the `through2` module.

// To get the `through2` module you'll need to do:

    // npm install through2

// A transform stream takes input data and applies an operation to the data to
// produce the output data.

// Create a through stream with a `write` and `end` function:

    // var through = require('through2');
    // var stream = through(write, end);

// The `write` function is called for every buffer of available input:

    // function write (buffer, encoding, next) {
    //    ...
    // }

// and the `end` function is called when there is no more data:

    // function end () {
    //    ...
    // }

// Inside the write function, call `this.push()` to produce output data and call
// `next()` when you're ready to receive the next chunk:

    // function write (buffer, encoding, next) {
        // this.push('I got some data: ' + buffer + '\n');
        // next();
    // }

// and call `done()` to finish the output:

    // function end (done) {
        // done();
    // }

// `write` and `end` are both optional.

// If `write` is not specified, the default implementation passes the input data to
// the output unmodified.

// If `end` is not specified, the default implementation calls `this.push(null)`
// to close the output side when the input side ends.

// Make sure to pipe `process.stdin` into your transform stream
// and pipe your transform stream into `process.stdout`, like this:

    // process.stdin.pipe(tr).pipe(process.stdout);

// To convert a buffer to a string, call `buffer.toString()`.

var through = require('through2');
var stream = through(write,end);

var args_stdin = process.stdin;
var args_stdout = process.stdout;

function write (buffer,encoding,next) {
	var converted_buffer = (buffer.toString()).toUpperCase(); //operation converts
	//buffer to string then changes string to uppercase.
	this.push(converted_buffer);//produces output data 
	//as '.push'
	next();//goes onto next buffer to perform a 'transformation'.
}

function end(done){
	done();
}

args_stdin.pipe(stream).pipe(args_stdout);


// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\stream-adventure>stre
// am-adventure verify transform.js

// TAP version 13
// # (anonymous)
// ok 1 stream-adventure verify YOURFILE.js
// not ok 2 should be equal
  // ---
    // operator: equal
    // expected:
      // 'ZYGON\nFAMILY OF BLOOD\nWAR LORD\nHOOLOOVOO\nCHEETAH PERSON\nRED LEECH\nCEN
// TURIPEDE\nSEAWEED CREATURE\nJUDOON\nTRITOVORE\n'
    // actual:
      // 'I got some data: ZYGON\nFAMILY OF BLOOD\nWAR LORD\nHOOLOOVOO\nCHEETAH PERSO
// N\nRED LEECH\nCENTURIPEDE\nSEAWEED CREATURE\nJUDOON\nTRITOVORE\n\n'
  // ...
// ok 3 successful exit code

// 1..3
// # tests 3
// # pass  2
// # fail  1

// #########################################
// ###   YOUR SOLUTION IS NOT CORRECT!   ###
// #########################################




// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\stream-adventure>stre
// am-adventure verify transform.js

// TAP version 13
// # (anonymous)
// ok 1 stream-adventure verify YOURFILE.js
// not ok 2 should be equal
  // ---
    // operator: equal
    // expected:
      // 'KASTRIAN\nMALUS\nVIGIL\nOOD BRAIN\nDOMINATOR\nTRAKENITE\nDRAHVIN\nVEIL\nVES
// PIFORM\nGREAT INTELLIGENCE\n'
    // actual:
      // 'KASTRIAN\nMALUS\nVIGIL\nOOD BRAIN\nDOMINATOR\nTRAKENITE\nDRAHVIN\nVEIL\nVES
// PIFORM\nGREAT INTELLIGENCE\n\n'
  // ...
// ok 3 successful exit code

// 1..3
// # tests 3
// # pass  2
// # fail  1

// #########################################
// ###   YOUR SOLUTION IS NOT CORRECT!   ###
// #########################################




// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\stream-adventure>stre
// am-adventure verify transform.js

// TAP version 13
// # (anonymous)
// ok 1 stream-adventure verify YOURFILE.js
// ok 2 should be equal
// ok 3 successful exit code

// 1..3
// # tests 3
// # pass  3

// # ok


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@     YOUR SOLUTION IS CORRECT!     @@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// Here is the reference solution:

  // var through = require('through2');
  // var tr = through(function (buf, _, next) {
      // this.push(buf.toString().toUpperCase());
      // next();
  // });
  // process.stdin.pipe(tr).pipe(process.stdout);


// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\stream-adventure>