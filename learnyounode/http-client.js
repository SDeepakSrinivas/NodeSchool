var http = require('http');
http.get(process.argv[2],function callback(response) {
	response.on('data',function cb(data) {
		console.log(data.toString());
	});
});
