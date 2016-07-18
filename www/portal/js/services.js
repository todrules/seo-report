angular.module('app.services', [])

.factory('ErrorService', function() {
	var error = {};
	error.handleError = function(err) {
		var err = err;
		if(err) {
			console.log(err);
			return err;
		} else {
			return;
		}
	};
	return error;
})



.factory('AuthService', ['$window', '$rootScope', '$state', function($window, $rootScope, $state) {
   var auth = {};
   auth.logout = function() {
	   $window.gapi.analytics.auth.signOut();
	   $rootScope.authenticated = false;
	   $rootScope.user = null;
	   $state.go('logout');
   };
   return auth;
}])

.factory('DateService', function() {

   var dates = [];
   var today = new Date();
   var lastMonth = today.getMonth() - 1;
   var year = today.getFullYear();
   var filler = '-';
   var dayfiller = '-';
   var startDate = '';
   var endDate = '';
   var lastDay;

   dates.getLastMonth = function() {
	   if(lastMonth == -1) {
		   lastMonth = 12;
		   year = year - 1;
	   }
	   lastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
	   if((lastMonth + 1) < 10) {
		   filler = '-0';
	   }
	   startDate = year + filler + (lastMonth + 1) + '-' + '01';
	   endDate = year + filler + (lastMonth + 1) + '-' + lastDay;

	   dates = [startDate, endDate];
	   return dates;
   };

   return dates;
})
	   
.factory('StorageService', function() {

   var factory = {};

   var company = {};
   var companies = [];
   var error = '';
   var keywords = [];
   var keyword = {};
   companies.keywords = [];
   companies.competitors = [];

   factory.getStoredCompany = function(id) {
	   var id = id;
	   for(var i = 0; i < companies.length; i++) {
		   if(id == companies[i].id) {
			   return companies[i];
		   }
	   }
	   return false;
   }

   factory.getAllStoredCompanies = function() {
	   if(companies.length > 0) {
		   return companies;
	   } else {
		   return null;
	   }

   }

   factory.checkStoredCompany = function(id) {
	   var id = id;
	   for(var i = 0; i < companies.length; i++) {
		   if(id == companies[i].id) {
			   return true;
		   }
	   }
	   return false;
   }

   factory.populateCompanies = function(companies) {
	   var handler = companies;

	   if(companies.length > 0) {
		   companies = [];
	   }
	   for(var i = 0; i < handler.length; i++) {
		   companies.push(handler[i]);
		   return true;
	   }
	   return false;
   }

   factory.addCompany = function(company) {
	   var handler = company;
	   var checker = checkStoredCompany(handler.id);
	   if(checker == true) {
		   return false;
	   } else {
		   companies.push(handler);
		   return true;
	   }
   }

   factory.getStoredKeywords = function(companyId) {
	   var id = companyId;
	   for(var i = 0; i < companies.length; i++) {
		   if(id == companies[i].id) {
			   return companies[i].keywords;
		   }
	   }
	   return false;
   }

   factory.getStoredCompetitors = function(companyId) {
	   var id = companyId;
	   for(var i = 0; i < companies.length; i++) {
		   if(id == companies[i].id) {
			   return companies[i].competitors;
		   }
	   }
	   return false;
   }

   factory.checkCompanies = function() {
	   if(companies.length > 0) {
		   return true;
	   }
	   return false;
   }

   factory.saveStoredKeywords = function(companyId, keywords) {
	   var id = companyId;
	   var handler = keywords;
	   for(var i = 0; i < companies.length; i++) {
		   if(id == companies[i].id) {
			   companies[i].keywords = [];
			   companies[i].keywords.push(handler);
			   return true;
		   }
	   }
	   return false;
   }

   factory.saveStoredCompetitors = function(companyId, competitors) {
	   var id = companyId;
	   var handler = competitors;
	   for(var i = 0; i < companies.length; i++) {
		   if(id == companies[i].id) {
			   companies[i].competitors = [];
			   companies[i].competitors.push(handler);
			   return true;
		   }
	   }
	   return false;
   }

   return factory;
})

