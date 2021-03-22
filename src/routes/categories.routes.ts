import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();

categoriesRoutes.get('/', (_, res) => {
  const message = 'under development';
  return res.json({ message });
});

categoriesRoutes.post('/', (req, res) => {
  createCategoryController.handle(req, res);
});

export { categoriesRoutes };
