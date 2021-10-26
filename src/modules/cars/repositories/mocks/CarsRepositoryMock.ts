import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '../ICarsRepository';

export class CarsRepositoryMock implements ICarsRepository {
  cars: Car[] = [];

  async list(): Promise<Car[]> {
    return this.cars;
  }

  async create(car: ICreateCarDTO): Promise<Car> {
    const carToCreate = new Car();

    Object.assign(carToCreate, { ...car });

    this.cars = [...this.cars, carToCreate];

    return carToCreate;
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find((car) => car.id === id);
  }

  async findByLicensePlate(licensePlate: string): Promise<Car> {
    return this.cars.find((car) => car.licensePlate === licensePlate);
  }
}
