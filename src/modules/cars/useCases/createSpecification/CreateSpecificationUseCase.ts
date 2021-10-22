import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import ISpecificationsRepository from '@modules/cars/repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Specification> {
    const specificationExists = await this.specificationsRepository.findByName(
      name
    );

    if (specificationExists) {
      throw new AppError('Specification already exists!');
    }

    const specification = this.specificationsRepository.create({
      name,
      description,
    });

    return specification;
  }
}

export default CreateSpecificationUseCase;
