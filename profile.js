class MyProfile {
			constructor(name, old, location, intro) {		
				this.name = name;
				this.old = old;
				this.location = location;
				this.intro = intro;
			}
			printProfile() {	
				//var attB = []; //attB.push("id:intro"); //attB.push("name:howto");
				this.printP("Name: " + this.name,"a", ["id:name","name:myname"]);
				this.printP("Age: " + this.old);
				this.printP("Location: " + this.location);
				this.printP("Intro: " + this.intro);
			}
			printP(text, className="", attB=[]) {
				var Profile = document.createElement("p");
				Profile.innerHTML = text;
				if (className !="") {Profile.className = className;}
				for ( var i=0; i<attB.length; i++ ) {
					var data = attB[i].split(":");
					Profile.setAttribute(data[0], data[1]);
				}		
				this.addElementMain(Profile);
			}
			addElementMain(chilD) {
				document.body.appendChild(chilD);
			}
		}
		//newPerson =  new MyProfile("Jack Son",20,"UK","Hello everyone!");
		//newPerson.printProfile();