"use strict";

eagleApp.controller('debateTopicsController', ['$scope', '$http' ,'Admin', 'DebateTopicsService', 'IssuesService', 'textAngularManager',
function($scope, $http, Admin, DebateTopicsService, IssuesService, textAngularManager) {
  var header = 'Basic' + Admin.getCred();
  DebateTopicsService.getDebateTopics().then(function(response){
    $scope.topics = response;
  });


  IssuesService.getIssues().then(function(response){
    console.log(response);
    $scope.issues = response;
  })


  //---------* WYSIWYG EDITOR*----------//
  $scope.version = textAngularManager.getVersion();
  $scope.versionNumber = $scope.version.substring(1);
  $scope.debateOrigHtml = '<h1>Debate Topics</h1>';
  $scope.debateContent = $scope.debateOrigHtml;
  $scope.disabled = false;

$scope.updateTopic = function(topic){
DebateTopicsService.updateTopic(topic).then(function(response){
  console.log(response);
});
}

}]);
