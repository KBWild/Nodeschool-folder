var ws = require('websocket-stream');

var stream = ws('ws://localhost:8099');

var string = "hello\n";

stream.end(string); //<--- Open stream which is duplex, read or write
//Prior stream.pipe(string).pipe(stream).
//Nodejs server interaction - write to stream documentation
//As soon as you are stuck with a problem for 5 minutes. Immediately, google search
	
									//<--- String is written to the stream.
//Understand what is the response time for http://localhost:8099 to run the code
//Always make sure/test your assumptions about your code
//In this case what was written was string.pipe(stream)
//Thinking the string has to start first.

//----------------------------------------------------------------------

// Usage

// This module works in Node or in Browsers that support WebSockets. You can use browserify to package this module for browser use.

// var websocket = require('websocket-stream')
// var ws = websocket('ws://realtimecats.com')
// ws.pipe(somewhereAwesome)
// In the example above ws is a duplex stream. That means you can pipe output to anything that accepts streams. You can also pipe data into streams (such as a webcam feed or audio data).

// The underlying WebSocket instance is available as ws.socket.
	
//----------------------------------------------------------------------