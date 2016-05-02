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