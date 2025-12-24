// portfolio-backend/server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aboutRoutes from "./routes/aboutRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio backend running!" });
});

// About routes
app.use("/about", aboutRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
