// MOVIE BALLOT -- MODEL
// ==============================

// IMPORT FROM PACKAGES
const mongoose = require("mongoose")

// SCHEMA
const ballotSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        organization: {
            type: String,
            required: true
        },
        categories: [
            {
                name: String,
                required: true,
                expectedWinner: String,
                favoriteWinner: String,
                screamingWinner: String,
            }
        ]
    }, { timestamps: { createdAt: 'created_at' } }
)

// EXPORTS
module.exports = mongoose.model("Ballot", ballotSchema)