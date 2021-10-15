import { Router } from 'express';
import CreateSpecificationController from '../modules/cars/useCases/createSpecification/createSpecificationController';

const specificationsRouter = Router();

specificationsRouter.post('/', CreateSpecificationController.handle);

export default specificationsRouter;
