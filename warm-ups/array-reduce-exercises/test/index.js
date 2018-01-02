const chai = require("chai");
const assert = chai.assert;
const { total,
    stringConcat,
    totalVotes,
    shoppingSpree,
    flatten,
    voterReuslts } = require("../index.js")

const test = {
    case1: [1, 2, 3],
    case2: [
        { name: 'Bob', age: 30, voted: true },
        { name: 'Jake', age: 32, voted: true },
        { name: 'Kate', age: 25, voted: false },
        { name: 'Sam', age: 20, voted: false },
        { name: 'Phil', age: 21, voted: true },
        { name: 'Ed', age: 55, voted: true },
        { name: 'Tami', age: 54, voted: true },
        { name: 'Mary', age: 31, voted: false },
        { name: 'Becky', age: 43, voted: false },
        { name: 'Joey', age: 41, voted: true },
        { name: 'Jeff', age: 30, voted: true },
        { name: 'Zack', age: 19, voted: false }
    ],
    case3: [
        { title: "Tesla Model S", price: 90000 },
        { title: "4 carat diamond ring", price: 45000 },
        { title: "Fancy hacky Sack", price: 5 },
        { title: "Gold fidgit spinner", price: 2000 },
        { title: "A second Tesla Model S", price: 90000 }
    ],
    case4: [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
    ]
}

describe("this is a reduce exercise", () => {
    it("should sum to 6", () => {
        assert.equal(total(test.case1), 6);
    });
    it("should be \"123\"", () => {
        assert.equal(stringConcat(test.case1), "123");
    });
    it("should be total number equal to 7", () => {
        assert.equal(totalVotes(test.case2), 7);
    });
    it("should up up to 227005", () => {
        assert.equal(shoppingSpree(test.case3), 227005);
    });
    it("should return a flattened array", () => {
        assert.deepEqual(flatten(test.case4), ["1", "2", "3", true, 4, 5, 6]);
    });
    it("should return the results array", () => {
        assert.deepEqual(voterResults(test.case2), {
            youngVotes: 1,
            youth: 4,
            midVotes: 3,
            mids: 4,
            oldVotes: 3,
            olds: 4
        })
    })
})