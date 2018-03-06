// POST - ROUTE
// ==============================

// IMPORT FROM PACKAGES
const express = require("express");

// IMPORT FROM FILES -- MODELS
const postModel = require("../models/post-model");

// ROUTE METHODS
const postRouter = express.Router()

postRouter.route("/")
    .get((req, res) => {
        postModel.find(req.query, (err, foundPost) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            return res.send(foundPost);
        })
    })
    .post((req, res) => {
        let post = new postModel(req.body)
        post.save((err, savedPost) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            } else {
                console.log("Post successfully added to the database");
                return res.send(savedPost);
            }
        })
    })

// BY ID
postRouter.route("/:id")
    .get((req, res) => {
        let { id } = req.params
        postModel.findById(id, (err, foundPost) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            } else {
                console.log("Found Post Document at " + id);
                return res.send(foundPost);
            }
        })
    })
    .put((req, res) => {
        let { id } = req.params
        postModel.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedPost) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            } else {
                console.log("Updated Post Document at " + id);
                return res.send(updatedPost);;
            }
        })
    })
    .delete((req, res) => {
        let { id } = req.params
        postModel.findByIdAndRemove(id, (err, removedPost) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            } else {
                console.log("Removed Post Document at " + id);
                return res.send(removedPost);
            }
        })
    })

// EXPORTS
module.exports = postRouter
