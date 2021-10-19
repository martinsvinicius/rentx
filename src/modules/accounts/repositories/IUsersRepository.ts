import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

export interface IUsersRepository {
  list(): Promise<User[]>;
  create(data: ICreateUserDTO): Promise<User>;
}
