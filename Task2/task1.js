function temp(person)
{
	var string="";


	for(var key in person)
	{
		this.string=this.string+" "+person[key];
		//console.log(person[key]);
	}
	return this.string;
	


}
function mainFunction()
{
	var person={firstName:"Noymul",middleName:"Islam",lastName:"Chowdhury", nickName:"Shorot",age:24,area:"West Dhanmondi",city:"Dhaka",country:"Bangladesh"};
	var obj= new temp(person); 
	console.log(obj.string);
}

mainFunction();