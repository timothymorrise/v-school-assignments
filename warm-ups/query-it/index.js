
let collection = [  
    {a: 1, b: 1, c: 2},
    {a: 0, b: 0, c: 2},
    {a: 0, b: 1, c: 0},
    {a: 1, b: 2, c: 2}
];

queryObj = {a: 1, c: 2}

let filterCollection = (query, collection) => {
    return collection.filter(resource => {
       for (let key in collection) {
            if(query[key] !== resource[key]) {
                return false;
            }
       }
       return true
    })
}

console.log(filterDatabase(queryObj, database))
