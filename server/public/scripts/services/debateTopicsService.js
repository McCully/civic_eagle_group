eagleApp.factory('DebateIssueService' , ['$http' , function($http){


  function getIssues(){
    $http.get('/issuesRoute').then(function(response){
      console.log("getting issues " , response);
      console.log("data retrieved: " , response.data);
    });
  };


  return {
    getIssues: getIssues
  }

}])
