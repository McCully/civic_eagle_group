eagleApp.controller('issueController', ['$scope', '$http', 'Admin', 'textAngularManager',
function ($scope, $http, Admin, textAngularManager) {

  var header = 'Basic ' + Admin.getCred();

  $http({
    method: 'GET',
    url: "https://reps-staging.api.civiceagle.com/issues",
    headers: {"Authorization": 'Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=',
    'accept': 'application/json',
    'Access-Control-Allow-Origin': '*'}
  }).then(function (response) {
    $scope.issueResults = response.data;
    console.log($scope.issueResults);
  });

  //---------* WYSIWYG *----------//
  $scope.version = textAngularManager.getVersion();
  $scope.versionNumber = $scope.version.substring(1);
  $scope.orightml = '<h1>CIVIC EAGLE API INFO!!!!!!!!</h1>';
  $scope.htmlcontent = $scope.orightml;
  $scope.disabled = false;


  var screenCounter = 0;
  $scope.showFirst = true;
  $scope.showSecond = false;
  $scope.showThird = false;

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
  };

}]);
