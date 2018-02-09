// USER -- ROUTE
// ==============================

// IMPORT FROM PACKAGES
const express = require("express")

// IMPORT FROM FILES -- MODELS
    // model to add later

// ROUTE METHODS
const userRouter = express.Router();

userRouter.route("/user/")
    .get()
    .push()

userRouter.route("/user/:id")
    .get()
    .delete()
    .update()
    
// EXPORT
module.exports = userRouter
