import { Router } from 'express';
import multer from 'multer';
import CreateCategoryController from '../modules/cars/useCases/createCategory/CreateCategoryController';

import importCategoryController from '../modules/cars/useCases/importCategory';
import listCategoriesController from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.get('/', (req, res) =>
  listCategoriesController.handle(req, res)
);

categoriesRoutes.post('/', CreateCategoryController.handle);

categoriesRoutes.post('/import', upload.single('file'), (req, res) =>
  importCategoryController.handle(req, res)
);

export { categoriesRoutes };
