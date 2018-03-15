// USER AUTHENTICATION -- ROUTE
// ==============================

// IMPORT FROM PACKAGES
const express = require("express")

// IMPORT FROM FILES -- MODELS
const User = require("../models/user-model");

// ROUTE METHODS
const authRouter = express.Router();

authRouter.post("/signup", (req, res) => {
    // check if there's an existing docment with provided username
    let query = {username: req.body.username}
    User.findOne(query, (err, foundUsername) => {
        
    })
})
    
// EXPORT
module.exports = authRouter
