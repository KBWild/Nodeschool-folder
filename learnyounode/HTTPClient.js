
 // LEARN YOU THE NODE.JS FOR MUCH WIN!
// ─────────────────────────────────────
 // HTTP CLIENT
 // Exercise 7 of 13

// Write a program that performs an HTTP GET request to a URL provided to you as th
// e first command-line argument. Write the String contents of each "data" event fr
// om the response to a new line on the console (stdout).

// -------------------------------------------------------------------------------

// ## HINTS

// For this exercise you will need to use the http core module.

// Documentation on the http module can be found by pointing your browser here:
// file://C:\Users\Phuong\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\http.html

// The http.get() method is a shortcut for simple GET requests, use it to simplify
// your solution. The first argument to http.get() can be the URL you want to GET;
// provide a callback as the second argument.

// Unlike other callback functions, this one has the signature:

    // function callback (response) { /* ... */ }

// Where the response object is a Node Stream object. You can treat Node Streams as
 // objects that emit events. The three events that are of most interest are: "data
// ", "error" and "end". You listen to an event like so:

    // response.on("data", function (data) { /* ... */ })

// The "data" event is emitted when a chunk of data is available and can be process
// ed. The size of the chunk depends upon the underlying data source.

// The response object / Stream that you get from http.get() also has a setEncoding
// () method. If you call this method with "utf8", the "data" events will emit Stri
// ngs rather than the standard Node Buffer objects which you have to explicitly co
// nvert to Strings.

// -------------------------------------------------------------------------------

 // » To print these instructions again, run: learnyounode print
 // » To execute your program in a test environment, run: learnyounode run program.
// js
 // » To verify your program, run: learnyounode verify program.js
 // » For help run: learnyounode help



// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>

var http = require('http');

var url = process.argv[2];



var http_get = http.get(url,function callback(response){
	response.setEncoding('utf8');
	response.on('data',function (data){
		console.log(data);
	});
	response.on('error',function(error){
		console.log(error);	
	});
});

http_get.on('error', function(error){
	console.log('problem with request: ' + error)
});


// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>learnyounode
// verify HTTPClient.js

// Your submission results compared to the expected:

                 // ACTUAL                                 EXPECTED

// ────────────────────────────────────────────────────────────────────────────────


   // "Bushie"                            ==    "Bushie"

   // "Bathers"                           ==    "Bathers"

   // "Middy"                             ==    "Middy"

   // "Brickie"                           ==    "Brickie"

   // "Dag"                               ==    "Dag"

   // "Prezzy"                            ==    "Prezzy"

   // "No-hoper"                          ==    "No-hoper"

   // "Slaps"                             ==    "Slaps"

   // "Bizzo"                             ==    "Bizzo"

   // "Stonkered"                         ==    "Stonkered"

   // ""                                  ==    ""


// ────────────────────────────────────────────────────────────────────────────────


// V Submission results match expected

// # PASS

// Your solution to HTTP CLIENT passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────

    // var http = require('http')

    // http.get(process.argv[2], function (response) {
      // response.setEncoding('utf8')
      // response.on('data', console.log)
      // response.on('error', console.error)
    // })

// ────────────────────────────────────────────────────────────────────────────────


// You have 6 challenges left.
// Type 'learnyounode' to show the menu.


// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>learnyounode
// verify HTTPClient.js

// Your submission results compared to the expected:

                 // ACTUAL                                 EXPECTED

// ────────────────────────────────────────────────────────────────────────────────


   // "Ute"                               ==    "Ute"

   // "Parma"                             ==    "Parma"

   // "Drongo"                            ==    "Drongo"

   // "Spag bol"                          ==    "Spag bol"

   // "Spit the dummy"                    ==    "Spit the dummy"

   // "Wobbly"                            ==    "Wobbly"

   // "gutta"                             ==    "gutta"

   // "Boozer"                            ==    "Boozer"

   // "Ripper"                            ==    "Ripper"

   // "Frog in a sock"                    ==    "Frog in a sock"

   // ""                                  ==    ""


// ────────────────────────────────────────────────────────────────────────────────


// V Submission results match expected

// # PASS

// Your solution to HTTP CLIENT passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────

    // var http = require('http')

    // http.get(process.argv[2], function (response) {
      // response.setEncoding('utf8')
      // response.on('data', console.log)
      // response.on('error', console.error)
    // })

// ────────────────────────────────────────────────────────────────────────────────


// You have 6 challenges left.
// Type 'learnyounode' to show the menu.


// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>

