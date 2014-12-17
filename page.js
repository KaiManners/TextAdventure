function myFunction(){
	var p = document.createElement("A");
	p.setAttribute("href", "www.g4.com");
	var t = document.createTextNode("Tutorials");
	p.appendChild(t);
	document.body.appendChild(p);
}

