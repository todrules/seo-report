angular.module('app', ['ngMaterial', 'ui.router', 'app.controllers', 'app.directives', 'app.services', 'ngAnimate', 'ngAria', 'ngMessages'])

	.run(function() {

	})

	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	}])

	.config(function($mdIconProvider){

		$mdIconProvider
			.defaultIconSet("./assets/svg/avatars.svg", 128)
			.icon("menu"       , "./assets/svg/menu.svg"        , 24)
			.icon("share"      , "./assets/svg/share.svg"       , 24)
			.icon("google_plus", "./assets/svg/google_plus.svg" , 512)
			.icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
			.icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
			.icon("phone"      , "./assets/svg/phone.svg"       , 512);


	})

	.config(function($mdThemingProvider) {
		$mdThemingProvider.definePalette('myPrimary', {
			'50': 'CFDDBB',
			'100': 'C6D6AE',
			'200': 'BCCFA0',
			'300': 'B3C892',
			'400': 'A9C185',
			'500': 'A0BB77',
			'600': '96B46A',
			'700': '8DAD5C',
			'800': '82A352',
			'900': '78954B',
			'A100': 'CCEE97',
			'A200': 'A7C37C',
			'A400': '8AA167',
			'A700': '697B4E',
			'contrastDefaultColor': 'dark',    // whether, by default, text (contrast)
			// on this palette should be dark or light
			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
				'200', '300', '400', '500', '600'],
			'contrastLightColors': ['700', '800',
				'900', 'A100', 'A400', 'A700']    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.definePalette('myAccent', {
			'50': '80819D',
			'100': '757695',
			'200': '6A6C8A',
			'300': '62637F',
			'400': '595A73',
			'500': '505168',
			'600': '47485C',
			'700': '3E3F51',
			'800': '353645',
			'900': '2C2D3A',
			'A100': '77799B',
			'A200': '575870',
			'A400': '3C3D4E',
			'A700': '1F1F28',
			'contrastDefaultColor': 'dark',    // whether, by default, text (contrast)
			// on this palette should be dark or light
			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
				'200', '300', '400', '500', '600', 'A100'],
			'contrastLightColors': ['700', '800',
				'900', 'A400', 'A700']    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.definePalette('myWarn', {
			'50': '6F5A87',
			'100': '65527A',
			'200': '5B496E',
			'300': '514162',
			'400': '463956',
			'500': '3F334D',
			'600': '32293D',
			'700': '2B0B32',
			'800': '282131',
			'900': '1E1825',
			'A100': '695580',
			'A200': '463955',
			'A400': '2A2233',
			'A700': '0B090D',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
		                                        // on this palette should be dark or light
			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
				'200', '300', '400'],
			'contrastLightColors': ['A100', 'A200', 'A400', 'A700']    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.definePalette('myBackground', {
			'50': '8D9190',
			'100': '8D9190',
			'200': '828786',
			'300': '787D7C',
			'400': '6E7271',
			'500': '5E6261',
			'600': '5A5E5D',
			'700': '505352',
			'800': '464948',
			'900': '3C3E3E',
			'A100': 'EAEBEB',
			'A200': 'E0E1E1',
			'A400': 'CBCDCD',
			'A700': 'ACAFAE',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
		                                        // on this palette should be dark or light
			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
				'200', '300', '400', 'A100'],
			'contrastLightColors': undefined    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.theme('default')
			.primaryPalette('myPrimary', {
				'hue-3': 'A700',
				'hue-1': '50'
			})
			.accentPalette('myAccent', {
				'default': '500',
				'hue-1': '300',
				'hue-2': '800',
				'hue-3': 'A100'
			})
			.warnPalette('myWarn', {
				'hue-3': 'A700'
			})
			.backgroundPalette('myBackground');

		$mdThemingProvider.setDefaultTheme('default');
	})



	.config(['$stateProvider', '$urlRouterProvider', '$logProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider

			.state('app', {
				url: '/app',
				templateUrl: 'templates/menu.html',
				controller: 'AppCtrl'
			})

			.state('charts', {
				url: '/charts',
				views: {
					'menu': {
						templateUrl: 'templates/charts.html'
					}
				}
			})

			.state('content', {
				url: '/content',
				views: {
					'menu': {
						templateUrl: 'templates/content.html'
					}
				}
			})
			.state('forms', {
				url: '/forms',
				views: {
					'menu': {
						templateUrl: 'templates/form.html',
						controller: 'formCtrl'
					}
				}
			})
			.state('list', {
				url: '/list',
				views: {
					'menu': {
						templateUrl: 'templates/list.html',
						controller: 'listCtrl'
					}
				}
			})

			.state('table', {
				url: '/table',
				views: {
					'menu': {
						templateUrl: 'templates/table.html',
						controller: 'tableCtrl'
					}
				}
			})

			.state('dashboard', {
				url: '/dashboard',
				views: {
					'menu': {
						templateUrl: 'templates/dashboard.html',
						controller: 'dashboardCtrl'
					}
				}
									});
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/dashboard');
	}])
	//take all whitespace out of string
	.filter('nospace', function () {
		return function (value) {
			return (!value) ? '' : value.replace(/ /g, '');
		};
	})
	//replace uppercase to regular case
	.filter('humanizeDoc', function () {
		return function (doc) {
			if (!doc) return;
			if (doc.type === 'directive') {
				return doc.name.replace(/([A-Z])/g, function ($1) {
					return '-' + $1.toLowerCase();
				});
			}

			return doc.label || doc.name;
		};
	});
angular.module('app.controllers', [])

.controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout', '$log', '$rootScope', '$state', '$location', 'menu', function($scope, $mdSidenav, $timeout, $log, $rootScope, $state, $location, menu) {
	$scope.close = function() {
		$mdSidenav('left').close()
			.then(function(){
				$log.debug("close LEFT is done");
			});
	};

	$scope.toggleLeft = function() {
		$mdSidenav('left').toggle()
			.then(function(){
				$log.debug("toggle left is done");
			});
	};

	var vm = this;
	var aboutMeArr = ['Family', 'Location', 'Lifestyle'];
	var budgetArr = ['Housing', 'LivingExpenses', 'Healthcare', 'Travel'];
	var incomeArr = ['SocialSecurity', 'Savings', 'Pension', 'PartTimeJob'];
	var advancedArr = ['Assumptions', 'BudgetGraph', 'AccountBalanceGraph', 'IncomeBalanceGraph'];

	//functions for menu-link and menu-toggle
	vm.isOpen = isOpen;
	vm.toggleOpen = toggleOpen;
	vm.autoFocusContent = false;
	vm.menu = menu;

	vm.status = {
		isFirstOpen: true,
		isFirstDisabled: false
	};
	function isOpen(section) {
		return menu.isSectionSelected(section);
	}
	function toggleOpen(section) {
		menu.toggleSelectSection(section);
	}

	$scope.sites = [];
	$scope.myAccounts = [];
	$scope.myAccounts.ssId = '1pFCohSuqfvf2zn7_Sh7mVy5BRvvnkKPR3v9MrnDu8W0';
	$scope.wordList = [];
	$scope.updateModel = function() {
		//	console.log('updateModel');
		//	console.log($scope.myAccounts.ssId);
		$rootScope.$broadcast('changeModel');
	};

	$scope.refreshPage = function() {
		$rootScope.$broadcast('refreshPage');
	};

	$scope.initMenu = function() {
		google.setOnLoadCallback($scope.acctData);
		$scope.acctData();
		//	google.setOnLoadCallback($scope.getKeywords);
		//	$scope.getKeywords();
	};
	$scope.getKeywords = function() {
		//var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select G,H ORDER BY H DESC LIMIT 100');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1pFCohSuqfvf2zn7_Sh7mVy5BRvvnkKPR3v9MrnDu8W0/gviz/tq?&range=G:H&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.wordResponse);
	};

	$scope.wordResponse = function(response) {
		var datatable = response.getDataTable();
		var numrows = datatable.getNumberOfRows();
		var newObj = {
			text: '',
			size: null
		};
		for(var i = 0; i < numrows; i++) {
			newObj.text = datatable.getValue(i,0);
			newObj.size = 110 - i;
			$scope.wordList[i] = newObj;
			//	console.log($scope.wordList[i].size);
		}

	};

	$scope.acctData = function() {

		//		console.log('acctData');
		//	console.log($scope.myAccounts.ssId);
		var queryString = encodeURIComponent('SELECT *');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1DbiVWPsDuMw2n5zhMzs3Csf-PK1pz_Q0Qu9BHXQLrSY/gviz/tq?&range=B2:J6&sheet=Accounts&tq=' + queryString);
		query.send($scope.getAcctData);

	};

	$scope.getAcctData = function(response) {
//		console.log('getAcctData');
//		console.log($scope.myAccounts.ssId);
		var data = response.getDataTable();
		var numrows = data.getNumberOfRows();
		var numcol = data.getNumberOfColumns();
		var properties = [];
		if($scope.sites.length > 0) {
			$scope.sites = [];
		}
		for (var i = 0; i < numcol; i++) {
			properties[i] = [];
			//$scope.properties[i].push([]);
			for (var j = 0; j < numrows; j++) {
				//	console.log(data.getValue(j,i));
				properties[i].push(data.getValue(j, i));
			}

			//	console.log(properties[i]);
		}
		//	console.log(properties[0][1]);
		for (var k = 0; k < properties.length; k++) {

			var property = {
				accountName: '',
				website: '',
				profileId: '',
				fullSSlink: '',
				ssId: ''
			}
			property.accountName = properties[k][0];
			property.website = properties[k][1];
			property.profileId = properties[k][2];
			property.fullSSlink = properties[k][3];
			property.ssId = properties[k][4];

			$scope.sites.push(property);
			console.log($scope.sites[k].accountName);
		}

	//	$scope.myAccounts = $scope.sites;
		//console.log($scope.sites);
	}
}])

