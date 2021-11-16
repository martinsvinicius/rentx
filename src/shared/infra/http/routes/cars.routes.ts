import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import CreateCarController from '@modules/cars/useCases/createCar/CreateCarController';

const carsRoutes = Router();

carsRoutes.post('/', ensureAuthenticated, CreateCarController.handle);

export { carsRoutes };
