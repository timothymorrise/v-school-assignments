// USER -- ROUTE
// ==============================

// IMPORT FROM PACKAGES
const express = require("express")

// IMPORT FROM FILES -- MODELS
const ballotModel = require("../models/category-model")

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
    let award = new ballotModel(req.body)
    award.save((err, savedBallot) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        } else {
            console.log("Post successfully added to the database");
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
            console.log("Found Category Document at " + id);
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
            console.log("Removed Category Document at " + id);
            return res.send(removedBallot);
        }
    })
})
.put((req, res) => {
    let { id } = req.params
    let updatedCategory = new ballotModel(req.body)
    ballotModel.findByIdAndUpdate(id, updatedBallot, {new: true}, (err, updateBallot) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        } else {
            console.log("Updated Category Document at " + id);
            return res.send(updateBallot);;
        }
    })
})

// EXPORTS
module.exports = ballotRouter