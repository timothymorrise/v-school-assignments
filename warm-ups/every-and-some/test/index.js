const chai = require("chai")
const assert = chai.assert
const {
    everyMimic,
    someMimic } = require("../index.js")

test = {
    case1: [1, 2, "3"],
    case2: ["ben", "jacob", "bob"],
    case3: [1, 2, 3],
    case4: ["ben", "ben", "ben"]
}
    
let numCallback = (item) => {
    return typeof item === "number"
}

let nameCallback = (item) => {
    return item === "ben"
}

describe("Checking if our Mimic functions work properly", () => {
    it("Every function should yield false", () => {
        assert.isFalse("Every Number callback", everyMimic(test.case1, numCallback))
    })
    it("Some function should yield false", () => {
        assert.isFalse("Some Number callback", someMimic(test.case2, numCallback))
    })
    it("Every function should yield true", () => {
        assert.isTrue("Every Number callback", everyMimic(test.case3, numCallback))
    })
    it("Every function should yield true", () => {
        assert.isTrue("Every name callback", everyMimic(test.case4, nameCallback))
    })
    it("Some function should yield true", () => {
        assert.isTrue("Some Number callback", someMimic(test.case1, numCallback))
    })
    it("Some function should yield true", () => {
        assert.isTrue("some name callback", someMimic(test.case2, nameCallback))
    })


})