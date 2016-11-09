var fs = require('fs');
var path = require('path');
module.exports = function(folder,ext,callback) {
	fs.readdir(folder,function cb(err,list) {
		if(err)
			return callback(err);
		var ext1 = '.'+ext;
		var list1=[];
		for(var i = 0; i<list.length; i++){
			if(path.extname(list[i]) == ext1 )
				list1.push(list[i]);
		}
		callback(err,list1);
	});
}
