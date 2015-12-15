
 // LEARN YOU THE NODE.JS FOR MUCH WIN!
// ─────────────────────────────────────
 // FILTERED LS
 // Exercise 5 of 13

// Create a program that prints a list of files in a given directory, filtered by t
// he extension of the files. You will be provided a directory name as the first ar
// gument to your program (e.g. '/path/to/dir/') and a file extension to filter by
// as the second argument.

// For example, if you get 'txt' as the second argument then you will need to filte
// r the list to only files that end with .txt. Note that the second argument will
// not come prefixed with a '.'.

// The list of files should be printed to the console, one file per line. You must
// use asynchronous I/O.

// -------------------------------------------------------------------------------

// ## HINTS

// The fs.readdir() method takes a pathname as its first argument and a callback as
 // its second. The callback signature is:

    // function callback (err, list) { /* ... */ }

// where list is an array of filename strings.

// Documentation on the fs module can be found by pointing your browser here:
  // file://C:\Users\Phuong\AppData\Roaming\npm\node_modules\learnyounode\node_apid
// oc\fs.html

// You may also find node's path module helpful, particularly the extname method.

// Documentation on the path module can be found by pointing your browser here:
  // file://C:\Users\Phuong\AppData\Roaming\npm\node_modules\learnyounode\node_apid
// oc\path.html

// -------------------------------------------------------------------------------

 // » To print these instructions again, run: learnyounode print
 // » To execute your program in a test environment, run: learnyounode run program.
// js
 // » To verify your program, run: learnyounode verify program.js
 // » For help run: learnyounode help



// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>

var fs = require('fs');

var chosen_ext = "." + process.argv[3] ; 
//String created with '.' in front of extension name

//arg 2 The extension name chosen to be listed for the program
//e.g. txt , js, etc

function ListFiles_Extns(){
		fs.readdir(process.argv[2], function callback(err,list)
		//arg 1 path of directory to list file extensions	
		{
			if (err) throw err;//Part of normal error events
			for(var i=0;i<list.length;i++)
			{	
					if(list[i].indexOf(chosen_ext) > -1)
					{
						console.log(list[i]);
					}
			}
		});	
}

ListFiles_Extns();

//node program.js
//learnyounode verify program.js arg 1 , arg 2  


/* C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>learnyounode
verify filteredls.js

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED

────────────────────────────────────────────────────────────────────────────────


   "CHANGELOG.md"                      ==    "CHANGELOG.md"

   "LICENCE.md"                        ==    "LICENCE.md"

   "README.md"                         ==    "README.md"

   ""                                  ==    ""


────────────────────────────────────────────────────────────────────────────────


V Submission results match expected
V Used asynchronous method: fs.readdir()

# PASS

Your solution to FILTERED LS passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────

    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

────────────────────────────────────────────────────────────────────────────────


You have 8 challenges left.
Type 'learnyounode' to show the menu.


C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode> */
