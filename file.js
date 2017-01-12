var fs = require('fs');

var file = fs.createReadStream('file.txt');
file.on('data', function(text){
	console.log(text.toString());
});
//var newFile = fs.createWriteStream('new-file.txt');
//file.pipe(newFile);
