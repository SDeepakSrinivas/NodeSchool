var mymodule = require('./mymodule.js');
var folder = process.argv[2];
var ext = process.argv[3];
mymodule(folder,ext,function(err,list) {
	for(var i = 0;i<list.length;i++)
		console.log(list[i]);
});
