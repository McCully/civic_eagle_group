"use strict";

eagleApp.controller('issueController', ['$scope','$location', '$http', 'Admin', 'textAngularManager', 'issues', function ($scope, $location, $http, Admin, textAngularManager, issues) {

  if(Admin.getCred() === undefined){
    $location.path('/logIn');
  } else {
    loadResources();
  }

  function loadResources() {
    issues.getAll().then(function(response) {
      $scope.issues = response.data;
    });
  }

  $scope.addIssue = function(issue) {
    issues.create(issue).then(function(response) {
      if(response.status == 200) {
        toastr.success("Successfully added issue");
        $scope.issues.push(response.data);
      } else {
        toastr.error("Failed adding issue");
      }
    });
  }

  $scope.updateIssue = function(issue) {
    if(issue === undefined) {
      return;
    }
    var id = $scope.selectedIssue._id;
    issue._id = id;
    console.log("Issue: ", issue);
    issues.update(issue).then(function(response) {
      if(response.status == 200) {
        toastr.success("Successfully updated issue");
        $scope.issues.push(response.data);
      } else {
        toastr.error("Failed updating issue");
      }
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
