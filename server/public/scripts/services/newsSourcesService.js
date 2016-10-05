"use strict";

eagleApp.factory('newsSourcesService' , ['$http', 'Admin', function($http, Admin){
  function getSources(){
    var promise = $http({
     method: 'GET',
     url: "https://news-staging.api.civiceagle.com/sources",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  return {
    getSources: getSources,
  };
}]);
