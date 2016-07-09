'use strict';
var app = require('../../server/server');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var webmasters = google.webmasters('v3');
var analytics = google.analytics('v3');

var PRIVATE_KEY = '-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAs0QmbqJ1PKrtV5VHOnnFK/C6YvXleegcWCktTJz7weVs+F45Jro9PvZr0G87A6i+lurmL+JoWyGzdQndVml44ikO5DPTEN8JAEiVREvdRatVHBPafp+tIFNUIjx1EABZ9bn/tKJI1d6qJXvbYBhTslWKXAxBraMTgt6AehWKZq7bVYHa5qxNQwP+3FCZiHqY0zKHye1NsOKV1OPlRn7RC2qa/Zo+YRHbfN3lbfh5VqvMEpaB0zlhnGopCg7MxG5C2pAxXoTfQbMjDZl1dCYo+sn4Tpu1C54TwKH3gFvowhs0x8JRfgfJoeeNjLohXoy4GStNiml+sdQlsld4zllflQIDAQABAoIBACGN8Q+mUwFvEQviwjlcz55A6fJaCoD+BEgwNO1xOOJ7OiFnKZVpKMufPmD+YPJ3ZG1FPJ7b5yKftUKD/S0OgvT6MHJgjPJMfRfTfjURajJ/NmgSA0TOSI6Tal0aKeM73ZrUHNvHwJBfpENt4osjIo9v2X0PQj/pFV7anPu9CnHbmhtkrkC6jeJBql+CoYDmNecAKzXjhjPYhSiG+JU75zxaKKrdk7ObNNHt3AXI9gCsIwgNRcu4BcuZhA3zTzFW4VTI32jRFSyNP1IHJiD1kv0rUOdSK7GbPyY/tWsc/EjJyZDI3Y2miF7DrTrvEXGb+xznZNsL5c1GF0E3gpbee+UCgYEA8o/p3YsoB52ZO6PKDIicFfGW3NjXSAwm1H3Mww4TFdKUXyj0CeL5BcXLCntP2+efo5c7NwIK7bSAMKE/hUNYRE2DpKCdA08YRbqWJgXaxRPimuBNGFzEqVnGCtd/c/2Z7L3fL58M27mI538p0YU1+rHoaQy8Nx9sn3/j5RfNgV8CgYEAvTKOIENFXDBJ7Cl/9LUUpkqj6BYyVuD3lilHvDq0zgUIIY5be3F+epPPzd7VXM9lkS18766wVKbr4GvT/iLcYcTpPEGu4xJWgBjB/K7ZN4+KLvE81NNEVSWVdPAZeAHLtrdCBD9EmLGBD83oNEmq87pPMHyTcmmQ5Xp/BGsqf4sCgYEAvmfUCBG1YY0H/TYMZBxUkjEr4L7i9256iLEbrD3/I1FDIRPvxVcDbdGfGeJEhPXkbbFITVzwITpgqkvZpg2AW1WRsghWWIOdJRdbyAsueSer6TGLs0UXJ20ONfKF3RJE4v8FFMfAezbATiCXPh5Yiitfqh7SHF8xkF7/ERXHPvcCgYA/VRcCccJcE8YLCfFNRvh8meu4GwYK0w/N8k+TEMvJUyHfqbmx3tIJ0kTzky40/S/woxt5WC6qh53Z5/50ydKf37x7cTlLxa2y/5agMR+BW8lT4WkNjRMItaYMGPtNkrxQk5PDvDIIMxMS6UhbiHVzVOCBSJJK8E+Soai3H/B/9QKBgQDaoqNlgPcvuvCdpOce6OPD1pS/ygpnCpD6UmvqvUNTK/Y3LpPCe5iZZEgFQ7m7pKJIhCDGsjqbwIDsXC4NHp+mLkj/MkLywyRfoCYCHKdZqAobAB2JufzOkfXw8/sRlQKh/RvDVDpUTt4OwJc7DlyZncEXR5JaOb4jWBSVEqZ7Cg==\n-----END RSA PRIVATE KEY-----';
var CLIENT_EMAIL = 'seo-reporting@groove-hosting.iam.gserviceaccount.com';
var USER_EMAIL = 'todd@grooveio.com';
var USER_EMAIL2 = 'development@mobileassociates.com';
var SCOPES = ['https://www.googleapis.com/auth/analytics',
	'https://www.googleapis.com/auth/webmasters',
	'https://www.googleapis.com/auth/analytics.edit'];

