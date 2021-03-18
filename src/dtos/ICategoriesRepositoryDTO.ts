import Category from '../model/Category';
import ICreateCategoryDTO from './ICreateCategoryDTO';

interface ICategoriesRepositoryDTO {
  index(): Category[];
  create({ name, description }: ICreateCategoryDTO): Category;
  findByName(name: string): Category;
}

export default ICategoriesRepositoryDTO;
