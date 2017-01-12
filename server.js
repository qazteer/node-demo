var http = require('http');

http.createServer(function(request, response){
	console.log('Server listen');
	response.writeHead(200);
	request.on('data',function(data){
		console.log('Запрос от клиента: ', data.toString());
		response.write('Ответ сервера: ' + data.toString());
	});
	request.on('end',function(){
		console.log('The end');
	});

	
}).listen(8080);
