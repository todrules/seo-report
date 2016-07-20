(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Operator
 * @header lbServices.Operator
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Operator` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Operator",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Operators/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Operator#prototype$__findById__accessTokens
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Operators/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Operators/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#prototype$__updateById__accessTokens
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Operators/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Operator.company.findById() instead.
        "prototype$__findById__company": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Operators/:id/company/:fk",
          method: "GET"
        },

        // INTERNAL. Use Operator.company.destroyById() instead.
        "prototype$__destroyById__company": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Operators/:id/company/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Operator.company.updateById() instead.
        "prototype$__updateById__company": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Operators/:id/company/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#prototype$__get__accessTokens
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Queries accessTokens of Operator.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Operators/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#prototype$__create__accessTokens
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Operators/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#prototype$__delete__accessTokens
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Operators/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#prototype$__count__accessTokens
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Counts accessTokens of Operator.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Operators/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Operator.company() instead.
        "prototype$__get__company": {
          isArray: true,
          url: urlBase + "/Operators/:id/company",
          method: "GET"
        },

        // INTERNAL. Use Operator.company.create() instead.
        "prototype$__create__company": {
          url: urlBase + "/Operators/:id/company",
          method: "POST"
        },

        // INTERNAL. Use Operator.company.destroyAll() instead.
        "prototype$__delete__company": {
          url: urlBase + "/Operators/:id/company",
          method: "DELETE"
        },

        // INTERNAL. Use Operator.company.count() instead.
        "prototype$__count__company": {
          url: urlBase + "/Operators/:id/company/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#create
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Operators",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#createMany
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Operators",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#upsert
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Operators",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#exists
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Operators/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#findById
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Operators/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#find
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Operators",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#findOne
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Operators/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#updateAll
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Operators/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#deleteById
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Operators/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#count
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Operators/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#prototype$updateAttributes
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Operators/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#createChangeStream
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Operators/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#login
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Operators/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#logout
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Operators/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#confirm
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Operators/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#resetPassword
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Operators/reset",
          method: "POST"
        },

        // INTERNAL. Use Company.members.findById() instead.
        "::findById::Company::members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/members/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.members.destroyById() instead.
        "::destroyById::Company::members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/members/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.members.updateById() instead.
        "::updateById::Company::members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/members/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.members() instead.
        "::get::Company::members": {
          isArray: true,
          url: urlBase + "/Companies/:id/members",
          method: "GET"
        },

        // INTERNAL. Use Company.members.create() instead.
        "::create::Company::members": {
          url: urlBase + "/Companies/:id/members",
          method: "POST"
        },

        // INTERNAL. Use Company.members.createMany() instead.
        "::createMany::Company::members": {
          isArray: true,
          url: urlBase + "/Companies/:id/members",
          method: "POST"
        },

        // INTERNAL. Use Company.members.destroyAll() instead.
        "::delete::Company::members": {
          url: urlBase + "/Companies/:id/members",
          method: "DELETE"
        },

        // INTERNAL. Use Company.members.count() instead.
        "::count::Company::members": {
          url: urlBase + "/Companies/:id/members/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Operator#getCurrent
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Operators" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Operator#updateOrCreate
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Operator#update
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Operator#destroyById
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Operator#removeById
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Operator#getCachedCurrent
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Operator#login} or
         * {@link lbServices.Operator#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Operator instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Operator#isAuthenticated
         * @methodOf lbServices.Operator
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Operator#getCurrentId
         * @methodOf lbServices.Operator
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Operator#modelName
    * @propertyOf lbServices.Operator
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Operator`.
    */
    R.modelName = "Operator";

    /**
     * @ngdoc object
     * @name lbServices.Operator.company
     * @header lbServices.Operator.company
     * @object
     * @description
     *
     * The object `Operator.company` groups methods
     * manipulating `Company` instances related to `Operator`.
     *
     * Call {@link lbServices.Operator#company Operator.company()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Operator#company
         * @methodOf lbServices.Operator
         *
         * @description
         *
         * Queries company of Operator.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Operator::company"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Operator.company#count
         * @methodOf lbServices.Operator.company
         *
         * @description
         *
         * Counts company of Operator.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.company.count = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::count::Operator::company"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Operator.company#create
         * @methodOf lbServices.Operator.company
         *
         * @description
         *
         * Creates a new instance in company of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company.create = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::create::Operator::company"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Operator.company#createMany
         * @methodOf lbServices.Operator.company
         *
         * @description
         *
         * Creates a new instance in company of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company.createMany = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::createMany::Operator::company"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Operator.company#destroyAll
         * @methodOf lbServices.Operator.company
         *
         * @description
         *
         * Deletes all company of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.company.destroyAll = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::delete::Operator::company"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Operator.company#destroyById
         * @methodOf lbServices.Operator.company
         *
         * @description
         *
         * Delete a related item by id for company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for company
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.company.destroyById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::destroyById::Operator::company"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Operator.company#findById
         * @methodOf lbServices.Operator.company
         *
         * @description
         *
         * Find a related item by id for company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for company
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company.findById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::findById::Operator::company"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Operator.company#updateById
         * @methodOf lbServices.Operator.company
         *
         * @description
         *
         * Update a related item by id for company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for company
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company.updateById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::updateById::Operator::company"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Company
 * @header lbServices.Company
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Company` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Company",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Companies/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Company.members.findById() instead.
        "prototype$__findById__members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/members/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.members.destroyById() instead.
        "prototype$__destroyById__members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/members/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.members.updateById() instead.
        "prototype$__updateById__members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/members/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.metrics.findById() instead.
        "prototype$__findById__metrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/metrics/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.metrics.destroyById() instead.
        "prototype$__destroyById__metrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/metrics/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.metrics.updateById() instead.
        "prototype$__updateById__metrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/metrics/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.competitorMetrics.findById() instead.
        "prototype$__findById__competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitorMetrics/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.competitorMetrics.destroyById() instead.
        "prototype$__destroyById__competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitorMetrics/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.competitorMetrics.updateById() instead.
        "prototype$__updateById__competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitorMetrics/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.competitors.findById() instead.
        "prototype$__findById__competitors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.competitors.destroyById() instead.
        "prototype$__destroyById__competitors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.competitors.updateById() instead.
        "prototype$__updateById__competitors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.keywordMetrics.findById() instead.
        "prototype$__findById__keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywordMetrics/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.keywordMetrics.destroyById() instead.
        "prototype$__destroyById__keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywordMetrics/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.keywordMetrics.updateById() instead.
        "prototype$__updateById__keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywordMetrics/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.keywords.findById() instead.
        "prototype$__findById__keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywords/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.keywords.destroyById() instead.
        "prototype$__destroyById__keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywords/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.keywords.updateById() instead.
        "prototype$__updateById__keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywords/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.landingPages.findById() instead.
        "prototype$__findById__landingPages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/landingPages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.landingPages.destroyById() instead.
        "prototype$__destroyById__landingPages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/landingPages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.landingPages.updateById() instead.
        "prototype$__updateById__landingPages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/landingPages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.referrers.findById() instead.
        "prototype$__findById__referrers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/referrers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.referrers.destroyById() instead.
        "prototype$__destroyById__referrers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/referrers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.referrers.updateById() instead.
        "prototype$__updateById__referrers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/referrers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.queries.findById() instead.
        "prototype$__findById__queries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/queries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.queries.destroyById() instead.
        "prototype$__destroyById__queries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/queries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.queries.updateById() instead.
        "prototype$__updateById__queries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/queries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.channels.findById() instead.
        "prototype$__findById__channels": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/channels/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.channels.destroyById() instead.
        "prototype$__destroyById__channels": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/channels/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.channels.updateById() instead.
        "prototype$__updateById__channels": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/channels/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.members() instead.
        "prototype$__get__members": {
          isArray: true,
          url: urlBase + "/Companies/:id/members",
          method: "GET"
        },

        // INTERNAL. Use Company.members.create() instead.
        "prototype$__create__members": {
          url: urlBase + "/Companies/:id/members",
          method: "POST"
        },

        // INTERNAL. Use Company.members.destroyAll() instead.
        "prototype$__delete__members": {
          url: urlBase + "/Companies/:id/members",
          method: "DELETE"
        },

        // INTERNAL. Use Company.members.count() instead.
        "prototype$__count__members": {
          url: urlBase + "/Companies/:id/members/count",
          method: "GET"
        },

        // INTERNAL. Use Company.metrics() instead.
        "prototype$__get__metrics": {
          isArray: true,
          url: urlBase + "/Companies/:id/metrics",
          method: "GET"
        },

        // INTERNAL. Use Company.metrics.create() instead.
        "prototype$__create__metrics": {
          url: urlBase + "/Companies/:id/metrics",
          method: "POST"
        },

        // INTERNAL. Use Company.metrics.destroyAll() instead.
        "prototype$__delete__metrics": {
          url: urlBase + "/Companies/:id/metrics",
          method: "DELETE"
        },

        // INTERNAL. Use Company.metrics.count() instead.
        "prototype$__count__metrics": {
          url: urlBase + "/Companies/:id/metrics/count",
          method: "GET"
        },

        // INTERNAL. Use Company.competitorMetrics() instead.
        "prototype$__get__competitorMetrics": {
          isArray: true,
          url: urlBase + "/Companies/:id/competitorMetrics",
          method: "GET"
        },

        // INTERNAL. Use Company.competitorMetrics.create() instead.
        "prototype$__create__competitorMetrics": {
          url: urlBase + "/Companies/:id/competitorMetrics",
          method: "POST"
        },

        // INTERNAL. Use Company.competitorMetrics.destroyAll() instead.
        "prototype$__delete__competitorMetrics": {
          url: urlBase + "/Companies/:id/competitorMetrics",
          method: "DELETE"
        },

        // INTERNAL. Use Company.competitorMetrics.count() instead.
        "prototype$__count__competitorMetrics": {
          url: urlBase + "/Companies/:id/competitorMetrics/count",
          method: "GET"
        },

        // INTERNAL. Use Company.competitors() instead.
        "prototype$__get__competitors": {
          isArray: true,
          url: urlBase + "/Companies/:id/competitors",
          method: "GET"
        },

        // INTERNAL. Use Company.competitors.create() instead.
        "prototype$__create__competitors": {
          url: urlBase + "/Companies/:id/competitors",
          method: "POST"
        },

        // INTERNAL. Use Company.competitors.destroyAll() instead.
        "prototype$__delete__competitors": {
          url: urlBase + "/Companies/:id/competitors",
          method: "DELETE"
        },

        // INTERNAL. Use Company.competitors.count() instead.
        "prototype$__count__competitors": {
          url: urlBase + "/Companies/:id/competitors/count",
          method: "GET"
        },

        // INTERNAL. Use Company.keywordMetrics() instead.
        "prototype$__get__keywordMetrics": {
          isArray: true,
          url: urlBase + "/Companies/:id/keywordMetrics",
          method: "GET"
        },

        // INTERNAL. Use Company.keywordMetrics.create() instead.
        "prototype$__create__keywordMetrics": {
          url: urlBase + "/Companies/:id/keywordMetrics",
          method: "POST"
        },

        // INTERNAL. Use Company.keywordMetrics.destroyAll() instead.
        "prototype$__delete__keywordMetrics": {
          url: urlBase + "/Companies/:id/keywordMetrics",
          method: "DELETE"
        },

        // INTERNAL. Use Company.keywordMetrics.count() instead.
        "prototype$__count__keywordMetrics": {
          url: urlBase + "/Companies/:id/keywordMetrics/count",
          method: "GET"
        },

        // INTERNAL. Use Company.keywords() instead.
        "prototype$__get__keywords": {
          isArray: true,
          url: urlBase + "/Companies/:id/keywords",
          method: "GET"
        },

        // INTERNAL. Use Company.keywords.create() instead.
        "prototype$__create__keywords": {
          url: urlBase + "/Companies/:id/keywords",
          method: "POST"
        },

        // INTERNAL. Use Company.keywords.destroyAll() instead.
        "prototype$__delete__keywords": {
          url: urlBase + "/Companies/:id/keywords",
          method: "DELETE"
        },

        // INTERNAL. Use Company.keywords.count() instead.
        "prototype$__count__keywords": {
          url: urlBase + "/Companies/:id/keywords/count",
          method: "GET"
        },

        // INTERNAL. Use Company.landingPages() instead.
        "prototype$__get__landingPages": {
          isArray: true,
          url: urlBase + "/Companies/:id/landingPages",
          method: "GET"
        },

        // INTERNAL. Use Company.landingPages.create() instead.
        "prototype$__create__landingPages": {
          url: urlBase + "/Companies/:id/landingPages",
          method: "POST"
        },

        // INTERNAL. Use Company.landingPages.destroyAll() instead.
        "prototype$__delete__landingPages": {
          url: urlBase + "/Companies/:id/landingPages",
          method: "DELETE"
        },

        // INTERNAL. Use Company.landingPages.count() instead.
        "prototype$__count__landingPages": {
          url: urlBase + "/Companies/:id/landingPages/count",
          method: "GET"
        },

        // INTERNAL. Use Company.referrers() instead.
        "prototype$__get__referrers": {
          isArray: true,
          url: urlBase + "/Companies/:id/referrers",
          method: "GET"
        },

        // INTERNAL. Use Company.referrers.create() instead.
        "prototype$__create__referrers": {
          url: urlBase + "/Companies/:id/referrers",
          method: "POST"
        },

        // INTERNAL. Use Company.referrers.destroyAll() instead.
        "prototype$__delete__referrers": {
          url: urlBase + "/Companies/:id/referrers",
          method: "DELETE"
        },

        // INTERNAL. Use Company.referrers.count() instead.
        "prototype$__count__referrers": {
          url: urlBase + "/Companies/:id/referrers/count",
          method: "GET"
        },

        // INTERNAL. Use Company.queries() instead.
        "prototype$__get__queries": {
          isArray: true,
          url: urlBase + "/Companies/:id/queries",
          method: "GET"
        },

        // INTERNAL. Use Company.queries.create() instead.
        "prototype$__create__queries": {
          url: urlBase + "/Companies/:id/queries",
          method: "POST"
        },

        // INTERNAL. Use Company.queries.destroyAll() instead.
        "prototype$__delete__queries": {
          url: urlBase + "/Companies/:id/queries",
          method: "DELETE"
        },

        // INTERNAL. Use Company.queries.count() instead.
        "prototype$__count__queries": {
          url: urlBase + "/Companies/:id/queries/count",
          method: "GET"
        },

        // INTERNAL. Use Company.channels() instead.
        "prototype$__get__channels": {
          isArray: true,
          url: urlBase + "/Companies/:id/channels",
          method: "GET"
        },

        // INTERNAL. Use Company.channels.create() instead.
        "prototype$__create__channels": {
          url: urlBase + "/Companies/:id/channels",
          method: "POST"
        },

        // INTERNAL. Use Company.channels.destroyAll() instead.
        "prototype$__delete__channels": {
          url: urlBase + "/Companies/:id/channels",
          method: "DELETE"
        },

        // INTERNAL. Use Company.channels.count() instead.
        "prototype$__count__channels": {
          url: urlBase + "/Companies/:id/channels/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#create
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Companies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#createMany
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Companies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#upsert
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Companies",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#exists
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Companies/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#findById
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Companies/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#find
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Companies",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#findOne
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Companies/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#updateAll
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Companies/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#deleteById
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Companies/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#count
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Companies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#prototype$updateAttributes
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Companies/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Company#createChangeStream
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Companies/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Operator.company.findById() instead.
        "::findById::Operator::company": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Operators/:id/company/:fk",
          method: "GET"
        },

        // INTERNAL. Use Operator.company.destroyById() instead.
        "::destroyById::Operator::company": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Operators/:id/company/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Operator.company.updateById() instead.
        "::updateById::Operator::company": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Operators/:id/company/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Operator.company() instead.
        "::get::Operator::company": {
          isArray: true,
          url: urlBase + "/Operators/:id/company",
          method: "GET"
        },

        // INTERNAL. Use Operator.company.create() instead.
        "::create::Operator::company": {
          url: urlBase + "/Operators/:id/company",
          method: "POST"
        },

        // INTERNAL. Use Operator.company.createMany() instead.
        "::createMany::Operator::company": {
          isArray: true,
          url: urlBase + "/Operators/:id/company",
          method: "POST"
        },

        // INTERNAL. Use Operator.company.destroyAll() instead.
        "::delete::Operator::company": {
          url: urlBase + "/Operators/:id/company",
          method: "DELETE"
        },

        // INTERNAL. Use Operator.company.count() instead.
        "::count::Operator::company": {
          url: urlBase + "/Operators/:id/company/count",
          method: "GET"
        },

        // INTERNAL. Use CompanyMetric.company() instead.
        "::get::CompanyMetric::company": {
          url: urlBase + "/CompanyMetrics/:id/company",
          method: "GET"
        },

        // INTERNAL. Use CompetitorMetric.company() instead.
        "::get::CompetitorMetric::company": {
          url: urlBase + "/CompetitorMetrics/:id/company",
          method: "GET"
        },

        // INTERNAL. Use Competitor.company() instead.
        "::get::Competitor::company": {
          url: urlBase + "/Competitors/:id/company",
          method: "GET"
        },

        // INTERNAL. Use KeywordMetric.company() instead.
        "::get::KeywordMetric::company": {
          url: urlBase + "/KeywordMetrics/:id/company",
          method: "GET"
        },

        // INTERNAL. Use Keyword.company() instead.
        "::get::Keyword::company": {
          url: urlBase + "/Keywords/:id/company",
          method: "GET"
        },

        // INTERNAL. Use LandingPage.company() instead.
        "::get::LandingPage::company": {
          url: urlBase + "/LandingPages/:id/company",
          method: "GET"
        },

        // INTERNAL. Use Referrer.company() instead.
        "::get::Referrer::company": {
          url: urlBase + "/Referrers/:id/company",
          method: "GET"
        },

        // INTERNAL. Use Query.company() instead.
        "::get::Query::company": {
          url: urlBase + "/Queries/:id/company",
          method: "GET"
        },

        // INTERNAL. Use Channel.company() instead.
        "::get::Channel::company": {
          url: urlBase + "/Channels/:id/company",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Company#updateOrCreate
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Company#update
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Company#destroyById
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Company#removeById
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Company#modelName
    * @propertyOf lbServices.Company
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Company`.
    */
    R.modelName = "Company";

    /**
     * @ngdoc object
     * @name lbServices.Company.members
     * @header lbServices.Company.members
     * @object
     * @description
     *
     * The object `Company.members` groups methods
     * manipulating `Operator` instances related to `Company`.
     *
     * Call {@link lbServices.Company#members Company.members()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#members
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries members of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        R.members = function() {
          var TargetResource = $injector.get("Operator");
          var action = TargetResource["::get::Company::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.members#count
         * @methodOf lbServices.Company.members
         *
         * @description
         *
         * Counts members of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.members.count = function() {
          var TargetResource = $injector.get("Operator");
          var action = TargetResource["::count::Company::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.members#create
         * @methodOf lbServices.Company.members
         *
         * @description
         *
         * Creates a new instance in members of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        R.members.create = function() {
          var TargetResource = $injector.get("Operator");
          var action = TargetResource["::create::Company::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.members#createMany
         * @methodOf lbServices.Company.members
         *
         * @description
         *
         * Creates a new instance in members of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        R.members.createMany = function() {
          var TargetResource = $injector.get("Operator");
          var action = TargetResource["::createMany::Company::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.members#destroyAll
         * @methodOf lbServices.Company.members
         *
         * @description
         *
         * Deletes all members of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.members.destroyAll = function() {
          var TargetResource = $injector.get("Operator");
          var action = TargetResource["::delete::Company::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.members#destroyById
         * @methodOf lbServices.Company.members
         *
         * @description
         *
         * Delete a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.members.destroyById = function() {
          var TargetResource = $injector.get("Operator");
          var action = TargetResource["::destroyById::Company::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.members#findById
         * @methodOf lbServices.Company.members
         *
         * @description
         *
         * Find a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        R.members.findById = function() {
          var TargetResource = $injector.get("Operator");
          var action = TargetResource["::findById::Company::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.members#updateById
         * @methodOf lbServices.Company.members
         *
         * @description
         *
         * Update a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Operator` object.)
         * </em>
         */
        R.members.updateById = function() {
          var TargetResource = $injector.get("Operator");
          var action = TargetResource["::updateById::Company::members"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.metrics
     * @header lbServices.Company.metrics
     * @object
     * @description
     *
     * The object `Company.metrics` groups methods
     * manipulating `CompanyMetric` instances related to `Company`.
     *
     * Call {@link lbServices.Company#metrics Company.metrics()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#metrics
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries metrics of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        R.metrics = function() {
          var TargetResource = $injector.get("CompanyMetric");
          var action = TargetResource["::get::Company::metrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.metrics#count
         * @methodOf lbServices.Company.metrics
         *
         * @description
         *
         * Counts metrics of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.metrics.count = function() {
          var TargetResource = $injector.get("CompanyMetric");
          var action = TargetResource["::count::Company::metrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.metrics#create
         * @methodOf lbServices.Company.metrics
         *
         * @description
         *
         * Creates a new instance in metrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        R.metrics.create = function() {
          var TargetResource = $injector.get("CompanyMetric");
          var action = TargetResource["::create::Company::metrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.metrics#createMany
         * @methodOf lbServices.Company.metrics
         *
         * @description
         *
         * Creates a new instance in metrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        R.metrics.createMany = function() {
          var TargetResource = $injector.get("CompanyMetric");
          var action = TargetResource["::createMany::Company::metrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.metrics#destroyAll
         * @methodOf lbServices.Company.metrics
         *
         * @description
         *
         * Deletes all metrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.metrics.destroyAll = function() {
          var TargetResource = $injector.get("CompanyMetric");
          var action = TargetResource["::delete::Company::metrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.metrics#destroyById
         * @methodOf lbServices.Company.metrics
         *
         * @description
         *
         * Delete a related item by id for metrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for metrics
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.metrics.destroyById = function() {
          var TargetResource = $injector.get("CompanyMetric");
          var action = TargetResource["::destroyById::Company::metrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.metrics#findById
         * @methodOf lbServices.Company.metrics
         *
         * @description
         *
         * Find a related item by id for metrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for metrics
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        R.metrics.findById = function() {
          var TargetResource = $injector.get("CompanyMetric");
          var action = TargetResource["::findById::Company::metrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.metrics#updateById
         * @methodOf lbServices.Company.metrics
         *
         * @description
         *
         * Update a related item by id for metrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for metrics
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        R.metrics.updateById = function() {
          var TargetResource = $injector.get("CompanyMetric");
          var action = TargetResource["::updateById::Company::metrics"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.competitorMetrics
     * @header lbServices.Company.competitorMetrics
     * @object
     * @description
     *
     * The object `Company.competitorMetrics` groups methods
     * manipulating `CompetitorMetric` instances related to `Company`.
     *
     * Call {@link lbServices.Company#competitorMetrics Company.competitorMetrics()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#competitorMetrics
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries competitorMetrics of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R.competitorMetrics = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::get::Company::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitorMetrics#count
         * @methodOf lbServices.Company.competitorMetrics
         *
         * @description
         *
         * Counts competitorMetrics of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.competitorMetrics.count = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::count::Company::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitorMetrics#create
         * @methodOf lbServices.Company.competitorMetrics
         *
         * @description
         *
         * Creates a new instance in competitorMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R.competitorMetrics.create = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::create::Company::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitorMetrics#createMany
         * @methodOf lbServices.Company.competitorMetrics
         *
         * @description
         *
         * Creates a new instance in competitorMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R.competitorMetrics.createMany = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::createMany::Company::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitorMetrics#destroyAll
         * @methodOf lbServices.Company.competitorMetrics
         *
         * @description
         *
         * Deletes all competitorMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.competitorMetrics.destroyAll = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::delete::Company::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitorMetrics#destroyById
         * @methodOf lbServices.Company.competitorMetrics
         *
         * @description
         *
         * Delete a related item by id for competitorMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for competitorMetrics
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.competitorMetrics.destroyById = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::destroyById::Company::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitorMetrics#findById
         * @methodOf lbServices.Company.competitorMetrics
         *
         * @description
         *
         * Find a related item by id for competitorMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for competitorMetrics
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R.competitorMetrics.findById = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::findById::Company::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitorMetrics#updateById
         * @methodOf lbServices.Company.competitorMetrics
         *
         * @description
         *
         * Update a related item by id for competitorMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for competitorMetrics
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R.competitorMetrics.updateById = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::updateById::Company::competitorMetrics"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.competitors
     * @header lbServices.Company.competitors
     * @object
     * @description
     *
     * The object `Company.competitors` groups methods
     * manipulating `Competitor` instances related to `Company`.
     *
     * Call {@link lbServices.Company#competitors Company.competitors()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#competitors
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries competitors of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        R.competitors = function() {
          var TargetResource = $injector.get("Competitor");
          var action = TargetResource["::get::Company::competitors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitors#count
         * @methodOf lbServices.Company.competitors
         *
         * @description
         *
         * Counts competitors of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.competitors.count = function() {
          var TargetResource = $injector.get("Competitor");
          var action = TargetResource["::count::Company::competitors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitors#create
         * @methodOf lbServices.Company.competitors
         *
         * @description
         *
         * Creates a new instance in competitors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        R.competitors.create = function() {
          var TargetResource = $injector.get("Competitor");
          var action = TargetResource["::create::Company::competitors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitors#createMany
         * @methodOf lbServices.Company.competitors
         *
         * @description
         *
         * Creates a new instance in competitors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        R.competitors.createMany = function() {
          var TargetResource = $injector.get("Competitor");
          var action = TargetResource["::createMany::Company::competitors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitors#destroyAll
         * @methodOf lbServices.Company.competitors
         *
         * @description
         *
         * Deletes all competitors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.competitors.destroyAll = function() {
          var TargetResource = $injector.get("Competitor");
          var action = TargetResource["::delete::Company::competitors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitors#destroyById
         * @methodOf lbServices.Company.competitors
         *
         * @description
         *
         * Delete a related item by id for competitors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for competitors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.competitors.destroyById = function() {
          var TargetResource = $injector.get("Competitor");
          var action = TargetResource["::destroyById::Company::competitors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitors#findById
         * @methodOf lbServices.Company.competitors
         *
         * @description
         *
         * Find a related item by id for competitors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for competitors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        R.competitors.findById = function() {
          var TargetResource = $injector.get("Competitor");
          var action = TargetResource["::findById::Company::competitors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.competitors#updateById
         * @methodOf lbServices.Company.competitors
         *
         * @description
         *
         * Update a related item by id for competitors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for competitors
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        R.competitors.updateById = function() {
          var TargetResource = $injector.get("Competitor");
          var action = TargetResource["::updateById::Company::competitors"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.keywordMetrics
     * @header lbServices.Company.keywordMetrics
     * @object
     * @description
     *
     * The object `Company.keywordMetrics` groups methods
     * manipulating `KeywordMetric` instances related to `Company`.
     *
     * Call {@link lbServices.Company#keywordMetrics Company.keywordMetrics()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#keywordMetrics
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries keywordMetrics of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R.keywordMetrics = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::get::Company::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywordMetrics#count
         * @methodOf lbServices.Company.keywordMetrics
         *
         * @description
         *
         * Counts keywordMetrics of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.keywordMetrics.count = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::count::Company::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywordMetrics#create
         * @methodOf lbServices.Company.keywordMetrics
         *
         * @description
         *
         * Creates a new instance in keywordMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R.keywordMetrics.create = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::create::Company::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywordMetrics#createMany
         * @methodOf lbServices.Company.keywordMetrics
         *
         * @description
         *
         * Creates a new instance in keywordMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R.keywordMetrics.createMany = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::createMany::Company::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywordMetrics#destroyAll
         * @methodOf lbServices.Company.keywordMetrics
         *
         * @description
         *
         * Deletes all keywordMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.keywordMetrics.destroyAll = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::delete::Company::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywordMetrics#destroyById
         * @methodOf lbServices.Company.keywordMetrics
         *
         * @description
         *
         * Delete a related item by id for keywordMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywordMetrics
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.keywordMetrics.destroyById = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::destroyById::Company::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywordMetrics#findById
         * @methodOf lbServices.Company.keywordMetrics
         *
         * @description
         *
         * Find a related item by id for keywordMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywordMetrics
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R.keywordMetrics.findById = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::findById::Company::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywordMetrics#updateById
         * @methodOf lbServices.Company.keywordMetrics
         *
         * @description
         *
         * Update a related item by id for keywordMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywordMetrics
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R.keywordMetrics.updateById = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::updateById::Company::keywordMetrics"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.keywords
     * @header lbServices.Company.keywords
     * @object
     * @description
     *
     * The object `Company.keywords` groups methods
     * manipulating `Keyword` instances related to `Company`.
     *
     * Call {@link lbServices.Company#keywords Company.keywords()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#keywords
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries keywords of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::get::Company::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywords#count
         * @methodOf lbServices.Company.keywords
         *
         * @description
         *
         * Counts keywords of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.keywords.count = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::count::Company::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywords#create
         * @methodOf lbServices.Company.keywords
         *
         * @description
         *
         * Creates a new instance in keywords of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords.create = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::create::Company::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywords#createMany
         * @methodOf lbServices.Company.keywords
         *
         * @description
         *
         * Creates a new instance in keywords of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords.createMany = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::createMany::Company::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywords#destroyAll
         * @methodOf lbServices.Company.keywords
         *
         * @description
         *
         * Deletes all keywords of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.keywords.destroyAll = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::delete::Company::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywords#destroyById
         * @methodOf lbServices.Company.keywords
         *
         * @description
         *
         * Delete a related item by id for keywords.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywords
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.keywords.destroyById = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::destroyById::Company::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywords#findById
         * @methodOf lbServices.Company.keywords
         *
         * @description
         *
         * Find a related item by id for keywords.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywords
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords.findById = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::findById::Company::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.keywords#updateById
         * @methodOf lbServices.Company.keywords
         *
         * @description
         *
         * Update a related item by id for keywords.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywords
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords.updateById = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::updateById::Company::keywords"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.landingPages
     * @header lbServices.Company.landingPages
     * @object
     * @description
     *
     * The object `Company.landingPages` groups methods
     * manipulating `LandingPage` instances related to `Company`.
     *
     * Call {@link lbServices.Company#landingPages Company.landingPages()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#landingPages
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries landingPages of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        R.landingPages = function() {
          var TargetResource = $injector.get("LandingPage");
          var action = TargetResource["::get::Company::landingPages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.landingPages#count
         * @methodOf lbServices.Company.landingPages
         *
         * @description
         *
         * Counts landingPages of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.landingPages.count = function() {
          var TargetResource = $injector.get("LandingPage");
          var action = TargetResource["::count::Company::landingPages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.landingPages#create
         * @methodOf lbServices.Company.landingPages
         *
         * @description
         *
         * Creates a new instance in landingPages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        R.landingPages.create = function() {
          var TargetResource = $injector.get("LandingPage");
          var action = TargetResource["::create::Company::landingPages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.landingPages#createMany
         * @methodOf lbServices.Company.landingPages
         *
         * @description
         *
         * Creates a new instance in landingPages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        R.landingPages.createMany = function() {
          var TargetResource = $injector.get("LandingPage");
          var action = TargetResource["::createMany::Company::landingPages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.landingPages#destroyAll
         * @methodOf lbServices.Company.landingPages
         *
         * @description
         *
         * Deletes all landingPages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.landingPages.destroyAll = function() {
          var TargetResource = $injector.get("LandingPage");
          var action = TargetResource["::delete::Company::landingPages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.landingPages#destroyById
         * @methodOf lbServices.Company.landingPages
         *
         * @description
         *
         * Delete a related item by id for landingPages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for landingPages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.landingPages.destroyById = function() {
          var TargetResource = $injector.get("LandingPage");
          var action = TargetResource["::destroyById::Company::landingPages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.landingPages#findById
         * @methodOf lbServices.Company.landingPages
         *
         * @description
         *
         * Find a related item by id for landingPages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for landingPages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        R.landingPages.findById = function() {
          var TargetResource = $injector.get("LandingPage");
          var action = TargetResource["::findById::Company::landingPages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.landingPages#updateById
         * @methodOf lbServices.Company.landingPages
         *
         * @description
         *
         * Update a related item by id for landingPages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for landingPages
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        R.landingPages.updateById = function() {
          var TargetResource = $injector.get("LandingPage");
          var action = TargetResource["::updateById::Company::landingPages"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.referrers
     * @header lbServices.Company.referrers
     * @object
     * @description
     *
     * The object `Company.referrers` groups methods
     * manipulating `Referrer` instances related to `Company`.
     *
     * Call {@link lbServices.Company#referrers Company.referrers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#referrers
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries referrers of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        R.referrers = function() {
          var TargetResource = $injector.get("Referrer");
          var action = TargetResource["::get::Company::referrers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.referrers#count
         * @methodOf lbServices.Company.referrers
         *
         * @description
         *
         * Counts referrers of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.referrers.count = function() {
          var TargetResource = $injector.get("Referrer");
          var action = TargetResource["::count::Company::referrers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.referrers#create
         * @methodOf lbServices.Company.referrers
         *
         * @description
         *
         * Creates a new instance in referrers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        R.referrers.create = function() {
          var TargetResource = $injector.get("Referrer");
          var action = TargetResource["::create::Company::referrers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.referrers#createMany
         * @methodOf lbServices.Company.referrers
         *
         * @description
         *
         * Creates a new instance in referrers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        R.referrers.createMany = function() {
          var TargetResource = $injector.get("Referrer");
          var action = TargetResource["::createMany::Company::referrers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.referrers#destroyAll
         * @methodOf lbServices.Company.referrers
         *
         * @description
         *
         * Deletes all referrers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.referrers.destroyAll = function() {
          var TargetResource = $injector.get("Referrer");
          var action = TargetResource["::delete::Company::referrers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.referrers#destroyById
         * @methodOf lbServices.Company.referrers
         *
         * @description
         *
         * Delete a related item by id for referrers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for referrers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.referrers.destroyById = function() {
          var TargetResource = $injector.get("Referrer");
          var action = TargetResource["::destroyById::Company::referrers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.referrers#findById
         * @methodOf lbServices.Company.referrers
         *
         * @description
         *
         * Find a related item by id for referrers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for referrers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        R.referrers.findById = function() {
          var TargetResource = $injector.get("Referrer");
          var action = TargetResource["::findById::Company::referrers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.referrers#updateById
         * @methodOf lbServices.Company.referrers
         *
         * @description
         *
         * Update a related item by id for referrers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for referrers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        R.referrers.updateById = function() {
          var TargetResource = $injector.get("Referrer");
          var action = TargetResource["::updateById::Company::referrers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.queries
     * @header lbServices.Company.queries
     * @object
     * @description
     *
     * The object `Company.queries` groups methods
     * manipulating `Query` instances related to `Company`.
     *
     * Call {@link lbServices.Company#queries Company.queries()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#queries
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries queries of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        R.queries = function() {
          var TargetResource = $injector.get("Query");
          var action = TargetResource["::get::Company::queries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.queries#count
         * @methodOf lbServices.Company.queries
         *
         * @description
         *
         * Counts queries of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.queries.count = function() {
          var TargetResource = $injector.get("Query");
          var action = TargetResource["::count::Company::queries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.queries#create
         * @methodOf lbServices.Company.queries
         *
         * @description
         *
         * Creates a new instance in queries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        R.queries.create = function() {
          var TargetResource = $injector.get("Query");
          var action = TargetResource["::create::Company::queries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.queries#createMany
         * @methodOf lbServices.Company.queries
         *
         * @description
         *
         * Creates a new instance in queries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        R.queries.createMany = function() {
          var TargetResource = $injector.get("Query");
          var action = TargetResource["::createMany::Company::queries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.queries#destroyAll
         * @methodOf lbServices.Company.queries
         *
         * @description
         *
         * Deletes all queries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.queries.destroyAll = function() {
          var TargetResource = $injector.get("Query");
          var action = TargetResource["::delete::Company::queries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.queries#destroyById
         * @methodOf lbServices.Company.queries
         *
         * @description
         *
         * Delete a related item by id for queries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for queries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.queries.destroyById = function() {
          var TargetResource = $injector.get("Query");
          var action = TargetResource["::destroyById::Company::queries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.queries#findById
         * @methodOf lbServices.Company.queries
         *
         * @description
         *
         * Find a related item by id for queries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for queries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        R.queries.findById = function() {
          var TargetResource = $injector.get("Query");
          var action = TargetResource["::findById::Company::queries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.queries#updateById
         * @methodOf lbServices.Company.queries
         *
         * @description
         *
         * Update a related item by id for queries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for queries
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        R.queries.updateById = function() {
          var TargetResource = $injector.get("Query");
          var action = TargetResource["::updateById::Company::queries"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.channels
     * @header lbServices.Company.channels
     * @object
     * @description
     *
     * The object `Company.channels` groups methods
     * manipulating `Channel` instances related to `Company`.
     *
     * Call {@link lbServices.Company#channels Company.channels()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Company#channels
         * @methodOf lbServices.Company
         *
         * @description
         *
         * Queries channels of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        R.channels = function() {
          var TargetResource = $injector.get("Channel");
          var action = TargetResource["::get::Company::channels"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.channels#count
         * @methodOf lbServices.Company.channels
         *
         * @description
         *
         * Counts channels of Company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.channels.count = function() {
          var TargetResource = $injector.get("Channel");
          var action = TargetResource["::count::Company::channels"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.channels#create
         * @methodOf lbServices.Company.channels
         *
         * @description
         *
         * Creates a new instance in channels of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        R.channels.create = function() {
          var TargetResource = $injector.get("Channel");
          var action = TargetResource["::create::Company::channels"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.channels#createMany
         * @methodOf lbServices.Company.channels
         *
         * @description
         *
         * Creates a new instance in channels of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        R.channels.createMany = function() {
          var TargetResource = $injector.get("Channel");
          var action = TargetResource["::createMany::Company::channels"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.channels#destroyAll
         * @methodOf lbServices.Company.channels
         *
         * @description
         *
         * Deletes all channels of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.channels.destroyAll = function() {
          var TargetResource = $injector.get("Channel");
          var action = TargetResource["::delete::Company::channels"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.channels#destroyById
         * @methodOf lbServices.Company.channels
         *
         * @description
         *
         * Delete a related item by id for channels.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for channels
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.channels.destroyById = function() {
          var TargetResource = $injector.get("Channel");
          var action = TargetResource["::destroyById::Company::channels"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.channels#findById
         * @methodOf lbServices.Company.channels
         *
         * @description
         *
         * Find a related item by id for channels.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for channels
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        R.channels.findById = function() {
          var TargetResource = $injector.get("Channel");
          var action = TargetResource["::findById::Company::channels"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Company.channels#updateById
         * @methodOf lbServices.Company.channels
         *
         * @description
         *
         * Update a related item by id for channels.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for channels
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        R.channels.updateById = function() {
          var TargetResource = $injector.get("Channel");
          var action = TargetResource["::updateById::Company::channels"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CompanyMetric
 * @header lbServices.CompanyMetric
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CompanyMetric` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CompanyMetric",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CompanyMetrics/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CompanyMetric.company() instead.
        "prototype$__get__company": {
          url: urlBase + "/CompanyMetrics/:id/company",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#create
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CompanyMetrics",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#createMany
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CompanyMetrics",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#upsert
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CompanyMetrics",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#exists
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CompanyMetrics/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#findById
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CompanyMetrics/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#find
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CompanyMetrics",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#findOne
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CompanyMetrics/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#updateAll
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CompanyMetrics/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#deleteById
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CompanyMetrics/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#count
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CompanyMetrics/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#prototype$updateAttributes
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CompanyMetrics/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#createChangeStream
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CompanyMetrics/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Company.metrics.findById() instead.
        "::findById::Company::metrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/metrics/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.metrics.destroyById() instead.
        "::destroyById::Company::metrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/metrics/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.metrics.updateById() instead.
        "::updateById::Company::metrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/metrics/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.metrics() instead.
        "::get::Company::metrics": {
          isArray: true,
          url: urlBase + "/Companies/:id/metrics",
          method: "GET"
        },

        // INTERNAL. Use Company.metrics.create() instead.
        "::create::Company::metrics": {
          url: urlBase + "/Companies/:id/metrics",
          method: "POST"
        },

        // INTERNAL. Use Company.metrics.createMany() instead.
        "::createMany::Company::metrics": {
          isArray: true,
          url: urlBase + "/Companies/:id/metrics",
          method: "POST"
        },

        // INTERNAL. Use Company.metrics.destroyAll() instead.
        "::delete::Company::metrics": {
          url: urlBase + "/Companies/:id/metrics",
          method: "DELETE"
        },

        // INTERNAL. Use Company.metrics.count() instead.
        "::count::Company::metrics": {
          url: urlBase + "/Companies/:id/metrics/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#updateOrCreate
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#update
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#destroyById
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#removeById
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompanyMetric` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CompanyMetric#modelName
    * @propertyOf lbServices.CompanyMetric
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CompanyMetric`.
    */
    R.modelName = "CompanyMetric";


        /**
         * @ngdoc method
         * @name lbServices.CompanyMetric#company
         * @methodOf lbServices.CompanyMetric
         *
         * @description
         *
         * Fetches belongsTo relation company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::CompanyMetric::company"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CompetitorMetric
 * @header lbServices.CompetitorMetric
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CompetitorMetric` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CompetitorMetric",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CompetitorMetrics/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CompetitorMetric.company() instead.
        "prototype$__get__company": {
          url: urlBase + "/CompetitorMetrics/:id/company",
          method: "GET"
        },

        // INTERNAL. Use CompetitorMetric.competitor() instead.
        "prototype$__get__competitor": {
          url: urlBase + "/CompetitorMetrics/:id/competitor",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#create
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CompetitorMetrics",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#createMany
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/CompetitorMetrics",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#upsert
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CompetitorMetrics",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#exists
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CompetitorMetrics/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#findById
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CompetitorMetrics/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#find
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CompetitorMetrics",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#findOne
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CompetitorMetrics/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#updateAll
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/CompetitorMetrics/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#deleteById
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/CompetitorMetrics/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#count
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CompetitorMetrics/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#prototype$updateAttributes
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CompetitorMetrics/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#createChangeStream
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/CompetitorMetrics/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Company.competitorMetrics.findById() instead.
        "::findById::Company::competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitorMetrics/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.competitorMetrics.destroyById() instead.
        "::destroyById::Company::competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitorMetrics/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.competitorMetrics.updateById() instead.
        "::updateById::Company::competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitorMetrics/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.competitorMetrics() instead.
        "::get::Company::competitorMetrics": {
          isArray: true,
          url: urlBase + "/Companies/:id/competitorMetrics",
          method: "GET"
        },

        // INTERNAL. Use Company.competitorMetrics.create() instead.
        "::create::Company::competitorMetrics": {
          url: urlBase + "/Companies/:id/competitorMetrics",
          method: "POST"
        },

        // INTERNAL. Use Company.competitorMetrics.createMany() instead.
        "::createMany::Company::competitorMetrics": {
          isArray: true,
          url: urlBase + "/Companies/:id/competitorMetrics",
          method: "POST"
        },

        // INTERNAL. Use Company.competitorMetrics.destroyAll() instead.
        "::delete::Company::competitorMetrics": {
          url: urlBase + "/Companies/:id/competitorMetrics",
          method: "DELETE"
        },

        // INTERNAL. Use Company.competitorMetrics.count() instead.
        "::count::Company::competitorMetrics": {
          url: urlBase + "/Companies/:id/competitorMetrics/count",
          method: "GET"
        },

        // INTERNAL. Use Competitor.competitorMetrics.findById() instead.
        "::findById::Competitor::competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Competitors/:id/competitorMetrics/:fk",
          method: "GET"
        },

        // INTERNAL. Use Competitor.competitorMetrics.destroyById() instead.
        "::destroyById::Competitor::competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Competitors/:id/competitorMetrics/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Competitor.competitorMetrics.updateById() instead.
        "::updateById::Competitor::competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Competitors/:id/competitorMetrics/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Competitor.competitorMetrics() instead.
        "::get::Competitor::competitorMetrics": {
          isArray: true,
          url: urlBase + "/Competitors/:id/competitorMetrics",
          method: "GET"
        },

        // INTERNAL. Use Competitor.competitorMetrics.create() instead.
        "::create::Competitor::competitorMetrics": {
          url: urlBase + "/Competitors/:id/competitorMetrics",
          method: "POST"
        },

        // INTERNAL. Use Competitor.competitorMetrics.createMany() instead.
        "::createMany::Competitor::competitorMetrics": {
          isArray: true,
          url: urlBase + "/Competitors/:id/competitorMetrics",
          method: "POST"
        },

        // INTERNAL. Use Competitor.competitorMetrics.destroyAll() instead.
        "::delete::Competitor::competitorMetrics": {
          url: urlBase + "/Competitors/:id/competitorMetrics",
          method: "DELETE"
        },

        // INTERNAL. Use Competitor.competitorMetrics.count() instead.
        "::count::Competitor::competitorMetrics": {
          url: urlBase + "/Competitors/:id/competitorMetrics/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#updateOrCreate
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#update
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#destroyById
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#removeById
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CompetitorMetric#modelName
    * @propertyOf lbServices.CompetitorMetric
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CompetitorMetric`.
    */
    R.modelName = "CompetitorMetric";


        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#company
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Fetches belongsTo relation company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::CompetitorMetric::company"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CompetitorMetric#competitor
         * @methodOf lbServices.CompetitorMetric
         *
         * @description
         *
         * Fetches belongsTo relation competitor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        R.competitor = function() {
          var TargetResource = $injector.get("Competitor");
          var action = TargetResource["::get::CompetitorMetric::competitor"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Competitor
 * @header lbServices.Competitor
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Competitor` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Competitor",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Competitors/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Competitor.company() instead.
        "prototype$__get__company": {
          url: urlBase + "/Competitors/:id/company",
          method: "GET"
        },

        // INTERNAL. Use Competitor.competitorMetrics.findById() instead.
        "prototype$__findById__competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Competitors/:id/competitorMetrics/:fk",
          method: "GET"
        },

        // INTERNAL. Use Competitor.competitorMetrics.destroyById() instead.
        "prototype$__destroyById__competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Competitors/:id/competitorMetrics/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Competitor.competitorMetrics.updateById() instead.
        "prototype$__updateById__competitorMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Competitors/:id/competitorMetrics/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Competitor.competitorMetrics() instead.
        "prototype$__get__competitorMetrics": {
          isArray: true,
          url: urlBase + "/Competitors/:id/competitorMetrics",
          method: "GET"
        },

        // INTERNAL. Use Competitor.competitorMetrics.create() instead.
        "prototype$__create__competitorMetrics": {
          url: urlBase + "/Competitors/:id/competitorMetrics",
          method: "POST"
        },

        // INTERNAL. Use Competitor.competitorMetrics.destroyAll() instead.
        "prototype$__delete__competitorMetrics": {
          url: urlBase + "/Competitors/:id/competitorMetrics",
          method: "DELETE"
        },

        // INTERNAL. Use Competitor.competitorMetrics.count() instead.
        "prototype$__count__competitorMetrics": {
          url: urlBase + "/Competitors/:id/competitorMetrics/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#create
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Competitors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#createMany
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Competitors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#upsert
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Competitors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#exists
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Competitors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#findById
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Competitors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#find
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Competitors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#findOne
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Competitors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#updateAll
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Competitors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#deleteById
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Competitors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#count
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Competitors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#prototype$updateAttributes
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Competitors/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Competitor#createChangeStream
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Competitors/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Company.competitors.findById() instead.
        "::findById::Company::competitors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.competitors.destroyById() instead.
        "::destroyById::Company::competitors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.competitors.updateById() instead.
        "::updateById::Company::competitors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/competitors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.competitors() instead.
        "::get::Company::competitors": {
          isArray: true,
          url: urlBase + "/Companies/:id/competitors",
          method: "GET"
        },

        // INTERNAL. Use Company.competitors.create() instead.
        "::create::Company::competitors": {
          url: urlBase + "/Companies/:id/competitors",
          method: "POST"
        },

        // INTERNAL. Use Company.competitors.createMany() instead.
        "::createMany::Company::competitors": {
          isArray: true,
          url: urlBase + "/Companies/:id/competitors",
          method: "POST"
        },

        // INTERNAL. Use Company.competitors.destroyAll() instead.
        "::delete::Company::competitors": {
          url: urlBase + "/Companies/:id/competitors",
          method: "DELETE"
        },

        // INTERNAL. Use Company.competitors.count() instead.
        "::count::Company::competitors": {
          url: urlBase + "/Companies/:id/competitors/count",
          method: "GET"
        },

        // INTERNAL. Use CompetitorMetric.competitor() instead.
        "::get::CompetitorMetric::competitor": {
          url: urlBase + "/CompetitorMetrics/:id/competitor",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Competitor#updateOrCreate
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Competitor#update
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Competitor#destroyById
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Competitor#removeById
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Competitor` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Competitor#modelName
    * @propertyOf lbServices.Competitor
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Competitor`.
    */
    R.modelName = "Competitor";


        /**
         * @ngdoc method
         * @name lbServices.Competitor#company
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Fetches belongsTo relation company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Competitor::company"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Competitor.competitorMetrics
     * @header lbServices.Competitor.competitorMetrics
     * @object
     * @description
     *
     * The object `Competitor.competitorMetrics` groups methods
     * manipulating `CompetitorMetric` instances related to `Competitor`.
     *
     * Call {@link lbServices.Competitor#competitorMetrics Competitor.competitorMetrics()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Competitor#competitorMetrics
         * @methodOf lbServices.Competitor
         *
         * @description
         *
         * Queries competitorMetrics of Competitor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R.competitorMetrics = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::get::Competitor::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Competitor.competitorMetrics#count
         * @methodOf lbServices.Competitor.competitorMetrics
         *
         * @description
         *
         * Counts competitorMetrics of Competitor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.competitorMetrics.count = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::count::Competitor::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Competitor.competitorMetrics#create
         * @methodOf lbServices.Competitor.competitorMetrics
         *
         * @description
         *
         * Creates a new instance in competitorMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R.competitorMetrics.create = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::create::Competitor::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Competitor.competitorMetrics#createMany
         * @methodOf lbServices.Competitor.competitorMetrics
         *
         * @description
         *
         * Creates a new instance in competitorMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R.competitorMetrics.createMany = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::createMany::Competitor::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Competitor.competitorMetrics#destroyAll
         * @methodOf lbServices.Competitor.competitorMetrics
         *
         * @description
         *
         * Deletes all competitorMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.competitorMetrics.destroyAll = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::delete::Competitor::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Competitor.competitorMetrics#destroyById
         * @methodOf lbServices.Competitor.competitorMetrics
         *
         * @description
         *
         * Delete a related item by id for competitorMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for competitorMetrics
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.competitorMetrics.destroyById = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::destroyById::Competitor::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Competitor.competitorMetrics#findById
         * @methodOf lbServices.Competitor.competitorMetrics
         *
         * @description
         *
         * Find a related item by id for competitorMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for competitorMetrics
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R.competitorMetrics.findById = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::findById::Competitor::competitorMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Competitor.competitorMetrics#updateById
         * @methodOf lbServices.Competitor.competitorMetrics
         *
         * @description
         *
         * Update a related item by id for competitorMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for competitorMetrics
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CompetitorMetric` object.)
         * </em>
         */
        R.competitorMetrics.updateById = function() {
          var TargetResource = $injector.get("CompetitorMetric");
          var action = TargetResource["::updateById::Competitor::competitorMetrics"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.KeywordMetric
 * @header lbServices.KeywordMetric
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `KeywordMetric` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "KeywordMetric",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/KeywordMetrics/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use KeywordMetric.company() instead.
        "prototype$__get__company": {
          url: urlBase + "/KeywordMetrics/:id/company",
          method: "GET"
        },

        // INTERNAL. Use KeywordMetric.keyword() instead.
        "prototype$__get__keyword": {
          url: urlBase + "/KeywordMetrics/:id/keyword",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#create
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/KeywordMetrics",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#createMany
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/KeywordMetrics",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#upsert
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/KeywordMetrics",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#exists
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/KeywordMetrics/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#findById
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/KeywordMetrics/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#find
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/KeywordMetrics",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#findOne
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/KeywordMetrics/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#updateAll
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/KeywordMetrics/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#deleteById
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/KeywordMetrics/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#count
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/KeywordMetrics/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#prototype$updateAttributes
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/KeywordMetrics/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#createChangeStream
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/KeywordMetrics/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Company.keywordMetrics.findById() instead.
        "::findById::Company::keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywordMetrics/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.keywordMetrics.destroyById() instead.
        "::destroyById::Company::keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywordMetrics/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.keywordMetrics.updateById() instead.
        "::updateById::Company::keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywordMetrics/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.keywordMetrics() instead.
        "::get::Company::keywordMetrics": {
          isArray: true,
          url: urlBase + "/Companies/:id/keywordMetrics",
          method: "GET"
        },

        // INTERNAL. Use Company.keywordMetrics.create() instead.
        "::create::Company::keywordMetrics": {
          url: urlBase + "/Companies/:id/keywordMetrics",
          method: "POST"
        },

        // INTERNAL. Use Company.keywordMetrics.createMany() instead.
        "::createMany::Company::keywordMetrics": {
          isArray: true,
          url: urlBase + "/Companies/:id/keywordMetrics",
          method: "POST"
        },

        // INTERNAL. Use Company.keywordMetrics.destroyAll() instead.
        "::delete::Company::keywordMetrics": {
          url: urlBase + "/Companies/:id/keywordMetrics",
          method: "DELETE"
        },

        // INTERNAL. Use Company.keywordMetrics.count() instead.
        "::count::Company::keywordMetrics": {
          url: urlBase + "/Companies/:id/keywordMetrics/count",
          method: "GET"
        },

        // INTERNAL. Use Keyword.keywordMetrics.findById() instead.
        "::findById::Keyword::keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/keywordMetrics/:fk",
          method: "GET"
        },

        // INTERNAL. Use Keyword.keywordMetrics.destroyById() instead.
        "::destroyById::Keyword::keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/keywordMetrics/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Keyword.keywordMetrics.updateById() instead.
        "::updateById::Keyword::keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/keywordMetrics/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Keyword.keywordMetrics() instead.
        "::get::Keyword::keywordMetrics": {
          isArray: true,
          url: urlBase + "/Keywords/:id/keywordMetrics",
          method: "GET"
        },

        // INTERNAL. Use Keyword.keywordMetrics.create() instead.
        "::create::Keyword::keywordMetrics": {
          url: urlBase + "/Keywords/:id/keywordMetrics",
          method: "POST"
        },

        // INTERNAL. Use Keyword.keywordMetrics.createMany() instead.
        "::createMany::Keyword::keywordMetrics": {
          isArray: true,
          url: urlBase + "/Keywords/:id/keywordMetrics",
          method: "POST"
        },

        // INTERNAL. Use Keyword.keywordMetrics.destroyAll() instead.
        "::delete::Keyword::keywordMetrics": {
          url: urlBase + "/Keywords/:id/keywordMetrics",
          method: "DELETE"
        },

        // INTERNAL. Use Keyword.keywordMetrics.count() instead.
        "::count::Keyword::keywordMetrics": {
          url: urlBase + "/Keywords/:id/keywordMetrics/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#updateOrCreate
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#update
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#destroyById
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#removeById
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.KeywordMetric#modelName
    * @propertyOf lbServices.KeywordMetric
    * @description
    * The name of the model represented by this $resource,
    * i.e. `KeywordMetric`.
    */
    R.modelName = "KeywordMetric";


        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#company
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Fetches belongsTo relation company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::KeywordMetric::company"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KeywordMetric#keyword
         * @methodOf lbServices.KeywordMetric
         *
         * @description
         *
         * Fetches belongsTo relation keyword.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keyword = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::get::KeywordMetric::keyword"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Keyword
 * @header lbServices.Keyword
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Keyword` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Keyword",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Keywords/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Keyword.company() instead.
        "prototype$__get__company": {
          url: urlBase + "/Keywords/:id/company",
          method: "GET"
        },

        // INTERNAL. Use Keyword.keywordMetrics.findById() instead.
        "prototype$__findById__keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/keywordMetrics/:fk",
          method: "GET"
        },

        // INTERNAL. Use Keyword.keywordMetrics.destroyById() instead.
        "prototype$__destroyById__keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/keywordMetrics/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Keyword.keywordMetrics.updateById() instead.
        "prototype$__updateById__keywordMetrics": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/keywordMetrics/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Keyword.keywordMetrics() instead.
        "prototype$__get__keywordMetrics": {
          isArray: true,
          url: urlBase + "/Keywords/:id/keywordMetrics",
          method: "GET"
        },

        // INTERNAL. Use Keyword.keywordMetrics.create() instead.
        "prototype$__create__keywordMetrics": {
          url: urlBase + "/Keywords/:id/keywordMetrics",
          method: "POST"
        },

        // INTERNAL. Use Keyword.keywordMetrics.destroyAll() instead.
        "prototype$__delete__keywordMetrics": {
          url: urlBase + "/Keywords/:id/keywordMetrics",
          method: "DELETE"
        },

        // INTERNAL. Use Keyword.keywordMetrics.count() instead.
        "prototype$__count__keywordMetrics": {
          url: urlBase + "/Keywords/:id/keywordMetrics/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#create
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Keywords",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#createMany
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Keywords",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#upsert
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Keywords",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#exists
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Keywords/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#findById
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Keywords/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#find
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Keywords",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#findOne
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Keywords/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#updateAll
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Keywords/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#deleteById
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Keywords/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#count
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Keywords/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#prototype$updateAttributes
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Keywords/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#createChangeStream
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Keywords/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Company.keywords.findById() instead.
        "::findById::Company::keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywords/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.keywords.destroyById() instead.
        "::destroyById::Company::keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywords/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.keywords.updateById() instead.
        "::updateById::Company::keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/keywords/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.keywords() instead.
        "::get::Company::keywords": {
          isArray: true,
          url: urlBase + "/Companies/:id/keywords",
          method: "GET"
        },

        // INTERNAL. Use Company.keywords.create() instead.
        "::create::Company::keywords": {
          url: urlBase + "/Companies/:id/keywords",
          method: "POST"
        },

        // INTERNAL. Use Company.keywords.createMany() instead.
        "::createMany::Company::keywords": {
          isArray: true,
          url: urlBase + "/Companies/:id/keywords",
          method: "POST"
        },

        // INTERNAL. Use Company.keywords.destroyAll() instead.
        "::delete::Company::keywords": {
          url: urlBase + "/Companies/:id/keywords",
          method: "DELETE"
        },

        // INTERNAL. Use Company.keywords.count() instead.
        "::count::Company::keywords": {
          url: urlBase + "/Companies/:id/keywords/count",
          method: "GET"
        },

        // INTERNAL. Use KeywordMetric.keyword() instead.
        "::get::KeywordMetric::keyword": {
          url: urlBase + "/KeywordMetrics/:id/keyword",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Keyword#updateOrCreate
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Keyword#update
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Keyword#destroyById
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Keyword#removeById
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Keyword#modelName
    * @propertyOf lbServices.Keyword
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Keyword`.
    */
    R.modelName = "Keyword";


        /**
         * @ngdoc method
         * @name lbServices.Keyword#company
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Fetches belongsTo relation company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Keyword::company"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Keyword.keywordMetrics
     * @header lbServices.Keyword.keywordMetrics
     * @object
     * @description
     *
     * The object `Keyword.keywordMetrics` groups methods
     * manipulating `KeywordMetric` instances related to `Keyword`.
     *
     * Call {@link lbServices.Keyword#keywordMetrics Keyword.keywordMetrics()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Keyword#keywordMetrics
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Queries keywordMetrics of Keyword.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R.keywordMetrics = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::get::Keyword::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.keywordMetrics#count
         * @methodOf lbServices.Keyword.keywordMetrics
         *
         * @description
         *
         * Counts keywordMetrics of Keyword.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.keywordMetrics.count = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::count::Keyword::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.keywordMetrics#create
         * @methodOf lbServices.Keyword.keywordMetrics
         *
         * @description
         *
         * Creates a new instance in keywordMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R.keywordMetrics.create = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::create::Keyword::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.keywordMetrics#createMany
         * @methodOf lbServices.Keyword.keywordMetrics
         *
         * @description
         *
         * Creates a new instance in keywordMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R.keywordMetrics.createMany = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::createMany::Keyword::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.keywordMetrics#destroyAll
         * @methodOf lbServices.Keyword.keywordMetrics
         *
         * @description
         *
         * Deletes all keywordMetrics of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.keywordMetrics.destroyAll = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::delete::Keyword::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.keywordMetrics#destroyById
         * @methodOf lbServices.Keyword.keywordMetrics
         *
         * @description
         *
         * Delete a related item by id for keywordMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywordMetrics
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.keywordMetrics.destroyById = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::destroyById::Keyword::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.keywordMetrics#findById
         * @methodOf lbServices.Keyword.keywordMetrics
         *
         * @description
         *
         * Find a related item by id for keywordMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywordMetrics
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R.keywordMetrics.findById = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::findById::Keyword::keywordMetrics"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.keywordMetrics#updateById
         * @methodOf lbServices.Keyword.keywordMetrics
         *
         * @description
         *
         * Update a related item by id for keywordMetrics.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywordMetrics
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KeywordMetric` object.)
         * </em>
         */
        R.keywordMetrics.updateById = function() {
          var TargetResource = $injector.get("KeywordMetric");
          var action = TargetResource["::updateById::Keyword::keywordMetrics"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.LandingPage
 * @header lbServices.LandingPage
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `LandingPage` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "LandingPage",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/LandingPages/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use LandingPage.company() instead.
        "prototype$__get__company": {
          url: urlBase + "/LandingPages/:id/company",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#create
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/LandingPages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#createMany
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/LandingPages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#upsert
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/LandingPages",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#exists
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/LandingPages/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#findById
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/LandingPages/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#find
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/LandingPages",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#findOne
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/LandingPages/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#updateAll
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/LandingPages/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#deleteById
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/LandingPages/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#count
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/LandingPages/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#prototype$updateAttributes
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/LandingPages/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#createChangeStream
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/LandingPages/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Company.landingPages.findById() instead.
        "::findById::Company::landingPages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/landingPages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.landingPages.destroyById() instead.
        "::destroyById::Company::landingPages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/landingPages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.landingPages.updateById() instead.
        "::updateById::Company::landingPages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/landingPages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.landingPages() instead.
        "::get::Company::landingPages": {
          isArray: true,
          url: urlBase + "/Companies/:id/landingPages",
          method: "GET"
        },

        // INTERNAL. Use Company.landingPages.create() instead.
        "::create::Company::landingPages": {
          url: urlBase + "/Companies/:id/landingPages",
          method: "POST"
        },

        // INTERNAL. Use Company.landingPages.createMany() instead.
        "::createMany::Company::landingPages": {
          isArray: true,
          url: urlBase + "/Companies/:id/landingPages",
          method: "POST"
        },

        // INTERNAL. Use Company.landingPages.destroyAll() instead.
        "::delete::Company::landingPages": {
          url: urlBase + "/Companies/:id/landingPages",
          method: "DELETE"
        },

        // INTERNAL. Use Company.landingPages.count() instead.
        "::count::Company::landingPages": {
          url: urlBase + "/Companies/:id/landingPages/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.LandingPage#updateOrCreate
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#update
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#destroyById
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.LandingPage#removeById
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `LandingPage` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.LandingPage#modelName
    * @propertyOf lbServices.LandingPage
    * @description
    * The name of the model represented by this $resource,
    * i.e. `LandingPage`.
    */
    R.modelName = "LandingPage";


        /**
         * @ngdoc method
         * @name lbServices.LandingPage#company
         * @methodOf lbServices.LandingPage
         *
         * @description
         *
         * Fetches belongsTo relation company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::LandingPage::company"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Referrer
 * @header lbServices.Referrer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Referrer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Referrer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Referrers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Referrer.company() instead.
        "prototype$__get__company": {
          url: urlBase + "/Referrers/:id/company",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#create
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Referrers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#createMany
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Referrers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#upsert
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Referrers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#exists
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Referrers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#findById
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Referrers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#find
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Referrers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#findOne
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Referrers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#updateAll
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Referrers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#deleteById
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Referrers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#count
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Referrers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#prototype$updateAttributes
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Referrers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Referrer#createChangeStream
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Referrers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Company.referrers.findById() instead.
        "::findById::Company::referrers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/referrers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.referrers.destroyById() instead.
        "::destroyById::Company::referrers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/referrers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.referrers.updateById() instead.
        "::updateById::Company::referrers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/referrers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.referrers() instead.
        "::get::Company::referrers": {
          isArray: true,
          url: urlBase + "/Companies/:id/referrers",
          method: "GET"
        },

        // INTERNAL. Use Company.referrers.create() instead.
        "::create::Company::referrers": {
          url: urlBase + "/Companies/:id/referrers",
          method: "POST"
        },

        // INTERNAL. Use Company.referrers.createMany() instead.
        "::createMany::Company::referrers": {
          isArray: true,
          url: urlBase + "/Companies/:id/referrers",
          method: "POST"
        },

        // INTERNAL. Use Company.referrers.destroyAll() instead.
        "::delete::Company::referrers": {
          url: urlBase + "/Companies/:id/referrers",
          method: "DELETE"
        },

        // INTERNAL. Use Company.referrers.count() instead.
        "::count::Company::referrers": {
          url: urlBase + "/Companies/:id/referrers/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Referrer#updateOrCreate
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Referrer#update
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Referrer#destroyById
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Referrer#removeById
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Referrer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Referrer#modelName
    * @propertyOf lbServices.Referrer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Referrer`.
    */
    R.modelName = "Referrer";


        /**
         * @ngdoc method
         * @name lbServices.Referrer#company
         * @methodOf lbServices.Referrer
         *
         * @description
         *
         * Fetches belongsTo relation company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Referrer::company"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Query
 * @header lbServices.Query
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Query` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Query",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Queries/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Query.company() instead.
        "prototype$__get__company": {
          url: urlBase + "/Queries/:id/company",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#create
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Queries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#createMany
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Queries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#upsert
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Queries",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#exists
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Queries/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#findById
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Queries/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#find
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Queries",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#findOne
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Queries/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#updateAll
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Queries/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#deleteById
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Queries/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#count
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Queries/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#prototype$updateAttributes
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Queries/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Query#createChangeStream
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Queries/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Company.queries.findById() instead.
        "::findById::Company::queries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/queries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.queries.destroyById() instead.
        "::destroyById::Company::queries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/queries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.queries.updateById() instead.
        "::updateById::Company::queries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/queries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.queries() instead.
        "::get::Company::queries": {
          isArray: true,
          url: urlBase + "/Companies/:id/queries",
          method: "GET"
        },

        // INTERNAL. Use Company.queries.create() instead.
        "::create::Company::queries": {
          url: urlBase + "/Companies/:id/queries",
          method: "POST"
        },

        // INTERNAL. Use Company.queries.createMany() instead.
        "::createMany::Company::queries": {
          isArray: true,
          url: urlBase + "/Companies/:id/queries",
          method: "POST"
        },

        // INTERNAL. Use Company.queries.destroyAll() instead.
        "::delete::Company::queries": {
          url: urlBase + "/Companies/:id/queries",
          method: "DELETE"
        },

        // INTERNAL. Use Company.queries.count() instead.
        "::count::Company::queries": {
          url: urlBase + "/Companies/:id/queries/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Query#updateOrCreate
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Query#update
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Query#destroyById
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Query#removeById
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Query` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Query#modelName
    * @propertyOf lbServices.Query
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Query`.
    */
    R.modelName = "Query";


        /**
         * @ngdoc method
         * @name lbServices.Query#company
         * @methodOf lbServices.Query
         *
         * @description
         *
         * Fetches belongsTo relation company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Query::company"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Channel
 * @header lbServices.Channel
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Channel` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Channel",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Channels/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Channel.company() instead.
        "prototype$__get__company": {
          url: urlBase + "/Channels/:id/company",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#create
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Channels",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#createMany
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Channels",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#upsert
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Channels",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#exists
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Channels/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#findById
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Channels/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#find
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Channels",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#findOne
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Channels/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#updateAll
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Channels/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#deleteById
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Channels/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#count
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Channels/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#prototype$updateAttributes
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Channels/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Channel#createChangeStream
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Channels/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Company.channels.findById() instead.
        "::findById::Company::channels": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/channels/:fk",
          method: "GET"
        },

        // INTERNAL. Use Company.channels.destroyById() instead.
        "::destroyById::Company::channels": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/channels/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Company.channels.updateById() instead.
        "::updateById::Company::channels": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Companies/:id/channels/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Company.channels() instead.
        "::get::Company::channels": {
          isArray: true,
          url: urlBase + "/Companies/:id/channels",
          method: "GET"
        },

        // INTERNAL. Use Company.channels.create() instead.
        "::create::Company::channels": {
          url: urlBase + "/Companies/:id/channels",
          method: "POST"
        },

        // INTERNAL. Use Company.channels.createMany() instead.
        "::createMany::Company::channels": {
          isArray: true,
          url: urlBase + "/Companies/:id/channels",
          method: "POST"
        },

        // INTERNAL. Use Company.channels.destroyAll() instead.
        "::delete::Company::channels": {
          url: urlBase + "/Companies/:id/channels",
          method: "DELETE"
        },

        // INTERNAL. Use Company.channels.count() instead.
        "::count::Company::channels": {
          url: urlBase + "/Companies/:id/channels/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Channel#updateOrCreate
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Channel#update
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Channel#destroyById
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Channel#removeById
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Channel` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Channel#modelName
    * @propertyOf lbServices.Channel
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Channel`.
    */
    R.modelName = "Channel";


        /**
         * @ngdoc method
         * @name lbServices.Channel#company
         * @methodOf lbServices.Channel
         *
         * @description
         *
         * Fetches belongsTo relation company.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Company` object.)
         * </em>
         */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Channel::company"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
