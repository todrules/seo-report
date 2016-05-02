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