// Write a function that accepts two numbers as parameters, and returns the sum.
var returnSum = function(num1, num2) {
    return num1 + num2
}
console.log(returnSum(3, 5));
// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function largestNum(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(largestNum(4, 200, 534543624));
// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. 
// (Return the string "even" or "odd");
var isEven = function(num) {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(isEven(6));
// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty 
// characters long, return the string concatenated with itself (string + string). If the string is more than twenty 
// characters long, return the first half of the string.
function twenty(str) {
    if (str.length <= 20) {
        return str.concat(str);
    } else {
        return str.slice(0, str.length / 2);
    }
}
console.log(twenty("how many cha"));


// Optional Challenge
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// var
var fibArray = function(n) {
    var arr = [0, 1]
    for (var i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr [ i - 2])
    }
    return arr
}
console.log(fibArray(7));
console.log(fibArray(17));
// Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return 
//     an array with the resulting x values.)
function quadratic(aNum, bNum, cNum) {
        return [
        ((-1 * bNum) + Math.sqrt(Math.pow(bNum, 2) - (4 * aNum * cNum)))
        /
        (2 * aNum),
        ((-1 * bNum) - Math.sqrt(Math.pow(bNum, 2) - (4 * aNum * cNum)))
        /
        (2 * aNum)
        ]
}

console.log(quadratic(2, -5, -3));

// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.
// this requires counting all the characters in the string and then comparing those counts
var mostFreq = function(str) {
   // defines maxChar - the character which is empty but will be the most frequent
    // the strCopunt - the counter object character
    var maxChar = '';
    var strCount = {};
    for (var i = 0; i < str.length; i++) {
        // set the key equal to 1
        var key = str[i];
        // check to see if the key letter is in the counter object, if not it creates the property in the object
        if (!strCount[key]) {
            strCount[key] = 0
        }
        strCount[key]++;
        //now for picking the highest occuring string in the object
        if (maxChar == '' || strCount[key] > strCount[maxChar]) {
            maxChar = key;
        }
    }
    return maxChar
}
    console.log(mostFreq("I am the very model of a modern major General"));
