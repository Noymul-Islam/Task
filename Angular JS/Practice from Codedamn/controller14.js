var app = angular.module('mainApp',[]);

app.controller('app', function($scope){
 $scope.myRandomNumber= Math.random();
 document.querySelector('input').addEventListener('click', function(){
 	console.log("click");
 	$scope.myRandomNumber= Math.random();
 	$scope.$digest();

 },false);
});