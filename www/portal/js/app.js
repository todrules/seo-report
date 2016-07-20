angular.module('app', ['ngMaterial', 'ui.router', 'app.controllers', 'app.directives', 'app.services', 'ngAnimate', 'ngMessages', 'lbServices', 'ngResource', 'ngInputModified', 'angular.filter', 'ngFileUpload', 'ui.grid', 'ui.grid.selection', 'oc.lazyLoad', 'ngCookies', 'angular-google-gapi' ])

	.run([ 'GAuth', 'GApi', 'GData', 'CLIENTID', 'SCOPES', '$rootScope', '$state', '$stateParams', '$location', '$timeout', 'SCOPE', 'APIKEY', function(GAuth, GApi, GData, CLIENTID, SCOPES, $rootScope, $state, $stateParams, $location, $timeout, SCOPE, APIKEY) {


		
		
		root = $rootScope;

		GApi.load('webmasters','v3');
		GApi.load('analytics','v3');
		GApi.load('plus','v1');
		GApi.load('pagespeedonline', 'v2');

		GAuth.setClient(CLIENTID);
		GAuth.setScope(SCOPES);
		//var auth = AuthService.authorize();
		$rootScope.authenticated = false;
		gapi.analytics.ready(function() {
			
			gapi.analytics.auth.signOut();
			
			gapi.analytics.auth.authorize({
				container: 'auth-button',
				clientid: CLIENTID,
				scopes: SCOPES,
				userInfoLabel: ''
			});
			
			auth = gapi.analytics.auth.isAuthorized();
			
			if((auth == true && $rootScope.user.id === '109792126873673599082') || (auth == true && $rootScope.user.id === '103294612803329153998')) {
				$rootScope.authenticated = true;
				$rootScope.$broadcast('authenticated');
			} else {
				gapi.analytics.auth.signOut();
			//	$rootScope.authenticated = false;
			//	$state.go('logout');
				
			}
			
			gapi.analytics.auth.on('signIn', function() {
				gapi.client.setApiKey(APIKEY);
				gapi.client.plus.people.get({userId: 'me'}).execute(function(resp) {
					$rootScope.user = resp;
					if($rootScope.user.id === '109792126873673599082' || $rootScope.user.id === '103294612803329153998') {
						//var profileImg = document.getElementById('profileImg');
						//profileImg.src = $rootScope.user.image.url;
						$rootScope.authenticated = true;
						$rootScope.$broadcast('authenticated');
					} else {
				//		$rootScope.authenticated = false;
					//	$state.go('logout');
					}
					
				});
			});
			
			gapi.analytics.auth.on('needsAuthorization', function() {
		//		$rootScope.authenticated = false;
			//	$state.go('logout');
			});
			
			gapi.analytics.auth.on('error', function() {
			//	$rootScope.authenticated = false;
			//	$state.go('logout');
			});
		});

		
		
		$rootScope.$on('$stateChangeStart', function (event, toState) {
			//var requireLogin = toState.data.requireLogin;

		//	if (requireLogin && !($rootScope.authenticated)) {

		//	}
		});

	}])

	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.withCredentials = true;
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	}])

	.config(function(LoopBackResourceProvider) {
		LoopBackResourceProvider
			.setUrlBase('https://mobile-associates-seo.herokuapp.com/api')
	})

	.config(function($mdIconProvider){

		$mdIconProvider
			.defaultIconSet("./assets/svg/avatars.svg", 128)
			.icon("menu"       , "img/svg/menu.svg"        , 24)
			.icon("share"      , "img/svg/share.svg"       , 24)
			.icon("google_plus", "img/svg/google_plus.svg" , 512)
			.icon("facebook"   , "img/svg/facebook.svg"    , 512)
			.icon("twitter"    , "img/svg/twitter.svg"     , 512)
			.icon("phone"      , "img/svg/phone.svg"       , 512);


	})
	
   .constant('monthList', ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])

   .constant('APIKEY', 'AIzaSyD2cHJ-K8BStHf6axFi13_cvhX3BzqValE')

   .constant('CLIENTID', '598123322729-91cbmds83g0uh0u9elf7ji3cqbtljbjm.apps.googleusercontent.com')

   .constant('SCOPES', ['https://www.googleapis.com/auth/analytics',
						'https://www.googleapis.com/auth/webmasters',
						'https://www.googleapis.com/auth/analytics.edit'])

   .constant('SCOPE', "https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/analytics.edit")

	.config(function($mdThemingProvider) {
		$mdThemingProvider.definePalette('myPrimary', {
			'50': '0072D0',
			'100': '0072D0',
			'200': '0072D0',
			'300': '0072D0',
			'400': '004884',
			'500': '004884',
			'600': '004884',
			'700': '003A6A',
			'800': '003A6A',
			'900': '003A6A',
			'A100': '228CDB',
			'A200': '1E7CC1',
			'A400': '18639B',
			'A700': '0E3A5B',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
			// on this palette should be dark or light
			'contrastDarkColors': [],
			'contrastLightColors': []    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.definePalette('myAccent', {
			'50': '8CE300',
			'100': '8CE300',
			'200': '8CE300',
			'300': '8CE300',
			'400': '7CC900',
			'500': '7CC900',
			'600': '7CC900',
			'700': '65A300',
			'800': '65A300',
			'900': '65A300',
			'A100': '8CE300',
			'A200': '7CC900',
			'A400': '65A300',
			'A700': '558900',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
			// on this palette should be dark or light
			'contrastDarkColors': [],
			'contrastLightColors': []    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.definePalette('myWarn', {
			'50': '401A7F',
			'100': '401A7F',
			'200': '401A7F',
			'300': '401A7F',
			'400': '3A1772',
			'500': '3A1772',
			'600': '3A1772',
			'700': '2E125B',
			'800': '2E125B',
			'900': '2E125B',
			'A100': '1D0B39',
			'A200': '1D0B39',
			'A400': '1D0B39',
			'A700': '1D0B39',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
		                                        // on this palette should be dark or light
			'contrastDarkColors': [],
			'contrastLightColors': []    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.definePalette('myBackground', {
			'50': 'f2f2f2',
			'100': 'f2f2f2',
			'200': 'f2f2f2',
			'300': 'f2f2f2',
			'400': 'e0e0e0',
			'500': 'e0e0e0',
			'600': 'e0e0e0',
			'700': 'D8D8D8',
			'800': 'D8D8D8',
			'900': 'D8D8D8',
			'A100': 'f0f0f0',
			'A200': 'ffffff',
			'A400': 'e0e0e0',
			'A700': 'D8D8D8',
			'contrastDefaultColor': 'dark',    // whether, by default, text (contrast)
		                                        // on this palette should be dark or light
			'contrastDarkColors': [],
			'contrastLightColors': undefined    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.theme('default')
			.primaryPalette('myPrimary', {

			})
			.accentPalette('myAccent', {

			})
			.warnPalette('myWarn', {

			})
			.backgroundPalette('myBackground', {
				'default': 'A100',
				'hue-1': 'A200',
				'hue-3': 'A700',
				'hue-2': 'A400'
			});

		$mdThemingProvider.setDefaultTheme('default');
	})



.config(['$stateProvider', '$urlRouterProvider', '$logProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('app', {
			url: '/app',
			templateUrl: 'portal/templates/menu.html',
			controller: 'AppCtrl',
			data: {
				requireLogin: false
			}
		})
		.state('logout', {
			url: '/logout',
			views: {
				'menu': {
					templateUrl: 'portal/templates/logout.html',
					controller: 'logoutCtrl'
				}
			},
			data: {
				requireLogin: false
			}
		})

		.state('login', {
			url: '/login',
			views: {
				'menu': {
					templateUrl: 'portal/templates/login.html',
					controller: 'loginCtrl'
				}
			},
			data: {
				requireLogin: true
			}
		})

		.state('clients', {
			url: '/clients',
			views: {
				'menu': {
					templateUrl: 'portal/templates/clients.html',
					controller: 'clientCtrl'
				}
			},
			data: {
				requireLogin: true
			},
			params: {
				id: 1
			}
		})
		.state('home', {
			url: '/home',
			views: {
				'menu': {
					templateUrl: 'portal/templates/home.html',
					controller: 'homeCtrl'
				}
			},
			data: {
				requireLogin: true
			}
		})
		.state('management', {
			url: '/management',
			views: {
				'menu': {
					templateUrl: 'portal/templates/management.html',
					controller: 'mgmtCtrl'
				}
			},
			data: {
				requireLogin: true
			}
		})
		.state('uploadReports', {
			url: '/uploadReports',
			views: {
				'menu': {
					templateUrl: 'portal/templates/uploadReports.html',
					controller: 'uploadCtrl'
				}
			},
			data: {
				requireLogin: true
			}
		})
		.state('pageSpeed', {
			url: '/pageSpeed',
			views: {
				'menu': {
					templateUrl: 'portal/templates/pageSpeed.html',
					controller: 'speedCtrl'
				}
			},
			data: {
				requireLogin: true
			}
		})
		.state('signup', {
			url: '/signup',
			views: {
				'menu': {
					templateUrl: 'portal/templates/signup.html',
					controller: 'signupCtrl'
				}
			},
			data: {
				requireLogin: true
			}
		})
		.state('editClient', {
			url: '/editClient',
			views: {
				'menu': {
					templateUrl: 'portal/templates/editClient.html',
					controller: 'editClientCtrl'
				}
			},
			data: {
				requireLogin: true
			}
		})

		.state('moz', {
			url: '/moz',
			views: {
				'menu': {
					templateUrl: 'portal/templates/moz.html',
					controller: 'mozCtrl'
				}
			},
			data: {
				requireLogin: false
			}
		})
		
		.state('newreport', {
			url: '/newreport',
			views: {
				'menu': {
					templateUrl: 'portal/templates/newreport.html',
					controller: 'newreportCtrl'
				}
			},
			data: {
				requireLogin: false
			}
		})

		.state('analytics', {
			url: '/analytics',
			views: {
				'menu': {
					templateUrl: 'portal/templates/analytics.html',
					controller: 'analyticsCtrl'
				}
			},
			data: {
				requireLogin: true
			},
			resolve: {
				loadMyService: ['$ocLazyLoad', '$injector', function($ocLazyLoad, $injector) {
					return $ocLazyLoad.load('https://apis.google.com/js/platform.js').then(function() {
						//var $serviceTest = $injector.get("gapi");
					//	$serviceTest.load('analytics');
					});
				}]
			}
		})


		.state('viewReports', {
			url: '/viewReports',
			views: {
				'menu': {
					templateUrl: 'portal/templates/viewReports.html',
					controller: 'reportCtrl'
				}
			},
			data: {
				requireLogin: true
			},
			resolve: {
				deps: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load([
						{
							name: 'zingchart-angularjs',
							files: [
								'lib/ZingChart-AngularJS/src/zingchart-angularjs.js',
								'https://cdn.zingchart.com/zingchart.min.js'
							]
						}
					]);
				}]
			}
		})


		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/clients');
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
