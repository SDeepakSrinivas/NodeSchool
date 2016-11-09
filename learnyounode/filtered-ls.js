var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var ext = '.'+ process.argv[3];
fs.readdir(folder,function callback(err,list) {
	if(err) {
		console.log(err);
	}
	for(var i = 0;i<list.length;i++) {
		if(path.extname(list[i].toString())==ext)
			console.log(list[i]);	
	}
});
