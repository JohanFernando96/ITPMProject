import express from "express";
import { getDisasters } from "../controller/disaster.controller.js";

const disasterRouter = express.Router();

//##### getDisaster details
disasterRouter.get("/", getDisasters);

export default disasterRouter;
