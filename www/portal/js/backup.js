$scope.company = [
	{keywords: [
		{metrics: []}
	]},
	{competitors: [
		{metrics: []}
	]},
	{metrics: [

	]},
	{profile: [

	]}
];

$scope.companies = [
	{company: $scope.company}
];

$scope.findIndex = function(id, model) {

	var id = id;
	var model = model;
	for(var i = 0; i < model.length; i++) {
		if(model[i].id == id) {
			return i;
		}
	}
}

$scope.getCompanyKeywords = function(id) {
	var id = id;
	var index = $scope.findIndex(id, $scope.companies);
	console.log(index);

	Company.keywords({id: id}).$promise.then(function(resp) {
		$scope.keywords = resp;
		for(var j = 0; j < $scope.keywords.length; j++) {
			var keyid = $scope.keywords[j].id;
			var name = $scope.keywords[j].name;
			var keyword = {
				name: $scope.keywords[j].name,
				id: $scope.keywords[j].id
			}
			$scope.company[index].keywords.push(keyword);
			$scope.getKeywordMetrics($scope.keywords[j].id, id);
		}

	})
}

$scope.getKeywordMetrics = function(keywordId, companyId) {

	var keyId = keywordId;
	var id = id;
	var index = $scope.findIndex(id, $scope.companies);
	var keyIndex = $scope.findIndex(keyId, $scope.company[index].keywords);

	Keyword.metrics({id: keyId}).$promise.then(function(res) {
		if(res.length > 0) {
			$scope.company[index].keywords[keyIndex].push(res);

		}
	})
}

$scope.getCompetitors = function(id) {

	var index = $scope.findIndex(id, $scope.companies);

	Company.competitors({id: id}).$promise.then(function(res) {
		$scope.competitors = res;
		$scope.company[index].competitors.push(res);
		for(var i = 0; i < $scope.competitors.length; i++) {
			var compid = $scope.competitors[i].id;
			$scope.compname = $scope.competitors[i].name;
			$scope.getCompMetrics($scope.compname, compid, id);

		}


	})
}


//	Company.find().$promise.then(function(res) {
//		for(var i = 0; i < res.length; i++) {
//			$scope.companies = res;
//			$scope.company[i] = res[i];
//			$scope.getCompanyKeywords($scope.company[i].id);
//		}

//		Company.metrics({id: id}).$promise.then(function(resp) {
//			var obj = {
//				competitor: $scope.url,
//				domainAuthority: resp[0].domainAuthority,
//				mozRank: resp[0].mozRank,
//				mozTrust: resp[0].mozTrust,
//				followedLinks: resp[0].followedLinks,
//				totalExternalLinks: resp[0].totalExternalLinks,
//				linkingRootDomains: resp[0].linkingRootDomains
//			}
//			$scope.compdata.push(obj);
//		})
//	})

$scope.reportMetrics = [
	{name: 'keyword', headerCellClass: 'plain'},
	{name: 'minVolume', headerCellClass: 'plain', headerTooltip: 'How often a word or phrase is searched for on' +
	' Google each month.'},
	{name: 'maxVolume', headerCellClass: 'plain', headerTooltip: 'How often a word or phrase is searched for on' +
	' Google each month.'},
	{name: 'difficulty', headerCellClass: 'plain', headerTooltip: 'Score from 0 to 100 that estimates how' +
	' difficult it is to rank higher than current competitors on the first page of results.'},
	{name: 'opportunity', headerCellClass: 'plain', headerTooltip: 'Score from 0 to 100 that estimates the' +
	' relative click-through rate of organic web results for this keyword.'},
	{name: 'potential', headerCellClass: 'plain', headerTooltip: 'Score from 0 to 100. The higher the better.' +
	' This' +
	' score is calculated from all the other scores.', sort: { direction: 'desc', priority: 0 } }
];

$scope.gridOptions = {
	enableSorting: true,
	columnDefs: $scope.reportMetrics
}

