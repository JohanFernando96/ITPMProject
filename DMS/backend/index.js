import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // allows to use variables from .env file
import cors from "cors";

// importing routes for reports
import reportRouter from "./routes/report.route.js";

// importing routes for disaster
import disasterRouter from "./routes/disaster.route.js";

// importing donations routes
import donationsRouter from "./routes/donations.route.js";

// importing feedbacks routes
import feedbacksRouter from "./routes/feedbacks.route.js";

// importing Admin routes
import adminrouter from "./routes/Adminroutes.js";

// importing inventories routes
import inventoriesRouter from "./routes/inventories.route.js";

// importing routes for volunteer
import volunteerRouter from "./routes/volunteer.route.js";

// importing routes for awareness
import awarenessRouter from "./routes/awareness.route.js";

dotenv.config(); // load .env file
const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8000; // to get any variable from env file-> use process.env.<name>

//routing is done here

app.use("/donations", donationsRouter);
app.use("/feedbacks", feedbacksRouter);
app.use("/admin",adminrouter);
app.use("/inventories", inventoriesRouter);
app.use("/volunteer", volunteerRouter);
app.use("/reports/Report/", reportRouter);
app.use("/disasters", disasterRouter);
app.use("/awareness", awarenessRouter);

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  });
