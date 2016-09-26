eagleApp.controller('topicsController', ['$scope', '$http' ,'Admin', function($scope, $http, Admin){
  var header = 'Basic' + Admin.getCred();
  var screenCounter = 0;
  $scope.showFirst = true;
  $scope.showSecond = false;

  /*
  $http({
   method: 'GET',
   url: "https://reps-staging.api.civiceagle.com/candidates",
   headers: {"Authorization": 'Basic dGVzdGFkbWluOkdjUWwzUUhyYnI='
 , 'accept' : 'application/json'}
 }).then(function(response){
   $scope.candidateResults = response.data;
   console.log($scope.candidateResults);
 });
  */

  function switchView() {
  if(screenCounter == 0) {
    $scope.showFirst = true;
    $scope.showSecond = false;
  }
  if(screenCounter == 1) {
    $scope.showFirst = false;
    $scope.showSecond = true;
  }
}

$scope.resetTopicModal = function() {
  var screenCounter = 0;
  $scope.showFirst = true;
  $scope.showSecond = false;
}

$scope.nextTopicView = function() {
  screenCounter++;
  if(screenCounter > 1) {
    screenCounter = 1;
    return;
  }
  switchView();
}
$scope.prevTopicView = function() {
  if(screenCounter == 0) {
    return;
  }
  screenCounter--;
  switchView();
}
}]);
