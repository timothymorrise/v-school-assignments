

//
let countdown = document.getElementById("countdown")
let end = document.getElementById("end");

let counter = 20300

let setTimer = (date) => {
    let timer = new Date(date);
   
    let hour = timer.getUTCHours();
    dispHour = hour < 10 ? `0${hour}` : hour
   
    let min = timer.getUTCMinutes();
    dispMin = min < 10 ? `0${min}` : min
  
    let sec = timer.getUTCSeconds();
    dispSec = sec < 10 ? `0${sec}` : sec
   
    let mill = timer.getUTCMilliseconds();
    dispMill = mill < 100 ? `0${String(mill).slice(0,1)}` : String(mill).slice(0, 2)
    
    return `${dispHour}:${dispMin}:${dispSec}:${dispMill}`
}

let displayTimer = () => {
        countdown.innerHTML = setTimer(counter);
}
countdown.innerHTML = "00:00:20:00"

let changeTimer = () => {
    counter -= 2
    if(counter <=20000) {
        displayTimer();
    }
    
    (counter === 0) ? clearInterval(timer) : null;
    if (counter === 0) {
        end.innerHTML = "IT'S THE END OF THE"
    }
}

let timer = setInterval(changeTimer, 2);

//To add, an explosion sound effct on the close


