eagleApp.controller('logInController' , ['$scope' , '$location' , function($scope, $location){


  $scope.submitAdmin = function(){
    console.log($scope.admin);
  }
}]);
