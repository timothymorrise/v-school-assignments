let balancePara = (str) => {
    let arr = str.split("").filter((letter) => (letter === ")" || (letter === "(")))
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "(") {
            count++;
        } else if (arr[i] === ")") {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    return count === 0;
}
balancePara("( ( ) ) )")

module.exports = balancePara