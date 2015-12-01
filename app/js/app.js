var angular = require('angular');
require('angular-ui-router');
require('./serviceModule');

var Mock = require('./mock.angular');

var nicknameCtrl = require('./nicknameCtrl');
var sexCtrl = require('./sexCtrl');

var appModule = angular.module('appModule', [
    'ui.router', 'serviceModule'
]);
Mock.mock('./user', {
    'name'	   : '[@name](/user/name)()',
    'age|1-100': 100,
    'sex'	   : '[@color](/user/color)'
});
Mock.mockjax(appModule);



//Mock.mock('./user', {
//    'list|1-10': [{
//        'id|+1': 1
//    }]
//});

appModule.config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
        function ($httpProvider, $stateProvider, $urlRouterProvider) {

            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
            $httpProvider.defaults.transformRequest = function (data) {
                if (data === undefined) {
                    return data;
                }
                return $.param(data);
            };

            $urlRouterProvider.otherwise('/');

            $stateProvider.state('center', {
                abstract: true,
                url: '/',
                template: '<div ui-view></div>',
                resolve: {
                    res: ['User', function (User) {
                        return User.fetch();
                    }]
                },
                controller: ['$scope', 'res', function ($scope, res) {
                    $scope.user = res.user;
                }]
            });

            $stateProvider.state('center.nav', {
                url: '',
                template: require('../views/center/user.html'),
                controller: ['$scope', '$state', 'User', function ($scope, $state, User) {

                }]
            });

            $stateProvider.state('center.nickname', {
                url: 'nick',
                template: require('../views/center/nickname.html'),
                controller: nicknameCtrl
            });

            $stateProvider.state('center.sex', {
                url: 'sex',
                template: require('../views/center/sex.html'),
                controller: sexCtrl
            });
        }]
);

angular.bootstrap(document, ['appModule']);

