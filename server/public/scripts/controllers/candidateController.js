"use strict";

eagleApp.controller('candidateController', ['$scope', '$location', '$http' ,'Admin', 'CandidateService', 'textAngularManager', 'issues',
function($scope, $location, $http, Admin, CandidateService, textAngularManager, issues) {

  /* Create basic authorization header. */
  var header = 'Basic ' + Admin.getCred();

  if(Admin.getCred() === undefined){
   $location.path('/logIn');
 };
  /* Load all the candidates information so we can display it. */
  CandidateService.getCandidates().then(function(response){
    $scope.candidates = response;
    console.log("Candidates: ", response);
  }
);

$scope.issues = [];

issues.getAll().then(function(response){
  console.log(response);
  for(var i = 0; i < response.length; i++) {
    issues.getById().then(function(response) {
      $scope.issues.push(response);
    });
  }
});

/* Grab the selected candidate's information and
 set it to a scope variable, so it can be displayed
 on the DOM.  */
$scope.showCandidate = function(index) {
  $scope.resetCounter();
  var candidate = $scope.candidates[index];
  $scope.selectedCandidate = candidate;
};

$scope.clearForm = function(){
  $scope.topic = {};
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
