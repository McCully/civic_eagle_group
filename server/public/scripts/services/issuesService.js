"use strict";

eagleApp.factory('issues' , ['$http' , 'Admin', function($http, Admin){
  function getAll() {
    var promise = $http({
     method: 'GET',
     url: "https://users-staging.api.civiceagle.com/issues",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  function getById(id) {
    var promise = $http({
     method: 'GET',
     url: "https://users-staging.api.civiceagle.com/issues/" + id,
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  function update(issue) {
    var id = issue._id;
    var promise = $http({
     method: 'PUT',
     data: issue,
     url: "https://users-staging.api.civiceagle.com/issues/" + id,
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  function create(issue) {
    var promise = $http({
     method: 'POST',
     url: "https://users-staging.api.civiceagle.com/issues",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  return {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update
  };
}]);
