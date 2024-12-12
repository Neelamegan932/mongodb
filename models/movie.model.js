import { model, Schema } from "mongoose";

//Writing the schema
//Schema is structure that defines tables, columns, and relation between tables in a database
//Here, we created a structure of a sample table with columns of title and description

const schema = new Schema({
  Title: {
    type: String,
    required: true,
    unique: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

const Movie = model("Movie", schema);

export default Movie;
