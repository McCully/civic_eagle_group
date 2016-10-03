"use strict";

eagleApp.controller('issueController', ['$scope', '$http', 'Admin', 'textAngularManager', 'IssuesService', function ($scope, $http, Admin, textAngularManager, IssuesService) {
  var header = 'Basic ' + Admin.getCred();

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

  //---------* WYSIWYG EDITOR*----------//
  $scope.version = textAngularManager.getVersion();
  $scope.versionNumber = $scope.version.substring(1);
  $scope.origIssueHtml = '<h1>Issues</h1>';
  $scope.issuesContent = $scope.origIssueHtml;
  $scope.disabled = false;


}]);
