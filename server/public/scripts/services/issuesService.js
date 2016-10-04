"use strict";

eagleApp.factory('issues' , ['$http' , function($http){

  function getAllIssues() {
    var promise = $http.get('/issuesRoute').then(function(response){
      return response.data;
    });
    return promise;
  }

  function getById() {
    var promise = $http.get('/issuesRoute').then(function(response){
      return response.data;
    });
    return promise;
  }

  return {
    getAllIssues: getAllIssues,
    getById: getById
  };
}]);
