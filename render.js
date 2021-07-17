
class init {
	
	static makeBody() {
		var bodyz = document.createElement("div");
		bodyz.setAttribute("class","container");
		bodyz.setAttribute("id","container");
		document.body.appendChild(bodyz);
		
		var p1 = document.createElement("p");
		p1.innerHTML = "Welcome to Index!";
		p1.setAttribute("class","welcome");
		document.getElementById("container").appendChild(p1);
	}
}

init.makeBody();

