"use strict";

eagleApp.controller('issueController', ['$scope','$location', '$http', 'Admin', 'textAngularManager', 'IssuesService', function ($scope, $location, $http, Admin, textAngularManager, IssuesService) {
  var header = 'Basic ' + Admin.getCred();

  if(Admin.getCred() === undefined){
   $location.path('/logIn');
 };

  IssuesService.getIssues().then(function(response) {
    $scope.issues = response;
    console.log($scope.issues);
  });

  $scope.showIssue = function(index) {
    $scope.resetCounter();
    var issue = $scope.issues[index];
    console.log("issue: ", issue);
    $scope.selectedIssue = issue;
  }

  $scope.clearForm = function(){
    $scope.topic = {};
  }

  //---------* WYSIWYG EDITOR*----------//
  $scope.version = textAngularManager.getVersion();
  $scope.versionNumber = $scope.version.substring(1);
  $scope.orightml = '<h1>CIVIC EAGLE API INFO!!!!!!!!</h1>';
  $scope.htmlcontent = $scope.orightml;
  $scope.disabled = false;


}]);
