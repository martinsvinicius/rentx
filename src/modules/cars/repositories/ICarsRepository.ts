import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { Car } from '../infra/typeorm/entities/Car';

export interface ICarsCriteria {
  name?: string;
  categoryName?: string;
  brand?: string;
}

export interface ICarsRepository {
  list(): Promise<Car[]>;
  create(car: ICreateCarDTO): Promise<Car>;
  findById(id: string): Promise<Car>;
  findByLicensePlate(licensePlate: string): Promise<Car>;
  findAllAvailable(criteria?: ICarsCriteria): Promise<Car[]>;
}
