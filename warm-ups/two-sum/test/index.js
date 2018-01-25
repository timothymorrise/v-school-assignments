const chai = require('chai')
const assert = chai.assert

const twoSum = require("../index.js")

let test = {
    case1Arr: [1, 2, 3],
    case1Num: 4,
    solution1: [0, 2],

    case2Arr: [1, 3, 4, 7, 8],
    case2Num: 10,
    solution2: [1, 3],
   
    case3Arr: [2, 3, 4, 7],
    case3Num: 8,
    solution3: undefined
}

describe("return two indicies that add up to numbers", () => {
    it("should equal [0, 2]", ()=> {
        assert.deepEqual(twoSum(test.case1Arr, test.case1Num), test.solution1)
    }),
    it("should equal [1, 3]", () => {
        assert.deepEqual(twoSum(test.case2Arr, test.case2Num), test.solution2)
    })
    it("should equal 'undefined' ", () => {
        assert.deepEqual(twoSum(test.case3Arr, test.case3Num), test.solution3)
    })
})