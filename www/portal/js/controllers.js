angular.module('app.controllers', [])

.controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout', '$rootScope', '$state', '$location', 'menu', 'AuthService', function($scope, $mdSidenav, $timeout, $rootScope, $state, $location, menu, AuthService) {

	$scope.user = $rootScope.user;
	
	root = $rootScope;
	$scope = $rootScope;
	
	$scope.logout = function() {
		AuthService.logout();
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

.controller('mgmtCtrl', ['$scope', '$timeout', 'Company', 'Keyword', 'Competitor', '$rootScope', '$state', 'AuthService', 'ErrorService', function($scope, $timeout, Company, Keyword, Competitor, $rootScope, $state, AuthService, ErrorService) {
	
	var keywordlist = {
		name: '',
		companyId: null
	};
	
	
	$scope.logout = function() {
		AuthService.logout();
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
		var keyList = [];
		var keywordlist = {
			name: '',
			companyId: null
		};
		var list = list;
		var lines;
		var data;
		lines = list.match(/[^\r\n]+/g);
		for(var i = 0; i < lines.length; i++) {
			keywordlist = {
				name: lines[i],
				companyId: $scope.keywords.companyId
			};
			keyList.push(keywordlist);
		}
		for(var k = 0; k < keyList.length; k++) {
			data = keyList[k];
			Keyword.create(data).$promise.then(function(res) {
				console.log(res);
			}, function(err) {
				return ErrorService.handleError(err);
			});
		}
	}

	$scope.newComp = {};

	$scope.addCompetitor = function(complexForm) {
		var data = $scope.newComp;
		Competitor.create(data).$promise.then(function(res) {
			console.log(res);
			
		}, function(err) {
			return ErrorService.handleError(err);
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

.controller('editClientCtrl', ['$scope', 'Company', '$timeout', '$rootScope', '$state', 'ErrorService',  function($scope, Company, $timeout, $rootScope, $state, ErrorService) {
	
	$scope.mode = '';
  $scope.currentNavItem = 'page1';
	$scope.ss = 'plaster';
	$scope.logo = 'plaster';

	$scope.initPage = function() {
		
	}

	$scope.uploadImg = function(ele, type) {
		var doc_id = document.getElementById(ele);
		var type = type;
		cloudinary.openUploadWidget({ cloud_name: 'grooveio88', upload_preset: 'portal'},
		function(error, result) {
			if(error) {
				console.log(error);
				return;
			} else {
				for(var i = 0; i < result.length; i++) {
					var id = result[i].public_id
					if(type === 'ss') {
						$scope.ss = id;
					} else  {
						$scope.logo = id;
					}
					doc_id.src = 'https://res.cloudinary.com/grooveio88/image/upload/bo_1px_solid_rgb:ccc,c_fit,h_150,o_100,r_0,w_300/' + id + '.jpg';
					$scope.$apply;
					
				}
			}
			
		});
		
	};

	$scope.$on('cloudinary', function(event, args) {

	});
	
	$scope.addCompany = function(myForm) {
		$scope.mode = 'indeterminate';
		var data = {
			name: myForm.name.$viewValue,
			poc: myForm.poc.$viewValue,
			url: myForm.url.$viewValue,
			profileId: myForm.profileId.$viewValue,
			webmasterAcct: myForm.webmasterAcct.$viewValue,
      screenshotUrl: $scope.ss,
      logoUrl: $scope.logo
		}

		$timeout(function() {
			Company.create(data).$promise.then(function(res) {
				//console.log(res);
				$scope.mode = '';
        $scope.successMsg = true;
				return $scope.successMsg;
			}, function (err) {
        $scope.mode = '';
				return ErrorService.handleError(err);
 			});
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

	.controller('uploadCtrl', ['$scope', '$timeout', 'Company', 'CompanyMetric', 'CompetitorMetric', 'KeywordMetric', 'StatService', '$mdDialog', 'ErrorService', function($scope, $timeout, Company, CompanyMetric, CompetitorMetric, KeywordMetric, StatService, $mdDialog, ErrorService ) {
		
		$scope.msg = {};
		$scope.gridOptions = {};
		$scope.gridOptions.columnDefs = [];
		$scope.gridOptions.data = [];
		$scope.selectedCompany = {
			id: null,
			profileId: null,
			url: '',
			metricId: null
		};
		//var chartObj = StatService.getChartObj();
		var d = new Date();
		var curMonth = d.getMonth();
		$scope.stats = {
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
		$scope.myDate = new Date();
		$scope.minDate = new Date(
			$scope.myDate.getFullYear(),
			$scope.myDate.getMonth() - 6,
			$scope.myDate.getDate());
		$scope.maxDate = new Date(
			$scope.myDate.getFullYear(),
			$scope.myDate.getMonth() - 1,
			$scope.myDate.getDate());
		
	
		var loadViewSelector = function() {
			$timeout(function() {
				//$scope.createView();
				$scope.reportView = new gapi.analytics.ext.ViewSelector2({
					container: 'view-selector-container2',
				}).execute()
				  .on('viewChange', function(data) {
					  $scope.changeView(data);
				  });
			},4000);
		};
		
		$scope.initPage = function() {

			Company.find().$promise.then(function(res) {
				$scope.companies = res;
				
			});
			
			loadViewSelector();
			
		};
		
		$scope.getDateString = function() {
			var d = new Date($scope.myDate);
			var month = d.getMonth() + 1;
			var year = d.getFullYear();
			if(month < 10) {
				month = '0' + month;
			}
			var str = year + '-' + month + '-01T00:00:00.000Z';
			return str;
		}
		$scope.showPrompt = function() {
			// Appending dialog to document.body to cover sidenav in docs app
			var confirm = $mdDialog.confirm()
			   .title('No Matches Found')
			   .textContent('Would you like to add a new record?')
			   .ariaLabel('Error')
			   .targetEvent()
			   .ok('Yes')
			   .cancel('No');
			$mdDialog.show(confirm).then(function(result) {
				$scope.new = true;
				return;
			}, function() {
				$scope.new = false;
				return;
			});
		};
		
		$scope.getAllStats = function() {
			var str = $scope.getDateString();
			var id = $scope.selectedCompany.id;
			CompanyMetric.find({filter: {where: {month: str, companyId: id}}}).$promise.then(function(resp) {
				var reply = resp;
				if(reply.length === 0 || reply === null) {
					$scope.showPrompt();
					$scope.selectedCompany.metricId = null;
					return;
				} else {
					var chartData = [];
					$scope.myMetrics = reply[0];
					$scope.selectedCompany.metricId = reply[0].id;
					stats = StatService.getDataObj();
					chartData =  StatService.getChartObj($scope.myMetrics);
					$scope.gridOptions.columnDefs = chartData;
					$scope.gridOptions.data = reply;
				}
				
			}, function(err) {
				ErrorService.handleError(err);
			});
		};

		$scope.gridOptions.onRegisterApi = function(gridApi){
			//set gridApi on scope
			$scope.gridApi = gridApi;
		//	gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
		//		$scope.msg.lastCellEdited = 'edited row id:' + rowEntity.id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue ;
		//		$scope.$apply();
		//	});
		};

	$scope.webmasterData = function() {
			
			var url = $scope.selectedCompany.url;
			var clicks = 0;
			var impressions = 0;
			var ctr = 0;
			var position = 0;
			var avgPosition = 0;
			var avgCTR = 0;
			StatService.getWebmasterData(url, $scope.myDate)
			
				.then(function(resp) {
					var reply = resp.rows;
					for(var i = 0; i < reply.length; i++) {
						clicks = reply[i].clicks + clicks;
						impressions = reply[i].impressions + impressions;
						ctr = reply[i].ctr + ctr;
						position = reply[i].position + position;
					}
					avgPosition = position / reply.length;
					avgCTR = ctr / reply.length;
					$scope.stats.clicks = clicks;
					$scope.stats.impressions = impressions;
					$scope.stats.ctr = avgCTR;
					$scope.stats.position = avgPosition;
				}, function(err) {
					console.log(err);
				});
		};
		
		$scope.saveGWTData = function() {
			var options = {	};
			options.month = $scope.getDateString();
			options.clicks = $scope.stats.clicks;
			options.impressions = $scope.stats.impressions;
			options.ctr = $scope.stats.ctr;
			options.position = $scope.stats.position;
			if($scope.selectedCompany.metricId == null && $scope.new == true) {
				
				Company.metrics.create({id: $scope.selectedCompany.id}, options).$promise.then(function(res) {
					var data = res;
					$scope.selectedCompany.metricId = data.id;
					$scope.getAllStats();
					return;
				}, function(err) {
					if(err) {
						ErrorService.handleError();
					} else {
						return;
					}
				})
				
			} else if($scope.selectedCompany.metricId > 0) {
				var id = $scope.selectedCompany.metricId;
				CompanyMetric.prototype$updateAttributes({id: id}, options).$promise.then(function(res) {
					var data = res;
					$scope.getAllStats();
				}, function(err) {
					if(err) {
						return err;
					} else {
						return null;
					}
				})
			} else if(($scope.selectedCompany.metricId == null && $scope.new == false) || $scope.selectedCompany.id === null) {
				var showAlert = function() {
				$mdDialog.show(
				$mdDialog.alert()
						 .parent(angular.element(document.querySelector('#popupContainer')))
						 .clickOutsideToClose(true)
						 .title('Uh-oh')
						 .textContent('Please select another company.')
						 .ariaLabel('Aaaaaaaaahhhhhh!!!')
						 .ok('OK')
						 .targetEvent()
					);
				};
				showAlert();
				return;
			} else {
				var silently = null;
				return silently;
			}
		};
		
		$scope.saveAnalytics = function() {
			var options = {
				sessions: $scope.stats.sessions,
				bounces: $scope.stats.bounces,
				bounceRate: $scope.stats.bouncerate,
				duration: $scope.stats.duration,
				pageViews: $scope.stats.pageviews,
				ppv: $scope.stats.ppv,
				uniquePageViews: $scope.stats.uniqueviews,
				pageLoadTime: $scope.stats.pageload
			};
			var id = $scope.selectedCompany.metricId;
			CompanyMetric.prototype$updateAttributes({id: id}, options).$promise.then(function(res) {
				var data = res;
				$scope.getAllStats();
			}, function(err) {
				if(err) {
					return err;
				} else {
					return null;
				}
			})
		}
		
		
		$scope.analyticsData = function() {
			var profileId = $scope.selectedCompany.profileId;
			StatService.getAnalyticsData(profileId, $scope.myDate)
			
				.then(function(resp) {
				   var handler = resp;
					$scope.stats.sessions = Number(handler.totalsForAllResults['ga:sessions']);
					$scope.stats.bounces = Number(handler.totalsForAllResults['ga:bounces']);
					$scope.stats.bouncerate = Number(handler.totalsForAllResults['ga:bounceRate']);
					$scope.stats.duration = Number(handler.totalsForAllResults['ga:avgSessionDuration']);
					$scope.stats.pageviews = Number(handler.totalsForAllResults['ga:pageviews']);
					$scope.stats.ppv = Number(handler.totalsForAllResults['ga:pageviewsPerSession']);
					$scope.stats.uniqueviews = Number(handler.totalsForAllResults['ga:uniquePageviews']);
					$scope.stats.pageload = Number(handler.totalsForAllResults['ga:avgPageLoadTime']);
					return $scope.stats;
				}, function(err) {
				   console.log(err);
				});
		}

		$scope.percentLoaded = 0;
		$scope.completed = false;
		$scope.fileparsed = false;
		$scope.uploadErr;

		
		$scope.mydata = {};

		$scope.changeView = function(data) {
			$scope.selectedCompany.id = null;
			$scope.selectedCompany.url = '';
			$scope.selectedCompany.profileId = null;
			$scope.selectedCompany.metricId = null;
			$scope.stats = {
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
			var reply = data;
			console.log(data);
			var profileId = reply.ids;
			$scope.selectedCompany.profileId = reply.ids;
			$scope.gridOptions.data = [];
			
			var properties = [];
			var url = '';
			var siteUrl = '';
			for(var i = 0; i < $scope.companies.length; i++) {
				if($scope.companies[i].profileId == profileId) {
					$scope.selectedCompany.id = $scope.companies[i].id;
					url = 'http://' + $scope.companies[i].url;
					$scope.selectedCompany.url = url;
					$scope.selectedCompany.profileId = $scope.companies[i].profileId;
					break;
				}
			}
			if($scope.selectedCompany.id == null) {
				ErrorService.handleError();
			}
		}

		$scope.uploadNewKeys = function(keywords, id) {
			var data = keywords;
			var keywords = data.split('\n');
			console.log(keywords);
			var id = id;

			for(var i = 0; i < keywords.length; i++) {
				Company.keywords.create({id: id}, {name: keywords[i]}).$promise.then(function(res) {
					console.log(res);
				})
			}
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
					for(var m = 0; m < lines.length - 12; m++) {
						l = lines[m + 12];
						data = l.split(',');
						//data[j] == 'n/a' ? null : data[j];
						var obj = {
							keyword: data[0],
							minVolume: data[2],
							maxVolume: data[3],
							difficulty: data[4],
							opportunity: data[5],
							potential: data[7],
							month: data[8],

						};
						$scope.keyReport.push(obj);
						if(m == lines.length - 13) {
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
				if(companyUrl === $scope.compReport[k].competitor) {
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

			var companyId = myForm.company.value;
			companyId = Number($scope.mydata);
			var keywords = [];
			Company.keywords({id: companyId, filter: {include: 'keywordMetrics'}}).$promise.then(function(resp) {
				keywords = resp;
				for(var i = 0; i < report.length; i++) {
					now = new Date();
					timestamp = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
					var myObj = {
						month: timestamp,
						minVolume: Number(report[i].minVolume),
						maxVolume: Number(report[i].maxVolume),
						difficulty: Number(report[i].difficulty),
						opportunity: Number(report[i].opportunity),
						potential: Number(report[i].potential),
						companyId: companyId

					};
					var id = null;
					for(var n = 0; n < keywords.length; n++) {
						if(report[i].keyword == keywords[n].name && keywords[n].keywordMetrics.length > 0) {
							myObj.keywordId = keywords[n].id;
							id = keywords[n].keywordMetrics[0].id;
							$scope.keyData.push(myObj);
							
							KeywordMetric.prototype$updateAttributes({id: id}, myObj).$promise.then(function(res) {
								
							}, function(err) {
								if(err) {
									return err;
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
	}])

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

.controller('reportCtrl', function($scope, CompanyService, Company, $timeout, uiGridConstants, DashConfig, StatService) {

	$scope.Math = window.Math;

	$scope.pageObj = [{
		clicks: 576,
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
	}];
	
	$scope.initPage = function() {
		Company.find({filter:{include: [{keywords: 'keywordMetrics'},{competitors: 'competitorMetrics'},'metrics']}}).$promise.then(function(res) {
			var handler = res;
			$timeout(function() {
				$scope.companies = angular.copy(handler);
			},500)

		}, function(err) {
			return err;
		});
		
		
	};
	
	$scope.pageObj = [
	
	];
	$scope.pageOptions = {};
	$scope.pageOptions.columnDefs = [];
	$scope.pageOptions.data = [];
	$scope.pageObj = [{
		type: 'string', displayName: 'Landing Pages', name: 'landingPages', field: 'url'
	}, {
		type: 'number', displayName: 'Clicks', name: 'clicks', field: 'clicks'
	}, {
		type: 'number', displayName: 'Impressions', name: 'impressions', field: 'impressions'
	}, {
		type: 'number', displayName: 'CTR', name: 'ctr', field: 'ctr'
	}, {
		type: 'number', displayName: 'Position', name: 'position', field: 'position'
	}];
	
	$scope.getPageChart = function(id) {
		var id = id;
		Company.landingPages({id: id}).$promise.then(function(res) {
			var data = res;
			$scope.pageData = data;
			$scope.pageOptions.columnDefs = $scope.pageObj;
			$scope.pageOptions.data = $scope.pageData;
		}, function(err) {
			if(err) {
				var silently = null;
				return silently;
			}
		})
	}
	
	$scope.queryObj = [
	
	];
	$scope.queryOptions = {};
	$scope.queryOptions.columnDefs = [];
	$scope.queryOptions.data = [];
	$scope.queryObj = [{
		type: 'string', displayName: 'Search Query', name: 'query', field: 'query'
	}, {
		type: 'number', displayName: 'Clicks', name: 'clicks', field: 'clicks'
	}, {
		type: 'number', displayName: 'Impressions', name: 'impressions', field: 'impressions'
	}, {
		type: 'number', displayName: 'CTR', name: 'ctr', field: 'ctr'
	}, {
		type: 'number', displayName: 'Position', name: 'position', field: 'position'
	}];
	
	$scope.getQueryChart = function(id) {
		var id = id;
		Company.queries({id: id}).$promise.then(function(res) {
			var data = res;
			$scope.queryData = data;
			$scope.queryOptions.columnDefs = $scope.queryObj;
			$scope.queryOptions.data = $scope.queryData;
		}, function(err) {
			if(err) {
				var silently = null;
				return silently;
			}
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
			zingchart.exec('myChart', 'hidemenu');

		});
	};

	$scope.data = [];
	$scope.compData = [];
	$scope.gridOptions.data = [];
	$scope.compOptions.data = [];
	
	$scope.drawChart = function() {
		var myData = [];
		console.log($scope.domainAuthority);
		myData.push(['Competitor', 'Domain Authority', { role: 'style' }]);
		for(var i = 0; i < $scope.domainAuthority.length; i++) {
			myData.push($scope.domainAuthority[i]);
		}
		console.log(myData);
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

	};
	
	

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

		var sortedHandler = handler;
		sortedHandler.metrics.sort(function(a,b) {
			var dateA = new Date(a.month), dateB = new Date(b.month);
			return dateA-dateB;
		})
		
		$scope.getQueryChart(company.id);
		$scope.getPageChart(company.id);
		
		$scope.makeHistData(sortedHandler);
		var now = new Date();
		var thismonth = now.getMonth();
		var lastmonth = thismonth - 1;
		var thisyear = now.getFullYear();
		var month = null;
		var year = null;
		var d;
		var t;
		for(var m = 0; m < handler.metrics.length; m++) {
			d = Date.parse(handler.metrics[m].month);
			t = new Date(d);
			month = t.getMonth() + 1;
			year = t.getFullYear();
			if(lastmonth === month && thisyear === year) {
				var compInfo = [handler.url, handler.metrics[m].domainAuthority, "#228CDB"];
				var compRank = [handler.url, handler.metrics[m].mozRank, "#228CDB"];
				var compTrust = [handler.url, handler.metrics[m].mozTrust, "#228CDB"];
				var compLinks = [handler.url, handler.metrics[m].totalExternalLinks, "#228CDB"];
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
		if(typeof compInfo === 'undefined') {
			console.log('undefined');
		} else {
			$scope.domainAuthority.push(compInfo);
		}
		if(typeof compInfo === 'undefined') {
			console.log('undefined');
		} else {
			$scope.mozRank.push(compRank);
		}
		if(typeof compInfo === 'undefined') {
			console.log('undefined');
		} else {
			$scope.mozTrust.push(compTrust);
		}
		if(typeof compInfo === 'undefined') {
			console.log('undefined');
		} else {
			$scope.totalExternalLinks.push(compLinks);
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
		for(var ii = 0; ii < handler.metrics.length; ii++) {
			var d = Date.parse(handler.metrics[ii].month);
			var t = new Date(d);
			var mymonth = t.getMonth() + 1;
			var myyear = t.getFullYear();
			if(lastmonth === mymonth && thisyear === myyear) {
				var compObj = {
					competitor: handler.url,
					domainAuthority: handler.metrics[ii].domainAuthority,
					mozRank: handler.metrics[ii].mozRank,
					mozTrust: handler.metrics[ii].mozTrust,
					followedLinks: handler.metrics[ii].followedLinks,
					totalExternalLinks: handler.metrics[ii].totalExternalLinks,
					linkingRootDomains: handler.metrics[ii].linkingRootDomains
				}
			}
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
			zingchart.exec('myChart', 'hidemenu');
			var comp = DashConfig.getCompConfig($scope.mozRank, '0:10:5');
			zingchart.render({ // Render Method[3]
				id:'rankChart',
				data: comp,
				width: '300'
			});
			zingchart.exec('rankChart', 'hidemenu');
			var trust = DashConfig.getCompConfig($scope.mozTrust, '0:10:5');
			zingchart.render({ // Render Method[3]
				id:'trustChart',
				data: trust,
				width: '300'
			});
			zingchart.exec('trustChart', 'hidemenu');
			var auth = DashConfig.getCompConfig($scope.domainAuthority, '0:100:50');
			zingchart.render({ // Render Method[3]
				id:'authChart',
				data: auth,
				width: '300'
			});
			zingchart.exec('authChart', 'hidemenu');
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


})
	
.controller('newreportCtrl', function($scope, $timeout) {

	$scope.initPage = function() {
		$timeout(function() {
			drawChart();
			drawTable();
		},1000);
		
	};
	
	function drawChart() {
		var data = google.visualization.arrayToDataTable([
			['Month', 'Visibility'],
			['March',  78],
			['April',  82],
			['May',  83],
			['June',  89]
		]);
		
		var options = {
			curveType: 'function',
			legend: 'none',
			colors: ['#8CE300','#382934','#382934','#5E4557','#d6b45d','#ebd004','#b9b1a3','#314c63'],
			width: 500,
			height: '100%',
			interpolateNulls: true,
			lineWidth: 10,
			backgroundColor: 'none',
			chartArea: {
				top: 30,
				left: 100,
				width: 500,
				height: 250
			},
			animation: {
				startup: true,
				easing: 'inAndOut'
			},
			enableInteractivity: true,
			hAxis: {
				baselineColor: '#fff',
				color: '#f1f1f1',
				gridlines: {color: 'transparent'}
			},
			vAxis: {
				baselineColor: '#fff',
				gridlines: {
					color: '#e0e0e0'}
			}
			
		};
		
		var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
		
		chart.draw(data, options);
	};
	
	function drawTable() {
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Metric');
		data.addColumn('number', 'Value');
		data.addRows([
			['Avg. Position',  {v: 23, f: '23'}],
			['Impressions',   {v:2013,   f: '2,013'}]
		]);
		
		var table = new google.visualization.Table(document.getElementById('table_div'));
		
		table.draw(data, {
			showRowNumber: false,
			width: '100%',
			cssClassNames: {
				headerRow: 'tblHeader',
				oddTableRow: 'oddTableRow',
				evenTableRow: 'evenTableRow',
				tableCell: 'tableCell',
				headerCell: 'headerCell'
			}
		});
	}


})

.controller('mozCtrl', function($scope, $timeout) {

	var accessId = 'mozscape-9ba53c0ae1';
	var secretKey = 'e4758ef220a48871b78d1c03d1a5f712';


	$scope.initPage = function() {

	}

});