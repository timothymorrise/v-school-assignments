const express = require ("express");
const bodyParser = require ("body-parser");
const uuid = require ("uuid");

const database = require ("./database.js");

const app = express();
let port = 8089

// middleware
app.use(bodyParser.json());

// routes
app.get("/bounties", (req, res) => {
    console.log("get request processed");
    res.send(database);
});

app.post("/bounties", (req, res) => {
  
    console.log("Post posted");
    let newBounty = req.body
    newBounty._id = uuid();
    database.push(newBounty);
    res.send({
        msg: "Data added successfully",
        data: newBounty
    });
});

app.delete("/coins/:id", (req, res) => {
    let { id } = req.params;
    let found = false;
    for (let i = 0; i < database.length; ) {

    }
})


app.listen(port, () => {
    console.log("Listening on port" + port)
});
