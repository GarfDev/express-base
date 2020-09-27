import { Request } from 'express';

const getRequestIP = (req: Request): string => {
  return req.headers['x-forwarded-for']?.[0] || req.connection.remoteAddress || '';
};

export default getRequestIP;
