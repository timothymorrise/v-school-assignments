// TEST
// ------------------------------

// CHAI
const chai = require ("chai");
const assert = chai.assert

// IMPORT FUNCTION
const inputArray = require("../index.js")

// TEST DATA CASES
let test = {
    case1: ["this", "is", "an", "array"],
    case2: ["i", "ii", "iii", "longest", "longest", "longest", "iii", "ii", "i"],
    case3: ["too", "short"],
    solution1: ["is", "an", "array"],
    solution2: ["longest", "longest", "longest"],
    solution3: null,
}

// TEST DEPENCENCIES
describe("Testing input array function", () => {
    it("should return \"is, an, array\"", ()=> {
        assert.deepEqual(inputArray(test.case1), test.solution1);
    })
    it("should return \"longest, longest, longest\"", ()=> {
        assert.deepEqual(inputArray(test.case2), test.solution2);
    })
    it("should return \"null\"", ()=> {
        assert.deepEqual(inputArray(test.case3), test.solution3);
    })
})

// HAPPY HUNTING!!