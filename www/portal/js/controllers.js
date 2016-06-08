angular.module('app.controllers', [])

.controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout', '$rootScope', '$state', '$location', 'menu', function($scope, $mdSidenav, $timeout, $rootScope, $state, $location, menu) {

	$scope.user = $rootScope.user;
	
	root = $rootScope;
	$scope = $rootScope;
	
	$scope.logout = function() {
		gapi.analytics.auth.signOut();
		$rootScope.authenticated = false;
		$rootScope.user = null;
		$state.go('logout');
	}

	$scope.close = function() {
		$mdSidenav('left').close()
			.then(function(){

			});
	};

	$scope.toggleLeft = function() {
		$mdSidenav('left').toggle()
			.then(function(){

			});
	};
	var vm = this;

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

}])

.controller('mgmtCtrl', ['$scope', '$timeout', 'Company', 'Keyword', 'Competitor', '$rootScope', '$state', function($scope, $timeout, Company, Keyword, Competitor, $rootScope, $state) {

	$scope.logout = function() {
		gapi.analytics.auth.signOut();
		$rootScope.authenticated = false;
		$rootScope.user = null;
		$state.go('logout');
	}

	$scope.myDate = new Date();
	$scope.maxDate = new Date(
		$scope.myDate.getFullYear(),
		$scope.myDate.getMonth(),
		$scope.myDate.getDate()
	);

	Company.find().$promise.then(function(res) {
		$scope.myCompanies = res;
		$scope.companies = res;
	});

	$scope.keyList = [];
	$scope.keywords = function (list) {
		$scope.keyList = [];
		var list = list;
	//	console.log(list);
		var lines;
		lines = list.match(/[^\r\n]+/g);
	//	console.log(lines);
		for(var i = 0; i < lines.length; i++) {
			var keywordlist = {
				name: '',
				companyId: $scope.keywords.companyId
			};
			keywordlist.name = lines[i];
			$scope.keyList.push(keywordlist);
		}
		for(var k = 0; k < $scope.keyList.length; k++) {

			data = $scope.keyList[k];
			Keyword.create(data).$promise.then(function(res) {
				console.log(res);
			});
		}

		//console.log($scope.keyList);
		//$scope.$apply();
	}

	$scope.newComp = {};

	$scope.addCompetitor = function(complexForm) {

		var data = $scope.newComp;

		console.log(data);
		Competitor.create(data).$promise.then(function(res) {
			console.log(res);
			
		});
	};




}])

.controller('loginCtrl', function($scope, Operator, $rootScope, $mdDialog, $state) {

	$scope.logout = function() {
		gapi.analytics.auth.signOut();
		$rootScope.authenticated = false;
		$rootScope.user = null;
		$state.go('logout');
	}

	$scope.showAdvanced = function() {
		$mdDialog.show({
			controller: $scope.loginCtrl,
			templateUrl: 'portal/templates/login.html',
			parent: angular.element(document.body),
			clickOutsideToClose:false
		})
			.then(function(answer) {
				$scope.user = $rootScope.user;
			}, function() {
				$scope.status = 'You cancelled the dialog.';
			});
	};

	$scope.loginCtrl = function($scope, $mdDialog, Operator) {
		$scope.hide = function() {
			$mdDialog.hide();
		};
		$scope.cancel = function() {
			$mdDialog.cancel();
		};
		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
		$scope.login = function(myForm) {
			var data = {
				email: myForm.email.$viewValue,
				password: myForm.password.$viewValue
			}
			Operator.login(data).$promise.then(function(res) {
				//console.log(res);
				if(!res.error) {

					$rootScope.user = res;
					$rootScope.authenticated = true;
					$mdDialog.hide(myForm);
					return res;
				}
				else {
					console.log(res.error.message);
				};

			})

		};
	}

})

