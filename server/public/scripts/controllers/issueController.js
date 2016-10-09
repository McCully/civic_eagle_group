"use strict";

eagleApp.controller('issueController', ['$scope','$location', '$http', 'Admin', 'textAngularManager', 'issues', function ($scope, $location, $http, Admin, textAngularManager, issues) {

  if(Admin.getCred() === undefined){
    $location.path('/logIn');
  } else {
    loadResources();
  }

  function loadResources() {
    issues.getAll().then(function(response) {
      $scope.issues = response;
      console.log($scope.issues);
    });
  }

  $scope.addIssue = function(issue) {
    console.log("Issue: ", issue);
    issues.create(issue).then(function(response) {
      $scope.issues.push(response);
    });
  }

  $scope.updateIssue = function(issue) {
    var id = $scope.selectedIssue._id;
    issue._id = id;
    console.log("Issue: ", issue);
    issues.update(issue).then(function(response) {
      console.log("res: ", response);
    });
  }

  $scope.showIssue = function(index) {
    var issue = $scope.issues[index];
    console.log("issue: ", issue);
    $scope.selectedIssue = issue;
  }

  $scope.clearIssueForm = function(){
    $scope.issue = {};
  }

  //---------* WYSIWYG EDITOR*----------//
  $scope.version = textAngularManager.getVersion();
  $scope.versionNumber = $scope.version.substring(1);
  $scope.origIssueHtml = '<h1>Issues</h1>';
  $scope.issuesContent = $scope.origIssueHtml;
  $scope.disabled = false;


}]);
