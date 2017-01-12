var socket = require('socket.io');
var express = require('express');

var app = express();
var io = socket.listen(app.listen(8080));

app.get('/', function(req, res){
	res.send('Hello socket!');
});

io.sockets.on('connection',function(client){
	console.log('Connected');
});