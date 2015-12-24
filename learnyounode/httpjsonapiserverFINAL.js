
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

// Your server should listen on thhe port provided by the first argument to your pro
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



var server = http.createServer(function(req,res){
	if(req.method === 'GET'){		
		var path = url.parse(req.url).pathname;
		if(path === '/api/parsetime'){
			res.writeHead(200, {'Content-Type':'application/json'});
			
			var url_object = url.parse(req.url,true);
			
			var query_obj = url_object.query.iso; //Querystring object from url object
			// file:///C:/Users/Phuong/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost
			
			//var ISO_without_key = query_obj.replace('iso=','');
			
			//RegEx obj http://www.w3schools.com/jsref/jsref_regexp_m.asp
			
			//var ISO_without_ms_s = splitString(ISO_without_key,'.');
			
			//var ISO_without_ms = ISO_without_ms_s[0];
			
			var ISO_string_to_date = new Date(query_obj);
			//Uses ISO_format_time string creates into a date
			
			var hours = ISO_string_to_date.getHours();
			var minute = ISO_string_to_date.getMinutes();
			var second = ISO_string_to_date.getSeconds();
			
			var JSON_string = JSON.stringify({hour: hours ,
			minute: minute, 
			second: second});
			//JSON formatted time.
			//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
			
			res.write(JSON.stringify({hour: hours ,
			minute: minute, 
			second: second}));
			res.end();
		}	
		else if(path === '/api/unixtime') {
			res.writeHead(200, {'Content-Type':'application/json'});
			
			var url_object = url.parse(req.url,true);
			
			var query_obj = url_object.query.iso; //Querystring object from url object
			// file:///C:/Users/Phuong/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost
			
			//var ISO_without_key = query_obj.replace('iso=','');
			
			//RegEx obj http://www.w3schools.com/jsref/jsref_regexp_m.asp
			
			//var ISO_without_ms_s = splitString(query_obj,'.');
			
			//var ISO_without_ms = ISO_without_ms_s[0];
			
			var ISO_string_to_date = new Date(query_obj);
			//Uses ISO_format_time string creates into a date
		
			var Ms_from_1970_to_date = ISO_string_to_date.getTime();
			//http://www.w3schools.com/jsref/jsref_gettime.asp
			
			//var JSON_string2 = JSON.stringify({unixtime: Ms_from_1970_to_date});
		 
			res.write(JSON.stringify({unixtime: Ms_from_1970_to_date}));
			res.end();
		}else{
			res.end();
		}
	}
});
server.listen(port);


/*
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
)*/