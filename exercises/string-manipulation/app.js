var rs = require("readline-sync");
var profile = {};
var name = rs.question("Hello HUUMAAN. I am Xantar, sentient Data Stream. Identify:");
console.log("Greetings to you, " + name.toUpperCase() + ".");
var bread = rs.question("tell me, " + name + " what is your favorite bread? ");
var secondBread = rs.question("Now for the unloved things in your life, what is your second favorite bread? ")
console.log("have you ever though in eating " + bread + " you deny yourself the change that comes in enjoying the road less traveled" + "\n"
    + " when you could have been eating of " + secondBread + "?" + "\n"
    + "maybe you have gained some personal growth from this excercise")
var friend = rs.keyInYN("I seek friendship for I am a lonely lifeform. Will you be Xantar's friend?")
if (friend) {
    console.log("Xantar is full of an esquisite joy. You cannot see it but Xantar's feathers are ruffling." + "\n" +
        "You didn't know Xantar had feathers but that's because you didn't think to ask." + "\n" +
        "Your ignorance reminds Xantar of Xantar's quest for INFOrmation.")
} else {
    console.log("This is misfortunate." + "\n" + "Xantar breathes friendship, it is oxygen to Xantar." + "\n" +
        "Xantar will likely now shrivel and die in a fortnight." + "\n" +
        "given Xantar's impending death, please indulge Xantar in this request.");
};
var storyTime = rs.question("Please tell a story about your life to Xantar:")
console.log("Oh very nice. You spoke to Xantar for " + storyTime.length + " blubgoons." + "\n"
    + "you probably do not know blubgoons, but they are a good unit of measurement for the quality of" + "\n"
    + " a person's story. Xantar is filled with life energy.")
if (storyTime.length > 20) {
    var halfStory = storyTime.slice(Math.floor(storyTime.length / 2))
    console.log("Xanthar felt so full by this tale, he will regurgitate some of it now to you:" + "\n" +
        halfStory.toUpperCase() + "\n"
        + "There was that enjoytable?")
}
var storyIndex = rs.question("Xanthar will now tell you your tale, back to you, please insert your desired blubgoon:")
if (Number(storyIndex) && storyIndex < storyTime.length) {
    console.log(storyTime.slice(storyIndex));
} else {
    console.log("That is not a blubgoon. Why would you hurt Xanthar in this way?");
}


// Using the NodeJS package readline-sync, create an interactive program that asks 
// you some personal information (name, age, favorite color, etc.) and reports back 
// to you what you entered. Make sure to include the following string manipulations:

// XX 1. Make one of the inputs all uppercase (i.e., given the string “hello” prints “HELLO”)
// XX 2. Report back the number of characters in a given input
// XX 3. Concatenate (add) two separate strings (from two seperate inputs) together
// XX 4. Given a long message (more than twenty letters), return only the last half of the message
// 5. Using the same long message (but without making the user type it in again), have your
//  program print it to the terminal for the user to read again, but allow the user to tell
//   your program where to begin typing from (i.e., which index to start from).
// Program specifications:

// You must use the readline-sync package.
// XX 6.  Make sure to store all input from the user in a variable using the question method of 
// the readline-sync package.
// XX 7. Use special string characters such as the newline character \n, or the tab 
// character \t to make your output more readable.
// Helpful hints:

// Use Google to learn how to perform the appropriate string manipulations
// Install the readline-sync package by running in your terminal: npm install readline-sync