import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
  date: { type: Date },
  topic: { type: String, required: "Topic cannot be empty" },
  category: String,
  content: String,
});

// in mongoose model allows to export schemas as class. so we can instantiate it
// mongoose try to be smart and put "s" so better give 3rd argument at end
const Report = mongoose.model("Report", reportSchema, "reports"); //(3rd argument is actual name of collection) now object can be created using Report(eg: rep = new Report())



export default Report;
