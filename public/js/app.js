var angular = require('angular');
require('angular-ui-router');
require('./serviceModule');

var nicknameCtrl = require('./nicknameCtrl');
var sexCtrl = require('./sexCtrl');

var appModule = angular.module('appModule', [
    'ui.router', 'serviceModule'
]);

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
                templateUrl: '/views/center/user.html',
                controller: ['$scope', '$state', 'User', function ($scope, $state, User) {

                }]
            });

            $stateProvider.state('center.nickname', {
                url: 'nick',
                templateUrl: '/views/center/nickname.html',
                controller: ['$scope', '$state', 'User', nicknameCtrl]
            });

            $stateProvider.state('center.sex', {
                url: 'sex',
                templateUrl: '/views/center/sex.html',
                controller: ['$scope', '$state', 'User', sexCtrl]
            });
        }]
);

angular.bootstrap(document, ['appModule']);

