var container = document.getElementById("mapSection");
var map = document.getElementById("map");
var controls = document.getElementById("controls");

var isDragging = false;
var offsetTop, offsetLeft, mapLeft, mapRight;

//LOCATIONS (in small map) didnt work
var locationArray = [
    {location: ["Gates"], x: 474, y: 452},
    {location: ["Tresidder"], x: 556, y: 688},
    {location: ["Main Quad"], x: 580, y: 557},
]

//PRELOAD
var currPic=0;
var prevPic =0;
  
var picArray = new Array(
	{
		file:"map-s.gif",
		width:1283,
		height:997
	},
	{
		file:"map-m.gif",
		width:2047,
		height:1589
	},
	{
		file:"map-l.gif",
		width:3063,
		height:2373
	},
	{
		file:"map-xl.gif",
		width:4084,
		height:3164
	},
);

var imageArray = new Array();
  
for(var i=0; i < picArray.length; i++) {
    imageArray[i] = new Image();
    imageArray[i].src = picArray[i].file;
}

//ZOOMING
var prevPic = 0;
var currPic = 0;

function inzoom() {
    prevPic = currPic;
    currPic++;
    if (currPic >= picArray.length) {
        currPic = 3;
    }
    else {
        var c_height = parseInt(container.style.height) / 2;
        var c_width = parseInt(container.style.width) / 2;

        var oldTop = parseInt(window.getComputedStyle(map).top) - c_height;
        var oldLeft = parseInt(window.getComputedStyle(map).left) - c_width;

        map.style.left = c_width + picArray[currPic].width * oldLeft / picArray[prevPic].width + "px";
        map.style.top = c_height + picArray[currPic].height * oldTop / picArray[prevPic].height + "px";
    
        map.src = picArray[currPic].file;
    }
	
}

function dezoom() {
    prevPic = currPic;
    currPic--;
    if (currPic <0) {
        currPic = 0;
    }
    else {
        var c_height = parseInt(container.style.height) / 2;
        var c_width = parseInt(container.style.width) / 2;

        var oldTop = parseInt(window.getComputedStyle(map).top) - c_height;
        var oldLeft = parseInt(window.getComputedStyle(map).left) - c_width;

        map.style.left = c_width + picArray[currPic].width * oldLeft / picArray[prevPic].width + "px";
        map.style.top = c_height + picArray[currPic].height * oldTop / picArray[prevPic].height + "px";
    
        map.src = picArray[currPic].file;     
    }
}

//DRAGGING
function handleMouseDown(event) {
	if (event.target===map) {
		isDragging = true;
        offsets(event);
        container.style.cursor = "move";
        event.preventDefault();
	}
}

function offsets(event) {
    offsetTop = event.clientY - map.getBoundingClientRect().top;
	offsetLeft = event.clientX - map.getBoundingClientRect().left;
}

function handleMouseUp() {
	isDragging = false;
    container.style.cursor = "";	
}

function handleMouseMove(event) {
	if (isDragging) {
		map.style.left = event.clientX - offsetLeft - 30 + "px"; //how did 28 happen ?-?
		map.style.top = event.clientY - offsetTop -30 + "px";
	}
}

//DOUBLE CLICKING
function handleDblClick(event) {
    if (event.target === map) {
        offsetTopDBL = event.clientY - map.getBoundingClientRect().top;
		offsetLeftDBL = event.clientX - map.getBoundingClientRect().left;
        
        centerX = (window.innerWidth - 60) / 2;
        centerY = (window.innerHeight - 60) / 2;

        smoothMove(map, 'top', centerY - offsetTopDBL, 500); // 500ms duration
        smoothMove(map, 'left', centerX - offsetLeftDBL, 500); // 500ms duration
    }
}

//RESIZE
function handleResize() {
	container.style.height = window.innerHeight -60 + "px"; //fixed margins
	container.style.width = window.innerWidth -60 + "px"; //fixed margins
}

/// SETUP FUNCTIONS
document.addEventListener("mousemove",handleMouseMove);
document.addEventListener("mousedown",handleMouseDown);
document.addEventListener("mouseup",handleMouseUp);
document.addEventListener("dblclick",handleDblClick);
window.addEventListener("resize",handleResize);
window.onload = handleResize();

//BUTTOOONS

// Helper function for smooth movement
function smoothMove(element, property, target, duration) {
      const start = parseInt(window.getComputedStyle(element)[property]);
      const change = target - start;
      let startTime = null;
      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        element.style[property] = (start + percentage * change) + "px";
    if (percentage < 1) {
          requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

// Buttons
function down() {
    var bottom = parseInt(window.getComputedStyle(map).bottom);
    // console.log(window.getComputedStyle(map).bottom);
    // console.log(window.getComputedStyle(map).top);
    // console.log(window.getComputedStyle(map).right);
    // console.log(window.getComputedStyle(map).left);
    var top = parseInt(window.getComputedStyle(map).top);
    if (bottom < 0) {
        bottom = 0;
    }
    if (top < 0) {
        top = 0;
    }
    var visible_height = parseInt(window.innerHeight - 60 - top - bottom);
    //console.log(parseInt(window.getComputedStyle(map).top) - visible_height / 2);
    smoothMove(map, 'top', parseInt(window.getComputedStyle(map).top) - visible_height / 2, 800); 
}

function up() {
    var bottom = parseInt(window.getComputedStyle(map).bottom);
    var top = parseInt(window.getComputedStyle(map).top);
    if (bottom < 0) {
        bottom = 0;
    }
    if (top < 0) {
        top = 0;
    }
    var visible_height = parseInt(window.innerHeight - 60 - top - bottom);
    smoothMove(map, 'top', parseInt(window.getComputedStyle(map).top) + visible_height / 2, 800); 
}

function right() {
    var right = parseInt(window.getComputedStyle(map).right);
    var left = parseInt(window.getComputedStyle(map).left);
    if (right < 0) {
        right = 0;
    }
    if (left < 0) {
        left = 0;
    }
    // console.log(right);
    // console.log(left);
    var visible_width = parseInt(window.innerWidth - 60 - right - left);
    smoothMove(map, 'left', parseInt(window.getComputedStyle(map).left) - visible_width / 2, 1200); 
}

function left() {
    var right = parseInt(window.getComputedStyle(map).right);
    var left = parseInt(window.getComputedStyle(map).left);
    if (right < 0) {
        right = 0;
    }
    if (left < 0) {
        left = 0;
    }
    var visible_width = parseInt(window.innerWidth - 60 - right - left);
    smoothMove(map, 'left', parseInt(window.getComputedStyle(map).left) + visible_width / 2, 1200); 
}