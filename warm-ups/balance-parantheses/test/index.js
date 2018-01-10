const chai = require("chai");
const assert = chai.assert;
const balancePara = require("../index.js")

test = {
    case1: "()()",
    case2: "(())",
    case3: "()))",
    case4: ")()(",
    case5: "())(",
    case6: "(dolphinpants",
    case7: ")"
}

describe("balances paranthetical", () => {
    it("should return false", () => {
        assert.isFalse(balancePara(test.case3));
        assert.isFalse(balancePara(test.case4));
        assert.isFalse(balancePara(test.case5));
        assert.isFalse(balancePara(test.case6));
        assert.isFalse(balancePara(test.case7));
    })
    it("should return true", () => {
        assert.isTrue(balancePara(test.case1));
        assert.isTrue(balancePara(test.case2));
    })
})

