eagleApp.controller('candidateController', ['$scope', '$http' ,'Admin', function($scope, $http, Admin){
  var header = 'Basic ' + Admin.getCred();
  var screenCounter = 0;
  $scope.showFirst = true;
  $scope.showSecond = false;
  $scope.showThird = false;
  console.log("header: ", header);
    $http({
      method: 'GET',
      url: "https://reps-staging.api.civiceagle.com/candidates",
      headers: {"Authorization": 'Basic dGVzdGFkbWluOkdjUWwzUUhyYnI='
    , 'accept' : 'application/json'}
    }).then(function(response){
      $scope.candidateResults = response.data;
      console.log($scope.candidateResults);
    });

    function switchView() {
      if(screenCounter == 0) {
        $scope.showFirst = true;
        $scope.showSecond = false;
        $scope.showThird = false;
      }
      if(screenCounter == 1) {
        $scope.showFirst = false;
        $scope.showSecond = true;
        $scope.showThird = false;
      }
      if(screenCounter == 2) {
        $scope.showSecond = false;
        $scope.showThird = true;
      }
    }

    $scope.resetCandidateModal = function() {
      var screenCounter = 0;
      $scope.showFirst = true;
      $scope.showSecond = false;
      $scope.showThird = false;
    }

    $scope.nextCandidateView = function() {
      screenCounter++;
      if(screenCounter > 2) {
        screenCounter = 2;
      }
      switchView();
      console.log("counter: ", screenCounter);
    }
    $scope.prevCandidateView = function() {
      if(screenCounter == 0) {
        return;
      }
      screenCounter--;
      switchView();
      console.log("counter: ", screenCounter);
    }
}]);
