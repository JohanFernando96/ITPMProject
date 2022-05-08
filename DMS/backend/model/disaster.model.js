import mongoose from "mongoose";

const disasterSchema = mongoose.Schema({
  date: { type: Date },
  name: { type: String, required: true },
});

const Disaster = mongoose.model("Disaster", disasterSchema, "disaster");
export default Disaster;
