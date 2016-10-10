"use strict";

eagleApp.controller('newsSourcesController', ['$scope', '$location', '$http', 'Admin', 'textAngularManager', 'newsSources', 'toastr', function ($scope, $location, $http, Admin, textAngularManager, newsSources, toastr) {

  if(Admin.getCred() === undefined){
    $location.path('/logIn');
  } else {
    loadResources();
  }

  function loadResources() {
    newsSources.getAll().then(function(response){
      $scope.sources = response.data;
    });
  }

  $scope.addSource = function(source) {
    newsSources.create(source).then(function(response) {
      if(response.status == 201) {
        toastr.success("Successfully added news source");
        $scope.sources.push(response.data);
      } else {
        toastr.error("Failed adding news source");
      }
    });
  }

  $scope.updateSource = function(source) {
    if(source === undefined) {
      return;
    }

    var id = $scope.selectedSource._id;
    source._id = id;

    newsSources.update(source).then(function(response) {
      if(response.status == 200) {
        toastr.success("Successfully updated news source");
        /* The backend returns 500 even though it's saving
        our changes so count 500 as success. */
      } else if(response.status == 500) {
        toastr.success("Successfully updated news source");
      } else {
        toastr.error("Failed updating news source");
      }
    });
  }

  $scope.showSource = function(source) {
    $scope.selectedSource = source;
    $scope.editSource = source;
  }

  $scope.clearForm = function(){
    $scope.source = {};
  }
}]);
