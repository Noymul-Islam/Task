var applicaction = angular.module('mainApp',[]);


applicaction.factory('$random', function(){
 
   
 return {
   generate: function()
   {
   	var num= Math.floor(Math.random()*10);
   	//console.log(num);
  	return num;
   }
    }
});

applicaction.controller('app', function($scope,$random){

  $scope.generateRandom= function(){
  	//console.log("click");
  	$scope.randomNumber =$random.generate();
  }

});