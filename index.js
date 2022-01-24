window.onload = function(){
    var tens = 00;
    var seconds = 00;
    var mySeconds = document.getElementById("seconds");
    var myTens = document.getElementById("tens");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(start , 10);
    }
    buttonStop.onclick = function(){
        clearInterval(Interval);
    }
    buttonReset.onclick = function(){
        tens = "00";
        seconds = "00";
        mySeconds.innerHTML = seconds;
        myTens.innerHTML = tens;
    }

    function start(){
        tens++;
        if (tens<=9){
            myTens.innerHTML = "0"+ tens;
        }
        if(tens > 9){
            myTens.innerHTML = tens;
        }
        if(tens > 99){
            // console.log("seconds");
            seconds++;
            mySeconds.innerHTML = "0"+seconds;
            tens = 00;
            myTens.innerHTML = "0"+0;

        }
        if(seconds >9){
            mySeconds.innerHTML = seconds;
        }

    }
}