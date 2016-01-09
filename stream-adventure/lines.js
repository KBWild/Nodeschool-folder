

    // STREAM ADVENTURE
    // ----------------
    // BEEP BOOP                                             [COMPLETED]
    // MEET PIPE                                             [COMPLETED]
    // INPUT OUTPUT                                          [COMPLETED]
    // TRANSFORM                                             [COMPLETED]
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


// Instead of transforming every line as in the previous "TRANSFORM" example,
// for this challenge, convert even-numbered lines to upper-case and odd-numbered
// lines to lower-case. Consider the first line to be odd-numbered. For example
// given this input:

    // One
    // Two
    // Three
    // Four

// Your program should output:

    // one
    // TWO
    // three
    // FOUR

// You can use the `split` module to split input by newlines. For example:

    // var split = require('split');
    // process.stdin
        // .pipe(split())
        // .pipe(through2(function (line, _, next) {
            // console.dir(line.toString());
            // next();
        // }))
    // ;

// `split` will buffer chunks on newlines before you get them. In the previous
// example, we will get separate events for each line even though all the data
// probably arrives on the same chunk:

    // $ echo -e 'one\ntwo\nthree' | node split.js
    // 'one'
    // 'two'
    // 'three'

// Your own program should use `split` in this way, but you should transform the
// input and pipe the output through to `process.stdout`.

// Make sure to `npm install split through2` in the directory where your solution
// file lives.


// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\stream-adventure>

/* Data come in chunks, however can emit different events?
*/

var split = require('split');//splits input by newlines
var through = require('through2');
var stream = through(write,end);
//var stream2 = through(write1,end2);

var args_stdin = process.stdin;
var args_stdout = process.stdout;

//var array_for_counting = [];
var counter = 1;

function write(line,enc,next){
	if(counter % 2 == 0){
		var convert_line = line.toString().toUpperCase();
		//array_for_counting[counter] = convert_line;
		this.push(convert_line + '\n');//array_for_counting[counter]);
		counter++;	
	}
	else{
		//array_for_counting[counter] = line.toString();
		var convert_line2 = line.toString().toLowerCase();
		this.push(convert_line2 + '\n');//array_for_counting[counter];
		counter++;
	}
	next();
}

function end (done){
	done();
}

args_stdin.pipe(split()).pipe(stream).pipe(args_stdout);
// function write1(line,enc,next){
	
	// next();
// }

// function end2 (done){
	// done();
// }


//previous command//args_stdin.pipe(split()).pipe(stream).pipe(stream2).pipe(args_stdout);
 // their mumper   \nALL THE TIME: NOR AVOICE FROM AFIRE BELLOWSED MISHE MISHE TO   \
// ntauftauf thuartpeatrick: not yet, though venissoon after, had a   \nKIDSCAD BUTTE
// NDED A BLAND OLD ISAAC: NOT YET, THOUGH ALL\'S FAIR IN    \nvanessy, were sosie se
// sthers wroth with twone nathandjoe. rot a   \nPECK OF PA\'S MALT HAD JHEM OR SHEN
// BREWED BY ARCLIGHT AND RORY    \nend to the regginbrow was to be seen ringsome on
// the aquaface.'
    // actual:
      // 'riverrun, past Eve and Adam\'s, from swerve of shore to bend OF BAY, BRINGS
 // US BY A COMMODIUS VICUS OF RECIRCULATION BACK TO    Howth Castle and Environs. Si
// r Tristram, violer d\'amores, fr\'over the short sea, had passen- CORE REARRIVED F
// ROM NORTH ARMORICA ON THIS SIDE THE SCRAGGYisthmus of Europe Minor to wielderfight
 // his penisolate war: nor    HAD TOPSAWYER\'S ROCKS BY THE STREAM OCONEE EXAGGERATE
// D THEMSELSE   to Laurens County\'s gorgios while they went doublin their mumper
// ALL THE TIME: NOR AVOICE FROM AFIRE BELLOWSED MISHE MISHE TO   tauftauf thuartpeat
// rick: not yet, though venissoon after, had a   KIDSCAD BUTTENDED A BLAND OLD ISAAC
// : NOT YET, THOUGH ALL\'S FAIR IN    vanessy, were sosie sesthers wroth with twone
// nathandjoe. Rot a   PECK OF PA\'S MALT HAD JHEM OR SHEN BREWED BY ARCLIGHT AND ROR
// Y    end to the regginbrow was to be seen ringsome on the aquaface.'
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
// am-adventure verify lines.js

