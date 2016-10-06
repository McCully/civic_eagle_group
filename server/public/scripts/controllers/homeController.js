"use strict";

eagleApp.controller('homeController', ['$scope', '$location', function($scope, $location) {

/* This function governs show/hide for the nav bar on the login page */
  $scope.checkNav = function(viewLocation) {
       if(viewLocation === $location.path()){
         return false;
       }else {
         return true;
       }
   };

  /* This counter tracks the modal form
   view we are on. Zero is the first view, one
   is the second view and 2 is the third, etc. */
  var screenCounter = 0;
  $scope.topicsTotal = 2;
  $scope.candidatesTotal = 3;
  $scope.pageNumber = 1;

  $scope.resetCounter = function() {
    screenCounter = 0;
    $scope.pageNumber = 1;
    $scope.showFirst = true;
    $scope.showSecond = false;
    $scope.showThird = false;
    $scope.showNext = false;
    $scope.showPrevious = true;
  }

  /* Show the first form and hide the other two forms by default.
   Setting the $scope.show* variables will show their respective forms. */
  $scope.resetCounter();

  $scope.switchView = function() {
    console.log("Switch: ", screenCounter);
    $scope.pageNumber = screenCounter;
    $scope.pageNumber += 1;

    if(screenCounter === 0) {
      $scope.showFirst = true;
      $scope.showSecond = false;
      $scope.showThird = false;
      $scope.showNext = false;
      $scope.showPrevious = true;
    }

    if(screenCounter == 1) {
      $scope.showFirst = false;
      $scope.showSecond = true;
      $scope.showThird = false;
      $scope.showNext = false;
      $scope.showPrevious = false;
    }

    if(screenCounter == 2) {
      $scope.showFirst = false;
      $scope.showSecond = false;
      $scope.showThird = true;
      $scope.showNext = true;
      $scope.showPrevious = false;
    }
    // if(screenCounter == 2 || $location.path() == '/debateTopics', '/issues') {
      // $scope.showSecond = false;
    //   $scope.showThird = true;
    //   $scope.showNext = true;
    //   $scope.showPrevious = false;
    //   console.log('counter 2');
    // }
  }

  $scope.nextCandidateView = function() {
    screenCounter++;
    console.log(screenCounter);
    if(screenCounter > 2) {
      screenCounter = 2;
    }
    $scope.switchView();
  };

  $scope.prevCandidateView = function() {
    console.log(screenCounter);
    if(screenCounter === 0) {
      return;
    }
    screenCounter--;
    $scope.switchView();
  };

  $scope.nextTopicView = function() {
    screenCounter++;
    if(screenCounter > 1) {
      console.log('nextTopicView');
      screenCounter = 1;
      return;
    }
    $scope.switchView();
  };

  $scope.prevTopicView = function() {
    if(screenCounter === 0) {
      console.log('prevTopicView');
      return;
    }
    screenCounter--;
      $scope.switchView();
  };

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
