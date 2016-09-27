eagleApp.factory('IssuesService' , ['$http' , function($http){
  
  function getIssues(){
    var promise = $http.get('/issuesRoute').then(function(response){
      console.log("getting candidates " , response);
      console.log("data retrieved: " , response.data);
    });
    return promise;
  };


  return {
    getIssues: getIssues
  }
}]);
