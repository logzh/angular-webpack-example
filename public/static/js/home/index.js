var angular = require('angular');
require('angular-ui-router');
require('../apiModule');
var $ = require('jquery');

var nicknameCtrl = require('./nicknameCtrl');
var nickDialogCtrl = require('./dialogCtrl');
var sexCtrl = require('./sexCtrl');

var appModule = angular.module('appModule', [
  'ui.router', 'apiModule'
]);

appModule.config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
  function($httpProvider, $stateProvider, $urlRouterProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.transformRequest = function(data) {
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
        res: ['User', function(User) {
          return User.fetch();
        }]
      },
      controller: ['$scope', 'res', function($scope, res) {
        $scope.user = res.user;
      }]
    });

    $stateProvider.state('center.nav', {
      url: '',
      template: require('../../views/home/index.html'),
      controller: ['$scope', '$state', 'User', function($scope, $state, User) {

      }]
    });

    $stateProvider.state('center.nickname', {
      url: 'nick',
      template: require('../../views/home/nickname.html'),
      controller: nicknameCtrl
    });
    
    $stateProvider.state('center.nickname.dialog', {
      url: '/dialog',
      template: require('../../views/home/dialog.html'),
      controller: nickDialogCtrl
    });

    $stateProvider.state('center.sex', {
      url: 'sex',
      template: require('../../views/home/sex.html'),
      controller: sexCtrl
    });
  }]
);

angular.bootstrap(document, ['appModule']);