.controller('editClientCtrl', ['$scope', 'Company', '$timeout', '$rootScope', '$state',  function($scope, Company, $timeout, $rootScope, $state) {
	
	$scope.mode = '';

	$scope.ss = 'plaster';
	$scope.logo = 'plaster';


	document.getElementById("ss_upload").addEventListener("click", function($scope, $rootScope) {

		cloudinary.openUploadWidget({ cloud_name: 'grooveio88', upload_preset: 'portal'},
			function(error, result) {
				for(var i = 0; i < result.length; i++) {
					console.log(result[i]);
					$scope.ss = result[i].public_id;
					var img = document.getElementById('ssImg');
					img.src = 'https://res.cloudinary.com/grooveio88/image/upload/bo_1px_solid_rgb:ccc,c_fit,h_300,o_100,r_0,w_300/' + $scope.ss + '.jpg';
					$scope.$apply;

					//$scope.logo = result[i].public_id;
					console.log(result[i].public_id);
				}
			});

	}, false);

	document.getElementById("upload_widget_opener").addEventListener("click", function($scope, $rootScope) {

		cloudinary.openUploadWidget({ cloud_name: 'grooveio88', upload_preset: 'portal'},
			function(error, result) {
				for(var i = 0; i < result.length; i++) {
					console.log(result[i]);
					$scope.logo = result[i].public_id;
					var img = document.getElementById('logoImg');
					img.src = 'https://res.cloudinary.com/grooveio88/image/upload/bo_1px_solid_rgb:ccc,c_fit,h_150,o_100,r_0,w_300/' + $scope.logo + '.jpg';
						$scope.$apply;

					//$scope.logo = result[i].public_id;
					console.log(result[i].public_id);
				}



			});

	}, false);


	$scope.$on('cloudinary', function(event, args) {

		$scope.ss = $rootScope.ss;
		$scope.logo = $rootScope.logo;
	});
	
	$scope.addCompany = function(myForm) {
		$scope.mode = 'indeterminate';
		var data = {
			name: myForm.name.$viewValue,
			poc: myForm.poc.$viewValue,
			url: myForm.url.$viewValue,
			profileId: myForm.profileId.$viewValue,
			sheetId: myForm.sheetId.$viewValue,
			webmasterAcct: myForm.webmasterAcct.$viewValue
		}

		$timeout(function() {
			Company.create(data).$promise.then(function(res) {
				//console.log(res);
				$scope.mode = '';
				if(!res.error) {
					console.log(res);
					$scope.successMsg = true;
				} else {
					console.log(res.error.message);
				};

			})
		});
	}
}])

