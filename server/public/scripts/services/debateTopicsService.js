eagleApp.factory('DebateTopicsService', ['$http', function($http){

  function getDebateTopics(){
      var promise = $http.get('/debateTopicRoute').then(function(response){
      console.log("Topics Data", response);
      console.log("Data", response.data);
      return response.data;
    });
    return promise;
  };

/*
  function getIssues(){
    $http.get('/issuesRoute').then(function(response){
      console.log("getting issues ", response);
      console.log("data retrieved: ", response.data);
    });
  };
*/

  return {
    getDebateTopics: getDebateTopics
  }

}])
