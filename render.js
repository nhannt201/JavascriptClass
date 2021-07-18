
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
	//console.log(id_menu);
	//Set new content follow menu div
	document.getElementById("main-content").innerHTML = document.getElementById(id_menu).innerHTML;
}

var listenMenu = document.querySelectorAll(".menu"); //Get menu
for (var i = 0; i < listenMenu.length	; i++) {
	//Listen click menu and show to main
	addListen(listenMenu[i].id);
	
}

function addListen(thisid) {
	document.getElementById(thisid).addEventListener("click", function() { 
		loadPage(thisid.replace("menu-","") + "-content"); 
	});
}