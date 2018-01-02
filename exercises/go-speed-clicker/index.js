
const button = document.getElementById("button");
const clickView = document.getElementById("click-view");

//ASSIGN THE THE COUNTER VALUE
let counter = JSON.parse(sessionStorage.getItem("counter")) || 0;

// SET THE INTIAL VALUE ON THE PAGE TO THE COUNTER
clickView.innerHTML = counter;

//ADD ONE TO THE CURRENT DEALEO AND ALSO SAVE IT IN THE KEY
let plusClick = () => {
    if (timeCount > 0) {
    counter++
    sessionStorage.setItem("counter", JSON.stringify(counter));
    clickView.innerHTML = counter;
    }
}

button.onclick = plusClick;

//ON SCREEN TIMER

const countdown = document.getElementById("timer")

let timeCount = 30300

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
        countdown.innerHTML = setTimer(timeCount);
}
countdown.innerHTML = "00:00:20:00"

let changeTimer = () => {
    timeCount -= 2
    if(counter <=20000) {
        displayTimer();
    }
    (timeCount === 0) ? clearInterval(timer) : null;
}

let timer = setInterval(changeTimer, 2);

//To add, an explosion sound effct on the close



