const twoSum = (arr, num) => {
   
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                return [i, j]
            }
        }
    }
}

twoSum([2, 3, 4, 7, 8], )
module.exports = twoSum