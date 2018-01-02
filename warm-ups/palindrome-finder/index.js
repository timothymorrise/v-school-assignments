let isPalindrome = (str) => {
    str = str.toLowerCase();
    arr = str.match(/[a-z]/g);
    let counter = 0
    let endIndex = arr.length - 1
   
    for (let i = 0; i < arr.length; ++i) {
            (arr[i] === arr[endIndex - i]) ? null : counter++;    
    }
    return (counter === 0) ? true : false;
}


let isPalindrome2 = (str) => {
    str = str.replace(/[^A-z]/g, "");
    for (let i = 0; i < str.length / 2; ++i) {
        let first = str[i].toLowerCase();
        let last = str[str.length - 1 -i].toLowerCase();
        if (first !== last) {
         return false;
        }
    }
    return true;
}

funcList = {
    isPalindrome,
    isPalindrome2,
}

module.exports = funcList;
