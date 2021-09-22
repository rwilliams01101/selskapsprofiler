// sets the schema for Note

const mongoose = require("mongoose")

// defines the structure of document
const notesSchema = {
    // organisasjonsnummer
    company: String,
    // note created by user
    note: String
}

// provides interface for db
const Note = mongoose.model("Note", notesSchema)

module.exports = Note;