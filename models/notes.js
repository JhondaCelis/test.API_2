const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});


const Note = mongoose.model("Note", NoteSchema, "centroMedico_1collection");
module.exports = Note;
