
eagleApp.factory('DebateTopicsService', ['$http', function($http){


  function getDebateTopics(){
      var promise = $http.get('/debateTopicRoute').then(function(response){
      console.log("Topics Data", response);
      console.log("Data", response.data);
      return response.data;
    });
    return promise;
  };

<<<<<<< HEAD
/*
  function getIssues(){
    $http.get('/issuesRoute').then(function(response){
      console.log("getting issues ", response);
      console.log("data retrieved: ", response.data);
=======
  function getDebateTopics(){
    $http.get('/debateTopicsRoute').then(function(response){
      console.log("getting topics " , response);
      console.log("data retrieved: " , response.data);
>>>>>>> ac51c862cfb187baf74844eb7651f4d1ed4f4717
    });
  };
*/

  return {
    getDebateTopics: getDebateTopics
  }

}])
