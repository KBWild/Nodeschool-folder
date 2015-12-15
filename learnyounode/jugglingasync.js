
 // LEARN YOU THE NODE.JS FOR MUCH WIN!
// ─────────────────────────────────────
 // JUGGLING ASYNC
 // Exercise 9 of 13

// This problem is the same as the previous problem (HTTP COLLECT) in that you need
 // to use http.get(). However, this time you will be provided with three URLs as t
// he first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs and pr
// int it to the console (stdout). You don't need to print out the length, just the
 // data as a String; one line per URL. The catch is that you must print them out i
// n the same order as the URLs are provided to you as command-line arguments.

// -------------------------------------------------------------------------------

// ## HINTS

// Don't expect these three servers to play nicely! They are not going to give you
// complete responses in the order you hope, so you can't naively just print the ou
// tput as you get it because they will be out of order.

// You will need to queue the results and keep track of how many of the URLs have r
// eturned their entire contents. Only once you have them all, you can print the da
// ta to the console.

// Counting callbacks is one of the fundamental ways of managing async in Node. Rat
// her than doing it yourself, you may find it more convenient to rely on a third-p
// arty library such as [async](http://npm.im/async) or [after](http://npm.im/after
// ). But for this exercise, try and do it without any external helper library.

// -------------------------------------------------------------------------------

 // » To print these instructions again, run: learnyounode print
 // » To execute your program in a test environment, run: learnyounode run program.
// js
 // » To verify your program, run: learnyounode verify program.js
 // » For help run: learnyounode help



// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>

var http = require('http');
var bl = require ('bl');
var results = [];
var count = 0;

function printResults(){
	for (var i=0; i<3; i++)
	{
		console.log(results[i]);
	}
}

function http_get(index){ http.get(process.argv[2 + index],function (res){
		res.pipe(bl(function (err,data){
			if(err) throw err + " Error from req " + (2+index);
			
			results[index] = data.toString();
			count++;
			
			if(count == 3)
			{
				printResults();
			}
		}));
	});
}


for(var i=0; i<3; i++)
{
	http_get(i);
}


// var http = require('http');
// var bl = require ('bl');
// var results = [];
// var count = 0;

// function printResults(){
	// for (var i=0; i<3; i++)
	// {
		// console.log(results[i]);
	// }
// }

// function http_get(index){ http.get(process.argv[2 + index],function (res){
		// res.pipe(bl(function (err,data){
			// if(err) throw err + " Error from req " + (2+index);
			
			// results = data.toString();
			// count++;
			
			// if(count == 3)
			// {
				// printResults();
			// }
		// }));
	// });
// }


// for(var i=0; i<3; i++)
// {
	// http_get(i);
// }