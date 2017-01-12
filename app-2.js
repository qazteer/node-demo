var http = require('http');
//var fs = require('fs');

var server = http.createServer().listen(8080);
server.on('request', function(req, res){
	if(req.url == '/stop'){
		req.connection.destroy();
		server.close();
	}
	res.writeHead(200);
	res.write('Hello ');
	res.end('The end');
});

server.on('request', function(req, res){
	console.log('Request:', req.url);
});

/*server.on('listening', function(){
	console.log('listen on 8080..');
});*/

//console.log('listen on 8080..');