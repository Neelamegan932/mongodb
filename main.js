import express from "express";
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  res.json({ message: "Testing express" });
});
app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
