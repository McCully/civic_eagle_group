"use strict";

eagleApp.controller('newsSourcesController', ['$scope', '$location', '$http', 'Admin', 'textAngularManager', 'newsSources', function ($scope, $location, $http, Admin, textAngularManager, newsSources) {
  var header = 'Basic ' + Admin.getCred();

  if(Admin.getCred() === undefined){
    $location.path('/logIn');
  } else {
    loadResources();
  }

  function loadResources() {
    newsSources.getAll().then(function(response){
      $scope.sources = response;
    });
  }

  $scope.addSource = function(source) {
    console.log("source: ", source);
    newsSources.create(source).then(function(response) {
      console.log("res: ", response);
    });
  }

  $scope.clearForm = function(){
    $scope.topic = {};
  }
}]);
