eagleApp.factory('newsSourcesService' , ['$http' , function($http){

  function getSources(){
    var promise = $http.get('/newsSourcesRoute').then(function(response){
      console.log("getting sources " , response);
      console.log("data retrieved: " , response.data);
      return response.data;
    });
    return promise;
  };


  return {
    getSources: getSources,
  }
}]);
