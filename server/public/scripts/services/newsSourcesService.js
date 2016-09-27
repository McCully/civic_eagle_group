eagleApp.factory('newsSourcesService' , ['$http' , function($http){

  function getNews(){
    var promise = $http.get('/newsSourceRoute').then(function(response){
      console.log("getting sources " , response);
      console.log("data retrieved: " , response.data);
    });
    return promise;
  };


  return {
    getNews: getNews
  }
}]);