// TAP version 13
// # (anonymous)
// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\stream-adventure\line
// s.js:87
                // var convert_line = line.toUpperCase();
                                        // ^
// TypeError: undefined is not a function
    // at DestroyableTransform.write [as _transform] (C:\Users\Phuong\Documents\Perso
// nal Uni-Job\Nodeschool-folder\stream-adventure\lines.js:87:27)
    // at DestroyableTransform.Transform._read (C:\Users\Phuong\Documents\Personal Un
// i-Job\Nodeschool-folder\stream-adventure\node_modules\through2\node_modules\readab
// le-stream\lib\_stream_transform.js:172:10)
    // at DestroyableTransform.Transform._write (C:\Users\Phuong\Documents\Personal U
// ni-Job\Nodeschool-folder\stream-adventure\node_modules\through2\node_modules\reada
// ble-stream\lib\_stream_transform.js:160:12)
    // at doWrite (C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\strea
// m-adventure\node_modules\through2\node_modules\readable-stream\lib\_stream_writabl
// e.js:335:12)
    // at writeOrBuffer (C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder
// \stream-adventure\node_modules\through2\node_modules\readable-stream\lib\_stream_w
// ritable.js:321:5)
    // at DestroyableTransform.Writable.write (C:\Users\Phuong\Documents\Personal Uni
// -Job\Nodeschool-folder\stream-adventure\node_modules\through2\node_modules\readabl
// e-stream\lib\_stream_writable.js:248:11)
    // at Stream.ondata (stream.js:51:26)
    // at Stream.emit (events.js:107:17)
    // at drain (C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\stream-
// adventure\node_modules\split\node_modules\through\index.js:36:16)
    // at Stream.stream.queue.stream.push (C:\Users\Phuong\Documents\Personal Uni-Job
// \Nodeschool-folder\stream-adventure\node_modules\split\node_modules\through\index.
// js:45:5)
// ok 1 stream-adventure verify YOURFILE.js
// not ok 2 should be equal
  // ---
    // operator: equal
    // expected:
      // 'riverrun, past eve and adam\'s, from swerve of shore to bend \nOF BAY, BRIN
// GS US BY A COMMODIUS VICUS OF RECIRCULATION BACK TO    \nhowth castle and environs
// . \n\nsir tristram, violer d\'amores, fr\'over the short sea, had passen- \nCORE R
// EARRIVED FROM NORTH ARMORICA ON THIS SIDE THE SCRAGGY\nisthmus of europe minor to
// wielderfight his penisolate war: nor    \nHAD TOPSAWYER\'S ROCKS BY THE STREAM OCO
// NEE EXAGGERATED THEMSELSE   \nto laurens county\'s gorgios while they went doublin
 // their mumper   \nALL THE TIME: NOR AVOICE FROM AFIRE BELLOWSED MISHE MISHE TO   \
// ntauftauf thuartpeatrick: not yet, though venissoon after, had a   \nKIDSCAD BUTTE
// NDED A BLAND OLD ISAAC: NOT YET, THOUGH ALL\'S FAIR IN    \nvanessy, were sosie se
// sthers wroth with twone nathandjoe. rot a   \nPECK OF PA\'S MALT HAD JHEM OR SHEN
// BREWED BY ARCLIGHT AND RORY    \nend to the regginbrow was to be seen ringsome on
// the aquaface.'
    // actual:
      // 'riverrun, past Eve and Adam\'s, from swerve of shore to bend'
  // ...
// not ok 3 successful exit code
  // ---
    // operator: equal
    // expected: 0
    // actual:   1
// #########################################
// ###   YOUR SOLUTION IS NOT CORRECT!   ###
// #########################################


  // ...

// events.js:85
      // throw er; // Unhandled 'error' event
            // ^
// Error: This socket has been ended by the other party
    // at Socket.writeAfterFIN [as write] (net.js:289:12)
    // at null.<anonymous> (C:\Users\Phuong\AppData\Roaming\npm\node_modules\stream-a
// dventure\problems\lines\index.js:53:22)
    // at wrapper [as _onTimeout] (timers.js:265:14)
    // at Timer.listOnTimeout (timers.js:110:15)

// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\stream-adventure>stre
// am-adventure verify lines.js

// TAP version 13
// # (anonymous)
// ok 1 stream-adventure verify YOURFILE.js
// not ok 2 should be equal
  // ---
    // operator: equal
    // expected:
      // 'riverrun, past eve and adam\'s, from swerve of shore to bend \nOF BAY, BRIN
