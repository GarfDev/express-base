import express from "express";
import mongoose from "mongoose";
import redis from "redis";

const port = process.env.PORT || 5000;

/*
 * Initialize Application
 */

const app = express();
/*
 * Initialize Redis Connection
 */

const redisClient = redis.createClient({ url: process.env.REDIS_URL || "" });

redisClient.on("error", (err) => {
  console.log("Redis error: ", err);
});

/*
 * Initialize MongoDB Connection
 */

mongoose.connect(process.env.MONGODB_URL || "", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

/*
 * App listening
 */

app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});
