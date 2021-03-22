import ICreateSpecificationDTO from '../../dtos/ICreateSpecificationDTO';
import Specification from '../../model/Specification';
import ISpecificationsRepository from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  constructor(private specifications: Specification[] = []) {}

  public list(): Specification[] {
    return this.specifications;
  }

  public create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, { name, description });

    this.specifications.push(specification);

    return specification;
  }

  public findByName(name: string): Specification {
    const specification = this.specifications.find((specification) =>
      specification.name === name);

    return specification;
  }
}

export default SpecificationsRepository;
