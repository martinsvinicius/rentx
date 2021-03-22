import { Router } from 'express';
import createSpecificationController from '../modules/cars/useCases/createSpecification';

const specificationsRouter = Router();

specificationsRouter.post('/', (req, res) => {
  createSpecificationController.handle(req, res);
});

export default specificationsRouter;
