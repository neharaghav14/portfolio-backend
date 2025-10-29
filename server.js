import express from "express";
import mongoose from "mongoose";
import aboutRoutes from "./routes/aboutRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connect
mongoose
  .connect(
    "mongodb+srv://kusum14032000_db_user:JdhqEuqm8gBgc6Z6@portfoliocluster.atjdlyo.mongodb.net/portfolioDB?retryWrites=true&w=majority&appName=portfolioCluster"
  )
  .then(() => console.log("✅ MongoDB connected!"))
  .catch((err) => console.log("❌ DB Error:", err));

// ✅ Routes
app.use("/about", aboutRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("Server Running ✅");
});

// ✅ Start Server
app.listen(5000, () => {
  console.log("🚀 Server started on port 5000");
});
