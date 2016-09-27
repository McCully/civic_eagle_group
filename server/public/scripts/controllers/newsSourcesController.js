eagleApp.controller('newsSourcesController', ['$scope', '$http', 'Admin', 'textAngularManager', 'newsSourcesService', function ($scope, $http, Admin, textAngularManager, newsSourcesService) {
  var header = 'Basic ' + Admin.getCred();
  newsSourcesService.getSources().then(function(response){
    $scope.sources = response;
  });
}]);
