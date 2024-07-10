import express from "express";
import connectDB from "./connect.db.js";
import songRoutes from "./song/song.controller.spotify.js";

const app = express();

// to make app understand json

app.use(express.json());

// database connection
connectDB();

// register routes
app.use(songRoutes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
