"use strict";

eagleApp.factory('issues' , ['$http' , 'Admin', function($http, Admin){
  function getAll() {
    var promise = $http({
     method: 'GET',
     url: "/issues",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     return response;
   });
   return promise;
  }

  function getById(id) {
    var promise = $http({
     method: 'GET',
     url: "/issues/" + id,
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     return response;
   });
   return promise;
  }

  function update(issue) {
    var id = issue._id;
    var promise = $http({
     method: 'PUT',
     data: issue,
     url: "/issues/" + id,
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     return response;
   });
   return promise;
  }

  function create(issue) {
    var promise = $http({
     method: 'POST',
     url: "/issues",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     return response;
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
