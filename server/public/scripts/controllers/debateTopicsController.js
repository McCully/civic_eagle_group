"use strict";

eagleApp.controller('debateTopicsController', ['$scope', '$http' ,'Admin', 'DebateTopicsService', 'issues', 'textAngularManager',
function($scope, $http, Admin, DebateTopicsService, issues, textAngularManager) {
  var header = 'Basic' + Admin.getCred();
  DebateTopicsService.getDebateTopics().then(function(response){
    $scope.topics = response;
    console.log($scope.topics);
  });

  issues.getAll().then(function(response){
    console.log(response);
    $scope.issues = response;
  });


  //---------* UPDATE DEBATE TOPIC EDITOR*----------//
  $scope.version = textAngularManager.getVersion();
  $scope.versionNumber = $scope.version.substring(1);
  $scope.debateOrigHtml = '<h1>Debate Topics</h1>';
  $scope.debateContent = $scope.debateOrigHtml;
  $scope.disabled = false;

  //---------* NEW DEBATE TOPIC EDITOR*----------//
  $scope.version = textAngularManager.getVersion();
  $scope.versionNumber = $scope.version.substring(1);
  $scope.newDebateOrigHtml = '<h1>New Debate Topics</h1>';
  $scope.newDebateContent = $scope.newDebateOrigHtml;
  $scope.disabled = false;

//  $http({
//   method: 'GET',
//   url: "https://debate-staging.api.civiceagle.com/topics",
//   headers: {"Authorization": 'Basic dGVzdGFkbWluOkdjUWwzUUhyYnI='
// , 'accept' : 'application/json'}
// }).then(function(response){
//   $scope.topicsResults = response.data;
//   console.log($scope.topicsResults);
// });
//
$scope.addTopic = function(topic) {
  console.log("Test");
  console.log(topic);
};

$scope.updateTopic = function(topic){
DebateTopicsService.updateTopic(topic).then(function(response){
  console.log(response);
});
}

$scope.showTopic = function(topic){
  console.log(topic);
  $scope.topic = topic;
  $scope.htmlcontent = topic.summary;
};


}]);
