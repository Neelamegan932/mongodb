import express from "express";
const router = express.Router();

//CRUD FUNCTIONALITY METHODS

//creating
router.post("/", (req, res) => {
  res.send("Create movie lists");
});

//reading
router.get("/", (req, res) => {
  res.send("Get movie lists");
});

//updating
router.put("/:id", (req, res) => {
  res.send("Update a movie");
});

//deleting
router.delete("/:id", (req, res) => {
  res.send("Delete a movie");
});

export default router;
