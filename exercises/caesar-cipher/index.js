
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
console.log(cipher("zyx", 3));

