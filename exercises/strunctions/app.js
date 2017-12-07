// String Methods

//ACRYONYM GENERATOR 
// uses:
//.concat
// .slice() - returns the value at a specific index for the chosen number of characters
// .split() - split - divides strings into an array of subset strings
//.toUpperCase()
var makeAcronym = function(str) {
    var acronym = "";
    var split = str.split(" ");
    for (var i = 0; i < split.length; i++) {
        var initial = "";
        initial = split[i].slice(0, 1);
        acronym = acronym.concat(initial,".")
    }
    return acronym.toUpperCase();
}
console.log(makeAcronym("very special children holding over ovens location"))

//WOWIFYER
//  - makes all your WOWs proportionate to your enthusiasm to use WOW in the first place
// uses:
// .match() - checking a string in a pattern
// .replace() - replaces the first value with a second value in a string
// .toLowerCase - 
var wowify = function(str) {
    var wows = str.match(/wow/gi);
    var wowow = wows.join("");
    for (var i = 0; i < wowow.length; i++) {
        if (wowow[i] === "w") {
            wowow = wowow.replace(wowow[i], "W")
        } else if (wowow[i] === "O") {
            wowow = wowow.replace(wowow[i], "o")
        }
    }
    str = str.replace(/wow/gi, wowow)
    return str
}
console.log(wowify("wow I didn't know if this would work but Wow"));

//WHICH NUMBER IS MY WORD
//- returns the word in a string at a certain number, & it's index in the string
//uses:
// .split()
// .indexOf
// .lastIndexOf
var wordIndex = function(str, num) {
    //store str in an array
    var arr = str.split(" ");
    var word = arr[num-1];
    //use indexOf to return the index location of the word in an original string
    var firstIndex = str.indexOf(word);
    var lastIndex = str.lastIndexOf(word);
    return "word: " + word + " -- first index: " + firstIndex + " -- last index: " + lastIndex};
console.log(wordIndex("the rain in spain stays mainly in the plain", 1));


// SIMMPLE SUBSTRING
var substringer = function(str, index, length) {
    return str.substr(index, length);
}
// .substr() - returns a part of a string from inside
console.log(substringer("buddy I don't know", 4, 4));