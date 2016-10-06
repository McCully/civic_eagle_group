"use strict";

var eagleApp = angular.module('eagleApp', ['ngRoute', 'textAngular', 'angular-loading-bar', 'ui.select', 'ngSanitize', 'ngTagsInput']);

  eagleApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/logIn' , {
      templateUrl: '/views/templates/login.html',
      controller: 'logInController'
    })
    .when('/home' , {
      templateUrl: '/views/templates/home.html',
      controller: 'homeController'
    })
    .when('/candidates', {
      templateUrl: '/views/templates/candidates.html',
      controller: 'candidateController'
    })
    .when('/debateTopics',{
      templateUrl: '/views/templates/debateTopics.html',
      controller: 'debateTopicsController'
    })
    .when('/issues', {
      templateUrl: '/views/templates/issues.html',
      controller: 'issueController'
    })
    .when('/newsSources',{
      templateUrl: '/views/templates/newsSources.html',
      controller: 'newsSourcesController'
    })
    .otherwise({
      redirectTo: 'logIn'
    });
  }]);
