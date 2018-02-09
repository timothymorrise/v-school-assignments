// ADMIN / AWARDS -- ROUTE
// ==============================

// IMPORT FROM PACKAGES
const express = require("express");

// IMPORT FROM FILES
const awardModel = require("../../models/awards-model")
const categoryModel = require("../../models/category-model")
const nomineeModel = require("../../models/nominee-model")

// ROUTES
const awardsRouter = express.Router()

awardsRouter.route("/")
    .get((req, res) => {
        awardModel.find(req.query, (err, foundAwards) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err)
            }
            return res.send(foundAwards)
        })
    })
    .post((req, res) => {
        let award = new awardModel(req.body)
        award.save((err, savedAward) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err)
            } else {
                console.log("Post successfully added to the database")
                return res.send(award)
            }
        })
    })

//BY ID
awardsRouter.route("/:id")
    .get((req, res) => {
        let { id } = req.params
        awardModel.findById(id, (err, foundAward) => {
            if (err) {
                console.error(err)
                return res.status(500).send(err)
            } else {
                console.log("Found Award Document at " + id);
                return res.send(foundAward)
            }
        })
    })
    .delete((req, res) => {
        let { id } = req.params
        awardModel.findByIdAndRemove(id, (err, removedAward) => {
            if (err) {
                console.error(err)
                return res.status(500).send(err)
            } else {
                console.log("Removed Award Document at " + id)
                return res.send(removedAward)
            }
        })
    })
    .put((req, res) => {
        let { id } = req.params
        let updatedAward = new awardModel(req.body)
        awardModel.findByIdAndUpdate(id, updatedAward, { new: true }, (err, updatedAward) => {
            if (err) {
                console.error(err)
                return res.status(500).send(err)
            } else {
                console.log("Updated Award Document at " + id)
                return res.send(updatedAward)
            }
        })
    })

awardsRouter.post("/post-all", (req, res) => {
    let award = new awardModel(req.body)
    let { categories } = req.body
    award.save((err, savedAward) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err)
        } else {
            console.log("Awards posted...")
        }
    })
    categoryModel.insertMany(categories, (err, savedCategories) => {
        if (err) {
            console.error(err)
            return res.status(500).send(err)
        } else {
            console.log("Categories posted...")
            categories.map(category => {
                let { nominees } = category
                nomineeModel.insertMany(nominees, (err, savedNominees) => {
                    if (err) {
                        console.error(err)
                        return res.status(500).send(err)
                    } else {
                        console.log("Nominees posted...")
                    }
                })
            })

        }
    })
    return res.send(req.body);
})


// EXPORT
module.exports = awardsRouter