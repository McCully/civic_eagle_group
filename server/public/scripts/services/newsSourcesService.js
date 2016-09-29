"use strict";

eagleApp.factory('newsSourcesService' , ['$http' , function($http){

  function getSources(){
    var promise = $http.get('/newsSourcesRoute').then(function(response){
      return response.data;
    });
    return promise;
  }

  return {
    getSources: getSources,
  };
}]);
