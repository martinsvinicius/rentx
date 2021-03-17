import Category from '../model/Category';

interface ICreateCategory {
	name: string;
	description: string;
}

class CategoriesRepository {
    private categories: Category[];

    constructor() {
    	this.categories = [];
    }

    public index(): Category[] {
      return this.categories;
    }

    public create({ name, description }: ICreateCategory): Category {
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
