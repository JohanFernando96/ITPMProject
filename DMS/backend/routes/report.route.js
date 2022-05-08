import express from "express";
import {
  getReports,
  addReport,
  getReportById,
  editReportById,
  deleteReport,
} from "../controller/report.controller.js";

const reportRouter = express.Router();

reportRouter.get("/", getReports);
reportRouter.post("/add", addReport);
reportRouter.get("/:id", getReportById);
reportRouter.put("/:id", editReportById);
reportRouter.delete("/:id", deleteReport);



export default reportRouter;