.controller('formCtrl', function($scope) {
	$scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
	'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
	'WY').split(' ').map(function(state) {
		return {abbrev: state};
	});
})
.controller('chartsCtrl', function($scope) {

})

.controller('contentCtrl', function($scope) {

})

.controller('listCtrl', function($scope) {
	$scope.toppings = [
		{ name: 'Pepperoni', wanted: true },
		{ name: 'Sausage', wanted: false },
		{ name: 'Black Olives', wanted: true },
		{ name: 'Green Peppers', wanted: false }
	];
	$scope.settings = [
		{ name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'wifi', enabled: true },
		{ name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'bluetooth', enabled: false },
	];
	$scope.messages = [
		{id: 1, title: "Message A", selected: false},
		{id: 2, title: "Message B", selected: true},
		{id: 3, title: "Message C", selected: true},
	];
	$scope.people = [
		{ name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
		{ name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
		{ name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
	];
	$scope.goToPerson = function(person, event) {
		$mdDialog.show(
			$mdDialog.alert()
				.title('Navigating')
				.textContent('Inspect ' + person)
				.ariaLabel('Person inspect demo')
				.ok('Neat!')
				.targetEvent(event)
		);
	};
	$scope.navigateTo = function(to, event) {
		$mdDialog.show(
			$mdDialog.alert()
				.title('Navigating')
				.textContent('Imagine being taken to ' + to)
				.ariaLabel('Navigation demo')
				.ok('Neat!')
				.targetEvent(event)
		);
	};
	$scope.doPrimaryAction = function(event) {
		$mdDialog.show(
			$mdDialog.alert()
				.title('Primary Action')
				.textContent('Primary actions can be used for one click actions')
				.ariaLabel('Primary click demo')
				.ok('Awesome!')
				.targetEvent(event)
		);
	};
	$scope.doSecondaryAction = function(event) {
		$mdDialog.show(
			$mdDialog.alert()
				.title('Secondary Action')
				.textContent('Secondary actions can be used for one click actions')
				.ariaLabel('Secondary click demo')
				.ok('Neat!')
				.targetEvent(event)
		);
	};
})

.controller('tableCtrl', function($scope) {

})

.controller('dashboardCtrl', function($scope, $state, $rootScope, $location) {
	$scope.clientId = '306326458623-rno8o0ujbthci1b7v0dl7bbvk5n5913r.apps.googleusercontent.com';
	$scope.apiKey = 'AIzaSyD8bNqJJlPwrlwQY-QgPelHCp7NTAJRESo';
	$scope.scopes = 'https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.scripts';

	$rootScope.title = 'Summary Report';

	$scope.Math = window.Math;

	$scope.refreshThis = function() {
		$scope.newtraffic();
		$scope.newreferral();
		$scope.newimpressionChart();
		$scope.newclicksChart();
		$scope.newctrChart();
		$scope.newpositionChart();
		$scope.getData();
		$scope.acctData();
		$scope.getKeys();
		$scope.getPages();
		$scope.getOS();
		$scope.getResolution();

	};

	$scope.$on('changeModel', function(e) {
		//	console.log($scope.myAccounts.ssId);
//		console.log('changeModel');
//		console.log($scope.myAccounts.ssId);
		//$location.path('/app/dashboard/' + $scope.myAccounts.ssId);
		$scope.refreshThis();
	});

	$scope.$on('refreshPage', function(e) {
		$scope.refreshThis();
	});


	$scope.clientId = '306326458623-rno8o0ujbthci1b7v0dl7bbvk5n5913r.apps.googleusercontent.com';
	$scope.apiKey = 'AIzaSyD8bNqJJlPwrlwQY-QgPelHCp7NTAJRESo';
	$scope.scopes = 'https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.scripts';

	$scope.bounceRate = 0;
	$scope.pageviews = 0;
	$scope.sessions = 0;
	$scope.ppv = 0;
	$scope.duration = 0;
	$scope.impressions = 0;
	$scope.clicks = 0;
	$scope.ctr = 0;
	$scope.position = 0;
	$scope.pageLoadTime = 0;
	$scope.uniquePageviews = 0;
	$scope.bounces = 0;
	$scope.query = {
		order: 'impressions',
		limit: 10,
		page: 1
	};
	$scope.totalImpressions = 0;
	$scope.totalCTR = 0;
	$scope.totalClicks = 0;
	$scope.totalPosition = 0;
	$scope.numTimes = 0;
	$scope.avgPosition = 0;

	$scope.initPage = function(res) {
//		console.log('initPage');
//		console.log($scope.myAccounts.ssId);
		google.setOnLoadCallback($scope.getData);
		//google.setOnLoadCallback($scope.acctData);
		google.setOnLoadCallback($scope.newtraffic);
		google.setOnLoadCallback($scope.newreferral);
		google.setOnLoadCallback($scope.newimpressionChart);
		google.setOnLoadCallback($scope.newclicksChart);
		google.setOnLoadCallback($scope.newctrChart);
		google.setOnLoadCallback($scope.newpositionChart);
		google.setOnLoadCallback($scope.getPages);
		google.setOnLoadCallback($scope.getKeys);
		google.setOnLoadCallback($scope.getResolution);
		google.setOnLoadCallback($scope.getOS);
		$scope.getKeys();
		$scope.getPages();
		$scope.getData();
		$scope.getResolution();
		$scope.getOS();
		//$scope.acctData();

	};

	$scope.newreferral = function() {
		//	console.log('draw');
//		console.log('referral');
//		console.log($scope.myAccounts.ssId);
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('SELECT K, L');
		$scope.referral = new google.visualization.ChartWrapper({
			'chartType':'PieChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=K:L&sheet=Apr-2016&headers=1&tq=' + queryString,
			'containerId':'referral-container',
			'options': {title:'Top Referrals',
				legend:'none',
				pieHole: 4/9,
				legend: 'Top Referrals',
				colors: ['#3C3E3E','#fdb800','#3F334D','#A0BB77','#505168','#A1BB79','#6D7B51'],
				sliceVisibilityThreshold: 0.01,
				width: '100%',
				chartArea: { left: 20,top:10,width:'100%',height:'100%'},
				titleTextStyle: {
					'font-size': '16px'

				},
				legend: {textStyle: {fontSize: 14}}
			}
		});
		google.visualization.events.addListener($scope.referral, 'ready', onReady);
		$scope.referral.draw();
		//	console.log('success');
		function onReady() {
			//google.visualization.events.addListener($scope.referral.getChart(), 'onmouseover', usefulHandler);
		}

		// Called
		function usefulHandler() {
			alert("Mouseover event!");
		}
	};
	//$scope.referral.draw();




	$scope.newtraffic = function() {
//		console.log('traffic');
//		console.log($scope.myAccounts.ssId);
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('SELECT N, O');
		$scope.traffic = new google.visualization.ChartWrapper({
			'chartType':'PieChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=N:O&sheet=Apr-2016&headers=1&tq=' + queryString,
			'containerId':'traffic-container',
			'options': {'title':'Traffic Channels',
				'legend':'none',
				title:'Top Referrals',
				legend:'none',
				pieHole: 4/9,
				legend: 'Traffic Channels',
				colors: ['#3C3E3E','#fdb800','#3F334D','#A0BB77','#505168','#A1BB79','#6D7B51'],
				sliceVisibilityThreshold: 0.01,
				width: '100%',
				slices: {  3: {offset: 0.2},
					4: {offset: 0.3},
					5: {offset: 0.4},
					6: {offset: 0.5},
				},
				chartArea: {top:10,width:'90%',height:'100%'},
				titleTextStyle: {
					'font-size': '16px'

				},
				legend: {textStyle: {fontSize: 16}}
			}
		});

		$scope.traffic.draw();

		function onReady() {
			//google.visualization.events.addListener($scope.traffic.getChart(), 'onmouseover', usefulHandler);
		}

		// Called
		function usefulHandler() {

		}
	};

	$scope.pageviewChart = function() {

		var max = 0;
		var current = $scope.pageviews;
		var lastmonth = $scope.lastpageviews;

		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('pageview-container', {
	     chart: {
	         type: 'solidgauge',
	         marginTop: 0
	     },

	     title: {
			text: null
	     },

	     tooltip: {
	         borderWidth: 0,
	         backgroundColor: 'none',
	         shadow: false,
	         style: {
	             fontSize: '16px',
				fontFamily: 'Roboto',
				color: '#333'
	         },
	         pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
	         positioner: function (labelWidth, labelHeight) {
	             return {
	                 x: 155 - labelWidth / 2,
	                 y: 130
	             };
	         }
	     },

	     pane: {
	         startAngle: 0,
	         endAngle: 360,
	         background: [{ // Track for Move
	             outerRadius: '112%',
	             innerRadius: '88%',
	             backgroundColor: Highcharts.Color('#3C3D4E').setOpacity(0.3).get(),
	             borderWidth: 0
	         }, { // Track for Exercise
	             outerRadius: '87%',
	             innerRadius: '63%',
	             backgroundColor: Highcharts.Color('#77799B').setOpacity(0.3).get(),
	             borderWidth: 0
	         }]
	     },

	     yAxis: {
	         min: 0,
	         max: max,
	         lineWidth: 0,
	         tickPositions: []
	     },

	     plotOptions: {
	         solidgauge: {
	             borderWidth: '26px',
	             dataLabels: {
	                 enabled: false
	             },
	             linecap: 'square',
	             stickyTracking: false
	         }
	     },

	     series: [{
	         name: 'This Month',
	         borderColor: '#3C3D4E',
	         data: [{
	             color: '#3C3D4E',
	             radius: '100%',
	             innerRadius: '100%',
	             y: current
	         }]
	     }, {
	         name: 'Last Month',
	         borderColor: '#77799B',
	         data: [{
	             color: '#77799B',
	             radius: '75%',
	             innerRadius: '75%',
	             y: lastmonth
	         }]
	     }, {


	     }]
	 },
	 function callback() {

	 });
	};

	$scope.sessionsChart = function() {

		var max = 0;
		var current = $scope.sessions;
		var lastmonth = $scope.lastsessions;

		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('sessions-container', {
				chart: {
					type: 'solidgauge',
					marginTop: 0
				},

				title: {
					text: null
				},

				tooltip: {
					borderWidth: 0,
					backgroundColor: 'none',
					shadow: false,
					style: {
						fontSize: '16px',
						fontFamily: 'Roboto',
						color: '#333'
					},
					pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
					positioner: function (labelWidth, labelHeight) {
						return {
							x: 155 - labelWidth / 2,
							y: 130
						};
					}
				},

				pane: {
					startAngle: 0,
					endAngle: 360,
					background: [{ // Track for Move
						outerRadius: '112%',
						innerRadius: '88%',
						backgroundColor: Highcharts.Color('#3C3D4E').setOpacity(0.3).get(),
						borderWidth: 0
					}, { // Track for Exercise
						outerRadius: '87%',
						innerRadius: '63%',
						backgroundColor: Highcharts.Color('#77799B').setOpacity(0.3).get(),
						borderWidth: 0
					}]
				},

				yAxis: {
					min: 0,
					max: max,
					lineWidth: 0,
					tickPositions: []
				},

				plotOptions: {
					solidgauge: {
						borderWidth: '26px',
						dataLabels: {
							enabled: false
						},
						linecap: 'square',
						stickyTracking: false
					}
				},

				series: [{
					name: 'This Month',
					borderColor: '#3C3D4E',
					data: [{
						color: '#3C3D4E',
						radius: '100%',
						innerRadius: '100%',
						y: current
					}]
				}, {
					name: 'Last Month',
					borderColor: '#77799B',
					data: [{
						color: '#77799B',
						radius: '75%',
						innerRadius: '75%',
						y: lastmonth
					}]
				}, {


				}]
			},
			function callback() {

			});
	};

	$scope.ppvChart = function() {

		var max = 0;
		var current = $scope.ppv;
		var lastmonth = $scope.lastppv;

		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('ppv-container', {
				chart: {
					type: 'solidgauge',
					marginTop: 0
				},

				title: {
					text: null
				},

				tooltip: {
					borderWidth: 0,
					backgroundColor: 'none',
					shadow: false,
					style: {
						fontSize: '16px',
						fontFamily: 'Roboto',
						color: '#333'
					},
					pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
					positioner: function (labelWidth, labelHeight) {
						return {
							x: 155 - labelWidth / 2,
							y: 130
						};
					}
				},

				pane: {
					startAngle: 0,
					endAngle: 360,
					background: [{ // Track for Move
						outerRadius: '112%',
						innerRadius: '88%',
						backgroundColor: Highcharts.Color('#3C3D4E').setOpacity(0.3).get(),
						borderWidth: 0
					}, { // Track for Exercise
						outerRadius: '87%',
						innerRadius: '63%',
						backgroundColor: Highcharts.Color('#77799B').setOpacity(0.3).get(),
						borderWidth: 0
					}]
				},

				yAxis: {
					min: 0,
					max: max,
					lineWidth: 0,
					tickPositions: []
				},

				plotOptions: {
					solidgauge: {
						borderWidth: '26px',
						dataLabels: {
							enabled: false
						},
						linecap: 'square',
						stickyTracking: false
					}
				},

				series: [{
					name: 'This Month',
					borderColor: '#3C3D4E',
					data: [{
						color: '#3C3D4E',
						radius: '100%',
						innerRadius: '100%',
						y: current
					}]
				}, {
					name: 'Last Month',
					borderColor: '#77799B',
					data: [{
						color: '#77799B',
						radius: '75%',
						innerRadius: '75%',
						y: lastmonth
					}]
				}, {


				}]
			},
			function callback() {

			});
	};

	$scope.bounceRateChart = function() {

		var max = 0;
		var current = $scope.bounceRate;
		var lastmonth = $scope.lastbounceRate;

		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('bounce-rate-container', {
				chart: {
					type: 'solidgauge',
					marginTop: 0
				},

				title: {
					text: null
				},

				tooltip: {
					borderWidth: 0,
					backgroundColor: 'none',
					shadow: false,
					style: {
						fontSize: '16px',
						fontFamily: 'Roboto',
						color: '#333'
					},
					pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
					positioner: function (labelWidth, labelHeight) {
						return {
							x: 155 - labelWidth / 2,
							y: 130
						};
					}
				},

				pane: {
					startAngle: 0,
					endAngle: 360,
					background: [{ // Track for Move
						outerRadius: '112%',
						innerRadius: '88%',
						backgroundColor: Highcharts.Color('#3C3D4E').setOpacity(0.3).get(),
						borderWidth: 0
					}, { // Track for Exercise
						outerRadius: '87%',
						innerRadius: '63%',
						backgroundColor: Highcharts.Color('#77799B').setOpacity(0.3).get(),
						borderWidth: 0
					}]
				},

				yAxis: {
					min: 0,
					max: max,
					lineWidth: 0,
					tickPositions: []
				},

				plotOptions: {
					solidgauge: {
						borderWidth: '26px',
						dataLabels: {
							enabled: false
						},
						linecap: 'square',
						stickyTracking: false
					}
				},

				series: [{
					name: 'This Month',
					borderColor: '#3C3D4E',
					data: [{
						color: '#3C3D4E',
						radius: '100%',
						innerRadius: '100%',
						y: current
					}]
				}, {
					name: 'Last Month',
					borderColor: '#77799B',
					data: [{
						color: '#77799B',
						radius: '75%',
						innerRadius: '75%',
						y: lastmonth
					}]
				}, {


				}]
			},
			function callback() {

			});
	};

	$scope.durationChart = function() {

		var max = 0;
		var current = $scope.duration;
		var lastmonth = $scope.lastduration;
		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('duration-container', {
				chart: {
					type: 'solidgauge',
					marginTop: 0
				},

				title: {
					text: null
				},

				tooltip: {
					borderWidth: 0,
					backgroundColor: 'none',
					shadow: false,
					style: {
						fontSize: '16px',
						fontFamily: 'Roboto',
						color: '#333'
					},
					pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
					positioner: function (labelWidth, labelHeight) {
						return {
							x: 155 - labelWidth / 2,
							y: 130
						};
					}
				},

				pane: {
					startAngle: 0,
					endAngle: 360,
					background: [{ // Track for Move
						outerRadius: '112%',
						innerRadius: '88%',
						backgroundColor: Highcharts.Color('#3C3D4E').setOpacity(0.3).get(),
						borderWidth: 0
					}, { // Track for Exercise
						outerRadius: '87%',
						innerRadius: '63%',
						backgroundColor: Highcharts.Color('#77799B').setOpacity(0.3).get(),
						borderWidth: 0
					}]
				},

				yAxis: {
					min: 0,
					max: max,
					lineWidth: 0,
					tickPositions: []
				},

				plotOptions: {
					solidgauge: {
						borderWidth: '26px',
						dataLabels: {
							enabled: false
						},
						linecap: 'square',
						stickyTracking: false
					}
				},

				series: [{
					name: 'This Month',
					borderColor: '#3C3D4E',
					data: [{
						color: '#3C3D4E',
						radius: '100%',
						innerRadius: '100%',
						y: current
					}]
				}, {
					name: 'Last Month',
					borderColor: '#77799B',
					data: [{
						color: '#77799B',
						radius: '75%',
						innerRadius: '75%',
						y: lastmonth
					}]
				}, {


				}]
			},
			function callback() {

			});
	};

	$scope.loadtimeChart = function() {

		var max = 0;
		var current = $scope.pageLoadTime;
		var lastmonth = $scope.lastpageLoadTime;

		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('loadtime-container', {
				chart: {
					type: 'solidgauge',
					marginTop: 0
				},

				title: {
					text: null
				},

				tooltip: {
					borderWidth: 0,
					backgroundColor: 'none',
					shadow: false,
					style: {
						fontSize: '16px',
						fontFamily: 'Roboto',
						color: '#333'
					},
					pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
					positioner: function (labelWidth, labelHeight) {
						return {
							x: 155 - labelWidth / 2,
							y: 130
						};
					}
				},

				pane: {
					startAngle: 0,
					endAngle: 360,
					background: [{ // Track for Move
						outerRadius: '112%',
						innerRadius: '88%',
						backgroundColor: Highcharts.Color('#3C3D4E').setOpacity(0.3).get(),
						borderWidth: 0
					}, { // Track for Exercise
						outerRadius: '87%',
						innerRadius: '63%',
						backgroundColor: Highcharts.Color('#77799B').setOpacity(0.3).get(),
						borderWidth: 0
					}]
				},

				yAxis: {
					min: 0,
					max: max,
					lineWidth: 0,
					tickPositions: []
				},

				plotOptions: {
					solidgauge: {
						borderWidth: '26px',
						dataLabels: {
							enabled: false
						},
						linecap: 'square',
						stickyTracking: false
					}
				},

				series: [{
					name: 'This Month',
					borderColor: '#3C3D4E',
					data: [{
						color: '#3C3D4E',
						radius: '100%',
						innerRadius: '100%',
						y: current
					}]
				}, {
					name: 'Last Month',
					borderColor: '#77799B',
					data: [{
						color: '#77799B',
						radius: '75%',
						innerRadius: '75%',
						y: lastmonth
					}]
				}, {


				}]
			},
			function callback() {

			});
	};

	$scope.uniqueChart = function() {

		var max = 0;
		var current = $scope.uniquePageviews;
		var lastmonth = $scope.lastuniquePageviews;

		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('unique-container', {
				chart: {
					type: 'solidgauge',
					marginTop: 0
				},

				title: {
					text: null
				},

				tooltip: {
					borderWidth: 0,
					backgroundColor: 'none',
					shadow: false,
					style: {
						fontSize: '16px',
						fontFamily: 'Roboto',
						color: '#333'
					},
					pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
					positioner: function (labelWidth, labelHeight) {
						return {
							x: 155 - labelWidth / 2,
							y: 130
						};
					}
				},

				pane: {
					startAngle: 0,
					endAngle: 360,
					background: [{ // Track for Move
						outerRadius: '112%',
						innerRadius: '88%',
						backgroundColor: Highcharts.Color('#3C3D4E').setOpacity(0.3).get(),
						borderWidth: 0
					}, { // Track for Exercise
						outerRadius: '87%',
						innerRadius: '63%',
						backgroundColor: Highcharts.Color('#77799B').setOpacity(0.3).get(),
						borderWidth: 0
					}]
				},

				yAxis: {
					min: 0,
					max: max,
					lineWidth: 0,
					tickPositions: []
				},

				plotOptions: {
					solidgauge: {
						borderWidth: '26px',
						dataLabels: {
							enabled: false
						},
						linecap: 'square',
						stickyTracking: false
					}
				},

				series: [{
					name: 'This Month',
					borderColor: '#3C3D4E',
					data: [{
						color: '#3C3D4E',
						radius: '100%',
						innerRadius: '100%',
						y: current
					}]
				}, {
					name: 'Last Month',
					borderColor: '#77799B',
					data: [{
						color: '#77799B',
						radius: '75%',
						innerRadius: '75%',
						y: lastmonth
					}]
				}, {


				}]
			},
			function callback() {

			});
	};

	$scope.bounceChart = function() {

		var max = 0;
		var current = $scope.bounces;
		var lastmonth = $scope.lastbounces;

		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('bounce-container', {
				chart: {
					type: 'solidgauge',
					marginTop: 0
				},

				title: {
					text: null
				},

				tooltip: {
					borderWidth: 0,
					backgroundColor: 'none',
					shadow: false,
					style: {
						fontSize: '16px',
						fontFamily: 'Roboto',
						color: '#333'
					},
					pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
					positioner: function (labelWidth, labelHeight) {
						return {
							x: 155 - labelWidth / 2,
							y: 130
						};
					}
				},

				pane: {
					startAngle: 0,
					endAngle: 360,
					background: [{ // Track for Move
						outerRadius: '112%',
						innerRadius: '88%',
						backgroundColor: Highcharts.Color('#3C3D4E').setOpacity(0.3).get(),
						borderWidth: 0
					}, { // Track for Exercise
						outerRadius: '87%',
						innerRadius: '63%',
						backgroundColor: Highcharts.Color('#77799B').setOpacity(0.3).get(),
						borderWidth: 0
					}]
				},

				yAxis: {
					min: 0,
					max: max,
					lineWidth: 0,
					tickPositions: []
				},

				plotOptions: {
					solidgauge: {
						borderWidth: '26px',
						dataLabels: {
							enabled: false
						},
						linecap: 'square',
						stickyTracking: false
					}
				},

				series: [{
					name: 'This Month',
					borderColor: '#3C3D4E',
					data: [{
						color: '#3C3D4E',
						radius: '100%',
						innerRadius: '100%',
						y: current
					}]
				}, {
					name: 'Last Month',
					borderColor: '#77799B',
					data: [{
						color: '#77799B',
						radius: '75%',
						innerRadius: '75%',
						y: lastmonth
					}]
				}, {


				}]
			},
			function callback() {

			});
	};

	$scope.impressionGauge = function() {

		var max = 0;
		var current = $scope.impressions;
		var lastmonth = $scope.lastImpressions;

		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('impression-gauge', {
				chart: {
					type: 'solidgauge',
					marginTop: 0
				},

				title: {
					text: null
				},

				tooltip: {
					borderWidth: 0,
					backgroundColor: 'none',
					shadow: false,
					style: {
						fontSize: '16px',
						fontFamily: 'Roboto',
						color: '#333'
					},
					pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
					positioner: function (labelWidth, labelHeight) {
						return {
							x: 155 - labelWidth / 2,
							y: 130
						};
					}
				},

				pane: {
					startAngle: 0,
					endAngle: 360,
					background: [{ // Track for Move
						outerRadius: '112%',
						innerRadius: '88%',
						backgroundColor: Highcharts.Color('#2B0B32').setOpacity(0.3).get(),
						borderWidth: 0
					}, { // Track for Exercise
						outerRadius: '87%',
						innerRadius: '63%',
						backgroundColor: Highcharts.Color('#3F334D').setOpacity(0.3).get(),
						borderWidth: 0
					}]
				},

				yAxis: {
					min: 0,
					max: max,
					lineWidth: 0,
					tickPositions: []
				},

				plotOptions: {
					solidgauge: {
						borderWidth: '26px',
						dataLabels: {
							enabled: false
						},
						linecap: 'square',
						stickyTracking: false
					}
				},

				series: [{
					name: 'This Month',
					borderColor: '#2B0B32',
					data: [{
						color: '#2B0B32',
						radius: '100%',
						innerRadius: '100%',
						y: current
					}]
				}, {
					name: 'Last Month',
					borderColor: '#3F334D',
					data: [{
						color: '#3F334D',
						radius: '75%',
						innerRadius: '75%',
						y: lastmonth
					}]
				}, {


				}]
			},
			function callback() {

			});
	};

	$scope.clicksGauge = function() {

		var max = 0;
		var current = $scope.clicks;
		var lastmonth = $scope.clicks;

		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('clicks-gauge', {
				chart: {
					type: 'solidgauge',
					marginTop: 0
				},

				title: {
					text: null
				},

				tooltip: {
					borderWidth: 0,
					backgroundColor: 'none',
					shadow: false,
					style: {
						fontSize: '16px',
						fontFamily: 'Roboto',
						color: '#333'
					},
					pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
					positioner: function (labelWidth, labelHeight) {
						return {
							x: 155 - labelWidth / 2,
							y: 130
						};
					}
				},

				pane: {
					startAngle: 0,
					endAngle: 360,
					background: [{ // Track for Move
						outerRadius: '112%',
						innerRadius: '88%',
						backgroundColor: Highcharts.Color('#2B0B32').setOpacity(0.3).get(),
						borderWidth: 0
					}, { // Track for Exercise
						outerRadius: '87%',
						innerRadius: '63%',
						backgroundColor: Highcharts.Color('#3F334D').setOpacity(0.3).get(),
						borderWidth: 0
					}]
				},

				yAxis: {
					min: 0,
					max: max,
					lineWidth: 0,
					tickPositions: []
				},

				plotOptions: {
					solidgauge: {
						borderWidth: '26px',
						dataLabels: {
							enabled: false
						},
						linecap: 'square',
						stickyTracking: false
					}
				},

				series: [{
					name: 'This Month',
					borderColor: '#2B0B32',
					data: [{
						color: '#2B0B32',
						radius: '100%',
						innerRadius: '100%',
						y: current
					}]
				}, {
					name: 'Last Month',
					borderColor: '#3F334D',
					data: [{
						color: '#3F334D',
						radius: '75%',
						innerRadius: '75%',
						y: lastmonth
					}]
				}, {


				}]
			},
			function callback() {

			});
	};

	$scope.ctrGauge = function() {

		var max = 0;
		var current = $scope.CTR;
		var lastmonth = $scope.lastCTR;

		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('ctr-gauge', {
				chart: {
					type: 'solidgauge',
					marginTop: 0
				},

				title: {
					text: null
				},

				tooltip: {
					borderWidth: 0,
					backgroundColor: 'none',
					shadow: false,
					style: {
						fontSize: '16px',
						fontFamily: 'Roboto',
						color: '#333'
					},
					pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
					positioner: function (labelWidth, labelHeight) {
						return {
							x: 155 - labelWidth / 2,
							y: 130
						};
					}
				},

				pane: {
					startAngle: 0,
					endAngle: 360,
					background: [{ // Track for Move
						outerRadius: '112%',
						innerRadius: '88%',
						backgroundColor: Highcharts.Color('#2B0B32').setOpacity(0.3).get(),
						borderWidth: 0
					}, { // Track for Exercise
						outerRadius: '87%',
						innerRadius: '63%',
						backgroundColor: Highcharts.Color('#3F334D').setOpacity(0.3).get(),
						borderWidth: 0
					}]
				},

				yAxis: {
					min: 0,
					max: max,
					lineWidth: 0,
					tickPositions: []
				},

				plotOptions: {
					solidgauge: {
						borderWidth: '26px',
						dataLabels: {
							enabled: false
						},
						linecap: 'square',
						stickyTracking: false
					}
				},

				series: [{
					name: 'This Month',
					borderColor: '#2B0B32',
					data: [{
						color: '#2B0B32',
						radius: '100%',
						innerRadius: '100%',
						y: current
					}]
				}, {
					name: 'Last Month',
					borderColor: '#3F334D',
					data: [{
						color: '#3F334D',
						radius: '75%',
						innerRadius: '75%',
						y: lastmonth
					}]
				}, {


				}]
			},
			function callback() {

			});
	};

	$scope.positionGauge = function() {

		var max = 0;
		var current = $scope.position;
		var lastmonth = $scope.lastPosition;

		if(current >= lastmonth) {
			max = current + (current * (0.10 + Math.random() * 0.2));
		} else {
			max = lastmonth + (lastmonth * (0.10 + Math.random() * 0.2));
		}
		max = Math.round(max * 100) / 100;
		var newChart = new Highcharts.chart('position-gauge', {
				chart: {
					type: 'solidgauge',
					marginTop: 0
				},

				title: {
					text: null
				},

				tooltip: {
					borderWidth: 0,
					backgroundColor: 'none',
					shadow: false,
					style: {
						fontSize: '16px',
						fontFamily: 'Roboto',
						color: '#333'
					},
					pointFormat: '{series.name}<br><span style="font-size:2.5em; font-weight: bold">{point.y}</span>',
					positioner: function (labelWidth, labelHeight) {
						return {
							x: 155 - labelWidth / 2,
							y: 130
						};
					}
				},

				pane: {
					startAngle: 0,
					endAngle: 360,
					background: [{ // Track for Move
						outerRadius: '112%',
						innerRadius: '88%',
						backgroundColor: Highcharts.Color('#2B0B32').setOpacity(0.3).get(),
						borderWidth: 0
					}, { // Track for Exercise
						outerRadius: '87%',
						innerRadius: '63%',
						backgroundColor: Highcharts.Color('#3F334D').setOpacity(0.3).get(),
						borderWidth: 0
					}]
				},

				yAxis: {
					min: 0,
					max: max,
					lineWidth: 0,
					tickPositions: []
				},

				plotOptions: {
					solidgauge: {
						borderWidth: '26px',
						dataLabels: {
							enabled: false
						},
						linecap: 'square',
						stickyTracking: false
					}
				},

				series: [{
					name: 'This Month',
					borderColor: '#2B0B32',
					data: [{
						color: '#2B0B32',
						radius: '100%',
						innerRadius: '100%',
						y: current
					}]
				}, {
					name: 'Last Month',
					borderColor: '#3F334D',
					data: [{
						color: '#3F334D',
						radius: '75%',
						innerRadius: '75%',
						y: lastmonth
					}]
				}, {


				}]
			},
			function callback() {

			});
	};

	$scope.newimpressionChart = function() {
//		console.log('impressions');
//		console.log($scope.myAccounts.ssId);
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('SELECT A,B');
		$scope.impressionChart = new google.visualization.ChartWrapper({
			'chartType':'AreaChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:B&sheet=Apr-2016&headers=1&tq=' + queryString,
			'containerId':'impression-container',
			'options': {
				legend: 'none',
				colors: ['#A1BB79','#382934','#382934','#5E4557','#d6b45d','#ebd004','#b9b1a3','#314c63'],
				width: 700,
				height: '100%',
				titleTextStyle: {
					'font-size': '16px'
				},
				interpolateNulls: true,
				lineWidth: 5,
				vAxis: { gridlines: { count: 0 } },
				areaOpacity: 0.2,
				curveType: 'function',
				backgroundColor: 'none',
				chartArea: {
					top: 0,
					left: 0,
					width: 700,
					height: 250
				},
				animation: {
					startup: true,
					easing: 'inAndOut'
				},
				enableInteractivity: true,
				hAxis: {
					textPosition: 'none',
					viewWindowMode: 'maximized',
					gridlines: { count: 0 }
				}
			}
		});
		$scope.impressionChart.draw();

		function onReady() {
			//google.visualization.events.addListener($scope.traffic.getChart(), 'onmouseover', usefulHandler);
		}

		// Called
		function usefulHandler() {

		}
	};


	$scope.newclicksChart = function() {
//		console.log('clicks');
//		console.log($scope.myAccounts.ssId);
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('SELECT A, C');
		$scope.clicksChart = new google.visualization.ChartWrapper({
			'chartType':'AreaChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=A:D&sheet=Apr-2016&headers=1&tq=' + queryString,
			'containerId':'clicks-container',
			'options': {legend: 'none',
				colors: ['#A1BB79','#382934','#382934','#5E4557','#d6b45d','#ebd004','#b9b1a3','#314c63'],
				width: 700,
				height: '100%',
				titleTextStyle: {
					'font-size': '16px'
				},
				interpolateNulls: true,
				lineWidth: 5,
				vAxis: { gridlines: {
					baselineColor: '#f7f7f7',
					count: 0 }
				},
				areaOpacity: 0.2,
				curveType: 'function',
				backgroundColor: 'none',
				fontName: 'Roboto',
				chartArea: {
					top: 0,
					left: 0,
					width: 700,
					height: 250
				},
				animation: {
					startup: true,
					easing: 'inAndOut'
				},
				enableInteractivity: true,
				hAxis: {
					textPosition: 'none',
					viewWindowMode: 'maximized',
					baselineColor: '#f7f7f7',
					gridlines: {
						color: '#f7f7f7',
						count: 0
					}
				}
			}
		});
		$scope.clicksChart.draw();

		function onReady() {
			//google.visualization.events.addListener($scope.traffic.getChart(), 'onmouseover', usefulHandler);
		}

		// Called
		function usefulHandler() {

		}
	};

	$scope.newctrChart = function() {
//		console.log('ctr');
//		console.log($scope.myAccounts.ssId);
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('SELECT A, D');
		$scope.ctrChart = new google.visualization.ChartWrapper({
			'chartType':'AreaChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=A:D&sheet=Apr-2016&headers=1&tq=' + queryString,
			'containerId':'ctr-container',
			'options': {legend: 'none',
				colors: ['#A1BB79','#382934','#382934','#5E4557','#d6b45d','#ebd004','#b9b1a3','#314c63'],
				width: 700,
				height: '100%',
				titleTextStyle: {
					'font-size': '16px'
				},
				interpolateNulls: true,
				lineWidth: 5,
				vAxis: { gridlines: { count: 0 } },
				areaOpacity: 0.2,
				curveType: 'function',
				backgroundColor: 'none',
				chartArea: {
					top: 0,
					left: 0,
					width: 700,
					height: 250
				},
				animation: {
					startup: true,
					easing: 'inAndOut'
				},
				enableInteractivity: true,
				hAxis: {
					textPosition: 'none',
					viewWindowMode: 'maximized',
					gridlines: { count: 0 }
				}
			}
		});
		$scope.ctrChart.draw();

		function onReady() {
			//google.visualization.events.addListener($scope.traffic.getChart(), 'onmouseover', usefulHandler);
		}

		// Called
		function usefulHandler() {

		}
	};

	$scope.newpositionChart = function() {
//		console.log('position');
		var ssId = $scope.myAccounts.ssId;
//		console.log($scope.myAccounts.ssId);
		var queryString = encodeURIComponent('SELECT A,E');
		$scope.positionChart = new google.visualization.ChartWrapper({
			'chartType':'AreaChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=A:E&sheet=Apr-2016&headers=1&tq=' + queryString,
			'containerId':'position-container',
			'options': {legend: 'none',
				colors: ['#A1BB79','#382934','#382934','#5E4557','#d6b45d','#ebd004','#b9b1a3','#314c63'],
				width: 700,
				height: '100%',
				titleTextStyle: {
					'font-size': '16px'
				},
				interpolateNulls: true,
				lineWidth: 5,
				vAxis: { gridlines: { count: 0 } },
				areaOpacity: 0.2,
				curveType: 'function',
				backgroundColor: 'none',
				chartArea: {
					top: 0,
					left: 0,
					width: 700,
					height: 250
				},
				animation: {
					startup: true,
					easing: 'inAndOut'
				},
				enableInteractivity: true,
				hAxis: {
					textPosition: 'none',
					viewWindowMode: 'maximized',
					gridlines: { count: 0 }
				}
			}
		});
		$scope.positionChart.draw();

		function onReady() {
			//google.visualization.events.addListener($scope.traffic.getChart(), 'onmouseover', usefulHandler);
		}

		// Called
		function usefulHandler() {

		}
	};

	$scope.getData = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select *');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=A1:M5&sheet=Summary&headers=1&tq=' + queryString);
		query.send($scope.getDataResponse);
	};

	$scope.getOS = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select max(AC)');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=AC:AD&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.popOS);
	};

	$scope.popOS = function(response) {
		var datatable = response.getDataTable();
		$scope.topOS = datatable.getValue(0,0);
	};

	$scope.getResolution = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select max(AF)');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=AF:AG&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.popResolution);
	};

	$scope.popResolution = function(response) {
		var datatable = response.getDataTable();
		$scope.topResolution = datatable.getValue(0,0);
	};


	$scope.getKeys = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select G,H order by H desc limit 10');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=G:H&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.returnKeys);
	};

	$scope.newkeys = [];
	$scope.returnKeys = function(response) {
		var datatable = response.getDataTable();
		var numrows = datatable.getNumberOfRows();
		if(numrows > 10) {numrows = 10};
		$scope.topKeyword = datatable.getValue(0,0);
		console.log('topkey: ' + $scope.topKeyword);
		for(var i = 0; i < numrows; i++) {
			$scope.newkeys.push(datatable.getValue(i,0));
			//console.log(typeof $scope.newkeys[i]);
		}
	};

	$scope.getPages = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select T,U order by U desc limit 10');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=T:U&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.returnPages);
	};

	$scope.newpages = [];
	$scope.returnPages = function(response) {
		var datatable = response.getDataTable();
		var numrows = datatable.getNumberOfRows();
		if(numrows > 10) {numrows = 10};
		$scope.topPage = datatable.getValue(0,0);
		for(var i = 0; i < numrows; i++) {
			$scope.newpages.push(datatable.getValue(i,0));
		}
	};


	$scope.getDataResponse = function(response) {
//		console.log('getDataRes');
//		console.log($scope.myAccounts.ssId);
		//$scope.totalImpressions = response.table.rows;
		var data = response.getDataTable();
		//var newobj = data.toJSON();
		//	console.log(data.getColumnLabel(1));
		//	console.log(data.getValue(2,1));
		//	console.log(data.getNumberOfColumns());
		var d = new Date();
		var m = d.getMonth();
		var curr = m - 1;
		var last = curr - 1;

		var numcol = data.getNumberOfColumns();
		$scope.bounceRate = data.getValue(curr,8);
		$scope.pageviews = data.getValue(curr,5);
		$scope.sessions = data.getValue(curr,6);
		$scope.ppv = data.getValue(curr,7);
		$scope.duration = data.getValue(curr,9);
		$scope. impressions = data.getValue(curr,1);
		$scope.clicks = data.getValue(curr,2);
		$scope.CTR = data.getValue(curr,3);
		$scope.position = data.getValue(curr,4);
		$scope.pageLoadTime = data.getValue(curr,10);
		$scope.uniquePageviews = data.getValue(curr,11);
		$scope.bounces = data.getValue(curr,12);

		$scope.lastbounceRate = data.getValue(last,8);
		$scope.lastpageviews = data.getValue(last,5);
		$scope.lastsessions = data.getValue(last,6);
		$scope.lastppv = data.getValue(last,7);
		$scope.lastduration = data.getValue(last,9);
		$scope.lastpageLoadTime = data.getValue(last,10);
		$scope.lastuniquePageviews = data.getValue(last,11);
		$scope.lastbounces = data.getValue(last,12);

		$scope.lastImpressions = data.getValue(last,1);
		$scope.totalImpressions = data.getValue(curr,1);
		$scope.diffImpressions = $scope.totalImpressions - $scope.lastImpressions;
		$scope.lastClicks = data.getValue(last,2);
		$scope.lastCTR = data.getValue(last,3);
		$scope.lastPosition = data.getValue(last,4);
		$scope.totalClicks = data.getValue(curr,2);
		$scope.totalCTR = data.getValue(curr,3);
		$scope.avgPosition = data.getValue(curr,4);
		$scope.diffClicks = $scope.totalClicks - $scope.lastClicks;
		$scope.diffCTR = $scope.totalCTR - $scope.lastCTR;
		$scope.diffPosition = $scope.avgPosition - $scope.lastPosition;
		$scope.pageviewChart();
		$scope.bounceRateChart() ;
		$scope.sessionsChart() ;
		$scope.ppvChart();
		$scope.durationChart();
		$scope.loadtimeChart();
		$scope.uniqueChart();
		$scope.bounceChart();
		$scope.positionGauge();
		$scope.ctrGauge();
		$scope.clicksGauge();
		$scope.impressionGauge();
		$scope.$apply();
	}

	$scope.stats = [
		{
			clicks: null,
			impressions: null,
			ctr: null,
			position: null

		}
	];

	
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
angular.module('app.directives', [])

