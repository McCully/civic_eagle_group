"use strict";

eagleApp.factory('newsSources' , ['$http', 'Admin', function($http, Admin){
  function getAll() {
    var promise = $http({
     method: 'GET',
     url: "/sources",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  function create(source) {
    var promise = $http({
     method: 'POST',
     data: source,
     url: "/sources",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  function update(source) {
    var id = source._id;
    var promise = $http({
     method: 'PUT',
     data: source,
     url: "/sources/" + id,
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  return {
    getAll: getAll,
    create: create,
    update: update
  };
}]);
