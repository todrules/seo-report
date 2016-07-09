var loopback = require('loopback');
var boot = require('loopback-boot');
require('events').EventEmitter.prototype._maxListeners = 100;
var app = module.exports = loopback();

//var gapi = app.models.Gapi;
//var id =  2;
//app.models.Gapi.searchAnalytics(id);

var Mozscape = require('mozscape').Mozscape;
var accessId = 'mozscape-9ba53c0ae1';
var secretKey = 'e4758ef220a48871b78d1c03d1a5f712';

var moz = new Mozscape(accessId, secretKey);
moz.urlMetrics('moz.com', ['page_authority', 'domain_authority', 'mozRank', 'links', 'external_links', 'title', 'url'], function(err, res) {
	if (err) {
		console.log('error');
		console.log(err);
		return;
	}
	console.log('success');
	console.log(res);
});

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
