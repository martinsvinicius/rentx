import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IUpdateUserAvatar } from '../../dtos/IUpdateUserAvatar';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ userId, avatarFileName }: IUpdateUserAvatar) {
    const user = await this.usersRepository.findById(userId);

    if (!user) throw new AppError('User does not exists', 404);

    user.avatar = avatarFileName;
    await this.usersRepository.save(user);
  }
}
