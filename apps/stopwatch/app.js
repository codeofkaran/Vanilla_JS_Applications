window.onload = function () {

var seconds = 00;
var tens = 00;
var updateSeconds = document.querySelector("#seconds");
var updateTens = document.querySelector("#tens");
var start = document.querySelector("#btn1");
var stop = document.querySelector("#btn2");
var reset = document.querySelector("#btn3");
var Interval;

start.addEventListener("click",function(){
    
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
})

stop.addEventListener("click",function(){
    clearInterval(Interval)
})

reset.addEventListener("click",function(){
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    updateTens.innerHTML = tens;
    updateSeconds.innerHTML = seconds;
})

function startTimer(){
    tens++;

    if(tens<=9){
        updateTens.innerHTML = "0" + tens;
    }
    if (tens > 9){
        updateTens.innerHTML = tens;
    } 
                  
    if (tens > 99) {
        console.log("seconds");
        seconds++;
        updateSeconds.innerHTML = "0" + seconds;
        tens = 0;
        updateTens.innerHTML = "0" + 0;
    }
                
    if (seconds > 9){
        updateSeconds.innerHTML = seconds;
    }
}
}