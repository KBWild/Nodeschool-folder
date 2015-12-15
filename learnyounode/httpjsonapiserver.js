
// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>learnyounode
// print

 // LEARN YOU THE NODE.JS FOR MUCH WIN!
// ─────────────────────────────────────
 // HTTP JSON API SERVER
 // Exercise 13 of 13

// Write an HTTP server that serves JSON data when it receives a GET request to the
 // path '/api/parsetime'. Expect the request to contain a query string with a key
// 'iso' and an ISO-format time as the value.

// For example:

  // /api/parsetime?iso=2013-08-10T12:10:15.474Z

// The JSON response should contain only 'hour', 'minute' and 'second' properties.
// For example:

    // {
      // "hour": 14,
      // "minute": 23,
      // "second": 15
    // }

// Add second endpoint for the path '/api/unixtime' which accepts the same query st
// ring but returns UNIX epoch time in milliseconds (the number of milliseconds sin
// ce 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:

    // { "unixtime": 1376136615474 }

// Your server should listen on the port provided by the first argument to your pro
// gram.

// -------------------------------------------------------------------------------

// ## HINTS

// The request object from an HTTP server has a url property that you will need to
// use to "route" your requests for the two endpoints.

// You can parse the URL and query string using the Node core 'url' module. url.par
// se(request.url, true) will parse content of request.url and provide you with an
// object with helpful properties.

// For example, on the command prompt, type:

    // $ node -pe "require('url').parse('/test?q=1', true)"

// Documentation on the url module can be found by pointing your browser here:
  // file://C:\Users\Phuong\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\url.html

// Your response should be in a JSON string format. Look at JSON.stringify() for mo
// re information.

// You should also be a good web citizen and set the Content-Type properly:

    // res.writeHead(200, { 'Content-Type': 'application/json' })

// The JavaScript Date object can print dates in ISO format, e.g. new Date().toISOS
// tring(). It can also parse this format if you pass the string into the Date cons
// tructor. Date#getTime() will also
// come in handy.

// -------------------------------------------------------------------------------

 // » To print these instructions again, run: learnyounode print
 // » To execute your program in a test environment, run: learnyounode run program.
// js
 // » To verify your program, run: learnyounode verify program.js
 // » For help run: learnyounode help



// C:\Users\Phuong\Documents\Personal Uni-Job\nodeschool\learnyounode>
var http = require('http');
var url = require('url');
var qs = require('querystring');
var port = process.argv[2];

function splitString(stringToSplit, separator){
	var arrayofStrings = stringToSplit.split(separator);
	return arrayofStrings;
}

function convertISO8601toDate(dtstr) {

  // replace anything but numbers by spaces
  dtstr = dtstr.replace(/\D/g," ");

  // trim any hanging white space
  dtstr = dtstr.replace(/\s+$/,"");

  // split on space
  var dtcomps = dtstr.split(" ");

  // not all ISO 8601 dates can convert, as is
  // unless month and date specified, invalid
  if (dtcomps.length < 3) return "invalid date";
  // if time not provided, set to zero
  if (dtcomps.length < 4) {
    dtcomps[3] = 0;
    dtcomps[4] = 0;
    dtcomps[5] = 0;
  }

  // modify month between 1 based ISO 8601 and zero based Date
  dtcomps[1]--;

  var convdt = new
Date(Date.UTC(dtcomps[0],dtcomps[1],dtcomps[2],dtcomps[3],dtcomps[4],dtcomps[5]));

  return convdt/*.toUTCString()*/;
}


var server = http.createServer(function(req,res){
	if(req.method === 'GET'){		
		var path = url.parse(req.url).pathname;
		if(path === '/api/parsetime'){
			res.writeHead(200, {'Content-Type':'application/json'});
			
			var url_object = url.parse(req.url);
			
			var query_obj = url_object.query; //Querystring object from url object
			// file:///C:/Users/Phuong/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost
			//var query_as_string = qs.stringify(query_obj, ',' , ':');
			
			console.log(query_obj);
			//console.log(query_as_string + '1');
			
			var ISO_without_key = /*query_as_string*/query_obj.replace('iso=','');
			
			console.log(ISO_without_key);
			// var lengthOfISO = ISO_without_key.length();
			// var indexOfperiod = ISO_without_key.indexOf(.);
			
			//RegEx obj http://www.w3schools.com/jsref/jsref_regexp_m.asp
			//var endSLICEpos = /Z$/;
			
			var ISO_without_ms_s = splitString(ISO_without_key,'.');
			
			console.log(ISO_without_ms_s);
			
			var ISO_without_ms = ISO_without_ms_s[0];
		
			console.log(ISO_without_ms);
		
			//var ISO_string_to_date = convertISO8601toDate(ISO_without_key);
			var ISO_string_to_date = new Date(ISO_without_ms);
			//Uses ISO_format_time string creates into a date
			
			var hours = ISO_string_to_date.getHours();
			var minute = ISO_string_to_date.getMinutes();
			var second = ISO_string_to_date.getSeconds();
			
			var JSON_string = JSON.stringify({hour: hours ,
			minute: minute, 
			second: second});
			//JSON formatted time.
			//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
			
			console.log(JSON_string + ISO_without_key + ISO_without_ms_s + ISO_without_ms);
			
			res.write(JSON_string + ISO_without_key + ISO_without_ms_s + ISO_without_ms);
			res.end();
		}	
		else if(path === '/api/unixtime') {
			res.writeHead(200, {'Content-Type':'application/json'});
			
			var url_object = url.parse(req.url);
			
			var query_obj = url_object.query; //Querystring object from url object
			// file:///C:/Users/Phuong/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost
			var query_as_string = qs.stringify(query_obj);
			
			var ISO_without_key = query_as_string.replace('iso=','');
			
			// var lengthOfISO = ISO_without_key.length();
			// var indexOfperiod = ISO_without_key.indexOf(.);
			
			var startSLICEpos = /.\U+002E/; //(bullet)//RegEx obj http://www.w3schools.com/jsref/jsref_regexp_m.asp
			//var endSLICEpos = /Z$/;
			
			var ISO_without_ms_s = ISO_without_key.match(startSLICEpos);
			
			//var ISO_without_ms_s = ISO_without_key.search(/?=./);
			
			var ISO_without_ms = ISO_without_key.replace(ISO_without_ms_s,'');
			
			
			//var ISO_string_to_date = convertISO8601toDate(ISO_without_key);
			var ISO_string_to_date = new Date(ISO_without_ms);
			//Uses ISO_format_time string creates into a date object
			
			
			var Ms_from_1970_to_date = ISO_string_to_date.getTime();
			//http://www.w3schools.com/jsref/jsref_gettime.asp
			
			var JSON_string2 = JSON.stringify({unixtime: Ms_from_1970_to_date});
			//console.log(url_object); 
			res.write(JSON_string2);
			res.end();
		}else{
			res.end();
		}
	}
});
server.listen(port);