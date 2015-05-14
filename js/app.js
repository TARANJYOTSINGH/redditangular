// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


angular.module('starter', [])

 .config(function($httpProvider){
   $httpProvider.defaults.useXDomain = true;
   $httpProvider.defaults.withCredentials = false;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
$httpProvider.defaults.headers.common["Accept"] = "application/json";
$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  })

 
    
     .controller("SecureController", function($scope,$filter,$http) {
        $scope.children = [];
 $scope.firstname="hello";
    $scope.searchreddit=function(){
      var  base1="http://www.reddit.com/search.json?q=";
      var requrl=base1+$scope.search;
  var req = {
 method: 'GET',
 url: requrl
}
 $http(req)
        .success(function (data) {
         
         $scope.children=angular.fromJson(data.data.children);
        
        });
      }

       

    
});