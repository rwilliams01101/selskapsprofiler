const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const Note = require("./models/noteModel");

mongoose.connect("mongodb+srv://rwilliams01101:codechallenge@selskapsprofiler.6vmcv.mongodb.net/Selskapsprofiler?retryWrites=true&w=majority")

app.use(cors())
app.use(express.json())

// create
app.post("/create", (req, res) => {
    const company = req.body.company
    const note = req.body.note
    const newNote = new Note({
        company,
        note
    });
    newNote.save();
})

// read
app.get("/notes", (req, res) => {
    Note.find()
        .then(foundNotes => res.json(foundNotes))
})

// update
app.put("/put/:id", (req, res) => {
    const updatedNote = {
        note: req.body.note
    }
    Note.findByIdAndUpdate({_id: req.params.id}, {$set: updatedNote}, (req, res, err) => {
        if(!err) {
            console.log("Item Updated")
        } else {
            console.error(err)
        }
    })
})

// delete
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    Note.findByIdAndDelete({_id: id}, (req, res, err) => {
        if(!err) {
            console.log("Item Deleted")
        } else {
            console.error(err)
        }
    })
})

// information
app.listen(3001, function() {
    console.log("Express server is running on port 3001.")
})