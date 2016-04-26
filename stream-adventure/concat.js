

    // STREAM ADVENTURE
    // ----------------
    // BEEP BOOP                                             [COMPLETED]
    // MEET PIPE                                             [COMPLETED]
    // INPUT OUTPUT                                          [COMPLETED]
    // TRANSFORM                                             [COMPLETED]
    // LINES                                                 [COMPLETED]
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


// You will be given text on process.stdin. Buffer the text and reverse it using
// the `concat-stream` module before writing it to stdout.

// `concat-stream` is a write stream that you can pass a callback to get the
// complete contents of a stream as a single buffer. Here's an example that uses
// concat to buffer POST content in order to JSON.parse() the submitted data:

    // var concat = require('concat-stream');
    // var http = require('http');

    // var server = http.createServer(function (req, res) {
        // if (req.method === 'POST') {
            // req.pipe(concat(function (body) {
                // var obj = JSON.parse(body);
                // res.end(Object.keys(obj).join('\n'));
            // }));
        // }
        // else res.end();
    // });
    // server.listen(5000);

// In your adventure you'll only need to buffer input with `concat()` from
// process.stdin.

// Make sure to `npm install concat-stream` in the directory where your solution
// file is located.

var concat = require('concat-stream');

var args_stdin = process.stdin;

var args_stdout = process.stdout;

var string_check = " s ";



function reverse (string) {
	if(typeof(string) == typeof(string_check))
	{	
		var o = '';
		for (var i = string.length - 1; i >= 0; i--)
		o += string[i];
		return o;
	}
}

//Always read the module's documentation and how to use the module
//,do not assume.


/** args_stdin.pipe(concat(function(input){
	reverse(input.toString());
	args_stdin.end(); //<---- problem i thought here was i needed to make the stream
	//stop being writable and be read now
})).pipe(args_stdout);
*/

//It just needs to be printed out to the console

args_stdin.pipe(concat(function(input){
	var s = reverse(input.toString());
	console.log(s);
}));





