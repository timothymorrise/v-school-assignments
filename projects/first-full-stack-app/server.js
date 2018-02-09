// SERVER 
// ==============================

// IMPORT FROM PACKAGES
const express = require("express");
const app = express();
const bodyParser = require("express")
const uuid = require("uuid")
const mongoose = require("mongoose")

// IMPORT FROM FILES -- ROUTES
const adminRouter = require("./routes/admin/index.js")
const publicRouter = require("./routes/public/index.js")
const ballotRouter = require("./routes/ballot-route.js")


// CONNECT TO DATABASE
mongoose.connect("mongodb://localhost:27017/screaming-at-award-shows", (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
})

// APPLY MIDDLEWARE & ROUTES
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/public", publicRouter)
app.use("/ballots", ballotRouter)

// LISTENING ON PORT
app.listen(8080, () => {
    console.log("Listening on port 8080");
})

// MAP
// ADMIN
    
// PUBLIC
// BALLOTS

// TODO
// set up port and local environment settings