const rs = require("readline-sync")


// A function that adds two numbers and returns the result
let addition = function(num1, num2) {
    return num1 + num2;
}
// A function that multiplies two numbers and returns the resultl
let mulitply = function(num1, num2) {
    return num1 * num2;
}
// A function that divides two numbers and returns the result
let divide = function(num1, num2) {
    return num1 / num2;
}
// A function that subtracts two numbers and returns the result
let subtract = function(num1, num2) {
    return num1 - num2;
}
let num1 = rs.question("Please enter your first number (store that number): ");
let num2 = rs.question("Please enter your second number (store that number): ");
let operator = rs.question("Please enter the operation to perform: add, sub, mul, div: ")
let arithmatics = function(str, n1, n2) {
    switch(str) {
        case "add":
            return addition(n1, n2);
            break;
        case "sub":
            return subtract(n1, n2);
            break;
        case "mul":
            return mulitply(n1, n2);
            break;
        case "div":
            return divide(n1, n2);
            break;
    }
}

console.log("The result is: " + arithmatics(operator, num1, num2))
