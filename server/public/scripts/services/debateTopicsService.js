"use strict";

eagleApp.factory('DebateTopicsService', ['$http', 'Admin', function($http, Admin) {
  function getDebateTopics() {
    var promise = $http({
     method: 'GET',
     url: "/topics",
     headers: {'Authorization': 'Basic ' + Admin.getCred()}
   }).then(function(response) {
     return response;
   }, function(err) {
     return err;
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
       return response;
     }, function(err) {
       return err;
     });
       return promise;
   }

  function updateTopic(topic) {
    var id = topic._id;
    var promise = $http({
       method: 'PUT',
       data: topic,
       url: "/topics/" + id,
       headers: {'Authorization': 'Basic ' + Admin.getCred()}
     }).then(function(response) {
       return response;
     }, function(err) {
       return err;
     });
       return promise;
  }

  return {
    getDebateTopics: getDebateTopics,
    addTopic: addTopic,
    updateTopic: updateTopic
  };

}]);
