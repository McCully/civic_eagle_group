"use strict";

eagleApp.factory('Candidates' , ['$http', 'Admin', function($http, Admin) {
  function getAll() {
    var promise = $http({
     method: 'GET',
     url: "/candidates",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  function update(candidate) {
    var id = candidate._id;
    var promise = $http({
     method: 'PUT',
     data: candidate,
     url: "/candidates/" + id,
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  function add(candidate) {
    var promise = $http({
     method: 'POST',
     data: candidate,
     url: "/candidates",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  return {
    getAll: getAll,
    update: update,
    add: add
  };

}]);
