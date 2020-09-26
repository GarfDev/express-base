import { Request, Response, NextFunction } from "express";
import { getRequestIP } from "utils";

const sessionMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const requestIP = getRequestIP(req);
};
