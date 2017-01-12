var events = require('events');

var EventEmitter = events.EventEmitter;

var test = new EventEmitter();
test.on('myEvent', onMyEvent);

function onMyEvent(param){
	console.log(param);
}

test.emit('myEvent', 'Test number one');
test.emit('myEvent', 'Test number two');
