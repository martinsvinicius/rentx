import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListCategoriesUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  static async handle(req: Request, res: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const categories = await listCategoriesUseCase.execute();

    return res.json(categories);
  }
}

export default ListCategoriesController;
