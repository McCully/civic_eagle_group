"use strict";

eagleApp.factory('IssuesService' , ['$http' , function($http){

  function getIssues() {
    var promise = $http.get('/issuesRoute').then(function(response){
      return response.data;
    });
    return promise;
  }

  return {
    getIssues: getIssues,
  };
}]);
