import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import ICreateCategoryDTO from '@modules/cars/dtos/ICreateCategoryDTO';
import ICategoriesRepository from '../ICategoriesRepository';

class CategoriesRepositoryMock implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }

  async list(): Promise<Category[]> {
    const all = this.categories;
    return all;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories = [...this.categories, category];
    return category;
  }
}

export default CategoriesRepositoryMock;
