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

	.controller('ToastCtrl', function($scope, $mdToast, $rootScope) {
		
		$scope.toastMsg = $rootScope.toastMsg;
		$scope.toastTitle = $rootScope.toastTitle;
		
		$scope.closeToast = function() {
			$mdToast.hide();
		};
	})

.controller('dashboardCtrl', function($scope, $state, $rootScope, $location, $mdToast, $document) {
	$scope.clientId = '306326458623-rno8o0ujbthci1b7v0dl7bbvk5n5913r.apps.googleusercontent.com';
	$scope.apiKey = 'AIzaSyD8bNqJJlPwrlwQY-QgPelHCp7NTAJRESo';
	$scope.scopes = 'https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.scripts';


	$rootScope.title = 'Summary Report';

	$scope.Math = window.Math;

	$scope.refreshThis = function() {
		$scope.newtraffic();
		$scope.newreferral();
		$scope.getData();
		$scope.acctData();
		$scope.getKeys();
		$scope.getPages();
		$scope.getTopKeys();
		$scope.getTopPages();
		$scope.getOS();
		$scope.getResolution();
		$scope.getClickKeys();
		$scope.newimpressionChart();
		$scope.getImpressionBar();
		$scope.newclicksChart();
		$scope.getClicksBar();
		$scope.newctrChart();
		$scope.getCtrBar();
		$scope.newpositionChart();
		$scope.getPositionBar();

		$scope.newpageviewsChart();
		$scope.getPageviewsBar();
		$scope.newppvChart();
		$scope.getPpvBar();
		$scope.newsessionsChart();
		$scope.getSessionsBar();
		$scope.newdurationsChart();
		$scope.getDurationsBar();
		$scope.newloadtimeChart();
		$scope.getLoadtimeBar();
		$scope.newuniqueChart();
		$scope.getUniqueBar();
		$scope.newbouncesChart();
		$scope.getBouncesBar();
		$scope.newbouncerateChart();
		$scope.getBouncerateBar();

		//$scope.gwtData();

	};

	$scope.myLineOptions = {
		legend: 'none',
		axisTitlesPosition: 'none',
		colors: ['#FE9701','#382934','#382934','#5E4557','#d6b45d','#ebd004','#b9b1a3','#314c63'],
		width: 850,
		height: '100%',
		interpolateNulls: true,
		lineWidth: 10,
		curveType: 'function',
		backgroundColor: 'none',
		chartArea: {
			top: 20,
			left: 0,
			width: 850,
			height: 300
		},
		animation: {
			startup: true,
			easing: 'inAndOut'
		},
		enableInteractivity: true,
		hAxis: {
			textPosition: 'none',
			baselineColor: '#fff',
			gridlines: {color: 'transparent'}
		},
		vAxis: {
			baselineColor: '#fff',
			gridlines: {
				color: '#333',
				count: 0}
		}
	};

	$scope.myBarOptions = {
		legend: 'none',
		axisTitlesPosition: 'none',
		width: 850,
		height: '100%',
		backgroundColor: 'none',
		annotations: {
			alwaysOutside: false
		},
		chartArea: {
			top: 20,
			left: 0,
			width: 850,
			height: 300
		},
		animation: {
			startup: true,
			easing: 'inAndOut'
		},
		enableInteractivity: true,
		series: {
			0: {
				color: '#2494E8'
			}
		},
		hAxis: {
			textPosition: 'none',
			baselineColor: '#fff',
			gridlines: {color: 'transparent'}
		},
		vAxis: {
			baselineColor: '#fff',
			gridlines: {
				color: '#333',
				count: 0}
		}
	};

	$scope.newimpressionChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,B');
		$scope.impressionChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:B&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'impression-container',
			'options': options
		});
		$scope.impressionChart.draw();
	};

	$scope.getImpressionBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,B');
		$scope.impressionBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:B&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'impression-bar',
			'options': options
		});
		$scope.impressionBar.draw();
	};

	$scope.newclicksChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,C');
		$scope.clicksChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:C&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'clicks-container',
			'options': options
		});
		$scope.clicksChart.draw();
	};

	$scope.getClicksBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,C');
		$scope.clicksBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:C&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'clicks-bar',
			'options': options
		});
		$scope.clicksBar.draw();
	};

	$scope.newctrChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,D');
		$scope.ctrChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:D&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'ctr-container',
			'options': options
		});
		$scope.ctrChart.draw();
	};

	$scope.getCtrBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,D');
		$scope.ctrBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:D&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'ctr-bar',
			'options': options
		});
		$scope.ctrBar.draw();
	};

	$scope.newpositionChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,E');
		$scope.positionChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:E&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'position-container',
			'options': options
		});
		$scope.positionChart.draw();
	};

	$scope.getPositionBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,E');
		$scope.positionBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:E&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'position-bar',
			'options': options
		});
		$scope.positionBar.draw();
	};

	$scope.newpageviewsChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,F');
		$scope.pageviewsChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:F&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'pageviews-container',
			'options': options
		});
		$scope.pageviewsChart.draw();
	};

	$scope.getPageviewsBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,F');
		$scope.pageviewsBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:F&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'pageviews-bar',
			'options': options
		});
		$scope.pageviewsBar.draw();
	};

	$scope.newppvChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,H');
		$scope.ppvChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:H&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'ppv-container',
			'options': options
		});
		$scope.ppvChart.draw();
	};

	$scope.getPpvBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,H');
		$scope.ppvBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:H&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'ppv-bar',
			'options': options
		});
		$scope.ppvBar.draw();
	};

	$scope.newsessionsChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,G');
		$scope.sessionsChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:G&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'sessions-container',
			'options': options
		});
		$scope.sessionsChart.draw();
	};

	$scope.getSessionsBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,G');
		$scope.sessionsBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:G&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'sessions-bar',
			'options': options
		});
		$scope.sessionsBar.draw();
	};

	$scope.newdurationsChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,J');
		$scope.durationsChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:J&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'duration-container',
			'options': options
		});
		$scope.durationsChart.draw();
	};

	$scope.getDurationsBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,J');
		$scope.durationsBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:J&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'duration-bar',
			'options': options
		});
		$scope.durationsBar.draw();
	};

	$scope.newloadtimeChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,K');
		$scope.loadtimeChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:K&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'loadtime-container',
			'options': options
		});
		$scope.loadtimeChart.draw();
	};

	$scope.getLoadtimeBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,K');
		$scope.loadtimeBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:K&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'loadtime-bar',
			'options': options
		});
		$scope.loadtimeBar.draw();
	};

	$scope.newuniqueChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,L');
		$scope.uniqueChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:L&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'unique-container',
			'options': options
		});
		$scope.uniqueChart.draw();
	};

	$scope.getUniqueBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,L');
		$scope.uniqueBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:L&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'unique-bar',
			'options': options
		});
		$scope.uniqueBar.draw();
	};

	$scope.newbouncesChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,M');
		$scope.bouncesChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:M&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'bounces-container',
			'options': options
		});
		$scope.bouncesChart.draw();
	};

	$scope.getBouncesBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,M');
		$scope.bouncesBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:M&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'bounces-bar',
			'options': options
		});
		$scope.bouncesBar.draw();
	};

	$scope.newbouncerateChart = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myLineOptions;
		var queryString = encodeURIComponent('SELECT A,I');
		$scope.bouncerateChart = new google.visualization.ChartWrapper({
			'chartType':'LineChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:I&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'bouncerate-container',
			'options': options
		});
		$scope.bouncerateChart.draw();
	};

	$scope.getBouncerateBar = function() {
		var ssId = $scope.myAccounts.ssId;
		var options = $scope.myBarOptions;
		var queryString = encodeURIComponent('SELECT A,I');
		$scope.bouncerateBar = new google.visualization.ChartWrapper({
			'chartType':'ColumnChart',
			'dataSourceUrl':'https://docs.google.com/spreadsheets/d/' + $scope.myAccounts.ssId + '/gviz/tq?&range=A:I&sheet=Summary&headers=1&tq=' + queryString,
			'containerId':'bouncerate-bar',
			'options': options
		});
		$scope.bouncerateBar.draw();
	};

	var last = {
		bottom: false,
		top: true,
		left: false,
		right: true
	};
	$scope.toastPosition = angular.extend({},last);
	$scope.getToastPosition = function() {
		sanitizePosition();
		return Object.keys($scope.toastPosition)
			.filter(function(pos) { return $scope.toastPosition[pos]; })
			.join(' ');
	};
	function sanitizePosition() {
		var current = $scope.toastPosition;
		if ( current.bottom && last.top ) current.top = false;
		if ( current.top && last.bottom ) current.bottom = false;
		if ( current.right && last.left ) current.left = false;
		if ( current.left && last.right ) current.right = false;
		last = angular.extend({},current);
	}
	$scope.showCustomToast = function(toastLoc) {

		var newMsg = '';
		var selectedDiv = '';
		var ttitles = '';

		switch(toastLoc) {
			case 0: {
				//Page Views
				newMsg = 'The total number of pageviews for the property.';
				selectedDiv = '#pageviewToast';
				ttitles = 'PAGE VIEWS';
				break;
			}
			case 1: {
				//ppv
				newMsg = 'The average number of pages viewed during a session, including repeated views of a single' +
					' page.';
				selectedDiv = '#ppvToast';
				ttitles = 'PAGES PER VISIT';
				break;
			}
			case 2: {
				//Sessions
				newMsg = 'The total number of sessions.';
				selectedDiv = '#sessionToast';
				ttitles = 'SESSIONS';
				break;
			}
			case 3: {
				//Session Duration
				newMsg = 'The average duration (in seconds) of user sessions.';
				selectedDiv = '#durationToast';
				ttitles = 'SESSION DURATION';
				break;
			}
			case 4: {
				// Page Load Time
				newMsg = 'Total time (in milliseconds), from pageview initiation to page load completion in the browser, the pages in the sample set take to load.';
				selectedDiv = '#loadtimeToast';
				ttitles = 'PAGE LOAD TIME';
				break;
			}
			case 5: {
				//Unique Page Views
				newMsg = 'Page views in different sessions are counted as unique page views. Both pagePath and pageTitle determine page view uniqueness.';
				selectedDiv = '#uniqueToast';
				ttitles = 'UNIQUE PAGE VIEWS';
				break;
			}
			case 6: {
				// Bounces
				newMsg = 'The total number of single page (or single engagement hit) sessions for the property.';
				selectedDiv = '#bounceToast';
				ttitles = 'BOUNCES';
				break;
			}
			case 7: {
				//Bounce Rate
				newMsg = 'The percentage of single-page session (i.e., session in which the person left the property from the first page). ';
				selectedDiv = '#bouncerateToast';
				ttitles = 'BOUNCE RATE';
				break;
			}
			default: {

			}

		}

		$rootScope.toastMsg = newMsg;
		$rootScope.toastTitle = ttitles;

		$mdToast.show({
			              controller: 'ToastCtrl',
			              templateUrl: 'templates/toast-template.html',
			              parent : $document[0].querySelector(selectedDiv),
			              hideDelay: 6000,
			              position: $scope.getToastPosition(),
							toastContent: newMsg,
							locals: {toastTitle: ttitles}
		              });
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
		google.setOnLoadCallback($scope.getPages);
		google.setOnLoadCallback($scope.getKeys);
		google.setOnLoadCallback($scope.getResolution);
		google.setOnLoadCallback($scope.getOS);
		$scope.getKeys();
		$scope.getPages();
		$scope.getTopKeys();
		$scope.getTopPages();
		$scope.getData();
		$scope.getResolution();
		$scope.getOS();
		$scope.getClickKeys();
		//$scope.gwtData();
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
				colors: ['#002544','#04674D','#F18F01','#18639B','#2494E8','#09F3B6','#004884','#18639B','#D78001','#0072D0'],
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
				colors: ['#002544','#04674D','#F18F01','#18639B','#2494E8','#09F3B6','#004884','#18639B','#D78001','#0072D0'],
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

	$scope.getData = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select *');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=A:M&sheet=Summary&headers=1&tq=' + queryString);
		query.send($scope.getDataResponse);
	};

	$scope.getOS = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select * order by AD desc');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=AC:AD&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.popOS);
	};

	$scope.popOS = function(response) {
		var datatable = response.getDataTable();
		$scope.topOS = datatable.getValue(0,0);
	};

	$scope.getResolution = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select * order by AG desc');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=AF:AG&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.popResolution);
	};

	$scope.popResolution = function(response) {
		var datatable = response.getDataTable();
		$scope.topResolution = datatable.getValue(0,0);
	};


	$scope.getKeys = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select G,H order by H desc limit 20');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=G:H&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.returnKeys);
	};

	$scope.getClickKeys = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select G,I order by I desc limit 20');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=G:I&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.returnClickKeys);
	};

	$scope.getTopKeys = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select G,H order by H desc limit 5');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=G:H&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.returnTopKeys);
	};

	
	$scope.getCombo = function(response) {
		var datatable = response.getDataTable();

		var wrapper = new google.visualization.ChartWrapper({
			chartType: 'ScatterChart',
			dataTable: datatable,
			containerId: 'combo-cont',
			options: {
				interpolateNulls: true,
				colors: ['#C5C65B','#382934','#382934','#5E4557','#d6b45d','#ebd004','#b9b1a3','#314c63'],
				width: 800,
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
					right: 0,
					width: 800,
					height: '100%'
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
				},
				series: {
					2: {targetAxisIndex: 1 }

				}

			}

		})
		wrapper.draw();
	}

	$scope.newkeys = [];
	$scope.returnKeys = function(response) {
		var datatable = response.getDataTable();

		var wrapper = new google.visualization.ChartWrapper({
			chartType: 'Table',
			dataTable: datatable,
			containerId: 'keys-cont',
			options: {
				showRowNumber: false,
				height: '100%',
				width: 520,
				cssClassNames: {
					headerRow: 'tblHeaderCls',
					tableRow: 'tblRowCls',
					headerCell: 'tblHeadCellCls',
					tableCell: 'tblCls'
				}
			}

		})
		wrapper.draw();
		
		var numrows = datatable.getNumberOfRows();
		if(numrows > 10) {numrows = 10};
		$scope.topKeyword = datatable.getValue(0,0);
		console.log('topkey: ' + $scope.topKeyword);
		for(var i = 0; i < numrows; i++) {
			$scope.newkeys.push(datatable.getValue(i,0));
			//console.log(typeof $scope.newkeys[i]);
		}
	};

	$scope.returnTopKeys = function(response) {
		var datatable = response.getDataTable();

		var wrapper = new google.visualization.ChartWrapper({
			chartType: 'Table',
			dataTable: datatable,
			containerId: 'keys-topfive',
			options: {
				showRowNumber: false,
				height: '100%',
				width: 520,
				cssClassNames: {
					headerRow: 'tblHeaderCls',
					tableRow: 'tblRowCls',
					headerCell: 'tblHeadCellCls',
					tableCell: 'tblCls'
				}
			}

		})
		wrapper.draw();

	};

	$scope.newclickkeys = [];
	$scope.returnClickKeys = function(response) {
		var datatable = response.getDataTable();
		
		var wrapper = new google.visualization.ChartWrapper({
			chartType: 'Table',
			dataTable: datatable,
			containerId: 'clickkeys-cont',
			options: {
				showRowNumber: false,
				height: '100%',
				width: 520,
				cssClassNames: {
					headerRow: 'tblHeaderCls',
					tableRow: 'tblRowCls',
					headerCell: 'tblHeadCellCls',
					tableCell: 'tblCls'
				}
			}

		})
		wrapper.draw();
		
		var numrows = datatable.getNumberOfRows();
		if(numrows > 10) {numrows = 10};
		
		for(var i = 0; i < numrows; i++) {
			$scope.newclickkeys.push(datatable.getValue(i,0));
			//console.log(typeof $scope.newkeys[i]);
		}
	};

	$scope.getPages = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select T,U order by U desc limit 10');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=T:U&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.returnPages);
	};

	$scope.getTopPages = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select T,U order by U desc limit 5');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=T:U&sheet=Apr-2016&headers=1&tq=' + queryString);
		query.send($scope.returnTopPages);
	};

	$scope.newpages = [];
	$scope.returnPages = function(response) {
		var datatable = response.getDataTable();

		var wrapper = new google.visualization.ChartWrapper({
			chartType: 'Table',
			dataTable: datatable,
			containerId: 'pages-cont',
			options: {
				showRowNumber: false,
				height: '100%',
				width: 520,
				cssClassNames: {
					headerRow: 'tblHeaderCls',
					tableRow: 'tblRowCls',
					headerCell: 'tblHeadCellCls',
					tableCell: 'tblClsSm'
				}
			}

		})
		wrapper.draw();
		
		var numrows = datatable.getNumberOfRows();
		if(numrows > 10) {numrows = 10};
		$scope.topPage = datatable.getValue(0,0);
		if($scope.topPage.match(/http:\/\//))
		{
			$scope.topPage = $scope.topPage.substring(7);
		}
		if($scope.topPage.match(/^www\./))
		{
			$scope.topPage = $scope.topPage.substring(4);
		}
		for(var i = 0; i < numrows; i++) {
			$scope.newpages.push(datatable.getValue(i,0));
		}
	};

	$scope.returnTopPages = function(response) {
		var datatable = response.getDataTable();

		var wrapper = new google.visualization.ChartWrapper({
			chartType: 'Table',
			dataTable: datatable,
			containerId: 'pages-topfive',
			options: {
				showRowNumber: false,
				height: '100%',
				width: 520,
				cssClassNames: {
					headerRow: 'tblHeaderCls',
					tableRow: 'tblRowCls',
					headerCell: 'tblHeadCellCls',
					tableCell: 'tblClsSm'
				}
			}

		})
		wrapper.draw();
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
		var m = d.getMonth() - 1;
		var y = d.getFullYear();
		var newdate = new Date(y, m);
		console.log(newdate);
		//var monthName = $rootScope.monthList[m];
		//var curr = monthName + '-' + y;
		//var last = curr - 1;

		var newrows = data.getFilteredRows([{column: 0, value: newdate}]);
		var curr = newrows[0];
		console.log('row month: ' + curr);
		var last = curr - 1;
		var numcol = data.getNumberOfColumns();
		console.log(typeof curr);
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
		//$scope.durationChart();
		//$scope.loadtimeChart();
		//$scope.uniqueChart();
		//$scope.bounceChart();
		//$scope.pageviewChart();
		//$scope.ppvChart();
	//	$scope.sessionsChart();
		//$scope.bounceRateChart();
		//$scope.positionGauge();
		//$scope.ctrGauge();
		//$scope.clicksGauge();
		//$scope.impressionGauge();
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

	$scope.lineChartOptions = {
		title:'',
		colors: ['#4c3b4d','#382934','#382934','#5E4557','#d6b45d','#ebd004','#b9b1a3','#314c63'],
		chartArea: {top: 0, left: 0, width: 800, height: 200 },
		titleTextStyle: {
			'font-size': '16px'
		},
		vAxis: { },
		hAxis: {
			viewWindow: {
				max: 100,
				min: 24
			},
		},
		interpolateNulls: true,
		lineWidth: 5,
		areaOpacity: 0,
		curveType: 'function',
		backgroundColor: '#f2f2f2',
		animation: {
			startup: true,
			easing: 'inAndOut'
		},
		legend: { position: 'bottom' },
		width: 800,
		height: 200
	};

	$scope.gwtData = function() {
		var ssId = $scope.myAccounts.ssId;
		var queryString = encodeURIComponent('select A,B,C,D,E limit 120');
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?&range=A:E&sheet=Yearly&headers=1&tq=' + queryString);
		query.send($scope.processData);
	}

	$scope.processData = function(response) {
		//var datatable = response.getDataTable();
		var options = $scope.lineChartOptions;
		var ssId = $scope.myAccounts.ssId;
		var query = 'https://docs.google.com/spreadsheets/d/' + ssId + '/gviz/tq?range=A:M&sheet=Summary&headers=1';

		$scope.impressionWrapper = new google.visualization.ChartWrapper();
		$scope.impressionWrapper.setChartType('LineChart');
		$scope.impressionWrapper.setDataSourceUrl(query);
		$scope.impressionWrapper.setQuery('SELECT A,B limit 120');
		$scope.impressionWrapper.setContainerId('impression-chart');
		$scope.impressionWrapper.setOptions(options);
		$scope.impressionWrapper.draw();

		$scope.clicksWrapper = new google.visualization.ChartWrapper();
		$scope.clicksWrapper.setChartType('LineChart');
		$scope.clicksWrapper.setDataSourceUrl(query);
		$scope.clicksWrapper.setQuery('SELECT A,C');
		$scope.clicksWrapper.setContainerId('clicks-chart');
		$scope.clicksWrapper.setOptions(options);
		$scope.clicksWrapper.draw();

		$scope.ctrWrapper = new google.visualization.ChartWrapper();
		$scope.ctrWrapper.setChartType('LineChart');
		$scope.ctrWrapper.setDataSourceUrl(query);
		$scope.ctrWrapper.setQuery('SELECT A,D LIMIT');
		$scope.ctrWrapper.setContainerId('ctr-chart');
		$scope.ctrWrapper.setOptions(options);
		$scope.ctrWrapper.draw();

		$scope.positionWrapper = new google.visualization.ChartWrapper();
		$scope.positionWrapper.setChartType('LineChart');
		$scope.positionWrapper.setDataSourceUrl(query);
		$scope.positionWrapper.setQuery('SELECT A,E');
		$scope.positionWrapper.setContainerId('position-chart');
		$scope.positionWrapper.setOptions(options);
		$scope.positionWrapper.draw();



	};

	
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});