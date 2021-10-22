import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email);

    if (userExists) throw new AppError('Email already exists');

    const user = this.usersRepository.save(data);

    return user;
  }
}
