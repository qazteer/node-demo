var fs = require('fs');
var http = require('http'); 

http.createServer(function(req, res){
	res.writeHead(200, {'Content-type':'image/png'});
	var png = fs.createReadStream('robot.png');
	png.pipe(res);
}).listen(8080);

//var newFile = fs.createWriteStream('new-file.txt');
//file.pipe(newFile);
