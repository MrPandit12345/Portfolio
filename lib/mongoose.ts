import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URL || "";
if (!MONGODB_URI) throw new Error("Please add MONGODB_URI to .env");

async function dbConnect() {
  return await mongoose.connect(MONGODB_URI);
}

export default dbConnect;
