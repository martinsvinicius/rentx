import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import listCategoriesController from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.get('/', (req, res) => {
  listCategoriesController.handle(req, res);
});

categoriesRoutes.post('/', (req, res) => {
  createCategoryController.handle(req, res);
});

export { categoriesRoutes };
