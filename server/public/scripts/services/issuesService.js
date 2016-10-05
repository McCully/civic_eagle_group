"use strict";

eagleApp.factory('issues' , ['$http' , function($http){

  function getAll() {
    var promise = $http.get('/issuesRoute').then(function(response){
      return response.data;
    });
    return promise;
  }

  function getById(id) {
    var promise = $http.get('/issuesRoute/' + id).then(function(response){
      return response.data;
    });
    return promise;
  }

  return {
    getAll: getAll,
    getById: getById
  };
}]);
