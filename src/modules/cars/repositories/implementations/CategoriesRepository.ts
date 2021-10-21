import { getRepository, Repository } from 'typeorm';
import ICreateCategoryDTO from '../../dtos/ICreateCategoryDTO';
import { Category } from '../../entities/Category';
import ICategoriesRepository from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async list(): Promise<Category[]> {
    return await this.repository.find();
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({
      description,
      name,
    });

    const createdCategory = await this.repository.save(category);

    return createdCategory;
  }

  async findByName(name: string): Promise<Category> {
    return await this.repository.findOne({
      where: { name },
    });
  }
}

export default CategoriesRepository;
