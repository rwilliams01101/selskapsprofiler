// establishes routes for note

const express = require("express")
const router = express.Router();
const Note = require("../models/noteModel")

// create
router.route("/create").post((req, res) => {
    const company = req.body.company
    const note = req.body.note
    const newNote = new Note({
        company,
        note
    });

    newNote.save();
})

// read
router.route("/notes").get((req, res) => {
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})

module.exports = router;