//node socket-server.js
var socket = require('socket.io');
var express = require('express');

var app = express();
var io = socket.listen(app.listen(8080));

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index2.html');
});

io.sockets.on('connection',function(client){
	console.log('Connected');
	client.emit('message', {hello : 'Guest'});
	client.on('message',function(data){
		console.log(data);
	});
});
