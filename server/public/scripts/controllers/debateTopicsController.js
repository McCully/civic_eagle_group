"use strict";

eagleApp.controller('debateTopicsController', ['$scope', '$location', '$http' ,'Admin', 'DebateTopicsService', 'issues', 'textAngularManager',
function($scope, $location, $http, Admin, DebateTopicsService, issues, textAngularManager) {

  var header = 'Basic' + Admin.getCred();

  if(Admin.getCred() === undefined){
   $location.path('/logIn');
 } else {
   loadResources();
 };


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
  console.log(topic);
  DebateTopicsService.addTopic(topic).then(function(response){
  });
}

//UPDATE DEBATE TOPIC
$scope.updateTopic = function(topic) {
console.log(topic);
var id = $scope.selectedTopic._id;
topic._id = id;
DebateTopicsService.updateTopic(topic).then(function(response){
console.log(response);
});
}

//DISPLAY DEBATE TOPIC
$scope.showTopic = function(index) {
  var topic = $scope.topics[index];
  $scope.selectedTopic = topic;
  $scope.debateContent = topic.summary;
  $scope.selectedTopic = topic;
};

//CLEAR FORM
$scope.clearTopicForm = function(){
  $scope.topic = {};
  $scope.resetCounter();
};

//---------* UPDATE DEBATE TOPIC EDITOR*----------//
$scope.version = textAngularManager.getVersion();
$scope.versionNumber = $scope.version.substring(1);
$scope.debateOrigHtml = '<h1>Insert Summary Here!</h1>';
$scope.debateContent = $scope.debateOrigHtml;
$scope.disabled = false;

//---------* NEW DEBATE TOPIC EDITOR*----------//
$scope.version = textAngularManager.getVersion();
$scope.versionNumber = $scope.version.substring(1);
$scope.newDebateOrigHtml = '<h1>Insert Debate Topic Summary Here!</h1>';
$scope.newDebateContent = $scope.newDebateOrigHtml;
$scope.disabled = false;


}]);
