var nickname = function ($scope, $state, User) {
    console.log('from nickname module');
    //User.fetch().then(function(res){
    //    console.log(res);
    //});
};

nickname.$inject = ['$scope', '$state', 'User'];

module.exports = nickname;