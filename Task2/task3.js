var arr=[];
/* This method displays the current situation of the array:arr*/
  function currentSituation()
  {

  	for(var i=0; i<arr.length;i++)
  	{
  		console.log(arr[i]);
  	}
  }

/*This is a constructor function and it has several inner function for specific operation. This is for different insert operation into the array:arr  */
function insertInArray()
{

	this.insertIntoFirst= function(param) {
	    arr.unshift(param);	
	}
	this.insertIntoLast= function(param)
	{
		arr.push(param);
	}
	this.insertIntoPosition= function(param,pos)
	{
		if(pos<0||pos>arr.length)
			console.log("Invalid Index");
		else
		{
			temp=[];
			for(var i=0;i<pos;i++)
				temp.push(arr[i]);
			temp.push(param);
			for(var i=pos+1;i<arr.length;i++)
				temp.push(arr[i]);
			arr=temp;
		}
	}
 

}


/* This is a constructor function and it has some inner function for doing some delete operation */
function deleteFromArray()
{
  this.deleteFromFirst= function()
  {
  	   arr.shift();
  }
  this.deleteFromLast= function()
  {
  	   arr.pop();
  }
  this.deleteFromPosition=function(pos)
  {
  	   if(pos<0||pos>arr.length)
  		console.log("Invalid operation");
       else
       {
       	arr.splice(pos,1);

       }

  }

}
/* This is a constructor function and it has some inner function for doing some edit operation */
function editArray()
{
	this.editFirstElement=function(value)
	{
		arr[0]=value;


	}
	this.editLastElement=function(value)
	{
		if(arr.length>0)
		{
			arr[arr.length-1]=value;
		}
		else
			console.log("Array is empty");

	}
	this.editIndexElement=function(index,value)
	{
		if(index>arr.length-1||index<0)
			console.log("Invalid index");
		else
			arr[index]=value;

	}
}
function mainFunction(){
var insertobject= new insertInArray();
    insertobject.insertIntoFirst(10);
    insertobject.insertIntoPosition(20,1);
    insertobject.insertIntoPosition(5,30);
    insertobject.insertIntoLast(50);
    currentSituation();
    console.log("After....Insertion");

 var editObject= new editArray();
     editObject.editFirstElement(30);
     editObject.editLastElement(40);
     editObject.editIndexElement(2,60);
     currentSituation();
     console.log("After....edition");
 var deleteObject= new deleteFromArray();
    deleteObject.deleteFromFirst();
    deleteObject.deleteFromLast();
    deleteObject.deleteFromPosition(0);
    currentSituation();
}
mainFunction();