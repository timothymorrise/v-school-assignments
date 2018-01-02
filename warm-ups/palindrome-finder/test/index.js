const chai = require("chai")
const assert = chai.assert
const {isPalindrome, isPalindrome2} = require("../index.js")

test = {
    case1: "Star Rats!",
    case2: "palindrome",
    case3: "I madam, I made radio! So I dared! Am I mad?? Am I?!",
}

describe("Checks if a string is a palindrome", ()=> {
    it("should return true", ()=> {
        assert(isPalindrome(test.case1));
        assert(isPalindrome(test.case3));
    })
    it("should return false", ()=> {
        assert(!isPalindrome(test.case2));
    })
    it("should return true", ()=> {
        assert(isPalindrome2(test.case1));
        assert(isPalindrome2(test.case3));
    })
    it("should return false", ()=> {
        assert(!isPalindrome2(test.case2));
    }) 
})