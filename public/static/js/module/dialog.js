var angular = require('angular');

var module = angular.module('dialogModule', []);

module.controller('dialogCtrl', ['$scope', '$state', 'User', function($scope, $state, User) {
  console.log('this is a dialog');
  $scope.data = {
    msg: ''
  };

  $scope.save = function(data) {
    alert(data.msg);
    $state.go('center.nickname');
  }
}]);

// ctrl.$inject = ['$scope', '$state', 'User'];
