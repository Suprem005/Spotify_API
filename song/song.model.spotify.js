import mongoose from "mongoose";

// setting rule/schema

const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  genre: String,
  duration: Number,
  yearOfRelease: Number,
});

// create table/model

const Song = mongoose.model("Song", songSchema);
export default Song;
