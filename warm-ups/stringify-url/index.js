let stringify = (url, query) => {
    url += "?";
    for(let key in query) {
        url += `${key}=${query[key]}&`;
    }
    return url
}

let endpoint = "http://localhost:8080/monkeys";
let query = {
    color: "black",
    species: "howler"
}

let objectify = (url) => {
    
}