eagleApp.controller('issueController', ['$scope', '$http', 'Admin', 'textAngularManager', 'newsSourcesService', function ($scope, $http, Admin, textAngularManager, newsSourcesService) {
  var header = 'Basic ' + Admin.getCred();

  newsService.newsIssues();
}]);
