var express = require('express'),
bodyParser = require('body-parser'),
app = express(),
server;

var store = {
	home:{
		page:'Our Supper Awesome App',
		content:'Home Page Content'
	},
	about:{
		page:'About Page',
		content:'About Page Content'
	},
	downloads:{
		page:'Downloads Page',
		content:'Downloads Page Content'
	},
	profile:{
		page:'Profile Page',
		content:'Profile Page Content'
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
app.use(bodyParser.urlencoded({extended:'true'}));

app.route('/form')
.get(function(req, res){
	res.render('form',{
		page: 'Form Page',
		links: storeKeys
	});
})
.post(function(req, res){
	var data = req.body;
	if(data.pageurl && data.pagename && data.pagecontent){
		store[data.pageurl] = {
			page : data.pagename,
			content : data.pagecontent
		}
		storeKeys = Object.keys(store);
	}
	res.redirect('/');
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