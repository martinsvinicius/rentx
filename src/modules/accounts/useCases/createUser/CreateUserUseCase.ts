import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserDTO) {
    const userExists = await this.usersRepository.findByEmail(data.email);

    if (userExists) throw new Error('Email already exists');

    const user = this.usersRepository.create(data);

    return user;
  }
}
