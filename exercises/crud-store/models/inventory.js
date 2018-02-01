// INVENTORY SCHEMA
// ------------------------------

// IMPORT PACKAGES
const mongoose = require("mongoose")
const { Schema, model } = mongoose

// SCHEMA 
const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    returnPolicy: Boolean
})

// EXPORT
module.exports = model("Item", inventorySchema);
