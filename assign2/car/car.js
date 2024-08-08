function changeToRed() {
	document.getElementById('photo').src='red.jpg';
}

function changeToWhite() {
	document.getElementById('photo').src='white.jpg';
}

function changeToBlue() {
	document.getElementById('photo').src='blue.jpg';
}

function changeToSilver() {
	document.getElementById('photo').src='silver.jpg';
}

function changeToBlack() {
	document.getElementById('photo').src='black.jpg';
}

function calculateTotal() {
    let carForm = document.getElementById("cars");
    let total = 0;
    if (carForm.manual.checked)
      total = total + 17790;
    if (carForm.auto.checked)
      total = total + 18590;
    if (carForm.sm.checked)
      total = total + 22455;
    if (carForm.sport.checked)
      total = total + 23155;
    if (carForm.option1.checked)
      total = total + 1235;
    if (carForm.option2.checked)
      total = total + 3354;
    if (carForm.Stereo.checked)
      total = total + 550;
    if (carForm.VIP.checked)
      total = total + 399;
    if (carForm.Mirror.checked)
      total = total + 295;
    var formattedTotal = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    carForm.total.value = formattedTotal;
}

document.getElementById("caltotal").addEventListener("click",calculateTotal);

//for color change
document.getElementById("redButton").addEventListener("click",changeToRed);
document.getElementById("whiteButton").addEventListener("click",changeToWhite);
document.getElementById("blueButton").addEventListener("click",changeToBlue);
document.getElementById("silverButton").addEventListener("click",changeToSilver);
document.getElementById("blackButton").addEventListener("click",changeToBlack);

//for fropdown
var select = document.getElementById("mySelect");
select.size = select.length;