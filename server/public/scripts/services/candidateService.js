"use strict";

eagleApp.factory('CandidateService' , ['$http' , function($http){


  function getCandidates(){
    var promise = $http.get('/candidateRoute').then(function(response){
      console.log("getting candidates " , response);
      console.log("data retrieved: " , response.data);
      return response.data;

    });
    return promise;
  };


  return {
    getCandidates: getCandidates
  }

}])
