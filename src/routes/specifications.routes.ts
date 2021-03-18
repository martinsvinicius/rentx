import { Router } from 'express';
import SpecificationsRepository from '../repositories/SpecificationsRepository';
import CreateSpecificationService from '../services/CreateSpecificationService';

const specificationsRouter = Router();

// Repository
const specificationsRepository = new SpecificationsRepository();

specificationsRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(specificationsRepository);

  const specification = createSpecificationService.execute({ name, description });

  return res.status(201).json(specification);
});

export default specificationsRouter;
