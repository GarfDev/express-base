import { Request, Response, NextFunction } from 'express';
import { getRequestIP, getRedisClient } from '@/utils';
import CartModel from '@/models/Cart';
import { maxAge } from '@/constants';
import initSession from './initSession';
import initCart from './initCart';

const sessionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const cookies = req.signedCookies;
  let currentSessionID = cookies.sessionID;
  let currentCartID = cookies.cartID;
  // Restore or Refresh SessionID
  if (!currentSessionID) {
    const requestIP = getRequestIP(req);
    const redisClient = getRedisClient();
    // Get previous session if have
    currentSessionID = await redisClient.asyncGet(requestIP);
    // Initialize a Session if not found
    if (!currentSessionID) {
      currentSessionID = await initSession(requestIP);
    }
    res.cookie('sessionID', currentSessionID, { signed: true, maxAge: maxAge.SESSION });
  }
  // Restore or Refresh CartID
  if (!currentCartID) {
    let cart = await CartModel.findOne({ sessionID: currentSessionID });
    if (!cart) {
      currentCartID = await initCart(currentSessionID);
    } else {
      currentCartID = cart._id;
    }
    res.cookie('cartID', currentCartID, { signed: true, maxAge: maxAge.CART });
  }
  return next();
};

export default sessionMiddleware;
