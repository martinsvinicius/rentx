import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import Category from '../model/Category';
import ICategoriesRepository from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    constructor() {
    	this.categories = [];
    }

    public index(): Category[] {
      return this.categories;
    }

    public create({ name, description }: ICreateCategoryDTO): Category {
    	const category = new Category();

    	Object.assign(category, {
    		name,
    		description,
    	});

    	this.categories.push(category);

    	return category;
    }

    public findByName(name: string): Category {
      const category = this.categories.find((category) =>
        category.name === name);

      return category;
    }
}

export default CategoriesRepository;