module.exports = function(Gapi) {
	var OAuth2 = google.auth.OAuth2;

	var authClient = new google.auth.JWT(CLIENT_EMAIL, null, PRIVATE_KEY, SCOPES, USER_EMAIL);
	var altClient = new google.auth.JWT(CLIENT_EMAIL, null, PRIVATE_KEY, SCOPES, USER_EMAIL2);

	Gapi.auth = function(client, cb) {
		client.authorize(function(err, tokens) {
			if (err) {
				console.log(err);
				cb(err);
			} else {
				var reply = tokens;
				console.log(tokens);
				cb(null, reply);
			}
		});
	};
	
	Gapi.remoteMethod('auth', {
		accepts: {arg: 'client', required: true, type: 'object'},
		http: {path: '/auth', verb: 'get'},
		returns: {arg: 'reply', type: 'object'}
	})

	Gapi.searchAnalytics = function(compId) {
		var id = compId;
		var runMonthlyReport;
		runMonthlyReport = function(id) {
			var companyid = id;
			var company = Gapi.app.models.Company;

			company.findById(companyid, function(err, resp) {
				if(err) {
					console.log(err);
				} else {
					var reply = resp;
					var auth;
					if(reply.webmasterAcct === null || reply.webmasterAcct === '') {
						return null;
					} else if(reply.webmasterAcct == 'todd@grooveio.com') {
						var myAuth = Gapi.auth(authClient);
						var url = encodeURIComponent(reply.url);
						runMonthlyReport = getData(reply, url, myAuth);
						return runMonthlyReport;
					} else if(reply.webmasterAcct == 'development@mobileassociates.com') {
						var devAuth = Gapi.auth(altClient);
						var url = encodeURIComponent(reply.url);
						runMonthlyReport = getData(reply, url, devAuth);
						return runMonthlyReport;
					} else {
						return null;
					}
				}
			})

		}
		runMonthlyReport(id);
		var getData;
		getData = function(company, url, auth) {
			var company = company;
			var auth = auth;
			var url = url;
			var today = new Date();
			var lastMonth = today.getMonth() - 1;
			var year = today.getFullYear();
			if(lastMonth == -1) {
				lastMonth = 12;
				year = year - 1;
			}
			var lastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();

			var filler = '-';
			var dayfiller = '-';
			var startDate = '';
			if((lastMonth + 1) < 10) {
				filler = '-0';
			}
			startDate = year + filler + (lastMonth + 1) + '-' + '01';
			var endDate = year + filler + (lastMonth + 1) + '-' + lastDay;

			var params = {
				startDate: startDate,
				endDate: endDate,
				dimensions: ["date"]
			}
			webmasters.searchanalytics.query({
				auth: auth,
				siteUrl: url,
				resource: params
			}, function(err, resp) {
				console.log('url: ' + url);
				if(err) {
					console.log(err);
				} else {

					console.log('name: ' + company.name);
					var reply = resp;
					var clicks = null;
					var impressions = null;
					var ctr = null;
					var position = null;
					for(var i = 0; i < reply.rows.length; i++) {
						clicks = reply.rows[i].clicks + clicks;
						impressions = reply.rows[i].impressions + impressions;
						ctr = reply.rows[i].ctr + ctr;
						position = reply.rows[i].position + position;
					}
					var avgPosition = position / reply.rows.length;
					var avgCTR = ctr / reply.rows.length;
					var id = company.id;
					var now = new Date();
					var timestamp = new Date(now.getFullYear(), (now.getMonth() - 1), 1, 0, 0, 0, 0);
					console.log(timestamp);
					var options = {
						clicks: Number(clicks),
						impressions: Number(impressions),
						ctr: Number(avgCTR),
						position: Number(avgPosition),
						companyId: Number(id),
						month: timestamp
					}
					var companyMetric = Gapi.app.models.CompanyMetric;
					companyMetric.create(options, function(err, resp) {
						if (err) {
							console.log(err);
							return err;
						} else {
							console.log(resp);
							console.log('clicks: ' + clicks);
							console.log('impressions: ' + impressions);
							console.log('ctr: ' + avgCTR);
							console.log('position: ' + avgPosition);
							return success;
						}
					})

				}
			})
		}
	}

	Gapi.remoteMethod('searchAnalytics', {
		accepts: {arg: 'compId', required: true, type: 'string'},
		http: {path: '/searchAnalytics', verb: 'get'},
		returns: {arg: 'success', type: 'boolean'}
	})


};