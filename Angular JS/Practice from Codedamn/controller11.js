var app= angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
  	templateUrl: 'login.html'
  })
  .when('/dashboard',{
  	resolve:{
  		"check" : function($rootScope, $location){
                if($rootScope.name!=true)
                {
                	console.log("Hello");
                	$location.path('/');
                }
                else 
                {
                	 templateUrl: 'dashboard.html'
                }
  		}

  	},
	
  })
  .otherwise({
  reedirectTo: '/'
  });

});

app.controller('loginCtrl', function($scope, $location,$rootScope){
	$scope.submit= function(){
        var uname= $scope.username;
        var password= $scope.password;
      
        if($scope.username='admin' && $scope.password=='admin')
        {
        	$rootScope.name=true;
        	$location.path('/dashboard');


        }   

	}
});