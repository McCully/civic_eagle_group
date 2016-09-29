"use strict";

eagleApp.factory('DebateTopicsService', ['$http', function($http){

  function getDebateTopics() {
      var promise = $http.get('/debateTopicRoute').then(function(response){
      return response.data;
    });
    return promise;
  }

  return {
    getDebateTopics: getDebateTopics
  };

}]);
