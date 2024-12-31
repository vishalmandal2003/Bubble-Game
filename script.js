var timer=60;
var score=0;
var hitrn=0;

function increasedScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function decreasedScore(){
    score -= 10;
    document.querySelector("#scoreval").textContent=score;
}



function getNewHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makebubble(){
var clutter = "";

for (var i = 0; i <= 101; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}


//set timer//

function runTimer() {
    var timerint=setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
            clearInterval(timerint);
        }
    } ,1000)
}

document.querySelector("#pbtm").addEventListener("click", function(details) {
    var clickedNumber = Number(details.target.textContent);
    console.log(clickedNumber);
    if (clickedNumber == hitrn) {
        increasedScore();
        makebubble();
        getNewHit();

    }else{
        decreasedScore();
        makebubble();
        getNewHit();
    }
});





runTimer();
makebubble();
getNewHit();

