var angular = require('angular');
var module = angular.module('sexModule', []);
module.controller('sexCtrl', ['$scope', '$state', 'User', function($scope, $state, User) {
  console.log('from sex module');
}]);

