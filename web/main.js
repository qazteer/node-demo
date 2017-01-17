var express = require('express');
var app = express(),
server;

var store = {
	home:{
		page:'Our Supper Awesome App',
		content:'Home'
	},
	about:{
		page:'About Page',
		content:'This you about'
	},
	downloads:{
		page:'Downloads Page',
		content:'This you downloads'
	},
	profile:{
		page:'Profile Page',
		content:'This you profile'
	}
}

var storeKeys = Object.keys(store);

app.disable('x-powered-by');
app.set('view engine', 'jade');

app.use(function(req, res, next){
	console.log('%s %s', req.method, req.url);
	next();
});

app.use(express.static(__dirname + '/public'));

app.get('/form', function(req, res){
	res.render('form',{
		page: 'Form page',
		links: storeKeys
	});
});

app.get('/:page?', function(req, res){
	var page = req.params.page, data;
	if(!page) page = 'home';
	data = store[page];
	if(!data) {
		res.redirect('/');
		return;
	}
	data.links = storeKeys;
	res.render('main',data);
});

app.listen(3000, function(){
	console.log("Listening on port 3000");
});