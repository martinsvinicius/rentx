import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsCriteria, ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { getRepository, Repository } from 'typeorm';
import { Car } from '../entities/Car';

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async list(): Promise<Car[]> {
    return await this.repository.find();
  }

  async create(car: ICreateCarDTO): Promise<Car> {
    const newCar = this.repository.create(car);

    return await this.repository.save(newCar);
  }

  async findById(id: string): Promise<Car> {
    return await this.repository.findOne({
      where: { id },
    });
  }

  async findByLicensePlate(licensePlate: string): Promise<Car> {
    return await this.repository.findOne({
      where: { licensePlate },
    });
  }

  async findAllAvailable(criteria?: ICarsCriteria): Promise<Car[]> {
    return await this.repository.find({
      where: { available: true },
    });
  }
}
