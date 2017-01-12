var url = require('url');
var request = require('request');
var express = require('express');
var ejs = require('ejs');
var MY_IP = '92.249.106.8';

var app = express();
app.listen(8080);
app.set('views', __dirname);

app.get('/google/feeds/for/:search', function(req, response){
	var search = req.params.search;
	var options = {
		protocol: 'http',
		host: 'ajax.googleapis.com',
		pathname: '/ajax/services/feed/find',
		query: {v:'1.0', userip:MY_IP, q:search}
	}

	var searchURL = url.format(options);

	request(searchURL, function(err, res, body){
		var feeds = JSON.parse(body);
		response.render('google-search.ejs',{feeds: feeds.responseData, keyword: search});
	});
});