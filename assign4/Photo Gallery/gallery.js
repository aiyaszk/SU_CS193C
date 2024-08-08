"use strict";

var photoArray = [
		{filename: "memchu.jpg",
		 caption: "Stanford Memorial Church - the church used to have an 80' bell tower, which fell in the 1906 earthquake."},
		{filename: "quad.jpg",
		 caption: "The Stanford Quad"},
		{filename: "hoop.jpg",
		 caption: "The <i>Red Hoop Fountain</i> with Green Library in the background."},
		{filename: "memorial-court.jpg",
		 caption: "Memorial Court (in the front of the Quad) with Rodin's <i>Burghers of Calais</i> statues."},
		{filename: "gates.jpg",
		 caption: "The Gates Building - home of Stanford Computer Science."},
		{filename: "stone-river.jpg",
		 caption: "The Stone River statue near the Cantor Arts Center (Stanford's own art museum)."},
];

var control = 0;

function next() {
	control++;
	if (control==photoArray.length) {
		control = 0;
	}
	document.getElementById("caption").innerHTML = photoArray[control].caption;
	document.getElementById("photo").src = photoArray[control].filename;
}

function previous() {
	control--;
	if (control<0) {
		control = photoArray.length-1;
	}
	document.getElementById("caption").innerHTML = photoArray[control].caption;
	document.getElementById("photo").src = photoArray[control].filename;
}

function handleResize() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	document.getElementById("photoSection").style.top = (height - 600) /2 + "px";
	document.getElementById("photoSection").style.left = (width - 800) /2 + "px";
	// margin-left: calc((100% - 800px) / 2); 
}

function hover(event) {
	event.target.style.backgroundColor = "royalblue";
	event.target.style.opacity = 0.35;
	if (event.target === document.getElementById("forwardOverlay")) {
		event.target.style.backgroundImage = "url('right-arrow.png')";
	} else {
		event.target.style.backgroundImage = "url('right-arrow.png')";
		event.target.style.transform = "scaleX(-1)";
	}
	event.target.style.backgroundSize = "120px";
	event.target.style.backgroundRepeat = "no-repeat";
	event.target.style.backgroundPosition = "right center";
}

function unhover(event) {
	event.target.style.backgroundColor = "";
	event.target.style.backgroundImage = "";
}

window.addEventListener("resize",handleResize,false);
window.onload = handleResize();

document.getElementById("forwardOverlay").addEventListener("mouseover", hover);
document.getElementById("backwardOverlay").addEventListener("mouseover", hover);

document.getElementById("forwardOverlay").addEventListener("mouseout", unhover);
document.getElementById("backwardOverlay").addEventListener("mouseout", unhover);

