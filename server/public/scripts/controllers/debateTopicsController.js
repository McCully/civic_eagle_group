eagleApp.controller('debateTopicsController', ['$scope', '$http' ,'Admin', 'DebateTopicsService', function($scope, $http, Admin, DebateTopicsService) {
  var header = 'Basic' + Admin.getCred();
  DebateTopicsService.getDebateTopics().then(function(response){
    $scope.topics = response;
  });
  var screenCounter = 0;
  $scope.switchView();


//  $http({
//   method: 'GET',
//   url: "https://debate-staging.api.civiceagle.com/topics",
//   headers: {"Authorization": 'Basic dGVzdGFkbWluOkdjUWwzUUhyYnI='
// , 'accept' : 'application/json'}
// }).then(function(response){
//   $scope.topicsResults = response.data;
//   console.log($scope.topicsResults);
// });
//

/*


*/
//   function switchView() {
//   if(screenCounter == 0) {
//     $scope.showFirst = true;
//     $scope.showSecond = false;
//     $scope.showNext = false;
//     $scope.showPrev = true;
//   }
//   if(screenCounter == 1) {
//     $scope.showFirst = false;
//     $scope.showSecond = true;
//     $scope.showNext = true;
//     $scope.showPrev = false;
//   }
// }

}]);
