
var module= angular.module("myModule",[]);

module.provider("myProvider", function()
{
	this.value= " My value";
	this.setValue = function(newValue)
	{
		this.value= newValue;

	}
	this.$get= function(){
         return this.value;
	};


});

module.config( function(myProviderProvider){
	myProviderProvider.setValue("new Value is lol")
});

/*function MyObject(){
	this.getValue = function(){
		return "My object value"
	}
}

module.factory("myProvider", function()
{
	//console.log("I am inside factory yup");
	return new MyObject();


});*/
/*module.service("myProvider", function(){

	this.getValue =function(){
		//console.log(" I am here in service");
		return "My object value";
	}
});*/


module.controller("myController", function($scope, myProvider){

	 console.log("My provider retuns : "+ myProvider);

});
module.controller("myController1", function($scope, myProvider){

	 console.log("My provider retuns : "+ myProvider);

});