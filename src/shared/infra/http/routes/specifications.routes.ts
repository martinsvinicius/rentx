import { Router } from 'express';
import CreateSpecificationController from '@modules/cars/useCases/createSpecification/createSpecificationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const specificationsRouter = Router();

specificationsRouter.use(ensureAuthenticated);

specificationsRouter.post(
  '/',
  ensureAdmin,
  CreateSpecificationController.handle
);

export { specificationsRouter };
