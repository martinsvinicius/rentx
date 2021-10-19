import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { specificationsRouter } from './specifications.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRouter);
router.use('/users', usersRouter);

export default router;
