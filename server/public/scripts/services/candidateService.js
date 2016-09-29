"use strict";

eagleApp.factory('CandidateService' , ['$http' , function($http){
  function getCandidates() {
    var promise = $http.get('/candidateRoute').then(function(response){
      return response.data;

    });
    return promise;
  }


  return {
    getCandidates: getCandidates
  };

}]);
