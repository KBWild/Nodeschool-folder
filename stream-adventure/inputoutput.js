

    // STREAM ADVENTURE
    // ----------------
    // BEEP BOOP                                             [COMPLETED]
    // MEET PIPE                                             [COMPLETED]
    // INPUT OUTPUT
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


// Take data from `process.stdin` and pipe it to `process.stdout`.

// With `.pipe()`. `process.stdin.pipe()` to be exact.

// Don't overthink this.


// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\stream-adventure>

var fs = require('fs');
var ReadStr = process.stdin;
ReadStr.pipe(process.stdout);
