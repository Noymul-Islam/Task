    var list=[];
    var startingPos=0;
    var pageAmount=0; 
    /*Constructor function for the all task*/
    function taskObject(task,mentor,deadLine)
	{
		this.task=task;
		this.mentor= mentor;
		this.deadLine=deadLine;

	}
	/*here flag 0 means call for initialization and 1 means call for update*/
	function initUpdatePagination(flag)
	{
		if(!flag)
		{
			pageAmount=Math.ceil(list.length/5);
		}
		if(flag)
		{
		   var li= document.createElement('li');
		   var a= document.createElement('a');
		   var linkText=document.createTextNode(""+(pageAmount));
		   var pageNo=pageAmount;
		   a.appendChild(linkText);
		   a.addEventListener("click",function(){
			    	pageNumberClick(pageNo);
			    });
		   li.appendChild(a);
		   document.getElementsByClassName("pagination")[0].appendChild(li);
		   return;
		}
		for(let i=0;i<pageAmount;i++)
		{

			var li= document.createElement('li');
			var a= document.createElement('a');
			var linkText=document.createTextNode(""+(i+1));
			a.appendChild(linkText);
		    a.addEventListener("click",function(){
			    	pageNumberClick(i+1);
			    });
			li.appendChild(a);
			document.getElementsByClassName("pagination")[0].appendChild(li);
		}


	}
	/*Track the current page number on click */
	function pageNumberClick(param)
	{
		//alert(param);
		startingPos=(param-1)*5;
		console.log(startingPos);
		showTaskList(startingPos);
	}
	/*Remove table item from table */
	function removeTableItem()
	{
		var parentNode = document.getElementById("tbody");
		//console.log(parentNode);
        while (parentNode.firstChild) 
         {
           parentNode.removeChild(parentNode.firstChild);
         }
	}
	/*Function fires on cell click*/
	function cellClick(id,updatedText)
	{
		
		let row = parseInt(id/10);
		let col=  id%10;
		    list= JSON.parse(localStorage.getItem("list"));
		let keys=Object.keys(list[row]);
		    list[row][keys[col]]=updatedText;
		    localStorage.removeItem("list");
		    localStorage.setItem("list",JSON.stringify(list));
		
	}
	/*Function for adding listener to the cell elements*/

	function listenerAddingToTheCellElements(cell,cellValue,type)
	{
	    cell.addEventListener("dblclick",function(){

		       	    let input=document.createElement("input");
		       	        input.setAttribute("type",type);
		       	        input.setAttribute("value",cellValue);
		       	        cell.innerHTML=null;
		       	        cell.appendChild(input); 
		       	        input.addEventListener("blur",function(){
		       	       	      let updatedText= input.value;
                                  cell.innerHTML=null; 
		       	       	          cell.innerHTML= updatedText;

                             cellClick(cell.id,updatedText);

		       	       }); 
		 });

	}
	/*This function show the task list */
	function showTaskList(pos)
	{
		var substract=0;
		list= JSON.parse(localStorage.getItem("list"));
        if( Math.ceil(list.length/5)>pageAmount)
        {
        	pageAmount++;
        	initUpdatePagination(1);
        }
		removeTableItem();
		for(let i=pos; i<pos+5;i++)
		{
			if(list[i]==undefined)
				break;
			
		       var tbody = document.getElementById("tbody");
               let row   = tbody.insertRow(i-pos);
               let cell1 = row.insertCell(0);
               let cell2 = row.insertCell(1);
               let cell3 = row.insertCell(2);
               //let.id=i;
               cell1.id=i*10+0;
               cell2.id=i*10+1;
               cell3.id=i*10+2;
               listenerAddingToTheCellElements(cell1,list[i].task,"text");
               listenerAddingToTheCellElements(cell2,list[i].mentor,"text");
               listenerAddingToTheCellElements(cell3,list[i].deadLine,"date");
               cell1.innerHTML = list[i].task;
               cell2.innerHTML = list[i].mentor;
               cell3.innerHTML = list[i].deadLine;
           

       }


   }

	/* on page refrresh or load*/
	function onLoad()
	{

		list= JSON.parse(localStorage.getItem("list"));
		if(list==null|| list.length==0)
		{
			list=[];
			//localStorage.removeItem("list");
			localStorage.setItem("list",JSON.stringify(list));
		}
		else 
		{
			initUpdatePagination(0);
			showTaskList(startingPos);
		}


	}
	/*This function fires when new task is added*/
	function addTaskInfo()
	{
		list= JSON.parse(localStorage.getItem("list"));
		var taskInput= document.getElementById("taskName").value; // input from task field
		var mentorName= document.getElementById("mentorName").value; // input from mentor field
		var deadLineTime= document.getElementById("deadLine").value;// input from date field
		document.getElementById("taskName").value="";
		document.getElementById("mentorName").value="";
		document.getElementById("deadLine").value="";
		if(taskInput==""||mentorName==""||deadLineTime=="")
		{
			alert("No Field should be empty");
		}
		else 
		{
		    var taskDetails= new taskObject(taskInput,mentorName,deadLineTime);
		    list.push(taskDetails);
		    localStorage.removeItem("list");
		    localStorage.setItem("list",JSON.stringify(list));
		    showTaskList(startingPos);
        }
	}


	onLoad();
