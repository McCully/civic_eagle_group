eagleApp.factory('Admin' , ['$http' ,function($http) {
  var credentials;


  function setCred(cred) {
    credentials = cred;
  }

  function getCred(){
    return credentials;
  };


return{
  setCred: setCred,
  getCred: getCred

};
}]);
