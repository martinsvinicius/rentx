import { AppError } from '../../../../errors/AppError';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { UsersRepositoryMock } from '../../repositories/mocks/UsersRepositoryMock';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryMock: IUsersRepository;
let createUserUseCase: CreateUserUseCase;
let userToTest: User;

describe('Authenticate user', () => {
  beforeEach(async () => {
    usersRepositoryMock = new UsersRepositoryMock();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryMock);
    createUserUseCase = new CreateUserUseCase(usersRepositoryMock);

    userToTest = await createUserUseCase.execute({
      name: 'John Mayer',
      email: 'mayer@test.com',
      driverLicense: 'test-license',
      password: '123456',
    });
  });

  it('should be able to authenticate', async () => {
    const tokenResponse = await authenticateUserUseCase.execute({
      email: 'mayer@test.com',
      rawPassword: '123456',
    });

    expect(tokenResponse).toEqual(
      expect.objectContaining({
        token: expect.any(String),
        user: expect.objectContaining({
          name: 'John Mayer',
          email: 'mayer@test.com',
        }),
      })
    );
  });

  it('should not be able to authenticate with wrong email', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'wrong@email.com',
        rawPassword: '123456',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'mayer@test.com',
        rawPassword: 'wrong password',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
