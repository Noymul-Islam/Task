function outerFuntion()
{
	var value;
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

