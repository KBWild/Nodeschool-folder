
 // LEARN YOU THE NODE.JS FOR MUCH WIN!
// ─────────────────────────────────────
 // TIME SERVER
 // Exercise 10 of 13

// Write a TCP time server!

// Your server should listen to TCP connections on the port provided by the first a
// rgument to your program. For each connection you must write the current date & 2
// 4 hour time in the format:

    // "YYYY-MM-DD hh:mm"

// followed by a newline character. Month, day, hour and minute must be zero-filled
 // to 2 integers. For example:

    // "2013-07-06 17:42"

// -------------------------------------------------------------------------------

// ## HINTS

// For this exercise we'll be creating a raw TCP server. There's no HTTP involved h
// ere so we need to use the net module from Node core which has all the basic netw
// orking functions.

// The net module has a method named net.createServer() that takes a callback funct
// ion. Unlike most callbacks in Node, the callback used by createServer() is calle
// d more than once. Every connection received by your server triggers another call
 // to the callback. The callback function has the signature:

    // function callback (socket) { /* ... */ }

// net.createServer() also returns an instance of your server. You must call server
// .listen(portNumber) to start listening on a particular port.

// A typical Node TCP server looks like this:

    // var net = require('net')
    // var server = net.createServer(function (socket) {
    //  socket handling logic
    // })
    // server.listen(8000)

// Remember to use the port number supplied to you as the first command-line argume
// nt.

// The socket object contains a lot of meta-data regarding the connection, but it i
// s also a Node duplex Stream, in that it can be both read from, and written to. F
// or this exercise we only need to write data and then close the socket.

// Use socket.write(data) to write data to the socket and socket.end() to close the
 // socket. Alternatively, the .end() method also takes a data object so you can si
// mplify to just: socket.end(data).

// Documentation on the net module can be found by pointing your browser here:

  // file://C:\Users\Phuong\AppData\Roaming\npm\node_modules\learnyounode\node_apid
// oc\net.html

// To create the date, you'll need to create a custom format from a new Date() obje
// ct. The methods that will be useful are:

    // date.getFullYear()
    // date.getMonth()     // starts at 0
    // date.getDate()      // returns the day of month
    // date.getHours()
    // date.getMinutes()

// Or, if you want to be adventurous, use the strftime package from npm. The strfti
// me(fmt, date) function takes date formats just like the unix date command. You c
// an read more about strftime at: [https://github.com/samsonjs/strftime](https://g
// ithub.com/samsonjs/strftime)

// -------------------------------------------------------------------------------

 // » To print these instructions again, run: learnyounode print
 // » To execute your program in a test environment, run: learnyounode run program.
// js
 // » To verify your program, run: learnyounode verify program.js
 // » For help run: learnyounode help



// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>

var port_num = Number(process.argv[2]);

function zeroFill(i){
	return (i < 10 ? '0' : '') + i;
}

function Date_Now() {
	var d_obj = new Date();
	var year = d_obj.getFullYear();
	var month = zeroFill(d_obj.getMonth() + 1);
	var day = zeroFill(d_obj.getDate())
	var hours = zeroFill(d_obj.getHours());
	var minutes = zeroFill(d_obj.getMinutes());
	
	var date_24hr = year + '-' + month + '-' + day + ' ' 
	+ hours +':'+ minutes;
	
	return date_24hr;
}


var net = require('net');
var server = net.createServer(function (socket) {
		var data = Date_Now();
		//socket.write(data + '\n');
		socket.end(data + '\n');
})
server.listen(port_num);


