import { Request, Response, NextFunction } from 'express';
import { getRequestIP, getRedisClient } from '@/utils';

const sessionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const cookies = req.signedCookies;
  if (cookies.sid) {
    return next();
  }
  const requestIP = getRequestIP(req);
  const redisClient = getRedisClient();
  redisClient.get(requestIP, (err, value) => {
    if (err) return res.status(500).send({});
    if (!value) return res.status(500).send({});
  });
};

export default sessionMiddleware;
