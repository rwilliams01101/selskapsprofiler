// sets the schema for Note

const mongoose = require("mongoose")

const notesSchema = {
    // organisasjonsnummer
    company: String,
    // note created by user
    note: String
}

const Note = mongoose.model("Note", notesSchema)

module.exports = Note;