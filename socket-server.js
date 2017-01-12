//node socket-server.js
var socket = require('socket.io');
var express = require('express');

var app = express();
var io = socket.listen(app.listen(8080));

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index2.html');
});

io.sockets.on('connection',function(client){
	//console.log('Connected');
	//client.emit('message', {hello : 'Guest'});
	client.on('message',function(data){
		//client.set('nickname',data);
		client.emit('hello', {hello : 'Hello, '+data});
		client.broadcast.emit('hello', {hello : 'Hello, from '+data});
		//io.sockets.emit('hello', {hello : 'Hello, everybody'});
	});
	client.on('disconnect',function(){
		io.sockets.emit('hello', {hello : 'One of us is enter!'});
	});
	client.on('new_message',function(data){
		client.emit('hello', {hello : 'Hello, '+data});
		//client.get('nickname',function(err, oldName){
			//client.broadcast.emit('hello', {hello : oldName + ' now is '+data});
		//});
		//client.set('nickname',data);
		//client.broadcast.emit('hello', {hello : 'Hello, from '+data});
	});
});
