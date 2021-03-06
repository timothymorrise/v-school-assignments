//  Write a program that outputs the string representation of numbers from 1 to n.

//  But for multiples of three it should output “Fizz” instead of the number and for the multiples 
// of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

var fizzbuzz = function(n) {
    // create output array
    arr = [];
    // fill the array
    for (var i = 1; i <= n ; i++) {
        if (i % 15 === 0) {
            arr.push("FizzBuzz")
        } else if (i % 5 === 0) {
            arr.push("Buzz")
        } else if (i % 3 === 0) {
            arr.push("Fizz") 
        } else {
        arr.push(i.toString());
        }
    }
    return arr
}

var randomNum = Math.floor(Math.random() * 30)
console.log(fizzbuzz(30))