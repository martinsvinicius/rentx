import csvParse from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';
import CategoriesRepository from '../../repositories/implementations/CategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository
  ) {}

  async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];

      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<IImportCategory[]> {
    const categories = await this.loadCategories(file);

    const createdCategories: IImportCategory[] = [];

    categories.map(async (category) => {
      const { name, description } = category;

      const categoryExists = await this.categoriesRepository.findByName(name);

      if (!categoryExists) {
        const createdCategory = await this.categoriesRepository.create({
          name,
          description,
        });

        createdCategories.push(createdCategory);
      }
    });

    return createdCategories;
  }
}

export default ImportCategoryUseCase;
