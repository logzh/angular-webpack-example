var angular = require('angular');

var service = angular.module('service', []);

service.factory('User', ['$http', function($http) {
  return {
    fetch: function() {
      return $http.get('/static/mock/user.json').then(function(res) {
        return res.data;
      });
    },
    save: function(data, cb) {
      $http.post('/user/save', data).success(cb);
    }
  };
}]);