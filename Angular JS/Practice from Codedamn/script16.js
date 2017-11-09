var application = angular.module('mainApp', []);
application.provider('date', function(){

 return {
 	var greet;
 	    setGreeting: function(){

            },   

 	  $get: function(){
 	  	return {

              
 	  		showeDate: function(){
 	  			var date= new Date();
 	  			return date.getHours();
 	  		}
 	  	}
 	  }

 }


});

application.config(function(dateProvide){
   

});

application.controller('app', function($scope, date){
     $scope.greetMessage= date.showeDate();

});