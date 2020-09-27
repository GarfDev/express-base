import express from 'express';
import mongoose from 'mongoose';
// Import Middlewares
import cookieParser from 'cookie-parser';
// Import Utils
import { getRedisClient, getMongooseConn } from '@/utils';

const port = process.env.PORT || 5000;
const redis_url = process.env.REDIS_URL || '';

/*
 * Initialize Application
 */

const app = express();

/*
 * Initialize Redis Connection
 */

getRedisClient(redis_url);

/*
 * Initialize MongoDB Connection
 */

getMongooseConn(process.env.MONGODB_URL);

/*
 * Apply Middlewares
 */

app.use(cookieParser(process.env.SECRET_KEY));

/*
 * App listening
 */

app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});
