// BOUNTY HUNTERS -- SERVER
// ==============================

// IMPORT FROM PACKAGES
const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");


// IMPORT ROUTES AND MODELS
const database = require ("./database.js");
const bountyRoute = require("./routes/bounties.js");

//PORT
let port = 8089;

// MIDDLEWARE
app.use(bodyParser.json());

// ROUTES
app.use("/bounties", bountyRoute)

// LISTENING
app.listen(port, () => {
    console.log("Listening on port" + port)
});
