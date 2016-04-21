var ctrl = function($scope, $state, User) {
  console.log('is a dialog');
  $scope.data = {
    msg: ''
  };

  $scope.save = function(data) {
    alert(data.msg);
    $state.go('center.nickname');
  }
};

ctrl.$inject = ['$scope', '$state', 'User'];

module.exports = ctrl;
