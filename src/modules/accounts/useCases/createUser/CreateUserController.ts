import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  static async handle(req: Request, res: Response) {
    const data: ICreateUserDTO = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute(data);

    return res.status(201).json(user);
  }
}
