eagleApp.factory('DebateTopicsService' , ['$http' , function($http){


  function getDebateTopics(){
    $http.get('/debateTopicsRoute').then(function(response){
      console.log("getting topics " , response);
      console.log("data retrieved: " , response.data);
    });
  };


  return {
    getIssues: getIssues
  }

}])
