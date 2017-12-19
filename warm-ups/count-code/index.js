// Write a function that returns the number of times that the 
// string "code" appears anywhere in the given string, except we'll
//  accept any letter for the "d", so "cope" and "cooe" would also count

function countCode(str) {
    output = 0
    for (let i = 0; i < str.length; i++) {
        if (str.substring(i, i + 2) === "co" && str[i+3] === "e") {
            output++;
        }
    }
    return output
}

console.log(countCode("codebabycosecore"));

// OTHER SOLUTION
function countCode2(str) {
    let count = (str.match(/co.e?e/g)).length
    return count
}

console.log(countCode2("codebabycooe"))



