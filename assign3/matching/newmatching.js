// list of functions
// - clearing the card, and disable any further clicking on the clear
// - turning back to the back, both cards need to be clicked for it to run timeout(1500)
// - cardchange from back to face 


let cardArray = ["1clubs.png", '1hearts.png', '2clubs.png', '2hearts.png', '3clubs.png', '3hearts.png'];

function shuffleArray(array) {
    for (let i = 5; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temporary = array[i];
        array[i] = array[j];
        array[j] = temporary;
    }
}

shuffleArray(cardArray);
console.log(cardArray);

const card0 = document.getElementById("1card");
const card1 = document.getElementById("2card");
const card2 = document.getElementById("3card");
const card3 = document.getElementById("4card");
const card4 = document.getElementById("5card");
const card5 = document.getElementById("6card");

let tracking_numberof = 0;
let tracking_cardno = -1;
let tracking_matching = -1;
let tracking_prev_card = null;

function backtoback(acard, bcard) {
    window.setTimeout(() => {
        acard.src='back.png';
        bcard.src='back.png';
        tracking_numberof = 0;
        tracking_cardno = -1;
        tracking_matching = -1;
      }, 1500);
}


function matching(acard, bcard) {
    window.setTimeout(() => {
        acard.src='clear.png';
        bcard.src='clear.png';

        tracking_numberof = 0;
        tracking_cardno = -1;
        tracking_matching = -1;
        
      }, 1500);
}


function frontcardchange(acard, cardno) {
    //console.log(acard.src);
    if(acard.src.includes('clear.png')) {
        console.log("notclear");
    }
    else {
        if(tracking_cardno!=cardno) {
            tracking_numberof+=1;
        }
        if(tracking_numberof>2) {
            console.log("more than two")
            return 2;
        }
        else{
            acard.src=cardArray[cardno];
        }

        if (tracking_numberof==2) {
            if (tracking_cardno!=cardno&&tracking_matching==cardArray[cardno][0]&&tracking_prev_card!=null) {
                matching(acard, tracking_prev_card);
            }
            else if (tracking_cardno!=cardno&&tracking_matching!=cardArray[cardno]&&tracking_prev_card!=null) {
                backtoback(acard, tracking_prev_card);
            }
        }
        tracking_cardno = cardno;
        tracking_matching = cardArray[cardno][0];
        tracking_prev_card = acard;
        //console.log(cardArray[cardno][0])
    }
}

card0.addEventListener("click", function () { frontcardchange(card0, "0");});
card1.addEventListener("click", function () { frontcardchange(card1, "1");});
card2.addEventListener("click", function () { frontcardchange(card2, "2");});
card3.addEventListener("click", function () { frontcardchange(card3, "3");});
card4.addEventListener("click", function () { frontcardchange(card4, "4");});
card5.addEventListener("click", function () { frontcardchange(card5, "5");});

function reset() {
    window.location.reload();
}

document.getElementById("reseting").addEventListener("click", reset);