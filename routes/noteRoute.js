const express = require("express")
const router = express.Router();
const Note = require("../models/noteModel")

router.route("/create").post((req, res) => {
    const company = req.body.company
    const note = req.body.note
    const newNote = new Note({
        company,
        note
    });

    newNote.save();
})

router.route("/notes").get((req, res) => {
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})

module.exports = router;