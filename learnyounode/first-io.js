var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFileSync(path);
var file = buf.toString();
var lines = file.split('\n');
console.log(lines.length - 1); 
