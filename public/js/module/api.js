var angular = require('angular');

var module = angular.module('apiModule', []);

module.factory('User', ['$http', function($http) {
  return {
    fetch: function(id) {
      return $http.get('/user/'+id).then(function(res) {
        return res;
      });
    },
    save: function(data, cb) {
      $http.post('/user/save', data).success(cb);
    }
  };
}]);

//http拦截器
module.factory('httpInterceptor', ['$q', '$injector', function($q, $injector) {

  return {
    'responseError': function(response) {
      if (response.status === 401) {
        window.location.href = 'http://' + window.location.host + '/server/passport/login?url=' + window.location.href;
      } else if (response.status === 500) {
        alert(response.statusText);
      }

      return $q.reject(response);
    },
    'response': function(response) {
      if (response.config.url.match(/\.html$/) != null) {
        //模板数据
        return response;
      } else if (response.config.url.match(/\.json$/) != null) {
        //json数据
        return response.data;
      } else {
        //内容数据
        return response.data;
      }
    },
    'request': function(config) {
      if (config.url.match(/\.html$/) != null) {
        return config;
      } else if (config.url.match(/\.json$/) != null) {
        //json数据
        return config;
      } else {
        config.url = '/server' + config.url;
      }
      return config;
    },
    'requestError': function(config) {
      return $q.reject(config);
    }
  };
}]);