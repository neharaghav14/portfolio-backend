import express from "express";
import cors from "cors";
import aboutRoutes from "../routes/aboutRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/about", aboutRoutes);

export default app;
