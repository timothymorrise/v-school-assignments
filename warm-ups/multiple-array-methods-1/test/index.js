const chai = require("chai");
const assert = chai.assert;
const sortedOfAge = require("../index.js")

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

let expected = [
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    }, 
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47s
    }, , {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    }, 
]

describe("Testing Sorted List", () => {
    it("should return an object sorted", ()=>{
        assert.deepEqual(sortedOfAge(arr), {

        })
    })
})