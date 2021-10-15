import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ImportCategoryUseCase from './ImportCategoryUseCase';

class ImportCategoryController {
  static async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    const categories = await importCategoryUseCase.execute(file);

    return res.json(categories);
  }
}

export default ImportCategoryController;
