import express from 'express';
import mongoose from 'mongoose';
// Import Middlewares
import cookieParser from 'cookie-parser';
// Import Utils
import { getRedisClient } from '@/utils';

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

mongoose.connect(process.env.MONGODB_URL || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*
 * Apply Middlewares
 */

app.use(cookieParser(process.env.SECRET_KEY));

app.get('/', (req, res) => {
  res.send('your IP is: ' + req.connection.remoteAddress);
});

/*
 * App listening
 */

app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});
