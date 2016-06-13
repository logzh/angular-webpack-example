var angular = require('angular');
require('angular-ui-router');
require('../apiModule');
var $ = require('jquery');

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
    
    // $stateProvider.state('center', {
    //   abstract: true,
    //   url: '/',
    //   template: '<div ui-view></div>',
    //   resolve: {
    //     res: ['User', function(User) {
    //       return User.fetch();
    //     }]
    //   },
    //   controller: ['$scope', 'res', function($scope, res) {
    //     $scope.user = res.user;
    //   }]
    // });

    $stateProvider.state('report', {
      url: '/',
      views: {
        'filters': {
          template: require('../../views/multiple-named-views/report-filters.html'),
          controller: function($scope) {
          }
        },
        'tabledata': {
          template: require('../../views/multiple-named-views/report-table.html'),
          controller: function($scope) {
          }
        },
        'graph': {
          template: require('../../views/multiple-named-views/report-graph.html'),
          controller: function($scope) {
          }
        }
      }
    });

    $stateProvider.state('report.test', {
      url: 'test',
      template: '<div>123</div>',
      resolve: {
        res: ['User', function(User) {
          return User.fetch();
        }]
      },
      controller: ['$scope', 'res', function($scope, res) {
        $scope.user = res.user;
      }]
    });
    

  }]
);

angular.bootstrap(document, ['appModule']);
