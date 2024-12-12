import Movie from "../models/movie.model.js";

export const createMovie = async (req, res) => {
  //validating data
  //Here, we imported a constructor called Movie, which will create a row using title and description from a request

  const newMovie = new Movie({
    Title: req.body.Title,
    Description: req.body.Description,
  });
  try {
    const newRecord = await newMovie.save(); //save() method used to save our data in a database
    return res.status(201).json(newRecord); // 201 is a success status code while creating new record
  } catch (error) {
    return res.status(400).json({ message: error.message }); //400 is a bad request code
  }
};

export const movieDetail = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie == null) {
      return res.status(404).json({ message: "Cannot find this movie" }); // 404 is a web page not found error
    } else {
      res.json(movie);
      console.log(movie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message }); //status code 500 is internal server erro
  }
};

export const readMovie = async (req, res) => {
  try {
    const allRecords = await Movie.find();
    res.json(allRecords);
    console.log(allRecords);
    allRecords;
  } catch (error) {
    res.status(500).json({ message: error.message }); //500 is a server error
  }
};

export const updateMovie = async (req, res) => {
  //Using findById method
  /*
  const movie = await Movie.findById(req.params.id);
  if (req.body.Title != null) {
    movie.Title = req.body.Title;
  }
  if (req.body.Description != null) {
    movie.Description = req.body.Description;
  }
  try {
    const updatedMovie = await movie.save();
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Updated movie:", updateMovie);
  }
    */

  //Using findeOneAndUpdate method
  const movie = await Movie.findByIdAndUpdate(
    { _id: req.params.id },
    { Title: req.body.Title, Description: req.body.Description },
    { new: true }
  );
  res.json(movie);
  console.log("Updated movie:", movie);
};

export const deleteMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (movie != null && movie != undefined) {
    let deletedMovie = movie;
    console.log("Movie to be deleted", movie);
    await movie.deleteOne();
    /* or we can delete directly using by id
    await Movie.deleteOne({_id:req.params.id })
    Here, Movie is a collection not a movie found by ID
    */
    res.json(deletedMovie);
    console.log(deletedMovie.Title, "Movie successfully deleted");
  } else {
    res.json({ message: "Enter the valid Id" });
  }
};
