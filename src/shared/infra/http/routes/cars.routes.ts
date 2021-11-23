import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import CreateCarController from '@modules/cars/useCases/createCar/CreateCarController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const carsRoutes = Router();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  CreateCarController.handle
);

export { carsRoutes };
