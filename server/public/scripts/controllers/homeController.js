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
  $scope.topicsTotal = 2;
  $scope.candidatesTotal = 3;
  $scope.pageNumber = 1;

  $scope.resetCounter = function() {
    screenCounter = 0;
    $scope.showFirst = true;
    $scope.showSecond = false;
    $scope.showThird = false;
    $scope.showNext = false;
    $scope.showPrevious = true;
    console.log('reset counter function');
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
      console.log('click');
    }
    if(screenCounter == 1) {
      $scope.showFirst = false;
      $scope.showSecond = true;
      $scope.showThird = false;
      $scope.showNext = false;
      $scope.showPrevious = false;
      console.log('counter 1');
    }
    if(screenCounter == 2) {
      $scope.showSecond = false;
      $scope.showThird = true;
      $scope.showNext = true;
      $scope.showPrevious = false;
      console.log('counter 2');
    }
  };

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

  //---------------**SET TAB**---------------//
  // this.selectedTab = 'debateTopics';
  // this.setTab = function(setActive){
  //     console.log('tab is set to:', setActive);
  //     this.selectedTab = setActive;
  //   };
  //
  // this.isActive = function(tab){
  //     console.log('Checking to see if ', this.selectedTab, ' === ', tab, 'it is: ', this.selectedTab === tab);
  //     return this.selectedTab === tab;
  //   };

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







// eagleApp.directive('navDirective', function () {
//   return {
//     restrict: 'E',
//     templateUrl: '../../views/templates/sideNav.html',
//     controller: function($scope, $location){
//       this.selectedTab = '';
//       $scope.isActive = false;
//       this.setTab = function(setTab){
//           console.log('tab is set to:', setTab);
//           this.selectedTab = setTab;
//           // $location.path(setTab);
//         };
//         this.isTabSelected = function(tab){
//           if(this.selectedTab !== ''){
//           console.log('Checking to see if ', this.selectedTab, ' === ', tab, 'it is: ', this.selectedTab === tab);
//           return this.selectedTab === tab;
//         }
//       };
//     }
//   };
// });
