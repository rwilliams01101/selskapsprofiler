// sets the schema for Note

const mongoose = require("mongoose")

const notesSchema = {
    company: String,
    note: String
}

const Note = mongoose.model("Note", notesSchema)

module.exports = Note;