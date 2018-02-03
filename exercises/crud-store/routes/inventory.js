// INVENTORY ROUTES
// ------------------------------

// IMPORTS
const express = require("express");
const inventoryRoute = express.Router();
const Item = require("../models/inventory.js")

// ROUTES
inventoryRoute.route("/")
    .get((req, res) => {

    })
    .post((req, res) => {

    });

inventoryRoute.route("/:id")
    .get((req, res) => { 

    })
    .put()
    .delete();
// EXPORTS
module.exports = inventoryRoute