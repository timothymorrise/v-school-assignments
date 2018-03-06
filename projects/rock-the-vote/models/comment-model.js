// COMMENT -- MODEL 
// ==============================

// IMPORT FROM PACKAGES
const mongoose = require("mongoose");

// SCHEMA
const commentSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        post_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    }
)

// EXPORTs
module.exports = mongoose.model("Comment", commentSchema);