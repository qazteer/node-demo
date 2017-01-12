//http://localhost:8081/?name=john
var http = require('http');
var url = require('url');

http.createServer(function(request, response){
	var data = '';
	var input = url.parse(request.url);
	if(input.query){
		var q = input.query.split("=");
		switch(q[1].toLowerCase()){
			case 'john' : data = '[{"name":"Jphn Smit","age":25,"admin":true}]';
			break;
			case 'mike' : data = '[{"name":"Mike Mitchel","age":35,"admin":false}]';
			break;
			default : data = '[{"name":"Unknown","age":0,"admin":false}]';
			break;
		}
	}
	response.writeHead(200, {"Content-type":"application/json"});	
	response.write(data.toString());
	response.end();
}).listen(8081);
