// POST MODEL
// ==============================

// IMPORT FROM PACKAGES
const mongoose = require("mongoose");

// SCHEMA
const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true 
         },
         description: {
             type: String,
             required: true
         },
         votes: {
             type: Number,
             required: true
         }
    }
)

// EXPORTS
module.exports = mongoose.model("Post", postSchema);