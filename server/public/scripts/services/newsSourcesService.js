"use strict";

eagleApp.factory('newsSources' , ['$http', 'Admin', function($http, Admin){
  function getAll() {
    var promise = $http({
     method: 'GET',
     url: "/sources",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     return response;
   }, function(err) {
     return err;
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
     console.log("response: ", response);
     return response;
   }, function(err) {
     console.log("err: ", err);
     return err;
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
     return response;
   }, function(err) {
     return err;
   });
   return promise;
  }

  return {
    getAll: getAll,
    create: create,
    update: update
  };
}]);
