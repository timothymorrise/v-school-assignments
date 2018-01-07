rs = require("readline-sync")

let cipher = (str, shift) => {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        shift = shift % 26
        if (str.charCodeAt(i) + shift > 122) {
            output += String.fromCharCode((str.charCodeAt(i) + shift - 26));
        } else {
            output += String.fromCharCode((str.charCodeAt(i) + shift));
        }
    }
    return output
}

let string = rs.question("Please enter your string: ");
let shiftStr = rs.question("Please enter a number: ")
let shift = Number(shiftStr)
console.log("Your Ciphered String: " + cipher(string, shift));