.factory('CompanyService', ['Company', 'StorageService', function(Company, SS) {

   var company = {};
   var companies = [];
   var error = '';

   company.getAll = function() {
	   var checked = SS.checkCompanies();
	   if(checked === false) {
		   Company.find(
		   {filter: {include: [{keywords: 'keywordMetrics'}, {competitors: 'competitorMetrics'}, 'metrics']}})
				  .$promise.then(function(res) {
		
			   var handler = res;
			   return handler;
		   }, function(err) {
			   return err;
		   })
	   } else {
		   return SS.getAllStoredCompanies();
	   }
   };

   company.getCompanyById = function(id) {
	   if(id === undefined) {
		   error = 'No company Id.';
		   return error;
	   } else {
		   var id = id;
		   var job = SS.getStoredCompany(id);
		   if(job == false) {
			   Company.findById({id: id},
			   {include: [{keywords: 'keywordMetrics'}, {competitors: 'competitorMetrics'}, 'metrics']}).$promise.then(
			   function(res) {
				   var handler = res;
				   if(handler.length > 0) {
					   SS.addCompany(handler);
					   return handler;
				   }
			   }, function(err) {
				   return err;
			   })
		   } else {
			   return job;
		   }
	   }

   }

   return company;
}])

.factory('KeywordService', ['Company', 'Keyword', 'StorageService', function(Company, Keyword, SS) {

   var keywords = [];
   var keyword = {};
   var error = '';
   var companies = [];
   companies.keywords = [];

   keyword.getKeywords = function(companyId) {
	   if(companyId === undefined) {
		   return error;
	   }
	   var id = companyId;
	   var job = SS.getStoredKeywords(id);
	   if(job.length > 0) {
		   return job;
	   }
	   Company.keywords({id: id}).$promise.then(function(res) {
		   var handler = res;
		   if(handler.length > 0) {
			   SS.saveStoredKeywords(id, handler);
			   return handler;
		   }
	   }, function(err) {
		   return err;
	   })
   }

   keyword.getKeywordMetrics = function(companyId) {
	   if(companyId === undefined) {
		   return error;
	   }
	   var id = companyId;
	   var job = SS.getStoredKeywords(id);
	   if(job.length > 0) {
		   return job;
	   }
	   Company.keywordMetrics({id: id}, {include: 'keywords'}).$promise.then(function(res) {
		   var handler = res;
		   if(handler.length > 0) {
			   SS.saveStoredKeywords(id, handler);
			   return handler;
		   }
	   }, function(err) {
		   return err;
	   })
   }

}])

.factory('CompetitorService', ['Company', 'Keyword', 'StorageService', function(Company, Keyword, SS) {

   var keywords = [];
   var keyword = {};
   var error = '';
   var companies = [];
   companies.keywords = [];
   var competitors = [];
   companies.competitors = [];

   competitors.getCompetitors = function(companyId) {
	   if(companyId === undefined) {
		   return error;
	   }
	   var id = companyId;
	   var job = SS.getStoredCompetitors(id);
	   if(job.length > 0) {
		   return job;
	   }
	   Company.competitors({id: id}).$promise.then(function(res) {
		   var handler = res;
		   if(handler.length > 0) {
			   SS.saveStoredCompetitors(id, handler);
			   return handler;
		   }
	   }, function(err) {
		   return err;
	   })
   }

   competitors.getCompetitorMetrics = function(companyId) {
	   if(companyId === undefined) {
		   return error;
	   }
	   var id = companyId;
	   var job = SS.getStoredCompetitors(id);
	   if(job.length > 0) {
		   return job;
	   }
	   Company.competitorMetrics({id: id}, {include: 'competitors'}).$promise.then(function(res) {
		   var handler = res;
		   if(handler.length > 0) {
			   SS.saveStoredCompetitors(id, handler);
			   return handler;
		   }
	   }, function(err) {
		   return err;
	   })
   }

   return competitors;

}])

