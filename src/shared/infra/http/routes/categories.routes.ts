import { Router } from 'express';
import multer from 'multer';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import CreateCategoryController from '@modules/cars/useCases/createCategory/CreateCategoryController';

import ImportCategoryController from '@modules/cars/useCases/importCategory/ImportCategoryController';
import ListCategoriesController from '@modules/cars/useCases/listCategories/ListCategoriesController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.use(ensureAuthenticated);

categoriesRoutes.get('/', ListCategoriesController.handle);

categoriesRoutes.post('/', ensureAdmin, CreateCategoryController.handle);

categoriesRoutes.post(
  '/import',
  ensureAdmin,
  upload.single('file'),
  ImportCategoryController.handle
);

export { categoriesRoutes };
