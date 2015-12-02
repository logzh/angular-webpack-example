var nickname = function ($scope, $state, User) {
    console.log('from nickname module');
};

nickname.$inject = ['$scope', '$state', 'User'];

module.exports = nickname;