.service('asyncService', function($http, $q) {
   return {
	   loadDataFromUrls: function(urls) {
		   var deferred = $q.defer();
		   var urlCalls = [];
		   angular.forEach(urls, function(url) {
			   urlCalls.push($http.get(url.url));
		   });
		   // they may, in fact, all be done, but this
		   // executes the callbacks in then, once they are
		   // completely finished.
		   $q.all(urlCalls)
			 .then(function(results) {
				 deferred.resolve(JSON.stringify(results))
			 }, function(errors) {
				 deferred.reject(errors);
			 }, function(updates) {
				 deferred.update(updates);
			 });
		   return deferred.promise;
	   }
   };
})

.service('StatService', ['GApi', 'DateService', '$q', function(GApi, DateService, $q) {

   var dates = DateService.getLastMonth();
   var params = {
	   startDate: dates[0], endDate: dates[1], dimensions: ["date"]
   }
   var url = '';
   var dataObj = {
	   clicks: null,
	   impressions: null,
	   ctr: null,
	   position: null,
	   sessions: null,
	   bounces: null,
	   bouncerate: null,
	   duration: null,
	   pageviews: null,
	   ppv: null,
	   uniqueviews: null,
	   pageload: null
   };
   var statChartObj = {
	   clicks: {
		   value: null, displayName: 'Clicks', fieldName: 'clicks', analyticsTag: null
	   }, impressions: {
		   value: null, displayName: 'Impressions', fieldName: 'impressions', analyticsTag: null
	   }, ctr: {
		   value: null, displayName: 'CTR', fieldName: 'ctr', analyticsTag: null
	   }, position: {
		   value: null, displayName: 'Position', fieldName: 'position', analyticsTag: null
	   }, sessions: {
		   value: null, displayName: 'Sessions', fieldName: 'sessions', analyticsTag: 'ga:sessions'
	   }, bounces: {
		   value: null, displayName: 'Bounces', fieldName: 'bounces', analyticsTag: 'ga:bounces'
	   }, bouncerate: {
		   value: null, displayName: 'Bounce Rate', fieldName: 'bouncerate', analyticsTag: 'ga:bounceRate'
	   }, duration: {
		   value: null, displayName: 'Duration', fieldName: 'duration', analyticsTag: 'ga:avgSessionDuration'
	   }, pageviews: {
		   value: null, displayName: 'Page Views', fieldName: 'pageviews', analyticsTag: 'ga:pageviews'
	   }, ppv: {
		   value: null, displayName: 'Pages / Session', fieldName: 'ppv', analyticsTag: 'ga:pageviewsPerSession'
	   }, uniqueviews: {
		   value: null,
		   displayName: 'Unique Views',
		   fieldName: 'uniqueviews',
		   analyticsTag: 'ga:uniquePageviews'
	   }, pageload: {
		   value: null, displayName: 'Page Load', fieldName: 'pageload', analyticsTag: 'ga:avgPageLoadTime'
	   }
   };

   function getSearchAnalytics(url) {
	   var deferred = $q.defer();
	   url = url;
	   GApi.executeAuth('webmasters', 'searchanalytics.query', {
		   siteUrl: url, resource: params
	   })
		   .then(function(resp) {
			   deferred.resolve(resp);
	
		   }, function(err) {
			   var error = err;
			   if(typeof error === 'undefined') {
				   error = false;
			   }
			   deferred.reject(error);
		   });
	   return deferred.promise;
   }

   function getGoogleAnalytics(id) {
	   var deferred = $q.defer();
	   var id = id;
	   var webmaster;
	   var analytics;
	   var urlCalls;
	   var metrics = ['ga:sessions, ga:bounces, ga:bounceRate, ga:avgSessionDuration, ga:pageviews, ga:pageviewsPerSession, ga:uniquePageviews, ga:avgPageLoadTime'];
	   var options = {
		   ids: id,
		   metrics: metrics,
		   dimensions: [],
		   'start-date': dates[0],
		   'end-date': dates[1],
		   'max-results': 100
	   }
	   url = url;

	   GApi.executeAuth('analytics', 'data.ga.get', {
		   ids: id,
		   metrics: metrics,
		   dimensions: [],
		   'start-date': dates[0],
		   'end-date': dates[1],
		   'max-results': 100
	
	   })

		   .then(function(resp) {
			   deferred.resolve(resp);
	
		   }, function(err) {
			   var error = err;
			   if(typeof error === 'undefined') {
				   error = false;
			   }
			   deferred.reject(error);
		   });
	   return deferred.promise;
   }

   return {
	   getWebmasterData: function(url) {
		   var deferred = $q.defer();
		   getSearchAnalytics(url)
	
		   .then(function(resp) {
			   deferred.resolve(resp);
		
		   }, function(err) {
			   var error = err;
			   if(typeof error === 'undefined') {
				   error = false;
			   }
			   deferred.reject(error);
		   });
		   return deferred.promise;
	   }, getAnalyticsData: function(id) {
		   var deferred = $q.defer();
		   getGoogleAnalytics(id)
	
		   .then(function(resp) {
			   deferred.resolve(resp);
		
		   }, function(err) {
			   var error = err;
			   if(typeof error === 'undefined') {
				   error = false;
			   }
			   deferred.reject(error);
		   });
		   return deferred.promise;
	   }, getDataObj: function() {
		   var obj = dataObj;
		   return obj;
	   }, getChartObj: function() {
		   var obj = statChartObj;
		   return obj;
	   }

   };
}])

