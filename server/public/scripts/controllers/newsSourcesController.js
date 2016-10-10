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

    var id = $scope.selectedSource._id;
    source._id = id;

    newsSources.update(source).then(function(response) {
      console.log("response: ", response);
    });
  }

  $scope.showSource = function(index) {
    var source = $scope.sources[index];
    console.log("Source: ", source);
    $scope.selectedSource = source;
  }

  $scope.clearForm = function(){
    $scope.topic = {};
  }
}]);
