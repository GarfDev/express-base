import { Request } from 'express';

const getRequestIP = (req: Request) => {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
};

export default getRequestIP;
