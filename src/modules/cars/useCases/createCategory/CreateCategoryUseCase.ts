import Category from '../../entities/Category';
import ICategoriesRepository from '../../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  public execute({ name, description }: IRequest): Category {
    const categoryExists = this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new Error('Category already exists!');
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}

export default CreateCategoryUseCase;
