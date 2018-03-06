// COMMENT -- ROUTER
// ==============================

// IMPORT FROM PACKAGES
const express = require("express");

// IMPORT FROM FILES -- MODELS
const commentModel = require("../models/comment-model")

// ROUTE METHODS
const commentRouter = express.Router();

commentRouter.route("/")
    .get((req, res) => {
        commentModel.find(req.query, (err, foundComment) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            return res.send(foundComment);
        })
    })
    .post((req, res) => {
        let comment = new commentModel(req.body)
        comment.save((err, savedComment) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            } else {
                console.log("Post successfully added to the database");
                return res.send(savedComment);
            }
        })
    })

// BY ID
commentRouter.route("/:id")
    .get((req, res) => {
        let { id } = req.params
        commentModel.findById(id, (err, foundComment) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            } else {
                console.log("Found Post Document at " + id);
                return res.send(foundComment);
            }
        })
    })
    .put((req, res) => {
        let { id } = req.params
        commentModel.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedComment) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            } else {
                console.log("Updated Post Document at " + id);
                return res.send(updatedComment);;
            }
        })
    })
    .delete((req, res) => {
        let { id } = req.params
        commentModel.findByIdAndRemove(id, (err, removedComment) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            } else {
                console.log("Removed Post Document at " + id);
                return res.send(removedComment);
            }
        })
    })

// EXPORTS
module.exports = commentRouter

