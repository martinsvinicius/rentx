import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async list(): Promise<User[]> {
    return await this.repository.find();
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({
      where: { email },
    });
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      ...data,
    });

    const createdUser = await this.repository.save(user);

    return createdUser;
  }
}
