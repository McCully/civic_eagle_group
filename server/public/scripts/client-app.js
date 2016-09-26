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
    .when('/candidates',{
      templateUrl: '/views/templates/candidates.html',
      controller: 'candidateController'
    })
    .when('/debateTopics',{
      templateUrl: '/views/templates/debateTopics.html',
      controller: 'topicsController'
    })
    .when('/issues',{
      templateUrl: '/views/templates/issues.html'
    })
    .when('/newsTopics',{
      templateUrl: '/views/templates/newsTopics.html'
    })

    .otherwise({
      redirectTo: 'logIn'
    })
  }]);