.controller('signupCtrl', function($scope, Operator) {

	$scope.signup = function(myForm) {
		var data = {
			firstName: myForm.firstName.$viewValue,
			lastName: myForm.lastName.$viewValue,
			phone: myForm.phone.$viewValue,
			email: myForm.email.$viewValue,
			password: myForm.password.$viewValue
		}

		Operator.create(data).$promise.then(function(res) {
			//console.log(res);
			if(!err) {
				console.log(res);
				$scope.successMsg = true;
			} else {
				console.log(err.message);
			};
			
		})
	}
})

	.controller('uploadCtrl', function($scope, $timeout, Company, CompanyMetric, CompetitorMetric, KeywordMetric) {

		$scope.percentLoaded = 0;
		$scope.completed = false;
		$scope.fileparsed = false;
		$scope.uploadErr;

		Company.find().$promise.then(function(res) {
			$scope.companies = res;
		});
		$scope.mydata = {};

		$timeout(function() {
			$scope.createView();
		},2000);

		$scope.createView = function() {

			$scope.view2 = new gapi.analytics.ext.ViewSelector2({
				container: 'view-selector-container',
			}).execute();

			$scope.view2.on('viewChange', function(data) {

			});
		}

		$scope.upload = function (file) {
			$scope.compReport = [];
			$scope.uploadErr = '';
			$scope.completed = false;
			$scope.fileparsed = false;
			$scope.percentLoaded = 0;
			$scope.reader = new FileReader();
			if(file) {
				$scope.reader.readAsText(file, "UTF-8");
				$scope.reader.onprogress = function(evt) {
					if (evt.lengthComputable) {
						$scope.percentLoaded = Math.round((evt.loaded / evt.total) * 100);

					}
				}
				$scope.reader.onload = function(evt) {
					$scope.result = evt.target.result;
					$timeout(function() {
						$scope.completed = true;
					},1000);
					var lines, data, headers;
					lines = $scope.result.match(/[^\r\n]+/g);
					for(var m = 0; m < lines.length - 5; m++) {
						l = lines[m + 5];
						data = l.split(',');
							var obj = {
								competitor: data[0],
								month: data[1],
								domainAuthority: data[2],
								mozRank: data[3],
								mozTrust: data[4],
								followedLinks: data[5],
								totalExternalLinks: data[6],
								linkingRootDomains: data[9]

							};
							$scope.compReport.push(obj);
						if(m == lines.length - 6) {
							$timeout(function() {
								$scope.fileparsed = true;
							},1000);
						}
					}
					console.log($scope.compReport);
					$scope.$apply();
				}
				$scope.reader.onerror = function(evt) {
					switch(evt.target.error.code) {
						case evt.target.error.NOT_FOUND_ERR:
							$scope.uploadErr = 'File Not Found!';
							break;
						case evt.target.error.NOT_READABLE_ERR:
							$scope.uploadErr = 'File is not readable';
							break;
						case evt.target.error.ABORT_ERR:
							$scope.uploadErr = 'File has been aborted.';
							break; // noop
						default:
							$scope.uploadErr = 'An error occurred reading this file.';
					};
				}
				$scope.reader.onabort = function() {
					return;
				}
			} else {
				console.log('nofile');
			}
		}


		$scope.uploadKeywords = function (file) {
			$scope.keyReport = [];
			$scope.uploadErr = '';
			$scope.completed = false;
			$scope.fileparsed = false;
			$scope.percentLoaded = 0;
			$scope.reader = new FileReader();
			if(file) {
				$scope.reader.readAsText(file, "UTF-8");
				$scope.reader.onprogress = function(evt) {
					if (evt.lengthComputable) {
						$scope.percentLoaded = Math.round((evt.loaded / evt.total) * 100);
					
					}
				}
				$scope.reader.onload = function(evt) {
					$scope.result = evt.target.result;
					$timeout(function() {
						$scope.completed = true;
					},1000);

					var lines, data, headers;
					lines = $scope.result.match(/[^\r\n]+/g);
					for(var m = 0; m < lines.length - 13; m++) {
						l = lines[m + 13];
						data = l.split(',');
						//data[j] == 'n/a' ? null : data[j];
						var obj = {
							keyword: data[0],
							minVolume: data[1],
							maxVolume: data[2],
							difficulty: data[3],
							opportunity: data[4],
							potential: data[6],
							month: data[7],

						};
						$scope.keyReport.push(obj);
						if(m == lines.length - 14) {
							$timeout(function() {
								$scope.fileparsed = true;
							},1000);
						}
					}

					console.log($scope.keyReport);
					$scope.$apply();
				}
				$scope.reader.onerror = function(evt) {
					switch(evt.target.error.code) {
						case evt.target.error.NOT_FOUND_ERR:
							$scope.uploadErr = 'File Not Found!';
							break;
						case evt.target.error.NOT_READABLE_ERR:
							$scope.uploadErr = 'File is not readable';
							break;
						case evt.target.error.ABORT_ERR:
							$scope.uploadErr = 'File has been aborted.';
							break; // noop
						default:
							$scope.uploadErr = 'An error occurred reading this file.';
					};
				}
				$scope.reader.onabort = function() {
					return;
				}
			} else {
				return error;
			}
		}
		$scope.saveFile = false;

		$scope.saveData = function() {
			$scope.saveFile = false;

			var report = [];
			var companyId = 0;
			companyId = Number($scope.mydata);
			for(var p = 0; p < $scope.companies.length; p++) {
				console.log($scope.companies[p].id);
				console.log(companyId);
				if($scope.companies[p].id === companyId) {
					companyUrl = $scope.companies[p].url;
					break;
				}
			}
			for(var k = 0; k < $scope.compReport.length; k++) {
				if(companyUrl == $scope.compReport[k].competitor) {
					console.log(companyUrl);
					var dd = Date.parse($scope.compReport[k].month);
					var parsed = new Date(dd);
					now = new Date();
					timestamp = new Date(now.getFullYear(), parsed.getMonth(), 1, 0, 0, 0, 0);

					var myObj = {
						companyId: companyId,
						month: timestamp,
						domainAuthority: Number($scope.compReport[k].domainAuthority),
						mozRank: Number($scope.compReport[k].mozRank),
						mozTrust: Number($scope.compReport[k].mozTrust),
						followedLinks: Number($scope.compReport[k].followedLinks),
						totalExternalLinks: Number($scope.compReport[k].totalExternalLinks),
						linkingRootDomains: Number($scope.compReport[k].linkingRootDomains)

					};

					CompanyMetric.create(myObj).$promise.then(function(respo) {
						console.log(respo);
					})
					break;
				}
			}
			Company.competitors({id: companyId}).$promise.then(function(res) {
				var competitors = res;

				for(var i = 0; i < competitors.length; i++) {
					for(var j = 0; j < $scope.compReport.length; j++) {
						var d = Date.parse($scope.compReport[j].month);
						var parsed = new Date(d);
						now = new Date();
						timestamp = new Date(now.getFullYear(), parsed.getMonth(), 1, 0, 0, 0, 0);
						var obj = {
							month: timestamp,
							domainAuthority: Number($scope.compReport[j].domainAuthority),
							mozRank: Number($scope.compReport[j].mozRank),
							mozTrust: Number($scope.compReport[j].mozTrust),
							followedLinks: Number($scope.compReport[j].followedLinks),
							totalExternalLinks: Number($scope.compReport[j].totalExternalLinks),
							linkingRootDomains: Number($scope.compReport[j].linkingRootDomains)

						};
						if(competitors[i].url == $scope.compReport[j].competitor) {
							obj.competitorId = competitors[i].id;
							CompetitorMetric.create(obj).$promise.then(function(resp) {
									console.log(resp);
							})
							break;
						}
					}

				}
			})

		}
		$scope.keyData = [];
		$scope.saveKeys = function(myForm) {
			//var companyId = $scope.data.companyId;
			$scope.keyData = [];
			$scope.measuredData = [];
			$scope.saveFile = false;
			var	report = $scope.keyReport;

			var companyId = 0;
			companyId = Number($scope.mydata);
			var keywords = [];
			Company.keywords({id: companyId}).$promise.then(function(resp) {
				keywords = resp;
				for(var i = 0; i < report.length; i++) {
					var d = Date.parse(report[i].month);
					var parsed = new Date(d);
					now = new Date();
					timestamp = new Date(now.getFullYear(), parsed.getMonth(), 1, 0, 0, 0, 0);
					var myObj = {
						month: timestamp,
						minVolume: Number(report[i].minVolume),
						maxVolume: Number(report[i].maxVolume),
						difficulty: Number(report[i].difficulty),
						opportunity: Number(report[i].opportunity),
						potential: Number(report[i].potential)

					};
					for(var n = 0; n < keywords.length; n++) {
						if(report[i].keyword == keywords[n].name) {
							myObj.keywordId = keywords[n].id;
							$scope.keyData.push(myObj);

							KeywordMetric.create($scope.keyData[i]).$promise.then(function(res) {
								if(!res.error) {
									//console.log('success');
								}
							});
							break;
						}
					}

				}
				$scope.saveFile = true;
				console.log($scope.keyData);
			})



		}
	})

