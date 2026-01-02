const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// POST contact
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET contacts
router.get("/", async (req, res) => {
  try {
    console.log("GET /api/contacts called");
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error("GET ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// DELETE contact
router.delete("/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
