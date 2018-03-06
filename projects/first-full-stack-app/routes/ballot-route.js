// USER -- ROUTE
// ==============================

// IMPORT FROM PACKAGES
const express = require("express")

// IMPORT FROM FILES -- MODELS
const ballotModel = require("../models/ballot-model")

// ROUTE METHODS
const ballotRouter = express.Router();

ballotRouter.route("/")
.get((req, res) => {
    ballotModel.find(req.query, (err, foundBallot) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        return res.send(foundBallot);
    })
})
.post((req, res) => {
    let ballot = new ballotModel(req.body)
    ballot.save((err, savedBallot) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        } else {
            console.log("Ballot successfully added to the database");
            return res.send(savedBallot);
        }
    })
})

    //BY ID
ballotRouter.route("/:id")
.get((req, res) => {
    let { id } = req.params
    ballotModel.findById(id, (err, foundBallot) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        } else{
            console.log("Found Ballot Document at " + id);
            return res.send(foundBallot);
        }
   })
})
.delete((req, res) => {
    let { id } = req.params
    ballotModel.findByIdAndRemove( id, (err, removedBallot) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        } else {
            console.log("Removed Ballot Document at " + id);
            return res.send(removedBallot);
        }
    })
})
.put((req, res) => {
    let { id } = req.params
    ballotModel.findByIdAndUpdate(id, req.body, {new: true}, (err, updatedBallot) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        } else {
            console.log("Updated Ballot Document at " + id);
            return res.send(updatedBallot);;
        }
    })
})

// EXPORTS
module.exports = ballotRouter