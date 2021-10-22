import { getRepository, Repository } from 'typeorm';
import ICreateSpecificationDTO from '@modules/cars/dtos/ICreateSpecificationDTO';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import ISpecificationsRepository from '@modules/cars/repositories/ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async list(): Promise<Specification[]> {
    return await this.repository.find();
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      name,
      description,
    });

    return await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    return await this.repository.findOne({
      where: { name },
    });
  }
}

export default SpecificationsRepository;
