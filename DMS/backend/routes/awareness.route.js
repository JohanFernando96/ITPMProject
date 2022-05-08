import express from "express";
import { getPosts, addPost, getPostById, editPostById, deletePost } from "../controller/awareness.controller.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/add", addPost);
postRouter.get("/:id", getPostById);
postRouter.put("/:id", editPostById);
postRouter.delete("/:id", deletePost);



export default postRouter;