.factory('menu', ['$location', '$rootScope', function($location, $rootScope) {

   var sections = [{
	   name: 'Home', state: 'home', type: 'link'
   }];
   sections.push({
	   name: 'View Client Profiles', state: 'clients', type: 'link'
   });
   sections.push({
	   name: 'View Reports', state: 'viewReports', type: 'link'
   });
   sections.push({
	   name: 'Analytics', state: 'analytics', type: 'link'
   });
   sections.push({
	   name: 'Page Speed', state: 'pageSpeed', type: 'link'
   });
   sections.push({
	   name: ' ', state: ' ', type: 'link'
   });
   sections.push({
	   name: 'Manage Clients', state: 'editClient', type: 'link'
   });
   sections.push({
	   name: 'Manage Data', state: 'management', type: 'link'
   });
   sections.push({
	   name: 'Upload Reports', state: 'uploadReports', type: 'link'
   });
   sections.push({
	   name: 'Moz', state: 'moz', type: 'link'
   });
	sections.push({
		name: 'New Report', state: 'newreport', type: 'link'
	});

   var self;

   return self = {
	   sections: sections,

	   toggleSelectSection: function(section) {
		   self.openedSection = (self.openedSection === section ? null : section);
	   }, isSectionSelected: function(section) {
		   return self.openedSection === section;
	   },

	   selectPage: function(section, page) {
		   page && page.url && $location.path(page.url);
		   self.currentSection = section;
		   self.currentPage = page;
	   }
   };

   function sortByHumanName(a, b) {
	   return (a.humanName < b.humanName) ? -1 : (a.humanName > b.humanName) ? 1 : 0;
   }

}])

