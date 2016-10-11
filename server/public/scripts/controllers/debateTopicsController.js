"use strict";

eagleApp.controller('debateTopicsController', ['$scope', '$location', '$http' ,'Admin', 'DebateTopicsService', 'issues', 'textAngularManager', 'toastr',
function($scope, $location, $http, Admin, DebateTopicsService, issues, textAngularManager, toastr) {

  if(Admin.getCred() === undefined){
   $location.path('/logIn');
 } else {
   loadResources();
 };

/* Load debate topics */
function loadResources() {
  DebateTopicsService.getDebateTopics().then(function(response){
    $scope.topics = response.data;
  });

/* Load issues. */
  issues.getAll().then(function(response){
    $scope.issues = response.data;
  });
};

//ADD NEW DEBATE TOPIC
$scope.addTopic = function(topic) {
  console.log($scope.active);
  console.log("topic: ", topic);
  DebateTopicsService.addTopic(topic).then(function(response) {
    if(response.status == 201) {
      $scope.topics.push(response.data);
      toastr.success("Successfully Added topic");
    } else {
      toastr.error("Failed to add topic");
    }
  });
}

//UPDATE DEBATE TOPIC
$scope.updateTopic = function(topic) {
  console.log(topic);
  var id = $scope.selectedTopic._id;
  topic._id = id;
  topic.summary = $scope.selectedTopic.summary;
  topic.active = $scope.active;
  DebateTopicsService.updateTopic(topic).then(function(response) {
    if(response.status == 200) {
      $scope.topics.push(response.data);
      toastr.success("Successfully updated topic");
    } else if (response.status == 500) {
      loadResources();
      toastr.success("Successfully updated topic");
    } else {
      toastr.error("Failed to update topic");
    }
  });
}

//DISPLAY DEBATE TOPIC
$scope.showTopic = function(topic) {
  console.log(topic);
  $scope.selectedTopic = topic;
  $scope.updatedTopic = topic;
  $scope.active = topic.active;
};

//CLEAR FORM
$scope.clearTopicForm = function(){
  $scope.topic = {};
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
