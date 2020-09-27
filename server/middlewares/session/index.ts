import { Request, Response, NextFunction } from 'express';
import uniqid from 'uniqid';
import { getRequestIP, getRedisClient } from '@/utils';

const sessionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const cookies = req.signedCookies;
  if (cookies.sid) return next();
  const requestIP = getRequestIP(req);
  const redisClient = getRedisClient();
  const SID = await redisClient.asyncGet(requestIP);
  if (SID) return next();
  const newSID = uniqid();
  redisClient.set(newSID, requestIP);
  redisClient.set(requestIP, newSID);
  res.cookie('SID', newSID, { signed: true });
  return next();
};

export default sessionMiddleware;
