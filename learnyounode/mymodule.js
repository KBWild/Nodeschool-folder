var makeitmodular = require('./makeitmodular.js');

var dir_name = process.argv[2];
var ext_filt_name = process.argv[3];

makeitmodular(dir_name,ext_filt_name,function(err,data){
	if(err)
	{
		return "An error has occurred from the makeitmodular.js module"
		+" here it is below" + err;
	}
	else{
		data.forEach(function(file) {
			console.log(file);
		})
	}
	
});