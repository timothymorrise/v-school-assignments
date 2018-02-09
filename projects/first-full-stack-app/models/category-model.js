// CATEOGORY -- MODEL

// IMPORT FROM PACKAGES
const mongoose = require("mongoose");

// 
const categorySchema = new mongoose.Schema(
    {   
        award_name: String,
        order_number: String,
        award_id: 
        {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Award"
        }
    }
)

// EXPORTS
module.exports = mongoose.model("Category", categorySchema)