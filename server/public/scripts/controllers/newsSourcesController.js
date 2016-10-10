"use strict";

eagleApp.controller('newsSourcesController', ['$scope', '$location', '$http', 'Admin', 'textAngularManager', 'newsSources', function ($scope, $location, $http, Admin, textAngularManager, newsSources) {

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
      $scope.sources.push(response);
    });
  }

  $scope.updateSource = function(source) {
    if(source === undefined) {
      return;
    }
  }

  $scope.clearForm = function(){
    $scope.topic = {};
  }
}]);
