import ISpecificationsRepositoryDTO from '../dtos/ISpecificationsRepositoryDTO';
import Specification from '../model/Specification';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepositoryDTO) {}

  execute({ name, description }: IRequest): Specification {
    const specificationExists = this.specificationsRepository.findByName(name);

    if (specificationExists) {
      throw new Error('Specification already exists!');
    }

    const specification = this.specificationsRepository.create({ name, description });

    return specification;
  }
}

export default CreateSpecificationService;
