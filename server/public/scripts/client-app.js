var eagleApp = angular.module('eagleApp', ['ngRoute']);

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

    .otherwise({
      redirectTo: 'logIn'
    })
  }]);
