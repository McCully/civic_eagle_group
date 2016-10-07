"use strict";

eagleApp.factory('DebateTopicsService', ['$http', 'Admin', function($http, Admin) {
  function getDebateTopics() {
    var promise = $http({
     method: 'GET',
     url: "/topics",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     console.log("res: ", response);
     return response.data;
   });
   return promise;
  }

  function addTopic(topic) {
    var promise = $http({
       method: 'POST',
       data: topic,
       url: "/topics",
       headers: {'Authorization': 'Basic ' + Admin.getCred()}
     }).then(function(response) {
       console.log("res: ", response);
       return response.data;
     });
       return promise;
   }

  function updateTopic(topic) {
    var id = topic._id;
    console.log("id: ", id);
    var promise = $http({
       method: 'PUT',
       data: topic,
       url: "/topics/" + id,
       headers: {'Authorization': 'Basic ' + Admin.getCred()}
     }).then(function(response) {
       console.log("res: ", response);
       return response.data;
     }, function(err) {
       console.log("err: ", err);
     });
       return promise;
  }

  return {
    getDebateTopics: getDebateTopics,
    addTopic: addTopic,
    updateTopic: updateTopic
  };

}]);
