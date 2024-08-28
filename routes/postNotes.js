const express = require("express");
const multer = require("multer");
const Note = require("../models/notes.js");

const router = express.Router();

// POST Method
router.post("/", multer().none(), async (req, res) => {
    try {
        // console.log("Request body:", req.body);  // Log para ver qué datos llegan
        const numOfDocs = await Note.countDocuments({});
        // console.log("Number of documents:", numOfDocs);
        const newNote = new Note({
            id: (numOfDocs + 1).toString(),
            description: req.body.newNotes
        });
        // console.log("New note:", newNote);
        await newNote.save();
        res.json("Added Successfully");
    } catch (error) {
        // console.error("Error:", error);  // Log del error para ver detalles
        res.status(500).send("Error adding note");
    }
});

module.exports = router;
