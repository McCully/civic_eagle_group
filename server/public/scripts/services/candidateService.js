"use strict";

eagleApp.factory('Candidates' , ['$http', 'Admin', function($http, Admin) {
  function getAll() {
    var promise = $http({
     method: 'GET',
     url: "https://reps-staging.api.civiceagle.com/candidates",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  return {
    getAll: getAll
  };

}]);
