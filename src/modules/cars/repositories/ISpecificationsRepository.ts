import ICreateSpecificationDTO from '../dtos/ICreateSpecificationDTO';
import Specification from '../entities/Specification';

interface ISpecificationsRepository {
  list(): Promise<Specification[]>;
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
}

export default ISpecificationsRepository;
