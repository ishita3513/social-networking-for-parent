import mongoose from "mongoose";

export const connectDB = () => {
    const dbURL = process.env.MONGODB_URL || "your-default-mongodb-url";
    return mongoose.connect(dbURL);
};

export const mongoDB = mongoose.connection.on("error", (err) => {
  console.log("Error occurred in DB: ", err);
});
