// SERVER
// ==============================

// IMPORT FROM PACKAGES
const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const uuid = require("uuid")
const mongoose = require("mongoose")

// IMPORT ROUTES
const postRouter = require("./routes/post-router.js")
const commentRouter = require("./routes/comment-router.js")

// CONNECT TO DATABASE
mongoose.connect("mongodb://localhost:27017/rock-the-vote", (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
})

// APPLY MIDDLEWARE & ROUTES
app.use(bodyParser.json());
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// LISTENING ON PORT 
app.listen(8080, () => {
    console.log("listening on port 8080")
})