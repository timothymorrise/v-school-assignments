
var antiCaps = function(str) {
    var output = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
            output += str[i].toUpperCase();
        } else {
            output += str[i].toLowerCase();
        } 
    } 
    return output;
}
console.log(antiCaps("TTTSHWOIHEeewoieh"));

// var isCaps = function(letter) {
//     return letter = letter.toUpperCase
// }

// var antiCaps2 = function(str) {

// }

