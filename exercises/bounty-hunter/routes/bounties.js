// BOUNTIES - ROUTE
// ==============================

// IMPORT 
const express = require("express")
const bountyRoute = express.Router();
const uuid = require ("uuid");
// add the model here eventually
const database = require("../database.js")

// ROUTES
bountyRoute.get("/", (req, res) => {
    console.log("get request processed");
    res.send(database);
});

bountyRoute.post("/", (req, res) => {
    let newBounty = req.body
    console.log(req.body)
    newBounty._id = uuid();
    database.push(newBounty);
    res.send({
        msg: "Data added successfully",
        data: newBounty
    });
    console.log("Post posted");
});

bountyRoute.delete("/:id", (req, res) => {
    // DEFINE VARIABLE/DECONSTRUCTIONS
    let { id } = req.params;
    let found = false;
    // LOOP/UPDATE
    for (let i = 0; i < database.length; i++) {
        if (database[i]._id === id) {
            found = true
            database.splice(i, 1);
            break;
        }
    }
    //
})

bountyRoute.put("/:id", (req, res) => {
    // DEFINE VARIABLES/DECONSTRUCTIONS
    let { id } = req.params;
    let updatedEntry = req.body
    let found = false;
    // LOOP/UPDATE
    for (let i = 0; i < database.length; i++) {
        if (database[i]._id === id) {
            database[i] = object.assign(database[i], updatedEntry);
            updatedEntry = database[i];
            found = true;
            break;
        }
    }
    // RETURN MESSAGE
    if (found) {
        res.send({
            msg: "",
            data: updatedEntry
        })
    } else {
        res.send({
            msg: `Item ${id} not found`
        })
    }
})

// EXPORTS
module.exports = bountyRoute