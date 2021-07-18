
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

//init.makeBody();

function loadPage(id_menu) {
	document.getElementById("main-content").innerHTML = document.getElementById(id_menu).innerHTML;
}

var listenMenu = document.querySelectorAll(".menu");
for (var i = 0, len = listenMenu.length; i < len; i++) {
	var id_name = listenMenu[i].id;
	alert(id_name);
    //document.getElementById(listenMenu[i].id).addEventListener("click", loadPage);
}
