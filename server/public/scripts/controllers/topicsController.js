eagleApp.controller('topicsController', ['$scope', '$http' ,'Admin', function($scope, $http, Admin){
  var header = 'Basic' + Admin.getCred();
  var screenCounter = 0;
  $scope.switchView();
}]);
