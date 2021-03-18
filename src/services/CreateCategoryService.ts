import ICategoriesRepositoryDTO from '../dtos/ICategoriesRepositoryDTO';
import Category from '../model/Category';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepositoryDTO) {}

  public execute({ name, description }: IRequest): Category {
    const categoryExists = this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new Error('Category already exists!');
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}

export default CreateCategoryService;
