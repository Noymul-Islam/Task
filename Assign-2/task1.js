/*function temp(person)
{
	  this.string="";

	for(var key in person)	
	{

		this.string =this.string+ " "+person[key];
	}	
    this.bindObjectIntoString=function()
    {
    	return this.string;
    }

}*/
function objectInformation(person)
{
	var string="";
    for(var key in person)	
	{

		string =string+ " "+person[key];
	}
	return string;
	
}

function mainFunction()
{
	var person={firstName:"Noymul",middleName:"Islam",lastName:"Chowdhury", nickName:"Shorot",age:24,area:"West Dhanmondi",city:"Dhaka",country:"Bangladesh"};
	var string=objectInformation(person);
        console.log(string); 
	//var obj= objectInformation(person);
	//console.log(obj.bindObjectIntoString());
}

mainFunction();