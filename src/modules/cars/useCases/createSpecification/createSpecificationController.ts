import { Request, Response } from 'express';
import CreateSpecificationUseCase from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    try {
      const specification = this.createSpecificationUseCase.execute({ name, description });

      return res.status(201).json(specification);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default CreateSpecificationController;
