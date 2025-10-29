import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  name: String,
  role: String,
  description: String,
  location: String,
  image: String
});

export default mongoose.model("About", aboutSchema);
