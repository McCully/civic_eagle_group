"use strict";

eagleApp.controller('newsSourcesController', ['$scope', '$location', '$http', 'Admin', 'textAngularManager', 'newsSourcesService', function ($scope, $location, $http, Admin, textAngularManager, newsSourcesService) {
  var header = 'Basic ' + Admin.getCred();

  if(Admin.getCred() === undefined){
   $location.path('/logIn');
 };

  newsSourcesService.getSources().then(function(response){
    $scope.sources = response;
  });

  $scope.clearForm = function(){
    $scope.topic = {};
  }
}]);
