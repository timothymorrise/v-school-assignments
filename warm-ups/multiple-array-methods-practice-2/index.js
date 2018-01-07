
function sortedDogOwners(arr){
    return arr.filter(petOwner => petOwner.pets.includes("dog")
    ).sort( (a,b) => a.age-b.age
    ); 
}

function arbitraryPractice(petOwners){
    let output = [];
    
    petOwners.filter(petOwner => petOwner.age > 20 &&
        petOwner.pets.every( pet => pet.nickNames.length !== 0) &&
        petOwner.pets.some( pet => pet.type === "dog")
    
    ).forEach( (petOwner) => {
        petOwner.pets.forEach((pet) => {
            output.push(`<li>${pet.name}</li>`);
        });
    });

    return output
};


module.exports = {
    sortedDogOwners,
    arbitraryPractice
}