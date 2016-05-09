angular.module('app', ['ngMaterial', 'ui.router', 'app.controllers', 'app.directives', 'app.services', 'ngAnimate', 'ngAria', 'ngMessages'])

	.run(function($rootScope) {

		$rootScope.monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

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
			'A100': '002544',
			'A200': '002544',
			'A400': '002544',
			'A700': '002544',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
			// on this palette should be dark or light
			'contrastDarkColors': ['50', '100'],
			'contrastLightColors': []    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.definePalette('myAccent', {
			'50': 'A0A7D2',
			'100': 'A0A7D2',
			'200': 'c2e0a8',
			'300': 'c2e0a8',
			'400': '707493',
			'500': '666A86',
			'600': '666A86',
			'700': '53566C',
			'800': '393E36',
			'900': '393E36',
			'A100': 'F18F01',
			'A200': '2F195F',
			'A400': '1D3461',
			'A700': '1D3461',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
			// on this palette should be dark or light
			'contrastDarkColors': [],
			'contrastLightColors': []    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.definePalette('myWarn', {
			'50': '2494E8',
			'100': '2494E8',
			'200': '2494E8',
			'300': '2494E8',
			'400': '228CDB',
			'500': '228CDB',
			'600': '228CDB',
			'700': '18639B',
			'800': '18639B',
			'900': '18639B',
			'A100': '0E3A5B',
			'A200': '0E3A5B',
			'A400': '0E3A5B',
			'A700': '0E3A5B',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
		                                        // on this palette should be dark or light
			'contrastDarkColors': [],
			'contrastLightColors': []    // could also specify this if default was 'dark'
		});
		$mdThemingProvider.definePalette('myBackground', {
			'50': 'FCF7F8',
			'100': 'FCF7F8',
			'200': 'FCF7F8',
			'300': 'FCF7F8',
			'400': 'E2DEDF',
			'500': 'E2DEDF',
			'600': 'E2DEDF',
			'700': 'BCB9B9',
			'800': 'BCB9B9',
			'900': 'BCB9B9',
			'A100': 'E2DEDF',
			'A200': 'E2DEDF',
			'A400': 'BCB9B9',
			'A700': '7C7A7B',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
		                                        // on this palette should be dark or light
			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
				'200', '300', '400', 'A100'],
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
				'hue-1': '200',
				'hue-2': '500',
				'hue-3': '800'
			});

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