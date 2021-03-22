import Category from '../../model/Category';
import ICategoriesRepository from '../../repositories/implementations/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  public execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export default ListCategoriesUseCase;
