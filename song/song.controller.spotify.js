import express from "express";
import mongoose from "mongoose";
import Song from "./song.model.spotify.js";

const router = express.Router();

// ? adding song

router.post("/song/add", async (req, res) => {
  const newSong = req.body;
  await Song.create(newSong);
  return res.status(201).send({ message: "Song Added Successfully!" });
});

// ? get song list

router.get("/song/list", async (req, res) => {
  const songs = await Song.find();
  return res.status(200).send({ message: "Success", songList: songs });
});

// get song lists by id

router.get("/song/detail/:id", async (req, res) => {
  //    extracting song name form req.id
  const songId = req.params.id;

  // check for mongo name validity
  const isValidId = mongoose.isValidObjectId(songId);

  //   if not valid mongo name, throw error
  if (!isValidId) {
    return res.status(400).send({ message: "Invalid Mongo id." });
  }

  //   find song using songId
  const song = await Song.findOne({ _id: songId });

  //   if not song, throw error
  if (!song) {
    return res.status(400).send({ message: "Song does not exists." });
  }

  //   send response
  return res.status(200).send({ message: "Success", songDetail: song });
});

export default router;
