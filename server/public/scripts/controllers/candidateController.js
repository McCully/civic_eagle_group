eagleApp.controller('candidateController', ['$scope', '$http' ,'Admin', function($scope, $http, Admin){
  var header = 'Basic ' + Admin.getCred();

  /* This counter tracks the modal form
   view we are on. Zero is the first view, one
   is the second view and 2 is the third, etc. */
  var screenCounter = 0;

  /* Show the first form and hide the other two forms by default.
   Setting the $scope.show* variables will show their respective forms. */
  $scope.showFirst = true;
  $scope.showSecond = false;
  $scope.showThird = false;

  /*
    $http({
      method: 'GET',
      url: "https://reps-staging.api.civiceagle.com/candidates",
      headers: {"Authorization": 'Basic dGVzdGFkbWluOkdjUWwzUUhyYnI='
    , 'accept' : 'application/json',
  'Access-Control-Allow-Origin' : '*'}
    }).then(function(response){
      $scope.candidateResults = response.data;
      console.log($scope.candidateResults);
    });

  */

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
