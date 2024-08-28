const express = require("express");
const Note = require("../models/notes.js");

const router = express.Router();

// GET Method
router.get("/", async (req, res) => {
    try {
        const notes = await Note.find({});
        res.json(notes);
    } catch (error) {
        res.status(500).send("Error retrieving notes");
    }
});

module.exports = router;
