var http = require('http');

var fs = require('fs');

var port = process.argv[2];



//var map = require('through2-map');

var server = http.createServer(function(req,res){
	if(req.method === 'POST'){
		req.setEncoding('utf-8');
		var body = '';

		req.on('data',function (chunk){
		res.write((chunk.toString()).toUpperCase());
		});
	}
	else{
		res.end();
	}
	req.on('end',function(){
		res.end();
	});
});
server.listen(port);


/*
var server = http.createServer(function(req,res){
	
	var options = {
	method: 'POST'
	};

	var req = http.request(options, function(res){
		res.setEncoding('utf-8');	
	});
	
	var body = '';
	
	req.on('data',function (chunk){
		body += chunk.toUpperCase();
	});
	
	var inStream = fs.createReadStream(body);
	inStream.pipe(res); 
	//Request read through file system 
	// req.pipe(map(function (chunk) { 
		// return chunk.toString()		Map - 'through2-map'
	// })).pipe(res);
});
server.listen(port);
*/


 // LEARN YOU THE NODE.JS FOR MUCH WIN!
// ─────────────────────────────────────
 // HTTP UPPERCASERER
 // Exercise 12 of 13

// Write an HTTP server that receives only POST requests and converts incoming POST
 // body characters to upper-case and returns it to the client.

// Your server should listen on the port provided by the first argument to your pro
// gram.

// -------------------------------------------------------------------------------

// ## HINTS

// While you're not restricted to using the streaming capabilities of the request a
// nd response objects, it will be much easier if you do.

// There are a number of different packages in npm that you can use to "transform"
// stream data as it's passing through. For this exercise the through2-map package
// offers the simplest API.

// through2-map allows you to create a transform stream using only a single functio
// n that takes a chunk of data and returns a chunk of data. It's designed to work
// much like Array#map() but for streams:

    // var map = require('through2-map')
    // inStream.pipe(map(function (chunk) {
      // return chunk.toString().split('').reverse().join('')
    // })).pipe(outStream)

// In the above example, the incoming data from inStream is converted to a String (
// if it isn't already), the characters are reversed and the result is passed throu
// gh to outStream. So we've made a chunk character reverser! Remember though that
// the chunk size is determined up-stream and you have little control over it for i
// ncoming data.

// To install through2-map type:

    // $ npm install through2-map

// If you don't have an Internet connection, simply make a node_modules directory a
// nd copy the entire directory for the module you want to use from inside the lear
// nyounode installation directory:

  // file://C:\Users\Phuong\AppData\Roaming\npm\node_modules\learnyounode\node_modu
// les\through2-map

// Documentation for through2-map has been installed along with learnyounode on you
// r system and you can read them by pointing your browser here:

  // file://C:\Users\Phuong\AppData\Roaming\npm\node_modules\learnyounode\docs\thro
// ugh2-map.html

// -------------------------------------------------------------------------------

 // » To print these instructions again, run: learnyounode print
 // » To execute your program in a test environment, run: learnyounode run program.
// js
 // » To verify your program, run: learnyounode verify program.js
 // » For help run: learnyounode help



// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>learnyounode
// verify httpuppercaserer.js
// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode\httpuppercase
// rer.js:17
                // res.write(chunk.toString()).toUpperCase();
                                            // ^
// TypeError: undefined is not a function
    // at IncomingMessage.<anonymous> (C:\Users\Phuong\Documents\Personal Uni-Job\n
// odeschool\learnyounode\httpuppercaserer.js:17:31)
    // at IncomingMessage.emit (events.js:107:17)
    // at IncomingMessage.Readable.read (_stream_readable.js:373:10)
    // at flow (_stream_readable.js:750:26)
    // at resume_ (_stream_readable.js:730:3)
    // at _stream_readable.js:717:7
    // at process._tickCallback (node.js:355:11)
// ? Error connecting to http://localhost:60573: read ECONNRESET

// Your submission results compared to the expected:

                 // ACTUAL                                 EXPECTED

// ────────────────────────────────────────────────────────────────────────────────


   // "Maccas"                            !=    "MACCAS"

   // ""                                  !=    "BOOZE BUS"

                                       // !=    "DUNNY"

                                       // !=    "SPAG BOL"

                                       // !=    "JUG"

                                       // !=    "LURK"

                                       // !=    "BULL BAR"

                                       // !=    "SERVO"

                                       // !=    "POT"

                                       // !=    "CHOOK"

                                       // !=    ""


// ────────────────────────────────────────────────────────────────────────────────


// ? Submission results did not match expected!

// # FAIL

// Your solution to HTTP UPPERCASERER didn't pass. Try again!


// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>learnyounode
// verify httpuppercaserer.js

// Your submission results compared to the expected:

                 // ACTUAL                                 EXPECTED

// ────────────────────────────────────────────────────────────────────────────────


   // "UTE"                               ==    "UTE"

   // "BUSH OYSTER"                       ==    "BUSH OYSTER"

   // "BEAUTY"                            ==    "BEAUTY"

   // "DOB"                               ==    "DOB"

   // "THINGO"                            ==    "THINGO"

   // "YABBER"                            ==    "YABBER"

   // "NOT MY BOWL OF RICE"               ==    "NOT MY BOWL OF RICE"

   // "TWO POT SCREAMER"                  ==    "TWO POT SCREAMER"

   // "PIKER"                             ==    "PIKER"

   // "TUCKER-BAG"                        ==    "TUCKER-BAG"

   // ""                                  ==    ""


// ────────────────────────────────────────────────────────────────────────────────


// V Submission results match expected

// # PASS

// Your solution to HTTP UPPERCASERER passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────

    // var http = require('http')
    // var map = require('through2-map')

    // var server = http.createServer(function (req, res) {
      // if (req.method != 'POST')
        // return res.end('send me a POST\n')

      // req.pipe(map(function (chunk) {
        // return chunk.toString().toUpperCase()
      // })).pipe(res)
    // })

    // server.listen(Number(process.argv[2]))

// ────────────────────────────────────────────────────────────────────────────────


// You have one challenge left
// Type 'learnyounode' to show the menu.


// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>


