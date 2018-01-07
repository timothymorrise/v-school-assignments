const chai = require("chai");
const assert = chai.assert;
const checkTypes = require("../index.js")

let test = {
    case1: [
        [1,2,3],
        ["a","b","c"],
        [true, true, true]
    ],
    case2: [
        [true,false,true],
        [false,"jimmy",true]
    ],
    case3: [
        [true,false,true],
        [false,false,true]
    ] 
}

describe("checks to see if all values are similar", () => {
    it("should return false", ()=> {
        assert(!checkTypes(test.case1))
    })
    it("should return false", ()=> {
        assert(!checkTypes(test.case2))
    })
    it("should return true", ()=> {
        assert(checkTypes(test.case3))
    })

})
