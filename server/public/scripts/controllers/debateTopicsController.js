"use strict";

eagleApp.controller('debateTopicsController', ['$scope', '$http' ,'Admin', 'DebateTopicsService', function($scope, $http, Admin, DebateTopicsService) {
  var header = 'Basic' + Admin.getCred();
  DebateTopicsService.getDebateTopics().then(function(response){
    $scope.topics = response;
  });
  var screenCounter = 0;
  $scope.switchView();

}]);
