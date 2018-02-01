// BOUNTIES - ROUTE
// ==============================

// IMPORT 
const express = require("express")
const bountyRoute = express.Router();
// add the model here eventually
const database = require("../database.js")

// 

app.get("/bounties", (req, res) => {
    console.log("get request processed");
    res.send(database);
});

app.post("/bounties", (req, res) => {
  
    console.log("Post posted");
    let newBounty = req.body
    newBounty._id = uuid();
    database.push(newBounty);
    res.send({
        msg: "Data added successfully",
        data: newBounty
    });
});

app.delete("/coins/:id", (req, res) => {
    let { id } = req.params;
    let found = false;
    for (let i = 0; i < database.length; ) {

    }
})
// EXPORTS

