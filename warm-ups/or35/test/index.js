//IMPORTS
const or35 = require("../index.js")
const chai = require("chai");
const assert = chai.assert;

//TEST CASE OBJECT
const tests = {
    case1: 9,
    case2: 10,
    case3: 8,
}
// console.log(or35(10));
describe("Testing or35 function", function () {
    it("should return true", function() {
        assert.equal(or35(tests.case1), true)
    });
    it("should return true", function() {
        assert.equal(or35(tests.case2), true)
    });
    it("should return false", function() {
        assert.equal(or35(tests.case3), false)
    });    
})