$scope.compMetrics = [
	{name: 'competitor', headerCellClass: 'plain'},
	{name: 'domainAuthority', headerCellClass: 'plain', sort: { direction: 'desc', priority: 0 }, headerTooltip: 'Score from 0 to 100, predicting how well a website will rank on search engines. This metric is calculated based on the other metrics, like' +
	' MozRank and MozTrust.' },
	{name: 'mozRank', headerCellClass: 'plain', headerTooltip: 'Logarithmic score from 0 to 10, making it easy' +
	' to go from 0 to 3 but difficult to move from 8 to 9. An average MozRank is 3. You can raise this score by' +
	' improving the quality of incoming links.'},
	{name: 'mozTrust', headerCellClass: 'plain', headerTooltip: 'Logarithmic score from 0 to 10, making it easy' +
	' to go from 0 to 3 but difficult to move from 8 to 9. It is determined by the distance of a webpage from a' +
	' trusted seed site.'},
	{name: 'followedLinks', headerCellClass: 'plain'},
	{name: 'totalExternalLinks', headerCellClass: 'plain'},
	{name: 'linkingRootDomains', headerCellClass: 'plain'}
];

$scope.compOptions = {
	enableSorting: true,
	columnDefs: $scope.compMetrics
}

$scope.data = [];
$scope.compdata = [];

$scope.viewReport = function(id, url) {
	$scope.minVolume = [];
	$scope.difficulty = [];
	$scope.opportunity = [];
	$scope.potential = [];
	$scope.data = [];
	$scope.keydata = [];
	var id = id;
	$scope.keywords = [];
	$scope.url = url;
	$scope.keyStr = '';

	Company.keywords({id: id}).$promise.then(function(resp) {
		$scope.keywords = resp;
		for(var i = 0; i < $scope.keywords.length; i++) {
			var keyid = $scope.keywords[i].id;
			$scope.name = $scope.keywords[i].name;
			$scope.keyStr = $scope.keyStr + ' ' + $scope.keywords[i].name;
			$scope.getMetrics($scope.name, keyid);
		}

	})
	Company.metrics({id: id}).$promise.then(function(resp) {
		var obj = {
			competitor: $scope.url,
			domainAuthority: resp[0].domainAuthority,
			mozRank: resp[0].mozRank,
			mozTrust: resp[0].mozTrust,
			followedLinks: resp[0].followedLinks,
			totalExternalLinks: resp[0].totalExternalLinks,
			linkingRootDomains: resp[0].linkingRootDomains
		}
		$scope.compdata.push(obj);
	})

	Company.competitors({id: id}).$promise.then(function(res) {
		$scope.competitors = res;
		console.log($scope.competitors);
		for(var i = 0; i < $scope.competitors.length; i++) {
			var compid = $scope.competitors[i].id;
			$scope.compname = $scope.competitors[i].name;
			$scope.getCompMetrics($scope.compname, compid, id);

		}


	})
	//$scope.compConfig();
}

$scope.compChartData = {};
$scope.compChartData.names = [];
$scope.compChartData.metrics = [];

