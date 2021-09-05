const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const Note = require("./models/noteModel");

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://rwilliams01101:codechallenge@selskapsprofiler.6vmcv.mongodb.net/Selskapsprofiler?retryWrites=true&w=majority")

app.use("/", require("./routes/noteRoute"))

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    Note.findByIdAndDelete({_id: id}, (req, res, err) => {
        if(!err) {
            console.log("Item Deleted")
        } else {
            console.log("Error!!")
        }
    })
})

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})