const inputArray = (arr) => {
    // CONSTRAINT - in case the function is less than 3
    if (arr.length < 3) return null
    // VARIABLE DECLERATIONS
    let count = 0
    let output = []
    // ARRAY LOOP
    for (let i = 0; i < arr.length - 2; i++) {
        let combinedLength = arr[i].length + arr[i + 1].length + arr[i +2].length
        if (count === 0 || combinedLength > count) {
            count = combinedLength
            output = [arr[i], arr[i + 1], arr[i +2]]
        }
    }
    return output
}

// console.log(inputArray(["i", "ii", "iii", "iiii"]))

module.exports = inputArray
