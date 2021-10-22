import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '@modules/accounts/infra/typeorm/entities/User';

export interface IUsersRepository {
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  save(data: ICreateUserDTO): Promise<User>;
}
