// USER -- MODEL
// ==============================

// IMPORT FROM PACKAGES
const mongoose = require("mongoose");  

// SCHEMA
const userSchema = new mongoose.Schema({  
    name: String,
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

// EXPORTS
module.exports = mongoose.model("User", userSchema);