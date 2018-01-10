const everyMimic = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if ( !(callback(arr[i])) ) {
            return false 
        }
    }
    return true
}

const someMimic = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if ( (callback(arr[i])) ) {
            return true 
        }
    }
    return false
}

module.exports = {
    everyMimic,
    someMimic
}


