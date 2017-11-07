var app = angular.module('mainApp',['ngRoute']);


app.config(function ($routeProvider){
	$routeProvider
	.when('/',{

	})
	.when('/helloUser',{

	})
	.otherwise({
		redirectTo: '/'
	});
});