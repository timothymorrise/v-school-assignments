function checkTypes(arr) {
    let initial = arr[0][0]
    return arr.every(subArr => 
        subArr.every(value =>
            typeof value === typeof initial
        )
    )  
}

module.exports = checkTypes

function minimalNumberOfCoins(coins, price) {

    var result = 0;

    for (var i = coins.length - 1; i >= 0; i--) {
        let remainder = price % coins[i]
        let divisiblePrice = price - remainder
        result += divisiblePrice / coins[i]   
        price -= divisiblePrice
        ;
        
      ;
    }
  
    // if (price) {
    //   return -1;
    // }


    console.log(result)
  }
  
minimalNumberOfCoins([1, 2, 10], 28)