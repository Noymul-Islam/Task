function outerFunction()
{
	var param1=10,param2=20;
	return {

        getSum: function()
         {
         	return param1+param2;
         },
         getMultiplication: function()
         {
         	return param1*param2;
         },
         getDifference: function()
         {
         	return Math.abs(param1-param2);

         },
         setParameter: function(val1,val2)
         {
         	console.log("New Parameter is setting");
         	console.log("Previous value:"+param1+","+param2);
         	param1=val1;
         	param2=val2;
         	console.log("Updated value:"+param1+","+param2);
         }


	}
}

var obj = new outerFunction();
    
    console.log(obj.getSum());
    console.log(obj.getMultiplication());
    console.log(obj.getDifference());
    obj.setParameter(1,2);
    console.log(obj.getSum());
    console.log(obj.getMultiplication());
    console.log(obj.getDifference());
     