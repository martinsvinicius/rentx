import { Request, Response } from 'express';
import CreateCategoryUseCase from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      const category = this.createCategoryUseCase.execute({ name, description });

      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default CreateCategoryController;
