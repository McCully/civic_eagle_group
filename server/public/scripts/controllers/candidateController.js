eagleApp.controller('candidateController', ['$scope', '$http' ,'Admin', function($scope, $http, Admin){
  var header = 'Basic ' + Admin.getCred();
  console.log(header);
    $http({
      method: 'GET',
      url: "https://reps-staging.api.civiceagle.com/candidates",
      headers: {"Authorization": 'Basic dGVzdGFkbWluOkdjUWwzUUhyYnI='
    , 'accept' : 'application/json'}
    }).then(function(response){
      $scope.candidateResults = response.data;
      console.log($scope.candidateResults);
    });


}]);