.factory('DashConfig', function() {

   var dashconfig = {};

   dashconfig.getKeyGridConfig = function() {
	   var reportMetrics = [{name: 'keyword', headerCellClass: 'plain'}, {
		   name: 'minVolume',
		   headerCellClass: 'plain',
		   headerTooltip: 'How often a word or' + ' phrase is' + ' searched for on' + ' Google each month.'
	   }, {
		   name: 'maxVolume',
		   headerCellClass: 'plain',
		   headerTooltip: 'How often a word or phrase is searched for on' + ' Google each month.'
	   }, {
		   name: 'difficulty',
		   headerCellClass: 'plain',
		   headerTooltip: 'Score from 0 to 100 that estimates how' + ' difficult it is to rank higher than current competitors on the first page of results.'
	   }, {
		   name: 'opportunity',
		   headerCellClass: 'plain',
		   headerTooltip: 'Score from 0 to 100 that estimates the' + ' relative click-through rate of organic web results for this keyword.'
	   }, {
		   name: 'potential',
		   headerCellClass: 'plain',
		   headerTooltip: 'Score from 0 to 100. The higher the better.' + ' This' + ' score is calculated from all the other scores.',
		   sort: {direction: 'desc', priority: 0}
	   }];

	   var gridOptions = {
		   enableSorting: true,
		   columnDefs: reportMetrics,
		   enableRowSelection: true,
		   enableRowHeaderSelection: false,
		   multiSelect: false,
		   modifierKeysToMultiSelect: false,
		   noUnselect: true
	   }

	   return gridOptions;
   }

   dashconfig.getCompGridConfig = function() {
	   var compMetrics = [{name: 'competitor', headerCellClass: 'plain'}, {
		   name: 'domainAuthority',
		   headerCellClass: 'plain',
		   sort: {direction: 'desc', priority: 0},
		   headerTooltip: 'Score from 0 to 100, predicting how well a website will rank on search engines. This metric is calculated based on the other metrics, like' + ' MozRank and MozTrust.'
	   }, {
		   name: 'mozRank',
		   headerCellClass: 'plain',
		   headerTooltip: 'Logarithmic score from 0 to 10, making it easy' + ' to go from 0 to 3 but difficult to move from 8 to 9. An average MozRank is 3. You can raise this score by' + ' improving the quality of incoming links.'
	   }, {
		   name: 'mozTrust',
		   headerCellClass: 'plain',
		   headerTooltip: 'Logarithmic score from 0 to 10, making it easy' + ' to go from 0 to 3 but difficult to move from 8 to 9. It is determined by the distance of a webpage from a' + ' trusted seed site.'
	   }, {name: 'followedLinks', headerCellClass: 'plain'}, {
		   name: 'totalExternalLinks', headerCellClass: 'plain'
	   }, {name: 'linkingRootDomains', headerCellClass: 'plain'}];

	   var compOptions = {
		   enableSorting: true,
		   columnDefs: compMetrics,
		   enableRowSelection: true,
		   enableRowHeaderSelection: false,
		   multiSelect: false,
		   modifierKeysToMultiSelect: false,
		   noUnselect: true
	   }

	   return compOptions;
   }

   dashconfig.getConfig = function(keystr, diff, opp, pot, partial, diffArr, oppArr, potArr, key) {
	   var keystr = keystr;
	   var diff = diff;
	   var opp = opp;
	   var pot = pot;
	   var partial = partial;
	   var diffArr = diffArr;
	   var oppArr = oppArr;
	   var potArr = potArr;
	   var key = key;

	   var thisconfig = {
		   backgroundColor: '#f7f7f7', globals: {
			   fontFamily: 'Roboto'
		   }, gui: {
			   behaviors: [{id: "DownloadPDF", enabled: "none"}, {
				   id: "CrosshairHide", enabled: "none"
			   }, {id: "Reload", enabled: "none"}, {id: "Print", enabled: "none"}, {
				   id: "DownloadSVG", enabled: "none"
			   }, {id: "ViewSource", enabled: "none"}, {id: "ViewPNG", enabled: "none"}]
		   }, graphset: [{
			   type: null, x: '2.25%', y: '1%', id: 'keyChart', backgroundColor: 'none', title: {
				   text: key, textAlign: 'left', fontSize: '24px', fontColor: '#401A7F', backgroundColor: 'none'
			   }
		   }, {
			   type: 'pie',
			   height: 180,
			   width: 180,
			   x: '20',
			   y: '50',
			   id: 'diffChart',
			   backgroundColor: '#ffffff',
			   borderRadius: 4,
			   title: {
				   text: 'Difficulty',
				   textAlign: 'left',
				   backgroundColor: 'none',
				   fontColor: '#666',
				   fontSize: '16px',
				   offsetY: '10%',
				   offsetX: '10%'
			   },
			   valueBox: {
				   visible: true
			   },
			   plotarea: {
				   margin: "20% 0% 0% 0%"
			   },
			   plot: {
				   slice: 50, refAngle: 270, detach: false, hoverState: {
					   visible: false
				   }, valueBox: {
					   visible: true,
					   type: 'first',
					   connected: false,
					   placement: 'center',
					   text: '%v',
					   fontColor: "#666",
					   fontSize: "28px",
					   fontFamily: 'Roboto',
					   rules: [{
						   rule: '%p != 0', visible: false
					   }]
				   }, animation: {
					   delay: 0, effect: 2, speed: 1000, method: 5, sequence: 1
				   }
			   },
			   series: [{
				   values: [diff], text: "Difficulty", backgroundColor: "#228CDB", borderWidth: "0px", shadow: 0
			   }, {
				   values: [(100 - diff)],
				   backgroundColor: "#dadada",
				   alpha: "0.5",
				   borderColor: "#dadada",
				   borderWidth: "1px",
				   shadow: 0
			   }]
		   }, {
			   type: "pie",
			   height: 180,
			   width: 180,
			   x: 220,
			   y: 50,
			   id: 'oppChart',
			   backgroundColor: '#ffffff',
			   borderRadius: 4,
			   title: {
				   text: 'Opportunity',
				   textAlign: 'left',
				   backgroundColor: 'none',
				   fontColor: '#666',
				   fontSize: '16px',
				   offsetY: '10%',
				   offsetX: '10%'
			   },
			   'value-box': {
				   'visible': true
			   },
			   plotarea: {
				   margin: '20% 0% 0% 0%'
			   },
			   plot: {
				   slice: 50, refAngle: 270, detach: false, hoverState: {
					   visible: false
				   }, valueBox: {
					   visible: true,
					   type: 'first',
					   connected: false,
					   placement: 'center',
					   text: '%v',
					   fontColor: "#666",
					   fontSize: "28px",
					   fontFamily: 'Roboto',
					   rules: [{
						   rule: '%p != 0', visible: false
					   }]
				   }, animation: {
					   delay: 0, effect: 2, speed: 1000, method: 5, sequence: 1
				   }
			   },
			   series: [{
				   values: [opp], text: 'Opportunity', backgroundColor: '#7CC900', borderWidth: '0px', shadow: 0
			   }, {
				   values: [(100 - opp)],
				   backgroundColor: '#dadada',
				   alpha: 0.5,
				   borderColor: '#dadada',
				   borderWidth: '1px',
				   shadow: 0
			   }]
		   }, {
			   type: 'pie',
			   height: 180,
			   width: 180,
			   x: 420,
			   y: 50,
			   id: 'potChart',
			   backgroundColor: '#ffffff',
			   borderRadius: 4,
			   title: {
				   text: 'Potential',
				   textAlign: 'left',
				   backgroundColor: 'none',
				   fontColor: '#666666',
				   fontSize: '16px',
				   offsetY: '10%',
				   offsetX: '10%'
			   },
			   valueBox: {
				   visible: true
			   },
			   plotarea: {
				   margin: "20% 0% 0% 0%"
			   },
			   plot: {
				   slice: 50, refAngle: 270, detach: false, hoverState: {
					   visible: false
				   }, valueBox: {
					   visible: true,
					   type: 'first',
					   connected: false,
					   placement: 'center',
					   text: '%v',
					   fontColor: "#666",
					   fontSize: "28px",
					   fontFamily: 'Roboto',
					   rules: [{
						   rule: '%p != 0', visible: false
					   }]
				   }, animation: {
					   delay: 0, effect: 2, speed: 1000, method: 5, sequence: 1
				   }
			   },
			   series: [{
				   values: [pot], text: "Potential", backgroundColor: "#401A7F", borderWidth: "0px", shadow: 0
			   }, {
				   values: [(100 - pot)],
				   backgroundColor: "#dadada",
				   alpha: "0.5",
				   borderColor: "#dadada",
				   borderWidth: "1px",
				   shadow: 0
			   }]
		   }, {
			   type: 'wordcloud',
			   height: 250,
			   width: 580,
			   x: 20,
			   y: 250,
			   backgroundColor: '#ffffff',
			   borderRadius: 4,
			   title: {
				   text: 'KeyWord Cloud',
				   textAlign: 'left',
				   backgroundColor: 'none',
				   fontColor: '#666666',
				   fontSize: '16px',
				   offsetY: '10%',
				   offsetX: '10%'
			   },
			   plotarea: {
				   margin: '0'
			   },
			   options: {
				   "max-items": 40,
				   "font-family": "Roboto",
				   "rotate": true,
				   "min-length": 4,
				   "min-font-size": "9px",
				   "max-font-size": "40px",
				   "color-type": "palette",
				   palette: ["#004884", "#65A300", "#3A1772", "#228CDB", "#65A300", "#003A6A", "#1D0B39", "#999"],
				   text: keystr
			   }
		   }, {
			   type: 'bar',
			   height: 440,
			   width: '55%',
			   x: 620,
			   y: 50,
			   backgroundColor: '#ffffff',
			   borderRadius: 4,
			   legend: {
				   toggleAction: 'remove',
				   layout: 'x3',
				   x: '40%',
				   shadow: false,
				   borderColor: 'none',
				   backgroundColor: 'none',
				   item: {
					   fontColor: '#666666'
				   },
				   marker: {
					   type: 'circle', borderWidth: 0
				   }
			   },
			   plot: {
				   stacked: true, stackType: 'normal', backgroundColor: '#666666', animation: {
					   effect: 4
				   }, tooltip: {
					   text: "%kt\n%plot-text: %vt",
					   borderRadius: '4px',
					   padding: '10px',
					   fontSize: '14px',
					   fontStyle: 'bold',
					   callout: true,
					   wrapText: true,
					   alpha: 0.9
				   }
			   },
			   plotarea: {
				   margin: '15% 3.5% 0% 7.5%'
			   },
			   scaleX: {
				   values: partial, lineColor: '#adadad', lineWidth: '1px', visible: false, guide: {
					   visible: false
				   }, items: {
					   visible: false, alpha: 0
				   }, tick: {
					   visible: false
				   }
			   },
			   scaleY: {
				   values: '0:300:100', lineColor: 'none', item: {
					   fontSize: '10px', offsetX: '2%'
				   }, guide: {
					   lineStyle: 'solid', lineColor: '#adadad'
				   }, tick: {
					   visible: false
				   }
			   },
			   series: [{
				   text: 'Difficulty', backgroundColor: '#228CDB', values: diffArr
			   }, {
				   text: 'Opportunity', values: oppArr, backgroundColor: '#7CC900',
			   }, {
				   text: 'Potential', values: potArr, backgroundColor: '#401A7F',
			   }]
		   }]
	   };

	   return thisconfig;
   }

   dashconfig.getCompConfig = function(data, scale) {
	   var scale = scale;
	   var data = data;

	   var chartConfig = {
		   type: 'bar',
		   x: 0,
		   y: 0,
		   height: 280,
		   width: 300,
		   backgroundColor: '#ffffff',
		   borderRadius: 4,
		   legend: {
			   toggleAction: 'remove',
			   layout: 'x3',
			   x: '40%',
			   shadow: false,
			   borderColor: 'none',
			   backgroundColor: 'none',
			   item: {
				   fontColor: '#666666'
			   }
		   },
		   plot: {
			   tooltip: {
				   text: "%kt\n%plot-text: %vt",
				   borderRadius: '4px',
				   padding: '10px',
				   fontSize: '14px',
				   fontStyle: 'bold',
				   callout: true,
				   wrapText: true,
				   alpha: 0.9
			   }, styles: ["#004884", "#65A300", "#3A1772", "#228CDB", "#65A300", "#003A6A", "#1D0B39", "#999"]
		   },
		   plotarea: {
			   margin: '5% 5% 5% 5%'
		   },
		   scaleX: {
			   lineColor: '#adadad', lineWidth: '1px', visible: false, guide: {
				   visible: false
			   },
		
			   items: {
				   visible: false, alpha: 0
			   }, tick: {
				   visible: false
			   }
		   },
		   scaleY: {
			   values: scale, lineColor: 'none', item: {
				   fontSize: '10px', offsetX: '2%'
			   }, guide: {
				   lineStyle: 'solid', lineColor: '#adadad'
			   }, tick: {
				   visible: false
			   }
		   },
		   series: [{
			   values: data
		   }]
	   }

	   return chartConfig;
   }

   return dashconfig;

});
