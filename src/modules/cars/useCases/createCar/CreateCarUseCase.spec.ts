import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { CarsRepositoryMock } from '@modules/cars/repositories/mocks/CarsRepositoryMock';
import { AppError } from '@shared/errors/AppError';
import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepository: ICarsRepository;

describe('Create car', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryMock();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it('should be able to create a new car', async () => {
    const car: ICreateCarDTO = {
      name: 'Car test',
      brand: 'Brand test',
      categoryId: 'fake-id',
      dailyRate: 200,
      description: 'Car description test',
      fineAmount: 25,
      licensePlate: 'TEST19',
    };

    const createdCar = await createCarUseCase.execute(car);

    expect(createdCar).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: 'Car test',
      })
    );
  });

  it('should not be able to create a car with an existing license plate', async () => {
    const licensePlate = 'TEST-1906';

    const car1: ICreateCarDTO = {
      name: 'Car 1',
      brand: 'Brand test',
      categoryId: 'fake-id',
      dailyRate: 200,
      description: 'Description test',
      fineAmount: 22.2,
      licensePlate,
    };

    const car2: ICreateCarDTO = {
      name: 'Car 2',
      brand: 'Brand test 2',
      categoryId: 'fake-id',
      dailyRate: 250,
      description: 'Description test 2',
      fineAmount: 25.5,
      licensePlate,
    };

    expect(async () => {
      await createCarUseCase.execute(car1);
      await createCarUseCase.execute(car2);
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should create an available car by default', async () => {
    const car: ICreateCarDTO = {
      name: 'Car test',
      brand: 'Brand test',
      categoryId: 'fake-id',
      dailyRate: 200,
      description: 'Car description test',
      fineAmount: 25,
      licensePlate: 'TEST19',
    };

    const createdCar = await carsRepository.create(car);

    expect(createdCar.available).toBe(true);
  });
});
