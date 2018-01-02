let findRepeats = (str) => {
    let output = [];
    let arr = str.toLowerCase().split(" ")
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j] && i!==j && arr.includes(arr[i]) && !output.includes(arr[j])) {
                output.push(arr[i]);
            }
        }
    }
    return output;
}



let findRepeats2 = (str) => {
    let output = [];
    let arr = str.toLowerCase().split(" ")
    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr.splice(i)[0];
        currentWord = currentWord.replace(/[^\w]/g, "");
        for(let j = 0; j < arr.length; j++) {
            let checkAgainst= arr[j].replace(/[^w]/g, "")
            if (currentWord === checkAgainst && !output.includes(arr[j])) {
                output.push(arr[i]);
            }
        }
    }
}

let test = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";

console.log(findRepeats(test));

module.exports = findRepeats;