.directive('menuLink', function () {
	return {
		scope: {
			section: '='
		},
		templateUrl: 'templates/menu-link.html',
		link: function ($scope, $element) {
			var controller = $element.parent().controller();

			$scope.focusSection = function () {
				// set flag to be used later when
				// $locationChangeSuccess calls openPage()
				controller.autoFocusContent = true;
			};
		}
	};
})
	
.directive('menuToggle', [ '$timeout', function($timeout){
	return {
		scope: {
			section: '='
		},
		templateUrl: 'templates/sidemenu.html',
		link: function($scope, $element) {
			var controller = $element.parent().controller();

			$scope.isOpen = function() {
				return controller.isOpen($scope.section);
			};
			$scope.toggle = function() {
				controller.toggleOpen($scope.section);
			};

			var parentNode = element[0].parentNode.parentNode.parentNode;
			if (parentNode.classList.contains('parent-list-item')) {
				var heading = parentNode.querySelector('h2');
				element[0].firstChild.setAttribute('aria-describedby', heading.id);
			}
		}
	};
}]);
angular.module('app.services', [])

.factory('menu', ['$location', '$rootScope', function ($location, $rootScope) {

	var sections = [{
		name: 'Dashboard',
		state: 'dashboard',
		type: 'link'
	}];
	sections.push({
		name: 'Charts',
		state: 'charts',
		type: 'link'
	});
	sections.push({
	      name: 'Content',
	      state: 'content',
	      type: 'link'
	  });
	sections.push({
	      name: 'Forms',
	      state: 'forms',
	      type: 'link'
	  });
	sections.push({
	      name: 'List',
	      state: 'list',
	      type: 'link'
	  });
	sections.push({
	      name: 'Table',
	      state: 'table',
	      type: 'link'
	  });



	var self;

	return self = {
		sections: sections,

		toggleSelectSection: function (section) {
			self.openedSection = (self.openedSection === section ? null : section);
		},
		isSectionSelected: function (section) {
			return self.openedSection === section;
		},

		selectPage: function (section, page) {
			page && page.url && $location.path(page.url);
			self.currentSection = section;
			self.currentPage = page;
		}
	};

	function sortByHumanName(a, b) {
		return (a.humanName < b.humanName) ? -1 :
			(a.humanName > b.humanName) ? 1 : 0;
	}

}]);
(function(){

  angular
       .module('users')
       .controller('UserController', [
          'userService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
          UserController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function UserController( userService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
    var self = this;

    self.selected     = null;
    self.users        = [ ];
    self.selectUser   = selectUser;
    self.toggleList   = toggleUsersList;
    self.makeContact  = makeContact;

    // Load all registered users

    userService
          .loadAllUsers()
          .then( function( users ) {
            self.users    = [].concat(users);
            self.selected = users[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( user ) {
      self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeContact(selectedUser) {

        $mdBottomSheet.show({
          controllerAs  : "vm",
          templateUrl   : './src/users/view/contactSheet.html',
          controller    : [ '$mdBottomSheet', ContactSheetController],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * User ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
          this.user = selectedUser;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.contactUser = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();

(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Lia Lugo',
        avatar: 'svg-1',
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
        name: 'George Duke',
        avatar: 'svg-2',
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
        name: 'Gener Delosreyes',
        avatar: 'svg-3',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
        name: 'Lawrence Ray',
        avatar: 'svg-4',
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
        name: 'Ernesto Urbina',
        avatar: 'svg-5',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
        name: 'Gani Ferrer',
        avatar: 'svg-6',
        content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();

(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('users', [ 'ngMaterial' ]);


})();
