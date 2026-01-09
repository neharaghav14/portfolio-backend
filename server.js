const express = require("express");
const cors = require("cors");

const app = express();

// ✅ CORS ENABLE
app.use(
  cors({
    origin: "*", // abhi testing ke liye
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ ABOUT API
app.get("/api/about", (req, res) => {
  res.json({
    name: "Neha Raghav",
    role: "Frontend Developer",
    message: "About data loaded successfully",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
