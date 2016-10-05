"use strict";

eagleApp.controller('logInController' , ['$scope' , '$location' , 'Admin' , '$http', function($scope, $location, Admin, $http) {
  $scope.submitAdmin = function(){
    /* Generate the credentials from the username and password
      so we can access the backend's REST api. */
    var cred = window.btoa($scope.admin.username + ':' + $scope.admin.password);

    /* Clear username and password. */
    $scope.admin.username = '';
    $scope.admin.password = '';

    /* Store the credential for later use by other
       controllers and services.  */
    Admin.setCred(cred);

     $http({
      method: 'POST',
      url: "/cred",
      data: {
        cred: cred,
      },
    }).then(function(response){
    });
     $location.path('/home');
  };
}]);
