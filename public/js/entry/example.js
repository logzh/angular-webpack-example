var angular = require('angular');
require('angular-ui-router');

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    url: '/home',
    template: require('../../views/example/partial-home.html')
  });

  // nested list with custom controller
  $stateProvider.state('home.list', {
    url: '/list',
    template: require('../../views/example/partial-home-list.html'),
    controller: ['$scope', '$state', function($scope, $state) {
      $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    }]
  });

  // nested list with just some random string data
  $stateProvider.state('home.paragraph', {
    url: '/paragraph',
    template: 'I could sure use a drink right now.'
  });

  $stateProvider.state('about', {
    url: '/about',
    views: {

      // the main template will be placed here (relatively named)
      '': {template: require('../../views/example/partial-about.html')},

      // the child views will be defined here (absolutely named)
      'columnOne@about': {template: 'Look I am a column!'},

      // for column two, we'll define a separate controller
      'columnTwo@about': {
        template: require('../../views/example/table-data.html'),
        controller: ['$scope', function($scope) {

          $scope.message = 'test';

          $scope.scotches = [
            {
              name: 'Macallan 12',
              price: 50
            },
            {
              name: 'Chivas Regal Royal Salute',
              price: 10000
            },
            {
              name: 'Glenfiddich 1937',
              price: 20000
            }
          ];

        }]
      }
    }

  });

  $stateProvider.state('about.test', {
    url: '/test',
    views: {

      // the main template will be placed here (relatively named)
      '': {template: require('../../views/example/partial-about-test.html')}

    }

  });
});


