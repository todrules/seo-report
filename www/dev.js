'use strict';
var http = require('http'),
fs = require('fs');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}
var num = getRandom(5000, 8100);
var serve = serveStatic("./www");
var server = http.createServer(function (req, res) {
	var done = finalhandler(req, res);
	serve(req, res, done);
	
}).listen(process.env.PORT || 8080, function () {
	console.log('Listening on http://localhost:' + server.address().port);
});
