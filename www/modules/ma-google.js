angular.module('maGoogle', [])

	   .factory('maAuth',
	   ['$rootScope', '$q', 'maClient', 'maApi', 'maData', '$interval', '$window', '$location', '$state', function($rootScope, $q, maClient, maApi, maData, $interval, $window, $location, $state) {
		   var isLoad = false;
		   var CLIENT_ID;
		   var DOMAIN = undefined;
		   var SCOPE = 'https://www.googleapis.com/auth/userinfo.email';
		   var RESPONSE_TYPE = 'token id_token';
		   var profileImg = document.getElementById('profileImg');
		   var authenticated;

		   function getId() {

			   gapi.client.plus.people.get({userId: 'me'}).execute(function(resp) {
				   var reply = resp;
				   $rootScope.profileImg.src = reply.image.url;
				   console.log(reply);
				   var isValid = validateUser(reply.id);
				   if(isValid === false) {
					   return false;
				   } else {
					   if(isValid == true) {
						   return true;
					   } else {
						   return false;
					   }
				   }
			   });
		   }

		   function validateUser(id) {
			   var id = id;
			   if(id === '109792126873673599082' || id === '103294612803329153998') {
				   authenticated = true;
			   } else {
				   authenticated = false;
			   }
			   return authenticated;
		   }

		   function load() {
			   var deferred = $q.defer();
			   if(isLoad == false) {
				   maClient.get().then(function() {
					   $window.gapi.client.load('oauth2', 'v2', function() {
						   isLoad = true;
						   deferred.resolve();
					   });
				   });
			   } else {
				   deferred.resolve();
			   }
			   return deferred.promise;
		   }

		   function signin(mode, authorizeCallback) {

			   load().then(function() {
				   var config = {
					   client_id: CLIENT_ID,
					   scope: SCOPE,
					   immediate: false,
					   authuser: -1,
					   response_type: RESPONSE_TYPE
				   };
				   if(mode) {
					   config.user_id = maData.getUserId();
					   config.immediate = true;
				   }
				   if(DOMAIN != undefined) {
					   config.hd = DOMAIN;
				   }
				   $window.gapi.auth.authorize(config, authorizeCallback);
			   });
		   }

		   function offline() {
			   var deferred = $q.defer();
			   var origin = $location.protocol() + "//" + $location.hostname();
			   if($location.port() != "" || ($location.port() != 443 && $location.protocol() == "https")) {
				   origin = origin + ':' + $location.port();
			   }
			   var win = $window.open('https://accounts.google.com/o/oauth2/auth?scope=' + encodeURI(
			   SCOPE) + '&redirect_uri=postmessage&response_type=code&client_id=' + CLIENT_ID + '&access_type=offline&approval_prompt=force&origin=' + origin,
			   null, 'width=800, height=600');

			   $window.addEventListener("message", getCode);

			   function getCode(event) {
				   if(event.origin === "https://accounts.google.com") {
					   var data = JSON.parse(event.data);
					   $window.removeEventListener("message", getCode);
					   data = gup(data.a[0], 'code');
					   if(data == undefined) {
						   deferred.reject();
					   } else {
						   deferred.resolve(data);
					   }

				   }
			   }

			   function gup(url, name) {
				   name = name.replace(/[[]/, "\[").replace(/[]]/, "\]");
				   var regexS = name + "=([^&#]*)";
				   var regex = new RegExp(regexS);
				   var results = regex.exec(url);
				   if(results == null) {
					   return undefined;
				   } else {
					   return results[1];
				   }
			   }

			   return deferred.promise;
		   }

		   function getUser() {

			   var deferred = $q.defer();
			   gapi.client.plus.people.get({userId: 'me'}).execute(function(resp) {
				   var reply = resp;
				   $rootScope.profileImg.src = reply.image.url;
				   console.log(reply);
				   return deferred.promise;
			   }, function(err) {
				   return
			   });

		   }

		   return {
			   validate: function() {
				   var deferred = $q.defer();
					   getId().then(function(resp) {
						   deferred.resolve(resp);
					   }, function(err) {
						   var error = err;
						   if(typeof error === 'undefined') {
							   error = false;
						   }
						   deferred.reject(error);
					   });
				   return deferred.promise;
			   },

			   getUser: function(client) {
				   var deferred = $q.defer();
				   signin(true, function() {
					   getUser().then(function(user) {
						   console.log(user);
						   deferred.resolve(user);
					   }, function(err) {
						   var error = err;
						   if(typeof error === 'undefined') {
							   error = false;
						   }
						   deferred.reject(error);
					   });
				   });
				   return deferred.promise;
			   },

			   setClient: function(client) {
				   CLIENT_ID = client;
			   },

			   setDomain: function(domain) {
				   DOMAIN = domain;
			   },

			   setScope: function(scope) {
				   SCOPE = scope;
			   },

			   checkAuth: function() {
				   var deferred = $q.defer();
				   signin(true, function() {
					   getUser().then(function(user) {
						   console.log(user);
						   deferred.resolve(user);
					   }, function(err) {
						   var error = err;
						   if(typeof error === 'undefined') {
							   error = false;
						   }
						   deferred.reject(error);
					   });
				   });
				   return deferred.promise;
			   },

			   login: function() {
				   var deferred = $q.defer();
				   signin(true, function() {
					   getUser().then(function(user) {
						   deferred.resolve(user);
					   }, function() {
						   deferred.reject();
					   });
				   });
				   return deferred.promise;
			   },

			   setToken: function(token) {
				   var deferred = $q.defer();
				   load().then(function() {
					   $window.gapi.auth.setToken(token);
					   getUser().then(function() {
						   deferred.resolve();
					   }, function() {
						   deferred.reject();
					   });
				   });
				   return deferred.promise;
			   },

			   getToken: function() {
				   var deferred = $q.defer();
				   load().then(function() {
					   deferred.resolve($window.gapi.auth.getToken());
				   });
				   return deferred.promise;
			   },

			   logout: function() {
				   var deferred = $q.defer();
				   load().then(function() {
					   $window.gapi.auth.setToken(null);
					   maData.isLogin(false);
					   maData.getUser(null);
					   deferred.resolve();
				   });
				   return deferred.promise;
			   },

			   offline: function() {
				   var deferred = $q.defer();
				   offline().then(function(code) {
					   deferred.resolve(code);
				   }, function() {
					   deferred.reject();
				   });
				   return deferred.promise;
			   },

		   }

	   }])

	   .factory('maApi', ['$q', 'maClient', 'maData', '$window', function($q, maClient, maData, $window) {

		   var apisLoad = [];

		   var observerCallbacks = [];

		   function registerObserverCallback(api, method, params, auth, deferred) {
			   var observerCallback = {};
			   observerCallback.api = api;
			   observerCallback.apiLoad = false;
			   observerCallback.method = method;
			   observerCallback.params = params;
			   observerCallback.auth = auth;
			   observerCallback.deferred = deferred;
			   observerCallbacks.push(observerCallback);
		   };

		   function load(api, version, url) {
			   var deferred = $q.defer();
			   maClient.get().then(function() {
				   $window.gapi.client.load(api, version, undefined, url).then(function(response) {
					   var result = {'api': api, 'version': version, 'url': url};
					   if(response && response.hasOwnProperty('error')) {
						   console.log(version);
						   deferred.reject(result);
					   } else {
						   deferred.resolve(result);
						   apisLoad.push(api);
						   executeCallbacks(api);
					   }
				   });
			   });
			   return deferred.promise;
		   }

		   function executeCallbacks(api) {
			   var apiName = api;

			   for(var i = 0; i < observerCallbacks.length; i++) {
				   var observerCallback = observerCallbacks[i];
				   if((observerCallback.api == apiName || observerCallback.apiLoad) && (observerCallback.auth == false || maData.isLogin() == true)) {
					   runGapi(observerCallback.api, observerCallback.method, observerCallback.params,
					   observerCallback.deferred);
					   if(i > -1) {
						   observerCallbacks.splice(i--, 1);
					   }
				   } else {
					   if(observerCallback.api == apiName) {
						   observerCallbacks[i]['apiLoad'] = true;
					   }
				   }
			   }
			   ;

		   }

		   function createRequest(api, method, params) {
			   var pathMethod = method.split('.');
			   var api = $window.gapi.client[api];
			   for(var i = 0; i < pathMethod.length; i++) {
				   api = api[pathMethod[i]];
			   }
			   return api(params);
		   }

		   function runGapi(api, method, params, deferred) {
			   createRequest(api, method, params).execute(function(response) {
				   if(response.error) {
					   deferred.reject(response);
				   } else {
					   deferred.resolve(response);
				   }
			   });
		   }

		   function execute(api, method, params, auth) {
			   var deferred = $q.defer();
			   if(apisLoad.indexOf(api) > -1) {
				   runGapi(api, method, params, deferred);
			   } else {
				   registerObserverCallback(api, method, params, auth, deferred);
			   }
			   return deferred.promise;
		   }

		   //exponentialBackoff
		   function retryExecute(actionPromise, args) {
			   var queryResults = $q.defer();
			   var iter = 0;
			   retry(actionPromise, iter);
			   function retry(actionPromise, iter) {
				   actionPromise.apply(this, args).then(function(body) {
					   queryResults.resolve(body);
				   }).catch(function(error) {
					   if((error.code == 403 && error.message.toLowerCase().indexOf(
					   'limit exceeded') > -1) || error.code == 503) {
						   var base = 2;
						   var ms = 1000;
						   var randomMilliseconds = Math.floor((Math.random() * 1000) + 1);
						   if(iter < 5) {
							   setTimeout(function() {
								   retry(actionPromise, ++iter);
							   }, (ms * Math.pow(base, iter)) + randomMilliseconds);
						   } else {
							   queryResults.reject(error);
						   }
					   } else {
						   queryResults.reject(error);
					   }
				   });
			   }

			   return queryResults.promise;
		   }


		   return {

			   executeCallbacks: function() {
				   executeCallbacks();
			   },

			   load: load, createRequest: createRequest,

			   execute: function(api, method, params) {
				   if(arguments.length == 3) {
					   return execute(api, method, params, false);
				   }
				   if(arguments.length == 2) {
					   return execute(api, method, null, false);
				   }
			   },

			   executeAuth: function(api, method, params) {
				   if(arguments.length == 3) {
					   return retryExecute(execute, arguments);
				   } //return execute(api, method, params, true)
				   if(arguments.length == 2) {
					   return retryExecute(execute, arguments);
				   } //return execute(api, method, null, true)
			   },
		   }
	   }])

	   .factory('maClient', ['$document', '$q', '$window', function($document, $q, $window) {

		   var LOAD_GAE_API = false;
		   var LOADING_GAE_API = false;
		   var URL = 'https://apis.google.com/js/client.js?onload=_gapiOnLoad';
		   var API_KEY = null;
		   var OBSERVER_CALLBACKS = [];

		   function loadScript(src) {
			   var deferred = $q.defer();
			   $window._gapiOnLoad = function() {
				   deferred.resolve();
			   }
			   var script = $document[0].createElement('script');
			   script.onerror = function(e) {
				   $timeout(function() {
					   deferred.reject(e);
				   });
			   };
			   script.src = src;
			   $document[0].body.appendChild(script);
			   return deferred.promise;
		   };


		   return {

			   get: function() {
				   var deferred = $q.defer();
				   if(LOAD_GAE_API) {
					   deferred.resolve();
				   } else {
					   if(LOADING_GAE_API) {
						   OBSERVER_CALLBACKS.push(deferred);
					   } else {
						   LOADING_GAE_API = true;
						   loadScript(URL).then(function() {
							   $window.gapi.client.setApiKey(API_KEY)
							   LOAD_GAE_API = true;
							   LOADING_GAE_API = false;
							   deferred.resolve();
							   for(var i = 0; i < OBSERVER_CALLBACKS.length; i++) {
								   OBSERVER_CALLBACKS[i].resolve();
							   }
						   });
					   }
				   }
				   return deferred.promise;
			   },

			   setApiKey: function(apiKey) {
				   API_KEY = apiKey;
				   if(LOAD_GAE_API) {
					   $window.gapi.client.setApiKey(API_KEY);
				   }
			   },

			   getApiKey: function() {
				   return API_KEY;
			   }

		   }

	   }])

	   .factory('maData', ['$rootScope', function($rootScope) {

		   $rootScope.gapi = {};
	
		   var isLogin = false;
		   var user = null;
		   var userId = null;
	
		   return {

			   getUserId: function() {
				   return userId;
			   },
		
			   setUserId: function(id) {
				   userId = id;
			   },

			   isLogin: function(value) {
				   if(arguments.length == 0) {
					   return isLogin;
				   }
				   isLogin = value;
				   $rootScope.gapi.login = value;
			   },

			   getUser: function(value) {
				   if(arguments.length == 0) {
					   return user;
				   }
				   user = value;
				   if(value !== null) {
					   userId = value.id;
				   }
			   }

		   }

	   }])
