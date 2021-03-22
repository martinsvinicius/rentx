import ICreateSpecificationDTO from '../dtos/ICreateSpecificationDTO';
import Specification from '../model/Specification';

interface ISpecificationsRepository {
  index(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification;
}

export default ISpecificationsRepository;
