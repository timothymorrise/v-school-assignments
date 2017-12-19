const rs = require("readline-sync");

// COMPONENTS
//      the LOCATION OBJECT
//          called in the individual components of the grid
//      a COMMAND GRID 
//      the GAME LOOP
//          shows the grid and promts and x and y coordinate



// LOCATION OBJECT
//      pick the random coordinates of the ship
//      object contains the coordinates of the ship
//      the ATTACKED method




function isShip() {
    let randomNum = Math.floor(Math.random() * 10);
    return randomNum === 0;
}

function Location() {
    this.isShip = isShip();
    this.isHit = false;
    this.display = "~"
}

// COMMAND GRID
//      a method to create the grid using a for loop
//          create the grid using for loops
//          add to the total ships when you create a ships
//      a method to create a DISPLAY GRID    
function Grid() {
    this.grid = [];
    this.shipsSunk = 0;
    this.totalShips = 0;
}
//      GENGRID
Grid.prototype.genGrid = function () {
    for (let i = 0; i < 10; i++) {
        this.grid.push([]);
        for (let j = 0; j < 10; j++) {
            let location = new Location();
            if (location.isShip) {
                this.totalShips++;
            }
            this.grid[i].push(location);
        }
    }
}
//      DISPLAY GRID METHOD
Grid.prototype.displayGrid = function () {
    for (let i = 0; i < this.grid.length; i++) {
        let row = [];
        for (let j = 0; j < this.grid[i].length; j++) {
            row.push(this.grid[i][j].display);
        }
        console.log(row.join(" "));
    }
}
//      ATTACK METHOD
Grid.prototype.attack = function (x, y) {
    x = Number(x);
    y = Number(y);
    let coord = this.grid[y][x];
    coord.isHit = true;
    if (coord.isShip) {
        coord.display = "X"
        this.totalShips--
    } else {
        coord.display = "M"
    }
}

let game = new Grid();
game.genGrid();


//GAME LOOP HELPER FUNCTIONS

function validateAttack(x, y) {
    x = Number(x);
    y = Number(y);
    return game.grid[y][x].isHit;
}


// GAME LOOP

console.log("Welcome to battleship!")
game.displayGrid();
while (true) {
    let xLimit = game.grid.length - 1;
    let yLimit = game.grid[0].length - 1;
    let x = rs.keyIn("Choose an X coordinate between 0 and " + xLimit + "\n", { limit: "$<0-" + xLimit + ">" });
    let y = rs.keyIn("Choose an Y coordinate between 0 and " + yLimit + "\n", { limit: "$<0-" + yLimit + ">" });
    if (validateAttack(x, y)) {
        console.log("sorry this is an invalid coordinate")
        continue;
    }
    game.attack(x, y);
    game.displayGrid(x, y);
    if (game.totalShips === 0) {
        break;
    }
}

//add possibilities that ships are set number and randomized in coordinates.
//add grid display
// what do i need
//  i need to change the way the program generates ships based on a few things
//  i need to make it so that the initial ships come with certain coordinates 
// and only show up at those cooridnates
// i also need to limit the nubmer of ships. 
// do i make this a function intwined in the grid or the object.

