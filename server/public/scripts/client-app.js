var eagleApp = angular.module('eagleApp', ['ngRoute']);

  eagleApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home' , {
      templateUrl: '/views/templates/home.html',
      controller: 'homeController'
    })

    .otherwise({
      redirectTo: 'home'
    })
  }]);
