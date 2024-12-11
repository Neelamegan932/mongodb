import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://neelamegan:bJLtRyWUv5e5r4oB@cluster0.bxi00.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        connectTimeoutMS: 30000, // 30 seconds
        socketTimeoutMS: 30000,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
