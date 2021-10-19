import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';

interface ILogin {
  email: string;
  rawPassword: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}

  async execute({ email, rawPassword }: ILogin): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new AppError('Access denied: invalid credentials');

    const passwordMatches = await compare(rawPassword, user.password);

    if (!passwordMatches)
      throw new AppError('Access denied: invalid credentials');

    const token = sign({}, '3b51e2a55a09b56cbcf1245061be157d', {
      subject: user.id,
      expiresIn: '7d',
    });

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}
