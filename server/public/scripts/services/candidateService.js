eagleApp.factory('CandidateService' , ['$http' , function($http){


  function GetCandidates(){
    $http.get('/candidateRoute').then(function(response){
      console.log("getting candidates " , response);
      console.log("data retrieved: " , response.data);
    });
  };


  return {
    GetCandidates: GetCandidates
  }

}])
