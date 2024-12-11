export const createMovie = (req, res) => {
  console.log(req.body);
  return res.json(req.body);
};

export const readMovie = (req, res) => {
  res.send("Get movie lists");
};

export const updateMovie = (req, res) => {
  res.send("Update a movie");
};

export const deleteMovie = (req, res) => {
  res.send("Delete a movie");
};
