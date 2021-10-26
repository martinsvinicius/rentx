import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateCarUseCase {
  constructor(
    @inject('CarsRepository') private carsRepository: ICarsRepository
  ) {}

  async execute(car: ICreateCarDTO) {
    const licensePlateExists = await this.carsRepository.findByLicensePlate(
      car.licensePlate
    );

    if (licensePlateExists) throw new AppError('License plate already exists');

    const createdCar = this.carsRepository.create(car);

    return createdCar;
  }
}
