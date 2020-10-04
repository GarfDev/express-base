import express from 'express';
// Import Middlewares
import CORS from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { uploadFileMiddleware } from '@/middlewares';
// Import Utils
import { getRedisClient, getMongooseConn } from '@/utils';
// Import Router
import rootRouter from './routers';

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

app.use(
  CORS({
    origin: 'http://localhost',
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(cookieParser(process.env.SECRET_KEY));
app.use(uploadFileMiddleware);
app.use(morgan('dev'));

/*
 * Register Routers
 */

app.use('/', rootRouter);

/*
 * App listening
 */

app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});
