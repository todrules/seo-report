var server = require('./server');
var ds = server.dataSources.mysqlConn;
var lbTables = ['Operator', 'Company', 'CompanyMetric', 'Competitor', 'CompetitorMetric', 'Keyword', 'KeywordMetric', 'LandingPage', 'Referrer', 'Query', 'Channel'];
ds.autoupdate(lbTables, function(er) {
	if (er) throw er;
	console.log('Loopback tables [' + lbTables + '] created in ', ds.adapter.name);
	ds.disconnect();
});