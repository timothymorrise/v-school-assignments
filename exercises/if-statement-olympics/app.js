// Preliminaries
// Write an if statement that prints "is greater than" if 5 is greater than 3
var prelim1 = 5 > 3 ? console.log("is greater than") : "" ;
prelim1
// Write an if statement that prints "is the length" if the length of "cat" is 3
var prelim2 = "cat".length === 3 ? console.log("is the length") : "" ;
prelim2
// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
if ("cat" === "dog") {
} else {
    console.log("not the same")
}



// Bronse Medal
// Write an if statement that prints <theNameOfThePerson> + is allowed to go to the movie if they are old enough, and the 
// opposite if they are not older than 18.
var person = {  
    name: "Bobby",
    age: 12
  }
if (person.age > 18) {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is NOT allowed to go to the movie")
}
// Using that same object, only allow them into the movie if their name starts with "B"
if (person.name[0] === "B" || person.name[0] === "b") {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is NOT allowed to go to the movie")
}
// Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
if ((person.name[0] === "B" || person.name === "b") && person.age > 18) {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is NOT allowed to go to the movie")
}




// Silver Medal
// Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals
// "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else {
    console.log("not equal at all");
}
// Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4
// OR!!!
// 3 * 4 is greater than 10 and 5 plus 10 is greater than 10.
if ( ( 1 <= 2 && 2 === 4) 
    ||
     (((3 * 4) > 10) && (5 + 10) > 10)) {
       console.log("yes");
}




// Gold Medal
// Gold may take some googling! 
// 1. Write an if statement that checks to see if "dog" is a string 
if (typeof "dog" === "string") {
    console.log("it's a string");
}
// 2. Write an if statement that checks to see if "true" is a boolean
if (typeof "true" === "boolean") {
    console.log("it's a boolean");
} else {
    console.log("not a boolean");
}
// 3. Write an if statement that checks to see if a variable has been defined or not 
if (typeof theMeaningOfLife !== 'undefined') {
    console.log(42);
} else {
    console.log("keep searching, Arthur")
}
// 4. Write an if statement comparing letters to numbers using < and >. Try to figure out what letters are going to be "greater 
// than" other numbers or letters. 
if ("p".charCodeAt(0) > 900) {
    console.log("the letter is greater")
} else {
    console.log("the number is greater")
}
// 5. Write a switch statement that returns a number spelled out ("seven" vs 7) for the numbers one through ten.
var writtenNumber = function(numDigit) {
    switch (numDigit) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two"; 
        case 3:
            return "three"; 
        case 4:
            return "four"; 
        case 5:
            return "five"; 
        case 6:
            return "six"; 
        case 7:
            return "seven"; 
        case 8:
            return "eight"; 
        case 9:
            return "nine"; 
        case 10:
            return "ten"; 
        default:
            return "Invalid Number!";
    }
}  
console.log(writtenNumber(5));