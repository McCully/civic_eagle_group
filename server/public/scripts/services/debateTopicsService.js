"use strict";

eagleApp.factory('DebateTopicsService', ['$http', function($http){


  function getDebateTopics(){
      var promise = $http.get('/debateTopicRoute').then(function(response){
      console.log("Topics Data", response);
      console.log("Data", response.data);
      return response.data;
    });
    return promise;
  };

  function updateTopic(topic) {
    var id = topic._id;
    console.log(id);
    var promise = $http.put('/debateTopicRoute/' + id, topic).then(function(response){
    console.log(response);
    })
    console.log(topic);
    /*
      var promise = $http.put('/debateTopicRoute').then(function(response){
      return response.data;
    });
    return promise;
    */
  };
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
    getDebateTopics: getDebateTopics,
    updateTopic: updateTopic
  }

}])
