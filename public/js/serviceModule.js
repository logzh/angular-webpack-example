var angular = require('angular');

var serviceModule = angular.module('serviceModule', []);

serviceModule.factory('User', ['$http', function ($http) {
    return {
        fetch: function () {
          return $http.get('/user').then(function(res){
              return res.data;
          });
        },
        save: function (data, cb) {
            $http.post('/user/save', data).success(cb);
        }
    };
}]);

