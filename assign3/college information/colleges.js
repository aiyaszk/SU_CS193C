// I've included both the universities full names and their nicknames
// use the nicknames for this assignment.  I've included the full names
// so those who aren't familiar with Bay Area universities will know
// what the names of the universities actually are.

var univArray = new Array(
		{name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757, id: "stanford"},
		{name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844, id: "berkeley"},
		{name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398, id:"santacruz"},
		{name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468, id:"SFSU"},
		{name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496, id:"SJSU"},
		{name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276, id:"sonoma"},
		{name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435, id:"CalState"},
		{name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450, id:"USF"},
		{name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812, id:"SCU"},
		{name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918, id:"mills"}
);

function update() {
	let maxsat = document.getElementById("maxsat").value;
	let minsat = document.getElementById("minsat").value;
	let maxtui = document.getElementById("maxtui").value;	

	document.getElementById("stanford").style.display="";
	document.getElementById("berkeley").style.display="";
	document.getElementById("santacruz").style.display="";
	document.getElementById("SFSU").style.display="";
	document.getElementById("SJSU").style.display="";
	document.getElementById("sonoma").style.display="";
	document.getElementById("CalState").style.display="";
	document.getElementById("USF").style.display="";
	document.getElementById("SCU").style.display="";
	document.getElementById("mills").style.display="";

	
	for (var i=0; i<10; i++) {
		//for max tui
		if (maxtui==="") {
			let a=0;
		}
		
		else if (parseInt(maxtui)<univArray[i].tuition) {
			document.getElementById(univArray[i].id).style.display="none";
			console.log("minsat")
		}

		//for max sat
		if (maxsat===""){
			let a=0;
		} 
		
		else if (parseInt(maxsat)<univArray[i].SATh) {
			console.log("maxsat")
			document.getElementById(univArray[i].id).style.display="none";
		}


		// //for min sat
		if (minsat===""){
			let a=0;
		}
		else if (parseInt(minsat)>univArray[i].SATl) {
			console.log("minsat")
			document.getElementById(univArray[i].id).style.display="none";
		}

		//chosing public and private
		if ( (document.getElementById("public").checked && univArray[i].ownership === "private") || 
		(document.getElementById("private").checked && univArray[i].ownership === "public")) {
			document.getElementById(univArray[i].id).style.display="none";
		}
	}

	let b=0;
	let lastArray = new Array;

	for(var i=0; i<10; i++) {
		if (document.getElementById(univArray[i].id).style.display=="none") {
			b+=1;
		}
		else {
			lastArray.push(univArray[i].id);
		}
	}

	console.log(lastArray);
	console.log(lastArray[1]);
	console.log(b);

	//since if a give the height an impossible small height it always keeps it the smallest possible row height, i did it this way
	//only when overflow is not hidden
	document.getElementById('lefttable').style.height = 1 + "px";

	let c =0;

	for(let i = 0; i < lastArray.length; i++) {    
		if (c%2==0) {
			document.getElementById(lastArray[i]).style.backgroundColor = "white";
		}
		else {
			document.getElementById(lastArray[i]).style.backgroundColor= "#D3D3D3";
		}
		c = c+ 1;
	}

};


window.onbeforeunload = function () {
	document.getElementById("minsat").value="";
	document.getElementById("maxsat").value="";
	document.getElementById("maxtui").value="";

	const radioButtons = document.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radioButton => {
                radioButton.checked = false;
            });
};

document.getElementById("update").addEventListener("click", update);