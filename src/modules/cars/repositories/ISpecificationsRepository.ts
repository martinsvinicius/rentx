import ICreateSpecificationDTO from '../dtos/ICreateSpecificationDTO';
import Specification from '../entities/Specification';

interface ISpecificationsRepository {
  list(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification;
}

export default ISpecificationsRepository;