// GS US BY A COMMODIUS VICUS OF RECIRCULATION BACK TO    \nhowth castle and environs
// . \n\nsir tristram, violer d\'amores, fr\'over the short sea, had passen- \nCORE R
// EARRIVED FROM NORTH ARMORICA ON THIS SIDE THE SCRAGGY\nisthmus of europe minor to
// wielderfight his penisolate war: nor    \nHAD TOPSAWYER\'S ROCKS BY THE STREAM OCO
// NEE EXAGGERATED THEMSELSE   \nto laurens county\'s gorgios while they went doublin
 // their mumper   \nALL THE TIME: NOR AVOICE FROM AFIRE BELLOWSED MISHE MISHE TO   \
// ntauftauf thuartpeatrick: not yet, though venissoon after, had a   \nKIDSCAD BUTTE
// NDED A BLAND OLD ISAAC: NOT YET, THOUGH ALL\'S FAIR IN    \nvanessy, were sosie se
// sthers wroth with twone nathandjoe. rot a   \nPECK OF PA\'S MALT HAD JHEM OR SHEN
// BREWED BY ARCLIGHT AND RORY    \nend to the regginbrow was to be seen ringsome on
// the aquaface.'
    // actual:
      // 'riverrun, past Eve and Adam\'s, from swerve of shore to bend OF BAY, BRINGS
 // US BY A COMMODIUS VICUS OF RECIRCULATION BACK TO    Howth Castle and Environs. Si
// r Tristram, violer d\'amores, fr\'over the short sea, had passen- CORE REARRIVED F
// ROM NORTH ARMORICA ON THIS SIDE THE SCRAGGYisthmus of Europe Minor to wielderfight
 // his penisolate war: nor    HAD TOPSAWYER\'S ROCKS BY THE STREAM OCONEE EXAGGERATE
// D THEMSELSE   to Laurens County\'s gorgios while they went doublin their mumper
// ALL THE TIME: NOR AVOICE FROM AFIRE BELLOWSED MISHE MISHE TO   tauftauf thuartpeat
// rick: not yet, though venissoon after, had a   KIDSCAD BUTTENDED A BLAND OLD ISAAC
// : NOT YET, THOUGH ALL\'S FAIR IN    vanessy, were sosie sesthers wroth with twone
// nathandjoe. Rot a   PECK OF PA\'S MALT HAD JHEM OR SHEN BREWED BY ARCLIGHT AND ROR
// Y    end to the regginbrow was to be seen ringsome on the aquaface.'
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
// am-adventure verify lines.js

// TAP version 13
// # (anonymous)
// ok 1 stream-adventure verify YOURFILE.js
// not ok 2 should be equal
  // ---
    // operator: equal
    // expected:
      // 'riverrun, past eve and adam\'s, from swerve of shore to bend \nOF BAY, BRIN
// GS US BY A COMMODIUS VICUS OF RECIRCULATION BACK TO    \nhowth castle and environs
// . \n\nsir tristram, violer d\'amores, fr\'over the short sea, had passen- \nCORE R
// EARRIVED FROM NORTH ARMORICA ON THIS SIDE THE SCRAGGY\nisthmus of europe minor to
// wielderfight his penisolate war: nor    \nHAD TOPSAWYER\'S ROCKS BY THE STREAM OCO
// NEE EXAGGERATED THEMSELSE   \nto laurens county\'s gorgios while they went doublin
 // their mumper   \nALL THE TIME: NOR AVOICE FROM AFIRE BELLOWSED MISHE MISHE TO   \
// ntauftauf thuartpeatrick: not yet, though venissoon after, had a   \nKIDSCAD BUTTE
// NDED A BLAND OLD ISAAC: NOT YET, THOUGH ALL\'S FAIR IN    \nvanessy, were sosie se
// sthers wroth with twone nathandjoe. rot a   \nPECK OF PA\'S MALT HAD JHEM OR SHEN
// BREWED BY ARCLIGHT AND RORY    \nend to the regginbrow was to be seen ringsome on
// the aquaface.'
    // actual:
      // 'riverrun, past Eve and Adam\'s, from swerve of shore to bend OF BAY, BRINGS
 // US BY A COMMODIUS VICUS OF RECIRCULATION BACK TO    Howth Castle and Environs. Si
