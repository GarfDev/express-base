import { Router } from 'express';
// Import Routers
import cartRouter from './cart';

const rootRouter = Router();

rootRouter.use('/cart', cartRouter);

export default rootRouter;
