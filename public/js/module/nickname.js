var angular = require('angular');
var module = angular.module('nicknameModule', []);
module.controller('nicknameCtrl', ['$scope', '$state', 'User', function($scope, $state, User) {
  console.log('from nickname module');
}]);

