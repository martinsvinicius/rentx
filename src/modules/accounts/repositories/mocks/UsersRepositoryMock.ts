import { hashSync } from 'bcrypt';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

export class UsersRepositoryMock implements IUsersRepository {
  private repository: User[] = [];

  async list(): Promise<User[]> {
    return this.repository;
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.find((it) => it.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.repository.find((it) => it.id === id);
  }

  async save(data: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      ...data,
      password: hashSync(data.password, 10),
    });

    this.repository = [...this.repository, user];

    return user;
  }
}
