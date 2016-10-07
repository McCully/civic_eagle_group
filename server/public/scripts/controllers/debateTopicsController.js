"use strict";

eagleApp.controller('debateTopicsController', ['$scope', '$location', '$http' ,'Admin', 'DebateTopicsService', 'issues', 'textAngularManager',
function($scope, $location, $http, Admin, DebateTopicsService, issues, textAngularManager) {

  var header = 'Basic' + Admin.getCred();

  if(Admin.getCred() === undefined){
   $location.path('/logIn');
 } else {
   loadResources();
 };

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

//LOAD DEBATE TOPICS
  function loadResources() {
      DebateTopicsService.getDebateTopics().then(function(response){
        $scope.topics = response;
      });

//LOAD ISSUES
      issues.getAll().then(function(response){
        $scope.issues = response;
      });
  };

//ADD NEW DEBATE TOPIC
$scope.addTopic = function(topic) {
  console.log("topic: ", topic);
  DebateTopicsService.addTopic(topic).then(function(response) {
    console.log("res: ", response);
  });
}

//UPDATE DEBATE TOPIC
$scope.updateTopic = function(topic) {
  var id = $scope.selectedTopic._id;
  topic._id = id;
  console.log("topic: ", topic);
DebateTopicsService.updateTopic(topic).then(function(response){
  console.log(response);
});
}

//DISPLAY DEBATE TOPIC
$scope.showTopic = function(topic) {
  $scope.selectedTopic = topic;
  $scope.debateOrigHtml = topic.summary;
};

//CLEAR FORM
$scope.clearTopicForm = function(){
  $scope.topic = {};
};

}]);
