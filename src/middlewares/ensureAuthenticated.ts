import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '@errors/AppError';

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) throw new AppError('Missing token', 401);

  const [_, token] = authorization.split('Bearer ');

  try {
    const { sub } = verify(token, '3b51e2a55a09b56cbcf1245061be157d');

    req.userId = sub.toString();

    return next();
  } catch (error) {
    throw new AppError(error.message, 401);
  }
}