.controller('clientCtrl', function ($scope, Company, $stateParams) {

	$scope.compId = $stateParams.id;
	console.log($scope.compId);

	$scope.img = document.getElementById('headerImg');
	$scope.img.src = 'https://res.cloudinary.com/grooveio88/image/upload/bo_1px_solid_rgb:ccc,c_fill,g_north,o_90,r_0/cosm85z0higtfkzp0atx.jpg';

	$scope.sheet = document.getElementById('sheetHref');
	$scope.sheet.href = 'https://docs.google.com/spreadsheets/d/1cCUw9z2tNi7cpQuMHIOOcV7ARNpvS0mkbFe6_qVWgBE';

	Company.find().$promise.then(function(res) {
		$scope.companies = res;

		for(var i = 0; i < $scope.companies.length; i++) {
			if($scope.companies[i].id == $scope.compId) {
				$scope.selCo = $scope.companies[i];
			}
		}
		console.log($scope.selCo);
		$scope.img.src = 'https://res.cloudinary.com/grooveio88/image/upload/bo_1px_solid_rgb:ccc,c_scale,g_north,o_90,r_0/' + $scope.selCo.screenshotUrl + '.jpg';
		console.log('ss: ' + $scope.selCo.screenshotUrl);
		$scope.sheet.href = 'https://docs.google.com/spreadsheets/d/' + $scope.selCo.sheetId;
	})

	$scope.changeCo = function(company) {
		$scope.selCo = company;
		$scope.img.src = 'https://res.cloudinary.com/grooveio88/image/upload/bo_1px_solid_rgb:ccc,c_scale,g_north,o_90,r_0/' + $scope.selCo.screenshotUrl + '.jpg';
		console.log('ss: ' + $scope.selCo.screenshotUrl);
		$scope.sheet.href = 'https://docs.google.com/spreadsheets/d/' + $scope.selCo.sheetId;
	};

//	$scope.logo = document.getElementById('logoImg');
//	$scope.logo.src =
// 'http://res.cloudinary.com/grooveio88/image/upload/bo_1px_solid_rgb:ccc,w_200,c_fit,g_north,o_90,r_0/yokvm8a9trv7aapa0fvz.jpg';
})

