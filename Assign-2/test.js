/*function outerFuntion()
{
	//var value;
	this.getInfo= function()
	{
		return this.value;

	}
	this.setInfo = function(param)
	{
		this.value=param;
	}

}

var obj= new outerFuntion();
 obj.setInfo(10);
 console.log(obj.getInfo());

*/

var person= function(){

 var pri= function()
 {
 	console.log("Hello world");
 }
 var post= function()
 {
 	console.log("Hello universe");
 }

 return 
 {
 	pri;
 } 
 
}

var obj= new person();

    obj();

