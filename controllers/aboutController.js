export const getAbout = (req, res) => {
  console.log("About route hit!");  // debug
  res.json({
    name: "Neha Raghav",
    role: "Software Developer",
    location: "Dashrathpuri, Delhi",
    description: "Full-stack developer building portfolio."
  });
};
