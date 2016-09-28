eagleApp.controller('candidateController', ['$scope', '$http' ,'Admin', 'CandidateService', function($scope, $http, Admin, CandidateService){
  var header = 'Basic ' + Admin.getCred();
  CandidateService.getCandidates().then(function(response){
    $scope.candidates = response;
  }
);

$scope.showCandidate = function(index) {
  var candidate = $scope.candidates[index];
  console.log("candidate: ", candidate);
  // $scope.candidateName =
  // $scope.candidateParty =
  // $scope.candidateTwitter =
  // $scope.candidateFacebook
  // $scope.candidateSite =
  // $scope.candidateImage =
  // $scope.candidateIssue =
  // $scope.candidateSummary =
}

}]);
