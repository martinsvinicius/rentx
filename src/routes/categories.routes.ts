import { Router } from 'express';
import multer from 'multer';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import CreateCategoryController from '../modules/cars/useCases/createCategory/CreateCategoryController';

import ImportCategoryController from '../modules/cars/useCases/importCategory/ImportCategoryController';
import ListCategoriesController from '../modules/cars/useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.get('/', ensureAuthenticated, ListCategoriesController.handle);

categoriesRoutes.post('/', CreateCategoryController.handle);
categoriesRoutes.post('/import', upload.single('file'), ImportCategoryController.handle);

export { categoriesRoutes };
