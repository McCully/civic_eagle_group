"use strict";

eagleApp.controller('homeController', ['$scope' , function($scope) {
  $scope.highlighted = false;
  $scope.changeColor = function() {
    $scope.highlighted = true;
    console.log('click works');
  };

  /* This counter tracks the modal form
   view we are on. Zero is the first view, one
   is the second view and 2 is the third, etc. */
  var screenCounter = 0;

  $scope.resetCounter = function() {
    screenCounter = 0;
    $scope.showFirst = true;
    $scope.showSecond = false;
    $scope.showThird = false;
    $scope.showNext = false;
    $scope.showPrevious = true;
    console.log("Reset: ", screenCounter);
  }

  /* Show the first form and hide the other two forms by default.
   Setting the $scope.show* variables will show their respective forms. */
  $scope.showFirst = true;
  $scope.showSecond = false;
  $scope.showThird = false;
  $scope.showNext = false;
  $scope.showPrevious = true;

  $scope.switchView = function() {
    console.log("counter: ", screenCounter);
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
      $scope.showSecond = false;
      $scope.showThird = true;
      $scope.showNext = true;
      $scope.showPrevious = false;
    }
  };

  $scope.resetCandidateModal = function() {
    console.log("counter: ", screenCounter);
    screenCounter = 0;
    $scope.showFirst = true;
    $scope.showSecond = false;
    $scope.showThird = false;
    console.log("counter: ", screenCounter);
  };

  $scope.nextCandidateView = function() {
    screenCounter++;
    if(screenCounter > 2) {
      screenCounter = 2;
    }
    $scope.switchView();
  };

  $scope.prevCandidateView = function() {
    if(screenCounter === 0) {
      return;
    }
    screenCounter--;
    $scope.switchView();
  };

  $scope.resetTopicModal = function() {
    console.log("counter: ", screenCounter);
    screenCounter = 0;
    $scope.showFirst = true;
    $scope.showSecond = false;
    console.log("counter: ", screenCounter);
  };

  $scope.nextTopicView = function() {
    screenCounter++;
    if(screenCounter > 1) {
      screenCounter = 1;
      return;
    }
    $scope.switchView();
  };

  $scope.prevTopicView = function() {
    if(screenCounter === 0) {
      return;
    }
    screenCounter--;
      $scope.switchView();
  };

}]);
