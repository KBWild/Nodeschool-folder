

    // STREAM ADVENTURE
    // ----------------
    // BEEP BOOP                                             [COMPLETED]
    // MEET PIPE                                             [COMPLETED]
    // INPUT OUTPUT                                          [COMPLETED]
    // TRANSFORM                                             [COMPLETED]
    // LINES                                                 [COMPLETED]
    // CONCAT                                                [COMPLETED]
    // HTTP SERVER                                           [COMPLETED]
    // HTTP CLIENT                                           [COMPLETED]
    // WEBSOCKETS                                            [COMPLETED]
    // HTML STREAM
    // DUPLEXER
    // DUPLEXER REDUX
    // COMBINER
    // CRYPT
    // SECRETZ
    // -----------------
    // HELP
    // EXIT


// Your program will get some html written to stdin. Convert all the inner html to
// upper-case for elements with a class name of "loud",
// and pipe all the html to stdout.

// You can use `trumpet` and `through2` to solve this adventure.

// With `trumpet` you can create a transform stream from a css selector:

    // var trumpet = require('trumpet');
    // var fs = require('fs');
    // var tr = trumpet();
    // fs.createReadStream('input.html').pipe(tr);

    // var stream = tr.select('.beep').createStream();

// Now `stream` outputs all the inner html content at `'.beep'` and the data you
// write to `stream` will appear as the new inner html content.

// Make sure to `npm install trumpet through2` in the directory where your solution
// file lives.



// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder>npm install trumpet t
// hrough2
// through2@2.0.1 node_modules\through2
// ├── xtend@4.0.1
// └── readable-stream@2.0.6 (process-nextick-args@1.0.6, inherits@2.0.1, util-deprec
// ate@1.0.2, string_decoder@0.10.31, isarray@1.0.0, core-util-is@1.0.2)

// trumpet@1.7.2 node_modules\trumpet
// ├── inherits@2.0.1
// ├── duplexer2@0.0.2
// ├── through2@1.1.1 (xtend@4.0.1)
// ├── readable-stream@1.1.13 (isarray@0.0.1, string_decoder@0.10.31, core-util-is@1.
// 0.2)
// ├── html-tokenize@1.2.5 (minimist@0.0.10, readable-stream@1.0.33, through2@0.4.2)
// └── html-select@2.3.24 (minimist@0.0.10, cssauron@1.2.0, split@0.3.3, stream-splic
// er@1.3.2)

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder>

//9:30 - 10:30
//Should approach problems after 5 minutes of deliberating


var trumpet = require('trumpet');
var fs = require('fs'); //<---- file stream, READS streams
var tr = new trumpet();
//fs.createReadStream('input.html').pipe(tr); //<----
//filestream module create a ReadStream which reads the file
//'input.html' then so to speak "transfers it" to 'tr' which is used to filter
//	all inner html to upper-case for elements with class name "loud"
// Trumpet is a form of transform2 module, but, uses a CSS selector, which
//identifies and selects <html tags> to alter them. 

 //<---- HTML from stdin written to trumpet

 

//var stream = tr.select('.loud').createStream();
var stream = tr.createStream('.loud');
//https://www.npmjs.com/package/trumpet
//var elem = tr.select(selector)
// Return a result object elem for the first element matching selector.

//https://www.npmjs.com/package/trumpet
//elem.createStream(opts)
// Create a new readable writable stream that outputs the content under elem and replaces the content with the data written to it.
// To use the outer html content instead of the inner, set opts.outer to true.

stream.end('end',function(chunk){
	body = chunk.toString().toUpperCase());
});

//<---- .end is a part of Stream module of Node.js v.10.35
//<---- Usage: Ends the stream after writing to the stream.

(process.stdin).pipe(stream).pipe(process.stdout);




