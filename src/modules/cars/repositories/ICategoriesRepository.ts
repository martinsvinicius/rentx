import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import Category from '../model/Category';

interface ICategoriesRepository {
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): Category;
  findByName(name: string): Category;
}

export default ICategoriesRepository;