.controller('reportCtrl', function($scope, CompanyService, Company, $timeout, uiGridConstants, DashConfig) {

	$scope.Math = window.Math;

	$scope.initPage = function() {
		Company.find({filter:{include: [{keywords: 'keywordMetrics'},{competitors: 'competitorMetrics'},'metrics']}}).$promise.then(function(res) {
			var handler = res;
			$timeout(function() {
				$scope.companies = angular.copy(handler);
			},500)

		}, function(err) {
			return err;
		})



	}

	$scope.gridOptions = DashConfig.getKeyGridConfig();
	$scope.compOptions = DashConfig.getCompGridConfig();

	$scope.gridOptions.onRegisterApi = function( gridApi ) {
		$scope.gridApi = gridApi;
		$scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
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
					graphid: charts[i],
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

	$scope.data = [];
	$scope.compData = [];
	$scope.gridOptions.data = [];
	$scope.compOptions.data = [];
	
	$scope.drawChart = function() {
		var myData = [];
		myData.push(['Competitor', 'Domain Authority', { role: 'style' }]);
		for(var i = 0; i < $scope.domainAuthority.length; i++) {
			myData.push($scope.domainAuthority[i]);
		}

		var data = google.visualization.arrayToDataTable(myData);

		var options = {
			legend: 'none',
			animation: {
				startup: true, duration: 600, easing: 'out',
			},
			title: 'Domain Authority',
			bars: 'vertical',
			vAxis: {format: 'decimal'},
			height: 300,
			is3D: true,
			titleTextStyle: {
				color: '#666666', fontName: 'Roboto', fontSize: '18'
			}
		}

		var chart = new google.visualization.ColumnChart(document.getElementById('authority-chart'));
		$timeout(function() {
			chart.draw(data, options);
		},1200);

	}

	$scope.mozRankChart = function() {

		var myData = [];
		myData.push(['Competitor', 'Moz Rank', { role: 'style' }]);
		for(var i = 0; i < $scope.mozRank.length; i++) {
			myData.push($scope.mozRank[i]);
		}

		var data = google.visualization.arrayToDataTable(myData);

		var options = {
			legend: 'none',
			animation: {
				startup: true, duration: 600, easing: 'out',
			},
			title: 'Moz Rank',
			bars: 'vertical',
			vAxis: {format: 'decimal'},
			height: 300,
			is3D: true,
			titleTextStyle: {
				color: '#666666', fontName: 'Roboto', fontSize: '18'
			}
		}

		var chart = new google.visualization.ColumnChart(document.getElementById('rank-chart'));
		$timeout(function() {
			chart.draw(data, options);
		},1200);

	}

	$scope.mozTrustChart = function() {

		var myData = [];
		myData.push(['Competitor', 'Moz Trust', { role: 'style' }]);
		for(var i = 0; i < $scope.mozTrust.length; i++) {
			myData.push($scope.mozTrust[i]);
		}

		var data = google.visualization.arrayToDataTable(myData);

		var options = {
			legend: 'none',
			animation: {
				startup: true, duration: 600, easing: 'out',
			},
			title: 'Moz Trust',
			bars: 'vertical',
			vAxis: {format: 'decimal'},
			height: 300,
			is3D: true,
			titleTextStyle: {
				color: '#666666', fontName: 'Roboto', fontSize: '18'
			}
		}

		var chart = new google.visualization.ColumnChart(document.getElementById('trust-chart'));
		$timeout(function() {
			chart.draw(data, options);
		},1200);

	}

	$scope.linkChart = function() {

		var myData = [];
		myData.push(['Competitor', 'External Links', { role: 'style' }]);
		for(var i = 0; i < $scope.totalExternalLinks.length; i++) {
			myData.push($scope.totalExternalLinks[i]);
		}

		var data = google.visualization.arrayToDataTable(myData);

		var options = {
			legend: 'none',
			animation: {
				startup: true, duration: 600, easing: 'out',
			},
			title: 'External Links',
			bars: 'vertical',
			vAxis: {format: 'decimal'},
			height: 300,
			is3D: true,
			titleTextStyle: {
				color: '#666666', fontName: 'Roboto', fontSize: '18'
			}
		}

		var chart = new google.visualization.ColumnChart(document.getElementById('link-chart'));
		$timeout(function() {
			chart.draw(data, options);
		},1200);

	}

	$scope.myLineOptions = {
		legend: 'none',
		axisTitlesPosition: 'none',
		colors: ['#8CE300','#382934','#382934','#5E4557','#d6b45d','#ebd004','#b9b1a3','#314c63'],
		width: 600,
		height: '100%',
		interpolateNulls: true,
		lineWidth: 10,
		curveType: 'function',
		backgroundColor: 'none',
		chartArea: {
			top: 0,
			left: 100,
			width: 600,
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
		colors: ["#228CDB"],
		axisTitlesPosition: 'none',
		width: 700,
		height: '100%',
		backgroundColor: 'none',
		annotations: {
			alwaysOutside: false
		},
		chartArea: {
			top: 50,
			left: 0,
			width: 700,
			height: 250
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

	$scope.newimpressionChart = function(data, contId) {
		var data = data;
		var contId = contId;
		var options = $scope.myLineOptions;
		var chart = new google.visualization.LineChart(document.getElementById(contId));

			chart.draw(data, options);

	};

	$scope.getImpressionBar = function(data, contId) {
		var data = data;
		var contId = contId;
		var options = $scope.myBarOptions;

		var chart = new google.visualization.ChartWrapper({
			chartType:'ColumnChart',
			dataTable: data,
			containerId: contId,
			options: options
		});
		chart.draw();
	};

	$scope.makeHistData = function(company) {
		var handler = company;
		console.log(handler);

		
		var chartTypes = [
			'Impressions',
			'Position',
			'Clicks',
			'CTR',
			'Page Load',
			'Sessions',
			'Bounces',
			'Bounce Rate',
			'Page Views',
			'Unique Views',
			'Pages / Session',
			'Duration'
		];
		
		var contNames = [
			'impressions',
			'position',
			'clicks',
			'ctr',
			'pageload',
			'sessions',
			'bounces',
			'bouncerate',
			'pageviews',
			'uniqueviews',
			'ppv',
			'duration'
		];
		
		for(var j = 0; j < chartTypes.length; j++) {
			var myDates = [];
			myDates.push('date');
			var barData = [];
			var lineData = [];
			barData.push('date');
			lineData.push(['date', chartTypes[j]]);
			
			for(var i = 0; i < handler.metrics.length; i++) {
				myDates.push(handler.metrics[i].month);
				
				var metric;

				switch(j) {
					case 0:
						metric = handler.metrics[i].impressions;
						break;
					case 1:
						metric = Number(handler.metrics[i].position);
						break;
					case 2:
						metric = handler.metrics[i].clicks;
						break;
					case 3:
						metric = Number(handler.metrics[i].ctr * 100);
						break;
					case 4:
						metric = Number(handler.metrics[i].pageLoadTime);
						break;
					case 5:
						metric = handler.metrics[i].sessions;
						break;
					case 6:
						metric = handler.metrics[i].bounces;
						break;
					case 7:
						metric = Number(handler.metrics[i].bounceRate);
						break;
					case 8:
						metric = handler.metrics[i].pageViews;
						break;
					case 9:
						metric = handler.metrics[i].uniquePageViews;
						break;
					case 10:
						metric = Number(handler.metrics[i].ppv);
						break;
					case 11:
						metric = Number(handler.metrics[i].duration);
						break;
				}
			
				barData.push(metric);
				var arr = [handler.metrics[i].month,metric];
				lineData.push(arr);
	
			}

			var concatData = [];
			concatData.push(myDates);
			concatData.push(barData);

			var lineTable = google.visualization.arrayToDataTable(lineData);
			var barTable = google.visualization.arrayToDataTable(concatData);
			
			var barname = contNames[j] + '-barchart';
			var linename = contNames[j] + '-linechart';
			
			$scope.getImpressionBar(barTable, barname);
			$scope.newimpressionChart(lineTable, linename);
			
		}

	}

	$scope.viewReports = function(company) {
		var handler = company;
		$scope.domainAuthority = [];
		$scope.mozRank = [];
		$scope.mozTrust = [];
		$scope.totalExternalLinks = [];
		$scope.compName = [];
		var compInfo = [handler.url, handler.metrics[0].domainAuthority, "#228CDB"];
		var compRank = [handler.url, handler.metrics[0].mozRank, "#228CDB"];
		var compTrust = [handler.url, handler.metrics[0].mozTrust, "#228CDB"];
		var compLinks = [handler.url, handler.metrics[0].totalExternalLinks, "#228CDB"];
		$scope.domainAuthority.push(compInfo);
		$scope.mozRank.push(compRank);
		$scope.mozTrust.push(compTrust);
		$scope.totalExternalLinks.push(compLinks);
		var sortedHandler = handler;
		sortedHandler.metrics.sort(function(a,b) {
			var dateA = new Date(a.month), dateB = new Date(b.month);
			return dateA-dateB;
		})

		$scope.makeHistData(sortedHandler);
		var now = new Date();
		var thismonth = now.getMonth();
		var lastmonth = thismonth - 1;
		var thisyear = now.getFullYear();
		for(var m = 0; m < handler.metrics.length; m++) {
			var d = Date.parse(handler.metrics[m].month);
			var t = new Date(d);
			var month = t.getMonth();
			var year = t.getFullYear();
			if(lastmonth == month && thisyear == year) {
				$scope.totalImpressions = handler.metrics[m].impressions;
				$scope.totalClicks = handler.metrics[m].clicks;
				$scope.totalctr = Number(handler.metrics[m].ctr * 100);
				$scope.totalPosition = Number(handler.metrics[m].position);
				$scope.totalPageviews = handler.metrics[m].pageViews;
				$scope.totalppv = Number(handler.metrics[m].ppv);
				$scope.totalSessions = handler.metrics[m].sessions;
				$scope.totalDuration = Number(handler.metrics[m].duration);
				$scope.totalPageLoadtime = Number(handler.metrics[m].pageLoadTime);
				$scope.totalUnique = handler.metrics[m].uniquePageViews;
				$scope.totalBounces = handler.metrics[m].bounces;
				$scope.totalBounceRate = Number(handler.metrics[m].bounceRate);
			} else if((lastmonth - 1) == month && thisyear == year) {
				$scope.lastImpressions = handler.metrics[m].impressions;
				$scope.lastClicks = handler.metrics[m].clicks;
				$scope.lastctr = Number(handler.metrics[m].ctr * 100);
				$scope.lastPosition = Number(handler.metrics[m].position);
				$scope.lastPageviews = handler.metrics[m].pageViews;
				$scope.lastppv = Number(handler.metrics[m].ppv);
				$scope.lastSessions = handler.metrics[m].sessions;
				$scope.lastDuration = Number(handler.metrics[m].duration);
				$scope.lastPageLoadtime = Number(handler.metrics[m].pageLoadTime);
				$scope.lastUnique = handler.metrics[m].uniquePageViews;
				$scope.lastBounces = handler.metrics[m].bounces;
				$scope.lastBounceRate = Number(handler.metrics[m].bounceRate);
			}
		}
		


		var styles = ["#7CC900", "#401A7F", "#004884", "#65A300", "#003A6A", "#228CDB", "#1D0B39", "#999"];
		for(var p = 0; p < handler.competitors.length; p++) {
			$scope.compName.push(handler.competitors[p].url);
			var auth = [handler.competitors[p].url, handler.competitors[p].competitorMetrics[0].domainAuthority, styles[p]];
			var rank = [handler.competitors[p].url, handler.competitors[p].competitorMetrics[0].mozRank, styles[p]];
			var trust = [handler.competitors[p].url, handler.competitors[p].competitorMetrics[0].mozTrust, styles[p]];
			var link = [handler.competitors[p].url, handler.competitors[p].competitorMetrics[0].totalExternalLinks, styles[p]];
			$scope.domainAuthority.push(auth);
			$scope.mozRank.push(rank);
			$scope.mozTrust.push(trust);
			$scope.totalExternalLinks.push(link);
		}
		
		$scope.drawChart();
		$scope.mozRankChart();
		$scope.mozTrustChart();
		$scope.linkChart();
		
		$scope.comp = [];
		$scope.compData = [];
		$scope.data = [];
		$scope.keystr = '';

		

		$scope.partial = [];
		$scope.difficulty = [];
		$scope.opportunity = [];
		$scope.potential = [];
		$scope.gridOptions.data = [];
		$scope.compOptions.data = [];

		$scope.selected = handler.name;
		var obj = {
		}
		var compObj = {
			competitor: handler.url,
			domainAuthority: handler.metrics[0].domainAuthority,
			mozRank: handler.metrics[0].mozRank,
			mozTrust: handler.metrics[0].mozTrust,
			followedLinks: handler.metrics[0].followedLinks,
			totalExternalLinks: handler.metrics[0].totalExternalLinks,
			linkingRootDomains: handler.metrics[0].linkingRootDomains
		}

		$scope.compData.push(compObj);

		for(var i = 0; i < handler.keywords.length; i++) {
			$scope.keystr = $scope.keystr + ' ' + handler.keywords[i].name;
			for(var j = 0; j < handler.keywords[i].keywordMetrics.length; j++) {
				if(handler.keywords[i].keywordMetrics[j].minVolume == null) {
					handler.keywords[i].keywordMetrics[j].minVolume = 0;
				}
				if(handler.keywords[i].keywordMetrics[j].maxVolume == null) {
					handler.keywords[i].keywordMetrics[j].maxVolume = 0;
				}
				if(handler.keywords[i].keywordMetrics[j].difficulty == null) {
					handler.keywords[i].keywordMetrics[j].difficulty = 0;
				}
				if(handler.keywords[i].keywordMetrics[j].opportunity == null) {
					handler.keywords[i].keywordMetrics[j].opportunity = 0;
				}
				if(handler.keywords[i].keywordMetrics[j].potential == null) {
					handler.keywords[i].keywordMetrics[j].potential = 0;
				}
				obj = {
					keyword: handler.keywords[i].name,
					minVolume: handler.keywords[i].keywordMetrics[j].minVolume,
					maxVolume: handler.keywords[i].keywordMetrics[j].maxVolume,
					difficulty: handler.keywords[i].keywordMetrics[j].difficulty,
					opportunity: handler.keywords[i].keywordMetrics[j].opportunity,
					potential: handler.keywords[i].keywordMetrics[j].potential
				}
				$scope.data.push(obj);
				$scope.difficulty.push(obj.difficulty);
				$scope.opportunity.push(obj.opportunity);
				$scope.potential.push(obj.potential);
				$scope.partial.push(obj.keyword);
			}
		}
		for(var k = 0; k < handler.competitors.length; k++) {
			for(var m = 0; m < handler.competitors[k].competitorMetrics.length; m++) {
				compObj = {
					competitor: handler.competitors[k].url,
					domainAuthority: handler.competitors[k].competitorMetrics[m].domainAuthority,
					mozRank: handler.competitors[k].competitorMetrics[m].mozRank,
					mozTrust: handler.competitors[k].competitorMetrics[m].mozTrust,
					followedLinks: handler.competitors[k].competitorMetrics[m].followedLinks,
					totalExternalLinks: handler.competitors[k].competitorMetrics[m].totalExternalLinks,
					linkingRootDomains: handler.competitors[k].competitorMetrics[m].linkingRootDomains
				}
				$scope.compData.push(compObj);
			
			}
		}
		$scope.gridOptions.data = $scope.data;
		$scope.compOptions.data = $scope.compData;
		zingchart.exec('myChart', 'destroy');
		$timeout(function() {
			var keystr = $scope.keystr;
			$scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);
			var diff = $scope.gridOptions.data[0].difficulty;
			var opp = $scope.gridOptions.data[0].opportunity;
			var pot = $scope.gridOptions.data[0].potential;
			var key = $scope.gridOptions.data[0].keyword;
			var partial = $scope.partial;
			var diffArr = $scope.difficulty;
			var oppArr = $scope.opportunity;
			var potArr = $scope.potential;
			
			var myConf = DashConfig.getConfig(keystr, diff, opp, pot, partial, diffArr, oppArr, potArr, key);
			zingchart.render({ // Render Method[3]
				id:'myChart',
				data: myConf,
				width: '100%',
				height: '100%'
			});
			var comp = DashConfig.getCompConfig($scope.mozRank, '0:10:5');
			zingchart.render({ // Render Method[3]
				id:'rankChart',
				data: comp,
				width: '300'
			});
			var trust = DashConfig.getCompConfig($scope.mozTrust, '0:10:5');
			zingchart.render({ // Render Method[3]
				id:'trustChart',
				data: trust,
				width: '300'
			});
			var auth = DashConfig.getCompConfig($scope.domainAuthority, '0:100:50');
			zingchart.render({ // Render Method[3]
				id:'authChart',
				data: auth,
				width: '300'
			});
		},500);

	}

	

})
	
.controller('analyticsCtrl', function($scope, GApi, $ocLazyLoad, $interval) {

	var API_KEY = 'AIzaSyD2cHJ-K8BStHf6axFi13_cvhX3BzqValE';
	var CLIENT_ID = '598123322729-91cbmds83g0uh0u9elf7ji3cqbtljbjm.apps.googleusercontent.com';
	var SCOPES = 'https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/webmasters' +
		' https://www.googleapis.com/auth/analytics.edit';

	$scope.initPage = function() {
	//	gapi.analytics.auth.authorize({
	//		container: 'auth-button',
	//		clientid: CLIENT_ID,
	//	});
	}



	
	$scope.getSites = function() {

		GApi.executeAuth('webmasters', 'sites.list').then(function(resp) {
			console.log(resp);
			var handler = resp;
			var sites = handler.siteEntry;
			//console.log($scope.properties);
			for(var i = 0; i < sites.length; i++) {
				sites[i].siteUrl = sites[i].siteUrl.replace(/\/$/, "");
				var patt = /^((http[s]?|ftp):\/)?\/?/;
				if(patt.test(sites[i].siteUrl) == false) {
					delete sites[i];
				}
			}
			$scope.sites = sites;
			/**
			 * Store a set of common DataChart config options since they're shared by
			 * both of the charts we're about to make.
			 */

		});

		$scope.createView();

		gapi.client.analytics.data.ga.get({
			ids: 'ga:105337401',
			metrics: ['ga:sessions'],
			dimensions: ['ga:fullReferrer'],
			'start-date': '30daysAgo',
			'end-date': 'yesterday',
			'max-results': 10,
			sort: '-ga:sessions',
			segment: 'gaid::-8',
			output: 'dataTable'
		}).execute(processResponse);

		gapi.client.analytics.data.ga.get({
			ids: 'ga:105337401',
			metrics: ['ga:sessions'],
			dimensions: ['ga:browser', 'ga:operatingSystem', 'ga:screenResolution'],
			'start-date': '30daysAgo',
			'end-date': 'yesterday',
			'max-results': 200,
			sort: '-ga:sessions',
			output: 'dataTable'
		}).execute(drawBrowserChart);


	}

	$scope.createView = function() {

		$scope.view2 = new gapi.analytics.ext.ViewSelector2({
			container: 'view-selector-container',
		}).execute();

		$scope.view2.on('viewChange', function(data) {

		});
	}

	function drawBrowserChart(res) {
		var handler = res;
		var dt = new google.visualization.DataTable(handler.result.dataTable);

		var table = new google.visualization.Table(document.getElementById('bubble-chart'));
		table.draw(dt, {showRowNumber: true, width: '100%', height: '100%'});


	}

	function processResponse(res) {
		var handler = res;
		var c = [];
		var dt = new google.visualization.DataTable(handler.result.dataTable);
		console.log(dt.getNumberOfRows());

		var table = new google.visualization.Table(document.getElementById('pie-chart'));
		table.draw(dt, {showRowNumber: true, width: '100%', height: '100%'});
	}

	var options = {
		legend: 'none',
		pieSliceText: 'none',
		pieStartAngle: 135,
		tooltip: { trigger: 'none' },
		slices: {
			0: { color: 'yellow' },
			1: { color: 'transparent' }
		}
	}

})

.controller('speedCtrl', function($scope) {

	var API_KEY = 'AIzaSyD2cHJ-K8BStHf6axFi13_cvhX3BzqValE';
	var CLIENT_ID = '598123322729-91cbmds83g0uh0u9elf7ji3cqbtljbjm.apps.googleusercontent.com';
	var SCOPES = 'https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/webmasters' +
		' https://www.googleapis.com/auth/analytics.edit';

	$scope.initPage = function() {
		gapi.client.setApiKey('AIzaSyD2cHJ-K8BStHf6axFi13_cvhX3BzqValE');
		gapi.client.load('pagespeedonline', 'v2');
	}

	$scope.runTest = function() {
		gapi.client.setApiKey('AIzaSyD2cHJ-K8BStHf6axFi13_cvhX3BzqValE');
		gapi.client.load('pagespeedonline', 'v2').then(makeRequest);
	}


	function makeRequest() {
		var request = gapi.client.pagespeedonline.pagespeedapi.runpagespeed({url: 'http://impyra.com'});
		request.then(function(response) {
			console.log(response);
			var handler = response;
			$scope.speedResults = handler.result.formattedResults.ruleResults;
			$scope.$apply();
			console.log($scope.speedResults);
		});
	}
	
})

	.controller('homeCtrl', function($scope, Company) {

		var API_KEY = 'AIzaSyD2cHJ-K8BStHf6axFi13_cvhX3BzqValE';
		var CLIENT_ID = '598123322729-91cbmds83g0uh0u9elf7ji3cqbtljbjm.apps.googleusercontent.com';
		var SCOPES = 'https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/webmasters' +
			' https://www.googleapis.com/auth/analytics.edit';


		Company.find().$promise.then(function(res) {
			var handler = res;
			$scope.companies = handler;
		})

		$scope.initPage = function() {


		}


	})

	.controller('logoutCtrl', function($scope, $timeout) {



		$scope.initPage = function() {

		}


	});