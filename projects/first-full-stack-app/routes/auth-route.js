// USER AUTHENTICATION -- ROUTE
// ==============================

// IMPORT FROM PACKAGES
const express = require("express");
const passport = require("passport");
const Strategy = require("passport-local");

// IMPORT FROM FILES -- MODELS
const User = require("../models/user-model");

// PASSPORT STRATEGIES
passport.use(new Strategy( (usernameAttempt, passwordAttempt, done) => {
    User.findOne({username: usernameAttempt}, (err, currentUser) => {
        if (err) {
            done(err, false)
        } else if (currentUser === null) {
            done(null, false)
        } else {
            currentUser.auth(passwordAttempt, (isCorrect) => {
                done(null, isCorrect)
            });
        }
    })
}))

// ROUTE METHODS
const authRouter = express.Router();

authRouter.post("/signup", (req, res) => {
    // check if there's an existing docment with provided username
    let query = {username: req.body.username}
    User.findOne(query, (err, foundUsername) => {
        if (err) {
            res.status(500).send({success: false, err});
        } else if (result !== null) {
            res.status(400).send({sucess: false, err: "That username already exists!"})
        } else {
            // safe to create new user
            const newUser = new User(req.body);
            newUser.save((err, user) => {
                if (err) {
                    res.status(500).send({sucess: false, err})
                } else {
                    res.status(201).send({success: true, user})
                }
            })
        } 
    })
})
   
authRouter.use(passport.initialize);

authRouter.post("/login", passport.authenticate("local", {session: false}), (req, res) => {  
    
  });

// EXPORT
module.exports = authRouter
