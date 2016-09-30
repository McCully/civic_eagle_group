"use strict";

eagleApp.controller('issueController', ['$scope', '$http', 'Admin', 'textAngularManager', 'IssuesService', function ($scope, $http, Admin, textAngularManager, IssuesService) {
  var header = 'Basic ' + Admin.getCred();

  IssuesService.getIssues().then(function(response) {
    $scope.issues = response;
    console.log($scope.issues);
  });

  $scope.showIssue = function(index) {
    var issue = $scope.issues[index];
    console.log("issue: ", issue);
    $scope.selectedIssue = issue;
  }

  //---------* WYSIWYG EDITOR*----------//
  $scope.version = textAngularManager.getVersion();
  $scope.versionNumber = $scope.version.substring(1);
  $scope.orightml = '<h1>CIVIC EAGLE API INFO!!!!!!!!</h1>';
  $scope.htmlcontent = $scope.orightml;
  $scope.disabled = false;


}]);
