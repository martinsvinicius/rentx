import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { CarsRepositoryMock } from '@modules/cars/repositories/mocks/CarsRepositoryMock';
import { ListCarsUseCase } from './ListCarsUseCase';

let carsRepository: ICarsRepository;
let listCarsUseCase: ListCarsUseCase;

describe('List Cars', () => {
  beforeAll(() => {
    carsRepository = new CarsRepositoryMock();
    listCarsUseCase = new ListCarsUseCase(carsRepository);
  });

  it('should be able to list all cars', async () => {
    const result = await listCarsUseCase.execute();

    console.log(result);

    expect(result).toBeDefined();
    // expect(result.length).toBeGreaterThan(0);
  });
});
