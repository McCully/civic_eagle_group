"use strict";

eagleApp.controller('issueController', ['$scope', '$http', 'Admin', 'textAngularManager', 'issues', function ($scope, $http, Admin, textAngularManager, issues) {
  var header = 'Basic ' + Admin.getCred();

  issues.getAll().then(function(response) {
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
