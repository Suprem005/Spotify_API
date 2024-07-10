import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://kec:supreme123@cluster0.jgj9clo.mongodb.net/kec-spotify?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default connectDB;
