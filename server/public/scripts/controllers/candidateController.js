"use strict";

eagleApp.controller('candidateController', ['$scope', '$http' ,'Admin', 'CandidateService', function($scope, $http, Admin, CandidateService) {
  /* Create basic authorization header. */
  var header = 'Basic ' + Admin.getCred();

  /* Load all the candidates information so we can display it. */
  CandidateService.getCandidates().then(function(response){
    $scope.candidates = response;
  }
);

/* Grab the selected candidate's information and
 set it to a scope variable, so it can be displayed
 on the DOM.  */
$scope.showCandidate = function(index) {
  var candidate = $scope.candidates[index];
  $scope.selectedCandidate = candidate;
}

}]);
