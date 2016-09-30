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

  function switchView() {
  if(screenCounter == 0) {
    $scope.showFirst = true;
    $scope.showSecond = false;
    $scope.showNext = false;
    $scope.showPrev = true;
  }
  if(screenCounter == 1) {
    $scope.showFirst = false;
    $scope.showSecond = true;
    $scope.showNext = true;
    $scope.showPrev = false;
  }
}

$scope.resetTopicModal = function() {
  var screenCounter = 0;
  $scope.showFirst = true;
  $scope.showSecond = false;
}

  $scope.switchView();




}]);
