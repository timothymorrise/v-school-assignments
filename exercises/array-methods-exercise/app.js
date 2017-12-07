var fruit = [
    "banana", 
    "apple", 
    "orange", 
    "watermelon"];  

var vegetables = [
    "carrot", 
    "tomato", 
    "pepper", 
    "lettuce"]; 

var stepNum = 1;
var logStep = function() {
    console.log("Step " + stepNum + ":");
    stepNum++;
}

var logArrays = function() {
    if (stepNum < 8) {
        console.log("fruit: ", fruit);  
        console.log("vegetables: ", vegetables);  
        console.log("");
    } else {
        console.log("food: ", food);
        console.log("fruit: ", fruit);  
        console.log("vegetables: ", vegetables);  
        console.log("");
    }
}


logArrays();

// Remove the last item from the vegetable array.
vegetables.pop();    
logStep();
logArrays();

// Remove the first item from the fruit array.
fruit.shift();
logStep();
logArrays();

// Find the index of "orange."
var indexOrange = fruit.indexOf("orange");
logStep();
logArrays();

// Add that number to the end of the fruit array.
fruit.push(indexOrange);
logStep();
logArrays();

// Use the length property to find the length of the vegetable array. Log that to the console.
var lengthVegetable = vegetables.length;
logStep();
console.log("The length of 'vegetables' is " + lengthVegetable);
logArrays();


// Add that number to the end of the vegetable array.
vegetables.push(lengthVegetable);
logStep();
logArrays();

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
logStep();
logArrays();


// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2);
logStep();
logArrays();    

// Reverse your array.
food.reverse();
logStep();
logArrays();

// Log your array as a string to the console.
logStep();
console.log(food.join(","))
logArrays();