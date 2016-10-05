"use strict";

eagleApp.factory('DebateTopicsService', ['$http', function($http){

  function getDebateTopics() {
      var promise = $http.get('/debateTopicRoute').then(function(response){
      return response.data;
    });
    return promise;
  };

  function addTopic(topic){
    console.log("Data Factory Test 1", topic);
      var promise = $http.post('/debateTopicRoute', topic).then(function(response){
      console.log("Data Factory Test 2", response);
    })
    //return promise;
  };

  function updateTopic(topic) {
    console.log(topic);
    var id = topic._id;
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
    addTopic: addTopic,
    updateTopic: updateTopic
  };

}]);
