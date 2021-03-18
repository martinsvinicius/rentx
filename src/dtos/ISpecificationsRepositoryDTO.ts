import Specification from '../model/Specification';
import ICreateSpecificationDTO from './ICreateSpecificationDTO';

interface ISpecificationsRepositoryDTO {
  index(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification;
}

export default ISpecificationsRepositoryDTO;
