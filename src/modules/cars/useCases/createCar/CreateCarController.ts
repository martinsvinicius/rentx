import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCarUseCase } from './CreateCarUseCase';

class CreateCarController {
  static async handle(req: Request, res: Response) {
    const car = req.body as ICreateCarDTO;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const createdCar = await createCarUseCase.execute(car);

    return res.status(201).json(createdCar);
  }
}

export default CreateCarController;
