// SERVER
// ------------------------------

// IMPORT PACKAGES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

// IMPORT ROUTES & MODELS
mongoose.connect("mongodb://localhost/crud-store-inventory", )

// 

// middleware
app.use(bodyParser.json());
// app.use(URL, routeVARIABLE)

// LISTENING
app.listen(8080, () => {
    console.log("Server is running on port 8080")
})
