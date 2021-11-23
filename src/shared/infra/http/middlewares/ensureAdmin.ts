import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';

export async function ensureAdmin(
  req: Request,
  _: Response,
  next: NextFunction
) {
  const { userId } = req;

  const usersRepository = container.resolve(UsersRepository);

  const user = await usersRepository.findById(userId);

  if (!user) {
    throw new AppError('User not found!', 404);
  }

  if (!user.isAdmin) {
    throw new AppError('User is not an admin!', 403);
  }

  return next();
}
