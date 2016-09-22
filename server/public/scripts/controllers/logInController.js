eagleApp.controller('logInController' , ['$scope' , '$location' , 'Admin' , function($scope, $location, Admin){


  $scope.submitAdmin = function(){
    console.log($scope.admin);
    var cred = window.btoa($scope.admin.username + ':' + $scope.admin.password);
    $scope.admin.username = '';
    $scope.admin.password = '';
    Admin.setCred(cred);
     console.log(cred);
    $location.path('/home')
  }
}]);
