

    // SCOPE-CHAINS-CLOSURES
    // ---------------------
    // 1. Scopes                                             [COMPLETED]
    // 2. Scope Chains                                       [COMPLETED]
    // 3. Global Scope & Shadowing                           [COMPLETED]
    // 4. Closures
    // 5. Garbage Collection
    // -----------------
    // HELP
    // EXIT



// # Closures

// Closures are an important part of the Javascript language. They are what enables

// the callback-last programming most prominent in node, and provide an excellent
// mechanism for handling the asynchronous nature of most Javascript tasks.

// To properly understand closures, let's start with an example scope chain:

    // someFunc()
        // ↑
        // |
     // inner()
        // ↑
        // |
      // foo()

// Let's say someFunc() declares a variable bar:

    // someFunc()
     // var bar
        // ↑
        // ?

// Given how nesting scope works, it's possible for an inner scope within
// someFunc() to access bar. In this example, let's say inner() accesses
// bar:

    // someFunc()
     // var bar
        // ↑
        // |
     // inner()
    // alert(bar)
        // ↑
        // ?

// Then inner() is said to Close Over bar. Therefore inner() is a Closure.

// To power the callback style of programming, the closure will be maintained even
// if inner() isn't executed immediately. It is perfectly legal in Javascript to
// pass inner around / return it from someFunc() for later execution. All the
// while, bar will continue to be available.

// -------------------------------------------------------------------------------

// # Your Mission

// Modify your solution from the previous lesson to set bar = true inside zip(),
// then return the function zip as the result of foo()

// Once complete, execute scope-chains-closures verify <your-file.js> to verify you
// r
// solution.



function foo (){
	quux = 0;
	var bar;
	function zip(){
		var quux=1;
		bar = true;
	}
	return zip;
}

