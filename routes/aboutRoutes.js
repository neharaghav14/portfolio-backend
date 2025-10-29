import express from "express";
import About from "../models/About.js";
const router = express.Router();

// Get About info
router.get("/", async (req, res) => {
  try {
    const aboutData = await About.findOne(); // only one entry
    res.json(aboutData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add/Update About data
router.post("/", async (req, res) => {
  try {
    const { name, role, description, location, image } = req.body;

    let about = await About.findOne();
    if (about) {
      about.name = name;
      about.role = role;
      about.description = description;
      about.location = location;
      about.image = image;
      await about.save();
      return res.json({ message: "About updated!", about });
    }

    const newAbout = new About({ name, role, description, location, image });
    await newAbout.save();
    res.json({ message: "About created!", newAbout });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
