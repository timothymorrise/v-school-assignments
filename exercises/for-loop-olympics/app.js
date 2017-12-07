// Preliminaries
// Write a for loop that prints to the console the numbers 0 through 9.
var prelim1 = function() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
} 
prelim1();

// Write a for loop that prints to the console 9 through 0.
var prelim2 = function() {
    for (var i = 9; i >= 0; i--) {
        console.log(i);
    }
}
prelim2();

// Write a for loop that prints these fruits to the console. 
var fruit = ["banana", "orange", "apple", "kiwi"]
var prelim3 = function() {
    for (var i = 0; i < fruit.length; i++) {
        console.log(fruit[i]);
    }
}  
prelim3();  




// Bronse Medal
// Write a for loop that will push the numbers 0 through 9 to an array.
var zeroToNine = []
for (var i = 0; i < 10; i++) {
        zeroToNine.push(i);
}
console.log(zeroToNine);

// Write a for loop that prints to the console only even numbers 0 through 100.
var bronze2 = function() {
    for (var i = 0; i <= 100; i += 2) {
        console.log(i);
    }
}

// Write a for loop that will push every other fruit to an array. 
var fruitPusher = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var fruitPushees = []
for (var i = 0; i < fruitPusher.length; i += 2) {
    fruitPushees.push(fruitPusher[i])
}
console.log(fruitPushees);




//Silver Medal
var peopleArray = [  
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Beiber",
    occupation: "Singer"
  },
  {
    name: "Vladmir Putin",
    occupation: "Politition"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]
// Write a loop that will print out all the names of the people of the people array
var silver1 = function() {
    for (var i = 0; i < peopleArray.length; i++) {
        console.log(peopleArray[i].name);
    }
}
silver1();

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
var peopleNames = []
var peopleOccupations = []
for (var i = 0; i < peopleArray.length; i++) {
        peopleNames.push(peopleArray[i].name);
        peopleOccupations.push(peopleArray[i].occupation);
}
console.log(peopleNames);
console.log(peopleOccupations);

// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to an array starting with "Singer".
var peopleNamesEven = [];
var peopleOccupationsOdd = [];
for (var i = 0; i < peopleArray.length; i += 2) {
    peopleNamesEven.push(peopleArray[i].name); 
    peopleOccupationsOdd.push(peopleArray[i + 1].occupation);
}
console.log(peopleNamesEven, peopleOccupationsOdd);

var peopleNamesEven = [];
var peopleOccupationsOdd = [];


console.log(peopleNamesEven, peopleOccupationsOdd);



// Gold Medal
// Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]
var goldGridOne = [];
for (var i = 0; i < 3; i++) {
    goldGridOne.push([]);
    for (var j = 0; j < 3; j++) {
        goldGridOne[i].push(0);
    }
}
console.log(goldGridOne);

// 2.Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]
var goldGridTwo = [];
for (var i = 0; i < 3; i++) {
    goldGridTwo.push([])
    for (j = 0; j < 3; j++) {
        goldGridTwo[i].push(i);
    }
}
console.log(goldGridTwo);


// 3.Create an array that mimics a grid like the following using for loops:
// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]
var goldGridThree = []
for (var i = 0; i < 3; i++) {
    goldGridThree.push([])
    for (j = 0; j < 3; j++) {
        goldGridThree[i].push(j);
    }
}
console.log(goldGridThree);

// Given a grid like the previous ones, write a for loop that would change every number to an x.
// var grid = [[0, ...],  
//             [0, ...], 

//             [0,...], .. 
var xGrid = function(myGrid) {
    for (var i = 0; i < myGrid.length; i++) {
        for(j =0; j < myGrid[i].length; j++) {
            myGrid[i].splice(j, 1, "x");
        }
    } 
    return myGrid
}
console.log(xGrid(goldGridThree));

