let sortedOfAge= (arr) => {
     return arr.filter((obj) => obj.age > 17
            ).sort((a, b) => 
                a.lastName.localeCompare(b.lastName)
            );
}

// module.exports = sortedOfAge;

arr = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    }, {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    }, {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    }, {
        firstName: "Morty",
        lastName: "Smith",
        age: 13
    }, {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    }
]

const ul = document.getElementById("ul")

let toDisplayInHTML = (arr) => {
    arr.sort((a,b) => a.age - b.age
    ).forEach((obj) => {
        let li = document.createElement("li");
        li.innerHTML = `${obj.firstName} ${obj.lastName} is ${obj.age}`;
        ul.appendChild(li);
    })
}

toDisplayInHTML(arr)
console.log(sortedOfAge(arr));