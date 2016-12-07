var angular = require('angular');
require('angular-ui-router');

var $ = require('jquery');

require('../module/api');
require('../module/dialog');
require('../module/nickname');
require('../module/sex');

var appModule = angular.module('appModule', [
  'ui.router', 'apiModule', 'dialogModule', 'sexModule', 'nicknameModule'
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
    $httpProvider.interceptors.push('httpInterceptor');

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('center', {
      abstract: true,
      url: '/',
      template: require('../../views/home/base.html'),
      resolve: {
        user: ['User', function(User) {
          return User.fetch(123);
        }]
      },
      controller: ['$scope', 'user', function($scope, user) {
        $scope.user = user;
        $scope.music = {
          src:'/static/data/tfboy.mp3'
        };
      }]
    });

    $stateProvider.state('center.nav', {
      url: '',
      template: require('../../views/home/nav.html')
    });

    $stateProvider.state('center.nickname', {
      url: 'nick',
      template: require('../../views/home/nickname.html'),
      controller: 'nicknameCtrl'
    });
    
    $stateProvider.state('center.nickname.dialog', {
      url: '/dialog',
      template: require('../../views/home/dialog.html'),
      controller: 'dialogCtrl'
    });

    $stateProvider.state('center.sex', {
      url: 'sex',
      template: require('../../views/home/sex.html'),
      controller: 'sexCtrl'
    });
  }]
);

angular.bootstrap(document, ['appModule']);
