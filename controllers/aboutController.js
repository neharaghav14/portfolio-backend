// controllers/aboutController.js
export const getAbout = (req, res) => {
  console.log("About route hit!"); // debug log
  res.json({
    name: "Neha Raghav",
    role: "Software Developer",
    location: "New Delhi",
    description: "Passionate about building modern web applications."
  });
};
