var http = require('http');
var bl = require('bl');

http.get(process.argv[2],function callback(response) {
	
	response.pipe(bl(function(err,data) {
		if(err)
			console.log(err);
		var str = (data.toString());
		console.log(str.length);
		console.log(str);
	}));
});
