const chai = require("chai");
const assert = chai.assert;
const {
    sortedDogOwners,
    arbitraryPractice
} = require("../index.js");


let test = {
    case1: [
        {
            firstName: "Sarah",
            lastName: "Palin",
            age: 47,
            pets: ["dog", "cat"]
        }, {
            firstName: "Frank",
            lastName: "Zappa",
            age: 12,
            pets: ["dog"]
        }, {
            firstName: "Rick",
            lastName: "Sanchez",
            age: 78,
            pets: ["cat", "parrot"]
        }, {
            firstName: "Morty",
            lastName: "Smith",
            age: 13,
            pets: ["cat", "parrot", "dog"]
        }, {
            firstName: "Kyle",
            lastName: "Mooney",
            age: 27,
            pets: ["dog"]
        }],

    case2: [
        {
            firstName: "Sarah",
            lastName: "Palin",
            age: 47,
            pets: [
                {
                    name: "Alfred",
                    type: "dog",
                    nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
                }, {
                    name: "Charles",
                    type: "cat",
                    nickNames: ["Charley"]
                }, {
                    name: "Bark Obama",
                    type: "dog",
                    nickNames: ["Barack", "Mr. President"]
                }, {
                    name: "Christopher George Latore Wallace",
                    type: "dog",
                    nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
                }

            ]
        }, {
            firstName: "Frank",
            lastName: "Zappa",
            age: 12,
            pets: [
                {
                    name: "Howard",
                    type: "dog",
                    nickNames: []
                }, {
                    name: "Bear",
                    type: "dog",
                    nickNames: []
                }
            ]
        }, {
            firstName: "Rick",
            lastName: "Sanchez",
            age: 78,
            pets: [
                {
                    name: "Bird Person",
                    type: "bird",
                    nickNames: ["Phoenixperson"]
                }, {
                    name: "Krombopulos Michael",
                    type: "Gromflomite",
                    nickNames: ["Assassin man"]
                }, {
                    name: "Squanchy",
                    type: "Cat-person",
                    nickNames: ["Squanch", "Smarf", "Thunder Cat"]
                }

            ]
        }, {
            firstName: "Morty",
            lastName: "Smith",
            age: 23,
            pets: [
                {
                    name: "Morty Jr.",
                    type: "Gazorpazorp",
                    nickNames: ["Gwendolyn Jr."]
                }, {
                    name: "Snuffels",
                    type: "dog",
                    nickNames: ["Snowball"]
                }

            ]
        }
    ],
}

describe("testing array methods", () => {
    it("should return array of dogs sorted by age", () => {
        assert.deepEqual(sortedDogOwners(test.case1),
            [
                {
                    firstName: 'Frank',
                    lastName: 'Zappa',
                    age: 12,
                    pets: ['dog']
                },
                {
                    firstName: 'Morty',
                    lastName: 'Smith',
                    age: 13,
                    pets: ['cat', 'parrot', 'dog']
                },
                {
                    firstName: 'Kyle',
                    lastName: 'Mooney',
                    age: 27,
                    pets: ['dog']
                },
                {
                    firstName: 'Sarah',
                    lastName: 'Palin',
                    age: 47,
                    pets: ['dog', 'cat']
                }
            ]
        );
    })
    it("should return a series of pet owners as '<li>'", () => {
        assert.deepEqual(arbitraryPractice(test.case2),
            [
                '<li>Alfred</li>',
                '<li>Charles</li>',
                '<li>Bark Obama</li>',
                '<li>Christopher George Latore Wallace</li>',
                '<li>Morty Jr.</li>',
                '<li>Snuffels</li>'
            ])
    })
})