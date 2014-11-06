var runSomeTests = function(){
	var descrip = document.getElementById('descrip');

	console.log(descrip.tagName);
	console.log(descrip.innerHTML);
	console.log(descrip.parentNode.tagName);

	var headings = document.querySelectorAll('aside > h1');
	for (i = 0; i < headings.length; i++){
		console.log(headings[i].innerHTML);
	}
	
	var listOfItems = document.querySelector('#inventory > ul');
	var seeHelp = document.querySelector('#help > ul');
	var lookAtInventory = document.getElementById('inventory');
	lookAtInventory.innerHTML = 'You have ' + inventory;
	
	var observer = document.getElementById('descrip');
	var look = observer.nodeType; 

	var items = document.querySelectorAll('#items');
	items.innerHTML = 'You currently have this: ';
	
	document.querySelector("p.descrip");
	
	var add = items.addChild('baby');
	
	
}

window.onload = runSomeTests;
