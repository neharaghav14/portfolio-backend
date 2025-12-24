// backend/models/About.js
import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  name: String,
  role: String,
  description: String,
  location: String,
  // image: String,  // optional: chahe to hata bhi sakte ho
});

export default mongoose.model("About", aboutSchema);
