import Category from '../../model/Category';
import ICategoriesRepository from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  public execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export default ListCategoriesUseCase;
