// SQUARE 
var square = document.getElementById("square");

// The square's color will change as follows:

// Red when the mouse button is held down over the square
square.onmousedown = function() {
    square.style.backgroundColor = "red";
}

// Yellow when the mouse button is let go over the square
square.onmouseup = function() {
    square.style.backgroundColor = "yellow";
}

// Green when the mouse is double clicked in the square
square.ondblclick = function() {
    square.style.backgroundColor = "green";
}

// Blue when the mouse hovers over the square
square.onmouseover = function() {
    square.style.backgroundColor = "blue";
}

square.onmouseleave = function() {
    square.style.backgroundColor = "black"
}
// Orange when the mouse scroll is used somewhere in the window (not just over the square).
window.onwheel = function() {
    square.style.backgroundColor = "orange";
}

var restoreBlack = function() {
    if (square.style.backgroundColor === "orange") {
        square.style.backgroundColor = "black";
    }
}
window.setInterval(restoreBlack, 2000) 

//color keys
window.onkeyup = function(event) {
    console.log(event);
    switch (event.key) {
        case "r":
        square.style.backgroundColor = "red"
        break;
        case "y":
        square.style.backgroundColor = "yellow"
        break;
        case "b":
        square.style.backgroundColor = "blue"
        break;
        case "g":
        square.style.backgroundColor = "green"
        break;
        case "o":
        square.style.backgroundColor = "orange"
        break;
        case "o":
        square.style.backgroundColor = "orange"
        break; 
        case " ":
        square.style.backgroundColor = "black"
        break;
    }
} 


