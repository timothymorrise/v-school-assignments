var removeDupes = function(str) {
    var output = {
        noDupes: "", 
        dupes: ""
    }
    //check each letter in the string
    for (var i = 0; i < str.length; i++) {
        //check if the letter str[i] is in dupes
        if (output.noDupes.indexOf(str[i]) < 0) {
            output.noDupes += str[i];
        } else {
            output.dupes += str [i];
        }
    }
    return output
}

console.log(removeDupes("committee"));