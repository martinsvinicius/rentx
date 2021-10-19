import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: 'Missing token' });

  const [_, token] = authorization.split('Bearer ');

  try {
    const { sub } = verify(token, '3b51e2a55a09b56cbcf1245061be157d');

    req.userId = sub.toString();

    return next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}