$scope.getCompMetrics = function(name, compid, id) {
	var reportData = [];
	var name = name;
	var compid = compid;
	var id = id;

	Competitor.metrics({id: compid}).$promise.then(function(res) {
		var obj = {
			competitor: name,
			domainAuthority: res[0].domainAuthority,
			mozRank: res[0].mozRank,
			mozTrust: res[0].mozTrust,
			followedLinks: res[0].followedLinks,
			totalExternalLinks: res[0].totalExternalLinks,
			linkingRootDomains: res[0].linkingRootDomains
		}

		reportData = [
			obj.domainAuthority, obj.mozRank, obj.mozTrust, obj.followedLinks, obj.totalExternalLinks, obj.linkingRootDomains
		];

		$scope.compChartData.metrics.push(reportData);
		console.log($scope.compChartData.metrics);
		$scope.compdata.push(obj);
		$scope.compChartData.names.push(obj.competitor);

	})
	$scope.compOptions.data = $scope.compdata;



}
$scope.myConfig = {

	type: "bar",
	backgroundColor: "white",
	id: 'bargraph',
	title: {
		text: "Tech Giant Quarterly Revenue",
		fontColor: "#7E7E7E",
		backgroundColor: "none",
		fontSize: "22px",
		alpha: 1,
		y: "15px",
		x: "15px"

	},
	plotarea: {
		margin: "80 60 100 60",
		y: "125px"
	},
	legend: {
		layout: "x3",
		y: "13%",
		x: "34.5%",
		overflow: "page",
		alpha: 0.05,
		shadow: false,
		marker: {
			type: "circle",
			borderColor: "none",
			size: "10px"
		},
		borderWidth: 0,
		maxItems: 3,
		toggleAction: "remove",
		pageOn: {
			backgroundColor: "#000",
			size: "10px",
			alpha: 0.65
		},
		pageOff: {
			backgroundColor: "#7E7E7E",
			size: "10px",
			alpha: 0.65
		},
		pageStatus: {
			color: "black"
		}
	},
	plot: {
		animation: {
			effect: "ANIMATION_SLIDE_BOTTOM"
		}
	},
	scaleX: {
		lineColor: "#7E7E7E",

		item: {
			fontColor: "#7e7e7e"
		},
		guide: {
			visible: false
		}
	},
	scaleY: {
		lineColor: "#7E7E7E",
		item: {
			fontColor: "#7e7e7e"
		},
		guide: {
			visible: true
		},
		label: {
			text: "$ Billions",
			fontFamily: "arial",
			fontAngle: 0,
			bold: true,
			fontSize: "14px",
			fontColor: "#7E7E7E",
			offsetY: "-190px",
			offsetX: "20px"
		},
	},
	series: [
		{
			values: null,
			text: '',
			backgroundColor: '#0072D0'
		}

	]
}

$scope.compConfig = function() {


	var myTheme = ['#0072D0', '#7CC900', '#401A7F', '#004884', '#65A300', '#2E125B', '#228CDB', '#8CE300', '#999999'];

	console.log($scope.newdata);
	for(var i = 0; $scope.newdata.length; i++) {
		console.log($scope.myConfig.series.length);
		console.log($scope.newdata.metrics[i]);
		$scope.myConfig.series[i].values = $scope.newdata.metrics[i];
		$scope.myConfig.series.push([]);
		//$scope.myConfig.series[0].backgroundColor = myTheme[0];
		//$scope.myConfig.series[0].text = $scope.compChartData.names;
	}



	//	console.log($scope.myConfig);
}

