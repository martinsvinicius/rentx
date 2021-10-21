import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AppError } from '@errors/AppError';
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

export class UpdateUserAvatarController {
  static async handle(req: Request, res: Response) {
    const { userId } = req;
    const file = req.file;

    if (!file) throw new AppError('Missing avatar file');

    const avatarFileName = file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({ userId, avatarFileName });

    return res.status(200).json({ message: 'Avatar successfully updated' });
  }
}
