import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async list(): Promise<User[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<User> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({
      where: { email },
    });
  }

  async save(data: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      ...data,
    });

    const savedUser = await this.repository.save(user);

    return savedUser;
  }
}
