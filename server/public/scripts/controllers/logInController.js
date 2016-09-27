eagleApp.controller('logInController' , ['$scope' , '$location' , 'Admin' , '$http', function($scope, $location, Admin, $http){


  $scope.submitAdmin = function(){
    console.log($scope.admin);
    var cred = window.btoa($scope.admin.username + ':' + $scope.admin.password);
    $scope.admin.username = '';
    $scope.admin.password = '';
    Admin.setCred(cred);
     console.log(cred);

     $http({
      method: 'POST',
      url: "/cred",
      data: {
        cred: cred,
      },
    }).then(function(response){
      console.log(response);
    });
     $location.path('/home');
  };
}]);
