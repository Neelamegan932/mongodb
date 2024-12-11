import express from "express";
import movieRoutes from "./routes/movies.routes.js";
import connectDB from "./lib/db.js";
const app = express();
const port = 8000;
connectDB();
app.get("/", (req, res) => {
  res.json({ message: "Testing express" });
});
app.use("/movies", movieRoutes);
app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
