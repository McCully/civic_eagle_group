"use strict";

eagleApp.controller('candidateController', ['$scope', '$location', '$http' ,'Admin', 'Candidates', 'textAngularManager', 'issues', 'toastr',
function($scope, $location, $http, Admin, Candidates, textAngularManager, issues, toastr) {

 /* Make sure the user is authenticated. */
 if(Admin.getCred() === undefined) {
   $location.path('/logIn');
 } else {
   /* Load all the candidate and issue information
    so it can be displayed to the user. Load the resources
    only if we are authenticated so that we don't
    make a bunch of bad requests to the server
    while the user is sent back to the login page. */
   loadResources();
 };

 $scope.addCandidate = function(candidate) {

   Candidates.add(candidate).then(function(response) {
     if(response.status == 200) {
       toastr.success('Successfully Added Candidate');
       $scope.candidates.push(response.data);
     } else {
        toastr.error('Failed to add candidate');
     }
   });
 }

 $scope.updateCandidate = function(candidate) {
   if(candidate === undefined) {
     return;
   }
   var id = $scope.selectedCandidate._id;
   candidate._id = id;
   Candidates.update(candidate).then(function(response) {
     if(response.status == 200) {
       toastr.success('Successfully Updated Candidate');
       $scope.selectedCandidate = response.data;
     } else {
       toastr.error('Failed to update candidate');
     }
   });
 }

 $scope.showSummary = function(index) {
   var summary = $scope.summaries[index];
   $scope.summary = summary;
 }

/* Grab the selected candidate's information and
 set it to a scope variable, so it can be displayed
 on the DOM.  */
$scope.showCandidate = function(candidate) {

  /* Find and display the selected candidate. */
  $scope.selectedCandidate = candidate;
  $scope.editCandidate = candidate;
  console.log("candiate: ", candidate);

  /* Reset selectedTags and summaries. */
  $scope.selectedTags = [];
  $scope.summaries = [];

  /* Grab the issues in the candidate object
     and look them up by id so they too can
     be displayed to the user. */
  for(var i = 0; i < candidate.issueSummaries.length; i++) {
    var id = candidate.issueSummaries[i].issue;
    var summary = candidate.issueSummaries[i].summary;

    $scope.summaries.push(summary);

    issues.getById(id).then(function(response) {
      $scope.selectedTags.push(response);
    });
  }
};

$scope.clearCandidateForm = function(){
  $scope.candidate = {};
};

function loadResources() {
  /* Load all the candidates information so we can display it. */
  Candidates.getAll().then(function(response) {
    $scope.candidates = response.data;
  });

  issues.getAll().then(function(response) {
    $scope.issues = response.data;
  });
}

//---------* NEW CANDIDATE EDITOR*----------//
$scope.version = textAngularManager.getVersion();
$scope.versionNumber = $scope.version.substring(1);
$scope.newCandidateOrigHtml = '<h1>New Candidates</h1>';
$scope.newCandidateContent = $scope.newCandidateOrigHtml;
$scope.disabled = false;

//---------* UPDATE CANDIDATE EDITOR*----------//
$scope.version = textAngularManager.getVersion();
$scope.versionNumber = $scope.version.substring(1);
$scope.candidateOrigHtml = '<h1>Candidates</h1>';
$scope.candidateContent = $scope.candidateOrigHtml;
$scope.disabled = false;

}]);
