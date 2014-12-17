function buildTable(array){
var table = document.createElement("table");
var tableRow = document.createElement("tr");
for(i in array){
	var header = document.createElement("th");
	var text = document.createTextNode();
	header.appendChild(text);
	}
table.appendChild(header);
return table;
}

var newTable = buildTable(kai);
document.getElementsByTagName("p").innerHTML = newTable;