// r Tristram, violer d\'amores, fr\'over the short sea, had passen- CORE REARRIVED F
// ROM NORTH ARMORICA ON THIS SIDE THE SCRAGGYisthmus of Europe Minor to wielderfight
 // his penisolate war: nor    HAD TOPSAWYER\'S ROCKS BY THE STREAM OCONEE EXAGGERATE
// D THEMSELSE   to Laurens County\'s gorgios while they went doublin their mumper
// ALL THE TIME: NOR AVOICE FROM AFIRE BELLOWSED MISHE MISHE TO   tauftauf thuartpeat
// rick: not yet, though venissoon after, had a   KIDSCAD BUTTENDED A BLAND OLD ISAAC
// : NOT YET, THOUGH ALL\'S FAIR IN    vanessy, were sosie sesthers wroth with twone
// nathandjoe. Rot a   PECK OF PA\'S MALT HAD JHEM OR SHEN BREWED BY ARCLIGHT AND ROR
// Y    end to the regginbrow was to be seen ringsome on the aquaface.'
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
// am-adventure verify lines.js

// TAP version 13
// # (anonymous)
// ok 1 stream-adventure verify YOURFILE.js
// not ok 2 should be equal
  // ---
    // operator: equal
    // expected:
      // 'riverrun, past eve and adam\'s, from swerve of shore to bend \nOF BAY, BRIN
// GS US BY A COMMODIUS VICUS OF RECIRCULATION BACK TO    \nhowth castle and environs
// . \n\nsir tristram, violer d\'amores, fr\'over the short sea, had passen- \nCORE R
// EARRIVED FROM NORTH ARMORICA ON THIS SIDE THE SCRAGGY\nisthmus of europe minor to
// wielderfight his penisolate war: nor    \nHAD TOPSAWYER\'S ROCKS BY THE STREAM OCO
// NEE EXAGGERATED THEMSELSE   \nto laurens county\'s gorgios while they went doublin
 // their mumper   \nALL THE TIME: NOR AVOICE FROM AFIRE BELLOWSED MISHE MISHE TO   \
// ntauftauf thuartpeatrick: not yet, though venissoon after, had a   \nKIDSCAD BUTTE
// NDED A BLAND OLD ISAAC: NOT YET, THOUGH ALL\'S FAIR IN    \nvanessy, were sosie se
// sthers wroth with twone nathandjoe. rot a   \nPECK OF PA\'S MALT HAD JHEM OR SHEN
// BREWED BY ARCLIGHT AND RORY    \nend to the regginbrow was to be seen ringsome on
// the aquaface.'
    // actual:
      // 'riverrun, past Eve and Adam\'s, from swerve of shore to bend \nOF BAY, BRIN
// GS US BY A COMMODIUS VICUS OF RECIRCULATION BACK TO    \nHowth Castle and Environs
// . \n\nSir Tristram, violer d\'amores, fr\'over the short sea, had passen- \nCORE R
// EARRIVED FROM NORTH ARMORICA ON THIS SIDE THE SCRAGGY\nisthmus of Europe Minor to
// wielderfight his penisolate war: nor    \nHAD TOPSAWYER\'S ROCKS BY THE STREAM OCO
// NEE EXAGGERATED THEMSELSE   \nto Laurens County\'s gorgios while they went doublin
 // their mumper   \nALL THE TIME: NOR AVOICE FROM AFIRE BELLOWSED MISHE MISHE TO   \
// ntauftauf thuartpeatrick: not yet, though venissoon after, had a   \nKIDSCAD BUTTE
// NDED A BLAND OLD ISAAC: NOT YET, THOUGH ALL\'S FAIR IN    \nvanessy, were sosie se
// sthers wroth with twone nathandjoe. Rot a   \nPECK OF PA\'S MALT HAD JHEM OR SHEN
// BREWED BY ARCLIGHT AND RORY    \nend to the regginbrow was to be seen ringsome on
// the aquaface.'
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
// am-adventure verify lines.js

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



// var through = require('through2');
// var split = require('split');

// var lineCount = 0;
// var tr = through(function (buf, _, next) {
    // var line = buf.toString();
    // this.push(lineCount % 2 === 0
        // ? line.toLowerCase() + '\n'
        // : line.toUpperCase() + '\n'
    // );
    // lineCount ++;
    // next();
// });
// process.stdin
    // .pipe(split())
    // .pipe(tr)
    // .pipe(process.stdout)
// ;


// C:\Users\Phuong\Documents\Personal Uni-Job\Nodeschool-folder\stream-adventure>