$scope.keyChart = function() {
	var thisconfig = {
		backgroundColor: '#f7f7f7',
		globals: {
			fontFamily: 'Roboto'
		},
		gui: {
			behaviors: [
				{id: "DownloadPDF", enabled: "none"},
				{id: "CrosshairHide", enabled: "none"},
				{id: "Reload", enabled: "none"},
				{id: "Print", enabled: "none"},
				{id: "DownloadSVG", enabled: "none"},
				{id: "ViewSource", enabled: "none"},
				{id: "ViewPNG",	enabled: "none"}]
		},
		graphset: [
			{
				type: null,
				x: '2.25%',
				y: '1%',
				id: 'keyChart',
				backgroundColor: 'none',
				title: {
					text: $scope.rowData.keyword,
					textAlign: 'left',
					fontSize: '24px',
					fontColor: '#401A7F',
					backgroundColor: 'none'
				}
			},
			{
				type: 'pie',
				height: 180,
				width: 180,
				x: '20',
				y: '50',
				id: 'diffChart',
				backgroundColor: '#ffffff',
				borderRadius: 4,
				title:{
					text: 'Difficulty',
					textAlign: 'left',
					backgroundColor: 'none',
					fontColor: '#666',
					fontSize: '16px',
					offsetY: '10%',
					offsetX: '10%'
				},
				valueBox:{
					visible: true
				},
				plotarea:{
					margin: "20% 0% 0% 0%"
				},
				plot: {
					slice:50,
					refAngle:270,
					detach:false,
					hoverState:{
						visible: false
					},
					valueBox:{
						visible:true,
						type: 'first',
						connected: false,
						placement: 'center',
						text: '%v',
						fontColor:"#666",
						fontSize:"28px",
						fontFamily: 'Roboto',
						rules: [
							{
								rule: '%p != 0',
								visible: false
							}
						]
					},
					animation:{
						delay: 0,
						effect: 2,
						speed: 1000,
						method: 5,
						sequence: 1
					}
				},
				series:[
					{
						values:[$scope.rowData.difficulty],
						text:"Difficulty",
						backgroundColor: "#228CDB",
						borderWidth:"0px",
						shadow: 0
					},
					{
						values:[(100 - $scope.rowData.difficulty)],
						backgroundColor:"#dadada",
						alpha:"0.5",
						borderColor:"#dadada",
						borderWidth:"1px",
						shadow: 0
					}
				]
			},
			{
				type:"pie",
				height:'180',
				width:'180',
				x:'220',
				y:'50',
				id: 'oppChart',
				backgroundColor: '#ffffff',
				borderRadius: 4,
				title:{
					text: 'Opportunity',
					textAlign: 'left',
					backgroundColor: 'none',
					fontColor: '#666',
					fontSize: '16px',
					offsetY: '10%',
					offsetX: '10%'
				},
				'value-box':{
					'visible':true
				},
				plotarea:{
					margin:'20% 0% 0% 0%'
				},
				plot: {
					slice:50,
					refAngle:270,
					detach:false,
					hoverState:{
						visible: false
					},
					valueBox:{
						visible:true,
						type: 'first',
						connected: false,
						placement: 'center',
						text: '%v',
						fontColor:"#666",
						fontSize:"28px",
						fontFamily: 'Roboto',
						rules: [
							{
								rule: '%p != 0',
								visible: false
							}
						]
					},
					animation:{
						delay: 0,
						effect: 2,
						speed: 1000,
						method: 5,
						sequence: 1
					}
				},
				series:[
					{
						values:[$scope.rowData.opportunity],
						text:'Opportunity',
						backgroundColor:'#7CC900',
						borderWidth:'0px',
						shadow: 0
					},
					{
						values:[(100 - $scope.rowData.opportunity)],
						backgroundColor:'#dadada',
						alpha: 0.5,
						borderColor:'#dadada',
						borderWidth:'1px',
						shadow: 0
					}
				]
			},
			{
				type: 'pie',
				height: '180',
				width: '180',
				x: '420',
				y: '50',
				id: 'potChart',
				backgroundColor: '#ffffff',
				borderRadius: 4,
				title:{
					text: 'Potential',
					textAlign: 'left',
					backgroundColor: 'none',
					fontColor: '#666666',
					fontSize: '16px',
					offsetY: '10%',
					offsetX: '10%'
				},
				valueBox:{
					visible: true
				},
				plotarea:{
					margin: "20% 0% 0% 0%"
				},
				plot: {
					slice:50,
					refAngle:270,
					detach:false,
					hoverState:{
						visible: false
					},
					valueBox:{
						visible:true,
						type: 'first',
						connected: false,
						placement: 'center',
						text: '%v',
						fontColor:"#666",
						fontSize:"28px",
						fontFamily: 'Roboto',
						rules: [
							{
								rule: '%p != 0',
								visible: false
							}
						]
					},
					animation:{
						delay: 0,
						effect: 2,
						speed: 1000,
						method: 5,
						sequence: 1
					}
				},
				series:[
					{
						values:[$scope.rowData.potential],
						text:"Potential",
						backgroundColor: "#401A7F",
						borderWidth:"0px",
						shadow: 0
					},
					{
						values:[(100 - $scope.rowData.potential)],
						backgroundColor:"#dadada",
						alpha:"0.5",
						borderColor:"#dadada",
						borderWidth:"1px",
						shadow: 0
					}
				]
			},
			{
				type: 'wordcloud',
				height: 450,
				width: 400,
				x: 620,
				y: 50,
				backgroundColor: '#ffffff',
				borderRadius: 4,
				title:{
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
					palette: ["#004884", "#65A300", "#3A1772", "#228CDB", "#65A300", "#003A6A", "#1D0B39", "#D8D8D8"],
					text: $scope.keyStr
				}
			},
			{
				type:'bar',
				height: 250,
				width: 580,
				x: 20,
				y: 250,
				backgroundColor: '#ffffff',
				borderRadius: 4,
				legend:{
					toggleAction: 'remove',
					layout: 'x3',
					x: '40%',
					shadow: false,
					borderColor: 'none',
					backgroundColor: 'none',
					item:{
						fontColor: '#666666'
					},
					marker:{
						type: 'circle',
						borderWidth: 0
					}
				},
				plot: {
					stacked: true,
					stackType: 'normal',
					backgroundColor: '#666666',
					animation: {
						effect: 4
					},
					tooltip: {
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
					values: $scope.partial,
					lineColor: '#adadad',
					lineWidth: '1px',
					visible: false,
					guide: {
						visible: false
					},
					items: {
						visible: false,
						alpha: 0
					},
					tick: {
						visible: false
					}
				},
				scaleY: {
					values: '0:300:100',
					lineColor: 'none',
					item: {
						fontSize: '10px',
						offsetX: '2%'
					},
					guide: {
						lineStyle: 'solid',
						lineColor: '#adadad'
					},
					tick: {
						visible: false
					}
				},
				series: [
					{
						text: 'Difficulty',
						backgroundColor: '#228CDB',
						values: $scope.difficulty
					},
					{
						text: 'Opportunity',
						values: $scope.opportunity,
						backgroundColor: '#7CC900',
					},
					{
						text: 'Potential',
						values: $scope.potential,
						backgroundColor: '#401A7F',
					}
				]
			}
		]
	};

	zingchart.render({ // Render Method[3]
		id:'myChart',
		data: thisconfig,
		height: 520,
		width: '100%'
	});
}

$scope.rowData = {
	difficulty: null,
	keyword: '',
	maxVolume: null,
	minVolume: null,
	opportunity: null,
	potential: null
};





$scope.potential = [];
$scope.partial = [];
$scope.difficulty = [];
$scope.opportunity = [];
$scope.gridOptions = { enableRowSelection: true, enableRowHeaderSelection: false };
$scope.gridOptions.multiSelect = false;
$scope.gridOptions.modifierKeysToMultiSelect = false;
$scope.gridOptions.noUnselect = true;
$scope.gridOptions.onRegisterApi = function( gridApi ) {
	$scope.gridApi = gridApi;
	$scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
		//	var msg = 'row selected ' + row.isSelected;
		$scope.newkeyword = row.entity.keyword;
		var diff = row.entity.difficulty;
		var opp = row.entity.opportunity;
		var pot = row.entity.potential;
		$scope.newData = [
			diff, opp, pot
		]
		var charts = ['diffChart', 'oppChart', 'potChart'];
		
		for(i = 0; i < $scope.newData.length; i++) {
			zingchart.exec('myChart', 'setseriesvalues', {
				graphid: charts[i],
				plotindex : 0,
				values : [$scope.newData[i]],
				update: false
			});
			zingchart.exec('myChart', 'setseriesvalues', {
				graphid: 'diffChart',
				plotindex : 1,
				values : [(100 - $scope.newData[i])],
				update: false
			});
		}
		zingchart.exec('myChart', 'modify', {
			graphid : 'keyChart',
			object : 'title',
			data : {
				text : $scope.newkeyword
			}
		});
		zingchart.exec('myChart', 'update');
	});
};


$scope.getMetrics = function(name, id) {
	//var reportData = [];
	$scope.partial = [];
	$scope.difficulty = [];
	$scope.opportunity = [];
	var name = name;
	var keyid = id;
	Keyword.metrics({id: keyid}).$promise.then(function(res) {
		if(res.length > 0) {
			var obj = {
				keyword: name,
				minVolume: res[0].minVolume,
				maxVolume: res[0].maxVolume,
				difficulty: res[0].difficulty,
				opportunity: res[0].opportunity,
				potential: res[0].potential
			}
			$scope.data.push(obj);
			//$scope.keydata = $scope.keydata + obj.keyword;
			$scope.difficulty.push(obj.difficulty);
			$scope.opportunity.push(obj.opportunity);
			$scope.potential.push(obj.potential);
			$scope.partial.push(obj.keyword);

		}
	})
	$scope.gridOptions.data = $scope.data;
	$timeout(function() {
		$scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);
		$scope.keyChart();
		$scope.newdata = $scope.compChartData;
		$scope.compConfig();
	},500);


}
