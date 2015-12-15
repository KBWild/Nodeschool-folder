
 // LEARN YOU THE NODE.JS FOR MUCH WIN!
// ─────────────────────────────────────
 // HTTP FILE SERVER
 // Exercise 11 of 13

// Write an HTTP server that serves the same text file for each request it receives
// .

// Your server should listen on the port provided by the first argument to your pro
// gram.

// You will be provided with the location of the file to serve as the second comman
// d-line argument. You must use the fs.createReadStream() method to stream the fil
// e contents to the response.

// -------------------------------------------------------------------------------

// ## HINTS

// Because we need to create an HTTP server for this exercise rather than a generic
 // TCP server, we should use the http module from Node core. Like the net module,
// http also has a method named http.createServer() but this one creates a server t
// hat can talk HTTP.

// http.createServer() takes a callback that is called once for each connection rec
// eived by your server. The callback function has the signature:

    // function callback (request, response) { /* ... */ }

// Where the two arguments are objects representing the HTTP request and the corres
// ponding response for this request. request is used to fetch properties, such as
// the header and query-string from the request while response is for sending data
// to the client, both headers and body.

// Both request and response are also Node streams! Which means that you can use th
// e streaming abstractions to send and receive data if they suit your use-case.

// http.createServer() also returns an instance of your server. You must call serve
// r.listen(portNumber) to start listening on a particular port.

// A typical Node HTTP server looks like this:

    // var http = require('http')
    // var server = http.createServer(function (req, res) {
    //  request handling logic...
    // })
    // server.listen(8000)

// Documentation on the http module can be found by pointing your browser here:
  // file://C:\Users\Phuong\AppData\Roaming\npm\node_modules\learnyounode\node_apid
// oc\http.html

// The fs core module also has some streaming APIs for files. You will need to use
// the fs.createReadStream() method to create a stream representing the file you ar
// e given as a command-line argument. The method returns a stream object which you
 // can use src.pipe(dst) to pipe the data from the src stream to the dst stream. I
// n this way you can connect a filesystem stream with an HTTP response stream.

// -------------------------------------------------------------------------------

 // » To print these instructions again, run: learnyounode print
 // » To execute your program in a test environment, run: learnyounode run program.
// js
 // » To verify your program, run: learnyounode verify program.js
 // » For help run: learnyounode help



// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>
var fs = require('fs');

var port_num = process.argv[2];
var file = process.argv[3];


var http = require('http');
var server = http.createServer(function (req,res){
	//Creates a web server object - has a request and response
		var src_file = fs.createReadStream(file); // file:///C:/Users/Phuong/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/stream.html#stream_readable_pipe_destination_options
		// var dst = fs.createWriteStream(file); < -- Argument allows only strings
		src_file.pipe(res); // <-- Here you can insert http request//file:///C:/Users/Phuong/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/stream.html#stream_readable_pipe_destination_options
		//res.end(src_file); // Data in src_file written to dst as 
		//response
});
server.listen(port_num);

// Your environment has been set up for using Node.js 0.12.0 (x64) and npm.

// C:\Users\Phuong>cd C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyo
// unode

// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>learnyounode
// verify httpfileserver.js

// Your submission results compared to the expected:

// ────────────────────────────────────────────────────────────────────────────────


// 1.  ACTUAL:    "Gutful of bazza piece of piss grab us a no-hoper. Shazza got us
// some dob and as busy as a oldies. Shazza got us some rock up and she'll be right
 // bail out. Mad as a truckie also flat out like a bundy."
// 1.  EXPECTED:  "Gutful of bazza piece of piss grab us a no-hoper. Shazza got us
// some dob and as busy as a oldies. Shazza got us some rock up and she'll be right
 // bail out. Mad as a truckie also flat out like a bundy."

// 2.  ACTUAL:    ""
// 2.  EXPECTED:  ""


// ────────────────────────────────────────────────────────────────────────────────


// V Submission results match expected

// # PASS

// Your solution to HTTP FILE SERVER passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────

    // var http = require('http')
    // var fs = require('fs')

    // var server = http.createServer(function (req, res) {
      // res.writeHead(200, { 'content-type': 'text/plain' })

      // fs.createReadStream(process.argv[3]).pipe(res)
    // })

    // server.listen(Number(process.argv[2]))

// ────────────────────────────────────────────────────────────────────────────────


// You have 2 challenges left.
// Type 'learnyounode' to show the menu.


// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>


