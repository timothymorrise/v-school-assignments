// BOUNTY HUNTERS -- SERVER
// ==============================

// IMPORT FROM PACKAGES
const express = require ("express");
const bodyParser = require ("body-parser");
const uuid = require ("uuid");

// IMPORT ROUTES AND MODELS
const database = require ("./database.js");

const app = express();
let port = 8089

// MIDDLEWARE
app.use(bodyParser.json());

// routes


// LISTENING

app.listen(port, () => {
    console.log("Listening on port" + port)
});
