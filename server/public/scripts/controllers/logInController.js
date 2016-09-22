eagleApp.controller('logInController' , ['$scope' , '$location' , 'Admin' , function($scope, $location, Admin){
  $scope.admin = Admin;

  $scope.submitAdmin = function(){
    console.log($scope.admin);
    $location.path('/home')
  }
}]);
