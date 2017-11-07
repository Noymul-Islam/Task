(function(){
// "use strict";
function createTable(data,width)
{
	var table= document.createElement("table");
	var tbody= document.createElement("tbody");
	var thead= document.createElement("thead");
	var div= document.createElement("div");
	div.setAttribute("class","container");
	table.setAttribute("class","table table-striped");
	table.style.width=""+width+"%";
	var headRow= document.createElement("tr");
	var headName= getHeadCell(data);
	for(var i=0;i<headName.length;i++)
	{
		var headCell= document.createElement("th");
		headCell.innerText=headName[i];
		headRow.appendChild(headCell);
	}
	thead.appendChild(headRow);
	table.appendChild(headRow); 
	var rowSize= getRow(data);
	var colSize=getCol(data);
	for(var i=0;i<rowSize;i++)
	{
		var row= document.createElement("tr");
		for(var j=0;j<colSize;j++)
		{
			var cell= document.createElement("td");
			var information=getInformation(i,j,data);
			cell.innerText= information;
			row.appendChild(cell);
		}
		tbody.appendChild(row);
	}
	table.appendChild(tbody);
	div.appendChild(table);
	document.body.appendChild(div);


}
function getHeadCell(data)
{
	return Object.keys(data[0]);
}
function getInformation(i,j,data)
{
	var keyList=Object.keys(data[i]);
	//var key= keyList[j]
	//console.log(key);
	return data[i][keyList[j]];

}
function getCol(data)
{
	return Object.keys(data[0]).length;
}
function getRow(data)
{
	return data.length;
}


function init()
{
data=[{ "name":"Shorot", "age":24, "car":0 },
{ "name":"Stype", "age":25, "car":20 },
{ "name":"Shahriar", "age":24, "car":2},
{ "name":"Summit", "age":24, "car":10 }

];
  createTable(data,75);


}


init();

}).call(this);