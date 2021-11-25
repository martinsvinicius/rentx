import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { v4 } from 'uuid';
import { ICarsCriteria, ICarsRepository } from '../ICarsRepository';
import CategoriesRepositoryMock from './CategoriesRepositoryMock';

export class CarsRepositoryMock implements ICarsRepository {
  cars: Car[] = [];

  constructor() {
    this.init();
  }

  private async init() {
    const category = await new CategoriesRepositoryMock().create({
      name: 'Carros',
      description: 'Carros',
    });

    this.cars.push({
      id: v4(),
      available: true,
      name: 'Fiat Uno',
      brand: 'Fiat',
      category,
      licensePlate: 'ABC-1234',
      createdAt: new Date(),
      dailyRate: 100,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      fineAmount: 0,
    });
  }

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

  async findAllAvailable(criteria?: ICarsCriteria): Promise<Car[]> {
    const availableCars = this.cars.filter((car) => car.available);

    if (criteria) {
      if (criteria.name) {
        availableCars.filter((car) => car.name === criteria.name);
      }

      if (criteria.categoryName) {
        availableCars.filter((car) => car.category.name === criteria.categoryName);
      }

      if (criteria.brand) {
        availableCars.filter((car) => car.brand === criteria.brand);
      }
    }

    return availableCars;
  }
}
