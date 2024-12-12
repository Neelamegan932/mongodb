import express from "express";
import {
  createMovie,
  deleteMovie,
  readMovie,
  updateMovie,
  movieDetail,
} from "../controllers/movies.controllers.js";
const router = express.Router();

//CRUD FUNCTIONALITY METHODS

//creating
router.post("/", createMovie);

//reading
router.get("/", readMovie);

//single movie detail
router.get("/:id", movieDetail);

//updating
router.put("/:id", updateMovie);

//deleting
router.delete("/:id", deleteMovie);

export default router;
