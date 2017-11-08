var app =angular.module('mainApp',[]);

app.controller('people', function($scope,$http){

 $http.get('database.json')
 .success(function(response){
     $scope.persons=response.records; 	

 });


});
