//variables
var addOne = document.getElementById("addOne");
var addTwo = document.getElementById("addTwo");
var addSubmit = document.getElementById("addSubmit");
var addOutput = document.getElementById("addOutput");

var subtractOne = document.getElementById("subtractOne");
var subtractTwo = document.getElementById("subtractTwo");
var subtractSubmit = document.getElementById("subtractSubmit");
var subtractOutput = document.getElementById("subtractOutput");

var multOne = document.getElementById("multOne");
var multTwo = document.getElementById("multTwo");
var multSubmit = document.getElementById("multSubmit");
var multOutput = document.getElementById("multOutput");

var clear = document.getElementById("clear");

addSubmit.onclick = function() {
    var num1 = Number(addOne.value);
    var num2 = Number(addTwo.value);
    var sum = num1 + num2;
    addOutput.innerHTML = sum
}

subtractSubmit.onclick = function() {
    var num1 = Number(subtractOne.value);
    var num2 = Number(subtractTwo.value);
    var difference = num1 - num2;
    subtractOutput.innerHTML = difference
}

multSubmit.onclick = function() {
    var num1 = Number(multOne.value);
    var num2 = Number(multTwo.value);
    var product = num1 * num2;
    multOutput.innerHTML = product
}

clear.onclick = function() {
    addOne.value = "";
    addTwo.value = "";
    addOutput.innerHTML = "";
    subtractOne.value = "";
    subtractTwo.value = "";
    subtractOutput.innerHTML = "";
    multOne.value = "";
    multTwo.value = "";
    multOutput.innerHTML = "";  
}

    