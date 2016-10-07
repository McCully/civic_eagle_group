"use strict";

eagleApp.controller('homeController', ['$scope', '$location', 'Admin', function($scope, $location, Admin) {

  /* Make sure the user is authenticated. */
  if(Admin.getCred() === undefined) {
    $location.path('/logIn');
  } else {

  };

/* This function governs show/hide for the nav bar on the login page */
  $scope.checkNav = function(viewLocation) {
       if(viewLocation === $location.path()){
         return false;
       }else {
         return true;
       }
   };

 $scope.logOut = function() {
   Admin.setCred("");
   $location.path("/login");
 }

}]);

eagleApp.controller('PanelController', ['$scope', '$location', function($scope, $location){
  this.selectedTab = '';
  $scope.isActive = false;
  this.setTab = function(setTab){
      //console.log('tab is set to:', setTab);
      this.selectedTab = setTab;
      $location.path(setTab);
    };
    this.isTabSelected = function(tab){
      return this.selectedTab === tab;
    };
}]);
