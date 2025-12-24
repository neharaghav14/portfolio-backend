// portfolio-backend/controllers/aboutController.js

export const getAbout = (req, res) => {
  res.json({
    name: "Neha Raghav",
    role: "Software Developer",
    location: "New Delhi",
    bio: "Passionate about building modern web applications."
  });
};
