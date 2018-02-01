// COPY CAT FUNCTION
// ==============================

// FUNCTION
const deepCopy = (object) => {
    let output = {}
    for (let key in object) {
        output[key] = object[key]
    }
    return output
}

// EXAMPLE/TEST VARIABLES

// 1 
const person = {name: "Joe"}
const copyPerson = deepCopy(person)

console.log(person.name);
console.log(copyPerson.name);

person.name = "Jane"

console.log(person.name);
console.log(copyPerson.name);

// 2
const things = {bouncyBall: "red", pail: "blue", tricycle: "yellow"}
const copyThings = deepCopy(things)

console.log(things);
console.log(copyThings);

things.pail = "ran over by a truck"

console.log(things.pail);
console.log(copyThings.pail);

//
// let deepCopy2 = obj => {...obj};


