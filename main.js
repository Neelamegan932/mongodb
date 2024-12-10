import express from "express";
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  res.json({ message: "Testing express" });
});

//CRUD FUNCTIONALITY METHODS
//creating
app.post("/movies", () => {});

//reading
app.get("/movies", () => {});

//updating
app.put("/movies/:id", () => {});

//deleting
app.delete("/movies/:id", () => {});

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
