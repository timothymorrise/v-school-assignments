// Return true if the given non-negative number is a multiple of 3
// or a multiple of 5. (Hint: Use the % 'mod' operator)

let or35 = function(int) {
    return int % 5 === 0 || int % 3 === 0
}
console.log(or35(10));
module.exports = or35;



